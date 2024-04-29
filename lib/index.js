import*as Gr from"react";var Vr={673:(d,s,t)=>{t.d(s,{A:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-3d-models {
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
`,""]);const u=e},92:(d,s,t)=>{t.d(s,{Ay:()=>M,Nr:()=>i,Wm:()=>f,aX:()=>x,fj:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.g394U {
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
`,""]);var u="g394U",i="zasVJ",f="C5n3b",x="UdsvP";const M=e},316:(d,s,t)=>{t.d(s,{A:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.huxy-icon-animate-tooltip {
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
`,""]);const u=e},183:(d,s,t)=>{t.d(s,{A:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]);const u=e},871:(d,s,t)=>{t.d(s,{Ay:()=>x,DV:()=>u,Rn:()=>i,c6:()=>f});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-border-animate-dash {
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
`,""]);var u="tF3eM",i="BHIzz",f="Ltln8";const x=e},302:(d,s,t)=>{t.d(s,{Ay:()=>O,Oe:()=>v,W6:()=>u,a6:()=>x,jX:()=>M,sI:()=>f,tY:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.UJpqU {
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
`,""]);var u="UJpqU",i="VXk7W",f="q_1dQ",x="eBK09",M="o9pvC",v="Po9ZE";const O=e},737:(d,s,t)=>{t.d(s,{Ay:()=>v,HA:()=>x,JJ:()=>M,Lm:()=>u,MX:()=>f,WO:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.YeHmo {
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
`,""]);var u="YeHmo",i="vpTzN",f="S3bPv",x="WYlJx",M="SMovL";const v=e},885:(d,s,t)=>{t.d(s,{Ay:()=>f,Lm:()=>u,OP:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.Usszw {
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
`,""]);var u="Usszw",i="XcsJP";const f=e},230:(d,s,t)=>{t.d(s,{Ay:()=>x,Qo:()=>u,d0:()=>i,fc:()=>f});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.WY0lD {
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
`,""]);var u="WY0lD",i="_ORAK",f="Vggg7";const x=e},529:(d,s,t)=>{t.d(s,{Ay:()=>f,DD:()=>i,s5:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.MuUoF {
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
`,""]);var u="MuUoF",i="fM2FI";const f=e},761:(d,s,t)=>{t.d(s,{Ay:()=>f,fV:()=>u,nb:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.huDNN {
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
`,""]);var u="huDNN",i="V5Fq4";const f=e},960:(d,s,t)=>{t.d(s,{Ay:()=>O,DD:()=>M,Qq:()=>v,gY:()=>i,qF:()=>f,y8:()=>u,zS:()=>x});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.nnDaG {
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
`,""]);var u="nnDaG",i="iJtPz",f="Bya6y",x="c6MGh",M="sb1hm",v="YDDrB";const O=e},202:(d,s,t)=>{t.d(s,{Ay:()=>f,T8:()=>u,c6:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]);var u="Krd0d",i="qcJ0N";const f=e},261:(d,s,t)=>{t.d(s,{Ay:()=>f,DD:()=>i,ao:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.myyKG {
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
`,""]);var u="myyKG",i="AXWTP";const f=e},434:(d,s,t)=>{t.d(s,{Ay:()=>f,OH:()=>u,zx:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-skeleton-dashboard {
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
`,""]);var u="DYspm",i="Rg6DD";const f=e},78:(d,s,t)=>{t.d(s,{Ay:()=>f,MY:()=>u,cw:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.YWtCI {
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
`,""]);var u="YWtCI",i="uBGAf";const f=e},736:(d,s,t)=>{t.d(s,{A:()=>i,q:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.IQu9g {
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
`,""]);var u="IQu9g";const i=e},985:(d,s,t)=>{t.d(s,{A:()=>i,f:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-progress-wave {
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
`,""]);var u="zFNbz";const i=e},804:(d,s,t)=>{t.d(s,{Ay:()=>f,HZ:()=>u,YZ:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-animate-border-ring {
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
`,""]);var u="WbFYr",i="XIIyj";const f=e},826:(d,s,t)=>{t.d(s,{A:()=>i,K:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.suwUY {
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
`,""]);var u="suwUY";const i=e},763:(d,s,t)=>{t.d(s,{A:()=>i,h:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-loading-wave {
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
`,""]);var u="d9M97";const i=e},875:(d,s,t)=>{t.d(s,{A:()=>i,V:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-conic-light-animate {
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
`,""]);var u="_ov1n";const i=e},715:(d,s,t)=>{t.d(s,{Ay:()=>f,Y2:()=>u,iU:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-loading-ball {
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
`,""]);var u="TikRE",i="CyLSO";const f=e},358:(d,s,t)=>{t.d(s,{A:()=>i,l:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-location {
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
`,""]);var u="DdhmP";const i=e},981:(d,s,t)=>{t.d(s,{A:()=>i,S:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-search {
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
`,""]);var u="r6hPc";const i=e},925:(d,s,t)=>{t.d(s,{Ay:()=>f,KC:()=>u,mj:()=>i});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-spot {
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
`,""]);var u="JsH0T",i="S4gb8";const f=e},816:(d,s,t)=>{t.d(s,{A:()=>i,f:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.x6fRL {
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
`,""]);var u="x6fRL";const i=e},888:(d,s,t)=>{t.d(s,{A:()=>i,p:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-timer {
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
`,""]);var u="R1ObR";const i=e},175:(d,s,t)=>{t.d(s,{A:()=>i,J:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`.q9v4I {
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
`,""]);var u="q9v4I";const i=e},333:(d,s,t)=>{t.d(s,{A:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-text-3d {
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
`,""]);const u=e},588:(d,s,t)=>{t.d(s,{Ay:()=>f,Rz:()=>i,eq:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-text-filter {
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
`,""]);var u="_zrvj",i="ww0tY";const f=e},722:(d,s,t)=>{t.d(s,{A:()=>i,e:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-text-loading {
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
`,""]);var u="ZYC7Y";const i=e},547:(d,s,t)=>{t.d(s,{A:()=>i,v:()=>u});var r=t(758),_=t.n(r),a=t(935),n=t.n(a),e=n()(_());e.push([d.id,`@keyframes huxy-text-masked {
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
`,""]);var u="zg3Sy";const i=e},935:d=>{d.exports=function(s){var t=[];return t.toString=function(){return this.map(function(_){var a="",n=typeof _[5]<"u";return _[4]&&(a+="@supports (".concat(_[4],") {")),_[2]&&(a+="@media ".concat(_[2]," {")),n&&(a+="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {")),a+=s(_),n&&(a+="}"),_[2]&&(a+="}"),_[4]&&(a+="}"),a}).join("")},t.i=function(_,a,n,e,u){typeof _=="string"&&(_=[[null,_,void 0]]);var i={};if(n)for(var f=0;f<this.length;f++){var x=this[f][0];x!=null&&(i[x]=!0)}for(var M=0;M<_.length;M++){var v=[].concat(_[M]);n&&i[v[0]]||(typeof u<"u"&&(typeof v[5]>"u"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=u),a&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=a),e&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=e):v[4]="".concat(e)),t.push(v))}},t}},758:d=>{d.exports=function(s){return s[1]}},335:(d,s,t)=>{var r=t(649),_=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,e=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(f,x,M){var v,O={},y=null,B=null;M!==void 0&&(y=""+M),x.key!==void 0&&(y=""+x.key),x.ref!==void 0&&(B=x.ref);for(v in x)n.call(x,v)&&!u.hasOwnProperty(v)&&(O[v]=x[v]);if(f&&f.defaultProps)for(v in x=f.defaultProps,x)O[v]===void 0&&(O[v]=x[v]);return{$$typeof:_,type:f,key:y,ref:B,props:O,_owner:e.current}}s.Fragment=a,s.jsx=i,s.jsxs=i},85:(d,s,t)=>{d.exports=t(335)},591:d=>{var s=[];function t(a){for(var n=-1,e=0;e<s.length;e++)if(s[e].identifier===a){n=e;break}return n}function r(a,n){for(var e={},u=[],i=0;i<a.length;i++){var f=a[i],x=n.base?f[0]+n.base:f[0],M=e[x]||0,v="".concat(x," ").concat(M);e[x]=M+1;var O=t(v),y={css:f[1],media:f[2],sourceMap:f[3],supports:f[4],layer:f[5]};if(O!==-1)s[O].references++,s[O].updater(y);else{var B=_(y,n);n.byIndex=i,s.splice(i,0,{identifier:v,updater:B,references:1})}u.push(v)}return u}function _(a,n){var e=n.domAPI(n);e.update(a);var u=function(f){if(f){if(f.css===a.css&&f.media===a.media&&f.sourceMap===a.sourceMap&&f.supports===a.supports&&f.layer===a.layer)return;e.update(a=f)}else e.remove()};return u}d.exports=function(a,n){n=n||{},a=a||[];var e=r(a,n);return function(i){i=i||[];for(var f=0;f<e.length;f++){var x=e[f],M=t(x);s[M].references--}for(var v=r(i,n),O=0;O<e.length;O++){var y=e[O],B=t(y);s[B].references===0&&(s[B].updater(),s.splice(B,1))}e=v}}},128:d=>{var s={};function t(_){if(typeof s[_]>"u"){var a=document.querySelector(_);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}s[_]=a}return s[_]}function r(_,a){var n=t(_);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}d.exports=r},51:d=>{function s(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}d.exports=s},855:(d,s,t)=>{function r(_){var a=t.nc;a&&_.setAttribute("nonce",a)}d.exports=r},740:d=>{function s(_,a,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var u=typeof n.layer<"u";u&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,u&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var i=n.sourceMap;i&&typeof btoa<"u"&&(e+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),a.styleTagTransform(e,_,a.options)}function t(_){if(_.parentNode===null)return!1;_.parentNode.removeChild(_)}function r(_){if(typeof document>"u")return{update:function(){},remove:function(){}};var a=_.insertStyleElement(_);return{update:function(e){s(a,_,e)},remove:function(){t(a)}}}d.exports=r},656:d=>{function s(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}d.exports=s},649:d=>{var s=r=>{var _={};return b.d(_,r),_},t=r=>()=>r;d.exports=Gr}},rr={};function b(d){var s=rr[d];if(s!==void 0)return s.exports;var t=rr[d]={id:d,exports:{}};return Vr[d](t,t.exports,b),t.exports}b.n=d=>{var s=d&&d.__esModule?()=>d.default:()=>d;return b.d(s,{a:s}),s},b.d=(d,s)=>{for(var t in s)b.o(s,t)&&!b.o(d,t)&&Object.defineProperty(d,t,{enumerable:!0,get:s[t]})},b.o=(d,s)=>Object.prototype.hasOwnProperty.call(d,s),b.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},b.nc=void 0;var A={};(()=>{b.d(A,{sC:()=>xr,S9:()=>br,ji:()=>vr,Zp:()=>gr,jl:()=>yr,mc:()=>Tr,ax:()=>cr,e8:()=>qt,xh:()=>Ar,Lv:()=>ar,C7:()=>pr,De:()=>or,yz:()=>dr,ve:()=>wr,B8:()=>Cr,Rh:()=>Wr,aZ:()=>Br,VJ:()=>Dr,ke:()=>Mr,LI:()=>Jr,Jn:()=>Or,vj:()=>Lr,P1:()=>Ur,XI:()=>Rr,cp:()=>zr,xw:()=>kr,U$:()=>Fr,E8:()=>Nr,dF:()=>Hr,gX:()=>jr,nQ:()=>hr,Ub:()=>lr,wH:()=>Sr});var d={};b.r(d),b.d(d,{"bg-box-cube":()=>W.a6,"bg-box-cubestrip":()=>W.sI,"bg-box-dot":()=>W.W6,"bg-box-grid":()=>W.jX,"bg-box-img":()=>W.Oe,"bg-box-strip":()=>W.tY,default:()=>ur});var s={};b.r(s),b.d(s,{default:()=>mr,"huxy-border-animate-dash":()=>K.Rn,"huxy-border-animate-solid":()=>K.c6,"huxy-border-wrap":()=>K.DV});var t={};b.r(t),b.d(t,{default:()=>Ir,"huxy-scale":()=>At.mj,"huxy-spot":()=>At.KC});var r=b(85);const a=o=>o?.$$typeof&&typeof o.$$typeof=="symbol"&&o.$$typeof.description==="react.element",e=(o,l="px")=>`${o}`.replace(l,"")-0;var u=b(591),i=b.n(u),f=b(740),x=b.n(f),M=b(128),v=b.n(M),O=b(855),y=b.n(O),B=b(51),C=b.n(B),er=b(656),P=b.n(er),Nt=b(673),X={};X.styleTagTransform=P(),X.setAttributes=y(),X.insert=v().bind(null,"head"),X.domAPI=x(),X.insertStyleElement=C();var Se=i()(Nt.A,X);const je=Nt.A&&Nt.A.locals?Nt.A.locals:void 0,qt=({list:o=[],size:l="360px",cardSize:p="42px",bottom:c="60px",style:h,...m})=>{const g=360/o.length;return(0,r.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":l,"--cardSize":p,"--bottom":c,...h},...m,children:(0,r.jsx)("div",{className:"model-container",children:o.map((E,D)=>(0,r.jsx)("div",{className:"model-item",style:{"--rotateY":`${g*D}deg`},children:(0,r.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:E.label,href:E.link,target:"_blank",children:[E.icon?(0,r.jsx)("img",{src:E.icon,alt:E.label}):null,a(E.icon)?E.icon:E.icon?(0,r.jsx)("img",{src:E.icon,alt:E.label}):null]})},E.label))})})};var Ht=b(316),Y={};Y.styleTagTransform=P(),Y.setAttributes=y(),Y.insert=v().bind(null,"head"),Y.domAPI=x(),Y.insertStyleElement=C();var Be=i()(Ht.A,Y);const We=Ht.A&&Ht.A.locals?Ht.A.locals:void 0,or=({objs:o=[],models:l=[],height:p="480px",style:c,className:h,...m})=>(0,r.jsxs)("div",{className:`huxy-icon-animate-container${h?` ${h}`:""}`,style:{"--height":p,...c},...m,children:[(0,r.jsx)("div",{className:"huxy-icon-animate-materiels",children:o.map(({value:g,label:E,icon:D,link:T,type:L,style:Lt})=>(0,r.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${g}${L?"":" obj-img"}`,tooltip:L?void 0:E,href:T,target:"_blank",style:Lt,children:a(D)?D:(0,r.jsx)("img",{src:D,alt:E})},E))}),(0,r.jsx)(qt,{list:l,size:`${e(p)-120}px`})]});var w=b(92),k={};k.styleTagTransform=P(),k.setAttributes=y(),k.insert=v().bind(null,"head"),k.domAPI=x(),k.insertStyleElement=C();var Ue=i()(w.Ay,k);const ze=w.Ay&&w.Ay.locals?w.Ay.locals:void 0,ar=({front:o,back:l,...p})=>(0,r.jsx)("div",{className:w.fj,...p,children:(0,r.jsxs)("div",{className:w.Nr,children:[(0,r.jsx)("div",{className:w.Wm,children:o}),(0,r.jsx)("div",{className:w.aX,children:l})]})});var U=b(649);const sr=(o={})=>{const l=(0,U.useRef)(0),[p,c]=(0,U.useState)(o),h=(0,U.useCallback)(m=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>c(m))},[]);return(0,U.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[p,h]},ir=(o,l)=>{const p=(0,U.useRef)();(0,U.useEffect)(()=>{p.current=o},[o]),(0,U.useEffect)(()=>{if(l){const c=setInterval(()=>p.current(),l);return()=>clearInterval(c)}},[l])};var Jt=b(183),F={};F.styleTagTransform=P(),F.setAttributes=y(),F.insert=v().bind(null,"head"),F.domAPI=x(),F.insertStyleElement=C();var Xe=i()(Jt.A,F);const Ye=Jt.A&&Jt.A.locals?Jt.A.locals:void 0,nr=(o,l=60)=>(l=1.5*l,o.map((p,c)=>{const h=Math.random();let m=1;h<.3334?m=1.2:h<.6667&&(m=.8);const g=~~(c/3),E=c%3;let D=1.5*l*g;E===1&&(D+=l/2);const T=E*l+l/6*(E+1);return p.transform={x:D,y:T,s:m},p})),_r=(o,l=60)=>(l=2.25*l,o.map(p=>(p.transform.x-=2,p.transform.x+l<0&&(p.transform.x=~~(o.length/3)*l),p))),dr=({width:o=60,wait:l=56,list:p=[],className:c,...h})=>{const m=(0,U.useMemo)(()=>nr(p,o),[]),[g,E]=sr(m),[D,T]=(0,U.useState)(l);ir(()=>{const j=_r(g,o);E(j)},D);const L=j=>{T(null)},Lt=j=>{T(l)};return(0,r.jsx)("div",{className:`huxy-icon-carousel${c?` ${c}`:""}`,...h,children:(0,r.jsx)("div",{className:"icon-container",children:g.map((j,Zr)=>(0,r.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${Zr%3===0?"lt":"lb"}`,tooltip:j.label,style:{transform:`translate(${j.transform.x}px, ${j.transform.y}px) scale(${j.transform.s})`,width:o},onMouseEnter:L,onMouseLeave:Lt,href:j.link,target:"_blank",children:(0,r.jsx)("img",{src:j.icon,alt:j.label})},j.label))})})};var N=b(529),H={};H.styleTagTransform=P(),H.setAttributes=y(),H.insert=v().bind(null,"head"),H.domAPI=x(),H.insertStyleElement=C();var Fe=i()(N.Ay,H);const Ne=N.Ay&&N.Ay.locals?N.Ay.locals:void 0,lr=({title:o,borderColor:l,titleWidth:p,titleHeight:c,style:h,className:m,...g})=>(0,r.jsx)("div",{className:`${N.s5}${m?` ${m}`:""}`,style:{"--borderColor":l,"--titleWidth":p,"--titleHeight":c,...h},...g,children:(0,r.jsx)("h2",{className:N.DD,children:o})});var z=b(737),J={};J.styleTagTransform=P(),J.setAttributes=y(),J.insert=v().bind(null,"head"),J.domAPI=x(),J.insertStyleElement=C();var Je=i()(z.Ay,J);const Ze=z.Ay&&z.Ay.locals?z.Ay.locals:void 0,cr=({size:o="8px",borderColor:l="var(--appColor)",half1:p=!0,half2:c=!0,style:h,className:m,children:g,...E})=>(0,r.jsx)("div",{className:`${z.Lm}${m?` ${m}`:""}`,style:{"--cornerSize":o,"--borderColor":l,...h},...E,children:(0,r.jsxs)("div",{className:`${z.WO}${p?` ${z.MX}`:""}`,children:[c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:z.HA}),(0,r.jsx)("span",{className:z.JJ})]}):null,g]})});var Z=b(885),G={};G.styleTagTransform=P(),G.setAttributes=y(),G.insert=v().bind(null,"head"),G.domAPI=x(),G.insertStyleElement=C();var Ve=i()(Z.Ay,G);const Qe=Z.Ay&&Z.Ay.locals?Z.Ay.locals:void 0,pr=({size:o="8px",borderColor:l="var(--appColor)",style:p,className:c,children:h,...m})=>(0,r.jsx)("div",{className:`${Z.Lm}${c?` ${c}`:""}`,style:{"--cornerSize":o,"--borderColor":l,...p},...m,children:(0,r.jsx)("div",{className:Z.OP,children:h})});var W=b(302),V={};V.styleTagTransform=P(),V.setAttributes=y(),V.insert=v().bind(null,"head"),V.domAPI=x(),V.insertStyleElement=C();var to=i()(W.Ay,V);const ur=W.Ay&&W.Ay.locals?W.Ay.locals:void 0,vr=({type:o="dot",bgColor:l,cubeColor:p,url:c,style:h,className:m,children:g,...E})=>{o=c?"img":o;const D=c?{backgroundImage:`url(${c})`}:void 0;return(0,r.jsx)("div",{className:`${d[`bg-box-${o}`]}${m?` ${m}`:""}`,style:{"--bgColor":l,"--cubeColor":p,...D,...h},...E,children:g})};var $=b(230),Q={};Q.styleTagTransform=P(),Q.setAttributes=y(),Q.insert=v().bind(null,"head"),Q.domAPI=x(),Q.insertStyleElement=C();var eo=i()($.Ay,Q);const oo=$.Ay&&$.Ay.locals?$.Ay.locals:void 0,hr=({children:o,title:l,fontSize:p,borderSize:c,borderColor:h="var(--appColor)",space:m="10px",style:g,className:E,...D})=>(0,r.jsxs)("div",{className:`${$.Qo}${E?` ${E}`:""}`,style:{"--borderColor":h,"--space":m,"--fontSize":p,"--borderSize":c,...g},...D,children:[(0,r.jsx)("div",{className:$.d0,children:l}),(0,r.jsx)("div",{className:$.fc,children:o})]});var K=b(871),q={};q.styleTagTransform=P(),q.setAttributes=y(),q.insert=v().bind(null,"head"),q.domAPI=x(),q.insertStyleElement=C();var so=i()(K.Ay,q);const mr=K.Ay&&K.Ay.locals?K.Ay.locals:void 0,xr=({type:o="solid",space:l="2px",borderColor:p="var(--appColor)",style:c,className:h,children:m,...g})=>(0,r.jsx)("div",{className:`${K.DV}${h?` ${h}`:""}`,style:{"--space":l,"--borderColor":p,...c},...g,children:(0,r.jsx)("div",{className:s[`huxy-border-animate-${o==="dash"?"dash":"solid"}`],children:m})}),fr=(o="",l=2,p="0")=>{const c=o.length;return c>=l?o:`${Array(l-c+1).join(p)}${o}`},R=()=>"#"+fr((~~(Math.random()*(1<<24))).toString(16),6),S=(o=0,l=0,p=!0)=>(o<l&&(o=[l,l=o][0]),p?~~(Math.random()*(o-l+1))+l:Math.random()*(o-l)+l),Vt=(o=[])=>o[S(o.length-1)];var tt=b(761),rt={};rt.styleTagTransform=P(),rt.setAttributes=y(),rt.insert=v().bind(null,"head"),rt.domAPI=x(),rt.insertStyleElement=C();var po=i()(tt.Ay,rt);const uo=tt.Ay&&tt.Ay.locals?tt.Ay.locals:void 0,tr=o=>o?.length?Vt(o):R(),br=({list:o=10,height:l="240px",space:p="25px",itemWidth:c="30px",colors:h=[],color:m,style:g,className:E,...D})=>(0,r.jsx)("div",{className:`${tt.fV}${E?` ${E}`:""}`,style:{"--height":l,...g},...D,children:(Array.isArray(o)?o:[...new Array(o)]).map((T,L)=>(0,r.jsx)("div",{className:tt.nb,style:{"--space":p,"--itemWidth":c,"--bgColor":T?.color??m??`linear-gradient(to top, ${tr(h)}, ${tr(h)})`,"--itemHeight":T?.height??`${S(15,100)}%`,left:`${L*(e(p)+e(c))}px`}},`huxy-skeleton-barchart-${L}`))});var I=b(960),et={};et.styleTagTransform=P(),et.setAttributes=y(),et.insert=v().bind(null,"head"),et.domAPI=x(),et.insertStyleElement=C();var ho=i()(I.Ay,et);const mo=I.Ay&&I.Ay.locals?I.Ay.locals:void 0,gr=({height:o="120px",leftColor:l,rightColor:p,topWidth:c,bottomWidth:h,style:m,className:g,...E})=>(0,r.jsxs)("div",{className:`${I.y8}${g?` ${g}`:""}`,style:{"--height":o,"--leftColor":l??R(),"--rightColor":p??R(),"--topWidth":c??`${S(30,60)}%`,"--bottomWidth":h??`${S(55,95)}%`,...m},...E,children:[(0,r.jsx)("div",{className:I.gY,children:(0,r.jsx)("div",{className:I.qF})}),(0,r.jsxs)("div",{className:I.zS,children:[(0,r.jsx)("h4",{className:I.DD}),(0,r.jsx)("p",{className:I.Qq})]})]});var ot=b(202),at={};at.styleTagTransform=P(),at.setAttributes=y(),at.insert=v().bind(null,"head"),at.domAPI=x(),at.insertStyleElement=C();var fo=i()(ot.Ay,at);const bo=ot.Ay&&ot.Ay.locals?ot.Ay.locals:void 0,Er=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],yr=({size:o="300px",space:l="8px",style:p,className:c,...h})=>{let m=e(l)*3;return(0,r.jsx)("div",{className:`${ot.T8}${c?` ${c}`:""}`,style:{"--size":o,...p},...h,children:Er.map((g,E)=>(m=m+e(g.borderWidth)*2+e(l)*2,(0,r.jsx)("div",{className:ot.c6,style:{"--itemSize":`calc(${o} - ${m}px)`,"--borderWidth":g.borderWidth,"--borderLeftColor":g.borderLeftColor,"--borderRightColor":g.borderRightColor,"--borderTopColor":g.borderTopColor,"--borderBottomColor":g.borderBottomColor,"--time":g.time,"--rotateStart":g.rotateStart,"--rotateEnd":g.rotateEnd}},`huxy-animate-border-circle-${E}`)))})};var st=b(434),it={};it.styleTagTransform=P(),it.setAttributes=y(),it.insert=v().bind(null,"head"),it.domAPI=x(),it.insertStyleElement=C();var Eo=i()(st.Ay,it);const yo=st.Ay&&st.Ay.locals?st.Ay.locals:void 0,Ar=({size:o="400px",width:l="20px",space:p="20px",colors:c=[],style:h,className:m,...g})=>(0,r.jsx)("div",{className:`${st.OH}${m?` ${m}`:""}`,style:{"--size":o,"--width":l,"--space":p,"--color1":c[0],"--color2":c[1],"--color3":c[2],"--color4":c[3],"--color5":c[4],"--color6":c[5],"--color7":c[6],...h},...g,children:(0,r.jsx)("div",{className:st.zx})});var nt=b(78),_t={};_t.styleTagTransform=P(),_t.setAttributes=y(),_t.insert=v().bind(null,"head"),_t.domAPI=x(),_t.insertStyleElement=C();var Co=i()(nt.Ay,_t);const Po=nt.Ay&&nt.Ay.locals?nt.Ay.locals:void 0,Cr=({row:o=8,leftColor:l="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:p="rgba(0, 0, 0, 0.2)",rightWidth:c="100px",itemHeight:h="20px",space:m="20px",className:g,...E})=>(0,r.jsx)("div",{className:`${nt.MY}${g?` ${g}`:""}`,style:{"--rightWidth":c,"--itemHeight":h,"--space":m,"--leftColor":l,"--rightColor":p},...E,children:[...new Array(o)].map((D,T)=>(0,r.jsx)("div",{className:nt.cw},`huxy-skeleton-list-${T}`))}),Pr=(o,l=100)=>{const p=[];return[...new Array(o)].map((c,h)=>{h===o-1?p[h]=l:(p[h]=S(1,l-1),l-=p[h])}),p};var Bt=b(736),dt={};dt.styleTagTransform=P(),dt.setAttributes=y(),dt.insert=v().bind(null,"head"),dt.domAPI=x(),dt.insertStyleElement=C();var Oo=i()(Bt.A,dt);const To=Bt.A&&Bt.A.locals?Bt.A.locals:void 0,Zt=o=>o?.length?Vt(o):R(),lt=Pr(4),Dr=({height:o,colors:l=[],style:p,className:c,...h})=>(0,r.jsx)("div",{className:`${Bt.q}${c?` ${c}`:""}`,style:{"--height":o,"--color1":Zt(l),"--color2":Zt(l),"--color3":Zt(l),"--color4":Zt(l),"--percent1":`${lt[0]}%`,"--percent2":`${lt[0]+lt[1]}%`,"--percent3":`${lt[0]+lt[1]+lt[2]}%`,"--percent4":"100%",...p},...h});var Wt=b(985),ct={};ct.styleTagTransform=P(),ct.setAttributes=y(),ct.insert=v().bind(null,"head"),ct.domAPI=x(),ct.insertStyleElement=C();var So=i()(Wt.A,ct);const jo=Wt.A&&Wt.A.locals?Wt.A.locals:void 0,Mr=({percent:o,height:l="20px",bgColor:p="rgba(0, 0, 0, 0.15)",progressColor:c,borderRadius:h="4px",waveColor:m="rgba(255, 255, 255, 0.2)",waveTime:g="3s",style:E,className:D,...T})=>(0,r.jsx)("div",{className:`${Wt.f}${D?` ${D}`:""}`,style:{"--percent":o??S(33,99),"--height":l,"--bgColor":p,"--progressColor":c??R(),"--borderRadius":h,"--waveColor":m,"--waveTime":g,...E},...T});var pt=b(804),ut={};ut.styleTagTransform=P(),ut.setAttributes=y(),ut.insert=v().bind(null,"head"),ut.domAPI=x(),ut.insertStyleElement=C();var Bo=i()(pt.Ay,ut);const Wo=pt.Ay&&pt.Ay.locals?pt.Ay.locals:void 0,Or=({list:o=60,size:l="300px",itemWidth:p="30px",itemHeight:c="4px",bgColor:h="rgba(255, 255, 255 , 0.9)",shadowColor:m="rgba(255, 255, 255 , 0.6)",color:g,style:E,className:D,...T})=>(o=Array.isArray(o)?o:[...new Array(o)],(0,r.jsx)("div",{className:`${pt.HZ}${D?` ${D}`:""}`,style:{"--size":l,"--itemWidth":p,"--itemHeight":c,"--bgColor":h,"--shadowColor":m,...E},...T,children:o.map((L,Lt)=>(0,r.jsx)("div",{className:pt.YZ,style:{"--color":L?.color??g??R(),transform:`rotate(${360/o.length*Lt}deg)`}},`huxy-animate-border-ring-${Lt}`))}));var vt=b(261),ht={};ht.styleTagTransform=P(),ht.setAttributes=y(),ht.insert=v().bind(null,"head"),ht.domAPI=x(),ht.insertStyleElement=C();var Uo=i()(vt.Ay,ht);const zo=vt.Ay&&vt.Ay.locals?vt.Ay.locals:void 0,Tr=({children:o,hasTitle:l,titleBgColor:p,style:c,className:h,...m})=>(0,r.jsx)("div",{className:`${vt.ao}${l?` ${vt.DD}`:""}${h?` ${h}`:""}`,style:{"--titleBgColor":p??R(),...c},...m,children:o});var It=b(826),mt={};mt.styleTagTransform=P(),mt.setAttributes=y(),mt.insert=v().bind(null,"head"),mt.domAPI=x(),mt.insertStyleElement=C();var Ko=i()(It.A,mt);const $o=It.A&&It.A.locals?It.A.locals:void 0,Rr=({row:o=6,col:l=8,...p})=>(0,r.jsx)("div",{className:It.K,...p,children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:[...new Array(l)].map((c,h)=>(0,r.jsx)("th",{children:(0,r.jsx)("span",{})},`skeleton-table-th-${h}`))})}),(0,r.jsx)("tbody",{children:[...new Array(o)].map((c,h)=>(0,r.jsx)("tr",{children:[...new Array(l)].map((m,g)=>(0,r.jsx)("td",{children:(0,r.jsx)("span",{})},`skeleton-table-tr-${h}-${g}`))},`tr-${h}`))})]})});var Ut=b(763),xt={};xt.styleTagTransform=P(),xt.setAttributes=y(),xt.insert=v().bind(null,"head"),xt.domAPI=x(),xt.insertStyleElement=C();var Yo=i()(Ut.A,xt);const ko=Ut.A&&Ut.A.locals?Ut.A.locals:void 0,Sr=({color:o="rgba(255, 255, 255, 0.1)",delay:l="2s",style:p,className:c,children:h,...m})=>(0,r.jsx)("div",{className:`${Ut.h}${c?` ${c}`:""}`,style:{"--waveColor":o,"--waveTime":l,...p},...m,children:h});var zt=b(888),ft={};ft.styleTagTransform=P(),ft.setAttributes=y(),ft.insert=v().bind(null,"head"),ft.domAPI=x(),ft.insertStyleElement=C();var No=i()(zt.A,ft);const Ho=zt.A&&zt.A.locals?zt.A.locals:void 0,jr=o=>(0,r.jsx)("span",{className:zt.p,...o});var wt=b(981),bt={};bt.styleTagTransform=P(),bt.setAttributes=y(),bt.insert=v().bind(null,"head"),bt.domAPI=x(),bt.insertStyleElement=C();var Zo=i()(wt.A,bt);const Go=wt.A&&wt.A.locals?wt.A.locals:void 0,Lr=o=>(0,r.jsx)("span",{className:wt.S,...o});var Kt=b(358),gt={};gt.styleTagTransform=P(),gt.setAttributes=y(),gt.insert=v().bind(null,"head"),gt.domAPI=x(),gt.insertStyleElement=C();var Qo=i()(Kt.A,gt);const qo=Kt.A&&Kt.A.locals?Kt.A.locals:void 0,Br=o=>(0,r.jsx)("span",{className:Kt.l,...o});var Et=b(715),yt={};yt.styleTagTransform=P(),yt.setAttributes=y(),yt.insert=v().bind(null,"head"),yt.domAPI=x(),yt.insertStyleElement=C();var ra=i()(Et.Ay,yt);const ea=Et.Ay&&Et.Ay.locals?Et.Ay.locals:void 0,Wr=({list:o=7,size:l="40px",shadowSize:p="50px",time:c="1.6s",style:h,className:m,...g})=>(c=e(c,"s"),(0,r.jsx)("div",{className:`${Et.Y2}${m?` ${m}`:""}`,style:{"--size":l,"--shadowSize":p,"--time":`${c}s`,...h},...g,children:(Array.isArray(o)?o:[...new Array(o)]).map((E,D)=>(0,r.jsx)("div",{className:Et.iU,style:{"--delay":E?.delay??`${c/((o?.length??o)+1)*(D+1)-c}s`,"--bgColor":E?.color??R()}},`huxy-loading-ball-${D}`))}));var At=b(925),Ct={};Ct.styleTagTransform=P(),Ct.setAttributes=y(),Ct.insert=v().bind(null,"head"),Ct.domAPI=x(),Ct.insertStyleElement=C();var aa=i()(At.Ay,Ct);const Ir=At.Ay&&At.Ay.locals?At.Ay.locals:void 0,Ur=({type:o="spot",size:l,color:p,shadowColor:c,style:h,className:m,...g})=>(0,r.jsx)("span",{className:`${t[`huxy-${o}`]}${m?` ${m}`:""}`,style:{"--size":l??`${S(6,30)}px`,"--color":p??R(),"--shadowColor":c??R(),...h},...g});var $t=b(816),Pt={};Pt.styleTagTransform=P(),Pt.setAttributes=y(),Pt.insert=v().bind(null,"head"),Pt.domAPI=x(),Pt.insertStyleElement=C();var ia=i()($t.A,Pt);const na=$t.A&&$t.A.locals?$t.A.locals:void 0,zr=({width:o,border:l,black:p,white:c,style:h,className:m,...g})=>(0,r.jsx)("div",{className:`${$t.f} ${m}`,style:{"--width":o,"--border":l,"--black":p,"--white":c,...h},...g});var Xt=b(875),Dt={};Dt.styleTagTransform=P(),Dt.setAttributes=y(),Dt.insert=v().bind(null,"head"),Dt.domAPI=x(),Dt.insertStyleElement=C();var da=i()(Xt.A,Dt);const la=Xt.A&&Xt.A.locals?Xt.A.locals:void 0,wr=({width:o="200px",height:l="180px",space:p="12%",bgColor:c,style:h,className:m,...g})=>(0,r.jsx)("div",{className:`${Xt.V}${m?` ${m}`:""}`,style:{"--width":o,"--height":l,"--space":p,"--bgColor":c,...h},...g});var Gt=b(333),Mt={};Mt.styleTagTransform=P(),Mt.setAttributes=y(),Mt.insert=v().bind(null,"head"),Mt.domAPI=x(),Mt.insertStyleElement=C();var pa=i()(Gt.A,Mt);const ua=Gt.A&&Gt.A.locals?Gt.A.locals:void 0,Qt=()=>Math.random()-.5,Kr=()=>~~(Qt()*S(5,10)*10),$r=()=>~~(Qt()*S(2,8)*10),Xr=()=>(1-Qt())*S(1.1,1.4,!1),Yr=o=>o?.length?Vt(o):R(),kr=({list:o=[],colors:l=[],width:p,padding:c,bgColor:h,style:m,...g})=>(0,r.jsx)("div",{className:"huxy-text-3d",style:{"--width":p,"--padding":c,"--bgColor":h,...m},...g,children:(0,r.jsx)("div",{className:"text-3d-container",children:o.map((E,D)=>{const T=E.time??S(6,24,!1).toFixed(2),L=E.delay??-S(0,T,!1).toFixed(2);return(0,r.jsx)("div",{className:"text-3d-item",style:{"--time":`${T}s`,"--center":E.center??`${Kr()}%`,"--rotate":E.rotate??`${$r()}deg`,"--size":E.size??Xr(),"--color":E.color??Yr(l),"--delay":`${L}s`},children:(0,r.jsx)("div",{className:"text-3d-item-card",children:(0,r.jsx)("span",{className:"link animate-text",children:E.label})})},E.label)})})});var Ot=b(588),Tt={};Tt.styleTagTransform=P(),Tt.setAttributes=y(),Tt.insert=v().bind(null,"head"),Tt.domAPI=x(),Tt.insertStyleElement=C();var ha=i()(Ot.Ay,Tt);const ma=Ot.Ay&&Ot.Ay.locals?Ot.Ay.locals:void 0,Fr=({time:o="3s",style:l,className:p,children:c,...h})=>(0,r.jsx)("div",{className:`${Ot.eq}${p?` ${p}`:""}`,style:{"--time":o,...l},...h,children:(0,r.jsx)("div",{className:Ot.Rz,children:c})});var Yt=b(722),Rt={};Rt.styleTagTransform=P(),Rt.setAttributes=y(),Rt.insert=v().bind(null,"head"),Rt.domAPI=x(),Rt.insertStyleElement=C();var fa=i()(Yt.A,Rt);const ba=Yt.A&&Yt.A.locals?Yt.A.locals:void 0,Nr=({backColor:o="rgba(0, 0, 0, 0.3)",frontColor:l="rgba(255, 255, 255, 1)",time:p="4s",style:c,className:h,children:m,...g})=>(0,r.jsx)("div",{className:`${Yt.e}${h?` ${h}`:""}`,style:{"--backColor":o,"--frontColor":l,"--time":p,...c},...g,"data-text":m,children:m});var kt=b(547),St={};St.styleTagTransform=P(),St.setAttributes=y(),St.insert=v().bind(null,"head"),St.domAPI=x(),St.insertStyleElement=C();var Ea=i()(kt.A,St);const ya=kt.A&&kt.A.locals?kt.A.locals:void 0,Hr=({startColor:o,endColor:l,style:p,className:c,children:h,...m})=>(0,r.jsx)("div",{className:`${kt.v}${c?` ${c}`:""}`,style:{"--startColor":o??R(),"--endColor":l??R(),...p},...m,children:h});var Ft=b(175),jt={};jt.styleTagTransform=P(),jt.setAttributes=y(),jt.insert=v().bind(null,"head"),jt.domAPI=x(),jt.insertStyleElement=C();var Ca=i()(Ft.A,jt);const Pa=Ft.A&&Ft.A.locals?Ft.A.locals:void 0,Jr=({score:o=0,backColor:l="rgba(0, 0, 0, 0.3)",frontColor:p="var(--yellow2)",style:c,className:h,children:m,backend:g,...E})=>(0,r.jsx)("div",{className:`${Ft.J}${h?` ${h}`:""}`,style:{"--backColor":l,"--frontColor":p,"--score":`${o}`.includes("%")?o:`${o*100}%`,...c},...E,"data-text":m,children:g??m})})();var Qr=A.sC,qr=A.S9,te=A.ji,re=A.Zp,ee=A.jl,oe=A.mc,ae=A.ax,se=A.e8,ie=A.xh,ne=A.Lv,_e=A.C7,de=A.De,le=A.yz,ce=A.ve,pe=A.B8,ue=A.Rh,ve=A.aZ,he=A.VJ,me=A.ke,xe=A.LI,fe=A.Jn,be=A.vj,ge=A.P1,Ee=A.XI,ye=A.cp,Ae=A.xw,Ce=A.U$,Pe=A.E8,De=A.dF,Me=A.gX,Oe=A.nQ,Te=A.Ub,Re=A.wH;export{Qr as AnimateBorder,qr as Barchart,te as BgBox,re as Card,ee as Circle,oe as Container,ae as CornerBorder,se as Css3dModel,ie as Dashboard,ne as Fliper,_e as HalfBorder,de as IconAnimate,le as IconCarousel,ce as Light,pe as List,ue as Loading,ve as Location,he as Piechart,me as Progress,xe as RateScore,fe as Ring,be as Search,ge as Spot,Ee as Table,ye as Taiji,Ae as Text3d,Ce as TextFilter,Pe as TextLoading,De as TextMasked,Me as Time,Oe as TitleBorder,Te as TitleHeader,Re as Wave};
