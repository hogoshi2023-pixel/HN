(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5500,(e,a,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return y}});let t=e.r(55682),i=e.r(90809),r=e.r(43476),o=i._(e.r(71645)),s=t._(e.r(74080)),c=t._(e.r(25633)),l=e.r(8927),d=e.r(65856),h=e.r(49381),x=t._(e.r(35420)),m=e.r(18581);function p(e,a,n,t,i,r,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==a&&i(!0),n?.current){let a=new Event("load");Object.defineProperty(a,"target",{writable:!1,value:e});let t=!1,i=!1;n.current({...a,nativeEvent:a,currentTarget:e,target:e,isDefaultPrevented:()=>t,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{t=!0,a.preventDefault()},stopPropagation:()=>{i=!0,a.stopPropagation()}})}t?.current&&t.current(e)}}))}function u(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let g="u"<typeof window?o.useEffect:o.useLayoutEffect,f=(0,o.forwardRef)(({src:e,srcSet:a,sizes:n,height:t,width:i,decoding:s,className:c,style:l,fetchPriority:d,placeholder:h,loading:x,unoptimized:f,fill:b,onLoadRef:y,onLoadingCompleteRef:v,setBlurComplete:k,setShowAltText:N,sizesInput:C,onLoad:S,onError:w,...T},D)=>{let j=(0,o.useRef)(!1),H=(0,o.useRef)(null);g(()=>{let{current:e}=j,{current:a}=H;e||null===a||(w&&(a.src=a.src),a.complete&&p(a,h,y,v,k,f,C),j.current=!0)},[e,h,y,v,w,f,C]);let z=(0,m.useMergedRef)(D,H);return(0,r.jsx)("img",{...T,...u(d),loading:x,width:i,height:t,decoding:s,"data-nimg":b?"fill":"1",className:c,style:l,sizes:n,srcSet:a,src:e,ref:z,onLoad:e=>{p(e.currentTarget,h,y,v,k,f,C)},onError:e=>{N(!0),"empty"!==h&&k(!0),w&&w(e)}})});function b({isAppRouter:e,imgAttributes:a}){let n={as:"image",imageSrcSet:a.srcSet,imageSizes:a.sizes,crossOrigin:a.crossOrigin,referrerPolicy:a.referrerPolicy,...u(a.fetchPriority)};return e&&s.default.preload?(s.default.preload(a.src,n),null):(0,r.jsx)(c.default,{children:(0,r.jsx)("link",{rel:"preload",href:a.srcSet?void 0:a.src,...n},"__nimg-"+a.src+a.srcSet+a.sizes)})}let y=(0,o.forwardRef)((e,a)=>{let n=(0,o.useContext)(d.RouterContext),t=(0,h.useImageConfig)(),{onLoad:i,onLoadingComplete:s}=e,c=(0,o.useRef)(i);(0,o.useEffect)(()=>{c.current=i},[i]);let m=(0,o.useRef)(s);(0,o.useEffect)(()=>{m.current=s},[s]);let[p,u]=(0,o.useState)(!1),[g,y]=(0,o.useState)(!1),{props:v,meta:k}=(0,l.getImgProps)(e,{defaultLoader:x.default,imgConf:t,blurComplete:p,showAltText:g});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{...v,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:c,onLoadingCompleteRef:m,setBlurComplete:u,setShowAltText:y,sizesInput:e.sizes,ref:a}),k.preload?(0,r.jsx)(b,{isAppRouter:!n,imgAttributes:v}):null]})});("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),a.exports=n.default)},49381,(e,a,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useImageConfig",{enumerable:!0,get:function(){return s}});let t=e.r(71645),i=e.r(87690),r=e.r(18556),o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/HN/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function s(){let e=(0,t.useContext)(r.ImageConfigContext);return(0,i.prepareImageConfig)(o,e)}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),a.exports=n.default)},18581,(e,a,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let t=e.r(71645);function i(e,a){let n=(0,t.useRef)(null),i=(0,t.useRef)(null);return(0,t.useCallback)(t=>{if(null===t){let e=n.current;e&&(n.current=null,e());let a=i.current;a&&(i.current=null,a())}else e&&(n.current=r(e,t)),a&&(i.current=r(a,t))},[e,a])}function r(e,a){if("function"!=typeof e)return e.current=a,()=>{e.current=null};{let n=e(a);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),a.exports=n.default)},70965,(e,a,n)=>{function t(e,a){let n=e||75;return a?.qualities?.length?a.qualities.reduce((e,a)=>Math.abs(a-n)<Math.abs(e-n)?a:e,a.qualities[0]):n}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"findClosestQuality",{enumerable:!0,get:function(){return t}})},8927,(e,a,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImgProps",{enumerable:!0,get:function(){return c}});let t=e.r(43369),i=e.r(88143),r=["-moz-initial","fill","none","scale-down",void 0];function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:0/0:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):0/0}function c({src:e,sizes:a,unoptimized:n=!1,priority:l=!1,preload:d=!1,loading:h,className:x,quality:m,width:p,height:u,fill:g=!1,style:f,overrideSrc:b,onLoad:y,onLoadingComplete:v,placeholder:k="empty",blurDataURL:N,fetchPriority:C,decoding:S="async",layout:w,objectFit:T,objectPosition:D,lazyBoundary:j,lazyRoot:H,...z},A){var L;let P,E,{imgConf:q,showAltText:F,blurComplete:M,defaultLoader:O}=A;if(void 0===O)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let R=z.loader||O;delete z.loader,delete z.srcSet;let I="__next_img_default"in R;if(I){if("custom"===q.loader)throw Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let e=R;R=a=>{let{config:n,...t}=a;return e(t)}}if(w){"fill"===w&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[w];e&&(f={...f,...e});let n={responsive:"100vw",fill:"100vw"}[w];n&&!a&&(a=n)}let B="",U=s(p),V=s(u);if((L=e)&&"object"==typeof L&&(o(L)||void 0!==L.src)){let a=o(e)?e.default:e;if(!a.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(a)}`);if(!a.height||!a.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(a)}`);if(P=a.blurWidth,E=a.blurHeight,N=N||a.blurDataURL,B=a.src,!g)if(U||V){if(U&&!V){let e=U/a.width;V=Math.round(a.height*e)}else if(!U&&V){let e=V/a.height;U=Math.round(a.width*e)}}else U=a.width,V=a.height}let G=!l&&!d&&("lazy"===h||void 0===h);(!(e="string"==typeof e?e:B)||e.startsWith("data:")||e.startsWith("blob:"))&&(n=!0,G=!1),q.unoptimized&&(n=!0),I&&!q.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(n=!0);let W=s(m),Q=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:D}:{},F?{}:{color:"transparent"},f),K=M||"empty"===k?null:"blur"===k?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:U,heightInt:V,blurWidth:P,blurHeight:E,blurDataURL:N||"",objectFit:Q.objectFit})}")`:`url("${k}")`,_=r.includes(Q.objectFit)?"fill"===Q.objectFit?"100% 100%":"cover":Q.objectFit,X=K?{backgroundSize:_,backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},$=function({config:e,src:a,unoptimized:n,width:i,quality:r,sizes:o,loader:s}){if(n){if(a.startsWith("/")&&!a.startsWith("//")){let e=(0,t.getDeploymentId)();if(a.includes("/_next/static/immutable")&&!(0,t.getAssetToken)())e=void 0;else if(e){let n=a.indexOf("?");if(-1!==n){let t=new URLSearchParams(a.slice(n+1));t.get("dpl")||(t.append("dpl",e),a=a.slice(0,n)+"?"+t.toString())}else a+=`?dpl=${e}`}}return{src:a,srcSet:void 0,sizes:void 0}}let{widths:c,kind:l}=function({deviceSizes:e,allSizes:a},n,t){if(t){let n=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=n.exec(t);)i.push(parseInt(e[2]));if(i.length){let n=.01*Math.min(...i);return{widths:a.filter(a=>a>=e[0]*n),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof n?{widths:e,kind:"w"}:{widths:[...new Set([n,2*n].map(e=>a.find(a=>a>=e)||a[a.length-1]))],kind:"x"}}(e,i,o),d=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((n,t)=>`${s({config:e,src:a,quality:r,width:n})} ${"w"===l?n:t+1}${l}`).join(", "),src:s({config:e,src:a,quality:r,width:c[d]})}}({config:q,src:e,unoptimized:n,width:U,quality:W,sizes:a,loader:R}),Y=G?"lazy":h;return{props:{...z,loading:Y,fetchPriority:C,width:U,height:V,decoding:S,className:x,style:{...Q,...X},sizes:$.sizes,srcSet:$.srcSet,src:b||$.src},meta:{unoptimized:n,preload:d||l,placeholder:k,fill:g}}}},25633,(e,a,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var t={default:function(){return u},defaultHead:function(){return h}};for(var i in t)Object.defineProperty(n,i,{enumerable:!0,get:t[i]});let r=e.r(55682),o=e.r(90809),s=e.r(43476),c=o._(e.r(71645)),l=r._(e.r(98879)),d=e.r(42732);function h(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function x(e,a){return"string"==typeof a||"number"==typeof a?e:a.type===c.default.Fragment?e.concat(c.default.Children.toArray(a.props.children).reduce((e,a)=>"string"==typeof a||"number"==typeof a?e:e.concat(a),[])):e.concat(a)}let m=["name","httpEquiv","charSet","itemProp"];function p(e){let a,n,t,i;return e.reduce(x,[]).reverse().concat(h().reverse()).filter((a=new Set,n=new Set,t=new Set,i={},e=>{let r=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let n=e.key.slice(e.key.indexOf("$")+1);a.has(n)?r=!1:a.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?r=!1:n.add(e.type);break;case"meta":for(let a=0,n=m.length;a<n;a++){let n=m[a];if(e.props.hasOwnProperty(n))if("charSet"===n)t.has(n)?r=!1:t.add(n);else{let a=e.props[n],t=i[n]||new Set;("name"!==n||!o)&&t.has(a)?r=!1:(t.add(a),i[n]=t)}}}return r})).reverse().map((e,a)=>{let n=e.key||a;return c.default.cloneElement(e,{key:n})})}let u=function({children:e}){let a=(0,c.useContext)(d.HeadManagerContext);return(0,s.jsx)(l.default,{reduceComponentsToState:p,headManager:a,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),a.exports=n.default)},88143,(e,a,n)=>{function t({widthInt:e,heightInt:a,blurWidth:n,blurHeight:i,blurDataURL:r,objectFit:o}){let s=n?40*n:e,c=i?40*i:a,l=s&&c?`viewBox='0 0 ${s} ${c}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImageBlurSvg",{enumerable:!0,get:function(){return t}})},18556,(e,a,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return r}});let t=e.r(55682)._(e.r(71645)),i=e.r(87690),r=t.default.createContext(i.imageConfigDefault)},87690,(e,a,n)=>{Object.defineProperty(n,"__esModule",{value:!0});var t={VALID_LOADERS:function(){return r},imageConfigDefault:function(){return l},prepareImageConfig:function(){return c}};for(var i in t)Object.defineProperty(n,i,{enumerable:!0,get:t[i]});let r=["default","imgix","cloudinary","akamai","custom"],o={},s=new WeakMap;function c(e,a){let n=e??o,t=a??o,i=s.get(n);if(i){let e=i.get(t);if(e)return e}let r=e||a||l,c=[...r.deviceSizes].sort((e,a)=>e-a),d=[...r.imageSizes],h={deviceSizes:c,imageSizes:d,allSizes:[...c,...d].sort((e,a)=>e-a),qualities:void 0===r.qualities?void 0:[...r.qualities].sort((e,a)=>e-a),path:r.path,loader:r.loader,dangerouslyAllowSVG:r.dangerouslyAllowSVG,unoptimized:r.unoptimized,domains:r.domains,remotePatterns:r.remotePatterns,localPatterns:"u"<typeof window&&void 0!==a?a.localPatterns:r.localPatterns,output:r.output};return i||(i=new WeakMap,s.set(n,i)),i.set(t,h),h}let l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},35420,(e,a,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let t=e.r(70965),i=e.r(43369);function r({config:e,src:a,width:n,quality:o}){let s=(0,i.getDeploymentId)();if(a.startsWith("/")&&!a.startsWith("//"))if(a.includes("/_next/static/immutable")&&!(0,i.getAssetToken)())s=void 0;else{let e=a.indexOf("?");if(-1!==e){let n=new URLSearchParams(a.slice(e+1)),t=n.get("dpl");if(t){s=t,n.delete("dpl");let i=n.toString();a=a.slice(0,e)+(i?"?"+i:"")}}}if(a.startsWith("/")&&a.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Error(`Image with src "${a}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`);let c=(0,t.findClosestQuality)(o,e);return`${e.path}?url=${encodeURIComponent(a)}&w=${n}&q=${c}${a.startsWith("/")&&s?`&dpl=${s}`:""}`}r.__next_img_default=!0;let o=r},65856,(e,a,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return t}});let t=(e.r(55682)._(e.r(71645))).default.createContext(null)},98879,(e,a,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let t=e.r(71645),i="u"<typeof window,r=i?()=>{}:t.useLayoutEffect,o=i?()=>{}:t.useEffect;function s(e){let{headManager:a,reduceComponentsToState:n}=e;function s(){if(a&&a.mountedInstances){let e=t.Children.toArray(Array.from(a.mountedInstances).filter(Boolean));a.updateHead(n(e))}}return i&&(a?.mountedInstances?.add(e.children),s()),r(()=>(a?.mountedInstances?.add(e.children),()=>{a?.mountedInstances?.delete(e.children)})),r(()=>(a&&(a._pendingUpdate=s),()=>{a&&(a._pendingUpdate=s)})),o(()=>(a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null),()=>{a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null)})),null}},52683,e=>{var a=e.i(43476),n=e.i(71645),t=e.i(75254);let i=(0,t.f)("menu",[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]]);var r=e.i(37727);let o=(0,t.f)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]),s=(0,t.f)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),c=(0,t.f)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),l=(0,t.f)("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);var d=e.i(25913),h=e.i(91918),x=e.i(75157);let m=(0,d.f)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-tight transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-brand/40",{variants:{variant:{brand:"bg-brand text-brand-foreground hover:brightness-110 shadow-[0_8px_24px_-8px_var(--brand)]",outline:"border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",ghost:"text-foreground hover:bg-accent hover:text-accent-foreground",solid:"bg-foreground text-background hover:bg-foreground/90"},size:{default:"h-10 px-5 py-2 has-[>svg]:px-3",sm:"h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3 text-[13px]",lg:"h-12 rounded-md px-7 text-[15px] has-[>svg]:px-5",icon:"size-10"}},defaultVariants:{variant:"brand",size:"default"}}),p=n.forwardRef(({className:e,variant:n,size:t,asChild:i=!1,...r},o)=>{let s=i?h.M:"button";return(0,a.jsx)(s,{ref:o,"data-slot":"brand-button",className:(0,x.f)(m({variant:n,size:t}),e),...r})});p.displayName="BrandButton";let u=(0,t.f)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),g=(0,t.f)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),f=(0,t.f)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),b=e=>{let a,n=new Set,t=(e,t)=>{let i="function"==typeof e?e(a):e;if(!Object.is(i,a)){let e=a;a=(null!=t?t:"object"!=typeof i||null===i)?i:Object.assign({},a,i),n.forEach(n=>n(a,e))}},i=()=>a,r={setState:t,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=a=e(t,i,r);return r},y=e=>{let a=e?b(e):b,t=e=>(function(e,a=e=>e){let t=n.default.useSyncExternalStore(e.subscribe,n.default.useCallback(()=>a(e.getState()),[e,a]),()=>a(e.getInitialState()));return n.default.useDebugValue(t),t})(a,e);return Object.assign(t,a),t},v=e=>e?y(e):y,k={"brand.tagline":"Exportación de recubrimientos industriales · Foshan, China","brand.premiumDesc":"Exportador chino de sistemas de recubrimientos industriales — pinturas anticorrosivas, de alta temperatura, epoxi para pisos y arquitectónicas — abastecidas de plantas certificadas ISO 9001, con servicio OEM/ODM, igualación de color RAL/Pantone y documentación de exportación completa.","topbar.based":"FOSHAN · GUANGDONG · CHINA","topbar.phone":"Teléfono","topbar.email":"Correo electrónico","nav.home":"Inicio","nav.products":"Productos","nav.solutions":"Soluciones","nav.cases":"Sistemas","nav.about":"Nosotros","nav.news":"Novedades","nav.faq":"FAQ","nav.contact":"Contacto","cta.getQuote":"Obtenga una cotización gratuita","cta.browseCatalog":"Ver catálogo","cta.viewAllCatalog":"Ver todo el catálogo","cta.viewAllCases":"Ver todos los sistemas","cta.viewFullCatalog":"Ver catálogo completo","cta.requestQuote":"Solicitar cotización","cta.getTds":"Obtener TDS / MSDS","cta.requestFreeQuote":"Solicitar cotización gratuita","cta.whatsappChat":"Chat por WhatsApp","cta.startProject":"Inicie su proyecto","cta.askEngineer":"Consulte a un ingeniero","cta.readArticle":"Leer artículo","cta.subscribe":"Suscribirse","cta.sendInquiry":"Enviar consulta","cta.sending":"Enviando…","cta.sendAnother":"Enviar otra consulta","cta.relatedProducts":"Productos relacionados","cta.requestSimilar":"Solicitar este sistema","cta.explore":"Explorar sistema","cta.talkToEngineer":"Hable con un ingeniero","cta.partnerWithUs":"Colabore con nosotros","hero.index":"[ 01 ]","hero.eyebrow":"Recubrimientos industriales · Exportación desde China","hero.title1":"Recubrimientos de ingeniería","hero.title2":"para","hero.titleAccent":"industrias","hero.title3":"de servicio pesado","hero.desc":"Exportador chino de sistemas de recubrimientos anticorrosivos, de alta temperatura, epoxi para pisos y arquitectónicos — abastecidos de plantas certificadas ISO 9001 en la capital china de los recubrimientos. Documentación de exportación completa · OEM/ODM · Igualación de color RAL/Pantone · Garantía de calidad de 24 meses.","hero.specSheet":"FICHA TÉCNICA · REV.2026","hero.live":"EN VIVO","partners.trustedBy":"Sistemas de recubrimiento que suministramos","core.index":"[ 02 ]","core.eyebrow":"Negocio central","core.title":"Recubrimientos industriales. Diseñados para B2B.","pcat.index":"[ 03 ]","pcat.eyebrow":"Categorías de productos","pcat.title":"Seis sistemas de recubrimiento. Una fuente confiable.","why.index":"[ 04 ]","why.eyebrow":"Por qué HONG NGUYEN","why.title":"Pensado para compradores B2B que no pueden permitirse una falla del recubrimiento.","app.index":"[ 05 ]","app.eyebrow":"Aplicaciones","app.title":"Dónde trabajan los recubrimientos HONG NGUYEN.","cases.index":"[ 06 ]","cases.eyebrow":"Sistemas de aplicación","cases.title":"Sistemas típicos, especificados por proyecto.","cert.index":"[ 07 ]","cert.eyebrow":"Certificaciones","cert.title":"Auditados. Ensayados. Documentados.","cert.desc":"Cada embarque respaldado por certificaciones reconocidas internacionalmente. Las muestras previas al embarque pueden ensayarse en SGS, BV o Intertek a pedido.","rq.index":"[ 09 ]","rq.eyebrow":"Solicitar cotización","rq.title":"Cotización en 24 horas. Muestra enviada en 48.","rq.desc":"Cuéntenos su proyecto — sustrato, ambiente, requisitos de desempeño. Nuestros ingenieros de recubrimientos responden el mismo día hábil.","footer.products":"Productos","footer.company":"Compañía","footer.exportRegions":"Regiones de exportación","footer.rights":"Todos los derechos reservados.","footer.headquarters":"SEDE CENTRAL","footer.contact.phone":"Teléfono","footer.contact.email":"Correo electrónico","footer.contact.whatsapp":"WhatsApp / WeChat","footer.contact.address":"Dirección","pp.index":"[ 03 ]","pp.eyebrow":"Catálogo de productos","pp.title1":"Seis sistemas de recubrimiento.","pp.title2":"Una fuente confiable.","pp.desc":"Desde imprimaciones anticorrosivas para acero offshore hasta sistemas de silicona de 600°C para alta temperatura — cada producto se fabrica internamente, es trazable por lote y está respaldado por una garantía de 24 meses.","pp.specSheet":"· FICHA TÉCNICA","pp.technicalData":"DATOS TÉCNICOS","pp.applications":"APLICACIONES","pp.fullCatalogEyebrow":"Catálogo completo","pp.fullCatalogTitle":"Explore los seis sistemas.","pp.featuredModels":"MODELOS DESTACADOS","pp.expandModels":"Mostrar","pp.collapseModels":"Ocultar","pp.viewDetail":"TDS","pp.hideDetail":"Ocultar","sol.index":"[ SOL ]","sol.eyebrow":"Soluciones por industria","sol.titleAccent":"sector industrial.","sol.titlePre":"Sistemas de recubrimiento diseñados para su","sol.desc":"No solo vendemos pintura: diseñamos sistemas de recubrimiento acordes a su sustrato, ambiente y especificación de desempeño. Estos son los seis sectores industriales clave que atendemos en todo el mundo.","sol.recommended":"SISTEMAS RECOMENDADOS","sol.appEyebrow":"Aplicaciones","sol.appTitle":"Dónde trabajan los recubrimientos HONG NGUYEN.","sol.appDesc":"Seis áreas de aplicación clave donde nuestros sistemas están probados en campo.","sol.procEyebrow":"Proceso de ingeniería","sol.procTitle":"De la especificación al embarque — cuatro pasos.","cp.eyebrow":"Sistemas de aplicación","cp.titlePre":"Sistemas típicos de recubrimiento,","cp.titleAccent":"especificados por proyecto.","cp.desc":"Sistemas representativos para servicios comunes. Los sistemas exactos — productos, capas y DFT — se especifican según la categoría de corrosividad, el sustrato y la vida útil de diseño. Las imágenes son ilustrativas; la TDS de lote y los informes de QC acompañan cada pedido.","cp.outcomesTitle":"Sistemas y servicio","ap.index":"[ 05 ]","ap.eyebrow":"Sobre HONG NGUYEN","ap.titleAccent":"la capital china de los recubrimientos.","ap.titlePre":"Con base en","ap.desc":"HONG NGUYEN es un exportador de recubrimientos con base en Shunde, Guangdong — conocida como la capital china de los recubrimientos. Ensamblamos sistemas completos de recubrimiento (anticorrosivos, de alta temperatura, para pisos y arquitectónicos) desde plantas certificadas ISO 9001 de la región y los suministramos a todo el mundo con documentación de exportación completa, servicio OEM/ODM e igualación de color.","ap.storyEyebrow":"Perfil de la compañía","ap.storyTitle":"Calidad como raíz, desarrollo verde.","ap.storyP1":"HONG NGUYEN es un exportador de recubrimientos con base en Shunde, Guangdong — conocida como “la capital china de los recubrimientos”. Trabajamos con plantas de recubrimientos certificadas ISO 9001 en toda la región, cuya producción opera bajo los sistemas de gestión de calidad ISO 9001 y de gestión ambiental ISO 14001.","ap.storyP2":"Nuestra función es la exportación: selección de sistemas, igualación de color, embalaje OEM / marca privada, documentación de calidad (informes de QC por lote, ensayos de terceros a pedido) y toda la documentación de exportación para su mercado.","ap.storyP3":"La gama de productos abarca sistemas anticorrosivos base agua y base solvente, acabados fluorocarbonados, recubrimientos industriales, sistemas para pisos y recubrimientos especiales — completa, estable y ampliamente utilizada en estructuras de acero, plantas petroquímicas, puentes, buques, maquinaria y construcción.","ap.storyP4":"Mantenemos el principio de calidad primero y desarrollo verde — profundizando la especialización en anticorrosión, optimizando las soluciones de producto y mejorando el servicio técnico. HONG NGUYEN espera asociarse con clientes de todo el mundo: recubrimientos confiables y soporte profesional para una protección duradera en cada proyecto.","ap.capEyebrow":"Capacidades","ap.capTitle":"Lo que controlamos de extremo a extremo.","ap.procEyebrow":"Cómo trabajamos","ap.procTitle":"De la especificación al embarque — cuatro pasos.","ap.certEyebrow":"Certificaciones","ap.certTitle":"Auditados. Ensayados. Documentados.","ap.partnersEyebrow":"Sistemas","ap.partnersTitle":"Químicas que suministramos.","ap.ctaTitle":"¿Listo para especificar HONG NGUYEN en su próximo proyecto?","ap.ctaDesc":"Nuestros ingenieros de recubrimientos responden el mismo día hábil.","np.eyebrow":"Novedades y blog","np.titleAccent":"planta de recubrimientos.","np.titlePre":"Notas de campo desde la","np.desc":"Guías de especificación, informes de exportación y notas de ingeniería para compradores B2B de recubrimientos — escritas por nuestro equipo de exportación y técnico.","np.featured":"DESTACADO","np.stayEyebrow":"Manténgase informado","np.stayTitle":"Reciba informes B2B de recubrimientos, cada mes.","np.stayDesc":"Lanzamientos de productos, novedades de certificación y notas de ingeniería — sin spam.","np.all":"Todos","np.backToNews":"Todos los artículos","np.articleCtaTitle":"¿Especificando un proyecto?","np.articleCtaDesc":"Envíenos el sustrato, el ambiente y la especificación objetivo — respondemos con un sistema compatible en un día hábil.","cat.Product Launch":"Lanzamiento de producto","cat.Project":"Proyecto","cat.Certification":"Certificación","cat.Export":"Exportación","cat.R&D":"I+D","cat.Industry":"Industria","fp.eyebrow":"Preguntas frecuentes","fp.titleAccent":"compradores B2B.","fp.titlePre":"Respuestas para","fp.desc":"Todo lo que necesita saber sobre MOQ, plazo de entrega, formulación a medida, OEM/marca privada, certificaciones y exportación — en un solo lugar.","fp.searchPlaceholder":"Buscar preguntas…","fp.sidebarTitle":"¿No encuentra respuesta?","fp.sidebarDesc":"Nuestros ingenieros de recubrimientos responden el mismo día hábil. Cuéntenos su sustrato, ambiente y objetivos de desempeño.","fp.quickFacts":"DATOS CLAVE","fp.moq":"MOQ","fp.sampleLead":"Plazo de muestra","fp.prodLead":"Plazo de producción","fp.warranty":"Garantía","fp.exportCountries":"Países de exportación","fp.noResults":"Ninguna pregunta coincide","fp.tryOrAsk":". Pruebe otro término o","ctp.index":"[ 09 ]","ctp.eyebrow":"Solicitar cotización","ctp.title1":"Cotización en 24 horas.","ctp.title2":"Muestra enviada en 48.","ctp.desc":"Cuéntenos su proyecto — sustrato, ambiente, requisitos de desempeño. Nuestros ingenieros de recubrimientos responden el mismo día hábil.","ctp.directEyebrow":"Contacto directo","ctp.directTitle":"Hable con un ingeniero de recubrimientos.","ctp.directDesc":"¿Prefiere contactarnos directamente? Use los canales siguientes — los revisamos todos los días hábiles.","ctp.trustQuote":"Respuesta de cotización","ctp.trustSample":"Envío de muestra","ctp.trustWarranty":"Garantía","ctp.successTitle":"Consulta recibida","ctp.successDesc":"Nuestros ingenieros de recubrimientos responderán en un día hábil. Para solicitudes urgentes, escríbanos por WhatsApp.","ctp.formPrivacy":"Respondemos en un día hábil. Sus datos se mantienen confidenciales.","ctp.globalEyebrow":"Exportación global","ctp.globalTitle":"Envíos a todo el mundo, seis regiones clave.","ctp.globalDesc":"Logística consolidada en seis regiones — y cotizaciones a cualquier puerto de destino a pedido.","form.fullName":"Nombre completo","form.company":"Compañía","form.email":"Correo electrónico","form.phone":"Teléfono / WhatsApp","form.country":"País / región","form.product":"Producto de interés","form.productPlaceholder":"Seleccione un sistema…","form.substrate":"Sustrato","form.environment":"Ambiente","form.quantity":"Cantidad (kg)","form.message":"Detalles del proyecto","form.messagePlaceholder":"Describa su proyecto — sustrato, ambiente, requisitos de desempeño, cronograma…","form.namePlaceholder":"Su nombre","form.companyPlaceholder":"Compañía / organización","form.emailPlaceholder":"you@company.com","form.phonePlaceholder":"+86 ...","form.countryPlaceholder":"Vietnam","form.substratePlaceholder":"Acero / concreto / …","form.environmentPlaceholder":"Marino / interior / …","form.quantityPlaceholder":"p. ej. 2,000","form.other":"Otro / no estoy seguro","form.required":"*","err.nameRequired":"El nombre es obligatorio.","err.emailRequired":"Se requiere un correo electrónico válido.","err.messageRequired":"Describa su proyecto.","err.generic":"Algo salió mal. Inténtelo de nuevo.","err.couldNotSend":"No se pudo enviar","toast.inquiryTitle":"Consulta recibida","toast.inquiryDesc":"Gracias — nuestros ingenieros de recubrimientos responderán en un día hábil.","misc.area":"Área","misc.system":"Sistema","misc.duration":"Duración","misc.weatherability":"Resistencia a la intemperie","misc.base":"Base","misc.dft":"DFT","misc.saltSpray":"Niebla salina","misc.packaging":"Envase","misc.tempRange":"Rango de temperatura","misc.cure":"Curado","misc.thickness":"Espesor","misc.traffic":"Tránsito","misc.weatherabilityShort":"Intemperie","misc.gloss":"Brillo","misc.type":"Tipo","misc.fireRating":"Clasificación contra fuego","misc.voc":"VOC","misc.finish":"Acabado","misc.rd":"I+D","misc.sample":"Muestra","misc.production":"Producción","misc.moqShort":"MOQ","misc.coated":"m² recubiertos en casos destacados","misc.defects":"defectos por falla del recubrimiento reportados","misc.countriesServed":"países atendidos","misc.warrantyStd":"garantía de calidad estándar"},N={"brand.tagline":"تصدير الطلاءات الصناعية · فوشان، الصين","brand.premiumDesc":"مصدِّر صيني لأنظمة الطلاء الصناعية — طلاءات مضادة للتآكل ومقاومة للحرارة العالية وأرضيات إيبوكسي وطلاءات معمارية — تُورَّد من مصانع معتمدة ISO 9001، مع خدمة OEM/ODM ومطابقة ألوان RAL/Pantone ومستندات تصدير كاملة.","topbar.based":"فوشان · قوانغدونغ · الصين","topbar.phone":"الهاتف","topbar.email":"البريد الإلكتروني","nav.home":"الرئيسية","nav.products":"المنتجات","nav.solutions":"الحلول","nav.cases":"أنظمة التطبيق","nav.about":"من نحن","nav.news":"الأخبار","nav.faq":"الأسئلة الشائعة","nav.contact":"اتصل بنا","cta.getQuote":"احصل على عرض سعر مجاني","cta.browseCatalog":"تصفح الكتالوج","cta.viewAllCatalog":"عرض الكتالوج الكامل","cta.viewAllCases":"عرض كل الأنظمة","cta.viewFullCatalog":"عرض الكتالوج الكامل","cta.requestQuote":"اطلب عرض سعر","cta.getTds":"احصل على TDS / MSDS","cta.requestFreeQuote":"اطلب عرض سعر مجاني","cta.whatsappChat":"محادثة WhatsApp","cta.startProject":"ابدأ مشروعك","cta.askEngineer":"استشر مهندساً","cta.readArticle":"اقرأ المقال","cta.subscribe":"اشترك","cta.sendInquiry":"أرسل استفساراً","cta.sending":"جارٍ الإرسال…","cta.sendAnother":"أرسل استفساراً آخر","cta.relatedProducts":"منتجات ذات صلة","cta.requestSimilar":"اطلب هذا النظام","cta.explore":"استكشف النظام","cta.talkToEngineer":"تحدث إلى مهندس","cta.partnerWithUs":"كن شريكاً لنا","hero.index":"[ 01 ]","hero.eyebrow":"طلاءات صناعية · تصدير من الصين","hero.title1":"طلاءات هندسية","hero.title2":"للخدمة في","hero.titleAccent":"الصناعات","hero.title3":"الثقيلة","hero.desc":"مصدِّر صيني لأنظمة طلاء مضادة للتآكل ومقاومة للحرارة العالية وأرضيات إيبوكسي وطلاءات معمارية — من مصانع معتمدة ISO 9001 في مركز صناعة الطلاءات بالصين. مستندات تصدير كاملة · OEM/ODM · مطابقة ألوان RAL/Pantone · ضمان جودة 24 شهراً.","hero.specSheet":"ورقة المواصفات · إصدار 2026","hero.live":"مباشر","partners.trustedBy":"أنظمة الطلاء التي نورّدها","core.index":"[ 02 ]","core.eyebrow":"النشاط الأساسي","core.title":"طلاءات صناعية. مصمَّمة لقطاع B2B.","pcat.index":"[ 03 ]","pcat.eyebrow":"فئات المنتجات","pcat.title":"ستة أنظمة طلاء. مصدر واحد موثوق.","why.index":"[ 04 ]","why.eyebrow":"لماذا HONG NGUYEN","why.title":"بُنيت لمشتري B2B الذي لا يحتمل فشل الطلاء.","app.index":"[ 05 ]","app.eyebrow":"مجالات التطبيق","app.title":"حيث تعمل طلاءات HONG NGUYEN.","cases.index":"[ 06 ]","cases.eyebrow":"أنظمة التطبيق","cases.title":"أنظمة نموذجية، تُحدَّد وفق كل مشروع.","cert.index":"[ 07 ]","cert.eyebrow":"الشهادات والاعتمادات","cert.title":"مُدقَّق. مُختبر. مُوثَّق.","cert.desc":"كل شحنة مدعومة بشهادات معترف بها دولياً. ويمكن عند الطلب اختبار عينات ما قبل الشحن لدى SGS أو BV أو Intertek.","rq.index":"[ 09 ]","rq.eyebrow":"اطلب عرض سعر","rq.title":"عرض سعر خلال 24 ساعة. وشحن العينة خلال 48.","rq.desc":"أخبرنا بمشروعك — الركيزة والبيئة ومتطلبات الأداء. يرد مهندسو الطلاء لدينا في اليوم التجاري نفسه.","footer.products":"المنتجات","footer.company":"الشركة","footer.exportRegions":"مناطق التصدير","footer.rights":"جميع الحقوق محفوظة.","footer.headquarters":"المقر الرئيسي","footer.contact.phone":"الهاتف","footer.contact.email":"البريد الإلكتروني","footer.contact.whatsapp":"WhatsApp / WeChat","footer.contact.address":"العنوان","pp.index":"[ 03 ]","pp.eyebrow":"كتالوج المنتجات","pp.title1":"ستة أنظمة طلاء.","pp.title2":"مصدر واحد موثوق.","pp.desc":"من برايمرات مكافحة التآكل للفولاذ البحري إلى أنظمة سيليكون مقاومة حتى 600°C — كل منتج يُصنَّع داخلياً، قابل للتتبع حتى الدفعة، ومدعوم بضمان 24 شهراً.","pp.specSheet":"· ورقة المواصفات","pp.technicalData":"البيانات الفنية","pp.applications":"مجالات التطبيق","pp.fullCatalogEyebrow":"الكتالوج الكامل","pp.fullCatalogTitle":"تصفح الأنظمة الستة كاملة.","pp.featuredModels":"الطرازات المميزة","pp.expandModels":"إظهار","pp.collapseModels":"إخفاء","pp.viewDetail":"TDS","pp.hideDetail":"إخفاء","sol.index":"[ SOL ]","sol.eyebrow":"حلول القطاعات","sol.titleAccent":"الصناعي.","sol.titlePre":"أنظمة طلاء هندسية مصمَّمة لقطاعك","sol.desc":"نحن لا نبيع الطلاء فحسب — بل نهندس أنظمة طلاء مطابقة لركيزتك وبيئتك ومواصفاتك الأدائية. وفيما يلي ستة قطاعات صناعية أساسية نخدمها في جميع أنحاء العالم.","sol.recommended":"الأنظمة الموصى بها","sol.appEyebrow":"مجالات التطبيق","sol.appTitle":"حيث تعمل طلاءات HONG NGUYEN.","sol.appDesc":"ستة مجالات تطبيق أساسية أثبتت أنظمتنا جدارتها ميدانياً.","sol.procEyebrow":"العملية الهندسية","sol.procTitle":"من المواصفة إلى الشحن — أربع خطوات.","cp.eyebrow":"أنظمة التطبيق","cp.titlePre":"أنظمة الطلاء النموذجية،","cp.titleAccent":"تُحدَّد وفق كل مشروع.","cp.desc":"تركيبات طلاء تمثيلية للمهام الشائعة. وتُحدَّد الأنظمة الفعلية — المنتجات وعدد الطبقات وDFT — وفق فئة التآكل والركيزة والعمر التصميمي. الصور توضيحية؛ وتُرفق ورقة TDS للدفعة وتقارير مراقبة الجودة بكل طلب.","cp.outcomesTitle":"الأنظمة والخدمة","ap.index":"[ 05 ]","ap.eyebrow":"عن HONG NGUYEN","ap.titleAccent":"موطن صناعة الطلاءات في الصين.","ap.titlePre":"مقرنا في","ap.desc":"HONG NGUYEN مصدِّر طلاءات مقره شوندي بقوانغدونغ — المعروفة بموطن صناعة الطلاءات في الصين. نجمع أنظمة طلاء كاملة (مكافحة التآكل، درجات الحرارة العالية، الأرضيات والمعمارية) من مصانع معتمدة ISO 9001 في المنطقة ونورّدها إلى العالم كله مع مستندات تصدير كاملة وخدمة OEM/ODM ومطابقة الألوان.","ap.storyEyebrow":"التعريف بالشركة","ap.storyTitle":"الجودة أساس، وتنمية خضراء.","ap.storyP1":"HONG NGUYEN مصدِّر طلاءات مقره شوندي بقوانغدونغ — المعروفة بـ«موطن صناعة الطلاءات في الصين». نتعاون مع مصانع طلاء معتمدة ISO 9001 في جميع أنحاء المنطقة، وتجري عملياتها الإنتاجية في ظل نظام إدارة الجودة ISO 9001 ونظام الإدارة البيئية ISO 14001.","ap.storyP2":"دورنا هو التصدير: اختيار النظام، ومطابقة الألوان، وتغليف OEM / العلامة الخاصة، ومستندات الجودة (تقارير مراقبة جودة الدفعات، والاختبار لدى طرف ثالث عند الطلب)، وكامل أوراق التصدير الخاصة بسوقك.","ap.storyP3":"يغطي مدى المنتجات أنظمة مكافحة التآكل الأساس مائي والمحمّلة بالمذيبات، والطبقات النهائية الفلوروكربونية، والطلاءات الصناعية، وأنظمة الأرضيات والطلاءات الخاصة — متكاملة ومستقرة وتُستخدم على نطاق واسع على الهياكل الفولاذية والمصانع البتروكيماوية والجسور والسفن والآلات والمباني.","ap.storyP4":"نلتزم بالجودة أولاً والتنمية الخضراء — بتعميق خبرة مكافحة التآكل، وتحسين حلول المنتجات، وترقية الخدمة الفنية. وتتطلع HONG NGUYEN إلى الشراكة مع العملاء في جميع أنحاء العالم: طلاءات موثوقة ودعم مهني لحماية طويلة الأمد في كل مشروع.","ap.capEyebrow":"القدرات","ap.capTitle":"ما نتحكم فيه من البداية إلى النهاية.","ap.procEyebrow":"كيف نعمل","ap.procTitle":"من المواصفة إلى الشحن — أربع خطوات.","ap.certEyebrow":"الشهادات والاعتمادات","ap.certTitle":"مُدقَّق. مُختبر. مُوثَّق.","ap.partnersEyebrow":"أنظمة الطلاء","ap.partnersTitle":"التركيبات الكيميائية التي نورّدها.","ap.ctaTitle":"هل أنت مستعد لاعتماد HONG NGUYEN في مشروعك القادم؟","ap.ctaDesc":"يرد مهندسو الطلاء لدينا في اليوم التجاري نفسه.","np.eyebrow":"الأخبار والمدونة","np.titleAccent":"صالة الطلاءات.","np.titlePre":"ملاحظات ميدانية من","np.desc":"أدلة المواصفات وإحاطات التصدير والملاحظات الهندسية لمشتري الطلاءات من قطاع B2B — بقلم فريق التصدير والمكتب الفني لدينا.","np.featured":"مميز","np.stayEyebrow":"ابقَ على اطلاع","np.stayTitle":"احصل على إحاطات الطلاءات لقطاع B2B شهرياً.","np.stayDesc":"إطلاقات المنتجات وتحديثات الشهادات والملاحظات الهندسية — بلا رسائل مزعجة.","np.all":"الكل","np.backToNews":"كل المقالات","np.articleCtaTitle":"بصدد تحديد مواصفات مشروع؟","np.articleCtaDesc":"أرسل لنا الركيزة والبيئة والمواصفة المستهدفة — نرد بنظام مطابق خلال يوم عمل واحد.","cat.Product Launch":"إطلاق منتج","cat.Project":"مشروع","cat.Certification":"شهادة","cat.Export":"تصدير","cat.R&D":"البحث والتطوير","cat.Industry":"قطاع صناعي","fp.eyebrow":"الأسئلة الشائعة","fp.titleAccent":"لمشتري B2B.","fp.titlePre":"إجابات","fp.desc":"كل ما تحتاج معرفته عن الحد الأدنى لكمية الطلب ومدة التوريد والتركيبات المخصصة وOEM/العلامة الخاصة والشهادات والتصدير — في مكان واحد.","fp.searchPlaceholder":"ابحث في الأسئلة…","fp.sidebarTitle":"لم تجد إجابة؟","fp.sidebarDesc":"يرد مهندسو الطلاء لدينا في اليوم التجاري نفسه. أخبرنا بركيزتك وبيئتك وأهدافك الأدائية.","fp.quickFacts":"حقائق سريعة","fp.moq":"MOQ","fp.sampleLead":"مدة إعداد العينة","fp.prodLead":"مدة الإنتاج","fp.warranty":"الضمان","fp.exportCountries":"دول التصدير","fp.noResults":"لا توجد أسئلة مطابقة","fp.tryOrAsk":". جرّب مصطلحاً آخر أو","ctp.index":"[ 09 ]","ctp.eyebrow":"اطلب عرض سعر","ctp.title1":"عرض سعر خلال 24 ساعة.","ctp.title2":"وشحن العينة خلال 48.","ctp.desc":"أخبرنا بمشروعك — الركيزة والبيئة ومتطلبات الأداء. يرد مهندسو الطلاء لدينا في اليوم التجاري نفسه.","ctp.directEyebrow":"اتصال مباشر","ctp.directTitle":"تحدث إلى مهندس طلاءات.","ctp.directDesc":"تفضل التواصل معنا مباشرة؟ استخدم القنوات أدناه — نراقبها كل يوم عمل.","ctp.trustQuote":"الرد على طلب عرض السعر","ctp.trustSample":"شحن العينة","ctp.trustWarranty":"الضمان","ctp.successTitle":"تم استلام الاستفسار","ctp.successDesc":"سيرد مهندسو الطلاء لدينا خلال يوم عمل واحد. للطلبات العاجلة، راسلنا عبر WhatsApp.","ctp.formPrivacy":"نرد خلال يوم عمل واحد. وتُحفظ بياناتك بسرية تامة.","ctp.globalEyebrow":"التصدير العالمي","ctp.globalTitle":"شحن إلى جميع أنحاء العالم، ست مناطق أساسية.","ctp.globalDesc":"قنوات لوجستية راسخة عبر ست مناطق — وعروض أسعار إلى أي ميناء وجهة عند الطلب.","form.fullName":"الاسم الكامل","form.company":"الشركة","form.email":"البريد الإلكتروني","form.phone":"الهاتف / WhatsApp","form.country":"الدولة / المنطقة","form.product":"المنتج محل الاهتمام","form.productPlaceholder":"اختر نظاماً…","form.substrate":"الركيزة","form.environment":"البيئة","form.quantity":"الكمية (kg)","form.message":"تفاصيل المشروع","form.messagePlaceholder":"صف مشروعك — الركيزة والبيئة ومتطلبات الأداء والجدول الزمني…","form.namePlaceholder":"اسمك","form.companyPlaceholder":"الشركة / الجهة","form.emailPlaceholder":"you@company.com","form.phonePlaceholder":"+86 ...","form.countryPlaceholder":"فيتنام","form.substratePlaceholder":"فولاذ / خرسانة / …","form.environmentPlaceholder":"بحري / داخلي / …","form.quantityPlaceholder":"مثال: 2,000","form.other":"أخرى / غير متأكد","form.required":"*","err.nameRequired":"الاسم مطلوب.","err.emailRequired":"يرجى إدخال بريد إلكتروني صالح.","err.messageRequired":"يرجى وصف مشروعك.","err.generic":"حدث خطأ ما. حاول مرة أخرى.","err.couldNotSend":"تعذر الإرسال","toast.inquiryTitle":"تم استلام الاستفسار","toast.inquiryDesc":"شكراً — سيرد مهندسو الطلاء لدينا خلال يوم عمل واحد.","misc.area":"المساحة","misc.system":"النظام","misc.duration":"المدة","misc.weatherability":"مقاومة العوامل الجوية","misc.base":"الأساس","misc.dft":"سماكة الغشاء الجاف (DFT)","misc.saltSpray":"الرذاذ الملحي","misc.packaging":"التعبئة","misc.tempRange":"مدى الحرارة","misc.cure":"التصلد","misc.thickness":"السماكة","misc.traffic":"تحمل المرور","misc.weatherabilityShort":"مقاومة العوامل الجوية","misc.gloss":"اللمعان","misc.type":"النوع","misc.fireRating":"تصنيف الحريق","misc.voc":"VOC","misc.finish":"التشطيب","misc.rd":"البحث والتطوير","misc.sample":"عينة","misc.production":"الإنتاج","misc.moqShort":"MOQ","misc.coated":"m² مطلية في الحالات المختارة","misc.defects":"حالة عيوب فشل طلاء مبلَّغ عنها","misc.countriesServed":"دولة نخدمها","misc.warrantyStd":"شهراً من ضمان الجودة القياسي"},C={"Plant-backed technical support and QC.":"Soporte técnico y control de calidad respaldados por las plantas.","System selection and application guidance are provided together with the producing plants' technical teams. Every order can ship with a batch QC report, and third-party pre-shipment testing is arranged on request.":"La selección del sistema y la orientación de aplicación se prestan junto con los equipos técnicos de las plantas productoras. Cada pedido puede incluir un informe de QC por lote, y se coordinan ensayos de terceros previos al embarque a pedido.","Batch QC reports per order":"Informes de QC por lote en cada pedido","System specification support":"Apoyo a la especificación de sistemas","Colour matching (RAL / Pantone)":"Igualación de color (RAL / Pantone)","Third-party testing on request":"Ensayos de terceros a pedido","Anti-Corrosion Coatings":"Recubrimientos anticorrosivos","High-Temperature Paints":"Pinturas de alta temperatura","Epoxy Floor Systems":"Sistemas de piso epoxi","Weatherproof Topcoats":"Acabados resistentes a la intemperie","Architectural Wall Paints":"Pinturas arquitectónicas para muros","Custom Formulations":"Formulaciones a medida","About Us":"Nosotros","Application Systems":"Sistemas de aplicación",Solutions:"Soluciones","News & Blog":"Novedades y Blog",FAQ:"FAQ",Contact:"Contacto"},S={"Plant-backed technical support and QC.":"دعم فني ومراقبة جودة مدعومان من المصانع.","System selection and application guidance are provided together with the producing plants' technical teams. Every order can ship with a batch QC report, and third-party pre-shipment testing is arranged on request.":"يُقدَّم اختيار النظام والإرشاد التطبيقي بالتعاون مع الفرق الفنية لمصانع الإنتاج. يمكن أن يرافق كل طلب تقرير فحص جودة بالدفعة، وتُرتَّب اختبارات طرف ثالث قبل الشحن عند الطلب.","Batch QC reports per order":"تقارير فحص جودة بالدفعة مع كل طلب","System specification support":"دعم تحديد مواصفات النظام","Colour matching (RAL / Pantone)":"مطابقة الألوان (RAL / Pantone)","Third-party testing on request":"اختبارات طرف ثالث عند الطلب","Anti-Corrosion Coatings":"طلاءات مضادة للتآكل","High-Temperature Paints":"طلاءات الحرارة العالية","Epoxy Floor Systems":"أنظمة أرضيات الإيبوكسي","Weatherproof Topcoats":"تشطيبات مقاومة للعوامل الجوية","Architectural Wall Paints":"طلاءات الجدران المعمارية","Custom Formulations":"تركيبات مخصصة","About Us":"من نحن","Application Systems":"أنظمة التطبيق",Solutions:"الحلول","News & Blog":"الأخبار والمدونة",FAQ:"الأسئلة الشائعة",Contact:"اتصل بنا"},w="hn-lang",T=v((e,a)=>({locale:"en",hydrated:!1,setLocale:a=>{window.localStorage.setItem(w,a),document.documentElement.lang="zh"===a?"zh-CN":a,document.documentElement.dir="ar"===a?"rtl":"ltr",e({locale:a})},hydrate:()=>{if(a().hydrated)return;let n=window.localStorage.getItem(w),t="zh"===n||"vi"===n||"en"===n||"es"===n||"ar"===n?n:"en";document.documentElement.lang="zh"===t?"zh-CN":t,document.documentElement.dir="ar"===t?"rtl":"ltr",e({locale:t,hydrated:!0})}})),D={"brand.tagline":{en:"Industrial Coatings Export · Foshan, China",zh:"工业涂料出口 · 广东佛山",vi:"Xuất khẩu sơn công nghiệp · Phật Sơn, Trung Quốc"},"brand.premiumDesc":{en:"Chinese exporter of industrial coating systems — anti-corrosion, high-temperature, epoxy floor and architectural paints — sourced from ISO 9001 certified plants, with OEM/ODM service, RAL/Pantone colour matching and full export documentation.",zh:"工业涂料体系出口商——防腐、耐高温、环氧地坪及建筑涂料，货源来自 ISO 9001 认证工厂，提供 OEM/ODM、RAL/Pantone 调色及全套出口单证。",vi:"Nhà xuất khẩu hệ sơn công nghiệp Trung Quốc — chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — từ nhà máy ISO 9001, kèm OEM/ODM, pha màu RAL/Pantone và chứng từ xuất khẩu đầy đủ."},"topbar.based":{en:"FOSHAN · GUANGDONG · CHINA",zh:"广东 · 佛山 · 中国",vi:"PHẬT SƠN · QUẢNG ĐÔNG · TRUNG QUỐC"},"topbar.phone":{en:"Phone",zh:"电话",vi:"Điện thoại"},"topbar.email":{en:"Email",zh:"邮箱",vi:"Email"},"nav.home":{en:"Home",zh:"首页",vi:"Trang chủ"},"nav.products":{en:"Products",zh:"产品",vi:"Sản phẩm"},"nav.solutions":{en:"Solutions",zh:"解决方案",vi:"Giải pháp"},"nav.cases":{en:"Systems",zh:"应用体系",vi:"Hệ thống"},"nav.about":{en:"About",zh:"关于我们",vi:"Giới thiệu"},"nav.news":{en:"News",zh:"新闻",vi:"Tin tức"},"nav.faq":{en:"FAQ",zh:"常见问题",vi:"Câu hỏi"},"nav.contact":{en:"Contact",zh:"联系",vi:"Liên hệ"},"cta.getQuote":{en:"Get A Free Quote",zh:"免费获取报价",vi:"Nhận báo giá miễn phí"},"cta.browseCatalog":{en:"Browse Catalog",zh:"浏览产品目录",vi:"Xem catalog"},"cta.viewAllCatalog":{en:"View All Catalog",zh:"查看全部目录",vi:"Toàn bộ catalog"},"cta.viewAllCases":{en:"View All Systems",zh:"查看全部体系",vi:"Xem tất cả hệ thống"},"cta.viewFullCatalog":{en:"View Full Catalog",zh:"查看完整目录",vi:"Xem catalog đầy đủ"},"cta.requestQuote":{en:"Request Quote",zh:"申请报价",vi:"Yêu cầu báo giá"},"cta.getTds":{en:"Get TDS / MSDS",zh:"获取TDS/MSDS",vi:"Nhận TDS / MSDS"},"cta.requestFreeQuote":{en:"Request Free Quote",zh:"免费申请报价",vi:"Yêu cầu báo giá miễn phí"},"cta.whatsappChat":{en:"WhatsApp Chat",zh:"WhatsApp 在线咨询",vi:"Trò chuyện WhatsApp"},"cta.startProject":{en:"Start Your Project",zh:"启动您的项目",vi:"Bắt đầu dự án"},"cta.askEngineer":{en:"Ask an Engineer",zh:"咨询工程师",vi:"Hỏi kỹ sư"},"cta.readArticle":{en:"Read article",zh:"阅读文章",vi:"Đọc bài viết"},"cta.subscribe":{en:"Subscribe",zh:"订阅",vi:"Đăng ký"},"cta.sendInquiry":{en:"Send Inquiry",zh:"发送询盘",vi:"Gửi yêu cầu"},"cta.sending":{en:"Sending…",zh:"发送中…",vi:"Đang gửi…"},"cta.sendAnother":{en:"Send another inquiry",zh:"再发送一条询盘",vi:"Gửi yêu cầu khác"},"cta.relatedProducts":{en:"Related Products",zh:"相关产品",vi:"Sản phẩm liên quan"},"cta.requestSimilar":{en:"Request This System",zh:"申请此体系",vi:"Yêu cầu hệ thống này"},"cta.explore":{en:"Explore system",zh:"了解系统",vi:"Khám phá hệ thống"},"cta.talkToEngineer":{en:"Talk to an engineer",zh:"与工程师交谈",vi:"Trò chuyện với kỹ sư"},"cta.partnerWithUs":{en:"Partner with us",zh:"与我们合作",vi:"Hợp tác cùng chúng tôi"},"hero.index":{en:"[ 01 ]",zh:"[ 01 ]",vi:"[ 01 ]"},"hero.eyebrow":{en:"Industrial Coatings · Export from China",zh:"工业涂料 · 中国出口",vi:"Sơn công nghiệp · Xuất khẩu từ Trung Quốc"},"hero.title1":{en:"Engineered Coatings",zh:"工程化涂料",vi:"Sơn kỹ thuật"},"hero.title2":{en:"for",zh:"用于",vi:"cho công nghiệp"},"hero.titleAccent":{en:"Heavy-Duty",zh:"重型",vi:"hạng nặng"},"hero.title3":{en:"Industries",zh:"工业",vi:""},"hero.desc":{en:"Chinese exporter of anti-corrosion, high-temperature, epoxy floor and architectural coating systems — sourced from ISO 9001 certified plants in China's coatings hub. Full export documentation · OEM/ODM · RAL/Pantone colour matching · 24-month quality warranty.",zh:"防腐、耐高温、环氧地坪及建筑涂料体系出口商——货源来自中国涂料之乡的 ISO 9001 认证工厂。全套出口单证 · OEM/ODM · RAL/Pantone 调色 · 24 个月质保。",vi:"Xuất khẩu hệ sơn chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — từ nhà máy ISO 9001 tại thủ phủ sơn Trung Quốc. Chứng từ xuất khẩu đầy đủ · OEM/ODM · pha màu RAL/Pantone · bảo hành 24 tháng."},"hero.specSheet":{en:"SPEC SHEET · REV.2026",zh:"技术规格 · 2026版",vi:"BẢNG THÔNG SỐ · REV.2026"},"hero.live":{en:"LIVE",zh:"实时",vi:"TRỰC TIẾP"},"partners.trustedBy":{en:"Coating systems we supply",zh:"我们供应的涂料体系",vi:"Các hệ sơn chúng tôi cung ứng"},"core.index":{en:"[ 02 ]",zh:"[ 02 ]",vi:"[ 02 ]"},"core.eyebrow":{en:"Core Business",zh:"核心业务",vi:"Kinh doanh cốt lõi"},"core.title":{en:"Industrial Coatings. Engineered for B2B.",zh:"工业涂料，专为B2B而造。",vi:"Sơn công nghiệp. Thiết kế cho B2B."},"pcat.index":{en:"[ 03 ]",zh:"[ 03 ]",vi:"[ 03 ]"},"pcat.eyebrow":{en:"Product Categories",zh:"产品分类",vi:"Danh mục sản phẩm"},"pcat.title":{en:"Six Coating Systems. One Trusted Source.",zh:"六大涂料体系,一个可信之选。",vi:"Sáu hệ sơn. Một nguồn đáng tin cậy."},"why.index":{en:"[ 04 ]",zh:"[ 04 ]",vi:"[ 04 ]"},"why.eyebrow":{en:"Why HONG NGUYEN",zh:"为何选择宏源",vi:"Vì sao chọn HONG NGUYEN"},"why.title":{en:"Built for B2B buyers who can't afford coating failure.",zh:"为不容许涂层失效的B2B采购方而生。",vi:"Dành cho khách hàng B2B không thể chấp nhận lỗi sơn."},"app.index":{en:"[ 05 ]",zh:"[ 05 ]",vi:"[ 05 ]"},"app.eyebrow":{en:"Applications",zh:"应用领域",vi:"Ứng dụng"},"app.title":{en:"Where HONG NGUYEN coatings work.",zh:"宏源涂料的应用场景。",vi:"Nơi sơn HONG NGUYEN phát huy tác dụng."},"cases.index":{en:"[ 06 ]",zh:"[ 06 ]",vi:"[ 06 ]"},"cases.eyebrow":{en:"Application Systems",zh:"应用体系",vi:"Hệ thống ứng dụng"},"cases.title":{en:"Typical systems, specified per project.",zh:"典型配套体系，按项目选型。",vi:"Hệ thống điển hình, chọn theo dự án."},"cert.index":{en:"[ 07 ]",zh:"[ 07 ]",vi:"[ 07 ]"},"cert.eyebrow":{en:"Certifications",zh:"认证资质",vi:"Chứng nhận"},"cert.title":{en:"Audited. Tested. Documented.",zh:"审核·检测·文档齐备。",vi:"Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ."},"cert.desc":{en:"Every shipment backed by internationally recognized certifications. Pre-shipment samples can be tested at SGS, BV, or Intertek on request.",zh:"每批出货均附带国际认可认证。可按要求在SGS、BV或Intertek进行装运前抽样检测。",vi:"Mỗi lô hàng đều có chứng nhận quốc tế. Có thể kiểm tra mẫu trước khi giao tại SGS, BV hoặc Intertek theo yêu cầu."},"rq.index":{en:"[ 09 ]",zh:"[ 09 ]",vi:"[ 09 ]"},"rq.eyebrow":{en:"Request Quote",zh:"申请报价",vi:"Yêu cầu báo giá"},"rq.title":{en:"Get a quote in 24 hours. Sample shipped in 48.",zh:"24小时内报价,48小时内寄样。",vi:"Báo giá trong 24 giờ. Giao mẫu trong 48 giờ."},"rq.desc":{en:"Tell us your project — substrate, environment, performance requirements. Our coating engineers respond same business day.",zh:"告诉我们您的项目——基材、环境、性能要求。我们的涂料工程师将在同一工作日内回复。",vi:"Hãy cho chúng tôi biết dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật. Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc."},"footer.products":{en:"Products",zh:"产品",vi:"Sản phẩm"},"footer.company":{en:"Company",zh:"公司",vi:"Công ty"},"footer.exportRegions":{en:"Export Regions",zh:"出口地区",vi:"Khu vực xuất khẩu"},"footer.rights":{en:"All rights reserved.",zh:"保留所有权利。",vi:"Đã đăng ký bản quyền."},"footer.headquarters":{en:"HEADQUARTERS",zh:"总部",vi:"TRỤ SỞ"},"footer.contact.phone":{en:"Phone",zh:"电话",vi:"Điện thoại"},"footer.contact.email":{en:"Email",zh:"邮箱",vi:"Email"},"footer.contact.whatsapp":{en:"WhatsApp / WeChat",zh:"WhatsApp / 微信",vi:"WhatsApp / WeChat"},"footer.contact.address":{en:"Address",zh:"地址",vi:"Địa chỉ"},"pp.index":{en:"[ 03 ]",zh:"[ 03 ]",vi:"[ 03 ]"},"pp.eyebrow":{en:"Product Catalog",zh:"产品目录",vi:"Catalog sản phẩm"},"pp.title1":{en:"Six Coating Systems.",zh:"六大涂料体系。",vi:"Sáu hệ sơn."},"pp.title2":{en:"One Trusted Source.",zh:"一个可信之选。",vi:"Một nguồn đáng tin cậy."},"pp.desc":{en:"From anti-corrosion primers for offshore steel to 600°C high-temperature silicone systems — every product is manufactured in-house, traceable to batch, and backed by a 24-month warranty.",zh:"从海洋钢结构的防腐底漆到600°C耐高温有机硅系统——每款产品均为自主生产、批次可追溯,并提供24个月质保。",vi:"Từ sơn lót chống ăn mòn cho kết cấu thép ngoài khơi đến hệ sơn silicone chịu 600°C — mọi sản phẩm đều sản xuất nội bộ, truy xuất theo lô, bảo hành 24 tháng."},"pp.specSheet":{en:"· SPEC SHEET",zh:"· 技术规格",vi:"· BẢNG THÔNG SỐ"},"pp.technicalData":{en:"TECHNICAL DATA",zh:"技术数据",vi:"DỮ LIỆU KỸ THUẬT"},"pp.applications":{en:"APPLICATIONS",zh:"应用领域",vi:"ỨNG DỤNG"},"pp.fullCatalogEyebrow":{en:"Full Catalog",zh:"完整目录",vi:"Toàn bộ catalog"},"pp.fullCatalogTitle":{en:"Browse all six systems.",zh:"浏览全部六大体系。",vi:"Xem cả sáu hệ sơn."},"pp.featuredModels":{en:"FEATURED MODELS",zh:"产品型号",vi:"MÃ SẢN PHẨM"},"pp.expandModels":{en:"Show",zh:"展开",vi:"Hiện"},"pp.collapseModels":{en:"Hide",zh:"收起",vi:"Ẩn"},"pp.viewDetail":{en:"TDS",zh:"产品详情",vi:"Thông số"},"pp.hideDetail":{en:"Hide",zh:"收起",vi:"Ẩn"},"sol.index":{en:"[ SOL ]",zh:"[ SOL ]",vi:"[ SOL ]"},"sol.eyebrow":{en:"Industry Solutions",zh:"行业解决方案",vi:"Giải pháp ngành"},"sol.titleAccent":{en:"industry vertical.",zh:"行业场景。",vi:"ngành."},"sol.titlePre":{en:"Coating systems engineered for your",zh:"为您的",vi:"Hệ sơn được thiết kế cho"},"sol.desc":{en:"We don't just sell paint — we engineer coating systems matched to your substrate, environment and performance spec. Below are six core industry verticals we serve worldwide.",zh:"我们不仅销售涂料——我们提供与您的基材、环境及性能要求匹配的涂料系统。以下是我们全球服务的六大核心行业。",vi:"Chúng tôi không chỉ bán sơn — chúng tôi thiết kế hệ sơn phù hợp với bề mặt, môi trường và yêu cầu kỹ thuật của bạn. Dưới đây là sáu ngành trọng điểm chúng tôi phục vụ toàn cầu."},"sol.recommended":{en:"RECOMMENDED SYSTEMS",zh:"推荐系统",vi:"HỆ SƠN ĐỀ XUẤT"},"sol.appEyebrow":{en:"Applications",zh:"应用领域",vi:"Ứng dụng"},"sol.appTitle":{en:"Where HONG NGUYEN coatings work.",zh:"宏源涂料的应用场景。",vi:"Nơi sơn HONG NGUYEN phát huy tác dụng."},"sol.appDesc":{en:"Six core application areas where our systems are field-proven.",zh:"我们的系统已在这六大核心应用领域得到现场验证。",vi:"Sáu lĩnh vực ứng dụng cốt lõi nơi hệ thống của chúng tôi đã được chứng minh."},"sol.procEyebrow":{en:"Engineering Process",zh:"工程流程",vi:"Quy trình kỹ thuật"},"sol.procTitle":{en:"From spec to shipment — four steps.",zh:"从规格到出货——四步完成。",vi:"Từ thông số đến giao hàng — bốn bước."},"cp.eyebrow":{en:"Application Systems",zh:"应用体系",vi:"Hệ thống ứng dụng"},"cp.titlePre":{en:"Typical coating systems,",zh:"典型涂料配套体系，",vi:"Hệ sơn điển hình,"},"cp.titleAccent":{en:"specified per project.",zh:"按项目选型。",vi:"chọn theo dự án."},"cp.desc":{en:"Representative coating builds for common duties. Exact systems — products, coats and DFT — are specified per corrosivity category, substrate and design life. Images are illustrative; batch TDS and QC reports accompany every order.",zh:"面向常见工况的代表性配套。具体体系（产品、道数、膜厚）按腐蚀等级、基材与设计寿命选定。图片为示意图；每单随附批次 TDS 与质检报告。",vi:"Cấu hình sơn đại diện cho các nhiệm vụ phổ biến. Hệ cụ thể (sản phẩm, số lớp, DFT) chọn theo cấp ăn mòn, bề mặt và tuổi thọ thiết kế. Hình minh họa; mỗi đơn kèm TDS và báo cáo QC theo lô."},"cp.outcomesTitle":{en:"Systems & Service",zh:"体系与服务",vi:"Hệ thống & Dịch vụ"},"ap.index":{en:"[ 05 ]",zh:"[ 05 ]",vi:"[ 05 ]"},"ap.eyebrow":{en:"About HONG NGUYEN",zh:"关于宏源",vi:"Về HONG NGUYEN"},"ap.titleAccent":{en:"China's coatings hometown.",zh:"中国涂料之乡。",vi:"quê hương sơn Trung Quốc."},"ap.titlePre":{en:"Based in",zh:"立足",vi:"Tại"},"ap.desc":{en:"HONG NGUYEN is a coating exporter based in Shunde, Guangdong — known as China's coatings hometown. We assemble complete coating systems (anti-corrosion, high-temperature, floor and architectural) from ISO 9001 certified plants in the region and supply them worldwide with full export documentation, OEM/ODM service and colour matching.",zh:"宏源是一家立足广东顺德——“中国涂料之乡”——的涂料出口商。我们整合当地 ISO 9001 认证工厂的防腐、耐高温、地坪及建筑涂料体系，配套全套出口单证、OEM/ODM 服务与调色服务，供应全球。",vi:"HONG NGUYEN là nhà xuất khẩu sơn đặt tại Shunde, Quảng Đông — 'quê hương sơn Trung Quốc'. Chúng tôi lắp hệ sơn trọn bộ (chống ăn mòn, chịu nhiệt, sàn, kiến trúc) từ các nhà máy ISO 9001 trong vùng và cung ứng toàn cầu kèm chứng từ xuất khẩu, OEM/ODM và pha màu."},"ap.storyEyebrow":{en:"Company Profile",zh:"公司介绍",vi:"Giới thiệu công ty"},"ap.storyTitle":{en:"Quality-rooted, green development.",zh:"品质为本,绿色发展。",vi:"Chất lượng là gốc, phát triển xanh."},"ap.storyP1":{en:"HONG NGUYEN is a coating exporter based in Shunde, Guangdong — known as 'China's coatings hometown'. We work with ISO 9001 certified coating plants across the region, whose production runs under the ISO 9001 quality management and ISO 14001 environmental management systems.",zh:"宏源立足广东顺德——“中国涂料之乡”。我们与区域内 ISO 9001 认证的涂料工厂合作，其生产严格执行 ISO 9001 质量管理体系与 ISO 14001 环境管理体系。",vi:"HONG NGUYEN là nhà xuất khẩu sơn tại Shunde, Quảng Đông — 'quê hương sơn Trung Quốc'. Chúng tôi hợp tác với các nhà máy sơn ISO 9001 trong vùng, sản xuất theo hệ thống quản lý chất lượng ISO 9001 và môi trường ISO 14001."},"ap.storyP2":{en:"Our role is export: system selection, colour matching, OEM / private-label packaging, quality documentation (batch QC reports, third-party testing on request) and the full export paperwork for your market.",zh:"我们的职责是出口：体系选型、调色、OEM/贴牌包装、质量文件（批次质检报告、可安排第三方检测）以及面向您市场的全套出口单证。",vi:"Vai trò của chúng tôi là xuất khẩu: chọn hệ, pha màu, đóng gói OEM/nhãn riêng, hồ sơ chất lượng (báo cáo QC theo lô, thử nghiệm bên thứ ba theo yêu cầu) và bộ chứng từ xuất khẩu cho thị trường của bạn."},"ap.storyP3":{en:"The product range covers waterborne and solvent-borne anti-corrosion systems, fluorocarbon finishes, industrial coatings, floor systems and specialty coatings — complete, stable and widely used on steel structures, petrochemical plants, bridges, ships, machinery and construction.",zh:"产品线覆盖水性/油性防腐体系、氟碳漆、工业漆、地坪漆及特种涂料，配套齐全、性能稳定，广泛应用于钢结构、石油化工、桥梁船舶、五金机械及建筑领域。",vi:"Dải sản phẩm gồm hệ chống ăn mòn gốc nước/dầu, sơn fluorocarbon, sơn công nghiệp, sơn nền và sơn đặc thù — đầy đủ, ổn định, dùng rộng rãi trên kết cấu thép, hóa dầu, cầu tàu, cơ khí và xây dựng."},"ap.storyP4":{en:"We hold to quality-first, green development — deepening anti-corrosion expertise, optimising product solutions and upgrading technical service. HONG NGUYEN looks forward to partnering with customers worldwide: reliable coatings and professional support for long-lasting protection on every project.",zh:"公司坚守品质为本、绿色发展的理念，持续深耕防腐防护领域，优化产品方案、升级技术服务。宏源期待与全球客户携手，为各类工程提供长效稳定、节能环保的涂装解决方案。",vi:"Chúng tôi kiên trì chất lượng là gốc, phát triển xanh — đào sâu chuyên môn chống ăn mòn, tối ưu giải pháp và nâng cấp dịch vụ kỹ thuật. HONG NGUYEN mong hợp tác cùng khách hàng toàn cầu cho mọi công trình."},"ap.capEyebrow":{en:"Capabilities",zh:"核心能力",vi:"Năng lực"},"ap.capTitle":{en:"What we control end-to-end.",zh:"端到端掌控的能力。",vi:"Những gì chúng tôi kiểm soát từ đầu đến cuối."},"ap.procEyebrow":{en:"How We Work",zh:"工作方式",vi:"Cách chúng tôi làm việc"},"ap.procTitle":{en:"From spec to shipment — four steps.",zh:"从规格到出货——四步完成。",vi:"Từ thông số đến giao hàng — bốn bước."},"ap.certEyebrow":{en:"Certifications",zh:"认证资质",vi:"Chứng nhận"},"ap.certTitle":{en:"Audited. Tested. Documented.",zh:"审核·检测·文档齐备。",vi:"Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ."},"ap.partnersEyebrow":{en:"Systems",zh:"涂料体系",vi:"Hệ sơn"},"ap.partnersTitle":{en:"Chemistries we supply.",zh:"我们供应的涂料化学体系。",vi:"Các hệ hóa sơn chúng tôi cung ứng."},"ap.ctaTitle":{en:"Ready to specify HONG NGUYEN on your next project?",zh:"准备好在下一个项目中选用宏源了吗?",vi:"Sẵn sàng chọn HONG NGUYEN cho dự án tiếp theo?"},"ap.ctaDesc":{en:"Our coating engineers respond the same business day.",zh:"我们的涂料工程师将在同一工作日内回复。",vi:"Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc."},"np.eyebrow":{en:"News & Blog",zh:"新闻与博客",vi:"Tin tức & Blog"},"np.titleAccent":{en:"coatings floor.",zh:"涂料车间。",vi:"sản xuất sơn."},"np.titlePre":{en:"Field notes from the",zh:"来自",vi:"Ghi chép từ"},"np.desc":{en:"Specification guides, export briefings and engineering notes for B2B coating buyers — written by our export and technical desk.",zh:"面向 B2B 涂料采购方的选型指南、出口简报与工程笔记——出自我们的出口与技术部门。",vi:"Cẩm nang chọn hệ, tin xuất khẩu và ghi chú kỹ thuật cho người mua sơn B2B — từ bộ phận xuất khẩu và kỹ thuật của chúng tôi."},"np.featured":{en:"FEATURED",zh:"精选",vi:"NỔI BẬT"},"np.stayEyebrow":{en:"Stay informed",zh:"保持关注",vi:"Cập nhật thông tin"},"np.stayTitle":{en:"Get B2B coatings briefings, monthly.",zh:"每月获取B2B涂料简报。",vi:"Nhận tin vắn sơn B2B hàng tháng."},"np.stayDesc":{en:"Product launches, certification updates and engineering notes — no spam.",zh:"产品发布、认证更新与工程笔记——绝不发送垃圾邮件。",vi:"Ra mắt sản phẩm, cập nhật chứng nhận và ghi chép kỹ thuật — không spam."},"np.all":{en:"All",zh:"全部",vi:"Tất cả"},"np.backToNews":{en:"All articles",zh:"返回文章列表",vi:"Tất cả bài viết"},"np.articleCtaTitle":{en:"Specifying a project?",zh:"正在为项目选型？",vi:"Đang chọn hệ cho dự án?"},"np.articleCtaDesc":{en:"Send us the substrate, environment and target spec — we reply with a matched system within one business day.",zh:"把基材、环境与目标规格发给我们，一个工作日内回复配套方案。",vi:"Gửi bề mặt, môi trường và thông số mục tiêu — chúng tôi phản hồi hệ phù hợp trong một ngày làm việc."},"cat.Product Launch":{en:"Product Launch",zh:"产品发布",vi:"Ra mắt sản phẩm"},"cat.Project":{en:"Project",zh:"项目",vi:"Dự án"},"cat.Certification":{en:"Certification",zh:"认证",vi:"Chứng nhận"},"cat.Export":{en:"Export",zh:"出口",vi:"Xuất khẩu"},"cat.R&D":{en:"R&D",zh:"研发",vi:"R&D"},"cat.Industry":{en:"Industry",zh:"行业",vi:"Ngành"},"fp.eyebrow":{en:"Frequently Asked Questions",zh:"常见问题",vi:"Câu hỏi thường gặp"},"fp.titleAccent":{en:"B2B buyers.",zh:"B2B采购方。",vi:"khách hàng B2B."},"fp.titlePre":{en:"Answers for",zh:"为",vi:"Câu trả lời cho"},"fp.desc":{en:"Everything you need to know about MOQ, lead time, custom formulation, OEM/private-label, certifications and export — in one place.",zh:"关于起订量、交期、定制配方、OEM/贴牌、认证与出口的全部信息——一站式了解。",vi:"Mọi thông tin về MOQ, thời gian giao hàng, phối chế theo yêu cầu, OEM/nhãn riêng, chứng nhận và xuất khẩu — tất cả tại một nơi."},"fp.searchPlaceholder":{en:"Search questions…",zh:"搜索问题…",vi:"Tìm câu hỏi…"},"fp.sidebarTitle":{en:"Can't find an answer?",zh:"找不到答案?",vi:"Không tìm thấy câu trả lời?"},"fp.sidebarDesc":{en:"Our coating engineers respond the same business day. Tell us your substrate, environment and performance targets.",zh:"我们的涂料工程师将在同一工作日内回复。告诉我们您的基材、环境及性能目标。",vi:"Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc. Hãy cho chúng tôi biết bề mặt, môi trường và yêu cầu kỹ thuật."},"fp.quickFacts":{en:"QUICK FACTS",zh:"快速概览",vi:"THÔNG TIN NHANH"},"fp.moq":{en:"MOQ",zh:"起订量",vi:"MOQ"},"fp.sampleLead":{en:"Sample lead",zh:"样品周期",vi:"Thời gian giao mẫu"},"fp.prodLead":{en:"Production lead",zh:"生产周期",vi:"Thời gian sản xuất"},"fp.warranty":{en:"Warranty",zh:"质保",vi:"Bảo hành"},"fp.exportCountries":{en:"Export countries",zh:"出口国家",vi:"Quốc gia xuất khẩu"},"fp.noResults":{en:"No questions match",zh:"没有匹配的问题",vi:"Không có câu hỏi phù hợp"},"fp.tryOrAsk":{en:". Try another term or",zh:"。请尝试其他关键词,或",vi:". Thử từ khóa khác hoặc"},"ctp.index":{en:"[ 09 ]",zh:"[ 09 ]",vi:"[ 09 ]"},"ctp.eyebrow":{en:"Request Quote",zh:"申请报价",vi:"Yêu cầu báo giá"},"ctp.title1":{en:"Get a quote in 24 hours.",zh:"24小时内报价。",vi:"Báo giá trong 24 giờ."},"ctp.title2":{en:"Sample shipped in 48.",zh:"48小时内寄样。",vi:"Giao mẫu trong 48 giờ."},"ctp.desc":{en:"Tell us your project — substrate, environment, performance requirements. Our coating engineers respond same business day.",zh:"告诉我们您的项目——基材、环境、性能要求。我们的涂料工程师将在同一工作日内回复。",vi:"Hãy cho chúng tôi biết dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật. Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc."},"ctp.directEyebrow":{en:"Direct Contact",zh:"直接联系",vi:"Liên hệ trực tiếp"},"ctp.directTitle":{en:"Talk to a coating engineer.",zh:"与涂料工程师对话。",vi:"Trò chuyện với kỹ sư sơn."},"ctp.directDesc":{en:"Prefer to reach us directly? Use the channels below — we monitor them every business day.",zh:"希望直接联系我们?通过以下渠道——我们每个工作日都关注。",vi:"Muốn liên hệ trực tiếp? Sử dụng các kênh dưới đây — chúng tôi theo dõi mỗi ngày làm việc."},"ctp.trustQuote":{en:"Quote response",zh:"报价响应",vi:"Phản hồi báo giá"},"ctp.trustSample":{en:"Sample ships",zh:"样品寄出",vi:"Giao mẫu"},"ctp.trustWarranty":{en:"Warranty",zh:"质保",vi:"Bảo hành"},"ctp.successTitle":{en:"Inquiry received",zh:"询盘已收到",vi:"Đã nhận yêu cầu"},"ctp.successDesc":{en:"Our coating engineers will respond within one business day. For urgent requests, message us on WhatsApp.",zh:"我们的涂料工程师将在1个工作日内回复。如有紧急需求,请通过WhatsApp联系我们。",vi:"Kỹ sư sơn sẽ phản hồi trong vòng 1 ngày làm việc. Yêu cầu khẩn xin nhắn qua WhatsApp."},"ctp.formPrivacy":{en:"We respond within 1 business day. Your data is kept confidential.",zh:"我们将在1个工作日内回复。您的信息将严格保密。",vi:"Chúng tôi phản hồi trong 1 ngày làm việc. Thông tin của bạn được bảo mật."},"ctp.globalEyebrow":{en:"Global Export",zh:"全球出口",vi:"Xuất khẩu toàn cầu"},"ctp.globalTitle":{en:"Shipping worldwide, six core regions.",zh:"全球发货，六大核心区域。",vi:"Gửi hàng toàn cầu, sáu khu vực trọng điểm."},"ctp.globalDesc":{en:"Established logistics across six regions — and quotes to any destination port on request.",zh:"六大区域拥有成熟物流渠道，并可按需报至任意目的港。",vi:"Logistics sẵn có tại sáu khu vực — báo giá tới bất kỳ cảng đích nào theo yêu cầu."},"form.fullName":{en:"Full name",zh:"姓名",vi:"Họ tên"},"form.company":{en:"Company",zh:"公司",vi:"Công ty"},"form.email":{en:"Email",zh:"邮箱",vi:"Email"},"form.phone":{en:"Phone / WhatsApp",zh:"电话 / WhatsApp",vi:"Điện thoại / WhatsApp"},"form.country":{en:"Country / region",zh:"国家 / 地区",vi:"Quốc gia / khu vực"},"form.product":{en:"Product of interest",zh:"意向产品",vi:"Sản phẩm quan tâm"},"form.productPlaceholder":{en:"Select a system…",zh:"选择系统…",vi:"Chọn hệ sơn…"},"form.substrate":{en:"Substrate",zh:"基材",vi:"Bề mặt"},"form.environment":{en:"Environment",zh:"环境",vi:"Môi trường"},"form.quantity":{en:"Quantity (kg)",zh:"数量 (kg)",vi:"Số lượng (kg)"},"form.message":{en:"Project details",zh:"项目详情",vi:"Chi tiết dự án"},"form.messagePlaceholder":{en:"Describe your project — substrate, environment, performance requirements, timeline…",zh:"请描述您的项目——基材、环境、性能要求、时间表……",vi:"Mô tả dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật, thời gian…"},"form.namePlaceholder":{en:"Your name",zh:"您的姓名",vi:"Tên của bạn"},"form.companyPlaceholder":{en:"Company / org",zh:"公司 / 机构",vi:"Công ty / tổ chức"},"form.emailPlaceholder":{en:"you@company.com",zh:"you@company.com",vi:"you@company.com"},"form.phonePlaceholder":{en:"+86 ...",zh:"+86 ...",vi:"+86 ..."},"form.countryPlaceholder":{en:"Vietnam",zh:"越南",vi:"Việt Nam"},"form.substratePlaceholder":{en:"Steel / concrete / …",zh:"钢材 / 混凝土 / …",vi:"Thép / bê tông / …"},"form.environmentPlaceholder":{en:"Marine / indoor / …",zh:"海洋 / 室内 / …",vi:"Biển / trong nhà / …"},"form.quantityPlaceholder":{en:"e.g. 2,000",zh:"如 2,000",vi:"vd. 2.000"},"form.other":{en:"Other / not sure",zh:"其他 / 不确定",vi:"Khác / chưa rõ"},"form.required":{en:"*",zh:"*",vi:"*"},"err.nameRequired":{en:"Name is required.",zh:"请填写姓名。",vi:"Vui lòng nhập họ tên."},"err.emailRequired":{en:"A valid email is required.",zh:"请填写有效的邮箱地址。",vi:"Vui lòng nhập email hợp lệ."},"err.messageRequired":{en:"Please describe your project.",zh:"请描述您的项目。",vi:"Vui lòng mô tả dự án."},"err.generic":{en:"Something went wrong. Please try again.",zh:"出现错误,请重试。",vi:"Đã xảy ra lỗi. Vui lòng thử lại."},"err.couldNotSend":{en:"Could not send",zh:"发送失败",vi:"Không thể gửi"},"toast.inquiryTitle":{en:"Inquiry received",zh:"询盘已收到",vi:"Đã nhận yêu cầu"},"toast.inquiryDesc":{en:"Thanks — our coating engineers will respond within one business day.",zh:"感谢您——我们的涂料工程师将在1个工作日内回复。",vi:"Cảm ơn bạn — kỹ sư sơn sẽ phản hồi trong vòng 1 ngày làm việc."},"misc.area":{en:"Area",zh:"面积",vi:"Diện tích"},"misc.system":{en:"System",zh:"系统",vi:"Hệ thống"},"misc.duration":{en:"Duration",zh:"工期",vi:"Thời gian"},"misc.weatherability":{en:"Weatherability",zh:"耐候性",vi:"Khả năng chịu thời tiết"},"misc.base":{en:"Base",zh:"基料",vi:"Nhựa nền"},"misc.dft":{en:"DFT",zh:"干膜厚度",vi:"DFT"},"misc.saltSpray":{en:"Salt Spray",zh:"盐雾",vi:"Phun muối"},"misc.packaging":{en:"Packaging",zh:"包装",vi:"Đóng gói"},"misc.tempRange":{en:"Temp Range",zh:"温度范围",vi:"Nhiệt độ"},"misc.cure":{en:"Cure",zh:"固化",vi:"Khâu đông"},"misc.thickness":{en:"Thickness",zh:"厚度",vi:"Độ dày"},"misc.traffic":{en:"Traffic",zh:"承重",vi:"Tải trọng"},"misc.weatherabilityShort":{en:"Weatherability",zh:"耐候性",vi:"Chịu thời tiết"},"misc.gloss":{en:"Gloss",zh:"光泽",vi:"Độ bóng"},"misc.type":{en:"Type",zh:"类型",vi:"Loại"},"misc.fireRating":{en:"Fire Rating",zh:"防火等级",vi:"Cấp cháy"},"misc.voc":{en:"VOC",zh:"VOC",vi:"VOC"},"misc.finish":{en:"Finish",zh:"饰面",vi:"Bề mặt"},"misc.rd":{en:"R&D",zh:"研发",vi:"R&D"},"misc.sample":{en:"Sample",zh:"样品",vi:"Mẫu"},"misc.production":{en:"Production",zh:"生产",vi:"Sản xuất"},"misc.moqShort":{en:"MOQ",zh:"起订量",vi:"MOQ"},"misc.coated":{en:"m² coated in featured cases",zh:"m² 精选案例涂装面积",vi:"m² sơn trong các dự án tiêu biểu"},"misc.defects":{en:"coating-failure defects reported",zh:"起涂层失效缺陷",vi:"lỗi sơn được báo cáo"},"misc.countriesServed":{en:"countries served",zh:"服务国家",vi:"quốc gia phục vụ"},"misc.warrantyStd":{en:"quality warranty standard",zh:"标准质保期",vi:"bảo hành tiêu chuẩn"}};function j(){let e=T(e=>e.locale),a=T(e=>e.setLocale),t=n.useCallback(a=>{let n=D[a];return n?"es"===e?k[a]??n.es??n.en:"ar"===e?N[a]??n.ar??n.en:n[e]??n.en:a},[e]),i=n.useCallback(a=>a?"string"==typeof a?a:"es"===e?a.es??C[a.en]??a.en:"ar"===e?a.ar??S[a.en]??a.en:a[e]??a.en:"",[e]);return{locale:e,setLocale:a,t,loc:i}}let H=[{code:"en",label:"English",short:"EN"},{code:"zh",label:"中文",short:"中"},{code:"vi",label:"Tiếng Việt",short:"VI"},{code:"es",label:"Español",short:"ES"},{code:"ar",label:"العربية",short:"ع"}];function z(){let e=T(e=>e.hydrate);return n.useEffect(()=>{e()},[e]),null}function A({className:e}){let{locale:t,setLocale:i}=j(),[r,o]=n.useState(!1),s=n.useRef(null);n.useEffect(()=>{let e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let c=H.find(e=>e.code===t)??H[0];return(0,a.jsxs)("div",{ref:s,className:(0,x.f)("relative",e),children:[(0,a.jsxs)("button",{type:"button",onClick:()=>o(e=>!e),className:"inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-2.5 py-1 text-[12px] font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground","aria-haspopup":"listbox","aria-expanded":r,"aria-label":"Select language",children:[(0,a.jsx)(g,{className:"size-3.5 text-brand"}),(0,a.jsx)("span",{className:"font-mono tracking-wide",children:c.short}),(0,a.jsx)(f,{className:(0,x.f)("size-3 transition-transform",r&&"rotate-180")})]}),r&&(0,a.jsx)("ul",{role:"listbox",className:"absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-xl",children:H.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("button",{role:"option","aria-selected":e.code===t,onClick:()=>{i(e.code),o(!1)},className:(0,x.f)("flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[13px] transition-colors hover:bg-accent",e.code===t?"text-foreground":"text-muted-foreground"),children:[(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"font-mono text-[10px] text-brand",children:e.short}),e.label]}),e.code===t&&(0,a.jsx)(u,{className:"size-3.5 text-brand"})]})},e.code))})]})}let L=v(e=>({page:"home",target:void 0,navigate:(a,n)=>{e({page:a,target:n}),window.scrollTo({top:0,behavior:"auto"})}})),P="HONG NGUYEN",E="宏源新材料",q={en:"Chinese exporter of industrial coating systems — anti-corrosion, high-temperature, epoxy floor and architectural paints — sourced from ISO 9001 certified plants in China's coatings hub (Shunde, Foshan) and supplied worldwide with full export documentation, OEM/ODM service and RAL/Pantone colour matching.",zh:"工业涂料出口商——防腐、耐高温、环氧地坪及建筑涂料体系，货源来自中国涂料之乡（广东顺德）的 ISO 9001 认证工厂，全球供应，配套全套出口单证、OEM/ODM 服务及 RAL/Pantone 调色。",vi:"Nhà xuất khẩu hệ sơn công nghiệp Trung Quốc — chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — lấy từ các nhà máy đạt ISO 9001 tại thủ phủ sơn Trung Quốc (Shunde, Phật Sơn), cung ứng toàn cầu kèm đầy đủ chứng từ xuất khẩu, dịch vụ OEM/ODM và pha màu RAL/Pantone.",es:"Exportador chino de sistemas de recubrimientos industriales — anticorrosivos, de alta temperatura, epoxi para pisos y pinturas arquitectónicas — abastecidos de plantas certificadas ISO 9001 en la capital china de los recubrimientos (Shunde, Foshan) y suministrados a todo el mundo con documentación de exportación completa, servicio OEM/ODM e igualación de color RAL/Pantone.",ar:"مُصدِّر صيني لأنظمة الطلاء الصناعي — مضادة للتآكل، ومقاومة للحرارة العالية، وأرضيات إيبوكسي، وطلاءات معمارية — من مصانع حاصلة على شهادة ISO 9001 في عاصمة الطلاءات الصينية (شونده، فوشان)، مع توريد عالمي مصحوباً بمستندات تصدير كاملة وخدمات OEM/ODM ومطابقة ألوان RAL/Pantone."},F="hogoshi2023@gmail.com",M="+86 131 7420 8290",O="+86 131 7420 8290",R={en:"Xiashi Industrial Zone, Lunjiao Subdistrict, Shunde District, Foshan City, Guangdong Province, P.R.China",zh:"中国广东省佛山市顺德区伦教街道霞石工业区",vi:"Khu công nghiệp Xiashi, phường Lunjiao, quận Shunde, thành phố Phật Sơn, tỉnh Quảng Đông, Trung Quốc",es:"Zona Industrial Xiashi, Subdistrito de Lunjiao, Distrito de Shunde, Ciudad de Foshan, Provincia de Guangdong, R.P. China",ar:"المنطقة الصناعية شياتشي، بلدية لونجياو، منطقة شونده، مدينة فوشان، مقاطعة قوانغدونغ، الصين"},I=["ISO 9001:2015","CE","REACH","SGS"],B=[{value:"22+",label:{en:"Product Series",zh:"产品系列",vi:"Dòng sản phẩm",es:"Series de productos",ar:"سلاسل المنتجات"},sub:{en:"Industrial · marine · architectural",zh:"工业·船舶·建筑",vi:"Công nghiệp · hàng hải · kiến trúc",es:"Industrial · marino · arquitectónico",ar:"صناعي · بحري · معماري"}},{value:"6",label:{en:"Coating Systems",zh:"涂料体系",vi:"Hệ sơn",es:"Sistemas de recubrimiento",ar:"أنظمة الطلاء"},sub:{en:"Primer → topcoat",zh:"底漆到面漆",vi:"Lót → lớp phủ",es:"Imprimación → acabado",ar:"برايمر → طبقة نهائية"}},{value:"200 kg",label:{en:"MOQ",zh:"起订量",vi:"MOQ",es:"MOQ",ar:"الحد الأدنى لكمية الطلب (MOQ)"},sub:{en:"Mixed tones OK",zh:"可混色",vi:"Phối màu hỗn hợp OK",es:"Tonos mezclados aceptados",ar:"الألوان المختلطة مقبولة"}},{value:"7–15 d",label:{en:"Lead Time",zh:"交货周期",vi:"Thời gian giao",es:"Plazo de entrega",ar:"مدة التوريد"},sub:{en:"After order confirmation",zh:"订单确认后",vi:"Sau khi xác nhận đơn",es:"Tras la confirmación del pedido",ar:"بعد تأكيد الطلب"}}],U=[{label:{en:"Resin Systems",zh:"树脂体系",vi:"Hệ nhựa",es:"Sistemas de resina",ar:"أنظمة الراتنجات"},value:"Epoxy · Acrylic · PU · Silicone"},{label:{en:"Film Thickness",zh:"膜厚范围",vi:"Độ dày màng",es:"Espesor de película",ar:"سماكة الغشاء"},value:"25 μm – 3 mm (system)"},{label:{en:"Temperature Service",zh:"耐温",vi:"Chịu nhiệt",es:"Temperatura de servicio",ar:"الخدمة الحرارية"},value:"up to 550 °C"},{label:{en:"Weathering",zh:"耐候",vi:"Chịu thời tiết",es:"Resistencia a la intemperie",ar:"مقاومة العوامل الجوية"},value:"1000 h accel. (FEVE, lab)"},{label:{en:"Colour",zh:"颜色",vi:"Màu",es:"Color",ar:"اللون"},value:"RAL / Pantone / custom"},{label:{en:"Packaging",zh:"包装",vi:"Đóng gói",es:"Envase",ar:"التعبئة"},value:"5L / 20L / 200L drum"},{label:{en:"Lead Time",zh:"交货周期",vi:"Thời gian giao",es:"Plazo de entrega",ar:"مدة التوريد"},value:"7 – 15 working days"},{label:{en:"MOQ",zh:"起订量",vi:"MOQ",es:"MOQ",ar:"الحد الأدنى لكمية الطلب (MOQ)"},value:"200 kg (mixed tones OK)"}],V=[{code:"CAT-01",title:{en:"Anti-Corrosion Coatings",zh:"工业重防腐涂料",vi:"Sơn chống ăn mòn công nghiệp",es:"Recubrimientos anticorrosivos",ar:"طلاءات مضادة للتآكل"},short:{en:"Epoxy · Polyurethane · Zinc-rich primers",zh:"环氧·聚氨酯·富锌底漆",vi:"Epoxy · PU · lót giàu kẽm",es:"Epoxi · Poliuretano · Imprimaciones ricas en zinc",ar:"إيبوكسي · بولي يوريثان · برايمرات غنية بالزنك"},description:{en:"High-build epoxy, polyurethane and zinc-rich primer systems for steel structures, pipelines, marine vessels and offshore platforms — complete primer / intermediate / topcoat systems selectable per ISO 12944 corrosivity categories.",zh:"高膜厚环氧、聚氨酯及富锌底漆体系，适用于钢结构、管道、船舶及海洋平台；底漆/中间漆/面漆成套供应，可按 ISO 12944 腐蚀等级选型。",vi:"Hệ epoxy dày, polyurethane và lót giàu kẽm cho kết cấu thép, đường ống, tàu biển và giàn ngoài khơi — hệ lót/lớp giữa/lớp phủ trọn bộ, chọn theo cấp ăn mòn ISO 12944.",es:"Sistemas de imprimación rica en zinc, epoxi y poliuretano de alto espesor para estructuras de acero, tuberías, buques y plataformas offshore — sistemas completos de imprimación / capa intermedia / acabado seleccionables según las categorías de corrosividad de ISO 12944.",ar:"أنظمة برايمر غني بالزنك وإيبوكسي وبولي يوريثان عالية السماكة للهياكل الفولاذية والأنابيب والسفن والمنصات البحرية — أنظمة كاملة (برايمر / طبقة وسطى / طبقة نهائية) تُختار وفق فئات التآكل في معيار ISO 12944."},features:[{en:"Zinc-rich epoxy primer — 80 % zinc in dry film",zh:"富锌环氧底漆，干膜含锌量 80%",vi:"Lót epoxy giàu kẽm — 80 % kẽm trong màng khô",es:"Imprimación epoxi rica en zinc — 80 % de zinc en película seca",ar:"برايمر إيبوكسي غني بالزنك — 80 % زنك في الغشاء الجاف"},{en:"Complete matched systems: primer → intermediate → topcoat",zh:"配套齐全：底漆 → 中间漆 → 面漆",vi:"Hệ phối hợp trọn bộ: lót → lớp giữa → lớp phủ",es:"Sistemas completos y compatibles: imprimación → capa intermedia → acabado",ar:"أنظمة متطابقة كاملة: برايمر → طبقة وسطى → طبقة نهائية"},{en:"Zinc-rich + MIO + PU builds of 80 – 250 μm DFT",zh:"富锌+云铁+聚氨酯体系，干膜总厚 80–250 μm",vi:"Hệ giàu kẽm + MIO + PU, tổng DFT 80–250 μm",es:"Rico en zinc + MIO + PU con DFT de 80 – 250 μm",ar:"أنظمة غنية بالزنك + MIO + PU بسماكات DFT من 80 – 250 μm"},{en:"System selection per ISO 12944 corrosivity category",zh:"按 ISO 12944 腐蚀等级选型",vi:"Chọn hệ theo cấp ăn mòn ISO 12944",es:"Selección del sistema según la categoría de corrosividad ISO 12944",ar:"اختيار النظام بحسب فئة التآكل وفق ISO 12944"}],specs:[{label:{en:"Base",zh:"基料",vi:"Nhựa nền",es:"Base",ar:"الأساس"},value:"Epoxy / PU / Zn-rich"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT",ar:"سماكة الغشاء الجاف (DFT)"},value:"80 – 250 μm"},{label:{en:"Zinc (primer)",zh:"含锌量（底漆）",vi:"Kẽm (lót)",es:"Zinc (imprimación)",ar:"الزنك (البرايمر)"},value:"80 % d.f."},{label:{en:"Packaging",zh:"包装",vi:"Đóng gói",es:"Envase",ar:"التعبئة"},value:"20L / 200L"}],categorySpecs:[{label:{en:"Zinc (primer)",zh:"含锌量",vi:"Kẽm",es:"Zinc (imprimación)",ar:"الزنك (البرايمر)"},value:"80 %"},{label:{en:"System DFT",zh:"体系膜厚",vi:"DFT hệ",es:"DFT del sistema",ar:"سماكة DFT للنظام"},value:"80–250 μm"},{label:{en:"Pot life",zh:"适用期",vi:"Pot life",es:"Vida útil de la mezcla",ar:"العمر الاستخدامي للخليط"},value:"2–8 h"},{label:{en:"Coats",zh:"涂层道数",vi:"Số lớp",es:"Capas",ar:"عدد الطبقات"},value:"3–4"}],models:[{model:"HN-AC-201",desc:{en:"Two-pack epoxy primer, 80 % zinc in dry film — long-term steel protection",zh:"双组份环氧底漆，干膜含锌量达 80%，钢结构长效防护",vi:"Sơn lót epoxy 2 thành phần, 80 % kẽm trong màng khô — bảo vệ thép lâu dài",es:"Imprimación epoxi de dos componentes, 80 % de zinc en película seca — protección de larga duración del acero",ar:"برايمر (طبقة أولى) إيبوكسي ثنائي العبوة بنسبة 80 % زنك في الغشاء الجاف — حماية طويلة الأمد للفولاذ"},details:{en:`【Overview】
Two-pack chemically curing epoxy primer with up to 80 % metallic zinc in the dry film. Excellent corrosion resistance and abrasion resistance; also suitable as welding primer on blast-cleaned plate and as the anti-rust primer under fire-protection coatings.

【Typical applications】
Long-term protective primer for steel in medium to severe corrosivity (C3–C5).

【Physical & application data】
Binder / resin：Epoxy
Colour：Red-grey / grey
Mix ratio (base : hardener)：10 : 1 (by weight)
Pot life：8 h (20 \xb0C)
Flash point：25 \xb0C
Density：2.3 kg/L
Volume solids：49 %
Theoretical spreading rate：12 m\xb2/L @ 40 μm DFT
Drying (touch-dry / full cure)：1 h / 7 d (20 \xb0C)
Recoating interval (min / max)：1 h – 7 d
Finish：Matt
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 5–10 % \xb7 airless 10 % \xb7 spray 15 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Steel must be dry, free of loose paint, grease and dirt. Abrasive blast to Sa 2.5 (ISO 8501-1 / Swedish standard), surface profile Rugotest No.3 BN9a; remove dust and abrasives before coating. For special substrates consult our technical desk.

【Recommended system (HN codes)】
HN-AC-201 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份化学固化型环氧底漆，干漆膜中锌粉含量高达 80%，具有优异的防腐蚀及耐磨损性能；可为喷砂后的钢板提供临时保护作为焊接底漆，也可用作防火涂料的配套高级防锈底漆。

【适用范围】
中等至严重腐蚀环境（C3–C5）中钢材表面的长效保护底漆。

【物理与应用参数】
漆基：环氧树脂
颜色：红灰色 / 灰色
混合比例（漆基：固化剂）：10 : 1 （重量比）
混合使用期：8 h (20 \xb0C)
闪点：25 \xb0C
比重：2.3 kg/L
体积固体含量：49 %
理论涂布率：12 m\xb2/L @ 40 μm DFT
干燥时间（表干 / 完全固化）：1 h / 7 d (20 \xb0C)
重涂间隔（最小 / 最大）：1 h – 7 d
漆面：哑光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 5–10 % \xb7 无气喷涂 10 % \xb7 喷涂 15 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
钢铁表面必须干燥，无松散漆层、油脂及其他污垢。喷砂处理至瑞典标准 Sa2.5 级，表面粗糙度达 Rugotest No.3 BN9a；涂装前除去尘埃及砂粒。特殊表面处理请向我方技术部门咨询。

【建议油漆配套（HN 型号）】
HN-AC-201 \xd71 遍（0.10 L/m\xb2）
HN-AC-302 \xd71 遍（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn l\xf3t epoxy 2 th\xe0nh phần h\xf3a đ\xf3ng rắn, h\xe0m lượng bột kẽm tới 80 % trong m\xe0ng kh\xf4. Chống ăn m\xf2n v\xe0 chống m\xe0i m\xf2n xuất sắc; c\xf3 thể l\xe0m sơn l\xf3t h\xe0n tr\xean th\xe9p phun c\xe1t v\xe0 sơn l\xf3t chống gỉ dưới hệ sơn chống ch\xe1y.

【Phạm vi ứng dụng】
Sơn l\xf3t bảo vệ l\xe2u d\xe0i cho th\xe9p trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nghi\xeam trọng (C3–C5).

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：Đỏ x\xe1m / x\xe1m
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：10 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：8 h (20 \xb0C)
Điểm bắt lửa：25 \xb0C
Khối lượng ri\xeang：2.3 kg/L
H\xe0m lượng rắn theo thể t\xedch：49 %
Suất sơn l\xfd thuyết：12 m\xb2/L @ 40 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h / 7 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：1 h – 7 d
Bề mặt：Mờ
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 5–10 % \xb7 airless 10 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Bề mặt th\xe9p phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 bẩn. Phun c\xe1t đạt Sa 2.5 (ISO 8501-1), độ nh\xe1m Rugotest No.3 BN9a; loại bỏ bụi trước khi sơn. Bề mặt đặc biệt vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-201 \xd71 lớp（0.10 L/m\xb2）
HN-AC-302 \xd71 lớp（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Imprimaci\xf3n epoxi de dos componentes con curado qu\xedmico y hasta 80 % de zinc met\xe1lico en la pel\xedcula seca. Excelente resistencia a la corrosi\xf3n y a la abrasi\xf3n; tambi\xe9n apta como imprimaci\xf3n para soldadura sobre plancha granallada y como imprimaci\xf3n antioxidante bajo recubrimientos contra fuego.

【Aplicaciones t\xedpicas】
Imprimaci\xf3n protectora de larga duraci\xf3n para acero en corrosividad media a severa (C3–C5).

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Rojo gris\xe1ceo / gris
Relaci\xf3n de mezcla (base : endurecedor)：10 : 1 (en peso)
Vida \xfatil de la mezcla：8 h (20 \xb0C)
Punto de inflamaci\xf3n：25 \xb0C
Densidad：2.3 kg/L
S\xf3lidos en volumen：49 %
Rendimiento te\xf3rico：12 m\xb2/L @ 40 μm DFT
Secado (seco al tacto / curado completo)：1 h / 7 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：1 h – 7 d
Acabado：Mate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 5–10 % \xb7 airless 10 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
El acero debe estar seco, libre de pintura suelta, grasa y suciedad. Realizar granallado hasta Sa 2.5 (ISO 8501-1 / norma sueca), con perfil de superficie Rugotest No.3 BN9a; eliminar el polvo y los abrasivos antes de aplicar el recubrimiento. Para sustratos especiales, consulte a nuestro departamento t\xe9cnico.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-201 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
برايمر (طبقة أولى) إيبوكسي ثنائي العبوة يتصلب كيميائياً ويحتوي حتى 80 % زنك معدني في الغشاء الجاف. مقاومة ممتازة للتآكل والبري؛ ويصلح أيضاً كبرايمر لحام على الصفائح المنظفة بالسفح وكبرايمر مانع للصدأ تحت طلاءات الحماية من الحريق.

【التطبيقات النموذجية】
برايمر (طبقة أولى) للحماية طويلة الأمد للفولاذ في بيئات متوسطة إلى شديدة التآكل (C3–C5).

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：أحمر-رمادي / رمادي
نسبة الخلط (الأساس : مادة التصلب)：10 : 1 (بالوزن)
العمر الاستخدامي للخليط：8 h (20 \xb0C)
نقطة الوميض：25 \xb0C
الكثافة：2.3 kg/L
المواد الصلبة بالحجم：49 %
معدل الانتشار النظري：12 m\xb2/L @ 40 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h / 7 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：1 h – 7 d
التشطيب：مطفي
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 5–10 % \xb7 رش هوائي (airless) 10 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن يكون الفولاذ جافاً وخالياً من الطلاء المفكك والشحوم والأوساخ. نفّذ التنظيف بالسفح الهوائي (السفح الرملي) حتى درجة Sa 2.5 (ISO 8501-1 / المعيار السويدي)، مع خشونة سطح وفق Rugotest No.3 BN9a؛ وأزل الغبار ومواد السفح قبل الطلاء. للركائز الخاصة يُرجى استشارة قسمنا الفني.

【النظام الموصى به (أكواد HN)】
HN-AC-201 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-302 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-302",desc:{en:"Two-pack epoxy with micaceous iron oxide — the workhorse intermediate coat",zh:"云母氧化铁双组份环氧中间漆，体系主力中间层",vi:"Epoxy 2 thành phần chứa mica oxit sắt — lớp giữa chủ lực của hệ thống",es:"Epoxi de dos componentes con óxido de hierro micáceo — la capa intermedia por excelencia",ar:"إيبوكسي ثنائي العبوة بأكسيد الحديد الميكائي — الطبقة الوسطى الرئيسية في النظام"},details:{en:`【Overview】
Two-pack epoxy coating pigmented with micaceous iron oxide. Resistant to sea water, corrosion, impact, mineral oils, aliphatic hydrocarbons and many chemicals; laminar MIO platelets reinforce barrier protection.

【Typical applications】
Primer / intermediate for epoxy systems on steel and concrete; quality intermediate and finish for bridges, car decks and structural steel buildings.

【Physical & application data】
Binder / resin：Epoxy
Colour：Black / grey
Mix ratio (base : hardener)：3 : 1 (by volume) = 5.8 : 1 (by weight)
Pot life：5 h (20 \xb0C)
Flash point：26 \xb0C
Density：1.6 kg/L
Volume solids：48 %
Theoretical spreading rate：10 m\xb2/L @ 48 μm DFT
Drying (touch-dry / full cure)：4 h / 7 d (20 \xb0C)
Recoating interval (min / max)：6 h – 5 d
Finish：Flat
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 5–10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Surface must be clean and free of grease and dirt. When used directly as an anti-rust primer, de-rust the steel first; as intermediate or topcoat, apply over a sound primed surface. Consult our technical desk for special substrates.

【Recommended system (HN codes)】
HN-AC-201 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
以云母氧化铁为颜料配制的双组份环氧漆，具有耐海水、耐腐蚀、抗碰撞、耐矿物油、脂肪烃及多种化学品性能；片状云铁增强屏蔽防护。

【适用范围】
环氧体系在钢铁与混凝土表面的底漆/中间漆；桥梁、车辆甲板、钢结构建筑的优质中间层。

【物理与应用参数】
漆基：环氧树脂
颜色：黑色 / 灰色
混合比例（漆基：固化剂）：3 : 1 （体积比） = 5.8 : 1 （重量比）
混合使用期：5 h (20 \xb0C)
闪点：26 \xb0C
比重：1.6 kg/L
体积固体含量：48 %
理论涂布率：10 m\xb2/L @ 48 μm DFT
干燥时间（表干 / 完全固化）：4 h / 7 d (20 \xb0C)
重涂间隔（最小 / 最大）：6 h – 5 d
漆面：平光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 5–10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
涂装表面必须清洁、无油脂及其他污垢。直接作为防锈底漆使用时须先对钢材除锈；作为中间漆或面漆须涂在完好的底漆表面上。特殊表面处理请向我方技术部门咨询。

【建议油漆配套（HN 型号）】
HN-AC-201 \xd71 遍（0.10 L/m\xb2）
HN-AC-302 \xd71 遍（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn epoxy 2 th\xe0nh phần chứa mica oxit sắt. Chịu nước biển, ăn m\xf2n, va đập, dầu kho\xe1ng, hydrocarbon v\xe0 nhiều h\xf3a chất; l\xe1 mica tăng cường bảo vệ lớp chắn.

【Phạm vi ứng dụng】
Sơn l\xf3t/lớp giữa cho hệ epoxy tr\xean th\xe9p v\xe0 b\xea t\xf4ng; lớp giữa chất lượng cho cầu, s\xe0n xe, nh\xe0 th\xe9p.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：Đen / x\xe1m
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：3 : 1 (theo thể t\xedch) = 5.8 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：5 h (20 \xb0C)
Điểm bắt lửa：26 \xb0C
Khối lượng ri\xeang：1.6 kg/L
H\xe0m lượng rắn theo thể t\xedch：48 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 48 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：4 h / 7 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：6 h – 5 d
Bề mặt：Phẳng
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 5–10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4ng dầu mỡ v\xe0 bẩn. D\xf9ng trực tiếp l\xe0m sơn l\xf3t chống gỉ phải xử l\xfd gỉ trước; l\xe0m sơn lớp giữa hoặc bề mặt phải sơn l\xean lớp l\xf3t tốt. Bề mặt đặc biệt vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-201 \xd71 lớp（0.10 L/m\xb2）
HN-AC-302 \xd71 lớp（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento epoxi de dos componentes pigmentado con \xf3xido de hierro mic\xe1ceo. Resistente al agua de mar, la corrosi\xf3n, el impacto, los aceites minerales, los hidrocarburos alif\xe1ticos y numerosos productos qu\xedmicos; las part\xedculas laminares de MIO refuerzan la protecci\xf3n de barrera.

【Aplicaciones t\xedpicas】
Imprimaci\xf3n / capa intermedia para sistemas epoxi sobre acero y concreto; capa intermedia y acabado de calidad para puentes, cubiertas de veh\xedculos y edificaciones de acero estructural.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Negro / gris
Relaci\xf3n de mezcla (base : endurecedor)：3 : 1 (en volumen) = 5.8 : 1 (en peso)
Vida \xfatil de la mezcla：5 h (20 \xb0C)
Punto de inflamaci\xf3n：26 \xb0C
Densidad：1.6 kg/L
S\xf3lidos en volumen：48 %
Rendimiento te\xf3rico：10 m\xb2/L @ 48 μm DFT
Secado (seco al tacto / curado completo)：4 h / 7 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：6 h – 5 d
Acabado：Mate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 5–10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia y libre de grasa y suciedad. Cuando se use directamente como imprimaci\xf3n antioxidante, eliminar primero el \xf3xido del acero; como capa intermedia o acabado, aplicar sobre una superficie imprimada en buen estado. Para sustratos especiales, consulte a nuestro departamento t\xe9cnico.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-201 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء إيبوكسي ثنائي العبوة مصبوغ بأكسيد الحديد الميكائي. يقاوم مياه البحر والتآكل والصدمات والزيوت المعدنية والهيدروكربونات الأليفاتية وكثيراً من الكيماويات؛ ورقائق MIO الصفائحية تعزز الحماية الحاجزة.

【التطبيقات النموذجية】
برايمر (طبقة أولى) / طبقة وسطى لأنظمة الإيبوكسي على الفولاذ والخرسانة؛ وطبقة وسطى ونهائية عالية الجودة للجسور وأرصفة المركبات والمباني الهيكلية الفولاذية.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：أسود / رمادي
نسبة الخلط (الأساس : مادة التصلب)：3 : 1 (بالحجم) = 5.8 : 1 (بالوزن)
العمر الاستخدامي للخليط：5 h (20 \xb0C)
نقطة الوميض：26 \xb0C
الكثافة：1.6 kg/L
المواد الصلبة بالحجم：48 %
معدل الانتشار النظري：10 m\xb2/L @ 48 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：4 h / 7 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：6 h – 5 d
التشطيب：مطفي تماماً
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 5–10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن يكون السطح نظيفاً وخالياً من الشحوم والأوساخ. عند استخدامه مباشرة كبرايمر (طبقة أولى) مانع للصدأ، أزل الصدأ عن الفولاذ أولاً؛ وعند استخدامه كطبقة وسطى أو نهائية يُطبَّق فوق سطح مُبرايمَر سليم. للركائز الخاصة يُرجى استشارة قسمنا الفني.

【النظام الموصى به (أكواد HN)】
HN-AC-201 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-302 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-405",desc:{en:"Two-pack PU finish with gloss & colour retention, non-yellowing",zh:"双组份聚氨酯面漆，保光保色、不泛黄",vi:"Sơn phủ PU 2 thành phần, giữ bóng giữ màu, không ố vàng",es:"Acabado de PU de dos componentes con retención de brillo y color, sin amarilleo",ar:"طبقة نهائية بولي يوريثان ثنائي العبوة بثبات المعان واللون ودون اصفرار"},details:{en:`【Overview】
Two-pack polyurethane finish with outstanding gloss and colour retention. Resistant to water, animal and vegetable oils, abrasion, impact and UV — for medium to severe corrosive environments. Non-yellowing chemical-resistant finish over epoxy primers/intermediates.

【Typical applications】
Long-term decorative-protective finish on steel in severe environments; also on non-ferrous metal, concrete, cement, timber, pipework and GRP.

【Physical & application data】
Binder / resin：Acrylic polyurethane
Colour：Wide colour range
Mix ratio (base : hardener)：9 : 1 (by volume) = 10 : 1 (by weight)
Pot life：3 h (20 \xb0C)
Flash point：31 \xb0C
Density：1.2 kg/L
Volume solids：42 %
Theoretical spreading rate：10 m\xb2/L @ 42 μm DFT
Drying (touch-dry / full cure)：5 h / 7 d (20 \xb0C)
Recoating interval (min / max)：8 h – 7 d
Finish：Semi-gloss / gloss
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 15–20 % \xb7 airless 5 % \xb7 spray 30 %
Cleaner：Matched HN PU thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
HN-AC-201 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-405 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份聚氨酯涂料，具有优异的保光及保色性；耐水、耐动植物油、耐磨损、抗碰撞、抗紫外线，适宜中等至严重腐蚀环境。作为不泛黄耐化学品面漆涂于环氧底漆或中间漆上。

【适用范围】
严重腐蚀环境中钢结构的长效保护装饰面漆；也可用于有色金属、混凝土、水泥、木材、管道及玻璃钢表面。

【物理与应用参数】
漆基：丙烯酸聚氨酯
颜色：多种颜色
混合比例（漆基：固化剂）：9 : 1 （体积比） = 10 : 1 （重量比）
混合使用期：3 h (20 \xb0C)
闪点：31 \xb0C
比重：1.2 kg/L
体积固体含量：42 %
理论涂布率：10 m\xb2/L @ 42 μm DFT
干燥时间（表干 / 完全固化）：5 h / 7 d (20 \xb0C)
重涂间隔（最小 / 最大）：8 h – 7 d
漆面：半光 / 亮光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 15–20 % \xb7 无气喷涂 5 % \xb7 喷涂 30 %
清洗剂：HN 配套聚氨酯稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
HN-AC-201 \xd71 遍（0.10 L/m\xb2）
HN-AC-302 \xd71 遍（0.10 L/m\xb2）
HN-AC-405 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn phủ polyurethane 2 th\xe0nh phần giữ độ b\xf3ng v\xe0 m\xe0u vượt trội. Chịu nước, dầu động/thực vật, m\xe0i m\xf2n, va đập v\xe0 tia UV — cho m\xf4i trường ăn m\xf2n trung b\xecnh đến nghi\xeam trọng. Lớp phủ kh\xf4ng ố v\xe0ng tr\xean sơn l\xf3t/lớp giữa epoxy.

【Phạm vi ứng dụng】
Lớp phủ trang tr\xed-bảo vệ l\xe2u d\xe0i tr\xean th\xe9p m\xf4i trường nghi\xeam trọng; d\xf9ng cả tr\xean kim loại m\xe0u, b\xea t\xf4ng, xi măng, gỗ, ống v\xe0 composite.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Acrylic-polyurethane
M\xe0u sắc：Nhiều m\xe0u
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：9 : 1 (theo thể t\xedch) = 10 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：3 h (20 \xb0C)
Điểm bắt lửa：31 \xb0C
Khối lượng ri\xeang：1.2 kg/L
H\xe0m lượng rắn theo thể t\xedch：42 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 42 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：5 h / 7 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：8 h – 7 d
Bề mặt：B\xe1n b\xf3ng / b\xf3ng
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 15–20 % \xb7 airless 5 % \xb7 phun 30 %
Dung dịch vệ sinh：Dung m\xf4i PU HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-201 \xd71 lớp（0.10 L/m\xb2）
HN-AC-302 \xd71 lớp（0.10 L/m\xb2）
HN-AC-405 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado de poliuretano de dos componentes con excelente retenci\xf3n de brillo y color. Resistente al agua, los aceites animales y vegetales, la abrasi\xf3n, el impacto y los rayos UV — para ambientes corrosivos de media a alta severidad. Acabado resistente a productos qu\xedmicos y sin amarilleo sobre imprimaciones/capas intermedias epoxi.

【Aplicaciones t\xedpicas】
Acabado decorativo-protector de larga duraci\xf3n sobre acero en ambientes severos; tambi\xe9n sobre metales no ferrosos, concreto, cemento, madera, tuber\xedas y GRP.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Poliuretano acr\xedlico
Color：Amplia gama de colores
Relaci\xf3n de mezcla (base : endurecedor)：9 : 1 (en volumen) = 10 : 1 (en peso)
Vida \xfatil de la mezcla：3 h (20 \xb0C)
Punto de inflamaci\xf3n：31 \xb0C
Densidad：1.2 kg/L
S\xf3lidos en volumen：42 %
Rendimiento te\xf3rico：10 m\xb2/L @ 42 μm DFT
Secado (seco al tacto / curado completo)：5 h / 7 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：8 h – 7 d
Acabado：Semibrillante / brillante
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 15–20 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 30 %
Limpiador：Diluyente HN PU correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-201 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-405 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طبقة نهائية بولي يوريثان ثنائي العبوة بثبات ممتاز للمعان واللون. تقاوم الماء والزيوت الحيوانية والنباتية والبري والصدمات والأشعة فوق البنفسجية — للبيئات المتوسطة إلى شديدة التآكل. طبقة نهائية مقاومة للكيماويات وغير مصفرة فوق برايمرات/طبقات وسطى الإيبوكسي.

【التطبيقات النموذجية】
طبقة نهائية زخرفية واقية طويلة الأمد للفولاذ في البيئات الشديدة؛ وتُستخدم أيضاً على المعادن غير الحديدية والخرسانة والأسمنت والأخشاب والأنابيب وGRP.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：بولي يوريثان أكريليك
اللون：مدى ألوان واسع
نسبة الخلط (الأساس : مادة التصلب)：9 : 1 (بالحجم) = 10 : 1 (بالوزن)
العمر الاستخدامي للخليط：3 h (20 \xb0C)
نقطة الوميض：31 \xb0C
الكثافة：1.2 kg/L
المواد الصلبة بالحجم：42 %
معدل الانتشار النظري：10 m\xb2/L @ 42 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：5 h / 7 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：8 h – 7 d
التشطيب：نصف لامع / لامع
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 15–20 % \xb7 رش هوائي (airless) 5 % \xb7 رش 30 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للبولي يوريثان

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
HN-AC-201 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-302 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-405 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-501",desc:{en:"High-build epoxy glass-flake coating with strong barrier effect",zh:"高膜厚环氧玻璃鳞片涂料，屏蔽性强",vi:"Sơn epoxy vảy thủy tinh độ dày cao, lớp chắn mạnh",es:"Recubrimiento epoxi de alto espesor con escamas de vidrio y fuerte efecto de barrera",ar:"طلاء إيبوكسي عالي السماكة برقائق زجاجية بتأثير حاجز قوي"},details:{en:`【Overview】
Two-pack epoxy coating loaded with glass flakes: the cured film forms a strong barrier that blocks penetration of corrosive media. Excellent adhesion, durability, impact resistance, water / brine / oil / alkali resistance and moderate acid resistance. High solids allow thick-film application.

【Typical applications】
Heavy-duty anti-corrosion systems for steel structures and concrete structures.

【Physical & application data】
Binder / resin：Epoxy (glass-flake)
Colour：On request
Mix ratio (base : hardener)：By supply batch (see drum label)
Pot life：See TDS
Packaging：Base 25 kg / hardener 2.5 kg kits
Application methods：Airless spray \xb7 brush
Thinner (max, by method)：As instructed per batch
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Steel must be dry, free of loose paint, grease and dirt. Abrasive blast to Sa 2.5 (ISO 8501-1 / Swedish standard), surface profile Rugotest No.3 BN9a; remove dust and abrasives before coating. For special substrates consult our technical desk.

【Recommended system (HN codes)】
HN-AC-201 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-501 \xd72 coat(s)（per spec）
HN-AC-405 \xd71 coat(s)（0.10 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
由环氧树脂、玻璃鳞片、颜料、固化剂、助剂和稀释剂等组成的双组份涂料。成膜后屏蔽性强，能有效阻止腐蚀介质的渗透，达到隔离防锈目的；附着力、耐久性、抗冲击性优良，耐水、耐盐水、耐油、耐碱并有一定耐酸性。固体份高，可作厚膜施工。

【适用范围】
钢结构及混凝土构筑物的重防腐涂装体系。

【物理与应用参数】
漆基：环氧（玻璃鳞片）
颜色：按需
混合比例（漆基：固化剂）：按供货批次（见桶身标签）
混合使用期：见 TDS
包装：漆基 25 kg / 固化剂 2.5 kg 组合装
施工方法：无气喷涂 \xb7 刷涂
稀释剂（最大用量）：按批次说明
清洗剂：HN 配套环氧稀释剂

【表面处理】
钢铁表面必须干燥，无松散漆层、油脂及其他污垢。喷砂处理至瑞典标准 Sa2.5 级，表面粗糙度达 Rugotest No.3 BN9a；涂装前除去尘埃及砂粒。特殊表面处理请向我方技术部门咨询。

【建议油漆配套（HN 型号）】
HN-AC-201 \xd71 遍（0.10 L/m\xb2）
HN-AC-501 \xd72 遍（per spec）
HN-AC-405 \xd71 遍（0.10 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn epoxy 2 th\xe0nh phần chứa vảy thủy tinh: m\xe0ng đ\xf3ng rắn tạo lớp chắn mạnh, ngăn m\xf4i trường ăn m\xf2n thấm qua. B\xe1m d\xednh, độ bền, chống va đập tốt; chịu nước, nước muối, dầu, kiềm v\xe0 axit ở mức độ nhất định. H\xe0m lượng rắn cao, c\xf3 thể sơn d\xe0y.

【Phạm vi ứng dụng】
Hệ chống ăn m\xf2n hạng nặng cho kết cấu th\xe9p v\xe0 b\xea t\xf4ng.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy (vảy thủy tinh)
M\xe0u sắc：Theo y\xeau cầu
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：Theo l\xf4 cung cấp (xem nh\xe3n th\xf9ng)
Thời gian sử dụng hỗn hợp：Xem TDS
Đ\xf3ng g\xf3i：Đế 25 kg / chất đ\xf3ng rắn 2,5 kg
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ
Dung m\xf4i pha (tối đa)：Theo hướng dẫn từng l\xf4
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Bề mặt th\xe9p phải kh\xf4, kh\xf4ng c\xf3 sơn bong tr\xf3c, dầu mỡ v\xe0 bẩn. Phun c\xe1t đạt Sa 2.5 (ISO 8501-1), độ nh\xe1m Rugotest No.3 BN9a; loại bỏ bụi trước khi sơn. Bề mặt đặc biệt vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-201 \xd71 lớp（0.10 L/m\xb2）
HN-AC-501 \xd72 lớp（per spec）
HN-AC-405 \xd71 lớp（0.10 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento epoxi de dos componentes cargado con escamas de vidrio: la pel\xedcula curada forma una barrera s\xf3lida que bloquea la penetraci\xf3n de los medios corrosivos. Excelente adherencia, durabilidad y resistencia al impacto y al agua / salmuera / aceite / \xe1lcali, y moderada resistencia a los \xe1cidos. Su alto contenido de s\xf3lidos permite la aplicaci\xf3n en pel\xedcula gruesa.

【Aplicaciones t\xedpicas】
Sistemas anticorrosivos de servicio pesado para estructuras de acero y estructuras de concreto.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi (escamas de vidrio)
Color：A pedido
Relaci\xf3n de mezcla (base : endurecedor)：Seg\xfan el lote de suministro (ver etiqueta del bid\xf3n)
Vida \xfatil de la mezcla：Ver TDS
Envase：Kits de base 25 kg / endurecedor 2.5 kg
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Seg\xfan las indicaciones de cada lote
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
El acero debe estar seco, libre de pintura suelta, grasa y suciedad. Realizar granallado hasta Sa 2.5 (ISO 8501-1 / norma sueca), con perfil de superficie Rugotest No.3 BN9a; eliminar el polvo y los abrasivos antes de aplicar el recubrimiento. Para sustratos especiales, consulte a nuestro departamento t\xe9cnico.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-201 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-501 \xd72 capa(s)（per spec）
HN-AC-405 \xd71 capa(s)（0.10 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء إيبوكسي ثنائي العبوة محمّل برقائق الزجاج: يشكّل الغشاء المتصلد حاجزاً قوياً يمنع نفاذ الوسائط المسببة للتآكل. التصاق ممتاز ومتانة ومقاومة للصدمات ومقاومة للماء/المياه المالحة/الزيوت/القلويات ومقاومة معتدلة للأحماض. نسبة مواد صلبة عالية تتيح التطبيق بغشاء سميك.

【التطبيقات النموذجية】
أنظمة حماية ثقيلة من التآكل للهياكل الفولاذية والمنشآت الخرسانية.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي (رقائق زجاجية)
اللون：عند الطلب
نسبة الخلط (الأساس : مادة التصلب)：بحسب دفعة التوريد (انظر ملصق البرميل)
العمر الاستخدامي للخليط：انظر ورقة TDS
التعبئة：عبوات: أساس 25 kg / مادة تصلب 2.5 kg
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：حسب تعليمات كل دفعة
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن يكون الفولاذ جافاً وخالياً من الطلاء المفكك والشحوم والأوساخ. نفّذ التنظيف بالسفح الهوائي (السفح الرملي) حتى درجة Sa 2.5 (ISO 8501-1 / المعيار السويدي)، مع خشونة سطح وفق Rugotest No.3 BN9a؛ وأزل الغبار ومواد السفح قبل الطلاء. للركائز الخاصة يُرجى استشارة قسمنا الفني.

【النظام الموصى به (أكواد HN)】
HN-AC-201 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-501 \xd72 طبقة/طبقات（per spec）
HN-AC-405 \xd71 طبقة/طبقات（0.10 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-601",desc:{en:"Two-pack epoxy anti-rust primer, iron-oxide red",zh:"双组份环氧防锈底漆，铁红色",vi:"Sơn lót chống gỉ epoxy 2 thành phần, màu đỏ sắt",es:"Imprimación epoxi antioxidante de dos componentes, rojo óxido de hierro",ar:"برايمر (طبقة أولى) إيبوكسي ثنائي العبوة مانع للصدأ، باللون الأحمر أكسيد الحديد"},details:{en:`【Overview】
Two-pack chemically curing epoxy primer with excellent corrosion and abrasion resistance for long-term protection of steel in medium to severe corrosivity.

【Typical applications】
Long-term protective primer on steel in medium to severe corrosive environments.

【Physical & application data】
Binder / resin：Epoxy
Colour：Iron-oxide red
Mix ratio (base : hardener)：4 : 1 (by volume) = 8.1 : 1 (by weight)
Pot life：8 h (20 \xb0C)
Flash point：25 \xb0C
Density：1.7 kg/L
Volume solids：49 %
Theoretical spreading rate：10 m\xb2/L @ 40 μm DFT
Drying (touch-dry / full cure)：4 h / 7 d (20 \xb0C)
Recoating interval (min / max)：1 h – 7 d
Finish：Matt
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 5–10 % \xb7 airless 5 % \xb7 spray 20 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Steel must be clean and dry, free of loose paint, grease and dirt. Abrasive blast to Sa 2.0; remove dust before coating. For special substrates consult our technical desk.

【Recommended system (HN codes)】
HN-AC-601 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份化学固化干燥型环氧底漆，具有优异的防腐蚀及耐磨损性能，作为长效保护底漆用于中等至严重腐蚀环境中的钢材表面。

【适用范围】
中等至严重腐蚀环境中钢材表面的长效保护底漆。

【物理与应用参数】
漆基：环氧树脂
颜色：铁红色
混合比例（漆基：固化剂）：4 : 1 （体积比） = 8.1 : 1 （重量比）
混合使用期：8 h (20 \xb0C)
闪点：25 \xb0C
比重：1.7 kg/L
体积固体含量：49 %
理论涂布率：10 m\xb2/L @ 40 μm DFT
干燥时间（表干 / 完全固化）：4 h / 7 d (20 \xb0C)
重涂间隔（最小 / 最大）：1 h – 7 d
漆面：哑光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 5–10 % \xb7 无气喷涂 5 % \xb7 喷涂 20 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
钢铁表面必须清洁干燥，无松散漆层、油脂及其他污垢。喷砂处理至 Sa 2.0 级，涂装前除去尘埃。特殊表面处理请向我方技术部门咨询。

【建议油漆配套（HN 型号）】
HN-AC-601 \xd71 遍（0.10 L/m\xb2）
HN-AC-302 \xd71 遍（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn l\xf3t epoxy 2 th\xe0nh phần h\xf3a đ\xf3ng rắn, chống ăn m\xf2n v\xe0 m\xe0i m\xf2n xuất sắc, bảo vệ th\xe9p l\xe2u d\xe0i trong m\xf4i trường ăn m\xf2n trung b\xecnh đến nghi\xeam trọng.

【Phạm vi ứng dụng】
Sơn l\xf3t bảo vệ l\xe2u d\xe0i tr\xean th\xe9p m\xf4i trường ăn m\xf2n trung b\xecnh đến nghi\xeam trọng.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：Đỏ sắt
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：4 : 1 (theo thể t\xedch) = 8.1 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：8 h (20 \xb0C)
Điểm bắt lửa：25 \xb0C
Khối lượng ri\xeang：1.7 kg/L
H\xe0m lượng rắn theo thể t\xedch：49 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 40 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：4 h / 7 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：1 h – 7 d
Bề mặt：Mờ
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 5–10 % \xb7 airless 5 % \xb7 phun 20 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Bề mặt th\xe9p phải sạch v\xe0 kh\xf4, kh\xf4ng c\xf3 sơn bong, dầu mỡ, bẩn. Phun c\xe1t đạt Sa 2.0; loại bỏ bụi trước khi sơn. Bề mặt đặc biệt vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-601 \xd71 lớp（0.10 L/m\xb2）
HN-AC-302 \xd71 lớp（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Imprimaci\xf3n epoxi de dos componentes con curado qu\xedmico, excelente resistencia a la corrosi\xf3n y a la abrasi\xf3n, para la protecci\xf3n de larga duraci\xf3n del acero en corrosividad media a severa.

【Aplicaciones t\xedpicas】
Imprimaci\xf3n protectora de larga duraci\xf3n sobre acero en ambientes corrosivos de media a alta severidad.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Rojo \xf3xido de hierro
Relaci\xf3n de mezcla (base : endurecedor)：4 : 1 (en volumen) = 8.1 : 1 (en peso)
Vida \xfatil de la mezcla：8 h (20 \xb0C)
Punto de inflamaci\xf3n：25 \xb0C
Densidad：1.7 kg/L
S\xf3lidos en volumen：49 %
Rendimiento te\xf3rico：10 m\xb2/L @ 40 μm DFT
Secado (seco al tacto / curado completo)：4 h / 7 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：1 h – 7 d
Acabado：Mate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 5–10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 20 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
El acero debe estar limpio y seco, libre de pintura suelta, grasa y suciedad. Realizar granallado hasta Sa 2.0; eliminar el polvo antes de aplicar el recubrimiento. Para sustratos especiales, consulte a nuestro departamento t\xe9cnico.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-601 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
برايمر (طبقة أولى) إيبوكسي ثنائي العبوة يتصلب كيميائياً، بمقاومة ممتازة للتآكل والبري للحماية طويلة الأمد للفولاذ في بيئات متوسطة إلى شديدة التآكل.

【التطبيقات النموذجية】
برايمر (طبقة أولى) للحماية طويلة الأمد للفولاذ في بيئات متوسطة إلى شديدة التآكل.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：أحمر أكسيد الحديد
نسبة الخلط (الأساس : مادة التصلب)：4 : 1 (بالحجم) = 8.1 : 1 (بالوزن)
العمر الاستخدامي للخليط：8 h (20 \xb0C)
نقطة الوميض：25 \xb0C
الكثافة：1.7 kg/L
المواد الصلبة بالحجم：49 %
معدل الانتشار النظري：10 m\xb2/L @ 40 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：4 h / 7 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：1 h – 7 d
التشطيب：مطفي
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 5–10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 20 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن يكون الفولاذ نظيفاً وجافاً وخالياً من الطلاء المفكك والشحوم والأوساخ. نفّذ التنظيف بالسفح حتى درجة Sa 2.0؛ وأزل الغبار قبل الطلاء. للركائز الخاصة يُرجى استشارة قسمنا الفني.

【النظام الموصى به (أكواد HN)】
HN-AC-601 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-302 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-602",desc:{en:"Two-pack high-build epoxy, wide colour range",zh:"双组份环氧厚浆漆，颜色丰富",vi:"Sơn epoxy dày 2 thành phần, đa màu",es:"Epoxi de alto espesor de dos componentes, amplia gama de colores",ar:"إيبوكسي عالي السماكة ثنائي العبوة، بمدى ألوان واسع"},details:{en:`【Overview】
Two-pack epoxy high-build coating in a wide colour range. Resistant to sea water, corrosion, impact, mineral oils, aliphatic hydrocarbons and many chemicals.

【Typical applications】
Primer / intermediate for epoxy systems on steel and concrete; intermediate/finish on bridges, decks and structural steel.

【Physical & application data】
Binder / resin：Epoxy
Colour：White, grey and other colours
Mix ratio (base : hardener)：3 : 1 (by volume) = 4.7 : 1 (by weight)
Pot life：5 h (20 \xb0C)
Flash point：26 \xb0C
Density：1.4 kg/L
Volume solids：48 %
Theoretical spreading rate：10 m\xb2/L @ 48 μm DFT
Drying (touch-dry / full cure)：4 h / 7 d (20 \xb0C)
Recoating interval (min / max)：6 h – 5 d
Finish：Flat
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 5–10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Surface must be clean and free of grease and dirt. When used directly as an anti-rust primer, de-rust the steel first; as intermediate or topcoat, apply over a sound primed surface. Consult our technical desk for special substrates.

【Recommended system (HN codes)】
HN-AC-201 | HN-AC-601 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-602 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
可提供各种颜色的双组份环氧厚浆漆，具有耐海水、耐腐蚀、抗碰撞、耐矿物油、脂肪烃及多种化学品性能。

【适用范围】
环氧体系在钢铁与混凝土表面的底漆/中间漆；桥梁、甲板及钢结构的中间层/面漆。

【物理与应用参数】
漆基：环氧树脂
颜色：白色、灰色等多种颜色
混合比例（漆基：固化剂）：3 : 1 （体积比） = 4.7 : 1 （重量比）
混合使用期：5 h (20 \xb0C)
闪点：26 \xb0C
比重：1.4 kg/L
体积固体含量：48 %
理论涂布率：10 m\xb2/L @ 48 μm DFT
干燥时间（表干 / 完全固化）：4 h / 7 d (20 \xb0C)
重涂间隔（最小 / 最大）：6 h – 5 d
漆面：平光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 5–10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
涂装表面必须清洁、无油脂及其他污垢。直接作为防锈底漆使用时须先对钢材除锈；作为中间漆或面漆须涂在完好的底漆表面上。特殊表面处理请向我方技术部门咨询。

【建议油漆配套（HN 型号）】
HN-AC-201 | HN-AC-601 \xd71 遍（0.10 L/m\xb2）
HN-AC-602 \xd71 遍（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn epoxy d\xe0y 2 th\xe0nh phần, đa m\xe0u. Chịu nước biển, ăn m\xf2n, va đập, dầu kho\xe1ng, hydrocarbon v\xe0 nhiều h\xf3a chất.

【Phạm vi ứng dụng】
Sơn l\xf3t/lớp giữa hệ epoxy tr\xean th\xe9p v\xe0 b\xea t\xf4ng; lớp giữa/bề mặt cho cầu, s\xe0n v\xe0 kết cấu th\xe9p.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：Trắng, x\xe1m v\xe0 m\xe0u kh\xe1c
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：3 : 1 (theo thể t\xedch) = 4.7 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：5 h (20 \xb0C)
Điểm bắt lửa：26 \xb0C
Khối lượng ri\xeang：1.4 kg/L
H\xe0m lượng rắn theo thể t\xedch：48 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 48 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：4 h / 7 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：6 h – 5 d
Bề mặt：Phẳng
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 5–10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4ng dầu mỡ v\xe0 bẩn. D\xf9ng trực tiếp l\xe0m sơn l\xf3t chống gỉ phải xử l\xfd gỉ trước; l\xe0m sơn lớp giữa hoặc bề mặt phải sơn l\xean lớp l\xf3t tốt. Bề mặt đặc biệt vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-201 | HN-AC-601 \xd71 lớp（0.10 L/m\xb2）
HN-AC-602 \xd71 lớp（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento epoxi de alto espesor de dos componentes en amplia gama de colores. Resistente al agua de mar, la corrosi\xf3n, el impacto, los aceites minerales, los hidrocarburos alif\xe1ticos y numerosos productos qu\xedmicos.

【Aplicaciones t\xedpicas】
Imprimaci\xf3n / capa intermedia para sistemas epoxi sobre acero y concreto; capa intermedia/acabado sobre puentes, cubiertas y acero estructural.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Blanco, gris y otros colores
Relaci\xf3n de mezcla (base : endurecedor)：3 : 1 (en volumen) = 4.7 : 1 (en peso)
Vida \xfatil de la mezcla：5 h (20 \xb0C)
Punto de inflamaci\xf3n：26 \xb0C
Densidad：1.4 kg/L
S\xf3lidos en volumen：48 %
Rendimiento te\xf3rico：10 m\xb2/L @ 48 μm DFT
Secado (seco al tacto / curado completo)：4 h / 7 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：6 h – 5 d
Acabado：Mate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 5–10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia y libre de grasa y suciedad. Cuando se use directamente como imprimaci\xf3n antioxidante, eliminar primero el \xf3xido del acero; como capa intermedia o acabado, aplicar sobre una superficie imprimada en buen estado. Para sustratos especiales, consulte a nuestro departamento t\xe9cnico.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-201 | HN-AC-601 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-602 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء إيبوكسي ثنائي العبوة عالي السماكة بمدى ألوان واسع. يقاوم مياه البحر والتآكل والصدمات والزيوت المعدنية والهيدروكربونات الأليفاتية وكثيراً من الكيماويات.

【التطبيقات النموذجية】
برايمر (طبقة أولى) / طبقة وسطى لأنظمة الإيبوكسي على الفولاذ والخرسانة؛ وطبقة وسطى/نهائية على الجسور والأرصفة والهياكل الفولاذية.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：أبيض ورمادي وألوان أخرى
نسبة الخلط (الأساس : مادة التصلب)：3 : 1 (بالحجم) = 4.7 : 1 (بالوزن)
العمر الاستخدامي للخليط：5 h (20 \xb0C)
نقطة الوميض：26 \xb0C
الكثافة：1.4 kg/L
المواد الصلبة بالحجم：48 %
معدل الانتشار النظري：10 m\xb2/L @ 48 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：4 h / 7 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：6 h – 5 d
التشطيب：مطفي تماماً
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 5–10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن يكون السطح نظيفاً وخالياً من الشحوم والأوساخ. عند استخدامه مباشرة كبرايمر (طبقة أولى) مانع للصدأ، أزل الصدأ عن الفولاذ أولاً؛ وعند استخدامه كطبقة وسطى أو نهائية يُطبَّق فوق سطح مُبرايمَر سليم. للركائز الخاصة يُرجى استشارة قسمنا الفني.

【النظام الموصى به (أكواد HN)】
HN-AC-201 | HN-AC-601 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-602 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-405 | HN-AC-607 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-603",desc:{en:"Low-viscosity epoxy primer that penetrates and locks residual rust on hard-to-blast surfaces",zh:"低粘度环氧底漆，渗透并固化残余锈蚀，适用于难喷砂表面",vi:"Sơn lót epoxy độ nhớt thấp, thấm và khóa gỉ còn lại trên bề mặt khó phun cát",es:"Imprimación epoxi de baja viscosidad que penetra y fija el óxido residual en superficies difíciles de granallar",ar:"برايمر (طبقة أولى) إيبوكسي منخفض اللزوجة يخترق الصدأ المتبقي ويحبسه على الأسطح التي يصعب سفحها"},details:{en:`【Overview】
Two-pack epoxy primer with outstanding penetration: the wet paint soaks into the steel surface and incorporates residual rust into the film — surface-tolerant application where thorough blast cleaning is impractical, improving work efficiency.

【Typical applications】
Primer on hand / power-tool cleaned steel; red-lead-type anti-rust duty where rust removal is incomplete.

【Physical & application data】
Binder / resin：Epoxy
Colour：Red-brown
Mix ratio (base : hardener)：5 : 1 (by weight)
Pot life：5 h (20 \xb0C)
Density：1.6 kg/L
Volume solids：48 %
Theoretical spreading rate：10 m\xb2/L @ 48 μm DFT
Drying (touch-dry / full cure)：4 h / 7 d (20 \xb0C)
Recoating interval (min / max)：6 h – 5 d
Finish：Flat
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 5–10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Surface must be clean and free of grease and dirt. When used directly as an anti-rust primer, de-rust the steel first; as intermediate or topcoat, apply over a sound primed surface. Consult our technical desk for special substrates.

【Recommended system (HN codes)】
HN-AC-603 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-602 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-607 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份环氧封闭底漆，渗透能力优异：涂装后的漆液能渗进钢铁表面并把未除尽的锈蚀物转化为漆膜的一部分，实现带锈涂装，在难以彻底喷砂的表面提高施工效率。

【适用范围】
作为底漆涂于手工及动力工具除锈的钢铁表面；除锈要求不高的表面，即使除锈不彻底也可涂装并达到防锈防腐效果。

【物理与应用参数】
漆基：环氧树脂
颜色：红褐色
混合比例（漆基：固化剂）：5 : 1 （重量比）
混合使用期：5 h (20 \xb0C)
比重：1.6 kg/L
体积固体含量：48 %
理论涂布率：10 m\xb2/L @ 48 μm DFT
干燥时间（表干 / 完全固化）：4 h / 7 d (20 \xb0C)
重涂间隔（最小 / 最大）：6 h – 5 d
漆面：平光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 5–10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
涂装表面必须清洁、无油脂及其他污垢。直接作为防锈底漆使用时须先对钢材除锈；作为中间漆或面漆须涂在完好的底漆表面上。特殊表面处理请向我方技术部门咨询。

【建议油漆配套（HN 型号）】
HN-AC-603 \xd71 遍（0.10 L/m\xb2）
HN-AC-602 \xd71 遍（0.10 L/m\xb2）
HN-AC-607 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn l\xf3t epoxy 2 th\xe0nh phần thấm s\xe2u: sơn ướt ngấm v\xe0o bề mặt th\xe9p v\xe0 biến gỉ c\xf2n lại th\xe0nh một phần m\xe0ng sơn — sơn được tr\xean bề mặt kh\xf3 phun c\xe1t ho\xe0n to\xe0n, n\xe2ng cao hiệu quả thi c\xf4ng.

【Phạm vi ứng dụng】
Sơn l\xf3t tr\xean th\xe9p l\xe0m sạch bằng tay/dụng cụ; nhiệm vụ chống gỉ kiểu ch\xec đỏ tr\xean bề mặt kh\xf4ng cần xử l\xfd gỉ triệt để.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：N\xe2u đỏ
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：5 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：5 h (20 \xb0C)
Khối lượng ri\xeang：1.6 kg/L
H\xe0m lượng rắn theo thể t\xedch：48 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 48 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：4 h / 7 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：6 h – 5 d
Bề mặt：Phẳng
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 5–10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4ng dầu mỡ v\xe0 bẩn. D\xf9ng trực tiếp l\xe0m sơn l\xf3t chống gỉ phải xử l\xfd gỉ trước; l\xe0m sơn lớp giữa hoặc bề mặt phải sơn l\xean lớp l\xf3t tốt. Bề mặt đặc biệt vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-603 \xd71 lớp（0.10 L/m\xb2）
HN-AC-602 \xd71 lớp（0.10 L/m\xb2）
HN-AC-607 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Imprimaci\xf3n epoxi de dos componentes con excelente poder de penetraci\xf3n: la pintura h\xfameda se impregna en la superficie del acero e incorpora el \xf3xido residual a la pel\xedcula — aplicaci\xf3n tolerante al estado de la superficie donde un granallado exhaustivo resulta inviable, lo que mejora la eficiencia del trabajo.

【Aplicaciones t\xedpicas】
Imprimaci\xf3n sobre acero limpiado a mano / con herramienta mec\xe1nica; funci\xf3n antioxidante de tipo minio donde la eliminaci\xf3n del \xf3xido es incompleta.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Rojo marr\xf3n
Relaci\xf3n de mezcla (base : endurecedor)：5 : 1 (en peso)
Vida \xfatil de la mezcla：5 h (20 \xb0C)
Densidad：1.6 kg/L
S\xf3lidos en volumen：48 %
Rendimiento te\xf3rico：10 m\xb2/L @ 48 μm DFT
Secado (seco al tacto / curado completo)：4 h / 7 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：6 h – 5 d
Acabado：Mate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 5–10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia y libre de grasa y suciedad. Cuando se use directamente como imprimaci\xf3n antioxidante, eliminar primero el \xf3xido del acero; como capa intermedia o acabado, aplicar sobre una superficie imprimada en buen estado. Para sustratos especiales, consulte a nuestro departamento t\xe9cnico.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-603 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-602 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-607 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
برايمر (طبقة أولى) إيبوكسي ثنائي العبوة بقدرة اختراق ممتازة: يتشرب الطلاء الرطب سطح الفولاذ ويدمج الصدأ المتبقي في الغشاء — تطبيق متسامح مع السطح حيث يتعذر السفح الكامل، بما يرفع كفاءة العمل.

【التطبيقات النموذجية】
برايمر (طبقة أولى) على الفولاذ المنظف يدوياً أو بالأدوات الكهربائية؛ وبأداء مانع للصدأ يعادل طلاءات الرصاص الأحمر حيث تكون إزالة الصدأ غير كاملة.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：أحمر بنّي
نسبة الخلط (الأساس : مادة التصلب)：5 : 1 (بالوزن)
العمر الاستخدامي للخليط：5 h (20 \xb0C)
الكثافة：1.6 kg/L
المواد الصلبة بالحجم：48 %
معدل الانتشار النظري：10 m\xb2/L @ 48 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：4 h / 7 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：6 h – 5 d
التشطيب：مطفي تماماً
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 5–10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن يكون السطح نظيفاً وخالياً من الشحوم والأوساخ. عند استخدامه مباشرة كبرايمر (طبقة أولى) مانع للصدأ، أزل الصدأ عن الفولاذ أولاً؛ وعند استخدامه كطبقة وسطى أو نهائية يُطبَّق فوق سطح مُبرايمَر سليم. للركائز الخاصة يُرجى استشارة قسمنا الفني.

【النظام الموصى به (أكواد HN)】
HN-AC-603 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-602 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-607 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-604",desc:{en:"Two-pack epoxy finish — strong adhesion, chemical and water resistance",zh:"双组份环氧防腐面漆，附着力强、耐化学品耐水",vi:"Sơn phủ epoxy 2 thành phần — bám dính mạnh, chịu hóa chất và nước",es:"Acabado epoxi de dos componentes — fuerte adherencia, resistencia química y al agua",ar:"طبقة نهائية إيبوكسي ثنائية العبوة — التصاق قوي ومقاومة للكيماويات والماء"},details:{en:`【Overview】
Two-pack anti-corrosion epoxy finish (base + curing agent). Strong adhesion to most substrates, mechanical properties per national standards, high solids with low VOC, resistant to water, oils, solvents, acids, alkalis, sea water and salt spray; compatible under acrylic, PU and fluorocarbon topcoats.

【Typical applications】
Steel structures, bridges, machinery and concrete surfaces.

【Physical & application data】
Binder / resin：Epoxy
Colour：Wide colour range
Mix ratio (base : hardener)：By supply batch (see drum label)
Pot life：≤ 8 h (23 \xb1 2 \xb0C)
Flash point：≈ 29 \xb0C
Density：≈ 1.20 kg/L (mixed)
Volume solids：High solids
Recommended DFT：≈ 50 μm / coat
Theoretical spreading rate：≈ 100 g/m\xb2 @ 50 μm DFT
Drying (touch-dry / full cure)：≤ 1 h / ≤ 24 h hard / 7 d full (23 \xb0C)
Recoating interval (min / max)：8 h – 7 d (by substrate temp.)
Finish：On request
Application methods：Airless spray 1 pass \xb7 brush / roller 1–2 passes
Thinner (max, by method)：As instructed per batch
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
HN-AC-201 | HN-AC-601 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-604 \xd71 coat(s)（per spec）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
由环氧树脂、颜填料、助剂、溶剂与固化剂组成的双组份防腐漆。对多数基材附着力极强；硬度、柔韧性、抗冲击等机械性能符合国家标准；固体份高、VOC 低；耐水、耐油、耐溶剂、耐酸、耐碱、耐海水、耐盐雾；与丙烯酸、聚氨酯、氟碳等面漆配套性良好。

【适用范围】
钢结构、桥梁、机械设备及混凝土表面。

【物理与应用参数】
漆基：环氧树脂
颜色：多种颜色
混合比例（漆基：固化剂）：按供货批次（见桶身标签）
混合使用期：≤ 8 h (23 \xb1 2 \xb0C)
闪点：≈ 29 \xb0C
比重：≈ 1.20 kg/L (mixed)
体积固体含量：高固含
推荐干膜厚度：≈ 50 μm / coat
理论涂布率：≈ 100 g/m\xb2 @ 50 μm DFT
干燥时间（表干 / 完全固化）：≤ 1 h / ≤ 24 h 硬干 / 7 d full (23 \xb0C)
重涂间隔（最小 / 最大）：8 h – 7 d (按底材温度)
漆面：按需
施工方法：无气喷涂 1 pass \xb7 刷涂 / 辊涂 1–2 passes
稀释剂（最大用量）：按批次说明
清洗剂：HN 配套环氧稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
HN-AC-201 | HN-AC-601 \xd71 遍（0.10 L/m\xb2）
HN-AC-302 \xd71 遍（0.10 L/m\xb2）
HN-AC-604 \xd71 遍（per spec）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn chống ăn m\xf2n epoxy 2 th\xe0nh phần (đế + chất đ\xf3ng rắn). B\xe1m d\xednh mạnh tr\xean đa số bề mặt; độ cứng, độ dẻo, chống va đập đạt ti\xeau chuẩn quốc gia; h\xe0m lượng rắn cao, VOC thấp; chịu nước, dầu, dung m\xf4i, axit, kiềm, nước biển, muối; phối hợp tốt với sơn phủ acrylic, PU, fluorocarbon.

【Phạm vi ứng dụng】
Kết cấu th\xe9p, cầu, m\xe1y m\xf3c v\xe0 bề mặt b\xea t\xf4ng.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：Nhiều m\xe0u
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：Theo l\xf4 cung cấp (xem nh\xe3n th\xf9ng)
Thời gian sử dụng hỗn hợp：≤ 8 h (23 \xb1 2 \xb0C)
Điểm bắt lửa：≈ 29 \xb0C
Khối lượng ri\xeang：≈ 1.20 kg/L (mixed)
H\xe0m lượng rắn theo thể t\xedch：H\xe0m lượng rắn cao
Độ d\xe0y m\xe0ng kh\xf4 khuyến nghị：≈ 50 μm / coat
Suất sơn l\xfd thuyết：≈ 100 g/m\xb2 @ 50 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：≤ 1 h / ≤ 24 h hard / 7 d full (23 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：8 h – 7 d (theo nhiệt độ nền)
Bề mặt：Theo y\xeau cầu
Phương ph\xe1p thi c\xf4ng：Phun airless 1 pass \xb7 cọ / lăn 1–2 passes
Dung m\xf4i pha (tối đa)：Theo hướng dẫn từng l\xf4
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-201 | HN-AC-601 \xd71 lớp（0.10 L/m\xb2）
HN-AC-302 \xd71 lớp（0.10 L/m\xb2）
HN-AC-604 \xd71 lớp（per spec）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado epoxi anticorrosivo de dos componentes (base + agente de curado). Fuerte adherencia a la mayor\xeda de los sustratos, propiedades mec\xe1nicas conforme a las normas nacionales, altos s\xf3lidos y bajo VOC; resistente al agua, los aceites, los solventes, los \xe1cidos, los \xe1lcalis, el agua de mar y la niebla salina; compatible bajo acabados acr\xedlicos, de PU y fluorocarbonados.

【Aplicaciones t\xedpicas】
Estructuras de acero, puentes, maquinaria y superficies de concreto.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Amplia gama de colores
Relaci\xf3n de mezcla (base : endurecedor)：Seg\xfan el lote de suministro (ver etiqueta del bid\xf3n)
Vida \xfatil de la mezcla：≤ 8 h (23 \xb1 2 \xb0C)
Punto de inflamaci\xf3n：≈ 29 \xb0C
Densidad：≈ 1.20 kg/L (mixed)
S\xf3lidos en volumen：Altos s\xf3lidos
DFT recomendado：≈ 50 μm / coat
Rendimiento te\xf3rico：≈ 100 g/m\xb2 @ 50 μm DFT
Secado (seco al tacto / curado completo)：≤ 1 h / ≤ 24 h seco duro / 7 d full (23 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：8 h – 7 d (seg\xfan temp. del sustrato)
Acabado：A pedido
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless 1 pass \xb7 brocha / rodillo 1–2 passes
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Seg\xfan las indicaciones de cada lote
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-201 | HN-AC-601 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-302 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-604 \xd71 capa(s)（per spec）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طبقة نهائية إيبوكسي مضادة للتآكل ثنائية العبوة (أساس + مادة تصلب). التصاق قوي بأغلب الركائز، وخصائص ميكانيكية وفق المعايير الوطنية، ونسبة مواد صلبة عالية مع VOC منخفض؛ يقاوم الماء والزيوت والمذيبات والأحماض والقلويات ومياه البحر والرذاذ الملحي؛ ومتوافق تحت الطبقات النهائية الأكريليكية والبولي يوريثان والفلوروكربون.

【التطبيقات النموذجية】
الهياكل الفولاذية والجسور والآلات والأسطح الخرسانية.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：مدى ألوان واسع
نسبة الخلط (الأساس : مادة التصلب)：بحسب دفعة التوريد (انظر ملصق البرميل)
العمر الاستخدامي للخليط：≤ 8 h (23 \xb1 2 \xb0C)
نقطة الوميض：≈ 29 \xb0C
الكثافة：≈ 1.20 kg/L (mixed)
المواد الصلبة بالحجم：نسبة مواد صلبة عالية
سماكة الغشاء الجاف الموصى بها (DFT)：≈ 50 μm / coat
معدل الانتشار النظري：≈ 100 g/m\xb2 @ 50 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：≤ 1 h / ≤ 24 ساعة حتى الجفاف الصلب / 7 d full (23 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：8 h – 7 d (بحسب حرارة الركيزة)
التشطيب：عند الطلب
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) 1 pass \xb7 فرشاة / رولر (بكرة دهان) 1–2 passes
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：حسب تعليمات كل دفعة
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
HN-AC-201 | HN-AC-601 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-302 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-604 \xd71 طبقة/طبقات（per spec）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-605",desc:{en:"Zinc-phosphate epoxy primer for hot-humid service",zh:"环氧磷酸锌底漆，适用于湿热环境",vi:"Sơn lót epoxy photphat kẽm cho môi trường nóng ẩm",es:"Imprimación epoxi de fosfato de zinc para servicio caluroso y húmedo",ar:"برايمر (طبقة أولى) إيبوكسي فوسفات الزنك للخدمة في الأجواء الحارة الرطبة"},details:{en:`【Overview】
Two-pack zinc-phosphate epoxy primer for anti-corrosion protection in hot and humid conditions — equipment, land steel structures, machinery and ship topsides above the waterline.

【Typical applications】
Equipment and steelwork in hot-humid environments; vessel steel above the waterline.

【Physical & application data】
Binder / resin：Epoxy (zinc phosphate)
Colour：On request
Mix ratio (base : hardener)：10 : 1
Pot life：6 h
Drying (touch-dry / full cure)：touch-dry ≤ 2 h / hard ≤ 24 h / full cure 7 d
Recoating interval (min / max)：24 h – 7 d (25 \xb0C)
Application methods：Airless spray (0.4–0.5 mm tip, 15–25 MPa) \xb7 conventional spray (0.3–0.6 MPa) \xb7 brush
Thinner (max, by method)：epoxy thinner: spray 0–10 % \xb7 airless 0–5 % \xb7 brush 0–3 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Over shop-primer or pre-primed steel: sweep blast or power-tool clean to St 3. Blast-cleaned bare steel should be coated within 2 hours; re-clean if contamination or flash rust appears. Substrate temperature must be at least 3 \xb0C above dew point.

【Recommended system (HN codes)】
HN-AC-605 \xd72 coat(s)（per spec）
HN-AC-405 | chlorinated-rubber / PU finishes \xd72 coat(s)（per spec）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份环氧磷酸锌底漆，用于湿热环境中设备、陆上钢结构、钢铁机械及船舶水线以上钢板部位的防腐。

【适用范围】
湿热环境中的设备与钢构；船舶水线以上钢板。

【物理与应用参数】
漆基：环氧（磷酸锌）
颜色：按需
混合比例（漆基：固化剂）：10 : 1
混合使用期：6 h
干燥时间（表干 / 完全固化）：表干 ≤ 2 h / hard ≤ 24 h / 完全固化 7 d
重涂间隔（最小 / 最大）：24 h – 7 d (25 \xb0C)
施工方法：无气喷涂 （喷嘴 0.4–0.5 mm，15–25 MPa） \xb7 普通喷涂 （0.3–0.6 MPa） \xb7 刷涂
稀释剂（最大用量）：epoxy thinner: 喷涂 0–10 % \xb7 无气喷涂 0–5 % \xb7 刷涂 0–3 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
涂有车间底漆的钢材：轻扫喷砂或动力工具二次除锈至 St 3 级。喷砂后的裸钢应在 2 小时内涂装，发现污染或返锈应重新处理。底材温度须高于露点 3 ℃ 以上。

【建议油漆配套（HN 型号）】
HN-AC-605 \xd72 遍（per spec）
HN-AC-405 | chlorinated-rubber / PU finishes \xd72 遍（per spec）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn l\xf3t epoxy photphat kẽm 2 th\xe0nh phần, chống ăn m\xf2n trong điều kiện n\xf3ng ẩm — thiết bị, kết cấu th\xe9p tr\xean bờ, m\xe1y m\xf3c v\xe0 phần t\xe0u tr\xean đường nước.

【Phạm vi ứng dụng】
Thiết bị v\xe0 kết cấu th\xe9p m\xf4i trường n\xf3ng ẩm; th\xe9p t\xe0u tr\xean đường nước.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy (photphat kẽm)
M\xe0u sắc：Theo y\xeau cầu
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：10 : 1
Thời gian sử dụng hỗn hợp：6 h
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：chạm kh\xf4 ≤ 2 h / hard ≤ 24 h / đ\xf3ng rắn ho\xe0n to\xe0n 7 d
Khoảng thời gian sơn lại (tối thiểu / tối đa)：24 h – 7 d (25 \xb0C)
Phương ph\xe1p thi c\xf4ng：Phun airless (đầu phun 0,4–0,5 mm, 15–25 MPa) \xb7 phun thường (0,3–0,6 MPa) \xb7 cọ
Dung m\xf4i pha (tối đa)：epoxy thinner: phun 0–10 % \xb7 airless 0–5 % \xb7 cọ 0–3 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Th\xe9p đ\xe3 sơn l\xf3t xưởng: phun c\xe1t nhẹ hoặc dụng cụ động lực đạt St 3. Th\xe9p phun c\xe1t n\xean sơn trong 2 giờ; nếu bẩn hoặc gỉ lại phải xử l\xfd lại. Nhiệt độ bề mặt phải cao hơn điểm sương tối thiểu 3 \xb0C.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-605 \xd72 lớp（per spec）
HN-AC-405 | chlorinated-rubber / PU finishes \xd72 lớp（per spec）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Imprimaci\xf3n epoxi de fosfato de zinc de dos componentes para protecci\xf3n anticorrosiva en condiciones calurosas y h\xfamedas — equipos, estructuras de acero en tierra, maquinaria y partes de buques sobre la l\xednea de flotaci\xf3n.

【Aplicaciones t\xedpicas】
Equipos y estructuras de acero en ambientes calurosos y h\xfamedos; acero de buques sobre la l\xednea de flotaci\xf3n.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi (fosfato de zinc)
Color：A pedido
Relaci\xf3n de mezcla (base : endurecedor)：10 : 1
Vida \xfatil de la mezcla：6 h
Secado (seco al tacto / curado completo)：seco al tacto ≤ 2 h / hard ≤ 24 h / curado completo 7 d
Intervalo de repintado (m\xedn / m\xe1x)：24 h – 7 d (25 \xb0C)
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless (boquilla de 0.4–0.5 mm, 15–25 MPa) \xb7 pulverizaci\xf3n convencional (0.3–0.6 MPa) \xb7 brocha
Diluyente (m\xe1x., seg\xfan m\xe9todo)：epoxy thinner: pulverizaci\xf3n 0–10 % \xb7 airless 0–5 % \xb7 brocha 0–3 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
Sobre imprimaci\xf3n de taller o acero preimprimado: chorreado ligero o limpieza con herramienta mec\xe1nica hasta St 3. El acero desnudo granallado debe recubrirse dentro de las 2 horas; limpiar de nuevo si aparece contaminaci\xf3n u \xf3xido flash. La temperatura del sustrato debe superar el punto de roc\xedo en al menos 3 \xb0C.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-605 \xd72 capa(s)（per spec）
HN-AC-405 | chlorinated-rubber / PU finishes \xd72 capa(s)（per spec）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
برايمر (طبقة أولى) إيبوكسي فوسفات زنك ثنائي العبوة للحماية من التآكل في الظروف الحارة الرطبة — المعدات والهياكل الفولاذية البرية والآلات وأجزاء السفن فوق خط الماء.

【التطبيقات النموذجية】
المعدات والأعمال الفولاذية في البيئات الحارة الرطبة؛ وفولاذ السفن فوق خط الماء.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي (فوسفات الزنك)
اللون：عند الطلب
نسبة الخلط (الأساس : مادة التصلب)：10 : 1
العمر الاستخدامي للخليط：6 h
الجفاف (الجفاف السطحي / التصلد الكامل)：الجفاف السطحي ≤ 2 h / hard ≤ 24 h / التصلد الكامل 7 d
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：24 h – 7 d (25 \xb0C)
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) (فوهة 0.4–0.5 mm، 15–25 MPa) \xb7 الرش التقليدي (0.3–0.6 MPa) \xb7 فرشاة
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：epoxy thinner: رش 0–10 % \xb7 رش هوائي (airless) 0–5 % \xb7 فرشاة 0–3 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
فوق برايمر الورشة أو الفولاذ المُبرايمَر مسبقاً: سفح خفيف أو تنظيف بالأدوات الكهربائية حتى درجة St 3. ويجب طلاء الفولاذ العاري بعد السفح خلال ساعتين؛ ويُعاد التنظيف عند ظهور تلوث أو صدأ سريع التكوّن. ويجب أن تكون درجة حرارة الركيزة أعلى من نقطة الندى بـ 3 \xb0C على الأقل.

【النظام الموصى به (أكواد HN)】
HN-AC-605 \xd72 طبقة/طبقات（per spec）
HN-AC-405 | chlorinated-rubber / PU finishes \xd72 طبقة/طبقات（per spec）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-606",desc:{en:"High-build polyamide-cured epoxy coal-tar — immersion & splash zones",zh:"聚酰胺固化环氧煤焦沥青厚浆漆，浸水及飞溅区",vi:"Epoxy nhựa đường đóng rắn polyamide — vùng ngâm nước và văng",es:"Epoxi con alquitrán de hulla de alto espesor, curado con poliamida — zonas de inmersión y salpicadura",ar:"إيبوكسي قار فحم عالي السماكة متصلد بالبولي أميد — مناطق الغمر والرشق"},details:{en:`【Overview】
High-build two-pack polyamide-cured epoxy coal-tar coating. The cured film combines epoxy toughness, abrasion and chemical resistance with tar's water resistance — resistant to wear, sea water, crude oil and fuel.

【Typical applications】
Long-term protection of steel / concrete in severe environments — immersed and splash zones, water pipes, ballast tanks, offshore facilities and buried pipelines.

【Physical & application data】
Binder / resin：Epoxy coal-tar
Colour：Black / brown
Mix ratio (base : hardener)：4 : 1 (by volume) = 6 : 1 (by weight)
Pot life：2 h
Flash point：38 \xb0C
Density：1.3–1.5 kg/L
Volume solids：64 %
Recommended DFT：250 μm / pass (WFT 400 μm)
Theoretical spreading rate：26 m\xb2/L @ 250 μm
Drying (touch-dry / full cure)：14 h / 7 d (20 \xb0C)
Recoating interval (min / max)：12 h – 2 d
Finish：Semi-gloss
Application methods：Airless spray (tip 0.023–0.027 in, ≈ 14 MPa) \xb7 brush
Thinner (max, by method)：brush 2 % \xb7 airless 5 % \xb7 spray 10 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
HN-AC-606 \xd72 coat(s)（per spec）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
厚浆型双组份聚酰胺固化环氧煤焦沥青涂料。固化后漆膜兼具环氧漆的坚硬耐磨耐化学品性能与沥青漆的耐水特性，可耐磨损、耐海水、耐原油和燃油。

【适用范围】
严重腐蚀环境中钢结构/混凝土表面的长效保护涂层：浸水及飞溅区、水管、压载水舱、近海设施及地下管道。

【物理与应用参数】
漆基：环氧煤焦沥青
颜色：黑色 / 棕色
混合比例（漆基：固化剂）：4 : 1 （体积比） = 6 : 1 （重量比）
混合使用期：2 h
闪点：38 \xb0C
比重：1.3–1.5 kg/L
体积固体含量：64 %
推荐干膜厚度：250 μm / pass (WFT 400 μm)
理论涂布率：26 m\xb2/L @ 250 μm
干燥时间（表干 / 完全固化）：14 h / 7 d (20 \xb0C)
重涂间隔（最小 / 最大）：12 h – 2 d
漆面：半光
施工方法：无气喷涂 (tip 0.023–0.027 in, ≈ 14 MPa) \xb7 刷涂
稀释剂（最大用量）：刷涂 2 % \xb7 无气喷涂 5 % \xb7 喷涂 10 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
HN-AC-606 \xd72 遍（per spec）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn epoxy nhựa đường 2 th\xe0nh phần đ\xf3ng rắn polyamide, độ d\xe0y cao. M\xe0ng đ\xf3ng rắn kết hợp độ cứng, chịu m\xe0i m\xf2n v\xe0 h\xf3a chất của epoxy với t\xednh chịu nước của nhựa đường — chịu m\xe0i m\xf2n, nước biển, dầu th\xf4 v\xe0 nhi\xean liệu.

【Phạm vi ứng dụng】
Bảo vệ l\xe2u d\xe0i th\xe9p/b\xea t\xf4ng m\xf4i trường nghi\xeam trọng — v\xf9ng ng\xe2m v\xe0 văng, ống nước, khoang ballast, c\xf4ng tr\xecnh ngo\xe0i khơi, ống ngầm.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy nhựa đường
M\xe0u sắc：Đen / n\xe2u
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：4 : 1 (theo thể t\xedch) = 6 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：2 h
Điểm bắt lửa：38 \xb0C
Khối lượng ri\xeang：1.3–1.5 kg/L
H\xe0m lượng rắn theo thể t\xedch：64 %
Độ d\xe0y m\xe0ng kh\xf4 khuyến nghị：250 μm / pass (WFT 400 μm)
Suất sơn l\xfd thuyết：26 m\xb2/L @ 250 μm
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：14 h / 7 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：12 h – 2 d
Bề mặt：B\xe1n b\xf3ng
Phương ph\xe1p thi c\xf4ng：Phun airless (tip 0.023–0.027 in, ≈ 14 MPa) \xb7 cọ
Dung m\xf4i pha (tối đa)：cọ 2 % \xb7 airless 5 % \xb7 phun 10 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-606 \xd72 lớp（per spec）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento epoxi con alquitr\xe1n de hulla de dos componentes, de alto espesor y curado con poliamida. La pel\xedcula curada combina la tenacidad, la resistencia a la abrasi\xf3n y a los productos qu\xedmicos del epoxi con la resistencia al agua del alquitr\xe1n — resistente al desgaste, el agua de mar, el crudo y el combustible.

【Aplicaciones t\xedpicas】
Protecci\xf3n de larga duraci\xf3n del acero / concreto en ambientes severos — zonas sumergidas y de salpicadura, tuber\xedas de agua, tanques de lastre, instalaciones offshore y tuber\xedas enterradas.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi con alquitr\xe1n de hulla
Color：Negro / marr\xf3n
Relaci\xf3n de mezcla (base : endurecedor)：4 : 1 (en volumen) = 6 : 1 (en peso)
Vida \xfatil de la mezcla：2 h
Punto de inflamaci\xf3n：38 \xb0C
Densidad：1.3–1.5 kg/L
S\xf3lidos en volumen：64 %
DFT recomendado：250 μm / pass (WFT 400 μm)
Rendimiento te\xf3rico：26 m\xb2/L @ 250 μm
Secado (seco al tacto / curado completo)：14 h / 7 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：12 h – 2 d
Acabado：Semibrillante
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless (tip 0.023–0.027 in, ≈ 14 MPa) \xb7 brocha
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 2 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 10 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-606 \xd72 capa(s)（per spec）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء إيبوكسي قار فحم عالي السماكة ثنائي العبوة متصلد بالبولي أميد. يجمع الغشاء المتصلد بين متانة الإيبوكسي ومقاومته للبري والكيماويات وبين مقاومة القار للماء — يقاوم التآكل بالاستخدام ومياه البحر والنفط الخام والوقود.

【التطبيقات النموذجية】
حماية طويلة الأمد للفولاذ / الخرسانة في البيئات الشديدة — مناطق الغمر والرشق، وأنابيب المياه، وخزانات الموازنة، والمنشآت البحرية، والخطوط المدفونة.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي قار الفحم
اللون：أسود / بني
نسبة الخلط (الأساس : مادة التصلب)：4 : 1 (بالحجم) = 6 : 1 (بالوزن)
العمر الاستخدامي للخليط：2 h
نقطة الوميض：38 \xb0C
الكثافة：1.3–1.5 kg/L
المواد الصلبة بالحجم：64 %
سماكة الغشاء الجاف الموصى بها (DFT)：250 μm / pass (WFT 400 μm)
معدل الانتشار النظري：26 m\xb2/L @ 250 μm
الجفاف (الجفاف السطحي / التصلد الكامل)：14 h / 7 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：12 h – 2 d
التشطيب：نصف لامع
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) (tip 0.023–0.027 in, ≈ 14 MPa) \xb7 فرشاة
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 2 % \xb7 رش هوائي (airless) 5 % \xb7 رش 10 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
HN-AC-606 \xd72 طبقة/طبقات（per spec）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-607",desc:{en:"Single-pack acrylic finish — good gloss & colour retention, easy repair",zh:"单组份丙烯酸面漆，保光保色，易修补",vi:"Sơn phủ acrylic 1 thành phần — giữ bóng màu, dễ sửa",es:"Acabado acrílico monocomponente — buena retención de brillo y color, fácil reparación",ar:"طلاء نهائي أكريليك أحادي العبوة — ثبات جيد للمعان واللون وسهولة الإصلاح"},details:{en:`【Overview】
Single-pack high-grade acrylic finish with good gloss and colour retention. The film resists abrasion, impact, brine, mineral oils and many chemicals; easy to repair with no recoating-time limit. Available in flashing colours as high-visibility traffic-marking paint on steel and concrete.

【Typical applications】
Finish on steel and concrete in medium to severe environments; decorative protection of equipment, instruments and machinery.

【Physical & application data】
Binder / resin：Acrylic
Colour：White, silver and other colours
Density：1.1 kg/L
Flash point：38 \xb0C
Volume solids：35 %
Theoretical spreading rate：10 m\xb2/L @ 35 μm DFT
Drying (touch-dry / full cure)：1 h / 24 h hard (20 \xb0C)
Recoating interval (min / max)：4 h – no limit
Finish：Gloss
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 10 % \xb7 airless 5 % \xb7 spray 20 %
Cleaner：Matched HN acrylic thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
HN-AC-201 | HN-AC-603 \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-607 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
单组份高级丙烯酸基面漆，光泽和保色性良好，漆膜耐磨损、抗碰撞、耐盐水、矿物油及多种化学品；易修补，无重涂时间限制。可做成闪光效果的各种颜色，作为交通标志漆施工于钢铁和混凝土表面，可见度高、反光清晰。

【适用范围】
中等至严重腐蚀环境中钢结构和混凝土表面的面漆；各类电器、仪表、仪器、机械设备等金属器材表面的装饰保护。

【物理与应用参数】
漆基：丙烯酸树脂
颜色：白色、银色及其他颜色
比重：1.1 kg/L
闪点：38 \xb0C
体积固体含量：35 %
理论涂布率：10 m\xb2/L @ 35 μm DFT
干燥时间（表干 / 完全固化）：1 h / 24 h 硬干 (20 \xb0C)
重涂间隔（最小 / 最大）：4 h – 不限
漆面：有光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 10 % \xb7 无气喷涂 5 % \xb7 喷涂 20 %
清洗剂：HN 配套丙烯酸稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
HN-AC-201 | HN-AC-603 \xd71 遍（0.10 L/m\xb2）
HN-AC-607 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn phủ acrylic cao cấp 1 th\xe0nh phần, giữ b\xf3ng v\xe0 m\xe0u tốt; m\xe0ng sơn chịu m\xe0i m\xf2n, va đập, nước muối, dầu kho\xe1ng v\xe0 nhiều h\xf3a chất; dễ sửa chữa, kh\xf4ng giới hạn thời gian sơn lại. C\xf3 thể l\xe0m m\xe0u hiệu ứng lấp l\xe1nh l\xe0m sơn dấu giao th\xf4ng tr\xean th\xe9p v\xe0 b\xea t\xf4ng.

【Phạm vi ứng dụng】
Lớp phủ tr\xean th\xe9p v\xe0 b\xea t\xf4ng m\xf4i trường trung b\xecnh đến nghi\xeam trọng; trang tr\xed bảo vệ thiết bị, dụng cụ, m\xe1y m\xf3c.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Acrylic
M\xe0u sắc：Trắng, bạc v\xe0 m\xe0u kh\xe1c
Khối lượng ri\xeang：1.1 kg/L
Điểm bắt lửa：38 \xb0C
H\xe0m lượng rắn theo thể t\xedch：35 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 35 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h / 24 h hard (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：4 h – kh\xf4ng giới hạn
Bề mặt：B\xf3ng
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 10 % \xb7 airless 5 % \xb7 phun 20 %
Dung dịch vệ sinh：Dung m\xf4i acrylic HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AC-201 | HN-AC-603 \xd71 lớp（0.10 L/m\xb2）
HN-AC-607 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado acr\xedlico monocomponente de alta gama con buena retenci\xf3n de brillo y color. La pel\xedcula resiste la abrasi\xf3n, el impacto, la salmuera, los aceites minerales y numerosos productos qu\xedmicos; de f\xe1cil reparaci\xf3n y sin l\xedmite de tiempo para el repintado. Disponible en colores destellantes como pintura de se\xf1alizaci\xf3n vial de alta visibilidad sobre acero y concreto.

【Aplicaciones t\xedpicas】
Acabado sobre acero y concreto en ambientes de media a alta severidad; protecci\xf3n decorativa de equipos, instrumentos y maquinaria.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Acr\xedlico
Color：Blanco, plata y otros colores
Densidad：1.1 kg/L
Punto de inflamaci\xf3n：38 \xb0C
S\xf3lidos en volumen：35 %
Rendimiento te\xf3rico：10 m\xb2/L @ 35 μm DFT
Secado (seco al tacto / curado completo)：1 h / 24 h seco duro (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：4 h – sin l\xedmite
Acabado：Brillante
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 20 %
Limpiador：Diluyente HN acr\xedlico correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
HN-AC-201 | HN-AC-603 \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-607 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء نهائي أكريليك متقدم أحادي العبوة بثبات جيد للمعان واللون. يقاوم الغشاء البري والصدمات والمياه المالحة والزيوت المعدنية وكثيراً من الكيماويات؛ سهل الإصلاح دون حد زمني لإعادة الطلاء. ومتاح بألوان وامضة كطلاء علامات مرور عالي الوضوح على الفولاذ والخرسانة.

【التطبيقات النموذجية】
طبقة نهائية على الفولاذ والخرسانة في البيئات المتوسطة إلى الشديدة؛ وحماية زخرفية للمعدات والأجهزة والآلات.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：أكريليك
اللون：أبيض وفضي وألوان أخرى
الكثافة：1.1 kg/L
نقطة الوميض：38 \xb0C
المواد الصلبة بالحجم：35 %
معدل الانتشار النظري：10 m\xb2/L @ 35 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h / 24 ساعة حتى الجفاف الصلب (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：4 h – بلا حد
التشطيب：لامع
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 20 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للأكريليك

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
HN-AC-201 | HN-AC-603 \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-607 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-608",desc:{en:"Economical single-pack alkyd enamel — fast-drying general finish",zh:"单组份醇酸磁漆，快干经济型通用面漆",vi:"Sơn alkyd 1 thành phần — sơn phủ thông dụng nhanh khô, kinh tế",es:"Esmalte alquídico monocomponente económico — acabado general de secado rápido",ar:"مينا ألكيد أحادية العبوة اقتصادية — طلاء نهائي عام سريع الجفاف"},details:{en:`【Overview】
Specially formulated alkyd enamel forming a glossy, abrasion-resistant film — fast-drying, economical, with good water and weather resistance.

【Typical applications】
General-purpose finish on interior / exterior metal and timber in mild to medium corrosivity.

【Physical & application data】
Binder / resin：Modified alkyd
Colour：White, silver and other colours
Density：1.10 kg/L
Flash point：38 \xb0C
Volume solids：50 %
Theoretical spreading rate：14 m\xb2/L @ 35 μm DFT
Drying (touch-dry / full cure)：4 h / 8 h (20 \xb0C)
Recoating interval (min / max)：8 h – 30 d
Finish：Gloss
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 5–10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN alkyd thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
anti-rust primer (HN supply) \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-608 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，特点是快干、经济实惠、耐水、耐候性能优良。

【适用范围】
轻微至中等腐蚀环境下室内外金属和木材表面的通用面漆。

【物理与应用参数】
漆基：改性醇酸
颜色：白色、银色及其他颜色
比重：1.10 kg/L
闪点：38 \xb0C
体积固体含量：50 %
理论涂布率：14 m\xb2/L @ 35 μm DFT
干燥时间（表干 / 完全固化）：4 h / 8 h (20 \xb0C)
重涂间隔（最小 / 最大）：8 h – 30 d
漆面：有光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 5–10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套醇酸稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
anti-rust primer (HN supply) \xd71 遍（0.10 L/m\xb2）
HN-AC-608 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn alkyd được phối chế đặc biệt tạo m\xe0ng b\xf3ng, chống m\xe0i m\xf2n — kh\xf4 nhanh, kinh tế, chịu nước v\xe0 thời tiết tốt.

【Phạm vi ứng dụng】
Sơn phủ th\xf4ng dụng trong/ngo\xe0i trời tr\xean kim loại v\xe0 gỗ, m\xf4i trường ăn m\xf2n nhẹ đến trung b\xecnh.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Alkyd cải biến
M\xe0u sắc：Trắng, bạc v\xe0 m\xe0u kh\xe1c
Khối lượng ri\xeang：1.10 kg/L
Điểm bắt lửa：38 \xb0C
H\xe0m lượng rắn theo thể t\xedch：50 %
Suất sơn l\xfd thuyết：14 m\xb2/L @ 35 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：4 h / 8 h (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：8 h – 30 d
Bề mặt：B\xf3ng
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 5–10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i alkyd HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
anti-rust primer (HN supply) \xd71 lớp（0.10 L/m\xb2）
HN-AC-608 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Esmalte alqu\xeddico de formulaci\xf3n especial que forma una pel\xedcula brillante y resistente a la abrasi\xf3n — de secado r\xe1pido y econ\xf3mico, con buena resistencia al agua y a la intemperie.

【Aplicaciones t\xedpicas】
Acabado de uso general sobre metal y madera, en interiores y exteriores, en corrosividad leve a media.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Alqu\xeddico modificado
Color：Blanco, plata y otros colores
Densidad：1.10 kg/L
Punto de inflamaci\xf3n：38 \xb0C
S\xf3lidos en volumen：50 %
Rendimiento te\xf3rico：14 m\xb2/L @ 35 μm DFT
Secado (seco al tacto / curado completo)：4 h / 8 h (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：8 h – 30 d
Acabado：Brillante
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 5–10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN alqu\xeddico correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
anti-rust primer (HN supply) \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-608 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
مينا ألكيد بتركيبة خاصة يشكّل غشاءً لامعاً مقاوماً للبري — سريع الجفاف واقتصادي، بمقاومة جيدة للماء والعوامل الجوية.

【التطبيقات النموذجية】
طلاء نهائي عام للأغراض على المعادن والأخشاب في الداخل والخارج في بيئات خفيفة إلى متوسطة التآكل.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：ألكيد معدَّل
اللون：أبيض وفضي وألوان أخرى
الكثافة：1.10 kg/L
نقطة الوميض：38 \xb0C
المواد الصلبة بالحجم：50 %
معدل الانتشار النظري：14 m\xb2/L @ 35 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：4 h / 8 h (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：8 h – 30 d
التشطيب：لامع
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 5–10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للألكيد

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
anti-rust primer (HN supply) \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-608 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-609",desc:{en:"Acrylic-modified chlorinated-rubber finish — weather & chemical resistant",zh:"丙烯酸改性氯化橡胶面漆，耐候耐化学品",vi:"Sơn phủ cao su clo hóa改性 acrylic — chịu thời tiết và hóa chất",es:"Acabado de caucho clorado modificado con acrílico — resistente a la intemperie y a los productos químicos",ar:"طلاء نهائي من مطاط مكلور معدَّل بالأكريليك — مقاوم للعوامل الجوية والكيماويات"},details:{en:`【Overview】
Premium finish formulated from acrylic resin and chlorinated rubber. The film resists abrasion and impact; resists sea water, mineral oils, many chemicals, fish oils and other animal / vegetable oils. Easy to repair and can be recoated after extended time.

【Typical applications】
Finish on interior / exterior steel in medium to severe industrial environments with high sunlight / weather exposure.

【Physical & application data】
Binder / resin：Chlorinated rubber (acrylic-modified)
Colour：Wide colour range
Flash point：36–40 \xb0C
Density：1.30 kg/L
Volume solids：40 %
Recommended DFT：≈ 40 μm / coat
Theoretical spreading rate：10 m\xb2/L @ 40 μm DFT
Drying (touch-dry / full cure)：10 min dust-free / 1 h touch / 4 h hard (25 \xb0C)
Recoating interval (min / max)：3 h – no limit
Finish：Matt / semi-matt
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush 10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN CR thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
chlorinated-rubber primer (HN supply) \xd71 coat(s)（0.10 L/m\xb2）
HN-AC-609 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
用丙烯酸树脂与氯化橡胶配制而成的优质面漆。漆膜耐磨损、抗碰撞；耐海水、矿物油、多种化学品及鱼油等动植物油。易修补，时间延长也可重涂。

【适用范围】
中等至严重腐蚀工业环境中钢材内、外表面的面漆，耐晒耐候性能优异。

【物理与应用参数】
漆基：氯化橡胶（丙烯酸改性）
颜色：多种颜色
闪点：36–40 \xb0C
比重：1.30 kg/L
体积固体含量：40 %
推荐干膜厚度：≈ 40 μm / coat
理论涂布率：10 m\xb2/L @ 40 μm DFT
干燥时间（表干 / 完全固化）：10 min dust-free / 1 h touch / 4 h 硬干 (25 \xb0C)
重涂间隔（最小 / 最大）：3 h – 不限
漆面：哑光 / 半哑光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂 10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套氯磺化/氯化橡胶稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
chlorinated-rubber primer (HN supply) \xd71 遍（0.10 L/m\xb2）
HN-AC-609 \xd72 遍（0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn phủ cao cấp từ nhựa acrylic v\xe0 cao su clo h\xf3a. M\xe0ng sơn chịu m\xe0i m\xf2n, va đập; chịu nước biển, dầu kho\xe1ng, nhiều h\xf3a chất v\xe0 dầu động/thực vật. Dễ sửa, c\xf3 thể sơn lại sau thời gian d\xe0i.

【Phạm vi ứng dụng】
Lớp phủ trong/ngo\xe0i th\xe9p m\xf4i trường c\xf4ng nghiệp trung b\xecnh đến nghi\xeam trọng, chịu nắng v\xe0 thời tiết tốt.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Cao su clo h\xf3a (acrylic cải biến)
M\xe0u sắc：Nhiều m\xe0u
Điểm bắt lửa：36–40 \xb0C
Khối lượng ri\xeang：1.30 kg/L
H\xe0m lượng rắn theo thể t\xedch：40 %
Độ d\xe0y m\xe0ng kh\xf4 khuyến nghị：≈ 40 μm / coat
Suất sơn l\xfd thuyết：10 m\xb2/L @ 40 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：10 min dust-free / 1 h touch / 4 h hard (25 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：3 h – kh\xf4ng giới hạn
Bề mặt：Mờ / b\xe1n mờ
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ 10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i CR HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
chlorinated-rubber primer (HN supply) \xd71 lớp（0.10 L/m\xb2）
HN-AC-609 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado premium formulado con resina acr\xedlica y caucho clorado. La pel\xedcula resiste la abrasi\xf3n y el impacto; resiste el agua de mar, los aceites minerales, numerosos productos qu\xedmicos, el aceite de pescado y otros aceites animales / vegetales. F\xe1cil de reparar y repintable tras per\xedodos prolongados.

【Aplicaciones t\xedpicas】
Acabado sobre acero, interior y exterior, en ambientes industriales de media a alta severidad con alta exposici\xf3n solar / a la intemperie.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Caucho clorado (modificado con acr\xedlico)
Color：Amplia gama de colores
Punto de inflamaci\xf3n：36–40 \xb0C
Densidad：1.30 kg/L
S\xf3lidos en volumen：40 %
DFT recomendado：≈ 40 μm / coat
Rendimiento te\xf3rico：10 m\xb2/L @ 40 μm DFT
Secado (seco al tacto / curado completo)：10 min dust-free / 1 h touch / 4 h seco duro (25 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：3 h – sin l\xedmite
Acabado：Mate / semimate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha 10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN CR correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
chlorinated-rubber primer (HN supply) \xd71 capa(s)（0.10 L/m\xb2）
HN-AC-609 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء نهائي فاخر محضّر من راتنج أكريليك ومطاط مكلور. يقاوم الغشاء البري والصدمات؛ ويقاوم مياه البحر والزيوت المعدنية وكثيراً من الكيماويات وزيوت الأسماك وسواها من الزيوت الحيوانية/النباتية. سهل الإصلاح ويمكن إعادة طلائه بعد فترات طويلة.

【التطبيقات النموذجية】
طبقة نهائية على الفولاذ في الداخل والخارج في البيئات الصناعية المتوسطة إلى الشديدة المعرّضة لأشعة الشمس والعوامل الجوية.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：مطاط مكلور (معدَّل بالأكريليك)
اللون：مدى ألوان واسع
نقطة الوميض：36–40 \xb0C
الكثافة：1.30 kg/L
المواد الصلبة بالحجم：40 %
سماكة الغشاء الجاف الموصى بها (DFT)：≈ 40 μm / coat
معدل الانتشار النظري：10 m\xb2/L @ 40 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：10 min dust-free / 1 h touch / 4 ساعة حتى الجفاف الصلب (25 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：3 h – بلا حد
التشطيب：مطفي / نصف مطفي
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة 10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للمطاط المكلور

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
chlorinated-rubber primer (HN supply) \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AC-609 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AC-612",desc:{en:"Project-specified multi-coat systems assembled from the HN primer / intermediate / topcoat range",zh:"按项目规范以 HN 底漆/中间漆/面漆组合的多层配套体系",vi:"Hệ nhiều lớp theo hồ sơ dự án, lắp từ dải sơn lót/lớp giữa/lớp phủ HN",es:"Sistemas multicapa especificados por proyecto, armados con la gama HN de imprimaciones / capas intermedias / acabados",ar:"أنظمة متعددة الطبقات محددة بمواصفات المشروع تُجمَّع من مدى برايمرات/طبقات وسطى/طبقات نهائية HN"},details:{en:`【Overview】
Bridge and infrastructure protection is specified per project: coating systems are assembled from HN primers, intermediates and topcoats to match the corrosivity category, design life and maintenance plan. Typical duty — anti-rust, acid and chemical resistance, oil and heat resistance, decorative finish; covering steel bridges, petrochemical, marine, metallurgy, power, mining and municipal engineering; tanks, towers, reactors, pipework, drilling platforms, plant roofing and steel masts.

【Recommended system (HN codes)】
per project spec

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
桥梁及基础设施防护按项目规范执行：以 HN 底漆、中间漆、面漆组合成套，匹配腐蚀等级、设计寿命与维护计划。典型防护对象：要求防锈、防酸、防腐蚀、耐油、耐热、美观的金属构件与设备表面；覆盖机械制造、钢铁桥梁、石油化工、船舶、冶金、电力、矿山、建筑安装、热力煤气、交通标志、污水处理等工程的机械设备、罐、釜、塔、槽等大型容器及各类管道、钻井平台、金属厂房瓦面与钢铁塔架。

【建议油漆配套（HN 型号）】
per project spec

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Bảo vệ cầu v\xe0 hạ tầng được lập theo từng dự \xe1n: hệ sơn lắp từ sơn l\xf3t, lớp giữa v\xe0 lớp phủ HN, ph\xf9 hợp cấp ăn m\xf2n, tuổi thọ thiết kế v\xe0 kế hoạch bảo tr\xec. Phạm vi điển h\xecnh: bề mặt kim loại cần chống gỉ, axit, ăn m\xf2n, chịu dầu, chịu nhiệt v\xe0 thẩm mỹ; m\xe1y m\xf3c chế tạo, cầu th\xe9p, h\xf3a dầu, t\xe0u thủy, luyện kim, điện lực, mỏ, x\xe2y dựng, dấu giao th\xf4ng, xử l\xfd nước; bồn, th\xe1p, nồi, ống, gi\xe0n khoan, m\xe1i nh\xe0 xưởng, cột th\xe9p.

【Hệ thống khuyến nghị (m\xe3 HN)】
per project spec

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
La protecci\xf3n de puentes e infraestructura se especifica por proyecto: los sistemas de recubrimiento se arman con imprimaciones, capas intermedias y acabados HN acordes a la categor\xeda de corrosividad, la vida \xfatil de dise\xf1o y el plan de mantenimiento. Servicio t\xedpico — antioxidante, resistencia a \xe1cidos y productos qu\xedmicos, al aceite y al calor, acabado decorativo; abarca puentes de acero, petroqu\xedmica, sector marino, metalurgia, energ\xeda, miner\xeda e ingenier\xeda municipal; tanques, torres, reactores, tuber\xedas, plataformas de perforaci\xf3n, techumbres de plantas y m\xe1stiles de acero.

【Sistema recomendado (c\xf3digos HN)】
per project spec

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
تُنفَّذ حماية الجسور والبنية التحتية وفق مواصفات كل مشروع: تُجمَّع أنظمة الطلاء من برايمرات HN وطبقاتها الوسطى والنهائية لمطابقة فئة التآكل والعمر التصميمي وخطة الصيانة. المهام النموذجية — منع الصدأ ومقاومة الأحماض والكيماويات ومقاومة الزيوت والحرارة والتشطيب الزخرفي؛ وتغطي الجسور الفولاذية وقطاع البتروكيماويات والبحرية والمعادن والطاقة والتعدين والهندسة البلدية؛ والخزانات والأبراج والمفاعلات والأنابيب ومنصات الحفر وأسطح مباني المصانع والصواري الفولاذية.

【النظام الموصى به (أكواد HN)】
per project spec

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}}],image:"/images/product-anticorrosion.jpg",applications:[{en:"Bridges & chemical plants",zh:"桥梁与化工厂",vi:"Cầu & nhà máy hóa chất",es:"Puentes y plantas químicas",ar:"الجسور والمصانع الكيميائية"},{en:"Marine & port steelwork",zh:"船舶与港口钢构",vi:"Thép tàu & cảng",es:"Estructuras de acero marinas y portuarias",ar:"الأعمال الفولاذية البحرية والموانئ"},{en:"Storage tank exteriors & pipelines",zh:"储罐外壁与管道",vi:"Bồn chứa & đường ống",es:"Exteriores de tanques de almacenamiento y tuberías",ar:"أغلفة خزانات التخزين والخطوط الأنبوبية"},{en:"Power plant steel & port terminals",zh:"电厂钢构与港口码头",vi:"Thép nhà máy điện & cảng",es:"Acero de centrales eléctricas y terminales portuarias",ar:"فولاذ محطات الطاقة وأرصفة الموانئ"}]},{code:"CAT-02",title:{en:"High-Temperature Coatings",zh:"工业耐高温涂料",vi:"Sơn chịu nhiệt công nghiệp",es:"Recubrimientos de alta temperatura",ar:"طلاءات درجات الحرارة العالية"},short:{en:"Silicone · Ceramic · up to 600°C grades",zh:"有机硅·陶瓷·最高600℃等级",vi:"Silicone · ceramic · tới 600°C",es:"Silicona · Cerámica · grados hasta 600°C",ar:"سيليكون · سيراميك · درجات حتى 600°C"},description:{en:"Silicone-based and inorganic ceramic high-temperature coatings for continuous hot service — hot pipes, exhaust ducts, chimneys, boilers and kilns; custom colours and temperature grades on request.",zh:"有机硅及无机陶瓷耐高温涂料，适用于热管道、排风管、烟囱、锅炉及窑炉等长期高温表面；可按需订制颜色与耐温等级。",vi:"Sơn chịu nhiệt silicone và ceramic vô cơ cho bề mặt nóng liên tục — ống nóng, ống xả, ống khói, lò hơi, lò nung; màu và cấp nhiệt riêng theo yêu cầu.",es:"Recubrimientos de alta temperatura a base de silicona y cerámicos inorgánicos para servicio caliente continuo — tuberías calientes, conductos de escape, chimeneas, calderas y hornos; colores y grados térmicos personalizados a pedido.",ar:"طلاءات مقاومة للحرارة العالية أساس السيليكون والسيراميك غير العضوي للخدمة الساخنة المستمرة — الأنابيب الساخنة ومجاري العادم والمداخن والغلايات والأفران؛ ألوان ودرجات حرارة مخصصة عند الطلب."},features:[{en:"Aluminium silicone grade for surfaces up to 550 °C",zh:"铝粉有机硅等级，热表面长期耐温 550 ℃",vi:"Cấp silicone nhôm cho bề mặt tới 550 °C",es:"Grado de silicona con aluminio para superficies hasta 550 °C",ar:"درجة سيليكون ألمنيوم لأسطح حتى 550 °C"},{en:"Single-pack, air-drying application",zh:"单组份自干施工",vi:"1 thành phần, khô tự nhiên",es:"Aplicación monocomponente, de secado al aire",ar:"أحادي العبوة، تطبيق بجفاف هوائي"},{en:"Custom colours & temperature grades",zh:"可订制颜色与耐温等级",vi:"Màu & cấp nhiệt theo yêu cầu",es:"Colores y grados de temperatura personalizados",ar:"ألوان ودرجات حرارة مخصصة"},{en:"Total DFT kept ≤ 75 μm for high-temp service",zh:"高温使用总膜厚宜 ≤75 μm",vi:"Tổng DFT ≤ 75 μm khi dùng nhiệt cao",es:"DFT total mantenido ≤ 75 μm para servicio de alta temperatura",ar:"إبقاء DFT الكلي ≤ 75 μm للخدمة عالية الحرارة"}],specs:[{label:{en:"Base",zh:"基料",vi:"Nhựa nền",es:"Base",ar:"الأساس"},value:"Silicone / Ceramic"},{label:{en:"Temp Range",zh:"耐温范围",vi:"Nhiệt độ",es:"Rango de temperatura",ar:"مدى الحرارة"},value:"up to 550 °C (grades to 600)"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT",ar:"سماكة الغشاء الجاف (DFT)"},value:"25 – 75 μm"},{label:{en:"Cure",zh:"固化",vi:"Khâu đông",es:"Curado",ar:"التصلد"},value:"Air-dry"}],categorySpecs:[{label:{en:"Max temp (STD)",zh:"最高耐温（标准）",vi:"Nhiệt độ tối đa (chuẩn)",es:"Temp. máx. (STD)",ar:"أقصى حرارة (STD)"},value:"550 °C"},{label:{en:"DFT",zh:"干膜厚度",vi:"DFT",es:"DFT",ar:"سماكة الغشاء الجاف (DFT)"},value:"25–75 μm"},{label:{en:"Cure",zh:"固化",vi:"Khâu đông",es:"Curado",ar:"التصلد"},value:"Air-dry"},{label:{en:"Packs",zh:"包装",vi:"Thành phần",es:"Envases",ar:"العبوات"},value:"1-K"}],models:[{model:"HN-HT-200",desc:{en:"Single-pack air-drying silicone HT paint — hot surfaces up to 550 °C",zh:"单组份自干型有机硅耐高温漆，热表面长期耐温达 550 ℃",vi:"Sơn chịu nhiệt silicone 1 thành phần khô tự nhiên — bề mặt nóng tới 550 °C",es:"Pintura HT de silicona monocomponente de secado al aire — superficies calientes hasta 550 °C",ar:"طلاء سيليكون مقاوم للحرارة أحادي العبوة يجف هوائياً — أسطح ساخنة حتى 550 °C"},details:{en:`【Overview】
Heat-resistant, single-pack, air-drying coating pigmented with aluminium paste; custom colours and temperature grades available on request. Note: the film becomes slightly thermoplastic with loss of gloss on heating — keep total DFT below ~75 μm and do not heat before the film is fully dry (24 h / 20 \xb0C).

【Typical applications】
Long-term protection of hot pipes, exhaust ducts, chimneys and other surfaces up to 550 \xb0C; may serve as its own primer and finish.

【Physical & application data】
Binder / resin：Heat-resistant silicone resin
Colour：Silver, black and other colours
Density：1.1 kg/L
Flash point：25 \xb0C
Volume solids：31 %
Theoretical spreading rate：12 m\xb2/L @ 25 μm DFT
Drying (touch-dry / full cure)：1 h / 24 h (20 \xb0C)
Recoating interval (min / max)：Not required
Finish：Semi-flat
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：airless 5 % \xb7 brush 10 % \xb7 spray 15 %
Cleaner：Matched HN silicone thinner

【Surface preparation】
Remove grease with a suitable detergent and remove salts / dirt by high-pressure fresh water; abrasive blast to Sa 2.5 before application.

【Recommended system (HN codes)】
HN-HT-200 \xd71 coat(s)（0.08 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
耐热型单组份自干涂料，以铝粉为着色颜料；可按客户要求订做专用颜色和耐热温度的品种。注：本品受热后漆膜稍具热塑性且光泽降低——高温使用时漆膜总干膜厚度宜保持在 75 μm 以下，漆膜彻底干燥前（24 h / 20 ℃）不要受热。

【适用范围】
热管道、排风管、烟囱及其他温度达 550 ℃ 热表面的长效保护涂层，可自作底漆和面漆。

【物理与应用参数】
漆基：耐热有机硅树脂
颜色：银色、黑色及其他颜色
比重：1.1 kg/L
闪点：25 \xb0C
体积固体含量：31 %
理论涂布率：12 m\xb2/L @ 25 μm DFT
干燥时间（表干 / 完全固化）：1 h / 24 h (20 \xb0C)
重涂间隔（最小 / 最大）：无需重涂
漆面：Semi-flat
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：无气喷涂 5 % \xb7 刷涂 10 % \xb7 喷涂 15 %
清洗剂：HN 配套有机硅稀释剂

【表面处理】
用适当清洁剂清除油脂，用高压淡水除去盐分及污垢，喷砂处理至 Sa 2.5 级后施工。

【建议油漆配套（HN 型号）】
HN-HT-200 \xd71 遍（0.08 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn chịu nhiệt 1 th\xe0nh phần kh\xf4 tự nhi\xean, m\xe0u nh\xf4m; c\xf3 thể đặt m\xe0u v\xe0 cấp nhiệt độ ri\xeang theo y\xeau cầu. Lưu \xfd: m\xe0ng sơn hơi nhựa nhiệt v\xe0 giảm b\xf3ng khi nắng n\xf3ng — tổng độ d\xe0y m\xe0ng kh\xf4 n\xean dưới ~75 μm; kh\xf4ng gia nhiệt trước khi m\xe0ng kh\xf4 ho\xe0n to\xe0n (24 h / 20 \xb0C).

【Phạm vi ứng dụng】
Bảo vệ l\xe2u d\xe0i ống n\xf3ng, ống xả, ống kh\xf3i v\xe0 bề mặt nhiệt tới 550 \xb0C; c\xf3 thể tự l\xe0m sơn l\xf3t v\xe0 sơn phủ.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Nhựa silicone chịu nhiệt
M\xe0u sắc：Bạc, đen v\xe0 m\xe0u kh\xe1c
Khối lượng ri\xeang：1.1 kg/L
Điểm bắt lửa：25 \xb0C
H\xe0m lượng rắn theo thể t\xedch：31 %
Suất sơn l\xfd thuyết：12 m\xb2/L @ 25 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h / 24 h (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：Kh\xf4ng cần
Bề mặt：Semi-flat
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：airless 5 % \xb7 cọ 10 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i silicone HN

【Xử l\xfd bề mặt】
Tẩy dầu mỡ bằng dung dịch ph\xf9 hợp, rửa muối/bẩn bằng nước ngọt \xe1p lực cao; phun c\xe1t đạt Sa 2.5 trước khi thi c\xf4ng.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-HT-200 \xd71 lớp（0.08 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento resistente al calor, monocomponente y de secado al aire, pigmentado con pasta de aluminio; colores y grados de temperatura personalizados a pedido. Nota: la pel\xedcula se vuelve ligeramente termopl\xe1stica y pierde brillo al calentarse — mantenga el DFT total por debajo de ~75 μm y no la exponga al calor antes de que est\xe9 totalmente seca (24 h / 20 \xb0C).

【Aplicaciones t\xedpicas】
Protecci\xf3n de larga duraci\xf3n de tuber\xedas calientes, conductos de escape, chimeneas y otras superficies hasta 550 \xb0C; puede fungir como su propia imprimaci\xf3n y acabado.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Resina de silicona resistente al calor
Color：Plata, negro y otros colores
Densidad：1.1 kg/L
Punto de inflamaci\xf3n：25 \xb0C
S\xf3lidos en volumen：31 %
Rendimiento te\xf3rico：12 m\xb2/L @ 25 μm DFT
Secado (seco al tacto / curado completo)：1 h / 24 h (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：No requerido
Acabado：Semi-flat
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：airless 5 % \xb7 brocha 10 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN de silicona correspondiente

【Preparaci\xf3n de la superficie】
Eliminar la grasa con un detergente adecuado y las sales / la suciedad con agua dulce a alta presi\xf3n; granallar hasta Sa 2.5 antes de aplicar.

【Sistema recomendado (c\xf3digos HN)】
HN-HT-200 \xd71 capa(s)（0.08 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء مقاوم للحرارة أحادي العبوة يجف هوائياً مصبوغ بمعجون الألمنيوم؛ والألوان ودرجات الحرارة المخصصة متاحة عند الطلب. ملاحظة: يصبح الغشاء قليل اللدونة بالحرارة مع فقدان اللمعان — حافظ على DFT الكلي دون نحو 75 μm ولا تسخّن قبل جفاف الغشاء تماماً (24 h / 20 \xb0C).

【التطبيقات النموذجية】
حماية طويلة الأمد للأنابيب الساخنة ومجاري العوادم والمداخن والأسطح الأخرى حتى 550 \xb0C؛ ويمكن أن يستخدم برايمراً وطبقة نهائية بذاته.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：راتنج سيليكون مقاوم للحرارة
اللون：فضي وأسود وألوان أخرى
الكثافة：1.1 kg/L
نقطة الوميض：25 \xb0C
المواد الصلبة بالحجم：31 %
معدل الانتشار النظري：12 m\xb2/L @ 25 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h / 24 h (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：غير مطلوب
التشطيب：Semi-flat
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：رش هوائي (airless) 5 % \xb7 فرشاة 10 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN لراتنج السيليكون

【تحضير السطح】
أزل الشحوم بمنظف مناسب وأزل الأملاح / الأوساخ بماء عذب عالي الضغط؛ ونفّذ التنظيف بالسفح حتى درجة Sa 2.5 قبل التطبيق.

【النظام الموصى به (أكواد HN)】
HN-HT-200 \xd71 طبقة/طبقات（0.08 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-HT-400",desc:{en:"Boilers, kilns and stacks — full data sheet on request",zh:"锅炉、窑炉及烟囱，完整 TDS 备索",vi:"Lò hơi, lò nung và ống khói — TDS đầy đủ theo yêu cầu",es:"Calderas, hornos y chimeneas — ficha de datos completa a pedido",ar:"الغلايات والأفران والمداخن — ورقة بيانات كاملة عند الطلب"},details:{en:`【Overview】
Black silicone-based high-temperature grade for continuous service around 400 \xb0C on boilers, kilns and furnace equipment. Single-pack, air-drying. Request the full TDS for mixing, DFT and curing data before specification.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
黑色有机硅耐高温等级，锅炉、窑炉及炉用设备约 400 ℃ 长期使用。单组份自干。选型前请索取完整 TDS 以获取混合、膜厚及固化数据。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Cấp chịu nhiệt silicone m\xe0u đen, hoạt động li\xean tục ~400 \xb0C tr\xean l\xf2 hơi, l\xf2 nung v\xe0 thiết bị l\xf2. 1 th\xe0nh phần, kh\xf4 tự nhi\xean. Vui l\xf2ng y\xeau cầu TDS đầy đủ trước khi chọn hệ.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Grado negro de base silicona para alta temperatura, para servicio continuo de alrededor de 400 \xb0C en calderas, hornos y equipos t\xe9rmicos. Monocomponente, de secado al aire. Solicite la TDS completa con datos de mezcla, DFT y curado antes de especificar.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
درجة سيليكون سوداء عالية الحرارة لخدمة مستمرة عند نحو 400 \xb0C على الغلايات والأفران ومعدات الأفران. أحادية العبوة، تجف هوائياً. اطلب ورقة TDS الكاملة لبيانات الخلط والسماكة والتصلد قبل اعتماد المواصفة.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-HT-600",desc:{en:"Turbine casings and high-heat plant — full data sheet on request",zh:"涡轮壳体及高温设备，完整 TDS 备索",vi:"Vỏ tuabin và thiết bị nhiệt cao — TDS đầy đủ theo yêu cầu",es:"Carcasas de turbinas y plantas de alto calor — ficha de datos completa a pedido",ar:"أغلفة التوربينات والمعدات عالية الحرارة — ورقة بيانات كاملة عند الطلب"},details:{en:`【Overview】
Inorganic ceramic-binder coating for continuous service up to about 600 \xb0C (turbine housings, hot plant). Application and cure differ from silicone grades. Request the full TDS and application guide before specification.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
无机陶瓷粘结剂涂料，涡轮壳体等高温设备最高约 600 ℃ 长期使用。施工与固化方式不同于有机硅等级。选型前请索取完整 TDS 及施工指南。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn keo ceramic v\xf4 cơ cho dịch vụ li\xean tục tới ~600 \xb0C (vỏ tuabin, thiết bị nhiệt). Thi c\xf4ng v\xe0 đ\xf3ng rắn kh\xe1c c\xe1c cấp silicone. Vui l\xf2ng y\xeau cầu TWS đầy đủ trước khi chọn hệ.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento inorg\xe1nico de aglutinante cer\xe1mico para servicio continuo de hasta unos 600 \xb0C (carcasas de turbinas, plantas calientes). La aplicaci\xf3n y el curado difieren de los grados de silicona. Solicite la TDS completa y la gu\xeda de aplicaci\xf3n antes de especificar.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء برابطة سيراميكية غير عضوية لخدمة مستمرة حتى نحو 600 \xb0C (أغلفة التوربينات، المعدات الساخنة). يختلف التطبيق والتصلد عن درجات السيليكون. اطلب ورقة TDS الكاملة ودليل التطبيق قبل اعتماد المواصفة.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-HT-CUS",desc:{en:"Custom colour and temperature rating — sample typically in 7–15 days",zh:"定制颜色与耐温等级，通常 7–15 天出样",vi:"Màu và cấp nhiệt độ riêng — mẫu thường trong 7–15 ngày",es:"Color y grado de temperatura a medida — muestra normalmente en 7–15 días",ar:"لون وتصنيف حراري مخصّصان — العينة عادة خلال 7–15 يوماً"},details:{en:`【Overview】
Custom silicone / ceramic formulations tuned to your target temperature, colour and substrate; lab samples typically within 7–15 days depending on complexity.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
按目标温度、颜色与基材定制的有机硅/陶瓷配方；视复杂程度通常 7–15 天内提供实验室样品。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Phối chế silicone/ceramic theo nhiệt độ mục ti\xeau, m\xe0u v\xe0 bề mặt; mẫu ph\xf2ng th\xed nghiệm thường trong 7–15 ng\xe0y t\xf9y độ phức tạp.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Formulaciones de silicona / cer\xe1mica a medida, ajustadas a su temperatura objetivo, color y sustrato; muestras de laboratorio normalmente en 7–15 d\xedas seg\xfan la complejidad.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
تركيبات سيليكون/سيراميك مخصّصة مضبوطة على درجة الحرارة المستهدفة واللون والركيزة لديك؛ وعينات المختبر عادة خلال 7–15 يوماً بحسب التعقيد.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}}],image:"/images/product-hightemp.jpg",applications:[{en:"Industrial boilers & smokestacks",zh:"工业锅炉与烟囱",vi:"Lò hơi & ống khói",es:"Calderas y chimeneas industriales",ar:"الغلايات الصناعية والمداخن"},{en:"Exhaust manifolds & kilns",zh:"排气歧管与窑炉",vi:"Ống xả & lò nung",es:"Múltiples de escape y hornos",ar:"مجمعات العوادم والأفران"},{en:"Steam pipes & turbine housings",zh:"蒸汽管道与涡轮壳体",vi:"Ống hơi & vỏ tuabin",es:"Tuberías de vapor y carcasas de turbinas",ar:"أنابيب البخار وأغلفة التوربينات"},{en:"Engine blocks & heat-treatment fixtures",zh:"发动机缸体与热处理工装",vi:"Thân động cơ & đồ gá nhiệt luyện",es:"Bloques de motor y utillajes de tratamiento térmico",ar:"كتل المحركات وتجهيزات المعالجة الحرارية"}]},{code:"CAT-03",title:{en:"Epoxy Floor Coatings",zh:"工业地坪漆",vi:"Sơn nền công nghiệp",es:"Recubrimientos epoxi para pisos",ar:"طلاءات أرضيات الإيبوكسي"},short:{en:"Self-leveling · Roll-coat · Waterborne · PU sealers",zh:"自流平·平涂·水性·聚氨酯罩光",vi:"Tự chảy · lăn · gốc nước · phủ PU",es:"Autonivelante · A rodillo · Base agua · Selladores de PU",ar:"ذاتي التسوية · طلاء بالرولر · أساس مائي · ختمات PU"},description:{en:"Heavy-duty epoxy and polyurethane floor systems for warehouses, manufacturing plants, parking decks and clean rooms — solvent-free self-leveling builds of 2–3 mm, economical roll-coat systems and low-odour waterborne options.",zh:"仓库、厂房、停车场及洁净室的重型环氧与聚氨酯地坪体系——2–3 mm 无溶剂自流平、经济型平涂及低气味水性方案。",vi:"Hệ sàn epoxy và polyurethane hạng nặng cho kho, nhà máy, bãi đỗ xe và phòng sạch — tự chảy không dung môi 2–3 mm, hệ lăn kinh tế và phương án gốc nước ít mùi.",es:"Sistemas de pisos epoxi y poliuretano de servicio pesado para almacenes, plantas industriales, parkings y salas limpias — sistemas autonivelantes libres de disolvente de 2–3 mm, sistemas económicos de aplicación a rodillo y opciones base agua de bajo olor.",ar:"أنظمة أرضيات إيبوكسي وبولي يوريثان للأحمال الثقيلة للمستودعات والمصانع ومواقف السيارات والغرف النظيفة — أنظمة ذاتية التسوية خالية من المذيبات بسماكة 2–3 مم، وأنظمة رولر اقتصادية، وخيارات أساس مائي منخفضة الرائحة."},features:[{en:"Solvent-free self-leveling — 100 % solids, 2–3 mm builds",zh:"无溶剂自流平——100% 固含，2–3 mm 膜厚",vi:"Tự chảy không dung môi — 100 % rắn, 2–3 mm",es:"Autonivelante sin solventes — 100 % sólidos, espesores de 2–3 mm",ar:"ذاتي التسوية خالٍ من المذيبات — 100 % مواد صلبة، وسماكات 2–3 mm"},{en:"Complete systems: sealer → putty/mortar → topcoat → sealer",zh:"体系完整：封闭 → 砂浆/腻子 → 面涂 → 罩光",vi:"Hệ trọn bộ: khóa → vữa/bột trét → lớp phủ → phủ trong",es:"Sistemas completos: sellador → masilla/mortero → acabado → sellador",ar:"أنظمة كاملة: ختم → معجون/مونة → طبقة نهائية → ختم"},{en:"Roll-coat epoxy for economical large-area coverage",zh:"平涂型环氧，大面积经济施工",vi:"Epoxy lăn cho diện tích lớn kinh tế",es:"Epoxi de aplicación a rodillo para cobertura económica de grandes superficies",ar:"إيبوكسي بالرولر لتغطية اقتصادية للمساحات الكبيرة"},{en:"Waterborne low-odour option; applies to green concrete",zh:"水性低气味方案，可涂未干透混凝土",vi:"Gốc nước ít mùi; sơn được bê tông non",es:"Opción base agua de baja emisión de olores; aplicable sobre concreto aún no curado",ar:"خيار أساس مائي منخفض الرائحة؛ ويُطبَّق على الخرسانة غير المتصلدة"}],specs:[{label:{en:"System",zh:"系统",vi:"Hệ thống",es:"Sistema",ar:"النظام"},value:"Self-leveling / Roll-coat"},{label:{en:"Thickness",zh:"厚度",vi:"Độ dày",es:"Espesor",ar:"السماكة"},value:"90 μm – 3 mm"},{label:{en:"Solids (SL grade)",zh:"固含（自流平）",vi:"Rắn (tự chảy)",es:"Sólidos (grado autonivelante)",ar:"المواد الصلبة (درجة SL)"},value:"100 %"},{label:{en:"Traffic",zh:"上人时间",vi:"Đi lại",es:"Tránsito",ar:"زمن السير"},value:"24–36 h"}],categorySpecs:[{label:{en:"Build",zh:"膜厚",vi:"Độ dày",es:"Espesor de película",ar:"السماكة"},value:"90 μm–3 mm"},{label:{en:"Solids",zh:"固含",vi:"Hàm lượng rắn",es:"Sólidos",ar:"المواد الصلبة"},value:"up to 100 %"},{label:{en:"Coats",zh:"道数",vi:"Số lớp",es:"Capas",ar:"عدد الطبقات"},value:"3–4"},{label:{en:"Full cure",zh:"完全固化",vi:"Đóng rắn hết",es:"Curado completo",ar:"التصلد الكامل"},value:"7 d"}],models:[{model:"HN-FL-101",desc:{en:"100 % solids self-leveling epoxy — seamless heavy-duty floors, 2–3 mm builds",zh:"100% 固含自流平环氧，2–3 mm 无缝重载地坪",vi:"Epoxy tự chảy 100 % rắn — nền liền mạch hạng nặng 2–3 mm",es:"Epoxi autonivelante de 100 % sólidos — pisos continuos de servicio pesado, espesores de 2–3 mm",ar:"إيبوكسي ذاتي التسوية بنسبة مواد صلبة 100 % — أرضيات شديدة التحمل بلا فواصل بسماكات 2–3 mm"},details:{en:`【Overview】
Solvent-free, self-leveling high-build epoxy for tough, seamless floors. Applied with a notched trowel / spiked roller to 2–3 mm; anti-static, anti-slip or orange-peel textures possible with adjusted mixes. Full cure 7 days; foot traffic after ~36 h.

【Typical applications】
Floors under severe vehicle wear and chemical attack — factories, warehouses and parking decks.

【Physical & application data】
Binder / resin：Self-leveling epoxy
Colour：Wide colour range
Mix ratio (base : hardener)：base : hardener = 5 : 1 (by weight)
Volume solids：100 %
Flash point：100 \xb0C
Density：1.5 kg/L
Recommended DFT：2–3 mm (WFT ≈ DFT)
Drying (touch-dry / full cure)：24 h foot traffic / 7 d full cure (20 \xb0C)
Recoating interval (min / max)：36 h – 3 d (20 \xb0C)
Finish：Gloss
Application methods：Notched trowel / spiked roller
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
HN-FL-503 sealer \xd71 coat(s)（0.10 L/m\xb2）
epoxy mortar / putty \xd71 coat(s)（per spec）
HN-FL-101 \xd71 coat(s)（2–3 mm）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
无溶剂、自流平、涂层坚实的厚浆环氧涂料。用齿形刮板/消泡辊施工至 2–3 mm；调整配比可实现防静电、防滑或桔皮纹等特殊效果。完全固化 7 天，约 36 小时后可上人。

【适用范围】
受车辆磨损和化学品腐蚀严重的地坪：工厂、仓库及车库。

【物理与应用参数】
漆基：自流平环氧
颜色：多种颜色
混合比例（漆基：固化剂）：base : hardener = 5 : 1 （重量比）
体积固体含量：100 %
闪点：100 \xb0C
比重：1.5 kg/L
推荐干膜厚度：2–3 mm (WFT ≈ DFT)
干燥时间（表干 / 完全固化）：24 h 可上人 / 7 d 完全固化 (20 \xb0C)
重涂间隔（最小 / 最大）：36 h – 3 d (20 \xb0C)
漆面：有光
施工方法：齿形刮板 / 消泡辊
清洗剂：HN 配套环氧稀释剂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
HN-FL-503 sealer \xd71 遍（0.10 L/m\xb2）
epoxy mortar / putty \xd71 遍（per spec）
HN-FL-101 \xd71 遍（2–3 mm）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Epoxy d\xe0y tự chảy kh\xf4ng dung m\xf4i cho nền liền mạch chắc chắn. Thi c\xf4ng bằng bay răng/lăn gai tới 2–3 mm; c\xf3 thể hiệu ứng chống tĩnh điện, chống trượt, vỏ cam bằng tỷ lệ pha ri\xeang. Đ\xf3ng rắn ho\xe0n to\xe0n 7 ng\xe0y; đi lại sau ~36 giờ.

【Phạm vi ứng dụng】
Nền chịu m\xe0i m\xf2n xe v\xe0 h\xf3a chất nghi\xeam trọng — nh\xe0 xưởng, kho, b\xe3i đỗ xe.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy tự chảy
M\xe0u sắc：Nhiều m\xe0u
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：base : hardener = 5 : 1 (theo khối lượng)
H\xe0m lượng rắn theo thể t\xedch：100 %
Điểm bắt lửa：100 \xb0C
Khối lượng ri\xeang：1.5 kg/L
Độ d\xe0y m\xe0ng kh\xf4 khuyến nghị：2–3 mm (WFT ≈ DFT)
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：24 h đi lại / 7 d đ\xf3ng rắn ho\xe0n to\xe0n (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：36 h – 3 d (20 \xb0C)
Bề mặt：B\xf3ng
Phương ph\xe1p thi c\xf4ng：Bay răng / lăn gai
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-FL-503 sealer \xd71 lớp（0.10 L/m\xb2）
epoxy mortar / putty \xd71 lớp（per spec）
HN-FL-101 \xd71 lớp（2–3 mm）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Epoxi de alto espesor, autonivelante y sin solventes, para pisos exigentes y sin juntas. Se aplica con llana dentada / rodillo de p\xfaas a 2–3 mm; con mezclas ajustadas son posibles texturas antiest\xe1ticas, antideslizantes o de piel de naranja. Curado completo en 7 d\xedas; tr\xe1nsito peatonal tras ~36 h.

【Aplicaciones t\xedpicas】
Pisos sometidos a desgaste vehicular severo y ataque qu\xedmico — f\xe1bricas, almacenes y cubiertas de estacionamiento.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi autonivelante
Color：Amplia gama de colores
Relaci\xf3n de mezcla (base : endurecedor)：base : hardener = 5 : 1 (en peso)
S\xf3lidos en volumen：100 %
Punto de inflamaci\xf3n：100 \xb0C
Densidad：1.5 kg/L
DFT recomendado：2–3 mm (WFT ≈ DFT)
Secado (seco al tacto / curado completo)：24 h tr\xe1nsito peatonal / 7 d curado completo (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：36 h – 3 d (20 \xb0C)
Acabado：Brillante
M\xe9todos de aplicaci\xf3n：Llana dentada / rodillo de p\xfaas
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
HN-FL-503 sealer \xd71 capa(s)（0.10 L/m\xb2）
epoxy mortar / putty \xd71 capa(s)（per spec）
HN-FL-101 \xd71 capa(s)（2–3 mm）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
إيبوكسي عالي السماكة ذاتي التسوية خالٍ من المذيبات لأرضيات متينة بلا فواصل. يُطبَّق بمسطرين مسنّن/رولر شائك حتى 2–3 mm؛ ويمكن بتركيبات معدَّلة تحقيق ملمس مضاد للكهرباء الساكنة أو مانع للانزلاق أو بقشرة البرتقال. التصلد الكامل 7 أيام؛ وسير المشاة بعد نحو 36 h.

【التطبيقات النموذجية】
أرضيات تتعرض لبري المركبات وهجوم كيميائي شديد — المصانع والمستودعات وأرصفة وقوف السيارات.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي ذاتي التسوية
اللون：مدى ألوان واسع
نسبة الخلط (الأساس : مادة التصلب)：base : hardener = 5 : 1 (بالوزن)
المواد الصلبة بالحجم：100 %
نقطة الوميض：100 \xb0C
الكثافة：1.5 kg/L
سماكة الغشاء الجاف الموصى بها (DFT)：2–3 mm (WFT ≈ DFT)
الجفاف (الجفاف السطحي / التصلد الكامل)：24 h سير المشاة / 7 d التصلد الكامل (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：36 h – 3 d (20 \xb0C)
التشطيب：لامع
طرق التطبيق：مسطرين مسنّن / رولر شائك
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
HN-FL-503 sealer \xd71 طبقة/طبقات（0.10 L/m\xb2）
epoxy mortar / putty \xd71 طبقة/طبقات（per spec）
HN-FL-101 \xd71 طبقة/طبقات（2–3 mm）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-FL-202",desc:{en:"Two-pack solvent-borne epoxy floor paint — tough, chemical-resistant, easy clean",zh:"双组份溶剂型环氧地坪漆，坚韧耐化学品、易清洁",vi:"Sơn nền epoxy 2 thành phần — bền, chịu hóa chất, dễ vệ sinh",es:"Pintura para pisos epoxi base solvente de dos componentes — tenaz, resistente a productos químicos, de fácil limpieza",ar:"طلاء أرضيات إيبوكسي ثنائي العبوة بالمذيبات — متين ومقاوم للكيماويات وسهل التنظيف"},details:{en:`【Overview】
Two-pack solvent-borne floor coating for concrete and steel decks, chemically curing to a tough film: excellent adhesion, abrasion and impact resistance, resistant to many chemicals, easy to clean and renovate.

【Typical applications】
Factory floors, stockyards and sports grounds; mid-coat / finish in corrosive environments and tunnels (not recommended as outdoor finish).

【Physical & application data】
Binder / resin：Epoxy
Colour：Wide colour range
Mix ratio (base : hardener)：4 : 1 (by weight)
Pot life：8 h (20 \xb0C)
Flash point：30 \xb0C
Density：1.4 kg/L
Volume solids：55 %
Theoretical spreading rate：6 m\xb2/L @ 90 μm DFT
Drying (touch-dry / full cure)：8–10 h / 7 d (20 \xb0C, 70 % RH)
Recoating interval (min / max)：8 h – 7 d
Finish：Gloss
Application methods：Airless spray \xb7 brush \xb7 roller \xb7 conventional spray
Thinner (max, by method)：brush & roller 10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
HN-FL-503 sealer \xd71 coat(s)（0.10 L/m\xb2）
HN-FL-202 \xd72 coat(s)（0.30 L/m\xb2 roll-coat）
HN-FL-501 PU sealer \xd71 coat(s)（0.10 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份溶剂型高级地台用漆，专用于混凝土和钢板地台，化学固化干燥型：漆膜坚韧耐用、附着力佳，耐磨抗碰撞性能极佳，能抵抗多种化学品侵蚀，易清洗和翻新施工。

【适用范围】
工厂、堆场、运动场等地坪；腐蚀环境及隧道的中间漆/面漆（不推荐用作户外面漆）。

【物理与应用参数】
漆基：环氧树脂
颜色：多种颜色
混合比例（漆基：固化剂）：4 : 1 （重量比）
混合使用期：8 h (20 \xb0C)
闪点：30 \xb0C
比重：1.4 kg/L
体积固体含量：55 %
理论涂布率：6 m\xb2/L @ 90 μm DFT
干燥时间（表干 / 完全固化）：8–10 h / 7 d (20 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：8 h – 7 d
漆面：有光
施工方法：无气喷涂 \xb7 刷涂 \xb7 辊涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂和辊涂 10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
HN-FL-503 sealer \xd71 遍（0.10 L/m\xb2）
HN-FL-202 \xd72 遍（0.30 L/m\xb2 roll-coat）
HN-FL-501 PU sealer \xd71 遍（0.10 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn nền 2 th\xe0nh phần cho b\xea t\xf4ng v\xe0 s\xe0n th\xe9p, đ\xf3ng rắn h\xf3a học th\xe0nh m\xe0ng bền: b\xe1m d\xednh tốt, chịu m\xe0i m\xf2n v\xe0 va đập xuất sắc, kh\xe1ng nhiều h\xf3a chất, dễ vệ sinh v\xe0 cải tạo.

【Phạm vi ứng dụng】
Nền nh\xe0 xưởng, b\xe3i h\xe0ng, s\xe2n thể thao; lớp giữa/lớp phủ trong m\xf4i trường ăn m\xf2n v\xe0 hầm đường (kh\xf4ng khuyến nghị l\xe0m lớp phủ ngo\xe0i trời).

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：Nhiều m\xe0u
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：4 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：8 h (20 \xb0C)
Điểm bắt lửa：30 \xb0C
Khối lượng ri\xeang：1.4 kg/L
H\xe0m lượng rắn theo thể t\xedch：55 %
Suất sơn l\xfd thuyết：6 m\xb2/L @ 90 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：8–10 h / 7 d (20 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：8 h – 7 d
Bề mặt：B\xf3ng
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 lăn \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ v\xe0 lăn 10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-FL-503 sealer \xd71 lớp（0.10 L/m\xb2）
HN-FL-202 \xd72 lớp（0.30 L/m\xb2 roll-coat）
HN-FL-501 PU sealer \xd71 lớp（0.10 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento para pisos base solvente de dos componentes para cubiertas de concreto y acero, con curado qu\xedmico hasta una pel\xedcula tenaz: excelente adherencia, resistencia a la abrasi\xf3n y al impacto, resistente a numerosos productos qu\xedmicos, f\xe1cil de limpiar y renovar.

【Aplicaciones t\xedpicas】
Pisos de f\xe1bricas, patios de almacenamiento y canchas deportivas; capa intermedia / acabado en ambientes corrosivos y t\xfaneles (no recomendado como acabado exterior).

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Amplia gama de colores
Relaci\xf3n de mezcla (base : endurecedor)：4 : 1 (en peso)
Vida \xfatil de la mezcla：8 h (20 \xb0C)
Punto de inflamaci\xf3n：30 \xb0C
Densidad：1.4 kg/L
S\xf3lidos en volumen：55 %
Rendimiento te\xf3rico：6 m\xb2/L @ 90 μm DFT
Secado (seco al tacto / curado completo)：8–10 h / 7 d (20 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：8 h – 7 d
Acabado：Brillante
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 rodillo \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha y rodillo 10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
HN-FL-503 sealer \xd71 capa(s)（0.10 L/m\xb2）
HN-FL-202 \xd72 capa(s)（0.30 L/m\xb2 roll-coat）
HN-FL-501 PU sealer \xd71 capa(s)（0.10 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء أرضيات ثنائي العبوة بالمذيبات للأرضيات الخرسانية والفولاذية، يتصلب كيميائياً إلى غشاء متين: التصاق ممتاز ومقاومة عالية للبري والصدمات، ومقاومة لكثير من الكيماويات، وسهل التنظيف والتجديد.

【التطبيقات النموذجية】
أرضيات المصانع والساحات والملاعب؛ وطبقة وسطى/نهائية في البيئات المسببة للتآكل والأنفاق (لا يُوصى به طبقةً نهائية خارجية).

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：مدى ألوان واسع
نسبة الخلط (الأساس : مادة التصلب)：4 : 1 (بالوزن)
العمر الاستخدامي للخليط：8 h (20 \xb0C)
نقطة الوميض：30 \xb0C
الكثافة：1.4 kg/L
المواد الصلبة بالحجم：55 %
معدل الانتشار النظري：6 m\xb2/L @ 90 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：8–10 h / 7 d (20 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：8 h – 7 d
التشطيب：لامع
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة ورولر 10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
HN-FL-503 sealer \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-FL-202 \xd72 طبقة/طبقات（0.30 L/m\xb2 roll-coat）
HN-FL-501 PU sealer \xd71 طبقة/طبقات（0.10 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-FL-303",desc:{en:"Low-odour waterborne epoxy — applies to not-fully-cured concrete, fast schedules",zh:"水性环氧低气味，可涂未干透混凝土，适合赶工",vi:"Epoxy gốc nước ít mùi — sơn được bê tông chưa khô hoàn toàn, tiến độ nhanh",es:"Epoxi base agua de baja emisión de olores — aplicable sobre concreto no totalmente curado, para cronogramas ajustados",ar:"إيبوكسي أساس مائي منخفض الرائحة — يُطبَّق على الخرسانة غير المتصلدة تماماً ويناسب الجداول السريعة"},details:{en:`【Overview】
Waterborne epoxy floor coating built from a special epoxy-emulsion polymer with functional fillers and additives — combining abrasion resistance with flexibility, eco-friendly and durable, excellent value. Air-drying and easy to apply; can be coated onto not-yet-fully-dry concrete, suiting tight schedules.

【Typical applications】
Workshops, offices, halls and stores; health-sensitive interiors; floors with higher safety requirements (e.g. electrical rooms).

【Physical & application data】
Binder / resin：Waterborne epoxy
Colour：Wide colour range
Theoretical spreading rate：10 m\xb2/L @ 28 μm DFT
Drying (touch-dry / full cure)：1 h touch / 48 h hard (20 \xb0C, 70 % RH)
Recoating interval (min / max)：8 h – no limit
Thinner (max, by method)：Water: brush & roller 10 % \xb7 spray 15 %
Cleaner：Water
Application methods：Brush \xb7 spray \xb7 airless spray

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
waterborne floor primer (HN supply) \xd71 coat(s)（8 m\xb2/kg）
HN-FL-303 \xd72 coat(s)（4 m\xb2/kg）
waterborne clear sealer \xd71 coat(s)（8 m\xb2/kg）

【Safety】
Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
采用特种环氧高分子聚合物乳液与高硬度功能型填料、高性能助剂优化组合精制而成，集耐磨性与柔韧性于一体，环保耐用、性价比优越。本品自干、施工方便，亦可涂装于未干透的混凝土表面，适合赶工期施工。

【适用范围】
车间、办公室、馆所、店堂等地面；对健康环保要求高的室内地板；安全性要求较高的电房地板。

【物理与应用参数】
漆基：水性环氧
颜色：多种颜色
理论涂布率：10 m\xb2/L @ 28 μm DFT
干燥时间（表干 / 完全固化）：1 h touch / 48 h 硬干 (20 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：8 h – 不限
稀释剂（最大用量）：水: 刷涂和辊涂 10 % \xb7 喷涂 15 %
清洗剂：水
施工方法：Brush \xb7 喷涂 \xb7 无气喷涂 喷涂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
waterborne floor primer (HN supply) \xd71 遍（8 m\xb2/kg）
HN-FL-303 \xd72 遍（4 m\xb2/kg）
waterborne clear sealer \xd71 遍（8 m\xb2/kg）

【安全守则】
水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn nền epoxy gốc nước từ nhũ tương epoxy polymer đặc biệt với chất độn chức năng v\xe0 phụ gia — kết hợp chống m\xe0i m\xf2n v\xe0 độ dẻo, th\xe2n thiện m\xf4i trường, bền, hiệu quả chi ph\xed cao. Kh\xf4 tự nhi\xean, thi c\xf4ng dễ; sơn được l\xean b\xea t\xf4ng chưa kh\xf4 ho\xe0n to\xe0n, ph\xf9 hợp tiến độ gấp.

【Phạm vi ứng dụng】
Xưởng, văn ph\xf2ng, hội trường, cửa h\xe0ng; s\xe0n trong nh\xe0 y\xeau cầu th\xe2n thiện sức khỏe; s\xe0n ph\xf2ng điện y\xeau cầu an to\xe0n cao.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy gốc nước
M\xe0u sắc：Nhiều m\xe0u
Suất sơn l\xfd thuyết：10 m\xb2/L @ 28 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h touch / 48 h hard (20 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：8 h – kh\xf4ng giới hạn
Dung m\xf4i pha (tối đa)：Nước: cọ v\xe0 lăn 10 % \xb7 phun 15 %
Dung dịch vệ sinh：Nước
Phương ph\xe1p thi c\xf4ng：Brush \xb7 phun \xb7 phun airless

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
waterborne floor primer (HN supply) \xd71 lớp（8 m\xb2/kg）
HN-FL-303 \xd72 lớp（4 m\xb2/kg）
waterborne clear sealer \xd71 lớp（8 m\xb2/kg）

【An to\xe0n】
Sản phẩm gốc nước: đậy k\xedn hộp v\xe0 để xa tầm tay trẻ em. Th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sơn kh\xf4; đeo khẩu trang khi m\xe0i. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng lại v\xe0o hộp gốc. Bảo quản nơi kh\xf4 m\xe1t, tr\xe1nh đ\xf3ng băng.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento para pisos epoxi base agua elaborado con un pol\xedmero especial en emulsi\xf3n epoxi, cargas funcionales y aditivos — combina resistencia a la abrasi\xf3n con flexibilidad; ecol\xf3gico, duradero y de excelente relaci\xf3n costo-beneficio. De secado al aire y f\xe1cil de aplicar; puede aplicarse sobre concreto a\xfan no completamente seco, ideal para cronogramas ajustados.

【Aplicaciones t\xedpicas】
Talleres, oficinas, salas y locales; interiores sensibles a la salud; pisos con mayores requisitos de seguridad (p. ej., salas el\xe9ctricas).

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi base agua
Color：Amplia gama de colores
Rendimiento te\xf3rico：10 m\xb2/L @ 28 μm DFT
Secado (seco al tacto / curado completo)：1 h touch / 48 h seco duro (20 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：8 h – sin l\xedmite
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Agua: brocha y rodillo 10 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Agua
M\xe9todos de aplicaci\xf3n：Brush \xb7 pulverizaci\xf3n \xb7 airless pulverizaci\xf3n

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
waterborne floor primer (HN supply) \xd71 capa(s)（8 m\xb2/kg）
HN-FL-303 \xd72 capa(s)（4 m\xb2/kg）
waterborne clear sealer \xd71 capa(s)（8 m\xb2/kg）

【Seguridad】
Producto base agua: mantener los envases bien cerrados y fuera del alcance de los ni\xf1os. Garantizar buena ventilaci\xf3n durante el uso y el secado; usar mascarilla para polvo al lijar. No verter la pintura diluida de vuelta al envase original. Almacenar en un lugar fresco y seco, proteger de las heladas.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء أرضيات إيبوكسي أساس مائي مبني على بوليمر مستحلب إيبوكسي خاص مع حشوات ومضافات وظيفية — يجمع مقاومة البري مع المرونة، صديق للبيئة ومتين وبقيمة ممتازة. يجف هوائياً وسهل التطبيق؛ ويمكن طلاؤه على الخرسانة غير الجافة تماماً بما يناسب الجداول الزمنية الضيقة.

【التطبيقات النموذجية】
ورش المكاتب والقاعات والمتاجر؛ والفراغات الداخلية الحساسة صحياً؛ والأرضيات ذات متطلبات السلامة الأعلى (مثل غرف الكهرباء).

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي أساس مائي
اللون：مدى ألوان واسع
معدل الانتشار النظري：10 m\xb2/L @ 28 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h touch / 48 ساعة حتى الجفاف الصلب (20 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：8 h – بلا حد
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：ماء: فرشاة ورولر 10 % \xb7 رش 15 %
مادة التنظيف：ماء
طرق التطبيق：Brush \xb7 رش \xb7 رش هوائي (airless) رش

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
waterborne floor primer (HN supply) \xd71 طبقة/طبقات（8 m\xb2/kg）
HN-FL-303 \xd72 طبقة/طبقات（4 m\xb2/kg）
waterborne clear sealer \xd71 طبقة/طبقات（8 m\xb2/kg）

【السلامة】
منتج أساس مائي: تُغلق العبوات بإحكام وتُبقى بعيداً عن متناول الأطفال. تأكد من التهوية الجيدة أثناء الاستخدام والجفاف؛ وارتدِ كمامة غبار عند الصنفرة. لا تُعاد الطلاء المخفف إلى العبوة الأصلية. يُحفظ في مكان بارد جاف، ويُحمى من الصقيع.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-FL-404",desc:{en:"Fast-drying two-pack PU floor finish — indoor & outdoor decks",zh:"快干型双组份聚氨酯地坪面漆，室内外均可",vi:"Sơn nền PU 2 thành phần khô nhanh — sàn trong và ngoài trời",es:"Acabado para pisos de PU de dos componentes, de secado rápido — cubiertas interiores y exteriores",ar:"طلاء نهائي أرضيات بولي يوريثان ثنائي العبوة سريع الجفاف — أرصفة داخلية وخارجية"},details:{en:`【Overview】
Fast-drying two-pack polyurethane floor finish with good colour retention and application properties, for concrete and steel decks; especially suitable for sports floors (tennis, badminton, baseball).

【Typical applications】
Indoor / outdoor floors and sports venues; mid / finish coats in corrosive environments.

【Physical & application data】
Binder / resin：Polyurethane
Colour：Wide colour range
Flash point：30 \xb0C
Density：1.3 kg/L
Volume solids：55 %
Theoretical spreading rate：6 m\xb2/L @ 90 μm DFT
Drying (touch-dry / full cure)：1 h / 48 h hard (20 \xb0C, 70 % RH)
Recoating interval (min / max)：4 h – 3 d
Application methods：Airless spray \xb7 brush \xb7 roller \xb7 conventional spray
Thinner (max, by method)：brush & roller 10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN PU thinner

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
HN-FL-503 sealer \xd71 coat(s)（0.10 L/m\xb2）
HN-FL-404 \xd72 coat(s)（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 coat(s)（0.10 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
快干型双组份地坪面漆，保色性及施工性能良好，专用于混凝土和钢板地台，可用作室内及户外高级地坪涂料；特别适用于网球场、羽毛球场、棒球场等运动场馆地坪。

【适用范围】
室内外地坪及运动场馆；腐蚀环境中的中间漆/面漆。

【物理与应用参数】
漆基：聚氨酯
颜色：多种颜色
闪点：30 \xb0C
比重：1.3 kg/L
体积固体含量：55 %
理论涂布率：6 m\xb2/L @ 90 μm DFT
干燥时间（表干 / 完全固化）：1 h / 48 h 硬干 (20 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：4 h – 3 d
施工方法：无气喷涂 \xb7 刷涂 \xb7 辊涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂和辊涂 10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套聚氨酯稀释剂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
HN-FL-503 sealer \xd71 遍（0.10 L/m\xb2）
HN-FL-404 \xd72 遍（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 遍（0.10 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn nền PU 2 th\xe0nh phần kh\xf4 nhanh, giữ m\xe0u v\xe0 thi c\xf4ng tốt, cho s\xe0n b\xea t\xf4ng v\xe0 th\xe9p; đặc biệt ph\xf9 hợp s\xe2n thể thao (tennis, cầu l\xf4ng, baseball).

【Phạm vi ứng dụng】
S\xe0n trong/ngo\xe0i trời v\xe0 s\xe2n thể thao; lớp giữa/lớp phủ m\xf4i trường ăn m\xf2n.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Polyurethane
M\xe0u sắc：Nhiều m\xe0u
Điểm bắt lửa：30 \xb0C
Khối lượng ri\xeang：1.3 kg/L
H\xe0m lượng rắn theo thể t\xedch：55 %
Suất sơn l\xfd thuyết：6 m\xb2/L @ 90 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h / 48 h hard (20 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：4 h – 3 d
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 lăn \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ v\xe0 lăn 10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i PU HN

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-FL-503 sealer \xd71 lớp（0.10 L/m\xb2）
HN-FL-404 \xd72 lớp（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 lớp（0.10 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado para pisos de poliuretano de dos componentes, de secado r\xe1pido, con buena retenci\xf3n de color y buenas propiedades de aplicaci\xf3n, para cubiertas de concreto y acero; especialmente apto para pisos deportivos (tenis, b\xe1dminton, b\xe9isbol).

【Aplicaciones t\xedpicas】
Pisos interiores y exteriores y recintos deportivos; capas intermedias / de acabado en ambientes corrosivos.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Poliuretano
Color：Amplia gama de colores
Punto de inflamaci\xf3n：30 \xb0C
Densidad：1.3 kg/L
S\xf3lidos en volumen：55 %
Rendimiento te\xf3rico：6 m\xb2/L @ 90 μm DFT
Secado (seco al tacto / curado completo)：1 h / 48 h seco duro (20 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：4 h – 3 d
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 rodillo \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha y rodillo 10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN PU correspondiente

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
HN-FL-503 sealer \xd71 capa(s)（0.10 L/m\xb2）
HN-FL-404 \xd72 capa(s)（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 capa(s)（0.10 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء نهائي أرضيات بولي يوريثان ثنائي العبوة سريع الجفاف بثبات جيد للون وخصائص تطبيق جيدة، للأرضيات الخرسانية والفولاذية؛ ومناسب خصيصاً لأرضيات الملاعب (التنس والريشة والبيسبول).

【التطبيقات النموذجية】
الأرضيات الداخلية/الخارجية والملاعب؛ والطبقات الوسطى/النهائية في البيئات المسببة للتآكل.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：بولي يوريثان
اللون：مدى ألوان واسع
نقطة الوميض：30 \xb0C
الكثافة：1.3 kg/L
المواد الصلبة بالحجم：55 %
معدل الانتشار النظري：6 m\xb2/L @ 90 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h / 48 ساعة حتى الجفاف الصلب (20 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：4 h – 3 d
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة ورولر 10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للبولي يوريثان

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
HN-FL-503 sealer \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-FL-404 \xd72 طبقة/طبقات（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 طبقة/طبقات（0.10 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-FL-501",desc:{en:"Clear PU sealer over epoxy / PU floors — weather & wear booster, applies at −10 °C",zh:"环氧/聚氨酯地坪罩光清漆，提升耐候耐磨，可 −10 ℃ 施工",vi:"Lớp phủ trong PU trên nền epoxy/PU — tăng chịu thời tiết và mài mòn, thi công được ở −10 °C",es:"Sellador transparente de PU sobre pisos epoxi / PU — mejora la resistencia a la intemperie y al desgaste, aplicable a −10 °C",ar:"ختم PU شفاف فوق أرضيات الإيبوكسي/PU — يعزز مقاومة الطقس والبري، ويُطبَّق عند −10 °C"},details:{en:`【Overview】
Premium clear sealer applied over epoxy and PU floor coatings to enhance weathering, wear and corrosion performance. Fast-drying; applicable at around −10 \xb0C; strong anti-staining resistance to alkalis, mild chemicals, acid rain and mould with good non-yellowing.

【Typical applications】
Clear sealing coat over epoxy / PU floors on concrete and steel decks.

【Physical & application data】
Binder / resin：Acrylic polyurethane
Colour：Clear
Mix ratio (base : hardener)：2 : 1 (by weight)
Flash point：31 \xb0C
Density：0.98 kg/L
Theoretical spreading rate：10 m\xb2/L (single coat)
Drying (touch-dry / full cure)：4 h / 3 d hard
Recoating interval (min / max)：4 h – 3 d
Application methods：Airless spray \xb7 brush \xb7 roller \xb7 conventional spray
Thinner (max, by method)：brush & roller 5 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN PU thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
HN-FL-501 \xd71 coat(s)（0.10 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
高级地坪罩光清漆，专门涂在已涂环氧地坪漆和聚氨酯地坪漆的表面，增强耐候耐磨及防腐性能。快干，可在 −10 ℃ 左右施工；抗污染能力强，耐碱、温和化学品、酸雨及霉菌，耐黄变性好。

【适用范围】
混凝土与钢台地坪上环氧/聚氨酯面层的罩光。

【物理与应用参数】
漆基：丙烯酸聚氨酯
颜色：透明
混合比例（漆基：固化剂）：2 : 1 （重量比）
闪点：31 \xb0C
比重：0.98 kg/L
理论涂布率：10 m\xb2/L (一道)
干燥时间（表干 / 完全固化）：4 h / 3 d 硬干
重涂间隔（最小 / 最大）：4 h – 3 d
施工方法：无气喷涂 \xb7 刷涂 \xb7 辊涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂和辊涂 5 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套聚氨酯稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
HN-FL-501 \xd71 遍（0.10 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Lớp phủ trong cao cấp sơn l\xean nền epoxy/PU để tăng chịu thời tiết, m\xe0i m\xf2n v\xe0 chống ăn m\xf2n. Kh\xf4 nhanh; thi c\xf4ng được khoảng −10 \xb0C; kh\xe1ng bẩn tốt, chịu kiềm, h\xf3a chất nhẹ, mưa axit v\xe0 nấm mốc, \xedt ố v\xe0ng.

【Phạm vi ứng dụng】
Lớp phủ trong tr\xean nền epoxy/PU, s\xe0n b\xea t\xf4ng v\xe0 th\xe9p.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Acrylic-polyurethane
M\xe0u sắc：Trong
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：2 : 1 (theo khối lượng)
Điểm bắt lửa：31 \xb0C
Khối lượng ri\xeang：0.98 kg/L
Suất sơn l\xfd thuyết：10 m\xb2/L (một lớp)
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：4 h / 3 d hard
Khoảng thời gian sơn lại (tối thiểu / tối đa)：4 h – 3 d
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 lăn \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ v\xe0 lăn 5 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i PU HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-FL-501 \xd71 lớp（0.10 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Sellador transparente premium que se aplica sobre recubrimientos para pisos epoxi y PU para mejorar el desempe\xf1o frente a la intemperie, el desgaste y la corrosi\xf3n. De secado r\xe1pido; aplicable a unos −10 \xb0C; fuerte resistencia a las manchas de \xe1lcalis, productos qu\xedmicos suaves, lluvia \xe1cida y moho, con buena resistencia al amarilleo.

【Aplicaciones t\xedpicas】
Capa de sellado transparente sobre pisos epoxi / PU en cubiertas de concreto y acero.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Poliuretano acr\xedlico
Color：Transparente
Relaci\xf3n de mezcla (base : endurecedor)：2 : 1 (en peso)
Punto de inflamaci\xf3n：31 \xb0C
Densidad：0.98 kg/L
Rendimiento te\xf3rico：10 m\xb2/L (capa \xfanica)
Secado (seco al tacto / curado completo)：4 h / 3 d seco duro
Intervalo de repintado (m\xedn / m\xe1x)：4 h – 3 d
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 rodillo \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha y rodillo 5 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN PU correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
HN-FL-501 \xd71 capa(s)（0.10 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
ختم شفاف فاخر يُطبَّق فوق طلاءات أرضيات الإيبوكسي وPU لتعزيز الأداء أمام الطقس والبري والتآكل. سريع الجفاف؛ وقابل للتطبيق عند نحو −10 \xb0C؛ ومقاومة تلطيخ قوية للقلويات والكيماويات المعتدلة والأمطار الحمضية والعفن مع ثبات جيد ضد الاصفرار.

【التطبيقات النموذجية】
طبقة ختم شفافة فوق أرضيات الإيبوكسي/PU على الأرصفة الخرسانية والفولاذية.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：بولي يوريثان أكريليك
اللون：شفاف
نسبة الخلط (الأساس : مادة التصلب)：2 : 1 (بالوزن)
نقطة الوميض：31 \xb0C
الكثافة：0.98 kg/L
معدل الانتشار النظري：10 m\xb2/L (طبقة واحدة)
الجفاف (الجفاف السطحي / التصلد الكامل)：4 h / 3 يوم حتى الجفاف الصلب
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：4 h – 3 d
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة ورولر 5 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للبولي يوريثان

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
HN-FL-501 \xd71 طبقة/طبقات（0.10 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-FL-502",desc:{en:"Waterborne acrylic floor paint — eco-friendly, fast schedule",zh:"水性丙烯酸地坪漆，环保、适合赶工",vi:"Sơn nền acrylic gốc nước — thân thiện môi trường, tiến độ nhanh",es:"Pintura para pisos acrílica base agua — ecológica, para cronogramas ajustados",ar:"طلاء أرضيات أكريليك أساس مائي — صديق للبيئة ويناسب الجداول السريعة"},details:{en:`【Overview】
Waterborne acrylic floor coating from a special polymer emulsion with functional fillers / additives — abrasion resistance plus flexibility, eco-friendly, durable and cost-effective; air-drying, easy application, can coat not-fully-dry concrete for tight schedules.

【Typical applications】
Workshops, offices, halls and stores; health-sensitive interior floors; electrical-room floors.

【Physical & application data】
Binder / resin：Waterborne acrylic (emulsion)
Colour：Wide colour range
Mix ratio (base : hardener)：5 : 1
Theoretical spreading rate：10 m\xb2/L @ 28 μm DFT
Drying (touch-dry / full cure)：1 h touch / 48 h hard (20 \xb0C, 70 % RH)
Recoating interval (min / max)：8 h – no limit
Thinner (max, by method)：Water: brush & roller 10 % \xb7 spray 15 %
Cleaner：Water
Application methods：Brush \xb7 spray \xb7 airless spray

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
waterborne floor primer (HN supply) \xd71 coat(s)（8 m\xb2/kg）
HN-FL-502 \xd72 coat(s)（4 m\xb2/kg）
waterborne clear sealer \xd71 coat(s)（8 m\xb2/kg）

【Safety】
Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
采用特种高分子聚合物乳液与功能型填料、助剂精制而成的水性地坪漆，集耐磨性与柔韧性于一体，环保耐用、性价比优越；自干、施工方便，可涂未干透的混凝土，适合赶工期施工。

【适用范围】
车间、办公室、馆所、店堂地面；健康敏感室内地板；电房地板。

【物理与应用参数】
漆基：水性丙烯酸 (emulsion)
颜色：多种颜色
混合比例（漆基：固化剂）：5 : 1
理论涂布率：10 m\xb2/L @ 28 μm DFT
干燥时间（表干 / 完全固化）：1 h touch / 48 h 硬干 (20 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：8 h – 不限
稀释剂（最大用量）：水: 刷涂和辊涂 10 % \xb7 喷涂 15 %
清洗剂：水
施工方法：Brush \xb7 喷涂 \xb7 无气喷涂 喷涂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
waterborne floor primer (HN supply) \xd71 遍（8 m\xb2/kg）
HN-FL-502 \xd72 遍（4 m\xb2/kg）
waterborne clear sealer \xd71 遍（8 m\xb2/kg）

【安全守则】
水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn nền acrylic gốc nước từ nhũ tương polymer đặc biệt với chất độn/phụ gia chức năng — chống m\xe0i m\xf2n k\xe8m độ dẻo, th\xe2n thiện m\xf4i trường, bền, kinh tế; kh\xf4 tự nhi\xean, thi c\xf4ng dễ, sơn được b\xea t\xf4ng chưa kh\xf4 cho tiến độ gấp.

【Phạm vi ứng dụng】
Xưởng, văn ph\xf2ng, hội trường, cửa h\xe0ng; s\xe0n trong nh\xe0 nhạy cảm sức khỏe; s\xe0n ph\xf2ng điện.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Acrylic gốc nước (emulsion)
M\xe0u sắc：Nhiều m\xe0u
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：5 : 1
Suất sơn l\xfd thuyết：10 m\xb2/L @ 28 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h touch / 48 h hard (20 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：8 h – kh\xf4ng giới hạn
Dung m\xf4i pha (tối đa)：Nước: cọ v\xe0 lăn 10 % \xb7 phun 15 %
Dung dịch vệ sinh：Nước
Phương ph\xe1p thi c\xf4ng：Brush \xb7 phun \xb7 phun airless

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
waterborne floor primer (HN supply) \xd71 lớp（8 m\xb2/kg）
HN-FL-502 \xd72 lớp（4 m\xb2/kg）
waterborne clear sealer \xd71 lớp（8 m\xb2/kg）

【An to\xe0n】
Sản phẩm gốc nước: đậy k\xedn hộp v\xe0 để xa tầm tay trẻ em. Th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sơn kh\xf4; đeo khẩu trang khi m\xe0i. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng lại v\xe0o hộp gốc. Bảo quản nơi kh\xf4 m\xe1t, tr\xe1nh đ\xf3ng băng.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento para pisos acr\xedlico base agua a partir de una emulsi\xf3n especial de pol\xedmeros con cargas funcionales / aditivos — resistencia a la abrasi\xf3n m\xe1s flexibilidad; ecol\xf3gico, duradero y rentable; de secado al aire y f\xe1cil aplicaci\xf3n, puede aplicarse sobre concreto no completamente seco para cronogramas ajustados.

【Aplicaciones t\xedpicas】
Talleres, oficinas, salas y locales; pisos interiores sensibles a la salud; pisos de salas el\xe9ctricas.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Acr\xedlico base agua (emulsion)
Color：Amplia gama de colores
Relaci\xf3n de mezcla (base : endurecedor)：5 : 1
Rendimiento te\xf3rico：10 m\xb2/L @ 28 μm DFT
Secado (seco al tacto / curado completo)：1 h touch / 48 h seco duro (20 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：8 h – sin l\xedmite
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Agua: brocha y rodillo 10 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Agua
M\xe9todos de aplicaci\xf3n：Brush \xb7 pulverizaci\xf3n \xb7 airless pulverizaci\xf3n

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
waterborne floor primer (HN supply) \xd71 capa(s)（8 m\xb2/kg）
HN-FL-502 \xd72 capa(s)（4 m\xb2/kg）
waterborne clear sealer \xd71 capa(s)（8 m\xb2/kg）

【Seguridad】
Producto base agua: mantener los envases bien cerrados y fuera del alcance de los ni\xf1os. Garantizar buena ventilaci\xf3n durante el uso y el secado; usar mascarilla para polvo al lijar. No verter la pintura diluida de vuelta al envase original. Almacenar en un lugar fresco y seco, proteger de las heladas.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء أرضيات أكريليك أساس مائي من مستحلب بوليمري خاص مع حشوات/مضافات وظيفية — مقاومة البري مع المرونة، صديق للبيئة ومتين واقتصادي؛ يجف هوائياً وسهل التطبيق، ويمكن طلاء الخرسانة غير الجافة تماماً للجداول الزمنية الضيقة.

【التطبيقات النموذجية】
أرضيات الورش والمكاتب والقاعات والمتاجر؛ والأرضيات الداخلية الحساسة صحياً؛ وأرضيات غرف الكهرباء.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：أكريليك أساس مائي (emulsion)
اللون：مدى ألوان واسع
نسبة الخلط (الأساس : مادة التصلب)：5 : 1
معدل الانتشار النظري：10 m\xb2/L @ 28 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h touch / 48 ساعة حتى الجفاف الصلب (20 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：8 h – بلا حد
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：ماء: فرشاة ورولر 10 % \xb7 رش 15 %
مادة التنظيف：ماء
طرق التطبيق：Brush \xb7 رش \xb7 رش هوائي (airless) رش

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
waterborne floor primer (HN supply) \xd71 طبقة/طبقات（8 m\xb2/kg）
HN-FL-502 \xd72 طبقة/طبقات（4 m\xb2/kg）
waterborne clear sealer \xd71 طبقة/طبقات（8 m\xb2/kg）

【السلامة】
منتج أساس مائي: تُغلق العبوات بإحكام وتُبقى بعيداً عن متناول الأطفال. تأكد من التهوية الجيدة أثناء الاستخدام والجفاف؛ وارتدِ كمامة غبار عند الصنفرة. لا تُعاد الطلاء المخفف إلى العبوة الأصلية. يُحفظ في مكان بارد جاف، ويُحمى من الصقيع.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-FL-503",desc:{en:"Low-viscosity epoxy sealer for porous, alkaline concrete",zh:"低粘度环氧封闭底漆，专用于多孔微碱表面",vi:"Sơn lót epoxy độ nhớt thấp cho bề mặt xốp, kiềm",es:"Sellador epoxi de baja viscosidad para concreto poroso y alcalino",ar:"ختم إيبوكسي منخفض اللزوجة للخرسانة المسامية القلوية"},details:{en:`【Overview】
Two-pack solvent-borne sealer for expectedly alkaline, porous surfaces: low viscosity with strong penetration, improving adhesion and hold-out of subsequent coats while reducing topcoat consumption. Apply thin — a glossy sealed surface can cause topcoat cracking.

【Typical applications】
Sealing coat under floor and wall systems on cement render, plaster, asbestos-cement board and concrete.

【Physical & application data】
Binder / resin：Epoxy
Colour：Base clear; hardener light-yellow
Mix ratio (base : hardener)：4 : 1 (by weight)
Pot life：8 h (20 \xb0C)
Flash point：30 \xb0C
Density：0.94 kg/L
Volume solids：28 %
Theoretical spreading rate：10 m\xb2/L @ 28 μm DFT
Drying (touch-dry / full cure)：2 h / 7 d (20 \xb0C, 70 % RH)
Recoating interval (min / max)：4 h – 7 d
Application methods：Airless spray \xb7 brush \xb7 roller \xb7 conventional spray
Thinner (max, by method)：brush & roller 10 % \xb7 airless 10 % \xb7 spray 15 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
HN-FL-503 \xd71 coat(s)（0.10 L/m\xb2）
floor topcoat by duty \xd72 coat(s)（per system）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份溶剂型高级封闭底漆，专门用于预料带碱性的多微孔表面：粘度低、渗透性好，提高后续漆层附着力和遮盖力，减少面漆消耗。封闭底漆漆膜不能过厚——过厚会形成光滑表面，引起面漆开裂及附着力下降。

【适用范围】
室内外水泥砂浆、灰泥、水泥石棉板、混凝土等地坪/墙面体系的封闭层。

【物理与应用参数】
漆基：环氧树脂
颜色：漆基无色透明；固化剂浅黄透明
混合比例（漆基：固化剂）：4 : 1 （重量比）
混合使用期：8 h (20 \xb0C)
闪点：30 \xb0C
比重：0.94 kg/L
体积固体含量：28 %
理论涂布率：10 m\xb2/L @ 28 μm DFT
干燥时间（表干 / 完全固化）：2 h / 7 d (20 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：4 h – 7 d
施工方法：无气喷涂 \xb7 刷涂 \xb7 辊涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂和辊涂 10 % \xb7 无气喷涂 10 % \xb7 喷涂 15 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
HN-FL-503 \xd71 遍（0.10 L/m\xb2）
floor topcoat by duty \xd72 遍（per system）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn l\xf3t kh\xf3a 2 th\xe0nh phần cho bề mặt xốp c\xf3 t\xednh kiềm: độ nhớt thấp, thấm tốt, tăng b\xe1m d\xednh v\xe0 độ che của lớp tr\xean, giảm hao sơn phủ. Sơn lớp mỏng — bề mặt kh\xf3a qu\xe1 b\xf3ng c\xf3 thể g\xe2y nứt lớp phủ.

【Phạm vi ứng dụng】
Lớp kh\xf3a dưới hệ s\xe0n v\xe0 tường tr\xean vữa xi măng, thạch cao, tấm xi măng amiang, b\xea t\xf4ng.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：Đế trong; chất đ\xf3ng rắn v\xe0ng nhạt
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：4 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：8 h (20 \xb0C)
Điểm bắt lửa：30 \xb0C
Khối lượng ri\xeang：0.94 kg/L
H\xe0m lượng rắn theo thể t\xedch：28 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 28 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：2 h / 7 d (20 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：4 h – 7 d
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 lăn \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ v\xe0 lăn 10 % \xb7 airless 10 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-FL-503 \xd71 lớp（0.10 L/m\xb2）
floor topcoat by duty \xd72 lớp（per system）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Sellador base solvente de dos componentes para superficies porosas de alcalinidad prevista: baja viscosidad y gran penetraci\xf3n, mejora la adherencia y el cubrimiento de las capas posteriores mientras reduce el consumo de acabado. Aplique en capa fina — una superficie sellada brillante puede causar agrietamiento del acabado.

【Aplicaciones t\xedpicas】
Capa de sellado bajo sistemas de pisos y muros sobre revoque de cemento, yeso, placa de fibrocemento y concreto.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Base transparente; endurecedor amarillo p\xe1lido
Relaci\xf3n de mezcla (base : endurecedor)：4 : 1 (en peso)
Vida \xfatil de la mezcla：8 h (20 \xb0C)
Punto de inflamaci\xf3n：30 \xb0C
Densidad：0.94 kg/L
S\xf3lidos en volumen：28 %
Rendimiento te\xf3rico：10 m\xb2/L @ 28 μm DFT
Secado (seco al tacto / curado completo)：2 h / 7 d (20 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：4 h – 7 d
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 rodillo \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha y rodillo 10 % \xb7 airless 10 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
HN-FL-503 \xd71 capa(s)（0.10 L/m\xb2）
floor topcoat by duty \xd72 capa(s)（per system）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
ختم ثنائي العبوة بالمذيبات للأسطح المسامية القلوية المتوقعة: لزوجة منخفضة مع قدرة اختراق قوية، يحسّن التصاق الطبقات اللاحقة وقوة حجبها ويقلل استهلاك الطبقة النهائية. يُطبَّق طبقة رقيقة — فالسطح المختوم اللامع قد يسبب تشقق الطبقة النهائية.

【التطبيقات النموذجية】
طبقة ختم تحت أنظمة الأرضيات والجدران على اللياسة الأسمنتية والجص وألواح الأسمنت-الأسبستوس والخرسانة.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：الأساس شفاف؛ مادة التصلب أصفر فاتح
نسبة الخلط (الأساس : مادة التصلب)：4 : 1 (بالوزن)
العمر الاستخدامي للخليط：8 h (20 \xb0C)
نقطة الوميض：30 \xb0C
الكثافة：0.94 kg/L
المواد الصلبة بالحجم：28 %
معدل الانتشار النظري：10 m\xb2/L @ 28 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：2 h / 7 d (20 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：4 h – 7 d
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة ورولر 10 % \xb7 رش هوائي (airless) 10 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
HN-FL-503 \xd71 طبقة/طبقات（0.10 L/m\xb2）
floor topcoat by duty \xd72 طبقة/طبقات（per system）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-FL-504",desc:{en:"Single-pack acrylic clear sealer — UV & stain resistance, applies at −10 °C",zh:"单组份丙烯酸罩光清漆，抗紫外线抗污染，可 −10 ℃ 施工",vi:"Lớp phủ trong acrylic 1 thành phần — chống UV và bẩn, thi công được −10 °C",es:"Sellador acrílico transparente monocomponente — resistencia a UV y manchas, aplicable a −10 °C",ar:"ختم أكريليك شفاف أحادي العبوة — مقاوم للأشعة فوق البنفسجية والبقع، ويُطبَّق عند −10 °C"},details:{en:`【Overview】
Acrylic clear sealer over primed and mid-coated walls, floors, steelwork and timber — enhancing weathering, sunlight and corrosion performance. Excellent UV resistance; application largely unrestricted by temperature (down to about −10 \xb0C); resists alkali, mild chemicals, acid rain and mould.

【Typical applications】
Clear coat over metallic / stone-effect paints and floor systems on concrete, steel and timber.

【Physical & application data】
Binder / resin：Acrylic
Colour：Clear
Flash point：36–40 \xb0C
Density：0.9 kg/L
Volume solids：28 %
Theoretical spreading rate：10 m\xb2/L @ 28 μm DFT
Drying (touch-dry / full cure)：1 h / 4 h hard (20 \xb0C, 70 % RH)
Recoating interval (min / max)：2 h – no limit
Application methods：Airless spray \xb7 brush \xb7 roller \xb7 conventional spray
Thinner (max, by method)：brush & roller 10 % \xb7 airless 10 % \xb7 spray 15 %
Cleaner：Matched HN acrylic thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
HN-FL-504 \xd71 coat(s)（0.12 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
以丙烯酸树脂为基料的高级罩光面漆，涂于已涂底漆和中间漆的内外墙、地坪、钢结构、木器表面，增强耐候、耐晒及防腐性能。抗紫外线优异，施工一般不受气温限制（可 −10 ℃ 左右施工）；抗污染能力强，耐碱、温和化学品、酸雨及霉菌。

【适用范围】
室内外混凝土、钢结构、木器上金属漆、石头漆及地坪体系的罩光。

【物理与应用参数】
漆基：丙烯酸树脂
颜色：透明
闪点：36–40 \xb0C
比重：0.9 kg/L
体积固体含量：28 %
理论涂布率：10 m\xb2/L @ 28 μm DFT
干燥时间（表干 / 完全固化）：1 h / 4 h 硬干 (20 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：2 h – 不限
施工方法：无气喷涂 \xb7 刷涂 \xb7 辊涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂和辊涂 10 % \xb7 无气喷涂 10 % \xb7 喷涂 15 %
清洗剂：HN 配套丙烯酸稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
HN-FL-504 \xd71 遍（0.12 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Lớp phủ trong acrylic tr\xean tường, s\xe0n, kết cấu th\xe9p v\xe0 gỗ đ\xe3 sơn l\xf3t — tăng chịu thời tiết, nắng v\xe0 ăn m\xf2n. Chống UV xuất sắc; thi c\xf4ng hầu như kh\xf4ng giới hạn nhiệt độ (tới khoảng −10 \xb0C); kh\xe1ng bẩn, chịu kiềm, h\xf3a chất nhẹ, mưa axit, nấm mốc.

【Phạm vi ứng dụng】
Lớp trong tr\xean sơn kim loại/hiệu ứng đ\xe1 v\xe0 hệ s\xe0n, tr\xean b\xea t\xf4ng, th\xe9p, gỗ.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Acrylic
M\xe0u sắc：Trong
Điểm bắt lửa：36–40 \xb0C
Khối lượng ri\xeang：0.9 kg/L
H\xe0m lượng rắn theo thể t\xedch：28 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 28 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h / 4 h hard (20 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：2 h – kh\xf4ng giới hạn
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 lăn \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ v\xe0 lăn 10 % \xb7 airless 10 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i acrylic HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-FL-504 \xd71 lớp（0.12 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Sellador acr\xedlico transparente sobre muros, pisos, estructuras de acero y madera previamente imprimados y con capa intermedia — mejora el desempe\xf1o frente a la intemperie, la luz solar y la corrosi\xf3n. Excelente resistencia a los UV; aplicaci\xf3n pr\xe1cticamente sin restricci\xf3n de temperatura (hasta unos −10 \xb0C); resiste \xe1lcalis, productos qu\xedmicos suaves, lluvia \xe1cida y moho.

【Aplicaciones t\xedpicas】
Capa transparente sobre pinturas de efecto met\xe1lico / piedra y sistemas de pisos sobre concreto, acero y madera.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Acr\xedlico
Color：Transparente
Punto de inflamaci\xf3n：36–40 \xb0C
Densidad：0.9 kg/L
S\xf3lidos en volumen：28 %
Rendimiento te\xf3rico：10 m\xb2/L @ 28 μm DFT
Secado (seco al tacto / curado completo)：1 h / 4 h seco duro (20 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：2 h – sin l\xedmite
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 rodillo \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha y rodillo 10 % \xb7 airless 10 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN acr\xedlico correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
HN-FL-504 \xd71 capa(s)（0.12 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
ختم أكريليك شفاف فوق الجدران المبرايمرة والمطليّة بطبقة وسطى والأرضيات والأعمال الفولاذية والأخشاب — يعزز الأداء أمام الطقس والشمس والتآكل. مقاومة ممتازة للأشعة فوق البنفسجية؛ وتطبيق غير مقيد إلى حد كبير بدرجة الحرارة (حتى نحو −10 \xb0C)؛ ويقاوم القلويات والكيماويات المعتدلة والأمطار الحمضية والعفن.

【التطبيقات النموذجية】
طبقة شفافة فوق الطلاءات المعدنية/المظهر الحجري وأنظمة الأرضيات على الخرسانة والفولاذ والأخشاب.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：أكريليك
اللون：شفاف
نقطة الوميض：36–40 \xb0C
الكثافة：0.9 kg/L
المواد الصلبة بالحجم：28 %
معدل الانتشار النظري：10 m\xb2/L @ 28 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h / 4 ساعة حتى الجفاف الصلب (20 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：2 h – بلا حد
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة ورولر 10 % \xb7 رش هوائي (airless) 10 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للأكريليك

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
HN-FL-504 \xd71 طبقة/طبقات（0.12 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-FL-505",desc:{en:"Fast-drying acrylic floor finish — colour-retentive, indoor / outdoor",zh:"快干型丙烯酸地坪面漆，保色性好，室内外适用",vi:"Sơn nền acrylic khô nhanh — giữ màu, trong/ngoài trời",es:"Acabado para pisos acrílico de secado rápido — con retención de color, interior / exterior",ar:"طلاء نهائي أرضيات أكريليك سريع الجفاف — ثابت اللون، داخلي/خارجي"},details:{en:`【Overview】
Fast-drying acrylic floor finish with good colour retention and application properties for concrete and steel decks; premium indoor / outdoor floor duty including sports venues.

【Typical applications】
Factory floors and sports venues; mid / finish coats in corrosive environments.

【Physical & application data】
Binder / resin：Acrylic
Colour：Wide colour range
Flash point：30 \xb0C
Density：1.3 kg/L
Volume solids：55 %
Theoretical spreading rate：6 m\xb2/L @ 90 μm DFT
Drying (touch-dry / full cure)：2 h / 48 h hard (20 \xb0C, 70 % RH)
Recoating interval (min / max)：4 h – 3 d
Application methods：Airless spray \xb7 brush \xb7 roller \xb7 conventional spray
Thinner (max, by method)：brush & roller 10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN acrylic thinner

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
HN-FL-503 sealer \xd71 coat(s)（0.10 L/m\xb2）
HN-FL-505 \xd72 coat(s)（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 coat(s)（0.10 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
快干型丙烯酸面漆，保色性及施工性能良好，专用于混凝土和钢板地台，室内外高级地坪适用，含运动场馆地坪。

【适用范围】
工厂地坪与运动场馆；腐蚀环境中的中间漆/面漆。

【物理与应用参数】
漆基：丙烯酸树脂
颜色：多种颜色
闪点：30 \xb0C
比重：1.3 kg/L
体积固体含量：55 %
理论涂布率：6 m\xb2/L @ 90 μm DFT
干燥时间（表干 / 完全固化）：2 h / 48 h 硬干 (20 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：4 h – 3 d
施工方法：无气喷涂 \xb7 刷涂 \xb7 辊涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂和辊涂 10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套丙烯酸稀释剂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
HN-FL-503 sealer \xd71 遍（0.10 L/m\xb2）
HN-FL-505 \xd72 遍（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 遍（0.10 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn nền acrylic kh\xf4 nhanh, giữ m\xe0u v\xe0 thi c\xf4ng tốt cho s\xe0n b\xea t\xf4ng v\xe0 th\xe9p; cao cấp trong/ngo\xe0i trời, kể cả s\xe2n thể thao.

【Phạm vi ứng dụng】
Nền nh\xe0 xưởng v\xe0 s\xe2n thể thao; lớp giữa/lớp phủ m\xf4i trường ăn m\xf2n.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Acrylic
M\xe0u sắc：Nhiều m\xe0u
Điểm bắt lửa：30 \xb0C
Khối lượng ri\xeang：1.3 kg/L
H\xe0m lượng rắn theo thể t\xedch：55 %
Suất sơn l\xfd thuyết：6 m\xb2/L @ 90 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：2 h / 48 h hard (20 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：4 h – 3 d
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 lăn \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ v\xe0 lăn 10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i acrylic HN

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-FL-503 sealer \xd71 lớp（0.10 L/m\xb2）
HN-FL-505 \xd72 lớp（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 lớp（0.10 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado para pisos acr\xedlico de secado r\xe1pido, con buena retenci\xf3n de color y buenas propiedades de aplicaci\xf3n para cubiertas de concreto y acero; uso premium de pisos interiores / exteriores, incluidos recintos deportivos.

【Aplicaciones t\xedpicas】
Pisos de f\xe1brica y recintos deportivos; capas intermedias / de acabado en ambientes corrosivos.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Acr\xedlico
Color：Amplia gama de colores
Punto de inflamaci\xf3n：30 \xb0C
Densidad：1.3 kg/L
S\xf3lidos en volumen：55 %
Rendimiento te\xf3rico：6 m\xb2/L @ 90 μm DFT
Secado (seco al tacto / curado completo)：2 h / 48 h seco duro (20 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：4 h – 3 d
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 rodillo \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha y rodillo 10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN acr\xedlico correspondiente

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
HN-FL-503 sealer \xd71 capa(s)（0.10 L/m\xb2）
HN-FL-505 \xd72 capa(s)（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 capa(s)（0.10 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء نهائي أرضيات أكريليك سريع الجفاف بثبات جيد للون وخصائص تطبيق جيدة للأرضيات الخرسانية والفولاذية؛ للاستخدام الفاخر داخلياً وخارجياً بما يشمل الملاعب.

【التطبيقات النموذجية】
أرضيات المصانع والملاعب؛ والطبقات الوسطى/النهائية في البيئات المسببة للتآكل.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：أكريليك
اللون：مدى ألوان واسع
نقطة الوميض：30 \xb0C
الكثافة：1.3 kg/L
المواد الصلبة بالحجم：55 %
معدل الانتشار النظري：6 m\xb2/L @ 90 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：2 h / 48 ساعة حتى الجفاف الصلب (20 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：4 h – 3 d
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة ورولر 10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للأكريليك

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
HN-FL-503 sealer \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-FL-505 \xd72 طبقة/طبقات（0.30 L/m\xb2）
HN-FL-501 PU sealer \xd71 طبقة/طبقات（0.10 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}}],image:"/images/product-epoxy-floor.jpg",applications:[{en:"Warehouse & logistics floors",zh:"仓储与物流地坪",vi:"Sàn kho & logistics",es:"Pisos de almacenes y logística",ar:"أرضيات المستودعات واللوجستيات"},{en:"Manufacturing plants",zh:"生产车间",vi:"Nhà máy sản xuất",es:"Plantas de manufactura",ar:"مصانع الإنتاج"},{en:"Parking decks",zh:"停车场",vi:"Bãi đỗ xe",es:"Cubiertas de estacionamiento",ar:"أرصفة وقوف السيارات"},{en:"Sports venues & clean rooms",zh:"运动场馆与洁净室",vi:"Sân thể thao & phòng sạch",es:"Recintos deportivos y salas limpias",ar:"الملاعب والغرف النظيفة"}]},{code:"CAT-04",title:{en:"Weatherproof Exterior Coatings",zh:"耐候外墙涂料",vi:"Sơn ngoại thất chịu thời tiết",es:"Recubrimientos exteriores resistentes a la intemperie",ar:"طلاءات خارجية مقاومة للطقس"},short:{en:"Fluorocarbon · Elastic · Heat-reflective",zh:"氟碳·弹性·热反射",vi:"Fluorocarbon · đàn hồi · phản xạ nhiệt",es:"Fluorocarbonado · Elástico · Reflectante térmico",ar:"فلوروكربون · مرن · عاكس للحرارة"},description:{en:"Premium exterior systems: two-pack and waterborne fluorocarbon (FEVE) finishes with metallic colour options, elastic anti-crack builds and heat-reflective topcoats for facades and exterior steelwork.",zh:"高端外墙体系：双组份及水性氟碳（FEVE）面漆（可选金属色）、弹性抗裂体系及热反射面漆，适用于幕墙外墙与室外钢构。",vi:"Hệ ngoại thất cao cấp: fluorocarbon (FEVE) 2 thành phần và gốc nước (có màu kim loại), hệ đàn hồi chống nứt và sơn phủ phản xạ nhiệt cho mặt tiền và thép ngoài trời.",es:"Sistemas exteriores premium: acabados fluorocarbonados (FEVE) de dos componentes y base agua con opciones de color metálico, sistemas elásticos antifisuras y acabados reflectantes del calor para fachadas y acero exterior.",ar:"أنظمة خارجية فائقة: تشطيبات فلوروكربون (FEVE) ثنائية العبوة وأساس مائي بخيارات ألوان معدنية، وأنظمة مرنة مضادة للتشقق، وتشطيبات عاكسة للحرارة للواجهات والأعمال الفولاذية الخارجية."},features:[{en:"FEVE fluorocarbon — pencil hardness ≥ 2H",zh:"FEVE 氟碳——铅笔硬度 ≥2H",vi:"Fluorocarbon FEVE — độ cứng bút chì ≥ 2H",es:"Fluorocarbonado FEVE — dureza de lápiz ≥ 2H",ar:"فلوروكربون FEVE — صلادة القلم ≥ 2H"},{en:"1000 h accelerated weathering (lab data)",zh:"人工加速老化 1000 h（实验室数据）",vi:"Lão hóa tăng tốc 1000 h (số liệu PTN)",es:"1000 h de intemperie acelerada (datos de laboratorio)",ar:"تقادم متسارع 1000 h (بيانات مختبرية)"},{en:"Waterborne fluorocarbon / metallic finishes",zh:"水性氟碳/金属漆",vi:"Fluorocarbon/kim loại gốc nước",es:"Acabados fluorocarbonados / metálicos base agua",ar:"طلاءات نهائية فلوروكربون/معدنية أساس مائي"},{en:"Elastic anti-crack & heat-reflective systems",zh:"弹性抗裂与热反射系统",vi:"Hệ đàn hồi chống nứt & phản xạ nhiệt",es:"Sistemas elásticos antifisuras y reflectantes térmicos",ar:"أنظمة مرنة مانعة للتشقق وعاكسة للحرارة"}],specs:[{label:{en:"Base",zh:"基料",vi:"Nhựa nền",es:"Base",ar:"الأساس"},value:"FEVE / Acrylic"},{label:{en:"Gloss (60°)",zh:"光泽（60°）",vi:"Độ bóng (60°)",es:"Brillo (60°)",ar:"اللمعان (60°)"},value:"≥ 90 (gloss)"},{label:{en:"Weathering",zh:"耐候",vi:"Chịu thời tiết",es:"Resistencia a la intemperie",ar:"مقاومة العوامل الجوية"},value:"1000 h accel. (lab)"},{label:{en:"Systems",zh:"体系",vi:"Hệ",es:"Sistemas",ar:"الأنظمة"},value:"2-K / waterborne"}],categorySpecs:[{label:{en:"Weathering",zh:"耐候",vi:"Chịu thời tiết",es:"Resistencia a la intemperie",ar:"مقاومة العوامل الجوية"},value:"1000 h (lab)"},{label:{en:"Hardness",zh:"硬度",vi:"Độ cứng",es:"Dureza",ar:"الصلادة"},value:"≥ 2H"},{label:{en:"Gloss",zh:"光泽",vi:"Độ bóng",es:"Brillante",ar:"لامع"},value:"≥ 90"},{label:{en:"Colours",zh:"颜色",vi:"Màu",es:"Colores",ar:"الألوان"},value:"incl. metallic"}],models:[{model:"HN-EX-701",desc:{en:"Two-pack FEVE topcoat — premium weathering, metallic colours available",zh:"双组份氟碳面漆，超强耐候，可做金属色",vi:"Sơn phủ fluorocarbon 2 thành phần — chịu thời tiết cao cấp, có màu kim loại",es:"Acabado FEVE de dos componentes — resistencia premium a la intemperie, colores metálicos disponibles",ar:"طبقة نهائية فلوروكربون FEVE ثنائية العبوة — أداء فائق أمام الطقس، وألوان معدنية متاحة"},details:{en:`【Overview】
Two-pack solvent-borne premium decorative fluorocarbon coating for environments demanding the strongest protection: outstanding gloss and colour retention; superior non-yellowing and dirt-shedding; resistant to acids, alkalis, solvents, water and chemicals.

【Typical applications】
Interior / exterior concrete walls and as finish coat of anti-corrosion systems.

【Physical & application data】
Binder / resin：Fluorocarbon (FEVE)
Colour：Wide range incl. metallics
Mix ratio (base : hardener)：gloss 8 : 1 \xb7 semi-matt 10 : 1 (by weight)
Pot life：3 h (20 \xb0C)
Flash point：31 \xb0C
Volume solids：42 %
Theoretical spreading rate：10 m\xb2/L (one coat, flat)
Drying (touch-dry / full cure)：5 h / 7 d (20 \xb0C)
Recoating interval (min / max)：8 h – 7 d
Finish：Gloss / matt
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：As per batch TDS
Cleaner：Matched HN FC thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
steel: HN-AC-201 → HN-AC-302 | concrete: HN-FL-503 → HN-AC-602
HN-EX-701 \xd72 coat(s)（0.22 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份溶剂型高档装饰涂料，适合需要特强保护性的环境：保光保色性能优良，特强耐黄变及耐沾污，抗酸、碱、溶剂、水及化学品侵蚀，为室内外墙壁及钢结构表面提供卓越的保护及装饰。

【适用范围】
室内外混凝土墙壁，及防腐涂料系统的面漆。

【物理与应用参数】
漆基：氟碳（FEVE）
颜色：多种颜色（含金属色）
混合比例（漆基：固化剂）：gloss 8 : 1 \xb7 半哑光 10 : 1 （重量比）
混合使用期：3 h (20 \xb0C)
闪点：31 \xb0C
体积固体含量：42 %
理论涂布率：10 m\xb2/L (一道, flat)
干燥时间（表干 / 完全固化）：5 h / 7 d (20 \xb0C)
重涂间隔（最小 / 最大）：8 h – 7 d
漆面：有光 / 哑光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：按批次 TDS
清洗剂：HN 配套氟碳稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
steel: HN-AC-201 → HN-AC-302 | concrete: HN-FL-503 → HN-AC-602
HN-EX-701 \xd72 遍（0.22 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn phủ fluorocarbon trang tr\xed cao cấp 2 th\xe0nh phần cho m\xf4i trường đ\xf2i hỏi bảo vệ mạnh nhất: giữ b\xf3ng giữ m\xe0u xuất sắc; chống ố v\xe0ng v\xe0 b\xe1m bẩn vượt trội; kh\xe1ng axit, kiềm, dung m\xf4i, nước v\xe0 h\xf3a chất.

【Phạm vi ứng dụng】
Tường b\xea t\xf4ng trong/ngo\xe0i trời v\xe0 lớp phủ cuối của hệ chống ăn m\xf2n.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Fluorocarbon (FEVE)
M\xe0u sắc：Nhiều m\xe0u (c\xf3 m\xe0u kim loại)
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：gloss 8 : 1 \xb7 b\xe1n mờ 10 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：3 h (20 \xb0C)
Điểm bắt lửa：31 \xb0C
H\xe0m lượng rắn theo thể t\xedch：42 %
Suất sơn l\xfd thuyết：10 m\xb2/L (một lớp, flat)
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：5 h / 7 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：8 h – 7 d
Bề mặt：B\xf3ng / mờ
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：Theo TDS l\xf4 h\xe0ng
Dung dịch vệ sinh：Dung m\xf4i FC HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
steel: HN-AC-201 → HN-AC-302 | concrete: HN-FL-503 → HN-AC-602
HN-EX-701 \xd72 lớp（0.22 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento fluorocarbonado decorativo premium base solvente de dos componentes para ambientes que exigen la m\xe1xima protecci\xf3n: excelente retenci\xf3n de brillo y color; superior resistencia al amarilleo y a la suciedad; resistente a \xe1cidos, \xe1lcalis, solventes, agua y productos qu\xedmicos.

【Aplicaciones t\xedpicas】
Muros de concreto interiores / exteriores y como capa de acabado de sistemas anticorrosivos.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Fluorocarbonado (FEVE)
Color：Amplia gama, incl. met\xe1licos
Relaci\xf3n de mezcla (base : endurecedor)：gloss 8 : 1 \xb7 semimate 10 : 1 (en peso)
Vida \xfatil de la mezcla：3 h (20 \xb0C)
Punto de inflamaci\xf3n：31 \xb0C
S\xf3lidos en volumen：42 %
Rendimiento te\xf3rico：10 m\xb2/L (una capa, flat)
Secado (seco al tacto / curado completo)：5 h / 7 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：8 h – 7 d
Acabado：Brillante / mate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Seg\xfan la TDS del lote
Limpiador：Diluyente HN FC correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
steel: HN-AC-201 → HN-AC-302 | concrete: HN-FL-503 → HN-AC-602
HN-EX-701 \xd72 capa(s)（0.22 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء فلوروكربون زخرفي فاخر ثنائي العبوة بالمذيبات للبيئات التي تتطلب أقوى حماية: ثبات ممتاز للمعان واللون؛ وأداء فائق في منع الاصفرار ونفض الأوساخ؛ ومقاوم للأحماض والقلويات والمذيبات والماء والكيماويات.

【التطبيقات النموذجية】
جدران خرسانية داخلية/خارجية، وكطبقة نهائية لأنظمة مكافحة التآكل.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：فلوروكربون (FEVE)
اللون：مدى واسع يشمل الألوان المعدنية
نسبة الخلط (الأساس : مادة التصلب)：gloss 8 : 1 \xb7 نصف مطفي 10 : 1 (بالوزن)
العمر الاستخدامي للخليط：3 h (20 \xb0C)
نقطة الوميض：31 \xb0C
المواد الصلبة بالحجم：42 %
معدل الانتشار النظري：10 m\xb2/L (طبقة واحدة, flat)
الجفاف (الجفاف السطحي / التصلد الكامل)：5 h / 7 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：8 h – 7 d
التشطيب：لامع / مطفي
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：وفق ورقة TDS للدفعة
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للفلوروكربون

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
steel: HN-AC-201 → HN-AC-302 | concrete: HN-FL-503 → HN-AC-602
HN-EX-701 \xd72 طبقة/طبقات（0.22 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-EX-703",desc:{en:"Bridges hairline cracks in render — full system data on request",zh:"桥接基层微裂纹，完整体系数据备索",vi:"Che nứt tóc trên nền — số liệu hệ thống theo yêu cầu",es:"Puentea las fisuras capilares del revoque — datos completos del sistema a pedido",ar:"يجسّر شقوق الشعر الدقيقة في اللياسة — بيانات النظام الكاملة عند الطلب"},details:{en:`【Overview】
Elastomeric exterior system that bridges hairline cracking in render and follows substrate movement. Crack-bridding performance depends on system build; request the system data sheet (build, elongation class, test basis) before specification.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
弹性外墙体系，可桥接基层微裂纹并随基材伸缩。抗裂性能取决于体系膜厚；选型前请索取体系数据表（膜厚、延伸率等级、测试依据）。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Hệ ngoại thất đ\xe0n hồi che nứt t\xf3c v\xe0 theo chuyển động nền. Khả năng che nứt phụ thuộc độ d\xe0y hệ; vui l\xf2ng y\xeau cầu bảng số liệu hệ (độ d\xe0y, cấp độ gi\xe3n, cơ sở thử) trước khi chọn.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Sistema exterior elastom\xe9rico que puentea las fisuras capilares del revoque y acompa\xf1a el movimiento del sustrato. El desempe\xf1o antifisuras depende del espesor del sistema; solicite la ficha de datos del sistema (espesor, clase de elongaci\xf3n, base de ensayo) antes de especificar.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
نظام خارجي مرن يجسّر شقوق الشعر الدقيقة في اللياسة ويتبع حركة الركيزة. يعتمد أداء تجسير الشقوق على سماكة النظام؛ اطلب ورقة بيانات النظام (السماكة، فئة الاستطالة، أساس الاختبار) قبل اعتماد المواصفة.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-EX-704",desc:{en:"Reflective exterior topcoat reducing solar heat build-up — data on request",zh:"反射太阳辐射、降低表面温度的外墙面漆，数据备索",vi:"Sơn phủ ngoại thất phản xạ nhiệt mặt trời — số liệu theo yêu cầu",es:"Acabado exterior reflectante que reduce la acumulación de calor solar — datos a pedido",ar:"طبقة نهائية خارجية عاكسة تقلل تراكم الحرارة الشمسية — البيانات عند الطلب"},details:{en:`【Overview】
Solar-reflective exterior topcoat that reduces surface temperature build-up and cooling load. Reflection performance is grade- and colour-dependent; request the grade data sheet (reflectance values and test basis) before specification.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
反射太阳辐射、降低外墙表面温升与冷负荷的隔热面漆。反射性能随等级与颜色不同；选型前请索取等级数据表（反射率数值及测试依据）。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn phủ ngoại thất phản xạ bức xạ mặt trời, giảm nhiệt bề mặt v\xe0 tải lạnh. Hiệu suất phản xạ t\xf9y cấp v\xe0 m\xe0u; vui l\xf2ng y\xeau cầu bảng số liệu cấp (gi\xe1 trị phản xạ v\xe0 cơ sở thử) trước khi chọn.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado exterior reflectante solar que reduce la acumulaci\xf3n de temperatura superficial y la carga de enfriamiento. El desempe\xf1o de reflexi\xf3n depende del grado y del color; solicite la ficha de datos del grado (valores de reflectancia y base de ensayo) antes de especificar.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طبقة نهائية خارجية عاكسة للطاقة الشمسية تقلل تراكم حرارة السطح وحمل التبريد. يتوقف أداء الانعكاس على الدرجة واللون؛ اطلب ورقة بيانات الدرجة (قيم الانعكاس وأساس الاختبار) قبل اعتماد المواصفة.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-EX-706",desc:{en:"FEVE finish — pencil hardness ≥ 2H, 1000 h accelerated weathering (lab data)",zh:"氟碳面漆，铅笔硬度 ≥2H，人工加速老化 1000 h（实验室数据）",vi:"Sơn phủ fluorocarbon — độ cứng bút chì ≥2H, lão hóa tăng tốc 1000 h (số liệu PTN)",es:"Acabado FEVE — dureza de lápiz ≥ 2H, 1000 h de intemperie acelerada (datos de laboratorio)",ar:"طبقة نهائية فلوروكربون — صلادة القلم ≥ 2H وتقادم متسارع 1000 h (بيانات مختبرية)"},details:{en:`【Overview】
Two-pack self-drying fluorocarbon finish based on high-grade fluorocarbon resin: the strong C–F bond delivers outstanding weathering, heat and chemical resistance plus non-stick, low-friction surface. Technical indicators: fineness ≤ 20 μm; gloss (60\xb0) ≥ 90 for glossy grades; pencil hardness ≥ 2H; cross-cut adhesion ≤ grade 1; cupping ≥ 4 mm; bend ≤ 2 mm; water resistance 240 h and petrol resistance 24 h without blistering/wrinkling/gloss loss; 1000 h accelerated weathering with gloss loss / chalking / cracking ≤ grade 1.

【Typical applications】
High-spec exterior steel and concrete; equipment and plant with combined weathering + chemical exposure.

【Physical & application data】
Binder / resin：Fluorocarbon resin
Colour：Per standard panel; metallic / matt on request
Mix ratio (base : hardener)：paint : hardener : thinner = 10 : 1 : 2
Drying (touch-dry / full cure)：≤ 2 h touch / ≤ 48 h hard (25 \xb0C, standard single coat)
Finish：Gloss (60\xb0) ≥ 90 \xb7 matt by agreement
Application methods：Conventional spray (tip 1.5–2.0 mm, 0.3–0.5 MPa) \xb7 airless
Thinner (max, by method)：As per mix ratio; stir during use; filter 200 mesh
Cleaner：Matched HN FC thinner

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
primer fully dried, dust-free
HN-EX-706 \xd72 coat(s)（per spec）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
以高级氟碳树脂为主要成膜物的双组份自干涂料。氟元素电负性大、碳氟键能强，具有特别优越的耐候性、耐热性、耐低温性、耐化学药品性及独特的不粘性和低摩擦性。技术指标：细度 ≤20 μm；光泽（60\xb0）亮光 ≥90；铅笔硬度 ≥2H；附着力（划格法）≤1 级；杯突 ≥4 mm；弯曲 ≤2 mm；耐水性 240 h、耐汽油性 24 h 不起泡、不起皱、不失光；人工加速老化 1000 h，失光/粉化/龟裂 ≤1 级。

【适用范围】
高要求室外钢构与混凝土；兼有耐候与耐化学品要求的设备与装置。

【物理与应用参数】
漆基：氟碳树脂
颜色：按标准样板；金属色/哑光可商定
混合比例（漆基：固化剂）：paint : hardener : thinner = 10 : 1 : 2
干燥时间（表干 / 完全固化）：≤ 2 h touch / ≤ 48 h 硬干 (25 \xb0C, standard 一道)
漆面：有光 (60\xb0) ≥ 90 \xb7 哑光可商定
施工方法：普通喷涂 (tip 1.5–2.0 mm, 0.3–0.5 MPa) \xb7 无气喷涂
稀释剂（最大用量）：按配比稀释，使用中不断搅拌，200 目过滤
清洗剂：HN 配套氟碳稀释剂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
primer fully dried, dust-free
HN-EX-706 \xd72 遍（per spec）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn phủ fluorocarbon 2 th\xe0nh phần kh\xf4 tự nhi\xean từ nhựa fluorocarbon cao cấp: li\xean kết C–F bền cho độ chịu thời tiết, nhiệt v\xe0 h\xf3a chất vượt trội c\xf9ng bề mặt kh\xf4ng d\xednh, ma s\xe1t thấp. Chỉ ti\xeau: độ mịn ≤ 20 μm; độ b\xf3ng (60\xb0) ≥ 90 (cấp b\xf3ng); độ cứng b\xfat ch\xec ≥ 2H; b\xe1m d\xednh cắt ch\xe9o ≤ cấp 1; đắp mặt ≥ 4 mm; uốn ≤ 2 mm; chịu nước 240 h, xăng 24 h kh\xf4ng phồng/nhăn/mất b\xf3ng; l\xe3o h\xf3a tăng tốc 1000 h, mất b\xf3ng/phấn/nứt ≤ cấp 1.

【Phạm vi ứng dụng】
Th\xe9p v\xe0 b\xea t\xf4ng ngoại thất y\xeau cầu cao; thiết bị vừa chịu thời tiết vừa chịu h\xf3a chất.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Nhựa fluorocarbon
M\xe0u sắc：Theo mẫu chuẩn; m\xe0u kim loại/mờ theo y\xeau cầu
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：paint : hardener : thinner = 10 : 1 : 2
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：≤ 2 h touch / ≤ 48 h hard (25 \xb0C, standard một lớp)
Bề mặt：B\xf3ng (60\xb0) ≥ 90 \xb7 mờ by agreement
Phương ph\xe1p thi c\xf4ng：Phun thường (tip 1.5–2.0 mm, 0.3–0.5 MPa) \xb7 airless
Dung m\xf4i pha (tối đa)：Theo tỷ lệ pha; khuấy khi d\xf9ng; lọc 200 mesh
Dung dịch vệ sinh：Dung m\xf4i FC HN

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
primer fully dried, dust-free
HN-EX-706 \xd72 lớp（per spec）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado fluorocarbonado de dos componentes, de secado natural, a base de resina fluorocarbonada de alta gama: el fuerte enlace C–F aporta una resistencia excepcional a la intemperie, al calor y a los productos qu\xedmicos, adem\xe1s de una superficie antiadherente y de baja fricci\xf3n. Indicadores t\xe9cnicos: finura ≤ 20 μm; brillo (60\xb0) ≥ 90 en grados brillantes; dureza de l\xe1piz ≥ 2H; adherencia por corte cruzado ≤ grado 1; embutido ≥ 4 mm; doblado ≤ 2 mm; resistencia al agua 240 h y a la gasolina 24 h sin ampollamiento/arrugamiento/p\xe9rdida de brillo; 1000 h de intemperie acelerada con p\xe9rdida de brillo / empolvado / agrietamiento ≤ grado 1.

【Aplicaciones t\xedpicas】
Acero y concreto exterior de alta especificaci\xf3n; equipos e instalaciones con exposici\xf3n combinada a la intemperie y a productos qu\xedmicos.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Resina fluorocarbonada
Color：Seg\xfan panel est\xe1ndar; met\xe1lico / mate a pedido
Relaci\xf3n de mezcla (base : endurecedor)：paint : hardener : thinner = 10 : 1 : 2
Secado (seco al tacto / curado completo)：≤ 2 h touch / ≤ 48 h seco duro (25 \xb0C, standard capa \xfanica)
Acabado：Brillante (60\xb0) ≥ 90 \xb7 mate a convenir
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n convencional (tip 1.5–2.0 mm, 0.3–0.5 MPa) \xb7 airless
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Seg\xfan la relaci\xf3n de mezcla; agitar durante el uso; filtrar con malla de 200
Limpiador：Diluyente HN FC correspondiente

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
primer fully dried, dust-free
HN-EX-706 \xd72 capa(s)（per spec）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء نهائي فلوروكربون ثنائي العبوة ذاتي الجفاف قائم على راتنج فلوروكربون متقدم: تمنح رابطة C–F القوية أداءً بارزاً في مقاومة الطقس والحرارة والكيماويات مع سطح غير لاصق ومنخفض الاحتكاك. المؤشرات الفنية: النعومة ≤ 20 μm؛ واللمعان (60\xb0) ≥ 90 للدرجات اللامعة؛ وصلادة القلم ≥ 2H؛ والالتصاق بالتخريم المتقاطع ≤ درجة 1؛ والكبس ≥ 4 mm؛ والانحناء ≤ 2 mm؛ ومقاومة الماء 240 h ومقاومة البنزين 24 h دون تقرّح/تجعيد/فقدان لمعان؛ وتقادم متسارع 1000 h بفقدان لمعان/طباشيرية/تشقق ≤ درجة 1.

【التطبيقات النموذجية】
الفولاذ والخرسانة الخارجية عالية المواصفات؛ والمعدات والوحدات الصناعية ذات التعرض المشترك للطقس والكيماويات.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：راتنج فلوروكربون
اللون：وفق اللوحة القياسية؛ المعدني / المطفي عند الطلب
نسبة الخلط (الأساس : مادة التصلب)：paint : hardener : thinner = 10 : 1 : 2
الجفاف (الجفاف السطحي / التصلد الكامل)：≤ 2 h touch / ≤ 48 ساعة حتى الجفاف الصلب (25 \xb0C, standard طبقة واحدة)
التشطيب：لامع (60\xb0) ≥ 90 \xb7 مطفي بالاتفاق
طرق التطبيق：الرش التقليدي (tip 1.5–2.0 mm, 0.3–0.5 MPa) \xb7 رش هوائي (airless)
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：وفق نسبة الخلط؛ حرّك أثناء الاستخدام؛ رشّح بغربال 200 mesh
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للفلوروكربون

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
primer fully dried, dust-free
HN-EX-706 \xd72 طبقة/طبقات（per spec）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-EX-707",desc:{en:"Single-pack waterborne metallic exterior — eco-friendly, alkali & colour fast",zh:"单组份水性金属质感外墙涂料，环保抗碱保色",vi:"Sơn ngoại thất hiệu ứng kim loại gốc nước 1 thành phần — thân thiện môi trường, chống kiềm giữ màu",es:"Recubrimiento exterior de efecto metálico base agua monocomponente — ecológico, resistente a los álcalis y estable al color",ar:"طلاء خارجي معدني الملمس أساس مائي أحادي العبوة — صديق للبيئة ومقاوم للقلويات وثابت اللون"},details:{en:`【Overview】
Single-pack waterborne metallic-texture exterior paint based on a premium fluorocarbon emulsion: waterborne environmental performance with strong resistance to acid, alkali and rain attack; excellent alkali resistance, colour and gloss retention.

【Typical applications】
High-specification decoration and protection of concrete, steel and timber building envelopes.

【Physical & application data】
Binder / resin：Fluorocarbon emulsion + metallic pigment
Colour：Solid / metallic colours
Thinner (max, by method)：Water 0–20 %
Drying (touch-dry / full cure)：touch-dry ≤ 1 h (25 \xb0C, ≤ 75 % RH)
Recoating interval (min / max)：≥ 4 h (25 \xb0C, ≤ 75 % RH)
Application methods：Spray \xb7 roller \xb7 brush
Cleaner：Water

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
waterborne anti-alkali primer \xd71 coat(s)（8 m\xb2/kg）
waterborne FC intermediate (optional) \xd71 coat(s)（8 m\xb2/kg）
HN-EX-707 \xd72 coat(s)（4 m\xb2/kg）

【Safety】
Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
选用优质氟碳乳液制成的单组份水性金属质感外墙涂料，兼具水性涂料的环保性，能有效抵抗酸、碱、雨水等对漆膜的侵蚀，抗碱性极佳、保色保光性优良。

【适用范围】
对装饰和保护要求特高的混凝土、钢材、木材等建筑物墙体涂装。

【物理与应用参数】
漆基：氟碳乳液 + 金属粉
颜色：Solid / metallic colours
稀释剂（最大用量）：水 0–20 %
干燥时间（表干 / 完全固化）：表干 ≤ 1 h (25 \xb0C, ≤ 75 % RH)
重涂间隔（最小 / 最大）：≥ 4 h (25 \xb0C, ≤ 75 % RH)
施工方法：Spray \xb7 辊涂 \xb7 刷涂
清洗剂：水

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
waterborne anti-alkali primer \xd71 遍（8 m\xb2/kg）
waterborne FC intermediate (optional) \xd71 遍（8 m\xb2/kg）
HN-EX-707 \xd72 遍（4 m\xb2/kg）

【安全守则】
水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn ngoại thất hiệu ứng kim loại gốc nước 1 th\xe0nh phần từ nhũ tương fluorocarbon cao cấp: th\xe2n thiện m\xf4i trường, kh\xe1ng axit, kiềm v\xe0 mưa tốt; chống kiềm xuất sắc, giữ m\xe0u giữ b\xf3ng.

【Phạm vi ứng dụng】
Trang tr\xed v\xe0 bảo vệ y\xeau cầu cao cho tường b\xea t\xf4ng, th\xe9p, gỗ.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Nhũ tương fluorocarbon + bột kim loại
M\xe0u sắc：Solid / metallic colours
Dung m\xf4i pha (tối đa)：Nước 0–20 %
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：chạm kh\xf4 ≤ 1 h (25 \xb0C, ≤ 75 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：≥ 4 h (25 \xb0C, ≤ 75 % RH)
Phương ph\xe1p thi c\xf4ng：Spray \xb7 lăn \xb7 cọ
Dung dịch vệ sinh：Nước

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
waterborne anti-alkali primer \xd71 lớp（8 m\xb2/kg）
waterborne FC intermediate (optional) \xd71 lớp（8 m\xb2/kg）
HN-EX-707 \xd72 lớp（4 m\xb2/kg）

【An to\xe0n】
Sản phẩm gốc nước: đậy k\xedn hộp v\xe0 để xa tầm tay trẻ em. Th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sơn kh\xf4; đeo khẩu trang khi m\xe0i. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng lại v\xe0o hộp gốc. Bảo quản nơi kh\xf4 m\xe1t, tr\xe1nh đ\xf3ng băng.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Pintura exterior de textura met\xe1lica base agua monocomponente a base de una emulsi\xf3n fluorocarbonada premium: desempe\xf1o ambiental de producto base agua con fuerte resistencia al ataque de \xe1cidos, \xe1lcalis y lluvia; excelente resistencia a los \xe1lcalis y retenci\xf3n de color y brillo.

【Aplicaciones t\xedpicas】
Decoraci\xf3n y protecci\xf3n de alta especificaci\xf3n de envolventes de edificios de concreto, acero y madera.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Emulsi\xf3n fluorocarbonada + pigmento met\xe1lico
Color：Solid / metallic colours
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Agua 0–20 %
Secado (seco al tacto / curado completo)：seco al tacto ≤ 1 h (25 \xb0C, ≤ 75 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：≥ 4 h (25 \xb0C, ≤ 75 % RH)
M\xe9todos de aplicaci\xf3n：Spray \xb7 rodillo \xb7 brocha
Limpiador：Agua

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
waterborne anti-alkali primer \xd71 capa(s)（8 m\xb2/kg）
waterborne FC intermediate (optional) \xd71 capa(s)（8 m\xb2/kg）
HN-EX-707 \xd72 capa(s)（4 m\xb2/kg）

【Seguridad】
Producto base agua: mantener los envases bien cerrados y fuera del alcance de los ni\xf1os. Garantizar buena ventilaci\xf3n durante el uso y el secado; usar mascarilla para polvo al lijar. No verter la pintura diluida de vuelta al envase original. Almacenar en un lugar fresco y seco, proteger de las heladas.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء خارجي بملمس معدني أساس مائي أحادي العبوة قائم على مستحلب فلوروكربون فاخر: أداء بيئي للطلاءات الأساس مائي مع مقاومة قوية لهجوم الأحماض والقلويات والأمطار؛ ومقاومة ممتازة للقلويات وثبات ممتاز للون واللمعان.

【التطبيقات النموذجية】
تزيين وحماية عاليَا المواصفات للأغلفة المعمارية من الخرسانة والفولاذ والأخشاب.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：مستحلب فلوروكربون + صبغة معدنية
اللون：Solid / metallic colours
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：ماء 0–20 %
الجفاف (الجفاف السطحي / التصلد الكامل)：الجفاف السطحي ≤ 1 h (25 \xb0C, ≤ 75 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：≥ 4 h (25 \xb0C, ≤ 75 % RH)
طرق التطبيق：Spray \xb7 رولر (بكرة دهان) \xb7 فرشاة
مادة التنظيف：ماء

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
waterborne anti-alkali primer \xd71 طبقة/طبقات（8 m\xb2/kg）
waterborne FC intermediate (optional) \xd71 طبقة/طبقات（8 m\xb2/kg）
HN-EX-707 \xd72 طبقة/طبقات（4 m\xb2/kg）

【السلامة】
منتج أساس مائي: تُغلق العبوات بإحكام وتُبقى بعيداً عن متناول الأطفال. تأكد من التهوية الجيدة أثناء الاستخدام والجفاف؛ وارتدِ كمامة غبار عند الصنفرة. لا تُعاد الطلاء المخفف إلى العبوة الأصلية. يُحفظ في مكان بارد جاف، ويُحمى من الصقيع.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}}],image:"/images/product-exterior.jpg",applications:[{en:"Commercial towers & public buildings",zh:"商业塔楼与公共建筑",vi:"Tháp thương mại & công trình công",es:"Torres comerciales y edificios públicos",ar:"الأبراج التجارية والمباني العامة"},{en:"Exterior steel structures",zh:"室外钢结构",vi:"Kết cấu thép ngoài trời",es:"Estructuras de acero exteriores",ar:"الهياكل الفولاذية الخارجية"},{en:"Cement render & concrete facades",zh:"水泥砂浆与混凝土外墙",vi:"Vữa & mặt tiền bê tông",es:"Revoques de cemento y fachadas de concreto",ar:"اللياسة الأسمنتية والواجهات الخرسانية"},{en:"Renovation over tile & textured coats",zh:"瓷砖及浮雕层上翻新",vi:"Cải tạo trên gạch & lớp浮雕",es:"Renovación sobre azulejos y capas texturizadas",ar:"تجديد فوق البلاط وطبقات الملمس"}]},{code:"CAT-05",title:{en:"Architectural Wall Coatings",zh:"建筑墙面涂料",vi:"Sơn tường kiến trúc",es:"Recubrimientos arquitectónicos para muros",ar:"طلاءات الجدران المعمارية"},short:{en:"Interior emulsion · Exterior weathering · Tile renovation",zh:"内墙乳胶漆·外墙耐候·瓷砖翻新",vi:"Nhũ tương trong nhà · ngoại thất · cải tạo gạch",es:"Emulsión interior · Exterior a la intemperie · Renovación de azulejos",ar:"مستحلب داخلي · تحمل الطقس الخارجي · تجديد البلاط"},description:{en:"Waterborne interior and exterior emulsion systems plus specialised primers: formaldehyde-absorbing low-odour interiors, pure-acrylic weathering exteriors, healthy-home grades and epoxy primers that grip tile and glass for renovation.",zh:"水性内外墙乳胶漆体系及特种底漆：抗甲醛净味内墙漆、纯丙耐候外墙漆、健康儿童漆，以及可在瓷砖玻璃上直接附着的翻新环氧底漆。",vi:"Hệ nhũ tương trong/ngoài trời gốc nước cùng sơn lót chuyên dụng: nội thất khử formaldehyde ít mùi, ngoại thất acrylic nguyên chất, cấp lành mạnh và lót epoxy bám gạch/kính cho cải tạo.",es:"Sistemas de emulsión base agua para interiores y exteriores más imprimaciones especializadas: interiores de bajo olor absorbentes de formaldehído, exteriores de acrílico puro resistentes a la intemperie, grados de hogar saludable e imprimaciones epoxi que se adhieren a azulejos y vidrio para renovación.",ar:"أنظمة مستحلبية أساس مائية للداخل والخارج مع برايمرات متخصصة: طلاءات داخلية منخفضة الرائحة تمتص الفورمالدهيد، وطلاءات خارجية أكريليك نقية مقاومة للعوامل الجوية، ودرجات المنازل الصحية، وبرايمرات إيبوكسي تلتصق بالبلاط والزجاج لأعمال التجديد."},features:[{en:"Formaldehyde-absorbing, low-odour interior grades",zh:"抗甲醛净味内墙等级",vi:"Cấp nội thất khử formaldehyde, ít mùi",es:"Grados interiores absorbentes de formaldehído y de baja emisión de olores",ar:"درجات داخلية ماصة للفورمالدهيد ومنخفضة الرائحة"},{en:"Scrubable films, lead & mercury free",zh:"漆膜可擦洗，不添加铅汞",vi:"Màng chùi rửa được, không chì thuỷ ngân",es:"Películas lavables, sin plomo ni mercurio",ar:"أغشية قابلة للفرك وخالية من الرصاص والزئبق"},{en:"Pure-acrylic exterior with anti-mould performance",zh:"纯丙外墙，防霉性能佳",vi:"Ngoại thất acrylic nguyên chất chống nấm",es:"Exterior 100 % acrílico con desempeño antimoho",ar:"طلاء خارجي أكريليكي نقي بأداء مضاد للعفن"},{en:"Tile & glass adhesion primer for renovations",zh:"瓷砖/玻璃强附着翻新底漆",vi:"Lót bám gạch & kính cho cải tạo",es:"Imprimación de adherencia sobre azulejos y vidrio para renovaciones",ar:"برايمر التصاق للبلاط والزجاج لأعمال التجديد"}],specs:[{label:{en:"Type",zh:"类型",vi:"Loại",es:"Tipo",ar:"النوع"},value:"Waterborne emulsion"},{label:{en:"Coverage",zh:"涂布率",vi:"Suất sơn",es:"Rendimiento",ar:"معدل الانتشار"},value:"≈ 12 m²/L / coat"},{label:{en:"Recoat",zh:"重涂",vi:"Sơn lại",es:"Repintado",ar:"إعادة الطلاء"},value:"2 – 3 h"},{label:{en:"Finish",zh:"饰面",vi:"Hoàn thiện",es:"Acabado",ar:"التشطيب"},value:"Matt / silk"}],categorySpecs:[{label:{en:"Coverage",zh:"涂布率",vi:"Suất sơn",es:"Rendimiento",ar:"معدل الانتشار"},value:"≈12 m²/L"},{label:{en:"Recoat",zh:"重涂",vi:"Sơn lại",es:"Repintado",ar:"إعادة الطلاء"},value:"2–3 h"},{label:{en:"VOC",zh:"VOC",vi:"VOC",es:"VOC",ar:"VOC"},value:"waterborne"},{label:{en:"Finish",zh:"饰面",vi:"Hoàn thiện",es:"Acabado",ar:"التشطيب"},value:"matt/silk"}],models:[{model:"HN-AR-801",desc:{en:"Low-odour matt interior emulsion — scrubable, lead & mercury free",zh:"净味哑光内墙乳胶漆，可擦洗，不添加铅汞",vi:"Sơn nội thất mờ ít mùi — chùi rửa được, không thêm chì thuỷ ngân",es:"Emulsión interior mate de baja emisión de olores — lavable, sin plomo ni mercurio",ar:"مستحلب داخلي مطفي منخفض الرائحة — قابل للفرك وخالٍ من الرصاص والزئبق"},details:{en:`【Overview】
Premium waterborne matt interior emulsion: rich colours, durable, strong hiding power, good adhesion, mould-resistant, alkali-resistant, easy application and scrubable. Formulated without added lead or mercury.

【Typical applications】
Decoration and protection of interior base walls — render, plasterboard, etc.

【Physical & application data】
Binder / resin：Acrylic copolymer emulsion
Colour：Per HN colour card
Volume solids：≈ 32 % (white, nominal)
Recommended DFT：25 μm / coat (WFT 80 μm)
Theoretical spreading rate：≈ 12 m\xb2/L per coat (theoretical)
Drying (touch-dry / full cure)：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
Finish：Matt
Thinner (max, by method)：Water ≤ 20 % (brush/roller 10–20 %; airless usually none)
Cleaner：Water
Application methods：Brush \xb7 roller \xb7 conventional spray \xb7 airless spray

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
anti-alkali primer (high-alkali) / general primer \xd71 coat(s)（1 coat）
HN-AR-801 \xd72 coat(s)（2 coats）

【Safety】
Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
高档优质水性哑光内墙乳胶漆，色彩丰富、经久耐用；遮盖力强、附着力佳、优质防霉、抗碱性好、施工性能优良、可擦洗。本品不添加铅和汞，安全可靠。

【适用范围】
室内基层墙面（抹灰面、石膏板面等）的装饰与保护。

【物理与应用参数】
漆基：丙烯酸共聚物乳液
颜色：见 HN 色卡
体积固体含量：≈ 32 % (white, nominal)
推荐干膜厚度：25 μm / coat (WFT 80 μm)
理论涂布率：≈ 12 m\xb2/L 每道（理论）
干燥时间（表干 / 完全固化）：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
漆面：哑光
稀释剂（最大用量）：水 ≤ 20 % (刷涂/辊涂 10–20 %; 无气喷涂 usually none)
清洗剂：水
施工方法：Brush \xb7 辊涂 \xb7 普通喷涂 \xb7 无气喷涂 喷涂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
anti-alkali primer (high-alkali) / general primer \xd71 遍（1 coat）
HN-AR-801 \xd72 遍（2 coats）

【安全守则】
水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn nhũ tương nội thất mờ gốc nước cao cấp: m\xe0u phong ph\xfa, bền; độ che phủ mạnh, b\xe1m d\xednh tốt, chống nấm mốc, chịu kiềm, thi c\xf4ng dễ, ch\xf9i rửa được. Kh\xf4ng th\xeam ch\xec v\xe0 thuỷ ng\xe2n.

【Phạm vi ứng dụng】
Trang tr\xed v\xe0 bảo vệ tường nền trong nh\xe0 — vữa, tấm thạch cao...

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Nhũ tương copolymer acrylic
M\xe0u sắc：Theo bảng m\xe0u HN
H\xe0m lượng rắn theo thể t\xedch：≈ 32 % (white, nominal)
Độ d\xe0y m\xe0ng kh\xf4 khuyến nghị：25 μm / coat (WFT 80 μm)
Suất sơn l\xfd thuyết：≈ 12 m\xb2/L mỗi lớp (l\xfd thuyết)
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
Bề mặt：Mờ
Dung m\xf4i pha (tối đa)：Nước ≤ 20 % (cọ/lăn 10–20 %; airless usually none)
Dung dịch vệ sinh：Nước
Phương ph\xe1p thi c\xf4ng：Brush \xb7 lăn \xb7 phun thường \xb7 phun airless

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
anti-alkali primer (high-alkali) / general primer \xd71 lớp（1 coat）
HN-AR-801 \xd72 lớp（2 coats）

【An to\xe0n】
Sản phẩm gốc nước: đậy k\xedn hộp v\xe0 để xa tầm tay trẻ em. Th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sơn kh\xf4; đeo khẩu trang khi m\xe0i. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng lại v\xe0o hộp gốc. Bảo quản nơi kh\xf4 m\xe1t, tr\xe1nh đ\xf3ng băng.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Emulsi\xf3n interior mate premium base agua: colores intensos, duradera, gran poder cubriente, buena adherencia, resistente al moho y a los \xe1lcalis, f\xe1cil de aplicar y lavable. Formulada sin plomo ni mercurio a\xf1adidos.

【Aplicaciones t\xedpicas】
Decoraci\xf3n y protecci\xf3n de muros base interiores — revoque, placa de yeso, etc.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Emulsi\xf3n de copol\xedmero acr\xedlico
Color：Seg\xfan carta de color HN
S\xf3lidos en volumen：≈ 32 % (white, nominal)
DFT recomendado：25 μm / coat (WFT 80 μm)
Rendimiento te\xf3rico：≈ 12 m\xb2/L por capa (te\xf3rico)
Secado (seco al tacto / curado completo)：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
Acabado：Mate
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Agua ≤ 20 % (brocha/rodillo 10–20 %; airless usually none)
Limpiador：Agua
M\xe9todos de aplicaci\xf3n：Brush \xb7 rodillo \xb7 pulverizaci\xf3n convencional \xb7 airless pulverizaci\xf3n

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
anti-alkali primer (high-alkali) / general primer \xd71 capa(s)（1 coat）
HN-AR-801 \xd72 capa(s)（2 coats）

【Seguridad】
Producto base agua: mantener los envases bien cerrados y fuera del alcance de los ni\xf1os. Garantizar buena ventilaci\xf3n durante el uso y el secado; usar mascarilla para polvo al lijar. No verter la pintura diluida de vuelta al envase original. Almacenar en un lugar fresco y seco, proteger de las heladas.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
مستحلب داخلي مطفي أساس مائي فاخر: ألوان غنية ومتانة وقوة حجب قوية والتصاق جيد ومقاومة للعفن والقلويات وسهولة تطبيق وقابلية للفرك. تركيبة دون إضافة رصاص أو زئبق.

【التطبيقات النموذجية】
تزيين وحماية الجدران الداخلية الأساسية — اللياسة وألواح الجص وسواها.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：مستحلب كوبوليمر أكريليك
اللون：وفق بطاقة ألوان HN
المواد الصلبة بالحجم：≈ 32 % (white, nominal)
سماكة الغشاء الجاف الموصى بها (DFT)：25 μm / coat (WFT 80 μm)
معدل الانتشار النظري：≈ 12 m\xb2/L لكل طبقة (نظرياً)
الجفاف (الجفاف السطحي / التصلد الكامل)：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
التشطيب：مطفي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：ماء ≤ 20 % (فرشاة/رولر (بكرة دهان) 10–20 %; رش هوائي (airless) usually none)
مادة التنظيف：ماء
طرق التطبيق：Brush \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي \xb7 رش هوائي (airless) رش

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
anti-alkali primer (high-alkali) / general primer \xd71 طبقة/طبقات（1 coat）
HN-AR-801 \xd72 طبقة/طبقات（2 coats）

【السلامة】
منتج أساس مائي: تُغلق العبوات بإحكام وتُبقى بعيداً عن متناول الأطفال. تأكد من التهوية الجيدة أثناء الاستخدام والجفاف؛ وارتدِ كمامة غبار عند الصنفرة. لا تُعاد الطلاء المخفف إلى العبوة الأصلية. يُحفظ في مكان بارد جاف، ويُحمى من الصقيع.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AR-802",desc:{en:"Pure-acrylic exterior wall paint — excellent weathering and mould resistance",zh:"纯丙乳液外墙漆，耐候防霉极佳",vi:"Sơn tường ngoại thất acrylic nguyên chất — chịu thời tiết và chống nấm xuất sắc",es:"Pintura exterior para muros 100 % acrílica — excelente resistencia a la intemperie y al moho",ar:"طلاء جدران خارجي أكريليكي نقي — مقاومة ممتازة للطقس والعفن"},details:{en:`【Overview】
Premium exterior wall paint based on a pure-acrylic emulsion with pigments, fillers and additives: excellent weathering, strong adhesion, good water and alkali resistance and outstanding mould resistance. Excellent inter-coat adhesion and protection over HN sealers / putties.

【Typical applications】
Exterior walls: cement render, plaster, asbestos-cement board, concrete; finish over HN sealers / texture coats / putties.

【Physical & application data】
Binder / resin：Pure acrylic emulsion
Colour：White (10000); others per colour card
Finish：Eggshell
Volume solids：37 %
Density：1.25–1.40 kg/L
Flash point：None (waterborne)
Theoretical spreading rate：11.5 m\xb2/L flat / 6.0 m\xb2/L over texture (one coat)
Drying (touch-dry / full cure)：1 h touch-dry (20 \xb0C, 65 % RH)
Recoating interval (min / max)：≥ 4 h – no limit
Recommended DFT：32 μm / coat (WFT 87 μm)
Thinner (max, by method)：Water ≤ 5 %
Cleaner：Water
Application methods：Spray \xb7 brush \xb7 roller

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
HN sealer / texture primer / putty
HN-AR-802 \xd72 coat(s)（2 coats）

【Safety】
Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
由纯丙乳液、颜填料和助剂组成的外墙漆。漆膜耐候性极好，附着力强，耐水耐碱性佳，防霉效果极佳；与封闭底漆或腻子配套使用，层间附着力和保护性能极佳。

【适用范围】
外墙：水泥砂浆、灰泥、水泥石棉板、混凝土等表面，及封闭底漆/浮雕底漆/腻子之上的面涂。

【物理与应用参数】
漆基：纯丙乳液
颜色：白色（10000）；其他见色卡
漆面：蛋壳光
体积固体含量：37 %
比重：1.25–1.40 kg/L
闪点：None (waterborne)
理论涂布率：11.5 m\xb2/L flat / 6.0 m\xb2/L over texture (一道)
干燥时间（表干 / 完全固化）：1 h 表干 (20 \xb0C, 65 % RH)
重涂间隔（最小 / 最大）：≥ 4 h – 不限
推荐干膜厚度：32 μm / coat (WFT 87 μm)
稀释剂（最大用量）：水 ≤ 5 %
清洗剂：水
施工方法：Spray \xb7 刷涂 \xb7 辊涂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
HN sealer / texture primer / putty
HN-AR-802 \xd72 遍（2 coats）

【安全守则】
水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn tường ngoại thất từ nhũ tương acrylic nguy\xean chất với bột m\xe0u, chất độn v\xe0 phụ gia: chịu thời tiết cực tốt, b\xe1m d\xednh mạnh, chịu nước v\xe0 kiềm tốt, chống nấm mốc xuất sắc; phối hợp tuyệt vời với sơn l\xf3t/bột tr\xe9t HN.

【Phạm vi ứng dụng】
Tường ngo\xe0i: vữa xi măng, thạch cao, tấm amiang xi măng, b\xea t\xf4ng; lớp phủ tr\xean sơn l\xf3t/hiệu ứng/bột tr\xe9t HN.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Nhũ tương acrylic nguy\xean chất
M\xe0u sắc：Trắng (10000); kh\xe1c theo bảng m\xe0u
Bề mặt：Vỏ trứng
H\xe0m lượng rắn theo thể t\xedch：37 %
Khối lượng ri\xeang：1.25–1.40 kg/L
Điểm bắt lửa：None (waterborne)
Suất sơn l\xfd thuyết：11.5 m\xb2/L flat / 6.0 m\xb2/L over texture (một lớp)
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h chạm kh\xf4 (20 \xb0C, 65 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：≥ 4 h – kh\xf4ng giới hạn
Độ d\xe0y m\xe0ng kh\xf4 khuyến nghị：32 μm / coat (WFT 87 μm)
Dung m\xf4i pha (tối đa)：Nước ≤ 5 %
Dung dịch vệ sinh：Nước
Phương ph\xe1p thi c\xf4ng：Spray \xb7 cọ \xb7 lăn

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN sealer / texture primer / putty
HN-AR-802 \xd72 lớp（2 coats）

【An to\xe0n】
Sản phẩm gốc nước: đậy k\xedn hộp v\xe0 để xa tầm tay trẻ em. Th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sơn kh\xf4; đeo khẩu trang khi m\xe0i. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng lại v\xe0o hộp gốc. Bảo quản nơi kh\xf4 m\xe1t, tr\xe1nh đ\xf3ng băng.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Pintura exterior premium a base de una emulsi\xf3n de acr\xedlico puro con pigmentos, cargas y aditivos: excelente resistencia a la intemperie, fuerte adherencia, buena resistencia al agua y a los \xe1lcalis y sobresaliente resistencia al moho. Excelente adherencia entre capas y protecci\xf3n sobre selladores / masillas HN.

【Aplicaciones t\xedpicas】
Muros exteriores: revoque de cemento, yeso, placa de fibrocemento, concreto; acabado sobre selladores / capas texturizadas / masillas HN.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Emulsi\xf3n de acr\xedlico puro
Color：Blanco (10000); otros seg\xfan carta de color
Acabado：C\xe1scara de huevo
S\xf3lidos en volumen：37 %
Densidad：1.25–1.40 kg/L
Punto de inflamaci\xf3n：None (waterborne)
Rendimiento te\xf3rico：11.5 m\xb2/L flat / 6.0 m\xb2/L over texture (una capa)
Secado (seco al tacto / curado completo)：1 h seco al tacto (20 \xb0C, 65 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：≥ 4 h – sin l\xedmite
DFT recomendado：32 μm / coat (WFT 87 μm)
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Agua ≤ 5 %
Limpiador：Agua
M\xe9todos de aplicaci\xf3n：Spray \xb7 brocha \xb7 rodillo

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
HN sealer / texture primer / putty
HN-AR-802 \xd72 capa(s)（2 coats）

【Seguridad】
Producto base agua: mantener los envases bien cerrados y fuera del alcance de los ni\xf1os. Garantizar buena ventilaci\xf3n durante el uso y el secado; usar mascarilla para polvo al lijar. No verter la pintura diluida de vuelta al envase original. Almacenar en un lugar fresco y seco, proteger de las heladas.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء جدران خارجي فاخر قائم على مستحلب أكريليكي نقي مع أصباغ وحشوات ومضافات: مقاومة ممتازة للطقس، والتصاق قوي، ومقاومة جيدة للماء والقلويات، ومقاومة بارزة للعفن. التصاق ممتاز بين الطبقات وحماية ممتازة فوق خانات/معاجين HN.

【التطبيقات النموذجية】
الجدران الخارجية: اللياسة الأسمنتية والجص وألواح الأسمنت-الأسبستوس والخرسانة؛ وطبقة نهائية فوق خانات HN/طبقات الملمس/المعاجين.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：مستحلب أكريليك نقي
اللون：أبيض (10000)؛ وغيره وفق بطاقة الألوان
التشطيب：قشرة البيض
المواد الصلبة بالحجم：37 %
الكثافة：1.25–1.40 kg/L
نقطة الوميض：None (waterborne)
معدل الانتشار النظري：11.5 m\xb2/L flat / 6.0 m\xb2/L over texture (طبقة واحدة)
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h الجفاف السطحي (20 \xb0C, 65 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：≥ 4 h – بلا حد
سماكة الغشاء الجاف الموصى بها (DFT)：32 μm / coat (WFT 87 μm)
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：ماء ≤ 5 %
مادة التنظيف：ماء
طرق التطبيق：Spray \xb7 فرشاة \xb7 رولر (بكرة دهان)

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
HN sealer / texture primer / putty
HN-AR-802 \xd72 طبقة/طبقات（2 coats）

【السلامة】
منتج أساس مائي: تُغلق العبوات بإحكام وتُبقى بعيداً عن متناول الأطفال. تأكد من التهوية الجيدة أثناء الاستخدام والجفاف؛ وارتدِ كمامة غبار عند الصنفرة. لا تُعاد الطلاء المخفف إلى العبوة الأصلية. يُحفظ في مكان بارد جاف، ويُحمى من الصقيع.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AR-803",desc:{en:"Granite-look textured facade system, lightweight — system data on request",zh:"天然花岗岩效果轻质外墙系统，体系数据备索",vi:"Hệ mặt tiền vân đá花岗岩 nhẹ — số liệu hệ thống theo yêu cầu",es:"Sistema de fachada texturizada de aspecto granito, ligero — datos del sistema a pedido",ar:"نظام واجهة بملمس جرانيتي خفيف الوزن — بيانات النظام عند الطلب"},details:{en:`【Overview】
Multi-coat textured facade system producing a natural granite look at a fraction of the weight of stone cladding. Build, particle grade and colour combinations are project-specified; request the system data sheet before specification.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
多层纹理外墙系统，呈现天然花岗岩效果，重量远低于石材干挂。膜厚、颗粒级配与颜色组合按项目定制；选型前请索取体系数据表。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Hệ mặt tiền nhiều lớp tạo hiệu ứng đ\xe1 hoa cương tự nhi\xean, nhẹ hơn nhiều so với ốp đ\xe1. Độ d\xe0y, cấp hạt v\xe0 phối m\xe0u theo dự \xe1n; vui l\xf2ng y\xeau cầu bảng số liệu hệ.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Sistema de fachada texturizada multicapa que produce un aspecto de granito natural con una fracci\xf3n del peso del revestimiento de piedra. El espesor, el granulometr\xeda y las combinaciones de color se definen por proyecto; solicite la ficha de datos del sistema antes de especificar.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
نظام واجهة متعدد الطبقات بملمس يعطي مظهر الجرانيت الطبيعي بجزء يسير من وزن كسوة الحجر. تُحدَّد السماكة ودرجة الحبيبات وتوليفات الألوان بمواصفات المشروع؛ اطلب ورقة بيانات النظام قبل اعتماد المواصفة.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AR-804",desc:{en:"Expands under heat to insulate the substrate — ratings & certificates on request",zh:"遇热膨胀隔热，耐火等级与证书备索",vi:"Nở khi nhiệt cách nhiệt nền — cấp chịu lửa và chứng nhận theo yêu cầu",es:"Se expande con el calor para aislar el sustrato — clasificaciones y certificados a pedido",ar:"يتمدد بالحرارة لعزل الركيزة — التصنيفات والشهادات عند الطلب"},details:{en:`【Overview】
Intumescent coatings that expand under fire to form an insulating char, protecting steel and substrates. Fire ratings differ per system and substrate thickness; certificates and test reports for the applicable system are available on request.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
遇火膨胀形成隔热炭化层，保护钢材及基材。耐火极限随体系与基材厚度不同；适用体系的证书与检测报告备索。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn nở phồng khi ch\xe1y tạo lớp c\xe1ch nhiệt bảo vệ th\xe9p v\xe0 nền. Cấp chịu lửa t\xf9y hệ v\xe0 độ d\xe0y nền; chứng nhận v\xe0 b\xe1o c\xe1o thử của hệ ph\xf9 hợp c\xf3 theo y\xeau cầu.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimientos intumescentes que se expanden bajo el fuego para formar una capa carbonizada aislante que protege el acero y los sustratos. Las clasificaciones de resistencia al fuego difieren seg\xfan el sistema y el espesor del sustrato; los certificados e informes de ensayo del sistema aplicable est\xe1n disponibles a pedido.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاءات متمددة بالحرارة تشكل عند الحريق طبقة عازلة متفحمة تحمي الفولاذ والركائز. تختلف تصنيفات مقاومة الحريق باختلاف النظام وسماكة الركيزة؛ والشهادات وتقارير الاختبار للنظام المناسب متاحة عند الطلب.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AR-805",desc:{en:"Silk-sheen interior emulsion — smooth, scrubable, lead & mercury free",zh:"丝光内墙乳胶漆，漆膜细腻可擦洗，不添加铅汞",vi:"Sơn nội thất bóng tơ — mịn, chùi rửa được, không thêm chì thuỷ ngân",es:"Emulsión interior satinada — película lisa y lavable, sin plomo ni mercurio",ar:"مستحلب داخلي حريري اللمعان — أملس وقابل للفرك وخالٍ من الرصاص والزئبق"},details:{en:`【Overview】
Premium interior emulsion for protecting and beautifying interior walls: smooth, fine film with strong hiding power, easy to clean; strong coverage, good adhesion, mould-resistant, alkali-resistant, silk-sheen finish and scrubable. No added lead or mercury.

【Typical applications】
Decoration and protection of interior base walls — render, plasterboard, etc.

【Physical & application data】
Binder / resin：Vinyl acetate copolymer emulsion
Colour：Per HN colour card
Volume solids：≈ 45 % (white, nominal)
Recommended DFT：28 μm / coat (WFT 80 μm)
Theoretical spreading rate：≈ 12 m\xb2/L per coat (theoretical)
Drying (touch-dry / full cure)：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
Finish：Silk sheen
Thinner (max, by method)：Water, moderate
Cleaner：Water
Application methods：Brush \xb7 roller \xb7 conventional spray \xb7 airless spray

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
anti-alkali primer (high-alkali) / general primer \xd71 coat(s)（1 coat）
HN-AR-805 \xd72 coat(s)（2 coats）

【Safety】
Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
保护及美化室内墙壁的高档墙面漆。漆膜光滑细腻，遮盖力强，易清洁；附着力佳，优质防霉，抗碱性良好，高质丝光墙面，擦洗性强。本品不添加铅和汞。

【适用范围】
室内基层墙面（抹灰面、石膏板面等）的装饰与保护。

【物理与应用参数】
漆基：醋酸乙烯共聚物乳液
颜色：见 HN 色卡
体积固体含量：≈ 45 % (white, nominal)
推荐干膜厚度：28 μm / coat (WFT 80 μm)
理论涂布率：≈ 12 m\xb2/L 每道（理论）
干燥时间（表干 / 完全固化）：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
漆面：丝光
稀释剂（最大用量）：清水适量
清洗剂：水
施工方法：Brush \xb7 辊涂 \xb7 普通喷涂 \xb7 无气喷涂 喷涂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
anti-alkali primer (high-alkali) / general primer \xd71 遍（1 coat）
HN-AR-805 \xd72 遍（2 coats）

【安全守则】
水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn nội thất cao cấp bảo vệ v\xe0 l\xe0m đẹp tường trong nh\xe0: m\xe0ng mịn, độ che mạnh, dễ vệ sinh; b\xe1m d\xednh tốt, chống nấm, chịu kiềm, bề mặt b\xf3ng tơ, ch\xf9i rửa được. Kh\xf4ng th\xeam ch\xec v\xe0 thuỷ ng\xe2n.

【Phạm vi ứng dụng】
Trang tr\xed v\xe0 bảo vệ tường nền trong nh\xe0 — vữa, thạch cao...

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Nhũ tương copolymer vinyl acetate
M\xe0u sắc：Theo bảng m\xe0u HN
H\xe0m lượng rắn theo thể t\xedch：≈ 45 % (white, nominal)
Độ d\xe0y m\xe0ng kh\xf4 khuyến nghị：28 μm / coat (WFT 80 μm)
Suất sơn l\xfd thuyết：≈ 12 m\xb2/L mỗi lớp (l\xfd thuyết)
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
Bề mặt：B\xf3ng tơ
Dung m\xf4i pha (tối đa)：Nước vừa đủ
Dung dịch vệ sinh：Nước
Phương ph\xe1p thi c\xf4ng：Brush \xb7 lăn \xb7 phun thường \xb7 phun airless

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
anti-alkali primer (high-alkali) / general primer \xd71 lớp（1 coat）
HN-AR-805 \xd72 lớp（2 coats）

【An to\xe0n】
Sản phẩm gốc nước: đậy k\xedn hộp v\xe0 để xa tầm tay trẻ em. Th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sơn kh\xf4; đeo khẩu trang khi m\xe0i. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng lại v\xe0o hộp gốc. Bảo quản nơi kh\xf4 m\xe1t, tr\xe1nh đ\xf3ng băng.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Emulsi\xf3n interior premium para proteger y embellecer los muros interiores: pel\xedcula lisa y fina con gran poder cubriente, f\xe1cil de limpiar; alta cobertura, buena adherencia, resistente al moho y a los \xe1lcalis, acabado satinado y lavable. Sin plomo ni mercurio a\xf1adidos.

【Aplicaciones t\xedpicas】
Decoraci\xf3n y protecci\xf3n de muros base interiores — revoque, placa de yeso, etc.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Emulsi\xf3n de copol\xedmero de acetato de vinilo
Color：Seg\xfan carta de color HN
S\xf3lidos en volumen：≈ 45 % (white, nominal)
DFT recomendado：28 μm / coat (WFT 80 μm)
Rendimiento te\xf3rico：≈ 12 m\xb2/L por capa (te\xf3rico)
Secado (seco al tacto / curado completo)：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
Acabado：Satinado
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Agua, moderate
Limpiador：Agua
M\xe9todos de aplicaci\xf3n：Brush \xb7 rodillo \xb7 pulverizaci\xf3n convencional \xb7 airless pulverizaci\xf3n

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
anti-alkali primer (high-alkali) / general primer \xd71 capa(s)（1 coat）
HN-AR-805 \xd72 capa(s)（2 coats）

【Seguridad】
Producto base agua: mantener los envases bien cerrados y fuera del alcance de los ni\xf1os. Garantizar buena ventilaci\xf3n durante el uso y el secado; usar mascarilla para polvo al lijar. No verter la pintura diluida de vuelta al envase original. Almacenar en un lugar fresco y seco, proteger de las heladas.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
مستحلب داخلي فاخر لحماية الجدران الداخلية وتجميلها: غشاء أملس ناعم بقوة حجب قوية وسهولة تنظيف؛ وتغطية قوية والتصاق جيد ومقاومة للعفن والقلويات وتشطيب حريري اللمعان وقابلية للفرك. دون إضافة رصاص أو زئبق.

【التطبيقات النموذجية】
تزيين وحماية الجدران الداخلية الأساسية — اللياسة وألواح الجص وسواها.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：مستحلب كوبوليمر أسيتات الفينيل
اللون：وفق بطاقة ألوان HN
المواد الصلبة بالحجم：≈ 45 % (white, nominal)
سماكة الغشاء الجاف الموصى بها (DFT)：28 μm / coat (WFT 80 μm)
معدل الانتشار النظري：≈ 12 m\xb2/L لكل طبقة (نظرياً)
الجفاف (الجفاف السطحي / التصلد الكامل)：0.5–1 h touch / 2–3 h recoat (25 \xb0C, 50 % RH)
التشطيب：لمعان حريري
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：ماء, moderate
مادة التنظيف：ماء
طرق التطبيق：Brush \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي \xb7 رش هوائي (airless) رش

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
anti-alkali primer (high-alkali) / general primer \xd71 طبقة/طبقات（1 coat）
HN-AR-805 \xd72 طبقة/طبقات（2 coats）

【السلامة】
منتج أساس مائي: تُغلق العبوات بإحكام وتُبقى بعيداً عن متناول الأطفال. تأكد من التهوية الجيدة أثناء الاستخدام والجفاف؛ وارتدِ كمامة غبار عند الصنفرة. لا تُعاد الطلاء المخفف إلى العبوة الأصلية. يُحفظ في مكان بارد جاف، ويُحمى من الصقيع.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AR-806",desc:{en:"Single-pack acrylic facade paint — weathering + dirt resistance, −10 °C application",zh:"单组份丙烯酸外墙漆，耐候抗污，可 −10 ℃ 施工",vi:"Sơn mặt tiền acrylic 1 thành phần — chịu thời tiết, kháng bẩn, thi công −10 °C",es:"Pintura acrílica para fachadas monocomponente — resistencia a la intemperie y a la suciedad, aplicación a −10 °C",ar:"طلاء واجهات أكريليك أحادي العبوة — مقاوم للطقس والأوساخ، ويُطبَّق عند −10 °C"},details:{en:`【Overview】
Acrylic-based solvent-borne exterior paint with good colour retention and application properties; protects and decorates interior / exterior walls and concrete and finishes textured (relief) systems. Good adhesion and water resistance, weathers well, resists mild chemicals, acid rain and mould; applicable down to about −10 \xb0C.

【Typical applications】
Interior / exterior concrete walls; finish for textured relief systems.

【Physical & application data】
Binder / resin：Acrylic
Colour：Wide colour range
Finish：Matt
Flash point：38 \xb0C
Density：1.4 kg/L
Volume solids：50 %
Theoretical spreading rate：10 m\xb2/L @ 50 μm DFT
Drying (touch-dry / full cure)：1 h / 24 h hard (25 \xb0C, 70 % RH)
Recoating interval (min / max)：4 h – no limit
Application methods：Airless spray \xb7 brush \xb7 roller \xb7 conventional spray
Thinner (max, by method)：brush & roller 10 % \xb7 airless 10 % \xb7 spray 15 %
Cleaner：Matched HN acrylic thinner

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
solvent-borne sealing primer \xd71 coat(s)（0.10 L/m\xb2）
HN-AR-806 \xd72 coat(s)（0.22 L/m\xb2 flat / 0.30 L/m\xb2 relief）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
丙烯酸基外墙油漆，保色及施工性能良好，为室内外墙壁、混凝土表面提供保护及装饰，也可用作浮雕涂层系统之面漆。附着力佳、耐水优异、耐候性好，能抵抗温和化学品、酸雨及霉菌侵蚀；施工容易，可在 −10 ℃ 左右施工。

【适用范围】
室内外混凝土墙壁；浮雕涂层系统的面漆。

【物理与应用参数】
漆基：丙烯酸树脂
颜色：多种颜色
漆面：哑光
闪点：38 \xb0C
比重：1.4 kg/L
体积固体含量：50 %
理论涂布率：10 m\xb2/L @ 50 μm DFT
干燥时间（表干 / 完全固化）：1 h / 24 h 硬干 (25 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：4 h – 不限
施工方法：无气喷涂 \xb7 刷涂 \xb7 辊涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂和辊涂 10 % \xb7 无气喷涂 10 % \xb7 喷涂 15 %
清洗剂：HN 配套丙烯酸稀释剂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
solvent-borne sealing primer \xd71 遍（0.10 L/m\xb2）
HN-AR-806 \xd72 遍（0.22 L/m\xb2 flat / 0.30 L/m\xb2 relief）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn ngoại thất gốc acrylic: giữ m\xe0u v\xe0 thi c\xf4ng tốt; bảo vệ trang tr\xed tường v\xe0 b\xea t\xf4ng trong/ngo\xe0i trời, l\xe0m lớp phủ cuối cho hệ relief. B\xe1m d\xednh tốt, chịu nước, chịu thời tiết; kh\xe1ng h\xf3a chất nhẹ, mưa axit, nấm mốc; thi c\xf4ng được tới −10 \xb0C.

【Phạm vi ứng dụng】
Tường b\xea t\xf4ng trong/ngo\xe0i trời; lớp phủ cuối cho hệ浮雕.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Acrylic
M\xe0u sắc：Nhiều m\xe0u
Bề mặt：Mờ
Điểm bắt lửa：38 \xb0C
Khối lượng ri\xeang：1.4 kg/L
H\xe0m lượng rắn theo thể t\xedch：50 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 50 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h / 24 h hard (25 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：4 h – kh\xf4ng giới hạn
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 lăn \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ v\xe0 lăn 10 % \xb7 airless 10 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i acrylic HN

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
solvent-borne sealing primer \xd71 lớp（0.10 L/m\xb2）
HN-AR-806 \xd72 lớp（0.22 L/m\xb2 flat / 0.30 L/m\xb2 relief）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Pintura exterior base solvente de base acr\xedlica con buena retenci\xf3n de color y buenas propiedades de aplicaci\xf3n; protege y decora muros interiores / exteriores y concreto, y remata sistemas texturizados (en relieve). Buena adherencia y resistencia al agua, soporta bien la intemperie, resiste productos qu\xedmicos suaves, lluvia \xe1cida y moho; aplicable hasta unos −10 \xb0C.

【Aplicaciones t\xedpicas】
Muros de concreto interiores / exteriores; acabado para sistemas texturizados en relieve.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Acr\xedlico
Color：Amplia gama de colores
Acabado：Mate
Punto de inflamaci\xf3n：38 \xb0C
Densidad：1.4 kg/L
S\xf3lidos en volumen：50 %
Rendimiento te\xf3rico：10 m\xb2/L @ 50 μm DFT
Secado (seco al tacto / curado completo)：1 h / 24 h seco duro (25 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：4 h – sin l\xedmite
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 rodillo \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha y rodillo 10 % \xb7 airless 10 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN acr\xedlico correspondiente

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
solvent-borne sealing primer \xd71 capa(s)（0.10 L/m\xb2）
HN-AR-806 \xd72 capa(s)（0.22 L/m\xb2 flat / 0.30 L/m\xb2 relief）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء خارجي أساسه أكريليك محمّل بالمذيبات بثبات جيد للون وخصائص تطبيق جيدة؛ يحمي الجدران الداخلية/الخارجية والخرسانة ويزيّنها، ويُنهي أنظمة الملمس (البارزة). التصاق ومقاومة ماء جيدان، ويتحمل الطقس جيداً، ويقاوم الكيماويات المعتدلة والأمطار الحمضية والعفن؛ وقابل للتطبيق حتى نحو −10 \xb0C.

【التطبيقات النموذجية】
جدران خرسانية داخلية/خارجية؛ وطبقة نهائية لأنظمة الملمس البارزة.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：أكريليك
اللون：مدى ألوان واسع
التشطيب：مطفي
نقطة الوميض：38 \xb0C
الكثافة：1.4 kg/L
المواد الصلبة بالحجم：50 %
معدل الانتشار النظري：10 m\xb2/L @ 50 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h / 24 ساعة حتى الجفاف الصلب (25 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：4 h – بلا حد
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 رولر (بكرة دهان) \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة ورولر 10 % \xb7 رش هوائي (airless) 10 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للأكريليك

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
solvent-borne sealing primer \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-AR-806 \xd72 طبقة/طبقات（0.22 L/m\xb2 flat / 0.30 L/m\xb2 relief）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-AR-807",desc:{en:"Two-pack epoxy primer that grips tile & glass — refinish without hacking off",zh:"双组份强附着环氧底漆，直接涂瓷砖玻璃，免铲除翻新",vi:"Sơn lót epoxy 2 thành phần bám gạch & kính — cải tạo không cần đục",es:"Imprimación epoxi de dos componentes que se aferra a azulejos y vidrio — renueve sin demoler",ar:"برايمر (طبقة أولى) إيبوكسي ثنائي العبوة يقبض على البلاط والزجاج — إعادة تأهيل دون كسر"},details:{en:`【Overview】
Two-pack epoxy primer with tenacious adhesion, formulated for glossy surfaces such as tile and glass: refinishing old tiled walls without heavy putty or hacking — reducing building load and simplifying renovation. Excellent chemical resistance.

【Typical applications】
Direct adhesion primer on tile, glass and other hard-to-adhere surfaces for renovation systems.

【Physical & application data】
Binder / resin：Epoxy
Colour：White, grey and other colours
Mix ratio (base : hardener)：3 : 1 (by volume) = 5 : 1 (by weight)
Pot life：5 h (20 \xb0C)
Flash point：26 \xb0C
Density：1.4 kg/L
Volume solids：48 %
Theoretical spreading rate：≈ 5 m\xb2/L @ 48 μm DFT
Drying (touch-dry / full cure)：4 h / 7 d (25 \xb0C, 70 % RH)
Recoating interval (min / max)：6 h – no limit
Finish：Flat
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Thinner (max, by method)：brush & roller 5–10 % \xb7 airless 5 % \xb7 spray 15 %
Cleaner：Matched HN epoxy thinner

【Surface preparation】
Remove dust and grease; cut back loose or hollow tiles and level with putty; surface must be dry and sound before coating.

【Recommended system (HN codes)】
HN-AR-807 \xd71 coat(s)（0.20 L/m\xb2）
HN-AC-405 PU finish \xd72 coat(s)（per spec）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
双组份具有强附着力的环氧底漆，专用涂于瓷砖、玻璃等光滑表面：旧墙翻新不必铲除瓷砖、不必刮涂厚腻子，减少建筑物负重，使翻新施工简单化、经济化。耐化学品性能优异。

【适用范围】
直接涂装于瓷砖、玻璃等难附着表面的翻新体系专用底漆。

【物理与应用参数】
漆基：环氧树脂
颜色：白色、灰色等多种颜色
混合比例（漆基：固化剂）：3 : 1 （体积比） = 5 : 1 （重量比）
混合使用期：5 h (20 \xb0C)
闪点：26 \xb0C
比重：1.4 kg/L
体积固体含量：48 %
理论涂布率：≈ 5 m\xb2/L @ 48 μm DFT
干燥时间（表干 / 完全固化）：4 h / 7 d (25 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：6 h – 不限
漆面：平光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
稀释剂（最大用量）：刷涂和辊涂 5–10 % \xb7 无气喷涂 5 % \xb7 喷涂 15 %
清洗剂：HN 配套环氧稀释剂

【表面处理】
清除表面灰尘、油污等杂物；松动起翘的瓷片应清除并用腻子补平；涂装前表面应干燥、坚实。

【建议油漆配套（HN 型号）】
HN-AR-807 \xd71 遍（0.20 L/m\xb2）
HN-AC-405 PU finish \xd72 遍（per spec）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn l\xf3t epoxy 2 th\xe0nh phần b\xe1m d\xednh cực mạnh, chuy\xean cho bề mặt b\xf3ng như gạch v\xe0 k\xednh: cải tạo tường gạch cũ kh\xf4ng cần đục bỏ hay tr\xe9t d\xe0y — giảm tải c\xf4ng tr\xecnh, đơn giản h\xf3a v\xe0 kinh tế h\xf3a cải tạo. Chịu h\xf3a chất xuất sắc.

【Phạm vi ứng dụng】
Sơn l\xf3t b\xe1m trực tiếp tr\xean gạch, k\xednh v\xe0 bề mặt kh\xf3 b\xe1m cho hệ cải tạo.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy
M\xe0u sắc：Trắng, x\xe1m v\xe0 m\xe0u kh\xe1c
Tỷ lệ pha (đế : chất đ\xf3ng rắn)：3 : 1 (theo thể t\xedch) = 5 : 1 (theo khối lượng)
Thời gian sử dụng hỗn hợp：5 h (20 \xb0C)
Điểm bắt lửa：26 \xb0C
Khối lượng ri\xeang：1.4 kg/L
H\xe0m lượng rắn theo thể t\xedch：48 %
Suất sơn l\xfd thuyết：≈ 5 m\xb2/L @ 48 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：4 h / 7 d (25 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：6 h – kh\xf4ng giới hạn
Bề mặt：Phẳng
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung m\xf4i pha (tối đa)：cọ v\xe0 lăn 5–10 % \xb7 airless 5 % \xb7 phun 15 %
Dung dịch vệ sinh：Dung m\xf4i epoxy HN

【Xử l\xfd bề mặt】
Loại bỏ bụi v\xe0 dầu mỡ; th\xe1o gỡ gạch bị bong/l\xf5m v\xe0 tr\xe9t v\xe1 phẳng; bề mặt phải kh\xf4 v\xe0 chắc trước khi sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
HN-AR-807 \xd71 lớp（0.20 L/m\xb2）
HN-AC-405 PU finish \xd72 lớp（per spec）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Imprimaci\xf3n epoxi de dos componentes con adherencia tenaz, formulada para superficies brillantes como azulejos y vidrio: renueva muros azulejados antiguos sin masilla de gran espesor ni demolici\xf3n — reduce la carga del edificio y simplifica la renovaci\xf3n. Excelente resistencia qu\xedmica.

【Aplicaciones t\xedpicas】
Imprimaci\xf3n de adherencia directa sobre azulejos, vidrio y otras superficies de dif\xedcil adherencia para sistemas de renovaci\xf3n.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi
Color：Blanco, gris y otros colores
Relaci\xf3n de mezcla (base : endurecedor)：3 : 1 (en volumen) = 5 : 1 (en peso)
Vida \xfatil de la mezcla：5 h (20 \xb0C)
Punto de inflamaci\xf3n：26 \xb0C
Densidad：1.4 kg/L
S\xf3lidos en volumen：48 %
Rendimiento te\xf3rico：≈ 5 m\xb2/L @ 48 μm DFT
Secado (seco al tacto / curado completo)：4 h / 7 d (25 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：6 h – sin l\xedmite
Acabado：Mate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Diluyente (m\xe1x., seg\xfan m\xe9todo)：brocha y rodillo 5–10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 15 %
Limpiador：Diluyente HN epoxi correspondiente

【Preparaci\xf3n de la superficie】
Eliminar el polvo y la grasa; recortar los azulejos sueltos o huecos y nivelar con masilla; la superficie debe estar seca y firme antes de aplicar el recubrimiento.

【Sistema recomendado (c\xf3digos HN)】
HN-AR-807 \xd71 capa(s)（0.20 L/m\xb2）
HN-AC-405 PU finish \xd72 capa(s)（per spec）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
برايمر (طبقة أولى) إيبوكسي ثنائي العبوة التصاقه شديد، مصمَّم للأسطح اللامعة مثل البلاط والزجاج: إعادة تأهيل الجدران المبلطة القديمة دون معجون ثقيل أو كسر — يقلل حمل المبنى ويبسّط أعمال التجديد. مقاومة كيميائية ممتازة.

【التطبيقات النموذجية】
برايمر التصاق مباشر على البلاط والزجاج وغيرها من الأسطح عسرة الالتصاق لأنظمة إعادة التأهيل.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي
اللون：أبيض ورمادي وألوان أخرى
نسبة الخلط (الأساس : مادة التصلب)：3 : 1 (بالحجم) = 5 : 1 (بالوزن)
العمر الاستخدامي للخليط：5 h (20 \xb0C)
نقطة الوميض：26 \xb0C
الكثافة：1.4 kg/L
المواد الصلبة بالحجم：48 %
معدل الانتشار النظري：≈ 5 m\xb2/L @ 48 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：4 h / 7 d (25 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：6 h – بلا حد
التشطيب：مطفي تماماً
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：فرشاة ورولر 5–10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 15 %
مادة التنظيف：مادة التخفيف (الثنر) المطابقة من HN للإيبوكسي

【تحضير السطح】
أزل الغبار والشحوم؛ واقتطع البلاط المفكك أو المجوّف وسوِّه بالمعجون؛ ويجب أن يكون السطح جافاً وسليماً قبل الطلاء.

【النظام الموصى به (أكواد HN)】
HN-AR-807 \xd71 طبقة/طبقات（0.20 L/m\xb2）
HN-AC-405 PU finish \xd72 طبقة/طبقات（per spec）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}}],image:"/images/product-architectural.jpg",applications:[{en:"Residential & commercial interiors",zh:"住宅与商业室内",vi:"Nội thất nhà ở & thương mại",es:"Interiores residenciales y comerciales",ar:"الفراغات الداخلية السكنية والتجارية"},{en:"Exterior render & concrete walls",zh:"外墙砂浆与混凝土墙面",vi:"Tường vữa & bê tông ngoài",es:"Revoques exteriores y muros de concreto",ar:"اللياسة الخارجية والجدران الخرسانية"},{en:"Kids' rooms & health-sensitive spaces",zh:"儿童房与健康敏感空间",vi:"Phòng trẻ & không gian nhạy cảm",es:"Cuartos infantiles y espacios sensibles a la salud",ar:"غرف الأطفال والفراغات الحساسة صحياً"},{en:"Tile-facade renovation",zh:"瓷砖外立面翻新",vi:"Cải tạo mặt gạch",es:"Renovación de fachadas azulejadas",ar:"تجديد الواجهات المبلطة"}]},{code:"CAT-06",title:{en:"Custom Engineered Coatings",zh:"定制工程涂料",vi:"Sơn kỹ thuật theo yêu cầu",es:"Recubrimientos de ingeniería a medida",ar:"طلاءات هندسية مخصصة"},short:{en:"Performance tuning · Colour · OEM · Marine",zh:"性能调校·调色·OEM·船舶",vi:"Hiệu suất · màu · OEM · hàng hải",es:"Ajuste de desempeño · Color · OEM · Marino",ar:"ضبط الأداء · اللون · OEM · البحرية"},description:{en:"Custom-engineered coating services: performance tuning, RAL/Pantone colour matching, compliance documentation and OEM / private-label supply — plus marine and waterborne specialty lines.",zh:"定制工程涂料服务：性能调校、RAL/Pantone 调色、合规文件与 OEM/贴牌供应，另有船舶及水性特种产品线。",vi:"Dịch vụ sơn kỹ thuật theo yêu cầu: điều chỉnh hiệu suất, pha màu RAL/Pantone, hồ sơ tuân thủ và cung ứng OEM/nhãn riêng — cùng dải hàng hải và đặc chủng gốc nước.",es:"Servicios de recubrimientos de ingeniería a medida: ajuste de rendimiento, igualación de color RAL/Pantone, documentación de conformidad y suministro OEM / marca propia — además de líneas especiales marinas y base agua.",ar:"خدمات طلاءات هندسية مخصصة: ضبط الأداء، مطابقة ألوان RAL/Pantone، وثائق الامتثال، والتوريد بعلامة OEM / خاصة — إضافة إلى خطوط خاصة للطلاءات البحرية والأساس المائي."},features:[{en:"Performance tuning to your specification",zh:"按规格进行性能调校",vi:"Điều chỉnh hiệu suất theo thông số",es:"Ajuste de desempeño según su especificación",ar:"ضبط الأداء وفق مواصفتك"},{en:"RAL / Pantone colour matching with samples",zh:"RAL/Pantone 调色并出样",vi:"Pha màu RAL / Pantone kèm mẫu",es:"Igualación de color RAL / Pantone con muestras",ar:"مطابقة ألوان RAL / Pantone مع عينات"},{en:"OEM / private label with multilingual TDS/MSDS",zh:"OEM/贴牌，多语言 TDS/MSDS",vi:"OEM / nhãn riêng, TDS/MSDS đa ngữ",es:"OEM / marca privada con TDS/MSDS en varios idiomas",ar:"OEM / علامة خاصة مع TDS/MSDS متعددة اللغات"},{en:"Marine lines — certificates on request",zh:"船舶漆系列，证书备索",vi:"Dải hàng hải — chứng nhận theo yêu cầu",es:"Líneas marinas — certificados a pedido",ar:"الخطوط البحرية — الشهادات عند الطلب"}],specs:[{label:{en:"Sample lead",zh:"样品周期",vi:"Mẫu",es:"Plazo de muestra",ar:"مدة إعداد العينة"},value:"7 – 15 days"},{label:{en:"MOQ",zh:"起订量",vi:"MOQ",es:"MOQ",ar:"الحد الأدنى لكمية الطلب (MOQ)"},value:"200 kg"},{label:{en:"Colour ref.",zh:"色号",vi:"Mã màu",es:"Ref. de color",ar:"مرجع اللون"},value:"RAL / Pantone"},{label:{en:"Docs",zh:"文件",vi:"Hồ sơ",es:"Documentos",ar:"المستندات"},value:"per market"}],categorySpecs:[{label:{en:"Sample",zh:"出样",vi:"Mẫu",es:"Muestra",ar:"عينة"},value:"7–15 d"},{label:{en:"MOQ",zh:"起订量",vi:"MOQ",es:"MOQ",ar:"الحد الأدنى لكمية الطلب (MOQ)"},value:"200 kg"},{label:{en:"Colour",zh:"颜色",vi:"Màu",es:"Color",ar:"اللون"},value:"RAL·Pantone"},{label:{en:"OEM",zh:"贴牌",vi:"OEM",es:"OEM",ar:"OEM"},value:"yes"}],models:[{model:"HN-CUSTOM-01",desc:{en:"Hardness, flexibility, corrosion class, temperature rating, chemical resistance",zh:"硬度、柔韧性、防腐等级、耐温等级、耐化学品",vi:"Độ cứng, độ dẻo, cấp ăn mòn, cấp nhiệt, chịu hóa chất",es:"Dureza, flexibilidad, clase de corrosión, grado de temperatura, resistencia química",ar:"الصلادة والمرونة وفئة التآكل والتصنيف الحراري ومقاومة الكيماويات"},details:{en:`【Overview】
Performance-matched formulations: hardness, flexibility, corrosivity class, temperature rating and chemical resistance tuned to your specification.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
按规格调校性能：硬度、柔韧性、防腐等级、耐温等级及耐化学品性能。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Phối chế theo th\xf4ng số: độ cứng, độ dẻo, cấp ăn m\xf2n, cấp nhiệt v\xe0 khả năng chịu h\xf3a chất theo y\xeau cầu.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Formulaciones ajustadas al desempe\xf1o: dureza, flexibilidad, clase de corrosividad, grado de temperatura y resistencia qu\xedmica calibrados seg\xfan su especificaci\xf3n.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
تركيبات مضبوطة الأداء: الصلادة والمرونة وفئة التآكل والتصنيف الحراري ومقاومة الكيماويات تُضبط وفق مواصفتك.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-CUSTOM-02",desc:{en:"RAL, Pantone, custom samples, metallic & pearlescent effects",zh:"RAL、Pantone、定制样品、金属与珠光效果",vi:"RAL, Pantone, mẫu riêng, hiệu ứng kim loại & ngọc trai",es:"RAL, Pantone, muestras a medida, efectos metálicos y perlados",ar:"RAL وPantone وعينات مخصصة وتأثيرات معدنية ولؤلؤية"},details:{en:`【Overview】
Colour matching to RAL / Pantone references with custom samples, metallic and pearlescent effects.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
按 RAL/Pantone 调色，提供定制样品、金属与珠光效果。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Pha m\xe0u theo RAL / Pantone k\xe8m mẫu ri\xeang, hiệu ứng kim loại v\xe0 ngọc trai.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Igualaci\xf3n de color seg\xfan referencias RAL / Pantone con muestras a medida y efectos met\xe1licos y perlados.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
مطابقة الألوان لمراجع RAL / Pantone مع عينات مخصصة وتأثيرات معدنية ولؤلؤية.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-CUSTOM-03",desc:{en:"REACH / RoHS-aligned documentation; destination-market scope confirmed per project",zh:"REACH/RoHS 对齐文件；目的市场范围按项目确认",vi:"Hồ sơ theo REACH / RoHS; phạm vi thị trường xác nhận theo dự án",es:"Documentación alineada con REACH / RoHS; alcance del mercado de destino confirmado por proyecto",ar:"مستندات متوافقة مع REACH / RoHS؛ ويُؤكَّد نطاق سوق الوجهة لكل مشروع"},details:{en:`【Overview】
Compliance documentation support for destination markets — REACH / RoHS-aligned product lines; specific scopes (food contact, drinking water, marine certificates) are confirmed per project and available on request.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
面向目的市场的合规文件支持——产品线对齐 REACH/RoHS；特定范围（食品接触、饮用水、船舶证书）按项目确认、备索。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Hỗ trợ hồ sơ tu\xe2n thủ cho thị trường nhập — d\xf2ng sản phẩm theo REACH / RoHS; phạm vi cụ thể (tiếp x\xfac thực phẩm, nước uống, chứng nhận h\xe0ng hải) x\xe1c nhận theo dự \xe1n.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Apoyo en documentaci\xf3n de cumplimiento para los mercados de destino — l\xedneas de producto alineadas con REACH / RoHS; los alcances espec\xedficos (contacto con alimentos, agua potable, certificados marinos) se confirman por proyecto y est\xe1n disponibles a pedido.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
دعم مستندات الامتثال للأسواق المقصودة — خطوط منتجات متوافقة مع REACH / RoHS؛ والنطاقات الخاصة (التلامس الغذائي ومياه الشرب وشهادات البحرية) تُؤكَّد لكل مشروع وتُتاح عند الطلب.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-CUSTOM-04",desc:{en:"Custom drum labels, branded packaging, multilingual TDS/MSDS",zh:"定制桶身标签、品牌包装、多语言 TDS/MSDS",vi:"Nhãn thùng riêng, bao bì thương hiệu, TDS/MSDS đa ngữ",es:"Etiquetas de bidón a medida, embalaje con marca, TDS/MSDS en varios idiomas",ar:"ملصقات براميل مخصصة وتغليف بعلامة تجارية وTDS/MSDS متعددة اللغات"},details:{en:`【Overview】
OEM / private-label service: custom drum labels, branded packaging, multilingual TDS / MSDS and co-branded collateral.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
OEM/贴牌服务：定制桶身标签、品牌包装、多语言 TDS/MSDS 及联合品牌物料。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Dịch vụ OEM / nh\xe3n ri\xeang: nh\xe3n th\xf9ng theo y\xeau cầu, bao b\xec thương hiệu, TDS / MSDS đa ngữ v\xe0 t\xe0i liệu đồng thương hiệu.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Servicio OEM / marca privada: etiquetas de bid\xf3n a medida, embalaje con marca, TDS / MSDS en varios idiomas y material promocional de marca conjunta.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
خدمة OEM / العلامة الخاصة: ملصقات براميل مخصصة وتغليف بعلامة تجارية وTDS / MSDS متعددة اللغات ومواد تسويقية بعلامة مشتركة.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-CUSTOM-08",desc:{en:"Hull, boot-top, cargo hold and tank lines — certificates available on request",zh:"船底、水线、货舱与液舱系列，证书备索",vi:"Dãy sơn thân tàu, đường nước, hầm hàng và khoang chứa — chứng nhận theo yêu cầu",es:"Líneas para casco, franja de flotación, bodega y tanques — certificados disponibles a pedido",ar:"خطوط هيكل السفينة وشريط خط الماء وعنابر الشحن والخزانات — الشهادات عند الطلب"},details:{en:`【Overview】
Marine coating lines for hulls, boot-tops, cargo holds and tanks are supplied with full data sheets; applicable certificates for the specific system are available on request.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
供应船底、水线间、货舱及液舱等船舶涂料系列，附完整数据表；适用体系的相关证书备索。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Cung ứng dải sơn h\xe0ng hải cho th\xe2n t\xe0u, đường nước, hầm h\xe0ng v\xe0 khoang chứa k\xe8m bảng số liệu đầy đủ; chứng nhận \xe1p dụng cho hệ cụ thể c\xf3 theo y\xeau cầu.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Las l\xedneas de recubrimientos marinos para cascos, franjas de flotaci\xf3n, bodegas y tanques se suministran con fichas de datos completas; los certificados aplicables al sistema espec\xedfico est\xe1n disponibles a pedido.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
تُورَّد خطوط الطلاء البحري للهياكل وأشرطة خط الماء وعنابر الشحن والخزانات بأوراق بيانات كاملة؛ وشهادات النظام المناسب متاحة عند الطلب.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-CUSTOM-11",desc:{en:"Single-pack waterborne acrylic finish — easy repair, no recoat limit",zh:"单组份水性丙烯酸面漆，易修补，无重涂时间限制",vi:"Sơn phủ acrylic gốc nước 1 thành phần — dễ sửa, không giới hạn sơn lại",es:"Acabado acrílico base agua monocomponente — fácil reparación, sin límite de repintado",ar:"طلاء نهائي أكريليك أساس مائي أحادي العبوة — سهل الإصلاح وبلا حد لإعادة الطلاء"},details:{en:`【Overview】
Single-pack premium waterborne acrylic finish with good colour retention; the film resists abrasion, impact, brine, mineral oils and many chemicals; easy to repair with no recoating-time limit.

【Typical applications】
Finish on steel and concrete in medium-to-severe environments; decorative protection of equipment and machinery.

【Physical & application data】
Binder / resin：Waterborne acrylic
Colour：White, silver and other colours
Density：1.1 kg/L
Flash point：38 \xb0C
Volume solids：35 %
Theoretical spreading rate：10 m\xb2/L @ 35 μm DFT
Drying (touch-dry / full cure)：1 h / 24 h hard
Recoating interval (min / max)：4 h – no limit
Thinner (max, by method)：Water: brush 10 % \xb7 airless 5 % \xb7 spray 20 %
Cleaner：Water
Application methods：Airless spray \xb7 brush \xb7 conventional spray

【Surface preparation】
Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.

【Recommended system (HN codes)】
waterborne anti-rust primer (HN supply) \xd71 coat(s)（0.10 L/m\xb2）
HN-CUSTOM-11 \xd72 coat(s)（0.20 L/m\xb2）

【Safety】
Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
单组份高级水性丙烯酸基面漆，保色性良好；漆膜耐磨损、抗碰撞、耐盐水、矿物油及多种化学品；易修补，无重涂时间限制。

【适用范围】
中等至严重腐蚀环境钢构与混凝土的面漆；设备机械的装饰保护。

【物理与应用参数】
漆基：水性丙烯酸
颜色：白色、银色及其他颜色
比重：1.1 kg/L
闪点：38 \xb0C
体积固体含量：35 %
理论涂布率：10 m\xb2/L @ 35 μm DFT
干燥时间（表干 / 完全固化）：1 h / 24 h 硬干
重涂间隔（最小 / 最大）：4 h – 不限
稀释剂（最大用量）：水: 刷涂 10 % \xb7 无气喷涂 5 % \xb7 喷涂 20 %
清洗剂：水
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂

【表面处理】
施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。

【建议油漆配套（HN 型号）】
waterborne anti-rust primer (HN supply) \xd71 遍（0.10 L/m\xb2）
HN-CUSTOM-11 \xd72 遍（0.20 L/m\xb2）

【安全守则】
水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn phủ acrylic gốc nước cao cấp 1 th\xe0nh phần giữ m\xe0u tốt; m\xe0ng sơn chịu m\xe0i m\xf2n, va đập, nước muối, dầu kho\xe1ng v\xe0 nhiều h\xf3a chất; dễ sửa, kh\xf4ng giới hạn sơn lại.

【Phạm vi ứng dụng】
Lớp phủ tr\xean th\xe9p v\xe0 b\xea t\xf4ng m\xf4i trường trung b\xecnh đến nghi\xeam trọng; trang tr\xed bảo vệ thiết bị m\xe1y m\xf3c.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Acrylic gốc nước
M\xe0u sắc：Trắng, bạc v\xe0 m\xe0u kh\xe1c
Khối lượng ri\xeang：1.1 kg/L
Điểm bắt lửa：38 \xb0C
H\xe0m lượng rắn theo thể t\xedch：35 %
Suất sơn l\xfd thuyết：10 m\xb2/L @ 35 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h / 24 h hard
Khoảng thời gian sơn lại (tối thiểu / tối đa)：4 h – kh\xf4ng giới hạn
Dung m\xf4i pha (tối đa)：Nước: cọ 10 % \xb7 airless 5 % \xb7 phun 20 %
Dung dịch vệ sinh：Nước
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4, kh\xf4ng nhiễm bẩn; sơn l\xean lớp l\xf3t/lớp giữa ph\xf9 hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt \xe1p lực cao v\xe0 để kh\xf4 trước khi sơn lại.

【Hệ thống khuyến nghị (m\xe3 HN)】
waterborne anti-rust primer (HN supply) \xd71 lớp（0.10 L/m\xb2）
HN-CUSTOM-11 \xd72 lớp（0.20 L/m\xb2）

【An to\xe0n】
Sản phẩm gốc nước: đậy k\xedn hộp v\xe0 để xa tầm tay trẻ em. Th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sơn kh\xf4; đeo khẩu trang khi m\xe0i. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng lại v\xe0o hộp gốc. Bảo quản nơi kh\xf4 m\xe1t, tr\xe1nh đ\xf3ng băng.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Acabado acr\xedlico base agua monocomponente premium con buena retenci\xf3n de color; la pel\xedcula resiste la abrasi\xf3n, el impacto, la salmuera, los aceites minerales y numerosos productos qu\xedmicos; de f\xe1cil reparaci\xf3n y sin l\xedmite de tiempo para el repintado.

【Aplicaciones t\xedpicas】
Acabado sobre acero y concreto en ambientes de media a alta severidad; protecci\xf3n decorativa de equipos y maquinaria.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Acr\xedlico base agua
Color：Blanco, plata y otros colores
Densidad：1.1 kg/L
Punto de inflamaci\xf3n：38 \xb0C
S\xf3lidos en volumen：35 %
Rendimiento te\xf3rico：10 m\xb2/L @ 35 μm DFT
Secado (seco al tacto / curado completo)：1 h / 24 h seco duro
Intervalo de repintado (m\xedn / m\xe1x)：4 h – sin l\xedmite
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Agua: brocha 10 % \xb7 airless 5 % \xb7 pulverizaci\xf3n 20 %
Limpiador：Agua
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia, seca y libre de contaminantes; aplicar sobre una imprimaci\xf3n / capa intermedia adecuada. Superficies previamente contaminadas: lavar con agua dulce a alta presi\xf3n y dejar secar antes de repintar.

【Sistema recomendado (c\xf3digos HN)】
waterborne anti-rust primer (HN supply) \xd71 capa(s)（0.10 L/m\xb2）
HN-CUSTOM-11 \xd72 capa(s)（0.20 L/m\xb2）

【Seguridad】
Producto base agua: mantener los envases bien cerrados y fuera del alcance de los ni\xf1os. Garantizar buena ventilaci\xf3n durante el uso y el secado; usar mascarilla para polvo al lijar. No verter la pintura diluida de vuelta al envase original. Almacenar en un lugar fresco y seco, proteger de las heladas.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء نهائي أكريليك أساس مائي فاخر أحادي العبوة بثبات جيد للون؛ يقاوم الغشاء البري والصدمات والمياه المالحة والزيوت المعدنية وكثيراً من الكيماويات؛ سهل الإصلاح دون حد زمني لإعادة الطلاء.

【التطبيقات النموذجية】
طبقة نهائية على الفولاذ والخرسانة في البيئات المتوسطة إلى الشديدة؛ وحماية زخرفية للمعدات والآلات.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：أكريليك أساس مائي
اللون：أبيض وفضي وألوان أخرى
الكثافة：1.1 kg/L
نقطة الوميض：38 \xb0C
المواد الصلبة بالحجم：35 %
معدل الانتشار النظري：10 m\xb2/L @ 35 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h / 24 ساعة حتى الجفاف الصلب
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：4 h – بلا حد
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：ماء: فرشاة 10 % \xb7 رش هوائي (airless) 5 % \xb7 رش 20 %
مادة التنظيف：ماء
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي

【تحضير السطح】
يجب أن يكون السطح نظيفاً وجافاً وخالياً من الملوثات؛ ويُطبَّق فوق برايمر / طبقة وسطى مناسبة. الأسطح الملوثة سابقاً: تُغسل بماء عذب عالي الضغط وتُترك لتجف قبل إعادة الطلاء.

【النظام الموصى به (أكواد HN)】
waterborne anti-rust primer (HN supply) \xd71 طبقة/طبقات（0.10 L/m\xb2）
HN-CUSTOM-11 \xd72 طبقة/طبقات（0.20 L/m\xb2）

【السلامة】
منتج أساس مائي: تُغلق العبوات بإحكام وتُبقى بعيداً عن متناول الأطفال. تأكد من التهوية الجيدة أثناء الاستخدام والجفاف؛ وارتدِ كمامة غبار عند الصنفرة. لا تُعاد الطلاء المخفف إلى العبوة الأصلية. يُحفظ في مكان بارد جاف، ويُحمى من الصقيع.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-CUSTOM-12",desc:{en:"Waterborne polyurethane topcoat — full data sheet on request",zh:"水性聚氨酯面漆，完整 TDS 备索",vi:"Sơn phủ PU gốc nước — TDS đầy đủ theo yêu cầu",es:"Acabado de poliuretano base agua — ficha de datos completa a pedido",ar:"طبقة نهائية بولي يوريثان أساس مائي — ورقة بيانات كاملة عند الطلب"},details:{en:`【Overview】
Waterborne polyurethane topcoat line for low-odour industrial and equipment duty; request the full TDS for the applicable grade.

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
低气味工业与设备用途的水性聚氨酯面漆系列；请索取适用等级的完整 TDS。

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Dải sơn phủ polyurethane gốc nước cho c\xf4ng nghiệp v\xe0 thiết bị \xedt m\xf9i; vui l\xf2ng y\xeau cầu TDS đầy đủ cho cấp ph\xf9 hợp.

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
L\xednea de acabados de poliuretano base agua para uso industrial y de equipos con baja emisi\xf3n de olores; solicite la TDS completa del grado aplicable.

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
خط طلاءات نهائية بولي يوريثان أساس مائي للاستخدامات الصناعية والمعداتية منخفضة الرائحة؛ اطلب ورقة TDS الكاملة للدرجة المناسبة.

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-CUSTOM-13",desc:{en:"Eco-friendly waterborne epoxy for metal anti-corrosion — above waterline & interiors",zh:"环保水性环氧金属防腐，水线以上及舱内结构适用",vi:"Epoxy gốc nước thân thiện môi trường chống ăn mòn kim loại — trên đường nước và kết cấu trong",es:"Epoxi base agua ecológico para anticorrosión de metales — sobre la línea de flotación e interiores",ar:"إيبوكسي أساس مائي صديق للبيئة لمكافحة تآكل المعادن — فوق خط الماء والداخل"},details:{en:`【Overview】
Waterborne epoxy anti-corrosion coating from a special epoxy-emulsion polymer with functional fillers / additives: abrasion resistance plus flexibility, eco-friendly, durable, cost-effective; air-drying and easy to apply, also coatable on not-fully-dry concrete.

【Typical applications】
Metal heavy-anti-corrosion fields — bridges, oil pipelines, ships, lifting machinery, steel structures, transformers, rolling stock; above-waterline and interior structures of offshore platforms and vessels.

【Physical & application data】
Binder / resin：Waterborne epoxy
Colour：Wide colour range
Theoretical spreading rate：10 m\xb2/L @ 28 μm DFT
Drying (touch-dry / full cure)：1 h touch / 48 h hard (20 \xb0C, 70 % RH)
Recoating interval (min / max)：8 h – no limit
Thinner (max, by method)：Water
Cleaner：Water
Application methods：Brush \xb7 spray \xb7 airless spray

【Surface preparation】
Surface must be clean and free of grease and dirt. When used directly as an anti-rust primer, de-rust the steel first; as intermediate or topcoat, apply over a sound primed surface. Consult our technical desk for special substrates.

【Recommended system (HN codes)】
waterborne epoxy anti-rust primer \xd71 coat(s)（8 m\xb2/kg）
HN-CUSTOM-13 \xd72 coat(s)（4 m\xb2/kg）

【Safety】
Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
采用特种环氧高分子聚合物树脂乳液与功能型填料、助剂精制而成的水性防腐漆，集耐磨性与柔韧性于一体，环保耐用、性价比优越；自干、施工方便，亦可涂装于未干透的混凝土表面。

【适用范围】
金属重防腐领域：桥梁、石油管道、船舶、起重机械、钢结构、变压器、火车、汽车等防腐要求较高的零部件；海洋平台及船体设计水线以上部位与内部结构。

【物理与应用参数】
漆基：水性环氧
颜色：多种颜色
理论涂布率：10 m\xb2/L @ 28 μm DFT
干燥时间（表干 / 完全固化）：1 h touch / 48 h 硬干 (20 \xb0C, 70 % RH)
重涂间隔（最小 / 最大）：8 h – 不限
稀释剂（最大用量）：水
清洗剂：水
施工方法：Brush \xb7 喷涂 \xb7 无气喷涂 喷涂

【表面处理】
涂装表面必须清洁、无油脂及其他污垢。直接作为防锈底漆使用时须先对钢材除锈；作为中间漆或面漆须涂在完好的底漆表面上。特殊表面处理请向我方技术部门咨询。

【建议油漆配套（HN 型号）】
waterborne epoxy anti-rust primer \xd71 遍（8 m\xb2/kg）
HN-CUSTOM-13 \xd72 遍（4 m\xb2/kg）

【安全守则】
水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Sơn chống ăn m\xf2n epoxy gốc nước từ nhũ tương epoxy polymer đặc biệt với chất độn/phụ gia chức năng: chống m\xe0i m\xf2n k\xe8m độ dẻo, th\xe2n thiện m\xf4i trường, bền, kinh tế; kh\xf4 tự nhi\xean, thi c\xf4ng dễ, sơn được b\xea t\xf4ng chưa kh\xf4 ho\xe0n to\xe0n.

【Phạm vi ứng dụng】
Lĩnh vực chống ăn m\xf2n kim loại nặng: cầu, ống dầu, t\xe0u, m\xe1y n\xe2ng, kết cấu th\xe9p, m\xe1y biến \xe1p, toa xe; phần tr\xean đường nước v\xe0 kết cấu b\xean trong gi\xe0n khoan v\xe0 t\xe0u.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Epoxy gốc nước
M\xe0u sắc：Nhiều m\xe0u
Suất sơn l\xfd thuyết：10 m\xb2/L @ 28 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h touch / 48 h hard (20 \xb0C, 70 % RH)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：8 h – kh\xf4ng giới hạn
Dung m\xf4i pha (tối đa)：Nước
Dung dịch vệ sinh：Nước
Phương ph\xe1p thi c\xf4ng：Brush \xb7 phun \xb7 phun airless

【Xử l\xfd bề mặt】
Bề mặt phải sạch, kh\xf4ng dầu mỡ v\xe0 bẩn. D\xf9ng trực tiếp l\xe0m sơn l\xf3t chống gỉ phải xử l\xfd gỉ trước; l\xe0m sơn lớp giữa hoặc bề mặt phải sơn l\xean lớp l\xf3t tốt. Bề mặt đặc biệt vui l\xf2ng li\xean hệ bộ phận kỹ thuật.

【Hệ thống khuyến nghị (m\xe3 HN)】
waterborne epoxy anti-rust primer \xd71 lớp（8 m\xb2/kg）
HN-CUSTOM-13 \xd72 lớp（4 m\xb2/kg）

【An to\xe0n】
Sản phẩm gốc nước: đậy k\xedn hộp v\xe0 để xa tầm tay trẻ em. Th\xf4ng gi\xf3 tốt khi sử dụng v\xe0 sơn kh\xf4; đeo khẩu trang khi m\xe0i. Kh\xf4ng đổ sơn đ\xe3 pha lo\xe3ng lại v\xe0o hộp gốc. Bảo quản nơi kh\xf4 m\xe1t, tr\xe1nh đ\xf3ng băng.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Recubrimiento anticorrosivo epoxi base agua a partir de un pol\xedmero especial en emulsi\xf3n epoxi con cargas funcionales / aditivos: resistencia a la abrasi\xf3n m\xe1s flexibilidad; ecol\xf3gico, duradero y rentable; de secado al aire y f\xe1cil de aplicar, tambi\xe9n aplicable sobre concreto no completamente seco.

【Aplicaciones t\xedpicas】
Campos de anticorrosi\xf3n pesada de metales — puentes, oleoductos, buques, maquinaria de izaje, estructuras de acero, transformadores, material rodante; estructuras sobre la l\xednea de flotaci\xf3n e interiores de plataformas offshore y buques.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Epoxi base agua
Color：Amplia gama de colores
Rendimiento te\xf3rico：10 m\xb2/L @ 28 μm DFT
Secado (seco al tacto / curado completo)：1 h touch / 48 h seco duro (20 \xb0C, 70 % RH)
Intervalo de repintado (m\xedn / m\xe1x)：8 h – sin l\xedmite
Diluyente (m\xe1x., seg\xfan m\xe9todo)：Agua
Limpiador：Agua
M\xe9todos de aplicaci\xf3n：Brush \xb7 pulverizaci\xf3n \xb7 airless pulverizaci\xf3n

【Preparaci\xf3n de la superficie】
La superficie debe estar limpia y libre de grasa y suciedad. Cuando se use directamente como imprimaci\xf3n antioxidante, eliminar primero el \xf3xido del acero; como capa intermedia o acabado, aplicar sobre una superficie imprimada en buen estado. Para sustratos especiales, consulte a nuestro departamento t\xe9cnico.

【Sistema recomendado (c\xf3digos HN)】
waterborne epoxy anti-rust primer \xd71 capa(s)（8 m\xb2/kg）
HN-CUSTOM-13 \xd72 capa(s)（4 m\xb2/kg）

【Seguridad】
Producto base agua: mantener los envases bien cerrados y fuera del alcance de los ni\xf1os. Garantizar buena ventilaci\xf3n durante el uso y el secado; usar mascarilla para polvo al lijar. No verter la pintura diluida de vuelta al envase original. Almacenar en un lugar fresco y seco, proteger de las heladas.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
طلاء إيبوكسي أساس مائي مضاد للتآكل من بوليمر مستحلب إيبوكسي خاص مع حشوات/مضافات وظيفية: مقاومة البري مع المرونة، صديق للبيئة ومتين واقتصادي؛ يجف هوائياً وسهل التطبيق، ويُطلى أيضاً على الخرسانة غير الجافة تماماً.

【التطبيقات النموذجية】
مجالات الحماية الثقيلة من تآكل المعادن — الجسور وخطوط النفط والسفن ومعدات الرفع والهياكل الفولاذية والمحولات وعربات السكك الحديدية؛ والهياكل فوق خط الماء والداخلية للمنصات البحرية والسفن.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：إيبوكسي أساس مائي
اللون：مدى ألوان واسع
معدل الانتشار النظري：10 m\xb2/L @ 28 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h touch / 48 ساعة حتى الجفاف الصلب (20 \xb0C, 70 % RH)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：8 h – بلا حد
مادة التخفيف (الثنر) — الحد الأقصى بحسب الطريقة：ماء
مادة التنظيف：ماء
طرق التطبيق：Brush \xb7 رش \xb7 رش هوائي (airless) رش

【تحضير السطح】
يجب أن يكون السطح نظيفاً وخالياً من الشحوم والأوساخ. عند استخدامه مباشرة كبرايمر (طبقة أولى) مانع للصدأ، أزل الصدأ عن الفولاذ أولاً؛ وعند استخدامه كطبقة وسطى أو نهائية يُطبَّق فوق سطح مُبرايمَر سليم. للركائز الخاصة يُرجى استشارة قسمنا الفني.

【النظام الموصى به (أكواد HN)】
waterborne epoxy anti-rust primer \xd71 طبقة/طبقات（8 m\xb2/kg）
HN-CUSTOM-13 \xd72 طبقة/طبقات（4 m\xb2/kg）

【السلامة】
منتج أساس مائي: تُغلق العبوات بإحكام وتُبقى بعيداً عن متناول الأطفال. تأكد من التهوية الجيدة أثناء الاستخدام والجفاف؛ وارتدِ كمامة غبار عند الصنفرة. لا تُعاد الطلاء المخفف إلى العبوة الأصلية. يُحفظ في مكان بارد جاف، ويُحمى من الصقيع.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}},{model:"HN-CUSTOM-15",desc:{en:"Transparent weathering protection keeping the bare-concrete look",zh:"透明防护保持清水混凝土原貌",vi:"Bảo vệ trong giữ thẩm mỹ bê tông thô",es:"Protección transparente contra la intemperie que conserva el aspecto de concreto visto",ar:"حماية شفافة من الطقس تحافظ على مظهر الخرسانة المكشوفة"},details:{en:`【Overview】
Protection system for exposed (as-cast) concrete: prevents internal rusting and ageing of reinforcement and boosts anti-stain and sunlight resistance. Treated surfaces stay uniform in colour with excellent water repellency and scrub resistance while retaining the original concrete aesthetic.

【Typical applications】
Interior / exterior protection of buildings in concrete, as-cast concrete and cement products.

【Physical & application data】
Binder / resin：Fluorocarbon emulsion system
Colour：Transparent / transparent grey
Volume solids：49 %
Theoretical spreading rate：12 m\xb2/L @ 40 μm DFT
Drying (touch-dry / full cure)：1 h / 3 d (20 \xb0C)
Recoating interval (min / max)：1 h – 7 d
Finish：Matt
Application methods：Airless spray \xb7 brush \xb7 conventional spray
Cleaner：Matched HN cleaner

【Surface preparation】
Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.

【Recommended system (HN codes)】
exposed-concrete sealer (HN supply) \xd71 coat(s)（0.10–0.12 L/m\xb2）
colour-adjusting coat \xd72 coat(s)（0.20–0.25 L/m\xb2）
HN-CUSTOM-15 \xd72 coat(s)（0.15–0.20 L/m\xb2）

【Safety】
Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.

※ Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.`,zh:`【产品概述】
针对清水混凝土结构件的保护体系：防止混凝土内部锈蚀、老化，增强表面抗污、抗晒性能。涂装后表面色泽一致、拒水性能优秀、耐擦洗性能高，同时保持清水混凝土原有的建筑风格。

【适用范围】
混凝土、清水混凝土及水泥制品等碱性材料建筑物的内外墙保护。

【物理与应用参数】
漆基：氟碳乳液体系
颜色：透明 / 透明灰
体积固体含量：49 %
理论涂布率：12 m\xb2/L @ 40 μm DFT
干燥时间（表干 / 完全固化）：1 h / 3 d (20 \xb0C)
重涂间隔（最小 / 最大）：1 h – 7 d
漆面：哑光
施工方法：无气喷涂 \xb7 刷涂 \xb7 普通喷涂
清洗剂：HN 配套清洗剂

【表面处理】
混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。

【建议油漆配套（HN 型号）】
exposed-concrete sealer (HN supply) \xd71 遍（0.10–0.12 L/m\xb2）
colour-adjusting coat \xd72 遍（0.20–0.25 L/m\xb2）
HN-CUSTOM-15 \xd72 遍（0.15–0.20 L/m\xb2）

【安全守则】
易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。

※ 以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。`,vi:`【Tổng quan】
Hệ bảo vệ cho b\xea t\xf4ng thanh tao: ngăn gỉ v\xe0 l\xe3o h\xf3a b\xean trong, tăng kh\xe1ng bẩn v\xe0 chống nắng. Bề mặt sau xử l\xfd m\xe0u đồng nhất, chống nước tốt, ch\xf9i rửa bền, giữ nguy\xean thẩm mỹ b\xea t\xf4ng.

【Phạm vi ứng dụng】
Bảo vệ trong/ngo\xe0i trời cho c\xf4ng tr\xecnh b\xea t\xf4ng, b\xea t\xf4ng thanh tao v\xe0 sản phẩm xi măng.

【Th\xf4ng số vật l\xfd v\xe0 thi c\xf4ng】
Nhựa nền：Hệ nhũ tương fluorocarbon
M\xe0u sắc：Trong / x\xe1m trong
H\xe0m lượng rắn theo thể t\xedch：49 %
Suất sơn l\xfd thuyết：12 m\xb2/L @ 40 μm DFT
Thời gian kh\xf4 (chạm kh\xf4 / đ\xf3ng rắn ho\xe0n to\xe0n)：1 h / 3 d (20 \xb0C)
Khoảng thời gian sơn lại (tối thiểu / tối đa)：1 h – 7 d
Bề mặt：Mờ
Phương ph\xe1p thi c\xf4ng：Phun airless \xb7 cọ \xb7 phun thường
Dung dịch vệ sinh：Dung dịch vệ sinh HN

【Xử l\xfd bề mặt】
B\xea t\xf4ng phải đ\xf4ng rắn ho\xe0n to\xe0n v\xe0 kh\xf4 (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, ph\xe8n; tr\xe9t v\xe1 v\xe0 l\xe0m phẳng nơi cần. Tường b\xea t\xf4ng mới: dưỡng hộ ~30 ng\xe0y trước khi tr\xe9t v\xe0 sơn.

【Hệ thống khuyến nghị (m\xe3 HN)】
exposed-concrete sealer (HN supply) \xd71 lớp（0.10–0.12 L/m\xb2）
colour-adjusting coat \xd72 lớp（0.20–0.25 L/m\xb2）
HN-CUSTOM-15 \xd72 lớp（0.15–0.20 L/m\xb2）

【An to\xe0n】
Dễ ch\xe1y — tr\xe1nh nhiệt v\xe0 nguồn lửa; kh\xf4ng h\xfat thuốc trong khu vực thi c\xf4ng. Chỉ d\xf9ng nơi th\xf4ng gi\xf3 tốt; tr\xe1nh h\xedt hơi dung m\xf4i v\xe0 sương sơn; tr\xe1nh tiếp x\xfac da v\xe0 mắt. Bảo quản nơi kh\xf4 m\xe1t. Chỉ d\xf9ng chuy\xean nghiệp.

※ Th\xf4ng số lấy từ bảng dữ liệu kỹ thuật của nh\xe0 sản xuất; vui l\xf2ng đối chiếu TDS theo l\xf4 trước khi chọn hệ.`,es:`【Descripci\xf3n general】
Sistema de protecci\xf3n para concreto expuesto (visto, sin revestir): previene la oxidaci\xf3n interna y el envejecimiento del acero de refuerzo y refuerza la resistencia a las manchas y a la luz solar. Las superficies tratadas mantienen un color uniforme con excelente repelencia al agua y resistencia al lavado, conservando la est\xe9tica original del concreto.

【Aplicaciones t\xedpicas】
Protecci\xf3n interior / exterior de edificaciones de concreto, concreto visto y productos de cemento.

【Datos f\xedsicos y de aplicaci\xf3n】
Aglutinante / resina：Sistema de emulsi\xf3n fluorocarbonada
Color：Transparente / gris transparente
S\xf3lidos en volumen：49 %
Rendimiento te\xf3rico：12 m\xb2/L @ 40 μm DFT
Secado (seco al tacto / curado completo)：1 h / 3 d (20 \xb0C)
Intervalo de repintado (m\xedn / m\xe1x)：1 h – 7 d
Acabado：Mate
M\xe9todos de aplicaci\xf3n：Pulverizaci\xf3n airless \xb7 brocha \xb7 pulverizaci\xf3n convencional
Limpiador：Limpiador HN correspondiente

【Preparaci\xf3n de la superficie】
El concreto debe estar totalmente curado y seco (contenido de humedad < 10 %, pH < 10); eliminar lechada, polvo, grasa y eflorescencias; reparar y nivelar con masilla donde sea necesario. Muros de concreto nuevos: esperar ~30 d\xedas antes de aplicar masilla y pintura.

【Sistema recomendado (c\xf3digos HN)】
exposed-concrete sealer (HN supply) \xd71 capa(s)（0.10–0.12 L/m\xb2）
colour-adjusting coat \xd72 capa(s)（0.20–0.25 L/m\xb2）
HN-CUSTOM-15 \xd72 capa(s)（0.15–0.20 L/m\xb2）

【Seguridad】
Inflamable: mantener alejado del calor y de las fuentes de ignici\xf3n; no fumar en la zona de trabajo. Usar \xfanicamente con ventilaci\xf3n adecuada; evitar la inhalaci\xf3n de vapores y de la niebla de pulverizaci\xf3n; evitar el contacto con la piel y los ojos. Almacenar en un lugar fresco y seco. Solo para uso profesional.

※ Valores tomados de la ficha t\xe9cnica del fabricante; confirme la TDS del lote antes de especificar.`,ar:`【نظرة عامة】
نظام حماية للخرسانة المكشوفة (كما صُبّت): يمنع صدأ حديد التسليح داخلها وإقدمتها، ويعزز مقاومة البقع والشمس. تحافظ الأسطح المعالجة على تجانس لونها مع نفورية ماء ممتازة ومقاومة عالية للفرك، مع الاحتفاظ بجمالية الخرسانة الأصلية.

【التطبيقات النموذجية】
حماية داخلية/خارجية للمباني من الخرسانة والخرسانة المكشوفة والمنتجات الأسمنتية.

【البيانات الفيزيائية وبيانات التطبيق】
الرابط / الراتنج：نظام مستحلب فلوروكربون
اللون：شفاف / رمادي شفاف
المواد الصلبة بالحجم：49 %
معدل الانتشار النظري：12 m\xb2/L @ 40 μm DFT
الجفاف (الجفاف السطحي / التصلد الكامل)：1 h / 3 d (20 \xb0C)
الفاصل الزمني لإعادة الطلاء (الأدنى / الأقصى)：1 h – 7 d
التشطيب：مطفي
طرق التطبيق：الرش الهوائي (رش هوائي (airless)) \xb7 فرشاة \xb7 الرش التقليدي
مادة التنظيف：مادة التنظيف المطابقة من HN

【تحضير السطح】
يجب أن تكون الخرسانة متصلدة بالكامل وجافة (محتوى الرطوبة < 10 %، pH < 10)؛ أزل الطبقة الرقيقة السطحية والغبار والشحوم والأملاح البيضاء؛ وأصلح وسوِّ المواضع المعيبة بالمعجون حيث يلزم. جدران الخرسانة الجديدة: تُترك نحو 30 يوماً قبل المعجون والطلاء.

【النظام الموصى به (أكواد HN)】
exposed-concrete sealer (HN supply) \xd71 طبقة/طبقات（0.10–0.12 L/m\xb2）
colour-adjusting coat \xd72 طبقة/طبقات（0.20–0.25 L/m\xb2）
HN-CUSTOM-15 \xd72 طبقة/طبقات（0.15–0.20 L/m\xb2）

【السلامة】
مادة سريعة الاشتعال — تُبعد عن الحرارة ومصادر اللهب؛ ويُمنع التدخين في منطقة العمل. تُستخدم فقط مع تهوية كافية؛ مع تجنّب استنشاق الأبخرة ورذاذ الرش، وتجنّب ملامسة الجلد والعينين. تُحفظ في مكان بارد جاف. للاستخدام المهني فقط.

※ القيم مأخوذة من ورقة البيانات الفنية الخاصة بالشركة المصنعة؛ أكِّد ورقة TDS الخاصة بالدفعة قبل اعتماد المواصفة.`}}],image:"/images/lab.jpg",applications:[{en:"Distributor house brands",zh:"经销商自有品牌",vi:"Thương hiệu riêng nhà phân phối",es:"Marcas propias de distribuidores",ar:"علامات الموزعين الخاصة"},{en:"Project-specific specifications",zh:"项目专项规范",vi:"Thông số theo dự án",es:"Especificaciones por proyecto",ar:"مواصفات خاصة بالمشروع"},{en:"Marine & speciality requirements",zh:"船舶及特殊需求",vi:"Yêu cầu hàng hải & đặc thù",es:"Requisitos marinos y especiales",ar:"المتطلبات البحرية والخاصة"},{en:"Destination-market compliance",zh:"目的市场合规",vi:"Tuân thủ thị trường nhập",es:"Cumplimiento del mercado de destino",ar:"الامتثال لمتطلبات سوق الوجهة"}]}],G=[{no:"01",title:{en:"Direct Sourcing",zh:"源头直采",vi:"Nguồn trực tiếp",es:"Abastecimiento directo",ar:"التوريد المباشر"},desc:{en:"Direct from ISO 9001 certified coating plants in China's coatings hub — no multi-layer reseller markups.",zh:"直连中国涂料之乡的 ISO 9001 认证工厂，无多层中间商加价。",vi:"Trực tiếp từ nhà máy sơn đạt ISO 9001 tại thủ phủ sơn Trung Quốc — không qua nhiều tầng trung gian.",es:"Directo de plantas de recubrimientos certificadas ISO 9001 en la capital china de los recubrimientos — sin márgenes de múltiples intermediarios.",ar:"مباشرة من مصانع طلاء معتمدة ISO 9001 في مركز صناعة الطلاءات بالصين — دون هوامش الوسطاء متعددي الطبقات."}},{no:"02",title:{en:"Export Documentation",zh:"出口单证",vi:"Chứng từ xuất khẩu",es:"Documentación de exportación",ar:"مستندات التصدير"},desc:{en:"CO, MSDS/TDS, dangerous-goods packaging and destination-market documents handled for every shipment.",zh:"每批出货代办 CO、MSDS/TDS、危险品包装及目的市场单证。",vi:"Mỗi lô hàng: CO, MSDS/TDS, đóng gói nguy hiểm và chứng từ theo thị trường nhập.",es:"CO, MSDS/TDS, embalaje de mercancías peligrosas y documentos del mercado de destino gestionados en cada embarque.",ar:"تُنجَز شهادة المنشأ (CO) وMSDS/TDS وتغليف البضائع الخطرة ومستندات سوق الوجهة لكل شحنة."}},{no:"03",title:{en:"Complete Systems",zh:"体系成套",vi:"Hệ thống trọn bộ",es:"Sistemas completos",ar:"أنظمة كاملة"},desc:{en:"Primer, intermediate and topcoat sourced as one matched system — plus RAL/Pantone colour matching.",zh:"底漆、中间漆、面漆成套供应，并提供 RAL/Pantone 调色。",vi:"Lót, lớp giữa và lớp phủ cung cấp thành một hệ phối hợp — kèm pha màu RAL/Pantone.",es:"Imprimación, capa intermedia y acabado abastecidos como un sistema compatible — más igualación de color RAL/Pantone.",ar:"البرايمر والطبقة الوسطى والطبقة النهائية تُورَّد كنظام متطابق واحد — إضافة إلى مطابقة ألوان RAL/Pantone."}},{no:"04",title:{en:"Batch QC Reports",zh:"批次质检",vi:"QC theo lô",es:"Informes de QC por lote",ar:"تقارير مراقبة جودة الدفعات"},desc:{en:"Production QC report available for every batch; pre-shipment third-party testing (SGS / BV / Intertek) on request.",zh:"每批可提供生产质检报告；可按要求安排装运前第三方检测（SGS/BV/Intertek）。",vi:"Báo cáo QC sản xuất cho mỗi lô; thử nghiệm bên thứ ba trước giao (SGS/BV/Intertek) theo yêu cầu.",es:"Informe de QC de producción disponible para cada lote; ensayos de terceros previos al embarque (SGS / BV / Intertek) a pedido.",ar:"تقرير مراقبة جودة الإنتاج متاح لكل دفعة؛ واختبار طرف ثالث قبل الشحن (SGS / BV / Intertek) عند الطلب."}},{no:"05",title:{en:"Low MOQ",zh:"低起订量",vi:"MOQ thấp",es:"MOQ baja",ar:"حد أدنى منخفض للطلب (MOQ)"},desc:{en:"200 kg MOQ with mixed tones accepted — built for distributor trial orders.",zh:"200 公斤起订，接受混色，适合经销商试单。",vi:"MOQ 200 kg, nhận phối màu hỗn hợp — phù hợp đơn thử nghiệm nhà phân phối.",es:"MOQ de 200 kg con tonos mezclados aceptados — pensada para pedidos de prueba de distribuidores.",ar:"حد أدنى للطلب 200 kg مع قبول الألوان المختلطة — مصمَّم لأوامر التجربة لدى الموزعين."}},{no:"06",title:{en:"OEM / Private Label",zh:"OEM / 贴牌",vi:"OEM / Nhãn riêng",es:"OEM / Marca privada",ar:"OEM / العلامة الخاصة"},desc:{en:"Your brand on drums and labels, with multilingual TDS / MSDS.",zh:"桶身与标签打您的品牌，配多语言 TDS/MSDS。",vi:"Thương hiệu bạn trên thùng và nhãn, kèm TDS/MSDS đa ngữ.",es:"Su marca en bidones y etiquetas, con TDS / MSDS en varios idiomas.",ar:"علامتك التجارية على البراميل والملصقات، مع TDS / MSDS متعددة اللغات."}},{no:"07",title:{en:"Technical Support",zh:"技术支持",vi:"Hỗ trợ kỹ thuật",es:"Soporte técnico",ar:"الدعم الفني"},desc:{en:"System specification and application guidance from the producing plants' technical teams, coordinated by us.",zh:"由我方协调生产工厂技术团队提供体系选型与施工指导。",vi:"Tư vấn hệ thống và hướng dẫn thi công từ đội kỹ thuật nhà máy, do chúng tôi điều phối.",es:"Especificación de sistemas y orientación de aplicación por los equipos técnicos de las plantas productoras, coordinados por nosotros.",ar:"مواصفات النظام وإرشادات التطبيق من الفرق الفنية لمصانع الإنتاج، بتنسيق منّا."}},{no:"08",title:{en:"Certified Product Lines",zh:"认证产品线",vi:"Dòng sản phẩm chứng nhận",es:"Líneas de producto certificadas",ar:"خطوط منتجات معتمدة"},desc:{en:"ISO 9001:2015 production · CE-marked lines · REACH-aligned · low-VOC grades available.",zh:"ISO 9001:2015 生产 · CE 产品线 · 对齐 REACH · 提供低 VOC 等级。",vi:"Sản xuất ISO 9001:2015 · dòng CE · theo REACH · có cấp VOC thấp.",es:"Producción ISO 9001:2015 · líneas con marcado CE · alineadas con REACH · grados de bajo VOC disponibles.",ar:"إنتاج ISO 9001:2015 · خطوط تحمل علامة CE · متوافق مع REACH · درجات منخفضة VOC متاحة."}}],W=[{code:"APP-01",title:{en:"Steel Structure Anti-Corrosion",zh:"钢结构防腐",vi:"Chống ăn mòn kết cấu thép",es:"Anticorrosión de estructuras de acero",ar:"مكافحة تآكل الهياكل الفولاذية"},image:"/images/app-steel-structure.jpg"},{code:"APP-02",title:{en:"Industrial Floor Systems",zh:"工业地坪系统",vi:"Hệ sàn công nghiệp",es:"Sistemas industriales de pisos",ar:"أنظمة الأرضيات الصناعية"},image:"/images/app-floor-systems.jpg"},{code:"APP-03",title:{en:"Outdoor Equipment Weatherproof",zh:"户外设备耐候",vi:"Thiết bị ngoại thất chịu thời tiết",es:"Equipos exteriores resistentes a la intemperie",ar:"حماية المعدات الخارجية من الطقس"},image:"/images/app-outdoor-equipment.jpg"},{code:"APP-04",title:{en:"Commercial Building Facades",zh:"商业建筑外墙",vi:"Mặt tiền tòa thương mại",es:"Fachadas de edificios comerciales",ar:"واجهات المباني التجارية"},image:"/images/app-building-facade.jpg"},{code:"APP-05",title:{en:"Ship Hull & Marine",zh:"船体与海洋",vi:"Thân tàu & hàng hải",es:"Cascos de buques y marina",ar:"هيكل السفينة والطلاءات البحرية"},image:"/images/app-ship-hull.jpg"},{code:"APP-06",title:{en:"Bridge & Infrastructure",zh:"桥梁与基础设施",vi:"Cầu & hạ tầng",es:"Puentes e infraestructura",ar:"الجسور والبنية التحتية"},image:"/images/app-bridge.jpg"}],Q=[{code:"SYS-01",location:{en:"Steel structure",zh:"钢结构",vi:"Kết cấu thép",es:"Estructura de acero",ar:"الهيكل الفولاذي"},year:"ISO 12944",title:{en:"Structural Steel Anti-Corrosion System",zh:"钢结构防腐配套体系",vi:"Hệ chống ăn mòn kết cấu thép",es:"Sistema anticorrosivo para acero estructural",ar:"نظام مكافحة تآكل الفولاذ الإنشائي"},summary:{en:"Representative 3-coat build for plants, bridges and warehouse steel in medium-to-high corrosivity: epoxy zinc-rich primer (40 μm) → epoxy MIO intermediate (80 μm) → acrylic-PU topcoat (2 × 40 μm). Exact build is specified per corrosivity category and design life; batch TDS and QC reports accompany every order.",zh:"面向工厂、桥梁与仓库钢构（中高腐蚀等级）的典型三道配套：环氧富锌底漆（40 μm）→ 环氧云铁中间漆（80 μm）→ 丙烯酸聚氨酯面漆（2×40 μm）。具体膜厚按腐蚀等级与设计寿命确定；每单随附批次 TDS 与质检报告。",vi:"Cấu hình 3 lớp đại diện cho nhà máy, cầu và thép kho ở cấp ăn mòn trung-cao: lót epoxy giàu kẽm (40 μm) → lớp giữa epoxy MIO (80 μm) → phủ acrylic-PU (2 × 40 μm). Độ dày chính xác theo cấp ăn mòn và tuổi thọ thiết kế; mỗi đơn kèm TDS và báo cáo QC theo lô.",es:"Sistema representativo de 3 capas para plantas, puentes y acero de almacenes en corrosividad media-alta: imprimación epoxi rica en zinc (40 μm) → capa intermedia epoxi de óxido de hierro micáceo (80 μm) → acabado de poliuretano acrílico (2 × 40 μm). El sistema exacto se especifica según la categoría de corrosividad y la vida de diseño; cada pedido incluye TDS por lote e informes de QC.",ar:"نظام نموذجي ثلاثي الطبقات للمصانع والجسور والهياكل الفولاذية للمستودعات في أوساط متوسطة إلى عالية التآكل: برايمر إيبوكسي غني بالزنك (40 μm) → طبقة وسطى إيبوكسي بأكسيد الحديد الميكائي (80 μm) → تشطيب بولي يوريثان أكريليك (2 × 40 μm). يُحدد النظام الدقيق وفق فئة التآكل والعمر التصميمي؛ ويرافق كل طلب TDS بالدفعة وتقارير فحص الجودة."},image:"/images/case-steel-plant.jpg",metrics:[{label:{en:"System",zh:"系统",vi:"Hệ thống",es:"Sistema",ar:"النظام"},value:"3-coat"},{label:{en:"Total DFT",zh:"总膜厚",vi:"Tổng DFT",es:"DFT total",ar:"إجمالي DFT"},value:"160 μm"},{label:{en:"Selection per",zh:"选型依据",vi:"Căn cứ chọn",es:"Selección según",ar:"الاختيار وفق"},value:"ISO 12944"}]},{code:"SYS-02",location:{en:"Warehouse flooring",zh:"仓储地坪",vi:"Sàn kho",es:"Pisos de almacén",ar:"أرضيات المستودعات"},year:"Heavy-duty",title:{en:"Logistics Warehouse Floor System",zh:"物流仓库地坪体系",vi:"Hệ sàn kho logistics",es:"Sistema de piso para almacenes logísticos",ar:"نظام أرضية مستودع لوجستي"},summary:{en:"Representative heavy-duty floor for forklift traffic: epoxy sealing primer → epoxy mortar / putty levelling → solvent-free self-leveling epoxy 2–3 mm (or economical roll-coat builds) with optional PU clear sealer. Foot traffic in ~36 h, full cure 7 days.",zh:"承受叉车通行的典型重载地坪：环氧封闭底漆 → 环氧砂浆/腻子找平 → 2–3 mm 无溶剂自流平（或经济型平涂），可选聚氨酯罩光。约 36 小时上人，7 天完全固化。",vi:"Sàn hạng nặng điển hình cho xe nâng: lót khóa epoxy → vữa/bột trét epoxy → tự chảy không dung môi 2–3 mm (hoặc hệ lăn kinh tế), có thể phủ trong PU. Đi lại sau ~36 giờ, đóng rắn hoàn toàn 7 ngày.",es:"Piso de servicio pesado representativo para tráfico de montacargas: imprimación epoxi selladora → mortero epoxi / enrasado con masilla → epoxi autonivelante libre de disolvente de 2–3 mm (o sistemas económicos a rodillo) con sellador PU transparente opcional. Tránsito peatonal en ~36 h, curado completo en 7 días.",ar:"أرضية نموذجية للأحمال الثقيلة لمرور الرافعات الشوكية: برايمر إيبوكسي مانع للنفاذ → مونة إيبوكسي / تسوية بالمعجون → إيبوكسي ذاتي التسوية خالٍ من المذيبات بسماكة 2–3 مم (أو أنظمة رولر اقتصادية) مع طبقة ختامية PU شفافة اختيارية. حركة المشاة خلال ~36 ساعة، والتصلد الكامل في 7 أيام."},image:"/images/case-warehouse.jpg",metrics:[{label:{en:"Build",zh:"膜厚",vi:"Độ dày",es:"Espesor de película",ar:"السماكة"},value:"2–3 mm"},{label:{en:"Coats",zh:"道数",vi:"Số lớp",es:"Capas",ar:"عدد الطبقات"},value:"3–4"},{label:{en:"Traffic",zh:"交通",vi:"Tải",es:"Tránsito",ar:"زمن السير"},value:"Forklift"}]},{code:"SYS-03",location:{en:"Building facade",zh:"建筑外墙",vi:"Mặt tiền công trình",es:"Fachada de edificio",ar:"واجهة المبنى"},year:"FEVE system",title:{en:"Commercial Facade Fluorocarbon System",zh:"商业外墙氟碳体系",vi:"Hệ fluorocarbon mặt tiền thương mại",es:"Sistema fluorocarbonado para fachadas comerciales",ar:"نظام واجهة تجارية بالفلوروكربون"},summary:{en:"Representative facade build on concrete: epoxy sealing primer → epoxy high-build intermediate → two-pack FEVE fluorocarbon topcoat (metallic colours available). 1000 h accelerated-weathering laboratory data for the finish; system build specified per exposure and design life.",zh:"混凝土外墙典型配套：环氧封闭底漆 → 环氧厚浆中间层 → 双组份 FEVE 氟碳面漆（可做金属色）。面漆有 1000 小时人工加速老化实验数据；体系膜厚按曝露环境与设计寿命确定。",vi:"Cấu hình mặt tiền bê tông điển hình: lót khóa epoxy → lớp giữa epoxy dày → phủ fluorocarbon FEVE 2 thành phần (có màu kim loại). Sơn phủ có số liệu lão hóa tăng tốc 1000 giờ; độ dày hệ theo môi trường và tuổi thọ thiết kế.",es:"Sistema representativo de fachada sobre concreto: imprimación epoxi selladora → capa intermedia epoxi de alto espesor → acabado fluorocarbonado FEVE de dos componentes (colores metálicos disponibles). Datos de laboratorio de 1000 h de intemperie acelerada para el acabado; espesor del sistema especificado según exposición y vida de diseño.",ar:"نظام واجهات نموذجي على الخرسانة: برايمر إيبوكسي مانع للنفاذ → طبقة وسطى إيبوكسي عالية السماكة → تشطيب فلوروكربون FEVE ثنائي العبوة (تتوفر ألوان معدنية). بيانات معملية لـ 1000 ساعة تعتيج متسارع للتشطيب؛ وتُحدد سماكة النظام وفق ظروف التعرض والعمر التصميمي."},image:"/images/case-tower.jpg",metrics:[{label:{en:"System",zh:"系统",vi:"Hệ thống",es:"Sistema",ar:"النظام"},value:"3-part"},{label:{en:"Finish gloss",zh:"面漆光泽",vi:"Độ bóng",es:"Brillo del acabado",ar:"لمعان الطبقة النهائية"},value:"≥ 90 (60°)"},{label:{en:"Lab weathering",zh:"实验室耐候",vi:"Lão hóa PTN",es:"Intemperie en laboratorio",ar:"تقادم مخبري"},value:"1000 h"}]}],K=[{code:"ISO 9001",title:{en:"Quality Management",zh:"质量管理",vi:"Quản lý chất lượng",es:"Gestión de calidad",ar:"إدارة الجودة"}},{code:"CE",title:{en:"EU Conformity",zh:"欧盟符合性",vi:"Phù hợp EU",es:"Conformidad UE",ar:"مطابقة الاتحاد الأوروبي (EU)"}},{code:"REACH",title:{en:"SVHC Compliance",zh:"REACH 合规",vi:"Tuân thủ REACH",es:"Cumplimiento SVHC",ar:"امتثال SVHC"}},{code:"SGS",title:{en:"Test Reports",zh:"检测报告",vi:"Báo cáo kiểm tra",es:"Informes de ensayo",ar:"تقارير الاختبار"}},{code:"Low VOC",title:{en:"Low-VOC grades",zh:"低 VOC 等级",vi:"Cấp VOC thấp",es:"Grados de bajo VOC",ar:"درجات منخفضة VOC"}},{code:"DG Pack",title:{en:"UN / DG packaging",zh:"UN 危包",vi:"Đóng gói DG",es:"Embalaje UN / DG",ar:"تغليف UN / DG"}}],_=["HN-AC-201","HN-AC-302","HN-AC-405","HN-HT-600","HN-FL-101"],X=[{en:"EPOXY",zh:"环氧",vi:"EPOXY",es:"EPOXI",ar:"إيبوكسي"},{en:"POLYURETHANE",zh:"聚氨酯",vi:"POLYURETHANE",es:"POLIURETANO",ar:"بولي يوريثان"},{en:"FLUOROCARBON",zh:"氟碳",vi:"FLUOROCARBON",es:"FLUOROCARBONO",ar:"فلوروكربون"},{en:"SILICONE HT",zh:"耐高温有机硅",vi:"SILICONE CHỊU NHIỆT",es:"SILICONA ALTA TEMP.",ar:"سيليكون حراري"},{en:"ZINC-RICH",zh:"富锌",vi:"GIÀU KẼM",es:"RICO EN ZINC",ar:"غني بالزنك"},{en:"CHLORINATED RUBBER",zh:"氯化橡胶",vi:"CAO SU CLO HÓA",es:"CAUCHO CLORADO",ar:"مطاط مكلور"},{en:"ALKYD",zh:"醇酸",vi:"ALKYD",es:"ALQUÍDICO",ar:"ألكيد"},{en:"WATERBORNE",zh:"水性",vi:"GỐC NƯỚC",es:"BASE AGUA",ar:"أساس مائي"}],$=[{en:"SE Asia",zh:"东南亚",vi:"Đông Nam Á",es:"Sudeste Asiático",ar:"جنوب شرق آسيا"},{en:"Middle East",zh:"中东",vi:"Trung Đông",es:"Medio Oriente",ar:"الشرق الأوسط"},{en:"Africa",zh:"非洲",vi:"Châu Phi",es:"África",ar:"أفريقيا"},{en:"South America",zh:"南美",vi:"Nam Mỹ",es:"Sudamérica",ar:"أمريكا الجنوبية"},{en:"Eastern Europe",zh:"东欧",vi:"Đông Âu",es:"Europa del Este",ar:"أوروبا الشرقية"},{en:"Central Asia",zh:"中亚",vi:"Trung Á",es:"Asia Central",ar:"آسيا الوسطى"}],Y=[{code:"SOL-01",title:{en:"Oil, Gas & Petrochemical",zh:"石油、天然气与石化",vi:"Dầu khí & Hóa chất",es:"Petróleo, gas y petroquímica",ar:"النفط والغاز والبتروكيماويات"},desc:{en:"Corrosion-critical assets — storage tanks, refineries, pipelines — protected with multi-coat epoxy / PU systems selected per chemical exposure and ISO 12944 category.",zh:"腐蚀关键资产——储罐、炼厂、管道，按化学品接触与 ISO 12944 等级选用多层环氧/PU 体系。",vi:"Tài sản trọng yếu ăn mòn — bồn chứa, lọc hóa dầu, đường ống — dùng hệ epoxy/PU nhiều lớp theo mức tiếp xúc hóa chất và cấp ISO 12944.",es:"Activos críticos frente a la corrosión — tanques de almacenamiento, refinerías, tuberías — protegidos con sistemas multicapa epoxi / PU seleccionados según la exposición química y la categoría ISO 12944.",ar:"أصول حرجة أمام التآكل — خزانات التخزين والمصفّيات والخطوط الأنبوبية — تُحمى بأنظمة إيبوكسي / PU متعددة الطبقات تُختار وفق التعرض الكيميائي وفئة ISO 12944."},products:[{en:"Anti-Corrosion Coatings",zh:"防腐涂料",vi:"Sơn chống ăn mòn",es:"Recubrimientos anticorrosivos",ar:"طلاءات مضادة للتآكل"},{en:"High-Temperature Coatings",zh:"耐高温涂料",vi:"Sơn chịu nhiệt cao",es:"Recubrimientos de alta temperatura",ar:"طلاءات درجات الحرارة العالية"}],icon:"Factory",image:"/images/sol-oil-gas.jpg"},{code:"SOL-02",title:{en:"Marine & Offshore",zh:"海洋与离岸",vi:"Hàng hải & ngoài khơi",es:"Marina y offshore",ar:"القطاع البحري والأعمال النائية"},desc:{en:"Ship hulls, offshore structures and splash zones: marine coating lines incl. anti-corrosion and specialty systems — certificates for the applicable system available on request.",zh:"船体、海洋结构及飞溅区：提供防腐与特种体系等船舶漆系列，适用体系证书备索。",vi:"Thân tàu, kết cấu ngoài khơi và vùng văng: dải sơn hàng hải gồm chống ăn mòn và hệ đặc thù — chứng nhận hệ áp dụng theo yêu cầu.",es:"Cascos de buques, estructuras offshore y zonas de salpicadura: líneas de recubrimientos marinos, incl. sistemas anticorrosivos y especiales — certificados del sistema aplicable disponibles a pedido.",ar:"هياكل السفن والمنشآت البحرية ومناطق الرشق: خطوط طلاء بحري تشمل أنظمة مكافحة التآكل والأنظمة الخاصة — وشهادات النظام المناسب متاحة عند الطلب."},products:[{en:"Anti-Corrosion Coatings",zh:"防腐涂料",vi:"Sơn chống ăn mòn",es:"Recubrimientos anticorrosivos",ar:"طلاءات مضادة للتآكل"},{en:"Custom Engineered Coatings",zh:"定制工程涂料",vi:"Sơn kỹ thuật theo yêu cầu",es:"Recubrimientos de ingeniería a medida",ar:"طلاءات هندسية مخصصة"}],icon:"Ship",image:"/images/sol-marine.jpg"},{code:"SOL-03",title:{en:"Power & Energy",zh:"电力与能源",vi:"Điện năng & Năng lượng",es:"Energía y electricidad",ar:"الطاقة والكهرباء"},desc:{en:"Boilers, stacks, exhausts and turbine housings protected with silicone high-temperature systems up to 550 °C (custom grades beyond).",zh:"锅炉、烟囱、排气管及涡轮壳体采用最高 550 ℃ 的有机硅耐高温体系（更高等级可定制）。",vi:"Lò hơi, ống khói, ống xả và vỏ tuabin dùng hệ silicone chịu nhiệt tới 550 °C (cấp cao hơn đặt riêng).",es:"Calderas, chimeneas, escapes y carcasas de turbinas protegidos con sistemas de silicona de alta temperatura hasta 550 °C (grados superiores a medida).",ar:"الغلايات والمداخن ومجاري العوادم وأغلفة التوربينات تُحمى بأنظمة سيليكون عالية الحرارة حتى 550 °C (ودرجات أعلى بالتخصيص)."},products:[{en:"High-Temperature Coatings",zh:"耐高温涂料",vi:"Sơn chịu nhiệt cao",es:"Recubrimientos de alta temperatura",ar:"طلاءات درجات الحرارة العالية"},{en:"Custom Engineered Coatings",zh:"定制工程涂料",vi:"Sơn kỹ thuật theo yêu cầu",es:"Recubrimientos de ingeniería a medida",ar:"طلاءات هندسية مخصصة"}],icon:"Flame",image:"/images/sol-power.jpg"},{code:"SOL-04",title:{en:"Infrastructure & Bridges",zh:"基础设施与桥梁",vi:"Hạ tầng & Cầu",es:"Infraestructura y puentes",ar:"البنية التحتية والجسور"},desc:{en:"Long-span steel bridges and transit infrastructure: coating systems assembled per design-life and maintenance plan from the HN primer / intermediate / topcoat range.",zh:"大跨度钢桥与交通基础设施：以 HN 底漆/中间漆/面漆按设计寿命与维护计划组配套体系。",vi:"Cầu thép nhịp dài và hạ tầng giao thông: hệ sơn lắp theo tuổi thọ thiết kế và kế hoạch bảo trì từ dải lót/lớp giữa/lớp phủ HN.",es:"Puentes de acero de gran luz e infraestructura de transporte: sistemas de recubrimiento armados según la vida útil de diseño y el plan de mantenimiento con la gama HN de imprimaciones / capas intermedias / acabados.",ar:"جسور الفولاذ كبيرة الامتداد وبنية النقل: أنظمة طلاء تُجمَّع وفق العمر التصميمي وخطة الصيانة من مدى برايمرات/طبقات وسطى/نهائية HN."},products:[{en:"Anti-Corrosion Coatings",zh:"防腐涂料",vi:"Sơn chống ăn mòn",es:"Recubrimientos anticorrosivos",ar:"طلاءات مضادة للتآكل"},{en:"Custom Engineered Coatings",zh:"定制工程涂料",vi:"Sơn kỹ thuật theo yêu cầu",es:"Recubrimientos de ingeniería a medida",ar:"طلاءات هندسية مخصصة"}],icon:"Construction",image:"/images/sol-infrastructure.jpg"},{code:"SOL-05",title:{en:"Commercial Architecture",zh:"商业建筑",vi:"Kiến trúc thương mại",es:"Arquitectura comercial",ar:"العمارة التجارية"},desc:{en:"Towers, malls and public buildings: FEVE fluorocarbon and elastic anti-crack facade systems with 1000 h accelerated-weathering lab data for the finishes.",zh:"塔楼、商场及公共建筑：FEVE 氟碳与弹性抗裂幕墙体系，面漆有 1000 小时人工加速老化实验数据。",vi:"Tháp, TTTM và công trình công cộng: hệ mặt tiền FEVE fluorocarbon và đàn hồi chống nứt, sơn phủ có số liệu lão hóa tăng tốc 1000 giờ.",es:"Torres, centros comerciales y edificios públicos: sistemas de fachada fluorocarbonados FEVE y elásticos antifisuras, con datos de laboratorio de 1000 h de intemperie acelerada para los acabados.",ar:"الأبراج والمولات والمباني العامة: أنظمة واجهات فلوروكربون FEVE ومرنة مانعة للتشقق مع بيانات تقادم متسارع 1000 h للطلاءات النهائية."},products:[{en:"Weatherproof Exterior Paints",zh:"耐候外墙涂料",vi:"Sơn ngoại thất chịu thời tiết",es:"Pinturas exteriores resistentes a la intemperie",ar:"دهانات خارجية مقاومة للطقس"},{en:"Architectural Wall Coatings",zh:"建筑墙面涂料",vi:"Sơn tường kiến trúc",es:"Recubrimientos arquitectónicos para muros",ar:"طلاءات الجدران المعمارية"}],icon:"Building2",image:"/images/sol-architecture.jpg"},{code:"SOL-06",title:{en:"Industrial Flooring",zh:"工业地坪",vi:"Sàn công nghiệp",es:"Pisos industriales",ar:"الأرضيات الصناعية"},desc:{en:"Warehouses, plants and parking decks: self-leveling, roll-coat and waterborne floor systems rated for forklift traffic.",zh:"仓库、厂房与停车场：自流平、平涂及水性地坪体系，可承受叉车通行。",vi:"Kho, nhà máy và bãi đỗ xe: hệ tự chảy, lăn và gốc nước chịu xe nâng.",es:"Almacenes, plantas y cubiertas de estacionamiento: sistemas de pisos autonivelantes, de rodillo y base agua clasificados para tránsito de montacargas.",ar:"المستودعات والمصانع وأرصفة الوقوف: أنظمة أرضيات ذاتية التسوية وبالرولر وأساس مائي مصنّفة لتحمّل مرور الرافعات الشوكية."},products:[{en:"Epoxy Floor Coatings",zh:"环氧地坪涂料",vi:"Sơn nền epoxy",es:"Recubrimientos epoxi para pisos",ar:"طلاءات أرضيات الإيبوكسي"}],icon:"LayoutGrid",image:"/images/sol-flooring.jpg"}],Z=[{no:"01",title:{en:"Consultation & Spec",zh:"咨询与规格",vi:"Tư vấn & thông số",es:"Consulta y especificación",ar:"الاستشارة والمواصفات"},desc:{en:"Tell us substrate, environment and performance targets — we respond with a matched coating system proposal within one business day.",zh:"告知基材、环境与性能目标，一个工作日内回复配套涂料方案。",vi:"Cung cấp bề mặt, môi trường và yêu cầu — chúng tôi phản hồi đề xuất hệ sơn trong một ngày làm việc.",es:"Díganos sustrato, ambiente y objetivos de desempeño — respondemos con una propuesta de sistema de recubrimiento compatible en un día hábil.",ar:"أخبرنا بالركيزة والبيئة والأهداف الأدائية — نرد بمقترح نظام طلاء متطابق خلال يوم عمل واحد."}},{no:"02",title:{en:"Sample & Colour",zh:"样品与调色",vi:"Mẫu & màu",es:"Muestra y color",ar:"العينة واللون"},desc:{en:"Lab samples and RAL/Pantone colour matching, typically within 7–15 days depending on complexity.",zh:"实验室样品与 RAL/Pantone 调色，视复杂度通常 7–15 天。",vi:"Mẫu phòng thí nghiệm và pha màu RAL/Pantone, thường 7–15 ngày tùy độ phức tạp.",es:"Muestras de laboratorio e igualación de color RAL/Pantone, normalmente en 7–15 días según la complejidad.",ar:"عينات مختبرية ومطابقة ألوان RAL/Pantone، عادة خلال 7–15 يوماً بحسب التعقيد."}},{no:"03",title:{en:"Production & QC",zh:"生产与品控",vi:"Sản xuất & QC",es:"Producción y QC",ar:"الإنتاج ومراقبة الجودة"},desc:{en:"Production at certified partner plants; batch QC report available and pre-shipment third-party testing on request. 24-month quality warranty.",zh:"认证工厂生产；批次质检报告可提供，可安排装运前第三方检测。24 个月质保。",vi:"Sản xuất tại nhà máy đối tác chứng nhận; báo cáo QC theo lô, thử nghiệm bên thứ ba trước giao theo yêu cầu. Bảo hành 24 tháng.",es:"Producción en plantas socias certificadas; informe de QC por lote disponible y ensayos de terceros previos al embarque a pedido. Garantía de calidad de 24 meses.",ar:"الإنتاج في مصانع شريكة معتمدة؛ وتقرير مراقبة جودة الدفعة متاح، واختبار طرف ثالث قبل الشحن عند الطلب. ضمان جودة 24 شهراً."}},{no:"04",title:{en:"Export & Support",zh:"出口与支持",vi:"Xuất khẩu & hỗ trợ",es:"Exportación y soporte",ar:"التصدير والدعم"},desc:{en:"CO, MSDS, TDS and dangerous-goods packaging as required by destination; application guidance coordinated with the plants' technical teams.",zh:"按目的国要求提供 CO、MSDS、TDS 及危险品包装；施工指导由工厂技术团队配合提供。",vi:"CO, MSDS, TDS và đóng gói nguy hiểm theo yêu cầu quốc gia nhập; hướng dẫn thi công phối hợp đội kỹ thuật nhà máy.",es:"CO, MSDS, TDS y embalaje de mercancías peligrosas según lo exigido por el destino; orientación de aplicación coordinada con los equipos técnicos de las plantas.",ar:"شهادة المنشأ (CO) وMSDS وTDS وتغليف البضائع الخطرة بحسب متطلبات بلد الوجهة؛ وإرشادات التطبيق بتنسيق مع الفرق الفنية للمصانع."}}],J=[{no:"01",t:{en:"Consult",zh:"咨询",vi:"Tư vấn",es:"Consultar",ar:"الاستشارة"},d:{en:"Share substrate, environment, performance targets.",zh:"告知基材、环境、性能目标。",vi:"Cung cấp bề mặt, môi trường, yêu cầu.",es:"Indique sustrato, ambiente y objetivos de desempeño.",ar:"شارك الركيزة والبيئة والأهداف الأدائية."}},{no:"02",t:{en:"Sample",zh:"样品",vi:"Mẫu",es:"Muestra",ar:"عينة"},d:{en:"Lab sample & colour in 7–15 days.",zh:"7–15 天出样与调色。",vi:"Mẫu & màu trong 7–15 ngày.",es:"Muestra de laboratorio y color en 7–15 días.",ar:"عينة مختبرية ولون خلال 7–15 يوماً."}},{no:"03",t:{en:"Produce",zh:"生产",vi:"Sản xuất",es:"Producir",ar:"الإنتاج"},d:{en:"Certified plants. Batch QC report.",zh:"认证工厂生产，批次质检报告。",vi:"Nhà máy chứng nhận. Báo cáo QC mỗi lô.",es:"Plantas certificadas. Informe de QC por lote.",ar:"مصانع معتمدة. تقرير مراقبة جودة الدفعة."}},{no:"04",t:{en:"Export",zh:"出口",vi:"Xuất khẩu",es:"Exportar",ar:"التصدير"},d:{en:"CO, MSDS, TDS, DG packaging.",zh:"CO、MSDS、TDS、危包。",vi:"CO, MSDS, TDS, đóng gói DG.",es:"CO, MSDS, TDS, embalaje DG.",ar:"CO، MSDS، TDS، وتغليف البضائع الخطرة (DG)."}}],ee=[{date:"2025-09-18",category:"R&D",title:{en:"Spec Guide: Choosing Anti-Corrosion Systems per ISO 12944 C1–C5",zh:"选型指南：按 ISO 12944 C1–C5 选择防腐体系",vi:"Cẩm nang chọn hệ: hệ chống ăn mòn theo ISO 12944 C1–C5",es:"Guía de especificación: elección de sistemas anticorrosivos según ISO 12944 C1–C5",ar:"دليل المواصفات: اختيار أنظمة مكافحة التآكل وفق ISO 12944 من C1–C5"},excerpt:{en:"How corrosivity categories drive primer choice, DFT builds and coat count — a practical specifier's checklist for steel structures, with zinc-rich / MIO / PU reference builds.",zh:"腐蚀等级如何决定底漆选择、膜厚构建与道数——面向钢结构规格师的实用清单，附富锌/云铁/PU 参考配套。",vi:"Cấp ăn mòn quyết định chọn lót, độ dày và số lớp — danh mục thực dụng cho người lập specs, kèm cấu hình tham khảo giàu kẽm / MIO / PU.",es:"Cómo las categorías de corrosividad determinan la elección de imprimación, los espesores (DFT) y el número de capas — una lista de verificación práctica para especificadores de estructuras de acero, con sistemas de referencia ricos en zinc / MIO / PU.",ar:"كيف تحدد فئات التآكل اختيار البرايمر وسماكات الفيلم (DFT) وعدد الطبقات — قائمة تحقق عملية لمُحدِّدي مواصفات الهياكل الفولاذية، مع أنظمة مرجعية غنية بالزنك / MIO / PU."},read:{en:"5 min read",zh:"5 分钟阅读",vi:"5 phút đọc",es:"5 min de lectura",ar:"قراءة 5 دقائق"},image:"/images/news-1.jpg",body:{en:`## Start with the environment, not the paint

ISO 12944-2 classifies service environments from C1 (heated buildings, dry) through C3 (urban, moderate SO2) and C4 (industrial, coastal) up to C5-I / C5-M and CX (offshore, high salinity). The category — together with the durability target (7, 15 or 25 years) — determines everything downstream: primer type, total DFT and coat count. Specifying paint before the category is the most common reason systems fail early.

## Match the build to the category

As a working rule: C2–C3 steel is held by 2-coat systems at 100–140 μm; C4 wants a 3-coat build around 160–200 μm; C5 duties call for zinc-rich priming plus high-build intermediates, typically 200–280 μm total. Immersed or buried steel (Im2 / burial) moves to epoxy coal-tar or glass-flake systems.

## A reference build that works

For plants, bridges and warehouse steel in C4–C5: epoxy zinc-rich primer (80 % zinc in dry film) 1 \xd7 40 μm, epoxy MIO intermediate 1 \xd7 80 μm, acrylic-polyurethane topcoat 2 \xd7 40 μm — about 200 μm total, recoat windows 1 h – 7 d. Heavier duty upgrades the intermediate to glass-flake and adds DFT, not just extra coats.

## Specify the details that actually fail jobs

Blast cleaning to Sa 2.5 with an anchor profile, stripe coats on edges and welds, salt testing after washing, DFT inspection per coat — most field failures trace to surface preparation and film thickness, not to the paint itself. Write recoat windows and thinner limits from the batch TDS into the application spec.

## What to demand from your supplier

A written system specification (products, coats, DFT per coat), the batch TDS and a QC report with every shipment. If a supplier quotes one blanket salt-spray number for "all systems", ask for the test report of the exact system you are buying.`,zh:`## 先定环境，再谈油漆

ISO 12944-2 把服役环境从 C1（采暖干燥的室内）、C3（城市/中等二氧化硫）、C4（工业/沿海）一路分级到 C5-I / C5-M 与 CX（ offshore 高盐雾）。环境等级加上目标寿命（7/15/25 年）决定了下游的一切：底漆类型、总干膜厚度与道数。先选漆后定等级，是体系早期失效最常见的原因。

## 按等级配膜厚

经验法则：C2–C3 钢构用两道体系 100–140 μm；C4 用三道 160–200 μm；C5 需富锌底漆加厚浆中间漆，总厚通常 200–280 μm。浸水或埋地（Im2/埋地）则转向环氧煤沥青或玻璃鳞片体系。

## 一个可靠的参考配套

面向工厂、桥梁、仓库钢构（C4–C5）：环氧富锌底漆（干膜含锌 80%）1\xd740 μm → 环氧云铁中间漆 1\xd780 μm → 丙烯酸聚氨酯面漆 2\xd740 μm，总厚约 200 μm，重涂窗口 1 小时–7 天。更重工况把中间漆升级为玻璃鳞片并增加膜厚，而不是单纯加道数。

## 把真正出问题的细节写进规范

喷砂至 Sa 2.5 并保证锚纹深度、焊缝与边缘预涂（stripe coat）、水洗后测盐、逐道测膜厚——多数现场失效追溯到表面处理与膜厚，而不是油漆本身。把随批 TDS 的重涂窗口与稀释上限写进施工规范。

## 对供应商要什么

书面体系规格（产品、道数、每道膜厚）、每批 TDS 与质检报告。如果供应商对所有体系只报一个笼统的盐雾小时数，请他拿出你所购具体体系的检测报告。`,vi:`## X\xe1c định m\xf4i trường trước, chọn sơn sau

ISO 12944-2 ph\xe2n cấp m\xf4i trường từ C1 (trong nh\xe0, kh\xf4), C3 (đ\xf4 thị, SO2 vừa), C4 (c\xf4ng nghiệp/ven biển) đến C5-I / C5-M v\xe0 CX (ngo\xe0i khơi, mặn cao). Cấp m\xf4i trường c\xf9ng tuổi thọ mục ti\xeau (7/15/25 năm) quyết định mọi thứ ph\xeda sau: loại sơn l\xf3t, tổng DFT v\xe0 số lớp.

## Phối độ d\xe0y theo cấp

Nguy\xean tắc: th\xe9p C2–C3 d\xf9ng hệ 2 lớp 100–140 μm; C4 d\xf9ng 3 lớp 160–200 μm; C5 cần l\xf3t gi\xe0u kẽm + lớp giữa d\xe0y, tổng 200–280 μm. Th\xe9p ng\xe2m nước/ch\xf4n đất (Im2) chuyển sang hệ epoxy nhựa đường hoặc vảy thủy tinh.

## Cấu h\xecnh tham khảo đ\xe1ng tin

Cho nh\xe0 m\xe1y, cầu, th\xe9p kho ở C4–C5: l\xf3t epoxy gi\xe0u kẽm (80 % kẽm) 1\xd740 μm → lớp giữa epoxy MIO 1\xd780 μm → phủ acrylic-PU 2\xd740 μm, tổng ~200 μm, sơn lại trong 1–7 giờ. Nhiệm vụ nặng hơn: n\xe2ng cấp lớp giữa l\xean vảy thủy tinh v\xe0 tăng DFT.

## Viết r\xf5 chi tiết thường g\xe2y hỏng việc

Phun c\xe1t Sa 2.5 với độ nh\xe1m đạt, sơn l\xf3t trước m\xe9p weld (stripe coat), đo muối sau rửa, đo DFT từng lớp — phần lớn hư hỏng hiện trường do xử l\xfd bề mặt v\xe0 độ d\xe0y, kh\xf4ng phải do sơn. Ghi cửa sổ sơn lại v\xe0 giới hạn dung m\xf4i theo TDS l\xf4 h\xe0ng v\xe0o hồ sơ thi c\xf4ng.

## Y\xeau cầu g\xec ở nh\xe0 cung cấp

Hồ sơ hệ thống bằng văn bản (sản phẩm, số lớp, DFT từng lớp), TDS v\xe0 b\xe1o c\xe1o QC mỗi l\xf4. Nếu nh\xe0 cung cấp chỉ b\xe1o một con số phun muối chung cho mọi hệ, h\xe3y y\xeau cầu b\xe1o c\xe1o thử của đ\xfang hệ m\xecnh mua.`,es:`## Empiece por el ambiente, no por la pintura

ISO 12944-2 clasifica los ambientes de servicio desde C1 (edificaciones calefaccionadas, secas) pasando por C3 (urbano, SO2 moderado) y C4 (industrial, costero) hasta C5-I / C5-M y CX (offshore, alta salinidad). La categor\xeda — junto con el objetivo de durabilidad (7, 15 o 25 a\xf1os) — determina todo lo que sigue: tipo de imprimaci\xf3n, DFT total y n\xfamero de capas. Especificar la pintura antes que la categor\xeda es la raz\xf3n m\xe1s com\xfan de falla temprana de los sistemas.

## Ajuste el espesor a la categor\xeda

Como regla pr\xe1ctica: el acero en C2–C3 se protege con sistemas de 2 capas a 100–140 μm; C4 requiere un sistema de 3 capas de unos 160–200 μm; los servicios C5 exigen imprimaci\xf3n rica en zinc m\xe1s capas intermedias de alto espesor, t\xedpicamente 200–280 μm en total. El acero sumergido o enterrado (Im2 / entierro) pasa a sistemas epoxi con alquitr\xe1n de hulla o con escamas de vidrio.

## Un sistema de referencia que funciona

Para plantas, puentes y acero de almacenes en C4–C5: imprimaci\xf3n epoxi rica en zinc (80 % de zinc en pel\xedcula seca) 1 \xd7 40 μm, capa intermedia epoxi con MIO 1 \xd7 80 μm, acabado de acr\xedlico-poliuretano 2 \xd7 40 μm — unos 200 μm en total, ventanas de repintado de 1 h – 7 d. Los servicios m\xe1s exigentes mejoran la capa intermedia con escamas de vidrio y a\xf1aden DFT, no solo capas extra.

## Especifique los detalles que realmente hacen fallar las obras

Granallado hasta Sa 2.5 con perfil de anclaje, franjas de refuerzo en bordes y soldaduras, medici\xf3n de sales despu\xe9s del lavado, inspecci\xf3n de DFT por capa — la mayor\xeda de las fallas en campo se remontan a la preparaci\xf3n de la superficie y al espesor de pel\xedcula, no a la pintura en s\xed. Escriba las ventanas de repintado y los l\xedmites de diluyente de la TDS del lote en la especificaci\xf3n de aplicaci\xf3n.

## Qu\xe9 exigir a su proveedor

Una especificaci\xf3n escrita del sistema (productos, capas, DFT por capa), la TDS del lote y un informe de QC con cada embarque. Si un proveedor da una sola cifra gen\xe9rica de niebla salina para “todos los sistemas”, p\xeddale el informe de ensayo del sistema exacto que est\xe1 comprando.`,ar:`## ابدأ من البيئة، لا من الطلاء

يصنّف ISO 12944-2 بيئات الخدمة من C1 (مبانٍ مدفأة وجافة) مروراً بـ C3 (حضرية، SO2 معتدل) وC4 (صناعية، ساحلية) وصولاً إلى C5-I / C5-M وCX (منشآت بحرية نائية، ملوحة عالية). وهذه الفئة — مع هدف المتانة (7 أو 15 أو 25 سنة) — تحدد كل ما يترتب عليها: نوع البرايمر (الطبقة الأولى)، وإجمالي DFT، وعدد الطبقات. وتحديد الطلاء قبل تحديد الفئة هو السبب الأكثر شيوعاً في الفشل المبكر للأنظمة.

## طابق السماكة مع الفئة

كقاعدة عملية: فولاذ C2–C3 تكفيه أنظمة من طبقتين بسماكة 100–140 μm؛ وC4 يحتاج تركيبة من ثلاث طبقات عند نحو 160–200 μm؛ ومهام C5 تستدعي برايمراً غنياً بالزنك مع طبقات وسطى عالية السماكة، بإجمالي نموذجي 200–280 μm. أما الفولاذ المغمور أو المدفون (Im2 / دفن) فينتقل إلى أنظمة إيبوكسي قار الفحم أو رقائق الزجاج.

## تركيبة مرجعية مجرّبة

للمصانع والجسور والفولاذ في المستودعات ضمن C4–C5: برايمر (طبقة أولى) إيبوكسي غني بالزنك (80 % زنك في الغشاء الجاف) 1 \xd7 40 μm، وطبقة وسطى إيبوكسي بأكسيد الحديد الميكائي 1 \xd7 80 μm، وطبقة نهائية بولي يوريثان أكريليك 2 \xd7 40 μm — بإجمالي نحو 200 μm، ونوافذ إعادة الطلاء من 1 h إلى 7 d. والمهام الأثقل ترقّي الطبقة الوسطى إلى رقائق الزجاج وتضيف DFT، لا مجرد طبقات إضافية.

## اكتب في المواصفة التفاصيل التي تُفشل الأعمال فعلاً

التنظيف بالسفح الهوائي (السفح الرملي) حتى Sa 2.5 مع خشونة تعشيقية، والطلاء الشريطي على الحواف واللحامات، واختبار الأملاح بعد الغسل، وفحص DFT لكل طبقة — فمعظم حالات الفشل الميداني تُعزى إلى تحضير السطح وسماكة الغشاء، لا إلى الطلاء نفسه. اكتب نوافذ إعادة الطلاء وحدود التخفيف الواردة في ورقة TDS الخاصة بالدفعة ضمن مواصفة التطبيق.

## ما تطلبه من مورّدك

مواصفة نظام مكتوبة (المنتجات، الطبقات، DFT لكل طبقة)، وورقة TDS للدفعة، وتقرير مراقبة جودة مع كل شحنة. وإذا قدّم المورّد رقماً واحداً عاماً لاختبار الرذاذ الملحي \xabلكل الأنظمة\xbb، فاطلب تقرير اختبار النظام المحدد الذي تشتريه بعينه.`}},{date:"2025-08-02",category:"R&D",title:{en:"High-Temperature Coatings: What 200–600 °C Ratings Mean in Practice",zh:"耐高温涂料：200–600 ℃ 等级在现场意味着什么",vi:"Sơn chịu nhiệt: cấp 200–600 °C nghĩa là gì trong thực tế",es:"Recubrimientos de alta temperatura: qué significan en la práctica las clasificaciones de 200–600 °C",ar:"طلاءات درجات الحرارة العالية: ماذا تعني تصنيفات 200–600 °C عملياً"},excerpt:{en:"Silicone vs inorganic ceramic binders, why total DFT must stay thin at temperature, and how to specify colours and grades for pipes, stacks and boiler plant.",zh:"有机硅与无机陶瓷粘结剂的区别、为何高温下总膜厚必须薄，以及管道/烟囱/锅炉设备的颜色与等级选型。",vi:"Keo silicone và ceramic vô cơ khác nhau ra sao, vì sao tổng DFT phải mỏng ở nhiệt cao, và cách chọn màu/cấp cho ống, ống khói, lò hơi.",es:"Aglutinantes de silicona frente a cerámicos inorgánicos, por qué el DFT total debe mantenerse delgado a alta temperatura y cómo especificar colores y grados para tuberías, chimeneas y equipos de caldera.",ar:"الروابط السيليكونية مقابل السيراميك غير العضوي، ولماذا يجب أن تبقى السماكة الكلية (DFT) رقيقة عند الحرارة العالية، وكيف تحدد الألوان والدرجات للأنابيب والمداخن وغلايات المراجل."},read:{en:"4 min read",zh:"4 分钟阅读",vi:"4 phút đọc",es:"4 min de lectura",ar:"قراءة 4 دقائق"},image:"/images/news-2.jpg",body:{en:`## Two binder families, two behaviours

Single-pack silicone-based paints (aluminium or coloured) air-dry and serve continuous surfaces up to about 550 \xb0C. Inorganic ceramic-binder coatings go further — around 600 \xb0C and beyond on turbine casings and furnace equipment — but cure and application differ, so they are specified project by project rather than off the shelf.

## Why thin films survive and thick films blister

High-temperature films become slightly thermoplastic as they heat; thick films trap solvent and gas, then blister on first heat-up. Keep total DFT at roughly 25–75 μm, thin the material as the TDS directs, and never bring the film to temperature before it has fully dried (typically 24 h at 20 \xb0C).

## Rating language to check before ordering

Confirm whether the quoted figure is continuous or intermittent service, substrate steel or stainless, and whether the colour is stable at that temperature (aluminium shades are the most stable; bright organic colours degrade earlier). Ask for the grade TDS — "600 \xb0C" on a datasheet with no substrate or cycle definition is not a specification.

## Surface preparation decides the outcome

Degrease, remove salts by fresh-water washing and blast to Sa 2.5. On insulated or crevice-heavy pipework, CUI (corrosion under insulation) is the real enemy — a high-temp primer plus properly sealed cladding beats any topcoat upgrade.

## A practical ordering checklist

State operating temperature (continuous and peak), cycling severity, substrate, colour stability needs and desired recoat behaviour. We then match the silicone or ceramic grade and issue the full data sheet before you commit.`,zh:`## 两类粘结剂，两种脾气

单组份有机硅漆（铝粉或彩色）自干成膜，长期服役表面温度可到约 550 ℃。无机陶瓷粘结剂涂料走得更远——涡轮壳体、炉用设备约 600 ℃ 以上——但固化与施工方式不同，按项目逐个定，不是货架商品。

## 为什么薄膜活得、厚膜起泡

高温漆膜受热后略具热塑性；厚膜包住溶剂与气体，首次升温即鼓泡。总干膜控制在约 25–75 μm，按 TDS 适量稀释，并且漆膜彻底干燥前（通常 20 ℃ 下 24 小时）绝不带温。

## 下单前要核对的"等级语言"

确认报价数字是长期连续还是间歇温度、基材是碳钢还是不锈钢、该温度下颜色是否稳定（铝粉色最稳，鲜艳有机色更早褪变）。要等级 TDS——没有基材与循环定义的"600 ℃"不构成规格。

## 表面处理决定成败

除油、淡水洗盐、喷砂至 Sa 2.5。对有保温层或缝隙多的管道，CUI（保温层下腐蚀）才是真正的敌人——耐高温底漆加密封良好的外包层，胜过任何面漆升级。

## 实用下单清单

写明运行温度（连续与峰值）、循环剧烈程度、基材、颜色稳定性需求与重涂要求。我们据此匹配有机硅或陶瓷等级，并在你下单前出具完整数据表。`,vi:`## Hai họp keo, hai t\xednh c\xe1ch

Sơn silicone 1 th\xe0nh phần (m\xe0u nh\xf4m hoặc m\xe0u) kh\xf4 tự nhi\xean, phục vụ bề mặt li\xean tục tới ~550 \xb0C. Sơn keo ceramic v\xf4 cơ đi xa hơn — ~600 \xb0C trở l\xean tr\xean vỏ tuabin, thiết bị l\xf2 — nhưng c\xe1ch đ\xf3ng rắn v\xe0 thi c\xf4ng kh\xe1c, phải chọn theo từng dự \xe1n.

## V\xec sao m\xe0ng mỏng sống, m\xe0ng d\xe0y phồng

M\xe0ng chịu nhiệt hơi nhựa nhiệt khi n\xf2ng; m\xe0ng d\xe0y giữ dung m\xf4i v\xe0 kh\xed, phồng ở lần gia nhiệt đầu. Giữ tổng DFT khoảng 25–75 μm, pha lo\xe3ng theo TDS, v\xe0 tuyệt đối kh\xf4ng gia nhiệt trước khi m\xe0ng kh\xf4 ho\xe0n to\xe0n (thường 24 giờ ở 20 \xb0C).

## Ng\xf4n ngữ cấp nhiệt cần kiểm tra trước khi đặt h\xe0ng

X\xe1c nhận con số l\xe0 nhiệt li\xean tục hay ngắt qu\xe3ng, nền th\xe9p carbon hay kh\xf4ng gỉ, m\xe0u c\xf3 bền ở nhiệt đ\xf3 kh\xf4ng (m\xe0u nh\xf4m bền nhất; m\xe0u hữu cơ tươi phai sớm hơn). Xin TDS cấp — "600 \xb0C" kh\xf4ng k\xe8m định nghĩa nền v\xe0 chu kỳ kh\xf4ng phải l\xe0 th\xf4ng số.

## Xử l\xfd bề mặt quyết định th\xe0nh bại

Tẩy dầu, rửa muối bằng nước ngọt, phun c\xe1t Sa 2.5. Với ống c\xf3 bảo \xf4n hoặc nhiều khe, CUI (ăn m\xf2n dưới bảo \xf4n) mới l\xe0 thủ phạm — sơn l\xf3t chịu nhiệt c\xf9ng vỏ bọc k\xedn tốt hơn mọi n\xe2ng cấp lớp phủ.

## Checklist đặt h\xe0ng thực dụng

Ghi r\xf5 nhiệt độ vận h\xe0nh (li\xean tục v\xe0 đỉnh), mức độ sốc nhiệt, nền, y\xeau cầu bền m\xe0u v\xe0 sơn lại. Ch\xfang t\xf4i sẽ gh\xe9p cấp silicone hoặc ceramic v\xe0 cấp TDS đầy đủ trước khi bạn chốt đơn.`,es:`## Dos familias de aglutinantes, dos comportamientos

Las pinturas monocomponentes de base silicona (aluminio o de color) secan al aire y sirven para superficies en servicio continuo de hasta unos 550 \xb0C. Los recubrimientos inorg\xe1nicos de aglutinante cer\xe1mico van m\xe1s all\xe1 — unos 600 \xb0C o m\xe1s en carcasas de turbinas y equipos t\xe9rmicos — pero su curado y aplicaci\xf3n difieren, por lo que se especifican proyecto por proyecto y no como producto de cat\xe1logo.

## Por qu\xe9 sobreviven las pel\xedculas delgadas y se ampollan las gruesas

Las pel\xedculas de alta temperatura se vuelven ligeramente termopl\xe1sticas al calentarse; las pel\xedculas gruesas atrapan solvente y gas, y se ampollan en el primer calentamiento. Mantenga el DFT total en torno a 25–75 μm, diluya el material como indica la TDS y nunca lleve la pel\xedcula a temperatura antes de que est\xe9 totalmente seca (t\xedpicamente 24 h a 20 \xb0C).

## El lenguaje de clasificaci\xf3n que debe verificar antes de pedir

Confirme si la cifra cotizada corresponde a servicio continuo o intermitente, si el sustrato es acero al carbono o inoxidable, y si el color es estable a esa temperatura (los tonos de aluminio son los m\xe1s estables; los colores org\xe1nicos vivos se degradan antes). Pida la TDS del grado — un “600 \xb0C” en una ficha de datos sin definici\xf3n de sustrato ni de ciclo no es una especificaci\xf3n.

## La preparaci\xf3n de la superficie decide el resultado

Desengrase, elimine las sales mediante lavado con agua dulce y prepare por granallado hasta Sa 2.5. En tuber\xedas aisladas o con muchas rendijas, la CUI (corrosi\xf3n bajo aislamiento) es el verdadero enemigo — una imprimaci\xf3n para alta temperatura m\xe1s un revestimiento exterior bien sellado vence a cualquier mejora del acabado.

## Una lista de verificaci\xf3n pr\xe1ctica para pedir

Indique la temperatura de operaci\xf3n (continua y pico), la severidad de los ciclos t\xe9rmicos, el sustrato, las necesidades de estabilidad de color y el comportamiento de repintado deseado. Nosotros entonces seleccionamos el grado de silicona o cer\xe1mica y emitimos la ficha de datos completa antes de que usted se comprometa.`,ar:`## عائلتان من الروابط، وسلوكان مختلفان

الطلاءات أحادية العبوة القائمة على السيليكون (ألمنيومية أو ملونة) تجف هوائياً وتخدم الأسطح ذات الحرارة المستمرة حتى نحو 550 \xb0C. أما طلاءات الرابطة السيراميكية غير العضوية فتذهب أبعد من ذلك — نحو 600 \xb0C وما فوق على أغلفة التوربينات ومعدات الأفران — لكن تصلّبها وتطبيقها مختلفان، فتُحدَّد مشروعاً بمشروع لا كمنتج جاهز.

## لماذا تنجو الأغشية الرقيقة ويتنفّط السميك منها

الأغشية عالية الحرارة تصبح قليلة اللدونة مع التسخين؛ والأغشية السميكة تحبس المذيب والغاز فتتنفّط عند أول تشغيل حراري. حافظ على إجمالي DFT عند نحو 25–75 μm، وخفّف المادة كما توجّه ورقة TDS، ولا تعرّض الغشاء للحرارة إطلاقاً قبل جفافه الكامل (عادة 24 h عند 20 \xb0C).

## لغة التصنيف التي يجب التحقق منها قبل الطلب

تأكد مما إذا كان الرقم المذكور لخدمة مستمرة أم متقطعة، وهل الركيزة فولاذ كربوني أم فولاذ مقاوم للصدأ، وهل اللون مستقر عند تلك الحرارة (درجات الألمنيوم هي الأكثر ثباتاً؛ والألوان العضوية الزاهية تتدهور أبكر). واطلب ورقة TDS الخاصة بالدرجة — فعبارة \xab600 \xb0C\xbb في ورقة بيانات دون تعريف للركيزة أو لدورة التشغيل ليست مواصفة.

## تحضير السطح يحسم النتيجة

أزل الشحوم، وأزل الأملاح بالغسل بماء عذب، ونفّذ التنظيف بالسفح حتى Sa 2.5. وعلى الأنابيب ذات العزل الحراري أو الشقوق الكثيرة يكون التآكل تحت العزل (CUI) هو العدو الحقيقي — فبرايمر (طبقة أولى) عالي الحرارة مع غلاف خارجي محكم الإغلاق يتفوق على أي ترقية للطبقة النهائية.

## قائمة تحقق عملية للطلب

حدّد حرارة التشغيل (المستمرة والذروة)، وشدة الدورات الحرارية، والركيزة، واحتياجات ثبات اللون، وسلوك إعادة الطلاء المطلوب. وعندها نطابق لك درجة السيليكون أو السيراميك ونصدر ورقة البيانات الكاملة قبل أن تتعاقد.`}},{date:"2025-06-21",category:"Export",title:{en:"Import Documents for Coating Purchases: CO, MSDS, TDS & UN Packaging",zh:"涂料采购进口单证：CO、MSDS、TDS 与 UN 包装",vi:"Chứng từ nhập sơn: CO, MSDS, TDS & đóng gói UN",es:"Documentos de importación para compras de recubrimientos: CO, MSDS, TDS y embalaje UN",ar:"مستندات الاستيراد لمشتريات الطلاءات: CO وMSDS وTDS وتغليف UN"},excerpt:{en:"A buyer's walkthrough of the paperwork behind a coating shipment from China — what each document certifies and how to pre-check requirements with your customs broker.",zh:"中国涂料出货单证全景——每份文件证明什么、如何与报关行预核要求。",vi:"Tổng quan chứng từ lô sơn từ Trung Quốc — mỗi giấy tờ chứng minh gì và cách kiểm tra trước với đại lý hải quan.",es:"Un recorrido para el comprador por la documentación detrás de un embarque de recubrimientos desde China — qué certifica cada documento y cómo verificar previamente los requisitos con su agente de aduanas.",ar:"جولة للمشتري عبر مستندات شحنة الطلاءات من الصين — ما الذي تصادق عليه كل وثيقة وكيف تتحقق مسبقاً من المتطلبات مع مخلّصك الجمركي."},read:{en:"4 min read",zh:"4 分钟阅读",vi:"4 phút đọc",es:"4 min de lectura",ar:"قراءة 4 دقائق"},image:"/images/news-3.jpg",body:{en:`## The four documents that matter

Certificate of Origin (CO) evidences where the goods were produced and drives preferential duty under agreements such as ASEAN–China. The SDS/MSDS describes hazards, composition bands and first-aid measures — customs and your safety officer both rely on it. The TDS carries application data (mix ratio, DFT, recoat windows) and is what your applicator will actually work from. UN-certified packaging marks the drums for dangerous-goods transport.

## Paint usually ships as UN Class 3

Most solvent-borne coatings are flammable liquids (UN 1263, Class 3, PG II or III). That means UN-rated drums, correct marks and labels, and a DGD (dangerous goods declaration) on sea freight. Waterborne lines reduce this burden substantially — worth considering when destination handling is difficult.

## What to pre-check with your customs broker

HS code and duty rate for your market; whether the CO form required is FORM E (ASEAN), RCEP or generic; any import licence or registration for chemicals (for example Vietnam's chemical declaration, or EU REACH obligations for the importer); labelling language requirements; and VOC limits that apply to the product category in the destination market.

## How we prepare shipments

Each order ships with CO, SDS and TDS matching the batch, dangerous-goods packaging where required, and photos of drum marks before loading. Tell us your destination and importer details early — document mistakes cost more days at customs than sea freight costs.

## A practical tip for first-time importers

Ask for a document package (scans) before the vessel departs, and check names, HS codes and quantities against the commercial invoice line by line. Discrepancies are cheap to fix in China and expensive to fix at the destination port.`,zh:`## 四份关键文件

原产地证（CO）证明货物产地，并决定东盟—中国等协定下的优惠税率；SDS/MSDS 描述危险性、成分区间与急救措施，海关与你的安全员都依赖它；TDS 载明施工数据（配比、膜厚、重涂窗口），是施工方真正使用的文件；UN 认证包装为危险品运输标记桶身。

## 涂料通常按 UN 第 3 类出运

多数溶剂型涂料属易燃液体（UN 1263，Class 3，包装类 II 或 III）：需要 UN 级桶、正确标记标签，海运加危险品申报单（DGD）。水性产品线大幅降低这些负担——目的港操作困难时值得优先考虑。

## 与报关行预核什么

目的市场的 HS 编码与税率；CO 要 FORM E（东盟）、RCEP 还是通用格式；化学品进口是否有许可/登记（如越南的化学品申报、欧盟 REACH 对进口商的义务）；标签语言要求；以及目的市场对该品类的 VOC 限值。

## 我们的出货准备

每单随附与批次对应的 CO、SDS、TDS，按需危包，装柜前提供桶标照片。尽早就把目的港与进口商信息给我们——单证错误在海关耗掉的天数，比海运本身还贵。

## 给首次进口商的实用建议

开船前先要一套单证扫描件，逐行核对名称、HS 编码、数量与商业发票是否一致。差异在中国改很便宜，在目的港改很贵。`,vi:`## Bốn giấy tờ quan trọng

CO (Certificate of Origin) chứng minh xuất xứ, quyết định thuế ưu đ\xe3i theo hiệp định như ASEAN–Trung Quốc. SDS/MSDS m\xf4 tả nguy hại, dải th\xe0nh phần v\xe0 biện ph\xe1p sơ cứu — cả hải quan v\xe0 c\xe1n bộ an to\xe0n của bạn đều dựa v\xe0o n\xf3. TDS chứa số liệu thi c\xf4ng (tỷ lệ pha, DFT, cửa sổ sơn lại) — t\xe0i liệu thợ thi c\xf4ng thực d\xf9ng. Đ\xf3ng g\xf3i chứng nhận UN đ\xe1nh dấu th\xf9ng cho vận chuyển h\xe0ng nguy hiểm.

## Sơn thường xuất theo UN Class 3

Phần lớn sơn gốc dung m\xf4i l\xe0 chất lỏng dễ ch\xe1y (UN 1263, Class 3, PG II hoặc III): cần th\xf9ng chuẩn UN, nh\xe3n đ\xfang, v\xe0 tờ khai h\xe0ng nguy hiểm (DGD) đường biển. D\xf2ng gốc nước giảm đ\xe1ng kể g\xe1nh nặng n\xe0y — đ\xe1ng c\xe2n nhắc khi xử l\xfd tại cảng đ\xedch kh\xf3.

## Kiểm tra trước với đại l\xfd hải quan điều g\xec

M\xe3 HS v\xe0 thuế của thị trường; CO cần FORM E (ASEAN), RCEP hay mẫu thường; giấy ph\xe9p/đăng k\xfd h\xf3a chất nhập (như khai b\xe1o h\xf3a chất Việt Nam, nghĩa vụ REACH của nh\xe0 nhập EU); y\xeau cầu ng\xf4n ngữ nh\xe3n; giới hạn VOC \xe1p dụng cho nh\xf3m sản phẩm.

## Ch\xfang t\xf4i chuẩn bị g\xec cho mỗi l\xf4

Mỗi đơn k\xe8m CO, SDS, TDS khớp l\xf4 h\xe0ng, đ\xf3ng g\xf3i DG khi cần, v\xe0 ảnh nh\xe3n th\xf9ng trước khi xếp container. Cung cấp sớm th\xf4ng tin cảng đ\xedch v\xe0 người nhập — lỗi chứng từ l\xe0m hải quan tốn ng\xe0y nhiều hơn tiền vận chuyển biển.

## Mẹo cho người nhập lần đầu

Xin bộ scan chứng từ trước khi t\xe0u chạy, đối chiếu t\xean, m\xe3 HS, số lượng với h\xf3a đơn thương mại từng d\xf2ng. Sai lệch sửa ở Trung Quốc rẻ, sửa ở cảng đ\xedch rất đắt.`,es:`## Los cuatro documentos que importan

El Certificado de Origen (CO) acredita d\xf3nde se produjeron las mercanc\xedas y determina el arancel preferencial bajo acuerdos como ASEAN–China. La SDS/MSDS describe los peligros, los rangos de composici\xf3n y las medidas de primeros auxilios — la aduana y su responsable de seguridad dependen de ella. La TDS contiene los datos de aplicaci\xf3n (relaci\xf3n de mezcla, DFT, ventanas de repintado) y es el documento del que realmente partir\xe1 su aplicador. El embalaje certificado UN distingue los bidones para el transporte de mercanc\xedas peligrosas.

## La pintura normalmente se embarca como UN Clase 3

La mayor\xeda de los recubrimientos base solvente son l\xedquidos inflamables (UN 1263, Clase 3, PG II o III). Esto implica bidones con certificaci\xf3n UN, marcas y etiquetas correctas, y una DGD (declaraci\xf3n de mercanc\xedas peligrosas) en el transporte mar\xedtimo. Las l\xedneas base agua reducen sustancialmente esta carga — algo que conviene considerar cuando la manipulaci\xf3n en destino es complicada.

## Qu\xe9 verificar previamente con su agente de aduanas

El c\xf3digo HS y la tasa arancelaria de su mercado; si el formulario de CO requerido es FORM E (ASEAN), RCEP o gen\xe9rico; cualquier licencia o registro de importaci\xf3n de qu\xedmicos (por ejemplo, la declaraci\xf3n qu\xedmica de Vietnam o las obligaciones de REACH de la UE para el importador); los requisitos de idioma del etiquetado; y los l\xedmites de VOC aplicables a la categor\xeda de producto en el mercado de destino.

## C\xf3mo preparamos los embarques

Cada pedido se embarca con CO, SDS y TDS correspondientes al lote, embalaje de mercanc\xedas peligrosas cuando se requiere, y fotos de las marcas de los bidones antes de la carga. Comun\xedquenos temprano el destino y los datos del importador — los errores documentales cuestan m\xe1s d\xedas en la aduana de lo que cuesta el flete mar\xedtimo.

## Un consejo pr\xe1ctico para importadores primerizos

Pida el paquete documental (escaneos) antes de que zarpe el buque y coteje nombres, c\xf3digos HS y cantidades contra la factura comercial, l\xednea por l\xednea. Las discrepancias se corrigen barato en China y caro en el puerto de destino.`,ar:`## المستندات الأربعة التي تهم

تثبت شهادة المنشأ (CO) مكان إنتاج البضاعة وتقرر الرسوم التفضيلية بموجب اتفاقيات مثل ASEAN–China. وتصف ورقة SDS/MSDS المخاطر ونطاقات التركيب وإجراءات الإسعاف الأولي — وتعتمد عليها الجمارك ومسؤول السلامة لديك معاً. وتحمل ورقة TDS بيانات التطبيق (نسبة الخلط، DFT، نوافذ إعادة الطلاء) وهي ما سيعمل منه المطبّق فعلياً. أما التغليف المعتمد من UN فيميّز البراميل لنقل البضائع الخطرة.

## عادةً تُشحن الطلاءات بوصفها UN Class 3

معظم الطلاءات المحمّلة بالمذيبات سوائل قابلة للاشتعال (UN 1263، Class 3، PG II أو III). ويعني ذلك براميل بتصنيف UN، وعلامات وبطاقات صحيحة، وإقرار بضائع خطرة (DGD) في الشحن البحري. وتخفّف الخطوط الأساس مائي هذا العبء كثيراً — وهو أمر يستحق الدراسة عندما تكون المناولة في بلد الوجهة صعبة.

## ما تُراجعه مسبقاً مع مخلّص الجمارك

رمز HS ونسبة الرسوم لسوقك؛ وهل صيغة شهادة المنشأ المطلوبة FORM E (ASEAN) أم RCEP أم عامة؛ وأي ترخيص أو تسجيل لاستيراد الكيماويات (مثل إقرار الكيماويات في فيتنام، أو التزامات REACH الأوروبية على المستورد)؛ ومتطلبات لغة الملصقات؛ وحدود VOC السارية على فئة المنتج في سوق الوجهة.

## كيف نجهّز الشحنات

تُشحن كل عملية مع مستندات CO وSDS وTDS مطابقة للدفعة، وتغليف بضائع خطرة عند الحاجة، وصور لعلامات البراميل قبل التحميل. أعطنا مبكراً تفاصيل بلد الوجهة والمستورد — فأخطاء المستندات تستهلك لدى الجمارك أياماً أغلى من كلفة الشحن البحري نفسه.

## نصيحة عملية للمستوردين لأول مرة

اطلب حزمة المستندات (نسخاً ممسوحة ضوئياً) قبل إبحار السفينة، وراجع الأسماء ورموز HS والكميات مقابل الفاتورة التجارية سطراً سطراً. فالتناقضات رخيصة الإصلاح في الصين وغالية الإصلاح في ميناء الوجهة.`}},{date:"2025-04-10",category:"Export",title:{en:"OEM / Private-Label Coating Sourcing from China: A Practical Checklist",zh:"从中国 OEM/贴牌采购涂料：实操清单",vi:"Nhập sơn OEM / nhãn riêng từ Trung Quốc: checklist thực tế",es:"Abastecimiento de recubrimientos OEM / marca privada desde China: una lista de verificación práctica",ar:"توريد الطلاءات بعلامة OEM / الخاصة من الصين: قائمة تحقق عملية"},excerpt:{en:"From colour standards and TDS ownership to drum labelling and MOQ strategy — what to fix in writing before placing a private-label order.",zh:"从色标与 TDS 归属到桶标与 MOQ 策略——下贴牌订单前应书面敲定的事项。",vi:"Từ tiêu chuẩn màu và quyền TDS đến nhãn thùng và chiến lược MOQ — những gì cần chốt bằng văn bản trước khi đặt hàng nhãn riêng.",es:"Desde estándares de color y propiedad del TDS hasta el etiquetado de tambores y la estrategia de MOQ — lo que conviene fijar por escrito antes de hacer un pedido de marca propia.",ar:"من معايير الألوان وملكية TDS إلى وسم البراميل واستراتيجية الحد الأدنى للطلب (MOQ) — ما يجب تثبيته كتابةً قبل تقديم طلب بالعلامة الخاصة."},read:{en:"5 min read",zh:"5 分钟阅读",vi:"5 phút đọc",es:"5 min de lectura",ar:"قراءة 5 دقائق"},image:"/images/news-4.jpg",body:{en:`## Fix the colour standard, not just the number

A RAL or Pantone reference is a start, but batch-to-batch colour needs a physical master panel approved by both sides and kept for arbitration. Metallic and pearlescent effects in particular cannot be judged from a code — approve real drawdowns.

## Decide who owns the documents

Under private label, the drum carries your brand, and the TDS/SDS should be issued in your name (multilingual if you serve several markets). Agree in writing who holds the formulation data, who signs the documents, and what happens if either party exits the arrangement.

## Drum labels: artwork, language, law

Label artwork (AI/PDF, print colour separation), language sets, hazard pictograms and batch-number format should all be approved before the first production. Some markets require importer identity or local regulatory text on the label — collect these requirements once and reuse them.

## MOQ and trial strategy

Low-MOQ private label (200 kg scale with mixed tones) exists to let you trial the market without a container of risk. Run one trial batch, test it in real field conditions, then scale. Fix in writing that the formulation stays unchanged when the order size grows.

## QC and exit clauses

Batch QC report with every shipment, retained samples per batch, third-party pre-shipment testing when the market demands it — and an exit clause covering plates, labels and formulation confidentiality. The cheapest quote without these terms is the most expensive mistake.`,zh:`## 锁定色标，而不只是色号

RAL/Pantone 色号只是起点：批次间颜色稳定，需要双方签认的实物标准板留档仲裁。金属色、珠光效果尤其无法凭色号判断——必须签认实刮样。

## 讲清楚文件归谁

贴牌模式下桶身是你的品牌，TDS/SDS 也应以你的名义出具（多市场就多语言）。书面约定：配方数据归谁、文件谁来签、合作终止时怎么处理。

## 桶标：稿、语言、法规

首次生产前敲定标签稿件（AI/PDF、印刷分色）、语言版本、危险品象形图与批号格式。有些市场要求标签带进口商信息或本地法规文本——一次性收齐这些要求，反复复用。

## MOQ 与试单策略

低起订贴牌（200 kg 级、可混色）的意义就是让你用一托盘的风险试市场。先跑一批试单，在真实工况验证，再放大。并书面固定：放大订单时配方不变。

## 质检与退出条款

每批随货质检报告、每批留样、市场需要时安排第三方装运前检测——再加一条退出条款，覆盖印版、标签与配方保密。没有这些条款的最低报价，是最贵的错误。`,vi:`## Chốt ti\xeau chuẩn m\xe0u, kh\xf4ng chỉ m\xe3 m\xe0u

M\xe3 RAL/Pantone chỉ l\xe0 khởi đầu: m\xe0u ổn định giữa c\xe1c l\xf4 cần bảng mẫu vật l\xfd được hai b\xean duyệt v\xe0 lưu l\xe0m trọng t\xe0i. Hiệu ứng kim loại/ngọc trai đặc biệt kh\xf4ng thể đ\xe1nh gi\xe1 qua m\xe3 — phải duyệt mẫu qu\xe9t thật.

## R\xf5 r\xe0ng ai sở hữu hồ sơ

Dưới nh\xe3n ri\xeang, th\xf9ng mang thương hiệu bạn, TDS/SDS n\xean ph\xe1t h\xe0nh dưới t\xean bạn (đa ngữ nếu phục vụ nhiều thị trường). Thỏa thuận bằng văn bản: dữ liệu c\xf4ng thức thuộc ai, ai k\xfd hồ sơ, xử l\xfd ra sao khi một b\xean dừng hợp t\xe1c.

## Nh\xe3n th\xf9ng: file, ng\xf4n ngữ, ph\xe1p l\xfd

Chốt trước sản xuất đầu: file nh\xe3n (AI/PDF, t\xe1ch m\xe0u in), bộ ng\xf4n ngữ, pictogram nguy hiểm v\xe0 định dạng số l\xf4. Một số thị trường bắt buộc t\xean người nhập hoặc nội dung ph\xe1p l\xfd địa phương tr\xean nh\xe3n — gom y\xeau cầu một lần, d\xf9ng lại nhiều lần.

## Chiến lược MOQ v\xe0 đơn thử

Nh\xe3n ri\xeang MOQ thấp (cỡ 200 kg, phối m\xe0u hỗn hợp) tồn tại để bạn thử thị trường với rủi ro một pallet. Chạy một l\xf4 thử, kiểm chứng điều kiện thực tế, rồi mở rộng. Cam kết bằng văn bản: c\xf4ng thức kh\xf4ng đổi khi đơn lớn.

## QC v\xe0 điều khoản tho\xe1t

B\xe1o c\xe1o QC mỗi l\xf4, lưu mẫu từng l\xf4, thử nghiệm b\xean thứ ba trước giao khi thị trường y\xeau cầu — c\xf9ng điều khoản tho\xe1t về bản in, nh\xe3n v\xe0 bảo mật c\xf4ng thức. B\xe1o gi\xe1 rẻ nhất m\xe0 thiếu c\xe1c điều khoản n\xe0y l\xe0 sai lầm đắt nhất.`,es:`## Fije el est\xe1ndar de color, no solo el n\xfamero

Una referencia RAL o Pantone es un punto de partida, pero la uniformidad de color entre lotes exige un panel patr\xf3n f\xedsico aprobado por ambas partes y conservado para arbitraje. Los efectos met\xe1licos y perlados, en particular, no pueden juzgarse a partir de un c\xf3digo — apruebe extensiones de muestra reales.

## Decida de qui\xe9n son los documentos

Bajo marca privada, el bid\xf3n lleva su marca y la TDS/SDS debe emitirse a su nombre (en varios idiomas si atiende varios mercados). Acuerde por escrito qui\xe9n conserva los datos de la formulaci\xf3n, qui\xe9n firma los documentos y qu\xe9 sucede si alguna de las partes da por terminado el acuerdo.

## Etiquetas de bid\xf3n: arte, idioma y ley

El arte de la etiqueta (AI/PDF, separaci\xf3n de color de impresi\xf3n), los juegos de idiomas, los pictogramas de peligro y el formato del n\xfamero de lote deben aprobarse todos antes de la primera producci\xf3n. Algunos mercados exigen la identidad del importador o texto regulatorio local en la etiqueta — recopile estos requisitos una sola vez y reutil\xedcelos.

## MOQ y estrategia de prueba

La marca privada con MOQ baja (escala de 200 kg con tonos mezclados) existe para que pruebe el mercado sin el riesgo de un contenedor completo. Ejecute un lote de prueba, val\xeddelo en condiciones reales de campo y luego escale. Fije por escrito que la formulaci\xf3n se mantiene sin cambios cuando crezca el tama\xf1o del pedido.

## QC y cl\xe1usulas de salida

Informe de QC por lote con cada embarque, muestras retenidas por lote, ensayos de terceros previos al embarque cuando el mercado lo exige — y una cl\xe1usula de salida que cubra planchas de impresi\xf3n, etiquetas y confidencialidad de la formulaci\xf3n. La cotizaci\xf3n m\xe1s barata sin estos t\xe9rminos es el error m\xe1s caro.`,ar:`## ثبّت معيار اللون، لا الرقم فقط

مرجع RAL أو Pantone بداية، لكن ثبات اللون بين الدفعات يحتاج لوحة معيارية مادية يعتمدها الطرفان وتُحفظ للتحكيم. والتأثيرات المعدنية واللؤلؤية على وجه الخصوص لا يمكن الحكم عليها من رمز — اعتمد عينات مدهونة فعلية.

## قرارٌ في مَن يملك المستندات

في نظام العلامة الخاصة يحمل البرميل علامتك التجارية، وينبغي أن تصدر ورقتا TDS/SDS باسمك (وبلغات متعددة إذا كنت تخدم أسواقاً عدة). اتفق كتابياً على من يحتفظ ببيانات التركيبة، ومن يوقّع المستندات، وما يحدث إذا أنهى أي من الطرفين الترتيب.

## ملصقات البراميل: التصميم واللغة والقانون

ينبغي اعتماد تصميم الملصق (AI/PDF، وفصل ألوان الطباعة)، ومجموعات اللغات، ورموز المخاطر (pictograms)، وتنسيق رقم الدفعة — كلها قبل أول إنتاج. وبعض الأسواق تشترط هوية المستورد أو نصاً تنظيمياً محلياً على الملصق — اجمع هذه المتطلبات مرة واحدة وأعد استخدامها.

## الحد الأدنى للطلب واستراتيجية التجربة

وُجدت العلامة الخاصة ذات الحد الأدنى المنخفض للطلب (بمقياس 200 kg مع ألوان مختلطة) لتجربة السوق دون مخاطرة حاوية كاملة. نفّذ دفعة تجريبية واحدة، واختبرها في ظروف ميدانية حقيقية، ثم وسّع النطاق. وثبّت كتابياً أن التركيبة تبقى دون تغيير عندما يكبر حجم الطلب.

## مراقبة الجودة وبنود الخروج

تقرير مراقبة جودة للدفعة مع كل شحنة، وعينات محفوظة من كل دفعة، واختبار طرف ثالث قبل الشحن عندما يفرضه السوق — إضافة إلى بند خروج يغطي ألواح الطباعة والملصقات وسرية التركيبة. فأرخص عرض سعر من دون هذه الشروط هو أغلى خطأ.`}},{date:"2025-02-15",category:"Industry",title:{en:"How Low-VOC Formulations Are Reshaping Industrial Coatings",zh:"低 VOC 配方如何重塑工业涂料",vi:"Công thức VOC thấp đang định hình lại sơn công nghiệp",es:"Cómo las formulaciones de bajo VOC están transformando los recubrimientos industriales",ar:"كيف تعيد تركيبات VOC المنخفض تشكيل صناعة الطلاءات الصناعية"},excerpt:{en:"An engineering briefing on how waterborne and high-solids chemistries maintain performance while meeting tightening environmental regulations across markets.",zh:"探讨水性及高固含配方如何在各市场环保法规趋严下保持性能的工程简报。",vi:"Tài liệu về công thức gốc nước và hàm lượng rắn cao duy trì hiệu suất trong bối cảnh quy định môi trường khắt khe.",es:"Una nota técnica sobre cómo las químicas base agua y de altos sólidos mantienen el rendimiento mientras cumplen las regulaciones ambientales cada vez más estrictas en distintos mercados.",ar:"إحاطة هندسية حول كيفية احتفاظ التركيبات الأساس المائي وعالية المواد الصلبة بأدائها مع الالتزام بالتشريعات البيئية المتشددة في مختلف الأسواق."},read:{en:"6 min read",zh:"6 分钟阅读",vi:"6 phút đọc",es:"6 min de lectura",ar:"قراءة 6 دقائق"},image:"/images/news-6.jpg",body:{en:`## Regulation moves faster than habit

VOC limits now bite across major markets — the EU's decorative and industrial paint directives, China's GB standards for industrial protective coatings, and tightening rules across Southeast Asia and the Gulf. Buyers who specify by habit ("always solvent-borne") are quietly losing projects to compliant alternatives.

## Two routes to compliance

Waterborne systems (acrylic, epoxy, PU dispersions) cut solvent almost entirely and excel indoors — floors in occupied plants, interior emulsions, electrical-room floors. High-solids solvent-borne epoxies (up to 100 % solids in self-leveling floors) take the outdoor and heavy-duty duties where waterborne cure is slow or water sensitivity matters.

## Where the trade-offs really are

Waterborne wants cleaner surfaces and narrower temperature/humidity windows; high-solids products shorten pot life. Both are solved by specification discipline — surface prep, batch planning, climate awareness — not by chemistry miracles. Modern waterborne anti-corrosion primers already hold C3–C4 duties with zinc-phosphate chemistry.

## Specifying low-VOC without losing performance

Ask for the VOC figure per litre of ready-to-use paint (thinned), not per kg. Match the chemistry to exposure: waterborne indoors and on concrete, high-solids epoxy for steel immersion and heavy industry. Demand the same documentation you always would — batch TDS, QC report, and test data for the specific system.

## What we supply

Waterborne epoxy floor and anti-corrosion lines, waterborne acrylic and fluorocarbon finishes, and high-solids/100 % solids self-leveling systems — each with batch TDS quoting the actual VOC class.`,zh:`## 法规跑在习惯前面

主要市场的 VOC 限值已全面收紧——欧盟装饰与工业涂料指令、中国工业防护涂料 GB 标准、东南亚与中东的持续加码。仍按老习惯指定"油性"的采购方，正悄悄把项目输给合规替代品。

## 合规的两条路

水性体系（丙烯酸、环氧、PU 分散体）几乎完全去掉溶剂，室内表现极佳——有人作业的厂房地坪、内墙乳胶漆、电房地板。高固含油性环氧（自流平最高 100% 固含）承担室外与重载工况——这些场合水性固化慢或耐水性受限。

## 取舍到底在哪

水性要求更干净的基面与更窄的温湿度窗口；高固含缩短适用期。两者都靠规范纪律解决——表面处理、批次计划、气候意识——不靠化学奇迹。现代水性防腐底漆以磷酸锌技术已能承担 C3–C4 工况。

## 既要低 VOC 又不丢性能

要求供应商报"施工态每升"的 VOC（含稀释），而不是每公斤。按曝露环境选化学路线：室内与混凝土用水性，钢结构浸没与重工业用高固含环氧。文件照常要足——批次 TDS、质检报告与具体体系的检测数据。

## 我们供应什么

水性环氧地坪与防腐线、水性丙烯酸与氟碳面漆、高固含/100% 固含自流平体系——每个批次 TDS 都注明实际 VOC 等级。`,vi:`## Quy định chạy nhanh hơn th\xf3i quen

Giới hạn VOC đ\xe3 siết khắp c\xe1c thị trường lớn — chỉ thị sơn trang tr\xed v\xe0 c\xf4ng nghiệp của EU, ti\xeau chuẩn GB của Trung Quốc cho sơn bảo vệ c\xf4ng nghiệp, v\xe0 c\xe1c quy định đang chặt th\xeam ở Đ\xf4ng Nam \xc1 v\xe0 Trung Đ\xf4ng. Người mua vẫn chọn "gốc dầu" theo th\xf3i quen đang \xe2m thầm mất dự \xe1n v\xe0o tay sản phẩm hợp quy.

## Hai con đường hợp quy

Hệ gốc nước (acrylic, epoxy, ph\xe2n t\xe1n PU) cắt gần hết dung m\xf4i, vượt trội trong nh\xe0 — s\xe0n nh\xe0 xưởng đang vận h\xe0nh, sơn nội thất, s\xe0n ph\xf2ng điện. Epoxy gốc dầu h\xe0m lượng rắn cao (tự chảy tới 100 % rắn) g\xe1nh việc ngo\xe0i trời v\xe0 hạng nặng — nơi gốc nước kh\xf4 chậm hoặc nhạy nước.

## Đ\xe1nh đổi thật sự ở đ\xe2u

Gốc nước cần bề mặt sạch hơn v\xe0 cửa sổ nhiệt độ/độ ẩm hẹp hơn; h\xe0m lượng rắn cao r\xfat ngắn pot life. Cả hai đều giải quyết bằng kỷ luật specs — xử l\xfd bề mặt, kế hoạch l\xf4, \xfd thức kh\xed hậu — kh\xf4ng phải ph\xe9p m\xe0u h\xf3a học. Sơn l\xf3t chống ăn m\xf2n gốc nước hiện đại với h\xf3a chất photphat kẽm đ\xe3 g\xe1nh được m\xf4i trường C3–C4.

## Chọn VOC thấp m\xe0 kh\xf4ng mất hiệu suất

Y\xeau cầu nh\xe0 cung cấp b\xe1o VOC theo "mỗi l\xedt sơn sẵn s\xe0ng thi c\xf4ng" (đ\xe3 pha), kh\xf4ng phải mỗi kg. Chọn h\xf3a học theo m\xf4i trường: gốc nước cho trong nh\xe0 v\xe0 b\xea t\xf4ng, epoxy rắn cao cho th\xe9p ng\xe2m v\xe0 c\xf4ng nghiệp nặng. Hồ sơ vẫn phải đủ — TDS l\xf4, b\xe1o c\xe1o QC v\xe0 số liệu thử của hệ cụ thể.

## Ch\xfang t\xf4i cung cấp g\xec

D\xf2ng s\xe0n v\xe0 chống ăn m\xf2n epoxy gốc nước, sơn phủ acrylic v\xe0 fluorocarbon gốc nước, hệ tự chảy rắn cao/100 % — mỗi TDS l\xf4 đều ghi r\xf5 cấp VOC thực tế.`,es:`## La regulaci\xf3n avanza m\xe1s r\xe1pido que la costumbre

Los l\xedmites de VOC ya se dejan sentir en los principales mercados — las directivas europeas de pinturas decorativas e industriales, las normas GB de China para recubrimientos industriales de protecci\xf3n y las reglas cada vez m\xe1s estrictas del Sudeste Asi\xe1tico y el Golfo. Los compradores que especifican por costumbre (“siempre base solvente”) est\xe1n perdiendo proyectos en silencio frente a alternativas conformes.

## Dos rutas hacia el cumplimiento

Los sistemas base agua (acr\xedlicos, epoxi, dispersiones de PU) eliminan casi por completo el solvente y sobresalen en interiores — pisos de plantas en operaci\xf3n, emulsiones interiores, pisos de salas el\xe9ctricas. Los epoxi base solvente de altos s\xf3lidos (hasta 100 % de s\xf3lidos en pisos autonivelantes) asumen los servicios exteriores y de servicio pesado, donde el curado base agua es lento o importa la sensibilidad al agua.

## D\xf3nde est\xe1n realmente las contrapartidas

Los sistemas base agua exigen superficies m\xe1s limpias y ventanas de temperatura/humedad m\xe1s estrechas; los productos de altos s\xf3lidos acortan la vida \xfatil de la mezcla. Ambos problemas se resuelven con disciplina de especificaci\xf3n — preparaci\xf3n de superficie, planificaci\xf3n de lotes, conciencia del clima — no con milagros de la qu\xedmica. Las imprimaciones anticorrosivas modernas base agua ya cubren servicios C3–C4 con qu\xedmica de fosfato de zinc.

## Especificar bajo VOC sin perder desempe\xf1o

Exija la cifra de VOC por litro de pintura lista para usar (diluida), no por kg. Ajuste la qu\xedmica a la exposici\xf3n: base agua en interiores y sobre concreto, epoxi de altos s\xf3lidos para inmersi\xf3n de acero e industria pesada. Exija la misma documentaci\xf3n de siempre — TDS del lote, informe de QC y datos de ensayo del sistema espec\xedfico.

## Qu\xe9 suministramos

L\xedneas epoxi base agua para pisos y anticorrosivas, acabados acr\xedlicos y fluorocarbonados base agua, y sistemas autonivelantes de altos s\xf3lidos/100 % s\xf3lidos — cada uno con la TDS de lote indicando la clase de VOC real.`,ar:`## التنظيم يتحرك أسرع من العادة

حدود VOC تعضّ الآن في الأسواق الكبرى — توجيهات الاتحاد الأوروبي للطلاءات الزخرفية والصناعية، ومعايير GB الصينية للطلاءات الصناعية الواقية، والقواعد المتشددة في جنوب شرق آسيا والخليج. والمشترون الذين يحددون مواصفاتهم بحكم العادة (\xabمحمّل بالمذيبات دائماً\xbb) يخسرون مشاريع بصمت لصالح البدائل الممتثلة.

## طريقان إلى الامتثال

الأنظمة الأساس مائي (أكريليك، إيبوكسي، مشتتات PU) تقلّص المذيب إلى حدٍّ يكاد يكون كاملاً وتتفوق في الداخل — أرضيات مصانع عاملة، ومستحلبات داخلية، وأرضيات غرف الكهرباء. أما الإيبوكسي المحمّل بالمذيبات مرتفع المواد الصلبة (حتى 100 % مواد صلبة في الأرضيات ذاتية التسوية) فيتولى مهام الخارج والخدمة الثقيلة حيث يكون تصلّب الأساس مائي بطيئاً أو تكون حساسية الماء مهمة.

## أين تقع المقايضات فعلاً

الأنظمة الأساس مائي تريد أسطحاً أنظف ونوافذ أضيق للحرارة والرطوبة؛ والمنتجات مرتفعة المواد الصلبة تقصّر العمر الاستخدامي للخليط. وكلاهما يُحلّ بانضباط المواصفات — تحضير السطح، وتخطيط الدفعات، والوعي بالمناخ — لا بمعجزات كيميائية. فبرايمرات (طبقات أولى) مكافحة التآكل الأساس مائي الحديثة تؤدي بالفعل مهام C3–C4 بكيمياء فوسفات الزنك.

## تحديد مواصفات VOC منخفض دون خسارة الأداء

اطلب رقم VOC لكل لتر من الطلاء الجاهز للاستخدام (بعد التخفيف)، لا لكل kg. وطابق الكيمياء مع التعرض: أساس مائي في الداخل وعلى الخرسانة، وإيبوكسي مرتفع المواد الصلبة لغمر الفولاذ والصناعات الثقيلة. واطلب المستندات نفسها التي تطلبها دائماً — ورقة TDS للدفعة، وتقرير مراقبة الجودة، وبيانات اختبار النظام المحدد.

## ما نورّده

خطوط أرضيات ومكافحة تآكل من الإيبوكسي الأساس مائي، وطلاءات نهائية أكريليك وفلوروكربون أساس مائي، وأنظمة ذاتية التسوية مرتفعة المواد الصلبة/بنسبة 100 % مواد صلبة — وكل منها بورقة TDS للدفعة تذكر فئة VOC الفعلية.`}},{date:"2024-11-30",category:"Industry",title:{en:"Epoxy Floors: Self-Leveling vs Roll-Coat for Warehouses",zh:"环氧地坪：仓库选自流平还是平涂",vi:"Sàn epoxy: tự chảy hay lăn cho nhà kho",es:"Pisos epoxi: autonivelante o de rodillo para almacenes",ar:"أرضيات الإيبوكسي: ذاتي التسوية أم طلاء بالرولر للمستودعات؟"},excerpt:{en:"Build, budget and traffic compared: when 2–3 mm self-leveling pays off, and where 90 μm roll-coat systems are the smarter specification.",zh:"膜厚、预算与交通量对比：何时 2–3 mm 自流平物有所值，何时 90 μm 平涂才是更聪明的选择。",vi:"So sánh độ dày, ngân sách và tải: khi nào tự chảy 2–3 mm đáng tiền, khi nào hệ lăn 90 μm là lựa chọn thông minh hơn.",es:"Comparativa de espesor, presupuesto y tráfico: cuándo vale la pena un autonivelante de 2–3 mm y dónde un sistema a rodillo de 90 μm es la especificación más inteligente.",ar:"مقارنة السماكة والميزانية وحركة المرور: متى تستحق الأرضية ذاتية التسوية بسماكة 2–3 مم كلفتها، ومتى يكون نظام الرولر بسماكة 90 μm هو الخيار الأذكى."},read:{en:"4 min read",zh:"4 分钟阅读",vi:"4 phút đọc",es:"4 min de lectura",ar:"قراءة 4 دقائق"},image:"/images/news-5.jpg",body:{en:`## The two systems in one sentence

Roll-coat (thin-film) epoxy builds around 90 μm per two-coat application — a hard, sealed, easy-clean surface for light-to-medium traffic. Self-leveling epoxy is a 2–3 mm solvent-free screed with a smooth, seamless gloss surface that takes forklifts, pallet jacks and chemical spills for years.

## When self-leveling pays off

Heavy or constant forklift traffic, steel-wheeled loads, exposed aggregate risk, wet-process areas, or showrooms where the floor IS the interior. The 2–3 mm build absorbs impact that would punch through thin films, and its 100 % solids chemistry means no solvent smell during application in operating plants.

## When roll-coat is the smarter call

Dry storage, light foot and trolley traffic, mezzanine slabs, or budgets that must cover more square metres. A sealer + two-roll-coat system at a fraction of the cost still delivers a dust-free, washable floor — and is easy to patch and re-coat in sections.

## The part both systems share: the slab

Moisture content below 10 % and pH below 10, proper cure (new slabs about 28 days), grinding or shot-blasting to remove laitance, and an epoxy sealing primer before anything else. Skimping on slab preparation is why floors fail — no product choice fixes a wet, soft or unsealed substrate.

## Timelines to plan around

Roll-coat: recoatable within 8–24 h, full chemical cure 7 days. Self-leveling: foot traffic ~24–36 h, full cure 7 days. Optional PU clear sealer adds scratch and UV behaviour where trolleys or daylight matter.`,zh:`## 一句话讲清两个体系

平涂（薄涂）环氧两道施工约 90 μm 干膜——一个坚硬、封闭、易清洁的表面，适合轻中度交通。自流平环氧是 2–3 mm 无溶剂砂浆式流展层，表面平滑无缝镜面，能扛叉车、托盘车与化学品泼溅多年。

## 什么时候自流平值回票价

重载或频繁叉车、钢轮载荷、骨料外露风险、湿作业区，以及"地面即门面"的展厅。2–3 mm 膜厚吸收薄涂会被击穿的冲击；100% 固含配方意味着在产厂房施工也无溶剂气味。

## 什么时候平涂更聪明

干燥仓储、轻行人/手推车、夹层楼板，或预算需要覆盖更多平方米。封闭底漆+两道平涂的成本只是零头，照样交付无尘可冲洗的地坪，而且分区补涂翻新都容易。

## 两个体系共同的命门：混凝土板

含水率低于 10%、pH 低于 10、充分养护（新板约 28 天）、打磨/抛丸除浮浆、先上环氧封闭底漆。地面失效十有八九省在基层处理——潮湿、松软、未封闭的基层，换什么产品都救不回来。

## 排期参考

平涂：8–24 小时可重涂，7 天完全耐化学品。自流平：约 24–36 小时上人，7 天完全固化。有手推车或日晒的场合，加一道聚氨酯罩面可提升耐刮与耐候。`,vi:`## Một c\xe2u n\xf3i r\xf5 hai hệ

Epoxy lăn (m\xe0ng mỏng) hai lớp cỡ 90 μm DFT — bề mặt cứng, k\xedn, dễ vệ sinh cho tải nhẹ đến trung b\xecnh. Epoxy tự chảy l\xe0 lớp rải 2–3 mm kh\xf4ng dung m\xf4i, bề mặt phẳng liền mạch như gương, chịu xe n\xe2ng, xe pallet v\xe0 h\xf3a chất đổ nhiều năm.

## Khi n\xe0o tự chảy đ\xe1ng tiền

Xe n\xe2ng nặng hoặc li\xean tục, tải b\xe1nh th\xe9p, nguy cơ lộ cốt liệu, khu ướt, hoặc showroom nơi s\xe0n ch\xednh l\xe0 bộ mặt. Độ d\xe0y 2–3 mm hấp thụ va đập xuy\xean thủng m\xe0ng mỏng; h\xf3a học 100 % rắn nghĩa l\xe0 kh\xf4ng m\xf9i dung m\xf4i khi thi c\xf4ng trong nh\xe0 xưởng đang chạy.

## Khi n\xe0o lăn th\xf4ng minh hơn

Kho kh\xf4, người/xe đẩy nhẹ, s\xe0n tầng lửng, hoặc ng\xe2n s\xe1ch phải phủ nhiều m\xb2 hơn. Hệ kh\xf3a + hai lớp lăn với chi ph\xed bằng một phần vẫn cho s\xe0n kh\xf4ng bụi, rửa được — v\xe0 dễ v\xe1, sơn lại từng khu.

## Điểm chung quyết định: mặt b\xea t\xf4ng

Độ ẩm dưới 10 %, pH dưới 10, dưỡng đủ (b\xea t\xf4ng mới ~28 ng\xe0y), m\xe0i/phun bi tếch lớp mủ, v\xe0 sơn l\xf3t kh\xf3a epoxy trước ti\xean. S\xe0n hỏng ch\xedn phần mười v\xec tiết kiệm kh\xe2u nền — nền ướt, mềm, kh\xf4ng kh\xf3a th\xec sản phẩm n\xe0o cũng b\xf3 tay.

## Tiến độ tham khảo

Lăn: sơn lại sau 8–24 giờ, chịu h\xf3a chất ho\xe0n to\xe0n 7 ng\xe0y. Tự chảy: đi lại ~24–36 giờ, đ\xf3ng rắn 7 ng\xe0y. C\xf3 xe đẩy hoặc nắng chiếu, th\xeam một lớp phủ trong PU để chống xước v\xe0 chịu tia UV.`,es:`## Los dos sistemas en una frase

El epoxi de aplicaci\xf3n a rodillo (pel\xedcula delgada) logra unos 90 μm por aplicaci\xf3n de dos capas — una superficie dura, sellada y de f\xe1cil limpieza para tr\xe1nsito ligero a medio. El epoxi autonivelante es una capa de 2–3 mm sin solvente, tipo mortero, con una superficie lisa, continua y brillante que soporta montacargas, transpaletas y derrames qu\xedmicos durante a\xf1os.

## Cu\xe1ndo vale la pena el autonivelante

Tr\xe1nsito pesado o constante de montacargas, cargas con ruedas de acero, riesgo de agregado expuesto, zonas de proceso h\xfamedo, o salas de exhibici\xf3n donde el piso ES el interior. El espesor de 2–3 mm absorbe impactos que atravesar\xedan una pel\xedcula delgada, y su qu\xedmica de 100 % s\xf3lidos significa ausencia de olor a solvente durante la aplicaci\xf3n en plantas en operaci\xf3n.

## Cu\xe1ndo el sistema a rodillo es la decisi\xf3n inteligente

Almacenamiento seco, tr\xe1nsito peatonal ligero y de carritos, losas de entrepiso, o presupuestos que deben cubrir m\xe1s metros cuadrados. Un sistema de sellador + dos capas a rodillo, por una fracci\xf3n del costo, entrega igualmente un piso sin polvo y lavable — y es f\xe1cil de reparar y repintar por secciones.

## Lo que ambos sistemas comparten: la losa

Contenido de humedad inferior a 10 % y pH inferior a 10, curado adecuado (losas nuevas unos 28 d\xedas), esmerilado o granallado para eliminar la lechada, y una imprimaci\xf3n epoxi de sellado antes que nada. Recortar en la preparaci\xf3n de la losa es la raz\xf3n por la que fallan los pisos — ninguna elecci\xf3n de producto arregla un sustrato h\xfamedo, blando o sin sellar.

## Plazos para planificar

A rodillo: repintable en 8–24 h, curado qu\xedmico completo en 7 d\xedas. Autonivelante: tr\xe1nsito peatonal a las ~24–36 h, curado completo en 7 d\xedas. Un sellador transparente de PU opcional mejora la resistencia al rayado y a los UV donde importan los carritos o la luz del d\xeda.`,ar:`## النظامان في جملة واحدة

الإيبوكسي بالرولر (الغشاء الرقيق) يبني نحو 90 μm في تطبيق من طبقتين — سطح صلب مختوم سهل التنظيف لمرور خفيف إلى متوسط. أما الإيبوكسي ذاتي التسوية فطبقة مونة خالية من المذيبات بسماكة 2–3 mm بسطح أملس لامع بلا فواصل يتحمل الرافعات الشوكية وعربات المنصات وانسكابات الكيماويات لسنوات.

## متى يستحق ذاتي التسوية كلفته

المرور الشديد أو المستمر للرافعات الشوكية، والأحمال ذات العجلات الفولاذية، وخطر تعرّض الركام، ومناطق العمليات الرطبة، أو صالات العرض حيث الأرضية هي الفراغ الداخلي نفسه. فسماكة 2–3 mm تمتص الصدمات التي تثقب الأغشية الرقيقة، وكيمياؤها بنسبة 100 % مواد صلبة تعني انعدام رائحة المذيب أثناء التطبيق داخل مصانع قيد التشغيل.

## متى يكون الطلاء بالرولر الخيار الأذكى

التخزين الجاف، والمرور الخفيف للمشاة وعربات اليد، وبلاطات الميزانين، أو الميزانيات التي يجب أن تغطي أمتاراً مربعة أكثر. فنظام ختم + طبقتين بالرولر بجزء يسير من الكلفة يسلّم أيضاً أرضية بلا غبار وقابلة للغسل — ويسهل ترقيعها وإعادة طلائها قطاعاً قطاعاً.

## القسم المشترك بين النظامين: البلاطة الخرسانية

محتوى رطوبة دون 10 % وpH دون 10، وتصلّب كافٍ (البلاطات الجديدة نحو 28 يوماً)، وجلي أو سفح كريّ لإزالة القشرة السطحية الناعمة، وبرايمر (طبقة أولى) إيبوكسي سادّ قبل أي شيء آخر. فالتفريط في تحضير البلاطة هو سبب فشل الأرضيات — ما من اختيار منتج يعالج ركيزة رطبة أو طرية أو غير مختومة.

## جداول زمنية للتخطيط

بالرولر: قابل لإعادة الطلاء خلال 8–24 h، والتصلد الكيميائي الكامل 7 أيام. ذاتي التسوية: سير المشاة خلال نحو 24–36 h، والتصلد الكامل 7 أيام. ويضيف ختم PU شفاف اختياري تحسيناً في مقاومة الخدش والأشعة فوق البنفسجية حيث تهم عربات اليد أو ضوء النهار.`}}],ea=[{q:{en:"What is your Minimum Order Quantity (MOQ)?",zh:"起订量（MOQ）是多少？",vi:"Số lượng đặt tối thiểu (MOQ) là bao nhiêu?",es:"¿Cuál es su cantidad mínima de pedido (MOQ)?",ar:"ما الحد الأدنى لكمية الطلب (MOQ) لديكم؟"},a:{en:"Standard MOQ is 200 kg. Mixed tones within the same product family are accepted — suitable for distributor trial orders. Sample quantities can be arranged quickly.",zh:"标准起订量为 200 公斤。同系列产品接受混色，适合经销商试单。样品可快速安排。",vi:"MOQ tiêu chuẩn 200 kg. Nhận phối màu hỗn hợp cùng dòng — phù hợp đơn thử nghiệm nhà phân phối. Mẫu có thể bố trí nhanh.",es:"La MOQ estándar es de 200 kg. Se aceptan tonos mezclados dentro de la misma familia de productos — apto para pedidos de prueba de distribuidores. Las cantidades de muestra pueden gestionarse rápidamente.",ar:"الحد الأدنى القياسي للطلب هو 200 kg. تُقبل الألوان المختلطة ضمن عائلة المنتج نفسها — بما يناسب أوامر تجربة الموزعين. ويمكن ترتيب كميات العينات بسرعة."}},{q:{en:"How fast can you deliver a custom formulation or colour sample?",zh:"定制配方或调色样品多久能交付？",vi:"Mẫu phối chế hoặc pha màu giao trong bao lâu?",es:"¿Con qué rapidez pueden entregar una formulación o muestra de color personalizada?",ar:"ما مدى سرعة تسليمكم تركيبة مخصصة أو عينة لون؟"},a:{en:"Custom colour matching and formulation samples are typically ready within 7–15 days depending on complexity; we confirm the exact schedule with your inquiry.",zh:"调色与配方样品视复杂度通常 7–15 天内完成；询盘时我们会确认具体时间表。",vi:"Mẫu pha màu và phối chế thường trong 7–15 ngày tùy độ phức tạp; lịch chính xác xác nhận khi nhận yêu cầu.",es:"La igualación de color a medida y las muestras de formulación están listas normalmente en 7–15 días según la complejidad; confirmamos el cronograma exacto con su consulta.",ar:"تكون مطابقة الألوان المخصصة وعينات التركيبات جاهزة عادة خلال 7–15 يوماً بحسب التعقيد؛ ونؤكد الجدول الزمني الدقيق عند استفسارك."}},{q:{en:"Which certifications and export documents do you provide?",zh:"你们提供哪些认证与出口单证？",vi:"Các chứng nhận và chứng từ xuất khẩu nào được cung cấp?",es:"¿Qué certificaciones y documentos de exportación proporcionan?",ar:"ما الشهادات ومستندات التصدير التي تقدمونها؟"},a:{en:"Products come from ISO 9001:2015 certified production with CE-marked lines and REACH-aligned documentation; SGS test reports for the specific system are available on request. Export documents include CO, MSDS, TDS and UN/DG packaging as required by the destination market.",zh:"产品出自 ISO 9001:2015 认证工厂，含 CE 产品线与对齐 REACH 的文件；可按需提供适用体系的 SGS 检测报告。出口单证含 CO、MSDS、TDS 及目的国要求的 UN 危包。",vi:"Sản phẩm từ nhà máy ISO 9001:2015, dòng CE và hồ sơ theo REACH; báo cáo SGS cho hệ cụ thể theo yêu cầu. Chứng từ gồm CO, MSDS, TDS và đóng gói UN/DG theo thị trường nhập.",es:"Los productos provienen de producción certificada ISO 9001:2015, con líneas con marcado CE y documentación alineada con REACH; los informes de ensayo SGS del sistema específico están disponibles a pedido. Los documentos de exportación incluyen CO, MSDS, TDS y embalaje UN/DG según lo exigido por el mercado de destino.",ar:"تأتي المنتجات من إنتاج معتمد ISO 9001:2015 مع خطوط تحمل علامة CE ومستندات متوافقة مع REACH؛ وتقارير اختبار SGS للنظام المحدد متاحة عند الطلب. تشمل مستندات التصدير CO وMSDS وTDS وتغليف UN/DG بحسب متطلبات سوق الوجهة."}},{q:{en:"Do you offer OEM / private-label packaging?",zh:"是否提供 OEM/贴牌包装？",vi:"Có hỗ trợ đóng gói OEM / nhãn riêng không?",es:"¿Ofrecen embalaje OEM / marca privada?",ar:"هل تقدمون تغليف OEM / العلامة الخاصة؟"},a:{en:"Yes — custom drum labels, branded packaging, multilingual TDS/MSDS and co-branded collateral, with formulation confidentiality.",zh:"提供——定制桶身标签、品牌包装、多语言 TDS/MSDS 及联合品牌物料，配方保密。",vi:"Có — nhãn thùng riêng, bao bì thương hiệu, TDS/MSDS đa ngữ và tài liệu đồng thương hiệu, bảo mật công thức.",es:"Sí — etiquetas de bidón a medida, embalaje con marca, TDS/MSDS en varios idiomas y material promocional de marca conjunta, con confidencialidad de la formulación.",ar:"نعم — ملصقات براميل مخصصة وتغليف بعلامة تجارية وTDS/MSDS متعددة اللغات ومواد تسويقية بعلامة مشتركة، مع الحفاظ على سرية التركيبة."}},{q:{en:"What is the salt-spray resistance of your anti-corrosion systems?",zh:"防腐体系的盐雾耐受性如何？",vi:"Khả năng chịu phun muối của hệ chống ăn mòn?",es:"¿Cuál es la resistencia a la niebla salina de sus sistemas anticorrosivos?",ar:"ما مقاومة أنظمة مكافحة التآكل لديكم للرذاذ الملحي؟"},a:{en:"Salt-spray performance is system-dependent, so we provide the test report or certified data for the specific system you are sourcing rather than a single blanket figure. Zinc-rich epoxy builds are the highest-rated in our range.",zh:"盐雾性能取决于具体体系，因此我们按您采购的具体体系提供检测报告或认证数据，而不是一个笼统数字。富锌环氧体系是我们产品线中等级最高的。",vi:"Khả năng chịu phun muối tùy hệ thống, nên chúng tôi cung cấp báo cáo thử hoặc số liệu chứng nhận cho hệ cụ thể bạn nhập thay vì một con số chung. Hệ epoxy giàu kẽm có cấp cao nhất trong dải sản phẩm.",es:"El desempeño frente a la niebla salina depende del sistema, por lo que proporcionamos el informe de ensayo o los datos certificados del sistema específico que usted adquiere, en lugar de una cifra única y genérica. Los sistemas epoxi ricos en zinc son los de mayor clasificación de nuestra gama.",ar:"أداء الرذاذ الملحي يعتمد على النظام، لذا نقدّم تقرير الاختبار أو البيانات المعتمدة للنظام المحدد الذي تتورده بدلاً من رقم عام واحد. أنظمة الإيبوكسي الغنية بالزنك هي الأعلى تصنيفاً في مدى منتجاتنا."}},{q:{en:"Do you provide on-site engineering and applicator training?",zh:"是否提供现场工程与施工培训？",vi:"Có hỗ trợ kỹ thuật và đào tạo thi công tại hiện trường?",es:"¿Proporcionan ingeniería en obra y capacitación para aplicadores?",ar:"هل تقدمون دعماً هندسياً ميدانياً وتدريباً للعاملين على التطبيق؟"},a:{en:"For larger projects we coordinate technical support with the producing plant's technical department — system specification, surface-preparation requirements and application guidance.",zh:"较大项目可协调生产工厂技术部门提供支持——体系选型、表面处理要求及施工指导。",vi:"Dự án lớn: phối hợp bộ phận kỹ thuật nhà máy — chọn hệ, yêu cầu xử lý bề mặt và hướng dẫn thi công.",es:"Para proyectos grandes coordinamos el soporte técnico con el departamento técnico de la planta productora — especificación del sistema, requisitos de preparación de la superficie y orientación de aplicación.",ar:"للمشاريع الأكبر ننسّق الدعم الفني مع القسم الفني لمصنع الإنتاج — مواصفات النظام ومتطلبات تحضير السطح وإرشادات التطبيق."}},{q:{en:"What is your quality warranty?",zh:"质保期多久？",vi:"Thời gian bảo hành?",es:"¿Cuál es su garantía de calidad?",ar:"ما مدة ضمان الجودة لديكم؟"},a:{en:"Every batch ships with an available QC report and is covered by a 24-month quality warranty from delivery.",zh:"每批可附质检报告，自交货起享 24 个月质保。",vi:"Mỗi lô có báo cáo QC và bảo hành chất lượng 24 tháng từ khi giao.",es:"Cada lote se embarca con un informe de QC disponible y está cubierto por una garantía de calidad de 24 meses a partir de la entrega.",ar:"تُشحن كل دفعة مع تقرير مراقبة جودة متاح لها، وهي مغطاة بضمان جودة 24 شهراً من تاريخ التسليم."}},{q:{en:"Which regions do you export to?",zh:"出口到哪些地区？",vi:"Xuất khẩu tới khu vực nào?",es:"¿A qué regiones exportan?",ar:"إلى أي مناطق تصدّرون؟"},a:{en:"We ship worldwide — established channels across SE Asia, the Middle East, Africa, South America, Eastern Europe and Central Asia, and we quote to any destination on request.",zh:"全球发货——在东南亚、中东、非洲、南美、东欧及中亚有成熟渠道，也可按需报至任意目的港。",vi:"Gửi hàng toàn cầu — kênh sẵn có tại Đông Nam Á, Trung Đông, Châu Phi, Nam Mỹ, Đông Âu, Trung Á; báo giá tới bất kỳ cảng nào theo yêu cầu.",es:"Enviamos a todo el mundo — canales consolidados en el Sudeste Asiático, Medio Oriente, África, Sudamérica, Europa del Este y Asia Central, y cotizamos a cualquier destino a pedido.",ar:"نشحن إلى جميع أنحاء العالم — قنوات راسخة عبر جنوب شرق آسيا والشرق الأوسط وأفريقيا وأمريكا الجنوبية وأوروبا الشرقية وآسيا الوسطى، ونرسل عروض أسعار إلى أي وجهة عند الطلب."}}],en=[{icon:"Factory",t:{en:"Sourcing",zh:"源头供应",vi:"Nguồn cung",es:"Abastecimiento",ar:"التوريد"},d:{en:"ISO 9001 certified coating plants in China's coatings hub.",zh:"中国涂料之乡的 ISO 9001 认证工厂。",vi:"Nhà máy sơn ISO 9001 tại thủ phủ sơn Trung Quốc.",es:"Plantas de recubrimientos certificadas ISO 9001 en la capital china de los recubrimientos.",ar:"مصانع طلاء معتمدة ISO 9001 في مركز صناعة الطلاءات بالصين."}},{icon:"FlaskConical",t:{en:"Matching",zh:"配方匹配",vi:"Phối hợp công thức",es:"Igualación",ar:"المطابقة"},d:{en:"Colour & performance matching; sample in 7–15 days.",zh:"调色与性能匹配，7–15 天出样。",vi:"Pha màu & hiệu suất; mẫu 7–15 ngày.",es:"Igualación de color y desempeño; muestra en 7–15 días.",ar:"مطابقة اللون والأداء؛ والعينة خلال 7–15 يوماً."}},{icon:"Globe2",t:{en:"Export Desk",zh:"出口部门",vi:"Bộ phận xuất khẩu",es:"Departamento de exportación",ar:"مكتب التصدير"},d:{en:"CO, MSDS, TDS, UN/DG packaging.",zh:"CO、MSDS、TDS、UN 危包。",vi:"CO, MSDS, TDS, đóng gói UN/DG.",es:"CO, MSDS, TDS, embalaje UN/DG.",ar:"CO، MSDS، TDS، وتغليف UN/DG."}},{icon:"Truck",t:{en:"Logistics",zh:"物流",vi:"Logistics",es:"Logística",ar:"الخدمات اللوجستية"},d:{en:"Lead time 7–15 days after order confirmation.",zh:"订单确认后 7–15 天交货。",vi:"Giao 7–15 ngày sau xác nhận đơn.",es:"Plazo de entrega de 7–15 días tras la confirmación del pedido.",ar:"مدة التوريد 7–15 يوماً بعد تأكيد الطلب."}}],et=[{en:"Batch QC report available per order",zh:"每单可附批次质检报告",vi:"Báo cáo QC theo lô cho mỗi đơn",es:"Informe de QC por lote disponible en cada pedido",ar:"تقرير مراقبة جودة الدفعة متاح لكل طلب"},{en:"RAL / Pantone colour matching",zh:"RAL / Pantone 调色",vi:"Pha màu RAL / Pantone",es:"Igualación de color RAL / Pantone",ar:"مطابقة ألوان RAL / Pantone"},{en:"ISO 9001 / CE certified product lines",zh:"ISO 9001 / CE 认证产品线",vi:"Dòng sản phẩm chứng nhận ISO 9001 / CE",es:"Líneas de producto certificadas ISO 9001 / CE",ar:"خطوط منتجات معتمدة ISO 9001 / CE"},{en:"OEM private-label packaging",zh:"OEM 贴牌包装",vi:"Đóng gói nhãn riêng OEM",es:"Embalaje OEM de marca privada",ar:"تغليف OEM بالعلامة الخاصة"}],ei=[{en:"ISO 9001 Production",zh:"ISO 9001 生产",vi:"Sản xuất ISO 9001",es:"Producción ISO 9001",ar:"إنتاج ISO 9001"},{en:"CE / REACH-Aligned",zh:"CE / REACH 对齐",vi:"Theo CE / REACH",es:"CE / alineado con REACH",ar:"CE / متوافق مع REACH"},{en:"OEM/ODM",zh:"OEM/ODM",vi:"OEM/ODM",es:"OEM/ODM",ar:"OEM/ODM"},{en:"Colour Matching",zh:"调色服务",vi:"Pha màu",es:"Igualación de color",ar:"مطابقة الألوان"},{en:"Export Documentation",zh:"出口单证",vi:"Chứng từ xuất khẩu",es:"Documentación de exportación",ar:"مستندات التصدير"}],er=[{v:"38+",l:{en:"listed products across six systems",zh:"六大体系在售型号",vi:"sản phẩm liệt kê trong sáu hệ",es:"productos listados en seis sistemas",ar:"منتجاً مدرجاً عبر ستة أنظمة"}},{v:"3-coat",l:{en:"matched primer-to-topcoat systems",zh:"底漆到面漆成套体系",vi:"hệ lót-đến-lớp phủ phối hợp",es:"sistemas compatibles de imprimación a acabado",ar:"نظاماً متطابقاً من البرايمر إلى الطبقة النهائية"}},{v:"24 mo",l:{en:"quality warranty standard",zh:"标准质保期",vi:"bảo hành tiêu chuẩn",es:"garantía de calidad estándar",ar:"شهراً من ضمان الجودة القياسي"}},{v:"48 h",l:{en:"typical sample dispatch",zh:"常规寄样时效",vi:"thời gian gửi mẫu thông thường",es:"despacho típico de muestras",ar:"أيام لإرسال العينات عادة"}}],eo=["home","products","solutions","cases","about","news","faq","contact"];function es(){let{page:e,navigate:t}=L(),{t:d}=j(),[h,m]=n.useState(!1),[u,g]=n.useState(!1);n.useEffect(()=>{let e=()=>g(window.scrollY>12);return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]);let f=e=>{t(e),m(!1)};return(0,a.jsxs)("header",{className:(0,x.f)("sticky top-0 z-50 w-full transition-all duration-300",u?"bg-background/85 backdrop-blur-xl border-b border-border":"bg-transparent border-b border-transparent"),children:[(0,a.jsx)("div",{className:"hidden md:block border-b border-border/60 dark bg-ink/40 text-muted-foreground",children:(0,a.jsxs)("div",{className:"mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[12px]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 font-mono tracking-wider",children:[(0,a.jsx)("span",{className:"text-brand",children:d("topbar.based")}),(0,a.jsx)("span",{"aria-hidden":!0,children:"·"}),(0,a.jsx)("span",{children:"ISO 9001:2015"}),(0,a.jsx)("span",{"aria-hidden":!0,children:"·"}),(0,a.jsx)("span",{children:"CE"}),(0,a.jsx)("span",{"aria-hidden":!0,children:"·"}),(0,a.jsx)("span",{children:"REACH"}),(0,a.jsx)("span",{"aria-hidden":!0,children:"·"}),(0,a.jsx)("span",{children:"SGS"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-5",children:[(0,a.jsxs)("a",{href:`tel:${M.replace(/\s/g,"")}`,className:"flex items-center gap-1.5 transition-colors hover:text-foreground",children:[(0,a.jsx)(o,{className:"size-3.5"})," ",M]}),(0,a.jsxs)("a",{href:`https://wa.me/${O.replace(/\D/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 transition-colors hover:text-foreground",children:[(0,a.jsx)(l,{className:"size-3.5"})," ",O]}),(0,a.jsxs)("a",{href:`mailto:${F}`,className:"flex items-center gap-1.5 transition-colors hover:text-foreground",children:[(0,a.jsx)(s,{className:"size-3.5"})," ",F]}),(0,a.jsx)(A,{})]})]})}),(0,a.jsxs)("div",{className:"mx-auto flex h-16 max-w-7xl items-center justify-between px-6",children:[(0,a.jsxs)("button",{onClick:()=>f("home"),className:"group flex items-center gap-3","aria-label":"HONG NGUYEN home",children:[(0,a.jsx)("span",{className:"grid size-10 place-items-center rounded-md bg-brand text-brand-foreground font-mono font-bold text-lg shadow-[0_6px_20px_-6px_var(--brand)] transition-transform group-hover:scale-105",children:"HN"}),(0,a.jsxs)("span",{className:"hidden sm:flex flex-col leading-none",children:[(0,a.jsx)("span",{className:"text-[15px] font-bold tracking-tight text-foreground",children:P}),(0,a.jsx)("span",{className:"text-[11px] font-mono text-muted-foreground tracking-widest uppercase",children:E})]})]}),(0,a.jsx)("nav",{className:"hidden lg:flex items-center gap-1",children:eo.map(n=>(0,a.jsxs)("button",{onClick:()=>f(n),className:(0,x.f)("relative px-3.5 py-2 text-[13.5px] font-medium transition-colors",e===n?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[d(`nav.${n}`),e===n&&(0,a.jsx)("span",{className:"absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand"})]},n))}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(A,{className:"lg:hidden"}),(0,a.jsxs)(p,{size:"sm",className:"hidden sm:inline-flex",onClick:()=>f("contact"),children:[d("cta.getQuote")," ",(0,a.jsx)(c,{className:"size-4"})]}),(0,a.jsx)("button",{className:"lg:hidden grid size-10 place-items-center rounded-md border border-border text-foreground",onClick:()=>m(e=>!e),"aria-label":"Toggle menu","aria-expanded":h,children:h?(0,a.jsx)(r.X,{className:"size-5"}):(0,a.jsx)(i,{className:"size-5"})})]})]}),h&&(0,a.jsx)("div",{className:"lg:hidden border-t border-border bg-background/95 backdrop-blur-xl",children:(0,a.jsxs)("nav",{className:"mx-auto grid max-w-7xl gap-1 px-6 py-4",children:[eo.map(n=>(0,a.jsxs)("button",{onClick:()=>f(n),className:(0,x.f)("flex items-center justify-between rounded-md px-3 py-2.5 text-left text-[15px] font-medium transition-colors",e===n?"bg-brand-muted text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:[d(`nav.${n}`),(0,a.jsx)(c,{className:(0,x.f)("size-4 transition-transform",e===n?"text-brand translate-x-0.5":"opacity-40")})]},n)),(0,a.jsxs)(p,{className:"mt-2 w-full",onClick:()=>f("contact"),children:[d("cta.getQuote")," ",(0,a.jsx)(c,{className:"size-4"})]})]})})]})}let ec=(0,t.f)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),el=[{labelKey:"p:cat-01",target:"CAT-01"},{labelKey:"p:cat-02",target:"CAT-02"},{labelKey:"p:cat-03",target:"CAT-03"},{labelKey:"p:cat-04",target:"CAT-04"},{labelKey:"p:cat-05",target:"CAT-05"},{labelKey:"p:cat-06",target:"CAT-06"}],ed=[{labelKey:"footer.about",page:"about"},{labelKey:"footer.cases",page:"cases"},{labelKey:"footer.solutions",page:"solutions"},{labelKey:"footer.news",page:"news"},{labelKey:"footer.faq",page:"faq"},{labelKey:"footer.contact",page:"contact"}];function eh(){let{navigate:e}=L(),{t:n,loc:t}=j(),i={"CAT-01":t({en:"Anti-Corrosion Coatings",zh:"防腐涂料",vi:"Sơn chống ăn mòn"}),"CAT-02":t({en:"High-Temperature Paints",zh:"耐高温涂料",vi:"Sơn chịu nhiệt cao"}),"CAT-03":t({en:"Epoxy Floor Systems",zh:"环氧地坪系统",vi:"Hệ sàn epoxy"}),"CAT-04":t({en:"Weatherproof Topcoats",zh:"耐候面漆",vi:"Sơn phủ chịu thời tiết"}),"CAT-05":t({en:"Architectural Wall Paints",zh:"建筑墙面涂料",vi:"Sơn tường kiến trúc"}),"CAT-06":t({en:"Custom Formulations",zh:"定制配方",vi:"Phối chế theo yêu cầu"})},r={"footer.about":t({en:"About Us",zh:"关于我们",vi:"Giới thiệu"}),"footer.cases":t({en:"Application Systems",zh:"应用体系",vi:"Hệ thống ứng dụng"}),"footer.solutions":t({en:"Solutions",zh:"解决方案",vi:"Giải pháp"}),"footer.news":t({en:"News & Blog",zh:"新闻与博客",vi:"Tin tức & Blog"}),"footer.faq":t({en:"FAQ",zh:"常见问题",vi:"Câu hỏi"}),"footer.contact":t({en:"Contact",zh:"联系",vi:"Liên hệ"})};return(0,a.jsxs)("footer",{className:"mt-auto border-t border-white/5",style:{background:"var(--footer-bg)",color:"var(--footer-fg)"},children:[(0,a.jsx)("div",{className:"border-b border-white/8",children:(0,a.jsxs)("div",{className:"mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-10 md:flex-row md:items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"eyebrow text-[11px]",style:{color:"var(--footer-accent-strong)"},children:[n("rq.index")," ",n("rq.eyebrow")]}),(0,a.jsx)("h3",{className:"mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl",children:n("rq.title")}),(0,a.jsx)("p",{className:"mt-2 max-w-xl text-sm",style:{color:"var(--footer-fg)"},children:n("rq.desc")})]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,a.jsxs)(p,{size:"lg",onClick:()=>e("contact"),children:[n("cta.requestFreeQuote")," ",(0,a.jsx)(c,{className:"size-4"})]}),(0,a.jsxs)(p,{size:"lg",variant:"outline",onClick:()=>e("contact"),children:[(0,a.jsx)(l,{className:"size-4"})," ",n("cta.whatsappChat")]})]})]})}),(0,a.jsxs)("div",{className:"mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-12",children:[(0,a.jsxs)("div",{className:"lg:col-span-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"grid size-10 place-items-center rounded-md font-mono font-bold text-lg",style:{background:"var(--footer-accent)",color:"var(--footer-bg)"},children:"HN"}),(0,a.jsxs)("div",{className:"leading-none",children:[(0,a.jsx)("div",{className:"text-[15px] font-bold tracking-tight text-white",children:P}),(0,a.jsx)("div",{className:"text-[11px] font-mono tracking-widest uppercase",style:{color:"var(--footer-accent)"},children:E})]})]}),(0,a.jsx)("p",{className:"mt-4 max-w-sm text-sm leading-relaxed",children:n("brand.premiumDesc")}),(0,a.jsxs)("ul",{className:"mt-5 space-y-2.5 text-sm",children:[(0,a.jsxs)("li",{className:"flex gap-2.5",children:[(0,a.jsx)(ec,{className:"mt-0.5 size-4 shrink-0",style:{color:"var(--footer-accent)"}}),(0,a.jsx)("span",{className:"leading-relaxed",children:t(R)})]}),(0,a.jsxs)("li",{className:"flex items-center gap-2.5",children:[(0,a.jsx)(o,{className:"size-4 shrink-0",style:{color:"var(--footer-accent)"}}),(0,a.jsx)("a",{href:`tel:${M.replace(/\s/g,"")}`,className:"hover:text-white transition-colors",children:M})]}),(0,a.jsxs)("li",{className:"flex items-center gap-2.5",children:[(0,a.jsx)(s,{className:"size-4 shrink-0",style:{color:"var(--footer-accent)"}}),(0,a.jsx)("a",{href:`mailto:${F}`,className:"hover:text-white transition-colors",children:F})]}),(0,a.jsxs)("li",{className:"flex items-center gap-2.5",children:[(0,a.jsx)(l,{className:"size-4 shrink-0",style:{color:"var(--footer-accent)"}}),(0,a.jsx)("a",{href:`https://wa.me/${O.replace(/\D/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:O})]})]})]}),(0,a.jsxs)("div",{className:"lg:col-span-3",children:[(0,a.jsx)("h4",{className:"eyebrow text-[11px]",style:{color:"var(--footer-accent)"},children:n("footer.products")}),(0,a.jsx)("ul",{className:"mt-4 space-y-2.5 text-sm",children:el.map(n=>(0,a.jsx)("li",{children:(0,a.jsx)("button",{onClick:()=>e("products",n.target),className:"text-left transition-colors hover:text-white",children:i[n.target]})},n.target))})]}),(0,a.jsxs)("div",{className:"lg:col-span-2",children:[(0,a.jsx)("h4",{className:"eyebrow text-[11px]",style:{color:"var(--footer-accent)"},children:n("footer.company")}),(0,a.jsx)("ul",{className:"mt-4 space-y-2.5 text-sm",children:ed.map(n=>(0,a.jsx)("li",{children:(0,a.jsx)("button",{onClick:()=>e(n.page),className:"text-left transition-colors hover:text-white",children:r[n.labelKey]})},n.page))})]}),(0,a.jsxs)("div",{className:"lg:col-span-3",children:[(0,a.jsxs)("h4",{className:"eyebrow text-[11px] flex items-center gap-2",style:{color:"var(--footer-accent)"},children:[(0,a.jsx)(g,{className:"size-3.5"})," ",n("footer.exportRegions")]}),(0,a.jsx)("ul",{className:"mt-4 grid grid-cols-2 gap-2.5 text-sm",children:$.map(e=>(0,a.jsxs)("li",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"size-1 rounded-full",style:{background:"var(--footer-accent)"}}),t(e)]},e.en))})]})]}),(0,a.jsx)("div",{className:"border-t border-white/8",children:(0,a.jsxs)("div",{className:"mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[12px] sm:flex-row",style:{color:"var(--footer-fg)"},children:[(0,a.jsxs)("p",{children:["© ",new Date().getFullYear()," ",P," Co., Ltd. ",n("footer.rights")]}),(0,a.jsx)("p",{className:"flex flex-wrap items-center gap-2 font-mono tracking-wider",children:I.map((e,n)=>(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[n>0&&(0,a.jsx)("span",{className:"opacity-30",children:"·"}),e]},e))})]})})]})}var ex=e.i(5500),ex=ex;let em=(0,t.f)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),ep=(0,t.f)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),eu=(0,t.f)("flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),eg=(0,t.f)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]),ef=(0,t.f)("building-2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),eb=(0,t.f)("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]),ey=(0,t.f)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]),ev=(0,t.f)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),ek=(0,t.f)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);function eN({children:e,className:n}){return(0,a.jsx)("span",{className:(0,x.f)("eyebrow text-brand text-[11px]",n),children:e})}function eC({index:e,eyebrow:n,title:t,description:i,align:r="left",className:o}){return(0,a.jsxs)("div",{className:(0,x.f)("max-w-2xl","center"===r&&"mx-auto text-center",o),children:[(0,a.jsxs)("div",{className:(0,x.f)("flex items-center gap-3","center"===r&&"justify-center"),children:[e&&(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:e}),n&&(0,a.jsxs)(a.Fragment,{children:[e&&(0,a.jsx)("span",{className:"h-px w-6 bg-brand/40"}),(0,a.jsx)(eN,{children:n})]})]}),(0,a.jsx)("h2",{className:"mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.6rem] md:leading-[1.1]",children:t}),i&&(0,a.jsx)("p",{className:"mt-4 text-[15px] leading-relaxed text-muted-foreground",children:i})]})}function eS({children:e,className:n,id:t}){return(0,a.jsx)("section",{id:t,className:(0,x.f)("py-16 sm:py-20 lg:py-24",n),children:(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-6",children:e})})}function ew({label:e,value:n,mono:t=!0}){return(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4 border-b border-border/60 py-2.5 last:border-0",children:[(0,a.jsx)("span",{className:"text-[13px] text-muted-foreground",children:e}),(0,a.jsx)("span",{className:(0,x.f)("text-[13px] font-medium text-foreground text-right",t&&"font-mono"),children:n})]})}function eT({children:e,delay:n=0,className:t}){return(0,a.jsx)("div",{className:(0,x.f)("animate-fade-up",t),style:{animationDelay:`${n}ms`},children:e})}function eD(e){return!e||/^(https?:)?\/\//.test(e)||e.startsWith("data:")||e.startsWith("/HN")?e:`/HN${e}`}let ej={"CAT-01":ep,"CAT-02":eu,"CAT-03":eg,"CAT-04":ef,"CAT-05":eb,"CAT-06":ey};function eH(){let{navigate:e}=L(),{t:n,loc:t}=j();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden bg-background",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-brand-muted via-background to-secondary"}),(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.07]"}),(0,a.jsx)("div",{className:"pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-brand/8 blur-3xl"}),(0,a.jsx)("div",{className:"relative mx-auto max-w-7xl px-6 pt-14 pb-16 sm:pt-18 sm:pb-24 lg:pt-20 lg:pb-28",children:(0,a.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-center",children:[(0,a.jsxs)("div",{className:"lg:col-span-6",children:[(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:n("hero.index")}),(0,a.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,a.jsx)(eN,{children:n("hero.eyebrow")})]})}),(0,a.jsx)(eT,{delay:80,children:(0,a.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.2rem]",children:[n("hero.title1")," ",n("hero.title2")," ",(0,a.jsx)("span",{className:"text-brand",children:n("hero.titleAccent")})," ",n("hero.title3")]})}),(0,a.jsx)(eT,{delay:160,children:(0,a.jsx)("p",{className:"mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base",children:n("hero.desc")})}),(0,a.jsx)(eT,{delay:240,children:(0,a.jsxs)("div",{className:"mt-8 flex flex-wrap gap-3",children:[(0,a.jsxs)(p,{size:"lg",onClick:()=>e("contact"),children:[n("cta.getQuote")," ",(0,a.jsx)(em,{className:"size-4"})]}),(0,a.jsx)(p,{size:"lg",variant:"outline",onClick:()=>e("products"),children:n("cta.browseCatalog")})]})}),(0,a.jsx)(eT,{delay:320,children:(0,a.jsx)("dl",{className:"mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4",children:B.map(e=>(0,a.jsxs)("div",{className:"border-l border-border/70 pl-4",children:[(0,a.jsx)("dt",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl",children:e.value}),(0,a.jsxs)("dd",{className:"mt-1 text-[12px] leading-tight text-muted-foreground",children:[t(e.label),(0,a.jsx)("span",{className:"block text-[11px] text-brand/80 font-mono mt-0.5",children:t(e.sub)})]})]},e.label.en))})})]}),(0,a.jsx)("div",{className:"lg:col-span-5",children:(0,a.jsx)(eT,{delay:300,children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute -inset-3 rounded-2xl bg-brand/10 blur-2xl"}),(0,a.jsxs)("div",{className:"relative rounded-xl border border-border/70 bg-card/80 backdrop-blur-md p-6 shadow-2xl",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between border-b border-border/60 pb-3",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"size-2 rounded-full bg-brand animate-pulse"}),(0,a.jsx)("span",{className:"font-mono text-[11px] tracking-widest text-muted-foreground",children:n("hero.specSheet")})]}),(0,a.jsx)("span",{className:"font-mono text-[10px] text-brand",children:n("hero.live")})]}),(0,a.jsx)("div",{className:"mt-2 max-h-[320px] overflow-y-auto scroll-thin pr-1",children:U.map(e=>(0,a.jsx)(ew,{label:t(e.label),value:e.value},e.label.en))}),(0,a.jsxs)("button",{onClick:()=>e("products"),className:"mt-4 flex w-full items-center justify-between rounded-md border border-brand/30 bg-brand-muted px-4 py-2.5 text-[13px] font-medium text-brand transition-colors hover:bg-brand/20",children:[n("cta.viewFullCatalog"),(0,a.jsx)(c,{className:"size-4"})]})]})]})})})]})})]}),(0,a.jsx)("div",{className:"border-y border-border bg-background py-6",children:(0,a.jsxs)("div",{className:"mx-auto max-w-7xl px-6",children:[(0,a.jsx)("p",{className:"mb-4 text-center font-mono text-[11px] tracking-widest text-muted-foreground uppercase",children:n("partners.trustedBy")}),(0,a.jsx)("div",{className:"relative overflow-hidden",children:(0,a.jsx)("div",{className:"flex w-max animate-marquee gap-12",children:[...X,...X,...X].map((e,n)=>(0,a.jsx)("span",{className:"font-mono text-lg font-bold tracking-widest text-muted-foreground/70 transition-colors hover:text-brand",children:t(e)},n))})})]})}),(0,a.jsx)(eS,{children:(0,a.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-start",children:[(0,a.jsx)("div",{className:"lg:col-span-5",children:(0,a.jsx)(eC,{index:n("core.index"),eyebrow:n("core.eyebrow"),title:n("core.title")})}),(0,a.jsxs)("div",{className:"lg:col-span-7",children:[(0,a.jsx)("p",{className:"text-[15px] leading-relaxed text-muted-foreground",children:t(q)}),(0,a.jsx)("div",{className:"mt-6 flex flex-wrap gap-2",children:ei.map(e=>(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[12px] text-muted-foreground",children:[(0,a.jsx)(ev,{className:"size-3.5 text-brand"}),t(e)]},e.en))})]})]})}),(0,a.jsxs)(eS,{className:"bg-card/40 border-y border-border",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[(0,a.jsx)(eC,{index:n("pcat.index"),eyebrow:n("pcat.eyebrow"),title:n("pcat.title")}),(0,a.jsxs)(p,{variant:"outline",onClick:()=>e("products"),children:[n("cta.viewAllCatalog")," ",(0,a.jsx)(em,{className:"size-4"})]})]}),(0,a.jsx)("div",{className:"mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:V.map((i,r)=>{let o=ej[i.code]??ep;return(0,a.jsx)(eT,{delay:60*r,children:(0,a.jsxs)("button",{onClick:()=>e("products",i.code),className:"group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-background text-left transition-all hover:border-brand/40 hover:shadow-xl",children:[(0,a.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,a.jsx)(ex.Image,{src:eD(i.image),alt:t(i.title),fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"}),(0,a.jsx)("div",{className:"absolute left-3 top-3 flex items-center gap-2",children:(0,a.jsx)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-brand backdrop-blur",children:i.code})}),(0,a.jsx)("div",{className:"absolute right-3 top-3 grid size-8 place-items-center rounded-md border border-brand/40 bg-ink/70 text-brand backdrop-blur",children:(0,a.jsx)(o,{className:"size-4"})})]}),(0,a.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,a.jsx)("h3",{className:"text-lg font-bold tracking-tight text-foreground",children:t(i.title)}),(0,a.jsx)("p",{className:"mt-1.5 text-[13px] text-muted-foreground",children:t(i.short)}),(0,a.jsxs)("div",{className:"mt-4 flex items-center gap-1 text-[12px] font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100",children:[n("cta.explore")," ",(0,a.jsx)(em,{className:"size-3.5"})]})]})]})},i.code)})})]}),(0,a.jsxs)("section",{className:"relative overflow-hidden border-y border-border",children:[(0,a.jsxs)("div",{className:"absolute inset-0",children:[(0,a.jsx)(ex.Image,{src:eD("/images/why-us-bg.jpg"),alt:"",fill:!0,sizes:"100vw",className:"object-cover opacity-20"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background"})]}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24",children:[(0,a.jsx)(eC,{index:n("why.index"),eyebrow:n("why.eyebrow"),title:n("why.title"),align:"center",className:"mx-auto"}),(0,a.jsx)("div",{className:"mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",children:G.map(e=>(0,a.jsxs)("div",{className:"group bg-background/90 p-6 backdrop-blur-sm transition-colors hover:bg-card",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("span",{className:"font-mono text-2xl font-bold text-brand/30 transition-colors group-hover:text-brand",children:e.no}),(0,a.jsx)("span",{className:"size-1.5 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100"})]}),(0,a.jsx)("h3",{className:"mt-4 text-[15px] font-bold tracking-tight text-foreground",children:t(e.title)}),(0,a.jsx)("p",{className:"mt-2 text-[13px] leading-relaxed text-muted-foreground",children:t(e.desc)})]},e.no))})]})]}),(0,a.jsxs)(eS,{className:"bg-card/40 border-y border-border",children:[(0,a.jsx)(eC,{index:n("app.index"),eyebrow:n("app.eyebrow"),title:n("app.title")}),(0,a.jsx)("div",{className:"mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:W.map((n,i)=>(0,a.jsx)(eT,{delay:50*i,children:(0,a.jsxs)("button",{onClick:()=>e("solutions"),className:"group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-border transition-all hover:border-brand/40 hover:shadow-xl",children:[(0,a.jsx)(ex.Image,{src:eD(n.image),alt:t(n.title),fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"}),(0,a.jsx)("div",{className:"absolute left-4 top-4",children:(0,a.jsx)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-brand backdrop-blur",children:n.code})}),(0,a.jsxs)("div",{className:"absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2",children:[(0,a.jsx)("span",{className:"text-[15px] font-bold leading-tight text-foreground",children:t(n.title)}),(0,a.jsx)(c,{className:"size-5 shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-100"})]})]})},n.code))})]}),(0,a.jsxs)(eS,{children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[(0,a.jsx)(eC,{index:n("cases.index"),eyebrow:n("cases.eyebrow"),title:n("cases.title")}),(0,a.jsxs)(p,{variant:"outline",onClick:()=>e("cases"),children:[n("cta.viewAllCases")," ",(0,a.jsx)(em,{className:"size-4"})]})]}),(0,a.jsx)("div",{className:"mt-10 grid gap-6 lg:grid-cols-3",children:Q.map((n,i)=>(0,a.jsx)(eT,{delay:80*i,children:(0,a.jsxs)("button",{onClick:()=>e("cases",n.code),className:"group block w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-brand/40 hover:shadow-xl",children:[(0,a.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,a.jsx)(ex.Image,{src:eD(n.image),alt:t(n.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent"}),(0,a.jsxs)("div",{className:"absolute left-4 top-4 flex items-center gap-2",children:[(0,a.jsx)("span",{className:"rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-brand-foreground",children:n.code}),(0,a.jsxs)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-foreground backdrop-blur",children:[t(n.location)," · ",n.year]})]})]}),(0,a.jsxs)("div",{className:"p-5",children:[(0,a.jsx)("h3",{className:"text-[15px] font-bold leading-snug tracking-tight text-foreground",children:t(n.title)}),(0,a.jsx)("p",{className:"mt-2 text-[13px] leading-relaxed text-muted-foreground",children:t(n.summary)}),(0,a.jsx)("div",{className:"mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-border/60 pt-3",children:n.metrics.map(e=>(0,a.jsxs)("div",{className:"text-[11px]",children:[(0,a.jsxs)("span",{className:"text-muted-foreground",children:[t(e.label),": "]}),(0,a.jsx)("span",{className:"font-mono font-medium text-foreground",children:e.value})]},e.label.en))})]})]})},n.code))})]}),(0,a.jsxs)(eS,{className:"border-t border-border bg-card/40",children:[(0,a.jsx)(eC,{index:n("cert.index"),eyebrow:n("cert.eyebrow"),title:n("cert.title"),description:n("cert.desc")}),(0,a.jsx)("div",{className:"mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",children:K.map((e,n)=>(0,a.jsx)(eT,{delay:50*n,children:(0,a.jsxs)("div",{className:"flex h-full flex-col items-center justify-center rounded-xl border border-border bg-background p-5 text-center transition-all hover:border-brand/40",children:[(0,a.jsx)("div",{className:"grid size-12 place-items-center rounded-full border border-brand/30 bg-brand-muted",children:(0,a.jsx)(ek,{className:"size-5 text-brand"})}),(0,a.jsx)("div",{className:"mt-3 font-mono text-[13px] font-bold tracking-wide text-foreground",children:e.code}),(0,a.jsx)("div",{className:"mt-0.5 text-[11px] text-muted-foreground",children:t(e.title)})]})},e.code))})]})]})}var ex=ex;let ez=(0,t.f)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]),eA={"CAT-01":ep,"CAT-02":eu,"CAT-03":eg,"CAT-04":ef,"CAT-05":eb,"CAT-06":ey};function eL({models:e,title:t,expandLabel:i,collapseLabel:r,detailLabel:o,hideDetailLabel:s}){let{t:c,loc:l}=j(),[d,h]=n.useState(!0),[x,m]=n.useState(null);return(0,a.jsxs)("div",{className:"mt-5 overflow-hidden rounded-xl border border-border bg-card",children:[(0,a.jsxs)("button",{onClick:()=>h(e=>!e),className:"flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-accent/40","aria-expanded":d,children:[(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] tracking-widest text-brand",children:t}),(0,a.jsx)("span",{className:"rounded-full bg-brand-muted px-2 py-0.5 font-mono text-[10px] text-brand",children:e.length})]}),(0,a.jsxs)("span",{className:"flex items-center gap-1.5 text-[12px] text-muted-foreground",children:[d?r:i,(0,a.jsx)(f,{className:"size-4 text-brand transition-transform "+(d?"rotate-180":"")})]})]}),d&&(0,a.jsx)("ul",{className:"divide-y divide-border/60 border-t border-border/60",children:e.map(e=>{let n=!!e.details,t=x===e.model;return(0,a.jsxs)("li",{className:"px-4 py-3",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4",children:[(0,a.jsx)("span",{className:"inline-flex w-fit shrink-0 items-center rounded-md border border-brand/30 bg-brand-muted px-2.5 py-1 font-mono text-[12px] font-bold text-brand",children:e.model}),(0,a.jsx)("span",{className:"flex-1 text-[13px] leading-snug text-foreground/90",children:l(e.desc)}),n&&(0,a.jsxs)("button",{onClick:()=>m(t?null:e.model),className:"inline-flex w-fit shrink-0 items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-brand transition-colors hover:border-brand/40 hover:bg-brand-muted",children:[t?s:o,(0,a.jsx)(f,{className:"size-3.5 transition-transform "+(t?"rotate-180":"")})]})]}),n&&t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("pre",{className:"mt-3 max-h-80 overflow-y-auto scroll-thin whitespace-pre-wrap rounded-lg border border-border/60 bg-background p-4 font-sans text-[12.5px] leading-relaxed text-foreground/85",children:l(e.details)}),_.includes(e.model)&&(0,a.jsxs)("a",{href:eD(`/tds/${e.model}-en.pdf`),download:!0,className:"mt-2 inline-flex w-fit items-center gap-1.5 rounded-md border border-brand bg-brand-muted px-2.5 py-1 text-[11px] font-medium text-brand transition-colors hover:bg-brand hover:text-background",children:[c("cta.getTds")," · PDF"]})]})]},e.model)})})]})}function eP(){let{target:e,navigate:t}=L(),{t:i,loc:r}=j(),o=n.useMemo(()=>{if(!e)return 0;let a=V.findIndex(a=>a.code===e);return a>=0?a:0},[e]),[s,l]=n.useState(o);n.useEffect(()=>l(o),[o]);let d=V[s],h=eA[d.code]??ep;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-foreground/20 opacity-50"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:i("pp.index")}),(0,a.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,a.jsx)(eN,{children:i("pp.eyebrow")})]})}),(0,a.jsx)(eT,{delay:80,children:(0,a.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[i("pp.title1"),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-brand",children:i("pp.title2")})]})}),(0,a.jsx)(eT,{delay:160,children:(0,a.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:i("pp.desc")})})]})]}),(0,a.jsx)(eS,{className:"!py-10",children:(0,a.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-6",children:V.map((e,n)=>{let t=eA[e.code]??ep,i=n===s;return(0,a.jsxs)("button",{onClick:()=>l(n),className:"group flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-all "+(i?"border-brand bg-brand-muted shadow-lg":"border-border bg-card hover:border-brand/40"),children:[(0,a.jsx)("span",{className:"grid size-9 place-items-center rounded-md border transition-colors "+(i?"border-brand bg-brand text-brand-foreground":"border-border text-muted-foreground group-hover:text-brand"),children:(0,a.jsx)(t,{className:"size-4"})}),(0,a.jsx)("span",{className:"font-mono text-[10px] tracking-widest "+(i?"text-brand":"text-muted-foreground"),children:e.code}),(0,a.jsx)("span",{className:"text-[13px] font-semibold leading-tight "+(i?"text-foreground":"text-foreground/80"),children:r(e.title)})]},e.code)})})}),(0,a.jsx)(eS,{className:"!pt-0",children:(0,a.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-start",children:[(0,a.jsxs)("div",{className:"lg:col-span-7",children:[(0,a.jsxs)(eT,{children:[(0,a.jsxs)("div",{className:"relative aspect-[4/3] overflow-hidden rounded-xl border border-border",children:[(0,a.jsx)(ex.Image,{src:eD(d.image),alt:r(d.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 58vw",className:"object-cover"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"}),(0,a.jsx)("div",{className:"absolute left-4 top-4 flex items-center gap-2",children:(0,a.jsx)("span",{className:"rounded-full bg-brand px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-brand-foreground",children:d.code})}),(0,a.jsx)("div",{className:"absolute bottom-4 left-4 right-4",children:(0,a.jsxs)("div",{className:"flex items-center gap-2 text-foreground",children:[(0,a.jsx)(h,{className:"size-5 text-brand"}),(0,a.jsx)("span",{className:"text-lg font-bold",children:r(d.title)})]})})]}),(0,a.jsx)("div",{className:"mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4",children:d.categorySpecs.map(e=>(0,a.jsxs)("div",{className:"rounded-lg border border-border bg-card p-3 text-center",children:[(0,a.jsx)("div",{className:"font-mono text-[15px] font-bold text-brand",children:e.value}),(0,a.jsx)("div",{className:"mt-0.5 text-[11px] leading-tight text-muted-foreground",children:r(e.label)})]},e.label.en))})]},d.code),(0,a.jsx)("div",{className:"mt-6 grid gap-3 sm:grid-cols-2",children:d.features.map(e=>(0,a.jsxs)("div",{className:"flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5",children:[(0,a.jsx)(u,{className:"mt-0.5 size-4 shrink-0 text-brand"}),(0,a.jsx)("span",{className:"text-[13px] leading-snug text-foreground/90",children:r(e)})]},e.en))})]}),(0,a.jsx)("div",{className:"lg:col-span-5",children:(0,a.jsxs)(eT,{children:[(0,a.jsxs)("span",{className:"font-mono text-[11px] tracking-widest text-brand",children:[d.code," ",i("pp.specSheet")]}),(0,a.jsx)("h2",{className:"mt-2 text-3xl font-bold tracking-tight text-foreground",children:r(d.title)}),(0,a.jsx)("p",{className:"mt-3 text-[14px] leading-relaxed text-muted-foreground",children:r(d.description)}),(0,a.jsxs)("div",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between border-b border-border/60 pb-2.5",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] tracking-widest text-muted-foreground",children:i("pp.technicalData")}),(0,a.jsx)("span",{className:"font-mono text-[10px] text-brand",children:"REV.2026"})]}),(0,a.jsx)("div",{className:"mt-1",children:d.specs.map(e=>(0,a.jsx)(ew,{label:r(e.label),value:e.value},e.label.en))})]}),(0,a.jsxs)("div",{className:"mt-5",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] tracking-widest text-muted-foreground",children:i("pp.applications")}),(0,a.jsx)("div",{className:"mt-2.5 flex flex-wrap gap-2",children:d.applications.map(e=>(0,a.jsx)("span",{className:"inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[12px] text-foreground/90",children:r(e)},e.en))})]}),(0,a.jsx)(eL,{models:d.models,title:i("pp.featuredModels"),expandLabel:i("pp.expandModels"),collapseLabel:i("pp.collapseModels"),detailLabel:i("pp.viewDetail"),hideDetailLabel:i("pp.hideDetail")}),(0,a.jsxs)("div",{className:"mt-6 flex flex-wrap gap-3",children:[(0,a.jsxs)(p,{onClick:()=>t("contact"),children:[i("cta.requestQuote")," ",(0,a.jsx)(em,{className:"size-4"})]}),(0,a.jsxs)(p,{variant:"outline",onClick:()=>t("contact"),children:[(0,a.jsx)(ez,{className:"size-4"})," ",i("cta.getTds")]})]})]},d.code+"-detail")})]})}),(0,a.jsxs)(eS,{className:"border-t border-border bg-card/40",children:[(0,a.jsx)(eC,{eyebrow:i("pp.fullCatalogEyebrow"),title:i("pp.fullCatalogTitle")}),(0,a.jsx)("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:V.map((e,n)=>{let t=eA[e.code]??ep;return(0,a.jsxs)("button",{onClick:()=>{l(n),window.scrollTo({top:0,behavior:"smooth"})},className:"group flex items-center gap-4 overflow-hidden rounded-lg border border-border bg-background p-3 text-left transition-all hover:border-brand/40 hover:shadow-md",children:[(0,a.jsxs)("div",{className:"relative size-16 shrink-0 overflow-hidden rounded-md",children:[(0,a.jsx)(ex.Image,{src:eD(e.image),alt:r(e.title),fill:!0,sizes:"64px",className:"object-cover transition-transform duration-500 group-hover:scale-110"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"}),(0,a.jsx)("span",{className:"absolute bottom-1 left-1 grid size-6 place-items-center rounded bg-ink/70 text-brand backdrop-blur",children:(0,a.jsx)(t,{className:"size-3.5"})})]}),(0,a.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,a.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-brand",children:e.code}),(0,a.jsx)("div",{className:"truncate text-[14px] font-semibold text-foreground",children:r(e.title)}),(0,a.jsx)("div",{className:"truncate text-[11px] text-muted-foreground",children:r(e.short)})]}),(0,a.jsx)(c,{className:"ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand"})]},e.code)})})]})]})}var ex=ex;let eE=(0,t.f)("factory",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]),eq={Factory:eE,Ship:(0,t.f)("ship",[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]]),Flame:eu,Construction:(0,t.f)("construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]),Building2:ef,LayoutGrid:(0,t.f)("layout-grid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]])};function eF(){let{navigate:e}=L(),{t:n,loc:t}=j();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,a.jsx)("div",{className:"pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/8 blur-3xl"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:n("sol.index")}),(0,a.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,a.jsx)(eN,{children:n("sol.eyebrow")})]})}),(0,a.jsx)(eT,{delay:80,children:(0,a.jsxs)("h1",{className:"mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[n("sol.titlePre")," ",(0,a.jsx)("span",{className:"text-brand",children:n("sol.titleAccent")})]})}),(0,a.jsx)(eT,{delay:160,children:(0,a.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:n("sol.desc")})})]})]}),(0,a.jsx)(eS,{children:(0,a.jsx)("div",{className:"grid gap-6 lg:grid-cols-2",children:Y.map((i,r)=>{let o=eq[i.icon]??eE;return(0,a.jsx)(eT,{delay:70*r,children:(0,a.jsxs)("div",{className:"group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-brand/40 hover:shadow-xl",children:[(0,a.jsxs)("div",{className:"relative aspect-[16/9] overflow-hidden",children:[(0,a.jsx)(ex.Image,{src:eD(i.image),alt:t(i.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"}),(0,a.jsxs)("div",{className:"absolute left-4 top-4 flex items-center gap-2",children:[(0,a.jsx)("span",{className:"grid size-9 place-items-center rounded-md border border-brand/40 bg-ink/70 text-brand backdrop-blur",children:(0,a.jsx)(o,{className:"size-5"})}),(0,a.jsx)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-foreground backdrop-blur",children:i.code})]})]}),(0,a.jsxs)("div",{className:"relative -mt-8 p-7",children:[(0,a.jsx)("h3",{className:"text-xl font-bold tracking-tight text-foreground",children:t(i.title)}),(0,a.jsx)("p",{className:"mt-2.5 text-[14px] leading-relaxed text-muted-foreground",children:t(i.desc)}),(0,a.jsxs)("div",{className:"mt-5 border-t border-border/60 pt-4",children:[(0,a.jsx)("span",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:n("sol.recommended")}),(0,a.jsx)("div",{className:"mt-2.5 flex flex-wrap gap-2",children:i.products.map(e=>(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[12px] text-foreground/90",children:[(0,a.jsx)(ev,{className:"size-3.5 text-brand"}),t(e)]},e.en))})]}),(0,a.jsxs)("button",{onClick:()=>e("contact"),className:"mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand transition-colors hover:text-brand/80",children:[n("cta.talkToEngineer")," ",(0,a.jsx)(em,{className:"size-4"})]})]})]})},i.code)})})}),(0,a.jsxs)(eS,{className:"border-t border-border bg-card/40",children:[(0,a.jsx)(eC,{eyebrow:n("sol.appEyebrow"),title:n("sol.appTitle"),description:n("sol.appDesc")}),(0,a.jsx)("div",{className:"mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:W.map((e,n)=>(0,a.jsx)(eT,{delay:50*n,children:(0,a.jsxs)("div",{className:"group flex items-center gap-4 rounded-lg border border-border bg-background p-5 transition-all hover:border-brand/40",children:[(0,a.jsx)("span",{className:"grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand",children:(0,a.jsx)("span",{className:"font-mono text-[12px] font-bold",children:n+1})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-brand",children:e.code}),(0,a.jsx)("div",{className:"text-[14px] font-medium text-foreground",children:t(e.title)})]})]})},e.code))})]}),(0,a.jsxs)(eS,{children:[(0,a.jsx)(eC,{eyebrow:n("sol.procEyebrow"),title:n("sol.procTitle"),align:"center",className:"mx-auto"}),(0,a.jsx)("div",{className:"mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:J.map((e,n)=>(0,a.jsx)(eT,{delay:70*n,children:(0,a.jsxs)("div",{className:"relative rounded-xl border border-border bg-card p-6",children:[(0,a.jsx)("span",{className:"font-mono text-3xl font-bold text-brand/25",children:e.no}),(0,a.jsx)("h3",{className:"mt-3 text-[15px] font-bold text-foreground",children:t(e.t)}),(0,a.jsx)("p",{className:"mt-1.5 text-[13px] leading-relaxed text-muted-foreground",children:t(e.d)}),n<J.length-1&&(0,a.jsx)(em,{className:"absolute -right-3 top-1/2 hidden size-5 -translate-y-1/2 text-brand/40 lg:block"})]})},e.no))}),(0,a.jsx)("div",{className:"mt-10 flex justify-center",children:(0,a.jsxs)(p,{size:"lg",onClick:()=>e("contact"),children:[n("cta.startProject")," ",(0,a.jsx)(em,{className:"size-4"})]})})]})]})}var ex=ex;let eM=(0,t.f)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),eO=(0,t.f)("ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]),eR=(0,t.f)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),eI=[eO,eg,eR];function eB(){let{target:e,navigate:t}=L(),{t:i,loc:r}=j(),o=n.useMemo(()=>{if(!e)return 0;let a=Q.findIndex(a=>a.code===e);return a>=0?a:0},[e]),[s,c]=n.useState(o);n.useEffect(()=>c(o),[o]);let l=Q[s];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:i("cases.index")}),(0,a.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,a.jsx)(eN,{children:i("cp.eyebrow")})]})}),(0,a.jsx)(eT,{delay:80,children:(0,a.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[i("cp.titlePre")," ",(0,a.jsx)("span",{className:"text-brand",children:i("cp.titleAccent")})]})}),(0,a.jsx)(eT,{delay:160,children:(0,a.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:i("cp.desc")})})]})]}),(0,a.jsx)(eS,{className:"!py-10",children:(0,a.jsx)("div",{className:"grid gap-4 sm:grid-cols-3",children:Q.map((e,n)=>{let t=n===s;return(0,a.jsx)("button",{onClick:()=>c(n),className:"group relative overflow-hidden rounded-xl border text-left transition-all "+(t?"border-brand bg-brand-muted shadow-lg":"border-border bg-card hover:border-brand/40"),children:(0,a.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,a.jsx)(ex.Image,{src:eD(e.image),alt:r(e.title),fill:!0,sizes:"(max-width: 640px) 100vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent"}),(0,a.jsx)("div",{className:"absolute left-3 top-3 flex items-center gap-1.5",children:(0,a.jsx)("span",{className:"rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-brand-foreground",children:e.code})}),(0,a.jsx)("div",{className:"absolute bottom-3 left-3 right-3",children:(0,a.jsxs)("div",{className:"flex items-center gap-2 font-mono text-[10px] tracking-wider text-foreground/90",children:[(0,a.jsx)(ec,{className:"size-3 text-brand"})," ",r(e.location),(0,a.jsx)("span",{className:"opacity-50",children:"·"}),(0,a.jsx)(eM,{className:"size-3 text-brand"})," ",e.year]})})]})},e.code)})})}),(0,a.jsx)(eS,{className:"!pt-0",children:(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-start",children:[(0,a.jsx)("div",{className:"lg:col-span-7",children:(0,a.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden rounded-xl border border-border",children:[(0,a.jsx)(ex.Image,{src:eD(l.image),alt:r(l.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 58vw",className:"object-cover"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"})]})}),(0,a.jsxs)("div",{className:"lg:col-span-5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"rounded-full bg-brand px-2.5 py-0.5 font-mono text-[11px] font-bold tracking-wider text-brand-foreground",children:l.code}),(0,a.jsxs)("span",{className:"inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground",children:[(0,a.jsx)(ec,{className:"size-3.5 text-brand"})," ",r(l.location)]}),(0,a.jsxs)("span",{className:"inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground",children:[(0,a.jsx)(eM,{className:"size-3.5 text-brand"})," ",l.year]})]}),(0,a.jsx)("h2",{className:"mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl",children:r(l.title)}),(0,a.jsx)("p",{className:"mt-4 text-[14px] leading-relaxed text-muted-foreground",children:r(l.summary)}),(0,a.jsx)("div",{className:"mt-6 grid grid-cols-3 gap-3",children:l.metrics.map((e,n)=>{let t=eI[n]??eO;return(0,a.jsxs)("div",{className:"rounded-lg border border-border bg-card p-4 text-center",children:[(0,a.jsx)(t,{className:"mx-auto size-4 text-brand"}),(0,a.jsx)("div",{className:"mt-2 font-mono text-[15px] font-bold text-foreground",children:e.value}),(0,a.jsx)("div",{className:"mt-0.5 text-[11px] text-muted-foreground",children:r(e.label)})]},e.label.en)})}),(0,a.jsxs)("div",{className:"mt-6 flex flex-wrap gap-3",children:[(0,a.jsxs)(p,{onClick:()=>t("contact"),children:[i("cta.requestSimilar")," ",(0,a.jsx)(em,{className:"size-4"})]}),(0,a.jsx)(p,{variant:"outline",onClick:()=>t("products"),children:i("cta.relatedProducts")})]})]})]})},l.code)}),(0,a.jsxs)(eS,{className:"border-t border-border bg-card/40",children:[(0,a.jsx)("div",{className:"mb-8 max-w-2xl",children:(0,a.jsx)(eN,{children:i("cp.outcomesTitle")})}),(0,a.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:er.map(e=>(0,a.jsxs)("div",{className:"rounded-xl border border-border bg-background p-6 text-center",children:[(0,a.jsx)("div",{className:"text-3xl font-bold tracking-tight text-brand sm:text-4xl",children:e.v}),(0,a.jsx)("div",{className:"mt-2 text-[12px] text-muted-foreground",children:r(e.l)})]},e.v))})]})]})}var ex=ex;let eU=(0,t.f)("earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),eV=(0,t.f)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]),eG={Factory:eE,FlaskConical:ey,Globe2:eU,Truck:(0,t.f)("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]])};function eW(){let{navigate:e}=L(),{t:n,loc:t}=j();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,a.jsx)("div",{className:"pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/8 blur-3xl"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:n("ap.index")}),(0,a.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,a.jsx)(eN,{children:n("ap.eyebrow")})]})}),(0,a.jsx)(eT,{delay:80,children:(0,a.jsxs)("h1",{className:"mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[n("ap.titlePre")," ",(0,a.jsx)("span",{className:"text-brand",children:n("ap.titleAccent")})]})}),(0,a.jsx)(eT,{delay:160,children:(0,a.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:n("ap.desc")})})]})]}),(0,a.jsx)(eS,{className:"!py-12",children:(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-4",children:B.map((e,n)=>(0,a.jsx)(eT,{delay:60*n,children:(0,a.jsxs)("div",{className:"rounded-xl border border-border bg-card p-6",children:[(0,a.jsx)("div",{className:"text-3xl font-bold tracking-tight text-brand sm:text-4xl",children:e.value}),(0,a.jsx)("div",{className:"mt-2 text-[13px] text-foreground",children:t(e.label)}),(0,a.jsx)("div",{className:"mt-0.5 font-mono text-[11px] text-muted-foreground",children:t(e.sub)})]})},e.label.en))})}),(0,a.jsx)(eS,{className:"!pt-0",children:(0,a.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-center",children:[(0,a.jsx)("div",{className:"lg:col-span-6",children:(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"relative aspect-[4/3] overflow-hidden rounded-xl border border-border",children:[(0,a.jsx)(ex.Image,{src:eD("/images/factory.jpg"),alt:"HONG NGUYEN paint manufacturing facility",fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",className:"object-cover"}),(0,a.jsxs)("div",{className:"absolute bottom-4 left-4 rounded-lg bg-ink/80 px-4 py-2.5 backdrop-blur",children:[(0,a.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-brand",children:n("footer.headquarters")}),(0,a.jsx)("div",{className:"text-[13px] font-semibold text-foreground",children:"Foshan, Guangdong"})]})]})})}),(0,a.jsxs)("div",{className:"lg:col-span-6",children:[(0,a.jsx)(eC,{eyebrow:n("ap.storyEyebrow"),title:n("ap.storyTitle")}),(0,a.jsxs)("div",{className:"mt-6 space-y-4 text-[14px] leading-relaxed text-muted-foreground",children:[(0,a.jsx)("p",{children:n("ap.storyP1")}),(0,a.jsx)("p",{children:n("ap.storyP2")}),(0,a.jsx)("p",{children:n("ap.storyP3")}),(0,a.jsx)("p",{children:n("ap.storyP4")})]}),(0,a.jsx)("ul",{className:"mt-6 grid gap-2.5 sm:grid-cols-2",children:et.map(e=>(0,a.jsxs)("li",{className:"flex items-center gap-2 text-[13px] text-foreground/90",children:[(0,a.jsx)(ev,{className:"size-4 text-brand"})," ",t(e)]},e.en))})]})]})}),(0,a.jsxs)(eS,{className:"border-t border-border bg-card/40",children:[(0,a.jsx)(eC,{eyebrow:n("ap.capEyebrow"),title:n("ap.capTitle")}),(0,a.jsx)("div",{className:"mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:en.map((e,n)=>{let i=eG[e.icon]??eE;return(0,a.jsx)(eT,{delay:70*n,children:(0,a.jsxs)("div",{className:"h-full rounded-xl border border-border bg-background p-6",children:[(0,a.jsx)("span",{className:"grid size-11 place-items-center rounded-lg border border-brand/30 bg-brand-muted text-brand",children:(0,a.jsx)(i,{className:"size-5"})}),(0,a.jsx)("h3",{className:"mt-4 text-[15px] font-bold text-foreground",children:t(e.t)}),(0,a.jsx)("p",{className:"mt-1.5 text-[13px] leading-relaxed text-muted-foreground",children:t(e.d)})]})},e.t.en)})}),(0,a.jsx)(eT,{delay:120,children:(0,a.jsxs)("div",{className:"mt-8 grid overflow-hidden rounded-xl border border-border lg:grid-cols-2",children:[(0,a.jsxs)("div",{className:"relative aspect-[16/10] lg:aspect-auto",children:[(0,a.jsx)(ex.Image,{src:eD("/images/about-rd.jpg"),alt:"Coatings laboratory — illustrative image",fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",className:"object-cover"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent to-card/40"})]}),(0,a.jsxs)("div",{className:"bg-background p-7 lg:p-9",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(ey,{className:"size-5 text-brand"}),(0,a.jsx)("span",{className:"eyebrow text-brand text-[11px]",children:"TECHNICAL & QC SUPPORT"})]}),(0,a.jsx)("h3",{className:"mt-3 text-xl font-bold tracking-tight text-foreground",children:t({en:"Plant-backed technical support and QC.",zh:"工厂级技术支持与质量把控。",vi:"Hỗ trợ kỹ thuật và QC từ nhà máy."})}),(0,a.jsx)("p",{className:"mt-3 text-[14px] leading-relaxed text-muted-foreground",children:t({en:"System selection and application guidance are provided together with the producing plants' technical teams. Every order can ship with a batch QC report, and third-party pre-shipment testing is arranged on request.",zh:"体系选型与施工指导由生产工厂技术团队配合提供。每单可随附批次质检报告，也可按要求安排装运前第三方检测。",vi:"Tư vấn hệ thống và hướng dẫn thi công phối hợp cùng đội kỹ thuật nhà máy sản xuất. Mỗi đơn có thể kèm báo cáo QC theo lô và thử nghiệm bên thứ ba trước giao theo yêu cầu."})}),(0,a.jsx)("ul",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:[{en:"Batch QC reports per order",zh:"每单批次质检报告",vi:"Báo cáo QC theo lô"},{en:"System specification support",zh:"体系选型支持",vi:"Hỗ trợ chọn hệ thống"},{en:"Colour matching (RAL / Pantone)",zh:"RAL / Pantone 调色",vi:"Pha màu RAL / Pantone"},{en:"Third-party testing on request",zh:"可安排第三方检测",vi:"Thử bên thứ ba theo yêu cầu"}].map(e=>(0,a.jsxs)("li",{className:"flex items-center gap-2 text-[13px] text-foreground/90",children:[(0,a.jsx)(ev,{className:"size-4 text-brand"})," ",t(e)]},e.en))})]})]})})]}),(0,a.jsxs)(eS,{children:[(0,a.jsx)(eC,{eyebrow:n("ap.procEyebrow"),title:n("ap.procTitle"),align:"center",className:"mx-auto"}),(0,a.jsxs)("div",{className:"relative mt-12",children:[(0,a.jsx)("div",{className:"absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"}),(0,a.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:Z.map((e,n)=>(0,a.jsx)(eT,{delay:80*n,children:(0,a.jsxs)("div",{className:"relative text-center lg:text-left",children:[(0,a.jsx)("div",{className:"mx-auto flex size-14 items-center justify-center rounded-full border-2 border-brand dark bg-ink font-mono text-lg font-bold text-brand lg:mx-0",children:e.no}),(0,a.jsx)("h3",{className:"mt-4 text-[15px] font-bold text-foreground",children:t(e.title)}),(0,a.jsx)("p",{className:"mt-1.5 text-[13px] leading-relaxed text-muted-foreground",children:t(e.desc)})]})},e.no))})]})]}),(0,a.jsx)(eS,{className:"border-t border-border bg-card/40",children:(0,a.jsxs)("div",{className:"grid gap-10 lg:grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(eC,{eyebrow:n("ap.certEyebrow"),title:n("ap.certTitle")}),(0,a.jsx)("div",{className:"mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",children:K.map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-2.5 rounded-lg border border-border bg-background p-4",children:[(0,a.jsx)(eV,{className:"size-5 shrink-0 text-brand"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-mono text-[12px] font-bold text-foreground",children:e.code}),(0,a.jsx)("div",{className:"text-[11px] text-muted-foreground",children:t(e.title)})]})]},e.code))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(eC,{eyebrow:n("ap.partnersEyebrow"),title:n("ap.partnersTitle")}),(0,a.jsx)("div",{className:"mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",children:X.map(e=>(0,a.jsx)("div",{className:"grid place-items-center rounded-lg border border-border bg-background px-3 py-5 text-center font-mono text-sm font-bold tracking-widest text-muted-foreground/80",children:t(e)},e.en))})]})]})}),(0,a.jsx)(eS,{children:(0,a.jsxs)("div",{className:"relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-muted via-background to-secondary p-8 sm:p-12",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.05]"}),(0,a.jsx)("div",{className:"pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-brand/15 blur-3xl"}),(0,a.jsxs)("div",{className:"relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center",children:[(0,a.jsxs)("div",{className:"max-w-xl",children:[(0,a.jsx)(eN,{children:n("cta.partnerWithUs")}),(0,a.jsx)("h3",{className:"mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",children:n("ap.ctaTitle")}),(0,a.jsx)("p",{className:"mt-3 text-[14px] text-muted-foreground",children:n("ap.ctaDesc")})]}),(0,a.jsxs)(p,{size:"lg",onClick:()=>e("contact"),children:[n("cta.getQuote")," ",(0,a.jsx)(em,{className:"size-4"})]})]})]})})]})}var ex=ex;let eQ=(0,t.f)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),eK=(0,t.f)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),e_=(0,t.f)("newspaper",[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]]),eX=["All","Product Launch","Project","Certification","Export","R&D","Industry"],e$={en:"en-US",zh:"zh-CN",vi:"vi-VN",es:"es-ES",ar:"ar-u-nu-latn"};function eY(e,a){return new Date(e).toLocaleDateString(e$[a],{year:"numeric",month:"short",day:"numeric"})}function eZ({body:e}){let n=e.split(/\n\n+/).map(e=>e.trim()).filter(Boolean);return(0,a.jsx)("div",{className:"space-y-5",children:n.map((e,n)=>e.startsWith("## ")?(0,a.jsx)("h2",{className:"pt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl",children:e.slice(3)},n):(0,a.jsx)("p",{className:"text-[15px] leading-relaxed text-foreground/85",children:e},n))})}function eJ(){let{navigate:e}=L(),{t,loc:i,locale:r}=j(),[o,s]=n.useState("All"),[d,h]=n.useState(null),x=n.useMemo(()=>"All"===o?ee:ee.filter(e=>e.category===o),[o]),m=e=>{h(e),window.scrollTo({top:0,behavior:"auto"})};if(null!==d&&ee[d]){let n=ee[d];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-3xl px-6 py-12 sm:py-16",children:[(0,a.jsxs)("button",{onClick:()=>h(null),className:"inline-flex items-center gap-1.5 text-[13px] font-medium text-brand transition-colors hover:text-brand/80",children:[(0,a.jsx)(eQ,{className:"size-4"})," ",t("np.backToNews")]}),(0,a.jsxs)("div",{className:"mt-6 flex flex-wrap items-center gap-2",children:[(0,a.jsx)("span",{className:"rounded-full bg-brand px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-foreground",children:t(`cat.${n.category}`)}),(0,a.jsxs)("span",{className:"font-mono text-[11px] text-muted-foreground",children:[eY(n.date,r)," · ",i(n.read)]})]}),(0,a.jsx)("h1",{className:"mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl",children:i(n.title)}),(0,a.jsx)("p",{className:"mt-4 text-[15px] leading-relaxed text-muted-foreground",children:i(n.excerpt)})]})]}),(0,a.jsx)(eS,{children:(0,a.jsxs)("div",{className:"mx-auto max-w-3xl",children:[(0,a.jsx)("div",{className:"relative aspect-[16/8] overflow-hidden rounded-xl border border-border",children:(0,a.jsx)(ex.Image,{src:eD(n.image),alt:i(n.title),fill:!0,sizes:"(max-width: 768px) 100vw, 768px",className:"object-cover"})}),(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)(eZ,{body:i(n.body)})}),(0,a.jsxs)("div",{className:"mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-brand/20 bg-gradient-to-br from-brand-muted via-background to-secondary p-6 sm:flex-row sm:items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-[15px] font-bold text-foreground",children:t("np.articleCtaTitle")}),(0,a.jsx)("p",{className:"mt-1 text-[13px] text-muted-foreground",children:t("np.articleCtaDesc")})]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,a.jsxs)(p,{onClick:()=>e("contact"),children:[t("cta.askEngineer")," ",(0,a.jsx)(em,{className:"size-4"})]}),(0,a.jsxs)(p,{variant:"outline",onClick:()=>e("contact"),children:[(0,a.jsx)(l,{className:"size-4"})," ",t("cta.whatsappChat")]})]})]})]})})]})}let[u,...g]=x;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:"[ NEWS ]"}),(0,a.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,a.jsx)(eN,{children:t("np.eyebrow")})]})}),(0,a.jsx)(eT,{delay:80,children:(0,a.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[t("np.titlePre")," ",(0,a.jsx)("span",{className:"text-brand",children:t("np.titleAccent")})]})}),(0,a.jsx)(eT,{delay:160,children:(0,a.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:t("np.desc")})})]})]}),(0,a.jsx)(eS,{className:"!py-8",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:eX.map(e=>{let n="All"===e?t("np.all"):t(`cat.${e}`);return(0,a.jsx)("button",{onClick:()=>s(e),className:"rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors "+(o===e?"border-brand bg-brand text-brand-foreground":"border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"),children:n},e)})})}),u&&(0,a.jsx)(eS,{className:"!pt-0",children:(0,a.jsx)(eT,{children:(0,a.jsxs)("article",{role:"button",tabIndex:0,onClick:()=>m(ee.indexOf(u)),onKeyDown:e=>"Enter"===e.key&&m(ee.indexOf(u)),className:"group grid cursor-pointer overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:border-brand/40 hover:shadow-xl lg:grid-cols-2",children:[(0,a.jsxs)("div",{className:"relative min-h-[280px] overflow-hidden bg-ink",children:[(0,a.jsx)(ex.Image,{src:eD(u.image),alt:i(u.title),fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent"}),(0,a.jsx)("div",{className:"pointer-events-none absolute -right-16 -top-16 size-60 rounded-full bg-brand/20 blur-3xl"}),(0,a.jsxs)("div",{className:"relative flex h-full flex-col justify-between p-8",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-foreground",children:t("np.featured")}),(0,a.jsx)("span",{className:"rounded-full border border-border bg-ink/60 px-3 py-1 font-mono text-[10px] tracking-widest text-foreground backdrop-blur",children:t(`cat.${u.category}`)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(e_,{className:"size-10 text-brand"}),(0,a.jsxs)("p",{className:"mt-4 font-mono text-[11px] tracking-widest text-foreground/80",children:[eY(u.date,r)," · ",i(u.read)]})]})]})]}),(0,a.jsxs)("div",{className:"p-8 lg:p-10",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl",children:i(u.title)}),(0,a.jsx)("p",{className:"mt-4 text-[15px] leading-relaxed text-muted-foreground",children:i(u.excerpt)}),(0,a.jsxs)("div",{className:"mt-6 flex items-center gap-4 text-[12px] text-muted-foreground",children:[(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5",children:[(0,a.jsx)(eK,{className:"size-3.5 text-brand"})," ",i(u.read)]}),(0,a.jsx)("span",{className:"font-mono",children:eY(u.date,r)})]}),(0,a.jsxs)("span",{className:"mt-6 inline-flex h-10 items-center gap-2 rounded-md border border-brand/30 bg-brand-muted px-5 text-sm font-semibold text-brand transition-colors hover:bg-brand/20",children:[t("cta.readArticle")," ",(0,a.jsx)(em,{className:"size-4"})]})]})]})})}),(0,a.jsx)(eS,{className:"!pt-0",children:(0,a.jsx)("div",{className:"grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:g.map((e,n)=>{let o=ee.indexOf(e);return(0,a.jsx)(eT,{delay:60*n,children:(0,a.jsxs)("article",{role:"button",tabIndex:0,onClick:()=>m(o),onKeyDown:e=>"Enter"===e.key&&m(o),className:"group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-brand/40 hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,a.jsx)(ex.Image,{src:eD(e.image),alt:i(e.title),fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent"}),(0,a.jsx)("div",{className:"absolute left-3 top-3",children:(0,a.jsx)("span",{className:"rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-foreground backdrop-blur",children:t(`cat.${e.category}`)})})]}),(0,a.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-muted-foreground",children:eY(e.date,r)}),(0,a.jsx)("h3",{className:"mt-2 text-[16px] font-bold leading-snug tracking-tight text-foreground",children:i(e.title)}),(0,a.jsx)("p",{className:"mt-2.5 flex-1 text-[13px] leading-relaxed text-muted-foreground",children:i(e.excerpt)}),(0,a.jsxs)("div",{className:"mt-4 flex items-center justify-between border-t border-border/60 pt-3",children:[(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-[12px] text-muted-foreground",children:[(0,a.jsx)(eK,{className:"size-3.5 text-brand"})," ",i(e.read)]}),(0,a.jsx)(c,{className:"size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand"})]})]})]})},e.title.en)})})}),(0,a.jsx)(eS,{className:"border-t border-border bg-card/40",children:(0,a.jsxs)("div",{className:"flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-background p-8 sm:p-10 lg:flex-row lg:items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(eN,{children:t("np.stayEyebrow")}),(0,a.jsx)("h3",{className:"mt-2 text-2xl font-bold tracking-tight text-foreground",children:t("np.stayTitle")}),(0,a.jsx)("p",{className:"mt-2 text-[14px] text-muted-foreground",children:t("np.stayDesc")})]}),(0,a.jsxs)(p,{size:"lg",onClick:()=>{let e=encodeURIComponent("Subscribe — HONG NGUYEN B2B Coatings Briefing"),a=encodeURIComponent("Please add me to the monthly B2B coatings briefing.\n\nName:\nCompany:\nCountry:");window.location.href=`mailto:${F}?subject=${e}&body=${a}`},children:[t("cta.subscribe")," ",(0,a.jsx)(em,{className:"size-4"})]})]})})]})}let e0=(0,t.f)("message-circle-question-mark",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),e1=(0,t.f)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);var e2=e.i(30030),e3=e.i(75830),e4=e.i(20783),e7=e.i(81140),e5=e.i(69340),e9=e.i(48425),e8=e.i(34620),e6=e.i(96626),ae=Object.defineProperty,aa=n[" useId ".trim().toString()]||(()=>void 0),an=0;function at(e){let[a,t]=n.useState(aa());return(0,e8.f)(()=>{e||t(e=>e??String(an++))},[e]),e||(a?`radix-${a}`:"")}ae(at,"name",{value:"useId",configurable:!0});var ai=Object.defineProperty,ar=(e,a)=>ai(e,"name",{value:a,configurable:!0}),ao="Collapsible",[as,ac]=(0,e2.f)(ao),[al,ad]=as(ao),ah=n.forwardRef(ar(function(e,t){let{__scopeCollapsible:i,open:r,defaultOpen:o,disabled:s,onOpenChange:c,...l}=e,[d,h]=(0,e5.f)({prop:r,defaultProp:o??!1,onChange:c,caller:ao});return(0,a.jsx)(al,{scope:i,disabled:s,contentId:at(),open:d,onOpenToggle:n.useCallback(()=>h(e=>!e),[h]),children:(0,a.jsx)(e9.V.div,{"data-state":ag(d),"data-disabled":s?"":void 0,...l,ref:t})})},"Collapsible")),ax=n.forwardRef(ar(function(e,n){let{__scopeCollapsible:t,...i}=e,r=ad("CollapsibleTrigger",t);return(0,a.jsx)(e9.V.button,{type:"button","aria-controls":r.open?r.contentId:void 0,"aria-expanded":r.open||!1,"data-state":ag(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...i,ref:n,onClick:(0,e7.f)(e.onClick,r.onOpenToggle)})},"CollapsibleTrigger")),am="CollapsibleContent",ap=n.forwardRef(ar(function(e,n){let{forceMount:t,...i}=e,r=ad(am,e.__scopeCollapsible);return(0,a.jsx)(e6.f,{present:t||r.open,children:({present:e})=>(0,a.jsx)(au,{...i,ref:n,present:e})})},"CollapsibleContent")),au=n.forwardRef(ar(function(e,t){let{__scopeCollapsible:i,present:r,children:o,...s}=e,c=ad(am,i),[l,d]=n.useState(r),h=n.useRef(null),x=(0,e4.f)(t,h),m=n.useRef(0),p=m.current,u=n.useRef(0),g=u.current,f=c.open||l,b=n.useRef(f),y=n.useRef(void 0);return n.useEffect(()=>{let e=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,e8.f)(()=>{let e=h.current;if(e){y.current=y.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let a=e.getBoundingClientRect();m.current=a.height,u.current=a.width,b.current||(e.style.transitionDuration=y.current.transitionDuration,e.style.animationName=y.current.animationName),d(r)}},[c.open,r]),(0,a.jsx)(e9.V.div,{"data-state":ag(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!f,...s,ref:x,style:{"--radix-collapsible-content-height":p?`${p}px`:void 0,"--radix-collapsible-content-width":g?`${g}px`:void 0,...e.style},children:f&&o})},"CollapsibleContentImpl"));function ag(e){return e?"open":"closed"}ar(ag,"getState");var af=Object.defineProperty,ab=n.createContext(void 0);function ay(e){let a=n.useContext(ab);return e||a||"ltr"}af(ay,"name",{value:"useDirection",configurable:!0});var av=Object.defineProperty,ak=(e,a)=>av(e,"name",{value:a,configurable:!0}),aN="vertical",aC="horizontal",aS="Accordion",aw=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[aT,{useGetCollection:aD,createCollectionScope:aj}]=(0,e3.K)(aS),[aH,az]=(0,e2.f)(aS,[aj,ac]),aA=ac(),aL=n.forwardRef(ak(function(e,n){let{type:t,...i}=e;return(0,a.jsx)(aT.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,a.jsx)(aO,{...i,ref:n}):(0,a.jsx)(aM,{...i,ref:n})})},"Accordion")),[aP,aE]=aH(aS),[aq,aF]=aH(aS,{collapsible:!1}),aM=n.forwardRef(ak(function(e,t){let{value:i,defaultValue:r,onValueChange:o=ak(()=>{},"onValueChange"),collapsible:s=!1,...c}=e,[l,d]=(0,e5.f)({prop:i,defaultProp:r??"",onChange:o,caller:aS});return(0,a.jsx)(aP,{scope:e.__scopeAccordion,value:n.useMemo(()=>l?[l]:[],[l]),onItemOpen:d,onItemClose:n.useCallback(()=>s&&d(""),[s,d]),children:(0,a.jsx)(aq,{scope:e.__scopeAccordion,collapsible:s,children:(0,a.jsx)(aB,{...c,ref:t})})})},"AccordionImplSingle")),aO=n.forwardRef(ak(function(e,t){let{value:i,defaultValue:r,onValueChange:o=ak(()=>{},"onValueChange"),...s}=e,[c,l]=(0,e5.f)({prop:i,defaultProp:r??[],onChange:o,caller:aS}),d=n.useCallback(e=>l((a=[])=>[...a,e]),[l]),h=n.useCallback(e=>l((a=[])=>a.filter(a=>a!==e)),[l]);return(0,a.jsx)(aP,{scope:e.__scopeAccordion,value:c,onItemOpen:d,onItemClose:h,children:(0,a.jsx)(aq,{scope:e.__scopeAccordion,collapsible:!0,children:(0,a.jsx)(aB,{...s,ref:t})})})},"AccordionImplMultiple")),[aR,aI]=aH(aS),aB=n.forwardRef(ak(function(e,t){let{__scopeAccordion:i,disabled:r,dir:o,orientation:s=aN,...c}=e,l=n.useRef(null),d=(0,e4.f)(l,t),h=aD(i),x="ltr"===ay(o),m=(0,e7.f)(e.onKeyDown,e=>{if(!aw.includes(e.key))return;let a=h(),n=e.target,t=a.filter(([,e])=>!e.element.disabled),i=t.findIndex(([,e])=>e.element===n),r=t.size;if(-1===i)return;e.preventDefault();let o=i,c=r-1,l=ak(()=>{(o=i+1)>c&&(o=0)},"moveNext"),d=ak(()=>{(o=i-1)<0&&(o=c)},"movePrev");switch(e.key){case"Home":o=0;break;case"End":o=c;break;case"ArrowRight":s===aC&&(x?l():d());break;case"ArrowDown":s===aN&&l();break;case"ArrowLeft":s===aC&&(x?d():l());break;case"ArrowUp":s===aN&&d()}let m=o%r;t.at(m)?.element.focus()});return(0,a.jsx)(aR,{scope:i,disabled:r,direction:o,orientation:s,children:(0,a.jsx)(aT.Slot,{scope:i,children:(0,a.jsx)(e9.V.div,{...c,"data-orientation":s,ref:d,onKeyDown:r?void 0:m})})})},"AccordionImpl")),aU="AccordionItem",[aV,aG]=aH(aU),aW=n.forwardRef(ak(function(e,n){let{__scopeAccordion:t,value:i,...r}=e,o=aI(aU,t),s=aE(aU,t),c=aA(t),l=at(),d=i&&s.value.includes(i)||!1,h=o.disabled||e.disabled;return(0,a.jsx)(aV,{scope:t,open:d,disabled:h,triggerId:l,children:(0,a.jsx)(ah,{"data-orientation":o.orientation,"data-state":a$(d),...c,...r,ref:n,disabled:h,open:d,onOpenChange:e=>{e?s.onItemOpen(i):s.onItemClose(i)}})})},"AccordionItem")),aQ=n.forwardRef(ak(function(e,n){let{__scopeAccordion:t,...i}=e,r=aI(aS,t),o=aG("AccordionHeader",t);return(0,a.jsx)(e9.V.h3,{"data-orientation":r.orientation,"data-state":a$(o.open),"data-disabled":o.disabled?"":void 0,...i,ref:n})},"AccordionHeader")),aK="AccordionTrigger",a_=n.forwardRef(ak(function(e,n){let{__scopeAccordion:t,...i}=e,r=aI(aS,t),o=aG(aK,t),s=aF(aK,t),c=aA(t);return(0,a.jsx)(aT.ItemSlot,{scope:t,children:(0,a.jsx)(ax,{"aria-disabled":o.open&&!s.collapsible||void 0,"data-orientation":r.orientation,id:o.triggerId,...c,...i,ref:n})})},"AccordionTrigger")),aX=n.forwardRef(ak(function(e,n){let{__scopeAccordion:t,...i}=e,r=aI(aS,t),o=aG("AccordionContent",t),s=aA(t);return(0,a.jsx)(ap,{role:"region","aria-labelledby":o.triggerId,"data-orientation":r.orientation,...s,...i,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})},"AccordionContent"));function a$(e){return e?"open":"closed"}function aY({...e}){return(0,a.jsx)(aL,{"data-slot":"accordion",...e})}function aZ({className:e,...n}){return(0,a.jsx)(aW,{"data-slot":"accordion-item",className:(0,x.f)("border-b last:border-b-0",e),...n})}function aJ({className:e,children:n,...t}){return(0,a.jsx)(aQ,{className:"flex",children:(0,a.jsxs)(a_,{"data-slot":"accordion-trigger",className:(0,x.f)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...t,children:[n,(0,a.jsx)(f,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function a0({className:e,children:n,...t}){return(0,a.jsx)(aX,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...t,children:(0,a.jsx)("div",{className:(0,x.f)("pt-0 pb-4",e),children:n})})}function a1(){let{navigate:e}=L(),{t,loc:i,locale:r}=j(),[o,s]=n.useState(""),c=n.useMemo(()=>{let e=o.trim().toLowerCase();return e?ea.filter(a=>{let n=a.q[r]??a.q.en,t=a.a[r]??a.a.en;return n.toLowerCase().includes(e)||t.toLowerCase().includes(e)}):ea},[o,r]),l=[[t("fp.moq"),"200 kg"],[t("fp.sampleLead"),"7 – 15 days"],[t("fp.prodLead"),"7 – 15 days"],[t("fp.warranty"),"24 months"],[t("fp.exportCountries"),"Global"]];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,a.jsx)("div",{className:"pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-brand/8 blur-3xl"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:"[ FAQ ]"}),(0,a.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,a.jsx)(eN,{children:t("fp.eyebrow")})]})}),(0,a.jsx)(eT,{delay:80,children:(0,a.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[t("fp.titlePre")," ",(0,a.jsx)("span",{className:"text-brand",children:t("fp.titleAccent")})]})}),(0,a.jsx)(eT,{delay:160,children:(0,a.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:t("fp.desc")})}),(0,a.jsx)(eT,{delay:240,children:(0,a.jsx)("div",{className:"mt-8 max-w-xl",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(e1,{className:"pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"}),(0,a.jsx)("input",{type:"text",value:o,onChange:e=>s(e.target.value),placeholder:t("fp.searchPlaceholder"),className:"h-12 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"})]})})})]})]}),(0,a.jsx)(eS,{children:(0,a.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12",children:[(0,a.jsx)("aside",{className:"lg:col-span-4",children:(0,a.jsxs)("div",{className:"sticky top-28 rounded-xl border border-border bg-card p-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(e0,{className:"size-5 text-brand"}),(0,a.jsx)("h3",{className:"text-[15px] font-bold text-foreground",children:t("fp.sidebarTitle")})]}),(0,a.jsx)("p",{className:"mt-2 text-[13px] leading-relaxed text-muted-foreground",children:t("fp.sidebarDesc")}),(0,a.jsxs)(p,{className:"mt-5 w-full",onClick:()=>e("contact"),children:[t("cta.askEngineer")," ",(0,a.jsx)(em,{className:"size-4"})]}),(0,a.jsxs)("div",{className:"mt-6 border-t border-border/60 pt-5",children:[(0,a.jsx)("span",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:t("fp.quickFacts")}),(0,a.jsx)("dl",{className:"mt-3 space-y-2.5 text-[13px]",children:l.map(([e,n])=>(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("dt",{className:"text-muted-foreground",children:e}),(0,a.jsx)("dd",{className:"font-mono font-medium text-foreground",children:n})]},e))})]})]})}),(0,a.jsx)("div",{className:"lg:col-span-8",children:0===c.length?(0,a.jsx)("div",{className:"rounded-xl border border-dashed border-border p-12 text-center",children:(0,a.jsxs)("p",{className:"text-[14px] text-muted-foreground",children:[t("fp.noResults")," “",o,"”",t("fp.tryOrAsk")," ",(0,a.jsx)("button",{onClick:()=>e("contact"),className:"font-medium text-brand hover:underline",children:t("cta.askEngineer")}),"."]})}):(0,a.jsx)(aY,{type:"single",collapsible:!0,className:"space-y-3",children:c.map((e,n)=>(0,a.jsx)(eT,{delay:40*n,children:(0,a.jsxs)(aZ,{value:`item-${n}`,className:"overflow-hidden rounded-xl border border-border bg-card px-5 data-[state=open]:border-brand/40",children:[(0,a.jsx)(aJ,{className:"py-5 text-left text-[15px] font-semibold text-foreground hover:no-underline",children:(0,a.jsx)("span",{className:"pr-3",children:i(e.q)})}),(0,a.jsx)(a0,{className:"pb-5 text-[14px] leading-relaxed text-muted-foreground",children:i(e.a)})]})},e.q.en))})})]})})]})}ak(a$,"getState");let a2=(0,t.f)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var a3=e.i(8406);function a4(){let{toast:e}=(0,a3.f)(),{t,loc:i,locale:r}=j(),{navigate:c}=L(),[d,h]=n.useState("idle"),[m,u]=n.useState(""),[g,f]=n.useState("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary",children:[(0,a.jsx)("div",{className:"absolute inset-0 grid-bg text-steel opacity-[0.06]"}),(0,a.jsx)("div",{className:"pointer-events-none absolute -right-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-brand/8 blur-3xl"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 py-16 sm:py-20",children:[(0,a.jsx)(eT,{children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"font-mono text-[11px] text-brand tracking-widest",children:t("ctp.index")}),(0,a.jsx)("span",{className:"h-px w-8 bg-brand/50"}),(0,a.jsx)(eN,{children:t("ctp.eyebrow")})]})}),(0,a.jsx)(eT,{delay:80,children:(0,a.jsxs)("h1",{className:"mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",children:[t("ctp.title1"),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-brand",children:t("ctp.title2")})]})}),(0,a.jsx)(eT,{delay:160,children:(0,a.jsx)("p",{className:"mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",children:t("ctp.desc")})})]})]}),(0,a.jsx)(eS,{children:(0,a.jsxs)("div",{className:"grid gap-10 lg:grid-cols-12 lg:items-start",children:[(0,a.jsxs)("div",{className:"lg:col-span-5",children:[(0,a.jsx)(eC,{eyebrow:t("ctp.directEyebrow"),title:t("ctp.directTitle"),description:t("ctp.directDesc")}),(0,a.jsx)("ul",{className:"mt-8 space-y-3",children:[{icon:o,label:t("footer.contact.phone"),value:M,href:`tel:${M.replace(/\s/g,"")}`},{icon:s,label:t("footer.contact.email"),value:F,href:`mailto:${F}`},{icon:l,label:"WhatsApp",value:O,href:`https://wa.me/${O.replace(/\D/g,"")}`},{icon:l,label:t("footer.contact.whatsapp"),value:"Mr Hogo Shi · WeChat: hogo13"},{icon:ec,label:t("footer.contact.address"),value:i(R)}].map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:e.href??"#",className:"group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40",children:[(0,a.jsx)("span",{className:"grid size-10 shrink-0 place-items-center rounded-md border border-brand/30 bg-brand-muted text-brand",children:(0,a.jsx)(e.icon,{className:"size-5"})}),(0,a.jsxs)("div",{className:"min-w-0",children:[(0,a.jsx)("div",{className:"font-mono text-[10px] tracking-widest text-muted-foreground",children:e.label.toUpperCase()}),(0,a.jsx)("div",{className:"mt-0.5 text-[14px] font-medium leading-snug text-foreground",children:e.value})]})]})},e.label))}),(0,a.jsx)("div",{className:"mt-6 grid grid-cols-3 gap-3",children:[{icon:eK,t:"24h",s:t("ctp.trustQuote")},{icon:eE,t:"48h",s:t("ctp.trustSample")},{icon:eR,t:"24 mo",s:t("ctp.trustWarranty")}].map(e=>(0,a.jsxs)("div",{className:"rounded-lg border border-border bg-background p-4 text-center",children:[(0,a.jsx)(e.icon,{className:"mx-auto size-4 text-brand"}),(0,a.jsx)("div",{className:"mt-2 font-mono text-[15px] font-bold text-foreground",children:e.t}),(0,a.jsx)("div",{className:"text-[11px] text-muted-foreground",children:e.s})]},e.s))})]}),(0,a.jsx)("div",{className:"lg:col-span-7",children:(0,a.jsx)("div",{className:"rounded-2xl border border-border bg-card p-6 sm:p-8",children:"success"===d?(0,a.jsxs)("div",{className:"flex flex-col items-center py-12 text-center",children:[(0,a.jsx)("div",{className:"grid size-16 place-items-center rounded-full border border-brand/30 bg-brand-muted",children:(0,a.jsx)(ev,{className:"size-8 text-brand"})}),(0,a.jsx)("h3",{className:"mt-5 text-xl font-bold tracking-tight text-foreground",children:t("ctp.successTitle")}),(0,a.jsx)("p",{className:"mt-2 max-w-sm text-[14px] text-muted-foreground",children:t("ctp.successDesc")}),g&&(0,a.jsxs)("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground transition-all hover:brightness-110",children:[(0,a.jsx)(l,{className:"size-4"})," ",t("cta.whatsappChat")]}),(0,a.jsx)(p,{variant:"outline",className:"mt-3",onClick:()=>h("idle"),children:t("cta.sendAnother")})]}):(0,a.jsxs)("form",{onSubmit:function(a){a.preventDefault(),u("");let n=a.currentTarget,i=new FormData(n),r=String(i.get("name")??"").trim(),o=String(i.get("email")??"").trim(),s=String(i.get("phone")??"").trim(),c=String(i.get("company")??"").trim(),l=String(i.get("country")??"").trim(),d=String(i.get("product")??"").trim(),x=String(i.get("substrate")??"").trim(),m=String(i.get("environment")??"").trim(),p=String(i.get("quantity")??"").trim(),g=String(i.get("message")??"").trim();if(!r){u(t("err.nameRequired")),h("error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)){u(t("err.emailRequired")),h("error");return}if(!g){u(t("err.messageRequired")),h("error");return}let b=[`Name: ${r}`,c&&`Company: ${c}`,`Email: ${o}`,s&&`Phone/WhatsApp: ${s}`,l&&`Country: ${l}`,d&&`Product: ${d}`,x&&`Substrate: ${x}`,m&&`Environment: ${m}`,p&&`Quantity: ${p} kg`,"","Message:",g].filter(Boolean).join("\n"),y=`mailto:${c.email}?subject=${encodeURIComponent(`Website inquiry from ${r}`)}&body=${encodeURIComponent(b)}`,v=`Website inquiry from ${r}
Email: ${o}${d?`
Product: ${d}`:""}
${g}`;f(`https://wa.me/${c.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent(v)}`),window.location.href=y,h("success"),n.reset(),e({title:t("toast.inquiryTitle"),description:t("toast.inquiryDesc")})},className:"space-y-5",children:[(0,a.jsxs)("div",{className:"grid gap-5 sm:grid-cols-2",children:[(0,a.jsx)(a5,{label:`${t("form.fullName")} ${t("form.required")}`,children:(0,a.jsx)("input",{name:"name",required:!0,className:a7,placeholder:t("form.namePlaceholder")})}),(0,a.jsx)(a5,{label:t("form.company"),children:(0,a.jsx)("input",{name:"company",className:a7,placeholder:t("form.companyPlaceholder")})}),(0,a.jsx)(a5,{label:`${t("form.email")} ${t("form.required")}`,children:(0,a.jsx)("input",{name:"email",type:"email",required:!0,className:a7,placeholder:t("form.emailPlaceholder")})}),(0,a.jsx)(a5,{label:t("form.phone"),children:(0,a.jsx)("input",{name:"phone",className:a7,placeholder:t("form.phonePlaceholder")})}),(0,a.jsx)(a5,{label:t("form.country"),children:(0,a.jsx)("input",{name:"country",className:a7,placeholder:t("form.countryPlaceholder")})}),(0,a.jsx)(a5,{label:t("form.product"),children:(0,a.jsxs)("select",{name:"product",className:a7,defaultValue:"",children:[(0,a.jsx)("option",{value:"",disabled:!0,children:t("form.productPlaceholder")}),V.map(e=>(0,a.jsxs)("option",{value:i(e.title),children:[e.code," — ",i(e.title)]},e.code)),(0,a.jsx)("option",{value:"Other",children:t("form.other")})]})})]}),(0,a.jsxs)("div",{className:"grid gap-5 sm:grid-cols-3",children:[(0,a.jsx)(a5,{label:t("form.substrate"),children:(0,a.jsx)("input",{name:"substrate",className:a7,placeholder:t("form.substratePlaceholder")})}),(0,a.jsx)(a5,{label:t("form.environment"),children:(0,a.jsx)("input",{name:"environment",className:a7,placeholder:t("form.environmentPlaceholder")})}),(0,a.jsx)(a5,{label:t("form.quantity"),children:(0,a.jsx)("input",{name:"quantity",className:a7,placeholder:t("form.quantityPlaceholder")})})]}),(0,a.jsx)(a5,{label:`${t("form.message")} ${t("form.required")}`,children:(0,a.jsx)("textarea",{name:"message",required:!0,rows:5,className:(0,x.f)(a7,"resize-none"),placeholder:t("form.messagePlaceholder")})}),"error"===d&&m&&(0,a.jsx)("p",{className:"rounded-md border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-[13px] text-destructive",children:m}),(0,a.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[(0,a.jsx)("p",{className:"text-[12px] text-muted-foreground",children:t("ctp.formPrivacy")}),(0,a.jsx)(p,{type:"submit",size:"lg",disabled:"submitting"===d,children:"submitting"===d?t("cta.sending"):(0,a.jsxs)(a.Fragment,{children:[t("cta.sendInquiry")," ",(0,a.jsx)(a2,{className:"size-4"})]})})]})]})})})]})}),(0,a.jsxs)(eS,{className:"border-t border-border bg-card/40",children:[(0,a.jsx)(eC,{eyebrow:t("ctp.globalEyebrow"),title:t("ctp.globalTitle"),description:t("ctp.globalDesc")}),(0,a.jsx)("div",{className:"mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",children:$.map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-2.5 rounded-lg border border-border bg-background p-4",children:[(0,a.jsx)("span",{className:"size-2 rounded-full bg-brand"}),(0,a.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:i(e)})]},e.en))})]})]})}let a7="h-11 w-full rounded-md border border-border bg-background px-3.5 text-[14px] text-foreground placeholder:text-muted-foreground transition-colors focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20";function a5({label:e,children:n}){return(0,a.jsxs)("label",{className:"block",children:[(0,a.jsx)("span",{className:"mb-1.5 block font-mono text-[10px] tracking-widest text-muted-foreground",children:e.toUpperCase()}),n]})}function a9({page:e}){switch(e){case"products":return(0,a.jsx)(eP,{});case"solutions":return(0,a.jsx)(eF,{});case"cases":return(0,a.jsx)(eB,{});case"about":return(0,a.jsx)(eW,{});case"news":return(0,a.jsx)(eJ,{});case"faq":return(0,a.jsx)(a1,{});case"contact":return(0,a.jsx)(a4,{});default:return(0,a.jsx)(eH,{})}}e.s(["default",0,function(){let e=L(e=>e.page),{t,locale:i}=j();return n.useEffect(()=>{let a="home"===e?"":`${t(`nav.${e}`)} — `;document.title=`${a}HONG NGUYEN Industrial Coatings`,document.documentElement.lang="zh"===i?"zh-CN":i,document.documentElement.dir="ar"===i?"rtl":"ltr"},[e,i,t]),(0,a.jsxs)("div",{className:"flex min-h-screen flex-col bg-background",children:[(0,a.jsx)(z,{}),(0,a.jsx)(es,{}),(0,a.jsx)("main",{className:"flex-1",children:(0,a.jsx)(a9,{page:e},e)}),(0,a.jsx)(eh,{})]})}],52683)}])})();