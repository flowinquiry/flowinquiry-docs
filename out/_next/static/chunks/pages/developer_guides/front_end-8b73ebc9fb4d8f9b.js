(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{8170:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developer_guides/front_end",function(){return s(7909)}])},7909:function(e,i,s){"use strict";s.r(i),s.d(i,{useTOC:function(){return o}});var n=s(2676),r=s(5169),t=s(7029);s(8580),s(6602);var l=s(3313),d=s(3026),h=s(7289),a=s(2647);function o(e){return[{value:"Get the latest sources from GitHub",id:"get-the-latest-sources-from-github",depth:2},{value:"Development",id:"development",depth:2},{value:"Folders organization",id:"folders-organization",depth:3},{value:"Checking environments",id:"checking-environments",depth:4},{value:"Setup scripts",id:"setup-scripts",depth:4},{value:"Run in dev mode",id:"run-in-dev-mode",depth:4}]}function c(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.default=(0,r.c)(function(e){let{toc:i=o(e)}=e,s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,l.a)(),...e.components};return d.z||c("FileTree",!1),d.z.Folder||c("FileTree.Folder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Front-end"}),"\n",(0,n.jsxs)(s.p,{children:["Flexwork front-end uses ",(0,n.jsx)(s.a,{href:"https://nextjs.org/",children:"NextJs"})," framework to develop its UI."]}),"\n",(0,n.jsx)(s.h2,{id:i[0].id,children:i[0].value}),"\n",(0,n.jsxs)(s.p,{children:["Access the latest source code for Flexwork’s front-end at ",(0,n.jsx)(s.a,{href:"https://github.com/theflexwork/flexwork-frontend",children:"https://github.com/theflexwork/flexwork-frontend"})]}),"\n",(0,n.jsx)(s.h2,{id:i[1].id,children:i[1].value}),"\n",(0,n.jsx)(s.h3,{id:i[2].id,children:i[2].value}),"\n",(0,n.jsx)(d.z,{children:(0,n.jsxs)(d.z.Folder,{name:"flexwork-frontend",defaultOpen:!0,children:[(0,n.jsx)(d.z.Folder,{name:"public"}),(0,n.jsx)(d.z.Folder,{name:"scripts"}),(0,n.jsx)(d.z.Folder,{name:"src"})]})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"public"})," contains static assets, such as files and images, served by Next.js"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"scripts"})," Includes useful scripts for validating environment settings, setting up project environment variables, and more"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"src"})," the Flexwork’s frontend source code"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:i[3].id,children:i[3].value}),"\n",(0,n.jsx)(s.p,{children:"Flexwork’s front-end requires Node and pnpm to be installed on your machine. You can run the valid_checks.sh script located in the scripts folder to verify if your machine is set up to work with Flexwork"}),"\n",(0,n.jsx)(s.pre,{icon:a.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"➜"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  flexwork-frontend"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" git:"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"main"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"scripts/valid_checks.sh"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Running"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" node_check.sh..."})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Node.js"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" version:"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 20.14.0"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Node.js"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" version"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" is"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 20.14.0,"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" which"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" is"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" greater"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" than"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" or"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" equal"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" to"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 18."})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"node_check.sh"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" succeeded."})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Running"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" pnpm_check.sh..."})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"pnpm"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" is"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" installed."})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"pnpm"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" version:"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 9.7.0"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"pnpm_check.sh"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" succeeded."})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Your"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" environments"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" settings"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" satisfy"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Flexwork's conditions"})]})]})}),"\n",(0,n.jsx)(s.h4,{id:i[4].id,children:i[4].value}),"\n",(0,n.jsx)(s.p,{children:"You will need to run the following scripts:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"scripts/init_git_hooks.sh"}),": Sets up a git hook to automatically format and check code logic each time you commit changes."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"scripts/init_environments.sh"}),": Create a new ",(0,n.jsx)(s.code,{children:".env.local"})," file, which is used by the Next.js application to read predefined environment variables"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(h.U,{emoji:"\uD83D\uDCA1",children:(0,n.jsxs)(s.p,{children:["You can run the ",(0,n.jsx)(s.code,{children:"scripts/all.sh"})," script, which will check your environment settings and perform the necessary configurations, eliminating the need to run multiple scripts individually"]})}),"\n",(0,n.jsx)(s.h4,{id:i[5].id,children:i[5].value}),"\n",(0,n.jsx)(s.p,{children:"Open the terminal and run the command"}),"\n",(0,n.jsx)(s.pre,{icon:a.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,n.jsx)(s.code,{children:(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"pnpm"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" dev"})]})})}),"\n",(0,n.jsxs)(s.p,{children:["it will launch the process to start the Flexwork front-end at the default port ",(0,n.jsx)(s.code,{children:"3000"})]}),"\n",(0,n.jsx)(s.pre,{icon:a.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"➜"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  flexwork-frontend"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" git:"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"main"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"pnpm"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" dev"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" frontend@0.1.0 dev "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"~"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"/flexwork-frontend"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" next dev"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  ▲"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Next.js"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 14.2.13"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  -"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Local:"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        http://localhost:3000"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  -"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Environments:"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" .env.local"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" ✓"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Starting..."})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" ✓"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Ready"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" in"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 1805ms"})]})]})})]})},"/developer_guides/front_end",{filePath:"pages/developer_guides/front_end.mdx",timestamp:1727855196e3,pageMap:t.v,frontMatter:{},title:"Front-end"},"undefined"==typeof RemoteContent?o:RemoteContent.useTOC)},7289:function(e,i,s){"use strict";s.d(i,{U:function(){return h}});var n=s(2676),r=s(4814),t=s(2647);let l={default:"\uD83D\uDCA1",error:"\uD83D\uDEAB",info:(0,n.jsx)(t.AV,{className:"_mt-1"}),warning:"⚠️"},d={default:(0,r.Z)("_border-orange-100 _bg-orange-50 _text-orange-800 dark:_border-orange-400/30 dark:_bg-orange-400/20 dark:_text-orange-300"),error:(0,r.Z)("_border-red-200 _bg-red-100 _text-red-900 dark:_border-red-200/30 dark:_bg-red-900/30 dark:_text-red-200"),info:(0,r.Z)("_border-blue-200 _bg-blue-100 _text-blue-900 dark:_border-blue-200/30 dark:_bg-blue-900/30 dark:_text-blue-200"),warning:(0,r.Z)("_border-yellow-100 _bg-yellow-50 _text-yellow-900 dark:_border-yellow-200/30 dark:_bg-yellow-700/30 dark:_text-yellow-200")};function h({children:e,type:i="default",emoji:s=l[i]}){return(0,n.jsxs)("div",{className:(0,r.Z)("nextra-callout _overflow-x-auto _mt-6 _flex _rounded-lg _border _py-2 ltr:_pr-4 rtl:_pl-4","contrast-more:_border-current contrast-more:dark:_border-current",d[i]),children:[(0,n.jsx)("div",{className:"_select-none _text-xl ltr:_pl-3 ltr:_pr-2 rtl:_pr-3 rtl:_pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:s}),(0,n.jsx)("div",{className:"_w-full _min-w-0 _leading-7",children:e})]})}},3026:function(e,i,s){"use strict";s.d(i,{z:function(){return k}});var n=s(2676),r=s(4814),t=s(5271),l=s(535);let d=(0,t.createContext)(0);function h(){return(0,t.useContext)(d)}function a(){let e=h();return(0,n.jsx)(n.Fragment,{children:Array.from({length:e},(e,i)=>(0,n.jsx)("span",{className:"_w-5 _shrink-0"},i))})}let o=(0,t.memo)(({label:e,name:i,open:s,children:o,defaultOpen:c=!1,onToggle:k})=>{let p=h(),[x,F]=(0,t.useState)(c),u=(0,t.useCallback)(()=>{k?.(!x),F(!x)},[x,k]),j=void 0===s?x:s;return(0,n.jsxs)("li",{className:"_flex _list-none _flex-col",children:[(0,n.jsxs)(l.z,{onClick:u,title:i,className:({hover:e})=>(0,r.Z)("_inline-flex _items-center _py-1",e&&"_opacity-60"),children:[(0,n.jsx)(a,{}),(0,n.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",className:"_shrink-0",children:(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:j?"M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z":"M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z"})}),(0,n.jsx)("span",{className:"_ml-1",children:e??i})]}),j&&(0,n.jsx)("ul",{children:(0,n.jsx)(d.Provider,{value:p+1,children:o})})]})});o.displayName="Folder";let c=(0,t.memo)(({label:e,name:i,active:s})=>(0,n.jsx)("li",{className:(0,r.Z)("_flex _list-none",s&&"_text-primary-600 contrast-more:_underline"),children:(0,n.jsxs)("span",{className:"_inline-flex _cursor-default _items-center _py-1",children:[(0,n.jsx)(a,{}),(0,n.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",className:"_shrink-0",children:(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"})}),(0,n.jsx)("span",{className:"_ml-1",children:e??i})]})}));c.displayName="File";let k=Object.assign(function({children:e}){return(0,n.jsx)("div",{className:(0,r.Z)("nextra-filetree _mt-6 _select-none _text-sm _text-gray-800 dark:_text-gray-300","_not-prose"),children:(0,n.jsx)("ul",{className:"_inline-block _rounded-lg _border _px-4 _py-2 _border-neutral-200/70 contrast-more:_border-neutral-400 dark:_border-primary-100/10 contrast-more:dark:_border-neutral-400",children:e})})},{Folder:o,File:c})},7029:function(e,i,s){"use strict";s.d(i,{v:function(){return n}});let n=[{data:{index:{title:"Home",type:"page"},user_guides:{title:"User Guides",type:"page"},developer_guides:{title:"Developer Guides",type:"page"},about:{title:"About",type:"page",theme:{typesetting:"article"}}}},{name:"about",route:"/about",frontMatter:{sidebarTitle:"About"}},{name:"developer_guides",route:"/developer_guides",children:[{data:{index:"Home",front_end:"Front End",back_end:"Back End",deployment:"Deployment",how_to_contributes:"How to contribute"}},{name:"back_end",route:"/developer_guides/back_end",frontMatter:{sidebarTitle:"Back End"}},{name:"deployment",route:"/developer_guides/deployment",frontMatter:{sidebarTitle:"Deployment"}},{name:"front_end",route:"/developer_guides/front_end",frontMatter:{sidebarTitle:"Front End"}},{name:"how_to_contributes",route:"/developer_guides/how_to_contributes",frontMatter:{sidebarTitle:"How to Contributes"}},{name:"index",route:"/developer_guides",frontMatter:{sidebarTitle:"Index"}}]},{name:"index",route:"/",frontMatter:{sidebarTitle:"Index"}},{name:"user_guides",route:"/user_guides",children:[{data:{installation:"Installation"}},{name:"installation",route:"/user_guides/installation",frontMatter:{sidebarTitle:"Installation"}}]}]}},function(e){e.O(0,[354,888,774,179],function(){return e(e.s=8170)}),_N_E=e.O()}]);