(self.webpackChunkcatskald_legendary_creatures=self.webpackChunkcatskald_legendary_creatures||[]).push([[538],{7228:function(e){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,r,t){var n=t(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,r,t){var n=t(3646),o=t(6860),a=t(379),i=t(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,r,t){var n=t(7228);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},4070:function(e){"use strict";function r(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,r){for(var t,n="",o=0,a=-1,i=0,l=0;l<=e.length;++l){if(l<e.length)t=e.charCodeAt(l);else{if(47===t)break;t=47}if(47===t){if(a===l-1||1===i);else if(a!==l-1&&2===i){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var u=n.lastIndexOf("/");if(u!==n.length-1){-1===u?(n="",o=0):o=(n=n.slice(0,u)).length-1-n.lastIndexOf("/"),a=l,i=0;continue}}else if(2===n.length||1===n.length){n="",o=0,a=l,i=0;continue}r&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(a+1,l):n=e.slice(a+1,l),o=l-a-1;a=l,i=0}else 46===t&&-1!==i?++i:i=-1}return n}var n={resolve:function(){for(var e,n="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var i;a>=0?i=arguments[a]:(void 0===e&&(e=process.cwd()),i=e),r(i),0!==i.length&&(n=i+"/"+n,o=47===i.charCodeAt(0))}return n=t(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(r(e),0===e.length)return".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=t(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var o=arguments[t];r(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":n.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t)return"";if((e=n.resolve(e))===(t=n.resolve(t)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var a=e.length,i=a-o,l=1;l<t.length&&47===t.charCodeAt(l);++l);for(var u=t.length-l,s=i<u?i:u,f=-1,c=0;c<=s;++c){if(c===s){if(u>s){if(47===t.charCodeAt(l+c))return t.slice(l+c+1);if(0===c)return t.slice(l+c)}else i>s&&(47===e.charCodeAt(o+c)?f=c:0===c&&(f=0));break}var h=e.charCodeAt(o+c);if(h!==t.charCodeAt(l+c))break;47===h&&(f=c)}var g="";for(c=o+f+1;c<=a;++c)c!==a&&47!==e.charCodeAt(c)||(0===g.length?g+="..":g+="/..");return g.length>0?g+t.slice(l+f):(l+=f,47===t.charCodeAt(l)&&++l,t.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,o=-1,a=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!a){o=i;break}}else a=!1;return-1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');r(e);var n,o=0,a=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,u=-1;for(n=e.length-1;n>=0;--n){var s=e.charCodeAt(n);if(47===s){if(!i){o=n+1;break}}else-1===u&&(i=!1,u=n+1),l>=0&&(s===t.charCodeAt(l)?-1==--l&&(a=n):(l=-1,a=u))}return o===a?a=u:-1===a&&(a=e.length),e.slice(o,a)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){o=n+1;break}}else-1===a&&(i=!1,a=n+1);return-1===a?"":e.slice(o,a)},extname:function(e){r(e);for(var t=-1,n=0,o=-1,a=!0,i=0,l=e.length-1;l>=0;--l){var u=e.charCodeAt(l);if(47!==u)-1===o&&(a=!1,o=l+1),46===u?-1===t?t=l:1!==i&&(i=1):-1!==t&&(i=-1);else if(!a){n=l+1;break}}return-1===t||-1===o||0===i||1===i&&t===o-1&&t===n+1?"":e.slice(t,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+e+n:n}("/",e)},parse:function(e){r(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,o=e.charCodeAt(0),a=47===o;a?(t.root="/",n=1):n=0;for(var i=-1,l=0,u=-1,s=!0,f=e.length-1,c=0;f>=n;--f)if(47!==(o=e.charCodeAt(f)))-1===u&&(s=!1,u=f+1),46===o?-1===i?i=f:1!==c&&(c=1):-1!==i&&(c=-1);else if(!s){l=f+1;break}return-1===i||-1===u||0===c||1===c&&i===u-1&&i===l+1?-1!==u&&(t.base=t.name=0===l&&a?e.slice(1,u):e.slice(l,u)):(0===l&&a?(t.name=e.slice(1,i),t.base=e.slice(1,u)):(t.name=e.slice(l,i),t.base=e.slice(l,u)),t.ext=e.slice(i,u)),l>0?t.dir=e.slice(0,l-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n},8371:function(e,r,t){var n=t(319);r.s=function(e,r,t){t||(t=function(e){return e});var o=n(e);return o.sort((function(e,n){return t(e).localeCompare(t(n),r)})),o}},9370:function(e,r,t){var n=t(9074),o=t(4070),a=function(e){return e>=1?"/"+e:""},i=function(e){return n.pages.tags[e].path},l=function(e){return n.pages.creatures[e].path},u=function(e){return n.pages.search[e].path},s=function(e){return e.replace(/\s/g,"")};r.zS=i,r.L$=l,r.Cx=function(e,r){return i(r)+"#"+s(e)},r.$n=function(e,r,t,n){return e&&r?u(t)+"/"+s(e).toLowerCase()+"/"+s(r).toLowerCase()+a(n):null},r.fb=function(e,r){return l(r)+"/"+s(e)},r.jq=function(e,r){return l(r)+a(e)},r.qb=function(e){var r=o.basename(e,".md");return{name:r.slice(0,-3),language:r.slice(-2)}}}}]);
//# sourceMappingURL=b2b05727e05fa2c3182e136fa90a2cfc37b192c8-b8893b9f2a0f9900bac8.js.map