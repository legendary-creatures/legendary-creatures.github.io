(self.webpackChunkcatskald_legendary_creatures=self.webpackChunkcatskald_legendary_creatures||[]).push([[610],{72:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,r=!1,n=!1;for(let a=0;a<e.length;a++){const i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r;var r};e.exports=t,e.exports.default=t},4070:function(e){"use strict";function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",a=0,i=-1,s=0,o=0;o<=e.length;++o){if(o<e.length)r=e.charCodeAt(o);else{if(47===r)break;r=47}if(47===r){if(i===o-1||1===s);else if(i!==o-1&&2===s){if(n.length<2||2!==a||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",a=0):a=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),i=o,s=0;continue}}else if(2===n.length||1===n.length){n="",a=0,i=o,s=0;continue}t&&(n.length>0?n+="/..":n="..",a=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),a=o-i-1;i=o,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var n={resolve:function(){for(var e,n="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var s;i>=0?s=arguments[i]:(void 0===e&&(e=process.cwd()),s=e),t(s),0!==s.length&&(n=s+"/"+n,a=47===s.charCodeAt(0))}return n=r(n,!a),a?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&a&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var a=arguments[r];t(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var i=e.length,s=i-a,o=1;o<r.length&&47===r.charCodeAt(o);++o);for(var l=r.length-o,c=s<l?s:l,u=-1,d=0;d<=c;++d){if(d===c){if(l>c){if(47===r.charCodeAt(o+d))return r.slice(o+d+1);if(0===d)return r.slice(o+d)}else s>c&&(47===e.charCodeAt(a+d)?u=d:0===d&&(u=0));break}var g=e.charCodeAt(a+d);if(g!==r.charCodeAt(o+d))break;47===g&&(u=d)}var h="";for(d=a+u+1;d<=i;++d)d!==i&&47!==e.charCodeAt(d)||(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(o+u):(o+=u,47===r.charCodeAt(o)&&++o,r.slice(o))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,a=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(r=e.charCodeAt(s))){if(!i){a=s;break}}else i=!1;return-1===a?n?"/":".":n&&1===a?"//":e.slice(0,a)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,a=0,i=-1,s=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var o=r.length-1,l=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!s){a=n+1;break}}else-1===l&&(s=!1,l=n+1),o>=0&&(c===r.charCodeAt(o)?-1==--o&&(i=n):(o=-1,i=l))}return a===i?i=l:-1===i&&(i=e.length),e.slice(a,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){a=n+1;break}}else-1===i&&(s=!1,i=n+1);return-1===i?"":e.slice(a,i)},extname:function(e){t(e);for(var r=-1,n=0,a=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var l=e.charCodeAt(o);if(47!==l)-1===a&&(i=!1,a=o+1),46===l?-1===r?r=o:1!==s&&(s=1):-1!==r&&(s=-1);else if(!i){n=o+1;break}}return-1===r||-1===a||0===s||1===s&&r===a-1&&r===n+1?"":e.slice(r,a)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,a=e.charCodeAt(0),i=47===a;i?(r.root="/",n=1):n=0;for(var s=-1,o=0,l=-1,c=!0,u=e.length-1,d=0;u>=n;--u)if(47!==(a=e.charCodeAt(u)))-1===l&&(c=!1,l=u+1),46===a?-1===s?s=u:1!==d&&(d=1):-1!==s&&(d=-1);else if(!c){o=u+1;break}return-1===s||-1===l||0===d||1===d&&s===l-1&&s===o+1?-1!==l&&(r.base=r.name=0===o&&i?e.slice(1,l):e.slice(o,l)):(0===o&&i?(r.name=e.slice(1,s),r.base=e.slice(1,l)):(r.name=e.slice(o,s),r.base=e.slice(o,l)),r.ext=e.slice(s,l)),o>0?r.dir=e.slice(0,o-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n},6296:function(e,t,r){"use strict";r.d(t,{G:function(){return I},L:function(){return h},M:function(){return C},P:function(){return w},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return u},h:function(){return l}});var n=r(7294),a=(r(72),r(5697)),i=r.n(a);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r,n,a){return void 0===a&&(a={}),s({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},a,{opacity:t?1:0})})}function u(e,t,r,n,a,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],g=function(e){let{layout:t,width:r,height:a}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,r=o(e,d);return n.createElement(n.Fragment,null,n.createElement(g,s({},r)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],m=function(e){let{src:t,srcSet:r,loading:a,alt:i="",shouldLoad:l}=e,c=o(e,p);return n.createElement("img",s({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:i}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,i=o(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(m,s({},i,t,{sizes:l,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:a?r:void 0,"data-srcset":a?void 0:r,sizes:l})})),c):c};var v;m.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const b=["fallback"],w=function(e){let{fallback:t}=e,r=o(e,b);return t?n.createElement(y,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},r))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const C=function(e){return n.createElement(n.Fragment,null,n.createElement(y,s({},e)),n.createElement("noscript",null,n.createElement(y,s({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=y.propTypes;const E=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),s=3;s<n;s++)a[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:i().object.isRequired,alt:E},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],x=new Set;let S,T;const O=function(e){let{as:t="div",image:a,style:i,backgroundColor:c,className:u,class:d,onStartLoad:g,onLoad:h,onError:p}=e,f=o(e,L);const{width:m,height:y,layout:v}=a,b=function(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(m,y,v),{style:w,className:C}=b,E=o(b,k),A=(0,n.useRef)(),O=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);d&&(u=d);const I=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,m,y);return(0,n.useEffect)((()=>{S||(S=Promise.all([r.e(774),r.e(344)]).then(r.bind(r,9344)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function t(){document.removeEventListener("load",t),null==g||g({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)})),void x.add(O);if(T&&x.has(O))return;let t,n;return S.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;A.current&&(A.current.innerHTML=r(s({isLoading:!0,isLoaded:x.has(O),image:a},f)),x.has(O)||(t=requestAnimationFrame((()=>{A.current&&(n=o(A.current,O,x,i,g,h,p))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{x.has(O)&&T&&(A.current.innerHTML=T(s({isLoading:x.has(O),isLoaded:x.has(O),image:a},f)),null==g||g({wasCached:!0}),null==h||h({wasCached:!0}))}),[a]),(0,n.createElement)(t,s({},E,{style:s({},w,i,{backgroundColor:c}),className:C+(u?" "+u:""),ref:A,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));I.propTypes=A,I.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:E,width:j,height:j,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(N=I,function(e){let{src:t,__imageData:r,__error:a}=e,i=o(e,_);return a&&console.warn(a),r?n.createElement(N,s({image:r},i)):(console.warn("Image not loaded",t),null)});var N;R.displayName="StaticImage",R.propTypes=z},9165:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});var n=r(1597);const a=()=>{const{listImages:e}=(0,n.useStaticQuery)("3546315936");return e.edges.map((e=>({name:e.node.childImageSharp.metadata.relativePath,image:e.node.childImageSharp.image})))}},3119:function(e,t){t.K=e=>e?e.split("\\").pop().split("/").pop():"cover.jpg"},9063:function(e,t,r){const n=r(6854),a=r(4070),i=e=>e>=1?"/"+e:"",s=e=>n.pages.tags[e].path,o=e=>n.pages.creatures[e].path,l=e=>n.pages.search[e].path,c=e=>e.replace(/\s/g,"");t.zS=s,t.L$=o,t.Cx=(e,t)=>s(t)+"#"+c(e),t.$n=(e,t,r,n)=>{if(!e||!t)return null;return l(r)+"/"+c(e).toLowerCase()+"/"+c(t).toLowerCase()+i(n)},t.fb=(e,t)=>o(t)+"/"+c(e),t.jq=(e,t)=>o(t)+i(e),t.qb=e=>{const t=a.basename(e,".md");return{name:t.slice(0,-3),language:t.slice(-2)}}}}]);
//# sourceMappingURL=3facd310fb64c748e85e3c2997eac93bcb562a14-01f94e2a9d34d0e0f07e.js.map