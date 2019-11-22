export const nodeType_saw = {
    create: (config) => ({
        input: Object.assign({
            freq: 0
        }, config ? config : {}),

        tick(time) {
            const phase = (time * this.input.freq) % 1;
            this.output = phase * 2 - 1;
        }
    })
};
