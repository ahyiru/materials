var jt=Object.defineProperty;var E=(t,n)=>{for(var e in n)jt(t,e,{get:n[e],enumerable:!0})};var Rt=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description?.indexOf("react.")===0,S=Rt;var It=(t,n="px")=>`${t}`.replace(n,"")-0,b=It;if(typeof document<"u"&&!window.__HUXY__?.has("fdce10")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-3d-models {
  0% {
    transform: rotateX(var(--rotateX)) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(var(--rotateX)) rotateY(0deg) rotateZ(-360deg);
  }
}
.huxy-css-3d-models-tooltip {
  --rotate: 135deg;
}
.huxy-css-3d-models-tooltip[tooltip] {
  position: relative;
}
.huxy-css-3d-models-tooltip[tooltip]:hover::before,
.huxy-css-3d-models-tooltip[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-css-3d-models-tooltip[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-css-3d-models-tooltip[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-css-3d-models-tooltip[tooltip]::before,
.huxy-css-3d-models-tooltip[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: #303133;
  border: 1px solid #303133;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-css-3d-models-tooltip[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-css-3d-models-tooltip[tooltip]::after {
  content: '';
  height: calc(8px + 2px);
  width: calc(8px + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-css-3d-models-tooltip[tooltip]::before {
  left: 0;
  bottom: calc(100% + 8px);
}
.huxy-css-3d-models-tooltip[tooltip]::after {
  left: 15px;
  bottom: calc(100% + 8px / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-css-3d-models {
  --size: 360px;
  --cardSize: 42px;
  --bottom: 60px;
  --rotateX: 72deg;
  --time: 20s;
  position: absolute;
  left: 50%;
  bottom: var(--bottom);
  transform: translateX(-50%);
  width: var(--size);
  height: var(--size);
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 50% 0;
}
.huxy-css-3d-models .model-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: transparent;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  animation: huxy-3d-models var(--time) linear 0s infinite;
  animation-play-state: running;
}
.huxy-css-3d-models .model-container:hover {
  animation-play-state: paused;
}
.huxy-css-3d-models .model-container .model-item {
  --rotateY: 0deg;
  transform-style: preserve-3d;
  position: absolute;
  transform-origin: calc(var(--size) / 2) 0;
  width: calc(var(--size) / 2);
  height: var(--cardSize);
  line-height: var(--cardSize);
  left: 0;
  top: 50%;
  cursor: pointer;
  transform: rotateX(-90deg) rotateY(calc(var(--rotateY) + 90deg)) translateY(-50%);
}
.huxy-css-3d-models .model-container .model-item .model-card {
  position: absolute;
  width: calc(var(--cardSize) - 12px);
  height: var(--cardSize);
  line-height: var(--cardSize);
  text-align: center;
  border-radius: 4px;
  left: calc(6px - var(--cardSize) / 2);
  bottom: 0;
  transform-origin: 50% 50%;
  transform: rotateY(-90deg);
  background: rgba(255, 255, 255, 0.98);
  transition: all 0.3s;
  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.1));
}
.huxy-css-3d-models .model-container .model-item .model-card:hover {
  color: #fff;
  background-color: var(--blue2);
  transition: all 0.3s;
  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
}
.huxy-css-3d-models .model-container .model-item .model-card img {
  width: 60%;
  height: 60%;
  vertical-align: middle;
}
`,document.head.appendChild(t),window.__HUXY__.add("fdce10")}import{jsx as _,jsxs as Lt}from"react/jsx-runtime";var At=({list:t=[],size:n="360px",cardSize:e="42px",bottom:o="60px",style:r,...a})=>{let i=360/t.length;return _("div",{className:"huxy-css-3d-models",style:{"--size":n,"--cardSize":e,"--bottom":o,...r},...a,children:_("div",{className:"model-container",children:t.map((d,l)=>_("div",{className:"model-item",style:{"--rotateY":`${i*l}deg`},children:Lt("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:d.label,href:d.link,target:"_blank",children:[d.icon?_("img",{src:d.icon,alt:d.label}):null,S(d.icon)?d.icon:d.icon?_("img",{src:d.icon,alt:d.label}):null]})},d.label))})})},j=At;if(typeof document<"u"&&!window.__HUXY__?.has("fdbfd1")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.huxy-icon-animate-tooltip {
  --rotate: 135deg;
}
.huxy-icon-animate-tooltip[tooltip] {
  position: relative;
}
.huxy-icon-animate-tooltip[tooltip]:hover::before,
.huxy-icon-animate-tooltip[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-animate-tooltip[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-icon-animate-tooltip[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-animate-tooltip[tooltip]::before,
.huxy-icon-animate-tooltip[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: #303133;
  border: 1px solid #303133;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-animate-tooltip[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-icon-animate-tooltip[tooltip]::after {
  content: '';
  height: calc(8px + 2px);
  width: calc(8px + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-icon-animate-tooltip[tooltip]::before {
  left: 0;
  bottom: calc(100% + 8px);
}
.huxy-icon-animate-tooltip[tooltip]::after {
  left: 15px;
  bottom: calc(100% + 8px / 2);
  transform: translateY(0) rotate(var(--rotate));
}
@keyframes huxy-css-obj-jump {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, var(--y), 0) scale(1.1);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}
@keyframes huxy-css-obj-blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes huxy-css-obj-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.obj-centerTable {
  --width: 450px;
  --left: calc(50% - 224px);
  --bottom: 78px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-scale 6s ease-in-out infinite;
}
.obj-centerLight {
  --width: 150px;
  --left: calc(50% - 75px);
  --bottom: 220px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-blink 3s ease-in-out infinite;
}
.obj-brain {
  --y: 16px;
  --time: 6s;
  --width: 80px;
  --left: calc(50% - 40px);
  --bottom: 360px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-dataAnalysis {
  --y: 15px;
  --time: 6s;
  --width: 76px;
  --left: calc(50% - 200px);
  --bottom: 300px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-coder {
  --y: 25px;
  --time: 4s;
  --width: 66px;
  --left: calc(50% - 280px);
  --bottom: 208px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-trend {
  --y: 24px;
  --time: 6s;
  --width: 72px;
  --left: calc(50% - 380px);
  --bottom: 160px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-light {
  --y: 15px;
  --time: 6s;
  --width: 78px;
  --left: calc(50% + 120px);
  --bottom: 288px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-debug {
  --y: 30px;
  --time: 5s;
  --width: 66px;
  --left: calc(50% + 220px);
  --bottom: 168px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-chat {
  --y: 25px;
  --time: 6s;
  --width: 68px;
  --left: calc(50% + 300px);
  --bottom: 180px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.huxy-icon-animate-container {
  height: var(--height, 480px);
  border-radius: 4px;
  position: relative;
}
.huxy-icon-animate-materiels {
  position: relative;
  height: 100%;
}
.huxy-icon-animate-materiels > a {
  position: absolute !important;
}
.huxy-icon-animate-materiels .obj-img {
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.02);
  border-radius: 50%;
  padding: 6px;
  z-index: 999;
}
.huxy-icon-animate-materiels img {
  width: 100%;
  max-width: var(--width);
  vertical-align: middle;
}
`,document.head.appendChild(t),window.__HUXY__.add("fdbfd1")}import{jsx as B,jsxs as Ft}from"react/jsx-runtime";var Zt=({objs:t=[],models:n=[],height:e="480px",style:o,className:r,...a})=>Ft("div",{className:`huxy-icon-animate-container${r?` ${r}`:""}`,style:{"--height":e,...o},...a,children:[B("div",{className:"huxy-icon-animate-materiels",children:t.map(({value:i,label:d,icon:l,link:h,type:x,style:g})=>B("a",{className:`huxy-icon-animate-tooltip obj-${i}${x?"":" obj-img"}`,tooltip:x?void 0:d,href:h,target:"_blank",style:g,children:S(l)?l:B("img",{src:l,alt:d})},d))}),B(j,{list:n,size:`${b(e)-120}px`})]}),Mt=Zt;if(typeof document<"u"&&!window.__HUXY__?.has("7277d5")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-7277d5-huxy-card-fliper {
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000;
}
.hy-7277d5-card {
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transition: transform 0.3s;
}
.hy-7277d5-front,
.hy-7277d5-back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.hy-7277d5-back {
  transform: rotateY(180deg);
}
.hy-7277d5-huxy-card-fliper:hover .hy-7277d5-card {
  transform: rotateY(180deg);
}
`,document.head.appendChild(t),window.__HUXY__.add("7277d5")}var at="hy-7277d5-card",it="hy-7277d5-front",dt="hy-7277d5-back";import{jsx as I,jsxs as Ot}from"react/jsx-runtime";var Dt=({front:t,back:n,...e})=>I("div",{className:void 0,...e,children:Ot("div",{className:at,children:[I("div",{className:it,children:t}),I("div",{className:dt,children:n})]})}),Pt=Dt;import{useState as nn,useMemo as en}from"react";import{useEffect as Gt,useState as qt,useCallback as Jt,useRef as Kt}from"react";var Qt=(t={})=>{let n=Kt(0),[e,o]=qt(t),r=Jt(a=>{cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>o(a))},[]);return Gt(()=>()=>cancelAnimationFrame(n.current),[]),[e,r]},lt=Qt;import{useEffect as st,useRef as Vt}from"react";var tn=(t,n)=>{let e=Vt();st(()=>{e.current=t},[t]),st(()=>{if(n){let o=setInterval(()=>e.current(),n);return()=>clearInterval(o)}},[n])},ct=tn;if(typeof document<"u"&&!window.__HUXY__?.has("9c040e")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.huxy-icon-carousel-tooltip-lb {
  --rotate: 135deg;
}
.huxy-icon-carousel-tooltip-lb[tooltip] {
  position: relative;
}
.huxy-icon-carousel-tooltip-lb[tooltip]:hover::before,
.huxy-icon-carousel-tooltip-lb[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-carousel-tooltip-lb[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-icon-carousel-tooltip-lb[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lb[tooltip]::before,
.huxy-icon-carousel-tooltip-lb[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: #303133;
  border: 1px solid #303133;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-carousel-tooltip-lb[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-icon-carousel-tooltip-lb[tooltip]::after {
  content: '';
  height: calc(8px + 2px);
  width: calc(8px + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lb[tooltip]::before {
  left: 0;
  bottom: calc(100% + 8px);
}
.huxy-icon-carousel-tooltip-lb[tooltip]::after {
  left: 15px;
  bottom: calc(100% + 8px / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lt {
  --rotate: -45deg;
}
.huxy-icon-carousel-tooltip-lt[tooltip] {
  position: relative;
}
.huxy-icon-carousel-tooltip-lt[tooltip]:hover::before,
.huxy-icon-carousel-tooltip-lt[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-carousel-tooltip-lt[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-icon-carousel-tooltip-lt[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lt[tooltip]::before,
.huxy-icon-carousel-tooltip-lt[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: #303133;
  border: 1px solid #303133;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-carousel-tooltip-lt[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-icon-carousel-tooltip-lt[tooltip]::after {
  content: '';
  height: calc(8px + 2px);
  width: calc(8px + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lt[tooltip]::before {
  left: 0;
  top: calc(100% + 8px);
}
.huxy-icon-carousel-tooltip-lt[tooltip]::after {
  left: 15px;
  top: calc(100% + 8px / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-carousel .icon-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow-x: hidden;
  overflow-y: visible;
}
.huxy-icon-carousel .icon-container .icon-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  border-radius: 50%;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.02);
  padding: 6px;
}
.huxy-icon-carousel .icon-container .icon-item img {
  width: 100%;
  vertical-align: middle;
}
`,document.head.appendChild(t),window.__HUXY__.add("9c040e")}import{jsx as T}from"react/jsx-runtime";var on=(t,n=60)=>(n=1.5*n,t.map((e,o)=>{let r=Math.random(),a=1;r<.3334?a=1.2:r<.6667&&(a=.8);let i=~~(o/3),d=o%3,l=1.5*n*i;d===1&&(l+=n/2);let h=d*n+n/6*(d+1);return e.transform={x:l,y:h,s:a},e})),rn=(t,n=60)=>(n=2.25*n,t.map(e=>(e.transform.x-=2,e.transform.x+n<0&&(e.transform.x=~~(t.length/3)*n),e))),an=({width:t=60,wait:n=56,list:e=[],className:o,...r})=>{let a=en(()=>on(e,t),[e,t]),[i,d]=lt(a),[l,h]=nn(n);ct(()=>{let p=rn(i,t);d(p)},l);let x=p=>{h(null)},g=p=>{h(n)};return T("div",{className:`huxy-icon-carousel${o?` ${o}`:""}`,...r,children:T("div",{className:"icon-container",children:i.map((p,Et)=>T("a",{className:`icon-item huxy-icon-carousel-tooltip-${Et%3===0?"lt":"lb"}`,tooltip:p.label,style:{transform:`translate(${p.transform.x}px, ${p.transform.y}px) scale(${p.transform.s})`,width:t},onMouseEnter:x,onMouseLeave:g,href:p.link,target:"_blank",children:T("img",{src:p.icon,alt:p.label})},p.label))})})},dn=an;if(typeof document<"u"&&!window.__HUXY__?.has("75a093")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-75a093-huxy-title-header-box {
  --titleWidth: 280px;
  --titleHeight: 80px;
  --borderColor: rgba(0, 180, 220);
  height: var(--titleHeight);
  position: relative;
  z-index: 1;
}
.hy-75a093-huxy-title-header-box:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(to right, transparent, var(--borderColor) 50%, transparent);
  background-size: 100% 2px;
  background-position: 0 calc(var(--titleHeight) / 2);
  background-repeat: no-repeat;
}
.hy-75a093-huxy-title-header-box .hy-75a093-title {
  margin: 0;
  width: var(--titleWidth);
  position: absolute;
  bottom: calc(var(--titleHeight) / 4);
  left: calc(50% - var(--titleWidth) / 2);
  padding: 10px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 1px 1px 0.2em var(--borderColor);
}
.hy-75a093-huxy-title-header-box .hy-75a093-title:before,
.hy-75a093-huxy-title-header-box .hy-75a093-title:after {
  content: '';
  position: absolute;
  height: 0;
  border-left: calc(var(--titleHeight) / 8) solid transparent;
  border-right: calc(var(--titleHeight) / 8) solid transparent;
  z-index: -1;
}
.hy-75a093-huxy-title-header-box .hy-75a093-title:before {
  width: 100%;
  left: 0;
  bottom: 0;
  border-top: calc(var(--titleHeight) / 4 - 1px) solid var(--borderColor);
}
.hy-75a093-huxy-title-header-box .hy-75a093-title:after {
  width: calc(100% - 2px);
  left: 1px;
  bottom: 1px;
  border-top: calc(var(--titleHeight) / 4 - 1px) solid var(--appBgColor);
}
`,document.head.appendChild(t),window.__HUXY__.add("75a093")}var ht="hy-75a093-title";import{jsx as pt}from"react/jsx-runtime";var ln=({title:t,borderColor:n,titleWidth:e,titleHeight:o,style:r,className:a,...i})=>pt("div",{className:`${void 0}${a?` ${a}`:""}`,style:{"--borderColor":n,"--titleWidth":e,"--titleHeight":o,...r},...i,children:pt("h2",{className:ht,children:t})}),sn=ln;if(typeof document<"u"&&!window.__HUXY__?.has("c590da")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-c590da-corner-wrap {
  --borderColor: var(--appColor);
  --borderRadius: 2px;
}
.hy-c590da-corner {
  position: relative;
  border: 2px solid transparent;
}
.hy-c590da-half:before,
.hy-c590da-half:after {
  content: '';
  display: block;
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.hy-c590da-half:before {
  bottom: -1px;
  left: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-bottom-left-radius: var(--borderRadius);
}
.hy-c590da-half:after {
  top: -1px;
  right: -1px;
  border-top: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-top-right-radius: var(--borderRadius);
}
.hy-c590da-corner-tl,
.hy-c590da-corner-br {
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.hy-c590da-corner-tl {
  top: -1px;
  left: -1px;
  border-top: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-top-left-radius: var(--borderRadius);
}
.hy-c590da-corner-br {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-bottom-right-radius: var(--borderRadius);
}
`,document.head.appendChild(t),window.__HUXY__.add("c590da")}var xt="hy-c590da-corner",bt="hy-c590da-half";import{Fragment as pn,jsx as L,jsxs as ft}from"react/jsx-runtime";var cn=({size:t="8px",borderColor:n="var(--appColor)",half1:e=!0,half2:o=!0,style:r,className:a,children:i,...d})=>L("div",{className:`${void 0}${a?` ${a}`:""}`,style:{"--cornerSize":t,"--borderColor":n,...r},...d,children:ft("div",{className:`${xt}${e?` ${bt}`:""}`,children:[o?ft(pn,{children:[L("span",{className:void 0}),L("span",{className:void 0})]}):null,i]})}),hn=cn;if(typeof document<"u"&&!window.__HUXY__?.has("ee9752")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-ee9752-corner-wrap {
  --borderColor: var(--appColor);
  --borderRadius: 2px;
}
.hy-ee9752-corner-half {
  position: relative;
  border: 2px solid transparent;
}
.hy-ee9752-corner-half:before,
.hy-ee9752-corner-half:after {
  content: '';
  display: block;
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.hy-ee9752-corner-half:before {
  bottom: -1px;
  left: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-bottom-left-radius: var(--borderRadius);
}
.hy-ee9752-corner-half:after {
  top: -1px;
  right: -1px;
  border-top: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-top-right-radius: var(--borderRadius);
}
`,document.head.appendChild(t),window.__HUXY__.add("ee9752")}import{jsx as yt}from"react/jsx-runtime";var xn=({size:t="8px",borderColor:n="var(--appColor)",style:e,className:o,children:r,...a})=>yt("div",{className:`${void 0}${o?` ${o}`:""}`,style:{"--cornerSize":t,"--borderColor":n,...e},...a,children:yt("div",{className:void 0,children:r})}),bn=xn;var Z={};E(Z,{bgBoxCube:()=>mn,bgBoxCubestrip:()=>un,bgBoxDot:()=>fn,bgBoxGrid:()=>gn,bgBoxImg:()=>vn,bgBoxStrip:()=>yn,default:()=>wn});if(typeof document<"u"&&!window.__HUXY__?.has("b07899")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-b07899-bg-box-dot {
  --bgColor: var(--appBgColor);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  background-image: linear-gradient(var(--bgColor) 14px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);
  background-size: 15px 15px,
    15px 15px;
}
.hy-b07899-bg-box-strip {
  --bgColor: rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(var(--bgColor) 1px, transparent 0), linear-gradient(90deg, var(--bgColor) 1px, transparent 0);
  background-size: 30px 30px;
}
.hy-b07899-bg-box-cubestrip {
  --bgColor: hsl(0, 0%, 100%);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  background-image: linear-gradient(var(--bgColor) 1px, transparent 0), linear-gradient(90deg, var(--bgColor) 1px, transparent 0), linear-gradient(var(--cubeColor) 1px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);
  background-size: 75px 75px,
    75px 75px,
    15px 15px,
    15px 15px;
}
.hy-b07899-bg-box-cube {
  --bgColor: rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0), linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0);
  background-position: 0 0,
    15px 15px;
  background-size: 30px 30px;
}
.hy-b07899-bg-box-grid {
  --bgColor: hsl(0, 0%, 100%);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  --size: 20% 20%;
  background-image: linear-gradient(var(--bgColor) 15px, transparent 0), linear-gradient(90deg, var(--bgColor) 15px, transparent 0);
  background-size: var(--size);
  background-color: var(--cubeColor);
  /* background-position: -8px -8px,-8px -8px; */
}
.hy-b07899-bg-box-img {
  --bgColor: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: var(--bgColor);
}
`,document.head.appendChild(t),window.__HUXY__.add("b07899")}var fn="hy-b07899-bg-box-dot",yn="hy-b07899-bg-box-strip",un="hy-b07899-bg-box-cubestrip",mn="hy-b07899-bg-box-cube",gn="hy-b07899-bg-box-grid",vn="hy-b07899-bg-box-img",wn={bgBoxDot:"hy-b07899-bg-box-dot","bg-box-dot":"hy-b07899-bg-box-dot",bgBoxStrip:"hy-b07899-bg-box-strip","bg-box-strip":"hy-b07899-bg-box-strip",bgBoxCubestrip:"hy-b07899-bg-box-cubestrip","bg-box-cubestrip":"hy-b07899-bg-box-cubestrip",bgBoxCube:"hy-b07899-bg-box-cube","bg-box-cube":"hy-b07899-bg-box-cube",bgBoxGrid:"hy-b07899-bg-box-grid","bg-box-grid":"hy-b07899-bg-box-grid",bgBoxImg:"hy-b07899-bg-box-img","bg-box-img":"hy-b07899-bg-box-img"};import{jsx as Cn}from"react/jsx-runtime";var _n=({type:t="dot",bgColor:n,cubeColor:e,url:o,style:r,className:a,children:i,...d})=>{t=o?"img":t;let l=o?{backgroundImage:`url(${o})`}:void 0;return Cn("div",{className:`${Z[`bg-box-${t}`]}${a?` ${a}`:""}`,style:{"--bgColor":n,"--cubeColor":e,...l,...r},...d,children:i})},kn=_n;if(typeof document<"u"&&!window.__HUXY__?.has("0ac2a5")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-0ac2a5-huxy-title-border-wrap {
  --borderColor: rgba(0, 0, 0, 0.1);
  --borderSize: 2px;
  --space: 10px;
  --fontSize: 14px;
  font-size: var(--fontSize);
  position: relative;
  padding-top: 0.713em;
  height: 100%;
}
.hy-0ac2a5-huxy-title-border-wrap .hy-0ac2a5-huxy-title-border-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 3;
}
.huxy-title-border-wrap .hy-0ac2a5-huxy-title-border-top:before,
.huxy-title-border-wrap .hy-0ac2a5-huxy-title-border-top:after {
  content: '';
  height: var(--borderSize);
  background: var(--borderColor);
  flex-grow: 1;
}
.huxy-title-border-wrap .hy-0ac2a5-huxy-title-border-top:before {
  margin-right: var(--space);
}
.huxy-title-border-wrap .hy-0ac2a5-huxy-title-border-top:after {
  margin-left: var(--space);
}
.hy-0ac2a5-huxy-title-border-wrap .hy-0ac2a5-huxy-title-border-box {
  height: 100%;
  border-left: var(--borderSize) solid var(--borderColor);
  border-right: var(--borderSize) solid var(--borderColor);
  border-bottom: var(--borderSize) solid var(--borderColor);
}
`,document.head.appendChild(t),window.__HUXY__.add("0ac2a5")}import{jsx as ut,jsxs as Xn}from"react/jsx-runtime";var Yn=({children:t,title:n,fontSize:e,borderSize:o,borderColor:r="var(--appColor)",space:a="10px",style:i,className:d,...l})=>Xn("div",{className:`${void 0}${d?` ${d}`:""}`,style:{"--borderColor":r,"--space":a,"--fontSize":e,"--borderSize":o,...i},...l,children:[ut("div",{className:void 0,children:n}),ut("div",{className:void 0,children:t})]}),zn=Yn;var C={};E(C,{default:()=>Sn,huxyBorderAnimateDash:()=>Un,huxyBorderAnimateSolid:()=>$n,huxyBorderWrap:()=>Hn});if(typeof document<"u"&&!window.__HUXY__?.has("7e4655")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-border-animate-dash {
  100% {
    background-position: 6% 0, -6% 100%, 0 -6%, 100% 6%;
  }
}
@keyframes huxy-border-animate-solid {
  0%,
  100% {
    clip-path: inset(0% 0% 66% 66%);
  }
  8.33% {
    clip-path: inset(0% 0% 33% 99%);
  }
  16.66% {
    clip-path: inset(33% 0% 0% 99%);
  }
  25% {
    clip-path: inset(66% 0% 0% 66%);
  }
  33.33% {
    clip-path: inset(99% 0% 0% 33%);
  }
  41.66% {
    clip-path: inset(99% 33% 0% 0%);
  }
  50% {
    clip-path: inset(66% 66% 0% 0%);
  }
  58.33% {
    clip-path: inset(33% 99% 0% 0%);
  }
  66.66% {
    clip-path: inset(0% 99% 33% 0%);
  }
  75% {
    clip-path: inset(0% 66% 66% 0%);
  }
  83.33% {
    clip-path: inset(0% 33% 99% 0%);
  }
  91.66% {
    clip-path: inset(0% 0% 99% 33%);
  }
}
.hy-7e4655-huxy-border-wrap {
  --borderColor: #03a9f3;
  --space: 2px;
  padding: var(--space);
  height: 100%;
}
.hy-7e4655-huxy-border-animate-dash {
  position: relative;
  height: 100%;
  padding: var(--space);
  box-sizing: border-box;
  border: 1px solid transparent;
  background: linear-gradient(90deg, var(--borderColor) 50%, transparent 0) repeat-x, linear-gradient(90deg, var(--borderColor) 50%, transparent 0) repeat-x, linear-gradient(0deg, var(--borderColor) 50%, transparent 0) repeat-y, linear-gradient(0deg, var(--borderColor) 50%, transparent 0) repeat-y;
  background-size: 8px 2px,
    8px 2px,
    2px 8px,
    2px 8px;
  background-position: 0 0,
    0 100%,
    0 0,
    100% 0;
  animation: huxy-border-animate-dash 0.5s infinite linear;
}
.hy-7e4655-huxy-border-animate-solid {
  position: relative;
  height: 100%;
}
.hy-7e4655-huxy-border-animate-solid::before,
.hy-7e4655-huxy-border-animate-solid::after {
  content: '';
  position: absolute;
  --size: calc(0px - var(--space));
  top: var(--size);
  left: var(--size);
  right: var(--size);
  bottom: var(--size);
  border: 2px solid var(--borderColor);
  border-radius: var(--space);
  animation: huxy-border-animate-solid 6s infinite linear;
}
.hy-7e4655-huxy-border-animate-solid::before {
  animation-delay: -3s;
}
`,document.head.appendChild(t),window.__HUXY__.add("7e4655")}var Hn="hy-7e4655-huxy-border-wrap",Un="hy-7e4655-huxy-border-animate-dash",$n="hy-7e4655-huxy-border-animate-solid",Sn={huxyBorderWrap:"hy-7e4655-huxy-border-wrap","huxy-border-wrap":"hy-7e4655-huxy-border-wrap",huxyBorderAnimateDash:"hy-7e4655-huxy-border-animate-dash","huxy-border-animate-dash":"hy-7e4655-huxy-border-animate-dash",huxyBorderAnimateSolid:"hy-7e4655-huxy-border-animate-solid","huxy-border-animate-solid":"hy-7e4655-huxy-border-animate-solid"};import{jsx as mt}from"react/jsx-runtime";var Bn=({type:t="solid",space:n="2px",borderColor:e="var(--appColor)",style:o,className:r,children:a,...i})=>mt("div",{className:`${void 0}${r?` ${r}`:""}`,style:{"--space":n,"--borderColor":e,...o},...i,children:mt("div",{className:C[`huxy-border-animate-${t==="dash"?"dash":"solid"}`],children:a})}),Tn=Bn;var Wn=(t="",n=2,e="0")=>{let o=t.length;return o>=n?t:`${Array(n-o+1).join(e)}${t}`},gt=Wn;var Nn=()=>"#"+gt((~~(Math.random()*(1<<24))).toString(16),6),s=Nn;var En=(t=0,n=0,e=!0)=>(t<n&&(t=[n,n=t][0]),e?~~(Math.random()*(t-n+1))+n:Math.random()*(t-n)+n),c=En;var jn=(t=[])=>t[c(t.length-1)],v=jn;if(typeof document<"u"&&!window.__HUXY__?.has("c65f47")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-c65f47-huxy-skeleton-barchart {
  --height: 240px;
  --borderColor: rgba(0, 0, 0, 0.04);
  --space: 25px;
  --itemWidth: 25px;
  border-left: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
  height: var(--height);
  margin: 0 auto;
  position: relative;
}
.hy-c65f47-huxy-skeleton-barchart .hy-c65f47-sk-bar-item {
  --itemHeight: 60%;
  --bgColor: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-left: var(--space);
  width: var(--itemWidth);
  height: var(--itemHeight);
  background: var(--bgColor);
  box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.08);
}
`,document.head.appendChild(t),window.__HUXY__.add("c65f47")}import{jsx as wt}from"react/jsx-runtime";var vt=t=>t?.length?v(t):s(),Rn=({list:t=10,height:n="240px",space:e="25px",itemWidth:o="30px",colors:r=[],color:a,style:i,className:d,...l})=>wt("div",{className:`${void 0}${d?` ${d}`:""}`,style:{"--height":n,...i},...l,children:(Array.isArray(t)?t:[...new Array(t)]).map((h,x)=>wt("div",{className:void 0,style:{"--space":e,"--itemWidth":o,"--bgColor":h?.color??a??`linear-gradient(to top, ${vt(r)}, ${vt(r)})`,"--itemHeight":h?.height??`${c(15,100)}%`,left:`${x*(b(e)+b(o))}px`}},`huxy-skeleton-barchart-${x}`))}),In=Rn;if(typeof document<"u"&&!window.__HUXY__?.has("c25fcd")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-c25fcd-huxy-skeleton-card {
  --bgColor: transparent;
  --height: 120px;
  --leftColor: rgba(0, 0, 0, 0.1);
  --rightColor: rgba(0, 0, 0, 0.2);
  --topWidth: 42%;
  --bottomWidth: 90%;
  position: relative;
  height: var(--height);
  background: var(--bgColor);
  overflow: hidden;
}
.hy-c25fcd-huxy-skeleton-card .hy-c25fcd-sk-card-left {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--height);
  height: 100%;
}
.hy-c25fcd-huxy-skeleton-card .hy-c25fcd-sk-card-left .hy-c25fcd-sk-card-img {
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: var(--leftColor);
  margin: 20% auto;
}
.hy-c25fcd-huxy-skeleton-card .hy-c25fcd-sk-card-right {
  margin-left: var(--height);
  margin-top: calc(var(--height) * 0.2);
  height: calc(var(--height) * 0.6);
  padding: 0 10px;
  position: relative;
  overflow: hidden;
}
.hy-c25fcd-huxy-skeleton-card .hy-c25fcd-sk-card-right .hy-c25fcd-title,
.hy-c25fcd-huxy-skeleton-card .hy-c25fcd-sk-card-right .hy-c25fcd-text {
  margin: 0;
  border-radius: 4px;
  background: var(--rightColor);
}
.hy-c25fcd-huxy-skeleton-card .hy-c25fcd-sk-card-right .hy-c25fcd-title {
  font-size: 2.2rem;
  height: calc(var(--height) * 0.22);
  width: var(--topWidth);
  margin-top: calc(var(--height) * 0.05);
}
.hy-c25fcd-huxy-skeleton-card .hy-c25fcd-sk-card-right .hy-c25fcd-text {
  font-size: 1.6rem;
  height: calc(var(--height) * 0.18);
  width: var(--bottomWidth);
  margin-top: calc(var(--height) * 0.1);
}
`,document.head.appendChild(t),window.__HUXY__.add("c25fcd")}var _t="hy-c25fcd-title",kt="hy-c25fcd-text";import{jsx as W,jsxs as Ct}from"react/jsx-runtime";var An=({height:t="120px",leftColor:n,rightColor:e,topWidth:o,bottomWidth:r,style:a,className:i,...d})=>Ct("div",{className:`${void 0}${i?` ${i}`:""}`,style:{"--height":t,"--leftColor":n??s(),"--rightColor":e??s(),"--topWidth":o??`${c(30,60)}%`,"--bottomWidth":r??`${c(55,95)}%`,...a},...d,children:[W("div",{className:void 0,children:W("div",{className:void 0})}),Ct("div",{className:void 0,children:[W("h4",{className:_t}),W("p",{className:kt})]})]}),Ln=An;if(typeof document<"u"&&!window.__HUXY__?.has("b590ce")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-animate-border-circle-shadow {
  0%,
  40%,
  60%,
  100% {
    box-shadow: 0px 0px 60px 25px var(--shadowOutColor), inset 0px 1px 4px 2px var(--shadowInColor);
  }
  50% {
    box-shadow: 0px 0px 50px 16px var(--shadowOutColor), inset 0px 1px 100px 2px var(--shadowInColor);
  }
}
@keyframes huxy-animate-border-circle {
  0% {
    transform: translate(-50%, -50%) rotateZ(var(--rotateStart));
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(var(--rotateEnd));
  }
}
.hy-b590ce-huxy-animate-border-circle {
  --size: 300px;
  --ballBorder: 10px;
  --ballBgColor: #cedce0;
  --ballBorderColor: rgba(2, 255, 255, 0.15);
  --shadowOutColor: rgba(150, 255, 255, 0.5);
  --shadowInColor: rgba(150, 255, 255, 0.3);
  position: relative;
  margin: 0 auto;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  box-shadow: 0px 0px 50px 15px var(--shadowInColor), inset 0px 0px 50px 15px var(--shadowInColor);
}
.hy-b590ce-huxy-animate-border-circle::after {
  content: '';
  position: absolute;
  width: calc(var(--size) / 2 - 20px);
  height: calc(var(--size) / 2 - 20px);
  border-radius: 50%;
  background: var(--ballBgColor);
  border: var(--ballBorder) solid var(--ballBorderColor);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: huxy-animate-border-circle-shadow 1.6s infinite;
}
.hy-b590ce-border-circle-item {
  --itemSize: 80%;
  --borderWidth: 5px;
  --time: 4s;
  --rotateStart: 0deg;
  --rotateEnd: 360deg;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  width: var(--itemSize);
  height: var(--itemSize);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateZ(var(--rotateStart));
  border-left: var(--borderWidth) solid var(--borderLeftColor, transparent);
  border-right: var(--borderWidth) solid var(--borderRightColor, transparent);
  border-top: var(--borderWidth) solid var(--borderTopColor, transparent);
  border-bottom: var(--borderWidth) solid var(--borderBottomColor, transparent);
  animation: huxy-animate-border-circle var(--time) linear infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("b590ce")}import{jsx as Yt}from"react/jsx-runtime";var Zn=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],Mn=({size:t="300px",space:n="8px",style:e,className:o,...r})=>{let a=b(n)*3;return Yt("div",{className:`${void 0}${o?` ${o}`:""}`,style:{"--size":t,...e},...r,children:Zn.map((i,d)=>{let l=a+b(i.borderWidth)*2+b(n)*2;return Yt("div",{className:void 0,style:{"--itemSize":`calc(${t} - ${l}px)`,"--borderWidth":i.borderWidth,"--borderLeftColor":i.borderLeftColor,"--borderRightColor":i.borderRightColor,"--borderTopColor":i.borderTopColor,"--borderBottomColor":i.borderBottomColor,"--time":i.time,"--rotateStart":i.rotateStart,"--rotateEnd":i.rotateEnd}},`huxy-animate-border-circle-${d}`)})})},Fn=Mn;if(typeof document<"u"&&!window.__HUXY__?.has("21a60f")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-skeleton-dashboard {
  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
}
.hy-21a60f-huxy-skeleton-dashboard {
  --size: 400px;
  --width: 20px;
  --space: 20px;
  --color0: #fff;
  --color1: transparent;
  --color2: #f1462c;
  --color3: #fc5d2c;
  --color4: #fba73e;
  --color5: #e0fa4e;
  --color6: #12dd7e;
  --color7: #0a6e3f;
  position: relative;
  margin: 0 auto;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  background: conic-gradient(var(--color2) 0%, var(--color3) 12.4%, var(--color0) 12.4%, var(--color0) 12.5%, var(--color3) 12.5%, var(--color4) 24.9%, var(--color0) 24.9%, var(--color0) 25%, var(--color4) 25%, var(--color5) 37.4%, var(--color0) 37.4%, var(--color0) 37.5%, var(--color5) 37.5%, var(--color6) 49.9%, var(--color0) 49.9%, var(--color0) 50%, var(--color6) 50%, var(--color7) 62.4%, var(--color1) 62.4%, var(--color1) 62.5%);
  transform-origin: 50% 50%;
  transform: rotate(calc(-0.625 * 180deg));
}
.hy-21a60f-huxy-skeleton-dashboard::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--size) - var(--width) * 2);
  height: calc(var(--size) - var(--width) * 2);
  border-radius: 50%;
  background: conic-gradient(var(--color0) 0 62.4%, var(--color1) 0 100%);
}
.hy-21a60f-huxy-skeleton-dashboard::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--size) - var(--width) * 2 - var(--space) * 2);
  height: calc(var(--size) - var(--width) * 2 - var(--space) * 2);
  border-radius: 50%;
  background: radial-gradient(var(--color0) 0%, var(--color0) 25%, transparent 25%, transparent 100%), conic-gradient(var(--color2) 0 12.5%, var(--color4) 0 25%, var(--color5) 0 37.5%, var(--color6) 0 50%, var(--color7) 0 62.4%, var(--color1) 0 100%);
}
.hy-21a60f-huxy-skeleton-dashboard .hy-21a60f-point {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: radial-gradient(#467dc6 0%, #a4c6f3 100%);
  border-radius: 50%;
  z-index: 999;
}
.hy-21a60f-huxy-skeleton-dashboard .hy-21a60f-point::before {
  content: '';
  position: absolute;
  width: 5px;
  height: calc(var(--size) - var(--width) * 2 - var(--space));
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border-radius: 100% 100% 5% 5%;
  background: linear-gradient(180deg, #9bc7f6 0, #467dc6 50%, transparent 50%, transparent 100%);
  animation: huxy-skeleton-dashboard 4s cubic-bezier(0.93, 1.32, 0.89, 1.15) infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("21a60f")}var zt="hy-21a60f-point";import{jsx as Xt}from"react/jsx-runtime";var Dn=({size:t="400px",width:n="20px",space:e="20px",colors:o=[],style:r,className:a,...i})=>Xt("div",{className:`${void 0}${a?` ${a}`:""}`,style:{"--size":t,"--width":n,"--space":e,"--color1":o[0],"--color2":o[1],"--color3":o[2],"--color4":o[3],"--color5":o[4],"--color6":o[5],"--color7":o[6],...r},...i,children:Xt("div",{className:zt})}),Pn=Dn;if(typeof document<"u"&&!window.__HUXY__?.has("ed075c")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-ed075c-huxy-skeleton-list {
  --bgColor: transparent;
  --rightWidth: 100px;
  --itemHeight: 20px;
  --space: 20px;
  --leftColor: linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15));
  --rightColor: rgba(0, 0, 0, 0.2);
  background: var(--bgColor);
  padding: 15px var(--space);
}
.hy-ed075c-huxy-skeleton-list .hy-ed075c-sk-list-item {
  position: relative;
  border-radius: 2px;
  height: var(--itemHeight);
  width: calc(100% - var(--rightWidth) - var(--space));
  background: var(--leftColor);
}
.huxy-skeleton-list .hy-ed075c-sk-list-item::after {
  content: '';
  position: absolute;
  top: 0;
  right: calc(0px - var(--space) - var(--rightWidth));
  border-radius: 2px;
  height: var(--itemHeight);
  width: var(--rightWidth);
  background: var(--rightColor);
}
.huxy-skeleton-list .hy-ed075c-sk-list-item + .hy-ed075c-sk-list-item {
  margin-top: calc(var(--space) - 2px);
}
`,document.head.appendChild(t),window.__HUXY__.add("ed075c")}import{jsx as Ht}from"react/jsx-runtime";var On=({row:t=8,leftColor:n="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:e="rgba(0, 0, 0, 0.2)",rightWidth:o="100px",itemHeight:r="20px",space:a="20px",className:i,...d})=>Ht("div",{className:`${void 0}${i?` ${i}`:""}`,style:{"--rightWidth":o,"--itemHeight":r,"--space":a,"--leftColor":n,"--rightColor":e},...d,children:[...new Array(t)].map((l,h)=>Ht("div",{className:void 0},`huxy-skeleton-list-${h}`))}),Gn=On;var qn=(t,n=100)=>{let e=[];return[...new Array(t)].map((o,r)=>{r===t-1?e[r]=n:(e[r]=c(1,n-1),n-=e[r])}),e},Ut=qn;if(typeof document<"u"&&!window.__HUXY__?.has("241042")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-241042-huxy-skeleton-piechart {
  --height: 200px;
  --color1: rgba(0, 0, 0, 0.2);
  --percent1: 30%;
  --color2: rgba(0, 0, 0, 0.3);
  --percent2: 45%;
  --color3: rgba(0, 0, 0, 0.1);
  --percent3: 64%;
  --color4: rgba(0, 0, 0, 0.4);
  --percent4: 100%;
  margin: 5px auto;
  width: var(--height);
  height: var(--height);
  background: conic-gradient(var(--color1) 0 var(--percent1), var(--color2) var(--percent1) var(--percent2), var(--color3) var(--percent2) var(--percent3), var(--color4) var(--percent3) var(--percent4));
  border-radius: 50%;
  box-shadow: 0 0 6px 6px rgba(255, 255, 255, 0.08);
}
`,document.head.appendChild(t),window.__HUXY__.add("241042")}import{jsx as Qn}from"react/jsx-runtime";var N=t=>t?.length?v(t):s(),w=Ut(4),Jn=({height:t,colors:n=[],style:e,className:o,...r})=>Qn("div",{className:`${void 0}${o?` ${o}`:""}`,style:{"--height":t,"--color1":N(n),"--color2":N(n),"--color3":N(n),"--color4":N(n),"--percent1":`${w[0]}%`,"--percent2":`${w[0]+w[1]}%`,"--percent3":`${w[0]+w[1]+w[2]}%`,"--percent4":"100%",...e},...r}),Kn=Jn;if(typeof document<"u"&&!window.__HUXY__?.has("01cd27")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-progress-wave {
  0% {
    width: 0;
    opacity: 0.1;
  }
  34% {
    width: 0;
    opacity: 0.5;
  }
  100% {
    width: calc(100% * var(--percent) / 100);
    opacity: 0;
  }
}
.hy-01cd27-huxy-progress-wave {
  --waveColor: rgba(255, 255, 255, 0.1);
  --waveTime: 3s;
  --percent: 60;
  --height: 20px;
  --borderRadius: 4px;
  --bgColor: rgba(0, 0, 0, 0.15);
  --progressColor: rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: var(--borderRadius);
  height: var(--height);
  line-height: var(--height);
  background: var(--bgColor);
  overflow: hidden;
  color: #fff;
}
.huxy-progress-wave::before,
.huxy-progress-wave::after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% * var(--percent) / 100);
  max-width: 100%;
  border-radius: var(--borderRadius);
  background: var(--progressColor);
  transition: width 1.5s ease-in;
}
.huxy-progress-wave::before {
  counter-reset: percent var(--percent);
  content: counter(percent) '%';
  text-align: right;
  font-size: 12px;
  font-weight: 400;
}
.huxy-progress-wave::after {
  background: var(--waveColor);
  opacity: 0;
  animation: huxy-progress-wave var(--waveTime) ease-out infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("01cd27")}import{jsx as ne}from"react/jsx-runtime";var Vn=({percent:t,height:n="20px",bgColor:e="rgba(0, 0, 0, 0.15)",progressColor:o,borderRadius:r="4px",waveColor:a="rgba(255, 255, 255, 0.2)",waveTime:i="3s",style:d,className:l,...h})=>ne("div",{className:`${void 0}${l?` ${l}`:""}`,style:{"--percent":t??c(33,99),"--height":n,"--bgColor":e,"--progressColor":o??s(),"--borderRadius":r,"--waveColor":a,"--waveTime":i,...d},...h}),te=Vn;if(typeof document<"u"&&!window.__HUXY__?.has("c23ffd")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-animate-border-ring {
  50% {
    opacity: 0.5;
  }
}
.hy-c23ffd-huxy-animate-border-ring {
  --size: 300px;
  --bgColor: rgba(255, 255, 255, 0.9);
  --shadowColor: rgba(255, 255, 255, 0.6);
  --itemWidth: 30px;
  --itemHeight: 4px;
  position: relative;
  width: var(--size);
  height: var(--size);
  margin: 0 auto;
  border-radius: 50%;
}
.huxy-animate-border-ring::after {
  position: absolute;
  border-radius: 50%;
  width: calc(var(--size) / 2);
  height: calc(var(--size) / 2);
  left: calc(var(--size) / 4);
  top: calc(var(--size) / 4);
  background: var(--bgColor);
  box-shadow: 0px 0px 4px 10px var(--shadowColor);
}
.hy-c23ffd-huxy-animate-border-ring .hy-c23ffd-border-ring-item {
  --color: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: var(--itemWidth);
  height: var(--itemHeight);
  background: var(--color);
  top: calc(var(--size) / 2);
  left: 0;
  transform-origin: calc(var(--size) / 2) calc(var(--itemHeight) / 2);
  animation: huxy-animate-border-ring 2s infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("c23ffd")}import{jsx as $t}from"react/jsx-runtime";var ee=({list:t=60,size:n="300px",itemWidth:e="30px",itemHeight:o="4px",bgColor:r="rgba(255, 255, 255 , 0.9)",shadowColor:a="rgba(255, 255, 255 , 0.6)",color:i,style:d,className:l,...h})=>(t=Array.isArray(t)?t:[...new Array(t)],$t("div",{className:`${void 0}${l?` ${l}`:""}`,style:{"--size":n,"--itemWidth":e,"--itemHeight":o,"--bgColor":r,"--shadowColor":a,...d},...h,children:t.map((x,g)=>$t("div",{className:void 0,style:{"--color":x?.color??i??s(),transform:`rotate(${360/t.length*g}deg)`}},`huxy-animate-border-ring-${g}`))})),oe=ee;if(typeof document<"u"&&!window.__HUXY__?.has("136445")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-136445-skeleton-container {
  --bgColor: transparent;
  background: var(--bgColor);
  padding: 15px 20px;
}
.skeleton-container.hy-136445-title {
  --titleBgColor: rgba(0, 0, 0, 0.2);
  --width: 100px;
  --height: 20px;
  padding-top: calc(25px + var(--height));
}
.skeleton-container.hy-136445-title::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 20px;
  width: var(--width);
  height: var(--height);
  border-radius: 2px;
  background: var(--titleBgColor);
}
`,document.head.appendChild(t),window.__HUXY__.add("136445")}var St="hy-136445-title";import{jsx as ie}from"react/jsx-runtime";var re=({children:t,hasTitle:n,titleBgColor:e,style:o,className:r,...a})=>ie("div",{className:`${void 0}${n?` ${St}`:""}${r?` ${r}`:""}`,style:{"--titleBgColor":e??s(),...o},...a,children:t}),ae=re;if(typeof document<"u"&&!window.__HUXY__?.has("a26569")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-a26569-huxy-skeleton-table {
  --bgColor: transparent;
  --borderColor: rgba(0, 0, 0, 0.03);
  --thBgColor: rgba(0, 0, 0, 0.06);
  --thItemColor: rgba(0, 0, 0, 0.4);
  --tdItemColor: rgba(0, 0, 0, 0.2);
  --hoverColor: rgba(0, 0, 0, 0.02);
  --oddColor: rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  border: 1px solid var(--borderColor);
  background: var(--bgColor);
}
.hy-a26569-huxy-skeleton-table table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
.hy-a26569-huxy-skeleton-table table th {
  padding: 15px 4%;
  background: var(--thBgColor);
}
.hy-a26569-huxy-skeleton-table table th span {
  display: block;
  height: 18px;
  border-radius: 2px;
  background: var(--thItemColor);
}
.hy-a26569-huxy-skeleton-table table td {
  padding: 12px 3%;
}
.hy-a26569-huxy-skeleton-table table td span {
  display: block;
  height: 16px;
  border-radius: 2px;
  background: var(--tdItemColor);
}
.hy-a26569-huxy-skeleton-table table tr {
  transition: background 0.3s;
}
.huxy-skeleton-table table tr:hover {
  background: var(--hoverColor);
}
.huxy-skeleton-table table tr:nth-of-type(odd) {
  background: var(--oddColor);
}
`,document.head.appendChild(t),window.__HUXY__.add("a26569")}import{jsx as y,jsxs as se}from"react/jsx-runtime";var de=({row:t=6,col:n=8,...e})=>y("div",{className:void 0,...e,children:se("table",{children:[y("thead",{children:y("tr",{children:[...new Array(n)].map((o,r)=>y("th",{children:y("span",{})},`skeleton-table-th-${r}`))})}),y("tbody",{children:[...new Array(t)].map((o,r)=>y("tr",{children:[...new Array(n)].map((a,i)=>y("td",{children:y("span",{})},`skeleton-table-tr-${r}-${i}`))},`tr-${r}`))})]})}),le=de;if(typeof document<"u"&&!window.__HUXY__?.has("1aa02d")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-loading-wave {
  0% {
    width: 0;
    opacity: 0.1;
  }
  34% {
    width: 0;
    opacity: 0.5;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
.hy-1aa02d-huxy-loading-wave {
  --waveColor: rgba(255, 255, 255, 0.1);
  --waveTime: 2s;
  position: relative;
}
.huxy-loading-wave::after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--waveColor);
  border-radius: 2px;
  opacity: 0;
  animation: huxy-loading-wave var(--waveTime) ease-out infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("1aa02d")}import{jsx as pe}from"react/jsx-runtime";var ce=({color:t="rgba(255, 255, 255, 0.1)",delay:n="2s",style:e,className:o,children:r,...a})=>pe("div",{className:`${void 0}${o?` ${o}`:""}`,style:{"--waveColor":t,"--waveTime":n,...e},...a,children:r}),he=ce;if(typeof document<"u"&&!window.__HUXY__?.has("89c872")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-timer {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.hy-89c872-huxy-timer {
  --size: 24px;
  --color: #ffffff;
  --handWidth: 2px;
  --maxHeight: calc(var(--size) / 2 - var(--handWidth));
  --minHeight: calc(var(--size) / 2 - var(--handWidth) * 2);
  --maxTime: 2s;
  --minTime: 8s;
  width: var(--size);
  height: var(--size);
  position: relative;
  display: inline-block;
  border-radius: 50%;
  box-shadow: inset 0px 0px 0px 2px #fff;
}
.hy-89c872-huxy-timer:after,
.hy-89c872-huxy-timer:before {
  position: absolute;
  content: '';
  background: var(--color);
  height: var(--handWidth);
  transform-origin: 1px 1px;
  top: calc(var(--size) / 2 - var(--handWidth) / 2);
  left: calc(var(--size) / 2 - var(--handWidth) / 2);
}
.hy-89c872-huxy-timer:after {
  width: var(--maxHeight);
  animation: huxy-timer var(--maxTime) linear infinite;
}
.hy-89c872-huxy-timer:before {
  width: var(--minHeight);
  animation: huxy-timer var(--minTime) linear infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("89c872")}import{jsx as fe}from"react/jsx-runtime";var xe=t=>fe("span",{className:void 0,...t}),be=xe;if(typeof document<"u"&&!window.__HUXY__?.has("d878e7")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-search {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
}
.hy-d878e7-huxy-search {
  --size: 24px;
  --color: #ffffff;
  --time: 1s;
  --bar-width: 2px;
  --bar-height: 8px;
  width: var(--size);
  height: var(--size);
  position: relative;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 1px var(--color);
  animation: huxy-search var(--time) linear infinite alternate;
}
.hy-d878e7-huxy-search:before {
  position: absolute;
  content: 'me';
  font-size: 12px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.hy-d878e7-huxy-search:after {
  position: absolute;
  content: '';
  width: var(--bar-width);
  height: var(--bar-height);
  background: var(--color);
  bottom: calc(var(--bar-width) - var(--bar-height));
  left: calc(var(--size) - var(--bar-width) * 2);
  border-radius: var(--bar-width);
  transform: rotate(-45deg);
}
`,document.head.appendChild(t),window.__HUXY__.add("d878e7")}import{jsx as me}from"react/jsx-runtime";var ye=t=>me("span",{className:void 0,...t}),ue=ye;if(typeof document<"u"&&!window.__HUXY__?.has("835391")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-location {
  50% {
    top: calc(50% - var(--size) * 0.25);
  }
}
@keyframes huxy-location-back {
  50% {
    transform: translateX(-50%) scale(0.5);
  }
}
.hy-835391-huxy-location {
  --size: 24px;
  --color: #ffffff;
  --bgColor: rgba(255, 255, 255, 0.2);
  --time: 2s;
  position: relative;
  display: inline-block;
  width: var(--size);
  height: var(--size);
}
.hy-835391-huxy-location:before,
.hy-835391-huxy-location:after {
  position: absolute;
  content: '';
}
.hy-835391-huxy-location:before {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-46deg);
  width: calc(var(--size) * 0.75);
  height: calc(var(--size) * 0.75);
  border-radius: 100% 100% 100% 0;
  box-shadow: 0px 0px 0px 2px var(--color);
  animation: huxy-location var(--time) linear infinite;
}
.hy-835391-huxy-location:after {
  left: 50%;
  transform: translateX(-50%) scale(1);
  bottom: -50%;
  width: calc(var(--size) * 1.25);
  height: calc(var(--size) * 0.5);
  border-radius: 100%;
  background: var(--bgColor);
  animation: huxy-location-back var(--time) linear infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("835391")}import{jsx as we}from"react/jsx-runtime";var ge=t=>we("span",{className:void 0,...t}),ve=ge;if(typeof document<"u"&&!window.__HUXY__?.has("13bc25")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-loading-ball {
  0%,
  40%,
  100% {
    transform: scale(0.2);
  }
  20% {
    transform: scale(1);
  }
}
.hy-13bc25-huxy-loading-ball {
  --time: 1.6s;
  --size: 40px;
  --shadowSize: 50px;
  display: flex;
}
.hy-13bc25-huxy-loading-ball .hy-13bc25-ball {
  --delay: 0s;
  --bgColor: rgba(255, 255, 255, 0.8);
  background: var(--bgColor);
  box-shadow: 0 0 var(--shadowSize) var(--bgColor);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  animation: huxy-loading-ball var(--time) ease-in-out var(--delay) infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("13bc25")}var Bt="hy-13bc25-ball";import{jsx as Tt}from"react/jsx-runtime";var _e=({list:t=7,size:n="40px",shadowSize:e="50px",time:o="1.6s",style:r,className:a,...i})=>(o=b(o,"s"),Tt("div",{className:`${void 0}${a?` ${a}`:""}`,style:{"--size":n,"--shadowSize":e,"--time":`${o}s`,...r},...i,children:(Array.isArray(t)?t:[...new Array(t)]).map((d,l)=>Tt("div",{className:Bt,style:{"--delay":d?.delay??`${o/((t?.length??t)+1)*(l+1)-o}s`,"--bgColor":d?.color??s()}},`huxy-loading-ball-${l}`))})),ke=_e;var V={};E(V,{default:()=>ze,huxyScale:()=>Ye,huxySpot:()=>Ce});if(typeof document<"u"&&!window.__HUXY__?.has("6f2d60")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-spot {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
@keyframes huxy-scale {
  0% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0px 0px calc(var(--size) / 8) 0px var(--shadowColor);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.8);
    box-shadow: 0px 0px calc(var(--size) / 8) calc(var(--size) * 5 / 8) var(--shadowColor);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0px 0px calc(var(--size) / 8) 0px var(--shadowColor);
  }
}
.hy-6f2d60-huxy-spot {
  --size: 6px;
  --color: var(--blue1);
  display: inline-block;
  width: var(--size);
  height: var(--size);
  color: var(--color);
  background: currentColor;
  border-radius: 50%;
  position: relative;
}
.hy-6f2d60-huxy-spot:before,
.hy-6f2d60-huxy-spot:after {
  content: '';
  position: absolute;
  background: currentColor;
  border-radius: 50%;
  animation: huxy-spot 1.5s ease-in-out infinite;
}
.hy-6f2d60-huxy-spot:before {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.hy-6f2d60-huxy-spot:after {
  width: 150%;
  height: 150%;
  left: -25%;
  top: -25%;
}
.hy-6f2d60-huxy-scale {
  --size: 8px;
  --color: var(--orange1);
  --shadowColor: var(--orange1);
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  width: var(--size);
  height: var(--size);
  line-height: var(--size);
  text-align: center;
  border-radius: 50%;
  background-color: var(--color);
  animation: huxy-scale 1.5s ease-in-out infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("6f2d60")}var Ce="hy-6f2d60-huxy-spot",Ye="hy-6f2d60-huxy-scale",ze={huxySpot:"hy-6f2d60-huxy-spot","huxy-spot":"hy-6f2d60-huxy-spot",huxyScale:"hy-6f2d60-huxy-scale","huxy-scale":"hy-6f2d60-huxy-scale"};import{jsx as Ue}from"react/jsx-runtime";var Xe=({type:t="spot",size:n,color:e,shadowColor:o,style:r,className:a,...i})=>Ue("span",{className:`${V[`huxy-${t}`]}${a?` ${a}`:""}`,style:{"--size":n??`${c(6,30)}px`,"--color":e??s(),"--shadowColor":o??s(),...r},...i}),He=Xe;if(typeof document<"u"&&!window.__HUXY__?.has("af6661")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-af6661-huxy-taiji {
  --black: #000;
  --white: #fff;
  --width: 128px;
  --border: 2px;
  box-sizing: content-box;
  position: relative;
  width: var(--width);
  height: calc(var(--width) / 2);
  background: var(--white);
  border-color: var(--black);
  border-style: solid;
  border-width: var(--border) var(--border) calc(var(--width) / 2 + var(--border)) var(--border);
  border-radius: 100%;
  transform: rotate(90deg);
}
.huxy-taiji::before,
.huxy-taiji::after {
  content: '';
  position: absolute;
  box-sizing: content-box;
  width: calc(var(--width) / 8);
  height: calc(var(--width) / 8);
  border-radius: 100%;
  top: 50%;
}
.huxy-taiji::before {
  left: 0;
  background: var(--black);
  border: calc(var(--width) * 3 / 16) solid var(--white);
}
.huxy-taiji::after {
  left: 50%;
  background: var(--white);
  border: calc(var(--width) * 3 / 16) solid var(--black);
}
`,document.head.appendChild(t),window.__HUXY__.add("af6661")}import{jsx as Be}from"react/jsx-runtime";var $e=({width:t,border:n,black:e,white:o,style:r,className:a,...i})=>Be("div",{className:`${void 0} ${a}`,style:{"--width":t,"--border":n,"--black":e,"--white":o,...r},...i}),Se=$e;if(typeof document<"u"&&!window.__HUXY__?.has("e91c6e")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-conic-light-animate {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
.hy-e91c6e-conic {
  --rotate: 4;
  --width: 200px;
  --height: 180px;
  --bgColor: linear-gradient(to top, rgba(168, 239, 255, 0.2), rgba(168, 239, 255, 0));
  --topColor: rgba(168, 239, 255, 0.01);
  --bottomColor: rgba(168, 239, 255, 0.1);
  --space: 12%;
  --time: 6s;
  --bottomWidth: calc(var(--width) - var(--space) * 2);
  position: relative;
  margin: 0 auto;
  height: var(--height);
  width: var(--width);
  border-radius: var(--width) / calc(var(--width) / var(--rotate));
  background: var(--bgColor);
  clip-path: polygon(0 0, 100% 0, calc(100% - var(--space)) 100%, var(--space) 100%);
  opacity: 0;
  animation: huxy-conic-light-animate var(--time) linear infinite;
}
.hy-e91c6e-conic:before {
  --height: calc(var(--width) / var(--rotate));
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  background: var(--topColor);
}
.hy-e91c6e-conic:after {
  --height: calc(var(--bottomWidth) / var(--rotate));
  content: '';
  position: absolute;
  left: var(--space);
  bottom: 0;
  width: var(--bottomWidth);
  height: var(--height);
  background: var(--bottomColor);
  border-radius: 50%;
}
`,document.head.appendChild(t),window.__HUXY__.add("e91c6e")}var Wt="hy-e91c6e-conic";import{jsx as Ee}from"react/jsx-runtime";var We=({width:t="200px",height:n="180px",space:e="12%",bgColor:o,style:r,className:a,...i})=>Ee("div",{className:`${Wt}${a?` ${a}`:""}`,style:{"--width":t,"--height":n,"--space":e,"--bgColor":o,...r},...i}),Ne=We;if(typeof document<"u"&&!window.__HUXY__?.has("f30554")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-text-3d {
  0% {
    transform: rotateX(0deg) rotateY(90deg) rotateZ(90deg);
  }
  50% {
    transform: rotateX(0deg) rotateY(90deg) rotateZ(180deg);
  }
  51% {
    transform: rotateX(0deg) rotateY(90deg) rotateZ(360deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(90deg) rotateZ(450deg);
  }
}
@keyframes huxy-text-3d-animate {
  0% {
    opacity: 1;
    transform: rotateX(90deg) rotateY(180deg) translateX(50%) scale(var(--size));
  }
  50% {
    opacity: 0.5;
    transform: rotateX(180deg) rotateY(180deg) translateX(50%) scale(0.2);
  }
  51% {
    opacity: 0.5;
    transform: rotateX(360deg) rotateY(180deg) translateX(50%) scale(0.2);
  }
  100% {
    opacity: 1;
    transform: rotateX(450deg) rotateY(180deg) translateX(50%) scale(var(--size));
  }
}
.huxy-text-3d {
  --bgColor: rgba(0, 0, 0, 0.8);
  --width: 500px;
  --padding: 50px;
  width: 100%;
  height: var(--width);
  background-color: var(--bgColor);
}
.huxy-text-3d .text-3d-container {
  margin: 0 auto;
  position: relative;
  width: var(--width);
  height: var(--width);
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  overflow: hidden;
  box-sizing: border-box;
}
.huxy-text-3d .text-3d-container .text-3d-item {
  --time: 10s;
  --center: 0px;
  --rotate: 0deg;
  --size: 1;
  --color: #fff;
  --delay: 0s;
  --current: 90deg;
  position: absolute;
  width: calc(var(--width) - var(--padding) * 2);
  height: calc(var(--width) - var(--padding) * 2);
  left: var(--padding);
  top: var(--padding);
  background-color: transparent;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateX(0deg) rotateY(90deg) rotateZ(var(--current));
  animation: huxy-text-3d var(--time) linear var(--delay) infinite;
}
.huxy-text-3d .text-3d-container .text-3d-item .text-3d-item-card {
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  transform: rotateX(0deg) rotateY(90deg) rotateZ(var(--rotate));
}
.huxy-text-3d .text-3d-container .text-3d-item .text-3d-item-card .animate-text {
  position: absolute;
  text-align: center;
  left: calc(50% - var(--center));
  bottom: 0;
  transform-origin: 50% 50%;
  transform: rotateX(var(--current)) rotateY(180deg) translateX(50%) scale(1);
  animation: huxy-text-3d-animate var(--time) linear var(--delay) infinite;
  display: block;
  font-size: 1.4rem;
  color: var(--color);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 1px 1px 0.1em currentColor;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
}
`,document.head.appendChild(t),window.__HUXY__.add("f30554")}import{jsx as U}from"react/jsx-runtime";var nt=()=>Math.random()-.5,je=()=>~~(nt()*c(5,10)*10),Re=()=>~~(nt()*c(2,8)*10),Ie=()=>(1-nt())*c(1.1,1.4,!1),Ae=t=>t?.length?v(t):s(),Le=({list:t=[],colors:n=[],width:e,padding:o,bgColor:r,style:a,...i})=>U("div",{className:"huxy-text-3d",style:{"--width":e,"--padding":o,"--bgColor":r,...a},...i,children:U("div",{className:"text-3d-container",children:t.map((d,l)=>{let h=d.time??c(6,24,!1).toFixed(2),x=d.delay??-c(0,h,!1).toFixed(2);return U("div",{className:"text-3d-item",style:{"--time":`${h}s`,"--center":d.center??`${je()}%`,"--rotate":d.rotate??`${Re()}deg`,"--size":d.size??Ie(),"--color":d.color??Ae(n),"--delay":`${x}s`},children:U("div",{className:"text-3d-item-card",children:U("span",{className:"link animate-text",children:d.label})})},d.label)})})}),Ze=Le;if(typeof document<"u"&&!window.__HUXY__?.has("490df8")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-text-filter {
  0% {
    letter-spacing: -2.2rem;
    filter: blur(0.3rem);
  }
  50% {
    filter: blur(0.5rem);
  }
  90%,
  100% {
    letter-spacing: 0.5rem;
    filter: blur(0rem);
  }
}
.hy-490df8-huxy-text-filter {
  --time: 3s;
  height: 32px;
  color: #ffffff;
  position: relative;
  filter: contrast(20);
  overflow: hidden;
}
.hy-490df8-text-filter {
  text-transform: uppercase;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  letter-spacing: -2.2rem;
  animation: huxy-text-filter var(--time) infinite alternate ease-in-out;
}
`,document.head.appendChild(t),window.__HUXY__.add("490df8")}import{jsx as Nt}from"react/jsx-runtime";var Me=({time:t="3s",style:n,className:e,children:o,...r})=>Nt("div",{className:`${void 0}${e?` ${e}`:""}`,style:{"--time":t,...n},...r,children:Nt("div",{className:void 0,children:o})}),Fe=Me;if(typeof document<"u"&&!window.__HUXY__?.has("94b80c")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-text-loading {
  0% {
    max-width: 0;
  }
}
.hy-94b80c-huxy-text-loading {
  --backColor: rgba(0, 0, 0, 0.2);
  --frontColor: #ffffff;
  --time: 4s;
  position: relative;
  color: var(--backColor);
  display: inline-block;
}
.huxy-text-loading::before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  color: var(--frontColor);
  animation: huxy-text-loading var(--time) linear infinite;
}
`,document.head.appendChild(t),window.__HUXY__.add("94b80c")}import{jsx as Oe}from"react/jsx-runtime";var De=({backColor:t="rgba(0, 0, 0, 0.3)",frontColor:n="rgba(255, 255, 255, 1)",time:e="4s",style:o,className:r,children:a,...i})=>Oe("div",{className:`${void 0}${r?` ${r}`:""}`,style:{"--backColor":t,"--frontColor":n,"--time":e,...o},...i,"data-text":a,children:a}),Pe=De;if(typeof document<"u"&&!window.__HUXY__?.has("9318f5")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes huxy-text-masked {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.hy-9318f5-huxy-text-masked {
  --startColor: #0ee5ff;
  --endColor: #f4ab20;
  --time: 6s;
  background-image: linear-gradient(to right, var(--startColor), var(--endColor) 50%, var(--startColor) 50%, var(--endColor) 100%, var(--startColor));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  animation: huxy-text-masked var(--time) infinite linear;
}
`,document.head.appendChild(t),window.__HUXY__.add("9318f5")}import{jsx as Je}from"react/jsx-runtime";var Ge=({startColor:t,endColor:n,style:e,className:o,children:r,...a})=>Je("div",{className:`${void 0}${o?` ${o}`:""}`,style:{"--startColor":t??s(),"--endColor":n??s(),...e},...a,children:r}),qe=Ge;if(typeof document<"u"&&!window.__HUXY__?.has("9d18f6")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-9d18f6-huxy-rate-score {
  --backColor: rgba(0, 0, 0, 0.2);
  --frontColor: #ffffff;
  --score: 0;
  position: relative;
  font-size: 2.4rem;
  color: var(--backColor);
  display: inline-block;
}
.huxy-rate-score::before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  width: var(--score);
  max-width: 100%;
  white-space: nowrap;
  color: var(--frontColor);
}
`,document.head.appendChild(t),window.__HUXY__.add("9d18f6")}import{jsx as Ve}from"react/jsx-runtime";var Ke=({score:t=0,backColor:n="rgba(0, 0, 0, 0.3)",frontColor:e="var(--yellow2)",style:o,className:r,children:a,backend:i,...d})=>Ve("div",{className:`${void 0}${r?` ${r}`:""}`,style:{"--backColor":n,"--frontColor":e,"--score":`${t}`.includes("%")?t:`${t*100}%`,...o},...d,"data-text":a,children:i??a}),Qe=Ke;export{Tn as AnimateBorder,In as Barchart,kn as BgBox,Ln as Card,Fn as Circle,ae as Container,hn as CornerBorder,j as Css3dModel,Pn as Dashboard,Pt as Fliper,bn as HalfBorder,Mt as IconAnimate,dn as IconCarousel,Ne as Light,Gn as List,ke as Loading,ve as Location,Kn as Piechart,te as Progress,Qe as RateScore,oe as Ring,ue as Search,He as Spot,le as Table,Se as Taiji,Ze as Text3d,Fe as TextFilter,Pe as TextLoading,qe as TextMasked,be as Time,zn as TitleBorder,sn as TitleHeader,he as Wave};
