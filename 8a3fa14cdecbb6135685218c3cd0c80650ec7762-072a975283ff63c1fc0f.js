(self.webpackChunkcatskald_legendary_creatures=self.webpackChunkcatskald_legendary_creatures||[]).push([[597],{3723:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),a=r(8945),i=r(7725),l=r(9165),o=r(3119),c=function(e){var t=e.image,r=(0,o.K)(t),c=(0,l.H)().find((function(e){return e.name===r}));return n.createElement(i.Z,{className:"index-module--creaturePage__link--nYzyE",to:e.slug},n.createElement("section",{className:"index-module--creaturePage--mOS4j"},n.createElement(a.G,{className:"index-module--creaturePage__image--LgbNc",image:c.image,alt:e.title}),n.createElement("div",{className:"index-module--creaturePage__content--v+JkI"},n.createElement("h3",{className:"index-module--creaturePage__title--za9+q"},e.title),n.createElement("p",{className:"index-module--creaturePage__description--a-1Ah"},e.description))))},u=r(8277),s=r(9063),f=function(e){var t=n.useContext(u.R).language;return n.createElement("section",{className:"index-module--pageList--NxycA"},e.pages.map((function(e){var r=e.node,a=r.frontmatter,i=a.date,l=a.description,o=a.title,u=a.image,f=r.fields.slug;return n.createElement(c,{key:f,slug:(0,s.L$)(t.code)+"/"+f,date:i,title:o,description:l,image:u})})))}},2348:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),a=function(e){return n.createElement("h1",{className:"index-module--title--wvjv4"},e.text)}},9165:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});var n=r(1597),a=function(){return(0,n.useStaticQuery)("3546315936").listImages.edges.map((function(e){return{name:e.node.childImageSharp.metadata.relativePath,image:e.node.childImageSharp.image}}))}},3119:function(e,t){t.K=function(e){return e?e.split("\\").pop().split("/").pop():"cover.jpg"}},9063:function(e,t,r){var n=r(6854),a=r(3652),i=function(e){return e>=1?"/"+e:""},l=function(e){return n.pages.tags[e].path},o=function(e){return n.pages.creatures[e].path},c=function(e){return n.pages.search[e].path},u=function(e){return e.replace(/\s/g,"")};t.zS=l,t.L$=o,t.Cx=function(e,t){return l(t)+"#"+u(e)},t.$n=function(e,t,r,n){return e&&t?c(r)+"/"+u(e).toLowerCase()+"/"+u(t).toLowerCase()+i(n):null},t.fb=function(e,t){return o(t)+"/"+u(e)},t.jq=function(e,t){return o(t)+i(e)},t.qb=function(e){var t=a.basename(e,".md");return{name:t.slice(0,-3),language:t.slice(-2)}}},3652:function(e){"use strict";function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",a=0,i=-1,l=0,o=0;o<=e.length;++o){if(o<e.length)r=e.charCodeAt(o);else{if(47===r)break;r=47}if(47===r){if(i===o-1||1===l);else if(i!==o-1&&2===l){if(n.length<2||2!==a||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",a=0):a=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),i=o,l=0;continue}}else if(2===n.length||1===n.length){n="",a=0,i=o,l=0;continue}t&&(n.length>0?n+="/..":n="..",a=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),a=o-i-1;i=o,l=0}else 46===r&&-1!==l?++l:l=-1}return n}var n={resolve:function(){for(var e,n="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var l;i>=0?l=arguments[i]:(void 0===e&&(e=process.cwd()),l=e),t(l),0!==l.length&&(n=l+"/"+n,a=47===l.charCodeAt(0))}return n=r(n,!a),a?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&a&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var a=arguments[r];t(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var i=e.length,l=i-a,o=1;o<r.length&&47===r.charCodeAt(o);++o);for(var c=r.length-o,u=l<c?l:c,s=-1,f=0;f<=u;++f){if(f===u){if(c>u){if(47===r.charCodeAt(o+f))return r.slice(o+f+1);if(0===f)return r.slice(o+f)}else l>u&&(47===e.charCodeAt(a+f)?s=f:0===f&&(s=0));break}var g=e.charCodeAt(a+f);if(g!==r.charCodeAt(o+f))break;47===g&&(s=f)}var h="";for(f=a+s+1;f<=i;++f)f!==i&&47!==e.charCodeAt(f)||(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(o+s):(o+=s,47===r.charCodeAt(o)&&++o,r.slice(o))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,a=-1,i=!0,l=e.length-1;l>=1;--l)if(47===(r=e.charCodeAt(l))){if(!i){a=l;break}}else i=!1;return-1===a?n?"/":".":n&&1===a?"//":e.slice(0,a)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,a=0,i=-1,l=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var o=r.length-1,c=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!l){a=n+1;break}}else-1===c&&(l=!1,c=n+1),o>=0&&(u===r.charCodeAt(o)?-1==--o&&(i=n):(o=-1,i=c))}return a===i?i=c:-1===i&&(i=e.length),e.slice(a,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){a=n+1;break}}else-1===i&&(l=!1,i=n+1);return-1===i?"":e.slice(a,i)},extname:function(e){t(e);for(var r=-1,n=0,a=-1,i=!0,l=0,o=e.length-1;o>=0;--o){var c=e.charCodeAt(o);if(47!==c)-1===a&&(i=!1,a=o+1),46===c?-1===r?r=o:1!==l&&(l=1):-1!==r&&(l=-1);else if(!i){n=o+1;break}}return-1===r||-1===a||0===l||1===l&&r===a-1&&r===n+1?"":e.slice(r,a)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,a=e.charCodeAt(0),i=47===a;i?(r.root="/",n=1):n=0;for(var l=-1,o=0,c=-1,u=!0,s=e.length-1,f=0;s>=n;--s)if(47!==(a=e.charCodeAt(s)))-1===c&&(u=!1,c=s+1),46===a?-1===l?l=s:1!==f&&(f=1):-1!==l&&(f=-1);else if(!u){o=s+1;break}return-1===l||-1===c||0===f||1===f&&l===c-1&&l===o+1?-1!==c&&(r.base=r.name=0===o&&i?e.slice(1,c):e.slice(o,c)):(0===o&&i?(r.name=e.slice(1,l),r.base=e.slice(1,c)):(r.name=e.slice(o,l),r.base=e.slice(o,c)),r.ext=e.slice(l,c)),o>0?r.dir=e.slice(0,o-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}}]);
//# sourceMappingURL=8a3fa14cdecbb6135685218c3cd0c80650ec7762-072a975283ff63c1fc0f.js.map