import{B as I,d as L,q as D,u as G,H as O,c as z,h as t,i as l,b as p,g as s,w as d,t as C,k as v,s as F,e as o,F as S,j as N,f as H,m as U,T as M,v as B,_ as j,p as q,l as A,n as E,r as P,A as W,I as y}from"./CC8zI3qH.js";import{_ as R}from"./laAOqeVf.js";import{_ as Y}from"./BCH7pG7j.js";import{_ as J}from"./Db5xY_HK.js";import{u as K,a as Q}from"./Bc0nR9Js.js";import{u as X}from"./CRnCl_EV.js";const Z=I("/down-arrow-icon.svg"),ee=c=>(q("data-v-0cea53ef"),c=c(),A(),c),te={key:0,class:"flex items-center justify-between"},ne=ee(()=>o("span",{translate:"no",class:"text-xl font-bold uppercase tracking-tight text-paco-white-1"},"pac",-1)),se={key:0,class:"uppercase text-paco-white-1 md:hidden"},oe={key:0,class:"color-paco-secondary mb-1 inline rotate-90",color:"blue",width:"16",src:Z},ae={class:"pl-2 font-bold uppercase"},re={class:"flex flex-row space-x-8 font-medium"},ie={class:"h-2"},ce={class:"h-2 rounded-md bg-paco-secondary"},le=L({__name:"TheNavBar",setup(c){const n=D(),x=G(),w=O(),r=[{name:"Experience",href:"/experience/1",id:"NB002"},{name:"About",href:"/about",id:"NB004"},{name:"Resume",href:"/resume",id:"NB004"}],a=e=>{var m;return((m=n.name)==null?void 0:m.toString().includes(e.toLowerCase()))||n.name==="index"&&e==="Home"},{width:$}=K();function f(e){switch(e){case"1":return"2000";case"2":return"2007";case"3":return"2011";case"4":return"2019";case"5":return"2021";case"6":return"2022";default:return"Experience"}}const h=e=>e[0].toUpperCase()+e.slice(1),u=z(()=>{var g,k;const e=(g=n.name)==null?void 0:g.toString(),m=(e==null?void 0:e.indexOf("-"))!==-1;let i="";if(m){const b=e==null?void 0:e.indexOf("-");if(b&&(i=(e==null?void 0:e.substring(0,b))||"Loading...",i=="experience")){const _=(k=n.params)==null?void 0:k.id;i=f(_)}}else e==="index"?i="":e==="about"?i="Today":i=e||"Loading...";return i?h(i):""});return(e,m)=>{const i=j,g=R,k=Y,b=J;return t(w)?v("",!0):(l(),p("nav",te,[s(g,{to:"/",class:"flex-raw flex cursor-pointer items-center"},{default:d(()=>[ne,s(i,{style:{height:"100%"},width:"24",src:"/goku.png"})]),_:1}),s(b,null,{default:d(()=>[t(n).name!="menu"&&t(n).name!="index"?(l(),p("span",se,C("< "+t(u)+"  >"),1)):v("",!0),t($)<768?(l(),F(g,{key:1,onClick:m[0]||(m[0]=_=>t(n).name=="menu"?t(x).back():t(x).push("/menu")),class:"bg-transparent text-xl text-paco-white-1"},{default:d(()=>[t(n).name=="menu"?(l(),p("img",oe)):v("",!0),o("span",ae,C(t(n).name=="menu"?"Go Back":"Menu"),1)]),_:1})):(l(),p(S,{key:2},[N(o("ul",re,[(l(),p(S,null,H(r,_=>o("li",{key:_.id,class:"active"},[s(g,{to:_.href,class:"bg-transparent text-xl font-bold text-paco-white-1 hover:text-paco-secondary","aria-current":"page"},{default:d(()=>[U(C(_.name),1)]),_:2},1032,["to"]),o("div",ie,[s(M,{name:"nav"},{default:d(()=>[N(o("div",ce,null,512),[[B,a(_.name)]])]),_:2},1024)])])),64))],512),[[B,t(u)!=""]]),s(k)],64))]),_:1})]))}}}),de=E(le,[["__scopeId","data-v-0cea53ef"]]),V=I("/freccia.png"),T=c=>(q("data-v-b2ba3971"),c=c(),A(),c),ue={class:"sfondo flex h-[100dvh] flex-col items-center justify-center overflow-hidden"},pe={class:"borders-handwritten flex h-[calc(100vh-15%)] w-[calc(100%-9%)] flex-col justify-center overflow-hidden bg-paco-white-1 dark:bg-paco-black"},me={class:"w-[10%]"},_e=T(()=>o("img",{class:"my-auto max-h-20 invert dark:invert-0",src:V},null,-1)),fe=[_e],he={class:"relative h-full w-full py-[8%] md:py-10"},ge={class:"w-[10%]"},xe=T(()=>o("img",{class:"my-auto max-h-20 scale-[-1] invert dark:invert-0",src:V},null,-1)),ve=[xe],we={class:"flex items-center justify-center py-3 md:pb-0"},ke=T(()=>o("p",{class:"text-sm text-paco-white-1"}," © 2024 Pasquale Conte. All rights reserved. ",-1)),be=L({__name:"default",setup(c){const n=X(),x=P(null),{direction:w}=Q(x,{onSwipeEnd(){w.value==="left"?n.goNext():w.value==="right"&&n.goBack()}});return(r,a)=>{const $=de,f=j,h=R;return l(),p("div",ue,[s($,{class:"w-[calc(100%-15%)] pb-2 pt-3 md:pb-2 md:pt-0"}),o("div",pe,[o("main",{id:"blackboard",ref_key:"mainContainer",ref:x,class:"scrollbar-hide relative flex h-full flex-row overflow-y-auto overflow-x-hidden"},[o("div",me,[t(n).canGoBack?(l(),p("button",{key:0,onClick:a[0]||(a[0]=u=>t(n).goBack()),class:"flex h-full w-full flex-col items-center pl-[10%] opacity-50 hover:opacity-100"},fe)):v("",!0)]),o("div",he,[W(r.$slots,"default",{},void 0,!0)]),o("div",ge,[t(n).canGoNext?(l(),p("button",{key:0,onClick:a[1]||(a[1]=u=>t(n).goNext()),class:"flex h-full w-full flex-col items-center pr-[10%] opacity-50 hover:opacity-100"},ve)):v("",!0)])],512)]),o("footer",we,[ke,s(h,{class:"cursor-pointer",onClick:a[2]||(a[2]=u=>("navigateTo"in r?r.navigateTo:t(y))("https://www.linkedin.com/in/pasqualeconte",{external:!0,open:{target:"_blank"}}))},{default:d(()=>[s(f,{class:"ml-2 h-6 w-6",src:"/linkedin.png",alt:"linkedin"})]),_:1}),s(h,{class:"cursor-pointer",onClick:a[3]||(a[3]=u=>("navigateTo"in r?r.navigateTo:t(y))("https://github.com/contepas",{external:!0,open:{target:"_blank"}})),",":"","{external:":"","true})":""},{default:d(()=>[s(f,{class:"ml-2 h-6 w-6",src:"/github.png",alt:"github"})]),_:1}),s(h,{class:"cursor-pointer",onClick:a[4]||(a[4]=u=>("navigateTo"in r?r.navigateTo:t(y))("https://www.instagram.com/pasquale_conte_87/",{external:!0,open:{target:"_blank"}}))},{default:d(()=>[s(f,{class:"ml-2 h-6 w-6",src:"/instagram.png",alt:"instagram"})]),_:1}),s(h,{class:"cursor-pointer",onClick:a[5]||(a[5]=u=>("navigateTo"in r?r.navigateTo:t(y))("mailto:conte.pas@gmail.com",{external:!0,open:{target:"_blank"}}))},{default:d(()=>[s(f,{class:"ml-2 h-6 w-6",src:"/email.png",alt:"email"})]),_:1})])])}}}),Be=E(be,[["__scopeId","data-v-b2ba3971"]]);export{Be as default};
