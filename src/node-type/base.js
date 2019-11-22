export const nodeType_base = {
    create: () => ({
        setInput(value, name) {
            if (Array.isArray(this.input)) {
                this.input.push(value);
            } else if (undefined !== name) {
                this.input[name] = value;
            } else {
                this.input = value;
            }
        },

        getOutput() {
            return this.output;
        }
    })
};
