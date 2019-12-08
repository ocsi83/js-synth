import cloneDeep from 'lodash.clonedeep';
import {channel} from "./channel";

export const soundModule = {
    create: (config, messageQueue) => ({
        channels: (config => {
            const nodes = [channel.create(config)];
            const polyphony = undefined !== config.polyphony ? parseInt(config.polyphony) : 16;

            for (let i = 1; i < polyphony; i++) {
                nodes.push(cloneDeep(nodes[0]));
            }

            return nodes;
        })(config),

        messageQueue: messageQueue,

        activeChannelCount: 0,

        channelNotes: [],

        channelStartTimes: [],

        handleMessage(message, time) {
            const onDeactivate = (channelIndex) => {
                this.activeChannelCount--;
                this.channelNotes[channelIndex] = null;
            };

            switch (message.message) {
                case 'note_on':
                    let firstFreeChannel = null;
                    for (const channelIndex in this.channels) {
                        if (!this.channels[channelIndex].isActive) {
                            firstFreeChannel = channelIndex;
                            break;
                        }
                    }
                    if (null === firstFreeChannel) {
                        firstFreeChannel = this.channelStartTimes.indexOf(Math.min(...this.channelStartTimes));
                        onDeactivate(firstFreeChannel);
                    }

                    this.channelNotes[firstFreeChannel] = message.param;
                    this.channelStartTimes[firstFreeChannel] = time;

                    this.activeChannelCount++;

                    this.channels[firstFreeChannel].handleMessage(message, time, () => {
                        onDeactivate(firstFreeChannel);
                    });
                    break;
                case 'note_off':
                    this.channelNotes.forEach((note, channelIndex) => {
                        if (note === message.param) {
                            this.channels[channelIndex].handleMessage(message, time, () => {
                                onDeactivate(channelIndex);
                            });
                        }
                    });
            }
        },

        checkMessageQueue(time) {
            this.messageQueue.forEach(message => {
                this.handleMessage(message, time);
            });

            this.messageQueue.length = 0;
        },

        tick(time) {
            this.checkMessageQueue(time);

            if (0 >= this.activeChannelCount) {
                return;
            }

            this.channels.forEach(channel => {
                if (channel.isActive) {
                    channel.tick(time);
                }
            });
        },

        getOutput() {
            return this.channels.reduce((output, channel) => output + channel.getOutput(), 0);
        }
    })
};
