export const nodeType_divider = {
    create: (config) => ({
        input: Object.assign({
            dividend: 0,
            divisor: 1
        }, config ? config : {}),

        tick() {
            this.output = this.input.dividend / this.input.divisor;
        }
    })
};
