export const nodeType_multiplier = {
    create: (config) => ({
        defaultInput: undefined !== config ? config : [],

        tick() {
            this.output = this.input.reduce((product, current) => product * current, 1);
        },

        reset() {
            this.input = [...this.defaultInput];
        }
    })
};
