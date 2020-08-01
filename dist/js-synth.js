var jsSynth=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_tuning",(function(){return r}));const r={create:t=>({config:Object.assign({baseFreq:440,baseNote:69,notesPerOctave:12},t||{}),tick(){this.output=this.config.baseFreq*Math.pow(2,(this.input-this.config.baseNote)/this.config.notesPerOctave)},noteToFreq(t){return this.input=t,this.tick(),this.output}}),centsToRatio:t=>Math.pow(2,t/1200)}},function(t,e,n){(function(t,n){var r=200,i="__lodash_hash_undefined__",o=9007199254740991,u="[object Arguments]",s="[object Boolean]",a="[object Date]",c="[object Function]",f="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",d="[object RegExp]",y="[object Set]",g="[object String]",v="[object Symbol]",_="[object ArrayBuffer]",b="[object DataView]",m="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",k="[object Int32Array]",A="[object Uint8Array]",T="[object Uint8ClampedArray]",M="[object Uint16Array]",x="[object Uint32Array]",S=/\w*$/,P=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,K={};K[u]=K["[object Array]"]=K[_]=K[b]=K[s]=K[a]=K[m]=K[j]=K[w]=K[O]=K[k]=K[l]=K[h]=K[p]=K[d]=K[y]=K[g]=K[v]=K[A]=K[T]=K[M]=K[x]=!0,K["[object Error]"]=K[c]=K["[object WeakMap]"]=!1;var I="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,q=I||E||Function("return this")(),D=e&&!e.nodeType&&e,N=D&&"object"==typeof n&&n&&!n.nodeType&&n,Q=N&&N.exports===D;function F(t,e){return t.set(e[0],e[1]),t}function R(t,e){return t.add(e),t}function B(t,e,n,r){var i=-1,o=t?t.length:0;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function $(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function U(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function L(t,e){return function(n){return t(e(n))}}function W(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var V,z=Array.prototype,G=Function.prototype,H=Object.prototype,J=q["__core-js_shared__"],X=(V=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=G.toString,Z=H.hasOwnProperty,tt=H.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=Q?q.Buffer:void 0,rt=q.Symbol,it=q.Uint8Array,ot=L(Object.getPrototypeOf,Object),ut=Object.create,st=H.propertyIsEnumerable,at=z.splice,ct=Object.getOwnPropertySymbols,ft=nt?nt.isBuffer:void 0,lt=L(Object.keys,Object),ht=Nt(q,"DataView"),pt=Nt(q,"Map"),dt=Nt(q,"Promise"),yt=Nt(q,"Set"),gt=Nt(q,"WeakMap"),vt=Nt(Object,"create"),_t=$t(ht),bt=$t(pt),mt=$t(dt),jt=$t(yt),wt=$t(gt),Ot=rt?rt.prototype:void 0,kt=Ot?Ot.valueOf:void 0;function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Mt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){this.__data__=new Tt(t)}function St(t,e){var n=Lt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Wt(t)}(t)&&Z.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==u)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var o in t)!e&&!Z.call(t,o)||i&&("length"==o||Rt(o,r))||n.push(o);return n}function Pt(t,e,n){var r=t[e];Z.call(t,e)&&Ut(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Ct(t,e){for(var n=t.length;n--;)if(Ut(t[n][0],e))return n;return-1}function Kt(t,e,n,r,i,o,P){var C;if(r&&(C=o?r(t,i,o,P):r(t)),void 0!==C)return C;if(!Gt(t))return t;var I=Lt(t);if(I){if(C=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,C)}else{var E=Ft(t),q=E==c||E==f;if(Vt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(E==p||E==u||q&&!o){if($(t))return o?t:{};if(C=function(t){return"function"!=typeof t.constructor||Bt(t)?{}:(e=ot(t),Gt(e)?ut(e):{});var e}(q?{}:t),!e)return function(t,e){return qt(t,Qt(t),e)}(t,function(t,e){return t&&qt(e,Ht(e),t)}(C,t))}else{if(!K[E])return o?t:{};C=function(t,e,n,r){var i=t.constructor;switch(e){case _:return Et(t);case s:case a:return new i(+t);case b:return function(t,e){var n=e?Et(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case m:case j:case w:case O:case k:case A:case T:case M:case x:return function(t,e){var n=e?Et(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case l:return function(t,e,n){return B(e?n(U(t),!0):U(t),F,new t.constructor)}(t,r,n);case h:case g:return new i(t);case d:return(c=new(u=t).constructor(u.source,S.exec(u))).lastIndex=u.lastIndex,c;case y:return function(t,e,n){return B(e?n(W(t),!0):W(t),R,new t.constructor)}(t,r,n);case v:return o=t,kt?Object(kt.call(o)):{}}var o;var u,c}(t,E,Kt,e)}}P||(P=new xt);var D=P.get(t);if(D)return D;if(P.set(t,C),!I)var N=n?function(t){return function(t,e,n){var r=e(t);return Lt(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Ht,Qt)}(t):Ht(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(N||t,(function(i,o){N&&(i=t[o=i]),Pt(C,o,Kt(i,e,n,r,o,t,P))})),C}function It(t){return!(!Gt(t)||(e=t,X&&X in e))&&(zt(t)||$(t)?et:P).test($t(t));var e}function Et(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function qt(t,e,n,r){n||(n={});for(var i=-1,o=e.length;++i<o;){var u=e[i],s=r?r(n[u],t[u],u,n,t):void 0;Pt(n,u,void 0===s?t[u]:s)}return n}function Dt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Nt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return It(n)?n:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(vt){var n=e[t];return n===i?void 0:n}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?i:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,n=Ct(e,t);return!(n<0)&&(n==e.length-1?e.pop():at.call(e,n,1),!0)},Tt.prototype.get=function(t){var e=this.__data__,n=Ct(e,t);return n<0?void 0:e[n][1]},Tt.prototype.has=function(t){return Ct(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var n=this.__data__,r=Ct(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Mt.prototype.clear=function(){this.__data__={hash:new At,map:new(pt||Tt),string:new At}},Mt.prototype.delete=function(t){return Dt(this,t).delete(t)},Mt.prototype.get=function(t){return Dt(this,t).get(t)},Mt.prototype.has=function(t){return Dt(this,t).has(t)},Mt.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},xt.prototype.clear=function(){this.__data__=new Tt},xt.prototype.delete=function(t){return this.__data__.delete(t)},xt.prototype.get=function(t){return this.__data__.get(t)},xt.prototype.has=function(t){return this.__data__.has(t)},xt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Tt){var i=n.__data__;if(!pt||i.length<r-1)return i.push([t,e]),this;n=this.__data__=new Mt(i)}return n.set(t,e),this};var Qt=ct?L(ct,Object):function(){return[]},Ft=function(t){return tt.call(t)};function Rt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<e}function Bt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||H)}function $t(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,e){return t===e||t!=t&&e!=e}(ht&&Ft(new ht(new ArrayBuffer(1)))!=b||pt&&Ft(new pt)!=l||dt&&"[object Promise]"!=Ft(dt.resolve())||yt&&Ft(new yt)!=y||gt&&"[object WeakMap]"!=Ft(new gt))&&(Ft=function(t){var e=tt.call(t),n=e==p?t.constructor:void 0,r=n?$t(n):void 0;if(r)switch(r){case _t:return b;case bt:return l;case mt:return"[object Promise]";case jt:return y;case wt:return"[object WeakMap]"}return e});var Lt=Array.isArray;function Wt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!zt(t)}var Vt=ft||function(){return!1};function zt(t){var e=Gt(t)?tt.call(t):"";return e==c||e==f}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ht(t){return Wt(t)?St(t):function(t){if(!Bt(t))return lt(t);var e=[];for(var n in Object(t))Z.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}n.exports=function(t){return Kt(t,!0,!0)}}).call(this,n(2),n(3)(t))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r={"./adder.js":5,"./adsr.js":6,"./divider.js":7,"./mixer.js":8,"./multiplier.js":9,"./pulse.js":10,"./saw.js":11,"./sine.js":12,"./tuning.js":0};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=4},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_adder",(function(){return r}));const r={create:t=>({defaultInput:void 0!==t?t:[],tick(){this.output=this.input.reduce((t,e)=>t+e,0)},reset(){this.input=[...this.defaultInput]}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_adsr",(function(){return r}));const r={create:t=>({input:Object.assign({signal:0,attack:0,decay:0,sustain:1,release:0,enableSustain:!0},t||{}),deactivateCallback:null,mode:null,releaseTime:null,handleMessage(t,e,n){switch(this.deactivateCallback=n,t.message){case"note_on":this.releaseTime=this.input.enableSustain?null:e,this.mode=this.input.enableSustain?"on":"off";break;case"note_off":"off"!==this.mode&&(this.mode="off",this.releaseTime=e)}},tick(t){const e=t<this.input.attack?t/this.input.attack:t<this.input.attack+this.input.decay?1-(t-this.input.attack)/this.input.decay*(1-this.input.sustain):"on"===this.mode?this.input.sustain:0!==this.input.release?Math.max(0,(1-(t-this.releaseTime)/this.input.release)*this.input.sustain):0;this.output=this.input.signal*e,null!==this.releaseTime&&t>=this.releaseTime+this.input.release&&this.deactivateCallback&&this.deactivateCallback()}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_divider",(function(){return r}));const r={create:t=>({input:Object.assign({dividend:0,divisor:1},t||{}),tick(){this.output=this.input.dividend/this.input.divisor}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_mixer",(function(){return r}));const r={create:t=>({defaultInput:void 0!==t?t:[],tick(){this.output=this.input.reduce((t,e)=>t+e,0)/this.input.length},reset(){this.input=[...this.defaultInput]}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_multiplier",(function(){return r}));const r={create:t=>({defaultInput:void 0!==t?t:[],tick(){this.output=this.input.reduce((t,e)=>t*e,1)},reset(){this.input=[...this.defaultInput]}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_pulse",(function(){return r}));const r={create:t=>({input:Object.assign({freq:0,dutyCycle:.5},t||{}),tick(t){const e=t*this.input.freq%1;this.output=e<this.input.dutyCycle?1:-1}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_saw",(function(){return r}));const r={create:t=>({input:Object.assign({freq:0},t||{}),tick(t){const e=t*this.input.freq%1;this.output=2*e-1}})}},function(t,e,n){"use strict";n.r(e),n.d(e,"nodeType_sine",(function(){return r}));const r={create:t=>({input:Object.assign({freq:0},t||{}),tick(t){const e=t*this.input.freq%1;this.output=Math.sin(e*(2*Math.PI))}})}},function(t,e,n){"use strict";n.r(e);const r={KeyZ:0,KeyS:1,KeyX:2,KeyD:3,KeyC:4,KeyV:5,KeyG:6,KeyB:7,KeyH:8,KeyN:9,KeyJ:10,KeyM:11,Comma:12,KeyL:13,Period:14,Semicolon:15,Slash:16,KeyQ:12,Digit2:13,KeyW:14,Digit3:15,KeyE:16,KeyR:17,Digit5:18,KeyT:19,Digit6:20,KeyY:21,Digit7:22,KeyU:23,KeyI:24,Digit9:25,KeyO:26,Digit0:27,KeyP:28,BracketLeft:29,Equal:30,BracketRight:31};var i=n(0);const o={detunedSaw:{nodes:{tuning:{type:"Tuning",routing:["detuner1","detuner2"]},detuner1:{type:"Multiplier",config:[i.nodeType_tuning.centsToRatio(-6.25)],routing:"saw1.freq"},detuner2:{type:"Multiplier",config:[i.nodeType_tuning.centsToRatio(6.25)],routing:"saw2.freq"},saw1:{type:"Saw",routing:"mixer"},saw2:{type:"Saw",routing:"mixer"},mixer:{type:"Mixer",routing:"adsr.signal"},adsr:{type:"Adsr",config:{attack:.015,decay:.01,sustain:.75,release:.5,enableSustain:!0}}}},detunedPulse:{nodes:{tuning:{type:"Tuning",routing:["detuner1","detuner2"]},detuner1:{type:"Multiplier",config:[i.nodeType_tuning.centsToRatio(-6.25)],routing:"pulse1.freq"},detuner2:{type:"Multiplier",config:[i.nodeType_tuning.centsToRatio(6.25)],routing:"pulse2.freq"},pulse1:{type:"Pulse",routing:"mixer"},pulse2:{type:"Pulse",routing:"mixer"},mixer:{type:"Mixer",routing:"adsr.signal"},adsr:{type:"Adsr",config:{attack:.015,decay:.01,sustain:.75,release:.8,enableSustain:!0}}}},hammond:{nodes:{tuning:{type:"Tuning",routing:["harmonic1","harmonic2","sine1.freq"]},harmonic1:{type:"Multiplier",config:[2],routing:"sine2.freq"},harmonic2:{type:"Multiplier",config:[3],routing:"sine3.freq"},sine1:{type:"Sine",routing:"mixer"},sine2:{type:"Sine",routing:"mixer"},sine3:{type:"Sine",routing:"mixer"},mixer:{type:"Mixer",routing:"adsr.signal"},adsr:{type:"Adsr",config:{attack:.2,decay:0,sustain:1,release:1,enableSustain:!0}}}},pwm:{nodes:{tuning:{type:"Tuning",routing:"pulse.freq"},lfo:{type:"Sine",config:{freq:4},routing:"divider.dividend"},divider:{type:"Divider",config:{divisor:10},routing:"adder"},adder:{type:"Adder",config:[.5],routing:"pulse.dutyCycle"},pulse:{type:"Pulse"}}}};var u=n(1),s=n.n(u);const a=()=>({setInput(t,e){Array.isArray(this.input)?this.input.push(t):void 0!==e?this.input[e]=t:this.input=t},getOutput(){return this.output}});let c;const f=(t,e)=>({nodeArray:Object.values(t.nodes).map((e,n)=>(0===n&&(c=Object.keys(t.nodes)),{name:c[n],node:(({type:t,config:e})=>({...a(),...self.registry["nodeType_"+t.charAt(0).toLowerCase()+t.slice(1)].create(e)}))(e),routing:(Array.isArray(e.routing)?e.routing:void 0!==e.routing?[e.routing]:[]).map(t=>{const e=t.split(".");return{nodeIndex:c.findIndex(t=>t===e[0]),inputName:e[1]}})})),messageQueue:e,isActive:!1,startTime:null,handlerCount:0,handleMessage(t,e,n){const r=()=>{this.handlerCount<=0&&(this.isActive=!1,n&&n())};switch(t.message){case"note_on":this.nodeArray[0].node.setInput(t.param),this.startTime=e,this.isActive=!0;break;case"note_off":r()}this.handlerCount=0,this.nodeArray.forEach(n=>{n.node.handleMessage&&(this.handlerCount++,n.node.handleMessage(t,e-this.startTime,()=>{this.handlerCount--,r()}))})},checkMessageQueue(t){void 0!==this.messageQueue&&(this.messageQueue.forEach(e=>{this.handleMessage(e,t)}),this.messageQueue.length=0)},tick(t){if(this.checkMessageQueue(t),!this.isActive)return;this.nodeArray.forEach(t=>{t.node.reset&&t.node.reset()});const e=t-this.startTime;this.nodeArray.forEach(t=>{t.node.tick(e),t.routing.forEach(e=>{this.nodeArray[e.nodeIndex].node.setInput(t.node.getOutput(),e.inputName)})},this)},getOutput(){return this.isActive?this.nodeArray[this.nodeArray.length-1].node.getOutput():0}}),l={create:(t,e)=>({channels:(t=>{const e=[f(t)],n=void 0!==t.polyphony?parseInt(t.polyphony):16;for(let t=1;t<n;t++)e.push(s()(e[0]));return e})(t),messageQueue:e,activeChannelCount:0,channelNotes:[],channelStartTimes:[],handleMessage(t,e){const n=t=>{this.activeChannelCount--,this.channelNotes[t]=null};switch(t.message){case"note_on":let r=null;for(const t in this.channels)if(!this.channels[t].isActive){r=t;break}null===r&&(r=this.channelStartTimes.indexOf(Math.min(...this.channelStartTimes)),n(r)),this.channelNotes[r]=t.param,this.channelStartTimes[r]=e,this.activeChannelCount++,this.channels[r].handleMessage(t,e,()=>{n(r)});break;case"note_off":this.channelNotes.forEach((r,i)=>{r===t.param&&this.channels[i].handleMessage(t,e,()=>{n(i)})})}},checkMessageQueue(t){this.messageQueue.forEach(e=>{this.handleMessage(e,t)}),this.messageQueue.length=0},tick(t){this.checkMessageQueue(t),0>=this.activeChannelCount||this.channels.forEach(e=>{e.isActive&&e.tick(t)})},getOutput(){return this.channels.reduce((t,e)=>t+e.getOutput(),0)}})};n.d(e,"getPresets",(function(){return v})),n.d(e,"selectPreset",(function(){return _})),n.d(e,"setMasterVolume",(function(){return b})),n.d(e,"attachKeyboard",(function(){return m})),n.d(e,"start",(function(){return j})),self.registry={};const h=n(4);h.keys().forEach(t=>{const e=h(t);Object.keys(e).forEach(t=>{self.registry[t]=e[t]})});const p=new self.AudioContext,d=[];let y,g;function v(){return o}function _(t){y=l.create(o[t],d)}function b(t){g=t}function m(){let t=4,e={};document.onkeydown=function(n){const i=n.code,o=r[i],u=i.match(/^Numpad([0-9])$/);if(u&&(t=u[1]),void 0===o||e[i])return;e[i]=!0;const s=12*t+o;d.push({message:"note_on",param:s}),"suspended"===p.state&&p.resume()},document.onkeyup=function(n){const i=n.code,o=r[i];if(void 0===o)return;e[n.code]=!1;const u=12*t+o;d.push({message:"note_off",param:u})}}function j(){const t=p.createScriptProcessor(0,1,1);let e=0;t.onaudioprocess=function(t){const n=t.outputBuffer.getChannelData(0),r=n.length;for(let t=0;t<r;t++){const r=e/p.sampleRate;y.tick(r);const i=y.getOutput()*g;n[t]=i>1?1:i<-1?-1:i,e++}},t.connect(p.destination)}}]);