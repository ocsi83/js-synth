import {nodeType_tuning} from './node-type/tuning';

export const presets = {
    detunedSaw: {
        nodes: {
            tuning: {
                type: 'Tuning',
                routing: [
                    'detuner1',
                    'detuner2'
                ],
            },
            detuner1: {
                type: 'Multiplier',
                config: [
                    nodeType_tuning.centsToRatio(-6.25)
                ],
                routing: 'saw1.freq'
            },
            detuner2: {
                type: 'Multiplier',
                config: [
                    nodeType_tuning.centsToRatio(6.25)
                ],
                routing: 'saw2.freq'
            },
            saw1: {
                type: 'Saw',
                routing: 'mixer'
            },
            saw2: {
                type: 'Saw',
                routing: 'mixer'
            },
            mixer: {
                type: 'Mixer',
                routing: 'adsr.signal'
            },
            adsr: {
                type: 'Adsr',
                config: {
                    attack: 0.015,
                    decay: 0.01,
                    sustain: 0.75,
                    release: 0.5,
                    enableSustain: true
                }
            }
        }
    },
    detunedPulse: {
        nodes: {
            tuning: {
                type: 'Tuning',
                routing: [
                    'detuner1',
                    'detuner2'
                ],
            },
            detuner1: {
                type: 'Multiplier',
                config: [
                    nodeType_tuning.centsToRatio(-6.25)
                ],
                routing: 'pulse1.freq'
            },
            detuner2: {
                type: 'Multiplier',
                config: [
                    nodeType_tuning.centsToRatio(6.25)
                ],
                routing: 'pulse2.freq'
            },
            pulse1: {
                type: 'Pulse',
                routing: 'mixer'
            },
            pulse2: {
                type: 'Pulse',
                routing: 'mixer'
            },
            mixer: {
                type: 'Mixer',
                routing: 'adsr.signal'
            },
            adsr: {
                type: 'Adsr',
                config: {
                    attack: 0.015,
                    decay: 0.01,
                    sustain: 0.75,
                    release: 0.8,
                    enableSustain: true
                }
            }
        }
    },
    hammond: {
        nodes: {
            tuning: {
                type: 'Tuning',
                routing: [
                    'harmonic1',
                    'harmonic2',
                    'sine1.freq'
                ]
            },
            harmonic1: {
                type: 'Multiplier',
                config: [
                    2
                ],
                routing: 'sine2.freq',
            },
            harmonic2: {
                type: 'Multiplier',
                config: [
                    3
                ],
                routing: 'sine3.freq',
            },
            sine1: {
                type: 'Sine',
                routing: 'mixer'
            },
            sine2: {
                type: 'Sine',
                routing: 'mixer'
            },
            sine3: {
                type: 'Sine',
                routing: 'mixer'
            },
            mixer: {
                type: 'Mixer',
                routing: 'adsr.signal'
            },
            adsr: {
                type: 'Adsr',
                config: {
                    attack: 0.2,
                    decay: 0.0,
                    sustain: 1,
                    release: 1,
                    enableSustain: true
                }
            }
        }
    },
    pwm: {
        nodes: {
            tuning: {
                type: 'Tuning',
                routing: 'pulse.freq'
            },
            lfo: {
                type: 'Sine',
                config: {
                    freq: 4
                },
                routing: 'divider.dividend'
            },
            divider: {
                type: 'Divider',
                config: {
                    divisor: 10
                },
                routing: 'adder'
            },
            adder: {
                type: 'Adder',
                config: [
                    0.5
                ],
                routing: 'pulse.dutyCycle'
            },
            pulse: {
                type: 'Pulse'
            }
        }
    }
};
