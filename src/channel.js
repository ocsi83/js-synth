import {nodeType_base} from "./mixin/base";

let nodeKeyCache;

export const channel = {
    create: (config, messageQueue) => ({
        nodeArray: Object.values(config.nodes).map((nodeDef, nodeIndex) => {
            if (0 === nodeIndex) {
                nodeKeyCache = Object.keys(config.nodes);
            }

            return {
                name: nodeKeyCache[nodeIndex],
                node: (({type, config: nodeConfig}) => ({
                    ...nodeType_base.create(),
                    ...self.registry['nodeType_' + type.charAt(0).toLowerCase() + type.slice(1)].create(nodeConfig)
                }))(nodeDef),
                routing: (Array.isArray(nodeDef.routing)
                        ? nodeDef.routing
                        : undefined !== nodeDef.routing ? [nodeDef.routing] : []
                ).map((targetPath) => {
                    const targetParts = targetPath.split('.');
                    return {
                        nodeIndex: nodeKeyCache.findIndex(key => key === targetParts[0]),
                        inputName: targetParts[1]
                    };
                })
            };
        }),

        messageQueue: messageQueue,

        isActive: false,

        startTime: null,

        handlerCount: 0,

        handleMessage(message, time, deactivateCallback) {
            const checkZeroHandlers = () => {
                if (this.handlerCount <= 0) {
                    this.isActive = false;

                    if (deactivateCallback) {
                        deactivateCallback();
                    }
                }
            };

            switch (message.message) {
                case 'note_on':
                    this.nodeArray[0].node.setInput(message.param);
                    this.startTime = time;
                    this.isActive = true;
                    break;
                case 'note_off':
                    checkZeroHandlers();
            }

            // propagate message to child nodes and provide a deactivate callback
            this.handlerCount = 0;
            this.nodeArray.forEach(node => {
                if (node.node.handleMessage) {
                    this.handlerCount++;

                    node.node.handleMessage(message, time - this.startTime, () => {
                        this.handlerCount--;
                        checkZeroHandlers();
                    });
                }
            });
        },

        checkMessageQueue(time) {
            if (undefined === this.messageQueue) {
                return;
            }

            this.messageQueue.forEach(message => {
                this.handleMessage(message, time);
            });

            this.messageQueue.length = 0;
        },

        tick(time) {
            this.checkMessageQueue(time);

            if (!this.isActive) {
                return;
            }

            // reset all nodes
            this.nodeArray.forEach(node => {
                if (node.node.reset) {
                    node.node.reset();
                }
            });

            // tick each node and route their outputs
            const currentTime = time - this.startTime;
            this.nodeArray.forEach(node => {
                node.node.tick(currentTime);

                node.routing.forEach(target => {
                    this.nodeArray[target.nodeIndex].node.setInput(node.node.getOutput(), target.inputName);
                });
            }, this);
        },

        getOutput() {
            if (!this.isActive) {
                return 0;
            }

            return this.nodeArray[this.nodeArray.length - 1].node.getOutput();
        }
    })
};
