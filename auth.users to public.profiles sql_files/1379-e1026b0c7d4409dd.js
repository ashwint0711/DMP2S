!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9708a6b8-6c37-4612-8ad7-885900da0a07",e._sentryDebugIdIdentifier="sentry-dbid-9708a6b8-6c37-4612-8ad7-885900da0a07")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1379],{45437:function(e,t,r){r.d(t,{$w:function(){return s},Gh:function(){return o},OP:function(){return n}});var a=r(37756);let n=e=>{let t=e.find(e=>"compute_instance"===e.type);return{computeInstance:t,pitr:e.find(e=>"pitr"===e.type),customDomain:e.find(e=>"custom_domain"===e.type),ipv4:e.find(e=>"ipv4"===e.type)}},s=e=>{var t;return!!a.Qy&&(null!==(t=null==e?void 0:e.addons)&&void 0!==t?t:[]).some(e=>"addon_security_hipaa"===e.supabase_prod_id)},o=e=>{if(!e)return e;switch(e){case"fly":return"Fly.io";case"aws":return"AWS";case"vercel_marketplace":return"Vercel";default:return e}}},3746:function(e,t,r){r.d(t,{x:function(){return a}});let a={list:e=>["projects",e,"branches"],detail:(e,t)=>["projects",e,"branches",t]}},5731:function(e,t,r){r.d(t,{Z:function(){return a}});let a={usage:e=>["projects",e,"usage"],orgUsage:(e,t,r,a)=>["organizations",e,"usage",t,r,a],resourceWarnings:()=>["projects","resource-warnings"]}},71147:function(e,t,r){r.d(t,{N:function(){return s}});var a=r(81514);function n(e,t){return!(null==t?void 0:t.includes(e))}function s(e){let{profile:t}=(0,a.Un)();return Array.isArray(e)?Object.fromEntries(e.map(e=>[e.replace(/:/g,"_").split("_").map((e,t)=>0===t?e:e[0].toUpperCase()+e.slice(1)).join(""),n(e,null==t?void 0:t.disabled_features)])):n(e,null==t?void 0:t.disabled_features)}},5529:function(e,t,r){var a=r(97458),n=r(83145),s=r.n(n),o=r(10947),l=r(7756),i=r(90839);t.Z=e=>{var t;let{projectRef:r,subject:n,error:d,className:c,showIcon:u=!0}=e,f=null==n?void 0:n.replace(/ /g,"%20"),m="/support/new?category=dashboard_bug";r&&(m+="&ref=".concat(r)),f&&(m+="&subject=".concat(f)),d&&(m+="&error=".concat(d.message));let C=(null==d?void 0:null===(t=d.message)||void 0===t?void 0:t.includes("503"))?"503 Service Temporarily Unavailable":null==d?void 0:d.message;return(0,a.jsxs)(o.bZ,{className:c,variant:"warning",title:n,"data-sentry-element":"Alert_Shadcn_","data-sentry-component":"AlertError","data-sentry-source-file":"AlertError.tsx",children:[u&&(0,a.jsx)(l.aN,{className:"h-4 w-4",strokeWidth:2}),(0,a.jsx)(o.Cd,{className:"text-foreground","data-sentry-element":"AlertTitle_Shadcn_","data-sentry-source-file":"AlertError.tsx",children:n}),(0,a.jsxs)(o.X,{className:"flex flex-col gap-3 break-words","data-sentry-element":"AlertDescription_Shadcn_","data-sentry-source-file":"AlertError.tsx",children:[(0,a.jsxs)("div",{children:[(null==d?void 0:d.message)&&(0,a.jsxs)("p",{className:"text-left",children:["Error: ",C]}),(0,a.jsx)("p",{className:"text-left",children:"Try refreshing your browser, but if the issue persists, please reach out to us via support."})]}),(0,a.jsx)("div",{children:(0,a.jsx)(i.z,{asChild:!0,type:"warning","data-sentry-element":"Button","data-sentry-source-file":"AlertError.tsx",children:(0,a.jsx)(s(),{href:m,"data-sentry-element":"Link","data-sentry-source-file":"AlertError.tsx",children:"Contact support"})})})]})]})}},63621:function(e,t,r){r.d(t,{A:function(){return d},Z:function(){return c}});var a=r(97458),n=r(12436),s=r(52983);let o=null;var l=r(65092);let i=e=>{let{className:t,delayIndex:r=0,animationDelay:i=150}=e,d=function(e){let t=(0,s.useRef)(null);return(0,n.LI)(()=>{let e=document.getAnimations().filter(e=>e instanceof CSSAnimation&&"shimmer"===e.animationName),r=e.find(e=>e.effect instanceof KeyframeEffect&&e.effect.target===t.current);if(void 0===r)return;let a=e[0];return r===a&&o&&(r.currentTime=o),r!==a&&(r.currentTime=a.currentTime),()=>{r===a&&r.currentTime&&(o=Number(r.currentTime))}},[]),t}(0);return(0,a.jsx)("div",{ref:d,className:(0,l.cn)("shimmering-loader rounded py-3",t),style:{animationFillMode:"backwards",animationDelay:"".concat(r*i,"ms")},"data-sentry-component":"ShimmeringLoader","data-sentry-source-file":"ShimmeringLoader.tsx"})},d=()=>(0,a.jsxs)("div",{className:"space-y-2","data-sentry-component":"GenericSkeletonLoader","data-sentry-source-file":"ShimmeringLoader.tsx",children:[(0,a.jsx)(i,{"data-sentry-element":"ShimmeringLoader","data-sentry-source-file":"ShimmeringLoader.tsx"}),(0,a.jsx)(i,{className:"w-3/4",delayIndex:1,"data-sentry-element":"ShimmeringLoader","data-sentry-source-file":"ShimmeringLoader.tsx"}),(0,a.jsx)(i,{className:"w-1/2",delayIndex:2,"data-sentry-element":"ShimmeringLoader","data-sentry-source-file":"ShimmeringLoader.tsx"})]});var c=i},61893:function(e,t,r){r.d(t,{X:function(){return i}});var a=r(97458),n=r(24017),s=r(62507),o=r(52983),l=r(65092);let i=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)(n.fC,{ref:t,className:(0,l.cn)("peer flex items-center justify-center h-4 w-4 shrink-0 rounded border border-control bg-control/25 ring-offset-background","transition-colors duration-150 ease-in-out","hover:border-strong","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=checked]:text-background",r),...o,children:(0,a.jsx)(n.z$,{className:(0,l.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(s.Z,{className:"h-3 w-3",strokeWidth:4})})})});i.displayName=n.fC.displayName},47482:function(e,t,r){r.d(t,{di:function(){return p},e8:function(){return u},fu:function(){return m},mY:function(){return d},rb:function(){return f},sZ:function(){return c},zz:function(){return C}});var a=r(97458),n=r(20862),s=r(77270),o=r(98686),l=r(52983),i=r(65092);let d=l.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.mY,{ref:t,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-overlay text-foreground-light",r),...s})});d.displayName=n.mY.displayName;let c=l.forwardRef((e,t)=>{var r;let{className:l,wrapperClassName:d,showResetIcon:c=!1,showSearchIcon:u=!0,handleReset:f,...m}=e;return(0,a.jsxs)("div",{className:(0,i.cn)("flex items-center border-b px-3",d),"cmdk-input-wrapper":"",children:[u&&(0,a.jsx)(s.Z,{className:"h-4 w-4 shrink-0 opacity-50"}),(0,a.jsx)(n.mY.Input,{ref:t,className:(0,i.cn)("flex h-9 w-full rounded-md bg-transparent py-3 md:text-xs text outline-none placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50 border-none focus:ring-0",l),...m}),c&&(0,a.jsx)("button",{onClick:f,className:(0,i.cn)("text-foreground-lighter hover:text-foreground-light hover:cursor-pointer transition-all opacity-0 duration-100",!!(null===(r=m.value)||void 0===r?void 0:r.length)&&"opacity-100"),children:(0,a.jsx)(o.Z,{size:14})})]})});c.displayName=n.mY.Input.displayName;let u=l.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.mY.List,{ref:t,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",r),...s})});u.displayName=n.mY.List.displayName;let f=l.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.mY.Empty,{ref:t,className:(0,i.cn)("py-6 text-center text-xs",r),...s})});f.displayName=n.mY.Empty.displayName;let m=l.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.mY.Group,{ref:t,className:(0,i.cn)("overflow-hidden p-1 text-foreground-light [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-foreground-muted","[&_[cmdk-group-heading]]:font-mono","[&_[cmdk-group-heading]]:uppercase","[&_[cmdk-group-heading]]:tracking-wider",r),...s})});m.displayName=n.mY.Group.displayName;let C=l.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.mY.Separator,{ref:t,className:(0,i.cn)("-mx-1 h-px bg-border-overlay",r),...s})});C.displayName=n.mY.Separator.displayName;let p=l.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.mY.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none data-[selected=true]:bg-overlay-hover data-[selected=true]:text-strong data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",r),...s})});p.displayName=n.mY.Item.displayName},72271:function(e,t,r){r.d(t,{DN:function(){return g},Ei:function(){return L},FF:function(){return x},Tu:function(){return y},aM:function(){return c},bC:function(){return M},sw:function(){return u},ue:function(){return h},yo:function(){return d}});var a=r(97458),n=r(79904),s=r(31706),o=r(52983),l=r(98686),i=r(65092);let d=n.fC,c=n.xz,u=n.x8;(0,s.j)("fixed inset-0 z-50 flex",{variants:{side:{top:"items-start",bottom:"items-end",left:"justify-start",right:"justify-end"}},defaultVariants:{side:"right"}});let f=e=>{let{side:t,children:r,...s}=e;return(0,a.jsx)(n.h_,{...s,"data-sentry-element":"unknown","data-sentry-component":"SheetPortal","data-sentry-source-file":"sheet.tsx",children:r})};f.displayName=n.h_.displayName;let m=o.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,a.jsx)(n.aV,{className:(0,i.cn)("fixed inset-0 z-50 bg-alternative/90 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",r),...o,ref:t})});m.displayName=n.aV.displayName;let C=(0,i.cn)(["fixed z-50 scale-100 gap-4 bg-studio opacity-100 shadow-lg","data-[state=open]:animate-in data-[state=open]:duration-300 data-[state=closed]:animate-out data-[state=closed]:duration-300"]),p=(0,s.j)(C,{variants:{side:{top:"data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top w-full border-b inset-x-0 top-0",bottom:"data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom w-full border-t inset-x-0 bottom-0",left:"data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left h-full border-r inset-y-0 left-0",right:"data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right h-full border-l inset-y-0 right-0"},size:{content:"",default:"",sm:"",lg:"",xl:"",xxl:"",full:""}},compoundVariants:[{side:["top","bottom"],size:"content",class:"max-h-screen"},{side:["top","bottom"],size:"default",class:"h-1/3"},{side:["top","bottom"],size:"sm",class:"h-1/4"},{side:["top","bottom"],size:"lg",class:"h-1/2"},{side:["top","bottom"],size:"xl",class:"h-5/6"},{side:["top","bottom"],size:"full",class:"h-screen"},{side:["right","left"],size:"content",class:"max-w-screen"},{side:["right","left"],size:"default",class:"lg:w-1/3"},{side:["right","left"],size:"sm",class:"lg:w-1/4"},{side:["right","left"],size:"lg",class:"lg:w-1/2"},{side:["right","left"],size:"xl",class:"lg:w-4/6"},{side:["right","left"],size:"xxl",class:"w-5/6"},{side:["right","left"],size:"full",class:"w-screen"}],defaultVariants:{side:"right",size:"default"}}),h=o.forwardRef((e,t)=>{let{side:r,size:s,className:o,children:d,showClose:c=!0,...u}=e;return(0,a.jsxs)(f,{side:r,children:[(0,a.jsx)(m,{}),(0,a.jsxs)(n.VY,{ref:t,className:(0,i.cn)(p({side:r,size:s}),o),...u,children:[d,c?(0,a.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,a.jsx)(l.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]}):null]})]})});h.displayName=n.VY.displayName;let y=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,i.cn)("px-5 py-4 text-center sm:text-left border-b bg-dash-sidebar",t),...r,"data-sentry-component":"SheetHeader","data-sentry-source-file":"sheet.tsx"})};y.displayName="SheetHeader";let g=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,i.cn)("px-5 py-4",t),...r,"data-sentry-component":"SheetSection","data-sentry-source-file":"sheet.tsx"})};g.displayName="SheetSection";let x=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,i.cn)("px-5 py-3 border-t w-full","flex flex-col-reverse sm:flex-row sm:justify-end gap-2",t),...r,"data-sentry-component":"SheetFooter","data-sentry-source-file":"sheet.tsx"})};x.displayName="SheetFooter";let M=o.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.Dx,{ref:t,className:(0,i.cn)("text-lg text-foreground",r),...s})});M.displayName=n.Dx.displayName;let L=o.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.dk,{ref:t,className:(0,i.cn)("text-sm text-foreground-light",r),...s})});L.displayName=n.dk.displayName},1846:function(e,t,r){r.d(t,{gx:function(){return i},vo:function(){return d},og:function(){return c},hL:function(){return u},gg:function(){return f},SK:function(){return m},M4:function(){return l},Z7:function(){return C},Aq:function(){return p},vu:function(){return h},Ke:function(){return y},dD:function(){return g},n5:function(){return x}});var a=r(52983),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim();var o=(e,t)=>{let r=(0,a.forwardRef)((r,o)=>{let{color:l="currentColor",size:i=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:u="",children:f,...m}=r;return(0,a.createElement)("svg",{ref:o,...n,width:i,height:i,stroke:l,strokeWidth:c?24*Number(d)/Number(i):d,className:["lucide","lucide-".concat(s(e)),u].join(" "),...m},[...t.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(f)?f:[f]])});return r.displayName="".concat(e),r},l=o("RESTApi",[["path",{d:"M3.20947 12.1052C3.20947 13.4403 3.50715 14.706 4.03977 15.8394M11.9997 3.31494C10.6391 3.31494 9.35066 3.62408 8.20085 4.17594M20.7899 12.1052C20.7899 10.7566 20.4862 9.47898 19.9435 8.33694M11.9997 20.8954C13.3576 20.8954 14.6436 20.5875 15.7917 20.0377M15.7917 20.0377C16.3334 20.818 17.236 21.3289 18.2578 21.3289C19.9147 21.3289 21.2578 19.9857 21.2578 18.3289C21.2578 16.672 19.9147 15.3289 18.2578 15.3289C16.601 15.3289 15.2578 16.672 15.2578 18.3289C15.2578 18.9639 15.4551 19.5528 15.7917 20.0377ZM4.03977 15.8394C3.24022 16.3782 2.71436 17.2921 2.71436 18.3289C2.71436 19.9857 4.0575 21.3289 5.71436 21.3289C7.37121 21.3289 8.71436 19.9857 8.71436 18.3289C8.71436 16.672 7.37121 15.3289 5.71436 15.3289C5.09422 15.3289 4.51803 15.517 4.03977 15.8394ZM8.20085 4.17594C7.66158 3.3789 6.74915 2.85498 5.71436 2.85498C4.0575 2.85498 2.71436 4.19813 2.71436 5.85498C2.71436 7.51183 4.0575 8.85498 5.71436 8.85498C7.37121 8.85498 8.71436 7.51183 8.71436 5.85498C8.71436 5.23292 8.52503 4.65508 8.20085 4.17594ZM19.9435 8.33694C20.7368 7.79709 21.2578 6.88688 21.2578 5.85498C21.2578 4.19813 19.9147 2.85498 18.2578 2.85498C16.601 2.85498 15.2578 4.19813 15.2578 5.85498C15.2578 7.51183 16.601 8.85498 18.2578 8.85498C18.8828 8.85498 19.4631 8.66388 19.9435 8.33694Z",key:"xusdjk"}]]);o("ExampleTemplate",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]),o("ApiDocs",[["path",{d:"M7.44434 14.3347H16.4443M7.44434 11.3347H16.4443M7.44434 17.3347H13.4443M19.4994 8.50714V19.1052C19.4994 20.2097 18.6039 21.1052 17.4994 21.1052H6.5C5.39543 21.1052 4.5 20.2097 4.5 19.1052V5.10596C4.5 4.00139 5.39543 3.10596 6.5 3.10596H14.0723L19.4994 8.50714ZM19.4465 8.48193L14.0704 3.10596L14.0701 7.48186C14.0701 8.03418 14.5178 8.48193 15.0701 8.48193L19.4465 8.48193Z",key:"2ysat9"}]]);var i=o("Auth",[["path",{d:"M5.24121 15.0674H12.7412M5.24121 15.0674V18.0674H12.7412V15.0674M5.24121 15.0674V12.0674H12.7412V15.0674M15 7.60547V4.60547C15 2.94861 13.6569 1.60547 12 1.60547C10.3431 1.60547 9 2.94861 9 4.60547V7.60547M5.20898 9.60547L5.20898 19.1055C5.20898 20.21 6.10441 21.1055 7.20898 21.1055H16.709C17.8136 21.1055 18.709 20.21 18.709 19.1055V9.60547C18.709 8.5009 17.8136 7.60547 16.709 7.60547L7.20899 7.60547C6.10442 7.60547 5.20898 8.5009 5.20898 9.60547Z",key:"h65u22"}]]),d=o("Database",[["path",{d:" M5.56774 9.70642H18.4547V15.7064H5.56774V9.70642Z",key:"g5hndz"}],["path",{d:" M4.5 16.7094C4.5 16.1571 4.94772 15.7094 5.5 15.7094H18.5C19.0523 15.7094 19.5 16.1571 19.5\n        16.7094V20.7094C19.5 21.2616 19.0523 21.7094 18.5 21.7094H5.5C4.94772 21.7094 4.5 21.2616 4.5\n        20.7094V16.7094Z",key:"1m5ehm"}],["path",{d:"M4.5 4.70679C4.5 4.1545 4.94772 3.70679 5.5 3.70679H18.5C19.0523 3.70679 19.5 4.1545 19.5 4.70679V8.70679C19.5 9.25907 19.0523 9.70679 18.5 9.70679H5.5C4.94772 9.70679 4.5 9.25907 4.5 8.70679V4.70679Z",key:"1w4kbe"}]]),c=o("Datadog",[["path",{d:"M19.57 17.04l-1.997-1.316-1.665 2.782-1.937-.567-1.706 2.604.087.82 9.274-1.71-.538-5.794zm-8.649-2.498l1.488-.204c.241.108.409.15.697.223.45.117.97.23 1.741-.16.18-.088.553-.43.704-.625l6.096-1.106.622 7.527-10.444 1.882zm11.325-2.712l-.602.115L20.488 0 .789 2.285l2.427 19.693 2.306-.334c-.184-.263-.471-.581-.96-.989-.68-.564-.44-1.522-.039-2.127.53-1.022 3.26-2.322 3.106-3.956-.056-.594-.15-1.368-.702-1.898-.02.22.017.432.017.432s-.227-.289-.34-.683c-.112-.15-.2-.199-.319-.4-.085.233-.073.503-.073.503s-.186-.437-.216-.807c-.11.166-.137.48-.137.48s-.241-.69-.186-1.062c-.11-.323-.436-.965-.343-2.424.6.421 1.924.321 2.44-.439.171-.251.288-.939-.086-2.293-.24-.868-.835-2.16-1.066-2.651l-.028.02c.122.395.374 1.223.47 1.625.293 1.218.372 1.642.234 2.204-.116.488-.397.808-1.107 1.165-.71.358-1.653-.514-1.713-.562-.69-.55-1.224-1.447-1.284-1.883-.062-.477.275-.763.445-1.153-.243.07-.514.192-.514.192s.323-.334.722-.624c.165-.109.262-.178.436-.323a9.762 9.762 0 0 0-.456.003s.42-.227.855-.392c-.318-.014-.623-.003-.623-.003s.937-.419 1.678-.727c.509-.208 1.006-.147 1.286.257.367.53.752.817 1.569.996.501-.223.653-.337 1.284-.509.554-.61.99-.688.99-.688s-.216.198-.274.51c.314-.249.66-.455.66-.455s-.134.164-.259.426l.03.043c.366-.22.797-.394.797-.394s-.123.156-.268.358c.277-.002.838.012 1.056.037 1.285.028 1.552-1.374 2.045-1.55.618-.22.894-.353 1.947.68.903.888 1.609 2.477 1.259 2.833-.294.295-.874-.115-1.516-.916a3.466 3.466 0 0 1-.716-1.562 1.533 1.533 0 0 0-.497-.85s.23.51.23.96c0 .246.03 1.165.424 1.68-.039.076-.057.374-.1.43-.458-.554-1.443-.95-1.604-1.067.544.445 1.793 1.468 2.273 2.449.453.927.186 1.777.416 1.997.065.063.976 1.197 1.15 1.767.306.994.019 2.038-.381 2.685l-1.117.174c-.163-.045-.273-.068-.42-.153.08-.143.241-.5.243-.572l-.063-.111c-.348.492-.93.97-1.414 1.245-.633.359-1.363.304-1.838.156-1.348-.415-2.623-1.327-2.93-1.566 0 0-.01.191.048.234.34.383 1.119 1.077 1.872 1.56l-1.605.177.759 5.908c-.337.048-.39.071-.757.124-.325-1.147-.946-1.895-1.624-2.332-.599-.384-1.424-.47-2.214-.314l-.05.059a2.851 2.851 0 0 1 1.863.444c.654.413 1.181 1.481 1.375 2.124.248.822.42 1.7-.248 2.632-.476.662-1.864 1.028-2.986.237.3.481.705.876 1.25.95.809.11 1.577-.03 2.106-.574.452-.464.69-1.434.628-2.456l.714-.104.258 1.834 11.827-1.424zM15.05 6.848c-.034.075-.085.125-.007.37l.004.014.013.032.032.073c.14.287.295.558.552.696.067-.011.136-.019.207-.023.242-.01.395.028.492.08.009-.048.01-.119.005-.222-.018-.364.072-.982-.626-1.308-.264-.122-.634-.084-.757.068a.302.302 0 0 1 .058.013c.186.066.06.13.027.207m1.958 3.392c-.092-.05-.52-.03-.821.005-.574.068-1.193.267-1.328.372-.247.191-.135.523.047.66.511.382.96.638 1.432.575.29-.038.546-.497.728-.914.124-.288.124-.598-.058-.698m-5.077-2.942c.162-.154-.805-.355-1.556.156-.554.378-.571 1.187-.041 1.646.053.046.096.078.137.104a4.77 4.77 0 0 1 1.396-.412c.113-.125.243-.345.21-.745-.044-.542-.455-.456-.146-.749",key:"13qbml"}]]),u=o("EdgeFunctions",[["path",{d:"M18 12.1055C18 15.4192 15.3137 18.1055 12 18.1055C8.6863 18.1055 6.00001 15.4192 6.00001 12.1055C6.00001 8.79176 8.6863 6.10547 12 6.10547C15.3137 6.10547 18 8.79176 18 12.1055Z",key:"1vv84o"}],["path",{d:"M21.3999 5.70154C21.3999 7.35839 20.0568 8.70154 18.3999 8.70154C16.7431 8.70154 15.3999 7.35839 15.3999 5.70154C15.3999 4.04468 16.7431 2.70154 18.3999 2.70154C20.0568 2.70154 21.3999 4.04468 21.3999 5.70154Z",key:"1vzce8"}],["path",{d:"M8.62216 18.4363C8.62216 20.0932 7.27902 21.4363 5.62216 21.4363C3.96531 21.4363 2.62216 20.0932 2.62216 18.4363C2.62216 16.7795 3.96531 15.4363 5.62216 15.4363C7.27902 15.4363 8.62216 16.7795 8.62216 18.4363Z",key:"s8poqq"}],["path",{d:"M3.18121 16.2691C2.58401 15.0065 2.25 13.595 2.25 12.1055C2.25 6.72069 6.61522 2.35547 12 2.35547C13.4893 2.35547 14.9005 2.68937 16.163 3.28638M7.68679 20.852C8.98715 21.4944 10.4514 21.8555 12 21.8555C17.3848 21.8555 21.75 17.4902 21.75 12.1055C21.75 10.6162 21.4161 9.20493 20.8191 7.94242",key:"xs92pm"}]]),f=o("Grafana",[["path",{d:"M23.02 10.59a8.578 8.578 0 0 0-.862-3.034 8.911 8.911 0 0 0-1.789-2.445c.337-1.342-.413-2.505-.413-2.505-1.292-.08-2.113.4-2.416.62-.052-.02-.102-.044-.154-.064-.22-.089-.446-.172-.677-.247-.231-.073-.47-.14-.711-.197a9.867 9.867 0 0 0-.875-.161C14.557.753 12.94 0 12.94 0c-1.804 1.145-2.147 2.744-2.147 2.744l-.018.093c-.098.029-.2.057-.298.088-.138.042-.275.094-.413.143-.138.055-.275.107-.41.166a8.869 8.869 0 0 0-1.557.87l-.063-.029c-2.497-.955-4.716.195-4.716.195-.203 2.658.996 4.33 1.235 4.636a11.608 11.608 0 0 0-.607 2.635C1.636 12.677.953 15.014.953 15.014c1.926 2.214 4.171 2.351 4.171 2.351.003-.002.006-.002.006-.005.285.509.615.994.986 1.446.156.19.32.371.488.548-.704 2.009.099 3.68.099 3.68 2.144.08 3.553-.937 3.849-1.173a9.784 9.784 0 0 0 3.164.501h.08l.055-.003.107-.002.103-.005.003.002c1.01 1.44 2.788 1.646 2.788 1.646 1.264-1.332 1.337-2.653 1.337-2.94v-.058c0-.02-.003-.039-.003-.06.265-.187.52-.387.758-.6a7.875 7.875 0 0 0 1.415-1.7c1.43.083 2.437-.885 2.437-.885-.236-1.49-1.085-2.216-1.264-2.354l-.018-.013-.016-.013a.217.217 0 0 1-.031-.02c.008-.092.016-.18.02-.27.011-.162.016-.323.016-.48v-.253l-.005-.098-.008-.135a1.891 1.891 0 0 0-.01-.13c-.003-.042-.008-.083-.013-.125l-.016-.124-.018-.122a6.215 6.215 0 0 0-2.032-3.73 6.015 6.015 0 0 0-3.222-1.46 6.292 6.292 0 0 0-.85-.048l-.107.002h-.063l-.044.003-.104.008a4.777 4.777 0 0 0-3.335 1.695c-.332.4-.592.84-.768 1.297a4.594 4.594 0 0 0-.312 1.817l.003.091c.005.055.007.11.013.164a3.615 3.615 0 0 0 .698 1.82 3.53 3.53 0 0 0 1.827 1.282c.33.098.66.14.971.137.039 0 .078 0 .114-.002l.063-.003c.02 0 .041-.003.062-.003.034-.002.065-.007.099-.01.007 0 .018-.003.028-.003l.031-.005.06-.008a1.18 1.18 0 0 0 .112-.02c.036-.008.072-.013.109-.024a2.634 2.634 0 0 0 .914-.415c.028-.02.056-.041.085-.065a.248.248 0 0 0 .039-.35.244.244 0 0 0-.309-.06l-.078.042c-.09.044-.184.083-.283.116a2.476 2.476 0 0 1-.475.096c-.028.003-.054.006-.083.006l-.083.002c-.026 0-.054 0-.08-.002l-.102-.006h-.012l-.024.006c-.016-.003-.031-.003-.044-.006-.031-.002-.06-.007-.091-.01a2.59 2.59 0 0 1-.724-.213 2.557 2.557 0 0 1-.667-.438 2.52 2.52 0 0 1-.805-1.475 2.306 2.306 0 0 1-.029-.444l.006-.122v-.023l.002-.031c.003-.021.003-.04.005-.06a3.163 3.163 0 0 1 1.352-2.29 3.12 3.12 0 0 1 .937-.43 2.946 2.946 0 0 1 .776-.101h.06l.07.002.045.003h.026l.07.005a4.041 4.041 0 0 1 1.635.49 3.94 3.94 0 0 1 1.602 1.662 3.77 3.77 0 0 1 .397 1.414l.005.076.003.075c.002.026.002.05.002.075 0 .024.003.052 0 .07v.065l-.002.073-.008.174a6.195 6.195 0 0 1-.08.639 5.1 5.1 0 0 1-.267.927 5.31 5.31 0 0 1-.624 1.13 5.052 5.052 0 0 1-3.237 2.014 4.82 4.82 0 0 1-.649.066l-.039.003h-.287a6.607 6.607 0 0 1-1.716-.265 6.776 6.776 0 0 1-3.4-2.274 6.75 6.75 0 0 1-.746-1.15 6.616 6.616 0 0 1-.714-2.596l-.005-.083-.002-.02v-.056l-.003-.073v-.096l-.003-.104v-.07l.003-.163c.008-.22.026-.45.054-.678a8.707 8.707 0 0 1 .28-1.355c.128-.444.286-.872.473-1.277a7.04 7.04 0 0 1 1.456-2.1 5.925 5.925 0 0 1 .953-.763c.169-.111.343-.213.524-.306.089-.05.182-.091.273-.135.047-.02.093-.042.138-.062a7.177 7.177 0 0 1 .714-.267l.145-.045c.049-.015.098-.026.148-.041.098-.029.197-.052.296-.076.049-.013.1-.02.15-.033l.15-.032.151-.028.076-.013.075-.01.153-.024c.057-.01.114-.013.171-.023l.169-.021c.036-.003.073-.008.106-.01l.073-.008.036-.003.042-.002c.057-.003.114-.008.171-.01l.086-.006h.023l.037-.003.145-.007a7.999 7.999 0 0 1 1.708.125 7.917 7.917 0 0 1 2.048.68 8.253 8.253 0 0 1 1.672 1.09l.09.077.089.078c.06.052.114.107.171.159.057.052.112.106.166.16.052.055.107.107.159.164a8.671 8.671 0 0 1 1.41 1.978c.012.026.028.052.04.078l.04.078.075.156c.023.051.05.1.07.153l.065.15a8.848 8.848 0 0 1 .45 1.34.19.19 0 0 0 .201.142.186.186 0 0 0 .172-.184c.01-.246.002-.532-.024-.856z",key:"hopart"}]]),m=o("Home",[["path",{d:"M9.43414 20.803V13.0557C9.43414 12.5034 9.88186 12.0557 10.4341 12.0557H14.7679C15.3202 12.0557 15.7679 12.5034 15.7679 13.0557V20.803M12.0181 3.48798L5.53031 7.9984C5.26145 8.18532 5.10114 8.49202 5.10114 8.81948L5.10117 18.803C5.10117 19.9075 5.9966 20.803 7.10117 20.803H18.1012C19.2057 20.803 20.1012 19.9075 20.1012 18.803L20.1011 8.88554C20.1011 8.55988 19.9426 8.25462 19.6761 8.06737L13.1639 3.49088C12.8204 3.24951 12.3627 3.24836 12.0181 3.48798Z",key:"1bkqgr"}]]);o("InsertCode",[["path",{d:"M-20437 -11142H12131V-11144H-20437V-11142ZM12132 -11141V7113H12134V-11141H12132ZM12131 7114H-20437V7116H12131V7114ZM-20438 7113V-11141H-20440V7113H-20438ZM-20437 7114C-20437.6 7114 -20438 7113.55 -20438 7113H-20440C-20440 7114.66 -20438.7 7116 -20437 7116V7114ZM12132 7113C12132 7113.55 12131.6 7114 12131 7114V7116C12132.7 7116 12134 7114.66 12134 7113H12132ZM12131 -11142C12131.6 -11142 12132 -11141.6 12132 -11141H12134C12134 -11142.7 12132.7 -11144 12131 -11144V-11142ZM-20437 -11144C-20438.7 -11144 -20440 -11142.7 -20440 -11141H-20438C-20438 -11141.6 -20437.6 -11142 -20437 -11142V-11144Z",fill:"white","fill-opacity":"0.1",key:"iaqtc1"}],["path",{d:"M22.8437 8.69499L19.5369 12.0018L22.8438 15.3086","stroke-linecap":"round","stroke-linejoin":"round",key:"1gnkuu"}],["rect",{x:"0.5",y:"14.0625",width:"16",height:"8",rx:"1","stroke-linejoin":"round",key:"t6herz"}],["rect",{x:"0.5",y:"1.9375",width:"16",height:"8",rx:"1","stroke-linejoin":"round",key:"718qtu"}]]),o("Integrations",[["path",{d:"M17.2661 3.23254V10.7325M13.5161 6.98291L21.0161 6.98291M11.0391 16.9508C11.0391 19.1752 9.23585 20.9784 7.01147 20.9784C4.7871 20.9784 2.98389 19.1752 2.98389 16.9508C2.98389 14.7264 4.7871 12.9232 7.01147 12.9232C9.23585 12.9232 11.0391 14.7264 11.0391 16.9508ZM21.0161 19.8568V14.3568C21.0161 13.8045 20.5684 13.3568 20.0161 13.3568H14.5161C13.9638 13.3568 13.5161 13.8045 13.5161 14.3568V19.8568C13.5161 20.4091 13.9638 20.8568 14.5161 20.8568H20.0161C20.5684 20.8568 21.0161 20.4091 21.0161 19.8568ZM4.26221 10.7325H9.76221C10.3145 10.7325 10.7622 10.2848 10.7622 9.73254V4.23254C10.7622 3.68026 10.3145 3.23254 9.76221 3.23254H4.26221C3.70992 3.23254 3.26221 3.68026 3.26221 4.23254V9.73254C3.26221 10.2848 3.70992 10.7325 4.26221 10.7325Z",key:"3dnck7"}]]),o("Logs",[["path",{d:"M4.5 5.20679H4.53713M7.46241 5.21707H19.5M4.5 9.65839H4.53713M7.46241 9.66868H19.5M4.52692 14.164H4.53713M7.46241 14.1742H19.5M4.52692 18.7068L4.53713 18.6965M7.46241 18.7068H19.5",key:"2ab8w8"}]]),o("Postgres",[["path",{d:"M11.5466 3.23108C11.2704 3.23108 11.0466 3.45494 11.0466 3.73108C11.0466 4.00722 11.2704 4.23108 11.5466 4.23108V3.23108ZM20.6569 19.5046C20.6569 19.2285 20.433 19.0046 20.1569 19.0046C19.8808 19.0046 19.6569 19.2285 19.6569 19.5046H20.6569ZM19.6569 15.9656C19.6569 16.2417 19.8808 16.4656 20.1569 16.4656C20.433 16.4656 20.6569 16.2417 20.6569 15.9656H19.6569ZM13.0119 19.5536C12.959 19.2826 12.6964 19.1058 12.4254 19.1586C12.1544 19.2115 11.9775 19.4741 12.0304 19.7452L13.0119 19.5536ZM9.87381 18.8565L9.37381 18.8565V18.8565H9.87381ZM4.20721 5.29932L3.73784 5.12699L3.73784 5.127L4.20721 5.29932ZM2.52527 9.88046L2.0559 9.70814L2.0559 9.70814L2.52527 9.88046ZM3.24922 12.6873L2.92176 13.0651L2.92176 13.0651L3.24922 12.6873ZM4.40334 13.6875L4.07588 14.0653L4.07588 14.0653L4.40334 13.6875ZM5.00971 15.0154L4.50971 15.0154L4.50971 15.0154L5.00971 15.0154ZM5.00969 16.8536L5.50969 16.8536L5.50969 16.8536L5.00969 16.8536ZM9.87385 10.6661L9.37385 10.6661L9.37385 10.6661L9.87385 10.6661ZM11.9399 6.90783C12.136 6.71339 12.1373 6.39681 11.9429 6.20073C11.7484 6.00464 11.4319 6.00331 11.2358 6.19774L11.9399 6.90783ZM17.841 18.7506L17.8409 18.2506L17.8409 18.2506L17.841 18.7506ZM23.0676 19.2506C23.3437 19.2506 23.5676 19.0267 23.5675 18.7506C23.5675 18.4744 23.3437 18.2506 23.0675 18.2506L23.0676 19.2506ZM13.0171 15.2446C12.8955 14.9967 12.5959 14.8943 12.348 15.016C12.1001 15.1376 11.9978 15.4372 12.1194 15.6851L13.0171 15.2446ZM11.5466 4.23108H12.608V3.23108H11.5466V4.23108ZM19.6569 19.5046C19.6569 21.0264 18.2467 22.2606 16.3033 22.2606V23.2606C18.6165 23.2606 20.6569 21.7449 20.6569 19.5046H19.6569ZM12.608 4.23108C16.501 4.23108 19.6569 7.38698 19.6569 11.28H20.6569C20.6569 6.8347 17.0533 3.23108 12.608 3.23108V4.23108ZM19.6569 11.28V15.9656H20.6569V11.28H19.6569ZM16.3033 22.2606C14.6727 22.2606 13.313 21.0964 13.0119 19.5536L12.0304 19.7452C12.4214 21.7485 14.1852 23.2606 16.3033 23.2606V22.2606ZM11.6552 3.22339H6.46459V4.22339H11.6552V3.22339ZM3.73784 5.127L2.0559 9.70814L2.99464 10.0528L4.67658 5.47164L3.73784 5.127ZM2.92176 13.0651L4.07588 14.0653L4.7308 13.3096L3.57668 12.3094L2.92176 13.0651ZM4.50971 15.0154L4.50969 16.8536L5.50969 16.8536L5.50971 15.0154L4.50971 15.0154ZM10.3739 10.6661C10.3739 9.25463 10.9376 7.90166 11.9399 6.90783L11.2358 6.19774C10.0442 7.37934 9.37387 8.98795 9.37385 10.6661L10.3739 10.6661ZM2.0559 9.70814C1.61893 10.8983 1.96363 12.2348 2.92176 13.0651L3.57668 12.3094C2.9326 11.7512 2.70089 10.8529 2.99464 10.0528L2.0559 9.70814ZM8.44319 20.7872C9.50944 20.7872 10.3738 19.9228 10.3738 18.8565H9.37381C9.37381 19.3705 8.95716 19.7872 8.44319 19.7872V20.7872ZM8.44319 19.7872C6.82305 19.7872 5.50967 18.4738 5.50969 16.8536L4.50969 16.8536C4.50966 19.026 6.27075 20.7872 8.44319 20.7872V19.7872ZM4.07588 14.0653C4.35142 14.3041 4.50972 14.6508 4.50971 15.0154L5.50971 15.0154C5.50972 14.3608 5.22552 13.7384 4.7308 13.3096L4.07588 14.0653ZM6.46459 3.22339C5.24643 3.22339 4.15768 3.98347 3.73784 5.12699L4.67658 5.47164C4.95188 4.7218 5.66581 4.22339 6.46459 4.22339V3.22339ZM17.841 19.2506L23.0676 19.2506L23.0675 18.2506L17.8409 18.2506L17.841 19.2506ZM12.1194 15.6851C13.1905 17.8676 15.4098 19.2507 17.841 19.2506L17.8409 18.2506C15.7913 18.2507 13.9201 17.0846 13.0171 15.2446L12.1194 15.6851ZM10.3738 18.8565L10.3739 10.6661L9.37385 10.6661L9.37381 18.8565L10.3738 18.8565Z",key:"1mbkmc"}],["path",{d:"M15.7151 11.2056C15.7151 11.6257 16.0556 11.9663 16.4758 11.9663C16.8959 11.9663 17.2365 11.6257 17.2365 11.2056C17.2365 10.7854 16.8959 10.4448 16.4758 10.4448C16.0556 10.4448 15.7151 10.7854 15.7151 11.2056Z",key:"1vir92"}]]);var C=o("Realtime",[["path",{d:"M8.04273 1.58203V5.32205M5.24354 5.32205L2.04712 2.02791M5.24354 7.90979H1.57764M15.3776 15.5507L21.079 14.1316C21.5417 14.0164 21.5959 13.3806 21.1595 13.1887L8.00828 7.40586C7.59137 7.22254 7.16643 7.64661 7.3489 8.06389L13.0321 21.0607C13.2224 21.496 13.8556 21.4454 13.9743 20.9854L15.3776 15.5507Z",key:"1w2oqg"}]]);o("ReplaceCode",[["path",{d:"M-20403 -11142H12165V-11144H-20403V-11142ZM12166 -11141V7113H12168V-11141H12166ZM12165 7114H-20403V7116H12165V7114ZM-20404 7113V-11141H-20406V7113H-20404ZM-20403 7114C-20403.6 7114 -20404 7113.55 -20404 7113H-20406C-20406 7114.66 -20404.7 7116 -20403 7116V7114ZM12166 7113C12166 7113.55 12165.6 7114 12165 7114V7116C12166.7 7116 12168 7114.66 12168 7113H12166ZM12165 -11142C12165.6 -11142 12166 -11141.6 12166 -11141H12168C12168 -11142.7 12166.7 -11144 12165 -11144V-11142ZM-20403 -11144C-20404.7 -11144 -20406 -11142.7 -20406 -11141H-20404C-20404 -11141.6 -20403.6 -11142 -20403 -11142V-11144Z","fill-opacity":"0.1",key:"g9kgmq"}],["rect",{x:"6.44531",y:"14.1133",width:"15.8455",height:"7.91818",rx:"3.95909",key:"1evqnx"}],["path",{d:"M10.5896 10.0195L18.2148 10.0195C19.0433 10.0195 19.7148 9.34796 19.7148 8.51953L19.7148 3.59225C19.7148 2.76383 19.0433 2.09226 18.2148 2.09226L5.99609 2.09226","stroke-linecap":"round",key:"18tp5x"}],["path",{d:"M5.98902 10.4656V5.78906H1.3125","stroke-linecap":"round","stroke-linejoin":"round",key:"sfubon"}],["path",{d:"M3.27111 13.6133V13.6133C1.61515 12.3914 1.47948 9.96446 2.98894 8.56564L5.99609 5.77891","stroke-linecap":"round",key:"1w6ie7"}]]);var p=o("Reports",[["path",{d:"M3.03479 9.0849L8.07241 4.0575C8.46296 3.66774 9.0954 3.66796 9.48568 4.05799L14.0295 8.59881C14.42 8.98912 15.053 8.98901 15.4435 8.59857L20.5877 3.45418M16.4996 3.01526H19.9996C20.5519 3.01526 20.9996 3.46297 20.9996 4.01526V7.51526M2.99963 12.0153L2.99963 20.1958C2.99963 20.7481 3.44735 21.1958 3.99963 21.1958L20.0004 21.1958C20.5527 21.1958 21.0004 20.7481 21.0004 20.1958V9.88574M8.82532 9.87183L8.82531 21.1958M15.1754 15.0746V21.1949",key:"1g8azg"}]]);o("Settings",[["path",{d:"M19.0222 9.24778C18.7686 8.63209 18.9226 7.90445 19.0085 7.24413C19.0745 6.73688 18.9158 6.20546 18.5306 5.8112C18.1561 5.42795 17.6471 5.25574 17.1517 5.29628C16.465 5.35248 15.6993 5.49169 15.0673 5.2171C15.0337 5.20249 15 5.18812 14.9661 5.17399C14.3637 4.92272 13.9467 4.33388 13.548 3.81707C13.211 3.38025 12.6823 3.09888 12.088 3.09888C11.4954 3.09888 10.9681 3.37859 10.631 3.81318C10.2309 4.32895 9.81229 4.91673 9.20918 5.1664C9.17044 5.18244 9.13187 5.19879 9.09347 5.21545C8.46538 5.48794 7.70569 5.35157 7.02328 5.29619C6.5283 5.25601 6.01978 5.42825 5.64558 5.8112C5.26693 6.19871 5.10715 6.71872 5.16447 7.21806C5.24116 7.88619 5.39313 8.62174 5.13657 9.2434C4.89276 9.83417 4.31732 10.2511 3.8084 10.6377C3.36536 10.9743 3.07928 11.5068 3.07928 12.1061C3.07928 12.706 3.36595 13.239 3.80978 13.5755C4.31844 13.9612 4.8932 14.3775 5.13676 14.9675C5.39353 15.5896 5.24077 16.3258 5.16315 16.9943C5.1051 17.4943 5.26479 18.0153 5.64401 18.4034C6.01864 18.7868 6.5279 18.959 7.02343 18.9183C7.70705 18.8621 8.46835 18.7243 9.09777 18.9969C9.13378 19.0125 9.16993 19.0278 9.20622 19.0429C9.81052 19.2933 10.2294 19.8832 10.6298 20.4005C10.9669 20.8359 11.4947 21.1163 12.088 21.1163C12.683 21.1163 13.2122 20.8343 13.5491 20.3966C13.9481 19.8783 14.3654 19.2873 14.969 19.0353C15.0005 19.0221 15.0318 19.0088 15.0631 18.9952C15.6963 18.7205 16.4636 18.8612 17.1516 18.9182C17.6475 18.9592 18.1572 18.7871 18.5321 18.4034C18.9179 18.0085 19.0765 17.4761 19.0098 16.9682C18.9229 16.3076 18.7682 15.5793 19.022 14.9632C19.2634 14.3774 19.836 13.9664 20.346 13.5906C20.8013 13.255 21.0967 12.715 21.0967 12.1061C21.0967 11.4977 20.8019 10.9582 20.3474 10.6226C19.8372 10.2458 19.2638 9.83426 19.0222 9.24778Z",key:"102x66"}],["path",{d:"M12.0002 15.1051C13.657 15.1051 15.0002 13.762 15.0002 12.1051C15.0002 10.4482 13.657 9.1051 12.0002 9.1051C10.3433 9.1051 9.00018 10.4482 9.00018 12.1051C9.00018 13.762 10.3433 15.1051 12.0002 15.1051Z",key:"153c57"}]]);var h=o("SqlEditor",[["path",{d:"M7.89844 8.4342L11.5004 12.0356L7.89844 15.6375M12 15.3292H16.5M5 21.1055H19C20.1046 21.1055 21 20.21 21 19.1055V5.10547C21 4.0009 20.1046 3.10547 19 3.10547H5C3.89543 3.10547 3 4.0009 3 5.10547V19.1055C3 20.21 3.89543 21.1055 5 21.1055Z",key:"orzc99"}]]),y=o("Storage",[["path",{d:"M19.4995 11.3685V8.50725L14.0723 3.10584H5.49951C4.94722 3.10584 4.49951 3.55355 4.49951 4.10584V9.1051M19.4468 8.48218L14.0701 3.10547L14.0701 7.48218C14.0701 8.03446 14.5178 8.48218 15.0701 8.48218L19.4468 8.48218ZM6.86675 9.1051H3.96045C3.40816 9.1051 2.96045 9.55282 2.96045 10.1051V19.1051C2.96045 20.2097 3.85588 21.1051 4.96045 21.1051H18.9604C20.065 21.1051 20.9604 20.2097 20.9604 19.1051V12.3685C20.9604 11.8162 20.5127 11.3685 19.9605 11.3685H9.98622C9.72382 11.3685 9.47194 11.2654 9.28489 11.0813L7.56808 9.39226C7.38103 9.20824 7.12915 9.1051 6.86675 9.1051Z",key:"1liyj6"}]]),g=o("TableEditor",[["path",{d:"M2.9707 15.3494L20.9707 15.355M20.9405 9.61588H2.99699M8.77661 9.61588V21.1367M20.9405 5.85547V19.1367C20.9405 20.2413 20.0451 21.1367 18.9405 21.1367H4.99699C3.89242 21.1367 2.99699 20.2413 2.99699 19.1367V5.85547C2.99699 4.7509 3.89242 3.85547 4.99699 3.85547H18.9405C20.0451 3.85547 20.9405 4.7509 20.9405 5.85547Z",key:"1qrasg"}]]),x=o("User",[["path",{d:"M7.06473 19.6328C4.61648 18.0244 3 15.2537 3 12.1055C3 7.13491 7.02944 3.10547 12 3.10547C16.9706 3.10547 21 7.13491 21 12.1055C21 15.2537 19.4273 18.0094 16.979 19.6178M16.9799 22.2844V19.7136C16.9799 17.0258 14.8011 14.8469 12.1133 14.8469C9.42547 14.8469 7.24658 17.0258 7.24658 19.7136V22.2844M15 11.8469C15 13.5038 13.6569 14.8469 12 14.8469C10.3431 14.8469 9 13.5038 9 11.8469C9 10.1901 10.3431 8.84692 12 8.84692C13.6569 8.84692 15 10.1901 15 11.8469Z",key:"173y10"}]])}}]);