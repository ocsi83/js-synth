var jsSynth=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const i={KeyZ:0,KeyS:1,KeyX:2,KeyD:3,KeyC:4,KeyV:5,KeyG:6,KeyB:7,KeyH:8,KeyN:9,KeyJ:10,KeyM:11,Comma:12,KeyL:13,Period:14,Semicolon:15,Slash:16,KeyQ:12,Digit2:13,KeyW:14,Digit3:15,KeyE:16,KeyR:17,Digit5:18,KeyT:19,Digit6:20,KeyY:21,Digit7:22,KeyU:23,KeyI:24,Digit9:25,KeyO:26,Digit0:27,KeyP:28,BracketLeft:29,Equal:30,BracketRight:31};const s={detunedSaw:{tuning:{type:"Tuning",routing:["detuner","saw1.freq"]},detuner:{type:"Multiplier",config:[n(12).nodeType_tuning.centsToRatio(12.5)],routing:"saw2.freq"},saw1:{type:"Saw",routing:"mixer"},saw2:{type:"Saw",routing:"mixer"},mixer:{type:"Mixer",routing:"adsr.signal"},adsr:{type:"Adsr",config:{attack:.015,decay:.01,sustain:.75,release:.4,sustainMode:!0}}},hammond:{tuning:{type:"Tuning",routing:["harmonic1","harmonic2","sine1.freq"]},harmonic1:{type:"Multiplier",config:[2],routing:"sine2.freq"},harmonic2:{type:"Multiplier",config:[3],routing:"sine3.freq"},sine1:{type:"Sine",routing:"mixer"},sine2:{type:"Sine",routing:"mixer"},sine3:{type:"Sine",routing:"mixer"},mixer:{type:"Mixer",routing:"adsr.signal"},adsr:{type:"Adsr",config:{attack:.2,decay:0,sustain:1,release:.5,sustainMode:!0}}},pwm:{tuning:{type:"Tuning",routing:"pulse.freq"},lfo:{type:"Sine",config:{freq:4},routing:"divider.dividend"},divider:{type:"Divider",config:{divisor:10},routing:"adder"},adder:{type:"Adder",config:[.5],routing:"pulse.dutyCycle"},pulse:{type:"Pulse"}}};n.d(e,"getPresets",(function(){return p})),n.d(e,"selectPreset",(function(){return h})),n.d(e,"setMasterVolume",(function(){return f})),n.d(e,"attachKeyboard",(function(){return l})),n.d(e,"start",(function(){return y})),window.registry={};const r=n(1);r.keys().forEach(t=>{const e=r(t);Object.keys(e).forEach(t=>{window.registry[t]=e[t]})});const u=new window.AudioContext,o=[],a=t=>window.registry.nodeType_soundModule.create(t,o);let c,d;function p(){return s}function h(t){c=a(s[t])}function f(t){d=t}function l(){let t=4,e={};document.onkeydown=function(n){const s=n.code,r=i[s],a=s.match(/^Numpad([0-9])$/);if(a&&(t=a[1]),void 0===r||e[s])return;e[s]=!0;const c=12*t+r;o.push({message:"note_on",param:c}),"suspended"===u.state&&u.resume()},document.onkeyup=function(n){const s=n.code,r=i[s];if(void 0===r)return;e[n.code]=!1;const u=12*t+r;o.push({message:"note_off",param:u})}}function y(){const t=u.createScriptProcessor(0,1,1);let e=0;t.onaudioprocess=function(t){const n=t.outputBuffer.getChannelData(0),i=n.length;for(let t=0;t<i;t++){const i=e/u.sampleRate;c.tick(i),n[t]=c.getOutput()*d,e++}},t.connect(u.destination)}},function(t,e,n){var i={"./adder.js":2,"./adsr.js":3,"./base.js":4,"./divider.js":5,"./mixer.js":6,"./multiplier.js":7,"./pulse.js":8,"./saw.js":9,"./sine.js":10,"./sound-module.js":11,"./tuning.js":12};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id=1},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_adder",(function(){return i}));const i={create:t=>({defaultInput:void 0!==t?t:[],tick(){this.output=this.input.reduce((t,e)=>t+e,0)},reset(){this.input=[...this.defaultInput]}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_adsr",(function(){return i}));const i={create:t=>({input:Object.assign({signal:0,attack:0,decay:0,sustain:1,release:0,sustainMode:!0},t||{}),deactivateCallback:null,mode:null,releaseTime:null,handleMessage(t,e,n){switch(this.deactivateCallback=n,t.message){case"note_on":this.releaseTime=this.input.sustainMode?null:e,this.mode=this.input.sustainMode?"on":"off";break;case"note_off":if(!this.input.sustainMode)break;this.mode="off",this.releaseTime=e}},tick(t){const e=t<this.input.attack?t/this.input.attack:t<this.input.attack+this.input.decay?1-(t-this.input.attack)/this.input.decay*(1-this.input.sustain):"on"===this.mode?this.input.sustain:0!==this.input.release?Math.max(0,(1-(t-this.releaseTime)/this.input.release)*this.input.sustain):0;this.output=this.input.signal*e,null!==this.releaseTime&&t>=this.releaseTime+this.input.release&&this.deactivateCallback&&this.deactivateCallback()}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_base",(function(){return i}));const i={create:()=>({setInput(t,e){Array.isArray(this.input)?this.input.push(t):void 0!==e?this.input[e]=t:this.input=t},getOutput(){return this.output}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_divider",(function(){return i}));const i={create:t=>({input:Object.assign({dividend:0,divisor:1},t||{}),tick(){this.output=this.input.dividend/this.input.divisor}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_mixer",(function(){return i}));const i={create:t=>({defaultInput:void 0!==t?t:[],tick(){this.output=this.input.reduce((t,e)=>t+e,0)/this.input.length},reset(){this.input=[...this.defaultInput]}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_multiplier",(function(){return i}));const i={create:t=>({defaultInput:void 0!==t?t:[],tick(){this.output=this.input.reduce((t,e)=>t*e,1)},reset(){this.input=[...this.defaultInput]}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_pulse",(function(){return i}));const i={create:t=>({input:Object.assign({freq:0,dutyCycle:.5},t||{}),tick(t){const e=t*this.input.freq%1;this.output=e<this.input.dutyCycle?1:-1}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_saw",(function(){return i}));const i={create:t=>({input:Object.assign({freq:0},t||{}),tick(t){const e=t*this.input.freq%1;this.output=2*e-1}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_sine",(function(){return i}));const i={create:t=>({input:Object.assign({freq:0},t||{}),tick(t){const e=t*this.input.freq%1;this.output=Math.sin(e*(2*Math.PI))}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_soundModule",(function(){return r}));var i=n(4);let s;const r={create:(t,e)=>({nodeArray:Object.values(t).map((function(e,n){return 0===n&&(s=Object.keys(t)),{name:s[n],node:function({type:t,config:e}){return{...i.nodeType_base.create(),...window.registry["nodeType_"+t.charAt(0).toLowerCase()+t.slice(1)].create(e)}}(e),routing:(Array.isArray(e.routing)?e.routing:void 0!==e.routing?[e.routing]:[]).map(t=>{const e=t.split(".");return{nodeIndex:s.findIndex(t=>t===e[0]),inputName:e[1]}})}})),messageQueue:e,active:!1,startTime:null,handlerCount:0,handleMessage(t,e){switch(t.message){case"note_on":this.nodeArray[0].node.setInput(t.param),this.startTime=e,this.active=!0;break;case"note_off":this.handlerCount<=0&&(this.active=!1)}this.handlerCount=0,this.nodeArray.forEach(n=>{n.node.handleMessage&&(n.node.handleMessage(t,e-this.startTime,()=>{this.handlerCount--,this.handlerCount<=0&&(this.active=!1)}),this.handlerCount++)})},tick(t){if(this.checkMessageQueue(t),!this.active)return;this.nodeArray.forEach(t=>{t.node.reset&&t.node.reset()});const e=t-this.startTime;this.nodeArray.forEach(t=>{t.node.tick(e),t.routing.forEach(e=>{this.nodeArray[e.nodeIndex].node.setInput(t.node.getOutput(),e.inputName)})},this)},setInput(t){this.nodeArray[0].node.setInput(t)},getOutput(){if(!this.active)return 0;const t=this.nodeArray[this.nodeArray.length-1].node.getOutput();return t>1?1:t<-1?-1:t},checkMessageQueue(t){void 0!==this.messageQueue?(this.messageQueue.forEach(e=>{this.handleMessage(e,t)}),this.messageQueue.length=0):this.active=!0}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_tuning",(function(){return i}));const i={create:t=>({config:Object.assign({baseFreq:440,baseNote:69,notesPerOctave:12},t||{}),tick(){this.output=this.config.baseFreq*Math.pow(2,(this.input-this.config.baseNote)/this.config.notesPerOctave)},noteToFreq(t){return this.input=t,this.tick(),this.output}}),centsToRatio:t=>Math.pow(2,t/1200)}}]);