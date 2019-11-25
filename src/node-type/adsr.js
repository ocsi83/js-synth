export const nodeType_adsr = {
    create: (config) => ({
        input: Object.assign({
            signal: 0,
            attack: 0,
            decay: 0,
            sustain: 1,
            release: 0,
            enableSustain: true
        }, config ? config : {}),

        deactivateCallback: null,

        // can be 'on' or 'off'
        mode: null,

        releaseTime: null,

        handleMessage(message, time, deactivateCallback) {
            this.deactivateCallback = deactivateCallback;

            switch (message.message) {
                case 'note_on':
                    this.releaseTime = this.input.enableSustain ? null : time;
                    this.mode = this.input.enableSustain ? 'on' : 'off';
                    break;
                case 'note_off':
                    if ('off' !== this.mode) {
                        this.mode = 'off';
                        this.releaseTime = time;
                    }
            }
        },

        tick(time) {
            const level = time < this.input.attack
                // attack phase
                ? time / this.input.attack
                : time < this.input.attack + this.input.decay
                    // decay phase
                    ? 1 - ((time - this.input.attack) / this.input.decay) * (1 - this.input.sustain)
                    // sustain phase
                    : 'on' === this.mode
                        ? this.input.sustain
                        // release phase
                        : 0 !== this.input.release
                            ? Math.max(
                                0,
                                (1 - ((time - this.releaseTime) / this.input.release)) * this.input.sustain
                            )
                            : 0;

            this.output = this.input.signal * level;

            if (
                null !== this.releaseTime
                && time >= this.releaseTime + this.input.release
                && this.deactivateCallback
            ) {
                this.deactivateCallback();
            }
        }
    })
};
