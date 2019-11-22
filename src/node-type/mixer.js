export const nodeType_mixer = {
    create: (config) => ({
        defaultInput: undefined !== config ? config : [],

        tick() {
            this.output = this.input.reduce((sum, current) => sum + current, 0) / this.input.length;
        },

        reset() {
            this.input = [...this.defaultInput];
        }
    })
};
