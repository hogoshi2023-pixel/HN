(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,a,n)=>{"use strict";function t({widthInt:e,heightInt:a,blurWidth:n,blurHeight:t,blurDataURL:i,objectFit:r}){let o=n?40*n:e,s=t?40*t:a,c=o&&s?`viewBox='0 0 ${o} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===r?"xMidYMid":"cover"===r?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImageBlurSvg",{enumerable:!0,get:function(){return t}})},87690,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={VALID_LOADERS:function(){return r},imageConfigDefault:function(){return o}};for(var i in t)Object.defineProperty(n,i,{enumerable:!0,get:t[i]});let r=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(33525);let t=e.r(43369),i=e.r(88143),r=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function c(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:a,unoptimized:n=!1,priority:l=!1,preload:d=!1,loading:h,className:p,quality:m,width:x,height:u,fill:g=!1,style:f,overrideSrc:b,onLoad:v,onLoadingComplete:y,placeholder:N="empty",blurDataURL:k,fetchPriority:w,decoding:C="async",layout:T,objectFit:S,objectPosition:G,lazyBoundary:L,lazyRoot:j,...O},E){var z;let P,H,A,{imgConf:D,showAltText:U,blurComplete:M,defaultLoader:F}=E,R=D||r.imageConfigDefault;if("allSizes"in R)P=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,a)=>e-a),a=R.deviceSizes.sort((e,a)=>e-a),n=R.qualities?.sort((e,a)=>e-a);P={...R,allSizes:e,deviceSizes:a,qualities:n}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let q=O.loader||F;delete O.loader,delete O.srcSet;let B="__next_img_default"in q;if(B){if("custom"===P.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=q;q=a=>{let{config:n,...t}=a;return e(t)}}if(T){"fill"===T&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[T];e&&(f={...f,...e});let n={responsive:"100vw",fill:"100vw"}[T];n&&!a&&(a=n)}let Y="",I=c(x),V=c(u);if((z=e)&&"object"==typeof z&&(s(z)||void 0!==z.src)){let a=s(e)?e.default:e;if(!a.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(a)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!a.height||!a.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(a)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(H=a.blurWidth,A=a.blurHeight,k=k||a.blurDataURL,Y=a.src,!g)if(I||V){if(I&&!V){let e=I/a.width;V=Math.round(a.height*e)}else if(!I&&V){let e=V/a.height;I=Math.round(a.width*e)}}else I=a.width,V=a.height}let W=!l&&!d&&("lazy"===h||void 0===h);(!(e="string"==typeof e?e:Y)||e.startsWith("data:")||e.startsWith("blob:"))&&(n=!0,W=!1),P.unoptimized&&(n=!0),B&&!P.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(n=!0);let K=c(m),Q=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:G}:{},U?{}:{color:"transparent"},f),_=M||"empty"===N?null:"blur"===N?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:I,heightInt:V,blurWidth:H,blurHeight:A,blurDataURL:k||"",objectFit:Q.objectFit})}")`:`url("${N}")`,$=o.includes(Q.objectFit)?"fill"===Q.objectFit?"100% 100%":"cover":Q.objectFit,X=_?{backgroundSize:$,backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:_}:{},Z=function({config:e,src:a,unoptimized:n,width:i,quality:r,sizes:o,loader:s}){if(n){let e=(0,t.getDeploymentId)();if(a.startsWith("/")&&!a.startsWith("//")&&e){let n=a.includes("?")?"&":"?";a=`${a}${n}dpl=${e}`}return{src:a,srcSet:void 0,sizes:void 0}}let{widths:c,kind:l}=function({deviceSizes:e,allSizes:a},n,t){if(t){let n=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=n.exec(t);)i.push(parseInt(e[2]));if(i.length){let n=.01*Math.min(...i);return{widths:a.filter(a=>a>=e[0]*n),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof n?{widths:e,kind:"w"}:{widths:[...new Set([n,2*n].map(e=>a.find(a=>a>=e)||a[a.length-1]))],kind:"x"}}(e,i,o),d=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((n,t)=>`${s({config:e,src:a,quality:r,width:n})} ${"w"===l?n:t+1}${l}`).join(", "),src:s({config:e,src:a,quality:r,width:c[d]})}}({config:P,src:e,unoptimized:n,width:I,quality:K,sizes:a,loader:q}),J=W?"lazy":h;return{props:{...O,loading:J,fetchPriority:w,width:I,height:V,decoding:C,className:p,style:{...Q,...X},sizes:Z.sizes,srcSet:Z.srcSet,src:b||Z.src},meta:{unoptimized:n,preload:d||l,placeholder:N,fill:g}}}},98879,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let t=e.r(71645),i="u"<typeof window,r=i?()=>{}:t.useLayoutEffect,o=i?()=>{}:t.useEffect;function s(e){let{headManager:a,reduceComponentsToState:n}=e;function s(){if(a&&a.mountedInstances){let e=t.Children.toArray(Array.from(a.mountedInstances).filter(Boolean));a.updateHead(n(e))}}return i&&(a?.mountedInstances?.add(e.children),s()),r(()=>(a?.mountedInstances?.add(e.children),()=>{a?.mountedInstances?.delete(e.children)})),r(()=>(a&&(a._pendingUpdate=s),()=>{a&&(a._pendingUpdate=s)})),o(()=>(a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null),()=>{a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null)})),null}},25633,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={default:function(){return u},defaultHead:function(){return h}};for(var i in t)Object.defineProperty(n,i,{enumerable:!0,get:t[i]});let r=e.r(55682),o=e.r(90809),s=e.r(43476),c=o._(e.r(71645)),l=r._(e.r(98879)),d=e.r(42732);function h(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,a){return"string"==typeof a||"number"==typeof a?e:a.type===c.default.Fragment?e.concat(c.default.Children.toArray(a.props.children).reduce((e,a)=>"string"==typeof a||"number"==typeof a?e:e.concat(a),[])):e.concat(a)}e.r(33525);let m=["name","httpEquiv","charSet","itemProp"];function x(e){let a,n,t,i;return e.reduce(p,[]).reverse().concat(h().reverse()).filter((a=new Set,n=new Set,t=new Set,i={},e=>{let r=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let n=e.key.slice(e.key.indexOf("$")+1);a.has(n)?r=!1:a.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?r=!1:n.add(e.type);break;case"meta":for(let a=0,n=m.length;a<n;a++){let n=m[a];if(e.props.hasOwnProperty(n))if("charSet"===n)t.has(n)?r=!1:t.add(n);else{let a=e.props[n],t=i[n]||new Set;("name"!==n||!o)&&t.has(a)?r=!1:(t.add(a),i[n]=t)}}}return r})).reverse().map((e,a)=>{let n=e.key||a;return c.default.cloneElement(e,{key:n})})}let u=function({children:e}){let a=(0,c.useContext)(d.HeadManagerContext);return(0,s.jsx)(l.default,{reduceComponentsToState:x,headManager:a,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),a.exports=n.default)},18556,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return r}});let t=e.r(55682)._(e.r(71645)),i=e.r(87690),r=t.default.createContext(i.imageConfigDefault)},65856,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return t}});let t=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,a,n)=>{"use strict";function t(e,a){let n=e||75;return a?.qualities?.length?a.qualities.reduce((e,a)=>Math.abs(a-n)<Math.abs(e-n)?a:e,0):n}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"findClosestQuality",{enumerable:!0,get:function(){return t}})},35420,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let t=e.r(70965),i=e.r(43369);function r({config:e,src:a,width:n,quality:r}){if(a.startsWith("/")&&a.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${a}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,t.findClosestQuality)(r,e),s=(0,i.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(a)}&w=${n}&q=${o}${a.startsWith("/")&&s?`&dpl=${s}`:""}`}r.__next_img_default=!0;let o=r},18581,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let t=e.r(71645);function i(e,a){let n=(0,t.useRef)(null),i=(0,t.useRef)(null);return(0,t.useCallback)(t=>{if(null===t){let e=n.current;e&&(n.current=null,e());let a=i.current;a&&(i.current=null,a())}else e&&(n.current=r(e,t)),a&&(i.current=r(a,t))},[e,a])}function r(e,a){if("function"!=typeof e)return e.current=a,()=>{e.current=null};{let n=e(a);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),a.exports=n.default)},5500,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return y}});let t=e.r(55682),i=e.r(90809),r=e.r(43476),o=i._(e.r(71645)),s=t._(e.r(74080)),c=t._(e.r(25633)),l=e.r(8927),d=e.r(87690),h=e.r(18556);e.r(33525);let p=e.r(65856),m=t._(e.r(35420)),x=e.r(18581),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/HN/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,a,n,t,i,r,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==a&&i(!0),n?.current){let a=new Event("load");Object.defineProperty(a,"target",{writable:!1,value:e});let t=!1,i=!1;n.current({...a,nativeEvent:a,currentTarget:e,target:e,isDefaultPrevented:()=>t,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{t=!0,a.preventDefault()},stopPropagation:()=>{i=!0,a.stopPropagation()}})}t?.current&&t.current(e)}}))}function f(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,o.forwardRef)(({src:e,srcSet:a,sizes:n,height:t,width:i,decoding:s,className:c,style:l,fetchPriority:d,placeholder:h,loading:p,unoptimized:m,fill:u,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:N,sizesInput:k,onLoad:w,onError:C,...T},S)=>{let G=(0,o.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&g(e,h,b,v,y,m,k))},[e,h,b,v,y,C,m,k]),L=(0,x.useMergedRef)(S,G);return(0,r.jsx)("img",{...T,...f(d),loading:p,width:i,height:t,decoding:s,"data-nimg":u?"fill":"1",className:c,style:l,sizes:n,srcSet:a,src:e,ref:L,onLoad:e=>{g(e.currentTarget,h,b,v,y,m,k)},onError:e=>{N(!0),"empty"!==h&&y(!0),C&&C(e)}})});function v({isAppRouter:e,imgAttributes:a}){let n={as:"image",imageSrcSet:a.srcSet,imageSizes:a.sizes,crossOrigin:a.crossOrigin,referrerPolicy:a.referrerPolicy,...f(a.fetchPriority)};return e&&s.default.preload?(s.default.preload(a.src,n),null):(0,r.jsx)(c.default,{children:(0,r.jsx)("link",{rel:"preload",href:a.srcSet?void 0:a.src,...n},"__nimg-"+a.src+a.srcSet+a.sizes)})}let y=(0,o.forwardRef)((e,a)=>{let n=(0,o.useContext)(p.RouterContext),t=(0,o.useContext)(h.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=u||t||d.imageConfigDefault,a=[...e.deviceSizes,...e.imageSizes].sort((e,a)=>e-a),n=e.deviceSizes.sort((e,a)=>e-a),i=e.qualities?.sort((e,a)=>e-a);return{...e,allSizes:a,deviceSizes:n,qualities:i,localPatterns:"u"<typeof window?t?.localPatterns:e.localPatterns}},[t]),{onLoad:s,onLoadingComplete:c}=e,x=(0,o.useRef)(s);(0,o.useEffect)(()=>{x.current=s},[s]);let g=(0,o.useRef)(c);(0,o.useEffect)(()=>{g.current=c},[c]);let[f,y]=(0,o.useState)(!1),[N,k]=(0,o.useState)(!1),{props:w,meta:C}=(0,l.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:f,showAltText:N});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{...w,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:x,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:k,sizesInput:e.sizes,ref:a}),C.preload?(0,r.jsx)(v,{isAppRouter:!n,imgAttributes:w}):null]})});("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),a.exports=n.default)},94909,(e,a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={default:function(){return d},getImageProps:function(){return l}};for(var i in t)Object.defineProperty(n,i,{enumerable:!0,get:t[i]});let r=e.r(55682),o=e.r(8927),s=e.r(5500),c=r._(e.r(35420));function l(e){let{props:a}=(0,o.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/HN/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(a))void 0===n&&delete a[e];return{props:a}}let d=s.Image},57688,(e,a,n)=>{a.exports=e.r(94909)},52683,e=>{"use strict";let a,n,t;var i=e.i(43476),r=e.i(71645),o=e.i(75254);let s=(0,o.default)("menu",[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]]);var c=e.i(37727);let l=(0,o.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]),d=(0,o.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),h=(0,o.default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),p=(0,o.default)("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);var m=e.i(25913),x=e.i(20783),u=Symbol.for("react.lazy"),g=r[" use ".trim().toString()];function f(e){var a;return null!=e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===u&&"_payload"in e&&"object"==typeof(a=e._payload)&&null!==a&&"then"in a}var b=((t=r.forwardRef((e,a)=>{let{children:n,...t}=e;if(f(n)&&"function"==typeof g&&(n=g(n._payload)),r.isValidElement(n)){var i;let e,o,s=(i=n,(o=(e=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.ref:(o=(e=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.props.ref:i.props.ref||i.ref),c=function(e,a){let n={...a};for(let t in a){let i=e[t],r=a[t];/^on[A-Z]/.test(t)?i&&r?n[t]=(...e)=>{let a=r(...e);return i(...e),a}:i&&(n[t]=i):"style"===t?n[t]={...i,...r}:"className"===t&&(n[t]=[i,r].filter(Boolean).join(" "))}return{...e,...n}}(t,n.props);return n.type!==r.Fragment&&(c.ref=a?(0,x.composeRefs)(a,s):s),r.cloneElement(n,c)}return r.Children.count(n)>1?r.Children.only(null):null})).displayName="Slot.SlotClone",a=t,(n=r.forwardRef((e,n)=>{let{children:t,...o}=e;f(t)&&"function"==typeof g&&(t=g(t._payload));let s=r.Children.toArray(t),c=s.find(y);if(c){let e=c.props.children,t=s.map(a=>a!==c?a:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(a,{...o,ref:n,children:r.isValidElement(e)?r.cloneElement(e,void 0,t):null})}return(0,i.jsx)(a,{...o,ref:n,children:t})})).displayName="Slot.Slot",n),v=Symbol("radix.slottable");function y(e){return r.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===v}var N=e.i(75157);let k=(0,m.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-tight transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-brand/40",{variants:{variant:{brand:"bg-brand text-brand-foreground hover:brightness-110 shadow-[0_8px_24px_-8px_var(--brand)]",outline:"border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",ghost:"text-foreground hover:bg-accent hover:text-accent-foreground",solid:"bg-foreground text-background hover:bg-foreground/90"},size:{default:"h-10 px-5 py-2 has-[>svg]:px-3",sm:"h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3 text-[13px]",lg:"h-12 rounded-md px-7 text-[15px] has-[>svg]:px-5",icon:"size-10"}},defaultVariants:{variant:"brand",size:"default"}}),w=r.forwardRef(({className:e,variant:a,size:n,asChild:t=!1,...r},o)=>(0,i.jsx)(t?b:"button",{ref:o,"data-slot":"brand-button",className:(0,N.cn)(k({variant:a,size:n}),e),...r}));w.displayName="BrandButton";let C=(0,o.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),T=(0,o.default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),S=(0,o.default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),G=e=>{let a,n=new Set,t=(e,t)=>{let i="function"==typeof e?e(a):e;if(!Object.is(i,a)){let e=a;a=(null!=t?t:"object"!=typeof i||null===i)?i:Object.assign({},a,i),n.forEach(n=>n(a,e))}},i=()=>a,r={setState:t,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=a=e(t,i,r);return r},L=e=>{let a=e?G(e):G,n=e=>(function(e,a=e=>e){let n=r.default.useSyncExternalStore(e.subscribe,r.default.useCallback(()=>a(e.getState()),[e,a]),r.default.useCallback(()=>a(e.getInitialState()),[e,a]));return r.default.useDebugValue(n),n})(a,e);return Object.assign(n,a),n},j=e=>e?L(e):L,O="hn-lang",E=j((e,a)=>({locale:"en",hydrated:!1,setLocale:a=>{window.localStorage.setItem(O,a),document.documentElement.lang="zh"===a?"zh-CN":a,document.documentElement.dir="ar"===a?"rtl":"ltr",e({locale:a})},hydrate:()=>{if(a().hydrated)return;let n=window.localStorage.getItem(O),t="zh"===n||"vi"===n||"en"===n||"es"===n||"ar"===n?n:"en";document.documentElement.lang="zh"===t?"zh-CN":t,document.documentElement.dir="ar"===t?"rtl":"ltr",e({locale:t,hydrated:!0})}})),z={"brand.tagline":{en:"Industrial Coatings Since 2003",zh:"工业涂料 自2003年",vi:"Sơn công nghiệp từ 2003",es:"Recubrimientos Industriales Desde 2003",ar:"الطلاءات الصناعية منذ 2003"},"brand.premiumDesc":{en:"Premium industrial coatings manufacturer since 2003. Direct factory supply, OEM/ODM service, global B2B export to 60+ countries.",zh:"自2003年起的优质工业涂料制造商。工厂直供、OEM/ODM服务、产品出口全球60+国家。",vi:"Nhà sản xuất sơn công nghiệp cao cấp từ 2003. Cung ứng trực tiếp từ nhà máy, dịch vụ OEM/ODM, xuất khẩu B2B tới 60+ quốc gia."},"topbar.established":{en:"EST.",zh:"成立于",vi:"TLTH",es:"EST.",ar:"تأسست"},"topbar.phone":{en:"Phone",zh:"电话",vi:"Điện thoại",es:"Phone",ar:"هاتف"},"topbar.email":{en:"Email",zh:"邮箱",vi:"Email",es:"Email",ar:"بريد إلكتروني"},"nav.home":{en:"Home",zh:"首页",vi:"Trang chủ",es:"Inicio",ar:"الرئيسية"},"nav.products":{en:"Products",zh:"产品",vi:"Sản phẩm",es:"Productos",ar:"المنتجات"},"nav.solutions":{en:"Solutions",zh:"解决方案",vi:"Giải pháp",es:"Soluciones",ar:"الحلول"},"nav.cases":{en:"Cases",zh:"案例",vi:"Dự án",es:"Casos",ar:"الحالات"},"nav.about":{en:"About",zh:"关于我们",vi:"Giới thiệu",es:"Acerca de",ar:"من نحن"},"nav.news":{en:"News",zh:"新闻",vi:"Tin tức",es:"Noticias",ar:"الأخبار"},"nav.faq":{en:"FAQ",zh:"常见问题",vi:"Câu hỏi",es:"Preguntas Frecuentes",ar:"الأسئلة الشائعة"},"nav.contact":{en:"Contact",zh:"联系",vi:"Liên hệ",es:"Contacto",ar:"اتصل بنا"},"cta.getQuote":{en:"Get A Free Quote",zh:"免费获取报价",vi:"Nhận báo giá miễn phí",es:"Obtener Cotizacion Gratis",ar:"احصل على عرض سعر مجاني"},"cta.browseCatalog":{en:"Browse Catalog",zh:"浏览产品目录",vi:"Xem catalog",es:"Ver Catalogo",ar:"تصفيع الكتالوج"},"cta.viewAllCatalog":{en:"View All Catalog",zh:"查看全部目录",vi:"Toàn bộ catalog",es:"Ver Todo el Catalogo",ar:"عرض جميع الكتالوج"},"cta.viewAllCases":{en:"View All Cases",zh:"查看全部案例",vi:"Xem tất cả dự án",es:"Ver Todos los Casos",ar:"عرض جميع الحالات"},"cta.viewFullCatalog":{en:"View Full Catalog",zh:"查看完整目录",vi:"Xem catalog đầy đủ",es:"Ver Catalogo Completo",ar:"عرض الكتالوج الكامل"},"cta.requestQuote":{en:"Request Quote",zh:"申请报价",vi:"Yêu cầu báo giá",es:"Solicitar Cotizacion",ar:"اطلب عرض سعر"},"cta.getTds":{en:"Get TDS / MSDS",zh:"获取TDS/MSDS",vi:"Nhận TDS / MSDS",es:"Obtener TDS / MSDS",ar:"احصل على TDS / MSDS"},"cta.requestFreeQuote":{en:"Request Free Quote",zh:"免费申请报价",vi:"Yêu cầu báo giá miễn phí",es:"Solicitar Cotizacion Gratis",ar:"اطلب عرض سعر مجاني"},"cta.whatsappChat":{en:"WhatsApp Chat",zh:"WhatsApp 在线咨询",vi:"Trò chuyện WhatsApp",es:"Chat de WhatsApp",ar:"محادثة واتساب"},"cta.startProject":{en:"Start Your Project",zh:"启动您的项目",vi:"Bắt đầu dự án",es:"Inicie su Proyecto",ar:"ابدأ مشروعك"},"cta.askEngineer":{en:"Ask an Engineer",zh:"咨询工程师",vi:"Hỏi kỹ sư",es:"Consultar a un Ingeniero",ar:"اسأل مهندس"},"cta.readArticle":{en:"Read article",zh:"阅读文章",vi:"Đọc bài viết",es:"Leer articulo",ar:"اقرأ المقال"},"cta.subscribe":{en:"Subscribe",zh:"订阅",vi:"Đăng ký",es:"Suscribirse",ar:"اشترك"},"cta.sendInquiry":{en:"Send Inquiry",zh:"发送询盘",vi:"Gửi yêu cầu",es:"Enviar Consulta",ar:"أرسل استفساراً"},"cta.sending":{en:"Sending…",zh:"发送中…",vi:"Đang gửi…",es:"Enviando…",ar:"جاري الإرسال..."},"cta.sendAnother":{en:"Send another inquiry",zh:"再发送一条询盘",vi:"Gửi yêu cầu khác",es:"Enviar otra consulta",ar:"أرسل استفساراً آخر"},"cta.relatedProducts":{en:"Related Products",zh:"相关产品",vi:"Sản phẩm liên quan",es:"Productos Relacionados",ar:"منتجات متعلقة"},"cta.requestSimilar":{en:"Request Similar Project",zh:"申请类似项目",vi:"Yêu cầu dự án tương tự",es:"Solicitar Proyecto Similar",ar:"اطلب مشروع مشابه"},"cta.explore":{en:"Explore system",zh:"了解系统",vi:"Khám phá hệ thống",es:"Explorar sistema",ar:"استكشف النظام"},"cta.talkToEngineer":{en:"Talk to an engineer",zh:"与工程师交谈",vi:"Trò chuyện với kỹ sư",es:"Habla con un ingeniero",ar:"تحدث مع مهندس"},"cta.partnerWithUs":{en:"Partner with us",zh:"与我们合作",vi:"Hợp tác cùng chúng tôi",es:"Asóciate con nosotros",ar:"تعاون معنا"},"hero.index":{en:"[ 01 ]",zh:"[ 01 ]",vi:"[ 01 ]",es:"[ 01 ]",ar:"[ 01 ]"},"hero.eyebrow":{en:"Industrial Coatings Since 2003",zh:"工业涂料 自2003年",vi:"Sơn công nghiệp từ 2003",es:"Recubrimientos Industriales Desde 2003",ar:"الطلاءات الصناعية منذ 2003"},"hero.title1":{en:"Engineered Coatings",zh:"工程化涂料",vi:"Sơn kỹ thuật"},"hero.title2":{en:"for",zh:"用于",vi:"cho công nghiệp"},"hero.titleAccent":{en:"Heavy-Duty",zh:"重型",vi:"hạng nặng",es:"De Alta Resistencia",ar:"ثقيل"},"hero.title3":{en:"Industries",zh:"工业",vi:""},"hero.desc":{en:"ISO 9001 certified manufacturer of anti-corrosion, high-temperature, epoxy floor, and architectural coatings. Direct factory supply · OEM/ODM · Export to 60+ countries · 24-month quality warranty.",zh:"ISO 9001认证的防腐、耐高温、环氧地坪及建筑涂料制造商。工厂直供 · OEM/ODM · 出口60+国家 · 24个月质保。",vi:"Nhà sản xuất sơn chống ăn mòn, chịu nhiệt cao, sơn nền epoxy và sơn kiến trúc đạt ISO 9001. Cung ứng trực tiếp từ nhà máy · OEM/ODM · Xuất khẩu 60+ quốc gia · Bảo hành 24 tháng."},"hero.specSheet":{en:"SPEC SHEET · REV.2026",zh:"技术规格 · 2026版",vi:"BẢNG THÔNG SỐ · REV.2026",es:"FICHA TÉCNICA · REV.2026",ar:"ورقة المواصفات · REV.2026"},"hero.live":{en:"LIVE",zh:"实时",vi:"TRỰC TIẾP",es:"EN VIVO",ar:"مباشر"},"partners.trustedBy":{en:"Trusted by · Global B2B Partners",zh:"全球B2B合作伙伴信赖之选",vi:"Được tin dùng bởi · Đối tác B2B toàn cầu",es:"Confiado por · Socios B2B Globales",ar:"موثوق به · من قبل شركاء B2B العالميين"},"core.index":{en:"[ 02 ]",zh:"[ 02 ]",vi:"[ 02 ]",es:"[ 02 ]",ar:"[ 02 ]"},"core.eyebrow":{en:"Core Business",zh:"核心业务",vi:"Kinh doanh cốt lõi",es:"Negocio Principal",ar:"النشاط التجاري الأساسي"},"core.title":{en:"Industrial Coatings. Engineered for B2B.",zh:"工业涂料，专为B2B而造。",vi:"Sơn công nghiệp. Thiết kế cho B2B.",es:"Recubrimientos Industriales. Diseñados para B2B.",ar:"الطلاءات الصناعية. مصممة ل B2B."},"pcat.index":{en:"[ 03 ]",zh:"[ 03 ]",vi:"[ 03 ]",es:"[ 03 ]",ar:"[ 03 ]"},"pcat.eyebrow":{en:"Product Categories",zh:"产品分类",vi:"Danh mục sản phẩm",es:"Categorías de Productos",ar:"فئات المنتجات"},"pcat.title":{en:"Six Coating Systems. One Trusted Source.",zh:"六大涂料体系,一个可信之选。",vi:"Sáu hệ sơn. Một nguồn đáng tin cậy.",es:"Seis Sistemas de Recubrimiento. Una Fuente Confiable.",ar:"ستة أنظمة طلاء. مصدر موثوق واحد."},"why.index":{en:"[ 04 ]",zh:"[ 04 ]",vi:"[ 04 ]",es:"[ 04 ]",ar:"[ 04 ]"},"why.eyebrow":{en:"Why HONG NGUYEN",zh:"为何选择宏源",vi:"Vì sao chọn HONG NGUYEN",es:"¿Por qué HONG NGUYEN",ar:"لماذا هونج نيugen"},"why.title":{en:"Built for B2B buyers who can't afford coating failure.",zh:"为不容许涂层失效的B2B采购方而生。",vi:"Dành cho khách hàng B2B không thể chấp nhận lỗi sơn.",es:"Construido para compradores B2B que no pueden permitirse el fracaso del recubrimiento.",ar:"مصمم لمشتري B2B الذين لا يستطيعون تحمل فشل الطلاء."},"app.index":{en:"[ 05 ]",zh:"[ 05 ]",vi:"[ 05 ]",es:"[ 05 ]",ar:"[ 05 ]"},"app.eyebrow":{en:"Applications",zh:"应用领域",vi:"Ứng dụng",es:"Aplicaciones",ar:"التطبيقات"},"app.title":{en:"Where HONG NGUYEN coatings work.",zh:"宏源涂料的应用场景。",vi:"Nơi sơn HONG NGUYEN phát huy tác dụng.",es:"Donde funcionan los recubrimientos HONG NGUYEN.",ar:"أين تعمل الطلاءات HONG NGUYEN."},"cases.index":{en:"[ 06 ]",zh:"[ 06 ]",vi:"[ 06 ]",es:"[ 06 ]",ar:"[ 06 ]"},"cases.eyebrow":{en:"Project Cases",zh:"项目案例",vi:"Dự án tiêu biểu",es:"Casos de Proyecto",ar:"حالات المشروع"},"cases.title":{en:"Field-proven across continents.",zh:"横跨各大洲的现场验证。",vi:"Được chứng minh thực tế trên nhiều châu lục.",es:"Probado en campo en varios continentes.",ar:"مثبت في الميدان عبر القارات."},"cert.index":{en:"[ 07 ]",zh:"[ 07 ]",vi:"[ 07 ]",es:"[ 07 ]",ar:"[ 07 ]"},"cert.eyebrow":{en:"Certifications",zh:"认证资质",vi:"Chứng nhận",es:"Certificaciones",ar:"الشهادات"},"cert.title":{en:"Audited. Tested. Documented.",zh:"审核·检测·文档齐备。",vi:"Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ.",es:"Auditado. Probado. Documentado.",ar:"مدقق. مختبر. موثق."},"cert.desc":{en:"Every shipment backed by internationally recognized certifications. Pre-shipment samples can be tested at SGS, BV, or Intertek on request.",zh:"每批出货均附带国际认可认证。可按要求在SGS、BV或Intertek进行装运前抽样检测。",vi:"Mỗi lô hàng đều có chứng nhận quốc tế. Có thể kiểm tra mẫu trước khi giao tại SGS, BV hoặc Intertek theo yêu cầu."},"voice.index":{en:"[ 08 ]",zh:"[ 08 ]",vi:"[ 08 ]",es:"[ 08 ]",ar:"[ 08 ]"},"voice.eyebrow":{en:"Client Voices",zh:"客户之声",vi:"Khách hàng nói",es:"Voces del Cliente",ar:"أصوات العملاء"},"voice.title":{en:"What B2B buyers say.",zh:"B2B采购方怎么说。",vi:"Khách hàng B2B nhận xét.",es:"Lo que dicen los compradores B2B.",ar:"ما يقوله مشتري B2B."},"rq.index":{en:"[ 09 ]",zh:"[ 09 ]",vi:"[ 09 ]"},"rq.eyebrow":{en:"Request Quote",zh:"申请报价",vi:"Yêu cầu báo giá"},"rq.title":{en:"Get a quote in 24 hours. Sample shipped in 48.",zh:"24小时内报价,48小时内寄样。",vi:"Báo giá trong 24 giờ. Giao mẫu trong 48 giờ."},"rq.desc":{en:"Tell us your project — substrate, environment, performance requirements. Our coating engineers respond same business day.",zh:"告诉我们您的项目——基材、环境、性能要求。我们的涂料工程师将在同一工作日内回复。",vi:"Hãy cho chúng tôi biết dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật. Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc."},"footer.products":{en:"Products",zh:"产品",vi:"Sản phẩm"},"footer.company":{en:"Company",zh:"公司",vi:"Công ty"},"footer.exportRegions":{en:"Export Regions",zh:"出口地区",vi:"Khu vực xuất khẩu"},"footer.rights":{en:"All rights reserved.",zh:"保留所有权利。",vi:"Đã đăng ký bản quyền."},"footer.headquarters":{en:"HEADQUARTERS",zh:"总部",vi:"TRỤ SỞ"},"footer.contact.phone":{en:"Phone",zh:"电话",vi:"Điện thoại"},"footer.contact.email":{en:"Email",zh:"邮箱",vi:"Email"},"footer.contact.whatsapp":{en:"WhatsApp / WeChat",zh:"WhatsApp / 微信",vi:"WhatsApp / WeChat"},"footer.contact.address":{en:"Address",zh:"地址",vi:"Địa chỉ"},"pp.index":{en:"[ 03 ]",zh:"[ 03 ]",vi:"[ 03 ]"},"pp.eyebrow":{en:"Product Catalog",zh:"产品目录",vi:"Catalog sản phẩm"},"pp.title1":{en:"Six Coating Systems.",zh:"六大涂料体系。",vi:"Sáu hệ sơn."},"pp.title2":{en:"One Trusted Source.",zh:"一个可信之选。",vi:"Một nguồn đáng tin cậy."},"pp.desc":{en:"From anti-corrosion primers for offshore steel to 600°C high-temperature silicone systems — every product is manufactured in-house, traceable to batch, and backed by a 24-month warranty.",zh:"从海洋钢结构的防腐底漆到600°C耐高温有机硅系统——每款产品均为自主生产、批次可追溯,并提供24个月质保。",vi:"Từ sơn lót chống ăn mòn cho kết cấu thép ngoài khơi đến hệ sơn silicone chịu 600°C — mọi sản phẩm đều sản xuất nội bộ, truy xuất theo lô, bảo hành 24 tháng."},"pp.specSheet":{en:"· SPEC SHEET",zh:"· 技术规格",vi:"· BẢNG THÔNG SỐ"},"pp.technicalData":{en:"TECHNICAL DATA",zh:"技术数据",vi:"DỮ LIỆU KỸ THUẬT"},"pp.applications":{en:"APPLICATIONS",zh:"应用领域",vi:"ỨNG DỤNG"},"pp.fullCatalogEyebrow":{en:"Full Catalog",zh:"完整目录",vi:"Toàn bộ catalog"},"pp.fullCatalogTitle":{en:"Browse all six systems.",zh:"浏览全部六大体系。",vi:"Xem cả sáu hệ sơn."},"pp.featuredModels":{en:"FEATURED MODELS",zh:"产品型号",vi:"MÃ SẢN PHẨM"},"pp.expandModels":{en:"Show",zh:"展开",vi:"Hiện"},"pp.collapseModels":{en:"Hide",zh:"收起",vi:"Ẩn"},"pp.viewDetail":{en:"TDS",zh:"产品详情",vi:"Thông số"},"pp.hideDetail":{en:"Hide",zh:"收起",vi:"Ẩn"},"sol.index":{en:"[ SOL ]",zh:"[ SOL ]",vi:"[ SOL ]"},"sol.eyebrow":{en:"Industry Solutions",zh:"行业解决方案",vi:"Giải pháp ngành"},"sol.titleAccent":{en:"industry vertical.",zh:"行业场景。",vi:"ngành."},"sol.titlePre":{en:"Coating systems engineered for your",zh:"为您的",vi:"Hệ sơn được thiết kế cho"},"sol.desc":{en:"We don't just sell paint — we engineer coating systems matched to your substrate, environment and performance spec. Below are six core industry verticals we serve worldwide.",zh:"我们不仅销售涂料——我们提供与您的基材、环境及性能要求匹配的涂料系统。以下是我们全球服务的六大核心行业。",vi:"Chúng tôi không chỉ bán sơn — chúng tôi thiết kế hệ sơn phù hợp với bề mặt, môi trường và yêu cầu kỹ thuật của bạn. Dưới đây là sáu ngành trọng điểm chúng tôi phục vụ toàn cầu."},"sol.recommended":{en:"RECOMMENDED SYSTEMS",zh:"推荐系统",vi:"HỆ SƠN ĐỀ XUẤT"},"sol.appEyebrow":{en:"Applications",zh:"应用领域",vi:"Ứng dụng"},"sol.appTitle":{en:"Where HONG NGUYEN coatings work.",zh:"宏源涂料的应用场景。",vi:"Nơi sơn HONG NGUYEN phát huy tác dụng."},"sol.appDesc":{en:"Six core application areas where our systems are field-proven.",zh:"我们的系统已在这六大核心应用领域得到现场验证。",vi:"Sáu lĩnh vực ứng dụng cốt lõi nơi hệ thống của chúng tôi đã được chứng minh."},"sol.procEyebrow":{en:"Engineering Process",zh:"工程流程",vi:"Quy trình kỹ thuật"},"sol.procTitle":{en:"From spec to shipment — four steps.",zh:"从规格到出货——四步完成。",vi:"Từ thông số đến giao hàng — bốn bước."},"cp.eyebrow":{en:"Project Cases",zh:"项目案例",vi:"Dự án tiêu biểu",es:"Casos de Proyecto",ar:"حالات المشروع"},"cp.titlePre":{en:"Field-proven across",zh:"横跨",vi:"Chứng minh thực tế tại",es:"Probado en campo en",ar:"مُجَرَّب في الميدان عبر"},"cp.titleAccent":{en:"continents.",zh:"各大洲。",vi:"nhiều châu lục.",es:"continentes.",ar:"قارات."},"cp.desc":{en:"Real projects, real performance. Every case below is backed by a full QC dossier and post-installation inspection report.",zh:"真实项目,真实表现。以下每个案例均附带完整QC档案与施工后检验报告。",vi:"Dự án thực tế, hiệu suất thực tế. Mỗi dự án dưới đây đều có hồ sơ QC đầy đủ và báo cáo kiểm tra sau thi công."},"cp.outcomesTitle":{en:"Outcomes",zh:"项目成果",vi:"Kết quả",es:"Resultados",ar:"النتائج"},"ap.index":{en:"[ 05 ]",zh:"[ 05 ]",vi:"[ 05 ]",es:"[ 05 ]",ar:"[ 05 ]"},"ap.eyebrow":{en:"About HONG NGUYEN",zh:"关于宏源",vi:"Về HONG NGUYEN",es:"Sobre HONG NGUYEN",ar:"حول هونغ نغوين"},"ap.titleAccent":{en:"China's coatings hometown.",zh:"中国涂料之乡。",vi:"quê hương sơn Trung Quốc.",es:"Hometown of China's coatings.",ar:"مسقط رأس الطلاءات في الصين."},"ap.titlePre":{en:"Since 2003, from",zh:"自2003年,立足",vi:"Từ 2003, tại",es:"Desde 2003, desde",ar:"منذ 2003، من"},"ap.desc":{en:"Founded in 2003, HONG NGUYEN is an integrated industrial-chemical enterprise combining anti-corrosion paint, industrial paint and architectural coating manufacturing with product solutions. Located in Shunde, Guangdong — known as China's coatings hometown — with modern facilities, advanced production and testing equipment, and a professional R&D team.",zh:"宏源成立于2003年,是一家以生产防腐漆、工业漆、建筑涂料生产,产品解决方案,工贸一体的化工企业,公司座落在有“中国涂料之乡”之称的广东顺德。拥有配备齐全的现代化厂房,先进的生产和检验设备以及专业的研发团队。",vi:"Thành lập năm 2003, HONG NGUYEN là doanh nghiệp hóa chất tích hợp sản xuất sơn chống ăn mòn, sơn công nghiệp, sơn kiến trúc cùng giải pháp sản phẩm, kết hợp công thương. Tọa lạc tại Shunde, Quảng Đông — được mệnh danh 'quê hương sơn Trung Quốc' — với nhà xưởng hiện đại, thiết bị sản xuất và kiểm nghiệm tiên tiến cùng đội ngũ R&D chuyên nghiệp."},"ap.storyEyebrow":{en:"Company Profile",zh:"公司介绍",vi:"Giới thiệu công ty",es:"Perfil de la Empresa",ar:"ملف الشركة"},"ap.storyTitle":{en:"Quality-rooted, green development.",zh:"品质为本,绿色发展。",vi:"Chất lượng là gốc, phát triển xanh.",es:"Calidad como base, desarrollo verde.",ar:"جذور الجودة، التن الأخضر."},"ap.storyP1":{en:"Founded in 2003, HONG NGUYEN is an integrated industrial-chemical enterprise combining anti-corrosion paint, industrial paint and architectural coating manufacturing with product solutions. The company is located in Shunde, Guangdong — known as 'China's coatings hometown' — equipped with modern facilities, advanced production and testing equipment, and a professional R&D team.",zh:"宏源成立于2003年,是一家以生产防腐漆、工业漆、建筑涂料生产,产品解决方案,工贸一体的化工企业,公司座落在有“中国涂料之乡”之称的广东顺德。拥有配备齐全的现代化厂房,先进的生产和检验设备以及专业的研发团队。",vi:"Thành lập năm 2003, HONG NGUYEN là doanh nghiệp hóa chất tích hợp sản xuất sơn chống ăn mòn, sơn công nghiệp, sơn kiến trúc cùng giải pháp sản phẩm, kết hợp công thương. Tọa lạc tại Shunde, Quảng Đông — 'quê hương sơn Trung Quốc' — với nhà xưởng hiện đại, thiết bị sản xuất và kiểm nghiệm tiên tiến, đội ngũ R&D chuyên nghiệp."},"ap.storyP2":{en:"The company maintains long-term exchanges and cooperation with industry research institutions and universities. Each year it invests heavily in manpower and capital to inspect, update and upgrade production equipment, and strictly follows the ISO 9001 quality management system and ISO 14001 environmental management system for production and quality control.",zh:"企业长期与行业科研机构及各高等院校开展各种交流与合作,对于生产设备,企业更是每年花费大量的人力、财力,进行检测更新升级,并严格按照 ISO9001 质量管理体系和 ISO14001 环境管理体系进行生产和质量监控。",vi:"Công ty duy trì hợp tác lâu dài với các viện nghiên cứu và trường đại học. Hàng năm đầu tư lớn nhân lực và tài chính để kiểm tra, cập nhật, nâng cấp thiết bị sản xuất, tuân thủ nghiêm ngặt hệ thống quản lý chất lượng ISO 9001 và hệ thống quản lý môi trường ISO 14001 trong sản xuất và kiểm soát chất lượng."},"ap.storyP3":{en:"Main products include the 'HONG NGUYEN' waterborne anti-corrosion paint series, solvent-borne anti-corrosion paint series, fluorocarbon paint, industrial paint, floor paint and specialty coatings. The range is complete, stable, high-quality and eco-friendly — widely used in steel structures, petrochemicals, bridges and ships, hardware and machinery, and construction.",zh:"公司主要产品有:“HONG NGUYEN” 水性防腐漆系列,油性防腐漆系列、氟碳漆、工业漆,地坪漆,特种涂料等,产品配套齐全、性能稳定、品质优异环保,广泛应用于钢结构、石油化工、桥梁船舶、五金机械、建筑等领域。",vi:"Sản phẩm chính gồm: sơn chống ăn mòn nước 'HONG NGUYEN', sơn chống ăn mòn dung môi, sơn fluorocarbon, sơn công nghiệp, sơn nền, sơn đặc thù. Đầy đủ chủng loại, ổn định, chất lượng cao, thân thiện môi trường — ứng dụng rộng rãi trong kết cấu thép, hóa dầu, cầu tàu, cơ kim, xây dựng."},"ap.storyP4":{en:"HONG NGUYEN upholds the philosophy of quality-first and green development, continuously deepening its expertise in anti-corrosion coatings, optimizing product solutions and upgrading technical service. Looking ahead, HONG NGUYEN looks forward to partnering with customers worldwide for mutual benefit — providing reliable coatings and professional technical support to safeguard long-lasting anti-corrosion and green coating for every project.",zh:"公司始终坚守品质为本、绿色发展的经营理念,持续深耕防腐防护涂料领域,不断优化产品方案、升级技术服务。宏源特种涂料期待与各界客商携手同行、互利共赢,致力于为各类工程项目提供长效稳定、节能环保的涂装解决方案。",vi:"HONG NGUYEN kiên trì triết lý chất lượng là gốc, phát triển xanh, liên tục đào sâu lĩnh vực sơn chống ăn mòn, tối ưu giải pháp sản phẩm, nâng cấp dịch vụ kỹ thuật. HONG NGUYEN mong muốn hợp tác cùng khách hàng toàn cầu, cùng thắng, cam kết cung cấp giải pháp sơn bền vững, tiết kiệm năng lượng, thân thiện môi trường cho mọi công trình."},"ap.capEyebrow":{en:"Capabilities",zh:"核心能力",vi:"Năng lực",es:"Capacidades",ar:"القدرات"},"ap.capTitle":{en:"What we control end-to-end.",zh:"端到端掌控的能力。",vi:"Những gì chúng tôi kiểm soát từ đầu đến cuối.",es:"Lo que controlamos de principio a fin.",ar:"ما نتحكم به من النهاية إلى النهاية."},"ap.procEyebrow":{en:"How We Work",zh:"工作方式",vi:"Cách chúng tôi làm việc",es:"Como Trabajamos",ar:"كيف نعمل"},"ap.procTitle":{en:"From spec to shipment — four steps.",zh:"从规格到出货——四步完成。",vi:"Từ thông số đến giao hàng — bốn bước.",es:"De especificacion a envio — cuatro pasos.",ar:"من المواصفات إلى الشحنة — أربع خطوات."},"ap.certEyebrow":{en:"Certifications",zh:"认证资质",vi:"Chứng nhận",es:"Certificaciones",ar:"الشهادات"},"ap.certTitle":{en:"Audited. Tested. Documented.",zh:"审核·检测·文档齐备。",vi:"Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ.",es:"Auditado. Probado. Documentado.",ar:"مدقق. مُختبر. مُوثق."},"ap.partnersEyebrow":{en:"Trusted By",zh:"合作伙伴",vi:"Được tin dùng",es:"Confian",ar:"موثوق به من قبل"},"ap.partnersTitle":{en:"Global B2B partners.",zh:"全球B2B合作伙伴。",vi:"Đối tác B2B toàn cầu.",es:"Socios B2B globales.",ar:"شركاء B2B العالميين."},"ap.ctaTitle":{en:"Ready to specify HONG NGUYEN on your next project?",zh:"准备好在下一个项目中选用宏源了吗?",vi:"Sẵn sàng chọn HONG NGUYEN cho dự án tiếp theo?",es:"Listo para especificar HONG NGUYEN en su proximo proyecto?",ar:"جاهز لتحديد هونغ نغوين في مشروعك التالي؟"},"ap.ctaDesc":{en:"Our coating engineers respond the same business day.",zh:"我们的涂料工程师将在同一工作日内回复。",vi:"Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc.",es:"Nuestros ingenieros de recubrimientos responden el mismo dia habil.",ar:"مهندسو الطلاء لدينا يستجيبون في نفس يوم العمل."},"np.eyebrow":{en:"News & Blog",zh:"新闻与博客",vi:"Tin tức & Blog",es:"Noticias y Blog",ar:"الأخبار والمدونة"},"np.titleAccent":{en:"coatings floor.",zh:"涂料车间。",vi:"sản xuất sơn.",es:"produccion de recubrimientos.",ar:"طابق الطلاءات."},"np.titlePre":{en:"Field notes from the",zh:"来自",vi:"Ghi chép từ",es:"Notas desde la",ar:"ملاحظات من الميدان من"},"np.desc":{en:"Product launches, project milestones, certifications and engineering briefings — straight from our R&D lab and export desk.",zh:"产品发布、项目里程碑、认证与工程简报——来自我们的研发实验室与出口部门。",vi:"Ra mắt sản phẩm, cột mốc dự án, chứng nhận và tin kỹ thuật — trực tiếp từ phòng R&D và bộ phận xuất khẩu."},"np.featured":{en:"FEATURED",zh:"精选",vi:"NỔI BẬT",es:"FEATURED",ar:"مميز"},"np.stayEyebrow":{en:"Stay informed",zh:"保持关注",vi:"Cập nhật thông tin",es:"Mantente informado",ar:"ابقى على اطلاع"},"np.stayTitle":{en:"Get B2B coatings briefings, monthly.",zh:"每月获取B2B涂料简报。",vi:"Nhận tin vắn sơn B2B hàng tháng.",es:"Recibe resumenes de recubrimientos B2B, mensualmente.",ar:"احصل على موجزات الطلاءات B2B، شهرياً."},"np.stayDesc":{en:"Product launches, certification updates and engineering notes — no spam.",zh:"产品发布、认证更新与工程笔记——绝不发送垃圾邮件。",vi:"Ra mắt sản phẩm, cập nhật chứng nhận và ghi chép kỹ thuật — không spam.",es:"Lanzamientos de productos, actualizaciones de certificacion y notas de ingenieria — sin spam.",ar:"إطلاق المنتجات، تحديثات الشهادات وملاحظات الهندسية — بدون رسائل غير مرغوب فيها."},"np.all":{en:"All",zh:"全部",vi:"Tất cả",es:"Todos",ar:"الكل"},"cat.Product Launch":{en:"Product Launch",zh:"产品发布",vi:"Ra mắt sản phẩm"},"cat.Project":{en:"Project",zh:"项目",vi:"Dự án",es:"Proyecto",ar:"مشروع"},"cat.Certification":{en:"Certification",zh:"认证",vi:"Chứng nhận",es:"Certificacion",ar:"شهادة"},"cat.Export":{en:"Export",zh:"出口",vi:"Xuất khẩu",es:"Exportar",ar:"تصدير"},"cat.R&D":{en:"R&D",zh:"研发",vi:"R&D"},"cat.Industry":{en:"Industry",zh:"行业",vi:"Ngành",es:"Industria",ar:"الصناعة"},"fp.eyebrow":{en:"Frequently Asked Questions",zh:"常见问题",vi:"Câu hỏi thường gặp",es:"Preguntas Frecuentes",ar:"الأسئلة الشائعة"},"fp.titleAccent":{en:"B2B buyers.",zh:"B2B采购方。",vi:"khách hàng B2B.",es:"Compradores B2B.",ar:"المشترين B2B."},"fp.titlePre":{en:"Answers for",zh:"为",vi:"Câu trả lời cho",es:"Respuestas para",ar:"إجابات لـ"},"fp.desc":{en:"Everything you need to know about MOQ, lead time, custom formulation, OEM/private-label, certifications and export — in one place.",zh:"关于起订量、交期、定制配方、OEM/贴牌、认证与出口的全部信息——一站式了解。",vi:"Mọi thông tin về MOQ, thời gian giao hàng, phối chế theo yêu cầu, OEM/nhãn riêng, chứng nhận và xuất khẩu — tất cả tại một nơi."},"fp.searchPlaceholder":{en:"Search questions…",zh:"搜索问题…",vi:"Tìm câu hỏi…",es:"Buscar preguntas…",ar:"البحث عن أسئلة..."},"fp.sidebarTitle":{en:"Can't find an answer?",zh:"找不到答案?",vi:"Không tìm thấy câu trả lời?",es:"¿No encuentras una respuesta?",ar:"هل لا تجد إجابة؟"},"fp.sidebarDesc":{en:"Our coating engineers respond the same business day. Tell us your substrate, environment and performance targets.",zh:"我们的涂料工程师将在同一工作日内回复。告诉我们您的基材、环境及性能目标。",vi:"Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc. Hãy cho chúng tôi biết bề mặt, môi trường và yêu cầu kỹ thuật."},"fp.quickFacts":{en:"QUICK FACTS",zh:"快速概览",vi:"THÔNG TIN NHANH",es:"DATOS RÁPIDOS",ar:"حقائق سريعة"},"fp.moq":{en:"MOQ",zh:"起订量",vi:"MOQ",es:"MOQ",ar:"كمية الحد الأدنى للطلب (MOQ)"},"fp.sampleLead":{en:"Sample lead",zh:"样品周期",vi:"Thời gian giao mẫu",es:"Tiempo de entrega de muestra",ar:"وقت شحن العينة"},"fp.prodLead":{en:"Production lead",zh:"生产周期",vi:"Thời gian sản xuất",es:"Tiempo de producción",ar:"وقت الإنتاج"},"fp.warranty":{en:"Warranty",zh:"质保",vi:"Bảo hành",es:"Garantía",ar:"ضمان"},"fp.exportCountries":{en:"Export countries",zh:"出口国家",vi:"Quốc gia xuất khẩu",es:"Países de exportación",ar:"دول التصدير"},"fp.noResults":{en:"No questions match",zh:"没有匹配的问题",vi:"Không có câu hỏi phù hợp",es:"No hay preguntas coincidentes",ar:"لا توجد أسئلة مطابقة"},"fp.tryOrAsk":{en:". Try another term or",zh:"。请尝试其他关键词,或",vi:". Thử từ khóa khác hoặc",es:". Prueba otro término o",ar:". جرب مصطلحًا آخر أو"},"ctp.index":{en:"[ 09 ]",zh:"[ 09 ]",vi:"[ 09 ]",es:"[ 09 ]",ar:"[ 09 ]"},"ctp.eyebrow":{en:"Request Quote",zh:"申请报价",vi:"Yêu cầu báo giá",es:"Solicitar Cotización",ar:"طلب عرض سعر"},"ctp.title1":{en:"Get a quote in 24 hours.",zh:"24小时内报价。",vi:"Báo giá trong 24 giờ."},"ctp.title2":{en:"Sample shipped in 48.",zh:"48小时内寄样。",vi:"Giao mẫu trong 48 giờ."},"ctp.desc":{en:"Tell us your project — substrate, environment, performance requirements. Our coating engineers respond same business day.",zh:"告诉我们您的项目——基材、环境、性能要求。我们的涂料工程师将在同一工作日内回复。",vi:"Hãy cho chúng tôi biết dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật. Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc."},"ctp.directEyebrow":{en:"Direct Contact",zh:"直接联系",vi:"Liên hệ trực tiếp",es:"Contacto Directo",ar:"اتصال مباشر"},"ctp.directTitle":{en:"Talk to a coating engineer.",zh:"与涂料工程师对话。",vi:"Trò chuyện với kỹ sư sơn.",es:"Habla con un ingeniero de recubrimientos.",ar:"تحدث مع مهندس coatings."},"ctp.directDesc":{en:"Prefer to reach us directly? Use the channels below — we monitor them every business day.",zh:"希望直接联系我们?通过以下渠道——我们每个工作日都关注。",vi:"Muốn liên hệ trực tiếp? Sử dụng các kênh dưới đây — chúng tôi theo dõi mỗi ngày làm việc."},"ctp.trustQuote":{en:"Quote response",zh:"报价响应",vi:"Phản hồi báo giá",es:"Respuesta de cotización",ar:"رد على العرض"},"ctp.trustSample":{en:"Sample ships",zh:"样品寄出",vi:"Giao mẫu",es:"Envío de muestra",ar:"شحن العينة"},"ctp.trustWarranty":{en:"Warranty",zh:"质保",vi:"Bảo hành",es:"Garantía",ar:"ضمان"},"ctp.successTitle":{en:"Inquiry received",zh:"询盘已收到",vi:"Đã nhận yêu cầu",es:"Solicitud recibida",ar:"تم استلام الاستفسار"},"ctp.successDesc":{en:"Our coating engineers will respond within one business day. For urgent requests, message us on WhatsApp.",zh:"我们的涂料工程师将在1个工作日内回复。如有紧急需求,请通过WhatsApp联系我们。",vi:"Kỹ sư sơn sẽ phản hồi trong vòng 1 ngày làm việc. Yêu cầu khẩn xin nhắn qua WhatsApp."},"ctp.formPrivacy":{en:"We respond within 1 business day. Your data is kept confidential.",zh:"我们将在1个工作日内回复。您的信息将严格保密。",vi:"Chúng tôi phản hồi trong 1 ngày làm việc. Thông tin của bạn được bảo mật."},"ctp.globalEyebrow":{en:"Global Export",zh:"全球出口",vi:"Xuất khẩu toàn cầu",es:"Exportación Global",ar:"تصدير عالمي"},"ctp.globalTitle":{en:"Serving 60+ countries worldwide.",zh:"服务全球60+国家。",vi:"Phục vụ 60+ quốc gia toàn cầu.",es:"Sirviendo a más de 60 países en todo el mundo.",ar:"نخدم أكثر من 60 country حول العالم."},"ctp.globalDesc":{en:"Active distributor and logistics channels across six regions.",zh:"六大区域均有活跃的经销商与物流渠道。",vi:"Kênh phân phối và logistics hoạt động tại sáu khu vực.",es:"Canales de distribución y logística activos en seis regiones.",ar:"قنوات توزيع وتجنة نشطة في ست مناطق."},"form.fullName":{en:"Full name",zh:"姓名",vi:"Họ tên",es:"Nombre completo",ar:"الاسم الكامل"},"form.company":{en:"Company",zh:"公司",vi:"Công ty",es:"Empresa",ar:"الشركة"},"form.email":{en:"Email",zh:"邮箱",vi:"Email",es:"Correo electrónico",ar:"البريد الإلكتروني"},"form.phone":{en:"Phone / WhatsApp",zh:"电话 / WhatsApp",vi:"Điện thoại / WhatsApp",es:"Teléfono / WhatsApp",ar:"الهاتف / WhatsApp"},"form.country":{en:"Country / region",zh:"国家 / 地区",vi:"Quốc gia / khu vực",es:"País / región",ar:"0"},"form.product":{en:"Product of interest",zh:"意向产品",vi:"Sản phẩm quan tâm",es:"Producto de interés",ar:"1"},"form.productPlaceholder":{en:"Select a system…",zh:"选择系统…",vi:"Chọn hệ sơn…",es:"Seleccionar un sistema…",ar:"2"},"form.substrate":{en:"Substrate",zh:"基材",vi:"Bề mặt",es:"Sustrato",ar:"3"},"form.environment":{en:"Environment",zh:"环境",vi:"Môi trường",es:"Entorno",ar:"4"},"form.quantity":{en:"Quantity (kg)",zh:"数量 (kg)",vi:"Số lượng (kg)",es:"Cantidad (kg)",ar:"5"},"form.message":{en:"Project details",zh:"项目详情",vi:"Chi tiết dự án",es:"Detalles del proyecto",ar:"6"},"form.messagePlaceholder":{en:"Describe your project — substrate, environment, performance requirements, timeline…",zh:"请描述您的项目——基材、环境、性能要求、时间表……",vi:"Mô tả dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật, thời gian…"},"form.namePlaceholder":{en:"Your name",zh:"您的姓名",vi:"Tên của bạn",es:"Su nombre",ar:"7"},"form.companyPlaceholder":{en:"Company / org",zh:"公司 / 机构",vi:"Công ty / tổ chức",es:"Empresa / org",ar:"8"},"form.emailPlaceholder":{en:"you@company.com",zh:"you@company.com",vi:"you@company.com",es:"you@company.com",ar:"9"},"form.phonePlaceholder":{en:"+84 ...",zh:"+84 ...",vi:"+84 ...",es:"+84 ...",ar:"10"},"form.countryPlaceholder":{en:"Vietnam",zh:"越南",vi:"Việt Nam",es:"Vietnam",ar:"11"},"form.substratePlaceholder":{en:"Steel / concrete / …",zh:"钢材 / 混凝土 / …",vi:"Thép / bê tông / …",es:"Acero / hormigón / …",ar:"12"},"form.environmentPlaceholder":{en:"Marine / indoor / …",zh:"海洋 / 室内 / …",vi:"Biển / trong nhà / …",es:"Marino / interior / …",ar:"13"},"form.quantityPlaceholder":{en:"e.g. 2,000",zh:"如 2,000",vi:"vd. 2.000",es:"ej. 2,000",ar:"14"},"form.other":{en:"Other / not sure",zh:"其他 / 不确定",vi:"Khác / chưa rõ",es:"Otro / no seguro",ar:"15"},"form.required":{en:"*",zh:"*",vi:"*",es:"*",ar:"16"},"err.nameRequired":{en:"Name is required.",zh:"请填写姓名。",vi:"Vui lòng nhập họ tên.",es:"El nombre es requerido.",ar:"17"},"err.emailRequired":{en:"A valid email is required.",zh:"请填写有效的邮箱地址。",vi:"Vui lòng nhập email hợp lệ.",es:"Se requiere un correo electrónico válido.",ar:"18"},"err.messageRequired":{en:"Please describe your project.",zh:"请描述您的项目。",vi:"Vui lòng mô tả dự án.",es:"Describa su proyecto.",ar:"19"},"err.generic":{en:"Something went wrong. Please try again.",zh:"出现错误,请重试。",vi:"Đã xảy ra lỗi. Vui lòng thử lại.",es:"Algo salió mal. Inténtalo de nuevo.",ar:"20"},"err.couldNotSend":{en:"Could not send",zh:"发送失败",vi:"Không thể gửi",es:"No se pudo enviar",ar:"21"},"toast.inquiryTitle":{en:"Inquiry received",zh:"询盘已收到",vi:"Đã nhận yêu cầu",es:"Solicitud recibida",ar:"22"},"toast.inquiryDesc":{en:"Thanks — our coating engineers will respond within one business day.",zh:"感谢您——我们的涂料工程师将在1个工作日内回复。",vi:"Cảm ơn bạn — kỹ sư sơn sẽ phản hồi trong vòng 1 ngày làm việc."},"misc.area":{en:"Area",zh:"面积",vi:"Diện tích",es:"Área",ar:"23"},"misc.system":{en:"System",zh:"系统",vi:"Hệ thống",es:"Sistema",ar:"24"},"misc.duration":{en:"Duration",zh:"工期",vi:"Thời gian",es:"Duración",ar:"25"},"misc.weatherability":{en:"Weatherability",zh:"耐候性",vi:"Khả năng chịu thời tiết",es:"Resistencia a la intemperie",ar:"26"},"misc.base":{en:"Base",zh:"基料",vi:"Nhựa nền",es:"Base",ar:"27"},"misc.dft":{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT",ar:"28"},"misc.saltSpray":{en:"Salt Spray",zh:"盐雾",vi:"Phun muối",es:"Ensaye de sal",ar:"29"},"misc.packaging":{en:"Packaging",zh:"包装",vi:"Đóng gói",es:"Empaque",ar:"التعبئة"},"misc.tempRange":{en:"Temp Range",zh:"温度范围",vi:"Nhiệt độ",es:"Rango de temperatura",ar:"مدى درجة الحرارة"},"misc.cure":{en:"Cure",zh:"固化",vi:"Khâu đông",es:"Curado",ar:"التصلب"},"misc.thickness":{en:"Thickness",zh:"厚度",vi:"Độ dày",es:"Espesor",ar:"السمك"},"misc.traffic":{en:"Traffic",zh:"承重",vi:"Tải trọng",es:"Tráfico",ar:"المرور"},"misc.weatherabilityShort":{en:"Weatherability",zh:"耐候性",vi:"Chịu thời tiết",es:"Resistencia climática",ar:"المقاومة للطقس"},"misc.gloss":{en:"Gloss",zh:"光泽",vi:"Độ bóng",es:"Brillo",ar:"اللمعان"},"misc.type":{en:"Type",zh:"类型",vi:"Loại",es:"Tipo",ar:"النوع"},"misc.fireRating":{en:"Fire Rating",zh:"防火等级",vi:"Cấp cháy",es:"Clasificación contra incendios",ar:"تصنيف مقاومة الحريق"},"misc.voc":{en:"VOC",zh:"VOC",vi:"VOC",es:"VOC",ar:"مركبات عضوية متطايرة (VOC)"},"misc.finish":{en:"Finish",zh:"饰面",vi:"Bề mặt",es:"Acabado",ar:"الطلاء"},"misc.rd":{en:"R&D",zh:"研发",vi:"R&D",es:"I+D",ar:"البحث والتطوير (R&D)"},"misc.sample":{en:"Sample",zh:"样品",vi:"Mẫu",es:"Muestra",ar:"عينة"},"misc.production":{en:"Production",zh:"生产",vi:"Sản xuất",es:"Producción",ar:"الإنتاج"},"misc.moqShort":{en:"MOQ",zh:"起订量",vi:"MOQ",es:"Cantidad mínima de pedido (MOQ)",ar:"الكمية الدنيا للطلب (MOQ)"},"misc.coated":{en:"m² coated in featured cases",zh:"m² 精选案例涂装面积",vi:"m² sơn trong các dự án tiêu biểu",es:"m² recubierto en casos destacados",ar:"متر مربع مغطى في الحالات المميزة"},"misc.defects":{en:"coating-failure defects reported",zh:"起涂层失效缺陷",vi:"lỗi sơn được báo cáo",es:"defectos de fallo de recubrimiento reportados",ar:"عيوب فشل الطلاء المبلغ عنها"},"misc.countriesServed":{en:"countries served",zh:"服务国家",vi:"quốc gia phục vụ",es:"países servidos",ar:"دول تخدمها"},"misc.warrantyStd":{en:"quality warranty standard",zh:"标准质保期",vi:"bảo hành tiêu chuẩn",es:"estándar de garantía de calidad",ar:"معيار ضمان الجودة"},"admin.title":{en:"Admin Console",zh:"后台管理控制台",vi:"Bảng quản trị",es:"Consola de administración",ar:"وحدة التحكم الإدارية"},"admin.eyebrow":{en:"Inquiry Management",zh:"询盘管理",vi:"Quản lý yêu cầu",es:"Gestión de consultas",ar:"إدارة الاستفسارات"},"admin.backToSite":{en:"Back to site",zh:"返回网站",vi:"Về trang web",es:"Volver al sitio",ar:"العودة إلى الموقع"},"admin.lockTitle":{en:"Admin Access",zh:"管理员访问",vi:"Truy cập quản trị",es:"Acceso de administrador",ar:"وصول المسؤول"},"admin.lockDesc":{en:"Enter the admin passphrase to continue.",zh:"请输入管理员口令以继续。",vi:"Nhập mật khẩu quản trị để tiếp tục.",es:"Ingrese la contraseña de administrador para continuar.",ar:"أدخل كلمة مرور المسؤول للمتابعة."},"admin.passphrase":{en:"Passphrase",zh:"口令",vi:"Mật khẩu",es:"Contraseña",ar:"كلمة المرور"},"admin.passphrasePlaceholder":{en:"Enter passphrase…",zh:"输入口令…",vi:"Nhập mật khẩu…",es:"Ingrese contraseña...",ar:"أدخل كلمة المرور..."},"admin.unlock":{en:"Unlock",zh:"解锁",vi:"Mở khóa",es:"Desbloquear",ar:"فك القفل"},"admin.lockError":{en:"Incorrect passphrase.",zh:"口令不正确。",vi:"Mật khẩu không đúng.",es:"Contraseña incorrecta.",ar:"كلمة مرور غير صحيحة."},"admin.lockout":{en:"Demo passphrase",zh:"演示口令",vi:"Mật khẩu demo",es:"Contraseña de demostración",ar:"كلمة المرور التجريبية"},"admin.statTotal":{en:"Total inquiries",zh:"询盘总数",vi:"Tổng yêu cầu",es:"Total de consultas",ar:"إجمالي الاستفسارات"},"admin.statNew":{en:"New",zh:"新询盘",vi:"Mới",es:"Nuevo",ar:"جديد"},"admin.statContacted":{en:"Contacted",zh:"已联系",vi:"Đã liên hệ",es:"Contactado",ar:"تم التواصل"},"admin.statClosed":{en:"Closed",zh:"已关闭",vi:"Đã đóng",es:"Cerrado",ar:"مغلق"},"admin.searchPlaceholder":{en:"Search name / company / email / message…",zh:"搜索姓名/公司/邮箱/留言…",vi:"Tìm tên / công ty / email / lời nhắn…",es:"Buscar nombre / empresa / correo electrónico / mensaje...",ar:"البحث باسم / شركة / بريد إلكتروني / رسالة..."},"admin.filterAll":{en:"All",zh:"全部",vi:"Tất cả",es:"Todo",ar:"الكل"},"admin.colInquiry":{en:"Inquiry",zh:"询盘",vi:"Yêu cầu",es:"Consulta",ar:"استفسار"},"admin.colContact":{en:"Contact",zh:"联系方式",vi:"Liên hệ",es:"Contacto",ar:"اتصال"},"admin.colProduct":{en:"Product",zh:"产品",vi:"Sản phẩm",es:"Producto",ar:"منتج"},"admin.colStatus":{en:"Status",vi:"Trạng thái",zh:"状态"},"admin.colDate":{en:"Received",zh:"收到时间",vi:"Nhận",es:"Recibido",ar:"تم الاستلام"},"admin.colActions":{en:"Actions",zh:"操作",vi:"Thao tác",es:"Acciones",ar:"إجراءات"},"admin.view":{en:"View",zh:"查看",vi:"Xem",es:"Ver",ar:"عرض"},"admin.markContacted":{en:"Mark contacted",zh:"标记已联系",vi:"Đánh dấu đã liên hệ",es:"Marcar como contactado",ar:"تحديد كمتواصل"},"admin.markClosed":{en:"Mark closed",zh:"标记已关闭",vi:"Đánh dấu đã đóng",es:"Marcar como cerrado",ar:"تحديد كمغلق"},"admin.reopen":{en:"Reopen as new",zh:"重新标记为新",vi:"Mở lại thành mới",es:"Reabrir como nuevo",ar:"إعادة فتح كجديد"},"admin.delete":{en:"Delete",zh:"删除",vi:"Xóa",es:"Eliminar",ar:"حذف"},"admin.deleteConfirm":{en:"Delete this inquiry permanently?",zh:"永久删除这条询盘?",vi:"Xóa vĩnh viễn yêu cầu này?",es:"¿Eliminar esta consulta permanentemente?",ar:"هل تريد حذف هذا الاستفسار بشكل دائم؟"},"admin.detail":{en:"Inquiry detail",zh:"询盘详情",vi:"Chi tiết yêu cầu",es:"Detalle de la consulta",ar:"تفاصيل الاستفسار"},"admin.noResults":{en:"No inquiries match this filter.",zh:"没有匹配的询盘。",vi:"Không có yêu cầu phù hợp.",es:"Ninguna consulta coincide con este filtro.",ar:"لا يوجد استفسارات تطابق هذا الفلتر."},"admin.empty":{en:"No inquiries yet. Submit the contact form to see one here.",zh:"暂无询盘。提交联系表单后将会显示在这里。",vi:"Chưa có yêu cầu. Gửi biểu mẫu liên hệ để xem tại đây.",es:"Aún no hay consultas. Envía el formulario de contacto para ver una aquí.",ar:"لا يوجد استفسارات بعد. أرسل نموذج الاتصال لترى واحدا هنا."},"admin.loading":{en:"Loading…",zh:"加载中…",vi:"Đang tải…",es:"Cargando...",ar:"جاري التحميل..."},"admin.refresh":{en:"Refresh",zh:"刷新",vi:"Làm mới",es:"Actualizar",ar:"تحديث"},"admin.logout":{en:"Log out",zh:"退出",vi:"Đăng xuất",es:"Cerrar sesión",ar:"تسجيل خروج"},"admin.note":{en:"Demo-level security. For production, add NextAuth + server-side sessions.",zh:"演示级安全防护。生产环境请接入 NextAuth + 服务端会话。",vi:"Bảo mật mức demo. Môi trường production hãy dùng NextAuth + phiên máy chủ.",es:"Seguridad de nivel de demostración. Para producción, añade NextAuth + sesiones del lado del servidor.",ar:"أمان مستوى التجربة. للإنتاج، أضف NextAuth + جلسات جانب الخادم."},"admin.fieldMessage":{en:"Message",zh:"留言",vi:"Lời nhắn",es:"Mensaje",ar:"رسالة"},"admin.fieldSubstrate":{en:"Substrate",zh:"基材",vi:"Bề mặt",es:"Sustrato",ar:"الركيزة"},"admin.fieldEnvironment":{en:"Environment",zh:"环境",vi:"Môi trường",es:"Entorno",ar:"بيئة"},"admin.fieldQuantity":{en:"Quantity",zh:"数量",vi:"Số lượng",es:"Cantidad",ar:"كمية"},"admin.export":{en:"Export CSV",zh:"导出 CSV",vi:"Xuất CSV",es:"Exportar CSV",ar:"تصدير CSV"},"admin.lastUpdated":{en:"Last updated",zh:"最后更新",vi:"Cập nhật lần cuối",es:"Última actualización",ar:"آخر تحديث"},"seo.home.title":{en:"HONG NGUYEN Specialty Coatings — Premium Industrial Paint Manufacturer",zh:"宏源特种涂料 — 优质工业漆制造商",vi:"HONG NGUYEN — Nhà sản xuất sơn công nghiệp cao cấp",es:"HONG NGUYEN — Fabricante Premium de Pinturas Industriales",ar:"HONG NGUYEN — مصنع الطلاءات الصناعية المتقدمة"},"seo.home.desc":{en:"ISO 9001 certified industrial paint manufacturer since 2003. Anti-corrosion, high-temperature, epoxy floor, architectural coatings. OEM/ODM, export to 60+ countries.",zh:"ISO 9001认证工业漆制造商,自2003年。防腐漆、耐高温漆、环氧地坪漆、建筑涂料。OEM/ODM,出口60+国家。",vi:"Nhà sản xuất sơn công nghiệp ISO 9001 từ 2003. Sơn chống ăn mòn, chịu nhiệt, nền epoxy, kiến trúc. OEM/ODM, xuất khẩu 60+ quốc gia.",es:"Fabricante de pintura industrial certificado ISO 9001 desde 2003. Pintura anticorrosiva, alta temperatura, piso epoxi, arquitectonica. OEM/ODM, exportacion a 60+ paises.",ar:"مصنع طلاء صناعي معتمد ISO 9001 منذ 2003. طلاء مضاد للتآكل، عالي الحرارة، أرضيات إيبوكسي، معماري. OEM/ODM، تصدير إلى 60+ دولة."},"seo.products.title":{en:"Industrial Coatings Catalog — Anti-Corrosion, Epoxy, High-Temp, Fluorocarbon Paints",zh:"工业涂料目录 — 防腐漆、环氧、耐高温、氟碳漆",vi:"Catalog sơn công nghiệp — chống ăn mòn, epoxy, chịu nhiệt, fluorocarbon",es:"Catalogo de Recubrimientos Industriales — Anticorrosivos, Epoxi, Alta Temperatura, Fluorocarbono",ar:"كتالوج الطلاءات الصناعية — مضادة للتآكل، إيبوكسي، عالية الحرارة، فلوروكربون"},"seo.products.desc":{en:"Six coating systems: anti-corrosion, high-temperature, epoxy floor, weatherproof exterior, architectural wall, custom engineered. 58 product models with full TDS.",zh:"六大涂料体系:防腐、耐高温、环氧地坪、耐候外墙、建筑墙面、定制工程。58个产品型号,含完整TDS。",vi:"Sáu hệ sơn: chống ăn mòn, chịu nhiệt, nền epoxy, ngoại thất, kiến trúc, kỹ thuật đặc thù. 58 mẫu sản phẩm với TDS đầy đủ.",es:"Seis sistemas de recubrimiento: anticorrosivo, alta temperatura, piso epoxi, exterior, arquitectonico, personalizado. 58 modelos con TDS completo.",ar:"ستة أنظمة طلاء: مضاد للتآكل، عالي الحرارة، أرضيات إيبوكسي، خارجي، معماري، مخصص. 58 موديل مع ورقة بيانات تقنية كاملة."},"seo.solutions.title":{en:"Industry Coating Solutions — Oil & Gas, Marine, Power, Infrastructure, Architecture",zh:"行业涂料解决方案 — 石油天然气、海洋、电力、基础设施、建筑",vi:"Giai phap son nganh — Dau khi, hang hai, dien, ha tang, kien truc",es:"Soluciones de Recubrimiento Industrial — Petroleo, Marina, Energia, Infraestructura, Arquitectura",ar:"حلول الطلاء الصناعي — النفط والغاز، البحرية، الطاقة، البنية التحتية، المعمار"},"seo.solutions.desc":{en:"Coating systems for oil & gas, marine, power generation, infrastructure, commercial architecture, and industrial flooring. Engineered for C5 corrosive environments per ISO 12944.",zh:"石油天然气、海洋、电力、基础设施、商业建筑、工业地坪涂料系统。按ISO 12944设计,适用于C5腐蚀环境。",vi:"Hệ sơn cho dầu khí, hàng hải, điện, hạ tầng, kiến trúc, sàn công nghiệp. Thiết kế theo ISO 12944 cho môi trường C5.",es:"Sistemas de recubrimiento para petroleo, marina, energia, infraestructura, arquitectura, pisos industriales. Disenados para entornos C5 segun ISO 12944.",ar:"أنظمة طلاء للنفط والغاز، البحرية، الطاقة، البنية التحتية، المعمار، الأرضيات الصناعية. مصممة لبيئات C5 وفق ISO 12944."},"seo.cases.title":{en:"Project Cases — Steel Plant, Warehouse Epoxy Floor, Commercial Tower Facade",zh:"项目案例 — 钢铁厂、仓库环氧地坪、商业塔楼外墙",vi:"Dự án tiêu biểu — nhà thép, sàn epoxy kho, mặt tiền tháp thương mại",es:"Casos de Proyecto — Planta de Acero, Piso Epoxi, Fachada de Torre",ar:"حالات المشاريع — مصنع الصلب، أرضية إيبوكسي، واجهة البرج"},"seo.cases.desc":{en:"Field-proven coating projects: 12,000 m² anti-corrosion steel plant, 8,500 m² epoxy warehouse floor, 22,000 m² fluorocarbon tower facade.",zh:"现场验证的涂装项目:12,000 m²防腐钢铁厂、8,500 m²环氧地坪仓库、22,000 m²氟碳塔楼外墙。",vi:"Dự án sơn thực tế: 12.000 m² chống ăn mòn, 8.500 m² sàn epoxy, 22.000 m² fluorocarbon.",es:"Proyectos de recubrimiento probados: 12.000 m² anticorrosion, 8.500 m² epoxi, 22.000 m² fluorocarbono.",ar:"مشاريع طلاء مثبتة: 12,000 م² مضاد للتآكل، 8,500 م² إيبوكسي، 22,000 م² فلوروكربون."},"seo.about.title":{en:"About HONG NGUYEN — 22 Years Industrial Coatings Expertise from China",zh:"关于宏源 — 22年工业涂料经验,源自中国涂料之乡",vi:"Về HONG NGUYEN — 22 năm kinh nghiệm sơn công nghiệp",es:"Sobre HONG NGUYEN — 22 anos de experiencia en recubrimientos industriales",ar:"عن HONG NGUYEN — 22 عامًا من الخبرة في الطلاءات الصناعية"},"seo.about.desc":{en:"Founded 2003 in Shunde, China's coatings hometown. ISO 9001/14001 certified, 12-chemist R&D team, 50,000 t/yr production, export to 60+ countries.",zh:"2003年成立于中国涂料之乡顺德。ISO 9001/14001认证,12人研发团队,5万吨/年产能,出口60+国家。",vi:"Thành lập 2003 tại Shunde, quê hương sơn Trung Quốc. ISO 9001/14001, đội R&D 12 người, 50.000 tấn/năm, xuất khẩu 60+ quốc gia.",es:"Fundada en 2003 en Shunde, capital de recubrimientos de China. ISO 9001/14001, equipo I+D de 12 personas, 50.000 t/año, exportacion a 60+ paises.",ar:"تأسست عام 2003 في شوندي، عاصمة الطلاءات في الصين. ISO 9001/14001، فريق بحث وتطوير من 12 شخصًا، 50,000 طن/سنة، تصدير إلى 60+ دولة."},"seo.news.title":{en:"News & Blog — Product Launches, Certifications, Engineering Briefings",zh:"新闻与博客 — 产品发布、认证、工程简报",vi:"Tin tức & Blog — ra mắt sản phẩm, chứng nhận, tin kỹ thuật",es:"Noticias y Blog — lanzamientos, certificaciones, ingenieria",ar:"الأخبار والمدونة — إطلاق المنتجات، الشهادات، النشرات الهندسية"},"seo.news.desc":{en:"Latest news from HONG NGUYEN: FEVE fluorocarbon topcoat launch, ISO 14001 renewal, R&D lab upgrade, export expansion to 60+ countries.",zh:"宏源最新动态:FEVE氟碳面漆发布、ISO 14001续证、研发实验室升级、出口扩展至60+国家。",vi:"Tin mới nhất: ra mắt FEVE fluorocarbon, gia hạn ISO 14001, nâng cấp R&D, mở rộng xuất khẩu.",es:"Ultimas noticias: lanzamiento FEVE fluorocarbono, renovacion ISO 14001, mejora R&D, expansion de exportacion.",ar:"آخر الأخبار: إطلاق FEVE fluorocarbon، تجديد ISO 14001، ترقية البحث والتطوير، توسيع التصدير."},"seo.faq.title":{en:"FAQ — MOQ, Lead Time, OEM, Certifications, Export | HONG NGUYEN",zh:"常见问题 — 起订量、交期、OEM、认证、出口 | 宏源",vi:"Câu hỏi thường gặp — MOQ, giao hàng, OEM, chứng nhận, xuất khẩu",es:"Preguntas Frecuentes — MOQ, entrega, OEM, certificaciones, exportacion",ar:"الأسئلة الشائعة — الحد الأدنى للطلب، التسليم، OEM، الشهادات، التصدير"},"seo.faq.desc":{en:"Answers to common B2B questions: 200kg MOQ, 7-day samples, 30-day production, OEM/ODM, REACH/IMO compliance, 60+ country export.",zh:"B2B常见问题解答:200kg起订、7天出样、30天量产、OEM/ODM、REACH/IMO合规、出口60+国家。",vi:"Trả lời B2B: MOQ 200kg, mẫu 7 ngày, sản xuất 30 ngày, OEM/ODM, REACH/IMO, xuất khẩu 60+ quốc gia.",es:"Respuestas B2B: MOQ 200kg, muestra 7 dias, produccion 30 dias, OEM/ODM, REACH/IMO, exportacion 60+ paises.",ar:"إجابات B2B: الحد الأدنى 200 كجم، عينة 7 أيام، إنتاج 30 يوم، OEM/ODM، REACH/IMO، تصدير 60+ دولة."},"seo.contact.title":{en:"Contact HONG NGUYEN — Get a Quote in 24 Hours, Sample in 48",zh:"联系宏源 — 24小时报价,48小时寄样",vi:"Liên hệ HONG NGUYEN — báo giá 24 giờ, mẫu 48 giờ",es:"Contacto HONG NGUYEN — cotizacion en 24 horas, muestra en 48",ar:"اتصل بـ HONG NGUYEN — عرض سعر خلال 24 ساعة، عينة خلال 48"},"seo.contact.desc":{en:"Contact HONG NGUYEN Specialty Coatings. Phone: +84 838 396 799, WhatsApp: +86 131 7420 8290, Email: hogoshi2023@gmail.com. Foshan, Guangdong, China.",zh:"联系宏源特种涂料。电话:+84 838 396 799,WhatsApp:+86 131 7420 8290,邮箱:hogoshi2023@gmail.com。广东佛山。",vi:"Liên hệ HONG NGUYEN. Điện thoại: +84 838 396 799, WhatsApp: +86 131 7420 8290, Email: hogoshi2023@gmail.com. Phósơn, Quảng Đông.",es:"Contacto: Telefono +84 838 396 799, WhatsApp: +86 131 7420 8290, Correo: hogoshi2023@gmail.com. Foshan, Guangdong, China.",ar:"اتصال: هاتف +84 838 396 799، واتساب +86 131 7420 8290، بريد hogoshi2023@gmail.com. فوشان، قوانغدونغ، الصين."}};function P(){let e=E(e=>e.locale),a=E(e=>e.setLocale),n=r.useCallback(a=>{let n=z[a];return n?n[e]??n.en:a},[e]),t=r.useCallback(a=>a?"string"==typeof a?a:a[e]??a.en:"",[e]);return{locale:e,setLocale:a,t:n,loc:t}}let H=[{code:"en",label:"English",short:"EN"},{code:"zh",label:"中文",short:"中"},{code:"vi",label:"Tiếng Việt",short:"VI"},{code:"es",label:"Español",short:"ES"},{code:"ar",label:"العربية",short:"ع"}];function A(){let e=E(e=>e.hydrate);return r.useEffect(()=>{e()},[e]),null}function D({className:e}){let{locale:a,setLocale:n}=P(),[t,o]=r.useState(!1),s=r.useRef(null);r.useEffect(()=>{let e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let c=H.find(e=>e.code===a)??H[0];return(0,i.jsxs)("div",{ref:s,className:(0,N.cn)("relative",e),children:[(0,i.jsxs)("button",{type:"button",onClick:()=>o(e=>!e),className:"inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-2.5 py-1 text-[12px] font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground","aria-haspopup":"listbox","aria-expanded":t,"aria-label":"Select language",children:[(0,i.jsx)(T,{className:"size-3.5 text-brand"}),(0,i.jsx)("span",{className:"font-mono tracking-wide",children:c.short}),(0,i.jsx)(S,{className:(0,N.cn)("size-3 transition-transform",t&&"rotate-180")})]}),t&&(0,i.jsx)("ul",{role:"listbox",className:"absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-xl",children:H.map(e=>(0,i.jsx)("li",{children:(0,i.jsxs)("button",{role:"option","aria-selected":e.code===a,onClick:()=>{n(e.code),o(!1)},className:(0,N.cn)("flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[13px] transition-colors hover:bg-accent",e.code===a?"text-foreground":"text-muted-foreground"),children:[(0,i.jsxs)("span",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"font-mono text-[10px] text-brand",children:e.short}),e.label]}),e.code===a&&(0,i.jsx)(C,{className:"size-3.5 text-brand"})]})},e.code))})]})}let U=j(e=>({page:"home",target:void 0,navigate:(a,n)=>{e({page:a,target:n}),window.scrollTo({top:0,behavior:"auto"})}})),M="HONG NGUYEN",F="宏源特种涂料",R={en:"ISO 9001 certified manufacturer of anti-corrosion, high-temperature, epoxy floor, and architectural coatings. Direct factory supply · OEM/ODM · Export to 60+ countries · 24-month quality warranty.",zh:"ISO 9001认证的防腐、耐高温、环氧地坪及建筑涂料制造商。工厂直供 · OEM/ODM · 出口60+国家 · 24个月质保。",vi:"Nhà sản xuất sơn chống ăn mòn, chịu nhiệt cao, sơn nền epoxy và sơn kiến trúc đạt ISO 9001. Cung ứng trực tiếp từ nhà máy · OEM/ODM · Xuất khẩu 60+ quốc gia · Bảo hành 24 tháng."},q="hogoshi2023@gmail.com",B="+84 838 396 799",Y="+86 131 7420 8290",I={en:"Xiashi Industrial Zone, Lunjiao Subdistrict, Shunde District, Foshan City, Guangdong Province, P.R.China",zh:"中国广东省佛山市顺德区伦教街道霞石工业区",vi:"Khu công nghiệp Xiashi, phường Lunjiao, quận Shunde, thành phố Phật Sơn, tỉnh Quảng Đông, Trung Quốc"},V=["ISO 9001:2015","ISO 14001:2015","CE","SGS"],W=[{value:"22+",label:{en:"Years Industry Experience",zh:"年行业经验",vi:"Năm kinh nghiệm",es:"Años de Experiencia en la Industria",ar:"سنوات الخبرة في الصناعة"},sub:{en:"Since 2003",zh:"自2003年",vi:"Từ 2003",es:"Desde 2003",ar:"منذ 2003"}},{value:"60+",label:{en:"Export Countries",zh:"出口国家",vi:"Quốc gia xuất khẩu",es:"Países de Exportación",ar:"دول التصدير"},sub:{en:"Global B2B",zh:"全球B2B",vi:"B2B toàn cầu",es:"B2B Global",ar:"B2B عالمي"}},{value:"50K",label:{en:"t/yr Production Capacity",zh:"吨/年产能",vi:"tấn/năm năng lực",es:"Capacidad de Producción t/año",ar:"سعة الإنتاج طن/سنة"},sub:{en:"In-house plant",zh:"自主工厂",vi:"Nhà máy nội bộ",es:"Planta propia",ar:"مصنع خاص"}},{value:"800+",label:{en:"Active B2B Clients",zh:"活跃B2B客户",vi:"Khách hàng B2B",es:"Clientes B2B Activos",ar:"عملاء B2B نشطون"},sub:{en:"Worldwide",zh:"遍布全球",vi:"Trên toàn cầu",es:"Mundial",ar:"عالمي"}}],K=[{label:{en:"Base Resin",zh:"基料树脂",vi:"Nhựa nền",es:"Resina Base",ar:"مادة أساسية راتنجية"},value:"Modified Epoxy / Acrylic"},{label:{en:"DFT Range",zh:"干膜厚度",vi:"DFT",es:"Rango DFT",ar:"مدى DFT"},value:"50 – 200 μm"},{label:{en:"Temp Resistance",zh:"耐温范围",vi:"Chịu nhiệt",es:"Resistencia a la Temperatura",ar:"مقاومة درجة الحرارة"},value:"−40°C to +600°C"},{label:{en:"Salt Spray",zh:"盐雾测试",vi:"Phun muối",es:"Ensaye de Niebla Salina",ar:"اختبار الرذاذ الملحي"},value:"≥ 1000 h ASTM B117"},{label:{en:"Adhesion",zh:"附着力",vi:"Độ bám dính",es:"Adherencia",ar:"الالتصاق"},value:"5 MPa (cross-cut 0)"},{label:{en:"VOC",zh:"VOC",vi:"VOC",es:"VOC",ar:"المركبات العضوية المتطايرة"},value:"< 50 g/L (low-VOC grade)"},{label:{en:"Packaging",zh:"包装",vi:"Đóng gói",es:"Empaque",ar:"التعبئة"},value:"5L / 20L / 200L drum"},{label:{en:"Lead Time",zh:"交货周期",vi:"Thời gian giao hàng",es:"Tiempo de Entrega",ar:"وقت التسليم"},value:"7 – 15 working days"},{label:{en:"MOQ",zh:"起订量",vi:"MOQ",es:"MOQ",ar:"الحد الأدنى للكمية المطلوبة"},value:"200 kg (mixed tones OK)"}],Q=[{code:"CAT-01",title:{en:"Anti-Corrosion Coatings",zh:"工业重防腐涂料",vi:"Sơn chống ăn mòn công nghiệp",es:"Recubrimientos Anti-corrosión",ar:"طلانات مضادة للتآكل"},short:{en:"Epoxy · Polyurethane · Zinc-rich primers",zh:"环氧·聚氨酯·富锌底漆",vi:"Epoxy · PU · lót giàu kẽm",es:"Epoxi · Poliuretano · Primers ricos en zinc",ar:"إيبوكسى · بولي يوريثان · أساسيات غنية بالزنك"},description:{en:"High-build epoxy, polyurethane, and zinc-rich primer systems for steel structures, pipelines, marine vessels, and offshore platforms. Engineered for 15+ year service life in C5-I / C5-M corrosive environments per ISO 12944.",zh:"高膜厚环氧、聚氨酯及富锌底漆体系,适用于钢结构、管道、船舶及海洋平台。按 ISO 12944 设计,在 C5-I / C5-M 腐蚀环境下使用寿命达 15 年以上。",vi:"Hệ epoxy dày, polyurethane và lót giàu kẽm cho kết cấu thép, đường ống, tàu biển và giàn ngoài khơi. Thiết kế theo ISO 12944, tuổi thọ 15+ năm trong môi trường ăn mòn C5-I / C5-M."},features:[{en:"Zinc-rich epoxy primer (80% zinc content)",zh:"富锌环氧底漆(含锌量80%)",vi:"Lót epoxy giàu kẽm (80% kẽm)",es:"Primer epoxi rico en zinc (80% de zinc)",ar:"مُحضِّر إيبوكسى غنى بالزنك (80% زنك)"},{en:"Salt spray ≥ 1500 h (ASTM B117)",zh:"盐雾 ≥ 1500 小时 (ASTM B117)",vi:"Phun muối ≥ 1500 giờ (ASTM B117)",es:"Ensaye de niebla salina ≥ 1500 h (ASTM B117)",ar:"اختبار الرذاذ الملحي ≥ 1500 ساعة (ASTM B117)"},{en:"Adhesion 5 MPa (cross-cut grade 0)",zh:"附着力 5 MPa(划格0级)",vi:"Bám dính 5 MPa (cắt chéo cấp 0)",es:"Adherencia 5 MPa (grado de corte transversal 0)",ar:"الالتصاق 5 ميجاباسكال (درجة القطع المتعامد 0)"},{en:"C5-I / C5-M per ISO 12944",zh:"符合 ISO 12944 C5-I / C5-M",vi:"Đạt ISO 12944 C5-I / C5-M",es:"C5-I / C5-M según ISO 12944",ar:"C5-I / C5-M según ISO 12944"}],specs:[{label:{en:"Base",zh:"基料",vi:"Nhựa nền",es:"Base",ar:"الأساس"},value:"Epoxy / PU / Zn-rich"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT (Espesor de película seca)",ar:"DFT (سمك الطلاء الجاف)"},value:"80 – 250 μm"},{label:{en:"Salt Spray",zh:"盐雾",vi:"Phun muối",es:"Prueba de niebla salina",ar:"اختبار الرذاذ الملحي"},value:"≥ 1500 h"},{label:{en:"Packaging",zh:"包装",vi:"Đóng gói",es:"Empaque",ar:"التعبئة"},value:"20L / 200L"}],categorySpecs:[{label:{en:"Salt Spray",zh:"盐雾",vi:"Phun muối",es:"Prueba de niebla salina",ar:"اختبار الرذاذ الملحي"},value:"≥1500h"},{label:{en:"Adhesion",zh:"附着力",vi:"Bám dính",es:"Adherencia",ar:"الالتصاق"},value:"5 MPa"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT (Espesor de película seca)",ar:"DFT (سمك الطلاء الجاف)"},value:"80–250 μm"},{label:{en:"Pot Life",zh:"适用期",vi:"Pot life",es:"Vida útil en la mezcla",ar:"العمر الافتراضي للخليط"},value:"2–6 h"}],models:[{model:"HN-AC-201",desc:{en:"Zinc-rich epoxy primer P5160 — two-component chemically-cured epoxy primer with up to 80% zinc in the dry film",zh:"环氧富锌底漆是一种双组份富梓环氧底漆,本品为双组份化学固化干燥型,干漆膜中锌粉含量高达80％",vi:"Sơn lót epoxy giàu kẽm P5160 — sơn lót epoxy hai thành phần đóng rắn hóa học, hàm lượng kẽm trong màng khô lên tới 80%",es:"Primero epoxi rico en zinc P5160 — prima epoxi de dos componentes, curada químicamente, con hasta 80% de zinc en la película seca",ar:"الطلاء الأساسي الغني بالزنك P5160 — طلاء إيبوكسيد ثنائي المكونات، يُعقَّم كيميائياً، يحتوي على ما يصل إلى 80% زنك في الطلاء الجاف"},details:{en:`[Product Overview]
HONG NGUYEN zinc-rich epoxy primer is a two-component zinc-rich epoxy primer. It is a two-component chemically-cured drying type with zinc powder content up to 80% in the dry film, offering outstanding anti-corrosion and abrasion resistance.

[Applications]
Used as a long-term protective primer on steel surfaces in moderate to severe corrosive environments. It can be overcoated with various specialized paint systems and also provides temporary protection for blast-cleaned steel plate surfaces as a welding primer. It can also serve as a high-grade anti-rust primer in fireproof coating systems.

[Physical Parameters]
Base resin: Epoxy resin
Color: Reddish-grey or grey
Mix ratio (base:curing agent): 10:1 by weight
Pot life: 8 hours / 20\xb0C
Flash point: 25\xb0C
Specific gravity: 2.3 kg/L
Solid volume content: 49%
Theoretical spreading rate: 12 m\xb2/L or 52 m\xb2/kg (at 40 \xb5m DFT)
Drying time: surface dry 1 hour; through dry 7 days (full cure)
Recoat interval: min 1 hour, max 7 days
Finish: Matte

[Application Guide]
Surface preparation: Steel surfaces must be dry, free of loose paint, grease and other contaminants. Blast-clean to Swedish standard Sa2.5, with surface roughness meeting RUGOTEST standard NO3, BN9A. Remove dust and grit before painting. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN zinc-rich epoxy primer, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Mid-coat: 1 coat HONG NGUYEN epoxy MIO high-build paint, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats acrylic enamel or HONG NGUYEN polyurethane enamel, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner (max by volume): brush 5-10%, airless spray 10%, conventional spray 15%
Cleaner: T0220

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Flammable. Keep away from fire sources; do not smoke in the application area.
3. Store in a cool, dry place.`,zh:`【产品概述】
宏源环氧富锌底漆是一种双组份富梓环氧底漆,本品为双组份化学固化干燥型,干漆膜中锌粉含量高达80％，其有优异的防腐蚀及耐磨损性能。

【适用范围】
作为长效保护底漆涂装在中等至严重腐蚀环境中的钢材表面。本品可被多种专门的油漆配套涂覆，也可为喷砂清洁过的钢板表面提供临时保护，作为焊接底漆。同时也可用作防火涂料的配套高级防锈底漆。

【物理参数】
漆基：环氧树脂
颜色：红灰色或灰色
混合比例：漆基：固化剂=10：1（重量比）
混合使用期：8小时/201
闪点：25℃
比重：2.3㎏/L
固体体积含量：49％
理论涂布率：12㎡∕L即52㎡∕㎏〔干膜40\xb5m计）
干燥时间表干：1小时；实干：7天(完全固化)
重涂间隔：最小1小时,最大7天
漆面：哑光

【施工说明】
表面处理：钢铁表面必须干燥,无松散漆层、油脂及其它污垢物。表面喷砂处理至瑞典标准Sa2.5级,表面粗糙度达到RUGOTEST标准NO3,BN9A。涂装前除去尘埃及砂粒。特殊表面处理请向本公司技术部査询。

【建议油漆配套】
底漆：宏源环氧富锌底漆涂一遍，参考用量：0.1L/㎡即10L∕㎡
中间漆：宏源环氧云铁厚浆漆涂一遍^参考用量：0.1L/㎡即10L∕㎡
面漆：丙烯酸磁漆或宏源聚氨酯磁漆涂二遍,参考用量0.2㎡∕L即5㎡∕L
施工方法：无气喷涂、刷涂或普通喷涂。
稀释剂：（最大体积用量)刷涂5-10％，无气喷涂10％普通喷涂15％
清洗剂：T0220

【安全守则】
1、施工时必须保持空气流通,并采用一定的防护措施。避免吸入溶剂蒸气或漆雾,皮肤、眼睛不得接触本品。
2、易燃物品,远离火源,在施工范围内不宜吸烟。
3、储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN l\xe0 sơn l\xf3t epoxy gi\xe0u kẽm hai th\xe0nh phần. Đ\xe2y l\xe0 loại đ\xf3ng rắn h\xf3a học hai th\xe0nh phần với h\xe0m lượng bột kẽm trong m\xe0ng kh\xf4 l\xean tới 80%, c\xf3 t\xednh năng chống ăn m\xf2n v\xe0 chống m\xe0i m\xf2n vượt trội.

[Ứng dụng]
Được sử dụng l\xe0m sơn l\xf3t bảo vệ d\xe0i hạn tr\xean bề mặt th\xe9p trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng. C\xf3 thể được phủ l\xean bởi nhiều hệ sơn chuy\xean dụng kh\xe1c nhau v\xe0 cũng cung cấp bảo vệ tạm thời cho bề mặt th\xe9p đ\xe3 phun c\xe1t, l\xe0m sơn l\xf3t h\xe0n. Đồng thời c\xf3 thể d\xf9ng l\xe0m sơn l\xf3t chống rỉ cao cấp trong hệ sơn chống ch\xe1y.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: X\xe1m đỏ hoặc x\xe1m
Tỷ lệ pha (nhựa:chất đ\xf3ng rắn): 10:1 theo trọng lượng
Thời gian sử dụng: 8 giờ / 20\xb0C
Điểm bắt lửa: 25\xb0C
Tỉ trọng: 2.3 kg/L
H\xe0m lượng rắn thể t\xedch: 49%
Lượng lan l\xfd thuyết: 12 m\xb2/L tức 52 m\xb2/kg (tại DFT 40 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 ho\xe0n to\xe0n 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 1 giờ, tối đa 7 ng\xe0y
Bề mặt: Mờ

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt th\xe9p phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất kh\xe1c. Phun c\xe1t đến ti\xeau chuẩn Thụy Điển Sa2.5, độ nh\xe1m bề mặt đạt ti\xeau chuẩn RUGOTEST NO3, BN9A. Loại bỏ bụi v\xe0 hạt c\xe1t trước khi sơn. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật của ch\xfang t\xf4i.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 tức 10 m\xb2/L
Lớp giữa: 1 lớp sơn epoxy mica oxit sắt d\xe0y HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 tức 10 m\xb2/L
Sơn phủ: 2 lớp sơn tr\xe1ng acrylic hoặc sơn tr\xe1ng polyurethane HONG NGUYEN, lượng tham khảo 0.2 L/m\xb2 tức 5 m\xb2/L
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 10%, phun thường 15%
Chất vệ sinh: T0220

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Product Overview]
El imprimente ep\xf3xico rico en zinc HONG NGUYEN es un imprimente ep\xf3xico rico en zinc de dos componentes. Es de secado tipo curado qu\xedmico de dos componentes, con contenido de polvo de zinc de hasta 80% en la pel\xedcula seca, ofreciendo excepcional resistencia a la corrosi\xf3n y al desgaste.

[Applications]
Se utiliza como imprimente protector de largo plazo en superficies de acero en entornos de corrosi\xf3n moderada a severa. Puede ser recubierto con diversos sistemas de pintura especializados y tambi\xe9n proporciona protecci\xf3n temporal para superficies de placas de acero arenadas como imprimente de soldadura. Tambi\xe9n puede servir como imprimente de alto grado anti-\xf3xido en sistemas de recubrimiento ign\xedfugo.

[Physical Parameters]
Resina base: Resina ep\xf3xica
Color: Gris-rojizo o gris
Relaci\xf3n de mezcla (base:agente curativo): 10:1 en peso
Vida \xfatil en el recipiente: 8 horas / 20\xb0C
Punto de inflamabilidad: 25\xb0C
Densidad espec\xedfica: 2,3 kg/L
Contenido de volumen s\xf3lido: 49%
Tasa de extensi\xf3n te\xf3rica: 12 m\xb2/L o 52 m\xb2/kg (a 40 \xb5m DFT)
Tiempo de secado: superficie seca 1 hora; seco completo 7 d\xedas (curado completo)
Intervalo de recubrimiento: m\xednimo 1 hora, m\xe1ximo 7 d\xedas
Acabado: Mate

[Application Guide]
Preparaci\xf3n de superficie: Las superficies de acero deben estar secas, libres de pintura suelta, grasa y otros contaminantes. Arenado hasta est\xe1ndar sueco Sa2,5, con rugosidad superficial`,ar:`[Product Overview]
مُسحِّق إيبوكسي غني بالزنك HONG NGUYEN هو مُسحِّق إيبوكسي غني بالزنك ثنائي المكون. إنه من نوع الجفاف بالتصلب الكيميائي ثنائي المكون، بمحتوى مسحوق زنك يصل إلى 80٪ في الفيلم الجاف، مما يوفر مقاومة استثنائية للتآكل والخدش.

[Applications]
يُستخدم كمُسحِّق واقٍ طويل الأمد على أسطح الصلب في البيئات المعرضة للتآكل المتوسط إلى الشديد. يمكن طلاؤه بأنظمة الطلاء المتخصصة المختلفة ويمكنه أيضًا توفير حماية مؤقتة لأسطح صفائح الصلب المقشرة بالرمل كمُسحِّق لللحام. كما يمكن أن يخدم كمُسحِّق عالي الجودة مضاد للصدأ في أنظمة طلاء مقاوم للحريق.

[Physical Parameters]
المستخلص الأساسي: إيبوكسيد
اللون: رمادي-أحمر أو رمادي
نسبة الخلط (المستخلص:مصلح التصلب): 10:1 بالوزن
مدة الصلاحية في الوعاء: 8 ساعة / 20 درجة مئوية
نقطة الاشتعال: 25 درجة مئوية
الكثافة النوعية: 2.3 كجم/لتر
محتوى الحجم الصلب: 49%
معدل الانتشار النظري: 12 م\xb2/لتر أو 52 م\xb2/كجم (عند 40 ميكرومتر DFT)
وقت الجفاف: سطح جاف بعد 1 ساعة؛ جاف بالكامل بعد 7 أيام (تصلب كامل)
فترة إعادة الطلاء: دقيقة 1 ساعة، كحد أقصى 7 أيام
النهاية: باهت

[Application Guide]
تحضير السطح: يجب أن تكون أسطح الصلب جافة وخالية من الطلاء المتساقط والدهون والملوثات الأخرى. تقشير بالرمل حتى المعيار السويدي Sa2.5، مع خشونة السطح`}},{model:"HN-AC-302",desc:{en:"Epoxy MIO intermediate paint — two-component epoxy paint formulated with micaceous iron oxide pigment",zh:"环氧云铁中间漆是一种由云母氧化铁为颜料配制而成的双组份环氧漆",vi:"Sơn lớp giữa epoxy mica oxit sắt — sơn epoxy hai thành phần phối chế với pigment mica oxit sắt",es:"Pintura intermedia epoxi MIO — pintura epoxi de dos componentes formulada con pigmentóxido férrico micáceo",ar:"الطلاء المتوسط الإيبوكسي MIO — طلاء إيبوكسيد ثنائي المكونات، معبَّ ببودرة أكسيد الحديد الميكاسيتي"},details:{en:`[Product Overview]
HONG NGUYEN epoxy MIO intermediate paint is a two-component epoxy paint formulated with micaceous iron oxide pigment. It offers resistance to seawater, corrosion, impact, mineral oils, aliphatic hydrocarbons and a wide range of chemicals.

[Applications]
1) Used as primer and intermediate coat in epoxy systems on steel and reinforced concrete surfaces.
2) Used as a high-quality intermediate and finish coat on bridges, vehicle decks, structural steel buildings, etc.
3) Used as a primer in epoxy systems on electroplated steel sheet and aluminum alloy surfaces.

[Physical Parameters]
Base resin: Epoxy resin
Color: Black, grey
Mix ratio: Base U5690 / Curing agent C5420 = 3:1 (by volume) = 5.8:1 (by weight)
Pot life: 5 h / 20\xb0C
Flash point: 26\xb0C
Specific gravity: 1.6 kg/L
Solid volume content: 48%
Theoretical spreading rate: 10 m\xb2/L (at 48 \xb5m DFT)
Drying time: surface dry 4 h, through dry (full cure): 7 days
Recoat interval: min 6 h, max 5 days
Finish: Flat

[Application Guide]
Surface preparation: The surface to be coated must be clean, free of grease and other contaminants. When used directly as an anti-rust primer, the steel must first be derusted; when used as intermediate or topcoat, it must be applied over a primed surface. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN zinc-rich epoxy primer P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN epoxy MIO intermediate paint, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN acrylic enamel F6700 or polyurethane enamel F5802, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.`,zh:`【产品概述】
HONG NGUYEN（宏源）环氧云铁中间漆是一种由云母氧化铁为颜料配制而成的双组份环氧漆，本品具有耐海水、耐腐蚀、抗碰撞、耐矿物油、脂肪烃及多种化学品性能。

【适用范围】
1）作为环氧系列的底漆和中间漆，用于钢铁和水泥混凝土表面。
2）作为优质的中间漆和面漆涂于桥梁、汽车甲板、钢结构建筑物等表面。
3）作为环氧漆系列的底漆涂用于电镀钢板和铝合金的表面。

【物理参数】
漆基：环氧树脂
颜色：黑色、灰色
混合比例：漆基U5690 / 固化剂C5420=3：1（体积比）=5.8：1（重量比）
混合使用期：5h / 20℃
闪点：26℃
比重：1.6kg/L
体积固体含量：48%
理论涂布量：10㎡/L（干膜48微米计）
干燥时间：表干4h，实干（完全固化）：7天
重涂间隔：最小6h，最大5天
漆面：平光

【施工说明】
表面处理：涂装表面必须清洁、无油脂及其它污垢物。直接作为防锈底漆时必须先对钢材进行防锈处理，作为中间漆或面漆必须涂在已涂有底漆的表面上。特殊表面处理请向本公司技术部查询。

【建议油漆配套】
底 漆：宏源环氧富锌底漆P5160涂一遍，参考用量：0.1L/㎡，即10㎡/L。
中间漆：宏源环氧云铁中间漆涂一遍，参考用量：0.1L/㎡，即10㎡/L。
面 漆：宏源丙烯酸磁漆F6700或聚氨酯磁漆F5802涂两遍，参考用量：0.2L/㎡，即5㎡/L。

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn lớp giữa epoxy mica oxit sắt HONG NGUYEN l\xe0 sơn epoxy hai th\xe0nh phần phối chế với pigment mica oxit sắt. C\xf3 khả năng chịu nước biển, chống ăn m\xf2n, chống va đập, chịu dầu kho\xe1ng, hydrocarbon b\xe9o v\xe0 nhiều loại h\xf3a chất.

[Ứng dụng]
1) D\xf9ng l\xe0m sơn l\xf3t v\xe0 lớp giữa trong hệ sơn epoxy tr\xean bề mặt th\xe9p v\xe0 b\xea t\xf4ng cốt th\xe9p.
2) D\xf9ng l\xe0m lớp giữa v\xe0 sơn phủ chất lượng cao tr\xean cầu, s\xe0n xe, nh\xe0 th\xe9p kết cấu, v.v.
3) D\xf9ng l\xe0m sơn l\xf3t trong hệ epoxy tr\xean bề mặt th\xe9p mạ điện v\xe0 hợp kim nh\xf4m.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: Đen, x\xe1m
Tỷ lệ pha: Nhựa U5690 / Chất đ\xf3ng rắn C5420 = 3:1 (thể t\xedch) = 5.8:1 (trọng lượng)
Thời gian sử dụng: 5 giờ / 20\xb0C
Điểm bắt lửa: 26\xb0C
Tỉ trọng: 1.6 kg/L
H\xe0m lượng rắn thể t\xedch: 48%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 48 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n: 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 6 giờ, tối đa 5 ng\xe0y
Bề mặt: Phẳng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch, kh\xf4ng c\xf3 dầu mỡ v\xe0 tạp chất kh\xe1c. Khi d\xf9ng trực tiếp l\xe0m sơn l\xf3t chống rỉ, th\xe9p phải được xử l\xfd chống rỉ trước; khi d\xf9ng l\xe0m lớp giữa hoặc sơn phủ phải thi c\xf4ng tr\xean bề mặt đ\xe3 c\xf3 sơn l\xf3t. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN P5160, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Lớp giữa: 1 lớp sơn lớp giữa epoxy mica oxit sắt HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn tr\xe1ng acrylic HONG NGUYEN F6700 hoặc sơn tr\xe1ng polyurethane F5802, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Product Overview]
La pintura intermedia epoxi HONG NGUYEN MIO es una pintura epoxi de dos componentes formulada con pigmento de \xf3xido f\xe9rrico mic\xe1ceo. Ofrece resistencia al agua de mar, corrosi\xf3n, impactos, aceites minerales, hidrocarburos alif\xe1ticos y una amplia gama de productos qu\xedmicos.

[Applications]
1) Se utiliza como imprimaci\xf3n y capa intermedia en sistemas epoxi en superficies de acero y hormig\xf3n armado.
2) Se utiliza como capa intermedia y acabado de alta calidad en puentes, cubiertas de veh\xedculos, edificios de acero estructural, etc.
3) Se utiliza como imprimaci\xf3n en sistemas epoxi en chapas de acero galvanizado y superficies de aleaciones de aluminio.

[Physical Parameters]
Resina base: Resina epoxi
Color: Negro, gris
Proporci\xf3n de mezcla: Base U5690 / Agente curante C5420 = 3:1 (en volumen) = 5.8:1 (en peso)
Tiempo de vida en la lata: 5 h / 20\xb0C
Punto de inflamabilidad: 26\xb0C
Densidad espec\xedfica: 1.6 kg/L
Contenido de volumen s\xf3lido: 48%
Tasa de aplicaci\xf3n te\xf3rica: 10 m\xb2/L (a 48 \xb5m DFT)
Tiempo de secado: superficial 4 h, secado completo (curaci\xf3n total): 7 d\xedas
Intervalo de reencapado: m\xednimo 6 h, m\xe1ximo 5 d\xedas
Acabado: Mate

[Application Guide]
Preparaci\xf3n de superficie: La superficie a recubrir debe estar limpia, libre de grasas y otros contaminantes. Cuando se utiliza directamente como imprimaci\xf3n antihierro, el acero primero debe ser desoxidado; cuando se utiliza como int

[Recommended System]
[Safety]`,ar:`[Product Overview]
طلاء هونج نيوان الميوسيت إيبوكسي الوسيط هو طلاء إيبوكثي مكون من جزأين، مصمم بأكسيد الحديد الميكاسي. يوفر مقاومة للمياه البحرية، والتآكل، والصدمات، وزيوت المعادن، وهيدروكربونات الأليفات، ومجموعة واسعة من المواد الكيميائية.

[Applications]
1) يُستخدم كطبقة أساسية وطبقة وسيطة في أنظمة الإيبوكسي على أسطح الفولاذ والخرسانة المسلحة.
2) يُستخدم كطبقة وسيطة وطبقة نهائية عالية الجودة على الجسور، وأ decks المركبات، والمباني المعدنية الهيكلية، إلخ.
3) يُستخدم كطبقة أساسية في أنظمة الإيبوكسي على ألواح الفولاذ المُغطى بالكهرباء وسطائس سبائك الألومنيوم.

[Physical Parameters]
المادة الأساسية: راتنج الإيبوكسي
اللون: أسود، رمادي
نسبة الخلط: الأساس U5690 / مصلح التجمد C5420 = 3:1 (حسب الحجم) = 5.8:1 (حسب الوزن)
مدة الحياة في الوعاء: 5 ساعة / 20 درجة مئوية
نقطة الاشتعال: 26 درجة مئوية
الكثافة النوعية: 1.6 كجم/لتر
محتوى المادة الصلبة بالحجم: 48%
معدل التغطية النظري: 10 م\xb2/لتر (عند 48 ميكرون DFT)
وقت الجفاف: سطح جاف 4 ساعات، جاف بالكامل (تصلب كامل): 7 أيام
فترة إعادة التغطية: دنيا 6 ساعات، عظمى 5 أيام
الانتهاء: مسطح

[Application Guide]
تحضير السطح: يجب أن تكون السطح المطلوب طلاؤه نظيفًا، خاليًا من الدهون والشوائب الأخرى. عند الاستخدام المباشر كطبقة أساسية مضادة للصدأ، يجب أولاً إزالة الصدأ من الفولاذ؛ عند الاستخدام كطبقة وسيطة

[Recommended System]
[Safety]`}},{model:"HN-AC-405",desc:{en:"Super oil-resistant polyurethane topcoat F5802 — two-component polyurethane coating",zh:"超级油霸面漆F5802是一种双组份聚氨酯涂料",vi:"Sơn phủ polyurethane siêu chịu dầu F5802 — sơn polyurethane hai thành phần",es:"Barniz poliuretano súper resistente al aceite F5802 — recubrimiento poliuretano de dos componentes",ar:"الطلاء السطحي البولي يوريثان F5802 المقاوم للزيوت — طلاء بولي يوريثان ثنائي المكونات"},details:{en:`[Product Overview]
HONG NGUYEN super oil-resistant topcoat F5802 is a two-component polyurethane coating with excellent gloss and color retention. It offers outstanding water, animal and vegetable oil, abrasion, impact and UV resistance, suitable for moderate to severe corrosive environments.

[Applications]
1) Used as a long-term protective decorative topcoat on steel structure surfaces in severe corrosive environments.
2) Can be applied on non-ferrous metals, concrete, cement, wood, pipelines, fiberglass and other rigid material surfaces.
3) Used as a non-yellowing chemical-resistant topcoat over epoxy primer or intermediate coat.

[Physical Parameters]
Base resin: Acrylic polyurethane
Color: Multiple colors
Mix ratio: Base F5802 / Curing agent C5800 = 9:1 (by volume) = 10:1 (by weight)
Pot life: 3 h / 20\xb0C
Flash point: 31\xb0C
Specific gravity: 1.2 kg/L
Solid volume content: 42%
Theoretical spreading rate: 10 m\xb2/L or 8.3 m\xb2/kg (at 42 \xb5m DFT)
Drying time: surface dry 5 h, through dry (full cure): 7 days
Recoat interval: min 8 h, max 7 days
Finish: Semi-gloss or glossy

[Application Guide]
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
Primer: 1 coat HONG NGUYEN zinc-rich epoxy primer P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN epoxy MIO high-build paint U5690, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN polyurethane enamel F5802, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0220 (max by volume): brush 15-20%, airless spray 5%, conventional spray 30%
Cleaner: T0220

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.`,zh:`【产品概述】
HONG NGUYEN（宏源）超级油霸面漆F5802是一种双组份聚氨酯涂料，具有优异的保光及保色性。本品具有优异的耐水，耐动、植物油，耐磨损，抗碰撞及抗紫外线的特点，适宜在中等至严重腐蚀环境下使用。

【适用范围】
1）作为长效保护装饰面漆涂用在严重腐蚀环境中的钢结构表面。
2）可涂在有色金属、混凝土、水泥、木板、管道、玻璃钢及其它刚性材料表面。
3）作为不泛黄耐化学品面漆涂在环氧底漆或中间漆上。

【物理参数】
漆基：丙烯酸聚氨酯
颜色：多种颜色
混合比例：漆基F5802 / 固化剂C5800 = 9 ：1（体积比）
= 10 ：1（重量比）
混合使用期：3 h / 20℃
闪点：31 ℃
比重：1.2 kg/L
体积固体含量：42 %
理论涂布量：10 m2/L，即8.3 m2/kg（干膜42微米计）
干燥时间：表干5 小时，实干（完全固化）：7天
重涂间隔：最小8小时，最大7天
漆面：半光或亮光

【施工说明】
表面处理：施工表面必须清洁干燥，无松散漆层、油脂及其它污垢物。本品必须涂在预涂适当底漆的表面上。

【建议油漆配套】
底 漆：宏源环氧富锌底漆P5160涂一遍，参考用量：0.1 L/㎡，即10㎡/L。
中间漆：宏源环氧云铁厚浆漆U5690涂一遍，参考用量：0.1 L/㎡，即10㎡/L。
面 漆：宏源聚氨酯磁漆F5802涂两遍，参考用量：0.2 L/㎡，即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0220
（最大用量） 刷 涂：15～20 %
无气喷涂：5 %
一般喷涂：30 %
清 洗 剂：T0220

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn phủ si\xeau chịu dầu HONG NGUYEN F5802 l\xe0 sơn polyurethane hai th\xe0nh phần c\xf3 khả năng giữ b\xf3ng v\xe0 giữ m\xe0u vượt trội. C\xf3 khả năng chịu nước, dầu động thực vật, chịu m\xe0i m\xf2n, va đập v\xe0 chống tia cực t\xedm ưu việt, ph\xf9 hợp m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng.

[Ứng dụng]
1) D\xf9ng l\xe0m sơn phủ trang tr\xed bảo vệ d\xe0i hạn tr\xean bề mặt kết cấu th\xe9p trong m\xf4i trường ăn m\xf2n nặng.
2) C\xf3 thể thi c\xf4ng tr\xean kim loại m\xe0u, b\xea t\xf4ng, xi măng, gỗ, ống, fiberglass v\xe0 c\xe1c vật liệu cứng kh\xe1c.
3) D\xf9ng l\xe0m sơn phủ chịu h\xf3a chất kh\xf4ng ố v\xe0ng tr\xean sơn l\xf3t hoặc lớp giữa epoxy.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Acrylic polyurethane
M\xe0u: Nhiều m\xe0u
Tỷ lệ pha: Nhựa F5802 / Chất đ\xf3ng rắn C5800 = 9:1 (thể t\xedch) = 10:1 (trọng lượng)
Thời gian sử dụng: 3 giờ / 20\xb0C
Điểm bắt lửa: 31\xb0C
Tỉ trọng: 1.2 kg/L
H\xe0m lượng rắn thể t\xedch: 42%
Lượng lan l\xfd thuyết: 10 m\xb2/L tức 8.3 m\xb2/kg (tại DFT 42 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 5 giờ; kh\xf4 ho\xe0n to\xe0n: 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 7 ng\xe0y
Bề mặt: B\xe1n b\xf3ng hoặc b\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch v\xe0 kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 được sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN P5160, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Lớp giữa: 1 lớp sơn epoxy mica oxit sắt d\xe0y HONG NGUYEN U5690, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn tr\xe1ng polyurethane HONG NGUYEN F5802, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0220 (thể t\xedch tối đa): cọ 15-20%, phun kh\xf4ng kh\xed 5%, phun thường 30%
Chất vệ sinh: T0220

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN super oil-resistant topcoat F5802 es una capa superior de poliuretano de dos componentes con excelente brillo y retenci\xf3n de color. Ofrece una resistencia excepcional al agua, aceites animales y vegetales, abrasi\xf3n, impactos y rayos UV, adecuada para entornos de corrosi\xf3n moderada a severa.

[Aplicaciones]
1) Se utiliza como capa superior decorativa y protectora a largo plazo en superficies de estructuras de acero en entornos de corrosi\xf3n severa.
2) Puede aplicarse en superficies de metales no ferrosos, concreto, cemento, madera, tuber\xedas, fibra de vidrio y otros materiales r\xedgidos.
3) Se utiliza como capa superior resistente a qu\xedmicos que no amarillea sobre imprimatura epoxi o capa intermedia.

[Parametros Fisicos]
Resina base: Poliuretano acr\xedlico
Color: M\xfaltiples colores
Relaci\xf3n de mezcla: Base F5802 / Agente curante C5800 = 9:1 (en volumen) = 10:1 (en peso)
Vida \xfatil en el envase: 3 h / 20\xb0C
Punto de inflamaci\xf3n: 31\xb0C
Densidad espec\xedfica: 1,2 kg/L
Contenido de s\xf3lidos en volumen: 42%
Tasa de extensi\xf3n te\xf3rica: 10 m\xb2/L o 8,3 m\xb2/kg (a 42 \xb5m DFT)
Tiempo de secado: seco al tacto 5 h, seco completamente (curaci\xf3n total): 7 d\xedas
Intervalo de reaplicaci\xf3n: m\xednimo 8 h, m\xe1ximo 7 d\xedas
Acabado: Semibrillante o brillante

[Guia de Aplicacion]
Preparaci\xf3n de superficie: La superficie a recubrir debe estar limpia y seca, libre de pintura suelta, grasas...`,ar:`[نظرة عامة]
HONG NGUYEN طلاء مقاوم للزيوت الفائق F5802 هو طلاء بولي يوريثاني مكون من جزأين مع لمعان ممتاز واحتفاظ بالألوان. يوفر مقاومة استثنائية للماء والزيوت النباتية والحيوانية والاحتكاك والصدمات والأشعة فوق البنفسجية، مناسب للبيئات المعرضة للتآكل المتوسط إلى الشديد.

[التطبيقات]
1) يُستخدم كطلاء زخرفي ووقائي طويل الأمد على أسطح الهياكل الفولاذية في البيئات المعرضة للتآكل الشديد.
2) يمكن تطبيقه على أسطح المعادن غير الحديدية والخرسانة والإسمنت والخشب وأنابيب الألياف الزجاجية وغيرها من الأسطح الصلبة.
3) يُستخدم كطلاء مقاوم للمواد الكيميائية الذي لا يصفر فوق الطلاء الأساسي الإيبوكسيدي أو الطلاء الوسيط.

[المعلمات]
المستخدم الأساسي: بولي يوريثاني أكريليك
اللون: ألوان متعددة
نسبة الخلط: الأساس F5800 / عامل التصلب C5800 = 9:1 (حسب الحجم) = 10:1 (حسب الوزن)
العمر الافتراضي في الوعاء: 3 ساعة / 20 درجة مئوية
نقطة الوميض: 31 درجة مئوية
الكثافة النوعية: 1.2 كجم/لتر
محتوى المواد الصلحة بالحجم: 42%
معدل الانتشار النظري: 10 م\xb2/لتر أو 8.3 م\xb2/كجم (عند سمك جاف 42 ميكرومتر)
وقت الجفاف: جاف على السطح 5 ساعات، جاف تماماً (التصلب الكامل): 7 أيام
فترة إعادة الطلاء: دقيقة 8 ساعات، كحد أقصى 7 أيام
الانتهاء: نصف لامع أو لامع

[دليل]
تحضير السطح: يجب أن تكون السطح المطلوب طلاؤه نظيفًا وجافًا، خاليًا من الطلاء المتآكل والدهون...`}},{model:"HN-AC-501",desc:{en:"Epoxy glass-flake coating — composed of epoxy resin, glass flakes, pigments, curing agent, additives and thinner",zh:"主要组成: 由环氧树脂、玻璃鳞片、颜料、固化剂、助剂和稀释剂等组成",vi:"Sơn epoxy vảy kính — gồm nhựa epoxy, vảy kính, pigment, chất đóng rắn, phụ gia và dung môi pha loãng",es:"Recubrimiento epoxi con escamas de vidrio — compuesto de resina epoxi, escamas de vidrio, pigmentos, agente curante, aditivos y diluyente",ar:"طلاء الإيبوكسيد مع شرائح الزجاج — مكون من راتنج الإيبوكسيد، شرائح الزجاج، والأصباغ، والمادة الصلبة، والمواد المضافة والمذيبات"},details:{en:`[Product Overview]
Main composition: epoxy resin, glass flakes, pigments, curing agent, additives and thinner.
Main features:
- Excellent adhesion and durability, corrosion resistance and impact resistance.
- Excellent water, salt water, oil, alkali resistance and a degree of acid resistance. High solid content, suitable as high-build coating, good thinner resistance.
- The composition contains a large amount of glass flakes; after film formation, the shielding is strong, effectively preventing the penetration of corrosive media and achieving isolation and rust prevention.
Main applications: suitable for heavy-duty anti-corrosion coating systems on steel structures and concrete structures.

[Physical Parameters]
Packaging specifications: paint 25 kg/drum LS-11; curing agent 2.5 kg/drum`,zh:`【产品概述】
主要组成: 由环氧树脂、玻璃鳞片、颜料、固化剂、助剂和稀释剂等组成。
主要特点：
优良的附着力和耐久性、耐腐性及抗冲击性能。
具有优良的耐水性、耐盐水性、耐油性、耐碱性及一定程度的耐酸性。 固体份含量高，可作为厚膜涂料使用，耐稀释剂性好。
组份中含有大量玻璃鳞片，成膜后屏蔽性强，能有效阻止腐蚀介质的渗透，达到隔离防锈的目的。
主要用途：适用于钢结构及混凝土构筑物的重防腐涂装体系。

【物理参数】
包装规格：漆料：25kg/桶 LS-11固化剂：2.5kg/桶`,vi:`[Tổng quan sản phẩm]
Th\xe0nh phần ch\xednh: nhựa epoxy, vảy k\xednh, pigment, chất đ\xf3ng rắn, phụ gia v\xe0 dung m\xf4i pha lo\xe3ng.
Đặc điểm ch\xednh:
- Độ b\xe1m d\xednh v\xe0 độ bền vượt trội, chống ăn m\xf2n v\xe0 chống va đập.
- Chịu nước, nước muối, dầu, kiềm v\xe0 ở mức độ nhất định chịu axit ưu việt. H\xe0m lượng rắn cao, c\xf3 thể d\xf9ng l\xe0m sơn m\xe0ng d\xe0y, chịu dung m\xf4i pha lo\xe3ng tốt.
- Th\xe0nh phần chứa lượng lớn vảy k\xednh; sau khi tạo m\xe0ng c\xf3 khả năng che chắn mạnh, ngăn hiệu quả sự thấm của m\xf4i trường ăn m\xf2n, đạt mục đ\xedch c\xe1ch ly chống rỉ.
Ứng dụng ch\xednh: ph\xf9 hợp hệ sơn chống ăn m\xf2n nặng cho kết cấu th\xe9p v\xe0 c\xf4ng tr\xecnh b\xea t\xf4ng.

[Th\xf4ng số vật l\xfd]
Quy c\xe1ch đ\xf3ng g\xf3i: sơn 25 kg/th\xf9ng LS-11; chất đ\xf3ng rắn 2.5 kg/th\xf9ng`,es:`[Product Overview]
Composici\xf3n principal: resina epoxi, escamas de vidrio, pigmentos, agente curante, aditivos y disolvente.
Caracter\xedsticas principales:
- Excelente adhesi\xf3n y durabilidad, resistencia a la corrosi\xf3n y al impacto.
- Excelente resistencia al agua, agua salada, aceite y \xe1lcalis, y un grado de resistencia a los \xe1cidos. Alto contenido de s\xf3lidos, adecuado como recubrimiento de alta construcci\xf3n, buena resistencia al disolvente.
- La composici\xf3n contiene una gran cantidad de escamas de vidrio; despu\xe9s de la formaci\xf3n de la pel\xedcula, el blindaje es fuerte, evitando eficazmente la penetraci\xf3n de medios corrosivos y logrando el aislamiento y la prevenci\xf3n de la corrosi\xf3n.
Aplicaciones principales: adecuado para sistemas de recubrimiento anticorrosivo pesado en estructuras de acero y hormig\xf3n.

[Physical Parameters]
Especificaciones de envasado: pintura 25 kg/tambor LS-11; agente curante 2.5 kg/tambor`,ar:`[Product Overview]
المكونات الرئيسية: راتنج إيبوكسي، شرائح زجاجية، ألوان، مادة صلبة، مضافة ومذيب.
المميزات الرئيسية:
- امتدادان ممتازان والمتانة، ومقاومة للتآكل والصدمات.
- مقاومة ممتازة للماء، والماء المالح، والزيت، والقلويات، ومقاومة معينة للأحماض. محتوى عالٍ من المواد الصلبة، مناسب كطلاء بناء عالي، ومقاومة جيدة للمذيبات.
- تحتوي التركيبة على كمية كبيرة من شرائح الزجاج؛ بعد تكوين الفيلم، تكون الشاشة قوية، مما يمنع بفعانية اختراق الوسائط التآكلة ويحقع العزل ومنع الصدأ.
التطبيقات الرئيسية: مناسب لأنظمة الطلاء المقاومة للتآكل الثقيلة على الهياكل الفولاذية والخرسانية.

[Physical Parameters]
مواصفات التعبئة: الطلاء 25 كجم/برميل LS-11؛ مادة صلبة 2.5 كجم/برميل`}},{model:"HN-AC-601",desc:{en:"Epoxy iron-oxide-red anti-rust primer P5150 — two-component epoxy primer",zh:"环氧铁红锈底漆P5150是一种双组份环氧底漆",vi:"Sơn lót chống rỉ epoxy oxit sắt đỏ P5150 — sơn lót epoxy hai thành phần",es:"Primero antióxido epoxi de óxido rojo P5150 — prima epoxi de dos componentes",ar:"الطلاء الأساسي المقاوم للصدأ بإيبوكسيد أحمر P5150 — طلاء إيبوكسيد ثنائي المكونات"},details:{en:`[Product Overview]
HONG NGUYEN epoxy iron-oxide-red primer P5150 is a two-component epoxy primer. It is a two-component chemically-cured drying type with outstanding anti-corrosion and abrasion resistance.

[Applications]
Used as a long-term protective primer on steel surfaces in moderate to severe corrosive environments. It can be overcoated with various specialized paint systems and can also serve as a high-grade anti-rust primer in fireproof coating systems.

[Physical Parameters]
Base resin: Epoxy resin
Color: Iron oxide red
Mix ratio: Base P5250 / Curing agent C5420 = 4:1 (by volume) = 8.1:1 (by weight)
Pot life: 8 h / 20\xb0C
Flash point: 25\xb0C
Specific gravity: 1.7 kg/L
Solid volume content: 49%
Theoretical spreading rate: 10 m\xb2/L or 5.7 m\xb2/kg (at 40 \xb5m DFT)
Drying time: surface dry 4 h, through dry 7 days (full cure)
Recoat interval: min 1 h, max 7 days
Finish: Matte

[Application Guide]
Surface preparation: Steel surfaces must be clean and dry, free of loose paint, grease and other contaminants. Blast-clean to Swedish standard Sa 2.0, with surface roughness meeting Rugotest standard NO•3 BN9a. Remove dust and grit before painting. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN epoxy iron-oxide-red anti-corrosion primer P5250, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN epoxy MIO high-build paint U5690, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN acrylic enamel F6700 or polyurethane enamel F5802, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0220 (max by volume): brush 5-10%, airless spray 5%, conventional spray 20%
Cleaner: T0220

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.`,zh:`【产品概述】
HONG NGUYEN（宏源）环氧铁红锈底漆P5150是一种双组份环氧底漆，本品为双组份化学固化干燥型，具有优异的防腐蚀及耐磨损性能。

【适用范围】
作为长效保护底漆涂装在中等至严重腐蚀环境中的钢材表面。本品可被多种专门的油漆配套涂覆，同时也可用作嘉宝莉防火涂料的配套高级防锈底漆。

【物理参数】
漆基：环氧树脂
颜色：铁红色
混合比例：漆基P5250/固化剂C5420 = 4 ：1（体积比）
= 8.1 ：1（重量比）
混合使用期：8 h / 20℃
闪点：25 ℃
比重：1.7kg/L
体积固体含量：49 %
理论涂布量：10 m2/L，即5.7 m2/kg（干膜40微米计）
干燥时间：表干4 h，实干7天（完全固化）
重涂间隔：最小1 h，最大7天
漆面：哑光

【施工说明】
表面处理：钢铁表面必须清洁干燥，无松散漆层、油脂及其它污垢物。表面喷砂处理至瑞典标准Sa 2.0级，表面粗糙度达到Rugotest标准NO•3 BN9a，涂装前除去尘埃及砂粒。特殊表面处理请向本公司技术部查询。

【建议油漆配套】
底 漆：宏源环氧铁红防腐底漆P5250涂一遍，参考用量：0.1 L/㎡，即10㎡/L。
中间漆：宏源环氧云铁厚浆漆U5690涂一遍，参考用量：0.1 L/㎡，即10㎡/L。
面 漆：宏源丙烯酸磁漆F6700或聚氨酯磁漆F5802涂两遍，参考用量：0.2 L/㎡，即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0220
（最大用量） 刷 涂：5～10 %
无气喷涂：5 %
一般喷涂：20 %
清 洗 剂：T0220

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn l\xf3t epoxy oxit sắt đỏ HONG NGUYEN P5150 l\xe0 sơn l\xf3t epoxy hai th\xe0nh phần. Đ\xe2y l\xe0 loại đ\xf3ng rắn h\xf3a học hai th\xe0nh phần với t\xednh năng chống ăn m\xf2n v\xe0 chống m\xe0i m\xf2n vượt trội.

[Ứng dụng]
D\xf9ng l\xe0m sơn l\xf3t bảo vệ d\xe0i hạn tr\xean bề mặt th\xe9p trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng. C\xf3 thể được phủ bởi nhiều hệ sơn chuy\xean dụng v\xe0 cũng c\xf3 thể l\xe0m sơn l\xf3t chống rỉ cao cấp trong hệ sơn chống ch\xe1y.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: Đỏ oxit sắt
Tỷ lệ pha: Nhựa P5250 / Chất đ\xf3ng rắn C5420 = 4:1 (thể t\xedch) = 8.1:1 (trọng lượng)
Thời gian sử dụng: 8 giờ / 20\xb0C
Điểm bắt lửa: 25\xb0C
Tỉ trọng: 1.7 kg/L
H\xe0m lượng rắn thể t\xedch: 49%
Lượng lan l\xfd thuyết: 10 m\xb2/L tức 5.7 m\xb2/kg (tại DFT 40 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 1 giờ, tối đa 7 ng\xe0y
Bề mặt: Mờ

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt th\xe9p phải sạch v\xe0 kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phun c\xe1t đến ti\xeau chuẩn Thụy Điển Sa 2.0, độ nh\xe1m bề mặt đạt Rugotest NO•3 BN9a. Loại bỏ bụi v\xe0 hạt c\xe1t trước khi sơn. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy oxit sắt đỏ chống ăn m\xf2n HONG NGUYEN P5250, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Lớp giữa: 1 lớp sơn epoxy mica oxit sắt d\xe0y HONG NGUYEN U5690, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn tr\xe1ng acrylic HONG NGUYEN F6700 hoặc sơn tr\xe1ng polyurethane F5802, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0220 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 20%
Chất vệ sinh: T0220

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
Pintura epoxy de \xf3xido f\xe9rrico rojo P5150 de HONG NGUYEN es una imprimatura epoxy de dos componentes. Es una imprimatura de secado tipo curado qu\xedmico de dos componentes con excelente resistencia a la corrosi\xf3n y al desgaste.

[Aplicaciones]
Se utiliza como imprimatura protectora a largo plazo en superficies de acero en entornos de corrosi\xf3n moderada a severa. Puede recubrirse con diversos sistemas de pintura especializados y tambi\xe9n puede servir como imprimeta antihierro de alta calidad en sistemas de pintura ign\xedfuga.

[Parametros Fisicos]
Resina base: Resina epoxy
Color: Rojo \xf3xido f\xe9rrico
Relaci\xf3n de mezcla: Base P5250 / Agente curante C5420 = 4:1 (en volumen) = 8.1:1 (en peso)
Vida \xfatil en el envase: 8 h / 20\xb0C
Punto de inflamabilidad: 25\xb0C
Densidad espec\xedfica: 1.7 kg/L
Contenido de volumen s\xf3lido: 49%
Tasa de aplicaci\xf3n te\xf3rica: 10 m\xb2/L o 5.7 m\xb2/kg (a 40 \xb5m DFT)
Tiempo de secado: superficial 4 h, completo 7 d\xedas (curado total)
Intervalo de reencapado: min 1 h, max 7 d\xedas
Acabado: Mate

[Guia de Aplicacion]
Preparaci\xf3n de superficie: Las superficies de acero deben estar limpias y secas, libres de pintura suelta, grasa y otros contaminantes. Limpieza abrasiva hasta est\xe1ndar sueco Sa 2.0, con rugosidad de superficie cumpliendo est\xe1ndar Rugotest NO•3 BN9a. Eliminar polvo y arena antes de pintar. Para preparaciones de superficie especiales, consulte nuestro`,ar:`[نظرة عامة]
الطلاء الإيبوكسيدي الأحمر بالأكسيد الحديدي P5150 من هونج نيون هو أساس إيبوكسيدي مكون من جزأين. إنه أساس إيبوكسيدي مكون من جزأين من نوع الجفاف بالتج 化学 مع مقاومة ممتازة للتآكل والتآكل.

[التطبيقات]
يستخدم كأساس واقي طويل الأمد على أسطح الصلب في البيئات المعرضة للتآكل من المتوسطة إلى الشديدة. يمكن طلاؤه بأنظمة الطلاء المتخصصة المختلفة ويمكن أيضًا أن يعمل كأساس مضاد للصدأ عالي الجودة في أنظمة طلاء المقاومة للحريق.

[المعلمات]
الراتنج الأساسي: راتنج الإيبوكسيد
اللون: أحمر أكسيد الحديد
نسبة الخلط: الأساس P5250 / مصلح القرميد C5420 = 4:1 (حسب الحجم) = 8.1:1 (حسب الوزن)
مدة الحياة في الوعاء: 8 ساعة / 20 درجة مئوية
نقطة الاشتعال: 25 درجة مئوية
الكثافة النوعية: 1.7 كجم/لتر
محتوى الحجم الصلب: 49%
معدل التطبيق النظري: 10 م\xb2/لتر أو 5.7 م\xb2/كجم (عند 40 ميكرون DFT)
وقت الجفاف: سطح جاف 4 ساعات، جاف بالكامل 7 أيام (التصلب الكامل)
فترة إعادة الطلاء: دقيقة 1 ساعة، كحد أقصى 7 أيام
اللمسة: مات

[دليل]
تحضير السطح: يجب أن تكون أسطح الصلب نظيفة وجافة، خالية من الطلاء المتفتت، والدهون، وغيرها من الملوثات. تنظيف بالرش حتى المعيار السويدي Sa 2.0، مع خشونة السطح تلبي معيار Rugotest NO•3 BN9a. إزالة الغبار والرمل قبل الطلاء. لتحضيرات السطح الخاصة، استشرنا`}},{model:"HN-AC-602",desc:{en:"Epoxy colored high-build paint P5450 — two-component epoxy paint",zh:"环氧彩色厚浆漆P5450是一种双组份环氧漆",vi:"Sơn epoxy màu màng dày P5450 — sơn epoxy hai thành phần",es:"Pintura epoxi de alto grosor coloreada P5450 — pintura epoxi de dos componentes",ar:"الطلاء الإيبوكسي الملون السميك P5450 — طلاء إيبوكسيد ثنائي المكونات"},details:{en:`[Product Overview]
HONG NGUYEN epoxy colored high-build paint P5450 is a two-component epoxy paint available in a variety of colors. It offers resistance to seawater, corrosion, impact, mineral oils, aliphatic hydrocarbons and many chemicals.

[Applications]
1) Used as primer and intermediate coat in epoxy systems on steel and reinforced concrete surfaces.
2) Used as a high-quality intermediate and topcoat on bridges, vehicle decks, structural steel buildings, etc.
3) Used as a primer in epoxy systems on electroplated steel sheet and aluminum alloy surfaces.

[Physical Parameters]
Base resin: Epoxy resin
Color: White, grey and various other colors
Mix ratio: Base P5450 / Curing agent C5420 = 3:1 (by volume) = 4.7:1 (by weight)
Pot life: 5 h / 20\xb0C
Flash point: 26\xb0C
Specific gravity: 1.4 kg/L
Solid volume content: 48%
Theoretical spreading rate: 10 m\xb2/L (at 48 \xb5m DFT)
Drying time: surface dry 4 h, through dry (full cure): 7 days
Recoat interval: min 6 h, max 5 days
Finish: Flat

[Application Guide]
Surface preparation: The surface to be coated must be clean, free of grease and other contaminants. When used directly as anti-rust primer, the steel must first be derusted; when used as intermediate or topcoat, it must be applied over a primed surface. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN zinc-rich epoxy primer P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN epoxy colored high-build paint P5450, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN acrylic enamel F6700 or polyurethane enamel F5802, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0220 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0100

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.`,zh:`【产品概述】
HONG NGUYEN（宏源）环氧彩色厚浆漆P5450是一种双组份环氧漆，可提供各种颜色，本品具有耐海水、耐腐蚀、抗碰撞、耐矿物油、脂肪烃及多种化学品性能。

【适用范围】
1）作为环氧系列的底漆和中间漆，用于钢铁和水泥混凝土表面。
2）作为优质的中间漆和面漆涂于桥梁、汽车甲板、钢结构建筑物等表面。
3）作为环氧漆系列的底漆涂用于电镀钢板和铝合金的表面。

【物理参数】
漆基：环氧树脂
颜色：白色、灰色等各种颜色
混合比例：漆基P5450/固化剂C5420 = 3 ：1（体积比）
= 4.7 ：1（重量比）
混合使用期：5 h / 20℃
闪点：26 ℃
比重：1.4kg/L
体积固体含量：48 %
理论涂布量：10 m2/L（干膜48微米计）
干燥时间：表干4 h，实干（完全固化）：7天
重涂间隔：最小6 h，最大5天
漆面：平光

【施工说明】
表面处理：涂装表面必须清洁、无油脂及其它污垢物。直接作为防锈底漆时必须先对钢材进行防锈处理，作为中间漆或面漆必须涂在已涂有底漆的表面上。特殊表面处理请向本公司技术部查询。

【建议油漆配套】
底 漆：宏源环氧富锌底漆P5160涂一遍，参考用量：0.1 L/㎡，即10㎡/L。
中间漆：宏源环氧彩色厚浆漆P5450涂一遍，参考用量：0.1 L/㎡，即10㎡/L。
面 漆：宏源丙烯酸磁漆F6700或聚氨酯磁漆F5802涂两遍，参考用量：0.2 L/㎡，即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0220
（最大用量） 刷 涂：5～10 %
无气喷涂：5 %
一般喷涂：15 %
清 洗 剂：T0100

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn epoxy m\xe0u m\xe0ng d\xe0y HONG NGUYEN P5450 l\xe0 sơn epoxy hai th\xe0nh phần c\xf3 nhiều m\xe0u. C\xf3 khả năng chịu nước biển, chống ăn m\xf2n, va đập, chịu dầu kho\xe1ng, hydrocarbon b\xe9o v\xe0 nhiều h\xf3a chất.

[Ứng dụng]
1) D\xf9ng l\xe0m sơn l\xf3t v\xe0 lớp giữa trong hệ epoxy tr\xean bề mặt th\xe9p v\xe0 b\xea t\xf4ng cốt th\xe9p.
2) D\xf9ng l\xe0m lớp giữa v\xe0 sơn phủ chất lượng cao tr\xean cầu, s\xe0n xe, nh\xe0 th\xe9p kết cấu.
3) D\xf9ng l\xe0m sơn l\xf3t trong hệ epoxy tr\xean th\xe9p mạ điện v\xe0 hợp kim nh\xf4m.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: Trắng, x\xe1m v\xe0 nhiều m\xe0u kh\xe1c
Tỷ lệ pha: Nhựa P5450 / Chất đ\xf3ng rắn C5420 = 3:1 (thể t\xedch) = 4.7:1 (trọng lượng)
Thời gian sử dụng: 5 giờ / 20\xb0C
Điểm bắt lửa: 26\xb0C
Tỉ trọng: 1.4 kg/L
H\xe0m lượng rắn thể t\xedch: 48%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 48 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n: 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 6 giờ, tối đa 5 ng\xe0y
Bề mặt: Phẳng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch, kh\xf4ng c\xf3 dầu mỡ v\xe0 tạp chất. Khi d\xf9ng trực tiếp l\xe0m sơn l\xf3t chống rỉ, th\xe9p phải được xử l\xfd chống rỉ trước; khi d\xf9ng l\xe0m lớp giữa hoặc sơn phủ phải thi c\xf4ng tr\xean bề mặt đ\xe3 c\xf3 sơn l\xf3t. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN P5160, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Lớp giữa: 1 lớp sơn epoxy m\xe0u m\xe0ng d\xe0y HONG NGUYEN P5450, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn tr\xe1ng acrylic HONG NGUYEN F6700 hoặc sơn tr\xe1ng polyurethane F5802, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0220 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0100

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
Pintura ep\xf3xica de alta construcci\xf3n coloreada P5450 de HONG NGUYEN es una pintura ep\xf3xica de dos componentes disponible en una variedad de colores. Ofrece resistencia al agua de mar, corrosi\xf3n, impactos, aceites minerales, hidrocarburos alif\xe1ticos y muchos qu\xedmicos.

[Aplicaciones]
1) Se utiliza como imprimaci\xf3n y capa intermedia en sistemas ep\xf3xicos en superficies de acero y hormig\xf3n armado.
2) Se utiliza como capa intermedia y acabado de alta calidad en puentes, cubiertas de veh\xedculos, edificios de acero estructural, etc.
3) Se utiliza como imprimaci\xf3n en sistemas ep\xf3xicos en l\xe1minas de acero galvanizado y superficies de aleaciones de aluminio.

[Parametros Fisicos]
Resina base: Resina ep\xf3xica
Color: Blanco, gris y varios otros colores
Proporci\xf3n de mezcla: Base P5450 / Agente curante C5420 = 3:1 (en volumen) = 4.7:1 (en peso)
Vida \xfatil en el envase: 5 h / 20\xb0C
Punto de inflamaci\xf3n: 26\xb0C
Densidad espec\xedfica: 1.4 kg/L
Contenido de volumen s\xf3lido: 48%
Tasa de aplicaci\xf3n te\xf3rica: 10 m\xb2/L (a 48 \xb5m DFT)
Tiempo de secado: superficial 4 h, secado completo (curaci\xf3n total): 7 d\xedas
Intervalo de aplicaci\xf3n de capas: m\xednimo 6 h, m\xe1ximo 5 d\xedas
Acabado: Mate

[Guia de Aplicacion]
Preparaci\xf3n de superficie: La superficie a recubrir debe estar limpia, libre de grasa y otros contaminantes. Cuando se utiliza directamente como imprimaci\xf3n anti\xf3xido, el acero primero debe desoxidarse; cuando se utiliza como`,ar:`[نظرة عامة]
الطلاء المكونين المقاوم للصدأ P5450 من هونغ نيون هو طلاء إيبوكسي متاح بعدة ألوان. يوفر مقاومة لمياه البحر، والتآكل، والصدمات، والزيوت المعدنية، والهيدروكربونات الأليفاتية والعديد من المواد الكيميائية.

[التطبيقات]
1) يُستخدم كطبقة أساسية وطبقة وسيطة في أنظمة الإيبوكسيد على الأسطح الفولاذية والخرسانة المسلحة.
2) يُستخدم كطبقة وسيطة وعالية الجودة وطلاء نهائي على الجسور، وم decks المركبات، والمباني الفولاذية الهيكلية، إلخ.
3) يُستخدم كطبقة أساسية في أنظمة الإيبوكسيد على ألواح الفولاذ المطلية كهربائياً وسطوح سبائك الألومنيوم.

[المعلمات]
المادة الأساسية: راتنج الإيبوكسيد
اللون: أبيض، رمادي، ومختلف الألوان الأخرى
نسبة الخلط: القاعدة P5450 / عامل التصلب C5420 = 3:1 (حجماً) = 4.7:1 (وزناً)
مدة الصلاحية في العبوة: 5 ساعة / 20 درجة مئوية
نقطة الاشتعال: 26 درجة مئوية
الكثافة النوعية: 1.4 كجم/لتر
محتوى المادة الصلبة بالحجم: 48%
معدل التطبيق النظري: 10 م\xb2/لتر (عند 48 ميكرون DFT)
وقت الجفاف: جاف السطح 4 ساعات، جاف بالكامل (التصلب الكامل): 7 أيام
فترة إعادة التغطية: 6 ساعات كحد أدنى، 5 أيام كحد أقصى
اللمسة: مسطح

[دليل]
تحضير السطح: يجب أن تكون السطح المطلوب طلاؤه نظيفاً، خالياً من الدهون和其他污染物. عند استخدامه مباشرة كطلاء مضاد للصدأ، يجب أولاً إزالة الصدأ من الفولاذ؛ عند استخدامه ك`}},{model:"HN-AC-603",desc:{en:"Epoxy sealing primer — two-component epoxy primer containing red lead anti-rust pigment; tough durable film, suitable for hard-to-derust surfaces, excellent penetration",zh:"环氧封闭底漆是一种双组份的内含红丹防锈颜料的环氧底漆,漆膜坚韧耐用,可用于除锈难度较高的表面,本品具有优异的渗透能力,涂…",vi:"Sơn lót epoxy hàn kín — sơn lót epoxy hai thành phần chứa pigment chống rỉ chì đỏ; màng sơn dai bền, phù hợp bề mặt khó làm sạch rỉ, khả năng thấm sâu vượt trội",es:"Prima epoxi selladora — prima epoxi de dos componentes que contiene pigmento antióxido de rojo de plomo; película resistente y duradera, adecuada para superficies difíciles de desoxidar, excelente penetración",ar:"الطلاء الأساسي المُخمَّص بإيبوكسيد — طلاء إيبوكسيد ثنائي المكونات يحتوي على صبغة حمراء مضادة للصدأ؛ فيلم قوي ومتين، مناسب للأسطح الصعبة إزالة الصدأ عنها، اختراق ممتاز"},details:{en:`[Product Overview]
HONG NGUYEN epoxy sealing primer is a two-component epoxy primer containing red lead anti-rust pigment. The paint film is tough and durable, suitable for surfaces where derusting is difficult. It has excellent penetration; after application, the paint penetrates into the steel surface and converts residual rust into part of the paint film, improving protection efficiency through rust-tolerant application.

[Applications]
1. Used as a primer on hand-tool and power-tool prepared steel surfaces.
2. As a red-lead anti-rust paint, can be applied on surfaces with low derusting requirements — even with incomplete derusting, it provides equivalent anti-rust and anti-corrosion performance.

[Physical Parameters]
Base resin: Epoxy resin
Color: Reddish-brown
Mix ratio: Base P5150 : Curing agent C5420 = 5:1 (by weight)
Pot life: 5 h / 20\xb0C
Specific gravity: 1.6 kg/L
Solid volume content: 48%
Theoretical spreading rate: 10 m\xb2/L or 9 m\xb2/kg (at 48 \xb5m DFT)
Drying time: surface dry 4 h; through dry 7 days (full cure)
Recoat interval: min 6 h, max 5 days
Finish: Flat

[Application Guide]
Surface preparation: The surface to be coated must be clean, free of oil; loose, flaking, honeycomb-like unsound rust should be scraped off. The cleaner the derusting, the better the coating performance.

[Recommended System]
Primer: 1 coat epoxy rust-tolerant anti-rust primer P5150, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat epoxy colored high-build paint P0545, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats acrylic enamel P0076 or polyurethane enamel P2085, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0220 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0220

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Flammable. Keep away from fire sources. Do not smoke in the application area.
3. Store in a cool, dry place.`,zh:`【产品概述】
宏源环氧封闭底漆是一种双组份的内含红丹防锈颜料的环氧底漆,漆膜坚韧耐用,可用于除锈难度较高的表面,本品具有优异的渗透能力,涂装后的漆油能透进钢铁表面并把末除尽的绣蚀物转化为漆膜的一分,通过带锈涂装,提高妒效率。

【适用范围】
1、作为底漆涂在手工和电动工具的钢铁表面。
2、作为红丹类防锈漆可涂装在除锈要求不很高的表面，即使除绣不完全彻底也可涂装，起到相同的防锈防腐效果。

【物理参数】
漆基：环氧树脂
颜色：红褐色
混合比例漆基P5150：固化剂C5420=5:1(重量比)
混合使用期：5h∕℃
比重：16㎏∕L
体积固体含量：48％
理论涂布率：10㎡∕L即9㎡∕㎏(干膜48L∕\xb5m计)
干燥时间：表干4小时；实干7天(完全固化）
重涂间隔最：是小6小时^最大5天
漆面：平光

【施工说明】
表面处理涂装表面必须清洁、无油污,起翘松动的蜂窝状的不坚实锈蚀物应铲除,除锈越干净涂装效果越好。

【建议油漆配套】
底漆：环氧带锈防锈底漆P5150涂一遍,参考用量：0.1L∕㎡即10L∕㎡
中间漆：环氧彩色厚浆漆P0545涂一遍，参考用量：0.1L∕㎡即10L∕㎡
面漆：丙烯酸磁漆P0076或聚親酯磁P2085涂二遍,参考用量：0 2㎡∕L即5㎡∕L
施工方法：无气喷涂、刷涂或普通喷涂。
稀释剂:T0220
(最大用置)刷涂：5-10％、无气喷涂:5％,普通喷涂15％
清洗剂:T0220

【安全守则】
1、施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾,皮肤、眼睛不得接触本品。
2、易燃物品,远离火源,在施工范围内不宜吸烟。
3、储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn l\xf3t epoxy h\xe0n k\xedn HONG NGUYEN l\xe0 sơn l\xf3t epoxy hai th\xe0nh phần chứa pigment chống rỉ ch\xec đỏ. M\xe0ng sơn dai bền, ph\xf9 hợp bề mặt kh\xf3 l\xe0m sạch rỉ. C\xf3 khả năng thấm s\xe2u vượt trội; sau khi thi c\xf4ng, sơn thấm v\xe0o bề mặt th\xe9p v\xe0 chuyển h\xf3a rỉ s\xf3t lại th\xe0nh một phần của m\xe0ng sơn, n\xe2ng cao hiệu quả bảo vệ th\xf4ng qua thi c\xf4ng tr\xean bề mặt c\xf3 rỉ.

[Ứng dụng]
1. D\xf9ng l\xe0m sơn l\xf3t tr\xean bề mặt th\xe9p được xử l\xfd bằng dụng cụ cầm tay v\xe0 dụng cụ điện.
2. L\xe0 sơn chống rỉ loại ch\xec đỏ, c\xf3 thể thi c\xf4ng tr\xean bề mặt y\xeau cầu l\xe0m sạch rỉ kh\xf4ng cao — ngay cả khi l\xe0m sạch rỉ kh\xf4ng triệt để vẫn cho hiệu quả chống rỉ, chống ăn m\xf2n tương đương.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: N\xe2u đỏ
Tỷ lệ pha: Nhựa P5150 : Chất đ\xf3ng rắn C5420 = 5:1 (trọng lượng)
Thời gian sử dụng: 5 giờ / 20\xb0C
Tỉ trọng: 1.6 kg/L
H\xe0m lượng rắn thể t\xedch: 48%
Lượng lan l\xfd thuyết: 10 m\xb2/L tức 9 m\xb2/kg (tại DFT 48 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 6 giờ, tối đa 5 ng\xe0y
Bề mặt: Phẳng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch, kh\xf4ng dầu mỡ; rỉ bong tr\xf3c, tổ ong kh\xf4ng vững chắc n\xean được cạo bỏ. L\xe0m sạch rỉ c\xe0ng sạch th\xec hiệu quả sơn c\xe0ng tốt.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ chịu rỉ epoxy P5150, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Lớp giữa: 1 lớp sơn epoxy m\xe0u m\xe0ng d\xe0y P0545, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn tr\xe1ng acrylic P0076 hoặc sơn tr\xe1ng polyurethane P2085, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0220 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0220

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Product Overview]
HONG NGUYEN epoxy sealing primer es un primer epoxi de dos componentes que contiene pigmento antihierro de \xf3xido de plomo rojo. La pel\xedcula de pintura es resistente y duradera, adecuada para superficies donde es dif\xedcil eliminar el \xf3xido. Tiene una excelente penetraci\xf3n; despu\xe9s de la aplicaci\xf3n, la pintura penetra en la superficie de acero y convierte el \xf3xido residual en parte de la pel\xedcula de pintura, mejorando la eficiencia de protecci\xf3n mediante aplicaci\xf3n tolerante al \xf3xido.

[Applications]
1. Se utiliza como imprimaci\xf3n en superficies de acero preparadas con herramientas manuales y el\xe9ctricas.
2. Como pintura antihierro de \xf3xido de plomo rojo, puede aplicarse en superficies con requisitos bajos de remoci\xf3n de \xf3xido; incluso con una remoci\xf3n incompleta, proporciona un rendimiento antihierro y anticorrosivo equivalente.

[Physical Parameters]
Resina base: Resina epoxi
Color: Rojizo-marr\xf3n
Relaci\xf3n de mezcla: Base P5150 : Agente curante C5420 = 5:1 (por peso)
Tiempo de vida en el pote: 5 h / 20\xb0C
Densidad espec\xedfica: 1,6 kg/L
Contenido de volumen s\xf3lido: 48%
Tasa de extensi\xf3n te\xf3rica: 10 m\xb2/L o 9 m\xb2/kg (a 48 \xb5m DFT)
Tiempo de secado: superficial 4 h; completo 7 d\xedas (curaci\xf3n total)
Intervalo de repintado: m\xednimo 6 h, m\xe1ximo 5 d\xedas
Acabado: Mate

[Application Guide]
Preparaci\xf3n de superficie: La superficie a recubrir debe estar limpia, libre de aceite; suelta, descamada, afilada`,ar:`[Product Overview]
مانع التسرب الإيبوكسي هونج نيون هو primer من مكونين يحتوي على pigment مضاد للصدأ بالرصاص الأحمر. فيلم الطلاء متين ومتين، مناسب للأسطح حيث يصعب إزالة الصدأ. له اختراق ممتاز؛ بعد التطبيق، يتغلغل الطلاء في سطح الفولاذ ويحول الصدأ المتبقي إلى جزء من فيلم الطلاء، محسناً كفاءة الحماية من خلال التطبيق المقاوم للصدأ.

[Applications]
1. يُستخدم كـ primer على أسطح الفولاذ التي تم تحضيرها بأدوات يدية كهربائية.
2. كطلاء مضاد للصدأ بالرصاص الأحمر، يمكن تطبيقه على الأسطح ذات المتطلبات المنخفضة لإزالة الصدأ؛ حتى مع إزالة الصدأ غير الكاملة، يوفر أداءً مكافئاً مضاداً للصدأ والبلى.

[Physical Parameters]
الراتج الأساسي: راتج إيبوكسي
اللون: أحمر-بني
نسبة الخلط: الأساس P5150 : مصلح التصلب C5420 = 5:1 (بالوزن)
مدة الحياة في الوعاء: 5 ساعة / 20\xb0C
الكثافة النوعية: 1.6 كجم/لتر
محتوى الحجم الصلب: 48%
معدل التمديد النظري: 10 م\xb2/لتر أو 9 م\xb2/كجم (عند 48 ميكرومتر DFT)
وقت الجفاف: سطحية 4 ساعة؛ كامل 7 أيام (تصلب كامل)
فترة إعادة الطلاء: أدنى 6 ساعة، أعلى 5 أيام
اللمسة: مسطحة`}},{model:"HN-AC-604",desc:{en:"Epoxy anti-corrosion paint — two-component anti-corrosion paint composed of epoxy resin, pigments, fillers, additives, solvents and a curing agent",zh:"环氧漆是由环氧树脂、颜料填料、助剂、溶剂等与固化剂配套组成双组份防腐漆",vi:"Sơn epoxy chống ăn mòn — sơn chống ăn mòn hai thành phần gồm nhựa epoxy, pigment, chất độn, phụ gia, dung môi và chất đóng rắn",es:"Pintura anti-corrosión epoxi — pintura anti-corrosión de dos componentes compuesta de resina epoxi, pigmentos, cargas, aditivos, disolventes y un agente curante",ar:"الطلاء المقاوم للتآكل الإيبوكسيد — طلاء مقاوم للتآكل من مكونين، مكون من راتنج الإيبوكسيد، والأصبغة، والموامل، والمواد المضافة، والمذيبات والمادة الصلبة"},details:{en:`[Product Overview]
Epoxy paint is a two-component anti-corrosion paint composed of epoxy resin, pigments, fillers, additives, solvents and a matching curing agent.
Also known as: epoxy topcoat, epoxy anti-corrosion topcoat, epoxy high-build anti-corrosion topcoat, epoxy coating, epoxy high-build coating, epoxy high-build anti-corrosion coating, epoxy protective coating, epoxy high-build protective coating, epoxy anti-corrosion coating, epoxy resin paint, epoxy resin topcoat, epoxy resin coating, epoxy resin anti-corrosion paint, epoxy resin anti-corrosion topcoat, epoxy resin anti-corrosion coating.
Main features:
1. Strong adhesion: epoxy primer has excellent adhesion to most substrates; the paint film does not peel.
2. Excellent mechanical performance: hardness, flexibility and impact strength meet national standards.
3. High solid content: high coating solid content, low VOC emissions, meets EU environmental standards.
4. Excellent anti-corrosion performance: good water, oil, solvent, acid, alkali, seawater and salt spray resistance.
5. Good system compatibility: compatible with acrylic, polyurethane, fluorocarbon and other topcoats.

[Applications]
* Suitable for steel structures, bridges, mechanical equipment, and concrete surfaces.

[Physical Parameters]
Specific gravity: approx. 1.20 kg/L (after mixing)
Pot life: ≤ 8 h (23\xb0C \xb1 2\xb0C)
Dry film thickness: approx. 50 \xb5m
Theoretical spreading rate: approx. 100 g/m\xb2 (at 50 \xb5m DFT, excluding loss)
Flash point: approx. 29\xb0C
Drying time: surface dry ≤ 1 h, through dry ≤ 24 h, full dry 7 d
Induction time: 0.5 h (23\xb0C \xb1 2\xb0C)
Pot life: ≤ 8 h (23\xb0C \xb1 2\xb0C)
Recoat interval: substrate temp 5\xb0C / 20\xb0C / 30\xb0C; min 32 h / 16 h / 8 h; max 7 d / 7 d / 7 d
Recommended number of coats:
* Airless spray 1 coat; brush or roller 1-2 coats.

[Application Guide]
* Substrate temperature must be above 3\xb0C, relative humidity below 85%.
* When substrate temperature is below 5\xb0C, the curing reaction between epoxy resin and curing agent stops or slows down, so application is not recommended.

[Recommended System]
* Epoxy zinc-rich paint, epoxy MIO paint, epoxy iron-oxide-red paint, inorganic zinc-rich paint, inorganic zinc silicate paint.
Surface preparation:
* The previous coat must be fully dry; remove oil, dust and other contaminants from the surface to be coated.`,zh:`【产品概述】
环氧漆是由环氧树脂、颜料填料、助剂、溶剂等与固化剂配套组成双组份防腐漆。
又名：环氧面漆，环氧防腐面漆，环氧厚浆型防腐面漆，环氧涂料，环氧厚浆型涂料，环氧厚浆型防腐涂料，环氧防护涂料，环氧厚浆型防护涂料。环氧防腐涂料 、环氧树脂漆 、环氧树脂面漆 、环氧树脂涂料 、环氧树脂防腐漆 、环氧树脂防腐面漆、环氧树脂防腐涂料。
主要特性：
1、附着力强：环氧底漆具有极强的附着力，对多数基材粘付性牢固，漆膜不脱落。
2、机械性能优异：硬度、柔韧性、抗冲击强度等符合国家标准。
3、固体份高：涂料固含量高，有机挥发化合物VOC排放少，符合欧盟环保标准。
4、防腐性能优异：良好的耐水性、耐油性、耐溶剂性、耐酸性、耐碱性、耐海水性、耐盐雾性等防腐性能
5、配套性能好：是丙烯酸、聚氨酯、氟碳等面漆的配套油漆。

【适用范围】
*适用于钢结构、桥梁、机械设备、混凝土表面。

【物理参数】
比重: 约1.20kg/L（混合后）
适用期: ≤8h（23℃\xb12℃）
干膜厚度: 约50um
理论用量: 约100g/m\xb2(以50um干膜计，不含损耗)
闪点: 约29\xbaC
干燥时间: 表干≤1h，实干≤24h，完全干燥7d
熟化时间: 0.5h(23℃\xb12℃)
适用期: ≤8h（23℃\xb12℃）
复涂间隔时间: 底材温度 5℃ 20℃ 30℃
最短 32h 16h 8h
最长 7d 7d 7d
建议涂装道数：
*无气喷涂1道，涂刷或者辊涂1-2道。

【施工说明】
*底材温度须高于3℃，相对湿度须小于85%。
*被涂底材温度低于5℃时，环氧树脂与固化剂的固化反应停止或变慢，因此建议不能进行施工。

【建议油漆配套】
*环氧富锌漆，环氧云铁漆，环氧铁红漆，无机富锌漆，无机硅酸锌漆。
表面处理：
*前道油漆完全干燥，除净被涂表面的油污、灰尘以及其它污垢。`,vi:`[Tổng quan sản phẩm]
Sơn epoxy l\xe0 sơn chống ăn m\xf2n hai th\xe0nh phần gồm nhựa epoxy, pigment, chất độn, phụ gia, dung m\xf4i v\xe0 chất đ\xf3ng rắn tương ứng.
C\xf2n gọi l\xe0: sơn phủ epoxy, sơn phủ chống ăn m\xf2n epoxy, sơn phủ chống ăn m\xf2n epoxy m\xe0ng d\xe0y, sơn epoxy, sơn epoxy m\xe0ng d\xe0y, sơn chống ăn m\xf2n epoxy m\xe0ng d\xe0y, sơn bảo vệ epoxy, sơn bảo vệ epoxy m\xe0ng d\xe0y, sơn chống ăn m\xf2n epoxy, sơn nhựa epoxy, sơn phủ nhựa epoxy, sơn nhựa epoxy, sơn chống ăn m\xf2n nhựa epoxy, sơn phủ chống ăn m\xf2n nhựa epoxy, sơn chống ăn m\xf2n nhựa epoxy.
Đặc điểm ch\xednh:
1. B\xe1m d\xednh mạnh: sơn l\xf3t epoxy b\xe1m d\xednh cực tốt với hầu hết bề mặt; m\xe0ng sơn kh\xf4ng bong tr\xf3c.
2. T\xednh năng cơ l\xfd vượt trội: độ cứng, độ dẻo v\xe0 độ chịu va đập đạt ti\xeau chuẩn quốc gia.
3. H\xe0m lượng rắn cao: h\xe0m lượng rắn cao, ph\xe1t thải VOC thấp, đạt ti\xeau chuẩn m\xf4i trường EU.
4. Hiệu năng chống ăn m\xf2n vượt trội: chịu nước, dầu, dung m\xf4i, axit, kiềm, nước biển v\xe0 muối tốt.
5. Khả năng phối hợp tốt: tương th\xedch với sơn phủ acrylic, polyurethane, fluorocarbon, v.v.

[Ứng dụng]
* Ph\xf9 hợp kết cấu th\xe9p, cầu, thiết bị cơ kh\xed v\xe0 bề mặt b\xea t\xf4ng.

[Th\xf4ng số vật l\xfd]
Tỉ trọng: khoảng 1.20 kg/L (sau khi pha)
Thời gian sử dụng: ≤ 8 giờ (23\xb0C \xb1 2\xb0C)
Độ d\xe0y m\xe0ng kh\xf4: khoảng 50 \xb5m
Lượng lan l\xfd thuyết: khoảng 100 g/m\xb2 (tại DFT 50 \xb5m, kh\xf4ng t\xednh hao hụt)
Điểm bắt lửa: khoảng 29\xb0C
Thời gian kh\xf4: kh\xf4 bề mặt ≤ 1 giờ; kh\xf4 ho\xe0n to\xe0n ≤ 24 giờ; kh\xf4 to\xe0n bộ 7 ng\xe0y
Thời gian th\xe0nh thục: 0.5 giờ (23\xb0C \xb1 2\xb0C)
Thời gian sử dụng: ≤ 8 giờ (23\xb0C \xb1 2\xb0C)
Thời gian giữa c\xe1c lớp: nhiệt độ bề mặt 5\xb0C / 20\xb0C / 30\xb0C; tối thiểu 32 giờ / 16 giờ / 8 giờ; tối đa 7 ng\xe0y / 7 ng\xe0y / 7 ng\xe0y
Số lớp khuyến nghị:
* Phun kh\xf4ng kh\xed 1 lớp; cọ hoặc con lăn 1-2 lớp.

[Hướng dẫn thi c\xf4ng]
* Nhiệt độ bề mặt phải tr\xean 3\xb0C, độ ẩm tương đối dưới 85%.
* Khi nhiệt độ bề mặt dưới 5\xb0C, phản ứng đ\xf3ng rắn giữa nhựa epoxy v\xe0 chất đ\xf3ng rắn dừng hoặc chậm lại, kh\xf4ng khuyến nghị thi c\xf4ng.

[Hệ sơn khuyến nghị]
* Sơn epoxy gi\xe0u kẽm, sơn epoxy mica oxit sắt, sơn epoxy oxit sắt đỏ, sơn gi\xe0u kẽm v\xf4 cơ, sơn silicat kẽm v\xf4 cơ.
Chuẩn bị bề mặt:
* Lớp sơn trước phải kh\xf4 ho\xe0n to\xe0n; loại bỏ dầu mỡ, bụi v\xe0 tạp chất tr\xean bề mặt cần sơn.`,es:`[Resumen del Producto]
La pintura epoxi es una pint anticorrosiva de dos componentes compuesta por resina epoxi, pigmentos, cargas, aditivos, disolventes y un agente curativo correspondiente.
Tambi\xe9n conocida como: capa superior epoxi, capa superior anticorrosiva epoxi, capa superior anticorrosiva de alto grosor epoxi, recubrimiento epoxi, recubrimiento de alto grosor epoxi, recubrimiento anticorrosivo de alto grosor epoxi, recubrimiento protector epoxi, recubrimiento protector de alto grosor epoxi, recubrimiento anticorrosivo epoxi, pintura de resina epoxi, capa superior de resina epoxi, recubrimiento de resina epoxi, pintura anticorrosiva de resina epoxi, capa superior anticorrosiva de resina epoxi, recubrimiento anticorrosivo de resina epoxi.
Caracter\xedsticas principales:
1. Fuerte adhesi\xf3n: el imprimante epoxi tiene una excelente adhesi\xf3n a la mayor\xeda de los sustratos; la pel\xedcula de pintura no se descama.
2. Excelente rendimiento mec\xe1nico: la dureza, la flexibilidad y la resistencia al impacto cumplen con las normas nacionales.
3. Alto contenido de s\xf3lidos: alto contenido de s\xf3lidos en el recubrimiento, bajas emisiones de VOC, cumple con las normas medioambientales de la UE.
4. Excelente rendimiento anticorrosivo: buena resistencia al agua, aceite, disolventes, \xe1cidos, \xe1lcalis, agua de mar y niebla salina.
5. Buena compatibilidad del sistema: compatible con capas superiores acr\xedlicas, de poliuretano, fluorocarbono y otras.

[Aplicaciones]
* Adecuado para estructuras de acero

[Parametros Fisicos]
[Guia de Aplicacion]
[Sistema Recomendado]
[Seguridad]`,ar:`[نظرة عامة]
الطلاء الإيبوكسيدي هو طلاء وقائي من مكونين يتكون من راتنج إيبوكسيدي، وأصباغ، ومواد مالئة، ومواد إضافية، ومذيبات، ووسيط بلمرة متطابق.
المعروف أيضًا باسم: طلاء التغطية الإيبوكسيدي، وطلاء التغطية المضاد للتآكل الإيبوكسيدي، وطلاء التغطية المضاد للتآكل السميك الإيبوكسيدي، والطلاء الإيبوكسيدي، والطلاء السميك الإيبوكسيدي، والطلاء المضاد للتآكل السميك الإيبوكسيدي، والطلاء الوقائي الإيبوكسيدي، والطلاء الوقائي السميك الإيبوكسيدي، والطلاء المضاد للتآكل الإيبوكسيدي، وطلاء راتنج الإيبوكسيد، وطلاء التغطية براتنج الإيبوكسيد، وطلاء راتنج الإيبوكسيد، وطلاء راتنج الإيبوكسيد المضاد للتآكل، وطلاء التغطية المضاد للتآكل براتنج الإيبوكسيد، وطلاء راتنج الإيبوكسيد المضاد للتآكل.
الميزات الرئيسية:
1. الالتصاق القوي: يمتلك الطلاء الأساسي الإيبوكسيدي التصاق الممتاز مع معظم المواد الأساسية؛ لا تتقشر طبقة الطلاء.
2. الأداء الميكانيكي الممتاز: الصلابة، والمرونة، ومقاومة الصدمة تلبي المعايير الوطنية.
3. المحتوى العالي من المواد الصلبة: ارتفاع محتوى المواد الصلبة في الطلاء، وانبعاثات VOC منخفضة، تتوافق مع المعايير البيئية للاتحاد الأوروبي.
4. الأداء المضاد للتآكل الممتاز: مقاومة جيدة للماء، والزيت، والمذيبات، والأحماض، والقواعد، ومياه البحر، والرذاذ الملحي.
5. توافق جيد مع النظام: متوافق مع طلاءات التغطية الأكريليكية، والبولي يوريثان، والفلوروكarbon وغيرها.

[التطبيقات]
* مناسب للهياكل الفولاذية

[المعلمات]
[دليل]
[النظام]
[السلامة]`}},{model:"HN-AC-605",desc:{en:"Epoxy zinc phosphate primer",zh:"环氧磷酸锌底漆",vi:"Sơn lót epoxy phosphat kẽm",es:"Prima epoxi de fosfato de zinc",ar:"الطلاء الأساسي بإيبوكسيد الفوسفات الزنكي"},details:{en:`[Applications]
Used for anti-corrosion of equipment in hot and humid environments, onshore steel structures, steel machinery, equipment, and the above-waterline steel plate parts of ships.

[Physical Parameters]
1. Composition: A and B components.
2. Mix ratio: 10:1.
3. Pot life: 6 hours.
4. Mixing method: Stir component A thoroughly, then add component B while stirring until uniform.
5. Drying time: surface dry ≤ 2 h, through dry ≤ 24 h, full cure 7 d.
6. Recoat interval (25\xb0C): min 24 h, max 7 d.
7. Surface preparation: previous coat must be dry and clean; concrete must be fully cured; remove surface dust, laitance and contaminants.
8. Substrate temperature must be at least 3\xb0C above the dew point.

[Recommended System]
Compatible with epoxy, chlorinated rubber and polyurethane topcoats.
Surface preparation:
1. Steel with mill scale: blast-clean to Sa2.5; where blasting is not possible, mechanically grind or chemically treat to remove all loose rust.
2. Steel without mill scale: blast-clean to Sa2.5, or power/tool-clean to St3.
3. Steel coated with shop primer: light sweep-blast or power-tool secondary surface preparation to St3.
4. Do not touch the derusted steel surface with bare hands; apply paint as soon as possible, within no more than 2 hours. If contamination or flash rust appears before painting, re-treat to the required derust grade.
Application methods:
1. Airless spray — equipment: use BD42S-195 two-component specialized equipment; thinner: epoxy paint thinner; thinning 0-5% (by paint weight); nozzle orifice 0.4-0.5 mm; spray pressure 15-25 MPa (approx. 150-250 kg/m\xb2).
2. Air spray — thinner: epoxy paint thinner; thinning 0-10% (by paint weight); nozzle orifice 2-3 mm; spray pressure 0.3-0.6 MPa (approx. 3-6 kg/m\xb2).
3. Brush — thinner: epoxy paint thinner; thinning 0-3% (by paint weight).
Transport and storage:
1. During transport, protect the product from rain and sun exposure, avoid impact, and comply with relevant transport regulations.
2. Store in a cool, well-ventilated area away from direct sunlight, isolated from fire sources and heat.

[Safety]
The application site must have good ventilation; painters should wear goggles, gloves and masks to avoid skin contact and inhalation of paint mist. Open flame is strictly prohibited on site.
Disclaimer:
The information provided in this document is based entirely on our laboratory and practical knowledge, but the use of paint is generally beyond our control. Apart from the quality of the paint itself, we cannot make any warranty.`,zh:`【适用范围】
用于湿热环境中使用的设备，陆上钢结构、钢铁机械、设备和船舶水线以上钢板部位的防腐。

【物理参数】
1.成 分：A、B组分，
2.混合比例：10:1
3.适 用期：6小时
4.混合方法：将组分A充分搅拌均匀，加入B组分，边搅拌边加入，直至均匀。
5.干燥时间：表干≤2h，
实干≤24h.
完全固化7d
6.复涂时间间隔（25℃） 最短24h，最长7d
7.表面处理：前道漆膜干燥、清洁；混凝土必须干透，除去表面浮尘、浮浆及沾污物。
8.底材温度必须高于露点3℃以上。

【建议油漆配套】
环氧类、氯化橡胶类、聚氨酯类面漆。
表面处理：
1.有氧化皮类钢材：喷砂处理至Sa2.5级，在不能喷砂处理的地方应机械打磨或化学处理至除去所有的浮锈。
2.无氧化皮钢材：喷砂处理至Sa2级。5级或风动或电动工具打磨至St3级。
3.涂有车间底漆的钢材：轻扫喷砂或风动二次除锈至St3级。
4.除锈后的钢材表面不得用手摸，应尽快涂装，间隔不得超过2个小时，在涂装前若发现污染或返锈，应重新处理达到除锈等级。
涂装方法：
1.无气喷涂 设备 需采用BD42S-195双组份专用设备进行涂装
稀释剂 环氧漆稀释剂
稀释量 0-5%（以油漆重量计）
喷嘴口径 0.4-0.5mm
喷涂压力 15-25MPa（约150-250kg/㎡）
2.空气喷涂 稀释剂 环氧漆稀释剂
稀释量 0-10%（以油漆重量计）
喷嘴口径 2-3mm
喷涂压力 0.3-0.6MPa（约3-6kg/㎡）
3.刷 涂 稀释剂 环氧漆稀释剂
稀释量 0-3%（以油漆重量计）
运输与贮存：
1、产品在运输时，应防止雨淋、日光曝晒，避免碰撞，并应符合交通部门的有关规定。
2、产品应存放在阴凉通风处，防止日光直接照射，并隔绝火源，远离热源的库房内。

【安全守则】
施工场地应有良好的通风设施，油漆工应戴好眼镜、手套、口罩等，避免皮肤接触和吸入漆雾。施工现场严禁烟火。
声明：
本资料提供的信息完全基于我们在实验室和实践中取得的知识，但油漆的使用通常在我们的掌控之外。除了油漆本身质量，我们不能做任何担保。`,vi:`[Ứng dụng]
D\xf9ng chống ăn m\xf2n cho thiết bị trong m\xf4i trường n\xf3ng ẩm, kết cấu th\xe9p tr\xean bờ, m\xe1y m\xf3c th\xe9p, thiết bị v\xe0 phần tấm th\xe9p tr\xean mớn nước của t\xe0u biển.

[Th\xf4ng số vật l\xfd]
1. Th\xe0nh phần: th\xe0nh phần A v\xe0 B.
2. Tỷ lệ pha: 10:1.
3. Thời gian sử dụng: 6 giờ.
4. Phương ph\xe1p pha: khuấy đều th\xe0nh phần A, th\xeam th\xe0nh phần B vừa khuấy vừa đổ đến khi đồng nhất.
5. Thời gian kh\xf4: kh\xf4 bề mặt ≤ 2 giờ; kh\xf4 ho\xe0n to\xe0n ≤ 24 giờ; đ\xf3ng rắn ho\xe0n to\xe0n 7 ng\xe0y.
6. Thời gian giữa c\xe1c lớp (25\xb0C): tối thiểu 24 giờ, tối đa 7 ng\xe0y.
7. Chuẩn bị bề mặt: lớp sơn trước phải kh\xf4, sạch; b\xea t\xf4ng phải kh\xf4 ho\xe0n to\xe0n; loại bỏ bụi, vữa nổi v\xe0 tạp chất bề mặt.
8. Nhiệt độ bề mặt phải cao hơn điểm sương \xedt nhất 3\xb0C.

[Hệ sơn khuyến nghị]
Tương th\xedch với sơn phủ epoxy, cao su clo h\xf3a, polyurethane.
Chuẩn bị bề mặt:
1. Th\xe9p c\xf3 vảy c\xe1n: phun c\xe1t đến cấp Sa2.5; nơi kh\xf4ng thể phun c\xe1t n\xean m\xe0i cơ học hoặc xử l\xfd h\xf3a học để loại bỏ rỉ nổi.
2. Th\xe9p kh\xf4ng vảy c\xe1n: phun c\xe1t đến cấp Sa2.5 hoặc m\xe0i dụng cụ cầm tay/điện đến St3.
3. Th\xe9p đ\xe3 sơn l\xf3t xưởng: qu\xe9t phun nhẹ hoặc m\xe0i dụng cụ cầm tay/điện đến St3.
4. Kh\xf4ng sờ tay l\xean bề mặt th\xe9p đ\xe3 l\xe0m sạch rỉ; sơn c\xe0ng sớm c\xe0ng tốt, kh\xf4ng qu\xe1 2 giờ. Nếu ph\xe1t hiện \xf4 nhiễm hoặc rỉ lại trước khi sơn, phải xử l\xfd lại đạt cấp l\xe0m sạch rỉ y\xeau cầu.
Phương ph\xe1p thi c\xf4ng:
1. Phun kh\xf4ng kh\xed — thiết bị: d\xf9ng thiết bị chuy\xean dụng hai th\xe0nh phần BD42S-195; dung m\xf4i pha lo\xe3ng: dung m\xf4i sơn epoxy; tỷ lệ pha 0-5% (theo trọng lượng sơn);khẩu đầu phun 0.4-0.5 mm; \xe1p suất phun 15-25 MPa (khoảng 150-250 kg/m\xb2).
2. Phun kh\xed — dung m\xf4i pha lo\xe3ng: dung m\xf4i sơn epoxy; tỷ lệ pha 0-10% (theo trọng lượng sơn); khẩu đầu phun 2-3 mm; \xe1p suất phun 0.3-0.6 MPa (khoảng 3-6 kg/m\xb2).
3. Cọ — dung m\xf4i pha lo\xe3ng: dung m\xf4i sơn epoxy; tỷ lệ pha 0-3% (theo trọng lượng sơn).
Vận chuyển v\xe0 bảo quản:
1. Khi vận chuyển, tr\xe1nh mưa, nắng trực tiếp, tr\xe1nh va đập v\xe0 tu\xe2n thủ quy định vận chuyển.
2. Bảo quản ở nơi m\xe1t, tho\xe1ng kh\xed, tr\xe1nh \xe1nh nắng trực tiếp, c\xe1ch ly nguồn lửa v\xe0 nhiệt.

[An to\xe0n]
Khu vực thi c\xf4ng phải th\xf4ng gi\xf3 tốt; thợ sơn n\xean đeo k\xednh, găng tay, khẩu trang để tr\xe1nh tiếp x\xfac da v\xe0 h\xedt sương sơn. Nghi\xeam cấm mang lửa trống tại c\xf4ng trường.
Tuy\xean bố:
Th\xf4ng tin trong t\xe0i liệu n\xe0y dựa ho\xe0n to\xe0n tr\xean kiến thức ph\xf2ng th\xed nghiệm v\xe0 thực tiễn của ch\xfang t\xf4i, nhưng việc sử dụng sơn thường ngo\xe0i tầm kiểm so\xe1t của ch\xfang t\xf4i. Ngo\xe0i chất lượng bản th\xe2n sơn, ch\xfang t\xf4i kh\xf4ng thể đảm bảo bất kỳ điều g\xec.`,es:`[Aplicaciones]
Utilizado para protecci\xf3n anticorrosiva de equipos en ambientes calurosos y h\xfamedos, estructuras de acero en tierra, maquinaria de acero, equipos y las partes de placas de acero por encima de la l\xednea de flotaci\xf3n de los barcos.

[Parametros Fisicos]
1. Composici\xf3n: Componentes A y B.
2. Proporci\xf3n de mezcla: 10:1.
3. Tiempo de vida en el pote: 6 horas.
4. M\xe9todo de mezcla: Mezclar completamente el componente A, luego agregar el componente B mientras se agita hasta obtener uniformidad.
5. Tiempo de secado: superficie seca ≤ 2 h, secado completo ≤ 24 h, curado total 7 d.
6. Intervalo de repintado (25\xb0C): m\xednimo 24 h, m\xe1ximo 7 d.
7. Preparaci\xf3n de superficie: la capa anterior debe estar seca y limpia; el hormig\xf3n debe estar completamente curado; eliminar polvo de superficie, laitancia y contaminantes.
8. La temperatura del sustrato debe ser al menos 3\xb0C por encima del punto de roc\xedo.

[Sistema Recomendado]
Compatible con acabados superiores de epoxi, goma clorada y poliuretano.
Preparaci\xf3n de superficie:
1. Acero con escama de laminaci\xf3n: limpieza a chorro hasta Sa2.5; donde no sea posible el chapeo, mecanizar qu\xedmicamente o qu\xedmicamente para eliminar toda la \xf3xido suelto.
2. Acero sin escama de laminaci\xf3n: limpieza a chorro hasta Sa2.5, o limpieza con herramientas el\xe9ctricas hasta St3.
3. Acero recubierto con prima de taller: limpieza ligera a chorro o preparaci\xf3n secundaria de superficie con herramientas el\xe9ctricas hasta St3.
4. No tocar la superficie de acero desoxidada con ba`,ar:`[التطبيقات]
يستخدم للحماية من الصدأ في المعدات في البيانات الحارة والرطبة، والهياكل الفولية على الساحل، والمعدات والمكائن الفولية، وأجزاء ألواح الفول فوق خط المياه للسفن.

[المعلمات الفيزيائية]
1. التركيب: مكونان (أ و ب).
2. نسبة الخلط: 10:1.
3. مدة الصلاحية في الوعاء: 6 ساعات.
4. طريقة الخلط: اخلط المكون أ جيدًا ثم أضف المكون ب مع الاستمرار في الخلط حتى يصبح المزيج متجانسًا.
5. وقت الجفاف: سطح جاف ≤ 2 ساعة، جفاف كامل ≤ 24 ساعة، تكوين كامل 7 أيام.
6. فترة إعادة الطلاء (25\xb0C): الحد الأدنى 24 ساعة، الحد الأقصى 7 أيام.
7. إعداد السطح: يجب أن يكون الطلاء السابق جافًا ونظيفًا؛ يجب أن يكون الخرسانة متكاملة التصلب؛ إزالة الغبار من السطح، والبودرة الرقيقة، والمواد الملوثة.
8. درجة حرارة المادة الأساسية يجب أن تكون على الأقل 3\xb0C أع من نقطة الندى.

[النظام الموصى به]
متوافق مع الطلوات العلوية من الإيبوكسي، والكاوتشكلوريد، والبولي يوريثان.
إعداد السطح:
1. الفول مع القشرة المتجانسة: تنظيف بالرش إلى Sa2.5؛ حيث لا يكون التنظيف بالرش ممكنًا، طحن ميكانيكي أو معالجة كيميائية لإزالة كل الصدأ المتساقط.
2. الفول بدون قشرة متجانسة: تنظيف بالرش إلى Sa2.5، أو تنظيف بالأدوات الكهربائية إلى St3.
3. الفول مطل بالطلاء الأساسي: تنظيف خفيف بالرش أو إعداد ثانوي للسطح بالأدوات الكهربائية إلى St3.
4. لا تلامس سطح الفول المصقول بالخ`}},{model:"HN-AC-606",desc:{en:"Epoxy coal-tar anti-corrosion paint — high-build two-component polyamide-cured epoxy coal-tar pitch coating",zh:"环氧沥青防腐漆是一种厚浆双组份聚酰胺固化环氧煤焦沥青涂料",vi:"Sơn chống ăn mòn epoxy hắc ín — sơn hắc ín epoxy than đá đóng rắn polyamide hai thành phần màng dày",es:"Pintura anti-corrosión epoxi alquitranada — recubrimiento de alquitrán de hulla epoxi curado con poliamida de alto grosor, de dos componentes",ar:"الطلاء المقاوم للتآكل الإيبوكسيد القار — طلاء القار الإيبوكسي المثبت بالبولي أميد، سميك، من مكونين"},details:{en:`[Product Overview]
HONG NGUYEN epoxy coal-tar anti-corrosion paint is a high-build two-component polyamide-cured epoxy coal-tar pitch coating. After curing, it forms a film with excellent water resistance and flexibility, and resists abrasion, seawater, crude oil and fuel oil. It combines the hard, wear-resistant and chemical-resistant properties of epoxy paints with the water-resistant properties of pitch paints.

[Applications]
Used as a long-term protective coating on concrete surfaces of steel structures in severe corrosive environments, applied on immersed and splash zones such as water pipes. It is also an ideal paint for ballast tanks, offshore facilities, large slabs, underground pipelines and similar locations.

[Physical Parameters]
Base resin: Epoxy coal-tar pitch
Color: Black and brown
Mix ratio: Base : Curing agent = 4:1 (by volume) = 6:1 (by weight)
Pot life: 2 hours
Flash point: 38\xb0C
Specific gravity: 1.3-1.5 kg/L
Film thickness: wet film 400 \xb5m, dry film 250 \xb5m
Solid volume content: 64%
Theoretical spreading rate: 26 m\xb2/L
Drying time: surface dry 14 h; through dry 7 days (full cure)
Recoat interval: min 12 h; max 2 days
Finish: Semi-gloss
Storage: cool and dry environment

[Application Guide]
Surface preparation: The surface to be coated must be dry, clean, free of loose paint, grease and other contaminants; the product must be applied over a surface primed with an appropriate primer.
Application method: airless spray, brush or conventional spray.
Airless spray: nozzle 0.0233-0.027; spray pressure 2900 psi (200 L/m\xb2).
Conventional spray: generally not recommended; if used, a larger amount of compatible thinner must be added.
Thinner: T0220 (max by volume): brush 2%, airless spray 5%, conventional spray 10%
Cleaner: T0220

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Flammable. Keep away from fire sources. Do not smoke in the application area.
3. Store in a cool, dry place.`,zh:`【产品概述】
宏源环氧沥青防腐漆是一种厚浆双组份聚酰胺固化环氧煤焦沥青涂料，固化后可形成具有优异的耐水性和柔韧性漆膜，可耐磨损、耐海水、耐原油和燃油等，本品不仅具有环氧漆类的坚硬、耐磨和耐化学品性能，而且具有沥青漆类的耐水特性。

【适用范围】
作为严重腐蚀环境中的钢结构的混凝土结构表面的长效保护涂层，涂在浸泡水中和喷溅区域的地方，如水管等。另外，本品还是压载水舱、近海设施、大板砖、地下管道等类似地方的理想用漆。

【物理参数】
漆基：环氧煤焦沥青 颜色：黑色和棕色。
混合比率：基料：固化剂=4:1 （体积比）=6:1 （重量比）
混合使用期2小时
闪点：38℃ 比重：1.3-1.5kg/L
漆膜厚度：湿膜：400μm，干膜：250μm
体积固体含量：64% 理论涂布率26㎡/L
干燥时间：表干14小时；实7天（完全固化）
重涂间隔：最小12小时；最大2天
漆面：半光
贮存：贮存环境要求凉爽、干燥

【施工说明】
表面处理：施工表面必须干燥、清洁、无松散漆层、油脂及其它污垢物；本品必须涂在预涂过适当底漆的表面上。
施工方法：无气喷涂、刷涂或普通喷涂。
无气喷涂：一喷孔：0.0233-0.027；
一喷出压力：2900磅/寸2 （200L/㎡）
普通喷涂：一般不建议使用，若使用普通喷涂，则必须使用较多的配套稀释剂。
稀释剂：T0220
（最大用量）刷涂：2% 无气喷涂：5% 普通喷涂10%
清洗剂：T0220

【安全守则】
1.施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2.易燃物品，远离火源，在施工范围内不宜吸烟。
3.储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn chống ăn m\xf2n epoxy hắc \xedn HONG NGUYEN l\xe0 sơn phủ hắc \xedn epoxy than đ\xe1 đ\xf3ng rắn polyamide hai th\xe0nh phần m\xe0ng d\xe0y. Sau khi đ\xf3ng rắn tạo m\xe0ng c\xf3 khả năng chịu nước v\xe0 độ dẻo ưu việt, chịu m\xe0i m\xf2n, nước biển, dầu th\xf4 v\xe0 dầu nhi\xean liệu. Kết hợp t\xednh cứng, chịu m\xe0i m\xf2n v\xe0 chịu h\xf3a chất của sơn epoxy với t\xednh chịu nước của sơn hắc \xedn.

[Ứng dụng]
D\xf9ng l\xe0m lớp phủ bảo vệ d\xe0i hạn tr\xean bề mặt b\xea t\xf4ng của kết cấu th\xe9p trong m\xf4i trường ăn m\xf2n nặng, thi c\xf4ng trong v\xf9ng ngập nước v\xe0 v\xf9ng s\xf3ng vỗ như ống nước. Cũng l\xe0 sơn l\xfd tưởng cho khoan dằn, thiết bị ngo\xe0i khơi, tấm lớn, ống ngầm v\xe0 c\xe1c vị tr\xed tương tự.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Epoxy hắc \xedn than đ\xe1
M\xe0u: Đen v\xe0 n\xe2u
Tỷ lệ pha: Nhựa : Chất đ\xf3ng rắn = 4:1 (thể t\xedch) = 6:1 (trọng lượng)
Thời gian sử dụng: 2 giờ
Điểm bắt lửa: 38\xb0C
Tỉ trọng: 1.3-1.5 kg/L
Độ d\xe0y m\xe0ng: m\xe0ng ướt 400 \xb5m; m\xe0ng kh\xf4 250 \xb5m
H\xe0m lượng rắn thể t\xedch: 64%
Lượng lan l\xfd thuyết: 26 m\xb2/L
Thời gian kh\xf4: kh\xf4 bề mặt 14 giờ; kh\xf4 ho\xe0n to\xe0n 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 12 giờ; tối đa 2 ng\xe0y
Bề mặt: B\xe1n b\xf3ng
Bảo quản: m\xf4i trường m\xe1t v\xe0 kh\xf4

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, sạch, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất; phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường.
Phun kh\xf4ng kh\xed: khẩu đầu phun 0.0233-0.027; \xe1p suất phun 2900 psi (200 L/m\xb2).
Phun thường: thường kh\xf4ng khuyến nghị; nếu d\xf9ng phải th\xeam lượng lớn dung m\xf4i pha lo\xe3ng tương th\xedch.
Dung m\xf4i pha lo\xe3ng: T0220 (thể t\xedch tối đa): cọ 2%, phun kh\xf4ng kh\xed 5%, phun thường 10%
Chất vệ sinh: T0220

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Product Overview]
HONG NGUYEN pintura epoxi al alquitr\xe1n de hulla anticorrosi\xf3n es un recubrimiento de alta construcci\xf3n a base de epoxi alquitranado curado con poliamida de dos componentes. Despu\xe9s del curado, forma una pel\xedcula con excelente resistencia al agua y flexibilidad, y resiste al desgaste, agua de mar, petr\xf3leo crudo y combustible. Combina las propiedades duras, resistentes al desgaste y qu\xedmicas de las pinturas epoxi con las propiedades resistentes al agua de las pinturas alquitranadas.

[Applications]
Se utiliza como recubrimiento de protecci\xf3n a largo plazo en superficies de hormig\xf3n de estructuras de acero en entornos corrosivos severos, aplicado en zonas sumergidas y salpicadas como tuber\xedas de agua. Tambi\xe9n es una pintura ideal para tanques de lastre, instalaciones marinas, losas grandes, tuber\xedas subterr\xe1neas y ubicaciones similares.

[Physical Parameters]
Resina base: Epoxi alquitranado de hulla
Color: Negro y marr\xf3n
Relaci\xf3n de mezcla: Base : Agente curativo = 4:1 (en volumen) = 6:1 (en peso)
Tiempo de vida en el pote: 2 horas
Punto de inflamaci\xf3n: 38\xb0C
Densidad espec\xedfica: 1.3-1.5 kg/L
Espesor de pel\xedcula: pel\xedcula h\xfameda 400 \xb5m, pel\xedcula seca 250 \xb5m
Contenido de volumen s\xf3lido: 64%
Tasa de propagaci\xf3n te\xf3rica: 26 m\xb2/L
Tiempo de secado: superficie seca 14 h; secado completo 7 d\xedas (curado total)
Intervalo de reaplicaci\xf3n: m\xednimo 12 h; m\xe1ximo 2 d\xedas
Acabado: Semibrillante
Almacenamiento: ambiente fresco y seco`,ar:`[Product Overview]
طلاء هونج نيوان المضاد للتآكل والمصنوع من الإيبوكسي وقطران الفحم هو طلاء سميك من المكونين، معالج ببولي أميد وقطران الفحم. بعد المعالجة، ي形成一个薄膜具有出色的防水性和柔韧性،并能抵抗磨损、海水、原油和燃料油。它将环氧涂料的坚硬、耐磨和耐化学性特性与涂料的防水性能相结合。

[Applications]
يستخدم كطلاء وقائي طويل الأمد على أسطح الخرسانة للهيكل الفولاذي في البيئات المسببة للتآكل الشديدة، ويُطبق في المناطق المغمسة والمتسخة مثل أنابيب المياه. إنه أيضًا طلاء مثالي لخزانات البالاست، والمصانع البحرية، والوحود الكبيرة، وأنابيب تحت الأرض والمواقع المماثلة.

[Physical Parameters]
الراتج الأساسي: إيبوكسي وقطران الفحم
اللون: أسود وبني
نسبة الخلط: الأساس : عامل المعالجة = 4:1 (حسب الحجم) = 6:1 (حسب الوزن)
مدة الحياة في الوعاء: 2 ساعة
نقطة الاشتعال: 38\xb0C
الكثافة النوعية: 1.3-1.5 كجم/لتر
سمك الطلاء: طلاء رطب 400 ميكرومتر، طلاء جاف 250 ميكرومتر
محتوى الحجم الصلب: 64%
معدل التغطية النظري: 26 م\xb2/ل
وقت الجفاف: سطح جاف 14 ساعة؛ جاف بالكامل 7 أيام (معالجة كاملة)
الفترة بين الطلاءات: الحد الأدنى 12 ساعة؛ الحد الأقصى 2 يوم
اللمسة: نصف لامع
التخزين: بيئة باردة وجافة`}},{model:"HN-AC-607",desc:{en:"Acrylic paint — single-component high-grade acrylic-based topcoat",zh:"丙烯酸漆是一种单组份高级丙烯酸基面漆",vi:"Sơn acrylic — sơn phủ acrylic cao cấp một thành phần",es:"Pintura acrílica — barniz de acabado de alta calidad a base de acrílico",ar:"الطلاء الأكريليك — طلاء سطاحي عالي الجودة بناءً على الأكريليك"},details:{en:`[Product Overview]
HONG NGUYEN acrylic paint is a single-component high-grade acrylic-based topcoat with good gloss and color retention. The paint film resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[Applications]
Used as a topcoat on steel structures and concrete surfaces in moderate to severe corrosive environments. Also used as a decorative protective coating on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[Physical Parameters]
Base resin: Acrylic resin
Color: White, silver and other colors
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate primer.

[Recommended System]
Primer: HONG NGUYEN epoxy ester iron-oxide-red anti-rust primer P6171, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN acrylic enamel F6700, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0200 (max by volume): brush 10%, airless spray 5%, conventional spray 20%
Cleaner: T0200

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: This product can be made in various metallic colors for traffic sign paint on steel and concrete surfaces — high visibility, clear reflective effect, good light and salt spray resistance.`,zh:`【产品概述】
HONG NGUYEN（宏源）丙烯酸漆是一种单组份高级丙烯酸基面漆，具有良好的光泽和保色性，漆膜耐磨损、抗碰撞、耐盐水、矿物油和多种化学品，本品易修补，无重涂时间限制。

【适用范围】
作为面漆应用于中等至严重腐蚀环境中的钢结构和混凝土表面。也可用作各种电器、仪表、仪器、机械设备等金属器材的表面起装饰保护作用。

【物理参数】
漆基：丙烯酸树脂
颜色：白色、银色及其它颜色
比重：1.1 kg/L
闪点：38 ℃
体积固体含量：35 %
理论涂布量：10 m2/L（干膜35微米计）
干燥时间：表干1 h，硬干24h
重涂间隔：最小4 h，最大不限
漆面：有光

【施工说明】
表面处理：施工表面必须清洁干燥，无松散漆层、油脂及其它污垢物。本品也可涂在预涂适当底漆的表面上。

【建议油漆配套】
底漆：宏源环氧酯铁红防锈底漆P6171，参考用量：0.1 L/㎡，即10㎡/L。
面漆：宏源丙烯酸磁漆F6700涂两遍，参考用量：0.2 L/㎡，即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0200
（最大用量） 刷 涂：10 %
无气喷涂：5 %
一般喷涂：20 %
清 洗 剂：T0200

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注： 本品可做成闪光效果的各种颜色，作为交通标志漆施工在钢铁和混凝土表面，可见度高、反光效果清晰明朗、耐光耐盐雾性能良好。`,vi:`[Tổng quan sản phẩm]
Sơn acrylic HONG NGUYEN l\xe0 sơn phủ acrylic cao cấp một th\xe0nh phần c\xf3 độ b\xf3ng v\xe0 khả năng giữ m\xe0u tốt. M\xe0ng sơn chịu m\xe0i m\xf2n, va đập, nước muối, dầu kho\xe1ng v\xe0 nhiều h\xf3a chất; dễ sửa chữa, kh\xf4ng giới hạn thời gian giữa c\xe1c lớp.

[Ứng dụng]
D\xf9ng l\xe0m sơn phủ tr\xean kết cấu th\xe9p v\xe0 bề mặt b\xea t\xf4ng trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng. Cũng d\xf9ng l\xe0m lớp phủ trang tr\xed bảo vệ cho thiết bị điện, đồng hồ, dụng cụ, m\xe1y m\xf3c v\xe0 c\xe1c vật kim loại kh\xe1c.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa acrylic
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.1 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 35%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 cứng 24 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa kh\xf4ng giới hạn
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch v\xe0 kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. C\xf3 thể thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: Sơn l\xf3t chống rỉ epoxy ester oxit sắt đỏ HONG NGUYEN P6171, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn tr\xe1ng acrylic HONG NGUYEN F6700, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0200 (thể t\xedch tối đa): cọ 10%, phun kh\xf4ng kh\xed 5%, phun thường 20%
Chất vệ sinh: T0200

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: C\xf3 thể sản xuất nhiều m\xe0u \xe1nh kim l\xe0m sơn dấu hiệu giao th\xf4ng tr\xean bề mặt th\xe9p v\xe0 b\xea t\xf4ng — độ nhận biết cao, hiệu ứng phản quang r\xf5 r\xe0ng, chịu s\xe1ng v\xe0 chịu muối tốt.`,es:`[Resumen del Producto]
HONG NGUYEN pintura acr\xedlica es un acabado de alto grado a base de acr\xedlico de un solo componente con buen brillo y retenci\xf3n de color. La pel\xedcula de pintura resiste al desgaste, impactos, agua salada, aceites minerales y muchos qu\xedmicos; es f\xe1cil de reparar y no tiene l\xedmite de tiempo para aplicar una segunda capa.

[Aplicaciones]
Se utiliza como acabado en estructuras de acero y superficies de hormig\xf3n en entornos de corrosi\xf3n moderada a severa. Tambi\xe9n se utiliza como recubrimiento decorativo y protector en diversos aparatos el\xe9ctricos, instrumentos, medidores, maquinaria y otros art\xedculos met\xe1licos.

[Parametros Fisicos]
Resina base: Resina acr\xedlica
Color: Blanco, plateado y otros colores
Densidad espec\xedfica: 1,1 kg/L
Punto de inflamaci\xf3n: 38\xb0C
Contenido de volumen s\xf3lido: 35%
Tasa de aplicaci\xf3n te\xf3rica: 10 m\xb2/L (a 35 \xb5m DFT)
Tiempo de secado: superficial 1 h, seco total 24 h
Intervalo de segunda capa: m\xednimo 4 h, m\xe1ximo ilimitado
Acabado: Brillante

[Guia de Aplicacion]
Preparaci\xf3n de superficie: La superficie a recubrir debe estar limpia y seca, libre de pintura suelta, grasa y otros contaminantes. El producto tambi\xe9n puede aplicarse sobre una superficie preparada con un imprimaci\xf3n adecuada.

[Sistema Recomendado]
Imprimaci\xf3n: HONG NGUYEN imprimaci\xf3n antihierro de \xe9ster ep\xf3xico rojo \xf3xido P6171, cobertura aprox. 0,1 L/m\xb2 (10 m\xb2

[Seguridad]
Precauciones de seguridad: Use equipo de protecci\xf3n personal adecuado, incluyendo guantes y gafas de seguridad. Aseg\xfarese de una buena ventilaci\xf3n en el \xe1rea de aplicaci\xf3n. Almacenar en un lugar fresco y seco, alejado del calor y fuentes de ignici\xf3n. En caso de contacto con la piel, lave con abundante agua. En caso de contacto con los ojos, enjuague con agua durante 15 minutos y busque atenci\xf3n m\xe9dica.`,ar:`[نظرة عامة]
طلاء هونج نيوان الأكريليك هو طلاء عالي الجودة أحادي المكون بناءً على الأكريليك مع لمعان جيد وحفظ للون. فيلم الطلاء مقاوم للخدش والصدمات ومياه البحر وزيوت المعادن والعديد من المواد الكيميائية؛ وهو سهل الإصلاح ولا يوجد حد زمني لتطبيق طبقة ثانية.

[التطبيقات]
يستخدم كطلاء نهائي على الهياكل الفولاذية والأسطح الخرسانية في البيئات المعدية إلى الشديدة التآكل. كما يستخدم كطلاء حماية زخرفي على مختلف الأجهزة الكهربائية والأدوات والمعدات والمعدات الميكانيكية和其他金属制品.

[المعلمات]
المادة الأساسية: راتنج الأكريليك
اللون: الأبيض، الفضي والألوان الأخرى
الكثافة النوعية: 1.1 كجم/لتر
نقطة الاشتعال: 38\xb0C
محتوى الحجم الصلب: 35%
معدل التطبيق النظري: 10 م\xb2/لتر (عند 35 ميكرومتر DFT)
وقت الجفاف: سطح جاف 1 ساعة، جاف تماماً 24 ساعة
فترة إعادة التغطية: دقيقة 4 ساعة، قصى غير محدودة
الانتهاء: لامع

[دليل]
تحضير السطح: يجب أن تكون السطح المطلوب طلاؤها نظيفًا وجافًا، خاليًا من الطلاء المتفتت والدهون和其他污染物. يمكن تطبيق المنتج أيضًا على السطح المُطلي بطلاء أولي مناسب.

[النظام]
الطلاء الأولي: طلاء هونج نيوان المضاد للصدأ أحمر أكسيد الحديد الإيبوكسيد P6171، تغطية حوالي 0.1 لتر/م\xb2 (10 م\xb2

[السلامة]
إجراءات السلامة: استخدم معدات الحماية الشخصية المناسبة، بما في ذلك القفازات وواقي العين. تأكد من وجود تهوية جيدة في منطقة التطبيق. تخزن في مكان بارد وجاف،远离热源和点火源。如接触皮肤，请用清水冲洗。如接触眼睛，请用清水冲洗15分钟并寻求医疗救助。`}},{model:"HN-AC-608",desc:{en:"Alkyd paint — specially formulated alkyd-based enamel",zh:"醇酸漆是特殊配制的醇酸基磁漆",vi:"Sơn alkyd — sơn tráng nền alkyd phối chế đặc biệt",es:"Pintura alquídica — esmalte a base de alquidol especialmente formulado",ar:"الطلاء الألكيدي — ميناء ألكيدي تم صياغته خصيصاً"},details:{en:`[Product Overview]
HONG NGUYEN alkyd paint is a specially formulated alkyd-based enamel that forms a glossy, abrasion-resistant paint film. Its features are fast drying, economical cost, and excellent water and weather resistance.

[Applications]
Can be used as a general-purpose topcoat on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Physical Parameters]
Base resin: Modified alkyd resin
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust primer P2070 or iron-oxide-red anti-rust primer P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0010 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0010

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before recoating, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum recoat interval is exceeded before recoating, roughen the surface to ensure intercoat adhesion.`,zh:`【产品概述】
HONG NGUYEN（宏源）醇酸漆是特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，其特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
可作为通用面漆涂于轻微至中等腐蚀环境下的室内外金属和木材表面。

【物理参数】
漆基：改性醇酸树脂 颜色：白色、银色及其它颜色
比重：1.10kg/L 闪点：38℃
体积固体含量：50% 理论涂布率：14㎡/L（干膜35微米）
干燥时间：表干4小时，实干8小时
重涂间隔：最小8小时，最大30天
漆面：有光

【施工说明】
表面处理：施工表面必须干燥、无松散漆层、油脂及其它污垢物。本品必须涂在预涂过适当底漆的表面上。

【建议油漆配套】
1）钢铁表面：
底漆：宏源红丹防锈底漆P2070或铁红防锈底漆P2040涂一遍，参考用量：0.1L/㎡,即10㎡/L。
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
2）木材表面：
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0010
（最大用量） 刷涂：5～10% 无气喷涂5% 一般喷涂：15%
清 洗 剂：T0010

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注：1）暴露于污染环境后重涂以前，须用高压淡水彻底清洗表面，任其自干。
2）若超过最大重涂间隔再涂油漆时，应磨粗表面以确保漆膜间的附着力。`,vi:`[Tổng quan sản phẩm]
Sơn alkyd HONG NGUYEN l\xe0 sơn tr\xe1ng nền alkyd phối chế đặc biệt, tạo m\xe0ng sơn b\xf3ng, chịu m\xe0i m\xf2n. Đặc điểm l\xe0 kh\xf4 nhanh, kinh tế, chịu nước v\xe0 chịu thời tiết ưu việt.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn phủ phổ th\xf4ng tr\xean bề mặt kim loại v\xe0 gỗ trong nh\xe0 v\xe0 ngo\xe0i trời trong m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa alkyd cải biến
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.10 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 14 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 8 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 30 ng\xe0y
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
1) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ ch\xec đỏ HONG NGUYEN P2070 hoặc sơn l\xf3t chống rỉ oxit sắt đỏ P2040, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
2) Bề mặt gỗ:
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0010 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0010

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: 1) Sau khi tiếp x\xfac m\xf4i trường \xf4 nhiễm, trước khi sơn lại, phải rửa sạch bề mặt bằng nước ngọt \xe1p suất cao v\xe0 để tự kh\xf4.
2) Nếu vượt qu\xe1 thời gian giữa c\xe1c lớp tối đa trước khi sơn lại, phải l\xe0m nh\xe1m bề mặt để đảm bảo độ b\xe1m d\xednh giữa c\xe1c lớp sơn.`,es:`[Resumen del Producto]
La pintura alqu\xeddica HONG NGUYEN es un esmalte a base de alqu\xeddo especialmente formulado que forma un film de pintura brillante y resistente a la abrasi\xf3n. Sus caracter\xedsticas son secado r\xe1pido, costo econ\xf3mico y excelente resistencia al agua y a la intemperie.

[Aplicaciones]
Se puede usar como acabado general en superficies met\xe1licas y de madera en interiores y exteriores en entornos con corrosi\xf3n ligera a moderada.

[Parametros Fisicos]
Resina base: Resina alqu\xeddica modificada
Color: Blanco, plateado y otros colores
Densidad espec\xedfica: 1.10 kg/L
Punto de inflamaci\xf3n: 38\xb0C
Contenido de volumen s\xf3lido: 50%
Tasa de extensi\xf3n te\xf3rica: 14 m\xb2/L (a 35 \xb5m DFT)
Tiempo de secado: superficial 4 h, completo 8 h
Intervalo de repintado: m\xednimo 8 h, m\xe1ximo 30 d\xedas
Acabado: Brillante

[Guia de Aplicacion]
Preparaci\xf3n de superficie: La superficie a recubrir debe estar seca, libre de pintura suelta, grasa y otros contaminantes. El producto debe aplicarse sobre una superficie imprimada con un imprimador adecuado.

[Sistema Recomendado]
1) Superficies de acero:
Imprimador: 1 capa de imprimador antihierro de blanco de plomo HONG NGUYEN P2070 o imprimador antihierro de \xf3xido rojo P2040, cobertura aprox. 0.1 L/m\xb2 (10 m\xb2/L)
Acabado: 2 capas de pintura alqu\xeddica HONG NGUYEN, cobertura aprox. 0.2 L/m\xb2 (5 m\xb2/L)
2) Superficies de madera:
Acabado: 2 capas de pintura alqu\xeddica HONG NGUYEN, cobertura aprox. 0.2 L/m\xb2 (5 m\xb2/L)

[Seguridad]
Siga las instrucciones de seguridad del fabricante. Use equipo de protecci\xf3n personal adecuado. Mantener alejado del calor y de fuentes de ignici\xf3n. Asegure una buena ventilaci\xf3n durante la aplicaci\xf3n y el secado.`,ar:`[نظرة عامة]
الطلاء الألكيدي HONG NGUYEN هو مينا قائم على الألكيد مصمم خصيصًا يشكل فيلم طلاء لامع ومقاوم للخدش. ميزاته هي الجفاف السريع والتكلفة الاقتصادية ومقاومة ممتازة للماء والطقس.

[التطبيقات]
يمكن استخدامه كطلاء نهائي متعدد الأغراض على الأسطح المعدنية والخشبية في الداخل والخارج في البيئات التي تعاني من تآكل خفيف إلى متوسط.

[المعلمات]
المستخدمة في الصياغة: راتنج ألكيدي معدل
اللون: أبيض، فضي وألوان أخرى
الكثافة: 1.10 كجم/لتر
نقطة الاشتعال: 38\xb0C
محتوى المادة الصلبة الحجمي: 50%
معدل الانتشار النظري: 14 م\xb2/لتر (عند 35 ميكرومتر DFT)
وقت الجفاف: سطح الجاف 4 ساعة، جاف بالكامل 8 ساعة
فترة إعادة الطلاء: 8 ساعة كحد أدنى، 30 يوم كحد أقصى
اللمعان: لامع

[دليل]
تحضير السطح: يجب أن تكون السطح المطلوب طلاؤه جافًا وخاليًا من الطلاء المتساقط والدهون والملوثات الأخرى. يجب تطبيق المنتج على سطح مُحضر بطلاء أساسي مناسب.

[النظام]
1) الأسطح الفولاذية:
الطلاء الأساسي: طبقة واحدة من الطلاء المضاد للصدأ بالأحمر الرصاصي HONG NGUYEN P2070 أو الطلاء المضاد للصدأ بالأحمر الأوكسيد P2040، التغطية حوالي 0.1 لتر/م\xb2 (10 م\xb2/لتر)
الطلاء النهائي: طبقتان من الطلاء الألكيدي HONG NGUYEN، التغطية حوالي 0.2 لتر/م\xb2 (5 م\xb2/لتر)
2) الأسطح الخشبية:
الطلاء النهائي: طبقتان من الطلاء الألكيدي HONG NGUYEN، التغطية حوالي 0.2 لتر/م\xb2 (5 م\xb2/لتر)

[السلامة]
اتبع تعليمات السلامة من المصنع. استخدم معدات حماية شخصية مناسبة. ابعد عن الحرارة ومصادر الاشتعال. تأكد من وجود تهوية جيدة أثناء التطبيق والجفاف.`}},{model:"HN-AC-609",desc:{en:"Chlorinated rubber paint — super topcoat formulated from acrylic resin and chlorinated rubber with excellent color",zh:"氯化橡胶漆是用丙烯酸树脂与氯化橡胶配制而成、色泽优良的超级面漆",vi:"Sơn cao su clo hóa — sơn phủ cao cấp phối chế từ nhựa acrylic và cao su clo hóa, màu sắc ưu việt",es:"Pintina de goma clorada — barniz de acabado superior formulado a partir de resina acrílica y goma clorada con excelente color",ar:"الطلاء المطاطي كلوريد — طلاء سطاحي فائق صيغ من راتنج الأكريليك والمطاط كلوريد مع لون ممتاز"},details:{en:`[Product Overview]
HONG NGUYEN chlorinated rubber paint is a super topcoat formulated from acrylic resin and chlorinated rubber with excellent color. The paint film resists abrasion and impact; it resists seawater, mineral oils and many chemicals as well as fish oil and other animal and vegetable oils. The product is easy to repair and can be recoated after extended time.

[Applications]
Used as a topcoat on the inner and outer steel surfaces in moderate to severe corrosive industrial environments, with outstanding sunlight and weather resistance.

[Physical Parameters]
Base resin: Chlorinated rubber
Color: Multiple colors
Finish: Matte, semi-matte
Flash point: 36-40\xb0C
Specific gravity: 1.30 kg/L
Drying time: tack-free 10 min (25\xb0C); surface dry 1 h; hard dry 4 h
Recoat: min 3 h, max unlimited
Solid volume content: 40%
Typical dry film thickness: 40 \xb5m
Theoretical spreading rate: 10 m\xb2/L (at 40 \xb5m DFT)

[Application Guide]
Surface preparation: The surface to be coated should first be primed with an appropriate primer or intermediate coat, and the surface must be kept clean, dry and free of impurities. For special surface preparations, consult our technical department.

[Recommended System]
Primer: HONG NGUYEN iron-oxide-red chlorinated rubber primer P6171, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN chlorinated rubber paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0200 (max by volume): brush 10%, airless spray 5%, conventional spray 15%
Cleaner: T0200

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.`,zh:`【产品概述】
HONG NGUYEN（宏源）氯化橡胶漆是用丙烯酸树脂与氯化橡胶配制而成、色泽优良的超级面漆。漆膜耐磨损、抗碰撞；耐海水、矿物油和多种化学品以及鱼油和其它动植物油，本品易修补，时间延长也可重涂。

【适用范围】
作为面漆涂装在中等至严重腐蚀的工业环境中的钢材内、外表面，具有优异的耐晒耐候性能。

【物理参数】
漆基：氯化橡胶
颜色：多种颜色
漆面：哑光、半哑光
闪点：36～40℃
比重：1.30kg/L
干燥时间：指触干：10分钟
（25℃） 表 干：1小时
硬 干：4小时
重 涂：最小3小时，最大不限
体积固体含量：40%
一般干漆膜厚度：40微米
理论涂布率：10㎡/L（以干膜40μm计）

【施工说明】
表面处理：涂装表面应先涂上适当的底漆或中间漆，同时表面必须保持清洁、干爽并将杂质除去。特殊表面的处理请向本公司技术部查询。

【建议油漆配套】
底漆：宏源铁红氯化橡胶底漆P6171，参考用量：0.1 L/㎡，即10㎡/L。
面漆：宏源氯化橡胶漆涂两遍，参考用量：0.2 L/㎡，即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0200
（最大用量） 刷 涂：10 %
无气喷涂：5 %
一般喷涂：15 %
清 洗 剂：T0200

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn cao su clo h\xf3a HONG NGUYEN l\xe0 sơn phủ cao cấp phối chế từ nhựa acrylic v\xe0 cao su clo h\xf3a, m\xe0u sắc ưu việt. M\xe0ng sơn chịu m\xe0i m\xf2n, va đập; chịu nước biển, dầu kho\xe1ng v\xe0 nhiều h\xf3a chất cũng như dầu c\xe1 v\xe0 c\xe1c dầu động thực vật kh\xe1c. Dễ sửa chữa, c\xf3 thể sơn lại sau thời gian d\xe0i.

[Ứng dụng]
D\xf9ng l\xe0m sơn phủ tr\xean bề mặt trong v\xe0 ngo\xe0i th\xe9p trong m\xf4i trường c\xf4ng nghiệp ăn m\xf2n trung b\xecnh đến nặng, c\xf3 khả năng chịu nắng v\xe0 chịu thời tiết vượt trội.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Cao su clo h\xf3a
M\xe0u: Nhiều m\xe0u
Bề mặt: Mờ, b\xe1n mờ
Điểm bắt lửa: 36-40\xb0C
Tỉ trọng: 1.30 kg/L
Thời gian kh\xf4: kh\xf4ng d\xednh 10 ph\xfat (25\xb0C); kh\xf4 bề mặt 1 giờ; kh\xf4 cứng 4 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 3 giờ, tối đa kh\xf4ng giới hạn
H\xe0m lượng rắn thể t\xedch: 40%
Độ d\xe0y m\xe0ng kh\xf4 điển h\xecnh: 40 \xb5m
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 40 \xb5m)

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn n\xean được sơn l\xf3t hoặc sơn lớp giữa ph\xf9 hợp trước, bề mặt phải sạch, kh\xf4 v\xe0 kh\xf4ng tạp chất. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: Sơn l\xf3t cao su clo h\xf3a oxit sắt đỏ HONG NGUYEN P6171, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn cao su clo h\xf3a HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0200 (thể t\xedch tối đa): cọ 10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0200

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
La pintura de goma clorurada HONG NGUYEN es un super acabado formulado a partir de resina acr\xedlica y goma clorurada con excelente color. La pel\xedcula de pintura resiste al desgaste e impactos; resiste al agua de mar, aceites minerales y muchos qu\xedmicos, as\xed como aceite de pescado y otros aceites animales y vegetales. El producto es f\xe1cil de reparar y puede ser repintado despu\xe9s de un tiempo extendido.

[Aplicaciones]
Se utiliza como acabado en superficies de acero internas y externas en entornos industriales con corrosi\xf3n moderada a severa, con excelente resistencia a la luz solar y a la intemperie.

[Parametros Fisicos]
Resina base: Goma clorurada
Color: M\xfaltiples colores
Acabado: Mate, semi-mate
Punto de inflamaci\xf3n: 36-40\xb0C
Densidad espec\xedfica: 1.30 kg/L
Tiempo de secado: sin tacto 10 min (25\xb0C); superficial 1 h; duro 4 h
Repintado: m\xednimo 3 h, m\xe1ximo ilimitado
Contenido de volumen s\xf3lido: 40%
Espesor t\xedpico de pel\xedcula seca: 40 \xb5m
Tasa de aplicaci\xf3n te\xf3rica: 10 m\xb2/L (a 40 \xb5m DFT)

[Guia de Aplicacion]
Preparaci\xf3n de superficie: La superficie a recubrir primero debe ser imprimada con una imprimaci\xf3n o capa intermedia adecuada, y la superficie debe mantenerse limpia, seca y libre de impurezas. Para preparaciones de superficie especiales, consulte nuestro departamento t\xe9cnico.

[Sistema Recomendado]
Seguridad: Siga las instrucciones de seguridad y maneje el producto con las precauciones necesarias. Use equipo de protecci\xf3n personal adecuado durante la aplicaci\xf3n.`,ar:`[نظرة عامة]
الطلاء المطاطي كلوريد هونج نيوان هو طلاء فائق التغطية صُمم من مادة الاكريليك المطاطي كلوريد مع ألوان ممتازة. فيلم الطلاء يقاوم الخدش والصدمات؛ كما أنه يقاوم ماء البحر وزيوت المعادن والعديد من المواد الكيميائية بالإضافة إلى زيت السمك وزيوت الحيوانات والنباتات الأخرى. المنتسه سهل الإصلاح ويم إعادة طلاؤه بعد فترة طويلة.

[التطبيقات]
يستخدم كطلاء نهائي على الأسطح الداخلية والخارجية للصلب في البيئات الصناعية ذات التآكل المتوسط إلى الشديد، مع مقاومة ممتازة لأشعة الشمس والظروف الجوية.

[المعلمات]
المادة الأساسية: المطاطي كلوريد
اللون: ألوان متعددة
اللمعان: غير لامع، شبه غير لامع
نقطة الاشتعال: 36-40\xb0C
الكثافة النوعية: 1.30 كجم/لتر
وقت الجفاف: جاف لمس 10 دقيقة (25\xb0C؛ سطح جاف 1 ساعة؛ جاف تماماً 4 ساعات
إعادة الطلاء: الحد الأدنى 3 ساعات، الحد الأقصى غير محدود
المحتوى الصلب الحجمي: 40%
سمك الطبقة الجافة النموذجي: 40 ميكرومتر
معدل التطبيق النظري: 10 م\xb2/لتر (عند 40 ميكرومتر DFT)

[دليل]
تحضير السطح: يجب أن تُطلى السurface أولاً بالأساس أو الطلاء الوسيط المناسب، ويجب أن تبقى السطح نظيفة وجافة وخالية من الشوائب. لتحضيرات سطح خاصة، استشر قسمنا الفني.

[النظام]
[السلامة]`}},{model:"HN-AC-610",desc:{en:"High-permeability modified epoxy anti-corrosion coating — two-component chemically-cured epoxy primer with up to 80% zinc in the dry film",zh:"环氧富锌底漆是一种双组份富梓环氧底漆,本品为双组份化学固化干燥型,干漆膜中锌粉含量高达80％",vi:"Sơn chống ăn mòn epoxy cải biến thấm sâu — sơn lót epoxy hai thành phần đóng rắn hóa học, hàm lượng kẽm trong màng khô lên tới 80%",es:"Recubrimiento anti-corrosión modificado epoxi de alta permeabilidad — prima epoxi de dos componentes, curada químicamente, con hasta 80% de zinc en la película seca",ar:"الطلاء المقاوم للتآكل الإيبوكسيد المُعدَّل ذو النفاذية العالية — طلاء إيبوكسيد ثنائي المكونات، يُعقَّم كيميائياً، يحتوي على ما يصل إلى 80% زنك في الطلاء الجاف"},details:{en:`[Product Overview]
HONG NGUYEN zinc-rich epoxy primer is a two-component zinc-rich epoxy primer. It is a two-component chemically-cured drying type with zinc powder content up to 80% in the dry film, offering outstanding anti-corrosion and abrasion resistance.

[Applications]
Used as a long-term protective primer on steel surfaces in moderate to severe corrosive environments. It can be overcoated with various specialized paint systems and also provides temporary protection for blast-cleaned steel plate surfaces as a welding primer. It can also serve as a high-grade anti-rust primer in fireproof coating systems.

[Physical Parameters]
Base resin: Epoxy resin
Color: Reddish-grey or grey
Mix ratio (base:curing agent): 10:1 by weight
Pot life: 8 hours / 20\xb0C
Flash point: 25\xb0C
Specific gravity: 2.3 kg/L
Solid volume content: 49%
Theoretical spreading rate: 12 m\xb2/L or 52 m\xb2/kg (at 40 \xb5m DFT)
Drying time: surface dry 1 hour; through dry 7 days (full cure)
Recoat interval: min 1 hour, max 7 days
Finish: Matte

[Application Guide]
Surface preparation: Steel surfaces must be dry, free of loose paint, grease and other contaminants. Blast-clean to Swedish standard Sa2.5, with surface roughness meeting RUGOTEST standard NO3, BN9A. Remove dust and grit before painting. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN zinc-rich epoxy primer, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Mid-coat: 1 coat HONG NGUYEN epoxy MIO high-build paint, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats acrylic enamel or HONG NGUYEN polyurethane enamel, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner (max by volume): brush 5-10%, airless spray 10%, conventional spray 15%
Cleaner: T0220

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Flammable. Keep away from fire sources; do not smoke in the application area.
3. Store in a cool, dry place.`,zh:`【产品概述】
宏源环氧富锌底漆是一种双组份富梓环氧底漆,本品为双组份化学固化干燥型,干漆膜中锌粉含量高达80％，其有优异的防腐蚀及耐磨损性能。

【适用范围】
作为长效保护底漆涂装在中等至严重腐蚀环境中的钢材表面。本品可被多种专门的油漆配套涂覆，也可为喷砂清洁过的钢板表面提供临时保护，作为焊接底漆。同时也可用作防火涂料的配套高级防锈底漆。

【物理参数】
漆基：环氧树脂
颜色：红灰色或灰色
混合比例：漆基：固化剂=10：1（重量比）
混合使用期：8小时/201
闪点：25℃
比重：2.3㎏/L
固体体积含量：49％
理论涂布率：12㎡∕L即52㎡∕㎏〔干膜40\xb5m计）
干燥时间表干：1小时；实干：7天(完全固化)
重涂间隔：最小1小时,最大7天
漆面：哑光

【施工说明】
表面处理：钢铁表面必须干燥,无松散漆层、油脂及其它污垢物。表面喷砂处理至瑞典标准Sa2.5级,表面粗糙度达到RUGOTEST标准NO3,BN9A。涂装前除去尘埃及砂粒。特殊表面处理请向本公司技术部査询。

【建议油漆配套】
底漆：宏源环氧富锌底漆涂一遍，参考用量：0.1L/㎡即10L∕㎡
中间漆：宏源环氧云铁厚浆漆涂一遍^参考用量：0.1L/㎡即10L∕㎡
面漆：丙烯酸磁漆或宏源聚氨酯磁漆涂二遍,参考用量0.2㎡∕L即5㎡∕L
施工方法：无气喷涂、刷涂或普通喷涂。
稀释剂：（最大体积用量)刷涂5-10％，无气喷涂10％普通喷涂15％
清洗剂：T0220

【安全守则】
1、施工时必须保持空气流通,并采用一定的防护措施。避免吸入溶剂蒸气或漆雾,皮肤、眼睛不得接触本品。
2、易燃物品,远离火源,在施工范围内不宜吸烟。
3、储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN l\xe0 sơn l\xf3t epoxy gi\xe0u kẽm hai th\xe0nh phần. Đ\xe2y l\xe0 loại đ\xf3ng rắn h\xf3a học hai th\xe0nh phần với h\xe0m lượng bột kẽm trong m\xe0ng kh\xf4 l\xean tới 80%, c\xf3 t\xednh năng chống ăn m\xf2n v\xe0 chống m\xe0i m\xf2n vượt trội.

[Ứng dụng]
Được sử dụng l\xe0m sơn l\xf3t bảo vệ d\xe0i hạn tr\xean bề mặt th\xe9p trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng. C\xf3 thể được phủ l\xean bởi nhiều hệ sơn chuy\xean dụng kh\xe1c nhau v\xe0 cũng cung cấp bảo vệ tạm thời cho bề mặt th\xe9p đ\xe3 phun c\xe1t, l\xe0m sơn l\xf3t h\xe0n. Đồng thời c\xf3 thể d\xf9ng l\xe0m sơn l\xf3t chống rỉ cao cấp trong hệ sơn chống ch\xe1y.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: X\xe1m đỏ hoặc x\xe1m
Tỷ lệ pha (nhựa:chất đ\xf3ng rắn): 10:1 theo trọng lượng
Thời gian sử dụng: 8 giờ / 20\xb0C
Điểm bắt lửa: 25\xb0C
Tỉ trọng: 2.3 kg/L
H\xe0m lượng rắn thể t\xedch: 49%
Lượng lan l\xfd thuyết: 12 m\xb2/L tức 52 m\xb2/kg (tại DFT 40 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 ho\xe0n to\xe0n 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 1 giờ, tối đa 7 ng\xe0y
Bề mặt: Mờ

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt th\xe9p phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất kh\xe1c. Phun c\xe1t đến ti\xeau chuẩn Thụy Điển Sa2.5, độ nh\xe1m bề mặt đạt ti\xeau chuẩn RUGOTEST NO3, BN9A. Loại bỏ bụi v\xe0 hạt c\xe1t trước khi sơn. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật của ch\xfang t\xf4i.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 tức 10 m\xb2/L
Lớp giữa: 1 lớp sơn epoxy mica oxit sắt d\xe0y HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 tức 10 m\xb2/L
Sơn phủ: 2 lớp sơn tr\xe1ng acrylic hoặc sơn tr\xe1ng polyurethane HONG NGUYEN, lượng tham khảo 0.2 L/m\xb2 tức 5 m\xb2/L
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 10%, phun thường 15%
Chất vệ sinh: T0220

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
El imprimente epoxi rico en zinc HONG NGUYEN es un imprimente epoxi rico en zinc de dos componentes. Es de secado qu\xedmico de dos componentes, con un contenido de polvo de zinc de hasta un 80% en la pel\xedcula seca, ofreciendo una excelente resistencia a la corrosi\xf3n y al desgaste.

[Aplicaciones]
Se utiliza como imprimente de protecci\xf3n a largo plazo en superficies de acero en entornos de corrosi\xf3n moderada a severa. Puede recubrirse con diversos sistemas de pintura especializados y tambi\xe9n proporciona protecci\xf3n temporal para superficies de placas de acero arenadas como imprimente para soldadura. Tambi\xe9n puede servir como imprimente de alta calidad contra el \xf3xido en sistemas de recubrimiento ign\xedfugo.

[Parametros Fisicos]
Resina base: Resina epoxi
Color: Gris-rojizo o gris
Proporci\xf3n de mezcla (base:agente curante): 10:1 en peso
Vida en el recipiente: 8 horas / 20\xb0C
Punto de inflamabilidad: 25\xb0C
Densidad espec\xedfica: 2,3 kg/L
Contenido de volumen s\xf3lido: 49%
Tasa de aplicaci\xf3n te\xf3rica: 12 m\xb2/L o 52 m\xb2/kg (a 40 \xb5m DFT)
Tiempo de secado: superficie seca 1 hora; seco completo 7 d\xedas (curado total)
Intervalo de recubrimiento: m\xednimo 1 hora, m\xe1ximo 7 d\xedas
Acabado: Mate

[Guia de Aplicacion]
Preparaci\xf3n de superficie: Las superficies de acero deben estar secas, libres de pintura suelta, grasa y otros contaminantes. Arenado est\xe1ndar sueco Sa2.5, con rugosidad superficial`,ar:`[نظرة عامة]
الطلاء المكون من جزأين غني بالزنك HONG NGUYEN هو طلاء إيبوكسي غني بالزنك المكون من جزأين. إنه من نوع الجفاف الكيميائي المكون من جزأين، مع محتوى مسحوق زنك يصل إلى 80٪ في الفيلم الجاف، مما يوفر مقاومة ممتازة للتآكل والبلى.

[التطبيقات]
يستخدم كمُثبِّت حماية طويل الأمد على أسطح الفولاذ في البيئات المعرضة للتآكل المتوسط إلى الشديد. يمكن طلاؤه بأنظمة الطلاء المتخصصة المختلفة ويوفر أيضًا حماية مؤقتة لأسطح ألواح الفولاذ الرملة كمُثبِّت لللحام. كما يمكن أن يخدم كمُثبِّت عالي الجودة ضد الصدأ في أنظمة طلاء مقاوم للحريق.

[المعلمات]
المادة الأساسية: راتنج الإيبوكسي
اللون: رمادي-بني أو رمادي
نسبة الخلط (المادة الأساسية:مُصلِّح التصلب): 10:1 بالوزن
مدة الحياة في الوعاء: 8 ساعة / 20 درجة مئوية
نقطة الاشتعال: 25 درجة مئوية
الكثافة النوعية: 2.3 كجم/لتر
محتوى الحجم الصلب: 49%
معدل التطبيق النظري: 12 م\xb2/لتر أو 52 م\xb2/كجم (عند 40 ميكرون DFT)
وقت الجفاف: السطح الجاف 1 ساعة؛ جاف بالكامل 7 أيام (التصلب الكامل)
فترة إعادة الطلاء: الحد الأدنى 1 ساعة، الحد الأقصى 7 أيام
اللمسة: باهت

[دليل]
تحسس السطح: يجب أن تكون أسطح الفولاذ جافة وخالية من الطلاء المتساقط، والدهون، والشوائب الأخرى. رمل وفقًا للمعيار السويدي Sa2.5، مع خشونة السطح`}},{model:"HN-AC-611",desc:{en:"Epoxy coal-tar anti-corrosion coating — two-component chemically-cured epoxy primer with up to 80% zinc in the dry film",zh:"环氧富锌底漆是一种双组份富梓环氧底漆,本品为双组份化学固化干燥型,干漆膜中锌粉含量高达80％",vi:"Sơn chống ăn mòn epoxy hắc ín — sơn lót epoxy hai thành phần đóng rắn hóa học, hàm lượng kẽm trong màng khô lên tới 80%",es:"Recubrimiento anti-corrosión epoxi alquitranado — prima epoxi de dos componentes, curada químicamente, con hasta 80% de zinc en la película seca",ar:"الطلاء المقاوم للتآكل الإيبوكسيد القار — طلاء إيبوكسيد ثنائي المكونات، يُعقَّم كيميائياً، يحتوي على ما يصل إلى 80% زنك في الطلاء الجاف"},details:{en:`[Product Overview]
HONG NGUYEN zinc-rich epoxy primer is a two-component zinc-rich epoxy primer. It is a two-component chemically-cured drying type with zinc powder content up to 80% in the dry film, offering outstanding anti-corrosion and abrasion resistance.

[Applications]
Used as a long-term protective primer on steel surfaces in moderate to severe corrosive environments. It can be overcoated with various specialized paint systems and also provides temporary protection for blast-cleaned steel plate surfaces as a welding primer. It can also serve as a high-grade anti-rust primer in fireproof coating systems.

[Physical Parameters]
Base resin: Epoxy resin
Color: Reddish-grey or grey
Mix ratio (base:curing agent): 10:1 by weight
Pot life: 8 hours / 20\xb0C
Flash point: 25\xb0C
Specific gravity: 2.3 kg/L
Solid volume content: 49%
Theoretical spreading rate: 12 m\xb2/L or 52 m\xb2/kg (at 40 \xb5m DFT)
Drying time: surface dry 1 hour; through dry 7 days (full cure)
Recoat interval: min 1 hour, max 7 days
Finish: Matte

[Application Guide]
Surface preparation: Steel surfaces must be dry, free of loose paint, grease and other contaminants. Blast-clean to Swedish standard Sa2.5, with surface roughness meeting RUGOTEST standard NO3, BN9A. Remove dust and grit before painting. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN zinc-rich epoxy primer, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Mid-coat: 1 coat HONG NGUYEN epoxy MIO high-build paint, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats acrylic enamel or HONG NGUYEN polyurethane enamel, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner (max by volume): brush 5-10%, airless spray 10%, conventional spray 15%
Cleaner: T0220

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Flammable. Keep away from fire sources; do not smoke in the application area.
3. Store in a cool, dry place.`,zh:`【产品概述】
宏源环氧富锌底漆是一种双组份富梓环氧底漆,本品为双组份化学固化干燥型,干漆膜中锌粉含量高达80％，其有优异的防腐蚀及耐磨损性能。

【适用范围】
作为长效保护底漆涂装在中等至严重腐蚀环境中的钢材表面。本品可被多种专门的油漆配套涂覆，也可为喷砂清洁过的钢板表面提供临时保护，作为焊接底漆。同时也可用作防火涂料的配套高级防锈底漆。

【物理参数】
漆基：环氧树脂
颜色：红灰色或灰色
混合比例：漆基：固化剂=10：1（重量比）
混合使用期：8小时/201
闪点：25℃
比重：2.3㎏/L
固体体积含量：49％
理论涂布率：12㎡∕L即52㎡∕㎏〔干膜40\xb5m计）
干燥时间表干：1小时；实干：7天(完全固化)
重涂间隔：最小1小时,最大7天
漆面：哑光

【施工说明】
表面处理：钢铁表面必须干燥,无松散漆层、油脂及其它污垢物。表面喷砂处理至瑞典标准Sa2.5级,表面粗糙度达到RUGOTEST标准NO3,BN9A。涂装前除去尘埃及砂粒。特殊表面处理请向本公司技术部査询。

【建议油漆配套】
底漆：宏源环氧富锌底漆涂一遍，参考用量：0.1L/㎡即10L∕㎡
中间漆：宏源环氧云铁厚浆漆涂一遍^参考用量：0.1L/㎡即10L∕㎡
面漆：丙烯酸磁漆或宏源聚氨酯磁漆涂二遍,参考用量0.2㎡∕L即5㎡∕L
施工方法：无气喷涂、刷涂或普通喷涂。
稀释剂：（最大体积用量)刷涂5-10％，无气喷涂10％普通喷涂15％
清洗剂：T0220

【安全守则】
1、施工时必须保持空气流通,并采用一定的防护措施。避免吸入溶剂蒸气或漆雾,皮肤、眼睛不得接触本品。
2、易燃物品,远离火源,在施工范围内不宜吸烟。
3、储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN l\xe0 sơn l\xf3t epoxy gi\xe0u kẽm hai th\xe0nh phần. Đ\xe2y l\xe0 loại đ\xf3ng rắn h\xf3a học hai th\xe0nh phần với h\xe0m lượng bột kẽm trong m\xe0ng kh\xf4 l\xean tới 80%, c\xf3 t\xednh năng chống ăn m\xf2n v\xe0 chống m\xe0i m\xf2n vượt trội.

[Ứng dụng]
Được sử dụng l\xe0m sơn l\xf3t bảo vệ d\xe0i hạn tr\xean bề mặt th\xe9p trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng. C\xf3 thể được phủ l\xean bởi nhiều hệ sơn chuy\xean dụng kh\xe1c nhau v\xe0 cũng cung cấp bảo vệ tạm thời cho bề mặt th\xe9p đ\xe3 phun c\xe1t, l\xe0m sơn l\xf3t h\xe0n. Đồng thời c\xf3 thể d\xf9ng l\xe0m sơn l\xf3t chống rỉ cao cấp trong hệ sơn chống ch\xe1y.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: X\xe1m đỏ hoặc x\xe1m
Tỷ lệ pha (nhựa:chất đ\xf3ng rắn): 10:1 theo trọng lượng
Thời gian sử dụng: 8 giờ / 20\xb0C
Điểm bắt lửa: 25\xb0C
Tỉ trọng: 2.3 kg/L
H\xe0m lượng rắn thể t\xedch: 49%
Lượng lan l\xfd thuyết: 12 m\xb2/L tức 52 m\xb2/kg (tại DFT 40 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 ho\xe0n to\xe0n 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 1 giờ, tối đa 7 ng\xe0y
Bề mặt: Mờ

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt th\xe9p phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất kh\xe1c. Phun c\xe1t đến ti\xeau chuẩn Thụy Điển Sa2.5, độ nh\xe1m bề mặt đạt ti\xeau chuẩn RUGOTEST NO3, BN9A. Loại bỏ bụi v\xe0 hạt c\xe1t trước khi sơn. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật của ch\xfang t\xf4i.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 tức 10 m\xb2/L
Lớp giữa: 1 lớp sơn epoxy mica oxit sắt d\xe0y HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 tức 10 m\xb2/L
Sơn phủ: 2 lớp sơn tr\xe1ng acrylic hoặc sơn tr\xe1ng polyurethane HONG NGUYEN, lượng tham khảo 0.2 L/m\xb2 tức 5 m\xb2/L
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 10%, phun thường 15%
Chất vệ sinh: T0220

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN zinc-rich epoxy primer es una imprimaci\xf3n epoxi rica en zinc de dos componentes. Es un sistema de dos componentes de secado por curado qu\xedmico con contenido de polvo de zinc de hasta 80% en la pel\xedcula seca, ofreciendo excepcional resistencia a la corrosi\xf3n y al desgaste.

[Aplicaciones]
Se utiliza como imprimaci\xf3n de protecci\xf3n a largo plazo en superficies de acero en entornos de corrosi\xf3n moderada a severa. Puede ser recubierto con diversos sistemas de pintura especializados y tambi\xe9n proporciona protecci\xf3n temporal para superficies de placas de acero arenadas como imprimaci\xf3n para soldadura. Tambi\xe9n puede servir como imprimaci\xf3n anticorrosi\xf3n de alta gama en sistemas de pintura ign\xedfuga.

[Parametros Fisicos]
Resina base: Resina epoxi
Color: Gris-rojizo o gris
Relaci\xf3n de mezcla (base:agente curativo): 10:1 en peso
Vida \xfatil en el recipiente: 8 horas / 20\xb0C
Punto de inflamaci\xf3n: 25\xb0C
Densidad espec\xedfica: 2,3 kg/L
Contenido de volumen s\xf3lido: 49%
Tasa de extensi\xf3n te\xf3rica: 12 m\xb2/L o 52 m\xb2/kg (a 40 \xb5m DFT)
Tiempo de secado: superficial 1 hora; completo 7 d\xedas (curado total)
Intervalo de recubrimiento: m\xednimo 1 hora, m\xe1ximo 7 d\xedas
Acabado: Mate

[Guia de Aplicacion]
Preparaci\xf3n de superficie: Las superficies de acero deben estar secas, libres de pintura suelta, grasa y otros contaminantes. Arenado seg\xfan est\xe1ndar sueco Sa2.5, con rugosidad superficial`,ar:`[نظرة عامة]
HONG NGUYEN zinc-rich epoxy primer هو أساس زنك غني من مكونين. إنه نظام من مكونين يجف بالتصلب الكيميائي مع محتوى مسحوق زنك يصل إلى 80٪ في الفيلم الجاف، مما يوفر مقاومة استثنائية للتآكل والبلى.

[التطبيقات]
يستخدم كطبقة واقية طويلة الأمد على أسطح الفولاذ في البيئات المعرضة للتآكل المتوسط إلى الشديد. يمكن طلاؤه بأنظمة الطلاء المتخصصة المختلفة ويوفر حماية مؤقتة لأسطح صفائح الفولاذ المنخفضة بالرش كطبقة أساس لللحام. يمكن أن يخدم أيضًا كطبقة أساس مضادة للصدأ عالية الجودة في أنظمة الطلاء المقاوم للحريق.

[المعلمات]
المادة الأساسية: راتنج الإيبوكسي
اللون: رمادي-أحمر أو رمادي
نسبة الخلط (المادة الأساسية:مصلح العلاج): 10:1 بالوزن
مدة الحياة في الوعاء: 8 ساعة / 20 درجة مئوية
نقطة الاشتعال: 25 درجة مئوية
الكثافة النوعية: 2.3 كجم/لتر
محتوى الحجم الصلب: 49%
معدل الانتشار النظري: 12 م\xb2/لتر أو 52 م\xb2/كجم (عند 40 ميكرون DFT)
وقت الجفاف: سطح الجاف 1 ساعة؛ جاف بالكامل 7 أيام (التصلب الكامل)
فترة إعادة الطلاء: الحد الأدنى 1 ساعة، الحد الأقصى 7 أيام
الانتهاء: غير لامع

[دليل]
إعداد السطح: يجب أن تكون أسطح الفولاذ جافة، خالية من الطلاء المتساقط، والدهون和其他污染物. الرش بالرمل وفقًا للمعيار السويدي Sa2.5، مع خشونة السطح`}},{model:"HN-AC-612",desc:{en:"Bridge anti-corrosion paint",zh:"桥梁防腐漆",vi:"Sơn chống ăn mòn cho cầu",es:"Pintura anti-corrosión para puentes",ar:"الطلاء المقاوم للتآكل للجسور"},details:{en:`[Applications]
▲ Surfaces of metal components and equipment requiring rust prevention, acid resistance, corrosion resistance, oil resistance, heat resistance and decorative appearance;
▲ Machinery manufacturing, steel bridges, petrochemical industry, ships, metallurgy, power, mining, construction installation, thermal gas, traffic signs, sewage treatment and other engineering projects;
▲ Anti-corrosion coating of mechanical equipment, tanks, kettles, towers, vats and other large vessels, various pipelines, drilling platforms, metal factory roof tiles and steel towers in various industries.`,zh:`【适用范围】
▲要求防锈、防酸、防腐蚀、耐油、耐热、美观等的金属类构件和设备的表面；
▲机械制造、钢铁桥梁、石油化工、船舶、冶金、电力、矿山、建筑安装、热力煤气、交通标志、污水处理等工程；
▲各行业的机械设备、罐、釜、塔、槽等大型容器及各类管道、钻井平台、金属厂房瓦面及钢铁塔架等金属构件的防腐涂装。`,vi:`[Ứng dụng]
▲ Bề mặt c\xe1c bộ phận v\xe0 thiết bị kim loại y\xeau cầu chống rỉ, chống axit, chống ăn m\xf2n, chịu dầu, chịu nhiệt v\xe0 t\xednh thẩm mỹ;
▲ Sản xuất m\xe1y m\xf3c, cầu th\xe9p, h\xf3a dầu, t\xe0u biển, luyện kim, điện lực, khai kho\xe1ng, lắp đặt x\xe2y dựng, kh\xed nhiệt, dấu hiệu giao th\xf4ng, xử l\xfd nước thải v\xe0 c\xe1c c\xf4ng tr\xecnh kh\xe1c;
▲ Sơn chống ăn m\xf2n cho thiết bị m\xe1y m\xf3c, bồn, nồi, th\xe1p, chậu v\xe0 c\xe1c containers lớn, c\xe1c loại ống, gi\xe0n khoan, t\xf4n m\xe1i nh\xe0 xưởng kim loại v\xe0 th\xe1p th\xe9p trong c\xe1c ng\xe0nh c\xf4ng nghiệp.`,es:`[Aplicaciones]
▲ Superficies de componentes met\xe1licos y equipos que requieren prevenci\xf3n de \xf3xido, resistencia al \xe1cido, resistencia a la corrosi\xf3n, resistencia al aceite, resistencia al calor y apariencia decorativa;
▲ Fabricaci\xf3n de maquinaria, puentes de acero, industria petroqu\xedmica, barcos, metalurgia, energ\xeda, miner\xeda, construcci\xf3n e instalaci\xf3n, gas t\xe9rmico, se\xf1ales de tr\xe1fico, tratamiento de aguas residuales y otros proyectos de ingenier\xeda;
▲ Recubrimiento anticorrosivo para equipos mec\xe1nicos, tanques, calderas, torres, tanques y otros grandes recipientes, diversas tuber\xedas, plataformas de perforaci\xf3n, tejas de metal para techos de f\xe1bricas y torres de acero en diversas industrias.`,ar:`[التطبيقات]
▲ الأسطح للمكونات المعدنية والمعدات التي تتطلب منع الصدأ، ومقاومة الحمض، ومقاومة التآكل، ومقاومة الزيوت، ومقاومة الحرارة، ومظهر زخرفي؛
▲ التصنيع الميكانيكي، وجسور الصلب، وصناعة البتروكيماويات، والسفن، والتعدين، والطاقة، والتعدين، والبناء والتثبيت، والغازات الحرارية، ولوحات المرور، ومعالجة مياه الصرف الصحي ومشاريع الهندسة الأخرى؛
▲ طلاء مقاوم للتآكل للمعدات الميكانيكية، والخزانات، والغلايات، والأبراج، والخزانات والأوعية الكبيرة الأخرى، وأنابيب متنوعة، ومنصات الحفر، وبلاط المعدن لأسقف المصانع، وأبراج الصلب في مختلف الصناعات.`}}],image:"/images/product-anticorrosion.jpg",applications:[{en:"Bridges & chemical plants",zh:"桥梁与化工厂",vi:"Cầu & nhà máy hóa chất",es:"Puentes & plantas químicas",ar:"الجسور والمنشآت الكيميائية"},{en:"Offshore platforms & port cranes",zh:"海洋平台与港口起重机",vi:"Giàn ngoài khơi & cần cảng",es:"Plataformas marinas y grúas portuarias",ar:"المنصات البحرية والرافعات المينائية"},{en:"Storage tank exteriors & pipelines",zh:"储罐外壁与管道",vi:"Bồn chứa & đường ống",es:"Exteriores de tanques de almacenamiento y oleoductos",ar:"ج Tanks de التخزين والخطوط أنابيب"},{en:"Power plant steel & port terminals",zh:"电厂钢构与港口码头",vi:"Thép nhà máy điện & cảng",es:"Acero de plantas de energía y terminales portuarias",ar:"فولاذ محطات الطاقة والمرافئ النهايات"}]},{code:"CAT-02",title:{en:"High-Temperature Coatings",zh:"工业耐高温涂料",vi:"Sơn chịu nhiệt công nghiệp",es:"Recubrimientos de alta temperatura",ar:"الطلاء عالي درجة الحرارة"},short:{en:"Silicone · Ceramic · 200°C – 600°C",zh:"有机硅·陶瓷·200°C–600°C",vi:"Silicone · ceramic · 200°C–600°C",es:"Silicona · Cerámica · 200°C – 600°C",ar:"السيليكون · السيراميك · 200°C – 600°C"},description:{en:"Silicone-modified and inorganic ceramic coatings rated from 200°C to 600°C continuous service. Resists thermal cycling, exhaust gases, and chemical attack. Used in power generation, petrochemical, and engine manufacturing.",zh:"有机硅改性及无机陶瓷涂层,长期耐温 200°C 至 600°C。抗热循环、排气气体及化学侵蚀。适用于电力、石化及发动机制造。",vi:"Sơn silicone改性 và ceramic vô cơ, chịu liên tục 200°C đến 600°C. Chịu sốc nhiệt, khí xả và hóa chất. Dùng trong phát điện, hóa dầu và sản xuất động cơ."},features:[{en:"Continuous service up to 600°C",zh:"长期使用温度达 600°C",vi:"Hoạt động liên tục tới 600°C",es:"Servicio continuo hasta 600°C",ar:"خدمة مستمرة حتى 600°C"},{en:"500+ thermal cycles without film breakdown",zh:"500+ 次热循环,漆膜不破坏",vi:"500+ chu kỳ nhiệt, màng sơn không hỏng",es:"500+ ciclos térmicos sin degradación de la película",ar:"500+ دورات حرارية دون تدهور الفيلم"},{en:"Resists exhaust gases & chemical attack",zh:"抗排气气体及化学侵蚀",vi:"Chịu khí xả & hóa chất",es:"Resiste gases de escape y ataque químico",ar:"يتحمل غازات العادم والهجوم الكيميائي"},{en:"Air-dry or heat-cure options",zh:"可自干或烘干",vi:"Khô tự nhiên hoặc sấy nhiệt",es:"Opciones de secado al aire o curado por calor",ar:"خيارات التجفيف بالهواء أو التصلب بالحرارة"}],specs:[{label:{en:"Base",zh:"基料",vi:"Nhựa nền",es:"Base",ar:"قاعدة"},value:"Silicone / Ceramic"},{label:{en:"Temp Range",zh:"温度范围",vi:"Nhiệt độ",es:"Rango de temperatura",ar:"نطاق درجة الحرارة"},value:"200 – 600°C"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT",ar:"DFT"},value:"25 – 80 μm"},{label:{en:"Cure",zh:"固化",vi:"Khâu đông",es:"Curado",ar:"التصلب"},value:"Air / Heat"}],categorySpecs:[{label:{en:"Temp Range",zh:"温度范围",vi:"Nhiệt độ",es:"Rango de temperatura",ar:"نطاق درجة الحرارة"},value:"200–600°C"},{label:{en:"Thermal Cycles",zh:"热循环",vi:"Chu kỳ nhiệt",es:"Ciclos térmicos",ar:"الدورات الحرارية"},value:"500+"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT",ar:"DFT"},value:"25–80 μm"},{label:{en:"Cure",zh:"固化",vi:"Khâu đông",es:"Curado",ar:"التصلب"},value:"Air / Heat"}],models:[{model:"HN-HT-200",desc:{en:"Silicone high-temperature paint — heat-resistant coating",zh:"有机硅耐高温漆是一种耐热",vi:"Sơn chịu nhiệt cao silicone — sơn phủ chịu nhiệt",es:"Pintura de alta temperatura de silicona — recubrimiento resistente al calor",ar:"الطلاء عالي درجة حرارة السيليكون — طلاء مقاوم للحرارة"},details:{en:`[Product Overview]
HONG NGUYEN silicone high-temperature paint is a heat-resistant, single-component air-drying coating with aluminum powder as the coloring pigment. Custom colors and heat-resistance temperatures can be formulated upon customer request.

[Applications]
Can be used as a long-term protective coating on hot pipes, exhaust pipes, chimneys and other hot surfaces up to 550\xb0C. Can serve as both primer and topcoat.

[Physical Parameters]
Base resin: Heat-resistant resin
Color: Silver, black or other colors
Specific gravity: 1.1 kg/L
Flash point: 25\xb0C
Solid volume content: 31%
Theoretical spreading rate: 12 m\xb2/L (at 25 \xb5m DFT)
Drying time: surface dry 1 h, through dry 24 h
Recoat interval: None
Finish: Semi-flat

[Application Guide]
Surface preparation:
Remove grease with a suitable cleaner, remove salt and other contaminants with high-pressure fresh water, and blast-clean to Sa 2.5.
Application method: airless spray, brush, conventional spray.
Thinner: T0200 (max by volume): airless spray 5%, brush 10%, conventional spray 15%
Cleaner: T0200

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
4) For professional use only.
Note:
After heating, the paint film becomes slightly thermoplastic and the gloss decreases. Avoid applying too thick a film during application; an appropriate amount of thinner must be added to ensure a low dry film thickness. Excessive film thickness will cause blistering upon subsequent heating. For high-temperature service, the total dry film thickness should preferably be kept below 75 \xb5m. Do not expose to heat before the film is fully dry (24 h / 20\xb0C).`,zh:`【产品概述】
HONG NGUYEN(宏源)有机硅耐高温漆是一种耐热，以铝粉为着色颜料的单组份自干型涂料。也可为客户要求订做专用颜色和耐热温度的品种。

【适用范围】
可用作热管道、排风管、烟囱和其它温度达550℃的热表面的长效保护涂层。可自作底漆和面漆。

【物理参数】
漆基：耐热树脂
颜色：银色、黑色或其它颜色
比重：1.1kg/L
闪点：25℃
体积固体含量：31%
理论涂布量：12㎡/L（干膜25微米计）
干燥时间：表干1小时，实干24小时
重涂间隔：无
漆面：半平光

【施工说明】
表面处理：
用适当的清洁剂清除油脂，用高压淡水清除盐份和其它污垢物，喷砂处理至Sa 2.5级。
施工方法：无空气喷涂、刷涂、普通喷涂。
稀释剂：T0200
（最大用量） 无气喷涂 5%
刷 涂 10%
普通喷涂 15%
清洗剂：T0200

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
4）本品仅限于专业用途。
备注：
本品受热后漆膜稍具热塑性，并光泽降低，施工时应避免太厚的漆膜，施工时必须稍加适量稀释剂以确保形成较低的干膜厚度。漆膜太厚会导致后来受热引起鼓泡，在高温使用时，漆膜总干膜厚度最好保持在75微米以下，漆膜未彻底干燥前（24h/20℃）不要受热。`,vi:`[Tổng quan sản phẩm]
Sơn chịu nhiệt cao silicone HONG NGUYEN l\xe0 sơn chịu nhiệt một th\xe0nh phần kh\xf4 tự nhi\xean với bột nh\xf4m l\xe0m pigment m\xe0u. C\xf3 thể phối chế m\xe0u v\xe0 nhiệt độ chịu nhiệt theo y\xeau cầu kh\xe1ch h\xe0ng.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m lớp phủ bảo vệ d\xe0i hạn tr\xean ống nhiệt, ống xả, ống kh\xf3i v\xe0 c\xe1c bề mặt n\xf3ng l\xean tới 550\xb0C. C\xf3 thể d\xf9ng l\xe0m cả sơn l\xf3t v\xe0 sơn phủ.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa chịu nhiệt
M\xe0u: Bạc, đen hoặc m\xe0u kh\xe1c
Tỉ trọng: 1.1 kg/L
Điểm bắt lửa: 25\xb0C
H\xe0m lượng rắn thể t\xedch: 31%
Lượng lan l\xfd thuyết: 12 m\xb2/L (tại DFT 25 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 ho\xe0n to\xe0n 24 giờ
Thời gian giữa c\xe1c lớp: Kh\xf4ng
Bề mặt: B\xe1n phẳng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt:
Loại bỏ dầu mỡ bằng dung dịch tẩy rửa ph\xf9 hợp, loại bỏ muối v\xe0 tạp chất bằng nước ngọt \xe1p suất cao, phun c\xe1t đến Sa 2.5.
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ, phun thường.
Dung m\xf4i pha lo\xe3ng: T0200 (thể t\xedch tối đa): phun kh\xf4ng kh\xed 5%, cọ 10%, phun thường 15%
Chất vệ sinh: T0200

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
4) Chỉ d\xf9ng cho mục đ\xedch chuy\xean nghiệp.
Ghi ch\xfa:
Sau khi gia nhiệt, m\xe0ng sơn c\xf3 t\xednh nhiệt dẻo nhẹ v\xe0 độ b\xf3ng giảm. Tr\xe1nh thi c\xf4ng m\xe0ng qu\xe1 d\xe0y; phải th\xeam lượng dung m\xf4i pha lo\xe3ng ph\xf9 hợp để đảm bảo độ d\xe0y m\xe0ng kh\xf4 thấp. M\xe0ng qu\xe1 d\xe0y sẽ g\xe2y phồng rộp khi gia nhiệt tiếp theo. Khi sử dụng nhiệt độ cao, tổng độ d\xe0y m\xe0ng kh\xf4 n\xean giữ dưới 75 \xb5m. Kh\xf4ng l\xe0m n\xf3ng trước khi m\xe0ng sơn kh\xf4 ho\xe0n to\xe0n (24 giờ / 20\xb0C).`,es:`[Resumen del Producto]
HONG NGUYEN pintura de silicona de alta temperatura es un recubrimiento resistente al calor, de un componente y secado al aire, con polvo de aluminio como pigmento colorante. Se pueden formular colores personalizados y temperaturas de resistencia al calor seg\xfan solicitud del cliente.

[Aplicaciones]
Se puede utilizar como recubrimiento protector a largo plazo en tuber\xedas calientes, tubos de escape, chimeneas y otras superficies calientes hasta 550\xb0C. Puede servir tanto como imprimaci\xf3n como como capa final.

[Parametros Fisicos]
Resina base: Resina resistente al calor
Color: Plateado, negro u otros colores
Densidad espec\xedfica: 1,1 kg/L
Punto de inflamaci\xf3n: 25\xb0C
Contenido de volumen s\xf3lido: 31%
Tasa de aplicaci\xf3n te\xf3rica: 12 m\xb2/L (a 25 \xb5m DFT)
Tiempo de secado: superficial 1 h, completo 24 h
Intervalo de reaplicaci\xf3n: Ninguno
Acabado: Semi-mate

[Guia de Aplicacion]
Preparaci\xf3n de superficie:
Elimine la grasa con un limpiador adecuado, elimine la sal y otros contaminantes con agua fresca a alta presi\xf3n, y limpie por chorro hasta Sa 2,5.
M\xe9todo de aplicaci\xf3n: pulverizaci\xf3n sin aire, brocha, pulverizaci\xf3n convencional.
Delgante: T0200 (m\xe1x en volumen): pulverizaci\xf3n sin aire 5%, brocha 10%, pulverizaci\xf3n convencional 15%
Limpiador: T0200

[Seguridad]
1) Inflamable. Mant\xe9ngale alejado de fuentes de fuego. No fume en el \xe1rea de aplicaci\xf3n.
2) Mantenga una ventilaci\xf3n adecuada durante la aplicaci\xf3n`,ar:`[نظرة عامة]
طلاء السيليكون عالي الحرارة HONG NGUYEN هو طلاء مقاوم للحرارة، أحادي المكون، يجف بالهواء، مع مسحوق الألومنيوم كصبغة تلوين. يمكن تخصيص الألوان ودرجات مقاومة الحرارة حسب طلب العميل.

[التطبيقات]
يمكن استخدامه كطلاء واقي طويل الأمد على الأنابيب الساخنة، وأنابع العادم، المداخن和其他 الأسطح الساخنة حتى 550 درجة مئوية. يمكن أن يعمل كطبقة أساسية وكطبقة نهائية.

[المعلمات]
الراتج الأساسي: راتج مقاوم للحرارة
اللون: فضي، أسود أو ألوان أخرى
الكثافة النوعية: 1,1 كجم/لتر
نقطة الاشتعال: 25 درجة مئوية
محتوى الحجم الصلب: 31%
معدل التطبيق النظري: 12 م\xb2/لتر (عند 25 ميكرومتر DFT)
وقت الجفاف: سطح 1 ساعة، كامل 24 ساعة
فترة إعادة التطبيق: لا يوجد
اللمسة: شبه مسطحة

[دليل]
إعداد السطح:
قم بإزالة الدهون بمنظف مناسب، وإزالة الملح和其他 الملوثات بماء عذب عالي الضغط، ونظيف بالرش حتى Sa 2,5.
طريقة التطبيق: رش بدون هواء، فرشاة، رش تقليدي.
المخفف: T0200 (أقصى حجم): رش بدون هواء 5%，فرشاة 10%، رش تقليدي 15%
المنظف: T0200

[السلامة]
1) قابل للاشتعال. ابعد عن مصادر النار. لا تدخن في منطقة التطبيق.
2) الحفاظ على تهوية كافية أثناء التطبيق`}},{model:"HN-HT-400",desc:{en:"Silicone resin black — 400°C continuous, boilers, kilns",zh:"有机硅树脂黑漆——400°C 长期,锅炉、窑炉",vi:"Silicone đen — 400°C liên tục, lò hơi, lò nung",es:"Resina de silicona negra — 400°C continuo, calderas, hornos",ar:"راتنج السيليكون الأسود — 400°C مستمر، غلايات، أفران"}},{model:"HN-HT-600",desc:{en:"Inorganic ceramic binder — 600°C continuous, turbine casings",zh:"无机陶瓷粘结剂——600°C 长期,涡轮壳体",vi:"Ceramic vô cơ — 600°C liên tục, vỏ tuabin",es:"Aglutinante cerámico inorgánico — 600°C continuo, carcasas de turbinas",ar:"مادة لاصقة سيراميكية غير عضوية — 600°C مستمر، غلاف التوربينات"}},{model:"HN-HT-CUS",desc:{en:"Custom formulation — your temperature target, 7-day sample",zh:"定制配方——按目标温度,7 天出样",vi:"Phối chế riêng — theo nhiệt độ mục tiêu, mẫu 7 ngày",es:"Fórmula personalizada — su objetivo de temperatura, muestra de 7 días",ar:"الصيغة المخصصة — هدف درجة حرارتك، عينة لمدة 7 أيام"}}],image:"/images/product-hightemp.jpg",applications:[{en:"Industrial boilers & smokestacks",zh:"工业锅炉与烟囱",vi:"Lò hơi & ống khói",es:"Calderas industriales y chimeneas",ar:"غلايات صناعية ومداخن"},{en:"Exhaust manifolds & kilns",zh:"排气歧管与窑炉",vi:"Ống xả & lò nung",es:"Colectores de escape y hornos",ar:"مجمعات العادم والأفران"},{en:"Steam pipes & turbine housings",zh:"蒸汽管道与涡轮壳体",vi:"Ống hơi & vỏ tuabin",es:"Tuberías de vapor y carcasas de turbinas",ar:"أنابيب البخار وغلافات التوربينات"},{en:"Engine blocks & heat-treatment fixtures",zh:"发动机缸体与热处理工装",vi:"Thân động cơ & đồ gá nhiệt luyện",es:"Bloques de motor y accesorios de tratamiento térmico",ar:"كتل المحرك وقطع معالجة الحرارة"}]},{code:"CAT-03",title:{en:"Epoxy Floor Coatings",zh:"工业地坪漆",vi:"Sơn nền công nghiệp",es:"Recubrimientos de piso epoxi",ar:"طلائج أرضية إيبوكسية"},short:{en:"Self-leveling · Anti-skid · Anti-static · PU mortar",zh:"自流平·防滑·防静电·聚氨酯砂浆",vi:"Tự chảy · chống trượt · chống tĩnh điện · vữa PU",es:"Auto-nivelante · Antideslizante · Antiestático · Mortero de PU",ar:"متساوي المستوى ذاتيًا · مضاد للانزلاق · مضاد لل静电 · خرسانة بولي يوريثان"},description:{en:"Heavy-duty epoxy, polyurethane mortar, and anti-static systems for warehouses, manufacturing plants, parking decks, and clean rooms. Self-leveling or trowel-applied. Compressive strength up to 80 MPa.",zh:"重型环氧、聚氨酯砂浆及防静电系统,适用于仓库、厂房、停车场及洁净室。自流平或镘涂,抗压强度达 80 MPa。",vi:"Hệ epoxy hạng nặng, vữa polyurethane và chống tĩnh điện cho nhà kho, nhà máy, bãi đỗ xe và phòng sạch. Tự chảy hoặc trét tay. Cường độ nén tới 80 MPa."},features:[{en:"Compressive strength ≥ 80 MPa",zh:"抗压强度 ≥ 80 MPa",vi:"Cường độ nén ≥ 80 MPa",es:"Resistencia a la compresión ≥ 80 MPa",ar:"مقاومة الانضغاط ≥ 80 ميجا باscal"},{en:"Abrasion ≤ 0.05 g (ASTM D4060)",zh:"耐磨 ≤ 0.05 g (ASTM D4060)",vi:"Mài mòn ≤ 0.05 g (ASTM D4060)",es:"Desgaste ≤ 0.05 g (ASTM D4060)",ar:"تآكل ≤ 0.05 جرام (ASTM D4060)"},{en:"Forklift-rated, R11–R13 slip grades",zh:"可承受叉车,R11–R13 防滑",vi:"Chịu xe nâng, chống trượt R11–R13",es:"Apto para montacargas, grados de deslizamiento R11–R13",ar:"مناسب للشوكات، درجات الانزلاق R11-R13"},{en:"Anti-static 10⁶–10⁹ Ω option",zh:"防静电 10⁶–10⁹ Ω 可选",vi:"Chống tĩnh điện 10⁶–10⁹ Ω",es:"Opción antielectrostática 10⁶–10⁹ Ω",ar:"خيار مضاد للساكنة الكهربائية 10⁶-10⁯ أوم"}],specs:[{label:{en:"System",zh:"系统",vi:"Hệ thống",es:"Sistema",ar:"نظام"},value:"Self-leveling / Trowel"},{label:{en:"Thickness",zh:"厚度",vi:"Độ dày",es:"Espesor",ar:"سمك"},value:"2 – 8 mm"},{label:{en:"Hardness",zh:"硬度",vi:"Độ cứng",es:"Dureza",ar:"صلابة"},value:"Shore D 80"},{label:{en:"Warranty",zh:"质保",vi:"Bảo hành",es:"Garantía",ar:"ضمان"},value:"5 years"}],categorySpecs:[{label:{en:"Compressive",zh:"抗压",vi:"Nén",es:"Compresión",ar:"انضغاط"},value:"≥80 MPa"},{label:{en:"Abrasion",zh:"耐磨",vi:"Mài mòn",es:"Desgaste",ar:"تآكل"},value:"≤0.05 g"},{label:{en:"Thickness",zh:"厚度",vi:"Độ dày",es:"Espesor",ar:"سمك"},value:"2–8 mm"},{label:{en:"Hardness",zh:"硬度",vi:"Độ cứng",es:"Dureza",ar:"صلابة"},value:"Shore D 80"}],models:[{model:"HN-FL-101",desc:{en:"Self-leveling epoxy floor paint BF0565 — solvent-free, self-leveling, high-build epoxy coating with a solid film",zh:"自流平环氧地坪漆是一种无溶剂、自流平、涂层坚实的厚浆环氧涂料",vi:"Sơn nền epoxy tự san BF0565 — sơn epoxy màng dày không dung môi, tự san, màng cứng",es:"Pintura de piso epoxi auto-nivelante BF0565 — recubrimiento epoxi auto-nivelante sin disolvente, de alto espesor, con película sólida",ar:"طلاء أرضي إيبوكسي متساوي المستوى ذاتيًا BF0565 — طلاء إيبوكسي خالٍ من المذيبات، متساوي المستوى ذاتيًا، عالي البناء، بغشاء صلب"},details:{en:`[Product Overview]
HONG NGUYEN self-leveling epoxy floor paint is a solvent-free, self-leveling, high-build epoxy coating with a solid film.

[Applications]
Can be used as a protective paint on floors subject to severe vehicle wear and chemical corrosion, such as factory, warehouse and garage floors.

[Physical Parameters]
Base resin: Epoxy self-leveling resin
Color: Multiple colors
Finish: Glossy
Solid volume content: 100%
Theoretical spreading rate: 3 L/m\xb2 (at 3 mm DFT); 2 L/m\xb2 (at 2 mm DFT)
Flash point: 100\xb0C
Specific gravity: 1.5 kg/L
Tack-free: 24 h (20\xb0C)
Full cure: 7 days (20\xb0C)

[Application Guide]
Mix ratio — Topcoat: base:curing agent = 5:1 (by weight); Mid-coat: base:curing agent = 5:1 (by weight). For special-effect floors such as anti-static, anti-slip, orange-peel surfaces, the mix ratio may vary.
Mixing method: use a trowel/squeegee.
Tool cleaning: thinner
Film thickness: wet film 3 mm, dry film 3 mm
Recoat interval: min 36 h (20\xb0C), max 3 days (20\xb0C)
Previous coat: epoxy sealing primer, epoxy mortar putty
Additional coat: none, or one more coat of self-leveling clear topcoat

[Safety]
For professional use only. Use with care and follow safety instructions. If swallowed, seek medical attention immediately. Avoid inhaling vapors or paint mist; prevent contact with skin and eyes. Apply in well-ventilated conditions; observe fire and explosion prevention.`,zh:`【产品概述】
宏源自流平环氧地坪漆是一种无溶剂、自流平、涂层坚实的厚浆环氧涂料。

【适用范围】
可作为保护漆涂于受车辆磨损和化学品腐蚀严重的地坪，如工厂、仓库及车库等的地坪。

【物理参数】
漆基：环氧自流平树脂
颜色：多种颜色
漆面：光亮
固体体积含量：100%
理论涂布率：3L㎡/（以3um干膜计）
2L㎡/（以2um干膜计）
闪点：100℃
比重：1.5kg/L
指触干：24小时（20℃）
完全固化：7天（20℃）

【施工说明】
混合比例：面涂：漆基：固化剂=5:1（重量比）
中涂：漆基：固化剂=5:1（重量比）
若要求做其它特殊效果的地坪涂装如要求防静电、防滑、防桔皮纹表面的等，则混合比例会有所改变。
混合方法：用粑粑平
工具清洗：稀释剂
漆膜厚度：湿膜3毫米，干膜3毫米
重涂间隔：最小36小时（20℃），最大3天（20℃）
先涂油漆：环氧封闭底漆：环氧砂浆腻子
加涂油漆：无，或再涂一层自流平透明面漆

【安全守则】
本品仅适用于专业用途。小心使用本品，遵守安全事项的规定，如吞服请立即求医，避免吸入蒸气或漆雾，皮肤、眼睛不得接触本品，在通风良好的情况下施工，注意防火防爆。`,vi:`[Tổng quan sản phẩm]
Sơn nền epoxy tự san HONG NGUYEN l\xe0 sơn epoxy m\xe0ng d\xe0y kh\xf4ng dung m\xf4i, tự san, m\xe0ng cứng.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn bảo vệ tr\xean s\xe0n chịu m\xe0i m\xf2n xe cộ v\xe0 ăn m\xf2n h\xf3a chất nặng như s\xe0n nh\xe0 xưởng, kho, gara.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy tự san
M\xe0u: Nhiều m\xe0u
Bề mặt: B\xf3ng
H\xe0m lượng rắn thể t\xedch: 100%
Lượng lan l\xfd thuyết: 3 L/m\xb2 (tại DFT 3 mm); 2 L/m\xb2 (tại DFT 2 mm)
Điểm bắt lửa: 100\xb0C
Tỉ trọng: 1.5 kg/L
Kh\xf4ng d\xednh: 24 giờ (20\xb0C)
Kh\xf4 ho\xe0n to\xe0n: 7 ng\xe0y (20\xb0C)

[Hướng dẫn thi c\xf4ng]
Tỷ lệ pha — Sơn phủ: nhựa:chất đ\xf3ng rắn = 5:1 (trọng lượng); Lớp giữa: nhựa:chất đ\xf3ng rắn = 5:1 (trọng lượng). Đối với s\xe0n hiệu ứng đặc biệt như chống tĩnh điện, chống trượt, vỏ cam, tỷ lệ pha c\xf3 thể thay đổi.
Phương ph\xe1p pha: d\xf9ng bay/th\xe1o.
Vệ sinh dụng cụ: dung m\xf4i
Độ d\xe0y m\xe0ng: m\xe0ng ướt 3 mm, m\xe0ng kh\xf4 3 mm
Thời gian giữa c\xe1c lớp: tối thiểu 36 giờ (20\xb0C), tối đa 3 ng\xe0y (20\xb0C)
Lớp trước: sơn l\xf3t epoxy h\xe0n k\xedn, vữa b\xf9 tảng epoxy
Lớp th\xeam: kh\xf4ng, hoặc th\xeam một lớp sơn phủ trong tự san

[An to\xe0n]
Chỉ d\xf9ng chuy\xean nghiệp. Sử dụng cẩn thận v\xe0 tu\xe2n thủ hướng dẫn an to\xe0n. Nếu nuốt phải, đến bệnh viện ngay. Tr\xe1nh h\xedt hơi hoặc sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Thi c\xf4ng ở nơi tho\xe1ng kh\xed; ch\xfa \xfd ph\xf2ng ch\xe1y nổ.`,es:`[Resumen del Producto]
HONG NGUYEN pintura de suelo de autivelado epoxi es un recubrimiento epoxi sin disolvente, de autivelado, de alta pel\xedcula s\xf3lida.

[Aplicaciones]
Puede utilizarse como pintura protectora en sometidos a un desgaste vehicular intenso y corrosi\xf3n qu\xedmica, como suelos de f\xe1brica, almac\xe9n y garaje.

[Parametros Fisicos]
Resina base: Resina de autivelado epoxi
Color: M\xfaltiples colores
Acabado: Brillante
Contenido de volumen s\xf3lido: 100%
Tasa de aplicaci\xf3n te\xf3rica: 3 L/m\xb2 (a 3 mm DFT); 2 L/m\xb2 (a 2 mm DFT)
Punto de inflamaci\xf3n: 100\xb0C
Densidad espec\xedfica: 1,5 kg/L
Sin pegajosidad: 24 h (20\xb0C)
Cura completa: 7 d\xedas (20\xb0C)

[Guia de Aplicacion]
Relaci\xf3n de mezcla — Barniz: base:agente curativo = 5:1 (por peso); Capa intermedia: base:agente curativo = 5:1 (por peso). Para suelos de efectos especiales como antiest\xe1ticos, antideslizantes, superficies de naranja, la relaci\xf3n de mezcla puede variar.
M\xe9todo de mezcla: usar una llana/esp\xe1tula.
Limpieza de herramientas: thinner
Espesor de pel\xedcula: pel\xedcula h\xfameda 3 mm, pel\xedcula seca 3 mm
Intervalo de repintado: min 36 h (20\xb0C), m\xe1x 3 d\xedas (20\xb0C)
Capa anterior: imprimaci\xf3n de sellado epoxi, masilla de mortero epoxi
Capa adicional: ninguna, o una capa m\xe1s de barniz transparente de autivelado

[Seguridad]
Solo para uso profesional. Usar con cuidado y seguir las instrucciones de seguridad. Si se traga`,ar:`[نظرة عامة]
هونج نيوان بوية الأرضية الذاتية المستوية إيبوكسي هي طلاء إيبوكسي خالي من المذيبات، ذاتي المستوى، ذي فيلم صلب عالي.

[التطبيقات]
يمكن استخدامها كطلاء واقي على الأرضيات المعرضة للاستخدام الشديد للسيارات والتآكل الكيميائي، مثل أرضيات المصانع والمستودعات ومرائب السيارات.

[المعلمات]
راتب البوليمر الأساسي: راتب إيبوكسي ذاتي المستوى
اللون: ألوان متعددة
الانتهاء: لامع
محتوى الحجم الصلب: 100%
معدل التطبيق النظري: 3 لتر/م\xb2 (عند 3 مم DFT)؛ 2 لتر/م\xb2 (عند 2 مم DFT)
نقطة الاشتعال: 100\xb0C
الكثافة النوعية: 1,5 كجم/لتر
خالٍ من اللزوجة: 24 ساعة (20\xb0C)
التصلب الكامل: 7 أيام (20\xb0C)

[دليل]
نسبة الخلط — الطلاء العلوي: الـ:مصلح = 5:1 (بالوزن)؛ الطلاء الأوسط: الـ:مصلح = 5:1 (بالوزن). للأرضيات ذات التأثيرات الخاصة مثل المضادة للكهرباء الساكنة، المضادة للانزلاق، الأسطح القشرية، قد تختلف نسبة الخلط.
طريقة الخلط: استخدم مجرفة/مجرفة مسطحة.
تنظيف الأدوات: مذيب
سمك الفيلم: فيلم رطب 3 مم، فيلم جاف 3 مم
فترة إعادة الطلاء: دقيقة 36 ساعة (20\xb0C)، قصوى 3 أيام (20\xb0C)
الطلاء السابق: أساس إيبوكسي مانع للتسرب، مونة إيبوكسي إصلاحية
طلاء إضافي: لا شيء، أو طبقة واحدة أخرى من الطلاء الشفاف الذاتي المستوي العلوي

[السلامة]
للاستخدام المهني فقط. استخدم بحذر واتبع التعليمات الأمنية. إذا تم ابتلاع`}},{model:"HN-FL-202",desc:{en:"Epoxy floor paint F5440 — two-component solvent-based high-grade floor paint",zh:"环氧地坪漆是一种双组份溶剂型高级地台用漆",vi:"Sơn nền epoxy F5440 — sơn nền cao cấp hai thành phần có dung môi",es:"Pintura de piso epoxi F5440 — pintura de piso de alto grado, a base de disolvente, de dos componentes",ar:"طلاء أرضي إيبوكسي F5440 — طلاء أرضي عالي الجودة، قائم على المذيبات، مكون من جزأين"},details:{en:`[Product Overview]
HONG NGUYEN epoxy floor paint is a two-component solvent-based high-grade floor paint specifically for floors made of concrete and steel plate. It is a chemically-cured drying type, especially suitable for factories, storage yards, sports grounds and other concrete surfaces.

[Applications]
Suitable for coating indoor and outdoor steel structures and concrete surfaces in corrosive environments; can also serve as a topcoat and intermediate coat for tunnels; not recommended as an outdoor topcoat.
1) Tough and durable paint film with excellent adhesion
2) Excellent abrasion and impact resistance
3) Resistant to a variety of chemicals
4) Easy to clean and refurbish

[Physical Parameters]
Base resin: Epoxy resin
Color: Multiple colors
Flash point: 30\xb0C
Specific gravity: 1.4 kg/L
Solid volume content: 55%
Theoretical spreading rate: 6 m\xb2/L (at 90 \xb5m DFT)
Drying time: surface dry 8-10 h (20\xb0C/70% RH); hard dry 7 days (full cure)
Recoat interval: min 8 h, max 7 days
Pot life: 8 h / 20\xb0C
Mix ratio: base:curing agent = 4:1 (by weight)
Induction time: 10-30 min (after mixing base and curing agent, let stand 10-30 min before use)
Finish: Glossy
Storage: cool, dry environment, avoid frost

[Application Guide]
Surface preparation:
The surface to be coated should first be primed with an appropriate primer; steel plate surfaces should first be primed with an anti-rust primer; concrete surfaces should not be strongly alkaline (pH < 10) and should be primed with an oil-based sealer; the surface to be coated must be clean, dry, free of oil and other contaminants. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat epoxy sealing primer, coverage approx. 0.1 L/m\xb2 (200 m\xb2/kit, 20 L)
Topcoat: 2 coats epoxy floor paint, coverage approx. 0.30 L/m\xb2 (flat), 60 m\xb2/drum (16 L)
Clear coat: 1 coat polyurethane clear paint, coverage approx. 0.1 L/m\xb2 (150 m\xb2/kit, 15 L)
Application method: airless spray, brush, roller or conventional spray
Thinner (max by volume): brush and roller 10%, airless spray 5%, conventional spray 15%
Cleaner: BTO220

[Safety]
1) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,zh:`【产品概述】
宏源环氧地坪漆是一种双组份溶剂型高级地台用漆，专门用在混凝土和钢板所做的地台，本品属化学固化干燥型，尤其适用于工厂，堆场、运动场和其它混凝土表面。

【适用范围】
适合涂装在具有腐蚀环境中的室内外钢结构和混凝土表面，同时亦可作为隧道用的面漆和中间漆，不推荐用作户外面漆。
1）漆膜坚韧耐用，附着力佳
2）耐磨性能、抗碰撞性能极佳
3）能抵抗多种化学品的侵蚀
4）容易清洗和翻新施工

【物理参数】
漆基：环氧树脂
颜色：多种颜色
闪点：30℃
比重：1.4kg/L
体积固体含量：55%
理论涂布率：6㎡/L（以90um干膜计）
干燥时间：表干：8-10小时（20℃/70%RH）
硬干：7天（完全固化）
重涂间隔：最小8小时，最大7天
混合使用期：8小时/20℃
使用比率：漆基：固化剂=4:1 (重量比)
前置时间：10-30分钟（漆基和固化剂混合均匀后需放置10-30分钟再使用）
漆面：有光
贮存：贮存环境要求凉爽、干燥，避免霜冻。

【施工说明】
表面处理:
涂装表面应先涂上适当的底漆，钢板表面应先涂上防锈底漆，混凝土表面不应有较强的碱性，ph<10，并要先涂上油性封闭底漆，同时被涂表面必须清洁、干燥、无油污和其它　　　　附物。特殊表面的处理方法请向本公司技术部查询.

【建议油漆配套】
底漆：环氧封闭底漆涂一遍，参考用量：0.1L/㎡，即200㎡/组（20L）
面漆：环氧地坪漆涂二遍，参考用量0.30L/㎡（平涂），即60㎡/桶（16L）
罩光：聚氨酯清漆涂一遍，参考用量：0.1L/㎡，即150㎡/组（15L）
施工方法：无气喷涂、刷涂、滚涂或普通喷涂。
稀释剂：（最大体积用量）刷涂和滚涂10%，无气喷涂5%，普通喷涂15%
清洗剂：BTO220

【安全守则】
1）施工时必须保持空气流通，并采用一定的防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2）易燃物品，远离火源。在施工范围内不宜吸烟。
3）储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn nền epoxy HONG NGUYEN l\xe0 sơn nền cao cấp hai th\xe0nh phần c\xf3 dung m\xf4i chuy\xean dụng cho s\xe0n b\xea t\xf4ng v\xe0 s\xe0n tấm th\xe9p. L\xe0 loại đ\xf3ng rắn h\xf3a học, đặc biệt ph\xf9 hợp cho nh\xe0 xưởng, b\xe3i chứa, s\xe2n thể thao v\xe0 c\xe1c bề mặt b\xea t\xf4ng kh\xe1c.

[Ứng dụng]
Ph\xf9 hợp thi c\xf4ng tr\xean bề mặt kết cấu th\xe9p v\xe0 b\xea t\xf4ng trong ngo\xe0i nh\xe0 trong m\xf4i trường ăn m\xf2n; cũng c\xf3 thể l\xe0m sơn phủ v\xe0 lớp giữa cho hầm; kh\xf4ng khuyến nghị l\xe0m sơn phủ ngo\xe0i trời.
1) M\xe0ng sơn dai bền, b\xe1m d\xednh tốt
2) Khả năng chịu m\xe0i m\xf2n v\xe0 va đập ưu việt
3) Chịu được nhiều h\xf3a chất
4) Dễ vệ sinh v\xe0 thi c\xf4ng lại

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: Nhiều m\xe0u
Điểm bắt lửa: 30\xb0C
Tỉ trọng: 1.4 kg/L
H\xe0m lượng rắn thể t\xedch: 55%
Lượng lan l\xfd thuyết: 6 m\xb2/L (tại DFT 90 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 8-10 giờ (20\xb0C/70% RH); kh\xf4 cứng 7 ng\xe0y (kh\xf4 ho\xe0n to\xe0n)
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 7 ng\xe0y
Thời gian sử dụng: 8 giờ / 20\xb0C
Tỷ lệ pha: nhựa:chất đ\xf3ng rắn = 4:1 (trọng lượng)
Thời gian th\xe0nh thục: 10-30 ph\xfat (sau khi pha nhựa v\xe0 chất đ\xf3ng rắn, để 10-30 ph\xfat mới d\xf9ng)
Bề mặt: B\xf3ng
Bảo quản: m\xf4i trường m\xe1t, kh\xf4, tr\xe1nh đ\xf3ng băng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt:
Bề mặt cần sơn n\xean sơn l\xf3t ph\xf9 hợp trước; bề mặt tấm th\xe9p n\xean sơn l\xf3t chống rỉ; bề mặt b\xea t\xf4ng kh\xf4ng được qu\xe1 kiềm (pH < 10) v\xe0 phải sơn l\xf3t h\xe0n k\xedn gốc dầu; bề mặt cần sơn phải sạch, kh\xf4, kh\xf4ng dầu mỡ v\xe0 tạp chất kh\xe1c. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t h\xe0n k\xedn epoxy, lượng tham khảo: 0.1 L/m\xb2 (200 m\xb2/bộ 20 L)
Sơn phủ: 2 lớp sơn nền epoxy, lượng tham khảo 0.30 L/m\xb2 (s\xe0n phẳng), 60 m\xb2/th\xf9ng (16 L)
Sơn b\xf3ng: 1 lớp sơn b\xf3ng polyurethane, lượng tham khảo: 0.1 L/m\xb2 (150 m\xb2/bộ 15 L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ, con lăn hoặc phun thường
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ v\xe0 con lăn 10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: BTO220

[An to\xe0n]
1) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
La pintura para pisos epoxi HONG NGUYEN es una pintura para pisos de alta calidad, a base de disolvente, de dos componentes, espec\xedficamente para pisos de concreto y placas de acero. Es un tipo de secado por curado qu\xedmico, especialmente adecuado para f\xe1bricas, patios de almacenamiento, terrenos deportivos y otras superficies de concreto.

[Aplicaciones]
Adecuada para recubrir estructuras de acero y superficies de concreto en interiores y exteriores en entornos corrosivos; tambi\xe9n puede servir como capa final y capa intermedia para t\xfaneles; no se recomienda como capa final exterior.
1) Pel\xedcula de pintura resistente y duradera con excelente adhesi\xf3n
2) Excelente resistencia al desgaste y al impacto
3) Resistente a una variedad de qu\xedmicos
4) F\xe1cil de limpiar y renovar

[Parametros Fisicos]
Resina base: Resina epoxi
Color: M\xfaltiples colores
Punto de inflamabilidad: 30\xb0C
Densidad espec\xedfica: 1,4 kg/L
Contenido de volumen s\xf3lido: 55%
Tasa de extensi\xf3n te\xf3rica: 6 m\xb2/L (a 90 \xb5m DFT)
Tiempo de secado: seco superficial 8-10 h (20\xb0C/70% HR); seco duro 7 d\xedas (curado completo)
Intervalo de reaplicaci\xf3n: m\xedn 8 h, m\xe1x 7 d\xedas
Tiempo de vida en la mezcla: 8 h / 20\xb0C
Relaci\xf3n de mezcla: base:agente curativo = 4:1 (por peso)
Tiempo de inducci\xf3n: 10-30 min (despu\xe9s de mezclar base y agente curativo, dejar reposar 10-30 min antes de usar)
Acabado: Brillante
Almacenamiento: ambiente fresco y seco

[Guia de Aplicacion]
[Sistema Recomendado]
[Seguridad]`,ar:`[نظرة عامة]
طلاء الأرضية الإيبوكسي HONG NGUYEN هو طلاء أرضية عالي الجودة ذو مكونين، قائم على المذيبات، ومصمم خصيصًا للأرضيات المصنوعة من الخرسانة والصفائح الفولاذية. إنه نوع من أنواع التجفيف بالتصلب الكيميائي، وهو مناسب بشكل خاص للمصانع والمناطق التخزينية والملاعب الرياضية وسطوح الخرسانة الأخرى.

[التطبيقات]
مناسب لتغطية الهياكل الفولاذية وسطوح الخرسانة في الداخل والخارج في البيئات التآكلة؛ يمكن أيضًا أن يعمل كطبقة نهائية وطبقة وسطى للأنفاق؛ لا يُنصح به كطبقة نهائية في الهواء الطلق.
1) غشاء طلاء متين ومتين مع امتداد ممتاز
2) مقاومة ممتازة للتآكل والصدمات
3) مقاوم لمجموعة متنوعة من المواد الكيميائية
4) سهل التنظيف والتجديد

[المعلمات]
الراتج الأساسي: راتج الإيبوكسي
اللون: ألوان متعددة
نقطة الاشتعال: 30\xb0C
الكثافة النوعية: 1.4 كجم/لتر
محتوى الحجم الصلب: 55%
معدل الانتشار النظري: 6 م\xb2/لتر (عند 90 ميكرومتر DFT)
وقت التجفيف: جاف السطح 8-10 ساعة (20\xb0C/70% RH؛ جاف تمامًا 7 أيام (تصلب كامل)
فترة إعادة التطبيق: دقيقة 8 ساعة، كحد أقصى 7 أيام
مدة الحياة في الوعاء: 8 ساعة / 20\xb0C
نسبة الخلط: الأساسي:مصلح = 4:1 (بالوزن)
وقت التمهيد: 10-30 دقيقة (بعد خلط الأساسي ومصلح، اتركه ليجلس 10-30 دقيقة قبل الاستخدام)
الانتهاء: لامع
التخزين: بيئة باردة وجافة

[دليل]
[النظام]
[السلامة]`}},{model:"HN-FL-303",desc:{en:"Water-based epoxy floor paint E5440 — uses special epoxy polymer emulsion with high-hardness functional fillers and high-performance functional additives",zh:"水性环氧地坪漆采用特种环氧高分子聚合物树脂乳液和高硬度、功能型填料与高性能、功能型助剂等",vi:"Sơn nền epoxy nước E5440 — dùng nhựa epoxy polyme đặc biệt với chất độn chức năng độ cứng cao và phụ gia chức năng hiệu năng cao",es:"Pintura de piso epoxi a base de agua E5440 — utiliza emulsión de polímero epoxi especial con rellenos funcionales de alta dureza y aditivos funcionales de alto rendimiento",ar:"طلاء أرضي إيبوكسي قائم على الماء E5440 — يستخدم معلق بوليمر إيبوكسي خاص مع مُعبّئات وظيفية عالية الصلابة ومُضافات وظيفية عالية الأداء"},details:{en:`[Product Overview]
HONG NGUYEN water-based epoxy floor paint uses a special epoxy polymer resin emulsion combined with high-hardness functional fillers and high-performance functional additives, optimally blended and refined to combine abrasion resistance and flexibility. It is environmentally friendly, durable, and offers excellent value; it air-dries, is easy to apply, and can also be applied to incompletely cured concrete surfaces, suitable for tight-schedule construction.

[Applications]
Suitable for floor coating in workshops, offices, living rooms, halls, shops, etc.;
Suitable for indoor floors with high health and environmental requirements;
Suitable for floor coating in electrical rooms with high safety requirements.

[Physical Parameters]
Base resin: Water-based epoxy resin
Color: Multiple colors
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 8 h, max unlimited

[Application Guide]
● Recommended application steps and system:
1) 1 coat HONG NGUYEN water-based floor primer, coverage approx. 8 m\xb2/kg (1 coat);
2) 1 coat HONG NGUYEN water-based floor topcoat, coverage approx. 4 m\xb2/kg (2 coats); after drying, patch-fill and sand for a smooth, flat surface;
3) 1 coat HONG NGUYEN water-based floor clear coat E6300, coverage approx. 8 m\xb2/kg (1 coat).
● Curing method: close to traffic for 3 days before foot access; 7-10 days before full use (at 25\xb0C, RH < 50%).
● Application method: brush, spray, airless spray
● Thinner: water
● Brush and roller: 10%
● Airless spray: 15%
● Conventional spray: 15%`,zh:`【产品概述】
HONG NGUYEN(宏源)水性环氧地坪漆采用特种环氧高分子聚合物树脂乳液和高硬度、功能型填料与高性能、功能型助剂等，经过优化组合精制而成，集耐磨性和柔韧性能于一体。具有环保、耐用等功能，性价比优越；本品自干，施工方便，亦可涂装于未干透的水泥混凝土表面，适合赶工期施工。

【适用范围】
适用于车间、办公室、客厅、馆所、店堂等地面的涂饰，
适用于对健康环保要求高的室内地板，
适用于各种安全性要求较高电房地板涂装。

【物理参数】
基 料：水性环氧树脂
颜 色：多种颜色
理论涂布率：10 ㎡/L（以28 um干膜计）
干燥时间：表 干：1小时（20 ℃/70%RH） 硬 干：48小时
重涂间隔：最小8小时，最大不限

【施工说明】
●建议施工步骤和配套方案：
1)HONG NGUYEN（宏源）水性地坪底漆涂一遍，参考用量：8㎡/kg（1遍）；
2)HONG NGUYEN（宏源）水性地坪面漆一遍，参考用量：4㎡/kg（2遍），干燥后，进行批补、打磨，使其平整光滑；
3)HONG NGUYEN（宏源）水性地坪罩光清漆E6300，参考用量：8㎡/kg（1遍）。
●养护方法：封闭3天后才上人，7-10天后方可以使用（在温度25℃，相对湿度＜50%条件下）。
●施工方法：刷涂、喷涂、无气喷涂
●稀释剂：水
●刷涂和滚涂：10%
●无空气喷涂：15%
●普通喷涂：15%
●`,vi:`[Tổng quan sản phẩm]
Sơn nền epoxy nước HONG NGUYEN d\xf9ng nhựa polyme epoxy đặc biệt kết hợp chất độn chức năng độ cứng cao v\xe0 phụ gia chức năng hiệu năng cao, phối hợp tối ưu, kết hợp khả năng chịu m\xe0i m\xf2n v\xe0 độ dẻo. Th\xe2n thiện m\xf4i trường, bền bỉ, hiệu quả kinh tế cao; sơn kh\xf4 tự nhi\xean, dễ thi c\xf4ng, c\xf3 thể thi c\xf4ng tr\xean bề mặt b\xea t\xf4ng chưa kh\xf4 ho\xe0n to\xe0n, ph\xf9 hợp c\xf4ng tr\xecnh tiến độ gấp.

[Ứng dụng]
Ph\xf9 hợp thi c\xf4ng s\xe0n nh\xe0 xưởng, văn ph\xf2ng, ph\xf2ng kh\xe1ch, hội trường, cửa h\xe0ng;
Ph\xf9 hợp s\xe0n trong nh\xe0 y\xeau cầu cao về sức khỏe v\xe0 m\xf4i trường;
Ph\xf9 hợp thi c\xf4ng s\xe0n ph\xf2ng điện y\xeau cầu an to\xe0n cao.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy nước
M\xe0u: Nhiều m\xe0u
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 28 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ (20\xb0C/70% RH); kh\xf4 cứng 48 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa kh\xf4ng giới hạn

[Hướng dẫn thi c\xf4ng]
● Quy tr\xecnh v\xe0 hệ sơn khuyến nghị:
1) 1 lớp sơn l\xf3t nền nước HONG NGUYEN, lượng tham khảo: 8 m\xb2/kg (1 lớp);
2) 1 lớp sơn phủ nền nước HONG NGUYEN, lượng tham khảo: 4 m\xb2/kg (2 lớp); sau khi kh\xf4, b\xf9 tảng v\xe0 ch\xe0 nh\xe1m cho phẳng nhẵn;
3) 1 lớp sơn b\xf3ng nền nước HONG NGUYEN E6300, lượng tham khảo: 8 m\xb2/kg (1 lớp).
● Phương ph\xe1p bảo dưỡng: đ\xf3ng cửa 3 ng\xe0y mới cho người đi lại; 7-10 ng\xe0y mới sử dụng được (ở 25\xb0C, độ ẩm tương đối < 50%).
● Phương ph\xe1p thi c\xf4ng: cọ, phun, phun kh\xf4ng kh\xed
● Dung m\xf4i pha lo\xe3ng: nước
● Cọ v\xe0 con lăn: 10%
● Phun kh\xf4ng kh\xed: 15%
● Phun thường: 15%`,es:`[Resumen del Producto]
La pintura de suelo epoxi a base de agua HONG NGUYEN utiliza una resina epoxi especial emulsionada combinada con rellenos funcionales de alta dureza y aditivos funcionales de alto rendimiento, optimamente mezclados y refinados para combinar resistencia al desgaste y flexibilidad. Es ecol\xf3gica, duradera y ofrece excelente valor; se seca al aire, es f\xe1cil de aplicar y tambi\xe9n se puede aplicar en superficies de hormig\xf3n no completamente curadas, adecuada para construcci\xf3n con plazos ajustados.

[Aplicaciones]
Adecuada para recubrimiento de suelos en talleres, oficinas, salas de estar, salones, tiendas, etc.;
Adecuada para suelos interiores con altos requisitos de salud y medio ambiente;
Adecuada para recubrimiento de suelos en salas el\xe9ctricas con altos requisitos de seguridad.

[Parametros Fisicos]
Resina base: Resina epoxi a base de agua
Color: M\xfaltiples colores
Tasa de aplicaci\xf3n te\xf3rica: 10 m\xb2/L (a 28 \xb5m DFT)
Tiempo de secado: superficie seca 1 h (20\xb0C/70% HR); seco duro 48 h
Intervalo de aplicaci\xf3n de segunda mano: min 8 h, m\xe1x ilimitado

[Guia de Aplicacion]
● Pasos y sistema de aplicaci\xf3n recomendados:
1) 1 capa de imprimaci\xf3n de suelo a base de agua HONG NGUYEN, cobertura aprox. 8 m\xb2/kg (1 capa);
2) 1 capa de acabado de suelo a base de agua HONG NGUYEN, cobertura aprox. 4 m\xb2/kg (2 capas); a`,ar:`[نظرة عامة]
يستخدم طلاء الأرضية الإيبوكسي المائي من هونج نيون خليطة من راتنج الإيبوكسي الخاص المُعاد تشكيله مُدمجًا مع مواد مُعبأة وظيفية عالية الصلابة ومُضافات وظيفية عالية الأداء، مُختلطة ومُحسَّنة بشكل مثالي لدمج مقاومة التآكل والمرونة. صديق للبيئة، متين، ويقدم قيمة ممتازة؛ يجف في الهواء، سهل التطبيق، ويمكن تطبيقه أيضًا على أسطح الخرسانة غير المكتملة التصلب، مناسب للمشاريع ذات الجداول الزمنيضيقة.

[التطبيقات]
مناسب لطلاء الأرضية في ورش العمل والمكاتب وغرف المعيشة وقاعات المحلات التجارية، إلخ؛
مناسب للأرضيات الداخلية ذات المتطلبات الصحية والبيئية العالية؛
مناسب لطلاء الأرضية في الغرف الكهربائية ذات المتطلبات الأمنية العالية.

[المعلمات]
راتنج أساسي: راتنج إيبوكسي مائي
اللون: ألوان متعددة
معدل التطبيق النظري: 10 م\xb2/لتر (عند 28 ميكرون DFT)
وقت الجفاف: سطح جاف بعد 1 ساعة (20 درجة مئوية/70% رطوبة نسبية؛ جاف بعد 48 ساعة
فترة التطبيق الثانية: 8 ساعات كحد أدنى، غير محدودة كحد أقصى

[دليل]
● خطوات ونظام التطبيق الموصى به:
1) طبقة واحدة من الطلاء الأساسي للماء هونج نيون، تغطية حوالي 8 م\xb2/كجم (طبقة واحدة)؛
2) طبقة واحدة من الطلاء السطحي للماء هونج نيون، تغطية حوالي 4 م\xb2/كجم (طبقتان)؛ أ`}},{model:"HN-FL-404",desc:{en:"Polyurethane floor paint — fast-drying two-component topcoat",zh:"聚氨酯地坪漆是一种快干型双组份面漆",vi:"Sơn nền polyurethane — sơn phủ hai thành phần khô nhanh",es:"Pintura de piso de poliuretano — recubrimiento superior de dos componentes de secado rápido",ar:"طلاء أرضي بولي يوريثان — طلاء علوي ثنائي المكون يجف بسرعة"},details:{en:`[Product Overview]
HONG NGUYEN polyurethane floor paint is a fast-drying two-component topcoat with good color retention and application performance. Specifically for floors made of concrete and steel plate, it can be used as a high-grade indoor and outdoor floor coating.

[Applications]
Suitable for coating indoor and outdoor steel structures and concrete surfaces in corrosive environments; can also serve as a topcoat and intermediate coat for tunnels. This product is particularly suitable for floor coating of sports venues such as tennis courts, badminton courts, and baseball fields.
1) Excellent adhesion
2) Excellent abrasion and impact resistance
3) Easy to clean and refurbish

[Physical Parameters]
Base resin: Polyurethane resin
Color: Multiple colors
Flash point: 30\xb0C
Specific gravity: 1.3 kg/L
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 4 h, max 3 days
Solid volume content: 55%
Theoretical spreading rate: 6 m\xb2/L (at 90 \xb5m DFT)

[Application Guide]
Surface preparation:
The surface to be coated should first be primed with an appropriate primer; steel plate surfaces should first be primed with an anti-rust primer; concrete surfaces should not be strongly alkaline (pH < 10) and should be primed with an epoxy sealer; the surface to be coated must be dry, clean, free of oil and other contaminants. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat epoxy sealing primer, coverage approx. 0.1 L/m\xb2 (200 m\xb2/kit, 20 L)
Topcoat: 2 coats epoxy floor paint, coverage approx. 0.30 L/m\xb2 (flat), 70 m\xb2/drum (20 L)
Clear coat: 1 coat polyurethane clear paint, coverage approx. 0.1 L/m\xb2 (150 m\xb2/kit, 16 L)
Application method: airless spray, brush, roller or conventional spray
Thinner (max by volume): brush and roller 10%, airless spray 5%, conventional spray 15%
Cleaner: BTO220

[Safety]
1) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,zh:`【产品概述】
宏源聚氨酯地坪漆是一种快干型双组份面漆，具有良好的保色性及施工性能。专门用在混凝土和钢板所做的地台，可用作室内及户外高级地坪涂料。

【适用范围】
适合涂装在具有腐蚀环境中的室内、外钢结构和混凝土表面，同时亦可作为隧道用的面漆和中间漆，本产品特别适用于网球场、羽毛球场、棒球场等运动场馆的地坪涂装。
1）附着力佳
2）耐磨性能、抗碰撞性能极佳
3）容易清洗和翻新施工

【物理参数】
基料：聚氨酯树脂
颜色：多种颜色
闪点：30℃
比重：1.3kg/L
干燥时间：表干：1小时（20℃/70%RH）
硬干：48小时
重涂间隔：最小4小时，最大3天
固体体积含量：55%
理论涂布率：6㎡/L（以90um干膜计）

【施工说明】
表面处理：
涂装表面应先涂上适当的底漆，钢板表面应先涂上防锈底漆，混凝土表面不应有较强的碱性，ph小于10，并要先涂上环氧封闭底漆，同时被涂表面必须干燥、清洁、无油污和其它附着物。特殊表面处理请向本公司技术部查询.

【建议油漆配套】
底漆：环氧封闭底漆涂一遍，参考用量：0.1L/㎡，即200㎡/组（20L）
面漆：环氧地坪漆涂二遍，参考用量0.30L/㎡（平涂），即70㎡/桶（20L）
罩光：聚氨酯清漆涂一遍，参考用量：0.1L/㎡，即150㎡/组（16L）
施工方法：无气喷涂、刷涂、滚涂或普通喷涂。
稀释剂：（最大体积用量）刷涂和滚涂10%，无气喷涂5%，普通喷涂15%
清洗剂：BTO220

【安全守则】
1）施工时必须保持空气流通，并采用一定的防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2）易燃物品，远离火源。在施工范围内不宜吸烟。
3）储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn nền polyurethane HONG NGUYEN l\xe0 sơn phủ hai th\xe0nh phần kh\xf4 nhanh, c\xf3 khả năng giữ m\xe0u v\xe0 thi c\xf4ng tốt. Chuy\xean dụng cho s\xe0n b\xea t\xf4ng v\xe0 s\xe0n tấm th\xe9p, c\xf3 thể d\xf9ng l\xe0m sơn nền cao cấp trong nh\xe0 v\xe0 ngo\xe0i trời.

[Ứng dụng]
Ph\xf9 hợp thi c\xf4ng tr\xean bề mặt kết cấu th\xe9p v\xe0 b\xea t\xf4ng trong nh\xe0, ngo\xe0i trời trong m\xf4i trường ăn m\xf2n; cũng c\xf3 thể l\xe0m sơn phủ v\xe0 lớp giữa cho hầm. Đặc biệt ph\xf9 hợp thi c\xf4ng s\xe0n cho s\xe2n thể thao như s\xe2n tennis, cầu l\xf4ng, b\xf3ng ch\xe0y.
1) B\xe1m d\xednh tốt
2) Chịu m\xe0i m\xf2n v\xe0 va đập ưu việt
3) Dễ vệ sinh v\xe0 thi c\xf4ng lại

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa polyurethane
M\xe0u: Nhiều m\xe0u
Điểm bắt lửa: 30\xb0C
Tỉ trọng: 1.3 kg/L
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ (20\xb0C/70% RH); kh\xf4 cứng 48 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa 3 ng\xe0y
H\xe0m lượng rắn thể t\xedch: 55%
Lượng lan l\xfd thuyết: 6 m\xb2/L (tại DFT 90 \xb5m)

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt:
Bề mặt cần sơn n\xean sơn l\xf3t ph\xf9 hợp trước; bề mặt tấm th\xe9p n\xean sơn l\xf3t chống rỉ; bề mặt b\xea t\xf4ng kh\xf4ng được qu\xe1 kiềm (pH < 10) v\xe0 phải sơn l\xf3t h\xe0n k\xedn epoxy; bề mặt cần sơn phải kh\xf4, sạch, kh\xf4ng dầu mỡ v\xe0 tạp chất. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t h\xe0n k\xedn epoxy, lượng tham khảo: 0.1 L/m\xb2 (200 m\xb2/bộ 20 L)
Sơn phủ: 2 lớp sơn nền epoxy, lượng tham khảo 0.30 L/m\xb2 (s\xe0n phẳng), 70 m\xb2/th\xf9ng (20 L)
Sơn b\xf3ng: 1 lớp sơn b\xf3ng polyurethane, lượng tham khảo: 0.1 L/m\xb2 (150 m\xb2/bộ 16 L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ, con lăn hoặc phun thường
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ v\xe0 con lăn 10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: BTO220

[An to\xe0n]
1) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN pintura de poliuretano para pisos es un acabado de dos componentes de secado r\xe1pido con buena retenci\xf3n de color y rendimiento de aplicaci\xf3n. Espec\xedficamente para pisos de concreto y placa de acero, puede ser utilizado como recubrimiento de piso de alta gama para interiores y exteriores.

[Aplicaciones]
Adecuado para recubrir estructuras de acero y superficies de concreto en interiores y exteriores en entornos corrosivos; tambi\xe9n puede servir como capa superior y capa intermedia para t\xfaneles. Este producto es particularmente adecuado para recubrimiento de pisos en instalaciones deportivas como canchas de tenis, canchas de b\xe1dminton y campos de b\xe9isbol.
1) Excelente adherencia
2) Excelente resistencia al desgaste y al impacto
3) F\xe1cil de limpiar y renovar

[Parametros Fisicos]
Resina base: Resina de poliuretano
Color: M\xfaltiples colores
Punto de inflamaci\xf3n: 30\xb0C
Densidad espec\xedfica: 1,3 kg/L
Tiempo de secado: superficie seca 1 h (20\xb0C/70% HR); secado completo 48 h
Intervalo de aplicaci\xf3n de capas: min 4 h, m\xe1x 3 d\xedas
Contenido de volumen s\xf3lido: 55%
Tasa de propagaci\xf3n te\xf3rica: 6 m\xb2/L (a 90 \xb5m DFT)

[Guia de Aplicacion]
Preparaci\xf3n de superficie:
La superficie a recubrir primero debe imprimarse con un imprimador adecuado; las superficies de placa de acero primero deben imprimarse con un imprimador anticorrosivo; las superficies de concreto no deben...`,ar:`[نظرة عامة]
طلاء أرضيات هونغ نيوهين البولي يوريثاني هو طلاء نهائي ثنائي المكونات يجف بسرعة مع الحفاظ على جودة اللون والأداء في التطبيق. مصمم خصيصًا للأرضيات المصنوعة من الخرسانة والصفيحة الفولاذية، يمكن استخدامه كطلاء أرضيات فاخر للداخل والخارج.

[التطبيقات]
مناسب لطلاء الهياكل الفولاذية وسطح الخرسانة في الداخل والخارج في البيئات القاسية؛ يمكن أيضًا استخدامه كطبقة سطحية وطبقة وسيطة للأنفاق. هذا المنتج مناسب بشكل خاص لطلاء الأرضيات في المرافق الرياضية مثل ملاعب التنس، وملاعب الريشة الطائرة، وملاعب البيسبول.
1) امتداد ممتاز
2) مقاومة ممتازة للبلى والصدمات
3) سهل التنظيف والتجديد

[المعلمات]
مادة أساسية: راتنج البولي يوريثان
اللون: ألوان متعددة
نقطة الاشتعال: 30\xb0C
الكثافة النوعية: 1.3 كجم/لتر
وقت الجفاف: سطح جاف 1 ساعة (20\xb0C/70% RH؛ جاف تماماً 48 ساعة
فترة إعادة التغطية: دنيا 4 ساعات، كحد أقصى 3 أيام
محتوى المادة الصلبة بالحجم: 55%
معدل الانتشار النظري: 6 م\xb2/لتر (عند 90 ميكرون DFT)

[دليل]
إعداد السطح:
يجب أن تكون السurface المراد طلاؤها أولاً معالجة بمادة أساسية مناسبة؛ أسطح الصفيحة الفولاذية يجب أن تكون معالجة أولاً بمادة أساسية مضادة للصدأ؛ أسطح الخرسانة لا يجب...`}},{model:"HN-FL-501",desc:{en:"Polyurethane clear coat — high-grade floor clear topcoat",zh:"聚氨酯清漆是一种高级地坪罩光清漆",vi:"Sơn bóng polyurethane — sơn bóng nền cao cấp",es:"Recubrimiento transparente de poliuretano — recubrimiento superior transparente de alto grado para pisos",ar:"طلاء شفاف بولي يوريثان — طلاء علوي شفاف عالي الج�性 للأرضيات"},details:{en:`[Product Overview]
HONG NGUYEN polyurethane clear paint is a high-grade floor clear topcoat applied specifically over surfaces already coated with epoxy floor paint and polyurethane floor paint, enhancing the weather, abrasion and anti-corrosion performance of the floor paint.

[Applications]
Applied together with epoxy floor paint and polyurethane floor systems on concrete and structural steel floors to improve the hardness and abrasion resistance of the floor paint.
1) Fast drying, can be applied at around -10\xb0C
2) Strong stain resistance, and can resist alkali, mild chemicals, acid rain, mold, etc.; good yellowing resistance.

[Physical Parameters]
Base resin: Acrylic polyurethane
Color: Colorless transparent
Flash point: 31\xb0C
Specific gravity: 0.98 kg/L
Drying time: surface dry 4 h; hard dry 3 days
Recoat interval: min 4 h, max 3 days
Theoretical spreading rate: 10 m\xb2/L
Mix ratio: base:curing agent = 2:1 (by weight)

[Application Guide]
Previous coat: epoxy floor paint series, polyurethane floor paint series.
Coverage: typically only 1 coat applied.
Coverage: 0.1 L/m\xb2 (140 m\xb2/kit, 14 L).
Application method: airless spray, brush, roller, conventional spray.
Thinner (max by volume): brush and roller 5%, airless spray 5%, conventional spray 15%
Cleaner: BTO220

[Safety]
1) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,zh:`【产品概述】
宏源聚氨酯清漆是一种高级地坪罩光清漆，专门涂在已涂环氧地坪漆和聚氨酯地坪漆的地坪表面，增强地坪漆的耐候耐磨及防腐蚀性能。

【适用范围】
与环氧地坪漆、聚氨酯地坪配套施工于混凝土、钢结构地台，提高地坪漆的硬度和耐磨性能。
1）快干，可在-10℃左右施工
2）抗污染能力强，并能抵抗碱、温和化学品、酸雨、霉等的侵蚀，耐黄变性好。

【物理参数】
基料：丙烯酸聚氨酯
颜色：无色透明
闪点：31℃
比重：0.98kg/L
干燥时间：表干：4小时
硬干：3天
重涂间隔：最小4小时，最大3天
理论涂布率：10㎡/L
混合配比：漆基：固化剂=2:1（重量比）

【施工说明】
前涂油漆：环氧地坪漆系列，聚氨酯地坪漆系列。
参考用量：施工时一般只涂一遍
参考用量：0.1L/㎡，即140㎡/组（14L）
施工方法：无气喷涂、刷涂、滚涂、普通喷涂。
稀释剂：（最大体积用量）刷涂和滚涂5%，无气喷涂5%，普通喷涂15%
清洗剂：BTO220

【安全守则】
1）施工时必须保持空气流通，并采用一定的防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2）易燃物品，远离火源。在施工范围内不宜吸烟。
3）储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn b\xf3ng polyurethane HONG NGUYEN l\xe0 sơn b\xf3ng nền cao cấp, chuy\xean thi c\xf4ng tr\xean bề mặt đ\xe3 sơn nền epoxy v\xe0 sơn nền polyurethane, tăng cường t\xednh chịu thời tiết, chịu m\xe0i m\xf2n v\xe0 chống ăn m\xf2n của sơn nền.

[Ứng dụng]
Thi c\xf4ng c\xf9ng sơn nền epoxy, sơn nền polyurethane tr\xean s\xe0n b\xea t\xf4ng v\xe0 s\xe0n kết cấu th\xe9p, n\xe2ng cao độ cứng v\xe0 khả năng chịu m\xe0i m\xf2n của sơn nền.
1) Kh\xf4 nhanh, c\xf3 thể thi c\xf4ng ở khoảng -10\xb0C
2) Khả năng chống bẩn mạnh, chịu kiềm, h\xf3a chất nhẹ, mưa axit, nấm mốc, v.v.; khả năng chống ố v\xe0ng tốt.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Acrylic polyurethane
M\xe0u: Kh\xf4ng m\xe0u trong suốt
Điểm bắt lửa: 31\xb0C
Tỉ trọng: 0.98 kg/L
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 cứng 3 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa 3 ng\xe0y
Lượng lan l\xfd thuyết: 10 m\xb2/L
Tỷ lệ pha: nhựa:chất đ\xf3ng rắn = 2:1 (trọng lượng)

[Hướng dẫn thi c\xf4ng]
Lớp trước: hệ sơn nền epoxy, hệ sơn nền polyurethane.
Lượng thi c\xf4ng: thường chỉ thi c\xf4ng 1 lớp.
Lượng tham khảo: 0.1 L/m\xb2 (140 m\xb2/bộ 14 L).
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ, con lăn, phun thường.
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ v\xe0 con lăn 5%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: BTO220

[An to\xe0n]
1) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN poliuretano clear paint is a high-grade floor clear capa superior applied specifically over surfaces already coated with epoxi pintura para piso and poliuretano pintura para piso, enhancing the weather, abrasion and anticorrosivo performance of the pintura para piso.

[Aplicaciones]
Applied together with epoxi pintura para piso and poliuretano floor systems on concreto and structural acero floors to improve the hardness and abrasion resistance of the pintura para piso.
1) Fast drying, can be applied at around -10\xb0C
2) Strong stain resistance, and can resist alkali, mild chemicals, acid rain, mold, etc.; good yellowing resistance.

[Parametros Fisicos]
Base resina: Acrylic poliuretano
Color: Colorless transparent
Flash point: 31\xb0C
Specific gravity: 0.98 kg/L
Drying time: surface dry 4 h; hard dry 3 days
Recoat interval: min 4 h, max 3 days
Theoretical spreading rate: 10 m\xb2/L
Mix ratio: base:curing agent = 2:1 (by weight)

[Guia de Aplicacion]
Previous coat: epoxi pintura para piso series, poliuretano pintura para piso series.
Coverage: typically only 1 coat applied.
Coverage: 0.1 L/m\xb2 (140 m\xb2/kit, 14 L).
Application method: airless rociado, brocha, rodillo, conventional rociado.
Thinner (max by volume): brocha and rodillo 5%, airless rociado 5%, conventional rociado 15%
Cleaner: BTO220

[Seguridad]
1) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN بولي يوريثان clear paint is a high-grade floor clear طبقة علوية applied specifically over surfaces already coated with إيبوكسي طلاء أرضيات and بولي يوريثان طلاء أرضيات, enhancing the weather, abrasion and مضاد للتآكل performance of the طلاء أرضيات.

[التطبيقات]
Applied together with إيبوكسي طلاء أرضيات and بولي يوريثان floor systems on خرسانة and structural صلب floors to improve the hardness and abrasion resistance of the طلاء أرضيات.
1) Fast drying, can be applied at around -10\xb0C
2) Strong stain resistance, and can resist alkali, mild chemicals, acid rain, mold, etc.; good yellowing resistance.

[المعلمات الفيزيائية]
Base راتنج: Acrylic بولي يوريثان
Color: Colorless transparent
Flash point: 31\xb0C
Specific gravity: 0.98 kg/L
Drying time: surface dry 4 h; hard dry 3 days
Recoat interval: min 4 h, max 3 days
Theoretical spreading rate: 10 m\xb2/L
Mix ratio: base:curing agent = 2:1 (by weight)

[دليل التطبيق]
Previous coat: إيبوكسي طلاء أرضيات series, بولي يوريثان طلاء أرضيات series.
Coverage: typically only 1 coat applied.
Coverage: 0.1 L/m\xb2 (140 m\xb2/kit, 14 L).
Application method: airless رش, فرشاة, أسطوانة, conventional رش.
Thinner (max by volume): فرشاة and أسطوانة 5%, airless رش 5%, conventional رش 15%
Cleaner: BTO220

[السلامة]
1) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`}},{model:"HN-FL-502",desc:{en:"Water-based acrylic floor paint — uses special epoxy polymer emulsion with high-hardness functional fillers and high-performance functional additives",zh:"水性丙烯酸地坪漆采用特种环氧高分子聚合物树脂乳液和高硬度、功能型填料与高性能、功能型助剂等",vi:"Sơn nền acrylic nước — dùng nhựa polyme epoxy đặc biệt với chất độn chức năng độ cứng cao và phụ gia chức năng hiệu năng cao",es:"Pintura de piso acrílica a base de agua — utiliza emulsión de polímero epoxi especial con rellenos funcionales de alta dureza y aditivos funcionales de alto rendimiento",ar:"طلاء أرضي акриловый على أساس الماء — يستخدم معلق بوليمر إيبوكسي خاص مع مُعبّئات وظيفية عالية الصلابة ومُضافات وظيفية عالية الأداء"},details:{en:`[Product Overview]
HONG NGUYEN water-based acrylic floor paint uses a special epoxy polymer resin emulsion combined with high-hardness functional fillers and high-performance functional additives, optimally blended and refined to combine abrasion resistance and flexibility. It is environmentally friendly, durable, and offers excellent value; it air-dries, is easy to apply, and can also be applied to incompletely cured concrete surfaces, suitable for tight-schedule construction.

[Applications]
Suitable for floor coating in workshops, offices, living rooms, halls, shops, etc.;
Suitable for indoor floors with high health and environmental requirements;
Suitable for floor coating in electrical rooms with high safety requirements.

[Physical Parameters]
Base resin: Water-based epoxy resin
Color: Multiple colors
Mix ratio: base:curing agent = 5:1
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 8 h, max unlimited

[Application Guide]
I. Recommended application steps and system:
1. 1 coat HONG NGUYEN water-based floor primer E1080, coverage approx. 8 m\xb2/kg (1 coat);
2. 2 coats HONG NGUYEN water-based floor topcoat E5450, coverage approx. 4 m\xb2/kg (2 coats); after drying, patch-fill and sand for a smooth, flat surface;
3. 1 coat HONG NGUYEN water-based floor clear coat E6300, coverage approx. 8 m\xb2/kg (1 coat).
II. Curing method: close to traffic for 3 days before foot access; 7-10 days before full use (at 25\xb0C, RH < 50%).
III. Application method: brush, spray, airless spray
Thinner: water
Brush and roller: 10%
Airless spray: 15%
Conventional spray: 15%
IV.`,zh:`【产品概述】
宏源水性丙烯酸地坪漆采用特种环氧高分子聚合物树脂乳液和高硬度、功能型填料与高性能、功能型助剂等，经过优化组合精制而成，集耐磨性和柔韧性能于一体。具有环保、耐用等功能，性价比优越；本品自干，施工方便，亦可涂装于未干透的水泥混凝土表面，适合赶工期施工。

【适用范围】
适用于车间、办公室、客厅、馆所、店堂等地面的涂饰；
适用于对健康环保要求高的室内地板；
适用于各种安全性要求较高电房地板涂装。

【物理参数】
基料：水性环氧树脂
颜色：多种颜色
配比：漆基：固化剂=5:1
理论涂布率：10㎡/L(以28\xb5m干膜计)
干燥时间：表干1小时(20℃/70%RH）；硬干：48小时
重涂间隔：最小8小时，最大不限

【施工说明】
―、建议施工步骤和配套方案:
1、宏源水性地坪底漆E1080涂一遍，参考用量:8㎡/㎏（1遍）；
2、宏源水性地坪面漆日E5450两遍,参考用量:4㎡/㎏(2遍）,干燥后,进行批补、打磨,使其平整光滑；
3、宏源水性地坪罩光清漆田E6300,参考用量：8㎡／㎏(1遍)。
二、养护方法：封闭3天后才上人,7-10天后方可以使用(在温度25℃相对湿度＜50％条件下)
三、施工方法：刷涂、喷涂、无气喷涂
稀释剂：水
刷涂和滚涂：10％
无空气喷涂：15％
普通喷涂：15％
四、`,vi:`[Tổng quan sản phẩm]
Sơn nền acrylic nước HONG NGUYEN d\xf9ng nhựa polyme epoxy đặc biệt kết hợp chất độn chức năng độ cứng cao v\xe0 phụ gia chức năng hiệu năng cao, phối hợp tối ưu, kết hợp khả năng chịu m\xe0i m\xf2n v\xe0 độ dẻo. Th\xe2n thiện m\xf4i trường, bền bỉ, hiệu quả kinh tế cao; sơn kh\xf4 tự nhi\xean, dễ thi c\xf4ng, c\xf3 thể thi c\xf4ng tr\xean bề mặt b\xea t\xf4ng chưa kh\xf4 ho\xe0n to\xe0n, ph\xf9 hợp c\xf4ng tr\xecnh tiến độ gấp.

[Ứng dụng]
Ph\xf9 hợp thi c\xf4ng s\xe0n nh\xe0 xưởng, văn ph\xf2ng, ph\xf2ng kh\xe1ch, hội trường, cửa h\xe0ng;
Ph\xf9 hợp s\xe0n trong nh\xe0 y\xeau cầu cao về sức khỏe v\xe0 m\xf4i trường;
Ph\xf9 hợp thi c\xf4ng s\xe0n ph\xf2ng điện y\xeau cầu an to\xe0n cao.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy nước
M\xe0u: Nhiều m\xe0u
Tỷ lệ pha: nhựa:chất đ\xf3ng rắn = 5:1
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 28 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ (20\xb0C/70% RH); kh\xf4 cứng 48 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa kh\xf4ng giới hạn

[Hướng dẫn thi c\xf4ng]
I. Quy tr\xecnh v\xe0 hệ sơn khuyến nghị:
1. 1 lớp sơn l\xf3t nền nước HONG NGUYEN E1080, lượng tham khảo: 8 m\xb2/kg (1 lớp);
2. 2 lớp sơn phủ nền nước HONG NGUYEN E5450, lượng tham khảo: 4 m\xb2/kg (2 lớp); sau khi kh\xf4, b\xf9 tảng v\xe0 ch\xe0 nh\xe1m cho phẳng nhẵn;
3. 1 lớp sơn b\xf3ng nền nước HONG NGUYEN E6300, lượng tham khảo: 8 m\xb2/kg (1 lớp).
II. Phương ph\xe1p bảo dưỡng: đ\xf3ng cửa 3 ng\xe0y mới cho người đi lại; 7-10 ng\xe0y mới sử dụng được (ở 25\xb0C, độ ẩm tương đối < 50%).
III. Phương ph\xe1p thi c\xf4ng: cọ, phun, phun kh\xf4ng kh\xed
Dung m\xf4i pha lo\xe3ng: nước
Cọ v\xe0 con lăn: 10%
Phun kh\xf4ng kh\xed: 15%
Phun thường: 15%
IV.`,es:`[Resumen del Producto]
HONG NGUYEN base de agua acrilico pintura para piso uses a special epoxi polymer resina emulsion combined with high-hardness functional cargas and high-performance functional aditivos, optimally blended and refined to combine abrasion resistance and flexibility. It is environmentally friendly, durable, and offers excellent value; it air-dries, is easy to apply, and can also be applied to incompletely cured concreto surfaces, suitable for tight-schedule construction.

[Aplicaciones]
Suitable for floor recubrimiento in workshops, offices, living rooms, halls, shops, etc.;
Suitable for indoor floors with high health and environmental requirements;
Suitable for floor recubrimiento in electrical rooms with high safety requirements.

[Parametros Fisicos]
Base resina: Water-based epoxi resina
Color: Multiple colors
Mix ratio: base:curing agent = 5:1
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 8 h, max unlimited

[Guia de Aplicacion]
I. Recommended application steps and system:
1. 1 coat HONG NGUYEN base de agua floor imprimador E1080, coverage approx. 8 m\xb2/kg (1 coat);
2. 2 coats HONG NGUYEN base de agua floor capa superior E5450, coverage approx. 4 m\xb2/kg (2 coats); after drying, patch-fill and sand for a smooth, flat surface;
3. 1 coat HONG NGUYEN base de agua floor barniz transparente E6300, coverage approx. 8 m\xb2/kg (1 coat).
II. Curing method: close to traffic for 3 days before foot access; 7-10 days before full use (at 25\xb0C, RH < 50%).
III. Application method: brocha, rociado, airless rociado
Thinner: water
Brush and rodillo: 10%
Airless rociado: 15%
Conventional rociado: 15%
IV.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN أساس مائي أكريليك طلاء أرضيات uses a special إيبوكسي polymer راتنج مستحلب combined with high-hardness functional حشوةs and high-performance functional إضافات, optimally blended and refined to combine abrasion resistance and flexibility. It is environmentally friendly, durable, and offers excellent value; it air-dries, is easy to apply, and can also be applied to incompletely cured خرسانة surfaces, suitable for tight-schedule construction.

[التطبيقات]
Suitable for floor طلاء in workshops, offices, living rooms, halls, shops, etc.;
Suitable for indoor floors with high health and environmental requirements;
Suitable for floor طلاء in electrical rooms with high safety requirements.

[المعلمات الفيزيائية]
Base راتنج: Water-based إيبوكسي راتنج
Color: Multiple لونs
Mix ratio: base:curing agent = 5:1
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 8 h, max unlimited

[دليل التطبيق]
I. Recommended application steps and system:
1. 1 coat HONG NGUYEN أساس مائي floor برايمر E1080, coverage approx. 8 m\xb2/kg (1 coat);
2. 2 coats HONG NGUYEN أساس مائي floor طبقة علوية E5450, coverage approx. 4 m\xb2/kg (2 coats); after drying, patch-fill and sand for a smooth, flat surface;
3. 1 coat HONG NGUYEN أساس مائي floor طلاء شفاف E6300, coverage approx. 8 m\xb2/kg (1 coat).
II. Curing method: close to traffic for 3 days before foot access; 7-10 days before full use (at 25\xb0C, RH < 50%).
III. Application method: فرشاة, رش, airless رش
Thinner: water
Brush and أسطوانة: 10%
Airless رش: 15%
Conventional رش: 15%
IV.`}},{model:"HN-FL-503",desc:{en:"Epoxy sealing primer N5050 — two-component solvent-based high-grade sealer",zh:"环氧封闭底漆是一种双组份溶剂型高级封闭底漆",vi:"Sơn lót hàn kín epoxy N5050 — sơn lót hàn kín cao cấp hai thành phần có dung môi",es:"Sellador epoxi N5050 — sellador de alto grado a base de disolvente, de dos componentes",ar:"مانع تسرب إيبوكسي N5050 — مانع تسرب عالي الجودة، قائم على المذيبات، مكون من جزأين"},details:{en:`[Product Overview]
HONG NGUYEN epoxy sealing primer is a two-component solvent-based high-grade sealer specifically for porous surfaces expected to be alkaline. It is a chemically-cured drying type with low viscosity and excellent penetration and mechanical performance.

[Applications]
Can be applied together with oil-resistant topcoat and epoxy floor paint on indoor and outdoor cement mortar, plaster, cement asbestos board, concrete and other surfaces, improving the adhesion and coverage of subsequent paint layers.
1) Excellent alkali resistance; application is generally not limited by temperature
2) Provides a good application surface for subsequent paint and reduces topcoat consumption

[Physical Parameters]
Base resin: Epoxy resin
Color: Base colorless transparent, curing agent light yellow transparent
Flash point: 30\xb0C
Specific gravity: 0.94 kg/L
Solid volume content: 28%
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 2 h (20\xb0C/70% RH); hard dry 7 days (full cure)
Recoat interval: min 4 h, max 7 days
Pot life: 8 h / 20\xb0C
Mix ratio: base:curing agent = 4:1 (by weight)

[Application Guide]
Surface preparation:
The surface to be coated must be dry, clean, free of oil and other contaminants; pH < 10; the concrete surface must be fully cured and dry with moisture content below 10%; old walls and chalky substrates must have chalk removed before coating.
Application method: airless spray, brush, roller or conventional spray.
Thinner (max by volume): brush and roller 10%, airless spray 10%, conventional spray 15%
Cleaner: BT0220

[Safety]
1) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.
Note:
In actual application, the sealer film should not be too thick; the best result is when no gloss appears after application. If the transparent sealer film is too thick, it will form a smoother surface, causing topcoat cracking and reduced adhesion.`,zh:`【产品概述】
宏源环氧封闭底漆是一种双组份溶剂型高级封闭底漆，专门用在预料带碱性的多微孔表面，本品属化学固化干燥型，粘度低，具有良好的渗透性能和抗械性能。

【适用范围】
可与油霸面漆和环氧地坪漆配套施工于室内、外水泥砂浆、灰泥、水泥石棉板、混凝土等表面，提高了后续漆层的附着力和遮盖力。
1｝抗碱性能优秀，施工一般不受气温限制
2｝为后涂油漆提供良好的施工表面，减少面漆的消耗。

【物理参数】
漆 基：环氧树脂
颜 色：漆基无色透明，固化剂浅黄色透明。
闪 点：30℃
比 重:0.94kg∕L
固体体枳含量：28％
理论涂布率：10㎡/Ｌ｛以28ｕｍ干膜计｝
干燥时间：表干：2小时；｛20℃/70％ＲＨ｝
硬干：7天｛完全固化｝
重涂间隔：最小4小时，最大7天
混合使用期：8小时/20℃
使用比例：漆基:固化剂＝4:1(重量比）

【施工说明】
表面处理：
被涂表而必须干燥、清洁、无油污和其它附着物，ｐｈ小于10，混凝土表而必须完全飞固化、干燥，含水率小于10％，旧墙和粉化墙体涂装前必須先除去粉化物。
旅工方法：无气喷涂、刷涂、滚涂或普通喷涂。
稀释刑｛最大体枳用置｝刷涂和滚涂10％，无气哦涂10％，普
通喷涂15％
洧洗刑BT0220

【安全守则】
1｝施工时必须保持空气流通.并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2｝易燃物品，远离火源，在施工范围内不宜吸烟。
3｝储存在阴凉干爽的地方。
备 注:
实际施工时，封闭底漆漆膜不能过厚，涂布后不应产生光泽为最佳效果，透明型封闭底漆漆膜过厚时会形成较光滑的表面，引起面漆裂缝及附着力下降。`,vi:`[Tổng quan sản phẩm]
Sơn l\xf3t h\xe0n k\xedn epoxy HONG NGUYEN l\xe0 sơn l\xf3t h\xe0n k\xedn cao cấp hai th\xe0nh phần c\xf3 dung m\xf4i chuy\xean dụng cho bề mặt nhiều lỗ dự kiến c\xf3 t\xednh kiềm. L\xe0 loại đ\xf3ng rắn h\xf3a học, độ nhớt thấp, khả năng thấm s\xe2u v\xe0 t\xednh cơ l\xfd ưu việt.

[Ứng dụng]
C\xf3 thể thi c\xf4ng c\xf9ng sơn phủ si\xeau chịu dầu v\xe0 sơn nền epoxy tr\xean bề mặt vữa xi măng trong nh\xe0, ngo\xe0i trời, vữa tr\xe1t, tấm xi măng amiang, b\xea t\xf4ng, v.v., n\xe2ng cao độ b\xe1m d\xednh v\xe0 khả năng che phủ của lớp sơn tiếp theo.
1) Khả năng chịu kiềm ưu việt; thi c\xf4ng thường kh\xf4ng bị giới hạn bởi nhiệt độ
2) Cung cấp bề mặt thi c\xf4ng tốt cho lớp sơn sau, giảm ti\xeau hao sơn phủ

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: Nhựa kh\xf4ng m\xe0u trong suốt, chất đ\xf3ng rắn v\xe0ng nhạt trong suốt
Điểm bắt lửa: 30\xb0C
Tỉ trọng: 0.94 kg/L
H\xe0m lượng rắn thể t\xedch: 28%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 28 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 2 giờ (20\xb0C/70% RH); kh\xf4 cứng 7 ng\xe0y (kh\xf4 ho\xe0n to\xe0n)
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa 7 ng\xe0y
Thời gian sử dụng: 8 giờ / 20\xb0C
Tỷ lệ pha: nhựa:chất đ\xf3ng rắn = 4:1 (trọng lượng)

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt:
Bề mặt cần sơn phải kh\xf4, sạch, kh\xf4ng dầu mỡ v\xe0 tạp chất kh\xe1c; pH < 10; bề mặt b\xea t\xf4ng phải đ\xf3ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4, độ ẩm dưới 10%; tường cũ v\xe0 tường phấn h\xf3a phải loại bỏ lớp phấn trước khi sơn.
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ, con lăn hoặc phun thường.
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ v\xe0 con lăn 10%, phun kh\xf4ng kh\xed 10%, phun thường 15%
Chất vệ sinh: BT0220

[An to\xe0n]
1) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa:
Khi thi c\xf4ng thực tế, m\xe0ng sơn l\xf3t h\xe0n k\xedn kh\xf4ng được qu\xe1 d\xe0y; hiệu quả tốt nhất l\xe0 sau khi thi c\xf4ng kh\xf4ng c\xf3 độ b\xf3ng. M\xe0ng sơn l\xf3t trong suốt qu\xe1 d\xe0y sẽ tạo bề mặt trơn hơn, g\xe2y nứt sơn phủ v\xe0 giảm độ b\xe1m d\xednh.`,es:`[Resumen del Producto]
HONG NGUYEN epoxi imprimador sellador is a de dos componentes solvent-based high-grade sealer specifically for porous surfaces expected to be alkaline. It is a chemically-cured drying type with low viscosity and excellent penetration and mechanical performance.

[Aplicaciones]
Can be applied together with oil-resistant capa superior and epoxi pintura para piso on indoor and outdoor cement mortar, plaster, cement asbestos board, concreto and other surfaces, improving the adhesion and coverage of subsequent paint layers.
1) Excellent alkali resistance; application is generally not limited by temperature
2) Provides a good application surface for subsequent paint and reduces capa superior consumption

[Parametros Fisicos]
Base resina: Epoxy resina
Color: Base colorless transparent, agente de curado light yellow transparent
Flash point: 30\xb0C
Specific gravity: 0.94 kg/L
Solid volume content: 28%
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 2 h (20\xb0C/70% RH); hard dry 7 days (full cure)
Recoat interval: min 4 h, max 7 days
Pot life: 8 h / 20\xb0C
Mix ratio: base:curing agent = 4:1 (by weight)

[Guia de Aplicacion]
Surface preparation:
The surface to be coated must be dry, clean, free of oil and other contaminants; pH < 10; the concreto surface must be fully cured and dry with moisture content below 10%; old walls and chalky sustratos must have chalk removed before recubrimiento.
Application method: airless rociado, brocha, rodillo or conventional rociado.
Thinner (max by volume): brocha and rodillo 10%, airless rociado 10%, conventional rociado 15%
Cleaner: BT0220

[Seguridad]
1) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.
Note:
In actual application, the sealer film should not be too thick; the best result is when no gloss appears after application. If the transparent sealer film is too thick, it will form a smoother surface, causing capa superior cracking and reduced adhesion.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN إيبوكسي برايمر ساد is a ثنائي المكون solvent-based high-grade sealer specifically for porous surfaces expected to be alkaline. It is a chemically-cured drying type with low viscosity and excellent penetration and mechanical performance.

[التطبيقات]
Can be applied together with oil-resistant طبقة علوية and إيبوكسي طلاء أرضيات on indoor and outdoor cement mortar, plaster, cement asbestos board, خرسانة and other surfaces, improving the التصاق and coverage of subsequent paint layers.
1) Excellent alkali resistance; application is generally not limited by temperature
2) Provides a good application surface for subsequent paint and reduces طبقة علوية consumption

[المعلمات الفيزيائية]
Base راتنج: Epoxy راتنج
Color: Base لونless transparent, عامل المعالجة light yellow transparent
Flash point: 30\xb0C
Specific gravity: 0.94 kg/L
Solid volume content: 28%
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 2 h (20\xb0C/70% RH); hard dry 7 days (full cure)
Recoat interval: min 4 h, max 7 days
Pot life: 8 h / 20\xb0C
Mix ratio: base:curing agent = 4:1 (by weight)

[دليل التطبيق]
Surface preparation:
The surface to be coated must be dry, clean, free of oil and other contaminants; pH < 10; the خرسانة surface must be fully cured and dry with moisture content below 10%; old walls and chalky ركيزةs must have chalk removed before طلاء.
Application method: airless رش, فرشاة, أسطوانة or conventional رش.
Thinner (max by volume): فرشاة and أسطوانة 10%, airless رش 10%, conventional رش 15%
Cleaner: BT0220

[السلامة]
1) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.
Note:
In actual application, the sealer film should not be too thick; the best result is when no gloss appears after application. If the transparent sealer film is too thick, it will form a smoother surface, causing طبقة علوية cracking and reduced التصاق.`}},{model:"HN-FL-504",desc:{en:"Single-component clear coat BV0036 — high-grade clear topcoat based on acrylic resin",zh:"罩光清漆是一种丙烯酸树脂为基料的高级罩光面漆",vi:"Sơn bóng một thành phần BV0036 — sơn bóng cao cấp gốc nhựa acrylic",es:"Recubrimiento transparente de un componente BV0036 — recubrimiento superior transparente de alto grado a base de resina acrílica",ar:"طلاء شفاف أحادي المكون BV0036 — طلاء علوي شفاف عالي الجودة قائم على راتنج أكريليك"},details:{en:`[Product Overview]
HONG NGUYEN clear coat is a high-grade clear topcoat based on acrylic resin, specifically applied over primed and intermediate-coated interior and exterior walls, floors, structural steel and wood surfaces, enhancing the weather, sunlight and anti-corrosion performance of the coated surface.
Applications:
Can be applied together with metallic paint and stone-effect paint on indoor and outdoor concrete, structural steel, wood and other surfaces, improving the texture and weather resistance of metallic and stone-effect paint; can also be used as a clear coat for floors.
1) Excellent UV resistance; application is generally not limited by temperature and can be done at around -10\xb0C
2) Strong stain resistance; can resist alkali, mild chemicals, acid rain, mold, etc.

[Physical Parameters]
Base resin: Acrylic resin
Color: Colorless transparent
Flash point: 36\xb0C-40\xb0C
Specific gravity: 0.9 kg/L
Solid volume content: 28%
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 4 h
Recoat interval: min 2 h, max unlimited
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)

[Application Guide]
Previous coat: The surface to be coated must be clean, dry and free of impurities; the previously applied stone-effect paint, metallic paint or floor paint must be fully dry before applying the clear coat.
Coverage: typically only 1 coat applied.
Coverage: 0.12 L/m\xb2 (150 m\xb2/kit, 18 L).
Application method: airless spray, brush, roller, conventional spray.
Thinner (max by volume): brush and roller 10%, airless spray 10%, conventional spray 15%
Cleaner: BTO220

[Safety]
1) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,zh:`【产品概述】
宏源罩光清漆是一种丙烯酸树脂为基料的高级罩光面漆，专门涂在已涂底漆和中间漆的内外墙、地坪、钢结构、木器表面，令被涂物表面的耐候、耐晒性能及防腐性能得到加强。
使用范围：
可与金属漆、石头漆配套施工于室内外混凝土、钢结构、木器等表面，提高金属漆、石头漆的质感效果及耐候性能，亦可作为地坪用的罩光清漆。
1）抗紫外线性能优异，施工一般不受气温限制，可在-10℃左右施工
2）抗污染能力强，并能抵抗碱、温和化学品、酸雨、霉等的侵蚀。

【物理参数】
基料：丙烯酸树脂
颜色：无色透明
闪点：36℃-40℃
比重：0.9kg/L
固体体积含量：28%
干燥时间：表干：1小时 （20℃/70%RH）
硬干：4小时
重涂间隔：最小2小时，最大不限
理论涂布率：10㎡/L （以28um干膜计）

【施工说明】
前途油漆：涂装表面必须保持清洁、干爽、并将杂质除去，先涂的石头漆、金属漆、地坪漆必须完全干燥后再施工罩光漆。
参考用量：施工时一般只涂一遍
参考用量：0.12L/㎡，即150㎡/组（18L）
施工方法：无气喷涂、刷涂、滚涂、普通喷涂。
稀释剂：（最大体积用量）刷涂和滚涂10%，无气喷涂10%，普通喷涂15%
清洗剂：BTO220

【安全守则】
1）施工时必须保持空气流通，并采用一定的防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2）易燃物品，远离火源。在施工范围内不宜吸烟。
3）储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn b\xf3ng HONG NGUYEN l\xe0 sơn b\xf3ng cao cấp gốc nhựa acrylic, chuy\xean thi c\xf4ng tr\xean bề mặt tường trong nh\xe0, ngo\xe0i trời, s\xe0n, kết cấu th\xe9p v\xe0 gỗ đ\xe3 sơn l\xf3t v\xe0 lớp giữa, tăng cường t\xednh chịu thời tiết, chịu nắng v\xe0 chống ăn m\xf2n của bề mặt.
Ứng dụng:
C\xf3 thể thi c\xf4ng c\xf9ng sơn kim loại v\xe0 sơn v\xe2n đ\xe1 tr\xean bề mặt b\xea t\xf4ng trong nh\xe0, ngo\xe0i trời, kết cấu th\xe9p, gỗ, v.v., n\xe2ng cao hiệu ứng bề mặt v\xe0 khả năng chịu thời tiết của sơn kim loại v\xe0 sơn v\xe2n đ\xe1; cũng c\xf3 thể d\xf9ng l\xe0m sơn b\xf3ng cho s\xe0n.
1) Khả năng chống tia cực t\xedm ưu việt; thi c\xf4ng thường kh\xf4ng bị giới hạn bởi nhiệt độ, c\xf3 thể thi c\xf4ng ở khoảng -10\xb0C
2) Khả năng chống bẩn mạnh; chịu kiềm, h\xf3a chất nhẹ, mưa axit, nấm mốc, v.v.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa acrylic
M\xe0u: Kh\xf4ng m\xe0u trong suốt
Điểm bắt lửa: 36\xb0C-40\xb0C
Tỉ trọng: 0.9 kg/L
H\xe0m lượng rắn thể t\xedch: 28%
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ (20\xb0C/70% RH); kh\xf4 cứng 4 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 2 giờ, tối đa kh\xf4ng giới hạn
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 28 \xb5m)

[Hướng dẫn thi c\xf4ng]
Lớp trước: Bề mặt cần sơn phải sạch, kh\xf4 v\xe0 kh\xf4ng tạp chất; sơn v\xe2n đ\xe1, sơn kim loại hoặc sơn nền trước đ\xf3 phải kh\xf4 ho\xe0n to\xe0n trước khi thi c\xf4ng sơn b\xf3ng.
Lượng thi c\xf4ng: thường chỉ thi c\xf4ng 1 lớp.
Lượng tham khảo: 0.12 L/m\xb2 (150 m\xb2/bộ 18 L).
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ, con lăn, phun thường.
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ v\xe0 con lăn 10%, phun kh\xf4ng kh\xed 10%, phun thường 15%
Chất vệ sinh: BTO220

[An to\xe0n]
1) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN barniz transparente is a high-grade clear capa superior based on acrilico resina, specifically applied over primed and intermediate-coated interior and pared exteriors, floors, structural acero and wood surfaces, enhancing the weather, sunlight and anticorrosivo performance of the coated surface.
Applications:
Can be applied together with metallic paint and stone-effect paint on indoor and outdoor concreto, structural acero, wood and other surfaces, improving the texture and resistencia climatica of metallic and stone-effect paint; can also be used as a barniz transparente for floors.
1) Excellent UV resistance; application is generally not limited by temperature and can be done at around -10\xb0C
2) Strong stain resistance; can resist alkali, mild chemicals, acid rain, mold, etc.

[Parametros Fisicos]
Base resina: Acrylic resina
Color: Colorless transparent
Flash point: 36\xb0C-40\xb0C
Specific gravity: 0.9 kg/L
Solid volume content: 28%
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 4 h
Recoat interval: min 2 h, max unlimited
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)

[Guia de Aplicacion]
Previous coat: The surface to be coated must be clean, dry and free of impurities; the previously applied stone-effect paint, metallic paint or pintura para piso must be fully dry before applying the barniz transparente.
Coverage: typically only 1 coat applied.
Coverage: 0.12 L/m\xb2 (150 m\xb2/kit, 18 L).
Application method: airless rociado, brocha, rodillo, conventional rociado.
Thinner (max by volume): brocha and rodillo 10%, airless rociado 10%, conventional rociado 15%
Cleaner: BTO220

[Seguridad]
1) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN طلاء شفاف is a high-grade clear طبقة علوية based on أكريليك راتنج, specifically applied over primed and intermediate-coated interior and جدار خارجيs, floors, structural صلب and wood surfaces, enhancing the weather, sunlight and مضاد للتآكل performance of the coated surface.
Applications:
Can be applied together with metallic paint and stone-effect paint on indoor and outdoor خرسانة, structural صلب, wood and other surfaces, improving the texture and مقاومة الطقس of metallic and stone-effect paint; can also be used as a طلاء شفاف for floors.
1) Excellent UV resistance; application is generally not limited by temperature and can be done at around -10\xb0C
2) Strong stain resistance; can resist alkali, mild chemicals, acid rain, mold, etc.

[المعلمات الفيزيائية]
Base راتنج: Acrylic راتنج
Color: Colorless transparent
Flash point: 36\xb0C-40\xb0C
Specific gravity: 0.9 kg/L
Solid volume content: 28%
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 4 h
Recoat interval: min 2 h, max unlimited
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)

[دليل التطبيق]
Previous coat: The surface to be coated must be clean, dry and free of impurities; the previously applied stone-effect paint, metallic paint or طلاء أرضيات must be fully dry before applying the طلاء شفاف.
Coverage: typically only 1 coat applied.
Coverage: 0.12 L/m\xb2 (150 m\xb2/kit, 18 L).
Application method: airless رش, فرشاة, أسطوانة, conventional رش.
Thinner (max by volume): فرشاة and أسطوانة 10%, airless رش 10%, conventional رش 15%
Cleaner: BTO220

[السلامة]
1) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`}},{model:"HN-FL-505",desc:{en:"Acrylic floor paint BF0557 — fast-drying acrylic topcoat",zh:"丙烯酸地坪漆是一种快干型丙烯酸面漆",vi:"Sơn nền acrylic BF0557 — sơn phủ acrylic khô nhanh",es:"Pintura de piso acrílica BF0557 — recubrimiento superior acrílico de secado rápido",ar:"طلاء أرضي أكريليك BF0557 — طلاء علوي أكريليك يجف بسرعة"},details:{en:`[Product Overview]
HONG NGUYEN acrylic floor paint is a fast-drying acrylic topcoat with good color retention and application performance. Specifically for floors made of concrete and steel plate, it can be used as a high-grade indoor and outdoor floor coating.

[Applications]
Suitable for coating indoor and outdoor steel structures and concrete surfaces in corrosive environments; can also serve as a topcoat and intermediate coat for tunnels. This product is particularly suitable for floor coating of sports venues such as tennis courts, badminton courts, and baseball fields.
1) Excellent adhesion
2) Excellent abrasion and impact resistance
3) Easy to clean and refurbish

[Physical Parameters]
Base resin: Acrylic resin
Color: Multiple colors
Flash point: 30\xb0C
Specific gravity: 1.3 kg/L
Drying time: surface dry 2 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 4 h, max 3 days
Solid volume content: 55%
Theoretical spreading rate: 6 m\xb2/L (at 90 \xb5m DFT)

[Application Guide]
Surface preparation: The surface to be coated should first be primed with an appropriate primer; steel plate surfaces should first be primed with an anti-rust primer; concrete surfaces should not be strongly alkaline (pH < 10) and should be primed with an epoxy sealer; the surface to be coated must be dry, clean, free of oil and other contaminants. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat epoxy sealing primer, coverage approx. 0.1 L/m\xb2 (180 m\xb2/kit, 20 L)
Topcoat: 2 coats epoxy floor paint, coverage approx. 0.30 L/m\xb2 (flat), 60 m\xb2/drum (20 L)
Clear coat: 1 coat polyurethane clear paint, coverage approx. 0.1 L/m\xb2 (160 m\xb2/kit, 16 L)
Application method: airless spray, brush, roller or conventional spray
Thinner (max by volume): brush and roller 10%, airless spray 5%, conventional spray 15%
Cleaner: BTO220

[Safety]
1) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,zh:`【产品概述】
宏源丙烯酸地坪漆是一种快干型丙烯酸面漆，具有良好的保色性及施工性能。专门用在混凝土和钢板所做的地台，可用作室内及户外高级地坪涂料。

【适用范围】
适合涂装在具有腐蚀环境中的室内、外钢结构和混凝土表面，同时亦可作为隧道用的面漆和中间漆，本产品特别适用于网球场、羽毛球场、棒球场等运动场馆的地坪涂装。
1）附着力佳
2）耐磨性能、抗碰撞性能极佳
3）容易清洗和翻新施工

【物理参数】
基料：丙烯酸树脂
颜色：多种颜色
闪点：30℃
比重：1.3kg/L
干燥时间：表干：2小时（20℃/70%RH）
硬干：48小时
重涂间隔：最小4小时，最大3天
固体体积含量：55%
理论涂布率：6㎡/L（以90um干膜计）

【施工说明】
表面处理：涂装表面应先涂上适当的底漆，钢板表面应先涂上防锈底漆，混凝土表面不应有较强的碱性，ph小于10，并要先涂上环氧封闭底漆，同时被涂表面必须干燥、清洁、无油污和其它附着物。特殊表面处理请向本公司技术部查询.

【建议油漆配套】
底漆：环氧封闭底漆涂一遍，参考用量：0.1L/㎡，即180㎡/组（20L）
面漆：环氧地坪漆涂二遍，参考用量0.30L/㎡（平涂），即60㎡/桶（20L）
罩光：聚氨酯清漆涂一遍，参考用量：0.1L/㎡，即160㎡/组（16L）
施工方法：无气喷涂、刷涂、滚涂或普通喷涂。
稀释剂：（最大体积用量）刷涂和滚涂10%，无气喷涂5%，普通喷涂15%
清洗剂：BTO220

【安全守则】
1）施工时必须保持空气流通，并采用一定的防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2）易燃物品，远离火源。在施工范围内不宜吸烟。
3）储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn nền acrylic HONG NGUYEN l\xe0 sơn phủ acrylic kh\xf4 nhanh, c\xf3 khả năng giữ m\xe0u v\xe0 thi c\xf4ng tốt. Chuy\xean dụng cho s\xe0n b\xea t\xf4ng v\xe0 s\xe0n tấm th\xe9p, c\xf3 thể d\xf9ng l\xe0m sơn nền cao cấp trong nh\xe0 v\xe0 ngo\xe0i trời.

[Ứng dụng]
Ph\xf9 hợp thi c\xf4ng tr\xean bề mặt kết cấu th\xe9p v\xe0 b\xea t\xf4ng trong nh\xe0, ngo\xe0i trời trong m\xf4i trường ăn m\xf2n; cũng c\xf3 thể l\xe0m sơn phủ v\xe0 lớp giữa cho hầm. Đặc biệt ph\xf9 hợp thi c\xf4ng s\xe0n cho s\xe2n thể thao như s\xe2n tennis, cầu l\xf4ng, b\xf3ng ch\xe0y.
1) B\xe1m d\xednh tốt
2) Chịu m\xe0i m\xf2n v\xe0 va đập ưu việt
3) Dễ vệ sinh v\xe0 thi c\xf4ng lại

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa acrylic
M\xe0u: Nhiều m\xe0u
Điểm bắt lửa: 30\xb0C
Tỉ trọng: 1.3 kg/L
Thời gian kh\xf4: kh\xf4 bề mặt 2 giờ (20\xb0C/70% RH); kh\xf4 cứng 48 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa 3 ng\xe0y
H\xe0m lượng rắn thể t\xedch: 55%
Lượng lan l\xfd thuyết: 6 m\xb2/L (tại DFT 90 \xb5m)

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn n\xean sơn l\xf3t ph\xf9 hợp trước; bề mặt tấm th\xe9p n\xean sơn l\xf3t chống rỉ; bề mặt b\xea t\xf4ng kh\xf4ng được qu\xe1 kiềm (pH < 10) v\xe0 phải sơn l\xf3t h\xe0n k\xedn epoxy; bề mặt cần sơn phải kh\xf4, sạch, kh\xf4ng dầu mỡ v\xe0 tạp chất. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t h\xe0n k\xedn epoxy, lượng tham khảo: 0.1 L/m\xb2 (180 m\xb2/bộ 20 L)
Sơn phủ: 2 lớp sơn nền epoxy, lượng tham khảo 0.30 L/m\xb2 (s\xe0n phẳng), 60 m\xb2/th\xf9ng (20 L)
Sơn b\xf3ng: 1 lớp sơn b\xf3ng polyurethane, lượng tham khảo: 0.1 L/m\xb2 (160 m\xb2/bộ 16 L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ, con lăn hoặc phun thường
Dung m\xf4i pha lo\xe3ng (thể t\xedch tối đa): cọ v\xe0 con lăn 10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: BTO220

[An to\xe0n]
1) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN acrilico pintura para piso is a secado rapido acrilico capa superior with good retencion de color and application performance. Specifically for floors made of concreto and acero plate, it can be used as a high-grade indoor and outdoor floor recubrimiento.

[Aplicaciones]
Suitable for recubrimiento indoor and outdoor acero structures and concreto surfaces in corrosive environments; can also serve as a capa superior and intermediate coat for tunnels. This product is particularly suitable for floor recubrimiento of sports venues such as tennis courts, badminton courts, and baseball fields.
1) Excellent adhesion
2) Excellent abrasion and impact resistance
3) Easy to clean and refurbish

[Parametros Fisicos]
Base resina: Acrylic resina
Color: Multiple colors
Flash point: 30\xb0C
Specific gravity: 1.3 kg/L
Drying time: surface dry 2 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 4 h, max 3 days
Solid volume content: 55%
Theoretical spreading rate: 6 m\xb2/L (at 90 \xb5m DFT)

[Guia de Aplicacion]
Surface preparation: The surface to be coated should first be primed with an appropriate imprimador; acero plate surfaces should first be primed with an anti-rust imprimador; concreto surfaces should not be strongly alkaline (pH < 10) and should be primed with an epoxi sealer; the surface to be coated must be dry, clean, free of oil and other contaminants. For special surface preparations, consult our technical department.

[Sistema Recomendado]
Primer: 1 coat epoxi imprimador sellador, coverage approx. 0.1 L/m\xb2 (180 m\xb2/kit, 20 L)
Topcoat: 2 coats epoxi pintura para piso, coverage approx. 0.30 L/m\xb2 (flat), 60 m\xb2/drum (20 L)
Clear coat: 1 coat poliuretano clear paint, coverage approx. 0.1 L/m\xb2 (160 m\xb2/kit, 16 L)
Application method: airless rociado, brocha, rodillo or conventional rociado
Thinner (max by volume): brocha and rodillo 10%, airless rociado 5%, conventional rociado 15%
Cleaner: BTO220

[Seguridad]
1) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN أكريليك طلاء أرضيات is a سريع الجفاف أكريليك طبقة علوية with good الحفاظ على اللون and application performance. Specifically for floors made of خرسانة and صلب plate, it can be used as a high-grade indoor and outdoor floor طلاء.

[التطبيقات]
Suitable for طلاء indoor and outdoor صلب structures and خرسانة surfaces in corrosive environments; can also serve as a طبقة علوية and intermediate coat for tunnels. This product is particularly suitable for floor طلاء of sports venues such as tennis courts, badminton courts, and baseball fields.
1) Excellent التصاق
2) Excellent abrasion and impact resistance
3) Easy to clean and refurbish

[المعلمات الفيزيائية]
Base راتنج: Acrylic راتنج
Color: Multiple لونs
Flash point: 30\xb0C
Specific gravity: 1.3 kg/L
Drying time: surface dry 2 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 4 h, max 3 days
Solid volume content: 55%
Theoretical spreading rate: 6 m\xb2/L (at 90 \xb5m DFT)

[دليل التطبيق]
Surface preparation: The surface to be coated should first be primed with an appropriate برايمر; صلب plate surfaces should first be primed with an anti-rust برايمر; خرسانة surfaces should not be strongly alkaline (pH < 10) and should be primed with an إيبوكسي sealer; the surface to be coated must be dry, clean, free of oil and other contaminants. For special surface preparations, consult our technical department.

[النظام الموصى به]
Primer: 1 coat إيبوكسي برايمر ساد, coverage approx. 0.1 L/m\xb2 (180 m\xb2/kit, 20 L)
Topcoat: 2 coats إيبوكسي طلاء أرضيات, coverage approx. 0.30 L/m\xb2 (flat), 60 m\xb2/drum (20 L)
Clear coat: 1 coat بولي يوريثان clear paint, coverage approx. 0.1 L/m\xb2 (160 m\xb2/kit, 16 L)
Application method: airless رش, فرشاة, أسطوانة or conventional رش
Thinner (max by volume): فرشاة and أسطوانة 10%, airless رش 5%, conventional رش 15%
Cleaner: BTO220

[السلامة]
1) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`}}],image:"/images/product-epoxy-floor.jpg",applications:[{en:"Logistics warehouses & auto assembly",zh:"物流仓库与汽车装配",vi:"Kho logistics & lắp ráp ô tô",es:"Almacenes de logística & ensamblaje de autos",ar:"مستودعات اللوجستيكا وتجميع السيارات"},{en:"Pharma clean rooms & cold storage",zh:"制药洁净室与冷库",vi:"Phòng sạch dược & kho lạnh",es:"Habitaciones limpias de pharma & almacenamiento en frío",ar:"غرف نظيفة للصناعات الدوائية والتخزين البارد"},{en:"Parking decks & food processing",zh:"停车场与食品加工",vi:"Bãi đỗ xe & chế biến thực phẩm",es:"Plazas de estacionamiento y procesamiento de alimentos",ar:"مواقف السيطارات ومعالجة الأغذية"},{en:"Electronics fabs & chemical storage",zh:"电子厂房与化学品仓储",vi:"Nhà máy điện tử & kho hóa chất",es:"Fábricas de electrónica y almacenamiento químico",ar:"مصانع الإلكترونيات والتخزين الكيميائي"}]},{code:"CAT-04",title:{en:"Weatherproof Exterior Paints",zh:"户外耐候工业面漆",vi:"Sơn ngoại thất chịu thời tiết",es:"Pinturas exteriores resistentes a la intemperie",ar:"دهانات خارجية مقاومة للطقس"},short:{en:"PVDF fluorocarbon · Acrylic-polyurethane topcoats",zh:"PVDF 氟碳·丙烯酸聚氨酯面漆",vi:"PVDF fluorocarbon · acrylic-PU",es:"Poliuretano acrílico · Recubrimientos superficiales de fluorocarbono PVDF",ar:"بولي يوريثان أcrylico · recubrimientos superficiales de fluorocarbono PVDF"},description:{en:"Fluorocarbon (PVDF) and acrylic-polyurethane topcoats engineered for tropical sun, coastal salt spray, and industrial pollution. 15-year gloss and color retention per AAMA 2605.",zh:"氟碳(PVDF)及丙烯酸聚氨酯面漆,专为热带日照、沿海盐雾及工业污染环境设计。按 AAMA 2605 标准,15 年保光保色。",vi:"Sơn phủ fluorocarbon (PVDF) và acrylic-PU cho nắng nhiệt đới, muối biển và ô nhiễm công nghiệp. Giữ bóng màu 15 năm theo AAMA 2605."},features:[{en:"Gloss 60° ≥ 85%",zh:"光泽 60° ≥ 85%",vi:"Độ bóng 60° ≥ 85%",es:"Brillo 60° ≥ 85%",ar:"لمعان 60° ≥ 85%"},{en:"QUV 4000 h (AAMA 2605)",zh:"QUV 4000 h(AAMA 2605)",vi:"QUV 4000 h (AAMA 2605)",es:"QUV 4000 h (AAMA 2605)",ar:"QUV 4000 h (AAMA 2605)"},{en:"15-year gloss & color warranty",zh:"15 年保光保色质保",vi:"Bảo hành bóng màu 15 năm",es:"Garantía de 15 años en brillo y color",ar:"ضمان 15 سنة لللمعان واللون"},{en:"SRI ≥ 105 heat-reflective option",zh:"可选 SRI ≥ 105 隔热反射",vi:"Tùy chọn phản xạ nhiệt SRI ≥ 105",es:"Opción reflectante de calor SRI ≥ 105",ar:"خيار عاكس للحرار SRI ≥ 105"}],specs:[{label:{en:"Base",zh:"基料",vi:"Nhựa nền",es:"Base",ar:"القاعدة"},value:"PVDF / AC-PU"},{label:{en:"Weatherability",zh:"耐候性",vi:"Chịu thời tiết",es:"Resistencia a la intemperie",ar:"مقاومة الطقس"},value:"15 years"},{label:{en:"Gloss",zh:"光泽",vi:"Độ bóng",es:"Brillo",ar:"اللمعان"},value:"60° ≥ 85%"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT",ar:"DFT"},value:"30 – 60 μm"}],categorySpecs:[{label:{en:"Gloss 60°",zh:"光泽 60°",vi:"Bóng 60°",es:"Brillo 60°",ar:"لمعان 60°"},value:"≥85%"},{label:{en:"Q-UV",zh:"紫外老化",vi:"Q-UV",es:"Q-UV",ar:"Q-UV"},value:"4000h"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT",ar:"DFT"},value:"30–60 μm"},{label:{en:"Warranty",zh:"质保",vi:"Bảo hành",es:"Garantía",ar:"الضمان"},value:"15 yr"}],models:[{model:"HN-EX-701",desc:{en:"Architectural fluorocarbon paint — two-component solvent-based high-grade decorative coating",zh:"建筑氟碳漆是一种双组份溶剂型高档装饰涂料",vi:"Sơn fluorocarbon kiến trúc — sơn trang trí cao cấp hai thành phần có dung môi",es:"Pintura fluorocarbono arquitectónica — recubrimiento decorativo de alta calidad a base de disolvente de dos componentes",ar:"دهان fluorocarbonو معماري — طلاء زخرفي عالي الجودة ذو مكونين قائم على المذيبات"},details:{en:`[Product Overview]
HONG NGUYEN architectural fluorocarbon paint is a two-component solvent-based high-grade decorative coating suitable for environments requiring very strong protection. With excellent gloss and color retention, it provides outstanding protection and decoration for interior and exterior walls and structural steel surfaces, and is a super-weather-resistant paint.

[Applications]
Suitable for coating interior and exterior concrete and walls; can also be used as a topcoat in anti-corrosion coating systems.
1) Tough and durable paint film
2) Excellent adhesion
3) Long-lasting color
4) Outstanding yellowing and stain resistance
5) Resistant to acids, alkalis, solvents, water and chemicals

[Physical Parameters]
Base resin: Fluorocarbon resin
Color: Multiple colors, including metallic colors
Finish: Glossy or matte
Flash point: 31\xb0C
Pot life: 3 h / 20\xb0C
Mix ratio — Glossy: Base F5801 : Curing agent C5800 = 8:1 (by weight)
Semi-gloss: Base F5801 : Curing agent C5800 = 10:1 (by weight)
Solid volume content: 42%
Theoretical spreading rate: 10 m\xb2/L (single coat on flat surface)
Drying time: surface dry 5 h (20\xb0C); through dry 7 days (full cure)
Recoat interval: min 8 h, max 7 days

[Application Guide]
Surface preparation: The surface to be coated should first be primed with an appropriate primer, and the surface must be clean, dry and free of impurities; concrete and cement surfaces must be fully dry, with pH < 10 and moisture content below 10%. For special surface preparations, consult our technical department.

[Recommended System]
(I) Steel surfaces:
Primer: 1 coat HONG NGUYEN zinc-rich epoxy primer P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN epoxy MIO high-build paint U5690, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 1-2 coats HONG NGUYEN super fluorocarbon topcoat F5801, coverage approx. 0.22 L/m\xb2 (90 m\xb2/kit, 20 L)
(II) Cement and concrete surfaces:
Primer: 1 coat HONG NGUYEN epoxy clear paint N5050, coverage approx. 0.1 L/m\xb2 (200 m\xb2/kit, 20 L)
Intermediate: 1 coat HONG NGUYEN epoxy colored high-build paint P5450, coverage approx. 0.12 L/m\xb2 (150 m\xb2/kit, 16 L)
Topcoat: 1-2 coats HONG NGUYEN super fluorocarbon topcoat F5801, coverage approx. 0.22 L/m\xb2 (180 m\xb2/kit, 20 L)
Clear coat: 1 coat HONG NGUYEN fluorocarbon clear paint V5830, coverage approx. 0.1 L/m\xb2 (180 m\xb2/20 L)

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.`,zh:`【产品概述】
HONG NGUYEN（宏源）建筑氟碳漆是一种双组份溶剂型高档装饰涂料，适合用于需要特强保护性的环境，具有优良的保光、保色性能，为室内外墙壁及钢结构表面提供卓越　的保护及装饰作用，属超强耐候性油漆。

【适用范围】
适合涂装于室内、外混凝土和墙壁，同时亦可用作防腐涂料系统的面漆。
1）漆膜坚固耐用。2）附着力极佳。3）色泽持久不变。4）具有特强的耐黄变性及耐沾污性。5）具有抗酸、碱、溶剂、水及化学品的侵蚀。

【物理参数】
基料：氟碳树酯
颜色：多种颜色；包括金属色
漆面：有光或哑光
闪点：31℃
混合使用期：3小时/20℃
比例：有光漆基F5801：固化剂C5800＝8:1（重量比）
半光漆基F5801:固化剂C5800=10:1(重量比)
固体体积含量：42%
理论涂布率：10㎡/L（平面涂一遍）
干燥时间：表干：5小时（20℃），实干：7天（完全固化）
重涂间隔：最小8小时，最大7天

【施工说明】
表面处理：涂装表面应先涂上适当的底漆，同时表面必须保持清洁、干爽并将杂质除去，混凝土、水泥表面必须完全干燥，PH＜10、含水率小于10%。特殊表面的处理方法请向本公司技术部查询。

【建议油漆配套】
(一)钢铁表面：
底 漆：宏源环氧富锌底漆P5160涂一遍，参考用量：0.1L/㎡，即10㎡/L；
中间漆：宏源环氧云铁厚浆漆U5690涂一遍，参考用量：0.1L/㎡，即10㎡/L；
面 漆：宏源超级氟碳面漆F5801涂一至二遍，参考用量0.22L/㎡，即90㎡/组（20L）。
(二)水泥及混凝土表面：
底 漆：宏源环氧清漆N5050涂一遍，参考用量：0.1L/㎡，即200㎡/组（20L）；
中间漆：宏源环氧彩色厚浆漆P5450涂一遍，参考用量：0.12L/㎡，即150㎡/组（16L）；
面 漆：宏源超级氟碳面漆F5801涂一至二遍，参考用量：0.22L/㎡，即180㎡/组（20L）；
罩 光：宏源氟碳清漆V5830涂一遍，参考用量：0.1L/㎡，即180㎡/20L。

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn fluorocarbon kiến tr\xfac HONG NGUYEN l\xe0 sơn trang tr\xed cao cấp hai th\xe0nh phần c\xf3 dung m\xf4i, ph\xf9 hợp m\xf4i trường cần bảo vệ đặc biệt mạnh. Với khả năng giữ b\xf3ng v\xe0 giữ m\xe0u ưu việt, cung cấp bảo vệ v\xe0 trang tr\xed vượt trội cho tường trong nh\xe0, ngo\xe0i trời v\xe0 bề mặt kết cấu th\xe9p, l\xe0 sơn c\xf3 khả năng chịu thời tiết si\xeau việt.

[Ứng dụng]
Ph\xf9 hợp thi c\xf4ng tr\xean b\xea t\xf4ng v\xe0 tường trong nh\xe0, ngo\xe0i trời; cũng c\xf3 thể d\xf9ng l\xe0m sơn phủ trong hệ sơn chống ăn m\xf2n.
1) M\xe0ng sơn dai bền
2) Độ b\xe1m d\xednh ưu việt
3) M\xe0u bền l\xe2u
4) Khả năng chống ố v\xe0ng v\xe0 chống bẩn vượt trội
5) Chịu axit, kiềm, dung m\xf4i, nước v\xe0 h\xf3a chất

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa fluorocarbon
M\xe0u: Nhiều m\xe0u, kể cả m\xe0u kim loại
Bề mặt: B\xf3ng hoặc mờ
Điểm bắt lửa: 31\xb0C
Thời gian sử dụng: 3 giờ / 20\xb0C
Tỷ lệ pha — B\xf3ng: Nhựa F5801 : Chất đ\xf3ng rắn C5800 = 8:1 (trọng lượng)
B\xe1n b\xf3ng: Nhựa F5801 : Chất đ\xf3ng rắn C5800 = 10:1 (trọng lượng)
H\xe0m lượng rắn thể t\xedch: 42%
Lượng lan l\xfd thuyết: 10 m\xb2/L (1 lớp tr\xean bề mặt phẳng)
Thời gian kh\xf4: kh\xf4 bề mặt 5 giờ (20\xb0C); kh\xf4 ho\xe0n to\xe0n 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 7 ng\xe0y

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn n\xean sơn l\xf3t ph\xf9 hợp trước, bề mặt phải sạch, kh\xf4 v\xe0 kh\xf4ng tạp chất; b\xea t\xf4ng v\xe0 xi măng phải kh\xf4 ho\xe0n to\xe0n, pH < 10 v\xe0 độ ẩm dưới 10%. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
(I) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN P5160, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Lớp giữa: 1 lớp sơn epoxy mica oxit sắt d\xe0y HONG NGUYEN U5690, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 1-2 lớp sơn phủ fluorocarbon cao cấp HONG NGUYEN F5801, lượng tham khảo 0.22 L/m\xb2 (90 m\xb2/bộ 20 L)
(II) Bề mặt xi măng v\xe0 b\xea t\xf4ng:
Sơn l\xf3t: 1 lớp sơn b\xf3ng epoxy HONG NGUYEN N5050, lượng tham khảo: 0.1 L/m\xb2 (200 m\xb2/bộ 20 L)
Lớp giữa: 1 lớp sơn epoxy m\xe0u m\xe0ng d\xe0y HONG NGUYEN P5450, lượng tham khảo: 0.12 L/m\xb2 (150 m\xb2/bộ 16 L)
Sơn phủ: 1-2 lớp sơn phủ fluorocarbon cao cấp HONG NGUYEN F5801, lượng tham khảo 0.22 L/m\xb2 (180 m\xb2/bộ 20 L)
Sơn b\xf3ng: 1 lớp sơn b\xf3ng fluorocarbon HONG NGUYEN V5830, lượng tham khảo: 0.1 L/m\xb2 (180 m\xb2/20 L)

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN arquitectonico fluorocarbono paint is a de dos componentes solvent-based high-grade decorative recubrimiento suitable for environments requiring very strong protection. With excellent gloss and retencion de color, it provides outstanding protection and decoration for interior and pared exteriors and structural acero surfaces, and is a super-weather-resistant paint.

[Aplicaciones]
Suitable for recubrimiento interior and exterior concreto and walls; can also be used as a capa superior in anticorrosivo recubrimiento systems.
1) Tough and durable pelicula de pintura
2) Excellent adhesion
3) Long-lasting color
4) Outstanding yellowing and stain resistance
5) Resistant to acids, alkalis, solvents, water and chemicals

[Parametros Fisicos]
Base resina: Fluorocarbon resina
Color: Multiple colors, including metallic colors
Finish: Glossy or mate
Flash point: 31\xb0C
Pot life: 3 h / 20\xb0C
Mix ratio — Glossy: Base F5801 : Curing agent C5800 = 8:1 (by weight)
Semi-gloss: Base F5801 : Curing agent C5800 = 10:1 (by weight)
Solid volume content: 42%
Theoretical spreading rate: 10 m\xb2/L (single coat on flat surface)
Drying time: surface dry 5 h (20\xb0C); through dry 7 days (full cure)
Recoat interval: min 8 h, max 7 days

[Guia de Aplicacion]
Surface preparation: The surface to be coated should first be primed with an appropriate imprimador, and the surface must be clean, dry and free of impurities; concreto and cement surfaces must be fully dry, with pH < 10 and moisture content below 10%. For special surface preparations, consult our technical department.

[Sistema Recomendado]
(I) Steel surfaces:
Primer: 1 coat HONG NGUYEN zinc-rich epoxi imprimador P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN epoxi MIO high-build paint U5690, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 1-2 coats HONG NGUYEN super fluorocarbono capa superior F5801, coverage approx. 0.22 L/m\xb2 (90 m\xb2/kit, 20 L)
(II) Cement and concreto surfaces:
Primer: 1 coat HONG NGUYEN epoxi clear paint N5050, coverage approx. 0.1 L/m\xb2 (200 m\xb2/kit, 20 L)
Intermediate: 1 coat HONG NGUYEN epoxi colored high-build paint P5450, coverage approx. 0.12 L/m\xb2 (150 m\xb2/kit, 16 L)
Topcoat: 1-2 coats HONG NGUYEN super fluorocarbono capa superior F5801, coverage approx. 0.22 L/m\xb2 (180 m\xb2/kit, 20 L)
Clear coat: 1 coat HONG NGUYEN fluorocarbono clear paint V5830, coverage approx. 0.1 L/m\xb2 (180 m\xb2/20 L)

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN معماري فلوروكربون paint is a ثنائي المكون solvent-based high-grade decorative طلاء suitable for environments requiring very strong protection. With excellent gloss and الحفاظ على اللون, it provides outstanding protection and decoration for interior and جدار خارجيs and structural صلب surfaces, and is a super-weather-resistant paint.

[التطبيقات]
Suitable for طلاء interior and exterior خرسانة and walls; can also be used as a طبقة علوية in مضاد للتآكل طلاء systems.
1) Tough and durable غشاء الطلاء
2) Excellent التصاق
3) Long-lasting لون
4) Outstanding yellowing and stain resistance
5) Resistant to acids, alkalis, solvents, water and chemicals

[المعلمات الفيزيائية]
Base راتنج: Fluorocarbon راتنج
Color: Multiple لونs, including metallic لونs
Finish: Glossy or غير لامع
Flash point: 31\xb0C
Pot life: 3 h / 20\xb0C
Mix ratio — Glossy: Base F5801 : Curing agent C5800 = 8:1 (by weight)
Semi-gloss: Base F5801 : Curing agent C5800 = 10:1 (by weight)
Solid volume content: 42%
Theoretical spreading rate: 10 m\xb2/L (single coat on flat surface)
Drying time: surface dry 5 h (20\xb0C); through dry 7 days (full cure)
Recoat interval: min 8 h, max 7 days

[دليل التطبيق]
Surface preparation: The surface to be coated should first be primed with an appropriate برايمر, and the surface must be clean, dry and free of impurities; خرسانة and cement surfaces must be fully dry, with pH < 10 and moisture content below 10%. For special surface preparations, consult our technical department.

[النظام الموصى به]
(I) Steel surfaces:
Primer: 1 coat HONG NGUYEN zinc-rich إيبوكسي برايمر P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN إيبوكسي MIO high-build paint U5690, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 1-2 coats HONG NGUYEN super فلوروكربون طبقة علوية F5801, coverage approx. 0.22 L/m\xb2 (90 m\xb2/kit, 20 L)
(II) Cement and خرسانة surfaces:
Primer: 1 coat HONG NGUYEN إيبوكسي clear paint N5050, coverage approx. 0.1 L/m\xb2 (200 m\xb2/kit, 20 L)
Intermediate: 1 coat HONG NGUYEN إيبوكسي لونed high-build paint P5450, coverage approx. 0.12 L/m\xb2 (150 m\xb2/kit, 16 L)
Topcoat: 1-2 coats HONG NGUYEN super فلوروكربون طبقة علوية F5801, coverage approx. 0.22 L/m\xb2 (180 m\xb2/kit, 20 L)
Clear coat: 1 coat HONG NGUYEN فلوروكربون clear paint V5830, coverage approx. 0.1 L/m\xb2 (180 m\xb2/20 L)

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.`}},{model:"HN-EX-702",desc:{en:"Super oil-resistant polyurethane topcoat F5802 — two-component polyurethane coating",zh:"超级油霸面漆F5802是一种双组份聚氨酯涂料",vi:"Sơn phủ polyurethane siêu chịu dầu F5802 — sơn polyurethane hai thành phần",es:"Recubrimiento superficial de poliuretano súper resistente al aceite F5802 — recubrimiento de poliuretano de dos componentes",ar:"طلاء سطحي بولي يوريثاني فائق مقاومة للزيت F5802 — طلاء بولي يوريثاني ذو مكونين"},details:{en:`[Product Overview]
HONG NGUYEN super oil-resistant topcoat F5802 is a two-component polyurethane coating with excellent gloss and color retention. It offers outstanding water, animal and vegetable oil, abrasion, impact and UV resistance, suitable for moderate to severe corrosive environments.

[Applications]
1) Used as a long-term protective decorative topcoat on steel structure surfaces in severe corrosive environments.
2) Can be applied on non-ferrous metals, concrete, cement, wood, pipelines, fiberglass and other rigid material surfaces.
3) Used as a non-yellowing chemical-resistant topcoat over epoxy primer or intermediate coat.

[Physical Parameters]
Base resin: Acrylic polyurethane
Color: Multiple colors
Mix ratio: Base F5802 / Curing agent C5800 = 9:1 (by volume) = 10:1 (by weight)
Pot life: 3 h / 20\xb0C
Flash point: 31\xb0C
Specific gravity: 1.2 kg/L
Solid volume content: 42%
Theoretical spreading rate: 10 m\xb2/L or 8.3 m\xb2/kg (at 42 \xb5m DFT)
Drying time: surface dry 5 h, through dry (full cure): 7 days
Recoat interval: min 8 h, max 7 days
Finish: Semi-gloss or glossy

[Application Guide]
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
Primer: 1 coat HONG NGUYEN zinc-rich epoxy primer P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN epoxy MIO high-build paint U5690, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN polyurethane enamel F5802, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0220 (max by volume): brush 15-20%, airless spray 5%, conventional spray 30%
Cleaner: T0220

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.`,zh:`【产品概述】
HONG NGUYEN（宏源）超级油霸面漆F5802是一种双组份聚氨酯涂料，具有优异的保光及保色性。本品具有优异的耐水，耐动、植物油，耐磨损，抗碰撞及抗紫外线的特点，适宜在中等至严重腐蚀环境下使用。

【适用范围】
1）作为长效保护装饰面漆涂用在严重腐蚀环境中的钢结构表面。
2）可涂在有色金属、混凝土、水泥、木板、管道、玻璃钢及其它刚性材料表面。
3）作为不泛黄耐化学品面漆涂在环氧底漆或中间漆上。

【物理参数】
漆基：丙烯酸聚氨酯
颜色：多种颜色
混合比例：漆基F5802 / 固化剂C5800 = 9 ：1（体积比）
= 10 ：1（重量比）
混合使用期：3 h / 20℃
闪点：31 ℃
比重：1.2 kg/L
体积固体含量：42 %
理论涂布量：10 m2/L，即8.3 m2/kg（干膜42微米计）
干燥时间：表干5 小时，实干（完全固化）：7天
重涂间隔：最小8小时，最大7天
漆面：半光或亮光

【施工说明】
表面处理：施工表面必须清洁干燥，无松散漆层、油脂及其它污垢物。本品必须涂在预涂适当底漆的表面上。

【建议油漆配套】
底 漆：宏源环氧富锌底漆P5160涂一遍，参考用量：0.1 L/㎡，即10㎡/L。
中间漆：宏源环氧云铁厚浆漆U5690涂一遍，参考用量：0.1 L/㎡，即10㎡/L。
面 漆：宏源聚氨酯磁漆F5802涂两遍，参考用量：0.2 L/㎡，即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0220
（最大用量） 刷 涂：15～20 %
无气喷涂：5 %
一般喷涂：30 %
清 洗 剂：T0220

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn phủ si\xeau chịu dầu HONG NGUYEN F5802 l\xe0 sơn polyurethane hai th\xe0nh phần c\xf3 khả năng giữ b\xf3ng v\xe0 giữ m\xe0u vượt trội. C\xf3 khả năng chịu nước, dầu động thực vật, chịu m\xe0i m\xf2n, va đập v\xe0 chống tia cực t\xedm ưu việt, ph\xf9 hợp m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng.

[Ứng dụng]
1) D\xf9ng l\xe0m sơn phủ trang tr\xed bảo vệ d\xe0i hạn tr\xean bề mặt kết cấu th\xe9p trong m\xf4i trường ăn m\xf2n nặng.
2) C\xf3 thể thi c\xf4ng tr\xean kim loại m\xe0u, b\xea t\xf4ng, xi măng, gỗ, ống, fiberglass v\xe0 c\xe1c vật liệu cứng kh\xe1c.
3) D\xf9ng l\xe0m sơn phủ chịu h\xf3a chất kh\xf4ng ố v\xe0ng tr\xean sơn l\xf3t hoặc lớp giữa epoxy.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Acrylic polyurethane
M\xe0u: Nhiều m\xe0u
Tỷ lệ pha: Nhựa F5802 / Chất đ\xf3ng rắn C5800 = 9:1 (thể t\xedch) = 10:1 (trọng lượng)
Thời gian sử dụng: 3 giờ / 20\xb0C
Điểm bắt lửa: 31\xb0C
Tỉ trọng: 1.2 kg/L
H\xe0m lượng rắn thể t\xedch: 42%
Lượng lan l\xfd thuyết: 10 m\xb2/L tức 8.3 m\xb2/kg (tại DFT 42 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 5 giờ; kh\xf4 ho\xe0n to\xe0n: 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 7 ng\xe0y
Bề mặt: B\xe1n b\xf3ng hoặc b\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch v\xe0 kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 được sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t epoxy gi\xe0u kẽm HONG NGUYEN P5160, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Lớp giữa: 1 lớp sơn epoxy mica oxit sắt d\xe0y HONG NGUYEN U5690, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn tr\xe1ng polyurethane HONG NGUYEN F5802, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0220 (thể t\xedch tối đa): cọ 15-20%, phun kh\xf4ng kh\xed 5%, phun thường 30%
Chất vệ sinh: T0220

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN super oil-resistant capa superior F5802 is a de dos componentes poliuretano recubrimiento with excellent gloss and retencion de color. It offers outstanding water, animal and vegetable oil, abrasion, impact and UV resistance, suitable for moderate to severe corrosive environments.

[Aplicaciones]
1) Used as a long-term protective decorative capa superior on acero structure surfaces in severe corrosive environments.
2) Can be applied on non-ferrous metals, concreto, cement, wood, pipelines, fibervidrio and other rigid material surfaces.
3) Used as a non-yellowing chemical-resistant capa superior over epoxi imprimador or intermediate coat.

[Parametros Fisicos]
Base resina: Acrylic poliuretano
Color: Multiple colors
Mix ratio: Base F5802 / Curing agent C5800 = 9:1 (by volume) = 10:1 (by weight)
Pot life: 3 h / 20\xb0C
Flash point: 31\xb0C
Specific gravity: 1.2 kg/L
Solid volume content: 42%
Theoretical spreading rate: 10 m\xb2/L or 8.3 m\xb2/kg (at 42 \xb5m DFT)
Drying time: surface dry 5 h, through dry (full cure): 7 days
Recoat interval: min 8 h, max 7 days
Finish: Semi-gloss or brillante

[Guia de Aplicacion]
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
Primer: 1 coat HONG NGUYEN zinc-rich epoxi imprimador P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN epoxi MIO high-build paint U5690, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN poliuretano enamel F5802, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: T0220 (max by volume): brocha 15-20%, airless rociado 5%, conventional rociado 30%
Cleaner: T0220

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN super oil-resistant طبقة علوية F5802 is a ثنائي المكون بولي يوريثان طلاء with excellent gloss and الحفاظ على اللون. It offers outstanding water, animal and vegetable oil, abrasion, impact and UV resistance, suitable for moderate to severe corrosive environments.

[التطبيقات]
1) Used as a long-term protective decorative طبقة علوية on صلب structure surfaces in severe corrosive environments.
2) Can be applied on non-ferrous metals, خرسانة, cement, wood, pipelines, fiberزجاج and other rigid material surfaces.
3) Used as a non-yellowing chemical-resistant طبقة علوية over إيبوكسي برايمر or intermediate coat.

[المعلمات الفيزيائية]
Base راتنج: Acrylic بولي يوريثان
Color: Multiple لونs
Mix ratio: Base F5802 / Curing agent C5800 = 9:1 (by volume) = 10:1 (by weight)
Pot life: 3 h / 20\xb0C
Flash point: 31\xb0C
Specific gravity: 1.2 kg/L
Solid volume content: 42%
Theoretical spreading rate: 10 m\xb2/L or 8.3 m\xb2/kg (at 42 \xb5m DFT)
Drying time: surface dry 5 h, through dry (full cure): 7 days
Recoat interval: min 8 h, max 7 days
Finish: Semi-gloss or لامع

[دليل التطبيق]
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
Primer: 1 coat HONG NGUYEN zinc-rich إيبوكسي برايمر P5160, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Intermediate: 1 coat HONG NGUYEN إيبوكسي MIO high-build paint U5690, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN بولي يوريثان enamel F5802, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: T0220 (max by volume): فرشاة 15-20%, airless رش 5%, conventional رش 30%
Cleaner: T0220

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.`}},{model:"HN-EX-703",desc:{en:"Elastic anti-crack exterior — bridges hairline cracks, ±250% elongation",zh:"弹性抗裂外墙——桥接微裂纹,延伸率 ±250%",vi:"Ngoại thất đàn hồi chống nứt — che nứt, dài dài ±250%",es:"Exterior elástico antirrotura — puentes fisuras de cabello, ±250% alargamiento",ar:"خارج مرن مقاوم للكسر — يصلح الشقوق الدقيقة، ±250% امتداد"}},{model:"HN-EX-704",desc:{en:"Heat-reflective topcoat — SRI ≥ 105, reduces surface temp 15°C",zh:"热反射面漆——SRI ≥ 105,降温 15°C",vi:"Sơn phản xạ nhiệt — SRI ≥ 105, giảm 15°C",es:"Recubrimiento superficial reflectante de calor — SRI ≥ 105, reduce la temperatura superficial 15°C",ar:"طلاء سطحي عاكس للحرارة — SRI ≥ 105، يقلل درجة الحرارة السطحية 15°C"}},{model:"HN-EX-705",desc:{en:"Industrial fluorocarbon baking paint — alkyd-based enamel specially formulated (per source spec)",zh:"醇酸漆是特殊配制的醇酸基磁漆",vi:"Sơn nung fluorocarbon công nghiệp — sơn tráng nền alkyd phối chế đặc biệt (theo thông số nguồn)",es:"Pintura horneada de fluorocarbono industrial — esmalte alquídico especialmente formulado (según especificación de origen)",ar:"دهان fluorocarbonو صناعي مطهّر — إسماعيل ألكيدي مصمم خصيصًا (حسب المواصفات الأصلية)"},details:{en:`[Product Overview]
HONG NGUYEN alkyd paint is a specially formulated alkyd-based enamel that forms a glossy, abrasion-resistant paint film. Its features are fast drying, economical cost, and excellent water and weather resistance.

[Applications]
Can be used as a general-purpose topcoat on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Physical Parameters]
Base resin: Modified alkyd resin
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust primer P2070 or iron-oxide-red anti-rust primer P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0010 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0010

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before recoating, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum recoat interval is exceeded before recoating, roughen the surface to ensure intercoat adhesion.`,zh:`【产品概述】
HONG NGUYEN（宏源）醇酸漆是特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，其特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
可作为通用面漆涂于轻微至中等腐蚀环境下的室内外金属和木材表面。

【物理参数】
漆基：改性醇酸树脂 颜色：白色、银色及其它颜色
比重：1.10kg/L 闪点：38℃
体积固体含量：50% 理论涂布率：14㎡/L（干膜35微米）
干燥时间：表干4小时，实干8小时
重涂间隔：最小8小时，最大30天
漆面：有光

【施工说明】
表面处理：施工表面必须干燥、无松散漆层、油脂及其它污垢物。本品必须涂在预涂过适当底漆的表面上。

【建议油漆配套】
1）钢铁表面：
底漆：宏源红丹防锈底漆P2070或铁红防锈底漆P2040涂一遍，参考用量：0.1L/㎡,即10㎡/L。
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
2）木材表面：
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0010
（最大用量） 刷涂：5～10% 无气喷涂5% 一般喷涂：15%
清 洗 剂：T0010

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注：1）暴露于污染环境后重涂以前，须用高压淡水彻底清洗表面，任其自干。
2）若超过最大重涂间隔再涂油漆时，应磨粗表面以确保漆膜间的附着力。`,vi:`[Tổng quan sản phẩm]
Sơn alkyd HONG NGUYEN l\xe0 sơn tr\xe1ng nền alkyd phối chế đặc biệt, tạo m\xe0ng sơn b\xf3ng, chịu m\xe0i m\xf2n. Đặc điểm l\xe0 kh\xf4 nhanh, kinh tế, chịu nước v\xe0 chịu thời tiết ưu việt.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn phủ phổ th\xf4ng tr\xean bề mặt kim loại v\xe0 gỗ trong nh\xe0 v\xe0 ngo\xe0i trời trong m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa alkyd cải biến
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.10 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 14 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 8 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 30 ng\xe0y
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
1) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ ch\xec đỏ HONG NGUYEN P2070 hoặc sơn l\xf3t chống rỉ oxit sắt đỏ P2040, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
2) Bề mặt gỗ:
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0010 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0010

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: 1) Sau khi tiếp x\xfac m\xf4i trường \xf4 nhiễm, trước khi sơn lại, phải rửa sạch bề mặt bằng nước ngọt \xe1p suất cao v\xe0 để tự kh\xf4.
2) Nếu vượt qu\xe1 thời gian giữa c\xe1c lớp tối đa trước khi sơn lại, phải l\xe0m nh\xe1m bề mặt để đảm bảo độ b\xe1m d\xednh giữa c\xe1c lớp sơn.`,es:`[Resumen del Producto]
HONG NGUYEN alquidalico paint is a specially formulated alquidalico-based enamel that forms a brillante, abrasion-resistant pelicula de pintura. Its features are fast drying, economical cost, and excellent water and resistencia climatica.

[Aplicaciones]
Can be used as a general-purpose capa superior on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Parametros Fisicos]
Base resina: Modified alquidalico resina
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Guia de Aplicacion]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust imprimador P2070 or iron-oxide-red anti-rust imprimador P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: T0010 (max by volume): brocha 5-10%, airless rociado 5%, conventional rociado 15%
Cleaner: T0010

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before rerecubrimiento, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum intervalo de repintado is exceeded before rerecubrimiento, roughen the surface to ensure intercoat adhesion.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN ألكيد paint is a specially formulated ألكيد-based enamel that forms a لامع, abrasion-resistant غشاء الطلاء. Its features are fast drying, economical cost, and excellent water and مقاومة الطقس.

[التطبيقات]
Can be used as a general-purpose طبقة علوية on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[المعلمات الفيزيائية]
Base راتنج: Modified ألكيد راتنج
Color: White, silver and other لونs
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[دليل التطبيق]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust برايمر P2070 or iron-oxide-red anti-rust برايمر P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: T0010 (max by volume): فرشاة 5-10%, airless رش 5%, conventional رش 15%
Cleaner: T0010

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before reطلاء, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum فترة إعادة الطلاء is exceeded before reطلاء, roughen the surface to ensure intercoat التصاق.`}},{model:"HN-EX-706",desc:{en:"Fluorocarbon topcoat composition",zh:"氟碳面漆的组成",vi:"Thành phần sơn phủ fluorocarbon",es:"Composición de recubrimiento superficial de fluorocarbono",ar:"تركيبة طلاء سطحي من fluorocarbonو"},details:{en:`[Product Overview]
Fluorocarbon topcoat composition:
Fluorocarbon topcoat is a two-component air-drying coating with high-grade fluorocarbon resin and special resin as the main film-forming substances. Because fluorocarbon resin coatings introduce fluorine with high electronegativity and strong carbon-fluorine bond energy, they have particularly superior performance: weather resistance, heat resistance, low-temperature resistance, chemical resistance, plus unique non-stick and low-friction properties.
Technical specifications of fluorocarbon topcoat:
Film appearance: smooth and flat film, color matches the standard sample
Fineness: ≤ 20 \xb5m (metallic paint and matte paint not specified)
Drying time: standard thickness single coat, 25\xb0C; surface dry ≤ 2 h, through dry ≤ 48 h
Gloss (60\xb0): glossy ≥ 90\xb0; matte: agreed (20\xb0-80\xb0)
Pencil hardness: ≥ 2H
Adhesion: ≤ 1 (cross-cut method, grade)
Cupping test: ≥ 4 mm
Bending test: ≤ 2 mm
Water resistance: 240 h, no blistering, wrinkling or gloss loss
Gasoline resistance: 24 h, no blistering, wrinkling or gloss loss
Weathering: artificial accelerated aging 1000 h; gloss loss ≤ 1, chalking ≤ 1, cracking ≤ 1
Spraying of fluorocarbon topcoat:
1. The primer must be completely dry; the wall must be free of dust and other debris.
2. Application mix ratio: main paint : curing agent : thinner = 10 : 1 : 2.
3. The mixed fluorocarbon paint must be filtered through a 200-mesh screen; the thinner should be stirred continuously during standing to prevent settling.
4. Spray gun model: W-77; nozzle size: 1.5-2.0 mm; air pump pressure: 0.3-0.5 MPa.
5. The coordination of sprayer count, spray area, spray substrate, and suspended platform distribution should be considered. Based on actual project conditions, arrange construction workers to spray simultaneously; under the premise of ensuring no sagging, spray as thick as possible.
6. Anti-contamination and anti-toxicity work should be done well; downpipes etc. should be protected; workers should wear anti-toxicity masks, gloves and other protective equipment; open flame is strictly prohibited. Spraying should be uniform with reasonable density, no sagging, uneven bright/dark, mottling, etc.; the feel should be delicate, gloss uniform, no scraping marks or unevenness.
Disclaimer: The information provided in this document is based entirely on our laboratory and practical knowledge; given that product use conditions are beyond our control, apart from the quality of the paint itself, we cannot guarantee anything. As our company's products and production processes continue to develop, all information herein is subject to our confirmation.`,zh:`【产品概述】
氟碳面漆的组成
氟碳面漆是以高级氟碳树脂、特种树脂、主要成膜物质的双组份自干涂料。由于氟树脂涂料由于引入的氟元素电负性大，碳氟键能强，具有特别优越的各项性能。耐候性、耐热性、耐低温性、耐化学药品性，而且具有独特的不粘性和低磨擦性。
氟碳面漆的技术指标
漆膜外观：漆膜平整光滑，颜色符合标准样板
细 度：≤20μm， 金属面漆、 哑光不作要求
干燥时间：标准厚度单涂层，25℃，
表干≤2h，实干≤48h
光 泽：（60\xb0）亮光：≥90\xb0，
哑光：商定（20\xb0～ 80\xb0）
铅笔硬度：≥2H
附 着 力：≤1（划格法，级）
杯突试验：≥4mm
弯曲实验：≤2mm
耐 水 性：240h，不起泡，不起皱，不失光
耐汽油性：24h，不起泡，不起皱，不失光
耐 侯 性：人工加速老化：1000h；
失光≤1，粉化≤1，龟裂≤1
氟碳面漆的喷涂
1．.底漆必须完全干燥，墙面不得有粉尘等杂物。
2．施工配比，主漆：固化剂：稀释剂=10：1：2。
3．调配后的氟碳漆必须采用200目纱网进行过滤，稀释剂在放置过程中应不断搅拌，以免沉淀。
4．喷枪型号：W-77，喷嘴尺寸：1.5-2.0mm，气泵压力：0.3-0.5Mp。
5．施工时应考虑喷涂人数、喷涂面积、喷涂基面、吊笼分布的配合， 考虑到本工程的实际情况，安排施工人员同时进行喷涂，在保证不流挂的前提下，尽可能的喷厚一些。
6．应做好防污和防毒工作，对落水管等应进行保护，工人施工时应戴防毒面罩和手套等防护用品，同时严禁烟火；喷涂应均匀，密度合理，无流挂、明暗不均、发花等现象，手感细腻，光泽均匀，无批刮印痕和凸凹不平现象。
声明：本资料提供的信息完全基于我们在实验室和实践中取得的知识，鉴于产品使用条件非我方所能控制。除了油漆本身质量，我们不能担保任何东西。由于我公司产品及生产工艺的不断发展，此中所有信息均以我方确认为准。`,vi:`[Tổng quan sản phẩm]
Th\xe0nh phần sơn phủ fluorocarbon:
Sơn phủ fluorocarbon l\xe0 sơn kh\xf4 tự nhi\xean hai th\xe0nh phần với nhựa fluorocarbon cao cấp v\xe0 nhựa đặc biệt l\xe0m chất tạo m\xe0ng ch\xednh. Do sơn nhựa fluorocarbon c\xf3 nguy\xean tố fluor c\xf3 độ \xe2m điện lớn v\xe0 li\xean kết carbon-fluor mạnh, c\xf3 t\xednh năng đặc biệt vượt trội: chịu thời tiết, chịu nhiệt, chịu nhiệt thấp, chịu h\xf3a chất, cộng th\xeam t\xednh kh\xf4ng d\xednh v\xe0 ma s\xe1t thấp độc đ\xe1o.
Th\xf4ng số kỹ thuật của sơn phủ fluorocarbon:
Ngoại quan m\xe0ng: m\xe0ng nhẵn phẳng, m\xe0u ph\xf9 hợp mẫu chuẩn
Độ mịn: ≤ 20 \xb5m (sơn kim loại v\xe0 sơn mờ kh\xf4ng y\xeau cầu)
Thời gian kh\xf4: 1 lớp độ d\xe0y ti\xeau chuẩn, 25\xb0C; kh\xf4 bề mặt ≤ 2 giờ; kh\xf4 ho\xe0n to\xe0n ≤ 48 giờ
Độ b\xf3ng (60\xb0): b\xf3ng ≥ 90\xb0; mờ: thỏa thuận (20\xb0-80\xb0)
Độ cứng b\xfat ch\xec: ≥ 2H
Độ b\xe1m d\xednh: ≤ 1 (phương ph\xe1p cắt ch\xe9o, cấp)
Thử ch\xecm cốc: ≥ 4 mm
Thử uốn: ≤ 2 mm
Chịu nước: 240 giờ, kh\xf4ng phồng, kh\xf4ng nhăn, kh\xf4ng mất b\xf3ng
Chịu xăng: 24 giờ, kh\xf4ng phồng, kh\xf4ng nhăn, kh\xf4ng mất b\xf3ng
Chịu thời tiết: l\xe3o h\xf3a tăng tốc nh\xe2n tạo 1000 giờ; mất b\xf3ng ≤ 1, phấn h\xf3a ≤ 1, nứt ≤ 1
Phun sơn phủ fluorocarbon:
1. Sơn l\xf3t phải kh\xf4 ho\xe0n to\xe0n; tường kh\xf4ng c\xf3 bụi v\xe0 tạp chất.
2. Tỷ lệ pha thi c\xf4ng: sơn ch\xednh : chất đ\xf3ng rắn : dung m\xf4i pha lo\xe3ng = 10 : 1 : 2.
3. Sơn fluorocarbon sau khi pha phải lọc qua lưới 200 mesh; dung m\xf4i pha lo\xe3ng trong qu\xe1 tr\xecnh để phải khuấy li\xean tục để tr\xe1nh lắng.
4. Model s\xfang phun: W-77; cỡ đầu phun: 1.5-2.0 mm; \xe1p suất bơm kh\xed: 0.3-0.5 MPa.
5. Cần xem x\xe9t phối hợp số người phun, diện t\xedch phun, bề mặt phun v\xe0 ph\xe2n bố s\xe0n treo. Dựa tr\xean điều kiện thực tế của c\xf4ng tr\xecnh, bố tr\xed c\xf4ng nh\xe2n thi c\xf4ng phun đồng thời; trong điều kiện đảm bảo kh\xf4ng chảy, phun c\xe0ng d\xe0y c\xe0ng tốt.
6. Phải l\xe0m tốt c\xf4ng t\xe1c chống bẩn v\xe0 chống độc; ống tho\xe1t nước v.v. phải được bảo vệ; c\xf4ng nh\xe2n n\xean đeo mặt nạ chống độc, găng tay v\xe0 thiết bị bảo vệ kh\xe1c; nghi\xeam cấm mang lửa trống. Phun phải đều, mật độ hợp l\xfd, kh\xf4ng chảy, s\xe1ng tối kh\xf4ng đều, loang m\xe0u, v.v.; cảm gi\xe1c tinh tế, độ b\xf3ng đều, kh\xf4ng vết cạo v\xe0 kh\xf4ng đều.
Tuy\xean bố: Th\xf4ng tin trong t\xe0i liệu n\xe0y dựa ho\xe0n to\xe0n tr\xean kiến thức ph\xf2ng th\xed nghiệm v\xe0 thực tiễn của ch\xfang t\xf4i; do điều kiện sử dụng sản phẩm ngo\xe0i tầm kiểm so\xe1t của ch\xfang t\xf4i, ngo\xe0i chất lượng bản th\xe2n sơn, ch\xfang t\xf4i kh\xf4ng thể đảm bảo bất kỳ điều g\xec. Do sản phẩm v\xe0 quy tr\xecnh sản xuất của c\xf4ng ty kh\xf4ng ngừng ph\xe1t triển, tất cả th\xf4ng tin trong t\xe0i liệu n\xe0y chịu sự x\xe1c nhận của ch\xfang t\xf4i.`,es:`[Resumen del Producto]
Fluorocarbon capa superior composition:
Fluorocarbon capa superior is a de dos componentes air-drying recubrimiento with high-grade fluorocarbono resina and special resina as the main film-forming substances. Because fluorocarbono resina recubrimientos introduce fluorine with high electronegativity and strong carbon-fluorine bond energy, they have particularly superior performance: resistencia climatica, heat resistance, low-temperature resistance, chemical resistance, plus unique non-stick and low-friction properties.
Technical specifications of fluorocarbono capa superior:
Film appearance: smooth and flat film, color matches the standard sample
Fineness: ≤ 20 \xb5m (metallic paint and mate paint not specified)
Drying time: standard thickness single coat, 25\xb0C; surface dry ≤ 2 h, through dry ≤ 48 h
Gloss (60\xb0): brillante ≥ 90\xb0; mate: agreed (20\xb0-80\xb0)
Pencil hardness: ≥ 2H
Adhesion: ≤ 1 (cross-cut method, grade)
Cupping test: ≥ 4 mm
Bending test: ≤ 2 mm
Water resistance: 240 h, no blistering, wrinkling or gloss loss
Gasoline resistance: 24 h, no blistering, wrinkling or gloss loss
Weathering: artificial accelerated aging 1000 h; gloss loss ≤ 1, chalking ≤ 1, cracking ≤ 1
Spraying of fluorocarbono capa superior:
1. The imprimador must be completely dry; the wall must be free of dust and other debris.
2. Application mix ratio: main paint : agente de curado : disolvente = 10 : 1 : 2.
3. The mixed fluorocarbono paint must be filtered through a 200-mesh screen; the disolvente should be stirred continuously during standing to prevent settling.
4. Spray gun model: W-77; nozzle size: 1.5-2.0 mm; air pump pressure: 0.3-0.5 MPa.
5. The coordination of rociadoer count, rociado area, rociado sustrato, and suspended platform distribution should be considered. Based on actual project conditions, arrange construction workers to rociado simultaneously; under the premise of ensuring no sagging, rociado as thick as possible.
6. Anti-contamination and anti-toxicity work should be done well; downpipes etc. should be protected; workers should wear anti-toxicity masks, gloves and other protective equipment; open flame is strictly prohibited. Spraying should be uniform with reasonable density, no sagging, uneven bright/dark, mottling, etc.; the feel should be delicate, gloss uniform, no scraping marks or unevenness.
Disclaimer: The information provided in this document is based entirely on our laboratory and practical knowledge; given that product use conditions are beyond our control, apart from the quality of the paint itself, we cannot guarantee anything. As our company's products and production processes continue to develop, all information herein is subject to our confirmation.`,ar:`[نظرة عامة على المنتج]
Fluorocarbon طبقة علوية composition:
Fluorocarbon طبقة علوية is a ثنائي المكون air-drying طلاء with high-grade فلوروكربون راتنج and special راتنج as the main film-forming substances. Because فلوروكربون راتنج طلاءs introduce fluorine with high electronegativity and strong carbon-fluorine bond energy, they have particularly superior performance: مقاومة الطقس, heat resistance, low-temperature resistance, chemical resistance, plus unique non-stick and low-friction properties.
Technical specifications of فلوروكربون طبقة علوية:
Film appearance: smooth and flat film, لون matches the standard sample
Fineness: ≤ 20 \xb5m (metallic paint and غير لامع paint not specified)
Drying time: standard thickness single coat, 25\xb0C; surface dry ≤ 2 h, through dry ≤ 48 h
Gloss (60\xb0): لامع ≥ 90\xb0; غير لامع: agreed (20\xb0-80\xb0)
Pencil hardness: ≥ 2H
Adhesion: ≤ 1 (cross-cut method, grade)
Cupping test: ≥ 4 mm
Bending test: ≤ 2 mm
Water resistance: 240 h, no blistering, wrinkling or gloss loss
Gasoline resistance: 24 h, no blistering, wrinkling or gloss loss
Weathering: artificial accelerated aging 1000 h; gloss loss ≤ 1, chalking ≤ 1, cracking ≤ 1
Spraying of فلوروكربون طبقة علوية:
1. The برايمر must be completely dry; the wall must be free of dust and other debris.
2. Application mix ratio: main paint : عامل المعالجة : مخفف = 10 : 1 : 2.
3. The mixed فلوروكربون paint must be filtered through a 200-mesh screen; the مخفف should be stirred continuously during standing to prevent settling.
4. Spray gun model: W-77; nozzle size: 1.5-2.0 mm; air pump pressure: 0.3-0.5 MPa.
5. The coordination of رشer count, رش area, رش ركيزة, and suspended platform distribution should be considered. Based on actual project conditions, arrange construction workers to رش simultaneously; under the premise of ensuring no sagging, رش as thick as possible.
6. Anti-contamination and anti-toxicity work should be done well; downpipes etc. should be protected; workers should wear anti-toxicity masks, gloves and other protective equipment; open flame is strictly prohibited. Spraying should be uniform with reasonable density, no sagging, uneven bright/dark, mottling, etc.; the feel should be delicate, gloss uniform, no scraping marks or unevenness.
Disclaimer: The information provided in this document is based entirely on our laboratory and practical knowledge; given that product use conditions are beyond our control, apart from the quality of the paint itself, we cannot guarantee anything. As our company's products and production processes continue to develop, all information herein is subject to our confirmation.`}},{model:"HN-EX-707",desc:{en:"Water-based fluorocarbon paint / metallic paint — single-component water-based metallic-texture exterior wall paint made from high-quality fluorocarbon emulsion",zh:"水性氟碳漆/金属漆是选用优质氟碳乳液粘制而成的单组份水性金属质感外墙涂料",vi:"Sơn fluorocarbon nước / sơn kim loại — sơn tường ngoài trời hiệu ứng kim loại nước một thành phần từ nhũ tương fluorocarbon chất lượng cao",es:"Pintura de fluorocarbono a base de agua / pintura metálica — pintura de pared exterior de textura metálica de un solo componente hecha de emulsión de fluorocarbono de alta calidad",ar:"دهان fluorocarbonو قائم على الماء / دهان معدني — دهان حائط خارجي ذو ملمس معدني من مكون واحد مصنوع من乳化ة fluorocarbonو عالية الجودة"},details:{en:`[Product Overview]
HONG NGUYEN water-based fluorocarbon paint / metallic paint is a single-component water-based metallic-texture exterior wall paint formulated with high-quality fluorocarbon emulsion. It has the environmental properties of water-based paint and can effectively resist acid, alkali and rain erosion of the paint film, with excellent alkali resistance and color/gloss retention.

[Applications]
Suitable for coating concrete, steel, wood and other building walls with very high decorative and protective requirements.
Base resin: Fluorocarbon emulsion, metallic powder
Color: Solid color, metallic color
Thinning: Add 0-20% water (depending on application method)
Drying time: surface dry ≤ 1 h (25\xb0C, RH ≤ 75%)
Recoat time: ≥ 4 h (25\xb0C, RH ≤ 75%)

[Recommended System]
Primer: water-based fluorocarbon primer / alkali-resistant primer, 8 m\xb2/kg (1 coat)
Mid-coat: water-based fluorocarbon intermediate paint, 8 m\xb2/kg (1 coat) (can be omitted)
Topcoat: water-based fluorocarbon topcoat / water-based fluorocarbon metallic topcoat, 4 m\xb2/kg (2 coats)`,zh:`【产品概述】
HONG NGUYEN(宏源)水性氟碳漆/金属漆是选用优质氟碳乳液粘制而成的单组份水性金属质感外墙涂料，具有水性涂料环保性，同时能有效地抵抗酸、碱、雨水等对漆膜的侵蚀，具有极佳的抗碱性、保色保光性。

【适用范围】
适用于特高要求的装饰和保护的混凝土、钢材、木材等建筑物墙体的涂装。
漆 基： 氟碳乳液、金属粉
颜 色： 实色、金属色。
稀 释： 加水0~20%稀释（根据施工方法而定）。
干燥时间： 表干≤1小时（25℃，相对湿度≤75%）。
重涂时间： ≥4小时（25℃，相对湿度≤75%）。

【建议油漆配套】
底漆：水性氟碳底漆/抗碱底漆，8㎡/Kg(1遍)。
中涂：水性氟碳中间漆，8㎡/Kg(1遍)。（可省去）
面漆：水性氟碳面漆/水性氟碳金属面漆，4㎡/Kg(2遍)。`,vi:`[Tổng quan sản phẩm]
Sơn fluorocarbon nước / sơn kim loại HONG NGUYEN l\xe0 sơn tường ngo\xe0i trời hiệu ứng kim loại nước một th\xe0nh phần phối chế từ nhũ tương fluorocarbon chất lượng cao. C\xf3 t\xednh th\xe2n thiện m\xf4i trường của sơn nước v\xe0 c\xf3 thể chống lại hiệu quả sự ăn m\xf2n axit, kiềm, mưa, v.v. l\xean m\xe0ng sơn, với khả năng chịu kiềm v\xe0 giữ m\xe0u, giữ b\xf3ng ưu việt.

[Ứng dụng]
Ph\xf9 hợp thi c\xf4ng tr\xean tường c\xf4ng tr\xecnh b\xea t\xf4ng, th\xe9p, gỗ, v.v. c\xf3 y\xeau cầu trang tr\xed v\xe0 bảo vệ rất cao.
Nhựa nền: Nhũ tương fluorocarbon, bột kim loại
M\xe0u: M\xe0u đặc, m\xe0u kim loại
Pha lo\xe3ng: Th\xeam 0-20% nước (t\xf9y phương ph\xe1p thi c\xf4ng)
Thời gian kh\xf4: kh\xf4 bề mặt ≤ 1 giờ (25\xb0C, độ ẩm tương đối ≤ 75%)
Thời gian giữa c\xe1c lớp: ≥ 4 giờ (25\xb0C, độ ẩm tương đối ≤ 75%)

[Hệ sơn khuyến nghị]
Sơn l\xf3t: sơn l\xf3t fluorocarbon nước / sơn l\xf3t chống kiềm, 8 m\xb2/kg (1 lớp)
Lớp giữa: sơn lớp giữa fluorocarbon nước, 8 m\xb2/kg (1 lớp) (c\xf3 thể bỏ qua)
Sơn phủ: sơn phủ fluorocarbon nước / sơn phủ kim loại fluorocarbon nước, 4 m\xb2/kg (2 lớp)`,es:`[Resumen del Producto]
HONG NGUYEN base de agua fluorocarbono paint / metallic paint is a single-component base de agua metallic-texture pared exterior paint formulated with high-quality fluorocarbono emulsion. It has the environmental properties of base de agua paint and can effectively resist acid, alkali and rain erosion of the pelicula de pintura, with excellent alkali resistance and color/retencion de brillo.

[Aplicaciones]
Suitable for recubrimiento concreto, acero, wood and other building walls with very high decorative and protective requirements.
Base resina: Fluorocarbon emulsion, metallic powder
Color: Solid color, metallic color
Thinning: Add 0-20% water (depending on application method)
Drying time: surface dry ≤ 1 h (25\xb0C, RH ≤ 75%)
Recoat time: ≥ 4 h (25\xb0C, RH ≤ 75%)

[Sistema Recomendado]
Primer: base de agua fluorocarbono imprimador / alkali-resistant imprimador, 8 m\xb2/kg (1 coat)
Mid-coat: base de agua fluorocarbono intermediate paint, 8 m\xb2/kg (1 coat) (can be omitted)
Topcoat: base de agua fluorocarbono capa superior / base de agua fluorocarbono metallic capa superior, 4 m\xb2/kg (2 coats)`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN أساس مائي فلوروكربون paint / metallic paint is a single-component أساس مائي metallic-texture جدار خارجي paint formulated with high-quality فلوروكربون مستحلب. It has the environmental properties of أساس مائي paint and can effectively resist acid, alkali and rain erosion of the غشاء الطلاء, with excellent alkali resistance and لون/الحفاظ على اللمعان.

[التطبيقات]
Suitable for طلاء خرسانة, صلب, wood and other building walls with very high decorative and protective requirements.
Base راتنج: Fluorocarbon مستحلب, metallic powder
Color: Solid لون, metallic لون
Thinning: Add 0-20% water (depending on application method)
Drying time: surface dry ≤ 1 h (25\xb0C, RH ≤ 75%)
Recoat time: ≥ 4 h (25\xb0C, RH ≤ 75%)

[النظام الموصى به]
Primer: أساس مائي فلوروكربون برايمر / alkali-resistant برايمر, 8 m\xb2/kg (1 coat)
Mid-coat: أساس مائي فلوروكربون intermediate paint, 8 m\xb2/kg (1 coat) (can be omitted)
Topcoat: أساس مائي فلوروكربون طبقة علوية / أساس مائي فلوروكربون metallic طبقة علوية, 4 m\xb2/kg (2 coats)`}}],image:"/images/product-exterior.jpg",applications:[{en:"High-rise commercial facades & stadiums",zh:"高层商业外墙与体育场",vi:"Mặt tiền cao tầng & sân vận động",es:"Fachadas comerciales de rascacielos y estadios",ar:"واجهات المباني التجارية الشاهقة والملاعب"},{en:"Airports & metal roofing",zh:"机场与金属屋面",vi:"Sân bay & mái kim loại",es:"Aeropuertos y techos metálicos",ar:"المطارات والأسقف المعدنية"},{en:"Curtain walls & coastal villas",zh:"幕墙与沿海别墅",vi:"Vách kính & biệt thự biển",es:"Muros cortina y villas costeras",ar:"جدران ستائرية وفيلاس ساحلية"},{en:"Industrial parks & container surfaces",zh:"工业园与集装箱表面",vi:"Khu công nghiệp & bề mặt container",es:"Parques industriales y superficies de contenedores",ar:"المصانع الصناعية وسطح الحاويات"}]},{code:"CAT-05",title:{en:"Architectural Wall Coatings",zh:"建筑工程内外墙漆",vi:"Sơn tường kiến trúc",es:"Recubrimientos arquitectónicos de paredes",ar:"الطلاء المعماري للجدران"},short:{en:"Interior emulsion · Elastic anti-crack · Stone-effect · Fire-retardant",zh:"内墙乳胶·弹性抗裂·仿石·防火",vi:"Nhũ tương · đàn hồi · vân đá · chống cháy",es:"Emulsión interior · Elástico antiagrietamiento · Efecto piedra · Retardante al fuego",ar:"دهان داخلي مرن مضاد للتشققات · ذو تأثير حجري · مقاوم للحريق"},description:{en:"Interior emulsions, exterior elastomerics, stone-effect finishes, and fire-retardant coatings for commercial buildings, schools, hospitals, and public infrastructure. Low-VOC & formaldehyde-free options available.",zh:"内墙乳胶、外墙弹性、仿石饰面及防火阻燃涂料,适用于商业建筑、学校、医院及公共基础设施。可选低 VOC 及零甲醛配方。",vi:"Nhũ tương nội thất, đàn hồi ngoại thất, vân đá và sơn chống cháy cho công trình thương mại, trường học, bệnh viện và hạ tầng công cộng. Có lựa chọn VOC thấp & không formaldehyde."},features:[{en:"Washability ≥ 10,000 cycles",zh:"耐洗刷 ≥ 10,000 次",vi:"Độ rửa ≥ 10,000 lần",es:"Resistencia al lavado ≥ 10,000 ciclos",ar:"متانة غسل ≥ 10,000 دورة"},{en:"VOC < 20 g/L, formaldehyde-free",zh:"VOC < 20 g/L,零甲醛",vi:"VOC < 20 g/L, không formaldehyde",es:"VOC < 20 g/L, sin formaldehído",ar:"مركبات عضوية متطايرة < 20 جم/لتر، خالي من الفورمالدهيد"},{en:"Coverage 8–12 m²/L",zh:"涂布率 8–12 m²/L",vi:"Độ phủ 8–12 m²/L",es:"Cobertura 8–12 m²/L",ar:"التغطية 8-12 م²/لتر"},{en:"Class A fire-retardant option",zh:"可选 A 级防火",vi:"Tùy chọn chống cháy Class A",es:"Opción retardante al fuego Clase A",ar:"خيار مقاوم للحريق من الفئة أ"}],specs:[{label:{en:"Type",zh:"类型",vi:"Loại",es:"Tipo",ar:"نوع"},value:"Emulsion / Elastic / Texture"},{label:{en:"Fire Rating",zh:"防火等级",vi:"Cấp cháy",es:"Clasificación contra incendios",ar:"مقاومة للحريق"},value:"Class A"},{label:{en:"VOC",zh:"VOC",vi:"VOC",es:"VOC",ar:"مركبات عضوية متطايرة (VOC)"},value:"< 20 g/L"},{label:{en:"Coverage",zh:"涂布率",vi:"Độ phủ",es:"Cobertura",ar:"التغطية"},value:"8 – 12 m²/L"}],categorySpecs:[{label:{en:"Washability",zh:"耐洗刷",vi:"Độ rửa",es:"Resistencia al lavado",ar:"متانة الغسل"},value:"≥10,000x"},{label:{en:"VOC",zh:"VOC",vi:"VOC",es:"VOC",ar:"مركبات عضوية متطايرة (VOC)"},value:"<20 g/L"},{label:{en:"Coverage",zh:"涂布率",vi:"Độ phủ",es:"Cobertura",ar:"التغطية"},value:"8–12 m²/L"},{label:{en:"Fire Rating",zh:"防火等级",vi:"Cấp cháy",es:"Clasificación contra incendios",ar:"مقاومة للحريق"},value:"Class A"}],models:[{model:"HN-AR-801",desc:{en:"Anti-formaldehyde odorless wall paint — high-grade high-quality water-based matte interior wall latex paint",zh:"抗甲醛净味墙面漆是高档日勺优质水性哑光内墙乳胶漆",vi:"Sơn tường khử mùi kháng formaldehyde — sơn latex tường trong nhà mờ nước cao cấp chất lượng cao",es:"Pintura de pared sin olor de formaldehído — látex mate de agua de alta calidad para interiores",ar:"دهان جدران عديم الرائحة — دهان مائي عالي الجودة للجدران الداخلية"},details:{en:`[Product Overview]
HONG NGUYEN anti-formaldehyde odorless wall paint is a high-grade, high-quality water-based matte interior wall latex paint with rich colors and lasting durability. It features strong coverage, excellent adhesion, premium anti-mold performance, good alkali resistance, excellent application performance and washability. The product contains no lead or mercury and has reliable safety.

[Applications]
Decorative and protective coating for interior base walls such as plaster and gypsum board surfaces.

[Physical Parameters]
Main components: Lead-free pigments, acrylic copolymer, water, additives.
Solid volume content: White 32% (nominal); other colors may vary.
Drying time: standard thickness single coat (25\xb0C, 50% RH); tack-free 0.5-1 h
Recoat: 2-3 h (drying time varies with temperature and humidity)
Film thickness: wet film 80 \xb5m; dry film 25 \xb5m
Color: See HONG NGUYEN wall paint color card.
Gloss: Matte

[Application Guide]
Theoretical coverage: Theoretically, 1 liter of this product covers 12 m\xb2 per coat. Actual coverage varies depending on application method and surface roughness.
Application tools: brush, roller, conventional spray or airless spray.
Thinning: Depending on application difficulty and temperature, an appropriate amount of clean water can be added; thinning ratio not to exceed 20%.
Brush or roller: Usually add 1 part water to 5-10 parts paint (10-20%). Most equipment achieves satisfactory results.
Conventional spray: Usually add 1 part water to 5-10 parts paint (10-20%).
Airless spray: Generally no water is recommended. Typical airless spray setup: minimum working pressure 140 kg/cm\xb2 (2000 psi), nozzle size 0.58 mm (23 mils), nozzle angle 65\xb0.
Cleaning: Rinse with clean water immediately after use.
Application notes: Do not apply when substrate temperature is below 10\xb0C or ambient humidity exceeds 85%. Dark color topcoat may require more coats. Refer to HONG NGUYEN's application guide. Store in a cool, dry place, protected from frost.

[Recommended System]
I. Highly alkaline substrates
Primer: HONG NGUYEN alkali-resistant primer D002-02A (1 coat)
Topcoat: HONG NGUYEN anti-formaldehyde odorless wall paint D821 (2 coats)
II. Normal substrates
Primer: HONG NGUYEN primer D002-02B (1 coat)
Topcoat: HONG NGUYEN anti-formaldehyde odorless wall paint D821 (2 coats)
Surface preparation: The surface to be painted must be completely free of grease, dust and loose material; new walls must be fully dry. Unpainted wood or iron metal should first be primed with an appropriate primer.
III. New walls
1. Newly built concrete walls must cure for 30 days before putty application.
2. Putty should not be too soft; after the putty is fully dry, sand smooth with fine sandpaper and remove dust.
3. For best results, first apply 1 coat of HONG NGUYEN alkali-resistant primer D002-02A or HONG NGUYEN primer D002-02B.
IV. Old walls
1. When recoating previously painted old walls, scrape off with a putty knife and sand with sandpaper, then remove dust to clear loose material and peeling paint film.
2. Fill wall defects with appropriate putty.
3. On properly treated surfaces, first apply 1 coat of HONG NGUYEN primer D002-02B for best results.
V. Moldy walls
1. Scrape off with a putty knife and sand with sandpaper to remove mold traces.
2. Brush 1 coat of appropriate mold-wash solution and rinse promptly with clean water; allow to fully dry.
3. For best results, first apply 1 coat of HONG NGUYEN primer D002-02B.
Usage recommendations
1. Read the instructions before application.
2. Stir the paint thoroughly in the can after opening.
3. Add an appropriate amount of water according to the instructions if needed. Do not over-thin.
4. Avoid overloading the brush or roller with paint during application.
5. Do not pour thinned paint back into the original packaging.
6. Use opened product as soon as possible.`,zh:`【产品概述】
宏源抗甲醛净味墙面漆是高档日勺优质水性哑光内墙乳胶漆，色彩丰富，经久耐用。具有遮盖力强、附藿力佳、优质防霉、良好的抗喊性、优良的施工性能、可擦洗的优点。本品不添加铅和汞，具有可靠的安全性.

【适用范围】
装饰及义保护室内基层墙面，如抹灰面，石膏板面等.

【物理参数】
主要成分：无铝颜料，丙烯酸其聚物，水，添加剂。
体积固体分：白色：32％(标称）；其它颜色会有卢斤不同.
干燥时间：标准厚度的单涂层（25℃ 50％相对湿度下)指触干0.5-1小时
重涂：2-3小时（干燥时间会随温度和湿度的变化而变化。）
漆膜厚度：湿膜80\xb5m；干膜25\xb5m
颜色：参见宏源墙面漆色卡。
光泽：哑光

【施工说明】
理论涂刷面积：理论上， 1升该产品可以涂刷12平方米每层。实际涂刷而积会因施工方法及表面粗糙程度不同而不同.
施工工具：漆刷、滚筒、普通喷涂或无气喷涂。
稀释方法：视施工的难易程度和温度不同可适量用清水稀释，稀释度不超过20％。
漆刷或滚筒：通常加1份水到5-10份油漆中。(10-20％)。大部分设备都可以达到满意的效果。
普通喷涂：通常加1份水到5-10份油漆中(10-20％)。
无气喷涂：通常不建议加水。典型的无气喷涂设置为最小工作压力140公斤每平方厘米（2000磅每平方英寸），喷嘴尺寸0.58牵米
（23周），喷嘴角度65度。
清洗：便用后请立即用清水洗净.
施工注意事项：基底温度低于10℃或环境湿度大于85％时请勿施工.深颜色面漆涂布层数赌所増加。具体请参照宏源的施工指南，储存于阴凉干燥的地方，严防霜冻。

【建议油漆配套】
―、滅性较大的基面
底漆：宏源抗碱底漆D002-02A(1层）
面漆：宏源抗甲醛净味墙面漆D821(2层）
二、普通基面
底漆：宏源底漆D002-02B(1层）
面漆：宏源抗甲醛净味墙面漆D821(2层）
表面处理；要上漆的表面要全无油脂、尘污和松散物质，新造的墙壁需充分干透。未上漆自勺木材或铁会属应先作适当的底漆处理。
三、新墙
1、新建的混凝土墙壁必须干结30天后才可批腻子.
2、腻子切勿太松软，待腻子干透后，用细砂纸磨平，除尘。
3、宜先刷一遍宏源抗碱底漆D002-02A或宏源底漆0C2-02B以获得最佳效果。
四、旧墙
1、粉刷过的日墙面重涂时请胃铲刀铲除并砂纸打磨后除尘以清除松浮物质和松脱的漆胰
2、用适当的腻子填补墙体缺陷。
3、经怡当处理的基面宜先刷一遍多美丽底漆D002-02B以获得最佳效果^
五、发霉墙面
1、用铲刀铲除并用砂纸打磨除去霉迹。
2、用适当的洗霉水刷1遍，并及时用清水洗净，待干透。
3、宜先刷一遍宏源底漆亡D002-02B以获得最佳效果。
使用建议
1、施工前先阅读使用说明。
2、开罐后充分搅拌罐内油漆。
3、如有需要可按照说明加入适置的水。切勿过量稀释。
4、施工时避免让漆刷或滚筒沾上吋霣油漆。
5、已稀释的油漆不要倒回原包装内。
6、请尽快用完开罐的产品。`,vi:`[Tổng quan sản phẩm]
Sơn tường khử m\xf9i kh\xe1ng formaldehyde HONG NGUYEN l\xe0 sơn latex tường trong nh\xe0 mờ nước cao cấp chất lượng cao, m\xe0u phong ph\xfa, bền bỉ. C\xf3 khả năng che phủ mạnh, b\xe1m d\xednh tốt, chống nấm mốc cao cấp, chịu kiềm tốt, thi c\xf4ng ưu việt v\xe0 c\xf3 thể lau rửa. Sản phẩm kh\xf4ng th\xeam ch\xec v\xe0 thủy ng\xe2n, an to\xe0n đ\xe1ng tin cậy.

[Ứng dụng]
Trang tr\xed v\xe0 bảo vệ bề mặt tường nền trong nh\xe0 như bề mặt vữa tr\xe1t, thạch cao, v.v.

[Th\xf4ng số vật l\xfd]
Th\xe0nh phần ch\xednh: Pigment kh\xf4ng ch\xec, copolymer acrylic, nước, phụ gia.
H\xe0m lượng rắn thể t\xedch: Trắng 32% (danh nghĩa); c\xe1c m\xe0u kh\xe1c c\xf3 thể kh\xe1c.
Thời gian kh\xf4: 1 lớp độ d\xe0y ti\xeau chuẩn (25\xb0C, 50% RH); kh\xf4ng d\xednh 0.5-1 giờ
Sơn lại: 2-3 giờ (thời gian kh\xf4 thay đổi theo nhiệt độ v\xe0 độ ẩm)
Độ d\xe0y m\xe0ng: m\xe0ng ướt 80 \xb5m; m\xe0ng kh\xf4 25 \xb5m
M\xe0u: Xem bảng m\xe0u sơn tường HONG NGUYEN.
Độ b\xf3ng: Mờ

[Hướng dẫn thi c\xf4ng]
Lượng lan l\xfd thuyết: L\xfd thuyết 1 l\xedt sản phẩm c\xf3 thể sơn 12 m\xb2 mỗi lớp. Lượng thực tế thay đổi t\xf9y phương ph\xe1p thi c\xf4ng v\xe0 độ nh\xe1m bề mặt.
Dụng cụ thi c\xf4ng: cọ, con lăn, phun thường hoặc phun kh\xf4ng kh\xed.
Pha lo\xe3ng: T\xf9y độ kh\xf3 thi c\xf4ng v\xe0 nhiệt độ c\xf3 thể pha th\xeam lượng nước sạch ph\xf9 hợp, tỷ lệ pha kh\xf4ng qu\xe1 20%.
Cọ hoặc con lăn: Thường th\xeam 1 phần nước v\xe0o 5-10 phần sơn (10-20%). Hầu hết thiết bị đạt hiệu quả h\xe0i l\xf2ng.
Phun thường: Thường th\xeam 1 phần nước v\xe0o 5-10 phần sơn (10-20%).
Phun kh\xf4ng kh\xed: Thường kh\xf4ng khuyến nghị pha nước. Thiết lập phun kh\xf4ng kh\xed điển h\xecnh: \xe1p suất l\xe0m việc tối thiểu 140 kg/cm\xb2 (2000 psi), cỡ đầu phun 0.58 mm (23 mils), g\xf3c đầu phun 65\xb0.
Vệ sinh: Rửa ngay bằng nước sạch sau khi sử dụng.
Lưu \xfd thi c\xf4ng: Kh\xf4ng thi c\xf4ng khi nhiệt độ bề mặt dưới 10\xb0C hoặc độ ẩm m\xf4i trường qu\xe1 85%. Sơn phủ m\xe0u tối c\xf3 thể cần th\xeam lớp. Tham khảo hướng dẫn thi c\xf4ng HONG NGUYEN. Bảo quản nơi m\xe1t kh\xf4, tr\xe1nh đ\xf3ng băng.

[Hệ sơn khuyến nghị]
I. Bề mặt kiềm cao
Sơn l\xf3t: Sơn l\xf3t chống kiềm HONG NGUYEN D002-02A (1 lớp)
Sơn phủ: Sơn tường khử m\xf9i kh\xe1ng formaldehyde HONG NGUYEN D821 (2 lớp)
II. Bề mặt thường
Sơn l\xf3t: Sơn l\xf3t HONG NGUYEN D002-02B (1 lớp)
Sơn phủ: Sơn tường khử m\xf9i kh\xe1ng formaldehyde HONG NGUYEN D821 (2 lớp)
Chuẩn bị bề mặt: Bề mặt cần sơn phải ho\xe0n to\xe0n kh\xf4ng c\xf3 dầu mỡ, bụi bẩn v\xe0 vật liệu bong tr\xf3c; tường mới phải kh\xf4 ho\xe0n to\xe0n. Gỗ hoặc sắt chưa sơn n\xean sơn l\xf3t ph\xf9 hợp trước.
III. Tường mới
1. Tường b\xea t\xf4ng mới x\xe2y phải đ\xf3ng rắn 30 ng\xe0y mới được b\xf9 tảng.
2. B\xf9 tảng kh\xf4ng n\xean qu\xe1 mềm; sau khi b\xf9 tảng kh\xf4 ho\xe0n to\xe0n, ch\xe0 nh\xe1m mịn v\xe0 loại bỏ bụi.
3. Để đạt hiệu quả tốt nhất, sơn trước 1 lớp sơn l\xf3t chống kiềm HONG NGUYEN D002-02A hoặc sơn l\xf3t HONG NGUYEN D002-02B.
IV. Tường cũ
1. Khi sơn lại tường cũ đ\xe3 sơn, d\xf9ng dao cạo cạo bỏ v\xe0 ch\xe0 nh\xe1m, sau đ\xf3 loại bỏ bụi để l\xe0m sạch vật liệu bong tr\xf3c v\xe0 m\xe0ng sơn bong.
2. D\xf9ng b\xf9 tảng ph\xf9 hợp điền v\xe0o khuyết tật tường.
3. Tr\xean bề mặt đ\xe3 xử l\xfd ph\xf9 hợp, sơn trước 1 lớp sơn l\xf3t HONG NGUYEN D002-02B để đạt hiệu quả tốt nhất.
V. Tường nấm mốc
1. D\xf9ng dao cạo v\xe0 ch\xe0 nh\xe1m để loại bỏ vết nấm mốc.
2. Qu\xe9t 1 lớp dung dịch rửa nấm mốc ph\xf9 hợp v\xe0 rửa ngay bằng nước sạch; để kh\xf4 ho\xe0n to\xe0n.
3. Để đạt hiệu quả tốt nhất, sơn trước 1 lớp sơn l\xf3t HONG NGUYEN D002-02B.
Khuyến nghị sử dụng
1. Đọc hướng dẫn sử dụng trước khi thi c\xf4ng.
2. Khuấy đều sơn trong th\xf9ng sau khi mở.
3. Th\xeam lượng nước ph\xf9 hợp theo hướng dẫn nếu cần. Kh\xf4ng pha lo\xe3ng qu\xe1 mức.
4. Tr\xe1nh để cọ hoặc con lăn chứa qu\xe1 nhiều sơn khi thi c\xf4ng.
5. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng trở lại bao b\xec gốc.
6. Sử dụng sản phẩm đ\xe3 mở c\xe0ng sớm c\xe0ng tốt.`,es:`[Resumen del Producto]
HONG NGUYEN anti-formaldehido sin olor wall paint is a high-grade, high-quality base de agua mate pared interior latex paint with rich colors and lasting durability. It features strong coverage, excellent adhesion, premium anti-mold performance, good alkali resistance, excellent application performance and washability. The product contains no lead or mercury and has reliable safety.

[Aplicaciones]
Decorative and protective recubrimiento for interior base walls such as plaster and gypsum board surfaces.

[Parametros Fisicos]
Main components: Lead-free pigmentos, acrilico copolymer, water, aditivos.
Solid volume content: White 32% (nominal); other colors may vary.
Drying time: standard thickness single coat (25\xb0C, 50% RH); tack-free 0.5-1 h
Recoat: 2-3 h (tiempo de secado varies with temperature and humidity)
Film thickness: wet film 80 \xb5m; dry film 25 \xb5m
Color: See HONG NGUYEN wall paint color card.
Gloss: Matte

[Guia de Aplicacion]
Theoretical coverage: Theoretically, 1 liter of this product covers 12 m\xb2 per coat. Actual coverage varies depending on application method and surface roughness.
Application tools: brocha, rodillo, conventional rociado or airless rociado.
Thinning: Depending on application difficulty and temperature, an appropriate amount of clean water can be added; thinning ratio not to exceed 20%.
Brush or rodillo: Usually add 1 part water to 5-10 parts paint (10-20%). Most equipment achieves satisfactory results.
Conventional rociado: Usually add 1 part water to 5-10 parts paint (10-20%).
Airless rociado: Generally no water is recommended. Typical airless rociado setup: minimum working pressure 140 kg/cm\xb2 (2000 psi), nozzle size 0.58 mm (23 mils), nozzle angle 65\xb0.
Cleaning: Rinse with clean water immediately after use.
Application notes: Do not apply when sustrato temperature is below 10\xb0C or ambient humidity exceeds 85%. Dark color capa superior may require more coats. Refer to HONG NGUYEN's application guide. Store in a cool, dry place, protected from frost.

[Sistema Recomendado]
I. Highly alkaline sustratos
Primer: HONG NGUYEN alkali-resistant imprimador D002-02A (1 coat)
Topcoat: HONG NGUYEN anti-formaldehido sin olor wall paint D821 (2 coats)
II. Normal sustratos
Primer: HONG NGUYEN imprimador D002-02B (1 coat)
Topcoat: HONG NGUYEN anti-formaldehido sin olor wall paint D821 (2 coats)
Surface preparation: The surface to be painted must be completely free of grease, dust and loose material; new walls must be fully dry. Unpainted wood or iron metal should first be primed with an appropriate imprimador.
III. New walls
1. Newly built concreto walls must cure for 30 days before putty application.
2. Putty should not be too soft; after the putty is fully dry, sand smooth with fine sandpaper and remove dust.
3. For best results, first apply 1 coat of HONG NGUYEN alkali-resistant imprimador D002-02A or HONG NGUYEN imprimador D002-02B.
IV. Old walls
1. When rerecubrimiento previously painted old walls, scrape off with a putty knife and sand with sandpaper, then remove dust to clear loose material and peeling pelicula de pintura.
2. Fill wall defects with appropriate putty.
3. On properly treated surfaces, first apply 1 coat of HONG NGUYEN imprimador D002-02B for best results.
V. Moldy walls
1. Scrape off with a putty knife and sand with sandpaper to remove mold traces.
2. Brush 1 coat of appropriate mold-wash solution and rinse promptly with clean water; allow to fully dry.
3. For best results, first apply 1 coat of HONG NGUYEN imprimador D002-02B.
Usage recommendations
1. Read the instructions before application.
2. Stir the paint thoroughly in the can after opening.
3. Add an appropriate amount of water according to the instructions if needed. Do not over-thin.
4. Avoid overloading the brocha or rodillo with paint during application.
5. Do not pour thinned paint back into the original envasado.
6. Use opened product as soon as possible.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN anti-فورمالديهايد عديم الرائحة wall paint is a high-grade, high-quality أساس مائي غير لامع جدار داخلي latex paint with rich لونs and lasting durability. It features strong coverage, excellent التصاق, فاخر anti-mold performance, good alkali resistance, excellent application performance and washability. The product contains no lead or mercury and has reliable safety.

[التطبيقات]
Decorative and protective طلاء for interior base walls such as plaster and gypsum board surfaces.

[المعلمات الفيزيائية]
Main components: Lead-free صبغةs, أكريليك copolymer, water, إضافات.
Solid volume content: White 32% (nominal); other لونs may vary.
Drying time: standard thickness single coat (25\xb0C, 50% RH); tack-free 0.5-1 h
Recoat: 2-3 h (وقت التجفيف varies with temperature and humidity)
Film thickness: wet film 80 \xb5m; dry film 25 \xb5m
Color: See HONG NGUYEN wall paint لون card.
Gloss: Matte

[دليل التطبيق]
Theoretical coverage: Theoretically, 1 liter of this product covers 12 m\xb2 per coat. Actual coverage varies depending on application method and surface roughness.
Application tools: فرشاة, أسطوانة, conventional رش or airless رش.
Thinning: Depending on application difficulty and temperature, an appropriate amount of clean water can be added; thinning ratio not to exceed 20%.
Brush or أسطوانة: Usually add 1 part water to 5-10 parts paint (10-20%). Most equipment achieves satisfactory results.
Conventional رش: Usually add 1 part water to 5-10 parts paint (10-20%).
Airless رش: Generally no water is recommended. Typical airless رش setup: minimum working pressure 140 kg/cm\xb2 (2000 psi), nozzle size 0.58 mm (23 mils), nozzle angle 65\xb0.
Cleaning: Rinse with clean water immediately after use.
Application notes: Do not apply when ركيزة temperature is below 10\xb0C or ambient humidity exceeds 85%. Dark لون طبقة علوية may require more coats. Refer to HONG NGUYEN's application guide. Store in a cool, dry place, protected from frost.

[النظام الموصى به]
I. Highly alkaline ركيزةs
Primer: HONG NGUYEN alkali-resistant برايمر D002-02A (1 coat)
Topcoat: HONG NGUYEN anti-فورمالديهايد عديم الرائحة wall paint D821 (2 coats)
II. Normal ركيزةs
Primer: HONG NGUYEN برايمر D002-02B (1 coat)
Topcoat: HONG NGUYEN anti-فورمالديهايد عديم الرائحة wall paint D821 (2 coats)
Surface preparation: The surface to be painted must be completely free of grease, dust and loose material; new walls must be fully dry. Unpainted wood or iron metal should first be primed with an appropriate برايمر.
III. New walls
1. Newly built خرسانة walls must cure for 30 days before putty application.
2. Putty should not be too soft; after the putty is fully dry, sand smooth with fine sandpaper and remove dust.
3. For best results, first apply 1 coat of HONG NGUYEN alkali-resistant برايمر D002-02A or HONG NGUYEN برايمر D002-02B.
IV. Old walls
1. When reطلاء previously painted old walls, scrape off with a putty knife and sand with sandpaper, then remove dust to clear loose material and peeling غشاء الطلاء.
2. Fill wall defects with appropriate putty.
3. On properly treated surfaces, first apply 1 coat of HONG NGUYEN برايمر D002-02B for best results.
V. Moldy walls
1. Scrape off with a putty knife and sand with sandpaper to remove mold traces.
2. Brush 1 coat of appropriate mold-wash solution and rinse promptly with clean water; allow to fully dry.
3. For best results, first apply 1 coat of HONG NGUYEN برايمر D002-02B.
Usage recommendations
1. Read the instructions before application.
2. Stir the paint thoroughly in the can after opening.
3. Add an appropriate amount of water according to the instructions if needed. Do not over-thin.
4. Avoid overloading the فرشاة or أسطوانة with paint during application.
5. Do not pour thinned paint back into the original التعبئة.
6. Use opened product as soon as possible.`}},{model:"HN-AR-802",desc:{en:"Gold-grade premium weather-resistant exterior paint — composed of pure acrylic emulsion, pigments/fillers and additives",zh:"金装特级耐候外墙漆由纯丙乳液、颜填料和助剂组成",vi:"Sơn ngoại thất cao cấp vàng chịu thời tiết — gồm nhũ tương acrylic tinh khiết, pigment/chất độn và phụ gia",es:"Pintura exterior resistente a la intemperie de grado premium — compuesta de emulsión acrílica pura, pigmentos/cargas y aditivos",ar:"طلاء خارجي مقاوم للطقس من الدرجة الذهبية — مصنوع من إمولسيون أكريlique نقية وأصباغ ومواد مضافة"},details:{en:`[Product Overview]
HONG NGUYEN gold-grade premium weather-resistant exterior paint is composed of pure acrylic emulsion, pigments/fillers and additives. The paint film has excellent weather resistance, strong adhesion and very good water and alkali resistance, with outstanding anti-mold performance. Used together with HONG NGUYEN sealer or putty, it provides excellent intercoat adhesion and protective performance.

[Applications]
Can be applied on cement mortar, plaster, cement asbestos board, concrete and other surfaces, or as a topcoat over HONG NGUYEN sealer, relief primer or putty. Suitable for exterior wall decoration.

[Physical Parameters]
Finish and color: Eggshell finish, white (10000) (other colors refer to color card)
Theoretical spreading rate: 11.5 m\xb2/L on flat surfaces; 6.0 m\xb2/L on relief paint (1 coat)
Flash point: None
Specific gravity: 1.25-1.40 kg/L
Solid volume: 37%
Tack-free: 1 h (20\xb0C/68\xb0F, RH 65%)

[Application Guide]
Application method: spray, brush, roller
Thinner: clean water (max volume: 5%)
Tool cleaning: clean water
Film thickness: dry film 32 \xb5m; wet film 87 \xb5m
Recoat interval: min 4 h (20\xb0C/68\xb0F, RH 65%); max unlimited
Surface preparation: The surface to be coated must be fully dry, clean, free of oil and other contaminants; pH must be below 10. The structure should be flat, sound and free of defects. When used as a topcoat over HONG NGUYEN sealer, relief primer or putty, wait until the primer or putty is hard dry before application. For walls with old paint film, remove chalky and peeling paint film and rinse with clean water; allow to dry before application.
Application conditions: Apply under normal good conditions.
Previous coat: HONG NGUYEN sealer, relief primer or putty.`,zh:`【产品概述】
宏源金装特级耐候外墙漆由纯丙乳液、颜填料和助剂组成。该产品漆膜有极好的耐候性，附着力强，并具有很好的耐水、耐碱性，防霉效果极佳。同宏源封闭底漆或腻子配套使用，具有极佳的层问附着力和保护性能。

【适用范围】
可涂于水泥砂浆、灰泥、水泥石棉板、混凝土等表面，或作为宏源封闭底漆、浮雕底漆或腻子的面漆。可用于外墙的装修。

【物理参数】
漆面与色彩：蛋壳光、白色（10000）（其它颜色参考色卡）
理论涂布率：平面上11.5㎡∕L实涂于浮雕漆上6.0㎡∕L(一度)
闪点：无
比重：1.25〜1.40㎏/L
固体体积：37％
指角干：1小时(20℃/68\xb0F,R.H.65％﹚

【施工说明】
施工方法：喷涂、刷涂、滚涂
稀释剂：清水(最大体积：5％)
工具清洗：清水
漆膜厚度：干膜32微米；湿膜：87微米
重涂间隔：最小4小时(20℃/68\xb0F,R.H.65％﹚；最大不限
表面处理：被涂表面必须充分干燥、清洁、无油和其它附着物，ph值必须低于10。结构应平整、坚实、无缺欠。作为宏源封闭底漆、浮雕底漆或腻子的面漆你，应待底漆或腻子硬干后方可涂用。遇有旧漆膜的墙面，应将粉化、剥落的漆膜除去，并用清水冲洗干净，干燥后才可涂用。
施工条件：按照正常的良好条件进行施工。
先涂油漆：宏源封闭底漆、浮雕底漆或腻子。`,vi:`[Tổng quan sản phẩm]
Sơn ngoại thất cao cấp v\xe0ng chịu thời tiết HONG NGUYEN gồm nhũ tương acrylic tinh khiết, pigment/chất độn v\xe0 phụ gia. M\xe0ng sơn c\xf3 khả năng chịu thời tiết ưu việt, b\xe1m d\xednh mạnh v\xe0 chịu nước, chịu kiềm rất tốt, chống nấm mốc xuất sắc. D\xf9ng c\xf9ng sơn l\xf3t h\xe0n k\xedn hoặc b\xf9 tảng HONG NGUYEN, cung cấp độ b\xe1m d\xednh giữa c\xe1c lớp v\xe0 t\xednh bảo vệ ưu việt.

[Ứng dụng]
C\xf3 thể thi c\xf4ng tr\xean vữa xi măng, vữa tr\xe1t, tấm xi măng amiang, b\xea t\xf4ng, v.v., hoặc l\xe0m sơn phủ tr\xean sơn l\xf3t h\xe0n k\xedn HONG NGUYEN, sơn l\xf3t ph\xf9 đi\xeau hoặc b\xf9 tảng. Ph\xf9 hợp trang tr\xed tường ngo\xe0i.

[Th\xf4ng số vật l\xfd]
Bề mặt v\xe0 m\xe0u: Bề mặt vỏ trứng, trắng (10000) (m\xe0u kh\xe1c xem bảng m\xe0u)
Lượng lan l\xfd thuyết: 11.5 m\xb2/L tr\xean bề mặt phẳng; 6.0 m\xb2/L tr\xean sơn ph\xf9 đi\xeau (1 lớp)
Điểm bắt lửa: Kh\xf4ng
Tỉ trọng: 1.25-1.40 kg/L
Rắn thể t\xedch: 37%
Kh\xf4ng d\xednh: 1 giờ (20\xb0C/68\xb0F, độ ẩm tương đối 65%)

[Hướng dẫn thi c\xf4ng]
Phương ph\xe1p thi c\xf4ng: phun, cọ, con lăn
Dung m\xf4i pha lo\xe3ng: nước sạch (thể t\xedch tối đa: 5%)
Vệ sinh dụng cụ: nước sạch
Độ d\xe0y m\xe0ng: m\xe0ng kh\xf4 32 \xb5m; m\xe0ng ướt 87 \xb5m
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ (20\xb0C/68\xb0F, độ ẩm tương đối 65%); tối đa kh\xf4ng giới hạn
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4 ho\xe0n to\xe0n, sạch, kh\xf4ng dầu mỡ v\xe0 tạp chất kh\xe1c; pH dưới 10. Kết cấu n\xean phẳng, vững chắc, kh\xf4ng khuyết tật. Khi d\xf9ng l\xe0m sơn phủ tr\xean sơn l\xf3t h\xe0n k\xedn HONG NGUYEN, sơn l\xf3t ph\xf9 đi\xeau hoặc b\xf9 tảng, đợi sơn l\xf3t hoặc b\xf9 tảng kh\xf4 cứng mới thi c\xf4ng. Đối với tường c\xf3 m\xe0ng sơn cũ, loại bỏ m\xe0ng sơn phấn h\xf3a, bong tr\xf3c v\xe0 rửa sạch bằng nước; để kh\xf4 mới thi c\xf4ng.
Điều kiện thi c\xf4ng: Thi c\xf4ng trong điều kiện tốt b\xecnh thường.
Lớp trước: Sơn l\xf3t h\xe0n k\xedn HONG NGUYEN, sơn l\xf3t ph\xf9 đi\xeau hoặc b\xf9 tảng.`,es:`[Resumen del Producto]
HONG NGUYEN gold-grade premium weather-resistant exterior paint is composed of pure acrilico emulsion, pigmentos/cargas and aditivos. The pelicula de pintura has excellent resistencia climatica, strong adhesion and very good water and alkali resistance, with outstanding anti-mold performance. Used together with HONG NGUYEN sealer or putty, it provides excellent intercoat adhesion and protective performance.

[Aplicaciones]
Can be applied on cement mortar, plaster, cement asbestos board, concreto and other surfaces, or as a capa superior over HONG NGUYEN sealer, relief imprimador or putty. Suitable for pared exterior decoration.

[Parametros Fisicos]
Finish and color: Eggshell finish, white (10000) (other colors refer to color card)
Theoretical spreading rate: 11.5 m\xb2/L on flat surfaces; 6.0 m\xb2/L on relief paint (1 coat)
Flash point: None
Specific gravity: 1.25-1.40 kg/L
Solid volume: 37%
Tack-free: 1 h (20\xb0C/68\xb0F, RH 65%)

[Guia de Aplicacion]
Application method: rociado, brocha, rodillo
Thinner: clean water (max volume: 5%)
Tool cleaning: clean water
Film thickness: dry film 32 \xb5m; wet film 87 \xb5m
Recoat interval: min 4 h (20\xb0C/68\xb0F, RH 65%); max unlimited
Surface preparation: The surface to be coated must be fully dry, clean, free of oil and other contaminants; pH must be below 10. The structure should be flat, sound and free of defects. When used as a capa superior over HONG NGUYEN sealer, relief imprimador or putty, wait until the imprimador or putty is hard dry before application. For walls with old pelicula de pintura, remove chalky and peeling pelicula de pintura and rinse with clean water; allow to dry before application.
Application conditions: Apply under normal good conditions.
Previous coat: HONG NGUYEN sealer, relief imprimador or putty.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN gold-grade فاخر weather-resistant exterior paint is composed of pure أكريليك مستحلب, صبغةs/حشوةs and إضافات. The غشاء الطلاء has excellent مقاومة الطقس, strong التصاق and very good water and alkali resistance, with outstanding anti-mold performance. Used together with HONG NGUYEN sealer or putty, it provides excellent intercoat التصاق and protective performance.

[التطبيقات]
Can be applied on cement mortar, plaster, cement asbestos board, خرسانة and other surfaces, or as a طبقة علوية over HONG NGUYEN sealer, relief برايمر or putty. Suitable for جدار خارجي decoration.

[المعلمات الفيزيائية]
Finish and لون: Eggshell finish, white (10000) (other لونs refer to لون card)
Theoretical spreading rate: 11.5 m\xb2/L on flat surfaces; 6.0 m\xb2/L on relief paint (1 coat)
Flash point: None
Specific gravity: 1.25-1.40 kg/L
Solid volume: 37%
Tack-free: 1 h (20\xb0C/68\xb0F, RH 65%)

[دليل التطبيق]
Application method: رش, فرشاة, أسطوانة
Thinner: clean water (max volume: 5%)
Tool cleaning: clean water
Film thickness: dry film 32 \xb5m; wet film 87 \xb5m
Recoat interval: min 4 h (20\xb0C/68\xb0F, RH 65%); max unlimited
Surface preparation: The surface to be coated must be fully dry, clean, free of oil and other contaminants; pH must be below 10. The structure should be flat, sound and free of defects. When used as a طبقة علوية over HONG NGUYEN sealer, relief برايمر or putty, wait until the برايمر or putty is hard dry before application. For walls with old غشاء الطلاء, remove chalky and peeling غشاء الطلاء and rinse with clean water; allow to dry before application.
Application conditions: Apply under normal good conditions.
Previous coat: HONG NGUYEN sealer, relief برايمر or putty.`}},{model:"HN-AR-803",desc:{en:"Stone-effect texture — natural granite look, lightweight",zh:"仿石纹理——天然花岗岩效果,轻质",vi:"Vân đá — hiệu ứng đá hoa cương, nhẹ",es:"Textura de efecto piedra — aspecto de granito natural, ligero",ar:"قوام ذو تأثير حجري — مظهر جرانيت طبيعي، خفيف الوزن"}},{model:"HN-AR-804",desc:{en:"Intumescent fire-retardant — 2-hour fire rating, expands under heat",zh:"膨胀型防火——2 小时耐火,遇热膨胀",vi:"Chống cháy nở phồng — cấp 2 giờ, nở khi nhiệt",es:"Retardante al fuego intumescente — clasificación de resistencia al fuego de 2 horas, se expande con el calor",ar:"مقاوم للحريق المتضخم — مقاومة للحريق لمدة ساعتين، يتوسع مع الحرارة"}},{model:"HN-AR-805",desc:{en:"Super nano healthy children's paint — premium wall paint for protecting and beautifying interior walls",zh:"超级纳米健康儿童漆是保护及美化室内墙壁的高贵墙面漆",vi:"Sơn trẻ em nano sức khỏe cao cấp — sơn tường cao cấp bảo vệ và làm đẹp tường trong nhà",es:"Pintura infantil sana de súper nano — pintura de pared premium para proteger y embellecer paredes interiores",ar:"دهان أطفال صحي بالنانو الممتاز — دهان جدران فاخر لحماية وتزيين الجدران الداخلية"},details:{en:`[Product Overview]
HONG NGUYEN super nano healthy children's paint is a premium wall paint for protecting and beautifying interior walls. The paint film is smooth and delicate, with strong coverage and easy cleaning. It features strong coverage, excellent adhesion, premium anti-mold performance, good alkali resistance, high-quality silk-gloss wall finish and strong washability.

[Applications]
Decorative and protective coating for interior base walls such as plaster and gypsum board surfaces.

[Physical Parameters]
Main components: Lead-free pigments, vinyl acetate copolymer, water, additives.
Solid volume content: White 45% (nominal); other colors may vary.
Drying time: standard thickness single coat (25\xb0C, 50% RH); tack-free 0.5-1 h (drying time varies with temperature and humidity)
Recoat: 2-3 h
Film thickness: wet film 80 \xb5m; dry film 28 \xb5m
Color: See HONG NGUYEN wall paint color card.
Gloss: Silk

[Application Guide]
I. Surface preparation: The surface to be painted must be completely free of grease, dust and loose material; new walls must be fully dry. Unpainted wood or iron metal should first be primed with an appropriate primer.
(I) New walls
1. Newly built concrete walls must cure for 30 days before putty application.
2. Putty should not be too soft; after the putty is fully dry, sand smooth with fine sandpaper and remove dust.
3. For best results, first apply 1 coat of HONG NGUYEN alkali-resistant primer or HONG NGUYEN primer.
(II) Old walls
1. When recoating previously painted old walls, scrape off with a putty knife and sand with sandpaper, then remove dust to clear loose material and peeling paint film.
2. Fill wall defects with appropriate putty.
3. On properly treated surfaces, first apply 1 coat of HONG NGUYEN primer for best results.
4. Safety: This product contains no lead or mercury.
5. Storage: Store in a cool, dry place, protected from frost.
(III) Moldy walls
1. Scrape off with a putty knife and sand with sandpaper to remove mold traces; allow to fully dry.
2. Brush 1 coat of appropriate mold-wash solution and rinse promptly with clean water; allow to fully dry.
3. For best results, first apply 1 coat of HONG NGUYEN primer.
II. Usage recommendations
1. Read the instructions before application.
2. Stir the paint thoroughly in the can after opening.
3. Add an appropriate amount of water according to the instructions if needed. Do not over-thin.
4. Avoid overloading the brush or roller with paint during application.
5. Do not pour thinned paint back into the original packaging.
6. Use opened product as soon as possible.
III. Application recommendations
Theoretical coverage: Theoretically 1 liter of this product covers 12 m\xb2 per coat.
Actual coverage: Varies depending on application method and surface roughness.
Application tools: brush, roller, conventional spray or airless spray.
Thinning: Depending on application difficulty and temperature, an appropriate amount of clean water can be added

[Recommended System]
I. Highly alkaline substrates
Primer: HONG NGUYEN alkali-resistant primer (1 coat)
Topcoat: HONG NGUYEN super nano healthy children's paint (2 coats)
II. Normal substrates
Primer: HONG NGUYEN primer (1 coat)
Topcoat: HONG NGUYEN super nano healthy children's paint (2 coats)

[Safety]
1. Paint cans must be tightly closed and kept out of reach of children.
2. Wear an appropriate mask when sanding walls.
3. Ensure good ventilation during use and drying.`,zh:`【产品概述】
宏源超级纳米健康儿童漆是保护及美化室内墙壁的高贵墙面漆。漆膜光滑细腻，逼盖力强，并且容易清洁。具有遮盖力强，附着力佳优质防霉，良好的抗碱性，高质丝光墙面，擦冼性强等优点。

【适用范围】
装饰及保护室内基层墙面，如抹灰面，石膏板面等。

【物理参数】
主要成分：无铅颜料，醋酸乙烯共聚物，水，添加剂。
体积固体分：白色：45％(标称），其它颜色会有所不同。
干燥时间：标准厚度的单涂层〔251 ^ 50处相对湿度下）指触干:0.5-1小时（干燥时间会随温度和湿度的变化而变化。）
重涂：2-3小时
漆膜厚度：湿膜80微米；干膜28微米
颜色：参见宏源墙面漆色卡。
光泽：丝光

【施工说明】
―、表面处理要上漆的表面要全无油脂、尘污和松散物质。新造的墙壁需充分干透。未上漆的木材或铁金属应先作适当的底漆处理。
(―）新墙
1、新建的混凝土墙壁必须干结30天后才可批腻子.
2、腻子切勿太松软，待腻子干透后，用细砂纸磨平，除尘。
3、宜先刷一遍宏源抗碱底漆或宏源底漆以获得最佳效果。
(二）旧墙
1、粉刷过的旧墙面重涂时请用铲刀铲除并砂纸打磨后除尘以清除松浮物质和松脱的漆膜.
2、用适当的腻子埴补墙体缺陷。
3、用恰当处理的基面宜先刷一遍宏源底漆以获得最佳效果。
4、安全性 本品不添加铅和汞。
5、储存存放于阴凉干燥的地方，严防霜冻。
（三)发霉墙面
1、用铲刀铲除并用砂纸打磨除去霉迹，待干透。
2、用适当的洗霉水刷1遍，井及时用清水洗净，待干透。
3、宜先刷一遍宏源底漆以获得最佳效果。
二、使用建议
1、施工前先阅读使用说明。
2、开罐后充分搅拌罐内油漆。
3、如有需要可按照说明加入适置的水。切勿过置稀释。
4、施工时避免让漆刷或滚筒沾上过置油漆。
5、已稀释的油漆不要倒回原包装内。
6、请尽快用完开罐的产品。
三、施工建议
理论涂刷面积：理论上1升该产品可以涂刷12平方米每层。
实际涂刷面积：会因施工方法及表面粗糙程度不同而不同。
施工工具：漆刷、滚筒、普通喷涂或无气喷涂。
稀释方法：视施工的难易程度和温度的不同可适置用清水稀释

【建议油漆配套】
一、碱性较大的基面
底漆：宏源抗碱底漆（1层）
面漆：宏源超级纳米健康儿童漆（2层）
二、普通基面
底漆：宏源底漆（1层）
面漆：宏源超级纳米健康儿童漆（2层）

【安全守则】
1、油漆罐必须盖紧并置于小孩触不着的地方。
2、打磨墙面时应戴上适当的口罩。
3、使用及待干过程中要保证有良好的通风环境。`,vi:`[Tổng quan sản phẩm]
Sơn trẻ em nano sức khỏe cao cấp HONG NGUYEN l\xe0 sơn tường cao cấp bảo vệ v\xe0 l\xe0m đẹp tường trong nh\xe0. M\xe0ng sơn nhẵn mịn, khả năng che phủ mạnh, dễ vệ sinh. C\xf3 khả năng che phủ mạnh, b\xe1m d\xednh tốt, chống nấm mốc cao cấp, chịu kiềm tốt, bề mặt tường b\xf3ng tơ chất lượng cao v\xe0 khả năng lau rửa mạnh.

[Ứng dụng]
Trang tr\xed v\xe0 bảo vệ bề mặt tường nền trong nh\xe0 như bề mặt vữa tr\xe1t, thạch cao, v.v.

[Th\xf4ng số vật l\xfd]
Th\xe0nh phần ch\xednh: Pigment kh\xf4ng ch\xec, copolymer vinyl acetate, nước, phụ gia.
H\xe0m lượng rắn thể t\xedch: Trắng 45% (danh nghĩa); c\xe1c m\xe0u kh\xe1c c\xf3 thể kh\xe1c.
Thời gian kh\xf4: 1 lớp độ d\xe0y ti\xeau chuẩn (25\xb0C, 50% RH); kh\xf4ng d\xednh 0.5-1 giờ (thời gian kh\xf4 thay đổi theo nhiệt độ v\xe0 độ ẩm)
Sơn lại: 2-3 giờ
Độ d\xe0y m\xe0ng: m\xe0ng ướt 80 \xb5m; m\xe0ng kh\xf4 28 \xb5m
M\xe0u: Xem bảng m\xe0u sơn tường HONG NGUYEN.
Độ b\xf3ng: B\xf3ng tơ

[Hướng dẫn thi c\xf4ng]
I. Chuẩn bị bề mặt: Bề mặt cần sơn phải ho\xe0n to\xe0n kh\xf4ng c\xf3 dầu mỡ, bụi bẩn v\xe0 vật liệu bong tr\xf3c; tường mới phải kh\xf4 ho\xe0n to\xe0n. Gỗ hoặc sắt chưa sơn n\xean sơn l\xf3t ph\xf9 hợp trước.
(I) Tường mới
1. Tường b\xea t\xf4ng mới x\xe2y phải đ\xf3ng rắn 30 ng\xe0y mới được b\xf9 tảng.
2. B\xf9 tảng kh\xf4ng n\xean qu\xe1 mềm; sau khi b\xf9 tảng kh\xf4 ho\xe0n to\xe0n, ch\xe0 nh\xe1m mịn v\xe0 loại bỏ bụi.
3. Để đạt hiệu quả tốt nhất, sơn trước 1 lớp sơn l\xf3t chống kiềm HONG NGUYEN hoặc sơn l\xf3t HONG NGUYEN.
(II) Tường cũ
1. Khi sơn lại tường cũ đ\xe3 sơn, d\xf9ng dao cạo cạo bỏ v\xe0 ch\xe0 nh\xe1m, sau đ\xf3 loại bỏ bụi để l\xe0m sạch vật liệu bong tr\xf3c v\xe0 m\xe0ng sơn bong.
2. D\xf9ng b\xf9 tảng ph\xf9 hợp điền v\xe0o khuyết tật tường.
3. Tr\xean bề mặt đ\xe3 xử l\xfd ph\xf9 hợp, sơn trước 1 lớp sơn l\xf3t HONG NGUYEN để đạt hiệu quả tốt nhất.
4. An to\xe0n: Sản phẩm kh\xf4ng th\xeam ch\xec v\xe0 thủy ng\xe2n.
5. Bảo quản: Nơi m\xe1t kh\xf4, tr\xe1nh đ\xf3ng băng.
(III) Tường nấm mốc
1. D\xf9ng dao cạo v\xe0 ch\xe0 nh\xe1m để loại bỏ vết nấm mốc; để kh\xf4 ho\xe0n to\xe0n.
2. Qu\xe9t 1 lớp dung dịch rửa nấm mốc ph\xf9 hợp v\xe0 rửa ngay bằng nước sạch; để kh\xf4 ho\xe0n to\xe0n.
3. Để đạt hiệu quả tốt nhất, sơn trước 1 lớp sơn l\xf3t HONG NGUYEN.
II. Khuyến nghị sử dụng
1. Đọc hướng dẫn sử dụng trước khi thi c\xf4ng.
2. Khuấy đều sơn trong th\xf9ng sau khi mở.
3. Th\xeam lượng nước ph\xf9 hợp theo hướng dẫn nếu cần. Kh\xf4ng pha lo\xe3ng qu\xe1 mức.
4. Tr\xe1nh để cọ hoặc con lăn chứa qu\xe1 nhiều sơn khi thi c\xf4ng.
5. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng trở lại bao b\xec gốc.
6. Sử dụng sản phẩm đ\xe3 mở c\xe0ng sớm c\xe0ng tốt.
III. Khuyến nghị thi c\xf4ng
Lượng lan l\xfd thuyết: L\xfd thuyết 1 l\xedt sản phẩm c\xf3 thể sơn 12 m\xb2 mỗi lớp.
Lượng thực tế: Thay đổi t\xf9y phương ph\xe1p thi c\xf4ng v\xe0 độ nh\xe1m bề mặt.
Dụng cụ thi c\xf4ng: cọ, con lăn, phun thường hoặc phun kh\xf4ng kh\xed.
Pha lo\xe3ng: T\xf9y độ kh\xf3 thi c\xf4ng v\xe0 nhiệt độ c\xf3 thể pha th\xeam lượng nước sạch ph\xf9 hợp

[Hệ sơn khuyến nghị]
I. Bề mặt kiềm cao
Sơn l\xf3t: Sơn l\xf3t chống kiềm HONG NGUYEN (1 lớp)
Sơn phủ: Sơn trẻ em nano sức khỏe cao cấp HONG NGUYEN (2 lớp)
II. Bề mặt thường
Sơn l\xf3t: Sơn l\xf3t HONG NGUYEN (1 lớp)
Sơn phủ: Sơn trẻ em nano sức khỏe cao cấp HONG NGUYEN (2 lớp)

[An to\xe0n]
1. Th\xf9ng sơn phải đ\xf3ng k\xedn v\xe0 để xa tầm tay trẻ em.
2. Đeo khẩu trang ph\xf9 hợp khi ch\xe0 nh\xe1m tường.
3. Đảm bảo th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sấy kh\xf4.`,es:`[Resumen del Producto]
HONG NGUYEN super nano saludable infantil's paint is a premium wall paint for protecting and beautifying pared interiors. The pelicula de pintura is smooth and delicate, with strong coverage and easy cleaning. It features strong coverage, excellent adhesion, premium anti-mold performance, good alkali resistance, high-quality silk-gloss wall finish and strong washability.

[Aplicaciones]
Decorative and protective recubrimiento for interior base walls such as plaster and gypsum board surfaces.

[Parametros Fisicos]
Main components: Lead-free pigmentos, vinyl acetate copolymer, water, aditivos.
Solid volume content: White 45% (nominal); other colors may vary.
Drying time: standard thickness single coat (25\xb0C, 50% RH); tack-free 0.5-1 h (tiempo de secado varies with temperature and humidity)
Recoat: 2-3 h
Film thickness: wet film 80 \xb5m; dry film 28 \xb5m
Color: See HONG NGUYEN wall paint color card.
Gloss: Silk

[Guia de Aplicacion]
I. Surface preparation: The surface to be painted must be completely free of grease, dust and loose material; new walls must be fully dry. Unpainted wood or iron metal should first be primed with an appropriate imprimador.
(I) New walls
1. Newly built concreto walls must cure for 30 days before putty application.
2. Putty should not be too soft; after the putty is fully dry, sand smooth with fine sandpaper and remove dust.
3. For best results, first apply 1 coat of HONG NGUYEN alkali-resistant imprimador or HONG NGUYEN imprimador.
(II) Old walls
1. When rerecubrimiento previously painted old walls, scrape off with a putty knife and sand with sandpaper, then remove dust to clear loose material and peeling pelicula de pintura.
2. Fill wall defects with appropriate putty.
3. On properly treated surfaces, first apply 1 coat of HONG NGUYEN imprimador for best results.
4. Safety: This product contains no lead or mercury.
5. Storage: Store in a cool, dry place, protected from frost.
(III) Moldy walls
1. Scrape off with a putty knife and sand with sandpaper to remove mold traces; allow to fully dry.
2. Brush 1 coat of appropriate mold-wash solution and rinse promptly with clean water; allow to fully dry.
3. For best results, first apply 1 coat of HONG NGUYEN imprimador.
II. Usage recommendations
1. Read the instructions before application.
2. Stir the paint thoroughly in the can after opening.
3. Add an appropriate amount of water according to the instructions if needed. Do not over-thin.
4. Avoid overloading the brocha or rodillo with paint during application.
5. Do not pour thinned paint back into the original envasado.
6. Use opened product as soon as possible.
III. Application recommendations
Theoretical coverage: Theoretically 1 liter of this product covers 12 m\xb2 per coat.
Actual coverage: Varies depending on application method and surface roughness.
Application tools: brocha, rodillo, conventional rociado or airless rociado.
Thinning: Depending on application difficulty and temperature, an appropriate amount of clean water can be added

[Sistema Recomendado]
I. Highly alkaline sustratos
Primer: HONG NGUYEN alkali-resistant imprimador (1 coat)
Topcoat: HONG NGUYEN super nano saludable infantil's paint (2 coats)
II. Normal sustratos
Primer: HONG NGUYEN imprimador (1 coat)
Topcoat: HONG NGUYEN super nano saludable infantil's paint (2 coats)

[Seguridad]
1. Paint cans must be tightly closed and kept out of reach of infantil.
2. Wear an appropriate mask when sanding walls.
3. Ensure good ventilacion during use and drying.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN super نانو صحي أطفال's paint is a فاخر wall paint for protecting and beautifying جدار داخليs. The غشاء الطلاء is smooth and delicate, with strong coverage and easy cleaning. It features strong coverage, excellent التصاق, فاخر anti-mold performance, good alkali resistance, high-quality silk-gloss wall finish and strong washability.

[التطبيقات]
Decorative and protective طلاء for interior base walls such as plaster and gypsum board surfaces.

[المعلمات الفيزيائية]
Main components: Lead-free صبغةs, vinyl acetate copolymer, water, إضافات.
Solid volume content: White 45% (nominal); other لونs may vary.
Drying time: standard thickness single coat (25\xb0C, 50% RH); tack-free 0.5-1 h (وقت التجفيف varies with temperature and humidity)
Recoat: 2-3 h
Film thickness: wet film 80 \xb5m; dry film 28 \xb5m
Color: See HONG NGUYEN wall paint لون card.
Gloss: Silk

[دليل التطبيق]
I. Surface preparation: The surface to be painted must be completely free of grease, dust and loose material; new walls must be fully dry. Unpainted wood or iron metal should first be primed with an appropriate برايمر.
(I) New walls
1. Newly built خرسانة walls must cure for 30 days before putty application.
2. Putty should not be too soft; after the putty is fully dry, sand smooth with fine sandpaper and remove dust.
3. For best results, first apply 1 coat of HONG NGUYEN alkali-resistant برايمر or HONG NGUYEN برايمر.
(II) Old walls
1. When reطلاء previously painted old walls, scrape off with a putty knife and sand with sandpaper, then remove dust to clear loose material and peeling غشاء الطلاء.
2. Fill wall defects with appropriate putty.
3. On properly treated surfaces, first apply 1 coat of HONG NGUYEN برايمر for best results.
4. Safety: This product contains no lead or mercury.
5. Storage: Store in a cool, dry place, protected from frost.
(III) Moldy walls
1. Scrape off with a putty knife and sand with sandpaper to remove mold traces; allow to fully dry.
2. Brush 1 coat of appropriate mold-wash solution and rinse promptly with clean water; allow to fully dry.
3. For best results, first apply 1 coat of HONG NGUYEN برايمر.
II. Usage recommendations
1. Read the instructions before application.
2. Stir the paint thoroughly in the can after opening.
3. Add an appropriate amount of water according to the instructions if needed. Do not over-thin.
4. Avoid overloading the فرشاة or أسطوانة with paint during application.
5. Do not pour thinned paint back into the original التعبئة.
6. Use opened product as soon as possible.
III. Application recommendations
Theoretical coverage: Theoretically 1 liter of this product covers 12 m\xb2 per coat.
Actual coverage: Varies depending on application method and surface roughness.
Application tools: فرشاة, أسطوانة, conventional رش or airless رش.
Thinning: Depending on application difficulty and temperature, an appropriate amount of clean water can be added

[النظام الموصى به]
I. Highly alkaline ركيزةs
Primer: HONG NGUYEN alkali-resistant برايمر (1 coat)
Topcoat: HONG NGUYEN super نانو صحي أطفال's paint (2 coats)
II. Normal ركيزةs
Primer: HONG NGUYEN برايمر (1 coat)
Topcoat: HONG NGUYEN super نانو صحي أطفال's paint (2 coats)

[السلامة]
1. Paint cans must be tightly closed and kept out of reach of أطفال.
2. Wear an appropriate mask when sanding walls.
3. Ensure good تهوية during use and drying.`}},{model:"HN-AR-806",desc:{en:"Oil-based architectural paint — acrylic-based exterior wall paint",zh:"油性建筑涂料是一种丙烯酸基外墙油漆",vi:"Sơn kiến trúc gốc dầu — sơn tường ngoài trời gốc acrylic",es:"Pintura arquitectónica a base de aceite — pintura de pared exterior a base de acrílico",ar:"دهان معماري قائم على الزيت — دهان جدران خارجي قائم على الأكريليك"},details:{en:`[Product Overview]
HONG NGUYEN oil-based architectural paint is an acrylic-based exterior wall paint with good color retention and application performance, providing protection and decoration for interior and exterior walls and concrete surfaces; can also be used as a topcoat in relief coating systems.

[Applications]
Suitable for coating indoor and outdoor concrete and walls; can also be used as a topcoat in anti-corrosion coating systems.
1) Excellent adhesion and water resistance
2) Resists weather changes
3) Resists alkali, mild chemicals, acid rain and mold
4) Easy to apply; can be applied at around -10\xb0C

[Physical Parameters]
Base resin: Acrylic resin
Color: Multiple colors
Finish: Matte
Flash point: 38\xb0C
Specific gravity: 1.4 kg/L
Drying time: surface dry 1 h (25\xb0C/70% RH); hard dry 24 h
Recoat interval: min 4 h, max unlimited
Solid volume content: 50%
Theoretical spreading rate: 10 m\xb2/L (at 50 \xb5m DFT)

[Application Guide]
Surface preparation:
The surface to be coated should first be primed with an appropriate primer; steel plate surfaces should first be primed with an anti-rust primer; concrete surfaces should not be strongly alkaline (pH < 10) and should be primed with an oil-based sealer; the surface to be coated must be clean, dry, free of oil and other contaminants. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN oil-based sealing primer, coverage approx. 0.1 L/m\xb2 (160 m\xb2/drum, 18 L)
Topcoat: 2 coats HONG NGUYEN single-component oil-based exterior wall paint, coverage approx. 0.22 L/m\xb2 (flat), 80 m\xb2/drum (18 L); 0.30 L/m\xb2 (relief), 60 m\xb2/drum (18 L)
Application method: airless spray, brush, roller or conventional spray
Thinner: BTO220 (max by volume): brush and roller 10%, airless spray 10%, conventional spray 15%
Cleaner: BTO222

[Safety]
1) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,zh:`【产品概述】
宏源油性建筑涂料是一种丙烯酸基外墙油漆，具有良好的保色及施工性能，为室内外墙壁、混泥土表面提供保护及装饰作用，也可用作浮雕涂层系统之面漆。

【适用范围】
适合涂装于室内、外混泥土和墙壁，同时亦可用作防腐涂料系统的面漆。
1）附着力佳，耐水性能优异
2）能抵抗天气变化
3）能抵减、温和化学品、酸雨及霉等的侵蚀
4）施工容易，可以在-10℃左右施工

【物理参数】
基 料：丙烯酸树脂
颜 色：多种颜色
漆 面：哑光
闪 点：38℃
比 重:1.4kg/L
干燥时间：表干：1小时（25℃/70%RH）
硬干：24小时
重涂间隔：最小4小时，最大：无限制
固体体积含量：50%
理论涂布率：10㎡/L（以50um干膜计）

【施工说明】
表面处理：
涂装表面应先涂上适当的底漆，钢板表面应先涂上防锈底漆，混凝土表面不应有较强的碱性，ph<10，并要先涂上油性封闭底漆，同时被涂表面必须清洁、干燥、无油污和其它附物。特殊表面的处理方法请向本公司技术部查询特别处理方法。

【建议油漆配套】
底漆：宏源油性封闭底漆涂一遍，参考用量：0.1L/㎡，即160㎡/桶（18L）
面漆：宏源单组份油性外墙面漆涂二遍，参考用量0.22L/㎡（平涂），即80㎡/桶（18L）
0.30L/㎡（浮雕），即60㎡/桶（18L）
施工方法：无气喷涂、刷涂、滚涂或普通喷涂。
稀释剂：BTO220
（最大体积用量）刷涂和滚涂10%，无气喷涂10%，普通喷涂15%
清洗剂：BTO222

【安全守则】
1）施工时必须保持空气流通，并采用一定的防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2）易燃物品，远离火源。在施工范围内不宜吸烟。
3）储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn kiến tr\xfac gốc dầu HONG NGUYEN l\xe0 sơn tường ngo\xe0i trời gốc acrylic c\xf3 khả năng giữ m\xe0u v\xe0 thi c\xf4ng tốt, cung cấp bảo vệ v\xe0 trang tr\xed cho tường trong nh\xe0, ngo\xe0i trời v\xe0 bề mặt b\xea t\xf4ng; cũng c\xf3 thể d\xf9ng l\xe0m sơn phủ trong hệ sơn ph\xf9 đi\xeau.

[Ứng dụng]
Ph\xf9 hợp thi c\xf4ng tr\xean b\xea t\xf4ng v\xe0 tường trong nh\xe0, ngo\xe0i trời; cũng c\xf3 thể d\xf9ng l\xe0m sơn phủ trong hệ sơn chống ăn m\xf2n.
1) B\xe1m d\xednh tốt, chịu nước ưu việt
2) Chịu được biến đổi thời tiết
3) Chịu kiềm, h\xf3a chất nhẹ, mưa axit v\xe0 nấm mốc
4) Dễ thi c\xf4ng, c\xf3 thể thi c\xf4ng ở khoảng -10\xb0C

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa acrylic
M\xe0u: Nhiều m\xe0u
Bề mặt: Mờ
Điểm bắt lửa: 38\xb0C
Tỉ trọng: 1.4 kg/L
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ (25\xb0C/70% RH); kh\xf4 cứng 24 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa kh\xf4ng giới hạn
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 50 \xb5m)

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt:
Bề mặt cần sơn n\xean sơn l\xf3t ph\xf9 hợp trước; bề mặt tấm th\xe9p n\xean sơn l\xf3t chống rỉ; bề mặt b\xea t\xf4ng kh\xf4ng được qu\xe1 kiềm (pH < 10) v\xe0 phải sơn l\xf3t h\xe0n k\xedn gốc dầu; bề mặt cần sơn phải sạch, kh\xf4, kh\xf4ng dầu mỡ v\xe0 tạp chất kh\xe1c. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật để được hướng dẫn phương ph\xe1p xử l\xfd đặc biệt.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t h\xe0n k\xedn gốc dầu HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 (160 m\xb2/th\xf9ng 18 L)
Sơn phủ: 2 lớp sơn tường ngo\xe0i trời gốc dầu một th\xe0nh phần HONG NGUYEN, lượng tham khảo 0.22 L/m\xb2 (s\xe0n phẳng), 80 m\xb2/th\xf9ng (18 L); 0.30 L/m\xb2 (ph\xf9 đi\xeau), 60 m\xb2/th\xf9ng (18 L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ, con lăn hoặc phun thường
Dung m\xf4i pha lo\xe3ng: BTO220 (thể t\xedch tối đa): cọ v\xe0 con lăn 10%, phun kh\xf4ng kh\xed 10%, phun thường 15%
Chất vệ sinh: BTO222

[An to\xe0n]
1) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN base de aceite arquitectonico paint is an acrilico-based pared exterior paint with good retencion de color and application performance, providing protection and decoration for interior and pared exteriors and concreto surfaces; can also be used as a capa superior in relief recubrimiento systems.

[Aplicaciones]
Suitable for recubrimiento indoor and outdoor concreto and walls; can also be used as a capa superior in anticorrosivo recubrimiento systems.
1) Excellent adhesion and water resistance
2) Resists weather changes
3) Resists alkali, mild chemicals, acid rain and mold
4) Easy to apply; can be applied at around -10\xb0C

[Parametros Fisicos]
Base resina: Acrylic resina
Color: Multiple colors
Finish: Matte
Flash point: 38\xb0C
Specific gravity: 1.4 kg/L
Drying time: surface dry 1 h (25\xb0C/70% RH); hard dry 24 h
Recoat interval: min 4 h, max unlimited
Solid volume content: 50%
Theoretical spreading rate: 10 m\xb2/L (at 50 \xb5m DFT)

[Guia de Aplicacion]
Surface preparation:
The surface to be coated should first be primed with an appropriate imprimador; acero plate surfaces should first be primed with an anti-rust imprimador; concreto surfaces should not be strongly alkaline (pH < 10) and should be primed with an base de aceite sealer; the surface to be coated must be clean, dry, free of oil and other contaminants. For special surface preparations, consult our technical department.

[Sistema Recomendado]
Primer: 1 coat HONG NGUYEN base de aceite imprimador sellador, coverage approx. 0.1 L/m\xb2 (160 m\xb2/drum, 18 L)
Topcoat: 2 coats HONG NGUYEN single-component base de aceite pared exterior paint, coverage approx. 0.22 L/m\xb2 (flat), 80 m\xb2/drum (18 L); 0.30 L/m\xb2 (relief), 60 m\xb2/drum (18 L)
Application method: airless rociado, brocha, rodillo or conventional rociado
Thinner: BTO220 (max by volume): brocha and rodillo 10%, airless rociado 10%, conventional rociado 15%
Cleaner: BTO222

[Seguridad]
1) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN أساس زيتي معماري paint is an أكريليك-based جدار خارجي paint with good الحفاظ على اللون and application performance, providing protection and decoration for interior and جدار خارجيs and خرسانة surfaces; can also be used as a طبقة علوية in relief طلاء systems.

[التطبيقات]
Suitable for طلاء indoor and outdoor خرسانة and walls; can also be used as a طبقة علوية in مضاد للتآكل طلاء systems.
1) Excellent التصاق and water resistance
2) Resists weather changes
3) Resists alkali, mild chemicals, acid rain and mold
4) Easy to apply; can be applied at around -10\xb0C

[المعلمات الفيزيائية]
Base راتنج: Acrylic راتنج
Color: Multiple لونs
Finish: Matte
Flash point: 38\xb0C
Specific gravity: 1.4 kg/L
Drying time: surface dry 1 h (25\xb0C/70% RH); hard dry 24 h
Recoat interval: min 4 h, max unlimited
Solid volume content: 50%
Theoretical spreading rate: 10 m\xb2/L (at 50 \xb5m DFT)

[دليل التطبيق]
Surface preparation:
The surface to be coated should first be primed with an appropriate برايمر; صلب plate surfaces should first be primed with an anti-rust برايمر; خرسانة surfaces should not be strongly alkaline (pH < 10) and should be primed with an أساس زيتي sealer; the surface to be coated must be clean, dry, free of oil and other contaminants. For special surface preparations, consult our technical department.

[النظام الموصى به]
Primer: 1 coat HONG NGUYEN أساس زيتي برايمر ساد, coverage approx. 0.1 L/m\xb2 (160 m\xb2/drum, 18 L)
Topcoat: 2 coats HONG NGUYEN single-component أساس زيتي جدار خارجي paint, coverage approx. 0.22 L/m\xb2 (flat), 80 m\xb2/drum (18 L); 0.30 L/m\xb2 (relief), 60 m\xb2/drum (18 L)
Application method: airless رش, فرشاة, أسطوانة or conventional رش
Thinner: BTO220 (max by volume): فرشاة and أسطوانة 10%, airless رش 10%, conventional رش 15%
Cleaner: BTO222

[السلامة]
1) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2) Flammable. Keep away from fire sources. Do not smoke in the application area.
3) Store in a cool, dry place.`}},{model:"HN-AR-807",desc:{en:"Tile renovation paint — two-component epoxy primer with strong adhesion",zh:"瓷砖翻新涂料是一种双组份具有强附着力的环氧底漆",vi:"Sơn cải tạo gạch men — sơn lót epoxy hai thành phần bám dính mạnh",es:"Pintura de renovación de azulejos — imprimatura epoxi de dos componentes con fuerte adhesión",ar:"دهان تجديد البلاط — أساسات إيبوكسية مكونة من جزأين بقوة التصاق عالية"},details:{en:`[Product Overview]
HONG NGUYEN tile renovation paint is a two-component epoxy primer with strong adhesion, specifically for smooth surfaces such as tile and glass, with excellent adhesion and chemical resistance.

[Applications]
Specifically for direct application on hard-to-adhere surfaces such as tile and glass, as a dedicated primer for old wall renovation. It eliminates the need to apply a thick layer of putty, reducing the load on the building, simplifying and economizing old wall renovation.

[Physical Parameters]
Base resin: Epoxy resin
Color: White, grey and various other colors
Mix ratio: Base / Curing agent = 3:1 (by volume) = 5:1 (by weight)
Pot life: 5 h / 20\xb0C
Flash point: 26\xb0C
Specific gravity: 1.4 kg/L
Solid volume content: 48%
Theoretical spreading rate: 10 m\xb2/L (at 48 \xb5m DFT)
Drying time: 1) surface dry 4 h (25\xb0C/70% RH); 2) through dry (full cure): 7 days
Recoat interval: min 6 h, max unlimited
Finish: Flat

[Application Guide]
Surface preparation: Remove dust, oil and other debris from the surface; loose or flaking tiles should be removed and patched with putty; the surface should be dry and clean before application. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN tile renovation dedicated primer, coverage approx. 5 m\xb2/L (100 m\xb2/kit, 16 L)
Topcoat: 2 coats HONG NGUYEN super oil-resistant topcoat, coverage approx. 5 m\xb2/L (flat), 90 m\xb2/kit (20 L)
Application method: airless spray, brush or conventional spray
Thinner BTO220 (max by volume): brush and roller 5-10%, airless spray 5%, conventional spray 15%
Cleaner: BTO220

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.`,zh:`【产品概述】
宏源瓷砖翻新涂料是一种双组份具有强附着力的环氧底漆，专用涂于瓷砖、玻璃等光滑表面，具有优异的附着力及耐化学品性能。

【适用范围】
专用于直接涂装在瓷砖、玻璃等难附着的表面，作为旧墙翻新的专用底漆，不必刮涂一层厚的腻子，减少建设筑物的负重，使旧墙翻新施工简单化、经济化。

【物理参数】
漆基：环氧树脂
颜色：白色、灰色等多种颜色
混合比例：漆基/固化剂=3:1（体积比）
=5:1 (重量比)
混合使用期：5h/20℃
闪点：26℃
比重：1.4kg/L
体积固体含量：48%
理论涂布率：10㎡/L（以48um干膜计）
干燥时间：1）表干：4小时（25℃/70%rh）
2）实干（完全固化）：7天
重涂间隔：最小6小时，最大不限
漆面：平光

【施工说明】
表面处理：清除涂装表面灰尘、油污等杂物，松动起翘的瓷片应清除，用腻子补平，涂装前表面应干燥、清洁。特殊表面的处理方法请向本公司技术部查询。

【建议油漆配套】
底漆：宏源瓷砖翻新专用底漆涂一遍，参考用量：5㎡/L，即100㎡/组（16L）
面漆：宏源超级油霸面涂漆二遍，参考用量5㎡/L（平涂），即90㎡/组（20L）
施工方法：无气喷涂、刷涂或普通喷涂。
稀释 BTO220（最大用量）刷涂和滚涂5～10%，无气喷涂5%，普通喷涂15%
清洗剂：BTO220

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Sơn cải tạo gạch men HONG NGUYEN l\xe0 sơn l\xf3t epoxy hai th\xe0nh phần b\xe1m d\xednh mạnh, chuy\xean dụng cho bề mặt trơn như gạch men, k\xednh, c\xf3 độ b\xe1m d\xednh v\xe0 khả năng chịu h\xf3a chất ưu việt.

[Ứng dụng]
Chuy\xean dụng để thi c\xf4ng trực tiếp tr\xean bề mặt kh\xf3 b\xe1m d\xednh như gạch men, k\xednh, l\xe0m sơn l\xf3t chuy\xean dụng cho cải tạo tường cũ. Kh\xf4ng cần thi c\xf4ng một lớp b\xf9 tảng d\xe0y, giảm tải trọng c\xf4ng tr\xecnh, đơn giản h\xf3a v\xe0 tiết kiệm chi ph\xed thi c\xf4ng cải tạo tường cũ.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy
M\xe0u: Trắng, x\xe1m v\xe0 nhiều m\xe0u kh\xe1c
Tỷ lệ pha: Nhựa / Chất đ\xf3ng rắn = 3:1 (thể t\xedch) = 5:1 (trọng lượng)
Thời gian sử dụng: 5 giờ / 20\xb0C
Điểm bắt lửa: 26\xb0C
Tỉ trọng: 1.4 kg/L
H\xe0m lượng rắn thể t\xedch: 48%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 48 \xb5m)
Thời gian kh\xf4: 1) kh\xf4 bề mặt 4 giờ (25\xb0C/70% RH); 2) kh\xf4 ho\xe0n to\xe0n: 7 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 6 giờ, tối đa kh\xf4ng giới hạn
Bề mặt: Phẳng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Loại bỏ bụi, dầu mỡ v\xe0 tạp chất tr\xean bề mặt; gạch men bong tr\xf3c n\xean được loại bỏ v\xe0 b\xf9 tảng; bề mặt phải kh\xf4 v\xe0 sạch trước khi thi c\xf4ng. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t chuy\xean dụng cải tạo gạch men HONG NGUYEN, lượng tham khảo: 5 m\xb2/L (100 m\xb2/bộ 16 L)
Sơn phủ: 2 lớp sơn phủ si\xeau chịu dầu HONG NGUYEN, lượng tham khảo 5 m\xb2/L (s\xe0n phẳng), 90 m\xb2/bộ (20 L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng BTO220 (thể t\xedch tối đa): cọ v\xe0 con lăn 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: BTO220

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
HONG NGUYEN azulejo renovacion paint is a de dos componentes epoxi imprimador with strong adhesion, specifically for smooth surfaces such as azulejo and vidrio, with excellent adhesion and chemical resistance.

[Aplicaciones]
Specifically for direct application on hard-to-adhere surfaces such as azulejo and vidrio, as a dedicated imprimador for old wall renovacion. It eliminates the need to apply a thick layer of putty, reducing the load on the building, simplifying and economizing old wall renovacion.

[Parametros Fisicos]
Base resina: Epoxy resina
Color: White, grey and various other colors
Mix ratio: Base / Curing agent = 3:1 (by volume) = 5:1 (by weight)
Pot life: 5 h / 20\xb0C
Flash point: 26\xb0C
Specific gravity: 1.4 kg/L
Solid volume content: 48%
Theoretical spreading rate: 10 m\xb2/L (at 48 \xb5m DFT)
Drying time: 1) surface dry 4 h (25\xb0C/70% RH); 2) through dry (full cure): 7 days
Recoat interval: min 6 h, max unlimited
Finish: Flat

[Guia de Aplicacion]
Surface preparation: Remove dust, oil and other debris from the surface; loose or flaking azulejos should be removed and patched with putty; the surface should be dry and clean before application. For special surface preparations, consult our technical department.

[Sistema Recomendado]
Primer: 1 coat HONG NGUYEN azulejo renovacion dedicated imprimador, coverage approx. 5 m\xb2/L (100 m\xb2/kit, 16 L)
Topcoat: 2 coats HONG NGUYEN super oil-resistant capa superior, coverage approx. 5 m\xb2/L (flat), 90 m\xb2/kit (20 L)
Application method: airless rociado, brocha or conventional rociado
Thinner BTO220 (max by volume): brocha and rodillo 5-10%, airless rociado 5%, conventional rociado 15%
Cleaner: BTO220

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN بلاط تجديد paint is a ثنائي المكون إيبوكسي برايمر with strong التصاق, specifically for smooth surfaces such as بلاط and زجاج, with excellent التصاق and chemical resistance.

[التطبيقات]
Specifically for direct application on hard-to-adhere surfaces such as بلاط and زجاج, as a dedicated برايمر for old wall تجديد. It eliminates the need to apply a thick layer of putty, reducing the load on the building, simplifying and economizing old wall تجديد.

[المعلمات الفيزيائية]
Base راتنج: Epoxy راتنج
Color: White, grey and various other لونs
Mix ratio: Base / Curing agent = 3:1 (by volume) = 5:1 (by weight)
Pot life: 5 h / 20\xb0C
Flash point: 26\xb0C
Specific gravity: 1.4 kg/L
Solid volume content: 48%
Theoretical spreading rate: 10 m\xb2/L (at 48 \xb5m DFT)
Drying time: 1) surface dry 4 h (25\xb0C/70% RH); 2) through dry (full cure): 7 days
Recoat interval: min 6 h, max unlimited
Finish: Flat

[دليل التطبيق]
Surface preparation: Remove dust, oil and other debris from the surface; loose or flaking بلاطs should be removed and patched with putty; the surface should be dry and clean before application. For special surface preparations, consult our technical department.

[النظام الموصى به]
Primer: 1 coat HONG NGUYEN بلاط تجديد dedicated برايمر, coverage approx. 5 m\xb2/L (100 m\xb2/kit, 16 L)
Topcoat: 2 coats HONG NGUYEN super oil-resistant طبقة علوية, coverage approx. 5 m\xb2/L (flat), 90 m\xb2/kit (20 L)
Application method: airless رش, فرشاة or conventional رش
Thinner BTO220 (max by volume): فرشاة and أسطوانة 5-10%, airless رش 5%, conventional رش 15%
Cleaner: BTO220

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.`}}],image:"/images/product-architectural.jpg",applications:[{en:"Office towers & shopping malls",zh:"办公楼与购物中心",vi:"Văn phòng & trung tâm thương mại",es:"Torres de oficinas y centros comerciales",ar:"أبراج المكاتب والمراكز التجارية"},{en:"Hospitals, schools & hotels",zh:"医院、学校与酒店",vi:"Bệnh viện, trường học & khách sạn",es:"Hospitales, escuelas y hoteles",ar:"المستشفيات والمدارس والفنادق"},{en:"Airports & sports venues",zh:"机场与体育场馆",vi:"Sân bay & nhà thi đấu",es:"Aeropuertos y recintos deportivos",ar:"مطارات ومنشآت رياضية"},{en:"Government buildings & public housing",zh:"政府建筑与保障房",vi:"Công trình chính phủ & nhà ở công",es:"Edificios gubernamentales y viviendas públicas",ar:"مباني حكومية وسكن عام"}]},{code:"CAT-06",title:{en:"Custom Engineered Coatings",zh:"特种定制工业涂料",vi:"Sơn công nghiệp kỹ thuật đặc thù",es:"Recubrimientos de ingeniería personalizados",ar:"طلاء مخصص هندسي"},short:{en:"Performance tuning · Color matching · Compliance · OEM/ODM",zh:"性能调校·调色·合规·OEM/ODM",vi:"Điều chỉnh · pha màu · tuân thủ · OEM/ODM",es:"Ajuste de rendimiento · Coincidencia de color · Cumplimiento · OEM/ODM",ar:"ضبط الأداء · مطابقة الألوان · الامتثال · OEM/ODM"},description:{en:"Off-the-shelf can't meet your spec? Our 12-chemist R&D team develops custom formulations tailored to your substrate, environment, performance targets, and color requirements.",zh:"标准产品无法满足您的规格?我们由 12 名化学师组成的研发团队,可根据您的基材、环境、性能目标及颜色要求定制配方。",vi:"Sơn tiêu chuẩn không đáp ứng được yêu cầu? Đội R&D 12 kỹ sư hóa học phát triển công thức riêng theo bề mặt, môi trường, mục tiêu kỹ thuật và màu sắc của bạn."},features:[{en:"12 senior chemists in-house R&D",zh:"12 名资深化学师自主研发",vi:"12 kỹ sư hóa học R&D nội bộ",es:"12 químicos seniors en I+D interno",ar:"12 كيميائيًا senior في البحث والتطوير الداخلي"},{en:"Sample in 7 days, production in 30",zh:"7 天出样,30 天量产",vi:"Mẫu 7 ngày, sản xuất 30 ngày",es:"Muestra en 7 días, producción en 30",ar:"عينة في 7 أيام، إنتاج في 30 يومًا"},{en:"REACH / RoHS / FDA / NSF / IMO compliance",zh:"REACH / RoHS / FDA / NSF / IMO 合规",vi:"Tuân thủ REACH / RoHS / FDA / NSF / IMO",es:"Cumplimiento REACH / RoHS / FDA / NSF / IMO",ar:"امتثال REACH / RoHS / FDA / NSF / IMO"},{en:"OEM private-label packaging",zh:"OEM 贴牌包装",vi:"Đóng gói nhãn riêng OEM",es:"Empaque OEM con marca privada",ar:"تغليف OEM بعلامة خاصة"}],specs:[{label:{en:"R&D",zh:"研发",vi:"R&D",es:"I+D",ar:"البحث والتطوير"},value:"12 chemists"},{label:{en:"Sample",zh:"样品",vi:"Mẫu",es:"Muestra",ar:"عينة"},value:"7 days"},{label:{en:"Production",zh:"生产",vi:"Sản xuất",es:"Producción",ar:"الإنتاج"},value:"30 days"},{label:{en:"MOQ",zh:"起订量",vi:"MOQ",es:"Cantidad mínima de pedido (MOQ)",ar:"الكمية الدنيا للطلب (MOQ)"},value:"200 kg"}],categorySpecs:[{label:{en:"R&D Team",zh:"研发团队",vi:"Đội R&D",es:"Equipo de I+D",ar:"فريق البحث والتطوير"},value:"12 chemists"},{label:{en:"Sample Lead",zh:"样品周期",vi:"Mẫu",es:"Tiempo de entrega de muestra",ar:"وقت تسليم العينة"},value:"7 days"},{label:{en:"Production",zh:"量产",vi:"Sản xuất",es:"Producción",ar:"الإنتاج"},value:"30 days"},{label:{en:"Compliance",zh:"合规",vi:"Tuân thủ",es:"Cumplimiento",ar:"الامتثال"},value:"REACH/IMO"}],models:[{model:"HN-CUSTOM-01",desc:{en:"Performance Tuning — hardness, flexibility, corrosion grade, temperature rating, chemical resistance",zh:"性能调校——硬度、柔韧性、防腐等级、耐温等级、耐化学品",vi:"Điều chỉnh hiệu suất — độ cứng, độ dẻo, cấp ăn mòn, nhiệt độ, hóa chất",es:"Ajuste de rendimiento — dureza, flexibilidad, grado de corrosión, calificación de temperatura, resistencia química",ar:"ضبط الأداء — صلابة، مرونة، درعة التآكل، تصنيف درجة الحرارة، مقاومة الكيميائيات"}},{model:"HN-CUSTOM-02",desc:{en:"Color Matching — RAL, Pantone, custom samples, metallic & pearlescent effects",zh:"调色——RAL、Pantone、定制样品、金属与珠光效果",vi:"Pha màu — RAL, Pantone, mẫu riêng, hiệu ứng kim loại & ngọc trai",es:"Coincidencia de color — RAL, Pantone, muestras personalizadas, efectos metálicos y perla",ar:"مطابقة الألوان — RAL، Pantone، عينات مخصصة، تأثيرات معدنية ولؤلؤية"}},{model:"HN-CUSTOM-03",desc:{en:"Compliance — REACH, RoHS, FDA food-contact, NSF drinking water, IMO marine",zh:"合规——REACH、RoHS、FDA 食品接触、NSF 饮用水、IMO 船舶",vi:"Tuân thủ — REACH, RoHS, FDA, NSF, IMO hàng hải",es:"Cumplimiento — REACH, RoHS, contacto con alimentos FDA, agua potable NSF، marinero IMO",ar:"الامتثال — REACH، RoHS، اتصال بالأغذية FDA، مياه الشرب NSF، بحري IMO"}},{model:"HN-CUSTOM-04",desc:{en:"OEM / Private Label — custom drum labels, branded packaging, multilingual MSDS, co-branded marketing",zh:"OEM / 贴牌——定制桶身标签、品牌包装、多语言 MSDS、联合营销",vi:"OEM / Nhãn riêng — nhãn thùng, bao bì thương hiệu, MSDS đa ngữ, marketing đồng thương hiệu",es:"OEM / Etiqueta Privada — etiquetas de tambor personalizadas، تغليف بعلامة تجارية، MSDS متعدد اللغات، تسويق مشترك",ar:"OEM / علامة خاصة — ملصقات برميل مخصصة، تغليف بعلامة تجارية، MSDS متعدد اللغات، تسويق مشترك"}},{model:"HN-CUSTOM-05",desc:{en:"Home appliance panel paint — alkyd-based enamel specially formulated (per source spec)",zh:"醇酸漆是特殊配制的醇酸基磁漆",vi:"Sơn tấm панел thiết bị gia dụng — sơn tráng nền alkyd phối chế đặc biệt (theo thông số nguồn)",es:"Pintura de paneles de electrodomésticos — esmalte alquídico especialmente formulado (según especificación de origen)",ar:"طلاء ألواح الأجهزة المنزلية —email alquídيك specially formulated (حسب المواصفات الأصلية)"},details:{en:`[Product Overview]
HONG NGUYEN alkyd paint is a specially formulated alkyd-based enamel that forms a glossy, abrasion-resistant paint film. Its features are fast drying, economical cost, and excellent water and weather resistance.

[Applications]
Can be used as a general-purpose topcoat on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Physical Parameters]
Base resin: Modified alkyd resin
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust primer P2070 or iron-oxide-red anti-rust primer P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0010 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0010

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before recoating, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum recoat interval is exceeded before recoating, roughen the surface to ensure intercoat adhesion.`,zh:`【产品概述】
HONG NGUYEN（宏源）醇酸漆是特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，其特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
可作为通用面漆涂于轻微至中等腐蚀环境下的室内外金属和木材表面。

【物理参数】
漆基：改性醇酸树脂 颜色：白色、银色及其它颜色
比重：1.10kg/L 闪点：38℃
体积固体含量：50% 理论涂布率：14㎡/L（干膜35微米）
干燥时间：表干4小时，实干8小时
重涂间隔：最小8小时，最大30天
漆面：有光

【施工说明】
表面处理：施工表面必须干燥、无松散漆层、油脂及其它污垢物。本品必须涂在预涂过适当底漆的表面上。

【建议油漆配套】
1）钢铁表面：
底漆：宏源红丹防锈底漆P2070或铁红防锈底漆P2040涂一遍，参考用量：0.1L/㎡,即10㎡/L。
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
2）木材表面：
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0010
（最大用量） 刷涂：5～10% 无气喷涂5% 一般喷涂：15%
清 洗 剂：T0010

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注：1）暴露于污染环境后重涂以前，须用高压淡水彻底清洗表面，任其自干。
2）若超过最大重涂间隔再涂油漆时，应磨粗表面以确保漆膜间的附着力。`,vi:`[Tổng quan sản phẩm]
Sơn alkyd HONG NGUYEN l\xe0 sơn tr\xe1ng nền alkyd phối chế đặc biệt, tạo m\xe0ng sơn b\xf3ng, chịu m\xe0i m\xf2n. Đặc điểm l\xe0 kh\xf4 nhanh, kinh tế, chịu nước v\xe0 chịu thời tiết ưu việt.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn phủ phổ th\xf4ng tr\xean bề mặt kim loại v\xe0 gỗ trong nh\xe0 v\xe0 ngo\xe0i trời trong m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa alkyd cải biến
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.10 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 14 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 8 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 30 ng\xe0y
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
1) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ ch\xec đỏ HONG NGUYEN P2070 hoặc sơn l\xf3t chống rỉ oxit sắt đỏ P2040, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
2) Bề mặt gỗ:
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0010 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0010

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: 1) Sau khi tiếp x\xfac m\xf4i trường \xf4 nhiễm, trước khi sơn lại, phải rửa sạch bề mặt bằng nước ngọt \xe1p suất cao v\xe0 để tự kh\xf4.
2) Nếu vượt qu\xe1 thời gian giữa c\xe1c lớp tối đa trước khi sơn lại, phải l\xe0m nh\xe1m bề mặt để đảm bảo độ b\xe1m d\xednh giữa c\xe1c lớp sơn.`,es:`[Resumen del Producto]
HONG NGUYEN alquidalico paint is a specially formulated alquidalico-based enamel that forms a brillante, abrasion-resistant pelicula de pintura. Its features are fast drying, economical cost, and excellent water and resistencia climatica.

[Aplicaciones]
Can be used as a general-purpose capa superior on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Parametros Fisicos]
Base resina: Modified alquidalico resina
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Guia de Aplicacion]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust imprimador P2070 or iron-oxide-red anti-rust imprimador P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: T0010 (max by volume): brocha 5-10%, airless rociado 5%, conventional rociado 15%
Cleaner: T0010

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before rerecubrimiento, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum intervalo de repintado is exceeded before rerecubrimiento, roughen the surface to ensure intercoat adhesion.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN ألكيد paint is a specially formulated ألكيد-based enamel that forms a لامع, abrasion-resistant غشاء الطلاء. Its features are fast drying, economical cost, and excellent water and مقاومة الطقس.

[التطبيقات]
Can be used as a general-purpose طبقة علوية on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[المعلمات الفيزيائية]
Base راتنج: Modified ألكيد راتنج
Color: White, silver and other لونs
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[دليل التطبيق]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust برايمر P2070 or iron-oxide-red anti-rust برايمر P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: T0010 (max by volume): فرشاة 5-10%, airless رش 5%, conventional رش 15%
Cleaner: T0010

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before reطلاء, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum فترة إعادة الطلاء is exceeded before reطلاء, roughen the surface to ensure intercoat التصاق.`}},{model:"HN-CUSTOM-06",desc:{en:"Hardware and plastic baking paint — alkyd-based enamel specially formulated (per source spec)",zh:"醇酸漆是特殊配制的醇酸基磁漆",vi:"Sơn nung kim loại và nhựa — sơn tráng nền alkyd phối chế đặc biệt (theo thông số nguồn)",es:"Pintura de horneado para hardware y plástico — esmalte alquídico especialmente formulado (según especificación de origen)",ar:"طلاء الخبز للعتاد والبلاستيك —email alquídik specially formulated (حسب المواصفات الأصلية)"},details:{en:`[Product Overview]
HONG NGUYEN alkyd paint is a specially formulated alkyd-based enamel that forms a glossy, abrasion-resistant paint film. Its features are fast drying, economical cost, and excellent water and weather resistance.

[Applications]
Can be used as a general-purpose topcoat on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Physical Parameters]
Base resin: Modified alkyd resin
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust primer P2070 or iron-oxide-red anti-rust primer P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0010 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0010

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before recoating, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum recoat interval is exceeded before recoating, roughen the surface to ensure intercoat adhesion.`,zh:`【产品概述】
HONG NGUYEN（宏源）醇酸漆是特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，其特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
可作为通用面漆涂于轻微至中等腐蚀环境下的室内外金属和木材表面。

【物理参数】
漆基：改性醇酸树脂 颜色：白色、银色及其它颜色
比重：1.10kg/L 闪点：38℃
体积固体含量：50% 理论涂布率：14㎡/L（干膜35微米）
干燥时间：表干4小时，实干8小时
重涂间隔：最小8小时，最大30天
漆面：有光

【施工说明】
表面处理：施工表面必须干燥、无松散漆层、油脂及其它污垢物。本品必须涂在预涂过适当底漆的表面上。

【建议油漆配套】
1）钢铁表面：
底漆：宏源红丹防锈底漆P2070或铁红防锈底漆P2040涂一遍，参考用量：0.1L/㎡,即10㎡/L。
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
2）木材表面：
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0010
（最大用量） 刷涂：5～10% 无气喷涂5% 一般喷涂：15%
清 洗 剂：T0010

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注：1）暴露于污染环境后重涂以前，须用高压淡水彻底清洗表面，任其自干。
2）若超过最大重涂间隔再涂油漆时，应磨粗表面以确保漆膜间的附着力。`,vi:`[Tổng quan sản phẩm]
Sơn alkyd HONG NGUYEN l\xe0 sơn tr\xe1ng nền alkyd phối chế đặc biệt, tạo m\xe0ng sơn b\xf3ng, chịu m\xe0i m\xf2n. Đặc điểm l\xe0 kh\xf4 nhanh, kinh tế, chịu nước v\xe0 chịu thời tiết ưu việt.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn phủ phổ th\xf4ng tr\xean bề mặt kim loại v\xe0 gỗ trong nh\xe0 v\xe0 ngo\xe0i trời trong m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa alkyd cải biến
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.10 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 14 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 8 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 30 ng\xe0y
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
1) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ ch\xec đỏ HONG NGUYEN P2070 hoặc sơn l\xf3t chống rỉ oxit sắt đỏ P2040, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
2) Bề mặt gỗ:
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0010 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0010

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: 1) Sau khi tiếp x\xfac m\xf4i trường \xf4 nhiễm, trước khi sơn lại, phải rửa sạch bề mặt bằng nước ngọt \xe1p suất cao v\xe0 để tự kh\xf4.
2) Nếu vượt qu\xe1 thời gian giữa c\xe1c lớp tối đa trước khi sơn lại, phải l\xe0m nh\xe1m bề mặt để đảm bảo độ b\xe1m d\xednh giữa c\xe1c lớp sơn.`,es:`[Resumen del Producto]
HONG NGUYEN alquidalico paint is a specially formulated alquidalico-based enamel that forms a brillante, abrasion-resistant pelicula de pintura. Its features are fast drying, economical cost, and excellent water and resistencia climatica.

[Aplicaciones]
Can be used as a general-purpose capa superior on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Parametros Fisicos]
Base resina: Modified alquidalico resina
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Guia de Aplicacion]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust imprimador P2070 or iron-oxide-red anti-rust imprimador P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: T0010 (max by volume): brocha 5-10%, airless rociado 5%, conventional rociado 15%
Cleaner: T0010

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before rerecubrimiento, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum intervalo de repintado is exceeded before rerecubrimiento, roughen the surface to ensure intercoat adhesion.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN ألكيد paint is a specially formulated ألكيد-based enamel that forms a لامع, abrasion-resistant غشاء الطلاء. Its features are fast drying, economical cost, and excellent water and مقاومة الطقس.

[التطبيقات]
Can be used as a general-purpose طبقة علوية on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[المعلمات الفيزيائية]
Base راتنج: Modified ألكيد راتنج
Color: White, silver and other لونs
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[دليل التطبيق]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust برايمر P2070 or iron-oxide-red anti-rust برايمر P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: T0010 (max by volume): فرشاة 5-10%, airless رش 5%, conventional رش 15%
Cleaner: T0010

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before reطلاء, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum فترة إعادة الطلاء is exceeded before reطلاء, roughen the surface to ensure intercoat التصاق.`}},{model:"HN-CUSTOM-07",desc:{en:"Automotive paint — alkyd-based enamel specially formulated (per source spec)",zh:"醇酸漆是特殊配制的醇酸基磁漆",vi:"Sơn ô tô — sơn tráng nền alkyd phối chế đặc biệt (theo thông số nguồn)",es:"Pintura automotriz — esmalte alquídico especialmente formulado (según especificación de origen)",ar:"طلاء السيارات —email alquídik specially formulated (حسب المواصفات الأصلية)"},details:{en:`[Product Overview]
HONG NGUYEN alkyd paint is a specially formulated alkyd-based enamel that forms a glossy, abrasion-resistant paint film. Its features are fast drying, economical cost, and excellent water and weather resistance.

[Applications]
Can be used as a general-purpose topcoat on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Physical Parameters]
Base resin: Modified alkyd resin
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust primer P2070 or iron-oxide-red anti-rust primer P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0010 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0010

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before recoating, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum recoat interval is exceeded before recoating, roughen the surface to ensure intercoat adhesion.`,zh:`【产品概述】
HONG NGUYEN（宏源）醇酸漆是特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，其特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
可作为通用面漆涂于轻微至中等腐蚀环境下的室内外金属和木材表面。

【物理参数】
漆基：改性醇酸树脂 颜色：白色、银色及其它颜色
比重：1.10kg/L 闪点：38℃
体积固体含量：50% 理论涂布率：14㎡/L（干膜35微米）
干燥时间：表干4小时，实干8小时
重涂间隔：最小8小时，最大30天
漆面：有光

【施工说明】
表面处理：施工表面必须干燥、无松散漆层、油脂及其它污垢物。本品必须涂在预涂过适当底漆的表面上。

【建议油漆配套】
1）钢铁表面：
底漆：宏源红丹防锈底漆P2070或铁红防锈底漆P2040涂一遍，参考用量：0.1L/㎡,即10㎡/L。
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
2）木材表面：
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0010
（最大用量） 刷涂：5～10% 无气喷涂5% 一般喷涂：15%
清 洗 剂：T0010

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注：1）暴露于污染环境后重涂以前，须用高压淡水彻底清洗表面，任其自干。
2）若超过最大重涂间隔再涂油漆时，应磨粗表面以确保漆膜间的附着力。`,vi:`[Tổng quan sản phẩm]
Sơn alkyd HONG NGUYEN l\xe0 sơn tr\xe1ng nền alkyd phối chế đặc biệt, tạo m\xe0ng sơn b\xf3ng, chịu m\xe0i m\xf2n. Đặc điểm l\xe0 kh\xf4 nhanh, kinh tế, chịu nước v\xe0 chịu thời tiết ưu việt.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn phủ phổ th\xf4ng tr\xean bề mặt kim loại v\xe0 gỗ trong nh\xe0 v\xe0 ngo\xe0i trời trong m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa alkyd cải biến
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.10 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 14 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 8 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 30 ng\xe0y
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
1) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ ch\xec đỏ HONG NGUYEN P2070 hoặc sơn l\xf3t chống rỉ oxit sắt đỏ P2040, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
2) Bề mặt gỗ:
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0010 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0010

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: 1) Sau khi tiếp x\xfac m\xf4i trường \xf4 nhiễm, trước khi sơn lại, phải rửa sạch bề mặt bằng nước ngọt \xe1p suất cao v\xe0 để tự kh\xf4.
2) Nếu vượt qu\xe1 thời gian giữa c\xe1c lớp tối đa trước khi sơn lại, phải l\xe0m nh\xe1m bề mặt để đảm bảo độ b\xe1m d\xednh giữa c\xe1c lớp sơn.`,es:`[Resumen del Producto]
HONG NGUYEN alquidalico paint is a specially formulated alquidalico-based enamel that forms a brillante, abrasion-resistant pelicula de pintura. Its features are fast drying, economical cost, and excellent water and resistencia climatica.

[Aplicaciones]
Can be used as a general-purpose capa superior on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Parametros Fisicos]
Base resina: Modified alquidalico resina
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Guia de Aplicacion]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust imprimador P2070 or iron-oxide-red anti-rust imprimador P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: T0010 (max by volume): brocha 5-10%, airless rociado 5%, conventional rociado 15%
Cleaner: T0010

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before rerecubrimiento, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum intervalo de repintado is exceeded before rerecubrimiento, roughen the surface to ensure intercoat adhesion.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN ألكيد paint is a specially formulated ألكيد-based enamel that forms a لامع, abrasion-resistant غشاء الطلاء. Its features are fast drying, economical cost, and excellent water and مقاومة الطقس.

[التطبيقات]
Can be used as a general-purpose طبقة علوية on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[المعلمات الفيزيائية]
Base راتنج: Modified ألكيد راتنج
Color: White, silver and other لونs
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[دليل التطبيق]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust برايمر P2070 or iron-oxide-red anti-rust برايمر P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: T0010 (max by volume): فرشاة 5-10%, airless رش 5%, conventional رش 15%
Cleaner: T0010

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before reطلاء, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum فترة إعادة الطلاء is exceeded before reطلاء, roughen the surface to ensure intercoat التصاق.`}},{model:"HN-CUSTOM-08",desc:{en:"Marine paint — alkyd-based enamel specially formulated (per source spec)",zh:"醇酸漆是特殊配制的醇酸基磁漆",vi:"Sơn tàu biển — sơn tráng nền alkyd phối chế đặc biệt (theo thông số nguồn)",es:"Pintura marina — esmalte alquídico especialmente formulado (según especificación de origen)",ar:"طلاء بحري —email alquídik specially formulated (حسب المواصفات الأصلية)"},details:{en:`[Product Overview]
HONG NGUYEN alkyd paint is a specially formulated alkyd-based enamel that forms a glossy, abrasion-resistant paint film. Its features are fast drying, economical cost, and excellent water and weather resistance.

[Applications]
Can be used as a general-purpose topcoat on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Physical Parameters]
Base resin: Modified alkyd resin
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust primer P2070 or iron-oxide-red anti-rust primer P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0010 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0010

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before recoating, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum recoat interval is exceeded before recoating, roughen the surface to ensure intercoat adhesion.`,zh:`【产品概述】
HONG NGUYEN（宏源）醇酸漆是特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，其特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
可作为通用面漆涂于轻微至中等腐蚀环境下的室内外金属和木材表面。

【物理参数】
漆基：改性醇酸树脂 颜色：白色、银色及其它颜色
比重：1.10kg/L 闪点：38℃
体积固体含量：50% 理论涂布率：14㎡/L（干膜35微米）
干燥时间：表干4小时，实干8小时
重涂间隔：最小8小时，最大30天
漆面：有光

【施工说明】
表面处理：施工表面必须干燥、无松散漆层、油脂及其它污垢物。本品必须涂在预涂过适当底漆的表面上。

【建议油漆配套】
1）钢铁表面：
底漆：宏源红丹防锈底漆P2070或铁红防锈底漆P2040涂一遍，参考用量：0.1L/㎡,即10㎡/L。
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
2）木材表面：
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0010
（最大用量） 刷涂：5～10% 无气喷涂5% 一般喷涂：15%
清 洗 剂：T0010

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注：1）暴露于污染环境后重涂以前，须用高压淡水彻底清洗表面，任其自干。
2）若超过最大重涂间隔再涂油漆时，应磨粗表面以确保漆膜间的附着力。`,vi:`[Tổng quan sản phẩm]
Sơn alkyd HONG NGUYEN l\xe0 sơn tr\xe1ng nền alkyd phối chế đặc biệt, tạo m\xe0ng sơn b\xf3ng, chịu m\xe0i m\xf2n. Đặc điểm l\xe0 kh\xf4 nhanh, kinh tế, chịu nước v\xe0 chịu thời tiết ưu việt.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn phủ phổ th\xf4ng tr\xean bề mặt kim loại v\xe0 gỗ trong nh\xe0 v\xe0 ngo\xe0i trời trong m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa alkyd cải biến
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.10 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 14 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 8 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 30 ng\xe0y
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
1) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ ch\xec đỏ HONG NGUYEN P2070 hoặc sơn l\xf3t chống rỉ oxit sắt đỏ P2040, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
2) Bề mặt gỗ:
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0010 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0010

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: 1) Sau khi tiếp x\xfac m\xf4i trường \xf4 nhiễm, trước khi sơn lại, phải rửa sạch bề mặt bằng nước ngọt \xe1p suất cao v\xe0 để tự kh\xf4.
2) Nếu vượt qu\xe1 thời gian giữa c\xe1c lớp tối đa trước khi sơn lại, phải l\xe0m nh\xe1m bề mặt để đảm bảo độ b\xe1m d\xednh giữa c\xe1c lớp sơn.`,es:`[Resumen del Producto]
HONG NGUYEN alquidalico paint is a specially formulated alquidalico-based enamel that forms a brillante, abrasion-resistant pelicula de pintura. Its features are fast drying, economical cost, and excellent water and resistencia climatica.

[Aplicaciones]
Can be used as a general-purpose capa superior on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Parametros Fisicos]
Base resina: Modified alquidalico resina
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Guia de Aplicacion]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust imprimador P2070 or iron-oxide-red anti-rust imprimador P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: T0010 (max by volume): brocha 5-10%, airless rociado 5%, conventional rociado 15%
Cleaner: T0010

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before rerecubrimiento, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum intervalo de repintado is exceeded before rerecubrimiento, roughen the surface to ensure intercoat adhesion.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN ألكيد paint is a specially formulated ألكيد-based enamel that forms a لامع, abrasion-resistant غشاء الطلاء. Its features are fast drying, economical cost, and excellent water and مقاومة الطقس.

[التطبيقات]
Can be used as a general-purpose طبقة علوية on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[المعلمات الفيزيائية]
Base راتنج: Modified ألكيد راتنج
Color: White, silver and other لونs
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[دليل التطبيق]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust برايمر P2070 or iron-oxide-red anti-rust برايمر P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: T0010 (max by volume): فرشاة 5-10%, airless رش 5%, conventional رش 15%
Cleaner: T0010

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before reطلاء, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum فترة إعادة الطلاء is exceeded before reطلاء, roughen the surface to ensure intercoat التصاق.`}},{model:"HN-CUSTOM-09",desc:{en:"Mechanical equipment paint — alkyd-based enamel specially formulated (per source spec)",zh:"醇酸漆是特殊配制的醇酸基磁漆",vi:"Sơn thiết bị cơ khí — sơn tráng nền alkyd phối chế đặc biệt (theo thông số nguồn)",es:"Pintura para equipos mecánicos — esmalte alquídico especialmente formulado (según especificación de origen)",ar:"طلاء المعدات الميكانيكية —email alquídik specially formulated (حسب المواصفات الأصلية)"},details:{en:`[Product Overview]
HONG NGUYEN alkyd paint is a specially formulated alkyd-based enamel that forms a glossy, abrasion-resistant paint film. Its features are fast drying, economical cost, and excellent water and weather resistance.

[Applications]
Can be used as a general-purpose topcoat on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Physical Parameters]
Base resin: Modified alkyd resin
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust primer P2070 or iron-oxide-red anti-rust primer P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0010 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0010

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before recoating, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum recoat interval is exceeded before recoating, roughen the surface to ensure intercoat adhesion.`,zh:`【产品概述】
HONG NGUYEN（宏源）醇酸漆是特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，其特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
可作为通用面漆涂于轻微至中等腐蚀环境下的室内外金属和木材表面。

【物理参数】
漆基：改性醇酸树脂 颜色：白色、银色及其它颜色
比重：1.10kg/L 闪点：38℃
体积固体含量：50% 理论涂布率：14㎡/L（干膜35微米）
干燥时间：表干4小时，实干8小时
重涂间隔：最小8小时，最大30天
漆面：有光

【施工说明】
表面处理：施工表面必须干燥、无松散漆层、油脂及其它污垢物。本品必须涂在预涂过适当底漆的表面上。

【建议油漆配套】
1）钢铁表面：
底漆：宏源红丹防锈底漆P2070或铁红防锈底漆P2040涂一遍，参考用量：0.1L/㎡,即10㎡/L。
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
2）木材表面：
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0010
（最大用量） 刷涂：5～10% 无气喷涂5% 一般喷涂：15%
清 洗 剂：T0010

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注：1）暴露于污染环境后重涂以前，须用高压淡水彻底清洗表面，任其自干。
2）若超过最大重涂间隔再涂油漆时，应磨粗表面以确保漆膜间的附着力。`,vi:`[Tổng quan sản phẩm]
Sơn alkyd HONG NGUYEN l\xe0 sơn tr\xe1ng nền alkyd phối chế đặc biệt, tạo m\xe0ng sơn b\xf3ng, chịu m\xe0i m\xf2n. Đặc điểm l\xe0 kh\xf4 nhanh, kinh tế, chịu nước v\xe0 chịu thời tiết ưu việt.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn phủ phổ th\xf4ng tr\xean bề mặt kim loại v\xe0 gỗ trong nh\xe0 v\xe0 ngo\xe0i trời trong m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa alkyd cải biến
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.10 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 14 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 8 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 30 ng\xe0y
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
1) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ ch\xec đỏ HONG NGUYEN P2070 hoặc sơn l\xf3t chống rỉ oxit sắt đỏ P2040, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
2) Bề mặt gỗ:
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0010 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0010

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: 1) Sau khi tiếp x\xfac m\xf4i trường \xf4 nhiễm, trước khi sơn lại, phải rửa sạch bề mặt bằng nước ngọt \xe1p suất cao v\xe0 để tự kh\xf4.
2) Nếu vượt qu\xe1 thời gian giữa c\xe1c lớp tối đa trước khi sơn lại, phải l\xe0m nh\xe1m bề mặt để đảm bảo độ b\xe1m d\xednh giữa c\xe1c lớp sơn.`,es:`[Resumen del Producto]
HONG NGUYEN alquidalico paint is a specially formulated alquidalico-based enamel that forms a brillante, abrasion-resistant pelicula de pintura. Its features are fast drying, economical cost, and excellent water and resistencia climatica.

[Aplicaciones]
Can be used as a general-purpose capa superior on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Parametros Fisicos]
Base resina: Modified alquidalico resina
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Guia de Aplicacion]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust imprimador P2070 or iron-oxide-red anti-rust imprimador P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: T0010 (max by volume): brocha 5-10%, airless rociado 5%, conventional rociado 15%
Cleaner: T0010

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before rerecubrimiento, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum intervalo de repintado is exceeded before rerecubrimiento, roughen the surface to ensure intercoat adhesion.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN ألكيد paint is a specially formulated ألكيد-based enamel that forms a لامع, abrasion-resistant غشاء الطلاء. Its features are fast drying, economical cost, and excellent water and مقاومة الطقس.

[التطبيقات]
Can be used as a general-purpose طبقة علوية on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[المعلمات الفيزيائية]
Base راتنج: Modified ألكيد راتنج
Color: White, silver and other لونs
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[دليل التطبيق]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust برايمر P2070 or iron-oxide-red anti-rust برايمر P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: T0010 (max by volume): فرشاة 5-10%, airless رش 5%, conventional رش 15%
Cleaner: T0010

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before reطلاء, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum فترة إعادة الطلاء is exceeded before reطلاء, roughen the surface to ensure intercoat التصاق.`}},{model:"HN-CUSTOM-10",desc:{en:"Stainless steel fingerprint-resistant paint — alkyd-based enamel specially formulated (per source spec)",zh:"醇酸漆是特殊配制的醇酸基磁漆",vi:"Sơn chống vân tay thép không gỉ — sơn tráng nền alkyd phối chế đặc biệt (theo thông số nguồn)",es:"Pintura anti-huellas de acero inoxidable — esmalte alquídico especialmente formulado (según especificación del proveedor)",ar:"طلاء مقاوم لبصمات الأصابع من الفولاذ المقاوم للصدأ - معجون ألكيدي مصمم خصيصًا (حسب المواصفات المصدر)"},details:{en:`[Product Overview]
HONG NGUYEN alkyd paint is a specially formulated alkyd-based enamel that forms a glossy, abrasion-resistant paint film. Its features are fast drying, economical cost, and excellent water and weather resistance.

[Applications]
Can be used as a general-purpose topcoat on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Physical Parameters]
Base resin: Modified alkyd resin
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Application Guide]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate primer.

[Recommended System]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust primer P2070 or iron-oxide-red anti-rust primer P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alkyd paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: T0010 (max by volume): brush 5-10%, airless spray 5%, conventional spray 15%
Cleaner: T0010

[Safety]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before recoating, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum recoat interval is exceeded before recoating, roughen the surface to ensure intercoat adhesion.`,zh:`【产品概述】
HONG NGUYEN（宏源）醇酸漆是特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，其特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
可作为通用面漆涂于轻微至中等腐蚀环境下的室内外金属和木材表面。

【物理参数】
漆基：改性醇酸树脂 颜色：白色、银色及其它颜色
比重：1.10kg/L 闪点：38℃
体积固体含量：50% 理论涂布率：14㎡/L（干膜35微米）
干燥时间：表干4小时，实干8小时
重涂间隔：最小8小时，最大30天
漆面：有光

【施工说明】
表面处理：施工表面必须干燥、无松散漆层、油脂及其它污垢物。本品必须涂在预涂过适当底漆的表面上。

【建议油漆配套】
1）钢铁表面：
底漆：宏源红丹防锈底漆P2070或铁红防锈底漆P2040涂一遍，参考用量：0.1L/㎡,即10㎡/L。
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
2）木材表面：
面漆：宏源醇酸漆涂两遍，参考用量：0.2L/㎡,即5㎡/L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀 释 剂：T0010
（最大用量） 刷涂：5～10% 无气喷涂5% 一般喷涂：15%
清 洗 剂：T0010

【安全守则】
1）易燃物品，远离火源。在施工范围内不宜吸烟。
2）施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
3）贮存在阴凉干爽的地方。
备 注：1）暴露于污染环境后重涂以前，须用高压淡水彻底清洗表面，任其自干。
2）若超过最大重涂间隔再涂油漆时，应磨粗表面以确保漆膜间的附着力。`,vi:`[Tổng quan sản phẩm]
Sơn alkyd HONG NGUYEN l\xe0 sơn tr\xe1ng nền alkyd phối chế đặc biệt, tạo m\xe0ng sơn b\xf3ng, chịu m\xe0i m\xf2n. Đặc điểm l\xe0 kh\xf4 nhanh, kinh tế, chịu nước v\xe0 chịu thời tiết ưu việt.

[Ứng dụng]
C\xf3 thể d\xf9ng l\xe0m sơn phủ phổ th\xf4ng tr\xean bề mặt kim loại v\xe0 gỗ trong nh\xe0 v\xe0 ngo\xe0i trời trong m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa alkyd cải biến
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.10 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 50%
Lượng lan l\xfd thuyết: 14 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 4 giờ; kh\xf4 ho\xe0n to\xe0n 8 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa 30 ng\xe0y
Bề mặt: B\xf3ng

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt cần sơn phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. Phải thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
1) Bề mặt th\xe9p:
Sơn l\xf3t: 1 lớp sơn l\xf3t chống rỉ ch\xec đỏ HONG NGUYEN P2070 hoặc sơn l\xf3t chống rỉ oxit sắt đỏ P2040, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
2) Bề mặt gỗ:
Sơn phủ: 2 lớp sơn alkyd HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: T0010 (thể t\xedch tối đa): cọ 5-10%, phun kh\xf4ng kh\xed 5%, phun thường 15%
Chất vệ sinh: T0010

[An to\xe0n]
1) Dễ ch\xe1y. Tr\xe1nh xa nguồn lửa. Kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng.
2) Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
3) Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa: 1) Sau khi tiếp x\xfac m\xf4i trường \xf4 nhiễm, trước khi sơn lại, phải rửa sạch bề mặt bằng nước ngọt \xe1p suất cao v\xe0 để tự kh\xf4.
2) Nếu vượt qu\xe1 thời gian giữa c\xe1c lớp tối đa trước khi sơn lại, phải l\xe0m nh\xe1m bề mặt để đảm bảo độ b\xe1m d\xednh giữa c\xe1c lớp sơn.`,es:`[Resumen del Producto]
HONG NGUYEN alquidalico paint is a specially formulated alquidalico-based enamel that forms a brillante, abrasion-resistant pelicula de pintura. Its features are fast drying, economical cost, and excellent water and resistencia climatica.

[Aplicaciones]
Can be used as a general-purpose capa superior on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[Parametros Fisicos]
Base resina: Modified alquidalico resina
Color: White, silver and other colors
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[Guia de Aplicacion]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust imprimador P2070 or iron-oxide-red anti-rust imprimador P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN alquidalico paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: T0010 (max by volume): brocha 5-10%, airless rociado 5%, conventional rociado 15%
Cleaner: T0010

[Seguridad]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before rerecubrimiento, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum intervalo de repintado is exceeded before rerecubrimiento, roughen the surface to ensure intercoat adhesion.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN ألكيد paint is a specially formulated ألكيد-based enamel that forms a لامع, abrasion-resistant غشاء الطلاء. Its features are fast drying, economical cost, and excellent water and مقاومة الطقس.

[التطبيقات]
Can be used as a general-purpose طبقة علوية on indoor and outdoor metal and wood surfaces in light to moderate corrosive environments.

[المعلمات الفيزيائية]
Base راتنج: Modified ألكيد راتنج
Color: White, silver and other لونs
Specific gravity: 1.10 kg/L
Flash point: 38\xb0C
Solid volume content: 50%
Theoretical spreading rate: 14 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 4 h, through dry 8 h
Recoat interval: min 8 h, max 30 days
Finish: Glossy

[دليل التطبيق]
Surface preparation: The surface to be coated must be dry, free of loose paint, grease and other contaminants. The product must be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
1) Steel surfaces:
Primer: 1 coat HONG NGUYEN red lead anti-rust برايمر P2070 or iron-oxide-red anti-rust برايمر P2040, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
2) Wood surfaces:
Topcoat: 2 coats HONG NGUYEN ألكيد paint, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: T0010 (max by volume): فرشاة 5-10%, airless رش 5%, conventional رش 15%
Cleaner: T0010

[السلامة]
1) Flammable. Keep away from fire sources. Do not smoke in the application area.
2) Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
3) Store in a cool, dry place.
Note: 1) After exposure to a contaminated environment, before reطلاء, thoroughly wash the surface with high-pressure fresh water and let it air-dry.
2) If the maximum فترة إعادة الطلاء is exceeded before reطلاء, roughen the surface to ensure intercoat التصاق.`}},{model:"HN-CUSTOM-11",desc:{en:"Water-based acrylic paint — single-component high-grade water-based acrylic topcoat with good color retention; film resists abrasion, impact, salt water, mineral oils and many chemicals; easy to repair",zh:"水性丙烯酸漆是一种单组份高级水性丙烯酸基面漆,具有良好的保色性,漆膜耐磨损、抗碰撞、耐盐水、矿物油和多种化学品,本品易修…",vi:"Sơn acrylic nước — sơn phủ acrylic nước cao cấp một thành phần giữ màu tốt; màng sơn chịu mài mòn, va đập, nước muối, dầu khoáng và nhiều hóa chất; dễ sửa chữa",es:"Pintura acrílica a base de agua — recubrimiento acrílico de alta calidad de un solo componente con buena retención de color; la película resiste al desgaste, impacto, agua salada, aceites minerales y muchos químicos; fácil de reparar",ar:"طلاء акрилائي بالماء - طلاء عالي الجودة أحادي المكون يحتفظ باللون جيدًا؛ يقاوم الفيلم التآكل والصدمة ومياه البحر وزيوت المعادن والعديد من المواد الكيميائية؛ سهل الإصلاح"},details:{en:`[Product Overview]
HONG NGUYEN water-based acrylic paint is a single-component high-grade water-based acrylic topcoat with good color retention. The paint film resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[Applications]
Used as a topcoat on steel structures and concrete surfaces in moderate to severe corrosive environments. Also used as a decorative protective coating on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[Physical Parameters]
Base resin: Water-based acrylic resin
Color: White, silver and other colors
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate primer.

[Recommended System]
Primer: HONG NGUYEN water-based anti-rust primer, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN water-based acrylic anti-corrosion topcoat, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: clean water (max by volume): brush 10%; airless spray 5%; conventional spray 20%
Cleaner: clean water

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Store in a cool, dry place.
Note
This product can be made in various metallic colors for traffic sign paint on steel and concrete surfaces — high visibility, clear reflective effect, good light and salt spray resistance.`,zh:`【产品概述】
宏源水性丙烯酸漆是一种单组份高级水性丙烯酸基面漆,具有良好的保色性,漆膜耐磨损、抗碰撞、耐盐水、矿物油和多种化学品,本品易修补,无重涂时间限制。

【适用范围】
作为面漆应用于中等至严重腐蚀环境中的钢结构和混凝土表面。也可用作各种电器、仪表、仪器、机械设备等金属器材的表面起装饰保护作用。

【物理参数】
漆基：水性丙烯酸树脂
颜色：白色、银色及其它颜色
比重：1.1㎏／L
闪点：38℃
体积固体含量：35％
理论涂布量：10㎡／L(干膜35微米计)
干燥时间：表干1h ,硬干24h
重涂间隔：最小4h,最大不限
施工说明
表面处理：施工表面必须清洁干燥,无松散漆层、油脂及其它污垢物。本品也可涂在预涂适当底漆的表面上。

【建议油漆配套】
底漆：宏源水性防锈底漆，参考用量：0.1L/㎡,即10㎡／L。
面漆：宏源水性丙烯酸防腐面漆涂两遍,
参考用量：0.2L/㎡,即5㎡／L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀释剂：清水
（最大用量）刷涂：10％；无气喷涂：5％； 一般喷涂：20％
清洗剂：清水

【安全守则】
1、施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2、贮存在阴凉干爽的地方。
备注
本品可做成闪光效果的各种颜色，作为交通标志漆施工在钢铁和混凝土表面，可见度高、反光效果清晰明朗、耐光耐盐雾性能良好。`,vi:`[Tổng quan sản phẩm]
Sơn acrylic nước HONG NGUYEN l\xe0 sơn phủ acrylic nước cao cấp một th\xe0nh phần giữ m\xe0u tốt. M\xe0ng sơn chịu m\xe0i m\xf2n, va đập, nước muối, dầu kho\xe1ng v\xe0 nhiều h\xf3a chất; dễ sửa chữa, kh\xf4ng giới hạn thời gian giữa c\xe1c lớp.

[Ứng dụng]
D\xf9ng l\xe0m sơn phủ tr\xean kết cấu th\xe9p v\xe0 bề mặt b\xea t\xf4ng trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng. Cũng d\xf9ng l\xe0m lớp phủ trang tr\xed bảo vệ cho thiết bị điện, đồng hồ, dụng cụ, m\xe1y m\xf3c v\xe0 c\xe1c vật kim loại kh\xe1c.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa acrylic nước
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.1 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 35%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 cứng 24 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa kh\xf4ng giới hạn
Hướng dẫn thi c\xf4ng
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch v\xe0 kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. C\xf3 thể thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: Sơn l\xf3t chống rỉ nước HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn phủ acrylic nước chống ăn m\xf2n HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: nước sạch (thể t\xedch tối đa): cọ 10%; phun kh\xf4ng kh\xed 5%; phun thường 20%
Chất vệ sinh: nước sạch

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa
C\xf3 thể sản xuất nhiều m\xe0u \xe1nh kim l\xe0m sơn dấu hiệu giao th\xf4ng tr\xean bề mặt th\xe9p v\xe0 b\xea t\xf4ng — độ nhận biết cao, hiệu ứng phản quang r\xf5 r\xe0ng, chịu s\xe1ng v\xe0 chịu muối tốt.`,es:`[Resumen del Producto]
HONG NGUYEN base de agua acrilico paint is a single-component high-grade base de agua acrilico capa superior with good retencion de color. The pelicula de pintura resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[Aplicaciones]
Used as a capa superior on acero structures and concreto surfaces in moderate to severe corrosive environments. Also used as a decorative protective recubrimiento on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[Parametros Fisicos]
Base resina: Water-based acrilico resina
Color: White, silver and other colors
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
Primer: HONG NGUYEN base de agua anti-rust imprimador, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN base de agua acrilico anticorrosivo capa superior, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: clean water (max by volume): brocha 10%; airless rociado 5%; conventional rociado 20%
Cleaner: clean water

[Seguridad]
1. Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2. Store in a cool, dry place.
Note
This product can be made in various metallic colors for traffic sign paint on acero and concreto surfaces — high visibility, clear reflective effect, good light and niebla salina resistance.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN أساس مائي أكريليك paint is a single-component high-grade أساس مائي أكريليك طبقة علوية with good الحفاظ على اللون. The غشاء الطلاء resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[التطبيقات]
Used as a طبقة علوية on صلب structures and خرسانة surfaces in moderate to severe corrosive environments. Also used as a decorative protective طلاء on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[المعلمات الفيزيائية]
Base راتنج: Water-based أكريليك راتنج
Color: White, silver and other لونs
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
Primer: HONG NGUYEN أساس مائي anti-rust برايمر, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN أساس مائي أكريليك مضاد للتآكل طبقة علوية, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: clean water (max by volume): فرشاة 10%; airless رش 5%; conventional رش 20%
Cleaner: clean water

[السلامة]
1. Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2. Store in a cool, dry place.
Note
This product can be made in various metallic لونs for traffic sign paint on صلب and خرسانة surfaces — high visibility, clear reflective effect, good light and رذاذ ملحي resistance.`}},{model:"HN-CUSTOM-12",desc:{en:"Water-based polyurethane paint — single-component high-grade water-based acrylic topcoat with good color retention; film resists abrasion, impact, salt water, mineral oils and many chemicals; easy to repair",zh:"水性丙烯酸漆是一种单组份高级水性丙烯酸基面漆,具有良好的保色性,漆膜耐磨损、抗碰撞、耐盐水、矿物油和多种化学品,本品易修…",vi:"Sơn polyurethane nước — sơn phủ acrylic nước cao cấp một thành phần giữ màu tốt; màng sơn chịu mài mòn, va đập, nước muối, dầu khoáng và nhiều hóa chất; dễ sửa chữa",es:"Pintura poliuretánica a base de agua — recubrimiento acrílico de alta calidad de un solo componente con buena retención de color; la película resiste al desgaste, impacto, agua salada, aceites minerales y muchos químicos; fácil de reparar",ar:"طلاء بولي يوريثاني بالماء - طلاء عالي الجودة أحادي المكون يحتفظ باللون جيدًا؛ يقاوم الفيلم التآكل والصدمة ومياه البحر وزيوت المعادن والعديد من المواد الكيميائية؛ سهل الإصلاح"},details:{en:`[Product Overview]
HONG NGUYEN water-based acrylic paint is a single-component high-grade water-based acrylic topcoat with good color retention. The paint film resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[Applications]
Used as a topcoat on steel structures and concrete surfaces in moderate to severe corrosive environments. Also used as a decorative protective coating on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[Physical Parameters]
Base resin: Water-based acrylic resin
Color: White, silver and other colors
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate primer.

[Recommended System]
Primer: HONG NGUYEN water-based anti-rust primer, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN water-based acrylic anti-corrosion topcoat, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: clean water (max by volume): brush 10%; airless spray 5%; conventional spray 20%
Cleaner: clean water

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Store in a cool, dry place.
Note
This product can be made in various metallic colors for traffic sign paint on steel and concrete surfaces — high visibility, clear reflective effect, good light and salt spray resistance.`,zh:`【产品概述】
宏源水性丙烯酸漆是一种单组份高级水性丙烯酸基面漆,具有良好的保色性,漆膜耐磨损、抗碰撞、耐盐水、矿物油和多种化学品,本品易修补,无重涂时间限制。

【适用范围】
作为面漆应用于中等至严重腐蚀环境中的钢结构和混凝土表面。也可用作各种电器、仪表、仪器、机械设备等金属器材的表面起装饰保护作用。

【物理参数】
漆基：水性丙烯酸树脂
颜色：白色、银色及其它颜色
比重：1.1㎏／L
闪点：38℃
体积固体含量：35％
理论涂布量：10㎡／L(干膜35微米计)
干燥时间：表干1h ,硬干24h
重涂间隔：最小4h,最大不限
施工说明
表面处理：施工表面必须清洁干燥,无松散漆层、油脂及其它污垢物。本品也可涂在预涂适当底漆的表面上。

【建议油漆配套】
底漆：宏源水性防锈底漆，参考用量：0.1L/㎡,即10㎡／L。
面漆：宏源水性丙烯酸防腐面漆涂两遍,
参考用量：0.2L/㎡,即5㎡／L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀释剂：清水
（最大用量）刷涂：10％；无气喷涂：5％； 一般喷涂：20％
清洗剂：清水

【安全守则】
1、施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2、贮存在阴凉干爽的地方。
备注
本品可做成闪光效果的各种颜色，作为交通标志漆施工在钢铁和混凝土表面，可见度高、反光效果清晰明朗、耐光耐盐雾性能良好。`,vi:`[Tổng quan sản phẩm]
Sơn acrylic nước HONG NGUYEN l\xe0 sơn phủ acrylic nước cao cấp một th\xe0nh phần giữ m\xe0u tốt. M\xe0ng sơn chịu m\xe0i m\xf2n, va đập, nước muối, dầu kho\xe1ng v\xe0 nhiều h\xf3a chất; dễ sửa chữa, kh\xf4ng giới hạn thời gian giữa c\xe1c lớp.

[Ứng dụng]
D\xf9ng l\xe0m sơn phủ tr\xean kết cấu th\xe9p v\xe0 bề mặt b\xea t\xf4ng trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng. Cũng d\xf9ng l\xe0m lớp phủ trang tr\xed bảo vệ cho thiết bị điện, đồng hồ, dụng cụ, m\xe1y m\xf3c v\xe0 c\xe1c vật kim loại kh\xe1c.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa acrylic nước
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.1 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 35%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 cứng 24 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa kh\xf4ng giới hạn
Hướng dẫn thi c\xf4ng
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch v\xe0 kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. C\xf3 thể thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: Sơn l\xf3t chống rỉ nước HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn phủ acrylic nước chống ăn m\xf2n HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: nước sạch (thể t\xedch tối đa): cọ 10%; phun kh\xf4ng kh\xed 5%; phun thường 20%
Chất vệ sinh: nước sạch

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa
C\xf3 thể sản xuất nhiều m\xe0u \xe1nh kim l\xe0m sơn dấu hiệu giao th\xf4ng tr\xean bề mặt th\xe9p v\xe0 b\xea t\xf4ng — độ nhận biết cao, hiệu ứng phản quang r\xf5 r\xe0ng, chịu s\xe1ng v\xe0 chịu muối tốt.`,es:`[Resumen del Producto]
HONG NGUYEN base de agua acrilico paint is a single-component high-grade base de agua acrilico capa superior with good retencion de color. The pelicula de pintura resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[Aplicaciones]
Used as a capa superior on acero structures and concreto surfaces in moderate to severe corrosive environments. Also used as a decorative protective recubrimiento on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[Parametros Fisicos]
Base resina: Water-based acrilico resina
Color: White, silver and other colors
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
Primer: HONG NGUYEN base de agua anti-rust imprimador, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN base de agua acrilico anticorrosivo capa superior, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: clean water (max by volume): brocha 10%; airless rociado 5%; conventional rociado 20%
Cleaner: clean water

[Seguridad]
1. Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2. Store in a cool, dry place.
Note
This product can be made in various metallic colors for traffic sign paint on acero and concreto surfaces — high visibility, clear reflective effect, good light and niebla salina resistance.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN أساس مائي أكريليك paint is a single-component high-grade أساس مائي أكريليك طبقة علوية with good الحفاظ على اللون. The غشاء الطلاء resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[التطبيقات]
Used as a طبقة علوية on صلب structures and خرسانة surfaces in moderate to severe corrosive environments. Also used as a decorative protective طلاء on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[المعلمات الفيزيائية]
Base راتنج: Water-based أكريليك راتنج
Color: White, silver and other لونs
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
Primer: HONG NGUYEN أساس مائي anti-rust برايمر, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN أساس مائي أكريليك مضاد للتآكل طبقة علوية, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: clean water (max by volume): فرشاة 10%; airless رش 5%; conventional رش 20%
Cleaner: clean water

[السلامة]
1. Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2. Store in a cool, dry place.
Note
This product can be made in various metallic لونs for traffic sign paint on صلب and خرسانة surfaces — high visibility, clear reflective effect, good light and رذاذ ملحي resistance.`}},{model:"HN-CUSTOM-13",desc:{en:"Water-based epoxy anti-corrosion paint — uses special epoxy polymer emulsion with high-hardness functional fillers and high-performance functional additives",zh:"水性环氧防腐漆采用特种环氧高分子聚合物树脂乳液和高硬度、功能型填料与高性能、功能型助剂等",vi:"Sơn chống ăn mòn epoxy nước — dùng nhũ tương polyme epoxy đặc biệt với chất độn chức năng độ cứng cao và phụ gia chức năng hiệu năng cao",es:"Pintura anticorrosiva epoxi a base de agua — utiliza emulsión de polímero epoxi especial con rellenos funcionales de alta dureza y aditivos funcionales de alto rendimiento",ar:"طلاء مضاد للتآكل الإيبوكسيد بالماء - يستخدم معلق بوليمر إيبوكسيدي خاص مع ملء وظيفي عالي الصلابة ومضافات وظيفية عالية الأداء"},details:{en:`[Product Overview]
HONG NGUYEN water-based epoxy anti-corrosion paint uses a special epoxy polymer resin emulsion combined with high-hardness functional fillers and high-performance functional additives, optimally blended and refined to combine abrasion resistance and flexibility. It is environmentally friendly, durable, and offers excellent value; it air-dries, is easy to apply, and can also be applied to incompletely cured concrete surfaces, suitable for tight-schedule construction.

[Applications]
This product is mainly suitable for metal heavy-duty anti-corrosion fields such as bridges, oil pipelines, ships, lifting machinery, steel structures, transformers, trains, automobiles and other components requiring high anti-corrosion performance; it is also suitable for offshore platform above-design-waterline parts and internal structures, and for anti-corrosion paint on internal surfaces of ship drinking water tanks and ship hull above-design-waterline parts and internal structures.

[Physical Parameters]
Base resin: Water-based epoxy resin
Color: Multiple colors
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 8 h, max unlimited

[Application Guide]
Recommended application steps and system:
1) 1 coat HONG NGUYEN water-based epoxy anti-corrosion primer, coverage approx. 8 m\xb2/kg (1 coat);
2) 2 coats HONG NGUYEN water-based epoxy anti-corrosion paint, coverage approx. 4 m\xb2/kg (2 coats).
Curing method: close to traffic for 3 days before foot access; 7-10 days before full use (at 25\xb0C, RH < 50%).`,zh:`【产品概述】
HONG NGUYEN(宏源)水性环氧防腐漆采用特种环氧高分子聚合物树脂乳液和高硬度、功能型填料与高性能、功能型助剂等，经过优化组合精制而成，集耐磨性和柔韧性能于一体。具有环保、耐用等功能，性价比优越；本品自干，施工方便，亦可涂装于未干透的水泥混凝土表面，适合赶工期施工。

【适用范围】
本产品主要适用于金属重防腐领域如：桥梁，石油管道、船舶、起重机械、钢结构、变压器、火车、汽车等要求较高的防腐性能的零部件，也适用于海洋平台设计水线以上部位及内部结构及船舶饮水仓内表面和船体设计水线以上部位及内部结构用防腐漆。

【物理参数】
基 料： 水性环氧树脂
颜 色： 多种颜色
理论涂布率： 10 ㎡/L（以28 um干膜计）
干 燥 时 间： 表 干：1小时
（20 ℃/70%RH） 硬 干：48小时
重 涂 间 隔： 最小8小时，最大不限

【施工说明】
建议施工步骤和配套方案：
1)HONG NGUYEN（宏源）水性环氧防腐底漆涂一遍，参考用量：8㎡/kg（1遍）；
2)HONG NGUYEN（宏源）水性环氧防腐两漆两遍，参考用量：4㎡/kg（2遍）。
养护方法：封闭3天后才上人，7-10天后方可以使用（在温度25℃，相对湿度＜50%条件下）。`,vi:`[Tổng quan sản phẩm]
Sơn chống ăn m\xf2n epoxy nước HONG NGUYEN d\xf9ng nhựa polyme epoxy đặc biệt kết hợp chất độn chức năng độ cứng cao v\xe0 phụ gia chức năng hiệu năng cao, phối hợp tối ưu, kết hợp khả năng chịu m\xe0i m\xf2n v\xe0 độ dẻo. Th\xe2n thiện m\xf4i trường, bền bỉ, hiệu quả kinh tế cao; sơn kh\xf4 tự nhi\xean, dễ thi c\xf4ng, c\xf3 thể thi c\xf4ng tr\xean bề mặt b\xea t\xf4ng chưa kh\xf4 ho\xe0n to\xe0n, ph\xf9 hợp c\xf4ng tr\xecnh tiến độ gấp.

[Ứng dụng]
Sản phẩm n\xe0y chủ yếu ph\xf9 hợp lĩnh vực chống ăn m\xf2n nặng kim loại như: cầu, ống dẫn dầu, t\xe0u biển, m\xe1y n\xe2ng, kết cấu th\xe9p, m\xe1y biến \xe1p, t\xe0u hỏa, \xf4 t\xf4 v\xe0 c\xe1c bộ phận y\xeau cầu khả năng chống ăn m\xf2n cao; cũng ph\xf9 hợp cho phần tr\xean mớn nước thiết kế gi\xe0n ngo\xe0i khơi v\xe0 kết cấu nội bộ, v\xe0 sơn chống ăn m\xf2n cho bề mặt trong khoan nước uống t\xe0u v\xe0 phần tr\xean mớn nước thiết kế th\xe2n t\xe0u v\xe0 kết cấu nội bộ.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa epoxy nước
M\xe0u: Nhiều m\xe0u
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 28 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ (20\xb0C/70% RH); kh\xf4 cứng 48 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 8 giờ, tối đa kh\xf4ng giới hạn

[Hướng dẫn thi c\xf4ng]
Quy tr\xecnh v\xe0 hệ sơn khuyến nghị:
1) 1 lớp sơn l\xf3t chống ăn m\xf2n epoxy nước HONG NGUYEN, lượng tham khảo: 8 m\xb2/kg (1 lớp);
2) 2 lớp sơn chống ăn m\xf2n epoxy nước HONG NGUYEN, lượng tham khảo: 4 m\xb2/kg (2 lớp).
Phương ph\xe1p bảo dưỡng: đ\xf3ng cửa 3 ng\xe0y mới cho người đi lại; 7-10 ng\xe0y mới sử dụng được (ở 25\xb0C, độ ẩm tương đối < 50%).`,es:`[Resumen del Producto]
HONG NGUYEN base de agua epoxi anticorrosivo paint uses a special epoxi polymer resina emulsion combined with high-hardness functional cargas and high-performance functional aditivos, optimally blended and refined to combine abrasion resistance and flexibility. It is environmentally friendly, durable, and offers excellent value; it air-dries, is easy to apply, and can also be applied to incompletely cured concreto surfaces, suitable for tight-schedule construction.

[Aplicaciones]
This product is mainly suitable for metal heavy-duty anticorrosivo fields such as bridges, oil pipelines, ships, lifting machinery, acero structures, transformers, trains, automobiles and other components requiring high anticorrosivo performance; it is also suitable for offshore platform above-design-waterline parts and internal structures, and for anticorrosivo paint on internal surfaces of ship drinking water tanks and ship hull above-design-waterline parts and internal structures.

[Parametros Fisicos]
Base resina: Water-based epoxi resina
Color: Multiple colors
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 8 h, max unlimited

[Guia de Aplicacion]
Recommended application steps and system:
1) 1 coat HONG NGUYEN base de agua epoxi anticorrosivo imprimador, coverage approx. 8 m\xb2/kg (1 coat);
2) 2 coats HONG NGUYEN base de agua epoxi anticorrosivo paint, coverage approx. 4 m\xb2/kg (2 coats).
Curing method: close to traffic for 3 days before foot access; 7-10 days before full use (at 25\xb0C, RH < 50%).`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN أساس مائي إيبوكسي مضاد للتآكل paint uses a special إيبوكسي polymer راتنج مستحلب combined with high-hardness functional حشوةs and high-performance functional إضافات, optimally blended and refined to combine abrasion resistance and flexibility. It is environmentally friendly, durable, and offers excellent value; it air-dries, is easy to apply, and can also be applied to incompletely cured خرسانة surfaces, suitable for tight-schedule construction.

[التطبيقات]
This product is mainly suitable for metal heavy-duty مضاد للتآكل fields such as bridges, oil pipelines, ships, lifting machinery, صلب structures, transformers, trains, automobiles and other components requiring high مضاد للتآكل performance; it is also suitable for offshore platform above-design-waterline parts and internal structures, and for مضاد للتآكل paint on internal surfaces of ship drinking water tanks and ship hull above-design-waterline parts and internal structures.

[المعلمات الفيزيائية]
Base راتنج: Water-based إيبوكسي راتنج
Color: Multiple لونs
Theoretical spreading rate: 10 m\xb2/L (at 28 \xb5m DFT)
Drying time: surface dry 1 h (20\xb0C/70% RH); hard dry 48 h
Recoat interval: min 8 h, max unlimited

[دليل التطبيق]
Recommended application steps and system:
1) 1 coat HONG NGUYEN أساس مائي إيبوكسي مضاد للتآكل برايمر, coverage approx. 8 m\xb2/kg (1 coat);
2) 2 coats HONG NGUYEN أساس مائي إيبوكسي مضاد للتآكل paint, coverage approx. 4 m\xb2/kg (2 coats).
Curing method: close to traffic for 3 days before foot access; 7-10 days before full use (at 25\xb0C, RH < 50%).`}},{model:"HN-CUSTOM-14",desc:{en:"Water-based specialty paint — single-component high-grade water-based acrylic topcoat with good color retention; film resists abrasion, impact, salt water, mineral oils and many chemicals; easy to repair",zh:"水性丙烯酸漆是一种单组份高级水性丙烯酸基面漆,具有良好的保色性,漆膜耐磨损、抗碰撞、耐盐水、矿物油和多种化学品,本品易修…",vi:"Sơn đặc biệt nước — sơn phủ acrylic nước cao cấp một thành phần giữ màu tốt; màng sơn chịu mài mòn, va đập, nước muối, dầu khoáng và nhiều hóa chất; dễ sửa chữa",es:"Pintura especializada a base de agua — recubrimiento acrílico de alta calidad de un solo componente con buena retención de color; la película resiste al desgaste, impacto, agua salada, aceites minerales y muchos químicos; fácil de reparar",ar:"طلاء متخصص بالماء - طلاء عالي الجودة أحادي المكون يحتفظ باللون جيدًا؛ يقاوم الفيلم التآكل والصدمة ومياه البحر وزيوت المعادن والعديد من المواد الكيميائية؛ سهل الإصلاح"},details:{en:`[Product Overview]
HONG NGUYEN water-based acrylic paint is a single-component high-grade water-based acrylic topcoat with good color retention. The paint film resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[Applications]
Used as a topcoat on steel structures and concrete surfaces in moderate to severe corrosive environments. Also used as a decorative protective coating on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[Physical Parameters]
Base resin: Water-based acrylic resin
Color: White, silver and other colors
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate primer.

[Recommended System]
Primer: HONG NGUYEN water-based anti-rust primer, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN water-based acrylic anti-corrosion topcoat, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless spray, brush or conventional spray
Thinner: clean water (max by volume): brush 10%; airless spray 5%; conventional spray 20%
Cleaner: clean water

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Store in a cool, dry place.
Note
This product can be made in various metallic colors for traffic sign paint on steel and concrete surfaces — high visibility, clear reflective effect, good light and salt spray resistance.`,zh:`【产品概述】
宏源水性丙烯酸漆是一种单组份高级水性丙烯酸基面漆,具有良好的保色性,漆膜耐磨损、抗碰撞、耐盐水、矿物油和多种化学品,本品易修补,无重涂时间限制。

【适用范围】
作为面漆应用于中等至严重腐蚀环境中的钢结构和混凝土表面。也可用作各种电器、仪表、仪器、机械设备等金属器材的表面起装饰保护作用。

【物理参数】
漆基：水性丙烯酸树脂
颜色：白色、银色及其它颜色
比重：1.1㎏／L
闪点：38℃
体积固体含量：35％
理论涂布量：10㎡／L(干膜35微米计)
干燥时间：表干1h ,硬干24h
重涂间隔：最小4h,最大不限
施工说明
表面处理：施工表面必须清洁干燥,无松散漆层、油脂及其它污垢物。本品也可涂在预涂适当底漆的表面上。

【建议油漆配套】
底漆：宏源水性防锈底漆，参考用量：0.1L/㎡,即10㎡／L。
面漆：宏源水性丙烯酸防腐面漆涂两遍,
参考用量：0.2L/㎡,即5㎡／L。
施工方法：无空气喷涂、刷涂或一般喷涂。
稀释剂：清水
（最大用量）刷涂：10％；无气喷涂：5％； 一般喷涂：20％
清洗剂：清水

【安全守则】
1、施工时必须保持空气流通，并采用一定的防护措施。避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。
2、贮存在阴凉干爽的地方。
备注
本品可做成闪光效果的各种颜色，作为交通标志漆施工在钢铁和混凝土表面，可见度高、反光效果清晰明朗、耐光耐盐雾性能良好。`,vi:`[Tổng quan sản phẩm]
Sơn acrylic nước HONG NGUYEN l\xe0 sơn phủ acrylic nước cao cấp một th\xe0nh phần giữ m\xe0u tốt. M\xe0ng sơn chịu m\xe0i m\xf2n, va đập, nước muối, dầu kho\xe1ng v\xe0 nhiều h\xf3a chất; dễ sửa chữa, kh\xf4ng giới hạn thời gian giữa c\xe1c lớp.

[Ứng dụng]
D\xf9ng l\xe0m sơn phủ tr\xean kết cấu th\xe9p v\xe0 bề mặt b\xea t\xf4ng trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nặng. Cũng d\xf9ng l\xe0m lớp phủ trang tr\xed bảo vệ cho thiết bị điện, đồng hồ, dụng cụ, m\xe1y m\xf3c v\xe0 c\xe1c vật kim loại kh\xe1c.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhựa acrylic nước
M\xe0u: Trắng, bạc v\xe0 c\xe1c m\xe0u kh\xe1c
Tỉ trọng: 1.1 kg/L
Điểm bắt lửa: 38\xb0C
H\xe0m lượng rắn thể t\xedch: 35%
Lượng lan l\xfd thuyết: 10 m\xb2/L (tại DFT 35 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 cứng 24 giờ
Thời gian giữa c\xe1c lớp: tối thiểu 4 giờ, tối đa kh\xf4ng giới hạn
Hướng dẫn thi c\xf4ng
Chuẩn bị bề mặt: Bề mặt cần sơn phải sạch v\xe0 kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất. C\xf3 thể thi c\xf4ng tr\xean bề mặt đ\xe3 sơn l\xf3t ph\xf9 hợp.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: Sơn l\xf3t chống rỉ nước HONG NGUYEN, lượng tham khảo: 0.1 L/m\xb2 (10 m\xb2/L)
Sơn phủ: 2 lớp sơn phủ acrylic nước chống ăn m\xf2n HONG NGUYEN, lượng tham khảo: 0.2 L/m\xb2 (5 m\xb2/L)
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường
Dung m\xf4i pha lo\xe3ng: nước sạch (thể t\xedch tối đa): cọ 10%; phun kh\xf4ng kh\xed 5%; phun thường 20%
Chất vệ sinh: nước sạch

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.
Ghi ch\xfa
C\xf3 thể sản xuất nhiều m\xe0u \xe1nh kim l\xe0m sơn dấu hiệu giao th\xf4ng tr\xean bề mặt th\xe9p v\xe0 b\xea t\xf4ng — độ nhận biết cao, hiệu ứng phản quang r\xf5 r\xe0ng, chịu s\xe1ng v\xe0 chịu muối tốt.`,es:`[Resumen del Producto]
HONG NGUYEN base de agua acrilico paint is a single-component high-grade base de agua acrilico capa superior with good retencion de color. The pelicula de pintura resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[Aplicaciones]
Used as a capa superior on acero structures and concreto surfaces in moderate to severe corrosive environments. Also used as a decorative protective recubrimiento on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[Parametros Fisicos]
Base resina: Water-based acrilico resina
Color: White, silver and other colors
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate imprimador.

[Sistema Recomendado]
Primer: HONG NGUYEN base de agua anti-rust imprimador, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN base de agua acrilico anticorrosivo capa superior, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless rociado, brocha or conventional rociado
Thinner: clean water (max by volume): brocha 10%; airless rociado 5%; conventional rociado 20%
Cleaner: clean water

[Seguridad]
1. Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2. Store in a cool, dry place.
Note
This product can be made in various metallic colors for traffic sign paint on acero and concreto surfaces — high visibility, clear reflective effect, good light and niebla salina resistance.`,ar:`[نظرة عامة على المنتج]
HONG NGUYEN أساس مائي أكريليك paint is a single-component high-grade أساس مائي أكريليك طبقة علوية with good الحفاظ على اللون. The غشاء الطلاء resists abrasion, impact, salt water, mineral oils and many chemicals; it is easy to repair and has no recoat time limit.

[التطبيقات]
Used as a طبقة علوية on صلب structures and خرسانة surfaces in moderate to severe corrosive environments. Also used as a decorative protective طلاء on various electrical appliances, instruments, meters, mechanical equipment and other metal articles.

[المعلمات الفيزيائية]
Base راتنج: Water-based أكريليك راتنج
Color: White, silver and other لونs
Specific gravity: 1.1 kg/L
Flash point: 38\xb0C
Solid volume content: 35%
Theoretical spreading rate: 10 m\xb2/L (at 35 \xb5m DFT)
Drying time: surface dry 1 h, hard dry 24 h
Recoat interval: min 4 h, max unlimited
Application Guide
Surface preparation: The surface to be coated must be clean and dry, free of loose paint, grease and other contaminants. The product can also be applied over a surface primed with an appropriate برايمر.

[النظام الموصى به]
Primer: HONG NGUYEN أساس مائي anti-rust برايمر, coverage approx. 0.1 L/m\xb2 (10 m\xb2/L)
Topcoat: 2 coats HONG NGUYEN أساس مائي أكريليك مضاد للتآكل طبقة علوية, coverage approx. 0.2 L/m\xb2 (5 m\xb2/L)
Application method: airless رش, فرشاة or conventional رش
Thinner: clean water (max by volume): فرشاة 10%; airless رش 5%; conventional رش 20%
Cleaner: clean water

[السلامة]
1. Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2. Store in a cool, dry place.
Note
This product can be made in various metallic لونs for traffic sign paint on صلب and خرسانة surfaces — high visibility, clear reflective effect, good light and رذاذ ملحي resistance.`}},{model:"HN-CUSTOM-15",desc:{en:"Fair-faced concrete protective agent — for fair-faced concrete structural members stacked from reinforced concrete modules",zh:"针对由钢筋混凝土模块堆垒而成的清水混凝土结构件",vi:"Chất bảo vệ bê tông trần — cho cấu kiện bê tông trần xếp chồng từ mô đun bê tông cốt thép",es:"Agente protector para hormigón visto — para elementos estructurales de hormigón apilados a partir de módulos de hormigón armado",ar:"عامل حماية للخرسانة الظاهرة - للعناصر الهيكلية للخرسانة الظاهرة المكدسة من وحدات الخرسانة المسلحة"},details:{en:`[Product Overview]
For fair-faced concrete structural members stacked from reinforced concrete modules, to prevent internal corrosion and aging of the concrete and to enhance surface stain and sunlight resistance, they must be coated for protection. Based on the characteristics of fair-faced concrete, we recommend using a fair-faced concrete protective agent with super weather resistance, anti-corrosion and anti-stain performance, so that after coating the concrete surface has uniform color, excellent water repellency and high scrub resistance while retaining the original architectural style of fair-faced concrete.

[Applications]
Suitable for protection of interior and exterior walls of buildings composed of alkaline materials such as concrete, fair-faced concrete and cement products.

[Physical Parameters]
Base resin: Fluorocarbon emulsion, etc.
Color: Transparent / transparent grey
Specific gravity: 2.3 kg/L
Solid volume content: 49%
Theoretical spreading rate: 12 m\xb2/L or 52 m\xb2/kg (at 40 \xb5m DFT)
Drying time: surface dry 1 h; through dry 3 days (full cure)
Recoat interval: min 1 h, max 7 days
Finish: Matte

[Application Guide]
Surface preparation: Steel surfaces must be dry, free of loose paint, grease and other contaminants. Blast-clean to Swedish standard Sa2.5, with surface roughness meeting RUGOTEST standard NO3, BN9A. Remove dust and grit before painting. For special surface preparations, consult our technical department.

[Recommended System]
Primer: 1 coat HONG NGUYEN fair-faced concrete dedicated sealing primer, coverage approx. 0.1-0.12 L/m\xb2
Intermediate: 1-2 coats HONG NGUYEN fair-faced concrete tinting paint, coverage approx. 0.2-0.25 L/m\xb2
Topcoat: 2 coats HONG NGUYEN fair-faced concrete protective agent topcoat, coverage approx. 0.15-0.2 L/m\xb2
Application method: airless spray, brush or conventional spray

[Safety]
1. Maintain adequate ventilation during application and use appropriate protective measures. Avoid inhaling solvent vapors or paint mist; prevent contact with skin and eyes.
2. Store in a cool, dry place.`,zh:`【产品概述】
针对由钢筋混凝土模块堆垒而成的清水混凝土结构件，为防止混凝土产生内部的锈蚀、老化，增强表面的抗污、抗晒性能，必须对其进行涂装保护，结合清水混凝土的特点，我们推荐使用具有超强耐候、抗腐蚀、抗污染性能的清水混凝土保护剂进行涂装，使混凝土表面经涂装后具有色泽一致、拒水性能优秀、高耐擦洗性能，同时亦具有原来清水砼混凝土的建筑风格。

【适用范围】
适用于混凝土、清水混凝土及水泥制品等碱性材料组成的建筑物内外墙保护。

【物理参数】
漆基：氟碳乳液等 颜色：透明/透明灰
比重：2.3㎏/L
固体体积含量：49％
理论涂布率：12㎡∕L即52㎡∕㎏〔干膜40\xb5m计）
干燥时间表干：1小时；实干：3天(完全固化)
重涂间隔：最小1小时,最大7天
漆面：哑光

【施工说明】
表面处理：钢铁表面必须干燥,无松散漆层、油脂及其它污垢物。表面喷砂处理至瑞典标准Sa2.5级,表面粗糙度达到RUGOTEST标准NO3,BN9A。涂装前除去尘埃及砂粒。特殊表面处理请向本公司技术部査询。

【建议油漆配套】
底漆：宏源清水混凝土专用封闭底漆涂一遍，参考用量：0.1~0.12L/㎡
中间漆：宏源清水混凝土修色漆1至2遍，参考用量：0.2~0.25L/㎡
面漆：宏源清水混凝土保护剂面漆二遍,参考用量0.15~0.2㎡∕L
施工方法：无气喷涂、刷涂或普通喷涂。

【安全守则】
1、施工时必须保持空气流通,并采用一定的防护措施。避免吸入溶剂蒸气或漆雾,皮肤、眼睛不得接触本品。
2、储存在阴凉干爽的地方。`,vi:`[Tổng quan sản phẩm]
Đối với cấu kiện b\xea t\xf4ng trần xếp chồng từ m\xf4 đun b\xea t\xf4ng cốt th\xe9p, để ngăn chặn sự ăn m\xf2n v\xe0 l\xe3o h\xf3a b\xean trong b\xea t\xf4ng, n\xe2ng cao khả năng chống bẩn v\xe0 chống nắng bề mặt, phải thi c\xf4ng lớp bảo vệ. Dựa tr\xean đặc điểm của b\xea t\xf4ng trần, ch\xfang t\xf4i khuyến nghị sử dụng chất bảo vệ b\xea t\xf4ng trần c\xf3 khả năng chịu thời tiết si\xeau việt, chống ăn m\xf2n v\xe0 chống bẩn, gi\xfap bề mặt b\xea t\xf4ng sau khi thi c\xf4ng c\xf3 m\xe0u đồng nhất, khả năng chống nước ưu việt v\xe0 khả năng lau rửa cao, đồng thời giữ được phong c\xe1ch kiến tr\xfac b\xea t\xf4ng trần gốc.

[Ứng dụng]
Ph\xf9 hợp bảo vệ tường trong nh\xe0 v\xe0 ngo\xe0i trời của c\xf4ng tr\xecnh gồm vật liệu kiềm như b\xea t\xf4ng, b\xea t\xf4ng trần v\xe0 sản phẩm xi măng.

[Th\xf4ng số vật l\xfd]
Nhựa nền: Nhũ tương fluorocarbon, v.v.
M\xe0u: Trong suốt / x\xe1m trong suốt
Tỉ trọng: 2.3 kg/L
H\xe0m lượng rắn thể t\xedch: 49%
Lượng lan l\xfd thuyết: 12 m\xb2/L tức 52 m\xb2/kg (tại DFT 40 \xb5m)
Thời gian kh\xf4: kh\xf4 bề mặt 1 giờ; kh\xf4 ho\xe0n to\xe0n 3 ng\xe0y
Thời gian giữa c\xe1c lớp: tối thiểu 1 giờ, tối đa 7 ng\xe0y
Bề mặt: Mờ

[Hướng dẫn thi c\xf4ng]
Chuẩn bị bề mặt: Bề mặt th\xe9p phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 tạp chất kh\xe1c. Phun c\xe1t đến ti\xeau chuẩn Thụy Điển Sa2.5, độ nh\xe1m bề mặt đạt ti\xeau chuẩn RUGOTEST NO3, BN9A. Loại bỏ bụi v\xe0 hạt c\xe1t trước khi sơn. Đối với xử l\xfd bề mặt đặc biệt, vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

[Hệ sơn khuyến nghị]
Sơn l\xf3t: 1 lớp sơn l\xf3t h\xe0n k\xedn chuy\xean dụng b\xea t\xf4ng trần HONG NGUYEN, lượng tham khảo: 0.1-0.12 L/m\xb2
Lớp giữa: 1-2 lớp sơn chỉnh m\xe0u b\xea t\xf4ng trần HONG NGUYEN, lượng tham khảo: 0.2-0.25 L/m\xb2
Sơn phủ: 2 lớp sơn phủ chất bảo vệ b\xea t\xf4ng trần HONG NGUYEN, lượng tham khảo 0.15-0.2 L/m\xb2
Phương ph\xe1p thi c\xf4ng: phun kh\xf4ng kh\xed, cọ hoặc phun thường

[An to\xe0n]
1. Đảm bảo th\xf4ng gi\xf3 tốt khi thi c\xf4ng v\xe0 \xe1p dụng c\xe1c biện ph\xe1p bảo vệ ph\xf9 hợp. Tr\xe1nh h\xedt phải hơi dung m\xf4i hoặc sương sơn; tr\xe1nh tiếp x\xfac với da v\xe0 mắt.
2. Bảo quản ở nơi m\xe1t, kh\xf4 r\xe1o.`,es:`[Resumen del Producto]
For fair-faced concreto structural members stacked from reinforced concreto modules, to prevent internal corrosion and aging of the concreto and to enhance surface stain and sunlight resistance, they must be coated for protection. Based on the characteristics of fair-faced concreto, we recommend using a fair-faced concreto protective agent with super resistencia climatica, anticorrosivo and anti-stain performance, so that after recubrimiento the concreto surface has uniform color, excellent water repellency and high scrub resistance while retaining the original arquitectonico style of fair-faced concreto.

[Aplicaciones]
Suitable for protection of interior and pared exteriors of buildings composed of alkaline materials such as concreto, fair-faced concreto and cement products.

[Parametros Fisicos]
Base resina: Fluorocarbon emulsion, etc.
Color: Transparent / transparent grey
Specific gravity: 2.3 kg/L
Solid volume content: 49%
Theoretical spreading rate: 12 m\xb2/L or 52 m\xb2/kg (at 40 \xb5m DFT)
Drying time: surface dry 1 h; through dry 3 days (full cure)
Recoat interval: min 1 h, max 7 days
Finish: Matte

[Guia de Aplicacion]
Surface preparation: Steel surfaces must be dry, free of loose paint, grease and other contaminants. Blast-clean to Swedish standard Sa2.5, with surface roughness meeting RUGOTEST standard NO3, BN9A. Remove dust and grit before painting. For special surface preparations, consult our technical department.

[Sistema Recomendado]
Primer: 1 coat HONG NGUYEN fair-faced concreto dedicated imprimador sellador, coverage approx. 0.1-0.12 L/m\xb2
Intermediate: 1-2 coats HONG NGUYEN fair-faced concreto tinting paint, coverage approx. 0.2-0.25 L/m\xb2
Topcoat: 2 coats HONG NGUYEN fair-faced concreto protective agent capa superior, coverage approx. 0.15-0.2 L/m\xb2
Application method: airless rociado, brocha or conventional rociado

[Seguridad]
1. Maintain adequate ventilacion during application and use appropriate medidas de proteccion. Avoid inhaling solvent vapors or paint mist; prevent contact with piel and ojos.
2. Store in a cool, dry place.`,ar:`[نظرة عامة على المنتج]
For fair-faced خرسانة structural members stacked from reinforced خرسانة modules, to prevent internal corrosion and aging of the خرسانة and to enhance surface stain and sunlight resistance, they must be coated for protection. Based on the characteristics of fair-faced خرسانة, we recommend using a fair-faced خرسانة protective agent with super مقاومة الطقس, مضاد للتآكل and anti-stain performance, so that after طلاء the خرسانة surface has uniform لون, excellent water repellency and high scrub resistance while retaining the original معماري style of fair-faced خرسانة.

[التطبيقات]
Suitable for protection of interior and جدار خارجيs of buildings composed of alkaline materials such as خرسانة, fair-faced خرسانة and cement products.

[المعلمات الفيزيائية]
Base راتنج: Fluorocarbon مستحلب, etc.
Color: Transparent / transparent grey
Specific gravity: 2.3 kg/L
Solid volume content: 49%
Theoretical spreading rate: 12 m\xb2/L or 52 m\xb2/kg (at 40 \xb5m DFT)
Drying time: surface dry 1 h; through dry 3 days (full cure)
Recoat interval: min 1 h, max 7 days
Finish: Matte

[دليل التطبيق]
Surface preparation: Steel surfaces must be dry, free of loose paint, grease and other contaminants. Blast-clean to Swedish standard Sa2.5, with surface roughness meeting RUGOTEST standard NO3, BN9A. Remove dust and grit before painting. For special surface preparations, consult our technical department.

[النظام الموصى به]
Primer: 1 coat HONG NGUYEN fair-faced خرسانة dedicated برايمر ساد, coverage approx. 0.1-0.12 L/m\xb2
Intermediate: 1-2 coats HONG NGUYEN fair-faced خرسانة tinting paint, coverage approx. 0.2-0.25 L/m\xb2
Topcoat: 2 coats HONG NGUYEN fair-faced خرسانة protective agent طبقة علوية, coverage approx. 0.15-0.2 L/m\xb2
Application method: airless رش, فرشاة or conventional رش

[السلامة]
1. Maintain adequate تهوية during application and use appropriate تدابير وقائية. Avoid inhaling solvent vapors or paint mist; prevent contact with الجلد and العيون.
2. Store in a cool, dry place.`}}],image:"/images/lab.jpg",applications:[{en:"OEM distributors & private label",zh:"OEM 经销商与贴牌",vi:"Nhà phân phối OEM & nhãn riêng",es:"Distribuidores OEM y marcas blancas",ar:"الموزعون OEM والعلامات التجارية الخاصة"},{en:"Specialty industrial projects",zh:"特种工业项目",vi:"Dự án công nghiệp đặc thù",es:"Proyectos industriales especializados",ar:"المشاريع الصناعية المتخصصة"},{en:"Compliance-driven sectors (food, marine, drinking water)",zh:"合规驱动行业(食品、船舶、饮用水)",vi:"Ngành cần tuân thủ (thực phẩm, hàng hải, nước uống)",es:"Sectores impulsados por el cumplimiento (alimentación, marítimo, agua potable)",ar:"القطاعات المدفوعة بالامتثال (الغذاء، البحرية، مياه الشرب)"},{en:"Co-branded marketing programs",zh:"联合品牌营销项目",vi:"Chương trình marketing đồng thương hiệu",es:"Programas de marketing de marcas conjuntas",ar:"برامج التسويق المشترك للعلامات التجارية"}]}],_=[{no:"01",title:{en:"Factory Direct",zh:"工厂直供",vi:"Cung ứng từ nhà máy",es:"Directo de fábrica",ar:"مباشر من المصنع"},desc:{en:"50,000 t/yr in-house production. No middlemen, no reseller markup. OEM pricing at scale.",zh:"年产5万吨自主生产。无中间商,无加价。规模化OEM价格。",vi:"Năng lực 50.000 tấn/năm nội bộ. Không trung gian, không phụ phí. Giá OEM quy mô lớn.",es:"Producción interna de 50,000 t/año. Sin intermediarios, sin margen de revendedor. Precios OEM a escala.",ar:"إنتاج داخلي 50,000 طن/سنة. بدون وكلاء أو زيادة سعر من قبل الموزعين. أسعار OEM بالجملة."}},{no:"02",title:{en:"Export-Ready",zh:"出口就绪",vi:"Sẵn sàng xuất khẩu",es:"Listo para exportar",ar:"جاهز للتصدير"},desc:{en:"22 years serving 60+ countries. Full export docs: CO, CIQ, MSDS, TDS, UN packaging.",zh:"22年服务60+国家。全套出口单证:CO、CIQ、MSDS、TDS、UN包装。",vi:"22 năm phục vụ 60+ quốc gia. Đầy đủ chứng từ: CO, CIQ, MSDS, TDS, đóng gói UN.",es:"22 años sirviendo a 60+ países. Documentación completa de exportación: CO, CIQ, MSDS, TDS, embalaje UN.",ar:"22 عامًا في خدمة 60+ دولة. وثائق تصدير كاملة: شهادة منشأ (CO)، تفتيش جودة صيني (CIQ)، بيانات السلامة والمواد (MSDS)، بيان تقني للمنتج (TDS)، تعبئة الأمم المتحدة (UN)."}},{no:"03",title:{en:"Custom Formulation",zh:"定制配方",vi:"Phối chế theo yêu cầu",es:"Fórmula personalizada",ar:"صياغة مخصصة"},desc:{en:"12 senior chemists. Custom color, hardness, corrosion grade, temperature rating. Sample in 7 days.",zh:"12名资深化学师。定制颜色、硬度、防腐等级、耐温等级。7天出样。",vi:"12 kỹ sư hóa học. Màu, độ cứng, cấp ăn mòn, cấp nhiệt theo yêu cầu. Mẫu trong 7 ngày.",es:"12 químicos seniors. Color, dureza, grado anticorrosivo, clasificación de temperatura personalizados. Muestra en 7 días.",ar:"12 كيميائيًا كبار. تخصيص اللون، الصلابة، درجة مقاومة التآكل، تصنيف الحرارة. عينة في 7 أيام."}},{no:"04",title:{en:"Stable Quality",zh:"品质稳定",vi:"Chất lượng ổn định",es:"Calidad estable",ar:"جودة مستقرة"},desc:{en:"Batch-to-batch consistency guaranteed. Each batch ships with full QC report. 24-month warranty.",zh:"批次间一致性有保障。每批附完整QC报告。24个月质保。",vi:"Đồng đều giữa các lô. Mỗi lô kèm báo cáo QC đầy đủ. Bảo hành 24 tháng.",es:"Consistencia de lote a lote garantizada. Cada lote se envía con informe completo de control de calidad. Garantía de 24 meses.",ar:"تم ضمان الاتساق من دفعة إلى دفعة. كل دفعة يتم شحنها مع تقرير كامل لمراقبة الجودة. ضمان لمدة 24 شهرًا."}},{no:"05",title:{en:"Low MOQ",zh:"低起订量",vi:"MOQ thấp",es:"MOQ bajo",ar:"كمية طلب أدنى (MOQ) منخفضة"},desc:{en:"200 kg MOQ. Mixed tones welcome. Trial orders for new distributors. Sample shipping in 48h.",zh:"200公斤起订。接受混色。支持新经销商试单。48小时寄样。",vi:"MOQ 200 kg. Nhận phối màu hỗn hợp. Đơn thử nghiệm cho nhà phân phối mới. Giao mẫu 48 giờ.",es:"MOQ de 200 kg. Mezcla de tonos bienvenida. Pedidos de prueba para nuevos distribuidores. Envío de muestras en 48h.",ar:"كمية طلب أدنى (MOQ) 200 كجم. ترحيب بمزيج من الألوان. طلبات تجريبية للموزعين الجدد. شحن العينات خلال 48 ساعة."}},{no:"06",title:{en:"OEM / Private Label",zh:"OEM / 贴牌",vi:"OEM / Nhãn riêng",es:"OEM / Marca blanca",ar:"OEM / علامة تجارية خاصة"},desc:{en:"Custom drum labels, branded packaging, marketing collateral. Your brand, our chemistry.",zh:"定制桶身标签、品牌包装、营销物料。您的品牌,我们的化学。",vi:"Nhãn thùng riêng, bao bì thương hiệu, tài liệu marketing. Thương hiệu của bạn, hóa học của chúng tôi.",es:"Etiquetas de tambor personalizadas, embalaje con marca material de marketing. Su marca, nuestra química.",ar:"بطاقات برميل مخصصة، تعبئة بعلامة تجارية، مواد تسويقية. علامتكم، كيمياؤنا."}},{no:"07",title:{en:"Engineering On-Site",zh:"现场工程支持",vi:"Hỗ trợ kỹ thuật tại hiện trường",es:"Ingeniería en sitio",ar:"هندسة على الموقع"},desc:{en:"Optional site survey, surface prep specification, and applicator training for large projects.",zh:"大型项目可选现场勘测、表面处理规范及施工培训。",vi:"Dự án lớn: khảo sát hiện trường, quy trình xử lý bề mặt, đào tạo thợ thi công.",es:"Reconocimiento de sitio opcional, especificación de preparación de superficie y capacitación para aplicadores en proyectos grandes.",ar:"مسح موقع اختياري، مواصفات تحضير السطح، وتدريب لمستخدمي التطبيق للمشاريع الكبيرة."}},{no:"08",title:{en:"Full Certifications",zh:"认证齐全",vi:"Đầy đủ chứng nhận",es:"Certificaciones completas",ar:"شهادات كاملة"},desc:{en:"ISO 9001, ISO 14001, CE, SGS tested, fire-rating Class A, low-VOC grades available.",zh:"ISO 9001、ISO 14001、CE、SGS检测,可选A级防火、低VOC级别。",vi:"ISO 9001, ISO 14001, CE, SGS, cấp cháy Class A, có cấp VOC thấp.",es:"ISO 9001, ISO 14001, CE, SGS tested, fire-rating Class A, low-VOC grades available.",ar:"ISO 9001، ISO 14001، CE، اختبارات SGS، تصنيف حرارة Class A، درجات VOC منخفضة متاحة."}}],$=[{code:"APP-01",title:{en:"Steel Structure Anti-Corrosion",zh:"钢结构防腐",vi:"Chống ăn mòn kết cấu thép",es:"Steel Structure Anti-Corrosion",ar:"Protección contra corrosión para estructuras de acero"},image:"/images/app-steel-structure.jpg"},{code:"APP-02",title:{en:"Industrial Floor Systems",zh:"工业地坪系统",vi:"Hệ sàn công nghiệp",es:"Industrial Floor Systems",ar:"Sistemas de piso industrial"},image:"/images/app-floor-systems.jpg"},{code:"APP-03",title:{en:"Outdoor Equipment Weatherproof",zh:"户外设备耐候",vi:"Thiết bị ngoại thất chịu thời tiết",es:"Outdoor Equipment Weatherproof",ar:"Protección contra el clima para equipos exteriores"},image:"/images/app-outdoor-equipment.jpg"},{code:"APP-04",title:{en:"Commercial Building Facades",zh:"商业建筑外墙",vi:"Mặt tiền tòa thương mại",es:"Commercial Building Facades",ar:"Fachadas de edificios comerciales"},image:"/images/app-building-facade.jpg"},{code:"APP-05",title:{en:"Ship Hull & Marine",zh:"船体与海洋",vi:"Thân tàu & hàng hải",es:"Ship Hull & Marine",ar:"Casco de barco & marino"},image:"/images/app-ship-hull.jpg"},{code:"APP-06",title:{en:"Bridge & Infrastructure",zh:"桥梁与基础设施",vi:"Cầu & hạ tầng",es:"Bridge & Infrastructure",ar:"Puentes e infraestructura"},image:"/images/app-bridge.jpg"}],X=[{code:"CASE-001",location:{en:"Vietnam",zh:"越南",vi:"Việt Nam",es:"Vietnam",ar:"Vietnam"},year:"2025",title:{en:"Amata Steel Plant — Full Anti-Corrosion Package",zh:"Amata钢铁厂——全套防腐方案",vi:"Nhà thép Amata — Gói chống ăn mòn toàn diện",es:"Amata Steel Plant — Full Anti-Corrosion Package",ar:"Planta Amata de Acero — Paquete completo de protección contra corrosión"},summary:{en:"12,000 m² of structural steel coated with epoxy zinc primer + polyurethane topcoat, completed in 45 days with full QC documentation.",zh:"12,000 m²钢结构采用环氧富锌底漆+聚氨酯面漆涂装,45天完成,附带完整QC文档。",vi:"12.000 m² kết cấu thép sơn lót epoxy giàm kẽm + lớp phủ PU, hoàn thành trong 45 ngày kèm hồ sơ QC đầy đủ."},image:"/images/case-steel-plant.jpg",metrics:[{label:{en:"Area",zh:"面积",vi:"Diện tích",es:"Area",ar:"Área"},value:"12,000 m²"},{label:{en:"System",zh:"系统",vi:"Hệ thống",es:"System",ar:"Sistema"},value:"Epoxy Zn + PU"},{label:{en:"Duration",zh:"工期",vi:"Thời gian",es:"Duration",ar:"Duración"},value:"45 days"}]},{code:"CASE-002",location:{en:"Indonesia",zh:"印度尼西亚",vi:"Indonesia",es:"Indonesia",ar:"Indonesia"},year:"2025",title:{en:"Cikarang Warehouse — 8,500 m² Epoxy Floor",zh:"Cikarang仓库——8,500 m²环氧地坪",vi:"Kho Cikarang — 8.500 m² sàn epoxy",es:"Cikarang Warehouse — 8,500 m² Epoxy Floor",ar:"Almacén de Cikarang — Piso de epoxi de 8,500 m²"},summary:{en:"Self-leveling epoxy with anti-skid topcoat. Forklift-rated, 5-year warranty, completed for a major logistics operator.",zh:"自流平环氧加防滑面漆。叉车承重,5年质保,为大型物流企业完工。",vi:"Epoxy tự chảy với lớp phủ chống trượt. Chịu xe nâng, bảo hành 5 năm, hoàn thành cho nhà điều hành logistics lớn."},image:"/images/case-warehouse.jpg",metrics:[{label:{en:"Area",zh:"面积",vi:"Diện tích",es:"Area",ar:"Área"},value:"8,500 m²"},{label:{en:"System",zh:"系统",vi:"Hệ thống",es:"System",ar:"Sistema"},value:"Self-leveling epoxy"},{label:{en:"Warranty",zh:"质保",vi:"Bảo hành",es:"Warranty",ar:"Garantía"},value:"5 years"}]},{code:"CASE-003",location:{en:"Saudi Arabia",zh:"沙特阿拉伯",vi:"Ả Rập Xê Út",es:"Saudi Arabia",ar:"Arabia Saudita"},year:"2024",title:{en:"Riyadh Commercial Tower — Exterior Facade",zh:"利雅得商业塔楼——外墙",vi:"Tháp thương mại Riyadh — Mặt tiền",es:"Riyadh Commercial Tower — Exterior Facade",ar:"Torre Comercial de Riad — Fachada exterior"},summary:{en:"Fluorocarbon topcoat system across 22,000 m² of facade with 15-year weatherability certification.",zh:"22,000 m²外墙采用氟碳面漆系统,附带15年耐候性认证。",vi:"22.000 m² mặt tiền sử dụng hệ fluorocarbon, kèm chứng nhận chịu thời tiết 15 năm."},image:"/images/case-tower.jpg",metrics:[{label:{en:"Area",zh:"面积",vi:"Diện tích",es:"Area",ar:"Área"},value:"22,000 m²"},{label:{en:"System",zh:"系统",vi:"Hệ thống",es:"System",ar:"Sistema"},value:"FEVE fluorocarbon"},{label:{en:"Weatherability",zh:"耐候性",vi:"Chịu thời tiết",es:"Weatherability",ar:"Resistencia climática"},value:"15 years"}]}],Z=[{code:"ISO 9001",title:{en:"Quality Management",zh:"质量管理",vi:"Quản lý chất lượng",es:"Quality Management",ar:"Gestión de calidad"}},{code:"ISO 14001",title:{en:"Environmental",zh:"环境管理",vi:"Môi trường",es:"Environmental",ar:"Ambiental"}},{code:"CE",title:{en:"EU Conformity",zh:"欧盟符合性",vi:"Phù hợp EU",es:"EU Conformity",ar:"Conformidad de la UE"}},{code:"SGS",title:{en:"Test Reports",zh:"检测报告",vi:"Báo cáo kiểm tra",es:"Informes de Pruebas",ar:"تقارير الاختبار"}},{code:"Class A",title:{en:"Fire Rating",zh:"防火等级",vi:"Cấp cháy",es:"Clasificación de Incendios",ar:"مقاومة الحريق"}},{code:"Low VOC",title:{en:"< 50 g/L",zh:"< 50 g/L",vi:"< 50 g/L",es:"< 50 g/L",ar:"< 50 غ/لتر"}}],J=[{quote:{en:"HONG NGUYEN supplied 280 tons of epoxy floor coating for our new logistics hub in Jakarta. Quality was consistent across batches and the technical team helped us tune the formula for tropical humidity.",zh:"宏源为我们雅加达的新物流中心供应了280吨环氧地坪涂料。批次质量稳定,技术团队协助我们针对热带湿度调整配方。",vi:"HONG NGUYEN cung cấp 280 tấn sơn nền epoxy cho trung tâm logistics mới tại Jakarta. Chất lượng đồng đều giữa các lô và đội kỹ thuật giúp điều chỉnh công thức cho khí hậu nhiệt đới."},name:"Budi Hartono",role:{en:"Procurement Director, PT. Sinar Mas Logistics",zh:"采购总监,PT. Sinar Mas Logistics",vi:"Giám đốc mua hàng, PT. Sinar Mas Logistics",es:"Director de Adquisiciones, PT. Sinar Mas Logistics",ar:"مدير المشتريات، شركة سينار ماس للخدمات اللوجستية"}},{quote:{en:"We've been sourcing anti-corrosion paint from HONG NGUYEN for our bridge projects for 7 years. Salt spray test results consistently exceed 1500 hours. Reliable partner.",zh:"我们7年来一直从宏源采购桥梁项目的防腐涂料。盐雾测试结果持续超过1500小时。可靠的合作伙伴。",vi:"Chúng tôi nhập sơn chống ăn mòn từ HONG NGUYEN cho dự án cầu suốt 7 năm. Kết quả phun muối luôn vượt 1500 giờ. Đối tác đáng tin cậy."},name:"Eng. Mohammed Al-Rashid",role:{en:"Project Manager, Riyadh Infrastructure Co.",zh:"项目经理,利雅得基础设施公司",vi:"Quản lý dự án, Riyadh Infrastructure Co.",es:"Gerente de Proyecto, Riyadh Infrastructure Co.",ar:"مدير المشروع، شركة الرياض للبنية التحتية"}},{quote:{en:"We needed a custom high-temp coating rated 500°C for our boiler manufacturing line. HONG NGUYEN's R&D team developed a working sample in 10 days, full production in 30. Outstanding OEM service.",zh:"我们需要为锅炉生产线定制耐500°C的高温涂料。宏源研发团队10天开发出可用样品,30天量产。出色的OEM服务。",vi:"Chúng tôi cần sơn chịu nhiệt 500°C cho dây chuyền sản xuất lò hơi. Đội R&D HONG NGUYEN ra mẫu trong 10 ngày, sản xuất trong 30 ngày. Dịch vụ OEM xuất sắc."},name:"Lars Eriksson",role:{en:"Technical Director, Nordic Boiler Systems AB",zh:"技术总监,北欧锅炉系统公司",vi:"Giám đốc kỹ thuật, Nordic Boiler Systems AB",es:"Director Técnico, Nordic Boiler Systems AB",ar:"المدير الفني، نورديك بويلر سيستمز"}}],ee=["SINAR MAS","VINCI","POSCO","SKANSKA","CSCEC","SIEMENS"],ea=[{en:"SE Asia",zh:"东南亚",vi:"Đông Nam Á",es:"Sudeste Asiático",ar:"جنوب شرق آسيا"},{en:"Middle East",zh:"中东",vi:"Trung Đông",es:"Medio Oriente",ar:"الشرق الأوسط"},{en:"Africa",zh:"非洲",vi:"Châu Phi",es:"África",ar:"أفريقيا"},{en:"South America",zh:"南美",vi:"Nam Mỹ",es:"Sudamérica",ar:"أمريكا الجنوبية"},{en:"Eastern Europe",zh:"东欧",vi:"Đông Âu",es:"Europa Oriental",ar:"أوروبا الشرقية"},{en:"Central Asia",zh:"中亚",vi:"Trung Á",es:"Asia Central",ar:"آسيا الوسطى"}],en=[{code:"SOL-01",title:{en:"Oil, Gas & Petrochemical",zh:"石油、天然气与石化",vi:"Dầu khí & Hóa chất",es:"Petróleo, Gas & Petroquímica",ar:"النفط والغاز والبتروكيماويات"},desc:{en:"Corrosion-critical assets: storage tanks, refineries, pipelines. Multi-coat epoxy/PU systems rated for chemical immersion and C5 marine environments.",zh:"腐蚀关键资产:储罐、炼厂、管道。多层环氧/PU体系,适用于化学品浸渍与C5海洋环境。",vi:"Tài sản trọng yếu ăn mòn: bồn chứa, lọc hóa dầu, đường ống. Hệ epoxy/PU nhiều lớp cho môi trường ngâm hóa chất và biển C5.",es:"Activos críticos contra la corrosión: tanques de almacenamiento, refinerías, tuberías. Sistemas de epoxi/poliuretano de múltiples capas clasificados para inmersión química y ambientes marinos C5.",ar:"الاستثمارات الحرجة ضد التآكل: خزانات التخزين والمنشآت النفطية والأنابيب. أنظمة الإيبوكسى/البولي يوريثين متعددة الطبقات المصنفة للاغتراق الكيميائي والبيئات البحرية C5."},products:[{en:"Anti-Corrosion Coatings",zh:"防腐涂料",vi:"Sơn chống ăn mòn",es:"Recubrimientos Anti-Corrosión",ar:"الطلاءات المضادة للتآكل"},{en:"High-Temperature Coatings",zh:"耐高温涂料",vi:"Sơn chịu nhiệt cao",es:"Recubrimientos de Alta Temperatura",ar:"الطلاءات عالية الحرارة"}],icon:"Factory",image:"/images/sol-oil-gas.jpg"},{code:"SOL-02",title:{en:"Marine & Offshore",zh:"海洋与离岸",vi:"Hàng hải & ngoài khơi",es:"Marino & Offshore",ar:"بحري و offshore"},desc:{en:"Ship hulls, offshore platforms and splash zones. Salt-spray ≥ 1500 h, cathodic-disbondment resistant systems with full IMO documentation.",zh:"船体、海上平台及飞溅区。盐雾≥1500小时,抗阴极剥离体系,附完整IMO文件。",vi:"Thân tàu, giàn khoan ngoài khơi và vùng văng. Phun muối ≥ 1500 giờ, chống bong tróc catot, hồ sơ IMO đầy đủ.",es:"Cascas de barcos, plataformas offshore y zonas de salpicadura. Prueba de niebla salina ≥ 1500 h, sistemas resistentes a la descatódica con documentación completa IMO.",ar:"هياكيل السفن والمنصات البحرية ومناطق الرشح. اختبار الرذاذ الملحي ≥ 1500 ساعة، أنظمة مقاومة للانفصال الكاثودي مع وثائق IMO كاملة."},products:[{en:"Anti-Corrosion Coatings",zh:"防腐涂料",vi:"Sơn chống ăn mòn",es:"Recubrimientos Anti-Corrosión",ar:"الطلاءات المضادة للتآكل"},{en:"Custom Engineered Coatings",zh:"定制工程涂料",vi:"Sơn kỹ thuật theo yêu cầu",es:"Recubrimientos Personalizados de Ingeniería",ar:"الطلاءات المخصصة هندسياً"}],icon:"Ship",image:"/images/sol-marine.jpg"},{code:"SOL-03",title:{en:"Power & Energy",zh:"电力与能源",vi:"Điện năng & Năng lượng",es:"Energía & Potencia",ar:"الطاقة والقدرة"},desc:{en:"Boilers, stacks, exhausts and turbine housings. Heat-resistant silicone systems up to 600°C with thermal-cycling stability.",zh:"锅炉、烟囱、排气管及涡轮壳体。耐600°C有机硅体系,抗热循环。",vi:"Lò hơi, ống khói, ống xả và vỏ tuabin. Hệ silicone chịu 600°C, ổn định sốc nhiệt.",es:"Calderas, chimeneas, escapes y carcasas de turbinas. Sistemas de silicona resistentes al calor hasta 600°C con estabilidad en ciclos térmicos.",ar:"الغلايات والمداخن والعادم و Cases التوربينات. أنظمة السيليكون مقاومة للحرارة حتى 600 درجة مئوية مع استقرار في الدورات الحرارية."},products:[{en:"High-Temperature Coatings",zh:"耐高温涂料",vi:"Sơn chịu nhiệt cao",es:"Recubrimientos de Alta Temperatura",ar:"الطلاءات عالية الحرارة"},{en:"Custom Engineered Coatings",zh:"定制工程涂料",vi:"Sơn kỹ thuật theo yêu cầu",es:"Recubrimientos Personalizados de Ingeniería",ar:"الطلاءات المخصصة هندسياً"}],icon:"Flame",image:"/images/sol-power.jpg"},{code:"SOL-04",title:{en:"Infrastructure & Bridges",zh:"基础设施与桥梁",vi:"Hạ tầng & Cầu",es:"Infraestructura & Puentes",ar:"البنية التحتية والجسور"},desc:{en:"Long-span steel bridges and transit infrastructure. 25-year design-life coating systems with in-house applicator training.",zh:"大跨度钢桥与交通基础设施。25年设计寿命涂料体系,含自主施工培训。",vi:"Cầu thép nhịp dài và hạ tầng giao thông. Hệ sơn thiết kế 25 năm, kèm đào tạo thi công nội bộ.",es:"Puentes de acero de gran luz e infraestructura de tránsito. Sistemas de recubrimiento de vida útil de diseño de 25 años con capacitación interna para aplicadores.",ar:"جسور الفولاذ ذات المدى الطويل وبنية تحتية للنقل. أنظمة طلاء مدتها التصميمية 25 عامًا مع تدريب داخلي لمستخدميها."},products:[{en:"Anti-Corrosion Coatings",zh:"防腐涂料",vi:"Sơn chống ăn mòn",es:"Recubrimientos Anti-Corrosión",ar:"طلاءات مضادة للتآكل"},{en:"Custom Engineered Coatings",zh:"定制工程涂料",vi:"Sơn kỹ thuật theo yêu cầu",es:"Recubrimientos Personalizados e Ingeniería",ar:"طلاءات مُهندسة مخصصة"}],icon:"Construction",image:"/images/sol-infrastructure.jpg"},{code:"SOL-05",title:{en:"Commercial Architecture",zh:"商业建筑",vi:"Kiến trúc thương mại",es:"Arquitectura Comercial",ar:"العمارة التجارية"},desc:{en:"Towers, malls and public buildings. FEVE fluorocarbon and elastic anti-crack systems with 15-year weatherability.",zh:"塔楼、商场及公共建筑。FEVE氟碳与弹性抗裂体系,15年耐候性。",vi:"Tháp, trung tâm thương mại và công trình công cộng. Hệ FEVE fluorocarbon và đàn hồi chống nứt, chịu thời tiết 15 năm.",es:"Torres, centros comerciales y edificios públicos. Sistemas FEVE fluorocarbono y elásticos anti-rotura con 15 años de resistencia a la intemperie.",ar:"الأبراج والمسارح العامة والمباني. أنظمة الفلوروكربون FEVE المرنة المقاومة للشقوق مع 15 عامًا من متانة الطقس."},products:[{en:"Weatherproof Exterior Paints",zh:"耐候外墙涂料",vi:"Sơn ngoại thất chịu thời tiết",es:"Pinturas Exteriores Impermeables",ar:"الدهانات الخارجية المقاومة للطقس"},{en:"Architectural Wall Coatings",zh:"建筑墙面涂料",vi:"Sơn tường kiến trúc",es:"Recubrimientos de Pared Arquitectónicos",ar:"طلاءات الجدران المعمارية"}],icon:"Building2",image:"/images/sol-architecture.jpg"},{code:"SOL-06",title:{en:"Industrial Flooring",zh:"工业地坪",vi:"Sàn công nghiệp",es:"Pisos Industriales",ar:"الأرضيات الصناعية"},desc:{en:"Warehouses, plants and parking decks. Self-leveling, anti-static and heavy-duty mortar systems rated for forklift traffic.",zh:"仓库、厂房与停车场。自流平、防静电及重型砂浆体系,可承受叉车通行。",vi:"Nhà kho, nhà máy và bãi đỗ xe. Hệ tự chảy, chống tĩnh điện và vữa nặng chịu xe nâng.",es:"Almacenes, plantas y estacionamientos. Sistemas autonivelantes, antiestáticos y morteros resistentes para tráfico de carretillas elevadoras.",ar:"المستودعات والمنشآط ومواقف السيارات. أنظمة الخرسانة ذاتية المستوى والمضادة لل static ومقاومة للثقل مصنفة لمرور الشاحنات اليدوية."},products:[{en:"Epoxy Floor Coatings",zh:"环氧地坪涂料",vi:"Sơn nền epoxy",es:"Recubrimientos de Piso Epóxicos",ar:"طلاءات الأرضية الإيبوكسية"}],icon:"LayoutGrid",image:"/images/sol-flooring.jpg"}],et=[{no:"01",title:{en:"Consultation & Spec",zh:"咨询与规格",vi:"Tư vấn & thông số",es:"Consultoría y Especificaciones",ar:"الاستشارات والمواصفات"},desc:{en:"Tell us substrate, environment and performance targets. Our engineers propose a system within one business day.",zh:"告诉我们基材、环境与性能目标。工程师在一个工作日内提出方案。",vi:"Cho biết bề mặt, môi trường và yêu cầu. Kỹ sư đề xuất hệ thống trong một ngày làm việc.",es:"Dinos sobre el sustrato, el entorno y los objetivos de rendimiento. Nuestros ingenieros proponen un sistema en un día hábil.",ar:"أخبرنا عن المادة الأساسية والبيئة وأهداف الأداء. سيقوم مهندسونا باقتراح نظام خلال يوم عمل واحد."}},{no:"02",title:{en:"Sample & Formulation",zh:"样品与配方",vi:"Mẫu & phối chế",es:"Muestra y Formulación",ar:"العينات والصياغة"},desc:{en:"Lab samples in 7 days. Custom color, hardness and corrosion grade tuned to your spec.",zh:"7天实验室出样。按规格定制颜色、硬度与防腐等级。",vi:"Mẫu phòng thí nghiệm trong 7 ngày. Màu, độ cứng, cấp ăn mòn theo yêu cầu.",es:"Muestras de laboratorio en 7 días. Color personalizado, dureza y grado de corrosión ajustados a tu especificación.",ar:"عينات مختبرية خلال 7 أيام. لون مخصص، صلابة، وتصنيف مقاومة للتآكل حسب متطلباتك."}},{no:"03",title:{en:"Production & QC",zh:"生产与品控",vi:"Sản xuất & QC",es:"Producción y Control de Calidad",ar:"الإنتاج والرقابة الجودة"},desc:{en:"50,000 t/yr plant. Each batch ships with a full QC report and 24-month warranty.",zh:"5万吨/年工厂。每批附完整QC报告,24个月质保。",vi:"Nhà máy 50.000 tấn/năm. Mỗi lô kèm báo cáo QC đầy đủ, bảo hành 24 tháng.",es:"Planta de 50,000 t/año. Cada lote se envía con un informe completo de control de calidad y garantía de 24 meses.",ar:"مصنع بإنتاج 50,000 طن سنويًا. كل شحنة تصدر مع تقرير كامل لمراقبة الجودة وضمان مدته 24 شهرًا."}},{no:"04",title:{en:"Export & Support",zh:"出口与支持",vi:"Xuất khẩu & hỗ trợ",es:"Exportación y Soporte",ar:"التصدير والدعم"},desc:{en:"CO, CIQ, MSDS, TDS and UN packaging. On-site applicator training for large projects.",zh:"CO、CIQ、MSDS、TDS及UN包装。大型项目提供现场施工培训。",vi:"CO, CIQ, MSDS, TDS và đóng gói UN. Đào tạo thi công tại hiện trường cho dự án lớn.",es:"CO, CIQ, MSDS, TDS y embalaje UN. Capacitación para aplicadores en sitio para proyectos grandes.",ar:"شهود CO, CIQ, MSDS, TDS وتعبئة UN. تدريب ميداني للمستخدمين للمشاريع الكبيرة."}}],ei=[{no:"01",t:{en:"Consult",zh:"咨询",vi:"Tư vấn",es:"Consultar",ar:"استشارة"},d:{en:"Share substrate, environment, performance targets.",zh:"告知基材、环境、性能目标。",vi:"Cung cấp bề mặt, môi trường, yêu cầu.",es:"Comparte sustrato, entorno, objetivos de rendimiento.",ar:"مشاركة المادة الأساسية والبيئة وأهداف الأداء."}},{no:"02",t:{en:"Sample",zh:"样品",vi:"Mẫu",es:"Muestra",ar:"عينة"},d:{en:"Lab sample in 7 days. Tune color, hardness, grade.",zh:"7天出样。调整颜色、硬度、等级。",vi:"Mẫu trong 7 ngày. Điều chỉnh màu, độ cứng, cấp.",es:"Muestra de laboratorio en 7 días. Ajustar color, dureza, grado.",ar:"عينة مختبرية خلال 7 أيام. ضبط اللون والصلابة والدرجة."}},{no:"03",t:{en:"Produce",zh:"生产",vi:"Sản xuất",es:"Producir",ar:"إنتاج"},d:{en:"50K t/yr plant. Full QC report per batch.",zh:"5万吨/年工厂。每批附QC报告。",vi:"Nhà máy 50K tấn/năm. Báo cáo QC mỗi lô.",es:"Planta de 50K t/año. Informe completo de control de calidad por lote.",ar:"مصنع بإنتاج 50 ألف طن سنويًا. تقرير كامل لمراقبة الجودة لكل شحنة."}},{no:"04",t:{en:"Export",zh:"出口",vi:"Xuất khẩu",es:"Exportar",ar:"تصدير"},d:{en:"CO, CIQ, MSDS, TDS, UN packaging. On-site training.",zh:"CO、CIQ、MSDS、TDS、UN包装。现场培训。",vi:"CO, CIQ, MSDS, TDS, UN. Đào tạo tại chỗ.",es:"CO, CIQ, MSDS, TDS, embalaje UN. Capacitación en sitio.",ar:"CO, CIQ, MSDS, TDS, تغليف UN. التدريب على الموقع."}}],er=[{date:"2025-09-18",category:"Product Launch",title:{en:"New FEVE Fluorocarbon Topcoat — 15-Year Weatherability Certified",zh:"全新FEVE氟碳面漆——通过15年耐候性认证",vi:"Sơn phủ FEVE fluorocarbon mới — Chứng nhận chịu thời tiết 15 năm",es:"Nuevo recubrimiento superior de fluorocarbono FEVE — Certificado de 15 años de resistencia a la intemperie",ar:"طلاء الفلوروكربون الجديد FEVE — معتمد لمدة 15 عامًا من مقاومة الطقس"},excerpt:{en:"Our latest fluorocarbon topcoat system has passed 15-year accelerated weatherability testing, now available for OEM private-label orders across the Middle East and SE Asia.",zh:"我们最新的氟碳面漆系统已通过15年加速耐候性测试,现面向中东与东南亚提供OEM贴牌订单。",vi:"Hệ sơn phủ fluorocarbon mới đã vượt thử nghiệm thời tiết tăng tốc 15 năm, hiện nhận đơn OEM/nhãn riêng tại Trung Đông và Đông Nam Á."},read:{en:"4 min read",zh:"4 分钟阅读",vi:"4 phút đọc",es:"4 min de lectura",ar:"4 دقيقة قراءة"},image:"/images/news-1.jpg"},{date:"2025-08-02",category:"Project",title:{en:"12,000 m² Anti-Corrosion Package Completed at Amata Steel Plant",zh:"Amata钢铁厂12,000 m²防腐方案完工",vi:"Hoàn thành gói chống ăn mòn 12.000 m² tại nhà thép Amata",es:"Paquete anticorrosivo de 12,000 m² completado en la planta de acero Amata",ar:"تم الانتهاء من حزمة مقاومة التآكل بمساحة 12,000 متر مربع في مصنع حديد Amata"},excerpt:{en:"Full epoxy zinc primer + PU topcoat system delivered in 45 days with zero coating-failure defects across the structural steel package.",zh:"环氧富锌底漆+PU面漆全套系统45天交付,钢结构涂装零失效缺陷。",vi:"Hệ lót epoxy giàu kẽm + phủ PU giao trong 45 ngày, không phát hiện lỗi sơn trên gói kết cấu thép."},read:{en:"3 min read",zh:"3 分钟阅读",vi:"3 phút đọc",es:"3 min de lectura",ar:"3 دقيقة قراءة"},image:"/images/news-2.jpg"},{date:"2025-06-21",category:"Certification",title:{en:"ISO 14001:2015 Environmental Certification Renewed",zh:"ISO 14001:2015环境认证续证",vi:"Gia hạn chứng nhận môi trường ISO 14001:2015",es:"Certificación ambiental ISO 14001:2015 renovada",ar:"تم تجديد شهادة البيئة ISO 14001:2015"},excerpt:{en:"Our environmental management system has been re-certified, reinforcing our commitment to low-VOC, sustainable coating manufacturing.",zh:"我们的环境管理体系已完成再认证,印证我们对低VOC、可持续涂料制造的承诺。",vi:"Hệ thống quản lý môi trường đã được tái chứng nhận, khẳng định cam kết sản xuất sơn VOC thấp, bền vững."},read:{en:"2 min read",zh:"2 分钟阅读",vi:"2 phút đọc",es:"2 min de lectura",ar:"2 دقيقة قراءة"},image:"/images/news-3.jpg"},{date:"2025-04-10",category:"Export",title:{en:"HONG NGUYEN Expands B2B Export to 60+ Countries",zh:"宏源B2B出口扩展至60+国家",vi:"HONG NGUYEN mở rộng xuất khẩu B2B tới 60+ quốc gia",es:"HONG NGUYEN expande exportación B2B a más de 60 países",ar:"توسيع HONG NGUYEN للتصدير B2B إلى أكثر من 60 دولة"},excerpt:{en:"New distributor partnerships across South America and Eastern Europe bring our active export footprint to over 60 countries worldwide.",zh:"南美与东欧新增经销商合作,使我们的活跃出口足迹覆盖全球60+国家。",vi:"Đối tác phân phối mới tại Nam Mỹ và Đông Âu đưa mạng lưới xuất khẩu lên hơn 60 quốc gia."},read:{en:"3 min read",zh:"3 分钟阅读",vi:"3 phút đọc",es:"3 min de lectura",ar:"3 دقيقة قراءة"},image:"/images/news-4.jpg"},{date:"2025-02-15",category:"R&D",title:{en:"R&D Lab Upgraded — 12 Senior Chemists, New Spectrophotometry Suite",zh:"研发实验室升级——12名资深化学师,新增光谱分析套件",vi:"Nâng cấp phòng R&D — 12 kỹ sư hóa học, bộ quang phổ mới",es:"Laboratorio de I+D actualizado — 12 químicos seniors, nueva suite de espectrofotometría",ar:"تم تحديث مختبر البحث والتطوير — 12 كيميائيًا كبيرًا، ومجموعة جديدة من أجهزة قياس الطيف"},excerpt:{en:"Our coatings R&D lab has added a dedicated spectrophotometry and salt-spray testing suite, cutting sample turnaround to 7 days.",zh:"我们的涂料研发实验室新增专用光谱分析与盐雾测试套件,样品周转缩短至7天。",vi:"Phòng R&D sơn bổ sung bộ quang phổ và phun muối riêng, rút ngắn giao mẫu xuống 7 ngày."},read:{en:"4 min read",zh:"4 分钟阅读",vi:"4 phút đọc",es:"4 min de lectura",ar:"4 دقيقة قراءة"},image:"/images/news-5.jpg"},{date:"2024-11-30",category:"Industry",title:{en:"How Low-VOC Formulations Are Reshaping Industrial Coatings",zh:"低VOC配方如何重塑工业涂料",vi:"Công thức VOC thấp đang định hình lại sơn công nghiệp",es:"Cómo las formulaciones de VOC bajo están remodelando los recubrimientos industriales",ar:"كيف تساهم الصيغ ذات المركبات العضوية المتطايرة (VOC) المنخفضة في تغيير صناعة الطلاءات الصناعية"},excerpt:{en:"An engineering briefing on how sub-50 g/L VOC chemistries maintain performance while meeting tightening environmental regulations.",zh:"一篇工程简报,探讨低于50 g/L的VOC配方如何在趋严的环保法规下保持性能。",vi:"Tài liệu kỹ thuật về công thức VOC dưới 50 g/L duy trì hiệu suất trong bối cảnh quy định môi trường ngày càng khắt khe."},read:{en:"6 min read",zh:"6 分钟阅读",vi:"6 phút đọc",es:"6 min de lectura",ar:"6 دقيقة قراءة"},image:"/images/news-6.jpg"}],eo=[{q:{en:"What is your Minimum Order Quantity (MOQ)?",zh:"起订量(MOQ)是多少?",vi:"Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu?",es:"¿Cuál es su Cantidad Mínima de Pedido (MOQ)?",ar:"ما هو الحد الأدنى لكمية الطلب (MOQ)؟"},a:{en:"Our standard MOQ is 200 kg. Mixed tones within the same product family are welcome, which makes us ideal for trial orders from new distributors. Sample quantities can be shipped within 48 hours.",zh:"标准起订量为200公斤。同系列产品接受混色,非常适合新经销商试单。样品可在48小时内寄出。",vi:"MOQ tiêu chuẩn là 200 kg. Nhận phối màu hỗn hợp cùng dòng sản phẩm, rất phù hợp cho đơn thử nghiệm của nhà phân phối mới. Mẫu giao trong 48 giờ.",es:"Nuestra MOQ estándar es de 200 kg. Los tonos mixtos dentro de la misma familia de productos son bienvenidos, lo que nos hace ideales para pedidos de prueba de nuevos distribuidores. Las cantidades de muestra pueden enviarse en 48 horas.",ar:"الحد الأدنى لكمية الطلب القياسية لدينا هو 200 كجم. نرحب بالألوان المختلطة ضمن نفس عائلة المنتجات، مما يجعلنا مثاليين للطلبات التجريبية من الموزعين الجدد. يمكن شحن عينات الكميات المطلوبة خلال 48 ساعة."}},{q:{en:"How fast can you deliver a custom formulation sample?",zh:"定制配方样品多久能交付?",vi:"Mẫu phối chế theo yêu cầu giao trong bao lâu?",es:"¿Qué rápido puede entregar una muestra de formulación personalizada?",ar:"ما هي سرعة توريد عينة الصيغة المخصصة؟"},a:{en:"For custom-engineered coatings, our R&D team (12 senior chemists) typically delivers a working lab sample within 7 days, and scales to full production within 30 days of sample approval.",zh:"对于定制工程涂料,我们的研发团队(12名资深化学师)通常在7天内交付实验室样品,样品确认后30天内量产。",vi:"Với sơn kỹ thuật theo yêu cầu, đội R&D (12 kỹ sư hóa học) giao mẫu phòng thí nghiệm trong 7 ngày, sản xuất hàng loạt trong 30 ngày sau khi duyệt mẫu.",es:"Para recubrimientos personalizados, nuestro equipo de I+D (12 químicos seniors) generalmente entrega una muestra de laboratorio funcional en 7 días, y escala a producción completa en 30 días de la aprobación de la muestra.",ar:"بالنسبة للطلاءات المخصصة، عادة ما يقدم فريق البحث والتطوير لدينا (12 كيميائيًا كبيرًا) عينة عمل من المختبر خلال 7 أيام، ويرفع الإنتاج إلى حجم كامل خلال 30 يومًا من موافقة العينة."}},{q:{en:"Which certifications and export documents do you provide?",zh:"你们提供哪些认证与出口单证?",vi:"Các chứng nhận và chứng từ xuất khẩu nào được cung cấp?",es:"¿Qué certificaciones y documentos de exportación proporcionan?",ar:"ما هي الشهادات ووثائق التصدير التي تقدمونها؟"},a:{en:"Every shipment is backed by ISO 9001:2015, ISO 14001:2015, CE and SGS test reports. Export documents include Certificate of Origin (CO), CIQ, MSDS, TDS and UN packaging as required by destination.",zh:"每批出货均附ISO 9001:2015、ISO 14001:2015、CE及SGS检测报告。出口单证包括原产地证(CO)、CIQ、MSDS、TDS及UN包装(按目的国要求)。",vi:"Mỗi lô hàng kèm ISO 9001:2015, ISO 14001:2015, CE và báo cáo SGS. Chứng từ gồm CO, CIQ, MSDS, TDS và đóng gói UN theo yêu cầu quốc gia nhập.",es:"Cada envío está respaldado por ISO 9001:2015, ISO 14001:2015, CE y informes de pruebas SGS. Los documentos de exportación incluyen Certificado de Origen (CO), CIQ, MSDS, TDS y embalaje UN según lo requiera el destino.",ar:"كل شحن مدعوم بـ ISO 9001:2015، ISO 14001:2015، CE و تقارير اختبار SGS. تشمل وثائق التصدير شهادة المنشأ (CO)، CIQ، MSDS، TDS و تغليف UN حسب متطلبات البلد المستهدف."}},{q:{en:"Do you offer OEM / private-label packaging?",zh:"是否提供OEM/贴牌包装?",vi:"Có hỗ trợ đóng gói OEM / nhãn riêng không?",es:"¿Ofrecen empaque OEM / marca privada?",ar:"هل تقدمون التغليف OEM / الخاص بالعلامة التجارية؟"},a:{en:"Yes. We provide custom drum labels, branded packaging and marketing collateral. Your brand, our chemistry — with full formulation confidentiality.",zh:"是的。我们提供定制桶身标签、品牌包装及营销物料。您的品牌,我们的化学——配方完全保密。",vi:"Có. Cung cấp nhãn thùng riêng, bao bì thương hiệu và tài liệu marketing. Thương hiệu bạn, hóa học chúng tôi — bảo mật công thức tuyệt đối.",es:"Sí. Proporcionamos etiquetas de tambor personalizadas, empaque con marca y materiales de marketing. Su marca, nuestra química — con confidencialidad total de la formulación.",ar:"نعم. نقدم ملصقات البراميل المخصصة، والتغليف ذي العلامة التجارية، والمواد التسويقية. علامتكم التجارية، وكيميائيتنا — مع سرية الصيغة الكاملة."}},{q:{en:"What is the salt-spray resistance of your anti-corrosion systems?",zh:"你们的防腐系统盐雾耐受性如何?",vi:"Khả năng chịu phun muối của hệ chống ăn mòn là bao lâu?",es:"¿Cuál es la resistencia a la niebla salina de sus sistemas anticorrosivos?",ar:"ما هي مقاومة الرذاذ الملحي لنظام مقاومة التآكل لديكم؟"},a:{en:"Our standard anti-corrosion systems are rated ≥ 1000 hours per ASTM B117. Marine-grade and custom systems regularly exceed 1500 hours in third-party SGS/BV/Intertek testing.",zh:"标准防腐系统按ASTM B117达≥1000小时。海洋级及定制系统在SGS/BV/Intertek第三方检测中常超1500小时。",vi:"Hệ chống ăn mòn tiêu chuẩn đạt ≥ 1000 giờ theo ASTM B117. Cấp hàng hải và hệ riêng thường vượt 1500 giờ trong kiểm tra SGS/BV/Intertek.",es:"Nuestros sistemas anticorrosivos estándar están calificados ≥ 1000 horas por ASTM B117. Los sistemas marinos y personalizados regularmente superan las 1500 horas en pruebas de terceros SGS/BV/Intertek.",ar:"نظمنا القياسية لمقاومة التآكل مصنفة بـ ≥ 1000 ساعة وفقًا لـ ASTM B117. غالبًا ما تتجاوز نظم البحرية والمخصصة 1500 ساعة في اختبارات جهات خارجية مثل SGS/BV/Intertek."}},{q:{en:"Do you provide on-site engineering and applicator training?",zh:"是否提供现场工程与施工培训?",vi:"Có hỗ trợ kỹ thuật và đào tạo thi công tại hiện trường không?",es:"¿Proporcionan capacitación de ingeniería y aplicador en sitio?",ar:"هل تقدمون تدريبًا هندسيًا وتطبيقيًا على الموقع؟"},a:{en:"For large projects we offer optional site survey, surface-preparation specification and applicator training to ensure the coating system performs as designed in the field.",zh:"大型项目可选现场勘测、表面处理规范及施工培训,确保涂料系统在现场按设计性能发挥。",vi:"Dự án lớn: khảo sát hiện trường, quy trình xử lý bề mặt và đào tạo thợ thi công để hệ sơn đạt hiệu suất thiết kế.",es:"Para proyectos grandes, ofrecemos encuesta de sitio opcional, especificación de preparación de superficie y capacitación de aplicador para asegurar que el sistema de recubrimiento se desempeñe como se diseñó en el campo.",ar:"للمشاريع الكبيرة، نقدم مسحًا للموقع اختياريًا، وتحديدًا لتحسس السطح، وتدريبًا للتطبيق لضمان أداء نظام الطلاء كما هو مصمم في الموقع."}},{q:{en:"What is your quality warranty?",zh:"你们的质保期多久?",vi:"Thời gian bảo hành là bao lâu?",es:"¿Cuál es su garantía de calidad?",ar:"ما هي ضمان الجودة الخاص بك؟"},a:{en:"Every batch ships with a full QC report and is covered by a 24-month quality warranty. System-specific warranties (e.g. 5-year epoxy floor, 15-year fluorocarbon facade) apply where stated.",zh:"每批附完整QC报告,享24个月质保。特定系统另有专项质保(如环氧地坪5年、氟碳外墙15年)。",vi:"Mỗi lô kèm báo cáo QC, bảo hành 24 tháng. Có bảo hành riêng theo hệ (vd. sàn epoxy 5 năm, mặt tiền fluorocarbon 15 năm).",es:"Cada lote se envía con un informe completo de control de calidad y está cubierto por una garantía de calidad de 24 meses. Las garantías específicas del sistema (por ejemplo, suelo de epoxi de 5 años, fachada de fluorocarbono de 15 años) se aplican cuando se especifica.",ar:"يتم شحن كل دفعة مع تقرير كامل لمراقبة الجودة ويتم تغطيتها بضمان جودة لمدة 24 شهرًا. تنطبق الضمانات المحددة للنظام (مثل الأرضية الإيبوكسي لمدة 5 سنوات، الواجهة الفلوروكربونية لمدة 15 سنة) عند ذكرها."}},{q:{en:"Which regions do you export to?",zh:"你们出口到哪些地区?",vi:"Xuất khẩu tới những khu vực nào?",es:"¿A qué regiones exportan?",ar:"إلى أي مناطق تصدر؟"},a:{en:"We currently serve 60+ countries across SE Asia, the Middle East, Africa, South America, Eastern Europe and Central Asia, with established logistics and distributor support in each region.",zh:"我们目前服务东南亚、中东、非洲、南美、东欧及中亚60+国家,各区域均有成熟的物流与经销商支持。",vi:"Hiện phục vụ 60+ quốc gia tại Đông Nam Á, Trung Đông, Châu Phi, Nam Mỹ, Đông Âu và Trung Á, với logistics và phân phối sẵn có.",es:"Actualmente servimos a más de 60 países en el Sudeste Asiático, Medio Oriente, África, Sudamérica, Europa Oriental y Asia Central, con apoyo logístico y de distribuidores establecido en cada región.",ar:"نحن نخدم حاليًا أكثر من 60 دولة في جنوب شرق آسيا والشرق الأوسط وأفريقيا وأمريكا الجنوبية وشرق أوروبا وآسيا الوسطى، مع وجود دعم لوجستي وتوزيعي مُؤسس في كل منطقة."}}],es=[{icon:"Factory",t:{en:"Production",zh:"生产",vi:"Sản xuất",es:"Producción",ar:"الإنتاج"},d:{en:"50,000 t/yr in-house plant. No reseller markup.",zh:"5万吨/年自主工厂。无加价。",vi:"50.000 tấn/năm nội bộ. Không phụ phí.",es:"Planta propia de 50,000 t/a. Sin recargo de intermediarios.",ar:"مصنع تابع للشركة بسعة 50,000 طن/سنة. بدون زيادة من قبل تجار الجملة."}},{icon:"FlaskConical",t:{en:"R&D Lab",zh:"研发实验室",vi:"Phòng R&D",es:"Laboratorio I+D",ar:"مختبر البحث والتطوير"},d:{en:"12 senior chemists. Sample in 7 days.",zh:"12名资深化学师。7天出样。",vi:"12 kỹ sư hóa học. Mẫu 7 ngày.",es:"12 químicos seniors. Muestra en 7 días.",ar:"12 كيميائيًا رئيسيًا. عينة في 7 أيام."}},{icon:"Globe2",t:{en:"Export Desk",zh:"出口部门",vi:"Bộ phận xuất khẩu",es:"Departamento de Exportación",ar:"قسم التصدير"},d:{en:"CO, CIQ, MSDS, TDS, UN packaging.",zh:"CO、CIQ、MSDS、TDS、UN包装。",vi:"CO, CIQ, MSDS, TDS, đóng gói UN.",es:"CO, CIQ, MSDS, TDS, embalaje de la ONU.",ar:"شهود المنشأ، CIQ، MSDS، TDS، عبوات الأمم المتحدة."}},{icon:"Truck",t:{en:"Logistics",zh:"物流",vi:"Logistics",es:"Logística",ar:"اللوجستيات"},d:{en:"Lead time 7–15 days. Sample ships in 48h.",zh:"交期7–15天。48小时寄样。",vi:"Giao hàng 7–15 ngày. Mẫu 48 giờ.",es:"Tiempo de entrega de 7-15 días. Muestra se envía en 48h.",ar:"فترة التسليم من 7 إلى 15 يومًا. يتم شحن العينة في غضون 48 ساعة."}}],ec=[{en:"In-house QC lab per batch",zh:"每批配备内部QC实验室",vi:"Phòng QC nội bộ theo lô",es:"Laboratorio propio de control de calidad por lote",ar:"مختبر مراقبة الجودة التابع للشركة لكل دفعة"},{en:"12 senior formulation chemists",zh:"12名资深配方化学师",vi:"12 kỹ sư phối chế cấp cao",es:"12 químicos de formulación seniors",ar:"12 كيميائيًا رئيسيًا في التركيب الكيميائي"},{en:"Full ISO 9001 / 14001 traceability",zh:"ISO 9001 / 14001全流程可追溯",vi:"Truy xuất ISO 9001 / 14001 đầy đủ",es:"Trazaabilidad completa ISO 9001 / 14001",ar:"تتبع كامل ISO 9001 / 14001"},{en:"OEM private-label packaging",zh:"OEM贴牌包装",vi:"Đóng gói nhãn riêng OEM",es:"Empaque de marca privada OEM",ar:"تغليف OEM الخاص بعلامة تجارية"}],el=[{en:"ISO 9001 Traceable",zh:"ISO 9001可追溯",vi:"Truy xuất ISO 9001",es:"ISO 9001 Rastreable",ar:"ISO 9001 قابل للتتبع"},{en:"In-house QC Lab",zh:"内部QC实验室",vi:"Phòng QC nội bộ",es:"Laboratorio de Control de Calidad Propio",ar:"مختبر مراقبة الجودة التابع للشركة"},{en:"OEM/ODM",zh:"OEM/ODM",vi:"OEM/ODM",es:"OEM/ODM",ar:"OEM/ODM"},{en:"Export to 60+ countries",zh:"出口60+国家",vi:"Xuất khẩu 60+ quốc gia",es:"Exportación a 60+ países",ar:"التصدير إلى أكثر من 60 دولة"}],ed=[{v:"42,500+",l:{en:"m² coated in featured cases",zh:"m² 精选案例涂装面积",vi:"m² sơn trong dự án tiêu biểu",es:"m² recubiertos en casos destacados",ar:"متر مربع مُغطى في الحالات المميزة"}},{v:"0",l:{en:"coating-failure defects reported",zh:"起涂层失效缺陷",vi:"lỗi sơn được báo cáo",es:"defectos de fallo de recubrimiento reportados",ar:"عيوب الإخفاق في الطلاء المبلغ عنها"}},{v:"60+",l:{en:"countries served",zh:"服务国家",vi:"quốc gia phục vụ",es:"países servidos",ar:"دول مُخدمة"}},{v:"24 mo",l:{en:"quality warranty standard",zh:"标准质保期",vi:"bảo hành tiêu chuẩn",es:"garantía de calidad estándar",ar:"ضمان الجودة القياسي"}}],eh=["home","products","solutions","cases","about","news","faq","contact"];function ep(){let{page:e,navigate:a}=U(),{t:n}=P(),[t,o]=r.useState(!1),[m,x]=r.useState(!1);r.useEffect(()=>{let e=()=>x(window.scrollY>12);return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]);let u=e=>{a(e),o(!1)};return(0,i.jsxs)("header",{className:(0,N.cn)("sticky top-0 z-50 w-full transition-all duration-300",m?"bg-background/85 backdrop-blur-xl border-b border-border":"bg-transparent border-b border-transparent"),children:[(0,i.jsx)("div",{className:"hidden md:block border-b border-border/60 dark bg-ink/40 text-muted-foreground",children:(0,i.jsxs)("div",{className:"mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[12px]",children:[(0,i.jsxs)("div",{className:"flex items-center gap-4 font-mono tracking-wider",children:[(0,i.jsxs)("span",{className:"text-brand",children:[n("topbar.established")," ",2003]}),(0,i.jsx)("span",{"aria-hidden":!0,children:"·"}),(0,i.jsx)("span",{children:"ISO 9001:2015"}),(0,i.jsx)("span",{"aria-hidden":!0,children:"·"}),(0,i.jsx)("span",{children:"SGS"}),(0,i.jsx)("span",{"aria-hidden":!0,children:"·"}),(0,i.jsx)("span",{children:"CE"})]}),(0,i.jsxs)("div",{className:"flex items-center gap-5",children:[(0,i.jsxs)("a",{href:`tel:${B.replace(/\s/g,"")}`,className:"flex items-center gap-1.5 transition-colors hover:text-foreground",children:[(0,i.jsx)(l,{className:"size-3.5"})," ",B]}),(0,i.jsxs)("a",{href:`https://wa.me/${Y.replace(/\D/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 transition-colors hover:text-foreground",children:[(0,i.jsx)(p,{className:"size-3.5"})," ",Y]}),(0,i.jsxs)("a",{href:`mailto:${q}`,className:"flex items-center gap-1.5 transition-colors hover:text-foreground",children:[(0,i.jsx)(d,{className:"size-3.5"})," ",q]}),(0,i.jsx)(D,{})]})]})}),(0,i.jsxs)("div",{className:"mx-auto flex h-16 max-w-7xl items-center justify-between px-6",children:[(0,i.jsxs)("button",{onClick:()=>u("home"),className:"group flex items-center gap-3","aria-label":"HONG NGUYEN home",children:[(0,i.jsx)("span",{className:"grid size-10 place-items-center rounded-md bg-brand text-brand-foreground font-mono font-bold text-lg shadow-[0_6px_20px_-6px_var(--brand)] transition-transform group-hover:scale-105",children:"HN"}),(0,i.jsxs)("span",{className:"hidden sm:flex flex-col leading-none",children:[(0,i.jsx)("span",{className:"text-[15px] font-bold tracking-tight text-foreground",children:M}),(0,i.jsx)("span",{className:"text-[11px] font-mono text-muted-foreground tracking-widest uppercase",children:F})]})]}),(0,i.jsx)("nav",{className:"hidden lg:flex items-center gap-1",children:eh.map(a=>(0,i.jsxs)("button",{onClick:()=>u(a),className:(0,N.cn)("relative px-3.5 py-2 text-[13.5px] font-medium transition-colors",e===a?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[n(`nav.${a}`),e===a&&(0,i.jsx)("span",{className:"absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand"})]},a))}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)(D,{className:"lg:hidden"}),(0,i.jsxs)(w,{size:"sm",className:"hidden sm:inline-flex",onClick:()=>u("contact"),children:[n("cta.getQuote")," ",(0,i.jsx)(h,{className:"size-4"})]}),(0,i.jsx)("button",{className:"lg:hidden grid size-10 place-items-center rounded-md border border-border text-foreground",onClick:()=>o(e=>!e),"aria-label":"Toggle menu","aria-expanded":t,children:t?(0,i.jsx)(c.X,{className:"size-5"}):(0,i.jsx)(s,{className:"size-5"})})]})]}),t&&(0,i.jsx)("div",{className:"lg:hidden border-t border-border bg-background/95 backdrop-blur-xl",children:(0,i.jsxs)("nav",{className:"mx-auto grid max-w-7xl gap-1 px-6 py-4",children:[eh.map(a=>(0,i.jsxs)("button",{onClick:()=>u(a),className:(0,N.cn)("flex items-center justify-between rounded-md px-3 py-2.5 text-left text-[15px] font-medium transition-colors",e===a?"bg-brand-muted text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:[n(`nav.${a}`),(0,i.jsx)(h,{className:(0,N.cn)("size-4 transition-transform",e===a?"text-brand translate-x-0.5":"opacity-40")})]},a)),(0,i.jsxs)(w,{className:"mt-2 w-full",onClick:()=>u("contact"),children:[n("cta.getQuote")," ",(0,i.jsx)(h,{className:"size-4"})]})]})})]})}let em=(0,o.default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),ex=[{labelKey:"p:cat-01",target:"CAT-01"},{labelKey:"p:cat-02",target:"CAT-02"},{labelKey:"p:cat-03",target:"CAT-03"},{labelKey:"p:cat-04",target:"CAT-04"},{labelKey:"p:cat-05",target:"CAT-05"},{labelKey:"p:cat-06",target:"CAT-06"}],eu=[{labelKey:"footer.about",page:"about"},{labelKey:"footer.cases",page:"cases"},{labelKey:"footer.solutions",page:"solutions"},{labelKey:"footer.news",page:"news"},{labelKey:"footer.faq",page:"faq"},{labelKey:"footer.contact",page:"contact"}];function eg(){let{navigate:e}=U(),{t:a,loc:n}=P(),t={"CAT-01":n({en:"Anti-Corrosion Coatings",zh:"防腐涂料",vi:"Sơn chống ăn mòn"}),"CAT-02":n({en:"High-Temperature Paints",zh:"耐高温涂料",vi:"Sơn chịu nhiệt cao"}),"CAT-03":n({en:"Epoxy Floor Systems",zh:"环氧地坪系统",vi:"Hệ sàn epoxy"}),"CAT-04":n({en:"Weatherproof Topcoats",zh:"耐候面漆",vi:"Sơn phủ chịu thời tiết"}),"CAT-05":n({en:"Architectural Wall Paints",zh:"建筑墙面涂料",vi:"Sơn tường kiến trúc"}),"CAT-06":n({en:"Custom Formulations",zh:"定制配方",vi:"Phối chế theo yêu cầu"})},r={"footer.about":n({en:"About Us",zh:"关于我们",vi:"Giới thiệu"}),"footer.cases":n({en:"Project Cases",zh:"项目案例",vi:"Dự án tiêu biểu"}),"footer.solutions":n({en:"Solutions",zh:"解决方案",vi:"Giải pháp"}),"footer.news":n({en:"News & Blog",zh:"新闻与博客",vi:"Tin tức & Blog"}),"footer.faq":n({en:"FAQ",zh:"常见问题",vi:"Câu hỏi"}),"footer.contact":n({en:"Contact",zh:"联系",vi:"Liên hệ"})};return(0,i.jsxs)("footer",{className:"mt-auto border-t border-white/5",style:{background:"var(--footer-bg)",color:"var(--footer-fg)"},children:[(0,i.jsx)("div",{className:"border-b border-white/8",children:(0,i.jsxs)("div",{className:"mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-10 md:flex-row md:items-center",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"eyebrow text-[11px]",style:{color:"var(--footer-accent-strong)"},children:[a("rq.index")," ",a("rq.eyebrow")]}),(0,i.jsx)("h3",{className:"mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl",children:a("rq.title")}),(0,i.jsx)("p",{className:"mt-2 max-w-xl text-sm",style:{color:"var(--footer-fg)"},children:a("rq.desc")})]}),(0,i.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,i.jsxs)(w,{size:"lg",onClick:()=>e("contact"),children:[a("cta.requestFreeQuote")," ",(0,i.jsx)(h,{className:"size-4"})]}),(0,i.jsxs)(w,{size:"lg",variant:"outline",onClick:()=>e("contact"),children:[(0,i.jsx)(p,{className:"size-4"})," ",a("cta.whatsappChat")]})]})]})}),(0,i.jsxs)("div",{className:"mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-12",children:[(0,i.jsxs)("div",{className:"lg:col-span-4",children:[(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"grid size-10 place-items-center rounded-md font-mono font-bold text-lg",style:{background:"var(--footer-accent)",color:"var(--footer-bg)"},children:"HN"}),(0,i.jsxs)("div",{className:"leading-none",children:[(0,i.jsx)("div",{className:"text-[15px] font-bold tracking-tight text-white",children:M}),(0,i.jsx)("div",{className:"text-[11px] font-mono tracking-widest uppercase",style:{color:"var(--footer-accent)"},children:F})]})]}),(0,i.jsx)("p",{className:"mt-4 max-w-sm text-sm leading-relaxed",children:a("brand.premiumDesc")}),(0,i.jsxs)("ul",{className:"mt-5 space-y-2.5 text-sm",children:[(0,i.jsxs)("li",{className:"flex gap-2.5",children:[(0,i.jsx)(em,{className:"mt-0.5 size-4 shrink-0",style:{color:"var(--footer-accent)"}}),(0,i.jsx)("span",{className:"leading-relaxed",children:n(I)})]}),(0,i.jsxs)("li",{className:"flex items-center gap-2.5",children:[(0,i.jsx)(l,{className:"size-4 shrink-0",style:{color:"var(--footer-accent)"}}),(0,i.jsx)("a",{href:`tel:${B.replace(/\s/g,"")}`,className:"hover:text-white transition-colors",children:B})]}),(0,i.jsxs)("li",{className:"flex items-center gap-2.5",children:[(0,i.jsx)(d,{className:"size-4 shrink-0",style:{color:"var(--footer-accent)"}}),(0,i.jsx)("a",{href:`mailto:${q}`,className:"hover:text-white transition-colors",children:q})]}),(0,i.jsxs)("li",{className:"flex items-center gap-2.5",children:[(0,i.jsx)(p,{className:"size-4 shrink-0",style:{color:"var(--footer-accent)"}}),(0,i.jsx)("a",{href:`https://wa.me/${Y.replace(/\D/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:Y})]})]})]}),(0,i.jsxs)("div",{className:"lg:col-span-3",children:[(0,i.jsx)("h4",{className:"eyebrow text-[11px]",style:{color:"var(--footer-accent)"},children:a("footer.products")}),(0,i.jsx)("ul",{className:"mt-4 space-y-2.5 text-sm",children:ex.map(a=>(0,i.jsx)("li",{children:(0,i.jsx)("button",{onClick:()=>e("products",a.target),className:"text-left transition-colors hover:text-white",children:t[a.target]})},a.target))})]}),(0,i.jsxs)("div",{className:"lg:col-span-2",children:[(0,i.jsx)("h4",{className:"eyebrow text-[11px]",style:{color:"var(--footer-accent)"},children:a("footer.company")}),(0,i.jsx)("ul",{className:"mt-4 space-y-2.5 text-sm",children:eu.map(a=>(0,i.jsx)("li",{children:(0,i.jsx)("button",{onClick:()=>e(a.page),className:"text-left transition-colors hover:text-white",children:r[a.labelKey]})},a.page))})]}),(0,i.jsxs)("div",{className:"lg:col-span-3",children:[(0,i.jsxs)("h4",{className:"eyebrow text-[11px] flex items-center gap-2",style:{color:"var(--footer-accent)"},children:[(0,i.jsx)(T,{className:"size-3.5"})," ",a("footer.exportRegions")]}),(0,i.jsx)("ul",{className:"mt-4 grid grid-cols-2 gap-2.5 text-sm",children:ea.map(e=>(0,i.jsxs)("li",{className:"flex items-center gap-1.5",children:[(0,i.jsx)("span",{className:"size-1 rounded-full",style:{background:"var(--footer-accent)"}}),n(e)]},e.en))})]})]}),(0,i.jsx)("div",{className:"border-t border-white/8",children:(0,i.jsxs)("div",{className:"mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[12px] sm:flex-row",style:{color:"var(--footer-fg)"},children:[(0,i.jsxs)("p",{children:["© 2019 ",M," Co., Ltd. ",a("footer.rights")]}),(0,i.jsxs)("p",{className:"flex flex-wrap items-center gap-2 font-mono tracking-wider",children:[V.map((e,a)=>(0,i.jsxs)("span",{className:"flex items-center gap-2",children:[a>0&&(0,i.jsx)("span",{className:"opacity-30",children:"·"}),e]},e)),(0,i.jsx)("span",{className:"opacity-30",children:"·"}),(0,i.jsx)("button",{onClick:()=>e("admin"),className:"transition-colors hover:text-white",title:"Admin",children:"Admin"})]})]})})]})}let ef={home:{titleKey:"seo.home.title",descKey:"seo.home.desc"},products:{titleKey:"seo.products.title",descKey:"seo.products.desc"},solutions:{titleKey:"seo.solutions.title",descKey:"seo.solutions.desc"},cases:{titleKey:"seo.cases.title",descKey:"seo.cases.desc"},about:{titleKey:"seo.about.title",descKey:"seo.about.desc"},news:{titleKey:"seo.news.title",descKey:"seo.news.desc"},faq:{titleKey:"seo.faq.title",descKey:"seo.faq.desc"},contact:{titleKey:"seo.contact.title",descKey:"seo.contact.desc"}};function eb(){let e=U(e=>e.page),{t:a}=P();return(0,r.useEffect)(()=>{let n=ef[e];if(!n)return;let t=a(n.titleKey);t&&t!==n.titleKey&&(document.title=t);let i=a(n.descKey);ev("description",i),ey("og:title",t),ey("og:description",i),ev("twitter:title",t),ev("twitter:description",i);let r=document.querySelector('link[rel="canonical"]');r&&r.setAttribute("href",window.location.href)},[e,a]),null}function ev(e,a){if(!a)return;let n=document.querySelector(`meta[name="${e}"]`);n||((n=document.createElement("meta")).setAttribute("name",e),document.head.appendChild(n)),n.setAttribute("content",a)}function ey(e,a){if(!a)return;let n=document.querySelector(`meta[property="${e}"]`);n||((n=document.createElement("meta")).setAttribute("property",e),document.head.appendChild(n)),n.setAttribute("content",a)}var eN=e.i(57688);let ek=(0,o.default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),ew=(0,o.default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),eC=(0,o.default)("flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),eT=(0,o.default)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]),eS=(0,o.default)("building-2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),eG=(0,o.default)("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]),eL=(0,o.default)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]),ej=(0,o.default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),eO=(0,o.default)("quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]),eE=(0,o.default)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);function ez({children:e,className:a}){return(0,i.jsx)("span",{className:(0,N.cn)("eyebrow text-brand text-[11px]",a),children:e})}function eP({index:e,eyebrow:a,title:n,description:t,align:r="left",className:o}){return(0,i.jsxs)("div",{className:(0,N.cn)("max-w-2xl","center"===r&&"mx-auto text-center",o),children:[(0,i.jsxs)("div",{className:(0,N.cn)("flex items-center gap-3","center"===r&&"justify-center"),children:[e&&(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:e}),a&&(0,i.jsxs)(i.Fragment,{children:[e&&(0,i.jsx)("span",{className:"h-px w-6 bg-brand/40"}),(0,i.jsx)(ez,{children:a})]})]}),(0,i.jsx)("h2",{className:"mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.6rem] md:leading-[1.1]",children:n}),t&&(0,i.jsx)("p",{className:"mt-4 text-[15px] leading-relaxed text-muted-foreground",children:t})]})}function eH({children:e,className:a,id:n}){return(0,i.jsx)("section",{id:n,className:(0,N.cn)("py-16 sm:py-20 lg:py-24",a),children:(0,i.jsx)("div",{className:"mx-auto max-w-7xl px-6",children:e})})}function eA({label:e,value:a,mono:n=!0}){return(0,i.jsxs)("div",{className:"flex items-center justify-between gap-4 border-b border-border/60 py-2.5 last:border-0",children:[(0,i.jsx)("span",{className:"text-[13px] text-muted-foreground",children:e}),(0,i.jsx)("span",{className:(0,N.cn)("text-[13px] font-medium text-foreground text-right",n&&"font-mono"),children:a})]})}function eD({children:e,delay:a=0,className:n}){return(0,i.jsx)("div",{className:(0,N.cn)("animate-fade-up",n),style:{animationDelay:`${a}ms`},children:e})}function eU(e){return e&&e.startsWith("/images/")&&window.location.pathname.startsWith("/HN")?"/HN"+e:e}let eM={"CAT-01":ew,"CAT-02":eC,"CAT-03":eT,"CAT-04":eS,"CAT-05":eG,"CAT-06":eL};function eF(){let{navigate:e}=U(),{t:a,loc:n}=P();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"relative overflow-hidden bg-background",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-brand-muted via-background to-secondary"}),(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.07]"}),(0,i.jsx)("div",{className:"pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-brand/8 blur-3xl"}),(0,i.jsx)("div",{className:"relative mx-auto max-w-7xl px-6 pt-14 pb-16 sm:pt-18 sm:pb-24 lg:pt-20 lg:pb-28",children:(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-center",children:[(0,i.jsxs)("div",{className:"lg:col-span-6",children:[(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:a("hero.index")}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)(ez,{children:a("hero.eyebrow")})]})}),(0,i.jsx)(eD,{delay:80,children:(0,i.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.2rem]",children:[a("hero.title1")," ",a("hero.title2")," ",(0,i.jsx)("span",{className:"text-brand",children:a("hero.titleAccent")})," ",a("hero.title3")]})}),(0,i.jsx)(eD,{delay:160,children:(0,i.jsx)("p",{className:"mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base",children:a("hero.desc")})}),(0,i.jsx)(eD,{delay:240,children:(0,i.jsxs)("div",{className:"mt-8 flex flex-wrap gap-3",children:[(0,i.jsxs)(w,{size:"lg",onClick:()=>e("contact"),children:[a("cta.getQuote")," ",(0,i.jsx)(ek,{className:"size-4"})]}),(0,i.jsx)(w,{size:"lg",variant:"outline",onClick:()=>e("products"),children:a("cta.browseCatalog")})]})}),(0,i.jsx)(eD,{delay:320,children:(0,i.jsx)("dl",{className:"mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4",children:W.map(e=>(0,i.jsxs)("div",{className:"border-l border-border/70 pl-4",children:[(0,i.jsx)("dt",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl",children:e.value}),(0,i.jsxs)("dd",{className:"mt-1 text-[12px] leading-tight text-muted-foreground",children:[n(e.label),(0,i.jsx)("span",{className:"block text-[11px] text-brand/80 font-mono mt-0.5",children:n(e.sub)})]})]},e.label.en))})})]}),(0,i.jsx)("div",{className:"lg:col-span-5",children:(0,i.jsx)(eD,{delay:300,children:(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"absolute -inset-3 rounded-2xl bg-brand/10 blur-2xl"}),(0,i.jsxs)("div",{className:"relative rounded-xl border border-border/70 bg-card/80 backdrop-blur-md p-6 shadow-2xl",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between border-b border-border/60 pb-3",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"size-2 rounded-full bg-brand animate-pulse"}),(0,i.jsx)("span",{className:"font-mono text-[11px] tracking-widest text-muted-foreground",children:a("hero.specSheet")})]}),(0,i.jsx)("span",{className:"font-mono text-[10px] text-brand",children:a("hero.live")})]}),(0,i.jsx)("div",{className:"mt-2 max-h-[320px] overflow-y-auto scroll-thin pr-1",children:K.map(e=>(0,i.jsx)(eA,{label:n(e.label),value:e.value},e.label.en))}),(0,i.jsxs)("button",{onClick:()=>e("products"),className:"mt-4 flex w-full items-center justify-between rounded-md border border-brand/30 bg-brand-muted px-4 py-2.5 text-[13px] font-medium text-brand transition-colors hover:bg-brand/20",children:[a("cta.viewFullCatalog"),(0,i.jsx)(h,{className:"size-4"})]})]})]})})})]})})]}),(0,i.jsx)("div",{className:"border-y border-border bg-background py-6",children:(0,i.jsxs)("div",{className:"mx-auto max-w-7xl px-6",children:[(0,i.jsx)("p",{className:"mb-4 text-center font-mono text-[11px] tracking-widest text-muted-foreground uppercase",children:a("partners.trustedBy")}),(0,i.jsx)("div",{className:"relative overflow-hidden",children:(0,i.jsx)("div",{className:"flex w-max animate-marquee gap-12",children:[...ee,...ee,...ee].map((e,a)=>(0,i.jsx)("span",{className:"font-mono text-lg font-bold tracking-widest text-muted-foreground/70 transition-colors hover:text-brand",children:e},a))})})]})}),(0,i.jsx)(eH,{children:(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-start",children:[(0,i.jsx)("div",{className:"lg:col-span-5",children:(0,i.jsx)(eP,{index:a("core.index"),eyebrow:a("core.eyebrow"),title:a("core.title")})}),(0,i.jsxs)("div",{className:"lg:col-span-7",children:[(0,i.jsx)("p",{className:"text-[15px] leading-relaxed text-muted-foreground",children:n(R)}),(0,i.jsx)("div",{className:"mt-6 flex flex-wrap gap-2",children:el.map(e=>(0,i.jsxs)("span",{className:"inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[12px] text-muted-foreground",children:[(0,i.jsx)(ej,{className:"size-3.5 text-brand"}),n(e)]},e.en))})]})]})}),(0,i.jsxs)(eH,{className:"bg-card/40 border-y border-border",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[(0,i.jsx)(eP,{index:a("pcat.index"),eyebrow:a("pcat.eyebrow"),title:a("pcat.title")}),(0,i.jsxs)(w,{variant:"outline",onClick:()=>e("products"),children:[a("cta.viewAllCatalog")," ",(0,i.jsx)(ek,{className:"size-4"})]})]}),(0,i.jsx)("div",{className:"mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:Q.map((t,r)=>{let o=eM[t.code]??ew;return(0,i.jsx)(eD,{delay:60*r,children:(0,i.jsxs)("button",{onClick:()=>e("products",t.code),className:"group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-background text-left transition-all hover:border-brand/40 hover:shadow-xl",children:[(0,i.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,i.jsx)(eN.default,{src:eU(t.image),alt:n(t.title),fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"}),(0,i.jsx)("div",{className:"absolute left-3 top-3 flex items-center gap-2",children:(0,i.jsx)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-brand backdrop-blur",children:t.code})}),(0,i.jsx)("div",{className:"absolute right-3 top-3 grid size-8 place-items-center rounded-md border border-brand/40 bg-ink/70 text-brand backdrop-blur",children:(0,i.jsx)(o,{className:"size-4"})})]}),(0,i.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,i.jsx)("h3",{className:"text-lg font-bold tracking-tight text-foreground",children:n(t.title)}),(0,i.jsx)("p",{className:"mt-1.5 text-[13px] text-muted-foreground",children:n(t.short)}),(0,i.jsxs)("div",{className:"mt-4 flex items-center gap-1 text-[12px] font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100",children:[a("cta.explore")," ",(0,i.jsx)(ek,{className:"size-3.5"})]})]})]})},t.code)})})]}),(0,i.jsxs)("section",{className:"relative overflow-hidden border-y border-border",children:[(0,i.jsxs)("div",{className:"absolute inset-0",children:[(0,i.jsx)(eN.default,{src:eU("/images/why-us-bg.jpg"),alt:"",fill:!0,sizes:"100vw",className:"object-cover opacity-20"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background"})]}),(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24",children:[(0,i.jsx)(eP,{index:a("why.index"),eyebrow:a("why.eyebrow"),title:a("why.title"),align:"center",className:"mx-auto"}),(0,i.jsx)("div",{className:"mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",children:_.map(e=>(0,i.jsxs)("div",{className:"group bg-background/90 p-6 backdrop-blur-sm transition-colors hover:bg-card",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("span",{className:"font-mono text-2xl font-bold text-brand/30 transition-colors group-hover:text-brand",children:e.no}),(0,i.jsx)("span",{className:"size-1.5 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100"})]}),(0,i.jsx)("h3",{className:"mt-4 text-[15px] font-bold tracking-tight text-foreground",children:n(e.title)}),(0,i.jsx)("p",{className:"mt-2 text-[13px] leading-relaxed text-muted-foreground",children:n(e.desc)})]},e.no))})]})]}),(0,i.jsxs)(eH,{className:"bg-card/40 border-y border-border",children:[(0,i.jsx)(eP,{index:a("app.index"),eyebrow:a("app.eyebrow"),title:a("app.title")}),(0,i.jsx)("div",{className:"mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:$.map((a,t)=>(0,i.jsx)(eD,{delay:50*t,children:(0,i.jsxs)("button",{onClick:()=>e("solutions"),className:"group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-border transition-all hover:border-brand/40 hover:shadow-xl",children:[(0,i.jsx)(eN.default,{src:eU(a.image),alt:n(a.title),fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"}),(0,i.jsx)("div",{className:"absolute left-4 top-4",children:(0,i.jsx)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-brand backdrop-blur",children:a.code})}),(0,i.jsxs)("div",{className:"absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2",children:[(0,i.jsx)("span",{className:"text-[15px] font-bold leading-tight text-foreground",children:n(a.title)}),(0,i.jsx)(h,{className:"size-5 shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-100"})]})]})},a.code))})]}),(0,i.jsxs)(eH,{children:[(0,i.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[(0,i.jsx)(eP,{index:a("cases.index"),eyebrow:a("cases.eyebrow"),title:a("cases.title")}),(0,i.jsxs)(w,{variant:"outline",onClick:()=>e("cases"),children:[a("cta.viewAllCases")," ",(0,i.jsx)(ek,{className:"size-4"})]})]}),(0,i.jsx)("div",{className:"mt-10 grid gap-6 lg:grid-cols-3",children:X.map((a,t)=>(0,i.jsx)(eD,{delay:80*t,children:(0,i.jsxs)("button",{onClick:()=>e("cases",a.code),className:"group block w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-brand/40 hover:shadow-xl",children:[(0,i.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,i.jsx)(eN.default,{src:eU(a.image),alt:n(a.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent"}),(0,i.jsxs)("div",{className:"absolute left-4 top-4 flex items-center gap-2",children:[(0,i.jsx)("span",{className:"rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-brand-foreground",children:a.code}),(0,i.jsxs)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-foreground backdrop-blur",children:[n(a.location)," · ",a.year]})]})]}),(0,i.jsxs)("div",{className:"p-5",children:[(0,i.jsx)("h3",{className:"text-[15px] font-bold leading-snug tracking-tight text-foreground",children:n(a.title)}),(0,i.jsx)("p",{className:"mt-2 text-[13px] leading-relaxed text-muted-foreground",children:n(a.summary)}),(0,i.jsx)("div",{className:"mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-border/60 pt-3",children:a.metrics.map(e=>(0,i.jsxs)("div",{className:"text-[11px]",children:[(0,i.jsxs)("span",{className:"text-muted-foreground",children:[n(e.label),": "]}),(0,i.jsx)("span",{className:"font-mono font-medium text-foreground",children:e.value})]},e.label.en))})]})]})},a.code))})]}),(0,i.jsxs)(eH,{className:"bg-card/40 border-y border-border",children:[(0,i.jsx)(eP,{index:a("cert.index"),eyebrow:a("cert.eyebrow"),title:a("cert.title"),description:a("cert.desc")}),(0,i.jsx)("div",{className:"mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",children:Z.map((e,a)=>(0,i.jsx)(eD,{delay:50*a,children:(0,i.jsxs)("div",{className:"flex h-full flex-col items-center justify-center rounded-xl border border-border bg-background p-5 text-center transition-all hover:border-brand/40",children:[(0,i.jsx)("div",{className:"grid size-12 place-items-center rounded-full border border-brand/30 bg-brand-muted",children:(0,i.jsx)(eE,{className:"size-5 text-brand"})}),(0,i.jsx)("div",{className:"mt-3 font-mono text-[13px] font-bold tracking-wide text-foreground",children:e.code}),(0,i.jsx)("div",{className:"mt-0.5 text-[11px] text-muted-foreground",children:n(e.title)})]})},e.code))})]}),(0,i.jsxs)(eH,{children:[(0,i.jsx)(eP,{index:a("voice.index"),eyebrow:a("voice.eyebrow"),title:a("voice.title")}),(0,i.jsx)("div",{className:"mt-10 grid gap-6 lg:grid-cols-3",children:J.map((e,a)=>(0,i.jsx)(eD,{delay:80*a,children:(0,i.jsxs)("figure",{className:"flex h-full flex-col rounded-xl border border-border bg-card p-6",children:[(0,i.jsx)(eO,{className:"size-7 text-brand/60"}),(0,i.jsxs)("blockquote",{className:"mt-4 flex-1 text-[14px] leading-relaxed text-foreground/90",children:["“",n(e.quote),"”"]}),(0,i.jsxs)("figcaption",{className:"mt-6 border-t border-border/60 pt-4",children:[(0,i.jsx)("div",{className:"text-[14px] font-bold text-foreground",children:e.name}),(0,i.jsx)("div",{className:"text-[12px] text-muted-foreground",children:n(e.role)})]})]})},e.name))})]})]})}let eR=(0,o.default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]),eq={"CAT-01":ew,"CAT-02":eC,"CAT-03":eT,"CAT-04":eS,"CAT-05":eG,"CAT-06":eL};function eB({models:e,title:a,expandLabel:n,collapseLabel:t,detailLabel:o,hideDetailLabel:s}){let{loc:c}=P(),[l,d]=r.useState(!0),[h,p]=r.useState(null);return(0,i.jsxs)("div",{className:"mt-5 overflow-hidden rounded-xl border border-border bg-card",children:[(0,i.jsxs)("button",{onClick:()=>d(e=>!e),className:"flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-accent/40","aria-expanded":l,children:[(0,i.jsxs)("span",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] tracking-widest text-brand",children:a}),(0,i.jsx)("span",{className:"rounded-full bg-brand-muted px-2 py-0.5 font-mono text-[10px] text-brand",children:e.length})]}),(0,i.jsxs)("span",{className:"flex items-center gap-1.5 text-[12px] text-muted-foreground",children:[l?t:n,(0,i.jsx)(S,{className:"size-4 text-brand transition-transform "+(l?"rotate-180":"")})]})]}),l&&(0,i.jsx)("ul",{className:"divide-y divide-border/60 border-t border-border/60",children:e.map(e=>{let a=!!e.details,n=h===e.model;return(0,i.jsxs)("li",{className:"px-4 py-3",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4",children:[(0,i.jsx)("span",{className:"inline-flex w-fit shrink-0 items-center rounded-md border border-brand/30 bg-brand-muted px-2.5 py-1 font-mono text-[12px] font-bold text-brand",children:e.model}),(0,i.jsx)("span",{className:"flex-1 text-[13px] leading-snug text-foreground/90",children:c(e.desc)}),a&&(0,i.jsxs)("button",{onClick:()=>p(n?null:e.model),className:"inline-flex w-fit shrink-0 items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-brand transition-colors hover:border-brand/40 hover:bg-brand-muted",children:[n?s:o,(0,i.jsx)(S,{className:"size-3.5 transition-transform "+(n?"rotate-180":"")})]})]}),a&&n&&(0,i.jsx)("pre",{className:"mt-3 max-h-80 overflow-y-auto scroll-thin whitespace-pre-wrap rounded-lg border border-border/60 bg-background p-4 font-sans text-[12.5px] leading-relaxed text-foreground/85",children:c(e.details)})]},e.model)})})]})}function eY(){let{target:e,navigate:a}=U(),{t:n,loc:t}=P(),o=r.useMemo(()=>{if(!e)return 0;let a=Q.findIndex(a=>a.code===e);return a>=0?a:0},[e]),[s,c]=r.useState(o);r.useEffect(()=>c(o),[o]);let l=Q[s],d=eq[l.code]??ew;return r.useEffect(()=>{let e={"@context":"https://schema.org","@type":"Product",name:`HONG NGUYEN ${l.code} — ${l.title.en}`,description:l.description.en,brand:{"@type":"Brand",name:"HONG NGUYEN"},category:"Industrial Coatings",offers:{"@type":"Offer",priceCurrency:"USD",availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:"HONG NGUYEN Specialty Coatings Co., Ltd."}}},a=document.getElementById("product-jsonld");return a||((a=document.createElement("script")).id="product-jsonld",a.setAttribute("type","application/ld+json"),document.head.appendChild(a)),a.textContent=JSON.stringify(e),()=>{let e=document.getElementById("product-jsonld");e&&e.remove()}},[s]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-foreground/20 opacity-50"}),(0,i.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:n("pp.index")}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)(ez,{children:n("pp.eyebrow")})]})}),(0,i.jsx)(eD,{delay:80,children:(0,i.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[n("pp.title1"),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"text-brand",children:n("pp.title2")})]})}),(0,i.jsx)(eD,{delay:160,children:(0,i.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:n("pp.desc")})})]})]}),(0,i.jsx)(eH,{className:"!py-10",children:(0,i.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-6",children:Q.map((e,a)=>{let n=eq[e.code]??ew,r=a===s;return(0,i.jsxs)("button",{onClick:()=>c(a),className:"group flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-all "+(r?"border-brand bg-brand-muted shadow-lg":"border-border bg-card hover:border-brand/40"),children:[(0,i.jsx)("span",{className:"grid size-9 place-items-center rounded-md border transition-colors "+(r?"border-brand bg-brand text-brand-foreground":"border-border text-muted-foreground group-hover:text-brand"),children:(0,i.jsx)(n,{className:"size-4"})}),(0,i.jsx)("span",{className:"font-mono text-[10px] tracking-widest "+(r?"text-brand":"text-muted-foreground"),children:e.code}),(0,i.jsx)("span",{className:"text-[13px] font-semibold leading-tight "+(r?"text-foreground":"text-foreground/80"),children:t(e.title)})]},e.code)})})}),(0,i.jsx)(eH,{className:"!pt-0",children:(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-start",children:[(0,i.jsxs)("div",{className:"lg:col-span-7",children:[(0,i.jsxs)(eD,{children:[(0,i.jsxs)("div",{className:"relative aspect-[4/3] overflow-hidden rounded-xl border border-border",children:[(0,i.jsx)(eN.default,{src:eU(l.image),alt:t(l.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 58vw",className:"object-cover"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"}),(0,i.jsx)("div",{className:"absolute left-4 top-4 flex items-center gap-2",children:(0,i.jsx)("span",{className:"rounded-full bg-brand px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-brand-foreground",children:l.code})}),(0,i.jsx)("div",{className:"absolute bottom-4 left-4 right-4",children:(0,i.jsxs)("div",{className:"flex items-center gap-2 text-foreground",children:[(0,i.jsx)(d,{className:"size-5 text-brand"}),(0,i.jsx)("span",{className:"text-lg font-bold",children:t(l.title)})]})})]}),(0,i.jsx)("div",{className:"mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4",children:l.categorySpecs.map(e=>(0,i.jsxs)("div",{className:"rounded-lg border border-border bg-card p-3 text-center",children:[(0,i.jsx)("div",{className:"font-mono text-[15px] font-bold text-brand",children:e.value}),(0,i.jsx)("div",{className:"mt-0.5 text-[11px] leading-tight text-muted-foreground",children:t(e.label)})]},e.label.en))})]},l.code),(0,i.jsx)("div",{className:"mt-6 grid gap-3 sm:grid-cols-2",children:l.features.map(e=>(0,i.jsxs)("div",{className:"flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5",children:[(0,i.jsx)(C,{className:"mt-0.5 size-4 shrink-0 text-brand"}),(0,i.jsx)("span",{className:"text-[13px] leading-snug text-foreground/90",children:t(e)})]},e.en))})]}),(0,i.jsx)("div",{className:"lg:col-span-5",children:(0,i.jsxs)(eD,{children:[(0,i.jsxs)("span",{className:"font-mono text-[11px] tracking-widest text-brand",children:[l.code," ",n("pp.specSheet")]}),(0,i.jsx)("h2",{className:"mt-2 text-3xl font-bold tracking-tight text-foreground",children:t(l.title)}),(0,i.jsx)("p",{className:"mt-3 text-[14px] leading-relaxed text-muted-foreground",children:t(l.description)}),(0,i.jsxs)("div",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between border-b border-border/60 pb-2.5",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] tracking-widest text-muted-foreground",children:n("pp.technicalData")}),(0,i.jsx)("span",{className:"font-mono text-[10px] text-brand",children:"REV.2026"})]}),(0,i.jsx)("div",{className:"mt-1",children:l.specs.map(e=>(0,i.jsx)(eA,{label:t(e.label),value:e.value},e.label.en))})]}),(0,i.jsxs)("div",{className:"mt-5",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] tracking-widest text-muted-foreground",children:n("pp.applications")}),(0,i.jsx)("div",{className:"mt-2.5 flex flex-wrap gap-2",children:l.applications.map(e=>(0,i.jsx)("span",{className:"inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[12px] text-foreground/90",children:t(e)},e.en))})]}),(0,i.jsx)(eB,{models:l.models,title:n("pp.featuredModels"),expandLabel:n("pp.expandModels"),collapseLabel:n("pp.collapseModels"),detailLabel:n("pp.viewDetail"),hideDetailLabel:n("pp.hideDetail")}),(0,i.jsxs)("div",{className:"mt-6 flex flex-wrap gap-3",children:[(0,i.jsxs)(w,{onClick:()=>a("contact"),children:[n("cta.requestQuote")," ",(0,i.jsx)(ek,{className:"size-4"})]}),(0,i.jsxs)(w,{variant:"outline",onClick:()=>a("contact"),children:[(0,i.jsx)(eR,{className:"size-4"})," ",n("cta.getTds")]})]})]},l.code+"-detail")})]})}),(0,i.jsxs)(eH,{className:"border-t border-border bg-card/40",children:[(0,i.jsx)(eP,{eyebrow:n("pp.fullCatalogEyebrow"),title:n("pp.fullCatalogTitle")}),(0,i.jsx)("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Q.map((e,a)=>{let n=eq[e.code]??ew;return(0,i.jsxs)("button",{onClick:()=>{c(a),window.scrollTo({top:0,behavior:"smooth"})},className:"group flex items-center gap-4 overflow-hidden rounded-lg border border-border bg-background p-3 text-left transition-all hover:border-brand/40 hover:shadow-md",children:[(0,i.jsxs)("div",{className:"relative size-16 shrink-0 overflow-hidden rounded-md",children:[(0,i.jsx)(eN.default,{src:eU(e.image),alt:t(e.title),fill:!0,sizes:"64px",className:"object-cover transition-transform duration-500 group-hover:scale-110"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"}),(0,i.jsx)("span",{className:"absolute bottom-1 left-1 grid size-6 place-items-center rounded bg-ink/70 text-brand backdrop-blur",children:(0,i.jsx)(n,{className:"size-3.5"})})]}),(0,i.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,i.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-brand",children:e.code}),(0,i.jsx)("div",{className:"truncate text-[14px] font-semibold text-foreground",children:t(e.title)}),(0,i.jsx)("div",{className:"truncate text-[11px] text-muted-foreground",children:t(e.short)})]}),(0,i.jsx)(h,{className:"ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand"})]},e.code)})})]})]})}let eI=(0,o.default)("factory",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]),eV={Factory:eI,Ship:(0,o.default)("ship",[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]]),Flame:eC,Construction:(0,o.default)("construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]),Building2:eS,LayoutGrid:(0,o.default)("layout-grid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]])};function eW(){let{navigate:e}=U(),{t:a,loc:n}=P();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,i.jsx)("div",{className:"pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/8 blur-3xl"}),(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:a("sol.index")}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)(ez,{children:a("sol.eyebrow")})]})}),(0,i.jsx)(eD,{delay:80,children:(0,i.jsxs)("h1",{className:"mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[a("sol.titlePre")," ",(0,i.jsx)("span",{className:"text-brand",children:a("sol.titleAccent")})]})}),(0,i.jsx)(eD,{delay:160,children:(0,i.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:a("sol.desc")})})]})]}),(0,i.jsx)(eH,{children:(0,i.jsx)("div",{className:"grid gap-6 lg:grid-cols-2",children:en.map((t,r)=>{let o=eV[t.icon]??eI;return(0,i.jsx)(eD,{delay:70*r,children:(0,i.jsxs)("div",{className:"group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-brand/40 hover:shadow-xl",children:[(0,i.jsxs)("div",{className:"relative aspect-[16/9] overflow-hidden",children:[(0,i.jsx)(eN.default,{src:eU(t.image),alt:n(t.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"}),(0,i.jsxs)("div",{className:"absolute left-4 top-4 flex items-center gap-2",children:[(0,i.jsx)("span",{className:"grid size-9 place-items-center rounded-md border border-brand/40 bg-ink/70 text-brand backdrop-blur",children:(0,i.jsx)(o,{className:"size-5"})}),(0,i.jsx)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-foreground backdrop-blur",children:t.code})]})]}),(0,i.jsxs)("div",{className:"relative -mt-8 p-7",children:[(0,i.jsx)("h3",{className:"text-xl font-bold tracking-tight text-foreground",children:n(t.title)}),(0,i.jsx)("p",{className:"mt-2.5 text-[14px] leading-relaxed text-muted-foreground",children:n(t.desc)}),(0,i.jsxs)("div",{className:"mt-5 border-t border-border/60 pt-4",children:[(0,i.jsx)("span",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:a("sol.recommended")}),(0,i.jsx)("div",{className:"mt-2.5 flex flex-wrap gap-2",children:t.products.map(e=>(0,i.jsxs)("span",{className:"inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[12px] text-foreground/90",children:[(0,i.jsx)(ej,{className:"size-3.5 text-brand"}),n(e)]},e.en))})]}),(0,i.jsxs)("button",{onClick:()=>e("contact"),className:"mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand transition-colors hover:text-brand/80",children:[a("cta.talkToEngineer")," ",(0,i.jsx)(ek,{className:"size-4"})]})]})]})},t.code)})})}),(0,i.jsxs)(eH,{className:"border-t border-border bg-card/40",children:[(0,i.jsx)(eP,{eyebrow:a("sol.appEyebrow"),title:a("sol.appTitle"),description:a("sol.appDesc")}),(0,i.jsx)("div",{className:"mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:$.map((e,a)=>(0,i.jsx)(eD,{delay:50*a,children:(0,i.jsxs)("div",{className:"group flex items-center gap-4 rounded-lg border border-border bg-background p-5 transition-all hover:border-brand/40",children:[(0,i.jsx)("span",{className:"grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand",children:(0,i.jsx)("span",{className:"font-mono text-[12px] font-bold",children:a+1})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-brand",children:e.code}),(0,i.jsx)("div",{className:"text-[14px] font-medium text-foreground",children:n(e.title)})]})]})},e.code))})]}),(0,i.jsxs)(eH,{children:[(0,i.jsx)(eP,{eyebrow:a("sol.procEyebrow"),title:a("sol.procTitle"),align:"center",className:"mx-auto"}),(0,i.jsx)("div",{className:"mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:ei.map((e,a)=>(0,i.jsx)(eD,{delay:70*a,children:(0,i.jsxs)("div",{className:"relative rounded-xl border border-border bg-card p-6",children:[(0,i.jsx)("span",{className:"font-mono text-3xl font-bold text-brand/25",children:e.no}),(0,i.jsx)("h3",{className:"mt-3 text-[15px] font-bold text-foreground",children:n(e.t)}),(0,i.jsx)("p",{className:"mt-1.5 text-[13px] leading-relaxed text-muted-foreground",children:n(e.d)}),a<ei.length-1&&(0,i.jsx)(ek,{className:"absolute -right-3 top-1/2 hidden size-5 -translate-y-1/2 text-brand/40 lg:block"})]})},e.no))}),(0,i.jsx)("div",{className:"mt-10 flex justify-center",children:(0,i.jsxs)(w,{size:"lg",onClick:()=>e("contact"),children:[a("cta.startProject")," ",(0,i.jsx)(ek,{className:"size-4"})]})})]})]})}let eK=(0,o.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),eQ=(0,o.default)("ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]),e_=(0,o.default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),e$=[eQ,eT,e_];function eX(){let{target:e,navigate:a}=U(),{t:n,loc:t}=P(),o=r.useMemo(()=>{if(!e)return 0;let a=X.findIndex(a=>a.code===e);return a>=0?a:0},[e]),[s,c]=r.useState(o);r.useEffect(()=>c(o),[o]);let l=X[s];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,i.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:n("cases.index")}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)(ez,{children:n("cp.eyebrow")})]})}),(0,i.jsx)(eD,{delay:80,children:(0,i.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[n("cp.titlePre")," ",(0,i.jsx)("span",{className:"text-brand",children:n("cp.titleAccent")})]})}),(0,i.jsx)(eD,{delay:160,children:(0,i.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:n("cp.desc")})})]})]}),(0,i.jsx)(eH,{className:"!py-10",children:(0,i.jsx)("div",{className:"grid gap-4 sm:grid-cols-3",children:X.map((e,a)=>{let n=a===s;return(0,i.jsx)("button",{onClick:()=>c(a),className:"group relative overflow-hidden rounded-xl border text-left transition-all "+(n?"border-brand bg-brand-muted shadow-lg":"border-border bg-card hover:border-brand/40"),children:(0,i.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,i.jsx)(eN.default,{src:eU(e.image),alt:t(e.title),fill:!0,sizes:"(max-width: 640px) 100vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent"}),(0,i.jsx)("div",{className:"absolute left-3 top-3 flex items-center gap-1.5",children:(0,i.jsx)("span",{className:"rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-brand-foreground",children:e.code})}),(0,i.jsx)("div",{className:"absolute bottom-3 left-3 right-3",children:(0,i.jsxs)("div",{className:"flex items-center gap-2 font-mono text-[10px] tracking-wider text-foreground/90",children:[(0,i.jsx)(em,{className:"size-3 text-brand"})," ",t(e.location),(0,i.jsx)("span",{className:"opacity-50",children:"·"}),(0,i.jsx)(eK,{className:"size-3 text-brand"})," ",e.year]})})]})},e.code)})})}),(0,i.jsx)(eH,{className:"!pt-0",children:(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-start",children:[(0,i.jsx)("div",{className:"lg:col-span-7",children:(0,i.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden rounded-xl border border-border",children:[(0,i.jsx)(eN.default,{src:eU(l.image),alt:t(l.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 58vw",className:"object-cover"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"})]})}),(0,i.jsxs)("div",{className:"lg:col-span-5",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"rounded-full bg-brand px-2.5 py-0.5 font-mono text-[11px] font-bold tracking-wider text-brand-foreground",children:l.code}),(0,i.jsxs)("span",{className:"inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground",children:[(0,i.jsx)(em,{className:"size-3.5 text-brand"})," ",t(l.location)]}),(0,i.jsxs)("span",{className:"inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground",children:[(0,i.jsx)(eK,{className:"size-3.5 text-brand"})," ",l.year]})]}),(0,i.jsx)("h2",{className:"mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl",children:t(l.title)}),(0,i.jsx)("p",{className:"mt-4 text-[14px] leading-relaxed text-muted-foreground",children:t(l.summary)}),(0,i.jsx)("div",{className:"mt-6 grid grid-cols-3 gap-3",children:l.metrics.map((e,a)=>{let n=e$[a]??eQ;return(0,i.jsxs)("div",{className:"rounded-lg border border-border bg-card p-4 text-center",children:[(0,i.jsx)(n,{className:"mx-auto size-4 text-brand"}),(0,i.jsx)("div",{className:"mt-2 font-mono text-[15px] font-bold text-foreground",children:e.value}),(0,i.jsx)("div",{className:"mt-0.5 text-[11px] text-muted-foreground",children:t(e.label)})]},e.label.en)})}),(0,i.jsxs)("div",{className:"mt-6 flex flex-wrap gap-3",children:[(0,i.jsxs)(w,{onClick:()=>a("contact"),children:[n("cta.requestSimilar")," ",(0,i.jsx)(ek,{className:"size-4"})]}),(0,i.jsx)(w,{variant:"outline",onClick:()=>a("products"),children:n("cta.relatedProducts")})]})]})]})},l.code)}),(0,i.jsxs)(eH,{className:"border-t border-border bg-card/40",children:[(0,i.jsx)("div",{className:"mb-8 max-w-2xl",children:(0,i.jsx)(ez,{children:n("cp.outcomesTitle")})}),(0,i.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:ed.map(e=>(0,i.jsxs)("div",{className:"rounded-xl border border-border bg-background p-6 text-center",children:[(0,i.jsx)("div",{className:"text-3xl font-bold tracking-tight text-brand sm:text-4xl",children:e.v}),(0,i.jsx)("div",{className:"mt-2 text-[12px] text-muted-foreground",children:t(e.l)})]},e.v))})]})]})}let eZ=(0,o.default)("earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),eJ=(0,o.default)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]),e0={Factory:eI,FlaskConical:eL,Globe2:eZ,Truck:(0,o.default)("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]])};function e1(){let{navigate:e}=U(),{t:a,loc:n}=P();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,i.jsx)("div",{className:"pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/8 blur-3xl"}),(0,i.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:a("ap.index")}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)(ez,{children:a("ap.eyebrow")})]})}),(0,i.jsx)(eD,{delay:80,children:(0,i.jsxs)("h1",{className:"mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[a("ap.titlePre")," ",(0,i.jsx)("span",{className:"text-brand",children:a("ap.titleAccent")})]})}),(0,i.jsx)(eD,{delay:160,children:(0,i.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:a("ap.desc")})})]})]}),(0,i.jsx)(eH,{className:"!py-12",children:(0,i.jsx)("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-4",children:W.map((e,a)=>(0,i.jsx)(eD,{delay:60*a,children:(0,i.jsxs)("div",{className:"rounded-xl border border-border bg-card p-6",children:[(0,i.jsx)("div",{className:"text-3xl font-bold tracking-tight text-brand sm:text-4xl",children:e.value}),(0,i.jsx)("div",{className:"mt-2 text-[13px] text-foreground",children:n(e.label)}),(0,i.jsx)("div",{className:"mt-0.5 font-mono text-[11px] text-muted-foreground",children:n(e.sub)})]})},e.label.en))})}),(0,i.jsx)(eH,{className:"!pt-0",children:(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-center",children:[(0,i.jsx)("div",{className:"lg:col-span-6",children:(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"relative aspect-[4/3] overflow-hidden rounded-xl border border-border",children:[(0,i.jsx)(eN.default,{src:eU("/images/factory.jpg"),alt:"HONG NGUYEN paint manufacturing facility",fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",className:"object-cover"}),(0,i.jsxs)("div",{className:"absolute bottom-4 left-4 rounded-lg bg-ink/80 px-4 py-2.5 backdrop-blur",children:[(0,i.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-brand",children:a("footer.headquarters")}),(0,i.jsx)("div",{className:"text-[13px] font-semibold text-foreground",children:"Foshan, Guangdong"})]})]})})}),(0,i.jsxs)("div",{className:"lg:col-span-6",children:[(0,i.jsx)(eP,{eyebrow:a("ap.storyEyebrow"),title:a("ap.storyTitle")}),(0,i.jsxs)("div",{className:"mt-6 space-y-4 text-[14px] leading-relaxed text-muted-foreground",children:[(0,i.jsx)("p",{children:a("ap.storyP1")}),(0,i.jsx)("p",{children:a("ap.storyP2")}),(0,i.jsx)("p",{children:a("ap.storyP3")}),(0,i.jsx)("p",{children:a("ap.storyP4")})]}),(0,i.jsx)("ul",{className:"mt-6 grid gap-2.5 sm:grid-cols-2",children:ec.map(e=>(0,i.jsxs)("li",{className:"flex items-center gap-2 text-[13px] text-foreground/90",children:[(0,i.jsx)(ej,{className:"size-4 text-brand"})," ",n(e)]},e.en))})]})]})}),(0,i.jsxs)(eH,{className:"border-t border-border bg-card/40",children:[(0,i.jsx)(eP,{eyebrow:a("ap.capEyebrow"),title:a("ap.capTitle")}),(0,i.jsx)("div",{className:"mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:es.map((e,a)=>{let t=e0[e.icon]??eI;return(0,i.jsx)(eD,{delay:70*a,children:(0,i.jsxs)("div",{className:"h-full rounded-xl border border-border bg-background p-6",children:[(0,i.jsx)("span",{className:"grid size-11 place-items-center rounded-lg border border-brand/30 bg-brand-muted text-brand",children:(0,i.jsx)(t,{className:"size-5"})}),(0,i.jsx)("h3",{className:"mt-4 text-[15px] font-bold text-foreground",children:n(e.t)}),(0,i.jsx)("p",{className:"mt-1.5 text-[13px] leading-relaxed text-muted-foreground",children:n(e.d)})]})},e.t.en)})}),(0,i.jsx)(eD,{delay:120,children:(0,i.jsxs)("div",{className:"mt-8 grid overflow-hidden rounded-xl border border-border lg:grid-cols-2",children:[(0,i.jsxs)("div",{className:"relative aspect-[16/10] lg:aspect-auto",children:[(0,i.jsx)(eN.default,{src:eU("/images/about-rd.jpg"),alt:"HONG NGUYEN R&D laboratory",fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",className:"object-cover"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent to-card/40"})]}),(0,i.jsxs)("div",{className:"bg-background p-7 lg:p-9",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)(eL,{className:"size-5 text-brand"}),(0,i.jsx)("span",{className:"eyebrow text-brand text-[11px]",children:"R&D / QC LAB"})]}),(0,i.jsx)("h3",{className:"mt-3 text-xl font-bold tracking-tight text-foreground",children:n({en:"12 senior chemists. Batch-to-batch consistency.",zh:"12名资深化学师,批次间始终如一。",vi:"12 kỹ sư hóa học — đồng đều giữa các lô."})}),(0,i.jsx)("p",{className:"mt-3 text-[14px] leading-relaxed text-muted-foreground",children:n({en:"Every formulation is tuned in-house and every batch ships with a full QC report. Our spectrophotometry and salt-spray suite cuts sample turnaround to 7 days.",zh:"每个配方均在内部调校,每批出货附带完整QC报告。光谱分析与盐雾测试套件将样品周转缩短至7天。",vi:"Mọi công thức đều phối chế nội bộ, mỗi lô kèm báo cáo QC đầy đủ. Bộ quang phổ và phun muối rút ngắn giao mẫu xuống 7 ngày."})}),(0,i.jsx)("ul",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:[{en:"Spectrophotometry suite",zh:"光谱分析套件",vi:"Bộ quang phổ"},{en:"Salt-spray testing",zh:"盐雾测试",vi:"Thử phun muối"},{en:"Cross-cut adhesion",zh:"划格附着力",vi:"Bám dính cắt chéo"},{en:"Sample in 7 days",zh:"7天出样",vi:"Mẫu 7 ngày"}].map(e=>(0,i.jsxs)("li",{className:"flex items-center gap-2 text-[13px] text-foreground/90",children:[(0,i.jsx)(ej,{className:"size-4 text-brand"})," ",n(e)]},e.en))})]})]})})]}),(0,i.jsxs)(eH,{children:[(0,i.jsx)(eP,{eyebrow:a("ap.procEyebrow"),title:a("ap.procTitle"),align:"center",className:"mx-auto"}),(0,i.jsxs)("div",{className:"relative mt-12",children:[(0,i.jsx)("div",{className:"absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"}),(0,i.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:et.map((e,a)=>(0,i.jsx)(eD,{delay:80*a,children:(0,i.jsxs)("div",{className:"relative text-center lg:text-left",children:[(0,i.jsx)("div",{className:"mx-auto flex size-14 items-center justify-center rounded-full border-2 border-brand dark bg-ink font-mono text-lg font-bold text-brand lg:mx-0",children:e.no}),(0,i.jsx)("h3",{className:"mt-4 text-[15px] font-bold text-foreground",children:n(e.title)}),(0,i.jsx)("p",{className:"mt-1.5 text-[13px] leading-relaxed text-muted-foreground",children:n(e.desc)})]})},e.no))})]})]}),(0,i.jsx)(eH,{className:"border-t border-border bg-card/40",children:(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(eP,{eyebrow:a("ap.certEyebrow"),title:a("ap.certTitle")}),(0,i.jsx)("div",{className:"mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",children:Z.map(e=>(0,i.jsxs)("div",{className:"flex items-center gap-2.5 rounded-lg border border-border bg-background p-4",children:[(0,i.jsx)(eJ,{className:"size-5 shrink-0 text-brand"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-mono text-[12px] font-bold text-foreground",children:e.code}),(0,i.jsx)("div",{className:"text-[11px] text-muted-foreground",children:n(e.title)})]})]},e.code))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eP,{eyebrow:a("ap.partnersEyebrow"),title:a("ap.partnersTitle")}),(0,i.jsx)("div",{className:"mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",children:ee.map(e=>(0,i.jsx)("div",{className:"grid place-items-center rounded-lg border border-border bg-background px-3 py-5 text-center font-mono text-sm font-bold tracking-widest text-muted-foreground/80",children:e},e))})]})]})}),(0,i.jsx)(eH,{children:(0,i.jsxs)("div",{className:"relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-muted via-background to-secondary p-8 sm:p-12",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.05]"}),(0,i.jsx)("div",{className:"pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-brand/15 blur-3xl"}),(0,i.jsxs)("div",{className:"relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center",children:[(0,i.jsxs)("div",{className:"max-w-xl",children:[(0,i.jsx)(ez,{children:a("cta.partnerWithUs")}),(0,i.jsx)("h3",{className:"mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",children:a("ap.ctaTitle")}),(0,i.jsx)("p",{className:"mt-3 text-[14px] text-muted-foreground",children:a("ap.ctaDesc")})]}),(0,i.jsxs)(w,{size:"lg",onClick:()=>e("contact"),children:[a("cta.getQuote")," ",(0,i.jsx)(ek,{className:"size-4"})]})]})]})})]})}let e2=(0,o.default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),e5=(0,o.default)("newspaper",[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]]),e4=["All","Product Launch","Project","Certification","Export","R&D","Industry"],e3={en:"en-US",zh:"zh-CN",vi:"vi-VN"};function e8(e,a){return new Date(e).toLocaleDateString(e3[a],{year:"numeric",month:"short",day:"numeric"})}function e6(){let{navigate:e}=U(),{t:a,loc:n,locale:t}=P(),[o,s]=r.useState("All"),[c,...l]=r.useMemo(()=>"All"===o?er:er.filter(e=>e.category===o),[o]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,i.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:"[ NEWS ]"}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)(ez,{children:a("np.eyebrow")})]})}),(0,i.jsx)(eD,{delay:80,children:(0,i.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[a("np.titlePre")," ",(0,i.jsx)("span",{className:"text-brand",children:a("np.titleAccent")})]})}),(0,i.jsx)(eD,{delay:160,children:(0,i.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:a("np.desc")})})]})]}),(0,i.jsx)(eH,{className:"!py-8",children:(0,i.jsx)("div",{className:"flex flex-wrap gap-2",children:e4.map(e=>{let n="All"===e?a("np.all"):a(`cat.${e}`);return(0,i.jsx)("button",{onClick:()=>s(e),className:"rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors "+(o===e?"border-brand bg-brand text-brand-foreground":"border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"),children:n},e)})})}),c&&(0,i.jsx)(eH,{className:"!pt-0",children:(0,i.jsx)(eD,{children:(0,i.jsxs)("article",{className:"group grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2",children:[(0,i.jsxs)("div",{className:"relative min-h-[280px] overflow-hidden bg-ink",children:[(0,i.jsx)(eN.default,{src:eU(c.image),alt:n(c.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",className:"object-cover"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent"}),(0,i.jsx)("div",{className:"pointer-events-none absolute -right-16 -top-16 size-60 rounded-full bg-brand/20 blur-3xl"}),(0,i.jsxs)("div",{className:"relative flex h-full flex-col justify-between p-8",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-foreground",children:a("np.featured")}),(0,i.jsx)("span",{className:"rounded-full border border-border bg-ink/60 px-3 py-1 font-mono text-[10px] tracking-widest text-foreground backdrop-blur",children:a(`cat.${c.category}`)})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(e5,{className:"size-10 text-brand"}),(0,i.jsxs)("p",{className:"mt-4 font-mono text-[11px] tracking-widest text-foreground/80",children:[e8(c.date,t)," · ",n(c.read)]})]})]})]}),(0,i.jsxs)("div",{className:"p-8 lg:p-10",children:[(0,i.jsx)("h2",{className:"text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl",children:n(c.title)}),(0,i.jsx)("p",{className:"mt-4 text-[15px] leading-relaxed text-muted-foreground",children:n(c.excerpt)}),(0,i.jsxs)("div",{className:"mt-6 flex items-center gap-4 text-[12px] text-muted-foreground",children:[(0,i.jsxs)("span",{className:"inline-flex items-center gap-1.5",children:[(0,i.jsx)(e2,{className:"size-3.5 text-brand"})," ",n(c.read)]}),(0,i.jsx)("span",{className:"font-mono",children:e8(c.date,t)})]}),(0,i.jsxs)(w,{variant:"outline",className:"mt-6",onClick:()=>e("contact"),children:[a("cta.readArticle")," ",(0,i.jsx)(ek,{className:"size-4"})]})]})]})})}),(0,i.jsx)(eH,{className:"!pt-0",children:(0,i.jsx)("div",{className:"grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:l.map((e,r)=>(0,i.jsx)(eD,{delay:60*r,children:(0,i.jsxs)("article",{className:"group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-brand/40 hover:shadow-lg",children:[(0,i.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,i.jsx)(eN.default,{src:eU(e.image),alt:n(e.title),fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent"}),(0,i.jsx)("div",{className:"absolute left-3 top-3",children:(0,i.jsx)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-foreground backdrop-blur",children:a(`cat.${e.category}`)})})]}),(0,i.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-muted-foreground",children:e8(e.date,t)}),(0,i.jsx)("h3",{className:"mt-2 text-[16px] font-bold leading-snug tracking-tight text-foreground",children:n(e.title)}),(0,i.jsx)("p",{className:"mt-2.5 flex-1 text-[13px] leading-relaxed text-muted-foreground",children:n(e.excerpt)}),(0,i.jsxs)("div",{className:"mt-4 flex items-center justify-between border-t border-border/60 pt-3",children:[(0,i.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-[12px] text-muted-foreground",children:[(0,i.jsx)(e2,{className:"size-3.5 text-brand"})," ",n(e.read)]}),(0,i.jsx)(h,{className:"size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand"})]})]})]})},e.title.en))})}),(0,i.jsx)(eH,{className:"border-t border-border bg-card/40",children:(0,i.jsxs)("div",{className:"flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-background p-8 sm:p-10 lg:flex-row lg:items-center",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(ez,{children:a("np.stayEyebrow")}),(0,i.jsx)("h3",{className:"mt-2 text-2xl font-bold tracking-tight text-foreground",children:a("np.stayTitle")}),(0,i.jsx)("p",{className:"mt-2 text-[14px] text-muted-foreground",children:a("np.stayDesc")})]}),(0,i.jsxs)(w,{size:"lg",onClick:()=>e("contact"),children:[a("cta.subscribe")," ",(0,i.jsx)(ek,{className:"size-4"})]})]})})]})}let e9=(0,o.default)("message-circle-question-mark",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),e7=(0,o.default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);var ae=e.i(30030),aa=e.i(75830),an=e.i(81140),at=e.i(69340),ai=e.i(48425),ar=e.i(34620),ao=e.i(96626),as=r[" useId ".trim().toString()]||(()=>void 0),ac=0;function al(e){let[a,n]=r.useState(as());return(0,ar.useLayoutEffect)(()=>{e||n(e=>e??String(ac++))},[e]),e||(a?`radix-${a}`:"")}var ad="Collapsible",[ah,ap]=(0,ae.createContextScope)(ad),[am,ax]=ah(ad),au=r.forwardRef((e,a)=>{let{__scopeCollapsible:n,open:t,defaultOpen:o,disabled:s,onOpenChange:c,...l}=e,[d,h]=(0,at.useControllableState)({prop:t,defaultProp:o??!1,onChange:c,caller:ad});return(0,i.jsx)(am,{scope:n,disabled:s,contentId:al(),open:d,onOpenToggle:r.useCallback(()=>h(e=>!e),[h]),children:(0,i.jsx)(ai.Primitive.div,{"data-state":aN(d),"data-disabled":s?"":void 0,...l,ref:a})})});au.displayName=ad;var ag="CollapsibleTrigger",af=r.forwardRef((e,a)=>{let{__scopeCollapsible:n,...t}=e,r=ax(ag,n);return(0,i.jsx)(ai.Primitive.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":aN(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...t,ref:a,onClick:(0,an.composeEventHandlers)(e.onClick,r.onOpenToggle)})});af.displayName=ag;var ab="CollapsibleContent",av=r.forwardRef((e,a)=>{let{forceMount:n,...t}=e,r=ax(ab,e.__scopeCollapsible);return(0,i.jsx)(ao.Presence,{present:n||r.open,children:({present:e})=>(0,i.jsx)(ay,{...t,ref:a,present:e})})});av.displayName=ab;var ay=r.forwardRef((e,a)=>{let{__scopeCollapsible:n,present:t,children:o,...s}=e,c=ax(ab,n),[l,d]=r.useState(t),h=r.useRef(null),p=(0,x.useComposedRefs)(a,h),m=r.useRef(0),u=m.current,g=r.useRef(0),f=g.current,b=c.open||l,v=r.useRef(b),y=r.useRef(void 0);return r.useEffect(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,ar.useLayoutEffect)(()=>{let e=h.current;if(e){y.current=y.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let a=e.getBoundingClientRect();m.current=a.height,g.current=a.width,v.current||(e.style.transitionDuration=y.current.transitionDuration,e.style.animationName=y.current.animationName),d(t)}},[c.open,t]),(0,i.jsx)(ai.Primitive.div,{"data-state":aN(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!b,...s,ref:p,style:{"--radix-collapsible-content-height":u?`${u}px`:void 0,"--radix-collapsible-content-width":f?`${f}px`:void 0,...e.style},children:b&&o})});function aN(e){return e?"open":"closed"}var ak=r.createContext(void 0),aw="Accordion",aC=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[aT,aS,aG]=(0,aa.createCollection)(aw),[aL,aj]=(0,ae.createContextScope)(aw,[aG,ap]),aO=ap(),aE=r.default.forwardRef((e,a)=>{let{type:n,...t}=e;return(0,i.jsx)(aT.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,i.jsx)(aU,{...t,ref:a}):(0,i.jsx)(aD,{...t,ref:a})})});aE.displayName=aw;var[az,aP]=aL(aw),[aH,aA]=aL(aw,{collapsible:!1}),aD=r.default.forwardRef((e,a)=>{let{value:n,defaultValue:t,onValueChange:o=()=>{},collapsible:s=!1,...c}=e,[l,d]=(0,at.useControllableState)({prop:n,defaultProp:t??"",onChange:o,caller:aw});return(0,i.jsx)(az,{scope:e.__scopeAccordion,value:r.default.useMemo(()=>l?[l]:[],[l]),onItemOpen:d,onItemClose:r.default.useCallback(()=>s&&d(""),[s,d]),children:(0,i.jsx)(aH,{scope:e.__scopeAccordion,collapsible:s,children:(0,i.jsx)(aR,{...c,ref:a})})})}),aU=r.default.forwardRef((e,a)=>{let{value:n,defaultValue:t,onValueChange:o=()=>{},...s}=e,[c,l]=(0,at.useControllableState)({prop:n,defaultProp:t??[],onChange:o,caller:aw}),d=r.default.useCallback(e=>l((a=[])=>[...a,e]),[l]),h=r.default.useCallback(e=>l((a=[])=>a.filter(a=>a!==e)),[l]);return(0,i.jsx)(az,{scope:e.__scopeAccordion,value:c,onItemOpen:d,onItemClose:h,children:(0,i.jsx)(aH,{scope:e.__scopeAccordion,collapsible:!0,children:(0,i.jsx)(aR,{...s,ref:a})})})}),[aM,aF]=aL(aw),aR=r.default.forwardRef((e,a)=>{let n,{__scopeAccordion:t,disabled:o,dir:s,orientation:c="vertical",...l}=e,d=r.default.useRef(null),h=(0,x.useComposedRefs)(d,a),p=aS(t),m="ltr"===(n=r.useContext(ak),s||n||"ltr"),u=(0,an.composeEventHandlers)(e.onKeyDown,e=>{if(!aC.includes(e.key))return;let a=e.target,n=p().filter(e=>!e.ref.current?.disabled),t=n.findIndex(e=>e.ref.current===a),i=n.length;if(-1===t)return;e.preventDefault();let r=t,o=i-1,s=()=>{(r=t+1)>o&&(r=0)},l=()=>{(r=t-1)<0&&(r=o)};switch(e.key){case"Home":r=0;break;case"End":r=o;break;case"ArrowRight":"horizontal"===c&&(m?s():l());break;case"ArrowDown":"vertical"===c&&s();break;case"ArrowLeft":"horizontal"===c&&(m?l():s());break;case"ArrowUp":"vertical"===c&&l()}let d=r%i;n[d].ref.current?.focus()});return(0,i.jsx)(aM,{scope:t,disabled:o,direction:s,orientation:c,children:(0,i.jsx)(aT.Slot,{scope:t,children:(0,i.jsx)(ai.Primitive.div,{...l,"data-orientation":c,ref:h,onKeyDown:o?void 0:u})})})}),aq="AccordionItem",[aB,aY]=aL(aq),aI=r.default.forwardRef((e,a)=>{let{__scopeAccordion:n,value:t,...r}=e,o=aF(aq,n),s=aP(aq,n),c=aO(n),l=al(),d=t&&s.value.includes(t)||!1,h=o.disabled||e.disabled;return(0,i.jsx)(aB,{scope:n,open:d,disabled:h,triggerId:l,children:(0,i.jsx)(au,{"data-orientation":o.orientation,"data-state":aX(d),...c,...r,ref:a,disabled:h,open:d,onOpenChange:e=>{e?s.onItemOpen(t):s.onItemClose(t)}})})});aI.displayName=aq;var aV="AccordionHeader",aW=r.default.forwardRef((e,a)=>{let{__scopeAccordion:n,...t}=e,r=aF(aw,n),o=aY(aV,n);return(0,i.jsx)(ai.Primitive.h3,{"data-orientation":r.orientation,"data-state":aX(o.open),"data-disabled":o.disabled?"":void 0,...t,ref:a})});aW.displayName=aV;var aK="AccordionTrigger",aQ=r.default.forwardRef((e,a)=>{let{__scopeAccordion:n,...t}=e,r=aF(aw,n),o=aY(aK,n),s=aA(aK,n),c=aO(n);return(0,i.jsx)(aT.ItemSlot,{scope:n,children:(0,i.jsx)(af,{"aria-disabled":o.open&&!s.collapsible||void 0,"data-orientation":r.orientation,id:o.triggerId,...c,...t,ref:a})})});aQ.displayName=aK;var a_="AccordionContent",a$=r.default.forwardRef((e,a)=>{let{__scopeAccordion:n,...t}=e,r=aF(aw,n),o=aY(a_,n),s=aO(n);return(0,i.jsx)(av,{role:"region","aria-labelledby":o.triggerId,"data-orientation":r.orientation,...s,...t,ref:a,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function aX(e){return e?"open":"closed"}function aZ({...e}){return(0,i.jsx)(aE,{"data-slot":"accordion",...e})}function aJ({className:e,...a}){return(0,i.jsx)(aI,{"data-slot":"accordion-item",className:(0,N.cn)("border-b last:border-b-0",e),...a})}function a0({className:e,children:a,...n}){return(0,i.jsx)(aW,{className:"flex",children:(0,i.jsxs)(aQ,{"data-slot":"accordion-trigger",className:(0,N.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...n,children:[a,(0,i.jsx)(S,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function a1({className:e,children:a,...n}){return(0,i.jsx)(a$,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...n,children:(0,i.jsx)("div",{className:(0,N.cn)("pt-0 pb-4",e),children:a})})}function a2(){let{navigate:e}=U(),{t:a,loc:n,locale:t}=P(),[o,s]=r.useState(""),c=r.useMemo(()=>{let e=o.trim().toLowerCase();return e?eo.filter(a=>{let n=a.q[t]??a.q.en,i=a.a[t]??a.a.en;return n.toLowerCase().includes(e)||i.toLowerCase().includes(e)}):eo},[o,t]),l=[[a("fp.moq"),"200 kg"],[a("fp.sampleLead"),"7 days"],[a("fp.prodLead"),"7 – 15 days"],[a("fp.warranty"),"24 months"],[a("fp.exportCountries"),"60+"]];return r.useEffect(()=>{let e={"@context":"https://schema.org","@type":"FAQPage",mainEntity:eo.map(e=>({"@type":"Question",name:e.q.en,acceptedAnswer:{"@type":"Answer",text:e.a.en}}))},a=document.getElementById("faq-jsonld");return a||((a=document.createElement("script")).id="faq-jsonld",a.setAttribute("type","application/ld+json"),document.head.appendChild(a)),a.textContent=JSON.stringify(e),()=>{let e=document.getElementById("faq-jsonld");e&&e.remove()}},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,i.jsx)("div",{className:"pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-brand/8 blur-3xl"}),(0,i.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:"[ FAQ ]"}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)(ez,{children:a("fp.eyebrow")})]})}),(0,i.jsx)(eD,{delay:80,children:(0,i.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[a("fp.titlePre")," ",(0,i.jsx)("span",{className:"text-brand",children:a("fp.titleAccent")})]})}),(0,i.jsx)(eD,{delay:160,children:(0,i.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:a("fp.desc")})}),(0,i.jsx)(eD,{delay:240,children:(0,i.jsx)("div",{className:"mt-8 max-w-xl",children:(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)(e7,{className:"pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"}),(0,i.jsx)("input",{type:"text",value:o,onChange:e=>s(e.target.value),placeholder:a("fp.searchPlaceholder"),className:"h-12 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"})]})})})]})]}),(0,i.jsx)(eH,{children:(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12",children:[(0,i.jsx)("aside",{className:"lg:col-span-4",children:(0,i.jsxs)("div",{className:"sticky top-28 rounded-xl border border-border bg-card p-6",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)(e9,{className:"size-5 text-brand"}),(0,i.jsx)("h3",{className:"text-[15px] font-bold text-foreground",children:a("fp.sidebarTitle")})]}),(0,i.jsx)("p",{className:"mt-2 text-[13px] leading-relaxed text-muted-foreground",children:a("fp.sidebarDesc")}),(0,i.jsxs)(w,{className:"mt-5 w-full",onClick:()=>e("contact"),children:[a("cta.askEngineer")," ",(0,i.jsx)(ek,{className:"size-4"})]}),(0,i.jsxs)("div",{className:"mt-6 border-t border-border/60 pt-5",children:[(0,i.jsx)("span",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:a("fp.quickFacts")}),(0,i.jsx)("dl",{className:"mt-3 space-y-2.5 text-[13px]",children:l.map(([e,a])=>(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("dt",{className:"text-muted-foreground",children:e}),(0,i.jsx)("dd",{className:"font-mono font-medium text-foreground",children:a})]},e))})]})]})}),(0,i.jsx)("div",{className:"lg:col-span-8",children:0===c.length?(0,i.jsx)("div",{className:"rounded-xl border border-dashed border-border p-12 text-center",children:(0,i.jsxs)("p",{className:"text-[14px] text-muted-foreground",children:[a("fp.noResults")," “",o,"”",a("fp.tryOrAsk")," ",(0,i.jsx)("button",{onClick:()=>e("contact"),className:"font-medium text-brand hover:underline",children:a("cta.askEngineer")}),"."]})}):(0,i.jsx)(aZ,{type:"single",collapsible:!0,className:"space-y-3",children:c.map((e,a)=>(0,i.jsx)(eD,{delay:40*a,children:(0,i.jsxs)(aJ,{value:`item-${a}`,className:"overflow-hidden rounded-xl border border-border bg-card px-5 data-[state=open]:border-brand/40",children:[(0,i.jsx)(a0,{className:"py-5 text-left text-[15px] font-semibold text-foreground hover:no-underline",children:(0,i.jsx)("span",{className:"pr-3",children:n(e.q)})}),(0,i.jsx)(a1,{className:"pb-5 text-[14px] leading-relaxed text-muted-foreground",children:n(e.a)})]})},e.q.en))})})]})})]})}a$.displayName=a_;let a5=(0,o.default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var a4=e.i(8406);function a3(){let{toast:e}=(0,a4.useToast)(),{t:a,loc:n,locale:t}=P(),{navigate:o}=U(),[s,c]=r.useState("idle"),[h,m]=r.useState(""),[x,u]=r.useState("");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,i.jsx)("div",{className:"pointer-events-none absolute -right-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-brand/8 blur-3xl"}),(0,i.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,i.jsx)(eD,{children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:a("ctp.index")}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)(ez,{children:a("ctp.eyebrow")})]})}),(0,i.jsx)(eD,{delay:80,children:(0,i.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[a("ctp.title1"),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"text-brand",children:a("ctp.title2")})]})}),(0,i.jsx)(eD,{delay:160,children:(0,i.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:a("ctp.desc")})})]})]}),(0,i.jsx)(eH,{children:(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-start",children:[(0,i.jsxs)("div",{className:"lg:col-span-5",children:[(0,i.jsx)(eP,{eyebrow:a("ctp.directEyebrow"),title:a("ctp.directTitle"),description:a("ctp.directDesc")}),(0,i.jsx)("ul",{className:"mt-8 space-y-3",children:[{icon:l,label:a("footer.contact.phone"),value:B,href:`tel:${B.replace(/\s/g,"")}`},{icon:d,label:a("footer.contact.email"),value:q,href:`mailto:${q}`},{icon:p,label:"WhatsApp",value:Y,href:`https://wa.me/${Y.replace(/\D/g,"")}`},{icon:p,label:a("footer.contact.whatsapp"),value:"Mr Hogo Shi · WeChat: hogo13"},{icon:em,label:a("footer.contact.address"),value:n(I)}].map(e=>(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:e.href??"#",className:"group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40",children:[(0,i.jsx)("span",{className:"grid size-10 shrink-0 place-items-center rounded-md border border-brand/30 bg-brand-muted text-brand",children:(0,i.jsx)(e.icon,{className:"size-5"})}),(0,i.jsxs)("div",{className:"min-w-0",children:[(0,i.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:e.label.toUpperCase()}),(0,i.jsx)("div",{className:"mt-0.5 text-[14px] font-medium leading-snug text-foreground",children:e.value})]})]})},e.label))}),(0,i.jsx)("div",{className:"mt-6 grid grid-cols-3 gap-3",children:[{icon:e2,t:"24h",s:a("ctp.trustQuote")},{icon:eI,t:"48h",s:a("ctp.trustSample")},{icon:e_,t:"24 mo",s:a("ctp.trustWarranty")}].map(e=>(0,i.jsxs)("div",{className:"rounded-lg border border-border bg-background p-4 text-center",children:[(0,i.jsx)(e.icon,{className:"mx-auto size-4 text-brand"}),(0,i.jsx)("div",{className:"mt-2 font-mono text-[15px] font-bold text-foreground",children:e.t}),(0,i.jsx)("div",{className:"text-[11px] text-muted-foreground",children:e.s})]},e.s))})]}),(0,i.jsx)("div",{className:"lg:col-span-7",children:(0,i.jsx)("div",{className:"rounded-2xl border border-border bg-card p-6 sm:p-8",children:"success"===s?(0,i.jsxs)("div",{className:"flex flex-col items-center py-12 text-center",children:[(0,i.jsx)("div",{className:"grid size-16 place-items-center rounded-full border border-brand/30 bg-brand-muted",children:(0,i.jsx)(ej,{className:"size-8 text-brand"})}),(0,i.jsx)("h3",{className:"mt-5 text-xl font-bold tracking-tight text-foreground",children:a("ctp.successTitle")}),(0,i.jsx)("p",{className:"mt-2 max-w-sm text-[14px] text-muted-foreground",children:a("ctp.successDesc")}),x&&(0,i.jsxs)("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground transition-all hover:brightness-110",children:[(0,i.jsx)(p,{className:"size-4"})," ",a("cta.whatsappChat")]}),(0,i.jsx)(w,{variant:"outline",className:"mt-3",onClick:()=>c("idle"),children:a("cta.sendAnother")})]}):(0,i.jsxs)("form",{onSubmit:function(n){n.preventDefault(),m("");let t=n.currentTarget,i=new FormData(t),r=String(i.get("name")??"").trim(),o=String(i.get("email")??"").trim(),s=String(i.get("phone")??"").trim(),l=String(i.get("company")??"").trim(),d=String(i.get("country")??"").trim(),h=String(i.get("product")??"").trim(),p=String(i.get("substrate")??"").trim(),x=String(i.get("environment")??"").trim(),g=String(i.get("quantity")??"").trim(),f=String(i.get("message")??"").trim();if(!r){m(a("err.nameRequired")),c("error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)){m(a("err.emailRequired")),c("error");return}if(!f){m(a("err.messageRequired")),c("error");return}let b=[`Name: ${r}`,l&&`Company: ${l}`,`Email: ${o}`,s&&`Phone/WhatsApp: ${s}`,d&&`Country: ${d}`,h&&`Product: ${h}`,p&&`Substrate: ${p}`,x&&`Environment: ${x}`,g&&`Quantity: ${g} kg`,"","Message:",f].filter(Boolean).join("\n"),v=`mailto:hogoshi2023@gmail.com?subject=${encodeURIComponent(`Website inquiry from ${r}`)}&body=${encodeURIComponent(b)}`,y=`Website inquiry from ${r}
Email: ${o}${h?`
Product: ${h}`:""}
${f}`;u(`https://wa.me/8613174208290?text=${encodeURIComponent(y)}`),window.location.href=v,c("success"),t.reset(),e({title:a("toast.inquiryTitle"),description:a("toast.inquiryDesc")})},className:"space-y-5",children:[(0,i.jsxs)("div",{className:"grid gap-5 sm:grid-cols-2",children:[(0,i.jsx)(a6,{label:`${a("form.fullName")} ${a("form.required")}`,children:(0,i.jsx)("input",{name:"name",required:!0,className:a8,placeholder:a("form.namePlaceholder")})}),(0,i.jsx)(a6,{label:a("form.company"),children:(0,i.jsx)("input",{name:"company",className:a8,placeholder:a("form.companyPlaceholder")})}),(0,i.jsx)(a6,{label:`${a("form.email")} ${a("form.required")}`,children:(0,i.jsx)("input",{name:"email",type:"email",required:!0,className:a8,placeholder:a("form.emailPlaceholder")})}),(0,i.jsx)(a6,{label:a("form.phone"),children:(0,i.jsx)("input",{name:"phone",className:a8,placeholder:a("form.phonePlaceholder")})}),(0,i.jsx)(a6,{label:a("form.country"),children:(0,i.jsx)("input",{name:"country",className:a8,placeholder:a("form.countryPlaceholder")})}),(0,i.jsx)(a6,{label:a("form.product"),children:(0,i.jsxs)("select",{name:"product",className:a8,defaultValue:"",children:[(0,i.jsx)("option",{value:"",disabled:!0,children:a("form.productPlaceholder")}),Q.map(e=>(0,i.jsxs)("option",{value:n(e.title),children:[e.code," — ",n(e.title)]},e.code)),(0,i.jsx)("option",{value:"Other",children:a("form.other")})]})})]}),(0,i.jsxs)("div",{className:"grid gap-5 sm:grid-cols-3",children:[(0,i.jsx)(a6,{label:a("form.substrate"),children:(0,i.jsx)("input",{name:"substrate",className:a8,placeholder:a("form.substratePlaceholder")})}),(0,i.jsx)(a6,{label:a("form.environment"),children:(0,i.jsx)("input",{name:"environment",className:a8,placeholder:a("form.environmentPlaceholder")})}),(0,i.jsx)(a6,{label:a("form.quantity"),children:(0,i.jsx)("input",{name:"quantity",className:a8,placeholder:a("form.quantityPlaceholder")})})]}),(0,i.jsx)(a6,{label:`${a("form.message")} ${a("form.required")}`,children:(0,i.jsx)("textarea",{name:"message",required:!0,rows:5,className:(0,N.cn)(a8,"resize-none"),placeholder:a("form.messagePlaceholder")})}),"error"===s&&h&&(0,i.jsx)("p",{className:"rounded-md border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-[13px] text-destructive",children:h}),(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[(0,i.jsx)("p",{className:"text-[12px] text-muted-foreground",children:a("ctp.formPrivacy")}),(0,i.jsx)(w,{type:"submit",size:"lg",disabled:"submitting"===s,children:"submitting"===s?a("cta.sending"):(0,i.jsxs)(i.Fragment,{children:[a("cta.sendInquiry")," ",(0,i.jsx)(a5,{className:"size-4"})]})})]})]})})})]})}),(0,i.jsxs)(eH,{className:"border-t border-border bg-card/40",children:[(0,i.jsx)(eP,{eyebrow:a("ctp.globalEyebrow"),title:a("ctp.globalTitle"),description:a("ctp.globalDesc")}),(0,i.jsx)("div",{className:"mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",children:ea.map(e=>(0,i.jsxs)("div",{className:"flex items-center gap-2.5 rounded-lg border border-border bg-background p-4",children:[(0,i.jsx)("span",{className:"size-2 rounded-full bg-brand"}),(0,i.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:n(e)})]},e.en))})]})]})}let a8="h-11 w-full rounded-md border border-border bg-background px-3.5 text-[14px] text-foreground placeholder:text-muted-foreground transition-colors focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20";function a6({label:e,children:a}){return(0,i.jsxs)("label",{className:"block",children:[(0,i.jsx)("span",{className:"mb-1.5 block font-mono text-[10px] tracking-widest text-muted-foreground",children:e.toUpperCase()}),a]})}let a9=(0,o.default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),a7=(0,o.default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),ne=(0,o.default)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),na=(0,o.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),nn=(0,o.default)("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),nt=(0,o.default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]),ni=(0,o.default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),nr=(0,o.default)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]),no="HN_ADMIN_2026",ns="hn-admin-auth",nc={en:"en-US",zh:"zh-CN",vi:"vi-VN"};function nl(e,a){return new Date(e).toLocaleString(nc[a],{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function nd(){let{navigate:e}=U(),{t:a,loc:n,locale:t}=P(),[o,s]=r.useState(!1);return(r.useEffect(()=>{s("1"===window.sessionStorage.getItem(ns))},[]),o)?(0,i.jsx)(np,{onLogout:()=>{window.sessionStorage.removeItem(ns),s(!1)},t:a,loc:n,locale:t,navigate:e}):(0,i.jsx)(nh,{onUnlock:()=>s(!0),t:a,navigate:e})}function nh({onUnlock:e,t:a,navigate:n}){let[t,o]=r.useState(""),[s,c]=r.useState(!1),[l,d]=r.useState(!1);return(0,i.jsxs)("section",{className:"relative flex min-h-[80vh] items-center justify-center overflow-hidden dark bg-ink px-6 py-16",children:[(0,i.jsx)("div",{className:"absolute inset-0 grid-bg text-foreground/20 opacity-50"}),(0,i.jsx)("div",{className:"pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-brand/15 blur-3xl"}),(0,i.jsxs)("div",{className:"relative w-full max-w-md",children:[(0,i.jsxs)("button",{onClick:()=>n("home"),className:"mb-6 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-brand",children:[(0,i.jsx)(a9,{className:"size-4"})," ",a("admin.backToSite")]}),(0,i.jsxs)("div",{className:"rounded-2xl border border-border bg-card p-8 shadow-2xl",children:[(0,i.jsx)("div",{className:"grid size-12 place-items-center rounded-lg border border-brand/30 bg-brand-muted text-brand",children:(0,i.jsx)(a7,{className:"size-6"})}),(0,i.jsx)("h1",{className:"mt-5 text-2xl font-bold tracking-tight text-foreground",children:a("admin.lockTitle")}),(0,i.jsx)("p",{className:"mt-2 text-[14px] text-muted-foreground",children:a("admin.lockDesc")}),(0,i.jsxs)("form",{onSubmit:function(a){a.preventDefault(),d(!0),c(!1),setTimeout(()=>{t.trim()===no?(window.sessionStorage.setItem(ns,"1"),e()):(c(!0),d(!1))},250)},className:"mt-6 space-y-3",children:[(0,i.jsx)("input",{type:"password",value:t,onChange:e=>{o(e.target.value),c(!1)},placeholder:a("admin.passphrasePlaceholder"),autoFocus:!0,className:"h-11 w-full rounded-md border border-border bg-background px-3.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"}),s&&(0,i.jsxs)("p",{className:"flex items-center gap-1.5 text-[12px] text-destructive",children:[(0,i.jsx)(nr,{className:"size-3.5"})," ",a("admin.lockError")]}),(0,i.jsxs)(w,{type:"submit",size:"lg",className:"w-full",disabled:l,children:[l?(0,i.jsx)(ni,{className:"size-4 animate-spin"}):(0,i.jsx)(a7,{className:"size-4"}),a("admin.unlock")]})]}),(0,i.jsxs)("div",{className:"mt-5 rounded-md border border-border/60 bg-background/50 p-3",children:[(0,i.jsx)("p",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:a("admin.lockout").toUpperCase()}),(0,i.jsx)("p",{className:"mt-1 font-mono text-[13px] text-brand",children:no})]})]}),(0,i.jsx)("div",{className:"mt-4 flex justify-end",children:(0,i.jsx)(D,{})})]})]})}function np({onLogout:e,t:a,loc:n,locale:t,navigate:o}){let[s,c]=r.useState([]),[h,p]=r.useState({total:0,new:0,contacted:0,closed:0}),[m,x]=r.useState(!0),[u,g]=r.useState("all"),[f,b]=r.useState(""),[v,y]=r.useState(null),[k,w]=r.useState(null),[C,S]=r.useState(!1);async function G(){x(!0);try{let e=new URLSearchParams;"all"!==u&&e.set("status",u),f.trim()&&e.set("q",f.trim());let a=await fetch(`/api/contact?${e.toString()}`,{headers:{"x-admin-key":no}});if(!a.ok)throw Error("no-api");let n=await a.json();n.ok&&(c(n.data),p(n.stats),w(new Date))}catch{S(!0)}finally{x(!1)}}async function L(e,n){try{let a=await fetch(`/api/contact/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json","x-admin-key":no},body:JSON.stringify({status:n})});(await a.json()).ok&&(c(a=>a.map(a=>a.id===e?{...a,status:n}:a)),p(a=>{let t={...a},i=s.find(a=>a.id===e);return i&&("new"===i.status&&(t.new=Math.max(0,a.new-1)),"contacted"===i.status&&(t.contacted=Math.max(0,a.contacted-1)),"closed"===i.status&&(t.closed=Math.max(0,a.closed-1)),"new"===n&&(t.new+=1),"contacted"===n&&(t.contacted+=1),"closed"===n&&(t.closed+=1)),t}),v?.id===e&&y(e=>e?{...e,status:n}:e),z("✓","ok"))}catch{z(a("err.generic"),"err")}}async function j(e){if(window.confirm(a("admin.deleteConfirm")))try{let a=await fetch(`/api/contact/${e}`,{method:"DELETE",headers:{"x-admin-key":no}});(await a.json()).ok&&(c(a=>a.filter(a=>a.id!==e)),p(a=>{let n=s.find(a=>a.id===e),t={...a,total:a.total-1};return n&&("new"===n.status&&(t.new=Math.max(0,a.new-1)),"contacted"===n.status&&(t.contacted=Math.max(0,a.contacted-1)),"closed"===n.status&&(t.closed=Math.max(0,a.closed-1))),t}),v?.id===e&&y(null))}catch{z(a("err.generic"),"err")}}r.useEffect(()=>{G()},[u]),r.useEffect(()=>{let e=setTimeout(G,350);return()=>clearTimeout(e)},[f]);let[O,E]=r.useState(null);function z(e,a){E({m:e,k:a}),setTimeout(()=>E(null),1800)}return(0,i.jsxs)("section",{className:"relative min-h-screen bg-background",children:[(0,i.jsx)("header",{className:"sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl",children:(0,i.jsxs)("div",{className:"mx-auto flex h-16 max-w-7xl items-center justify-between px-6",children:[(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsxs)("button",{onClick:()=>o("home"),className:"inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-brand",children:[(0,i.jsx)(a9,{className:"size-4"})," ",a("admin.backToSite")]}),(0,i.jsx)("span",{className:"h-4 w-px bg-border"}),(0,i.jsxs)("span",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"grid size-8 place-items-center rounded-md bg-brand text-brand-foreground font-mono font-bold text-sm",children:"HN"}),(0,i.jsx)("span",{className:"text-[14px] font-bold text-foreground",children:a("admin.title")})]})]}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)(D,{}),(0,i.jsxs)("button",{onClick:G,className:"inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground",children:[(0,i.jsx)(ne,{className:(0,N.cn)("size-3.5",m&&"animate-spin")})," ",a("admin.refresh")]}),(0,i.jsxs)("button",{onClick:e,className:"inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive",children:[(0,i.jsx)(nt,{className:"size-3.5"})," ",a("admin.logout")]})]})]})}),(0,i.jsxs)("div",{className:"mx-auto max-w-7xl px-6 py-8",children:[(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:"[ ADM ]"}),(0,i.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,i.jsx)("span",{className:"eyebrow text-brand text-[11px]",children:a("admin.eyebrow")})]}),(0,i.jsx)("h1",{className:"mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",children:a("admin.title")}),C&&(0,i.jsx)("div",{className:"mt-6 rounded-xl border border-brand/30 bg-brand-muted p-5",children:(0,i.jsxs)("div",{className:"flex items-start gap-3",children:[(0,i.jsx)(nr,{className:"mt-0.5 size-5 shrink-0 text-brand"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"text-[14px] font-semibold text-foreground",children:loc({en:"Inquiry management is disabled on this static deployment",zh:"当前静态部署不支持询盘管理",vi:"Quản lý yêu cầu không khả dụng trên triển khai tĩnh"})}),(0,i.jsx)("p",{className:"mt-1 text-[13px] text-muted-foreground",children:loc({en:"Inquiries are sent directly to your email and WhatsApp. To enable the admin panel, deploy to a server platform (Vercel / Netlify).",zh:"询盘会直接发送到您的邮箱和 WhatsApp。如需启用后台管理,请部署到支持服务端的平台(Vercel / Netlify)。",vi:"Yêu cầu được gửi trực tiếp đến email và WhatsApp. Để bật bảng quản trị, hãy triển khai lên nền tảng máy chủ (Vercel / Netlify)."})})]})]})}),(0,i.jsx)("div",{className:"mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4",children:[{key:"total",color:"text-foreground"},{key:"new",color:"text-brand"},{key:"contacted",color:"text-sky-300"},{key:"closed",color:"text-muted-foreground"}].map(e=>(0,i.jsxs)("div",{className:"rounded-xl border border-border bg-card p-5",children:[(0,i.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:a(`admin.stat${e.key.charAt(0).toUpperCase()}${e.key.slice(1)}`).toUpperCase()}),(0,i.jsx)("div",{className:(0,N.cn)("mt-2 text-3xl font-bold tracking-tight",e.color),children:h[e.key]})]},e.key))}),(0,i.jsxs)("div",{className:"mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,i.jsx)("div",{className:"flex flex-wrap gap-2",children:["all","new","contacted","closed"].map(e=>{let n="all"===e?a("admin.filterAll"):a(`admin.stat${e.charAt(0).toUpperCase()}${e.slice(1)}`),t="all"===e?h.total:h[e];return(0,i.jsxs)("button",{onClick:()=>g(e),className:(0,N.cn)("inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",u===e?"border-brand bg-brand text-brand-foreground":"border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"),children:[n,(0,i.jsx)("span",{className:(0,N.cn)("rounded-full px-1.5 text-[10px] font-mono",u===e?"bg-brand-foreground/20":"bg-border"),children:t})]},e)})}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)(e7,{className:"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"}),(0,i.jsx)("input",{type:"text",value:f,onChange:e=>b(e.target.value),placeholder:a("admin.searchPlaceholder"),className:"h-9 w-full rounded-md border border-border bg-card pl-9 pr-3 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 sm:w-72"})]}),(0,i.jsxs)("button",{onClick:function(){let e=new Blob(["\uFEFF"+[["id","name","company","email","phone","country","product","substrate","environment","quantity","message","status","createdAt"],...s.map(e=>[e.id,e.name,e.company??"",e.email,e.phone??"",e.country??"",e.product??"",e.substrate??"",e.environment??"",e.quantity??"",e.message.replace(/\n/g," "),e.status,e.createdAt])].map(e=>e.map(e=>`"${String(e).replace(/"/g,'""')}"`).join(",")).join("\n")],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download=`hong-nguyen-inquiries-${new Date().toISOString().slice(0,10)}.csv`,n.click(),URL.revokeObjectURL(a)},className:"inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-[12px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground",children:[(0,i.jsx)(eR,{className:"size-3.5"})," ",a("admin.export")]})]})]}),(0,i.jsx)("div",{className:"mt-5 overflow-hidden rounded-xl border border-border bg-card",children:(0,i.jsx)("div",{className:"overflow-x-auto",children:(0,i.jsxs)("table",{className:"w-full min-w-[860px] text-left text-[13px]",children:[(0,i.jsx)("thead",{className:"border-b border-border bg-background/50",children:(0,i.jsxs)("tr",{className:"text-muted-foreground",children:[(0,i.jsx)("th",{className:"px-4 py-3 font-mono text-[10px] tracking-widest",children:a("admin.colInquiry")}),(0,i.jsx)("th",{className:"px-4 py-3 font-mono text-[10px] tracking-widest",children:a("admin.colContact")}),(0,i.jsx)("th",{className:"px-4 py-3 font-mono text-[10px] tracking-widest",children:a("admin.colProduct")}),(0,i.jsx)("th",{className:"px-4 py-3 font-mono text-[10px] tracking-widest",children:a("admin.colStatus")}),(0,i.jsx)("th",{className:"px-4 py-3 font-mono text-[10px] tracking-widest",children:a("admin.colDate")}),(0,i.jsx)("th",{className:"px-4 py-3 text-right font-mono text-[10px] tracking-widest",children:a("admin.colActions")})]})}),(0,i.jsx)("tbody",{children:m?(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{colSpan:6,className:"px-4 py-16 text-center text-muted-foreground",children:[(0,i.jsx)(ni,{className:"mx-auto size-6 animate-spin text-brand"}),(0,i.jsx)("p",{className:"mt-3 text-[13px]",children:a("admin.loading")})]})}):0===s.length?(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:6,className:"px-4 py-16 text-center text-muted-foreground",children:f||"all"!==u?a("admin.noResults"):a("admin.empty")})}):s.map(e=>(0,i.jsxs)("tr",{className:"border-b border-border/60 transition-colors last:border-0 hover:bg-background/40",children:[(0,i.jsxs)("td",{className:"px-4 py-3 align-top",children:[(0,i.jsx)("div",{className:"font-semibold text-foreground",children:e.name}),e.company&&(0,i.jsxs)("div",{className:"mt-0.5 flex items-center gap-1 text-[12px] text-muted-foreground",children:[(0,i.jsx)(eS,{className:"size-3"})," ",e.company]}),(0,i.jsx)("div",{className:"mt-1.5 max-w-xs truncate text-[12px] text-muted-foreground",children:e.message})]}),(0,i.jsxs)("td",{className:"px-4 py-3 align-top",children:[(0,i.jsxs)("div",{className:"flex items-center gap-1.5 text-[12px] text-foreground",children:[(0,i.jsx)(d,{className:"size-3 text-brand"})," ",e.email]}),e.phone&&(0,i.jsxs)("div",{className:"mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground",children:[(0,i.jsx)(l,{className:"size-3"})," ",e.phone]}),e.country&&(0,i.jsxs)("div",{className:"mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground",children:[(0,i.jsx)(T,{className:"size-3"})," ",e.country]})]}),(0,i.jsxs)("td",{className:"px-4 py-3 align-top",children:[e.product?(0,i.jsx)("span",{className:"inline-flex rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-foreground",children:e.product}):(0,i.jsx)("span",{className:"text-[12px] text-muted-foreground",children:"—"}),(e.substrate||e.quantity)&&(0,i.jsxs)("div",{className:"mt-1 text-[11px] text-muted-foreground",children:[e.substrate&&(0,i.jsx)("div",{children:e.substrate}),e.quantity&&(0,i.jsxs)("div",{children:[e.quantity," kg"]})]})]}),(0,i.jsx)("td",{className:"px-4 py-3 align-top",children:(0,i.jsx)(nm,{status:e.status,t:a})}),(0,i.jsx)("td",{className:"px-4 py-3 align-top font-mono text-[11px] text-muted-foreground",children:nl(e.createdAt,t)}),(0,i.jsx)("td",{className:"px-4 py-3 align-top",children:(0,i.jsxs)("div",{className:"flex items-center justify-end gap-1",children:[(0,i.jsx)("button",{onClick:()=>y(e),title:a("admin.view"),className:"grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand",children:(0,i.jsx)(na,{className:"size-4"})}),(0,i.jsx)("button",{onClick:()=>j(e.id),title:a("admin.delete"),className:"grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive",children:(0,i.jsx)(nn,{className:"size-4"})})]})})]},e.id))})]})})}),(0,i.jsxs)("div",{className:"mt-6 flex flex-col items-start justify-between gap-2 text-[11px] text-muted-foreground sm:flex-row sm:items-center",children:[(0,i.jsxs)("p",{className:"flex items-center gap-1.5",children:[(0,i.jsx)(nr,{className:"size-3.5 text-brand/70"})," ",a("admin.note")]}),k&&(0,i.jsxs)("p",{className:"font-mono",children:[a("admin.lastUpdated"),": ",nl(k.toISOString(),t)]})]})]}),v&&(0,i.jsx)(nx,{inquiry:v,onClose:()=>y(null),onUpdate:L,onDelete:j,t:a,locale:t}),O&&(0,i.jsxs)("div",{className:"fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md border border-border dark bg-ink px-4 py-2 text-[13px] text-foreground shadow-xl",children:["ok"===O.k?(0,i.jsx)(ej,{className:"inline size-4 text-brand"}):(0,i.jsx)(nr,{className:"inline size-4 text-destructive"})," ",O.m]})]})}function nm({status:e,t:a}){let n={new:{cls:"border-brand/40 bg-brand-muted text-brand",label:a("admin.statNew")},contacted:{cls:"border-sky-400/40 bg-sky-400/10 text-sky-300",label:a("admin.statContacted")},closed:{cls:"border-border bg-muted text-muted-foreground",label:a("admin.statClosed")}},t=n[e]??n.new;return(0,i.jsxs)("span",{className:(0,N.cn)("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium",t.cls),children:[(0,i.jsx)("span",{className:"size-1.5 rounded-full bg-current opacity-70"}),t.label]})}function nx({inquiry:e,onClose:a,onUpdate:n,onDelete:t,t:r,locale:o}){let s=[{label:r("form.email"),value:e.email,icon:d},{label:r("form.phone"),value:e.phone,icon:l},{label:r("form.country"),value:e.country,icon:T},{label:r("form.company"),value:e.company,icon:eS},{label:r("form.product"),value:e.product},{label:r("admin.fieldSubstrate"),value:e.substrate},{label:r("admin.fieldEnvironment"),value:e.environment},{label:r("admin.fieldQuantity"),value:e.quantity?`${e.quantity} kg`:null}];return(0,i.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6",onClick:a,children:(0,i.jsxs)("div",{className:"relative max-h-[90vh] w-full max-w-2xl overflow-y-auto scroll-thin rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl",onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)("div",{className:"sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-card/95 p-6 backdrop-blur",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"font-mono text-[10px] text-brand tracking-widest",children:e.id.slice(-8).toUpperCase()}),(0,i.jsx)(nm,{status:e.status,t:r})]}),(0,i.jsx)("h2",{className:"mt-2 text-xl font-bold tracking-tight text-foreground",children:e.name}),(0,i.jsx)("p",{className:"mt-0.5 font-mono text-[11px] text-muted-foreground",children:nl(e.createdAt,o)})]}),(0,i.jsx)("button",{onClick:a,className:"grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground",children:(0,i.jsx)(c.X,{className:"size-4"})})]}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsx)("div",{className:"grid gap-3 sm:grid-cols-2",children:s.map(e=>(0,i.jsxs)("div",{className:"rounded-lg border border-border bg-background p-3",children:[(0,i.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:e.label.toUpperCase()}),(0,i.jsxs)("div",{className:"mt-1 flex items-center gap-1.5 text-[13px] text-foreground",children:[e.icon&&(0,i.jsx)(e.icon,{className:"size-3.5 text-brand"}),e.value||(0,i.jsx)("span",{className:"text-muted-foreground",children:"—"})]})]},e.label))}),(0,i.jsxs)("div",{className:"mt-4 rounded-lg border border-border bg-background p-4",children:[(0,i.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:r("admin.fieldMessage").toUpperCase()}),(0,i.jsx)("p",{className:"mt-2 whitespace-pre-wrap text-[14px] leading-relaxed text-foreground",children:e.message})]}),(0,i.jsxs)("div",{className:"mt-6 flex flex-wrap gap-2",children:["new"!==e.status&&(0,i.jsx)(w,{variant:"outline",size:"sm",onClick:()=>n(e.id,"new"),children:r("admin.reopen")}),"contacted"!==e.status&&(0,i.jsx)(w,{variant:"outline",size:"sm",onClick:()=>n(e.id,"contacted"),children:r("admin.markContacted")}),"closed"!==e.status&&(0,i.jsx)(w,{variant:"outline",size:"sm",onClick:()=>n(e.id,"closed"),children:r("admin.markClosed")}),(0,i.jsxs)("a",{href:`mailto:${e.email}`,className:"inline-flex h-8 items-center gap-1.5 rounded-md bg-brand px-3 text-[13px] font-semibold text-brand-foreground",children:[(0,i.jsx)(d,{className:"size-3.5"})," ",r("form.email")," ",(0,i.jsx)(h,{className:"size-3.5"})]}),(0,i.jsxs)("button",{onClick:()=>t(e.id),className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-destructive/40 px-3 text-[13px] font-medium text-destructive transition-colors hover:bg-destructive/10",children:[(0,i.jsx)(nn,{className:"size-3.5"})," ",r("admin.delete")]})]})]})]})})}function nu({page:e}){switch(e){case"products":return(0,i.jsx)(eY,{});case"solutions":return(0,i.jsx)(eW,{});case"cases":return(0,i.jsx)(eX,{});case"about":return(0,i.jsx)(e1,{});case"news":return(0,i.jsx)(e6,{});case"faq":return(0,i.jsx)(a2,{});case"contact":return(0,i.jsx)(a3,{});case"admin":return(0,i.jsx)(nd,{});default:return(0,i.jsx)(eF,{})}}function ng(){let e=U(e=>e.page),a=U(e=>e.navigate);r.useEffect(()=>{let e=new URL(window.location.href);("1"===e.searchParams.get("admin")||"#admin"===e.hash)&&a("admin")},[]);let n="admin"===e;return(0,i.jsxs)("div",{className:"flex min-h-screen flex-col bg-background",children:[(0,i.jsx)(A,{}),(0,i.jsx)(eb,{}),!n&&(0,i.jsx)(ep,{}),(0,i.jsx)("main",{className:"flex-1",children:(0,i.jsx)(nu,{page:e},e)}),!n&&(0,i.jsx)(eg,{})]})}e.s(["default",()=>ng],52683)}]);