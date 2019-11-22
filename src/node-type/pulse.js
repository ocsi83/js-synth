export const nodeType_pulse = {
    create: (config) => ({
        input: Object.assign({
            freq: 0,
            dutyCycle: 0.5
        }, config ? config : {}),

        tick(time) {
            const phase = (time * this.input.freq) % 1;
            this.output = phase < this.input.dutyCycle ? 1 : -1;
        }
    })
};
