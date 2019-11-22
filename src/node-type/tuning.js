/**
 * Maps a MIDI note number to a frequency, using an equal temperament tuning.
 *
 * **Input (number)**
 * The MIDI note number to be mapped. Can be a fraction as well.
 *
 * **Output (number)**
 * The frequency in Hertz.
 *
 * **Config (Object)**
 * {
 *     - **baseFreq (number)**
 *
 *         Base frequency of the tuning, in Hertz. Default: 440
 *
 *     - **baseNote (number)**
 *
 *         Note number corresponding to the base frequency. Default: 69 (MIDI standard)
 *
 *     - **notesPerOctave (number)**
 *
 *         Values higher than 12 can be used to create microtonal tunings. Default: 12
 * }
 */
export const nodeType_tuning = {
    /**
     * @param {Object} [config]
     * @return {{noteToFreq(number): number, tick(): void, config: Object}} The created instance
     */
    create: (config) => ({
        config: Object.assign({
            baseFreq: 440,
            baseNote: 69,
            notesPerOctave: 12
        }, config ? config : {}),

        tick() {
            this.output = this.config.baseFreq * Math.pow(
                2,
                (this.input - this.config.baseNote) / this.config.notesPerOctave
            );
        },

        /**
         * Convenience function to ease usage of the node outside a sound module
         *
         * @param {number} note
         * @return {number}
         */
        noteToFreq(note) {
            this.input = note;
            this.tick();

            return this.output;
        }
    }),

    /**
     * @param {number} cents
     * @return {number}
     */
    centsToRatio(cents) {
        return Math.pow(
            2,
            cents / 1200
        );
    }
};
