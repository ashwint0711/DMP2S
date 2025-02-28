!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d759c53b-f5cb-44e1-8374-527ba5a66718",e._sentryDebugIdIdentifier="sentry-dbid-d759c53b-f5cb-44e1-8374-527ba5a66718")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3587],{41341:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]/functions",function(){return n(3840)}])},86682:function(e,t,n){"use strict";n.d(t,{q:function(){return s}});let s=[{value:"hello-world",name:"Simple Hello World",description:"Basic function that returns a JSON response",content:"// Setup type definitions for built-in Supabase Runtime APIs\nimport \"jsr:@supabase/functions-js/edge-runtime.d.ts\";\ninterface reqPayload {\n  name: string;\n}\n\nconsole.info('server started');\n\nDeno.serve(async (req: Request) => {\n  const { name }: reqPayload = await req.json();\n  const data = {\n    message: `Hello ${name} from foo!`,\n  };\n\n  return new Response(\n    JSON.stringify(data),\n    { headers: { 'Content-Type': 'application/json', 'Connection': 'keep-alive' }}\n  );\n});"},{value:"database-access",name:"Supabase Database Access",description:"Example using Supabase client to query your database",content:"// Setup type definitions for built-in Supabase Runtime APIs\nimport \"jsr:@supabase/functions-js/edge-runtime.d.ts\";\nimport { createClient } from 'jsr:@supabase/supabase-js@2'\n\nDeno.serve(async (req) => {\n  try {\n    const supabase = createClient(\n      Deno.env.get('SUPABASE_URL') ?? '',\n      Deno.env.get('SUPABASE_ANON_KEY') ?? '',\n      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }\n    )\n\n    const { data, error } = await supabase.from('table_name').select('*')\n\n    if (error) {\n      throw error\n    }\n\n    return new Response(JSON.stringify({ data }), {\n      headers: { 'Content-Type': 'application/json' },\n      status: 200,\n    })\n  } catch (err) {\n    return new Response(String(err?.message ?? err), { status: 500 })\n  }\n})"},{value:"storage-upload",name:"Supabase Storage Upload",description:"Upload files to Supabase Storage",content:"// Setup type definitions for built-in Supabase Runtime APIs\nimport \"jsr:@supabase/functions-js/edge-runtime.d.ts\";\nimport { createClient } from 'jsr:@supabase/supabase-js@2'\n\nconst supabase = createClient(\n  Deno.env.get('SUPABASE_URL') ?? '',\n  Deno.env.get('SUPABASE_ANON_KEY') ?? ''\n)\n\nDeno.serve(async (req) => {\n  const formData = await req.formData()\n  const file = formData.get('file')\n  const { data, error } = await supabase\n    .storage\n    .from('your-bucket')\n    .upload(\n      `files/${crypto.randomUUID()}`,\n      file,\n      { contentType: file.type }\n    )\n  if (error) throw error\n  return new Response(\n    JSON.stringify({ data }),\n    { headers: { 'Content-Type': 'application/json' }}\n  )\n})"},{value:"node-api",name:"Node Built-in API Example",description:"Example using Node.js built-in crypto and http modules",content:'// Setup type definitions for built-in Supabase Runtime APIs\nimport "jsr:@supabase/functions-js/edge-runtime.d.ts";\nimport { randomBytes } from "node:crypto";\nimport { createServer } from "node:http";\nimport process from "node:process";\n\nconst generateRandomString = (length) => {\n  const buffer = randomBytes(length);\n  return buffer.toString(\'hex\');\n};\n\nconst randomString = generateRandomString(10);\nconsole.log(randomString);\n\nconst server = createServer((req, res) => {\n  const message = `Hello`;\n  res.end(message);\n});\n\nserver.listen(9999);'},{value:"express",name:"Express Server",description:"Example using Express.js for routing",content:'// Setup type definitions for built-in Supabase Runtime APIs\nimport "jsr:@supabase/functions-js/edge-runtime.d.ts";\nimport express from "npm:express@4.18.2";\n\nconst app = express();\n\napp.get(/(.*)/, (req, res) => {\n  res.send("Welcome to Supabase");\n});\n\napp.listen(8000);'},{value:"openai-completion",name:"OpenAI Text Completion",description:"Generate text completions using OpenAI GPT-3",content:"// Setup type definitions for built-in Supabase Runtime APIs\nimport \"jsr:@supabase/functions-js/edge-runtime.d.ts\";\nimport { Configuration, OpenAIApi } from 'npm:openai@3.3.0'\n\nconst openAi = new OpenAIApi(\n  new Configuration({\n    apiKey: Deno.env.get('OPENAI_API_KEY')\n  })\n)\n\nDeno.serve(async (req) => {\n  const { prompt } = await req.json()\n  const completion = await openAi.createCompletion({\n    model: 'text-davinci-003',\n    prompt,\n    max_tokens: 200\n  })\n  return new Response(\n    JSON.stringify({ text: completion.data.choices[0].text }),\n    { headers: { 'Content-Type': 'application/json' }}\n  )\n})"},{value:"stripe-webhook",name:"Stripe Webhook Example",description:"Handle Stripe webhook events securely",content:"// Setup type definitions for built-in Supabase Runtime APIs\nimport \"jsr:@supabase/functions-js/edge-runtime.d.ts\";\nimport Stripe from 'npm:stripe@12.0.0'\n\nconst stripe = new Stripe(Deno.env.get('STRIPE_API_KEY')!)\nconst endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET')!\n\nDeno.serve(async (req) => {\n  const signature = req.headers.get('stripe-signature')\n  try {\n    const event = stripe.webhooks.constructEvent(\n      await req.text(),\n      signature!,\n      endpointSecret\n    )\n    switch (event.type) {\n      case 'payment_intent.succeeded':\n        // Handle successful payment\n        break\n    }\n    return new Response(JSON.stringify({ received: true }), {\n      headers: { 'Content-Type': 'application/json' },\n    })\n  } catch (err) {\n    return new Response(\n      JSON.stringify({ error: err.message }), \n      { status: 400 }\n    )\n  }\n})"},{value:"resend-email",name:"Send Emails",description:"Send emails using the Resend API",content:"// Setup type definitions for built-in Supabase Runtime APIs\nimport \"jsr:@supabase/functions-js/edge-runtime.d.ts\";\n\nconst RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!\n\nDeno.serve(async (req) => {\n  const { to, subject, html } = await req.json()\n  const res = await fetch('https://api.resend.com/emails', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      Authorization: `Bearer ${RESEND_API_KEY}`,\n    },\n    body: JSON.stringify({\n      from: 'you@example.com',\n      to,\n      subject,\n      html,\n    }),\n  })\n  const data = await res.json()\n  return new Response(JSON.stringify(data), {\n    headers: { 'Content-Type': 'application/json' },\n  })\n})"},{value:"image-transform",name:"Image Transformation",description:"Transform images using ImageMagick WASM",content:"// Setup type definitions for built-in Supabase Runtime APIs\nimport \"jsr:@supabase/functions-js/edge-runtime.d.ts\";\nimport {\n  ImageMagick,\n  initializeImageMagick,\n} from \"npm:@imagemagick/magick-wasm@0.0.30\"\n\nawait initializeImageMagick()\n\nDeno.serve(async (req) => {\n  const formData = await req.formData()\n  const file = formData.get('file')\n  const content = await file.arrayBuffer()\n  const result = await ImageMagick.read(new Uint8Array(content), (img) => {\n    img.resize(500, 300)\n    img.blur(60, 5)\n    return img.write(data => data)\n  })\n  return new Response(\n    result,\n    { headers: { 'Content-Type': 'image/png' }}\n  )\n})"},{value:"discord-bot",name:"Discord Bot Example",description:"Build a Slash Command Discord Bot",content:"// Setup type definitions for built-in Supabase Runtime APIs\nimport \"jsr:@supabase/functions-js/edge-runtime.d.ts\";\nimport { verifyDiscordRequest } from './_shared/discord.ts'\n\nDeno.serve(async (req) => {\n  const { valid } = await verifyDiscordRequest(req)\n  if (!valid) {\n    return new Response('Invalid request', { status: 401 })\n  }\n  const message = await req.json()\n  if (message.type === 1) {\n    return new Response(\n      JSON.stringify({ type: 1 }),\n      { headers: { 'Content-Type': 'application/json' }}\n    )\n  }\n  return new Response(\n    JSON.stringify({\n      type: 4,\n      data: { content: 'Hello from Supabase Edge Functions!' }\n    }),\n    { headers: { 'Content-Type': 'application/json' }}\n  )\n})"},{value:"websocket-server",name:"Websocket Server Example",description:"Create a real-time WebSocket server",content:'// Setup type definitions for built-in Supabase Runtime APIs\nimport "jsr:@supabase/functions-js/edge-runtime.d.ts";\n\nDeno.serve((req) => {\n  const upgrade = req.headers.get("upgrade") || ""\n  if (upgrade.toLowerCase() != "websocket") {\n    return new Response("request isn\'t trying to upgrade to websocket.")\n  }\n  const { socket, response } = Deno.upgradeWebSocket(req)\n  socket.onopen = () => {\n    console.log("client connected!")\n    socket.send(\'Welcome to Supabase Edge Functions!\')\n  }\n  socket.onmessage = (e) => {\n    console.log("client sent message:", e.data)\n    socket.send(new Date().toString())\n  }\n  return response\n})'}]},85047:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var s=n(28894),a=n(6464),r=n(50737);async function i(e){let{data:t,error:n}=await (0,a.U2)("/platform/profile/access-tokens",{signal:e});return n&&(0,a.S3)(n),t}let o=function(){let{enabled:e=!0,...t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.a)(r.C.list(),e=>{let{signal:t}=e;return i(t)},t)}},50737:function(e,t,n){"use strict";n.d(t,{C:function(){return s}});let s={list:()=>["access-tokens"]}},50497:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(98266).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},28519:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(98266).Z)("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]])},58296:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(98266).Z)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]])},26056:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(98266).Z)("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]])},71042:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(98266).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},30653:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(98266).Z)("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]])},53972:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(98266).Z)("PanelLeftDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]])},31769:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(98266).Z)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]])},40929:function(e,t,n){"use strict";var s=n(97458),a=n(62507),r=n(57304),i=n(52983),o=n(65092);let c=(0,i.forwardRef)((e,t)=>{let{commands:n,className:a}=e;return(0,s.jsx)("div",{ref:t,className:(0,o.cn)("space-y-4",a),children:n.map((e,t)=>(0,s.jsx)(l,{item:e},"command-".concat(t)))})});c.displayName="CommandRender",t.Z=c;let l=e=>{let{item:t}=e,[n,o]=(0,i.useState)(!1);return(0,s.jsxs)("div",{className:"space-y-1","data-sentry-component":"Command","data-sentry-source-file":"CommandRender.tsx",children:[(0,s.jsx)("span",{className:"font-mono text-sm text-foreground-lighter",children:"> ".concat(t.comment)}),(0,s.jsx)("div",{className:"flex items-center gap-2",children:(0,s.jsxs)("div",{className:"flex gap-2 font-mono text-sm font-normal text-foreground",children:[(0,s.jsx)("span",{className:"text-foreground-lighter",children:"$"}),(0,s.jsxs)("span",{children:[(0,s.jsxs)("span",{children:[t.jsx?t.jsx():null," "]}),(0,s.jsx)("button",{type:"button",className:"text-foreground-lighter hover:text-foreground",onClick:()=>{var e;e=t.command,o(!0),navigator.clipboard.writeText(e).then(),setTimeout(function(){o(!1)},3e3)},children:n?(0,s.jsx)(a.Z,{size:14,strokeWidth:3,className:"text-brand"}):(0,s.jsx)(r.Z,{size:14})})]})]})})]})}},13220:function(e,t,n){"use strict";n.d(t,{L:function(){return c}});var s=n(97458),a=n(91587),r=n(52983),i=n(15271),o=n(65092);let c=(0,r.forwardRef)((e,t)=>{let{media:n,meta:r,onClick:c,children:l,className:d,...u}=e;return(0,s.jsxs)(i.aY,{ref:t,className:(0,o.cn)("flex items-center justify-between text-sm gap-4",c&&"cursor-pointer hover:bg-surface-200",d),onClick:c,...u,children:[n&&(0,s.jsx)("div",{className:"text-foreground-light flex items-center justify-center",children:n}),(0,s.jsx)("div",{className:"flex-1",children:l}),r&&(0,s.jsx)("div",{children:r}),c&&(0,s.jsx)(a.Z,{strokeWidth:1.5,size:16})]})});c.displayName="ResourceItem"},49738:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var s=n(97458),a=n(52983),r=n(15271);let i=(0,a.forwardRef)((e,t)=>{let{children:n,className:a,...i}=e;return(0,s.jsx)(r.Zb,{ref:t,...i,children:(0,s.jsx)("div",{className:a,children:n})})});i.displayName="ResourceList"},3840:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var s=n(97458),a=n(98601),r=n(21821),i=n(10839),o=n(4839),c=n(32691),l=n(12436),d=n(28977),u=n.n(d),p=n(62507),m=n(57304),f=n(52983),x=n(39303),h=n(88971),g=n(57006),y=n(79600),j=n(40577);let b=e=>{var t;let{function:n}=e,a=(0,c.useRouter)(),{ref:r}=(0,x.UO)(),{project:i}=(0,h.d2)(),[o,l]=(0,f.useState)(!1),{data:d}=(0,y.z)({projectRef:r}),b=null==i?void 0:i.restUrl,v=void 0!==b?new URL(b).hostname.split(".").pop():"co",w="https://".concat(r,".supabase.").concat(v,"/functions/v1/").concat(n.slug),N=(null==d?void 0:null===(t=d.customDomain)||void 0===t?void 0:t.status)==="active"?"https://".concat(d.customDomain.hostname,"/functions/v1/").concat(n.slug):w;return(0,s.jsxs)(g.Z.tr,{onClick:()=>{a.push("/project/".concat(r,"/functions/").concat(n.slug))},"data-sentry-element":"unknown","data-sentry-component":"EdgeFunctionsListItem","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:[(0,s.jsx)(g.Z.td,{"data-sentry-element":"unknown","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:(0,s.jsx)("div",{className:"flex items-center gap-2",children:(0,s.jsx)("p",{className:"text-sm text-foreground",children:n.name})})}),(0,s.jsx)(g.Z.td,{"data-sentry-element":"unknown","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:(0,s.jsxs)("div",{className:"text-xs text-foreground-light flex gap-2 items-center truncate",children:[(0,s.jsx)("p",{title:N,className:"font-mono truncate hidden md:inline max-w-[30rem]",children:N}),(0,s.jsx)("button",{type:"button",className:"text-foreground-lighter hover:text-foreground transition",onClick:e=>{e.stopPropagation(),l(!0),navigator.clipboard.writeText(N).then(),setTimeout(function(){l(!1)},3e3)},children:o?(0,s.jsx)("div",{className:"text-brand",children:(0,s.jsx)(p.Z,{size:14,strokeWidth:3})}):(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("div",{className:"block",children:(0,s.jsx)(m.Z,{size:14,strokeWidth:1.5})})})})]})}),(0,s.jsx)(g.Z.td,{className:"hidden 2xl:table-cell","data-sentry-element":"unknown","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:(0,s.jsx)("p",{className:"text-foreground-light",children:u()(n.created_at).format("DD MMM, YYYY HH:mm")})}),(0,s.jsx)(g.Z.td,{className:"lg:table-cell","data-sentry-element":"unknown","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:(0,s.jsxs)(j.u,{"data-sentry-element":"Tooltip","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:[(0,s.jsx)(j.aJ,{"data-sentry-element":"TooltipTrigger","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:(0,s.jsx)("div",{className:"flex items-center space-x-2",children:(0,s.jsx)("p",{className:"text-sm text-foreground-light",children:u()(n.updated_at).fromNow()})})}),(0,s.jsxs)(j._v,{side:"bottom","data-sentry-element":"TooltipContent","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:["Last updated on ",u()(n.updated_at).format("DD MMM, YYYY HH:mm")]})]})}),(0,s.jsx)(g.Z.td,{className:"lg:table-cell","data-sentry-element":"unknown","data-sentry-source-file":"EdgeFunctionsListItem.tsx",children:(0,s.jsx)("p",{className:"text-foreground-light",children:n.version})})]},n.id)};var v=n(78066),w=n(13220),N=n(49738),S=n(21786),k=n(83145),C=n.n(k),E=n(86186),I=n(15271),R=n(36210),D=n(90839),A=n(77060),Z=n(86682),_=n(1707),F=n(38232),P=n(40929),z=n(67096),O=n(85047),q=n(31485),L=n(51e3);let T=(0,f.forwardRef)((e,t)=>{var n,a,i,d,u,p;let{closable:m=!1,removeBorder:x=!1,...h}=e,g=(0,c.useRouter)(),{ref:j}=(0,l.UO)(),[b,v]=(0,f.useState)(!m),{data:w}=(0,O.h)(),{data:N}=(0,q.zR)({projectRef:j}),{data:S}=(0,y.z)({projectRef:j}),{anonKey:k}=(0,q.Pb)(N),C=null!==(d=null==k?void 0:k.api_key)&&void 0!==d?d:"[YOUR ANON KEY]",E=null!==(u=null==N?void 0:null===(n=N.app_config)||void 0===n?void 0:n.protocol)&&void 0!==u?u:"https",I=null!==(p=null==N?void 0:null===(a=N.app_config)||void 0===a?void 0:a.endpoint)&&void 0!==p?p:"",R=(null==S?void 0:null===(i=S.customDomain)||void 0===i?void 0:i.status)==="active"?"https://".concat(S.customDomain.hostname,"/functions/v1"):"".concat(E,"://").concat(I,"/functions/v1"),A=I?new URL("https://".concat(I)).hostname.split(".").pop():"co",Z=[{command:"supabase functions new hello-world",description:" creates a function stub at ./functions/hello-world/index.ts",jsx:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-brand-600",children:"supabase"})," functions new hello-world"]}),comment:"Create a function"},{command:"supabase functions deploy hello-world --project-ref ".concat(j),description:"Deploys function at ./functions/hello-world/index.ts",jsx:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-brand-600",children:"supabase"})," functions deploy hello-world --project-ref ",j]}),comment:"Deploy your function"},{command:"curl -L -X POST 'https://".concat(j,".supabase.").concat(A,"/functions/v1/hello-world' -H 'Authorization: Bearer ").concat(null!=C?C:"[YOUR ANON KEY]",'\' --data \'{"name":"Functions"}\''),description:"Invokes the hello-world function",jsx:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-brand-600",children:"curl"})," -L -X POST '",R,"/hello-world' -H 'Authorization: Bearer [YOUR ANON KEY]'"," ",'--data \'{"name":"Functions"}\'']}),comment:"Invoke your function"}];return(0,s.jsxs)(L.zF,{ref:t,open:b,className:"w-full",onOpenChange:()=>v(!b),...h,children:[(0,s.jsxs)(L.wy,{className:"flex w-full justify-between",disabled:!m,children:[(0,s.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,s.jsx)("div",{className:"flex items-center justify-center w-8 h-8 p-2 border rounded bg-alternative",children:(0,s.jsx)(r.Z,{strokeWidth:2})}),(0,s.jsx)("h4",{children:"Create your first Edge Function via the CLI"})]}),m&&(0,s.jsx)("div",{className:"cursor-pointer",onClick:()=>v(!b),children:b?(0,s.jsx)(_.Z,{size:16,strokeWidth:1.5}):(0,s.jsx)(F.Z,{size:16,strokeWidth:1.5})})]}),(0,s.jsxs)(L.Fw,{className:"w-full transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",children:[(0,s.jsx)(P.Z,{commands:Z,className:"my-4"}),w&&0===w.length?(0,s.jsxs)("div",{className:"px-8 py-4 space-y-3 border-t",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-foreground",children:"You may need to create an access token"}),(0,s.jsx)("p",{className:"text-sm text-foreground-light",children:"You can create a secure access token in your account section"})]}),(0,s.jsx)(D.z,{type:"default",onClick:()=>g.push("/account/tokens"),children:"Access tokens"})]}):(0,s.jsxs)("div",{className:"py-4 space-y-3 border-t",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-base text-foreground",children:"Need help?"}),(0,s.jsx)("p",{className:"text-sm text-foreground-light",children:"Read the documentation, or browse some sample code."})]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(z.G,{href:"https://supabase.com/docs/guides/functions"}),(0,s.jsx)(D.z,{asChild:!0,type:"default",icon:(0,s.jsx)(o.Z,{}),children:(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions",children:"Examples"})})]})]})]})]})});T.displayName="TerminalInstructions";let W=()=>{let{ref:e}=(0,l.UO)(),t=(0,c.useRouter)(),{setAiAssistantPanel:n}=(0,E.WZ)(),a=(0,S.P)("edgeFunctionCreate");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(I.Zb,{"data-sentry-element":"Card","data-sentry-source-file":"FunctionsEmptyState.tsx",children:[(0,s.jsx)(I.Ol,{"data-sentry-element":"CardHeader","data-sentry-source-file":"FunctionsEmptyState.tsx",children:(0,s.jsx)(I.ll,{"data-sentry-element":"CardTitle","data-sentry-source-file":"FunctionsEmptyState.tsx",children:"Create your first edge function"})}),(0,s.jsxs)(I.aY,{className:"p-0 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] divide-y md:divide-y-0 md:divide-x divide-default items-stretch","data-sentry-element":"CardContent","data-sentry-source-file":"FunctionsEmptyState.tsx",children:[(0,s.jsxs)("div",{className:"p-8",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(r.Z,{strokeWidth:1.5,size:20,"data-sentry-element":"Terminal","data-sentry-source-file":"FunctionsEmptyState.tsx"}),(0,s.jsx)("h4",{className:"text-base text-foreground",children:"Via CLI"})]}),(0,s.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Create and deploy functions using the Supabase CLI. Ideal for local development and version control."}),(0,s.jsxs)(R.Vq,{"data-sentry-element":"Dialog","data-sentry-source-file":"FunctionsEmptyState.tsx",children:[(0,s.jsx)(R.hg,{asChild:!0,"data-sentry-element":"DialogTrigger","data-sentry-source-file":"FunctionsEmptyState.tsx",children:(0,s.jsx)(D.z,{type:"default","data-sentry-element":"Button","data-sentry-source-file":"FunctionsEmptyState.tsx",children:"View CLI Instructions"})}),(0,s.jsx)(R.cZ,{size:"large","data-sentry-element":"DialogContent","data-sentry-source-file":"FunctionsEmptyState.tsx",children:(0,s.jsx)(R.VO,{padding:"small","data-sentry-element":"DialogSection","data-sentry-source-file":"FunctionsEmptyState.tsx",children:(0,s.jsx)(T,{"data-sentry-element":"TerminalInstructions","data-sentry-source-file":"FunctionsEmptyState.tsx"})})})]})]}),(0,s.jsxs)("div",{className:"p-8",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(A.c,{size:20,"data-sentry-element":"AiIconAnimation","data-sentry-source-file":"FunctionsEmptyState.tsx"}),(0,s.jsx)("h4",{className:"text-base text-foreground",children:"AI Assistant"})]}),(0,s.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Let our AI assistant help you create functions. Perfect for kickstarting a function."}),(0,s.jsx)(D.z,{type:"default",onClick:()=>n({open:!0,initialInput:"Create a new edge function that ...",suggestions:{title:"I can help you create a new edge function. Here are a few example prompts to get you started:",prompts:["Create a new edge function that processes payments with Stripe","Create a new edge function that sends emails with Resend","Create a new edge function that generates PDFs from HTML templates"]}}),"data-sentry-element":"Button","data-sentry-source-file":"FunctionsEmptyState.tsx",children:"Open Assistant"})]}),a&&(0,s.jsxs)("div",{className:"p-8",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(i.Z,{strokeWidth:1.5,size:20}),(0,s.jsx)("h4",{className:"text-base text-foreground",children:"Via Editor"})]}),(0,s.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Create and edit functions directly in the browser. Download to local at any time."}),(0,s.jsx)(D.z,{type:"default",onClick:()=>t.push("/project/".concat(e,"/functions/new")),children:"Open Editor"})]})]})]}),a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.qw,{className:"text-xl mb-4 mt-12",children:"Start with a template"}),(0,s.jsx)(N.D,{children:Z.q.map(t=>(0,s.jsx)(w.L,{media:(0,s.jsx)(i.Z,{strokeWidth:1.5,size:16,className:"-translate-y-[9px]"}),onClick:()=>{},children:(0,s.jsxs)(C(),{href:"/project/".concat(e,"/functions/new?template=").concat(t.value),children:[(0,s.jsx)("p",{children:t.name}),(0,s.jsx)("p",{className:"text-sm text-foreground-lighter",children:t.description})]})},t.name))})]})]})};var M=n(31584),Y=n(11666),U=n(3760),H=n(5529),B=n(359),J=n(63621),K=n(7429),V=n(14500);let X=()=>{let{ref:e}=(0,l.UO)(),{setAiAssistantPanel:t}=(0,E.WZ)(),n=(0,c.useRouter)(),{data:d,error:u,isLoading:p,isError:m,isSuccess:f}=(0,K.I)({projectRef:e}),x=(0,S.P)("edgeFunctionCreate"),h=(null!=d?d:[]).length>0,y=(0,s.jsxs)(V.h_,{children:[(0,s.jsx)(V.$F,{asChild:!0,children:(0,s.jsx)(D.z,{type:"primary",iconRight:(0,s.jsx)(a.Z,{className:"w-4 h-4",strokeWidth:1.5}),children:"Deploy a new function"})}),(0,s.jsxs)(V.AW,{align:"end",className:"w-80",children:[(0,s.jsxs)(R.Vq,{children:[(0,s.jsx)(R.hg,{asChild:!0,children:(0,s.jsxs)(V.Xi,{className:"gap-4",onSelect:e=>e.preventDefault(),children:[(0,s.jsx)(r.Z,{className:"shrink-0",size:16,strokeWidth:1.5}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-foreground",children:"Via CLI"}),(0,s.jsx)("p",{children:"Create an edge function locally and then deploy your function via the Supabase CLI"})]})]})}),(0,s.jsx)(R.cZ,{size:"large",children:(0,s.jsx)(R.VO,{padding:"small",children:(0,s.jsx)(T,{})})})]}),x&&(0,s.jsxs)(V.Xi,{onSelect:()=>n.push("/project/".concat(e,"/functions/new")),className:"gap-4",children:[(0,s.jsx)(i.Z,{className:"shrink-0",size:16,strokeWidth:1.5}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-foreground",children:"Via Editor"}),(0,s.jsx)("p",{children:"Create an edge function in the Supabase Studio editor and then deploy your function"})]})]})]})]}),j=[(0,s.jsx)(z.G,{href:"https://supabase.com/docs/guides/functions"},"docs"),(0,s.jsx)(D.z,{asChild:!0,type:"default",icon:(0,s.jsx)(o.Z,{}),children:(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions",children:"Examples"})},"edge-function-examples"),(0,s.jsx)(B.u,{type:"default",className:"px-1 pointer-events-auto",icon:(0,s.jsx)(A.c,{size:16}),onClick:()=>t({open:!0,initialInput:"Create a new edge function that ...",suggestions:{title:"I can help you create a new edge function. Here are a few example prompts to get you started:",prompts:["Create a new edge function that processes payments with Stripe","Create a new edge function that sends emails with Resend","Create a new edge function that generates PDFs from HTML templates"]}}),tooltip:{content:{side:"bottom",text:"Create with Supabase Assistant"}}},"edge-function-create")];return(0,s.jsx)(U.X,{size:"large",title:"Edge Functions",subtitle:"Deploy edge functions to handle complex business logic",primaryActions:y,secondaryActions:j,"data-sentry-element":"PageLayout","data-sentry-component":"EdgeFunctionsPage","data-sentry-source-file":"index.tsx",children:(0,s.jsx)(v._S,{size:"large","data-sentry-element":"ScaffoldContainer","data-sentry-source-file":"index.tsx",children:(0,s.jsxs)(v.jX,{isFullWidth:!0,"data-sentry-element":"ScaffoldSection","data-sentry-source-file":"index.tsx",children:[p&&(0,s.jsx)(J.A,{}),m&&(0,s.jsx)(H.Z,{error:u,subject:"Failed to retrieve edge functions"}),f&&(0,s.jsx)(s.Fragment,{children:h?(0,s.jsx)(g.Z,{head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z.th,{children:"Name"}),(0,s.jsx)(g.Z.th,{children:"URL"}),(0,s.jsx)(g.Z.th,{className:"hidden 2xl:table-cell",children:"Created"}),(0,s.jsx)(g.Z.th,{className:"lg:table-cell",children:"Last updated"}),(0,s.jsx)(g.Z.th,{className:"lg:table-cell",children:"Deployments"})]}),body:(0,s.jsx)(s.Fragment,{children:d.length>0&&d.map(e=>(0,s.jsx)(b,{function:e},e.id))})}):(0,s.jsx)(W,{})})]})})})};X.getLayout=e=>(0,s.jsx)(M.Z,{children:(0,s.jsx)(Y.Z,{children:e})});var G=X},15271:function(e,t,n){"use strict";n.d(t,{Ol:function(){return o},Zb:function(){return i},aY:function(){return l},eW:function(){return d},ll:function(){return c}});var s=n(97458),a=n(52983),r=n(65092);let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("rounded-lg border bg-surface-100 text-card-foreground shadow-sm",n),...a})});i.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 py-4 px-6 border-b",n),...a})});o.displayName="CardHeader";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("h3",{ref:t,className:(0,r.cn)("text-xs font-mono uppercase",n),...a})});c.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("p",{ref:t,className:(0,r.cn)("text-sm text-foreground-muted",n),...a})}).displayName="CardDescription";let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("py-4 px-6 border-b last:border-none",n),...a})});l.displayName="CardContent";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)(" flex items-center py-4 px-6",n),...a})});d.displayName="CardFooter"}},function(e){e.O(0,[6665,7623,588,305,6402,1864,8703,1018,4975,4376,9621,3954,441,9911,3760,4637,8069,9344,7726,6739,4098,902,4847,1379,2047,9803,7414,1853,8155,9774,2888,179],function(){return e(e.s=41341)}),_N_E=e.O()}]);