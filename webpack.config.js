const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js-synth.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'jsSynth'
    },
    watch: true,
    mode: 'production'
};

