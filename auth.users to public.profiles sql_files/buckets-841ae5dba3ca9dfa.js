!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="047bd05b-7cfa-4dc1-8ca3-ff005b3c1ab2",e._sentryDebugIdIdentifier="sentry-dbid-047bd05b-7cfa-4dc1-8ca3-ff005b3c1ab2")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3839],{19168:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]/storage/buckets",function(){return r(85074)}])},47202:function(e,t,r){"use strict";var s=r(97458),n=r(12436),a=r(83145),c=r.n(a),o=r(10611),i=r(90839);t.Z=e=>{var t;let{error:r}=e,{ref:a}=(0,n.UO)();return(0,s.jsx)("div",{className:"storage-container flex items-center justify-center flex-grow","data-sentry-component":"StorageBucketsError","data-sentry-source-file":"StorageBucketsError.tsx",children:(0,s.jsx)("div",{children:(0,s.jsxs)(o.b,{withIcon:!0,variant:"warning",title:"Failed to fetch buckets",actions:[(0,s.jsx)(i.z,{asChild:!0,type:"default",className:"ml-4",children:(0,s.jsx)(c(),{href:"/support/new?ref=".concat(a,"&category=dashboard_bug&subject=Unable%20to%20fetch%20storage%20buckets"),children:"Contact support"})},"contact-support")],"data-sentry-element":"Alert","data-sentry-source-file":"StorageBucketsError.tsx",children:[(0,s.jsx)("p",{className:"mb-1",children:"Please try refreshing your browser, or contact support if the issue persists"}),(0,s.jsxs)("p",{children:["Error: ",null!==(t=null==r?void 0:r.message)&&void 0!==t?t:"Unknown"]})]})})})}},35452:function(e,t,r){"use strict";var s=r(97458),n=r(4839),a=r(359),c=r(83145),o=r.n(c),i=r(90839);t.Z=e=>{let{title:t="",size:r="medium",children:c,ctaButtonLabel:l="",infoButtonLabel:d="",infoButtonUrl:u="",onClickCta:f=()=>{},loading:x=!1,disabled:h=!1,disabledMessage:p="",ctaUrl:y}=e,g=l&&f||u&&d;return(0,s.jsx)("div",{className:"flex h-full w-full items-center justify-center","data-sentry-component":"ProductEmptyState","data-sentry-source-file":"ProductEmptyState.tsx",children:(0,s.jsx)("div",{className:"flex space-x-4 rounded border bg-surface-100 p-6 shadow-md",children:(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsxs)("div",{className:"".concat("medium"===r?"w-80":"w-[400px]"," space-y-4"),children:[(0,s.jsx)("h5",{className:"text-foreground",children:t}),(0,s.jsx)("div",{className:"flex flex-col space-y-2 text-foreground-light",children:c}),g&&(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[l&&y?(0,s.jsx)(i.z,{asChild:!0,type:"primary",children:(0,s.jsx)(o(),{href:y,children:l})}):l&&f?(0,s.jsx)(a.u,{type:"primary",onClick:f,loading:x,disabled:x||h,tooltip:{content:{side:"bottom",text:h&&p.length>0?p:void 0}},children:l}):null,u&&d?(0,s.jsx)(i.z,{type:"default",icon:(0,s.jsx)(n.Z,{strokeWidth:1.5}),children:(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:u,children:d})}):null]})]})})})})}},85074:function(e,t,r){"use strict";r.r(t);var s=r(97458),n=r(12436),a=r(88971),c=r(47202),o=r(78077),i=r(31584),l=r(35452),d=r(82218);let u=()=>{let{ref:e}=(0,n.UO)(),{project:t}=(0,a.d2)(),{error:r,isError:o}=(0,d.K)({projectRef:e});return t?(o&&c.Z,(0,s.jsx)("div",{className:"storage-container flex flex-grow","data-sentry-component":"PageLayout","data-sentry-source-file":"index.tsx",children:(0,s.jsxs)(l.Z,{title:"Storage",infoButtonLabel:"About storage",infoButtonUrl:"https://supabase.com/docs/guides/storage","data-sentry-element":"ProductEmptyState","data-sentry-source-file":"index.tsx",children:[(0,s.jsx)("p",{className:"text-foreground-light text-sm",children:"Create buckets to store and serve any type of digital content."}),(0,s.jsx)("p",{className:"text-foreground-light text-sm",children:"Make your buckets private or public depending on your security preference."})]})})):(0,s.jsx)("div",{})};u.getLayout=e=>(0,s.jsx)(i.Z,{children:(0,s.jsx)(o.Z,{title:"Buckets",children:e})}),t.default=u}},function(e){e.O(0,[6665,3659,7623,588,305,6402,1864,8703,1018,4975,4376,9621,3954,441,9911,3760,4637,8069,9344,7726,6739,4098,902,8985,8762,1727,4847,1379,2047,9803,7414,1853,8942,1826,8077,9774,2888,179],function(){return e(e.s=19168)}),_N_E=e.O()}]);