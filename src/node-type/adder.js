export const nodeType_adder = {
    create: (config) => ({
        defaultInput: undefined !== config ? config : [],

        tick() {
            this.output = this.input.reduce((sum, current) => sum + current, 0);
        },

        reset() {
            this.input = [...this.defaultInput];
        }
    })
};
