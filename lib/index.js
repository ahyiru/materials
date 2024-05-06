import*as Gr from"react";var Vr={673:(d,s,t)=>{t.d(s,{A:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-3d-models {
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
`,""]);const c=e},92:(d,s,t)=>{t.d(s,{Ay:()=>M,Nr:()=>n,Wm:()=>x,aX:()=>f,fj:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.g394U {
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000;
}
.zasVJ {
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transition: transform 0.3s;
}
.C5n3b, .UdsvP {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.UdsvP {
  transform: rotateY(180deg);
}
.g394U:hover .zasVJ {
  transform: rotateY(180deg);
}
`,""]);var c="g394U",n="zasVJ",x="C5n3b",f="UdsvP";const M=e},316:(d,s,t)=>{t.d(s,{A:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.huxy-icon-animate-tooltip {
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
`,""]);const c=e},183:(d,s,t)=>{t.d(s,{A:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]);const c=e},871:(d,s,t)=>{t.d(s,{Ay:()=>f,DV:()=>c,Rn:()=>n,c6:()=>x});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-border-animate-dash {
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
.tF3eM {
  --borderColor: #03a9f3;
  --space: 2px;
  padding: var(--space);
  height: 100%;
}
.BHIzz {
  position: relative;
  height: 100%;
  padding: var(--space);
  box-sizing: border-box;
  border: 1px solid transparent;
  background: linear-gradient(90deg, var(--borderColor) 50%, transparent 0) repeat-x, linear-gradient(90deg, var(--borderColor) 50%, transparent 0) repeat-x, linear-gradient(0deg, var(--borderColor) 50%, transparent 0) repeat-y, linear-gradient(0deg, var(--borderColor) 50%, transparent 0) repeat-y;
  background-size: 8px 2px, 8px 2px, 2px 8px, 2px 8px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
}
.BHIzz {
  animation: huxy-border-animate-dash 0.5s infinite linear;
}
.Ltln8 {
  position: relative;
  height: 100%;
}
.Ltln8::before, .Ltln8::after {
  content: "";
  position: absolute;
  --size: calc(0px - var(--space));
  top: var(--size);
  left: var(--size);
  right: var(--size);
  bottom: var(--size);
  border: 2px solid var(--borderColor);
  border-radius: var(--space);
}
.Ltln8::before, .Ltln8::after {
  animation: huxy-border-animate-solid 6s infinite linear;
}
.Ltln8::before {
  animation-delay: -3s;
}
`,""]);var c="tF3eM",n="BHIzz",x="Ltln8";const f=e},302:(d,s,t)=>{t.d(s,{Ay:()=>T,Oe:()=>m,W6:()=>c,a6:()=>f,jX:()=>M,sI:()=>x,tY:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.UJpqU {
  --bgColor: var(--appBgColor);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  background-image: linear-gradient(var(--bgColor) 14px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);
  background-size: 15px 15px, 15px 15px;
}
.VXk7W {
  --bgColor: rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(var(--bgColor) 1px, transparent 0), linear-gradient(90deg, var(--bgColor) 1px, transparent 0);
  background-size: 30px 30px;
}
.q_1dQ {
  --bgColor: hsl(0, 0%, 100%);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  background-image: linear-gradient(var(--bgColor) 1px, transparent 0), linear-gradient(90deg, var(--bgColor) 1px, transparent 0), linear-gradient(var(--cubeColor) 1px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);
  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
}
.eBK09 {
  --bgColor: rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0), linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0);
  background-position: 0 0, 15px 15px;
  background-size: 30px 30px;
}
.o9pvC {
  --bgColor: hsl(0, 0%, 100%);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  --size: 20% 20%;
  background-image: linear-gradient(var(--bgColor) 15px, transparent 0), linear-gradient(90deg, var(--bgColor) 15px, transparent 0);
  background-size: var(--size);
  background-color: var(--cubeColor);
  /* background-position: -8px -8px,-8px -8px; */
}
.Po9ZE {
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
`,""]);var c="UJpqU",n="VXk7W",x="q_1dQ",f="eBK09",M="o9pvC",m="Po9ZE";const T=e},737:(d,s,t)=>{t.d(s,{Ay:()=>m,HA:()=>f,JJ:()=>M,Lm:()=>c,MX:()=>x,WO:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.YeHmo {
  --borderColor: var(--appColor);
  --borderRadius: 2px;
}
.vpTzN {
  position: relative;
  border: 2px solid transparent;
}
.S3bPv:before, .S3bPv:after {
  content: "";
  display: block;
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.S3bPv:before {
  bottom: -1px;
  left: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-bottom-left-radius: var(--borderRadius);
}
.S3bPv:after {
  top: -1px;
  right: -1px;
  border-top: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-top-right-radius: var(--borderRadius);
}
.WYlJx, .SMovL {
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.WYlJx {
  top: -1px;
  left: -1px;
  border-top: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-top-left-radius: var(--borderRadius);
}
.SMovL {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-bottom-right-radius: var(--borderRadius);
}
`,""]);var c="YeHmo",n="vpTzN",x="S3bPv",f="WYlJx",M="SMovL";const m=e},885:(d,s,t)=>{t.d(s,{Ay:()=>x,Lm:()=>c,OP:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.Usszw {
  --borderColor: var(--appColor);
  --borderRadius: 2px;
}
.XcsJP {
  position: relative;
  border: 2px solid transparent;
}
.XcsJP:before, .XcsJP:after {
  content: "";
  display: block;
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.XcsJP:before {
  bottom: -1px;
  left: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-bottom-left-radius: var(--borderRadius);
}
.XcsJP:after {
  top: -1px;
  right: -1px;
  border-top: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-top-right-radius: var(--borderRadius);
}
`,""]);var c="Usszw",n="XcsJP";const x=e},230:(d,s,t)=>{t.d(s,{Ay:()=>f,Qo:()=>c,d0:()=>n,fc:()=>x});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.WY0lD {
  --borderColor: rgba(0, 0, 0, 0.1);
  --borderSize: 2px;
  --space: 10px;
  --fontSize: 14px;
  font-size: var(--fontSize);
  position: relative;
  padding-top: 0.713em;
  height: 100%;
}
.WY0lD ._ORAK {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 3;
}
.WY0lD ._ORAK:before, .WY0lD ._ORAK:after {
  content: "";
  height: var(--borderSize);
  background: var(--borderColor);
  flex-grow: 1;
}
.WY0lD ._ORAK:before {
  margin-right: var(--space);
}
.WY0lD ._ORAK:after {
  margin-left: var(--space);
}
.WY0lD .Vggg7 {
  height: 100%;
  border-left: var(--borderSize) solid var(--borderColor);
  border-right: var(--borderSize) solid var(--borderColor);
  border-bottom: var(--borderSize) solid var(--borderColor);
}
`,""]);var c="WY0lD",n="_ORAK",x="Vggg7";const f=e},529:(d,s,t)=>{t.d(s,{Ay:()=>x,DD:()=>n,s5:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.MuUoF {
  --titleWidth: 280px;
  --titleHeight: 80px;
  --borderColor: rgba(0, 180, 220);
  height: var(--titleHeight);
  position: relative;
  z-index: 1;
}
.MuUoF:before {
  content: "";
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
.MuUoF .fM2FI {
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
.MuUoF .fM2FI:before, .MuUoF .fM2FI:after {
  content: "";
  position: absolute;
  height: 0;
  border-left: calc(var(--titleHeight) / 8) solid transparent;
  border-right: calc(var(--titleHeight) / 8) solid transparent;
  z-index: -1;
}
.MuUoF .fM2FI:before {
  width: 100%;
  left: 0;
  bottom: 0;
  border-top: calc(var(--titleHeight) / 4 - 1px) solid var(--borderColor);
}
.MuUoF .fM2FI:after {
  width: calc(100% - 2px);
  left: 1px;
  bottom: 1px;
  border-top: calc(var(--titleHeight) / 4 - 1px) solid var(--appBgColor);
}
`,""]);var c="MuUoF",n="fM2FI";const x=e},761:(d,s,t)=>{t.d(s,{Ay:()=>x,fV:()=>c,nb:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.huDNN {
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
.huDNN .V5Fq4 {
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
`,""]);var c="huDNN",n="V5Fq4";const x=e},960:(d,s,t)=>{t.d(s,{Ay:()=>T,DD:()=>M,Qq:()=>m,gY:()=>n,qF:()=>x,y8:()=>c,zS:()=>f});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.nnDaG {
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
.nnDaG .iJtPz {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--height);
  height: 100%;
}
.nnDaG .iJtPz .Bya6y {
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: var(--leftColor);
  margin: 20% auto;
}
.nnDaG .c6MGh {
  margin-left: var(--height);
  margin-top: calc(var(--height) * 0.2);
  height: calc(var(--height) * 0.6);
  padding: 0 10px;
  position: relative;
  overflow: hidden;
}
.nnDaG .c6MGh .sb1hm, .nnDaG .c6MGh .YDDrB {
  margin: 0;
  border-radius: 4px;
  background: var(--rightColor);
}
.nnDaG .c6MGh .sb1hm {
  font-size: 2.2rem;
  height: calc(var(--height) * 0.22);
  width: var(--topWidth);
  margin-top: calc(var(--height) * 0.05);
}
.nnDaG .c6MGh .YDDrB {
  font-size: 1.6rem;
  height: calc(var(--height) * 0.18);
  width: var(--bottomWidth);
  margin-top: calc(var(--height) * 0.1);
}
`,""]);var c="nnDaG",n="iJtPz",x="Bya6y",f="c6MGh",M="sb1hm",m="YDDrB";const T=e},202:(d,s,t)=>{t.d(s,{Ay:()=>x,T8:()=>c,c6:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-animate-border-circle-shadow {
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
.Krd0d {
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
.Krd0d::after {
  content: "";
  position: absolute;
  width: calc(var(--size) / 2 - 20px);
  height: calc(var(--size) / 2 - 20px);
  border-radius: 50%;
  background: var(--ballBgColor);
  border: var(--ballBorder) solid var(--ballBorderColor);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.Krd0d::after {
  animation: huxy-animate-border-circle-shadow 1.6s infinite;
}
.qcJ0N {
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
}
.qcJ0N {
  animation: huxy-animate-border-circle var(--time) linear infinite;
}
`,""]);var c="Krd0d",n="qcJ0N";const x=e},261:(d,s,t)=>{t.d(s,{Ay:()=>x,DD:()=>n,ao:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.myyKG {
  --bgColor: transparent;
  background: var(--bgColor);
  padding: 15px 20px;
}
.myyKG.AXWTP {
  --titleBgColor: rgba(0, 0, 0, 0.2);
  --width: 100px;
  --height: 20px;
  padding-top: calc(25px + var(--height));
}
.myyKG.AXWTP::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 20px;
  width: var(--width);
  height: var(--height);
  border-radius: 2px;
  background: var(--titleBgColor);
}
`,""]);var c="myyKG",n="AXWTP";const x=e},434:(d,s,t)=>{t.d(s,{Ay:()=>x,OH:()=>c,zx:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-skeleton-dashboard {
  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
}
.DYspm {
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
.DYspm::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--size) - var(--width) * 2);
  height: calc(var(--size) - var(--width) * 2);
  border-radius: 50%;
  background: conic-gradient(var(--color0) 0 62.4%, var(--color1) 0 100%);
}
.DYspm::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--size) - var(--width) * 2 - var(--space) * 2);
  height: calc(var(--size) - var(--width) * 2 - var(--space) * 2);
  border-radius: 50%;
  background: radial-gradient(var(--color0) 0%, var(--color0) 25%, transparent 25%, transparent 100%), conic-gradient(var(--color2) 0 12.5%, var(--color4) 0 25%, var(--color5) 0 37.5%, var(--color6) 0 50%, var(--color7) 0 62.4%, var(--color1) 0 100%);
}
.DYspm .Rg6DD {
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
.DYspm .Rg6DD::before {
  content: "";
  position: absolute;
  width: 5px;
  height: calc(var(--size) - var(--width) * 2 - var(--space));
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border-radius: 100% 100% 5% 5%;
  background: linear-gradient(180deg, #9bc7f6 0, #467dc6 50%, transparent 50%, transparent 100%);
}
.DYspm .Rg6DD::before {
  animation: huxy-skeleton-dashboard 4s cubic-bezier(0.93, 1.32, 0.89, 1.15) infinite;
}
`,""]);var c="DYspm",n="Rg6DD";const x=e},78:(d,s,t)=>{t.d(s,{Ay:()=>x,MY:()=>c,cw:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.YWtCI {
  --bgColor: transparent;
  --rightWidth: 100px;
  --itemHeight: 20px;
  --space: 20px;
  --leftColor: linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15));
  --rightColor: rgba(0, 0, 0, 0.2);
  background: var(--bgColor);
  padding: 15px var(--space);
}
.YWtCI .uBGAf {
  position: relative;
  border-radius: 2px;
  height: var(--itemHeight);
  width: calc(100% - var(--rightWidth) - var(--space));
  background: var(--leftColor);
}
.YWtCI .uBGAf::after {
  content: "";
  position: absolute;
  top: 0;
  right: calc(0px - var(--space) - var(--rightWidth));
  border-radius: 2px;
  height: var(--itemHeight);
  width: var(--rightWidth);
  background: var(--rightColor);
}
.YWtCI .uBGAf + .uBGAf {
  margin-top: calc(var(--space) - 2px);
}
`,""]);var c="YWtCI",n="uBGAf";const x=e},736:(d,s,t)=>{t.d(s,{A:()=>n,q:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.IQu9g {
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
`,""]);var c="IQu9g";const n=e},985:(d,s,t)=>{t.d(s,{A:()=>n,f:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-progress-wave {
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
.zFNbz {
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
  background: var(--bgColor);
  overflow: hidden;
  color: #fff;
}
.zFNbz::before, .zFNbz::after {
  content: "";
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
.zFNbz::before {
  counter-reset: percent var(--percent);
  content: counter(percent) "%";
  text-align: right;
}
.zFNbz::after {
  background: var(--waveColor);
  opacity: 0;
}
.zFNbz::after {
  animation: huxy-progress-wave var(--waveTime) ease-out infinite;
}
`,""]);var c="zFNbz";const n=e},804:(d,s,t)=>{t.d(s,{Ay:()=>x,HZ:()=>c,YZ:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-animate-border-ring {
  50% {
    opacity: 0.5;
  }
}
.WbFYr {
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
.WbFYr::after {
  position: absolute;
  border-radius: 50%;
  width: calc(var(--size) / 2);
  height: calc(var(--size) / 2);
  left: calc(var(--size) / 4);
  top: calc(var(--size) / 4);
  background: var(--bgColor);
  box-shadow: 0px 0px 4px 10px var(--shadowColor);
}
.WbFYr .XIIyj {
  --color: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: var(--itemWidth);
  height: var(--itemHeight);
  background: var(--color);
  top: calc(var(--size) / 2);
  left: 0;
  transform-origin: calc(var(--size) / 2) calc(var(--itemHeight) / 2);
}
.WbFYr .XIIyj {
  animation: huxy-animate-border-ring 2s infinite;
}
`,""]);var c="WbFYr",n="XIIyj";const x=e},826:(d,s,t)=>{t.d(s,{A:()=>n,K:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.suwUY {
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
.suwUY table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
.suwUY table th {
  padding: 15px 4%;
  background: var(--thBgColor);
}
.suwUY table th span {
  display: block;
  height: 18px;
  border-radius: 2px;
  background: var(--thItemColor);
}
.suwUY table td {
  padding: 12px 3%;
}
.suwUY table td span {
  display: block;
  height: 16px;
  border-radius: 2px;
  background: var(--tdItemColor);
}
.suwUY table tr {
  transition: background 0.3s;
}
.suwUY table tr:hover {
  background: var(--hoverColor);
}
.suwUY table tr:nth-of-type(odd) {
  background: var(--oddColor);
}
`,""]);var c="suwUY";const n=e},763:(d,s,t)=>{t.d(s,{A:()=>n,h:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-loading-wave {
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
.d9M97 {
  --waveColor: rgba(255, 255, 255, 0.1);
  --waveTime: 2s;
  position: relative;
}
.d9M97::after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--waveColor);
  border-radius: 2px;
  opacity: 0;
}
.d9M97::after {
  animation: huxy-loading-wave var(--waveTime) ease-out infinite;
}
`,""]);var c="d9M97";const n=e},875:(d,s,t)=>{t.d(s,{A:()=>n,V:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-conic-light-animate {
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
._ov1n {
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
}
._ov1n {
  animation: huxy-conic-light-animate var(--time) linear infinite;
}
._ov1n:before {
  --height: calc(var(--width) / var(--rotate));
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  background: var(--topColor);
}
._ov1n:after {
  --height: calc(var(--bottomWidth) / var(--rotate));
  content: "";
  position: absolute;
  left: var(--space);
  bottom: 0;
  width: var(--bottomWidth);
  height: var(--height);
  background: var(--bottomColor);
  border-radius: 50%;
}
`,""]);var c="_ov1n";const n=e},715:(d,s,t)=>{t.d(s,{Ay:()=>x,Y2:()=>c,iU:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-loading-ball {
  0%,
  40%,
  100% {
    transform: scale(0.2);
  }
  20% {
    transform: scale(1);
  }
}
.TikRE {
  --time: 1.6s;
  --size: 40px;
  --shadowSize: 50px;
  display: flex;
}
.TikRE .CyLSO {
  --delay: 0s;
  --bgColor: rgba(255, 255, 255, 0.8);
  background: var(--bgColor);
  box-shadow: 0 0 var(--shadowSize) var(--bgColor);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
}
.TikRE .CyLSO {
  animation: huxy-loading-ball var(--time) ease-in-out var(--delay) infinite;
}
`,""]);var c="TikRE",n="CyLSO";const x=e},358:(d,s,t)=>{t.d(s,{A:()=>n,l:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-location {
  50% {
    top: calc(50% - var(--size) * 0.25);
  }
}
@keyframes huxy-location-back {
  50% {
    transform: translateX(-50%) scale(0.5);
  }
}
.DdhmP {
  --size: 24px;
  --color: #ffffff;
  --bgColor: rgba(255, 255, 255, 0.2);
  --time: 2s;
  position: relative;
  display: inline-block;
  width: var(--size);
  height: var(--size);
}
.DdhmP:before, .DdhmP:after {
  position: absolute;
  content: "";
}
.DdhmP:before {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-46deg);
  width: calc(var(--size) * 0.75);
  height: calc(var(--size) * 0.75);
  border-radius: 100% 100% 100% 0;
  box-shadow: 0px 0px 0px 2px var(--color);
}
.DdhmP:before {
  animation: huxy-location var(--time) linear infinite;
}
.DdhmP:after {
  left: 50%;
  transform: translateX(-50%) scale(1);
  bottom: -50%;
  width: calc(var(--size) * 1.25);
  height: calc(var(--size) * 0.5);
  border-radius: 100%;
  background: var(--bgColor);
}
.DdhmP:after {
  animation: huxy-location-back var(--time) linear infinite;
}
`,""]);var c="DdhmP";const n=e},981:(d,s,t)=>{t.d(s,{A:()=>n,S:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-search {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
}
.r6hPc {
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
}
.r6hPc {
  animation: huxy-search var(--time) linear infinite alternate;
}
.r6hPc:before {
  position: absolute;
  content: "me";
  font-size: 12px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.r6hPc:after {
  position: absolute;
  content: "";
  width: var(--bar-width);
  height: var(--bar-height);
  background: var(--color);
  bottom: calc(var(--bar-width) - var(--bar-height));
  left: calc(var(--size) - var(--bar-width) * 2);
  border-radius: var(--bar-width);
  transform: rotate(-45deg);
}
`,""]);var c="r6hPc";const n=e},925:(d,s,t)=>{t.d(s,{Ay:()=>x,KC:()=>c,mj:()=>n});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-spot {
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
.JsH0T {
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
.JsH0T:before, .JsH0T:after {
  content: "";
  position: absolute;
  background: currentColor;
  border-radius: 50%;
}
.JsH0T:before, .JsH0T:after {
  animation: huxy-spot 1.5s ease-in-out infinite;
}
.JsH0T:before {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.JsH0T:after {
  width: 150%;
  height: 150%;
  left: -25%;
  top: -25%;
}
.S4gb8 {
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
}
.S4gb8 {
  animation: huxy-scale 1.5s ease-in-out infinite;
}
`,""]);var c="JsH0T",n="S4gb8";const x=e},816:(d,s,t)=>{t.d(s,{A:()=>n,f:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.x6fRL {
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
.x6fRL::before, .x6fRL::after {
  content: "";
  position: absolute;
  box-sizing: content-box;
  width: calc(var(--width) / 8);
  height: calc(var(--width) / 8);
  border-radius: 100%;
  top: 50%;
}
.x6fRL::before {
  left: 0;
  background: var(--black);
  border: calc(var(--width) * 3 / 16) solid var(--white);
}
.x6fRL::after {
  left: 50%;
  background: var(--white);
  border: calc(var(--width) * 3 / 16) solid var(--black);
}
`,""]);var c="x6fRL";const n=e},888:(d,s,t)=>{t.d(s,{A:()=>n,p:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-timer {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.R1ObR {
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
.R1ObR:after, .R1ObR:before {
  position: absolute;
  content: "";
  background: var(--color);
  height: var(--handWidth);
  transform-origin: 1px 1px;
  top: calc(var(--size) / 2 - var(--handWidth) / 2);
  left: calc(var(--size) / 2 - var(--handWidth) / 2);
}
.R1ObR:after {
  width: var(--maxHeight);
}
.R1ObR:after {
  animation: huxy-timer var(--maxTime) linear infinite;
}
.R1ObR:before {
  width: var(--minHeight);
}
.R1ObR:before {
  animation: huxy-timer var(--minTime) linear infinite;
}
`,""]);var c="R1ObR";const n=e},175:(d,s,t)=>{t.d(s,{A:()=>n,J:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`.q9v4I {
  --backColor: rgba(0, 0, 0, 0.2);
  --frontColor: #ffffff;
  --score: 0;
  position: relative;
  font-size: 2.4rem;
  color: var(--backColor);
  display: inline-block;
}
.q9v4I::before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  width: var(--score);
  max-width: 100%;
  white-space: nowrap;
  color: var(--frontColor);
}
`,""]);var c="q9v4I";const n=e},333:(d,s,t)=>{t.d(s,{A:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-text-3d {
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
`,""]);const c=e},588:(d,s,t)=>{t.d(s,{Ay:()=>x,Rz:()=>n,eq:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-text-filter {
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
._zrvj {
  --time: 3s;
  height: 32px;
  color: #ffffff;
  position: relative;
  filter: contrast(20);
  overflow: hidden;
}
.ww0tY {
  text-transform: uppercase;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  letter-spacing: -2.2rem;
}
.ww0tY {
  animation: huxy-text-filter var(--time) infinite alternate ease-in-out;
}
`,""]);var c="_zrvj",n="ww0tY";const x=e},722:(d,s,t)=>{t.d(s,{A:()=>n,e:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-text-loading {
  0% {
    max-width: 0;
  }
}
.ZYC7Y {
  --backColor: rgba(0, 0, 0, 0.2);
  --frontColor: #ffffff;
  --time: 4s;
  position: relative;
  color: var(--backColor);
  display: inline-block;
}
.ZYC7Y::before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  color: var(--frontColor);
}
.ZYC7Y::before {
  animation: huxy-text-loading var(--time) linear infinite;
}
`,""]);var c="ZYC7Y";const n=e},547:(d,s,t)=>{t.d(s,{A:()=>n,v:()=>c});var r=t(758),_=t.n(r),a=t(935),i=t.n(a),e=i()(_());e.push([d.id,`@keyframes huxy-text-masked {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.zg3Sy {
  --startColor: #0ee5ff;
  --endColor: #f4ab20;
  --time: 6s;
  background-image: linear-gradient(to right, var(--startColor), var(--endColor) 50%, var(--startColor) 50%, var(--endColor) 100%, var(--startColor));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
}
.zg3Sy {
  animation: huxy-text-masked var(--time) infinite linear;
}
`,""]);var c="zg3Sy";const n=e},935:d=>{d.exports=function(s){var t=[];return t.toString=function(){return this.map(function(_){var a="",i=typeof _[5]<"u";return _[4]&&(a+="@supports (".concat(_[4],") {")),_[2]&&(a+="@media ".concat(_[2]," {")),i&&(a+="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {")),a+=s(_),i&&(a+="}"),_[2]&&(a+="}"),_[4]&&(a+="}"),a}).join("")},t.i=function(_,a,i,e,c){typeof _=="string"&&(_=[[null,_,void 0]]);var n={};if(i)for(var x=0;x<this.length;x++){var f=this[x][0];f!=null&&(n[f]=!0)}for(var M=0;M<_.length;M++){var m=[].concat(_[M]);i&&n[m[0]]||(typeof c<"u"&&(typeof m[5]>"u"||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=c),a&&(m[2]&&(m[1]="@media ".concat(m[2]," {").concat(m[1],"}")),m[2]=a),e&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=e):m[4]="".concat(e)),t.push(m))}},t}},758:d=>{d.exports=function(s){return s[1]}},335:(d,s,t)=>{t(649);var r=Symbol.for("react.element"),_=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty;function i(e,c,n){var x,f={},M=null;n!==void 0&&(M=""+n),c.key!==void 0&&(M=""+c.key);for(x in c)a.call(c,x)&&x!=="key"&&(f[x]=c[x]);return c=f.ref,{$$typeof:r,type:e,key:M,ref:c!==void 0?c:null,props:f}}s.Fragment=_,s.jsx=i,s.jsxs=i},85:(d,s,t)=>{d.exports=t(335)},591:d=>{var s=[];function t(a){for(var i=-1,e=0;e<s.length;e++)if(s[e].identifier===a){i=e;break}return i}function r(a,i){for(var e={},c=[],n=0;n<a.length;n++){var x=a[n],f=i.base?x[0]+i.base:x[0],M=e[f]||0,m="".concat(f," ").concat(M);e[f]=M+1;var T=t(m),y={css:x[1],media:x[2],sourceMap:x[3],supports:x[4],layer:x[5]};if(T!==-1)s[T].references++,s[T].updater(y);else{var K=_(y,i);i.byIndex=n,s.splice(n,0,{identifier:m,updater:K,references:1})}c.push(m)}return c}function _(a,i){var e=i.domAPI(i);e.update(a);var c=function(x){if(x){if(x.css===a.css&&x.media===a.media&&x.sourceMap===a.sourceMap&&x.supports===a.supports&&x.layer===a.layer)return;e.update(a=x)}else e.remove()};return c}d.exports=function(a,i){i=i||{},a=a||[];var e=r(a,i);return function(n){n=n||[];for(var x=0;x<e.length;x++){var f=e[x],M=t(f);s[M].references--}for(var m=r(n,i),T=0;T<e.length;T++){var y=e[T],K=t(y);s[K].references===0&&(s[K].updater(),s.splice(K,1))}e=m}}},128:d=>{var s={};function t(_){if(typeof s[_]>"u"){var a=document.querySelector(_);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}s[_]=a}return s[_]}function r(_,a){var i=t(_);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}d.exports=r},51:d=>{function s(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}d.exports=s},855:(d,s,t)=>{function r(_){var a=t.nc;a&&_.setAttribute("nonce",a)}d.exports=r},740:d=>{function s(_,a,i){var e="";i.supports&&(e+="@supports (".concat(i.supports,") {")),i.media&&(e+="@media ".concat(i.media," {"));var c=typeof i.layer<"u";c&&(e+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),e+=i.css,c&&(e+="}"),i.media&&(e+="}"),i.supports&&(e+="}");var n=i.sourceMap;n&&typeof btoa<"u"&&(e+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),a.styleTagTransform(e,_,a.options)}function t(_){if(_.parentNode===null)return!1;_.parentNode.removeChild(_)}function r(_){if(typeof document>"u")return{update:function(){},remove:function(){}};var a=_.insertStyleElement(_);return{update:function(e){s(a,_,e)},remove:function(){t(a)}}}d.exports=r},656:d=>{function s(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}d.exports=s},649:d=>{var s=r=>{var _={};return b.d(_,r),_},t=r=>()=>r;d.exports=Gr}},rr={};function b(d){var s=rr[d];if(s!==void 0)return s.exports;var t=rr[d]={id:d,exports:{}};return Vr[d](t,t.exports,b),t.exports}b.n=d=>{var s=d&&d.__esModule?()=>d.default:()=>d;return b.d(s,{a:s}),s},b.d=(d,s)=>{for(var t in s)b.o(s,t)&&!b.o(d,t)&&Object.defineProperty(d,t,{enumerable:!0,get:s[t]})},b.o=(d,s)=>Object.prototype.hasOwnProperty.call(d,s),b.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},b.nc=void 0;var A={};(()=>{b.d(A,{sC:()=>xr,S9:()=>fr,ji:()=>vr,Zp:()=>gr,jl:()=>yr,mc:()=>Tr,ax:()=>cr,e8:()=>qt,xh:()=>Ar,Lv:()=>ar,C7:()=>pr,De:()=>or,yz:()=>dr,ve:()=>wr,B8:()=>Cr,Rh:()=>Wr,aZ:()=>Br,VJ:()=>Dr,ke:()=>Mr,LI:()=>Jr,Jn:()=>Or,vj:()=>Lr,P1:()=>Ur,XI:()=>Rr,cp:()=>zr,xw:()=>kr,U$:()=>Fr,E8:()=>Nr,dF:()=>Hr,gX:()=>jr,nQ:()=>hr,Ub:()=>lr,wH:()=>Sr});var d={};b.r(d),b.d(d,{"bg-box-cube":()=>B.a6,"bg-box-cubestrip":()=>B.sI,"bg-box-dot":()=>B.W6,"bg-box-grid":()=>B.jX,"bg-box-img":()=>B.Oe,"bg-box-strip":()=>B.tY,default:()=>ur});var s={};b.r(s),b.d(s,{default:()=>mr,"huxy-border-animate-dash":()=>w.Rn,"huxy-border-animate-solid":()=>w.c6,"huxy-border-wrap":()=>w.DV});var t={};b.r(t),b.d(t,{default:()=>Ir,"huxy-scale":()=>At.mj,"huxy-spot":()=>At.KC});var r=b(85);const a=o=>o?.$$typeof&&typeof o.$$typeof=="symbol"&&["react.transitional.element","react.element"].includes(o.$$typeof.description),e=(o,l="px")=>`${o}`.replace(l,"")-0;var c=b(591),n=b.n(c),x=b(740),f=b.n(x),M=b(128),m=b.n(M),T=b(855),y=b.n(T),K=b(51),C=b.n(K),er=b(656),P=b.n(er),Nt=b(673),X={};X.styleTagTransform=P(),X.setAttributes=y(),X.insert=m().bind(null,"head"),X.domAPI=f(),X.insertStyleElement=C();var Se=n()(Nt.A,X);const je=Nt.A&&Nt.A.locals?Nt.A.locals:void 0,qt=({list:o=[],size:l="360px",cardSize:u="42px",bottom:p="60px",style:v,...h})=>{const g=360/o.length;return(0,r.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":l,"--cardSize":u,"--bottom":p,...v},...h,children:(0,r.jsx)("div",{className:"model-container",children:o.map((E,D)=>(0,r.jsx)("div",{className:"model-item",style:{"--rotateY":`${g*D}deg`},children:(0,r.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:E.label,href:E.link,target:"_blank",children:[E.icon?(0,r.jsx)("img",{src:E.icon,alt:E.label}):null,a(E.icon)?E.icon:E.icon?(0,r.jsx)("img",{src:E.icon,alt:E.label}):null]})},E.label))})})};var Ht=b(316),Y={};Y.styleTagTransform=P(),Y.setAttributes=y(),Y.insert=m().bind(null,"head"),Y.domAPI=f(),Y.insertStyleElement=C();var Be=n()(Ht.A,Y);const We=Ht.A&&Ht.A.locals?Ht.A.locals:void 0,or=({objs:o=[],models:l=[],height:u="480px",style:p,className:v,...h})=>(0,r.jsxs)("div",{className:`huxy-icon-animate-container${v?` ${v}`:""}`,style:{"--height":u,...p},...h,children:[(0,r.jsx)("div",{className:"huxy-icon-animate-materiels",children:o.map(({value:g,label:E,icon:D,link:O,type:L,style:Lt})=>(0,r.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${g}${L?"":" obj-img"}`,tooltip:L?void 0:E,href:O,target:"_blank",style:Lt,children:a(D)?D:(0,r.jsx)("img",{src:D,alt:E})},E))}),(0,r.jsx)(qt,{list:l,size:`${e(u)-120}px`})]});var z=b(92),k={};k.styleTagTransform=P(),k.setAttributes=y(),k.insert=m().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=C();var Ue=n()(z.Ay,k);const ze=z.Ay&&z.Ay.locals?z.Ay.locals:void 0,ar=({front:o,back:l,...u})=>(0,r.jsx)("div",{className:z.fj,...u,children:(0,r.jsxs)("div",{className:z.Nr,children:[(0,r.jsx)("div",{className:z.Wm,children:o}),(0,r.jsx)("div",{className:z.aX,children:l})]})});var I=b(649);const sr=(o={})=>{const l=(0,I.useRef)(0),[u,p]=(0,I.useState)(o),v=(0,I.useCallback)(h=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>p(h))},[]);return(0,I.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[u,v]},ir=(o,l)=>{const u=(0,I.useRef)();(0,I.useEffect)(()=>{u.current=o},[o]),(0,I.useEffect)(()=>{if(l){const p=setInterval(()=>u.current(),l);return()=>clearInterval(p)}},[l])};var Jt=b(183),F={};F.styleTagTransform=P(),F.setAttributes=y(),F.insert=m().bind(null,"head"),F.domAPI=f(),F.insertStyleElement=C();var Xe=n()(Jt.A,F);const Ye=Jt.A&&Jt.A.locals?Jt.A.locals:void 0,nr=(o,l=60)=>(l=1.5*l,o.map((u,p)=>{const v=Math.random();let h=1;v<.3334?h=1.2:v<.6667&&(h=.8);const g=~~(p/3),E=p%3;let D=1.5*l*g;E===1&&(D+=l/2);const O=E*l+l/6*(E+1);return u.transform={x:D,y:O,s:h},u})),_r=(o,l=60)=>(l=2.25*l,o.map(u=>(u.transform.x-=2,u.transform.x+l<0&&(u.transform.x=~~(o.length/3)*l),u))),dr=({width:o=60,wait:l=56,list:u=[],className:p,...v})=>{const h=(0,I.useMemo)(()=>nr(u,o),[]),[g,E]=sr(h),[D,O]=(0,I.useState)(l);ir(()=>{const j=_r(g,o);E(j)},D);const L=j=>{O(null)},Lt=j=>{O(l)};return(0,r.jsx)("div",{className:`huxy-icon-carousel${p?` ${p}`:""}`,...v,children:(0,r.jsx)("div",{className:"icon-container",children:g.map((j,Zr)=>(0,r.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${Zr%3===0?"lt":"lb"}`,tooltip:j.label,style:{transform:`translate(${j.transform.x}px, ${j.transform.y}px) scale(${j.transform.s})`,width:o},onMouseEnter:L,onMouseLeave:Lt,href:j.link,target:"_blank",children:(0,r.jsx)("img",{src:j.icon,alt:j.label})},j.label))})})};var N=b(529),H={};H.styleTagTransform=P(),H.setAttributes=y(),H.insert=m().bind(null,"head"),H.domAPI=f(),H.insertStyleElement=C();var Fe=n()(N.Ay,H);const Ne=N.Ay&&N.Ay.locals?N.Ay.locals:void 0,lr=({title:o,borderColor:l,titleWidth:u,titleHeight:p,style:v,className:h,...g})=>(0,r.jsx)("div",{className:`${N.s5}${h?` ${h}`:""}`,style:{"--borderColor":l,"--titleWidth":u,"--titleHeight":p,...v},...g,children:(0,r.jsx)("h2",{className:N.DD,children:o})});var U=b(737),J={};J.styleTagTransform=P(),J.setAttributes=y(),J.insert=m().bind(null,"head"),J.domAPI=f(),J.insertStyleElement=C();var Je=n()(U.Ay,J);const Ze=U.Ay&&U.Ay.locals?U.Ay.locals:void 0,cr=({size:o="8px",borderColor:l="var(--appColor)",half1:u=!0,half2:p=!0,style:v,className:h,children:g,...E})=>(0,r.jsx)("div",{className:`${U.Lm}${h?` ${h}`:""}`,style:{"--cornerSize":o,"--borderColor":l,...v},...E,children:(0,r.jsxs)("div",{className:`${U.WO}${u?` ${U.MX}`:""}`,children:[p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:U.HA}),(0,r.jsx)("span",{className:U.JJ})]}):null,g]})});var Z=b(885),G={};G.styleTagTransform=P(),G.setAttributes=y(),G.insert=m().bind(null,"head"),G.domAPI=f(),G.insertStyleElement=C();var Ve=n()(Z.Ay,G);const Qe=Z.Ay&&Z.Ay.locals?Z.Ay.locals:void 0,pr=({size:o="8px",borderColor:l="var(--appColor)",style:u,className:p,children:v,...h})=>(0,r.jsx)("div",{className:`${Z.Lm}${p?` ${p}`:""}`,style:{"--cornerSize":o,"--borderColor":l,...u},...h,children:(0,r.jsx)("div",{className:Z.OP,children:v})});var B=b(302),V={};V.styleTagTransform=P(),V.setAttributes=y(),V.insert=m().bind(null,"head"),V.domAPI=f(),V.insertStyleElement=C();var to=n()(B.Ay,V);const ur=B.Ay&&B.Ay.locals?B.Ay.locals:void 0,vr=({type:o="dot",bgColor:l,cubeColor:u,url:p,style:v,className:h,children:g,...E})=>{o=p?"img":o;const D=p?{backgroundImage:`url(${p})`}:void 0;return(0,r.jsx)("div",{className:`${d[`bg-box-${o}`]}${h?` ${h}`:""}`,style:{"--bgColor":l,"--cubeColor":u,...D,...v},...E,children:g})};var $=b(230),Q={};Q.styleTagTransform=P(),Q.setAttributes=y(),Q.insert=m().bind(null,"head"),Q.domAPI=f(),Q.insertStyleElement=C();var eo=n()($.Ay,Q);const oo=$.Ay&&$.Ay.locals?$.Ay.locals:void 0,hr=({children:o,title:l,fontSize:u,borderSize:p,borderColor:v="var(--appColor)",space:h="10px",style:g,className:E,...D})=>(0,r.jsxs)("div",{className:`${$.Qo}${E?` ${E}`:""}`,style:{"--borderColor":v,"--space":h,"--fontSize":u,"--borderSize":p,...g},...D,children:[(0,r.jsx)("div",{className:$.d0,children:l}),(0,r.jsx)("div",{className:$.fc,children:o})]});var w=b(871),q={};q.styleTagTransform=P(),q.setAttributes=y(),q.insert=m().bind(null,"head"),q.domAPI=f(),q.insertStyleElement=C();var so=n()(w.Ay,q);const mr=w.Ay&&w.Ay.locals?w.Ay.locals:void 0,xr=({type:o="solid",space:l="2px",borderColor:u="var(--appColor)",style:p,className:v,children:h,...g})=>(0,r.jsx)("div",{className:`${w.DV}${v?` ${v}`:""}`,style:{"--space":l,"--borderColor":u,...p},...g,children:(0,r.jsx)("div",{className:s[`huxy-border-animate-${o==="dash"?"dash":"solid"}`],children:h})}),br=(o="",l=2,u="0")=>{const p=o.length;return p>=l?o:`${Array(l-p+1).join(u)}${o}`},R=()=>"#"+br((~~(Math.random()*(1<<24))).toString(16),6),S=(o=0,l=0,u=!0)=>(o<l&&(o=[l,l=o][0]),u?~~(Math.random()*(o-l+1))+l:Math.random()*(o-l)+l),Vt=(o=[])=>o[S(o.length-1)];var tt=b(761),rt={};rt.styleTagTransform=P(),rt.setAttributes=y(),rt.insert=m().bind(null,"head"),rt.domAPI=f(),rt.insertStyleElement=C();var po=n()(tt.Ay,rt);const uo=tt.Ay&&tt.Ay.locals?tt.Ay.locals:void 0,tr=o=>o?.length?Vt(o):R(),fr=({list:o=10,height:l="240px",space:u="25px",itemWidth:p="30px",colors:v=[],color:h,style:g,className:E,...D})=>(0,r.jsx)("div",{className:`${tt.fV}${E?` ${E}`:""}`,style:{"--height":l,...g},...D,children:(Array.isArray(o)?o:[...new Array(o)]).map((O,L)=>(0,r.jsx)("div",{className:tt.nb,style:{"--space":u,"--itemWidth":p,"--bgColor":O?.color??h??`linear-gradient(to top, ${tr(v)}, ${tr(v)})`,"--itemHeight":O?.height??`${S(15,100)}%`,left:`${L*(e(u)+e(p))}px`}},`huxy-skeleton-barchart-${L}`))});var W=b(960),et={};et.styleTagTransform=P(),et.setAttributes=y(),et.insert=m().bind(null,"head"),et.domAPI=f(),et.insertStyleElement=C();var ho=n()(W.Ay,et);const mo=W.Ay&&W.Ay.locals?W.Ay.locals:void 0,gr=({height:o="120px",leftColor:l,rightColor:u,topWidth:p,bottomWidth:v,style:h,className:g,...E})=>(0,r.jsxs)("div",{className:`${W.y8}${g?` ${g}`:""}`,style:{"--height":o,"--leftColor":l??R(),"--rightColor":u??R(),"--topWidth":p??`${S(30,60)}%`,"--bottomWidth":v??`${S(55,95)}%`,...h},...E,children:[(0,r.jsx)("div",{className:W.gY,children:(0,r.jsx)("div",{className:W.qF})}),(0,r.jsxs)("div",{className:W.zS,children:[(0,r.jsx)("h4",{className:W.DD}),(0,r.jsx)("p",{className:W.Qq})]})]});var ot=b(202),at={};at.styleTagTransform=P(),at.setAttributes=y(),at.insert=m().bind(null,"head"),at.domAPI=f(),at.insertStyleElement=C();var bo=n()(ot.Ay,at);const fo=ot.Ay&&ot.Ay.locals?ot.Ay.locals:void 0,Er=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],yr=({size:o="300px",space:l="8px",style:u,className:p,...v})=>{let h=e(l)*3;return(0,r.jsx)("div",{className:`${ot.T8}${p?` ${p}`:""}`,style:{"--size":o,...u},...v,children:Er.map((g,E)=>(h=h+e(g.borderWidth)*2+e(l)*2,(0,r.jsx)("div",{className:ot.c6,style:{"--itemSize":`calc(${o} - ${h}px)`,"--borderWidth":g.borderWidth,"--borderLeftColor":g.borderLeftColor,"--borderRightColor":g.borderRightColor,"--borderTopColor":g.borderTopColor,"--borderBottomColor":g.borderBottomColor,"--time":g.time,"--rotateStart":g.rotateStart,"--rotateEnd":g.rotateEnd}},`huxy-animate-border-circle-${E}`)))})};var st=b(434),it={};it.styleTagTransform=P(),it.setAttributes=y(),it.insert=m().bind(null,"head"),it.domAPI=f(),it.insertStyleElement=C();var Eo=n()(st.Ay,it);const yo=st.Ay&&st.Ay.locals?st.Ay.locals:void 0,Ar=({size:o="400px",width:l="20px",space:u="20px",colors:p=[],style:v,className:h,...g})=>(0,r.jsx)("div",{className:`${st.OH}${h?` ${h}`:""}`,style:{"--size":o,"--width":l,"--space":u,"--color1":p[0],"--color2":p[1],"--color3":p[2],"--color4":p[3],"--color5":p[4],"--color6":p[5],"--color7":p[6],...v},...g,children:(0,r.jsx)("div",{className:st.zx})});var nt=b(78),_t={};_t.styleTagTransform=P(),_t.setAttributes=y(),_t.insert=m().bind(null,"head"),_t.domAPI=f(),_t.insertStyleElement=C();var Co=n()(nt.Ay,_t);const Po=nt.Ay&&nt.Ay.locals?nt.Ay.locals:void 0,Cr=({row:o=8,leftColor:l="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:u="rgba(0, 0, 0, 0.2)",rightWidth:p="100px",itemHeight:v="20px",space:h="20px",className:g,...E})=>(0,r.jsx)("div",{className:`${nt.MY}${g?` ${g}`:""}`,style:{"--rightWidth":p,"--itemHeight":v,"--space":h,"--leftColor":l,"--rightColor":u},...E,children:[...new Array(o)].map((D,O)=>(0,r.jsx)("div",{className:nt.cw},`huxy-skeleton-list-${O}`))}),Pr=(o,l=100)=>{const u=[];return[...new Array(o)].map((p,v)=>{v===o-1?u[v]=l:(u[v]=S(1,l-1),l-=u[v])}),u};var Bt=b(736),dt={};dt.styleTagTransform=P(),dt.setAttributes=y(),dt.insert=m().bind(null,"head"),dt.domAPI=f(),dt.insertStyleElement=C();var Oo=n()(Bt.A,dt);const To=Bt.A&&Bt.A.locals?Bt.A.locals:void 0,Zt=o=>o?.length?Vt(o):R(),lt=Pr(4),Dr=({height:o,colors:l=[],style:u,className:p,...v})=>(0,r.jsx)("div",{className:`${Bt.q}${p?` ${p}`:""}`,style:{"--height":o,"--color1":Zt(l),"--color2":Zt(l),"--color3":Zt(l),"--color4":Zt(l),"--percent1":`${lt[0]}%`,"--percent2":`${lt[0]+lt[1]}%`,"--percent3":`${lt[0]+lt[1]+lt[2]}%`,"--percent4":"100%",...u},...v});var Wt=b(985),ct={};ct.styleTagTransform=P(),ct.setAttributes=y(),ct.insert=m().bind(null,"head"),ct.domAPI=f(),ct.insertStyleElement=C();var So=n()(Wt.A,ct);const jo=Wt.A&&Wt.A.locals?Wt.A.locals:void 0,Mr=({percent:o,height:l="20px",bgColor:u="rgba(0, 0, 0, 0.15)",progressColor:p,borderRadius:v="4px",waveColor:h="rgba(255, 255, 255, 0.2)",waveTime:g="3s",style:E,className:D,...O})=>(0,r.jsx)("div",{className:`${Wt.f}${D?` ${D}`:""}`,style:{"--percent":o??S(33,99),"--height":l,"--bgColor":u,"--progressColor":p??R(),"--borderRadius":v,"--waveColor":h,"--waveTime":g,...E},...O});var pt=b(804),ut={};ut.styleTagTransform=P(),ut.setAttributes=y(),ut.insert=m().bind(null,"head"),ut.domAPI=f(),ut.insertStyleElement=C();var Bo=n()(pt.Ay,ut);const Wo=pt.Ay&&pt.Ay.locals?pt.Ay.locals:void 0,Or=({list:o=60,size:l="300px",itemWidth:u="30px",itemHeight:p="4px",bgColor:v="rgba(255, 255, 255 , 0.9)",shadowColor:h="rgba(255, 255, 255 , 0.6)",color:g,style:E,className:D,...O})=>(o=Array.isArray(o)?o:[...new Array(o)],(0,r.jsx)("div",{className:`${pt.HZ}${D?` ${D}`:""}`,style:{"--size":l,"--itemWidth":u,"--itemHeight":p,"--bgColor":v,"--shadowColor":h,...E},...O,children:o.map((L,Lt)=>(0,r.jsx)("div",{className:pt.YZ,style:{"--color":L?.color??g??R(),transform:`rotate(${360/o.length*Lt}deg)`}},`huxy-animate-border-ring-${Lt}`))}));var vt=b(261),ht={};ht.styleTagTransform=P(),ht.setAttributes=y(),ht.insert=m().bind(null,"head"),ht.domAPI=f(),ht.insertStyleElement=C();var Uo=n()(vt.Ay,ht);const zo=vt.Ay&&vt.Ay.locals?vt.Ay.locals:void 0,Tr=({children:o,hasTitle:l,titleBgColor:u,style:p,className:v,...h})=>(0,r.jsx)("div",{className:`${vt.ao}${l?` ${vt.DD}`:""}${v?` ${v}`:""}`,style:{"--titleBgColor":u??R(),...p},...h,children:o});var It=b(826),mt={};mt.styleTagTransform=P(),mt.setAttributes=y(),mt.insert=m().bind(null,"head"),mt.domAPI=f(),mt.insertStyleElement=C();var Ko=n()(It.A,mt);const $o=It.A&&It.A.locals?It.A.locals:void 0,Rr=({row:o=6,col:l=8,...u})=>(0,r.jsx)("div",{className:It.K,...u,children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:[...new Array(l)].map((p,v)=>(0,r.jsx)("th",{children:(0,r.jsx)("span",{})},`skeleton-table-th-${v}`))})}),(0,r.jsx)("tbody",{children:[...new Array(o)].map((p,v)=>(0,r.jsx)("tr",{children:[...new Array(l)].map((h,g)=>(0,r.jsx)("td",{children:(0,r.jsx)("span",{})},`skeleton-table-tr-${v}-${g}`))},`tr-${v}`))})]})});var Ut=b(763),xt={};xt.styleTagTransform=P(),xt.setAttributes=y(),xt.insert=m().bind(null,"head"),xt.domAPI=f(),xt.insertStyleElement=C();var Yo=n()(Ut.A,xt);const ko=Ut.A&&Ut.A.locals?Ut.A.locals:void 0,Sr=({color:o="rgba(255, 255, 255, 0.1)",delay:l="2s",style:u,className:p,children:v,...h})=>(0,r.jsx)("div",{className:`${Ut.h}${p?` ${p}`:""}`,style:{"--waveColor":o,"--waveTime":l,...u},...h,children:v});var zt=b(888),bt={};bt.styleTagTransform=P(),bt.setAttributes=y(),bt.insert=m().bind(null,"head"),bt.domAPI=f(),bt.insertStyleElement=C();var No=n()(zt.A,bt);const Ho=zt.A&&zt.A.locals?zt.A.locals:void 0,jr=o=>(0,r.jsx)("span",{className:zt.p,...o});var wt=b(981),ft={};ft.styleTagTransform=P(),ft.setAttributes=y(),ft.insert=m().bind(null,"head"),ft.domAPI=f(),ft.insertStyleElement=C();var Zo=n()(wt.A,ft);const Go=wt.A&&wt.A.locals?wt.A.locals:void 0,Lr=o=>(0,r.jsx)("span",{className:wt.S,...o});var Kt=b(358),gt={};gt.styleTagTransform=P(),gt.setAttributes=y(),gt.insert=m().bind(null,"head"),gt.domAPI=f(),gt.insertStyleElement=C();var Qo=n()(Kt.A,gt);const qo=Kt.A&&Kt.A.locals?Kt.A.locals:void 0,Br=o=>(0,r.jsx)("span",{className:Kt.l,...o});var Et=b(715),yt={};yt.styleTagTransform=P(),yt.setAttributes=y(),yt.insert=m().bind(null,"head"),yt.domAPI=f(),yt.insertStyleElement=C();var ra=n()(Et.Ay,yt);const ea=Et.Ay&&Et.Ay.locals?Et.Ay.locals:void 0,Wr=({list:o=7,size:l="40px",shadowSize:u="50px",time:p="1.6s",style:v,className:h,...g})=>(p=e(p,"s"),(0,r.jsx)("div",{className:`${Et.Y2}${h?` ${h}`:""}`,style:{"--size":l,"--shadowSize":u,"--time":`${p}s`,...v},...g,children:(Array.isArray(o)?o:[...new Array(o)]).map((E,D)=>(0,r.jsx)("div",{className:Et.iU,style:{"--delay":E?.delay??`${p/((o?.length??o)+1)*(D+1)-p}s`,"--bgColor":E?.color??R()}},`huxy-loading-ball-${D}`))}));var At=b(925),Ct={};Ct.styleTagTransform=P(),Ct.setAttributes=y(),Ct.insert=m().bind(null,"head"),Ct.domAPI=f(),Ct.insertStyleElement=C();var aa=n()(At.Ay,Ct);const Ir=At.Ay&&At.Ay.locals?At.Ay.locals:void 0,Ur=({type:o="spot",size:l,color:u,shadowColor:p,style:v,className:h,...g})=>(0,r.jsx)("span",{className:`${t[`huxy-${o}`]}${h?` ${h}`:""}`,style:{"--size":l??`${S(6,30)}px`,"--color":u??R(),"--shadowColor":p??R(),...v},...g});var $t=b(816),Pt={};Pt.styleTagTransform=P(),Pt.setAttributes=y(),Pt.insert=m().bind(null,"head"),Pt.domAPI=f(),Pt.insertStyleElement=C();var ia=n()($t.A,Pt);const na=$t.A&&$t.A.locals?$t.A.locals:void 0,zr=({width:o,border:l,black:u,white:p,style:v,className:h,...g})=>(0,r.jsx)("div",{className:`${$t.f} ${h}`,style:{"--width":o,"--border":l,"--black":u,"--white":p,...v},...g});var Xt=b(875),Dt={};Dt.styleTagTransform=P(),Dt.setAttributes=y(),Dt.insert=m().bind(null,"head"),Dt.domAPI=f(),Dt.insertStyleElement=C();var da=n()(Xt.A,Dt);const la=Xt.A&&Xt.A.locals?Xt.A.locals:void 0,wr=({width:o="200px",height:l="180px",space:u="12%",bgColor:p,style:v,className:h,...g})=>(0,r.jsx)("div",{className:`${Xt.V}${h?` ${h}`:""}`,style:{"--width":o,"--height":l,"--space":u,"--bgColor":p,...v},...g});var Gt=b(333),Mt={};Mt.styleTagTransform=P(),Mt.setAttributes=y(),Mt.insert=m().bind(null,"head"),Mt.domAPI=f(),Mt.insertStyleElement=C();var pa=n()(Gt.A,Mt);const ua=Gt.A&&Gt.A.locals?Gt.A.locals:void 0,Qt=()=>Math.random()-.5,Kr=()=>~~(Qt()*S(5,10)*10),$r=()=>~~(Qt()*S(2,8)*10),Xr=()=>(1-Qt())*S(1.1,1.4,!1),Yr=o=>o?.length?Vt(o):R(),kr=({list:o=[],colors:l=[],width:u,padding:p,bgColor:v,style:h,...g})=>(0,r.jsx)("div",{className:"huxy-text-3d",style:{"--width":u,"--padding":p,"--bgColor":v,...h},...g,children:(0,r.jsx)("div",{className:"text-3d-container",children:o.map((E,D)=>{const O=E.time??S(6,24,!1).toFixed(2),L=E.delay??-S(0,O,!1).toFixed(2);return(0,r.jsx)("div",{className:"text-3d-item",style:{"--time":`${O}s`,"--center":E.center??`${Kr()}%`,"--rotate":E.rotate??`${$r()}deg`,"--size":E.size??Xr(),"--color":E.color??Yr(l),"--delay":`${L}s`},children:(0,r.jsx)("div",{className:"text-3d-item-card",children:(0,r.jsx)("span",{className:"link animate-text",children:E.label})})},E.label)})})});var Ot=b(588),Tt={};Tt.styleTagTransform=P(),Tt.setAttributes=y(),Tt.insert=m().bind(null,"head"),Tt.domAPI=f(),Tt.insertStyleElement=C();var ha=n()(Ot.Ay,Tt);const ma=Ot.Ay&&Ot.Ay.locals?Ot.Ay.locals:void 0,Fr=({time:o="3s",style:l,className:u,children:p,...v})=>(0,r.jsx)("div",{className:`${Ot.eq}${u?` ${u}`:""}`,style:{"--time":o,...l},...v,children:(0,r.jsx)("div",{className:Ot.Rz,children:p})});var Yt=b(722),Rt={};Rt.styleTagTransform=P(),Rt.setAttributes=y(),Rt.insert=m().bind(null,"head"),Rt.domAPI=f(),Rt.insertStyleElement=C();var ba=n()(Yt.A,Rt);const fa=Yt.A&&Yt.A.locals?Yt.A.locals:void 0,Nr=({backColor:o="rgba(0, 0, 0, 0.3)",frontColor:l="rgba(255, 255, 255, 1)",time:u="4s",style:p,className:v,children:h,...g})=>(0,r.jsx)("div",{className:`${Yt.e}${v?` ${v}`:""}`,style:{"--backColor":o,"--frontColor":l,"--time":u,...p},...g,"data-text":h,children:h});var kt=b(547),St={};St.styleTagTransform=P(),St.setAttributes=y(),St.insert=m().bind(null,"head"),St.domAPI=f(),St.insertStyleElement=C();var Ea=n()(kt.A,St);const ya=kt.A&&kt.A.locals?kt.A.locals:void 0,Hr=({startColor:o,endColor:l,style:u,className:p,children:v,...h})=>(0,r.jsx)("div",{className:`${kt.v}${p?` ${p}`:""}`,style:{"--startColor":o??R(),"--endColor":l??R(),...u},...h,children:v});var Ft=b(175),jt={};jt.styleTagTransform=P(),jt.setAttributes=y(),jt.insert=m().bind(null,"head"),jt.domAPI=f(),jt.insertStyleElement=C();var Ca=n()(Ft.A,jt);const Pa=Ft.A&&Ft.A.locals?Ft.A.locals:void 0,Jr=({score:o=0,backColor:l="rgba(0, 0, 0, 0.3)",frontColor:u="var(--yellow2)",style:p,className:v,children:h,backend:g,...E})=>(0,r.jsx)("div",{className:`${Ft.J}${v?` ${v}`:""}`,style:{"--backColor":l,"--frontColor":u,"--score":`${o}`.includes("%")?o:`${o*100}%`,...p},...E,"data-text":h,children:g??h})})();var Qr=A.sC,qr=A.S9,te=A.ji,re=A.Zp,ee=A.jl,oe=A.mc,ae=A.ax,se=A.e8,ie=A.xh,ne=A.Lv,_e=A.C7,de=A.De,le=A.yz,ce=A.ve,pe=A.B8,ue=A.Rh,ve=A.aZ,he=A.VJ,me=A.ke,xe=A.LI,be=A.Jn,fe=A.vj,ge=A.P1,Ee=A.XI,ye=A.cp,Ae=A.xw,Ce=A.U$,Pe=A.E8,De=A.dF,Me=A.gX,Oe=A.nQ,Te=A.Ub,Re=A.wH;export{Qr as AnimateBorder,qr as Barchart,te as BgBox,re as Card,ee as Circle,oe as Container,ae as CornerBorder,se as Css3dModel,ie as Dashboard,ne as Fliper,_e as HalfBorder,de as IconAnimate,le as IconCarousel,ce as Light,pe as List,ue as Loading,ve as Location,he as Piechart,me as Progress,xe as RateScore,be as Ring,fe as Search,ge as Spot,Ee as Table,ye as Taiji,Ae as Text3d,Ce as TextFilter,Pe as TextLoading,De as TextMasked,Me as Time,Oe as TitleBorder,Te as TitleHeader,Re as Wave};
