import{_ as I}from"./fHBkYLgR.js";import{_ as L}from"./lcQHeyEO.js";import{_ as V}from"./EDR5sMNO.js";import{u as q,_ as A,a as G}from"./Dk2J-CTb.js";import{B as j,d as E,n as O,u as z,D as F,c as U,h as t,i as c,b as d,g as s,w as l,t as C,k as v,s as H,e as a,F as N,j as S,f as M,m as P,T as W,v as B,_ as D,r as Y,A as J,E as y,p as K,l as Q}from"./CX-GllPi.js";import{u as X}from"./BWNRLoS4.js";const Z=j("/down-arrow-icon.svg"),ee={key:0,class:"flex items-center justify-between"},te={key:0,class:"flex-1 text-center uppercase text-paco-white-1 md:hidden"},ne={key:0,class:"color-paco-secondary mb-1 inline rotate-90",color:"blue",width:"16",src:Z},se={class:"pl-2 font-bold uppercase"},oe={class:"flex flex-1 flex-row justify-center space-x-8 font-medium"},ae={class:"h-2"},re={class:"h-2 rounded-md bg-paco-secondary"},ie=E({__name:"TheNavBar",setup(x){const n=O(),g=z(),w=F(),r=[{name:"Experience",href:"/experience/1",id:"NB002"},{name:"About",href:"/about",id:"NB004"},{name:"Resume",href:"/resume",id:"NB004"}],o=e=>{var p;return((p=n.name)==null?void 0:p.toString().includes(e.toLowerCase()))||n.name==="index"&&e==="Home"},{width:$}=q();function _(e){switch(e){case"1":return"2000";case"2":return"2007";case"3":return"2011";case"4":return"2019";case"5":return"2021";case"6":return"2022";default:return"Experience"}}const f=e=>e[0].toUpperCase()+e.slice(1),u=U(()=>{var h,k;const e=(h=n.name)==null?void 0:h.toString(),p=(e==null?void 0:e.indexOf("-"))!==-1;let i="";if(p){const b=e==null?void 0:e.indexOf("-");if(b&&(i=(e==null?void 0:e.substring(0,b))||"Loading...",i=="experience")){const m=(k=n.params)==null?void 0:k.id;i=_(m)}}else e==="index"?i="":e==="about"?i="Today":i=e||"Loading...";return i?f(i):""});return(e,p)=>{const i=I,h=L,k=V,b=A;return t(w)?v("",!0):(c(),d("nav",ee,[s(h,{to:"/",class:"flex-raw flex flex-1 cursor-pointer items-center"},{default:l(()=>[s(i,{style:{height:"100%"},width:"32",src:"/goku.png"})]),_:1}),s(b,null,{default:l(()=>[t(n).name!="menu"&&t(n).name!="index"?(c(),d("span",te,C(`< ${t(u)} >`),1)):v("",!0),t($)<768?(c(),H(h,{key:1,class:"flex-1 cursor-pointer bg-transparent text-end text-xl text-paco-white-1",onClick:p[0]||(p[0]=m=>t(n).name=="menu"?t(g).back():t(g).push("/menu"))},{default:l(()=>[t(n).name=="menu"?(c(),d("img",ne)):v("",!0),a("span",se,C(t(n).name=="menu"?"Go Back":"Menu"),1)]),_:1})):(c(),d(N,{key:2},[S(a("ul",oe,[(c(),d(N,null,M(r,m=>a("li",{key:m.id,class:"active"},[s(h,{to:m.href,class:"bg-transparent text-xl font-bold text-paco-white-1 hover:text-paco-secondary","aria-current":"page"},{default:l(()=>[P(C(m.name),1)]),_:2},1032,["to"]),a("div",ae,[s(W,{name:"nav"},{default:l(()=>[S(a("div",re,null,512),[[B,o(m.name)]])]),_:2},1024)])])),64))],512),[[B,t(u)!=""]]),s(k,{class:"flex-1 items-end"})],64))]),_:1})]))}}}),ce=D(ie,[["__scopeId","data-v-9ca914a2"]]),R=j("/freccia.png"),T=x=>(K("data-v-34129473"),x=x(),Q(),x),le={class:"sfondo flex h-[100dvh] flex-col items-center justify-center overflow-hidden"},ue={class:"borders-handwritten flex h-[calc(100vh-15%)] w-[calc(100%-9%)] flex-col justify-center overflow-hidden bg-paco-white-1 dark:bg-paco-black"},de={class:"w-[10%]"},pe=T(()=>a("img",{class:"my-auto max-h-20 invert dark:invert-0",src:R},null,-1)),me=[pe],_e={class:"relative h-full w-full py-[8%] md:py-10"},fe={class:"w-[10%]"},he=T(()=>a("img",{class:"my-auto max-h-20 scale-[-1] invert dark:invert-0",src:R},null,-1)),xe=[he],ge={class:"flex items-center justify-center pb-3 pt-2 md:pb-0 md:pt-3"},ve=T(()=>a("p",{class:"text-sm text-paco-white-1"},"© 2024 Pasquale Conte",-1)),we=E({__name:"default",setup(x){const n=X(),g=Y(null),{direction:w}=G(g,{onSwipeEnd(){w.value==="left"?n.goNext():w.value==="right"&&n.goBack()}});return(r,o)=>{const $=ce,_=I,f=L;return c(),d("div",le,[s($,{class:"w-[calc(100%-15%)] pb-1 pt-2 md:pb-3 md:pt-0"}),a("div",ue,[a("main",{id:"blackboard",ref_key:"mainContainer",ref:g,class:"scrollbar-hide relative flex h-full flex-row overflow-y-auto overflow-x-hidden"},[a("div",de,[t(n).canGoBack?(c(),d("button",{key:0,class:"flex h-full w-full flex-col items-center pl-[10%] opacity-50 hover:opacity-100",onClick:o[0]||(o[0]=u=>t(n).goBack())},me)):v("",!0)]),a("div",_e,[J(r.$slots,"default",{},void 0,!0)]),a("div",fe,[t(n).canGoNext?(c(),d("button",{key:0,class:"flex h-full w-full flex-col items-center pr-[10%] opacity-50 hover:opacity-100",onClick:o[1]||(o[1]=u=>t(n).goNext())},xe)):v("",!0)])],512)]),a("footer",ge,[ve,s(f,{class:"cursor-pointer",onClick:o[2]||(o[2]=u=>("navigateTo"in r?r.navigateTo:t(y))("https://www.linkedin.com/in/pasqualeconte",{external:!0,open:{target:"_blank"}}))},{default:l(()=>[s(_,{class:"ml-4 h-6 w-6",src:"/linkedin.png",alt:"linkedin"})]),_:1}),s(f,{class:"cursor-pointer",onClick:o[3]||(o[3]=u=>("navigateTo"in r?r.navigateTo:t(y))("https://github.com/contepas",{external:!0,open:{target:"_blank"}}))},{default:l(()=>[s(_,{class:"ml-4 h-6 w-6",src:"/github.png",alt:"github"})]),_:1}),s(f,{class:"cursor-pointer",onClick:o[4]||(o[4]=u=>("navigateTo"in r?r.navigateTo:t(y))("https://www.instagram.com/pasquale_conte_87/",{external:!0,open:{target:"_blank"}}))},{default:l(()=>[s(_,{class:"ml-4 h-6 w-6",src:"/instagram.png",alt:"instagram"})]),_:1}),s(f,{class:"cursor-pointer",onClick:o[5]||(o[5]=u=>("navigateTo"in r?r.navigateTo:t(y))("mailto:conte.pas@gmail.com",{external:!0,open:{target:"_blank"}}))},{default:l(()=>[s(_,{class:"ml-4 h-6 w-6",src:"/email.png",alt:"email"})]),_:1})])])}}}),Ne=D(we,[["__scopeId","data-v-34129473"]]);export{Ne as default};