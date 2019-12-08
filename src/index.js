import {keymap} from './keymap';
import {presets} from './presets'
import {soundModule} from './sound-module';

self.registry = {};
const req = require.context('./node-type', true,  /\.js$/);
req.keys().forEach(file => {
    const module = req(file);
    Object.keys(module).forEach(key => {
        self.registry[key] = module[key];
    });
});

const
    audioContext = new self.AudioContext(),
    messageQueue = [];

let
    currentModule,
    masterVolume;

export function getPresets() {
    return presets;
}

export function selectPreset(preset) {
    currentModule = soundModule.create(presets[preset], messageQueue);
}

/**
 * @param {number} volume Between 0 and 1 inclusive, 0 = silence, 1 = max volume
 */
export function setMasterVolume(volume) {
    masterVolume = volume;
}

export function attachKeyboard() {
    let
        octave = 4,
        pressedKeys = {};

    document.onkeydown = function (e) {
        const
            keyCode = e.code,
            relativeNote = keymap[keyCode];

        // octave shift
        const numpadRegexMatch = keyCode.match(/^Numpad([0-9])$/);
        if (numpadRegexMatch) {
            octave = numpadRegexMatch[1];
        }

        if (undefined === relativeNote || pressedKeys[keyCode]) {
            return;
        }

        pressedKeys[keyCode] = true;

        const note = octave * 12 + relativeNote;
        messageQueue.push({
            message: 'note_on',
            param: note
        });

        if ('suspended' === audioContext.state) {
            audioContext.resume();
        }
    };

    document.onkeyup = function (e) {
        const
            keyCode = e.code,
            relativeNote = keymap[keyCode];

        if (undefined === relativeNote) {
            return;
        }

        pressedKeys[e.code] = false;

        const note = octave * 12 + relativeNote;
        messageQueue.push({
            message: 'note_off',
            param: note
        });
    };
}

export function start() {
    const processor = audioContext.createScriptProcessor(0, 1, 1);

    let sampleIndex = 0;

    processor.onaudioprocess = function (e) {
        const
            output = e.outputBuffer.getChannelData(0),
            outputLength = output.length;

        for (let i = 0; i < outputLength; i++) {
            const time = sampleIndex / audioContext.sampleRate;
            currentModule.tick(time);
            const sample = currentModule.getOutput() * masterVolume;
            output[i] = sample > 1 ? 1 : sample < -1 ? -1 : sample;

            sampleIndex++;
        }
    };

    processor.connect(audioContext.destination);
}
