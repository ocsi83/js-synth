import {nodeType_base} from "./base";

let configKeyCache;

export const nodeType_soundModule = {
    create: (config, messageQueue) => ({
        nodeArray: Object.values(config).map(function (nodeDef, index) {
            if (0 === index) {
                configKeyCache = Object.keys(config);
            }

            return {
                name: configKeyCache[index],
                node: function ({type, config}) {
                    return {
                        ...nodeType_base.create(),
                        ...window.registry['nodeType_' + type.charAt(0).toLowerCase() + type.slice(1)].create(config)
                    };
                }(nodeDef),
                routing: (Array.isArray(nodeDef.routing)
                        ? nodeDef.routing
                        : undefined !== nodeDef.routing ? [nodeDef.routing] : []
                ).map((targetPath) => {
                    const targetParts = targetPath.split('.');
                    return {
                        nodeIndex: configKeyCache.findIndex(key => key === targetParts[0]),
                        inputName: targetParts[1]
                    };
                })
            };
        }),

        messageQueue: messageQueue,

        active: false,

        startTime: null,

        handlerCount: 0,

        handleMessage(message, time) {
            switch (message.message) {
                case 'note_on':
                    this.nodeArray[0].node.setInput(message.param);
                    this.startTime = time;
                    this.active = true;
                    break;
                case 'note_off':
                    if (this.handlerCount <= 0) {
                        this.active = false;
                    }
            }

            // propagate message to child nodes and provide a deactivate callback
            this.handlerCount = 0;
            this.nodeArray.forEach(nodeDef => {
                if (nodeDef.node.handleMessage) {
                    nodeDef.node.handleMessage(message, time - this.startTime, () => {
                        this.handlerCount--;
                        if (this.handlerCount <= 0) {
                            this.active = false;
                        }
                    });
                    this.handlerCount++;
                }
            });

        },

        tick(time) {
            this.checkMessageQueue(time);

            if (!this.active) {
                return;
            }

            // reset all nodes
            this.nodeArray.forEach(nodeDef => {
                if (nodeDef.node.reset) {
                    nodeDef.node.reset();
                }
            });

            // tick each node and route their outputs
            const currentTime = time - this.startTime;
            this.nodeArray.forEach(nodeDef => {
                nodeDef.node.tick(currentTime);

                nodeDef.routing.forEach(target => {
                    this.nodeArray[target.nodeIndex].node.setInput(nodeDef.node.getOutput(), target.inputName);
                });
            }, this);
        },

        setInput(value) {
            this.nodeArray[0].node.setInput(value);
        },

        getOutput() {
            if (!this.active) {
                return 0;
            }

            const output = this.nodeArray[this.nodeArray.length - 1].node.getOutput();
            return output > 1 ? 1 : output < -1 ? -1 : output;
        },

        checkMessageQueue(time) {
            if (undefined === this.messageQueue) {
                this.active = true;

                return;
            }

            this.messageQueue.forEach(message => {
                this.handleMessage(message, time);
            });

            this.messageQueue.length = 0;
        }
    })
};
