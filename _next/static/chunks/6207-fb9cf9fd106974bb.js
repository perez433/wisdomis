(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6207],{20703:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(67447),i=n.n(r)},81749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(86921),i=n(91884),o=n(57437),a=i._(n(2265)),s=r._(n(54887)),l=r._(n(42251)),u=n(38630),c=n(76906),d=n(60337);n(76184);let f=n(46993),p=r._(n(10536)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,n,r,i,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,n]=a.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:s,width:l,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:g,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:j,onLoad:_,onError:O,...S}=e;return(0,o.jsx)("img",{...S,...h(f),loading:g,width:l,height:s,decoding:u,"data-nimg":b?"fill":"1",className:c,style:d,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&m(e,p,v,x,w,y))},[n,p,v,x,w,O,y,t]),onLoad:e=>{m(e.currentTarget,p,v,x,w,y)},onError:e=>{j(!0),"empty"!==p&&w(!0),O&&O(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&s.default.preload?(s.default.preload(n.src,r),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(d.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=g||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:s,onLoadingComplete:l}=e,m=(0,a.useRef)(s);(0,a.useEffect)(()=>{m.current=s},[s]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[v,x]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:_,meta:O}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{..._,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:j,ref:t}),O.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(86921)._(n(2265)).default.createContext({})},43044:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},38630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),n(76184);let r=n(67160),i=n(76906);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var n;let s,l,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:y,height:b,fill:v=!1,style:x,onLoad:w,onLoadingComplete:j,placeholder:_="empty",blurDataURL:O,fetchPriority:S,layout:E,objectFit:C,objectPosition:P,lazyBoundary:k,lazyRoot:I,...N}=e,{imgConf:$,showAltText:z,blurComplete:A,defaultLoader:M}=t,R=$||i.imageConfigDefault;if("allSizes"in R)s=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t);s={...R,allSizes:e,deviceSizes:t}}let L=N.loader||M;delete N.loader,delete N.srcSet;let D="__next_img_default"in L;if(D){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(E){"fill"===E&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!d&&(d=t)}let T="",B=a(y),F=a(b);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,O=O||e.blurDataURL,T=e.src,!v){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let V=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:T)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,V=!1),s.unoptimized&&(f=!0),D&&c.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),p&&(S="high");let U=a(h),H=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},z?{}:{color:"transparent"},x),W=A||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:l,blurHeight:u,blurDataURL:O||"",objectFit:H.objectFit})+'")':'url("'+_+'")',G=W?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},q=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,r)=>s({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:s({config:t,src:n,quality:o,width:l[c]})}}({config:s,src:c,unoptimized:f,width:B,quality:U,sizes:d,loader:L});return{props:{...N,loading:V?"lazy":g,fetchPriority:S,width:B,height:F,decoding:"async",className:m,style:{...H,...G},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:f,priority:p,placeholder:_,fill:v}}}},42251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return m}});let r=n(86921),i=n(91884),o=n(57437),a=i._(n(2265)),s=r._(n(27392)),l=n(2595),u=n(27484),c=n(43044);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(76184);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,a.useContext)(l.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:g,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67160:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=r?40*r:t,l=i?40*i:n,u=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},60337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(86921)._(n(2265)),i=n(76906),o=r.default.createContext(i.imageConfigDefault)},76906:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},67447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getImageProps:function(){return s},default:function(){return l}});let r=n(86921),i=n(38630),o=n(81749),a=r._(n(10536)),s=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=o.Image},10536:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},46993:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(86921)._(n(2265)).default.createContext(null)},27392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),s()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},92377:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},75504:function(e,t,n){"use strict";function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{W:function(){return r}}),t.Z=r},23108:function(e,t,n){"use strict";let r;n.d(t,{cC:function(){return I},Db:function(){return C},$G:function(){return $}});var i=n(2265);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=n(92377),s=n.n(a),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function u(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(s()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("-->");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(l),o=null;null!==(o=i.exec(e));)if(o[0].trim()){if(o[1]){var a=o[1].trim(),u=[a,""];a.indexOf("=")>-1&&(u=a.split("=")),t.attrs[u[0]]=u[1],i.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1))}return t}var c=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,f=Object.create(null),p={parse:function(e,t){t||(t={}),t.components||(t.components=f);var n,r=[],i=[],o=-1,a=!1;if(0!==e.indexOf("<")){var s=e.indexOf("<");r.push({type:"text",content:-1===s?e:e.substring(0,s)})}return e.replace(c,function(s,l){if(a){if(s!=="</"+n.name+">")return;a=!1}var c,f="/"!==s.charAt(1),p=s.startsWith("<!--"),g=l+s.length,m=e.charAt(g);if(p){var h=u(s);return o<0?r.push(h):(c=i[o]).children.push(h),r}if(f&&(o++,"tag"===(n=u(s)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!m||"<"===m||n.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===o&&r.push(n),(c=i[o-1])&&c.children.push(n),i[o]=n),(!f||n.voidElement)&&(o>-1&&(n.voidElement||n.name===s.slice(2,-1))&&(n=-1==--o?r:i[o]),!a&&"<"!==m&&m)){c=-1===o?r:i[o].children;var y=e.indexOf("<",g),b=e.slice(g,-1===y?void 0:y);d.test(b)&&(b=" "),(y>-1&&o+c.length>=0||" "!==b)&&c.push({type:"text",content:b})}}),r},stringify:function(e){return e.reduce(function(e,t){return e+function e(t,n){switch(n.type){case"text":return t+n.content;case"tag":return t+="<"+n.name+(n.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?t:t+n.children.reduce(e,"")+"</"+n.name+">";case"comment":return t+"<!--"+n.comment+"-->"}}("",t)},"")}};function g(){if(console&&console.warn){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}let m={};function h(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&m[t[0]]||("string"==typeof t[0]&&(m[t[0]]=new Date),g(...t))}let y=(e,t)=>()=>{if(e.isInitialized)t();else{let n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function b(e,t,n){e.loadNamespaces(t,y(e,n))}function v(e,t,n,r){"string"==typeof n&&(n=[n]),n.forEach(t=>{0>e.options.ns.indexOf(t)&&e.options.ns.push(t)}),e.loadLanguages(t,y(e,r))}let x=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,w={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},j=e=>w[e],_={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(x,j)};function O(e,t){if(!e)return!1;let n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function S(e){if(!e)return[];let t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?E(t):t}function E(e){return Array.isArray(e)?e:[e]}let C={type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_={..._,...e}}(e.options.react),r=e}},P=(0,i.createContext)();class k{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function I(e){let{children:t,count:n,parent:a,i18nKey:s,context:l,tOptions:u={},values:c,defaults:d,components:f,ns:m,i18n:y,t:b,shouldUnescape:v,...x}=e,{i18n:w,defaultNS:j}=(0,i.useContext)(P)||{},C=y||w||r,k=b||C&&C.t.bind(C);return function(e){let{children:t,count:n,parent:a,i18nKey:s,context:l,tOptions:u={},values:c,defaults:d,components:f,ns:m,i18n:y,t:b,shouldUnescape:v,...x}=e,w=y||r;if(!w)return h("You will need to pass in an i18next instance by using i18nextReactModule"),t;let j=b||w.t.bind(w)||(e=>e);l&&(u.context=l);let C={..._,...w.options&&w.options.react},P=m||j.ns||w.options&&w.options.defaultNS;P="string"==typeof P?[P]:P||["translation"];let k=function e(t,n){if(!t)return"";let r="",o=E(t),a=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return o.forEach((t,o)=>{if("string"==typeof t)r+=`${t}`;else if((0,i.isValidElement)(t)){let i=Object.keys(t.props).length,s=a.indexOf(t.type)>-1,l=t.props.children;if(!l&&s&&0===i)r+=`<${t.type}/>`;else if(l||s&&0===i){if(t.props.i18nIsDynamicList)r+=`<${o}></${o}>`;else if(s&&1===i&&"string"==typeof l)r+=`<${t.type}>${l}</${t.type}>`;else{let t=e(l,n);r+=`<${o}>${t}</${o}>`}}else r+=`<${o}></${o}>`}else if(null===t)g("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"==typeof t){let{format:e,...n}=t,i=Object.keys(n);if(1===i.length){let t=e?`${i[0]}, ${e}`:i[0];r+=`{{${t}}}`}else g("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else g("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)}),r}(t,C),I=d||k||C.transEmptyNodeValue||s,{hashTransKey:N}=C,$=s||(N?N(k||I):k||I);w.options&&w.options.interpolation&&w.options.interpolation.defaultVariables&&(c=c&&Object.keys(c).length>0?{...c,...w.options.interpolation.defaultVariables}:{...w.options.interpolation.defaultVariables});let z=c?u.interpolation:{interpolation:{...u.interpolation,prefix:"#$?",suffix:"?$#"}},A={...u,count:n,...c,...z,defaultValue:I,ns:P},M=$?j($,A):I;f&&Object.keys(f).forEach(e=>{let t=f[e];"function"==typeof t.type||!t.props||!t.props.children||0>M.indexOf(`${e}/>`)&&0>M.indexOf(`${e} />`)||(f[e]=i.createElement(function(){return i.createElement(i.Fragment,null,t)},null))});let R=function(e,t,n,r,a,s){if(""===t)return[];let l=r.transKeepBasicHtmlNodesFor||[],u=t&&new RegExp(l.map(e=>`<${e}`).join("|")).test(t);if(!e&&!u&&!s)return[t];let c={};!function e(t){E(t).forEach(t=>{"string"==typeof t||(O(t)?e(S(t)):"object"!=typeof t||(0,i.isValidElement)(t)||Object.assign(c,t))})}(e);let d=p.parse(`<0>${t}</0>`),f={...c,...a};function g(e,t,n){let r=S(e),o=h(r,t.children,n);return"[object Array]"===Object.prototype.toString.call(r)&&r.every(e=>(0,i.isValidElement)(e))&&0===o.length||e.props&&e.props.i18nIsDynamicList?r:o}function m(e,t,n,r,a){e.dummy?(e.children=t,n.push((0,i.cloneElement)(e,{key:r},a?void 0:t))):n.push(...i.Children.map([e],e=>{let n={...e.props};return delete n.i18nIsDynamicList,i.createElement(e.type,o({},n,{key:r,ref:e.ref},a?{}:{children:t}))}))}function h(t,o,a){let c=E(t);return E(o).reduce((t,o,d)=>{let p=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,f,n.language);if("tag"===o.type){let s=c[parseInt(o.name,10)];1!==a.length||s||(s=a[0][o.name]),s||(s={});let y=0!==Object.keys(o.attrs).length?function(e,t){let n={...t};return n.props=Object.assign(e.props,t.props),n}({props:o.attrs},s):s,b=(0,i.isValidElement)(y),v=b&&O(o,!0)&&!o.voidElement,x=u&&"object"==typeof y&&y.dummy&&!b,w="object"==typeof e&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof y){let e=n.services.interpolator.interpolate(y,f,n.language);t.push(e)}else if(O(y)||v){let e=g(y,o,a);m(y,e,t,d)}else if(x)m(y,h(c,o.children,a),t,d);else if(Number.isNaN(parseFloat(o.name))){if(w){let e=g(y,o,a);m(y,e,t,d,o.voidElement)}else if(r.transSupportBasicHtmlNodes&&l.indexOf(o.name)>-1){if(o.voidElement)t.push((0,i.createElement)(o.name,{key:`${o.name}-${d}`}));else{let e=h(c,o.children,a);t.push((0,i.createElement)(o.name,{key:`${o.name}-${d}`},e))}}else if(o.voidElement)t.push(`<${o.name} />`);else{let e=h(c,o.children,a);t.push(`<${o.name}>${e}</${o.name}>`)}}else if("object"!=typeof y||b)m(y,p,t,d,1!==o.children.length||!p);else{let e=o.children[0]?p:null;e&&t.push(e)}}else if("text"===o.type){let e=r.transWrapTextNodes,a=s?r.unescape(n.services.interpolator.interpolate(o.content,f,n.language)):n.services.interpolator.interpolate(o.content,f,n.language);e?t.push((0,i.createElement)(e,{key:`${o.name}-${d}`},a)):t.push(a)}return t},[])}return S(h([{dummy:!0,children:e||[]}],d,E(e||[]))[0])}(f||t,M,w,C,A,v),L=void 0!==a?a:C.defaultTransParent;return L?(0,i.createElement)(L,x,R):R}({children:t,count:n,parent:a,i18nKey:s,context:l,tOptions:u,values:c,defaults:d,components:f,ns:m||k&&k.ns||j||C&&C.options&&C.options.defaultNS,i18n:C,t:b,shouldUnescape:v,...x})}let N=(e,t)=>{let n=(0,i.useRef)();return(0,i.useEffect)(()=>{n.current=t?n.current:e},[e,t]),n.current};function $(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{i18n:n}=t,{i18n:o,defaultNS:a}=(0,i.useContext)(P)||{},s=n||o||r;if(s&&!s.reportNamespaces&&(s.reportNamespaces=new k),!s){h("You will need to pass in an i18next instance by using initReactI18next");let e=(e,t)=>"string"==typeof t?t:t&&"object"==typeof t&&"string"==typeof t.defaultValue?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}s.options.react&&void 0!==s.options.react.wait&&h("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let l={..._,...s.options.react,...t},{useSuspense:u,keyPrefix:c}=l,d=e||a||s.options&&s.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(d);let f=(s.isInitialized||s.initializedStoreOnce)&&d.every(e=>(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],i=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;let a=(e,n)=>{let r=t.services.backendConnector.state[`${e}|${n}`];return -1===r||2===r};return(!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1)||!t.services.backendConnector.backend||!t.isLanguageChangingTo||!!a(t.isLanguageChangingTo,e))&&!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!i||a(o,e)))}(e,t,n):(h("i18n.languages were undefined or empty",t.languages),!0)})(e,s,l));function p(){return s.getFixedT(t.lng||null,"fallback"===l.nsMode?d:d[0],c)}let[g,m]=(0,i.useState)(p),y=d.join();t.lng&&(y=`${t.lng}${y}`);let x=N(y),w=(0,i.useRef)(!0);(0,i.useEffect)(()=>{let{bindI18n:e,bindI18nStore:n}=l;function r(){w.current&&m(p)}return w.current=!0,f||u||(t.lng?v(s,t.lng,d,()=>{w.current&&m(p)}):b(s,d,()=>{w.current&&m(p)})),f&&x&&x!==y&&w.current&&m(p),e&&s&&s.on(e,r),n&&s&&s.store.on(n,r),()=>{w.current=!1,e&&s&&e.split(" ").forEach(e=>s.off(e,r)),n&&s&&n.split(" ").forEach(e=>s.store.off(e,r))}},[s,y]);let j=(0,i.useRef)(!0);(0,i.useEffect)(()=>{w.current&&!j.current&&m(p),j.current=!1},[s,c]);let O=[g,s,f];if(O.t=g,O.i18n=s,O.ready=f,f||!f&&!u)return O;throw new Promise(e=>{t.lng?v(s,t.lng,d,()=>e()):b(s,d,()=>e())})}}}]);