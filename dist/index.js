parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zttq":[function(require,module,exports) {
"use strict";function e(e,t,o){e.fillStyle="#000",e.strokeStyle="#0f0"}function t(e,t,o){e.fillRect(0,0,t,o);var r=e.strokeStyle;e.strokeStyle="#777",e.beginPath(),e.moveTo(0,o/2),e.lineTo(t,o/2),e.stroke(),e.strokeStyle=r}function o(e,t,o,r){e.beginPath();for(var l=0;l<t.length;l++){var s=l*(1*o/t.length),i=t[l]/128*r/2;0===l?e.moveTo(s,i):e.lineTo(s,i)}e.stroke()}Object.defineProperty(exports,"__esModule",{value:!0}),exports._initCvs=e,exports._primer=t,exports._drawRawOsc=o;
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var t=i(require("./tools/canvas_tools"));function e(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return e=function(){return t},t}function i(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var i=e();if(i&&i.has(t))return i.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=n?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=t[a]}return r.default=t,i&&i.set(t,r),r}function r(e,i,r){var n=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2048,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;this.actx=e,this.FFT=s,this.cvs=i,this.init=c||t._initCvs,this.primer=o||t._primer,this.paused=!1,this.anl=this.actx.createAnalyser(),this.anl.fftSize=this.FFT,r.connect(this.anl),a&&this.anl.connect(a);var u=this.cvs,h=u.width,l=void 0===h?300:h,f=u.height,p=void 0===f?150:f;this.WIDTH=l,this.HEIGHT=p,this.u8ar=new Uint8Array(this.FFT),this.cctx=this.cvs.getContext("2d"),this.init(this.cctx,this.WIDTH,this.HEIGHT),this.draw=function(){n.paused||requestAnimationFrame(n.draw),n.cctx.clearRect(0,0,n.WIDTH,n.HEIGHT),n.primer(n.cctx,n.WIDTH,n.HEIGHT),n.anl.getByteTimeDomainData(n.u8ar),t._drawRawOsc(n.cctx,n.u8ar,n.WIDTH,n.HEIGHT)},this.start=function(){n.paused=!1,n.draw()},this.pause=function(){n.paused=!0},this.reset=function(){n.paused=!0,requestAnimationFrame(function(){n.u8ar=new Uint8Array(n.FFT).fill(0),n.cctx.clearRect(0,0,n.WIDTH,n.HEIGHT),n.primer(n.cctx,n.WIDTH,n.HEIGHT),t._drawRawOsc(n.cctx,n.u8ar,n.WIDTH,n.HEIGHT)})}}
},{"./tools/canvas_tools":"zttq"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map