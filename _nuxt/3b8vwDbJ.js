import{_ as I}from"./PwY5GF0o.js";import{_ as L}from"./C8to3Ant.js";import{_ as q}from"./Cuxu4GRT.js";import{u as G,_ as O,a as z}from"./BtqZJAHS.js";import{B as j,d as E,n as F,u as U,D as H,c as M,h as t,i as l,b as p,g as o,w as u,t as C,k as v,s as P,e as s,F as S,j as N,f as W,m as Y,T as J,v as B,p as A,l as D,_ as R,r as K,A as Q,E as y}from"./DHDfsa8V.js";import{u as X}from"./CA3N5UP5.js";const Z=j("/down-arrow-icon.svg"),ee=c=>(A("data-v-40c47519"),c=c(),D(),c),te={key:0,class:"flex items-center justify-between"},ne=ee(()=>s("span",{translate:"no",class:"text-xl font-bold uppercase tracking-tight text-paco-white-1"},"pac",-1)),oe={key:0,class:"uppercase text-paco-white-1 md:hidden"},se={key:0,class:"color-paco-secondary mb-1 inline rotate-90",color:"blue",width:"16",src:Z},ae={class:"pl-2 font-bold uppercase"},re={class:"flex flex-row space-x-8 font-medium"},ie={class:"h-2"},ce={class:"h-2 rounded-md bg-paco-secondary"},le=E({__name:"TheNavBar",setup(c){const n=F(),x=U(),w=H(),r=[{name:"Experience",href:"/experience/1",id:"NB002"},{name:"About",href:"/about",id:"NB004"},{name:"Resume",href:"/resume",id:"NB004"}],a=e=>{var m;return((m=n.name)==null?void 0:m.toString().includes(e.toLowerCase()))||n.name==="index"&&e==="Home"},{width:$}=G();function f(e){switch(e){case"1":return"2000";case"2":return"2007";case"3":return"2011";case"4":return"2019";case"5":return"2021";case"6":return"2022";default:return"Experience"}}const h=e=>e[0].toUpperCase()+e.slice(1),d=M(()=>{var g,k;const e=(g=n.name)==null?void 0:g.toString(),m=(e==null?void 0:e.indexOf("-"))!==-1;let i="";if(m){const b=e==null?void 0:e.indexOf("-");if(b&&(i=(e==null?void 0:e.substring(0,b))||"Loading...",i=="experience")){const _=(k=n.params)==null?void 0:k.id;i=f(_)}}else e==="index"?i="":e==="about"?i="Today":i=e||"Loading...";return i?h(i):""});return(e,m)=>{const i=I,g=L,k=q,b=O;return t(w)?v("",!0):(l(),p("nav",te,[o(g,{to:"/",class:"flex-raw flex cursor-pointer items-center"},{default:u(()=>[ne,o(i,{style:{height:"100%"},width:"24",src:"/goku.png"})]),_:1}),o(b,null,{default:u(()=>[t(n).name!="menu"&&t(n).name!="index"?(l(),p("span",oe,C("< "+t(d)+"  >"),1)):v("",!0),t($)<768?(l(),P(g,{key:1,onClick:m[0]||(m[0]=_=>t(n).name=="menu"?t(x).back():t(x).push("/menu")),class:"cursor-pointer bg-transparent text-xl text-paco-white-1"},{default:u(()=>[t(n).name=="menu"?(l(),p("img",se)):v("",!0),s("span",ae,C(t(n).name=="menu"?"Go Back":"Menu"),1)]),_:1})):(l(),p(S,{key:2},[N(s("ul",re,[(l(),p(S,null,W(r,_=>s("li",{key:_.id,class:"active"},[o(g,{to:_.href,class:"bg-transparent text-xl font-bold text-paco-white-1 hover:text-paco-secondary","aria-current":"page"},{default:u(()=>[Y(C(_.name),1)]),_:2},1032,["to"]),s("div",ie,[o(J,{name:"nav"},{default:u(()=>[N(s("div",ce,null,512),[[B,a(_.name)]])]),_:2},1024)])])),64))],512),[[B,t(d)!=""]]),o(k)],64))]),_:1})]))}}}),ue=R(le,[["__scopeId","data-v-40c47519"]]),V=j("/freccia.png"),T=c=>(A("data-v-b2ba3971"),c=c(),D(),c),de={class:"sfondo flex h-[100dvh] flex-col items-center justify-center overflow-hidden"},pe={class:"borders-handwritten flex h-[calc(100vh-15%)] w-[calc(100%-9%)] flex-col justify-center overflow-hidden bg-paco-white-1 dark:bg-paco-black"},me={class:"w-[10%]"},_e=T(()=>s("img",{class:"my-auto max-h-20 invert dark:invert-0",src:V},null,-1)),fe=[_e],he={class:"relative h-full w-full py-[8%] md:py-10"},ge={class:"w-[10%]"},xe=T(()=>s("img",{class:"my-auto max-h-20 scale-[-1] invert dark:invert-0",src:V},null,-1)),ve=[xe],we={class:"flex items-center justify-center py-3 md:pb-0"},ke=T(()=>s("p",{class:"text-sm text-paco-white-1"}," © 2024 Pasquale Conte. All rights reserved. ",-1)),be=E({__name:"default",setup(c){const n=X(),x=K(null),{direction:w}=z(x,{onSwipeEnd(){w.value==="left"?n.goNext():w.value==="right"&&n.goBack()}});return(r,a)=>{const $=ue,f=I,h=L;return l(),p("div",de,[o($,{class:"w-[calc(100%-15%)] pb-2 pt-3 md:pb-2 md:pt-0"}),s("div",pe,[s("main",{id:"blackboard",ref_key:"mainContainer",ref:x,class:"scrollbar-hide relative flex h-full flex-row overflow-y-auto overflow-x-hidden"},[s("div",me,[t(n).canGoBack?(l(),p("button",{key:0,onClick:a[0]||(a[0]=d=>t(n).goBack()),class:"flex h-full w-full flex-col items-center pl-[10%] opacity-50 hover:opacity-100"},fe)):v("",!0)]),s("div",he,[Q(r.$slots,"default",{},void 0,!0)]),s("div",ge,[t(n).canGoNext?(l(),p("button",{key:0,onClick:a[1]||(a[1]=d=>t(n).goNext()),class:"flex h-full w-full flex-col items-center pr-[10%] opacity-50 hover:opacity-100"},ve)):v("",!0)])],512)]),s("footer",we,[ke,o(h,{class:"cursor-pointer",onClick:a[2]||(a[2]=d=>("navigateTo"in r?r.navigateTo:t(y))("https://www.linkedin.com/in/pasqualeconte",{external:!0,open:{target:"_blank"}}))},{default:u(()=>[o(f,{class:"ml-2 h-6 w-6",src:"/linkedin.png",alt:"linkedin"})]),_:1}),o(h,{class:"cursor-pointer",onClick:a[3]||(a[3]=d=>("navigateTo"in r?r.navigateTo:t(y))("https://github.com/contepas",{external:!0,open:{target:"_blank"}})),",":"","{external:":"","true})":""},{default:u(()=>[o(f,{class:"ml-2 h-6 w-6",src:"/github.png",alt:"github"})]),_:1}),o(h,{class:"cursor-pointer",onClick:a[4]||(a[4]=d=>("navigateTo"in r?r.navigateTo:t(y))("https://www.instagram.com/pasquale_conte_87/",{external:!0,open:{target:"_blank"}}))},{default:u(()=>[o(f,{class:"ml-2 h-6 w-6",src:"/instagram.png",alt:"instagram"})]),_:1}),o(h,{class:"cursor-pointer",onClick:a[5]||(a[5]=d=>("navigateTo"in r?r.navigateTo:t(y))("mailto:conte.pas@gmail.com",{external:!0,open:{target:"_blank"}}))},{default:u(()=>[o(f,{class:"ml-2 h-6 w-6",src:"/email.png",alt:"email"})]),_:1})])])}}}),Be=R(be,[["__scopeId","data-v-b2ba3971"]]);export{Be as default};
