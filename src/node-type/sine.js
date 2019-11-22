export const nodeType_sine = {
    create: (config) => ({
        input: Object.assign({
            freq: 0
        }, config ? config : {}),

        tick(time) {
            const phase = (time * this.input.freq) % 1;
            this.output = Math.sin(phase * (2 * Math.PI));
        }
    })
};
