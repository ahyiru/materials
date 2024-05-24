import*as Nt from"react";var Qr={673:(d,i,t)=>{t.d(i,{A:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-3d-models {
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
`,""]);const p=e},92:(d,i,t)=>{t.d(i,{Ay:()=>M,Nr:()=>n,Wm:()=>f,aX:()=>E,fj:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.g394U {
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
`,""]);var p="g394U",n="zasVJ",f="C5n3b",E="UdsvP";const M=e},316:(d,i,t)=>{t.d(i,{A:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.huxy-icon-animate-tooltip {
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
`,""]);const p=e},183:(d,i,t)=>{t.d(i,{A:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]);const p=e},871:(d,i,t)=>{t.d(i,{Ay:()=>E,DV:()=>p,Rn:()=>n,c6:()=>f});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-border-animate-dash {
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
`,""]);var p="tF3eM",n="BHIzz",f="Ltln8";const E=e},302:(d,i,t)=>{t.d(i,{Ay:()=>T,Oe:()=>m,W6:()=>p,a6:()=>E,jX:()=>M,sI:()=>f,tY:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.UJpqU {
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
`,""]);var p="UJpqU",n="VXk7W",f="q_1dQ",E="eBK09",M="o9pvC",m="Po9ZE";const T=e},737:(d,i,t)=>{t.d(i,{Ay:()=>m,HA:()=>E,JJ:()=>M,Lm:()=>p,MX:()=>f,WO:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.YeHmo {
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
`,""]);var p="YeHmo",n="vpTzN",f="S3bPv",E="WYlJx",M="SMovL";const m=e},885:(d,i,t)=>{t.d(i,{Ay:()=>f,Lm:()=>p,OP:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.Usszw {
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
`,""]);var p="Usszw",n="XcsJP";const f=e},230:(d,i,t)=>{t.d(i,{Ay:()=>E,Qo:()=>p,d0:()=>n,fc:()=>f});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.WY0lD {
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
`,""]);var p="WY0lD",n="_ORAK",f="Vggg7";const E=e},529:(d,i,t)=>{t.d(i,{Ay:()=>f,DD:()=>n,s5:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.MuUoF {
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
`,""]);var p="MuUoF",n="fM2FI";const f=e},761:(d,i,t)=>{t.d(i,{Ay:()=>f,fV:()=>p,nb:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.huDNN {
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
`,""]);var p="huDNN",n="V5Fq4";const f=e},960:(d,i,t)=>{t.d(i,{Ay:()=>T,DD:()=>M,Qq:()=>m,gY:()=>n,qF:()=>f,y8:()=>p,zS:()=>E});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.nnDaG {
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
`,""]);var p="nnDaG",n="iJtPz",f="Bya6y",E="c6MGh",M="sb1hm",m="YDDrB";const T=e},202:(d,i,t)=>{t.d(i,{Ay:()=>f,T8:()=>p,c6:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]);var p="Krd0d",n="qcJ0N";const f=e},261:(d,i,t)=>{t.d(i,{Ay:()=>f,DD:()=>n,ao:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.myyKG {
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
`,""]);var p="myyKG",n="AXWTP";const f=e},434:(d,i,t)=>{t.d(i,{Ay:()=>f,OH:()=>p,zx:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-skeleton-dashboard {
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
`,""]);var p="DYspm",n="Rg6DD";const f=e},78:(d,i,t)=>{t.d(i,{Ay:()=>f,MY:()=>p,cw:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.YWtCI {
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
`,""]);var p="YWtCI",n="uBGAf";const f=e},736:(d,i,t)=>{t.d(i,{A:()=>n,q:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.IQu9g {
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
`,""]);var p="IQu9g";const n=e},985:(d,i,t)=>{t.d(i,{A:()=>n,f:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-progress-wave {
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
`,""]);var p="zFNbz";const n=e},804:(d,i,t)=>{t.d(i,{Ay:()=>f,HZ:()=>p,YZ:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-animate-border-ring {
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
`,""]);var p="WbFYr",n="XIIyj";const f=e},826:(d,i,t)=>{t.d(i,{A:()=>n,K:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.suwUY {
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
`,""]);var p="suwUY";const n=e},763:(d,i,t)=>{t.d(i,{A:()=>n,h:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-loading-wave {
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
`,""]);var p="d9M97";const n=e},875:(d,i,t)=>{t.d(i,{A:()=>n,V:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-conic-light-animate {
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
`,""]);var p="_ov1n";const n=e},715:(d,i,t)=>{t.d(i,{Ay:()=>f,Y2:()=>p,iU:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-loading-ball {
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
`,""]);var p="TikRE",n="CyLSO";const f=e},358:(d,i,t)=>{t.d(i,{A:()=>n,l:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-location {
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
`,""]);var p="DdhmP";const n=e},981:(d,i,t)=>{t.d(i,{A:()=>n,S:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-search {
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
`,""]);var p="r6hPc";const n=e},925:(d,i,t)=>{t.d(i,{Ay:()=>f,KC:()=>p,mj:()=>n});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-spot {
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
`,""]);var p="JsH0T",n="S4gb8";const f=e},816:(d,i,t)=>{t.d(i,{A:()=>n,f:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.x6fRL {
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
`,""]);var p="x6fRL";const n=e},888:(d,i,t)=>{t.d(i,{A:()=>n,p:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-timer {
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
`,""]);var p="R1ObR";const n=e},175:(d,i,t)=>{t.d(i,{A:()=>n,J:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`.q9v4I {
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
`,""]);var p="q9v4I";const n=e},333:(d,i,t)=>{t.d(i,{A:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-text-3d {
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
`,""]);const p=e},588:(d,i,t)=>{t.d(i,{Ay:()=>f,Rz:()=>n,eq:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-text-filter {
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
`,""]);var p="_zrvj",n="ww0tY";const f=e},722:(d,i,t)=>{t.d(i,{A:()=>n,e:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-text-loading {
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
`,""]);var p="ZYC7Y";const n=e},547:(d,i,t)=>{t.d(i,{A:()=>n,v:()=>p});var r=t(758),_=t.n(r),s=t(935),a=t.n(s),e=a()(_());e.push([d.id,`@keyframes huxy-text-masked {
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
`,""]);var p="zg3Sy";const n=e},935:d=>{d.exports=function(i){var t=[];return t.toString=function(){return this.map(function(_){var s="",a=typeof _[5]<"u";return _[4]&&(s+="@supports (".concat(_[4],") {")),_[2]&&(s+="@media ".concat(_[2]," {")),a&&(s+="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {")),s+=i(_),a&&(s+="}"),_[2]&&(s+="}"),_[4]&&(s+="}"),s}).join("")},t.i=function(_,s,a,e,p){typeof _=="string"&&(_=[[null,_,void 0]]);var n={};if(a)for(var f=0;f<this.length;f++){var E=this[f][0];E!=null&&(n[E]=!0)}for(var M=0;M<_.length;M++){var m=[].concat(_[M]);a&&n[m[0]]||(typeof p<"u"&&(typeof m[5]>"u"||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=p),s&&(m[2]&&(m[1]="@media ".concat(m[2]," {").concat(m[1],"}")),m[2]=s),e&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=e):m[4]="".concat(e)),t.push(m))}},t}},758:d=>{d.exports=function(i){return i[1]}},197:(d,i)=>{var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function _(s,a,e){var p=null;if(e!==void 0&&(p=""+e),a.key!==void 0&&(p=""+a.key),"key"in a){e={};for(var n in a)n!=="key"&&(e[n]=a[n])}else e=a;return a=e.ref,{$$typeof:t,type:s,key:p,ref:a!==void 0?a:null,props:e}}i.Fragment=r,i.jsx=_,i.jsxs=_},85:(d,i,t)=>{d.exports=t(197)},591:d=>{var i=[];function t(s){for(var a=-1,e=0;e<i.length;e++)if(i[e].identifier===s){a=e;break}return a}function r(s,a){for(var e={},p=[],n=0;n<s.length;n++){var f=s[n],E=a.base?f[0]+a.base:f[0],M=e[E]||0,m="".concat(E," ").concat(M);e[E]=M+1;var T=t(m),y={css:f[1],media:f[2],sourceMap:f[3],supports:f[4],layer:f[5]};if(T!==-1)i[T].references++,i[T].updater(y);else{var K=_(y,a);a.byIndex=n,i.splice(n,0,{identifier:m,updater:K,references:1})}p.push(m)}return p}function _(s,a){var e=a.domAPI(a);e.update(s);var p=function(f){if(f){if(f.css===s.css&&f.media===s.media&&f.sourceMap===s.sourceMap&&f.supports===s.supports&&f.layer===s.layer)return;e.update(s=f)}else e.remove()};return p}d.exports=function(s,a){a=a||{},s=s||[];var e=r(s,a);return function(n){n=n||[];for(var f=0;f<e.length;f++){var E=e[f],M=t(E);i[M].references--}for(var m=r(n,a),T=0;T<e.length;T++){var y=e[T],K=t(y);i[K].references===0&&(i[K].updater(),i.splice(K,1))}e=m}}},128:d=>{var i={};function t(_){if(typeof i[_]>"u"){var s=document.querySelector(_);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}i[_]=s}return i[_]}function r(_,s){var a=t(_);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(s)}d.exports=r},51:d=>{function i(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}d.exports=i},855:(d,i,t)=>{function r(_){var s=t.nc;s&&_.setAttribute("nonce",s)}d.exports=r},740:d=>{function i(_,s,a){var e="";a.supports&&(e+="@supports (".concat(a.supports,") {")),a.media&&(e+="@media ".concat(a.media," {"));var p=typeof a.layer<"u";p&&(e+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),e+=a.css,p&&(e+="}"),a.media&&(e+="}"),a.supports&&(e+="}");var n=a.sourceMap;n&&typeof btoa<"u"&&(e+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),s.styleTagTransform(e,_,s.options)}function t(_){if(_.parentNode===null)return!1;_.parentNode.removeChild(_)}function r(_){if(typeof document>"u")return{update:function(){},remove:function(){}};var s=_.insertStyleElement(_);return{update:function(e){i(s,_,e)},remove:function(){t(s)}}}d.exports=r},656:d=>{function i(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}d.exports=i}},er={};function x(d){var i=er[d];if(i!==void 0)return i.exports;var t=er[d]={id:d,exports:{}};return Qr[d](t,t.exports,x),t.exports}x.n=d=>{var i=d&&d.__esModule?()=>d.default:()=>d;return x.d(i,{a:i}),i},x.d=(d,i)=>{for(var t in i)x.o(i,t)&&!x.o(d,t)&&Object.defineProperty(d,t,{enumerable:!0,get:i[t]})},x.o=(d,i)=>Object.prototype.hasOwnProperty.call(d,i),x.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},x.nc=void 0;var A={};(()=>{x.d(A,{sC:()=>br,S9:()=>Er,ji:()=>mr,Zp:()=>yr,jl:()=>Cr,mc:()=>Sr,ax:()=>ur,e8:()=>tr,xh:()=>Pr,Lv:()=>sr,C7:()=>vr,De:()=>ar,yz:()=>cr,ve:()=>$r,B8:()=>Dr,Rh:()=>Ur,aZ:()=>Ir,VJ:()=>Or,ke:()=>Tr,LI:()=>Zr,Jn:()=>Rr,vj:()=>Wr,P1:()=>wr,XI:()=>jr,cp:()=>Kr,xw:()=>Nr,U$:()=>Hr,E8:()=>Jr,dF:()=>Gr,gX:()=>Br,nQ:()=>xr,Ub:()=>pr,wH:()=>Lr});var d={};x.r(d),x.d(d,{"bg-box-cube":()=>B.a6,"bg-box-cubestrip":()=>B.sI,"bg-box-dot":()=>B.W6,"bg-box-grid":()=>B.jX,"bg-box-img":()=>B.Oe,"bg-box-strip":()=>B.tY,default:()=>hr});var i={};x.r(i),x.d(i,{default:()=>fr,"huxy-border-animate-dash":()=>w.Rn,"huxy-border-animate-solid":()=>w.c6,"huxy-border-wrap":()=>w.DV});var t={};x.r(t),x.d(t,{default:()=>zr,"huxy-scale":()=>At.mj,"huxy-spot":()=>At.KC});var r=x(85);const s=o=>o?.$$typeof&&typeof o.$$typeof=="symbol"&&["react.transitional.element","react.element"].includes(o.$$typeof.description),e=(o,l="px")=>`${o}`.replace(l,"")-0;var p=x(591),n=x.n(p),f=x(740),E=x.n(f),M=x(128),m=x.n(M),T=x(855),y=x.n(T),K=x(51),C=x.n(K),or=x(656),P=x.n(or),Ht=x(673),X={};X.styleTagTransform=P(),X.setAttributes=y(),X.insert=m().bind(null,"head"),X.domAPI=E(),X.insertStyleElement=C();var je=n()(Ht.A,X);const Le=Ht.A&&Ht.A.locals?Ht.A.locals:void 0,tr=({list:o=[],size:l="360px",cardSize:u="42px",bottom:c="60px",style:v,...h})=>{const b=360/o.length;return(0,r.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":l,"--cardSize":u,"--bottom":c,...v},...h,children:(0,r.jsx)("div",{className:"model-container",children:o.map((g,D)=>(0,r.jsx)("div",{className:"model-item",style:{"--rotateY":`${b*D}deg`},children:(0,r.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:g.label,href:g.link,target:"_blank",children:[g.icon?(0,r.jsx)("img",{src:g.icon,alt:g.label}):null,s(g.icon)?g.icon:g.icon?(0,r.jsx)("img",{src:g.icon,alt:g.label}):null]})},g.label))})})};var Jt=x(316),Y={};Y.styleTagTransform=P(),Y.setAttributes=y(),Y.insert=m().bind(null,"head"),Y.domAPI=E(),Y.insertStyleElement=C();var We=n()(Jt.A,Y);const Ie=Jt.A&&Jt.A.locals?Jt.A.locals:void 0,ar=({objs:o=[],models:l=[],height:u="480px",style:c,className:v,...h})=>(0,r.jsxs)("div",{className:`huxy-icon-animate-container${v?` ${v}`:""}`,style:{"--height":u,...c},...h,children:[(0,r.jsx)("div",{className:"huxy-icon-animate-materiels",children:o.map(({value:b,label:g,icon:D,link:O,type:L,style:Lt})=>(0,r.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${b}${L?"":" obj-img"}`,tooltip:L?void 0:g,href:O,target:"_blank",style:Lt,children:s(D)?D:(0,r.jsx)("img",{src:D,alt:g})},g))}),(0,r.jsx)(tr,{list:l,size:`${e(u)-120}px`})]});var z=x(92),k={};k.styleTagTransform=P(),k.setAttributes=y(),k.insert=m().bind(null,"head"),k.domAPI=E(),k.insertStyleElement=C();var ze=n()(z.Ay,k);const we=z.Ay&&z.Ay.locals?z.Ay.locals:void 0,sr=({front:o,back:l,...u})=>(0,r.jsx)("div",{className:z.fj,...u,children:(0,r.jsxs)("div",{className:z.Nr,children:[(0,r.jsx)("div",{className:z.Wm,children:o}),(0,r.jsx)("div",{className:z.aX,children:l})]})});var ir=o=>{var l={};return x.d(l,o),l},$e=o=>()=>o;const I=ir({useCallback:()=>Nt.useCallback,useEffect:()=>Nt.useEffect,useMemo:()=>Nt.useMemo,useRef:()=>Nt.useRef,useState:()=>Nt.useState}),nr=(o={})=>{const l=(0,I.useRef)(0),[u,c]=(0,I.useState)(o),v=(0,I.useCallback)(h=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>c(h))},[]);return(0,I.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[u,v]},_r=(o,l)=>{const u=(0,I.useRef)();(0,I.useEffect)(()=>{u.current=o},[o]),(0,I.useEffect)(()=>{if(l){const c=setInterval(()=>u.current(),l);return()=>clearInterval(c)}},[l])};var Gt=x(183),F={};F.styleTagTransform=P(),F.setAttributes=y(),F.insert=m().bind(null,"head"),F.domAPI=E(),F.insertStyleElement=C();var ke=n()(Gt.A,F);const Fe=Gt.A&&Gt.A.locals?Gt.A.locals:void 0,dr=(o,l=60)=>(l=1.5*l,o.map((u,c)=>{const v=Math.random();let h=1;v<.3334?h=1.2:v<.6667&&(h=.8);const b=~~(c/3),g=c%3;let D=1.5*l*b;g===1&&(D+=l/2);const O=g*l+l/6*(g+1);return u.transform={x:D,y:O,s:h},u})),lr=(o,l=60)=>(l=2.25*l,o.map(u=>(u.transform.x-=2,u.transform.x+l<0&&(u.transform.x=~~(o.length/3)*l),u))),cr=({width:o=60,wait:l=56,list:u=[],className:c,...v})=>{const h=(0,I.useMemo)(()=>dr(u,o),[]),[b,g]=nr(h),[D,O]=(0,I.useState)(l);_r(()=>{const j=lr(b,o);g(j)},D);const L=j=>{O(null)},Lt=j=>{O(l)};return(0,r.jsx)("div",{className:`huxy-icon-carousel${c?` ${c}`:""}`,...v,children:(0,r.jsx)("div",{className:"icon-container",children:b.map((j,Vr)=>(0,r.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${Vr%3===0?"lt":"lb"}`,tooltip:j.label,style:{transform:`translate(${j.transform.x}px, ${j.transform.y}px) scale(${j.transform.s})`,width:o},onMouseEnter:L,onMouseLeave:Lt,href:j.link,target:"_blank",children:(0,r.jsx)("img",{src:j.icon,alt:j.label})},j.label))})})};var N=x(529),H={};H.styleTagTransform=P(),H.setAttributes=y(),H.insert=m().bind(null,"head"),H.domAPI=E(),H.insertStyleElement=C();var He=n()(N.Ay,H);const Je=N.Ay&&N.Ay.locals?N.Ay.locals:void 0,pr=({title:o,borderColor:l,titleWidth:u,titleHeight:c,style:v,className:h,...b})=>(0,r.jsx)("div",{className:`${N.s5}${h?` ${h}`:""}`,style:{"--borderColor":l,"--titleWidth":u,"--titleHeight":c,...v},...b,children:(0,r.jsx)("h2",{className:N.DD,children:o})});var U=x(737),J={};J.styleTagTransform=P(),J.setAttributes=y(),J.insert=m().bind(null,"head"),J.domAPI=E(),J.insertStyleElement=C();var Ze=n()(U.Ay,J);const Ve=U.Ay&&U.Ay.locals?U.Ay.locals:void 0,ur=({size:o="8px",borderColor:l="var(--appColor)",half1:u=!0,half2:c=!0,style:v,className:h,children:b,...g})=>(0,r.jsx)("div",{className:`${U.Lm}${h?` ${h}`:""}`,style:{"--cornerSize":o,"--borderColor":l,...v},...g,children:(0,r.jsxs)("div",{className:`${U.WO}${u?` ${U.MX}`:""}`,children:[c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:U.HA}),(0,r.jsx)("span",{className:U.JJ})]}):null,b]})});var G=x(885),Z={};Z.styleTagTransform=P(),Z.setAttributes=y(),Z.insert=m().bind(null,"head"),Z.domAPI=E(),Z.insertStyleElement=C();var qe=n()(G.Ay,Z);const to=G.Ay&&G.Ay.locals?G.Ay.locals:void 0,vr=({size:o="8px",borderColor:l="var(--appColor)",style:u,className:c,children:v,...h})=>(0,r.jsx)("div",{className:`${G.Lm}${c?` ${c}`:""}`,style:{"--cornerSize":o,"--borderColor":l,...u},...h,children:(0,r.jsx)("div",{className:G.OP,children:v})});var B=x(302),V={};V.styleTagTransform=P(),V.setAttributes=y(),V.insert=m().bind(null,"head"),V.domAPI=E(),V.insertStyleElement=C();var eo=n()(B.Ay,V);const hr=B.Ay&&B.Ay.locals?B.Ay.locals:void 0,mr=({type:o="dot",bgColor:l,cubeColor:u,url:c,style:v,className:h,children:b,...g})=>{o=c?"img":o;const D=c?{backgroundImage:`url(${c})`}:void 0;return(0,r.jsx)("div",{className:`${d[`bg-box-${o}`]}${h?` ${h}`:""}`,style:{"--bgColor":l,"--cubeColor":u,...D,...v},...g,children:b})};var $=x(230),Q={};Q.styleTagTransform=P(),Q.setAttributes=y(),Q.insert=m().bind(null,"head"),Q.domAPI=E(),Q.insertStyleElement=C();var ao=n()($.Ay,Q);const so=$.Ay&&$.Ay.locals?$.Ay.locals:void 0,xr=({children:o,title:l,fontSize:u,borderSize:c,borderColor:v="var(--appColor)",space:h="10px",style:b,className:g,...D})=>(0,r.jsxs)("div",{className:`${$.Qo}${g?` ${g}`:""}`,style:{"--borderColor":v,"--space":h,"--fontSize":u,"--borderSize":c,...b},...D,children:[(0,r.jsx)("div",{className:$.d0,children:l}),(0,r.jsx)("div",{className:$.fc,children:o})]});var w=x(871),q={};q.styleTagTransform=P(),q.setAttributes=y(),q.insert=m().bind(null,"head"),q.domAPI=E(),q.insertStyleElement=C();var no=n()(w.Ay,q);const fr=w.Ay&&w.Ay.locals?w.Ay.locals:void 0,br=({type:o="solid",space:l="2px",borderColor:u="var(--appColor)",style:c,className:v,children:h,...b})=>(0,r.jsx)("div",{className:`${w.DV}${v?` ${v}`:""}`,style:{"--space":l,"--borderColor":u,...c},...b,children:(0,r.jsx)("div",{className:i[`huxy-border-animate-${o==="dash"?"dash":"solid"}`],children:h})}),gr=(o="",l=2,u="0")=>{const c=o.length;return c>=l?o:`${Array(l-c+1).join(u)}${o}`},R=()=>"#"+gr((~~(Math.random()*(1<<24))).toString(16),6),S=(o=0,l=0,u=!0)=>(o<l&&(o=[l,l=o][0]),u?~~(Math.random()*(o-l+1))+l:Math.random()*(o-l)+l),Qt=(o=[])=>o[S(o.length-1)];var tt=x(761),rt={};rt.styleTagTransform=P(),rt.setAttributes=y(),rt.insert=m().bind(null,"head"),rt.domAPI=E(),rt.insertStyleElement=C();var vo=n()(tt.Ay,rt);const ho=tt.Ay&&tt.Ay.locals?tt.Ay.locals:void 0,rr=o=>o?.length?Qt(o):R(),Er=({list:o=10,height:l="240px",space:u="25px",itemWidth:c="30px",colors:v=[],color:h,style:b,className:g,...D})=>(0,r.jsx)("div",{className:`${tt.fV}${g?` ${g}`:""}`,style:{"--height":l,...b},...D,children:(Array.isArray(o)?o:[...new Array(o)]).map((O,L)=>(0,r.jsx)("div",{className:tt.nb,style:{"--space":u,"--itemWidth":c,"--bgColor":O?.color??h??`linear-gradient(to top, ${rr(v)}, ${rr(v)})`,"--itemHeight":O?.height??`${S(15,100)}%`,left:`${L*(e(u)+e(c))}px`}},`huxy-skeleton-barchart-${L}`))});var W=x(960),et={};et.styleTagTransform=P(),et.setAttributes=y(),et.insert=m().bind(null,"head"),et.domAPI=E(),et.insertStyleElement=C();var xo=n()(W.Ay,et);const fo=W.Ay&&W.Ay.locals?W.Ay.locals:void 0,yr=({height:o="120px",leftColor:l,rightColor:u,topWidth:c,bottomWidth:v,style:h,className:b,...g})=>(0,r.jsxs)("div",{className:`${W.y8}${b?` ${b}`:""}`,style:{"--height":o,"--leftColor":l??R(),"--rightColor":u??R(),"--topWidth":c??`${S(30,60)}%`,"--bottomWidth":v??`${S(55,95)}%`,...h},...g,children:[(0,r.jsx)("div",{className:W.gY,children:(0,r.jsx)("div",{className:W.qF})}),(0,r.jsxs)("div",{className:W.zS,children:[(0,r.jsx)("h4",{className:W.DD}),(0,r.jsx)("p",{className:W.Qq})]})]});var ot=x(202),at={};at.styleTagTransform=P(),at.setAttributes=y(),at.insert=m().bind(null,"head"),at.domAPI=E(),at.insertStyleElement=C();var go=n()(ot.Ay,at);const Eo=ot.Ay&&ot.Ay.locals?ot.Ay.locals:void 0,Ar=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],Cr=({size:o="300px",space:l="8px",style:u,className:c,...v})=>{let h=e(l)*3;return(0,r.jsx)("div",{className:`${ot.T8}${c?` ${c}`:""}`,style:{"--size":o,...u},...v,children:Ar.map((b,g)=>(h=h+e(b.borderWidth)*2+e(l)*2,(0,r.jsx)("div",{className:ot.c6,style:{"--itemSize":`calc(${o} - ${h}px)`,"--borderWidth":b.borderWidth,"--borderLeftColor":b.borderLeftColor,"--borderRightColor":b.borderRightColor,"--borderTopColor":b.borderTopColor,"--borderBottomColor":b.borderBottomColor,"--time":b.time,"--rotateStart":b.rotateStart,"--rotateEnd":b.rotateEnd}},`huxy-animate-border-circle-${g}`)))})};var st=x(434),it={};it.styleTagTransform=P(),it.setAttributes=y(),it.insert=m().bind(null,"head"),it.domAPI=E(),it.insertStyleElement=C();var Ao=n()(st.Ay,it);const Co=st.Ay&&st.Ay.locals?st.Ay.locals:void 0,Pr=({size:o="400px",width:l="20px",space:u="20px",colors:c=[],style:v,className:h,...b})=>(0,r.jsx)("div",{className:`${st.OH}${h?` ${h}`:""}`,style:{"--size":o,"--width":l,"--space":u,"--color1":c[0],"--color2":c[1],"--color3":c[2],"--color4":c[3],"--color5":c[4],"--color6":c[5],"--color7":c[6],...v},...b,children:(0,r.jsx)("div",{className:st.zx})});var nt=x(78),_t={};_t.styleTagTransform=P(),_t.setAttributes=y(),_t.insert=m().bind(null,"head"),_t.domAPI=E(),_t.insertStyleElement=C();var Do=n()(nt.Ay,_t);const Mo=nt.Ay&&nt.Ay.locals?nt.Ay.locals:void 0,Dr=({row:o=8,leftColor:l="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:u="rgba(0, 0, 0, 0.2)",rightWidth:c="100px",itemHeight:v="20px",space:h="20px",className:b,...g})=>(0,r.jsx)("div",{className:`${nt.MY}${b?` ${b}`:""}`,style:{"--rightWidth":c,"--itemHeight":v,"--space":h,"--leftColor":l,"--rightColor":u},...g,children:[...new Array(o)].map((D,O)=>(0,r.jsx)("div",{className:nt.cw},`huxy-skeleton-list-${O}`))}),Mr=(o,l=100)=>{const u=[];return[...new Array(o)].map((c,v)=>{v===o-1?u[v]=l:(u[v]=S(1,l-1),l-=u[v])}),u};var Bt=x(736),dt={};dt.styleTagTransform=P(),dt.setAttributes=y(),dt.insert=m().bind(null,"head"),dt.domAPI=E(),dt.insertStyleElement=C();var Ro=n()(Bt.A,dt);const So=Bt.A&&Bt.A.locals?Bt.A.locals:void 0,Zt=o=>o?.length?Qt(o):R(),lt=Mr(4),Or=({height:o,colors:l=[],style:u,className:c,...v})=>(0,r.jsx)("div",{className:`${Bt.q}${c?` ${c}`:""}`,style:{"--height":o,"--color1":Zt(l),"--color2":Zt(l),"--color3":Zt(l),"--color4":Zt(l),"--percent1":`${lt[0]}%`,"--percent2":`${lt[0]+lt[1]}%`,"--percent3":`${lt[0]+lt[1]+lt[2]}%`,"--percent4":"100%",...u},...v});var Wt=x(985),ct={};ct.styleTagTransform=P(),ct.setAttributes=y(),ct.insert=m().bind(null,"head"),ct.domAPI=E(),ct.insertStyleElement=C();var Lo=n()(Wt.A,ct);const Bo=Wt.A&&Wt.A.locals?Wt.A.locals:void 0,Tr=({percent:o,height:l="20px",bgColor:u="rgba(0, 0, 0, 0.15)",progressColor:c,borderRadius:v="4px",waveColor:h="rgba(255, 255, 255, 0.2)",waveTime:b="3s",style:g,className:D,...O})=>(0,r.jsx)("div",{className:`${Wt.f}${D?` ${D}`:""}`,style:{"--percent":o??S(33,99),"--height":l,"--bgColor":u,"--progressColor":c??R(),"--borderRadius":v,"--waveColor":h,"--waveTime":b,...g},...O});var pt=x(804),ut={};ut.styleTagTransform=P(),ut.setAttributes=y(),ut.insert=m().bind(null,"head"),ut.domAPI=E(),ut.insertStyleElement=C();var Io=n()(pt.Ay,ut);const Uo=pt.Ay&&pt.Ay.locals?pt.Ay.locals:void 0,Rr=({list:o=60,size:l="300px",itemWidth:u="30px",itemHeight:c="4px",bgColor:v="rgba(255, 255, 255 , 0.9)",shadowColor:h="rgba(255, 255, 255 , 0.6)",color:b,style:g,className:D,...O})=>(o=Array.isArray(o)?o:[...new Array(o)],(0,r.jsx)("div",{className:`${pt.HZ}${D?` ${D}`:""}`,style:{"--size":l,"--itemWidth":u,"--itemHeight":c,"--bgColor":v,"--shadowColor":h,...g},...O,children:o.map((L,Lt)=>(0,r.jsx)("div",{className:pt.YZ,style:{"--color":L?.color??b??R(),transform:`rotate(${360/o.length*Lt}deg)`}},`huxy-animate-border-ring-${Lt}`))}));var vt=x(261),ht={};ht.styleTagTransform=P(),ht.setAttributes=y(),ht.insert=m().bind(null,"head"),ht.domAPI=E(),ht.insertStyleElement=C();var wo=n()(vt.Ay,ht);const Ko=vt.Ay&&vt.Ay.locals?vt.Ay.locals:void 0,Sr=({children:o,hasTitle:l,titleBgColor:u,style:c,className:v,...h})=>(0,r.jsx)("div",{className:`${vt.ao}${l?` ${vt.DD}`:""}${v?` ${v}`:""}`,style:{"--titleBgColor":u??R(),...c},...h,children:o});var It=x(826),mt={};mt.styleTagTransform=P(),mt.setAttributes=y(),mt.insert=m().bind(null,"head"),mt.domAPI=E(),mt.insertStyleElement=C();var Xo=n()(It.A,mt);const Yo=It.A&&It.A.locals?It.A.locals:void 0,jr=({row:o=6,col:l=8,...u})=>(0,r.jsx)("div",{className:It.K,...u,children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:[...new Array(l)].map((c,v)=>(0,r.jsx)("th",{children:(0,r.jsx)("span",{})},`skeleton-table-th-${v}`))})}),(0,r.jsx)("tbody",{children:[...new Array(o)].map((c,v)=>(0,r.jsx)("tr",{children:[...new Array(l)].map((h,b)=>(0,r.jsx)("td",{children:(0,r.jsx)("span",{})},`skeleton-table-tr-${v}-${b}`))},`tr-${v}`))})]})});var Ut=x(763),xt={};xt.styleTagTransform=P(),xt.setAttributes=y(),xt.insert=m().bind(null,"head"),xt.domAPI=E(),xt.insertStyleElement=C();var Fo=n()(Ut.A,xt);const No=Ut.A&&Ut.A.locals?Ut.A.locals:void 0,Lr=({color:o="rgba(255, 255, 255, 0.1)",delay:l="2s",style:u,className:c,children:v,...h})=>(0,r.jsx)("div",{className:`${Ut.h}${c?` ${c}`:""}`,style:{"--waveColor":o,"--waveTime":l,...u},...h,children:v});var zt=x(888),ft={};ft.styleTagTransform=P(),ft.setAttributes=y(),ft.insert=m().bind(null,"head"),ft.domAPI=E(),ft.insertStyleElement=C();var Jo=n()(zt.A,ft);const Go=zt.A&&zt.A.locals?zt.A.locals:void 0,Br=o=>(0,r.jsx)("span",{className:zt.p,...o});var wt=x(981),bt={};bt.styleTagTransform=P(),bt.setAttributes=y(),bt.insert=m().bind(null,"head"),bt.domAPI=E(),bt.insertStyleElement=C();var Vo=n()(wt.A,bt);const Qo=wt.A&&wt.A.locals?wt.A.locals:void 0,Wr=o=>(0,r.jsx)("span",{className:wt.S,...o});var Kt=x(358),gt={};gt.styleTagTransform=P(),gt.setAttributes=y(),gt.insert=m().bind(null,"head"),gt.domAPI=E(),gt.insertStyleElement=C();var ta=n()(Kt.A,gt);const ra=Kt.A&&Kt.A.locals?Kt.A.locals:void 0,Ir=o=>(0,r.jsx)("span",{className:Kt.l,...o});var Et=x(715),yt={};yt.styleTagTransform=P(),yt.setAttributes=y(),yt.insert=m().bind(null,"head"),yt.domAPI=E(),yt.insertStyleElement=C();var oa=n()(Et.Ay,yt);const aa=Et.Ay&&Et.Ay.locals?Et.Ay.locals:void 0,Ur=({list:o=7,size:l="40px",shadowSize:u="50px",time:c="1.6s",style:v,className:h,...b})=>(c=e(c,"s"),(0,r.jsx)("div",{className:`${Et.Y2}${h?` ${h}`:""}`,style:{"--size":l,"--shadowSize":u,"--time":`${c}s`,...v},...b,children:(Array.isArray(o)?o:[...new Array(o)]).map((g,D)=>(0,r.jsx)("div",{className:Et.iU,style:{"--delay":g?.delay??`${c/((o?.length??o)+1)*(D+1)-c}s`,"--bgColor":g?.color??R()}},`huxy-loading-ball-${D}`))}));var At=x(925),Ct={};Ct.styleTagTransform=P(),Ct.setAttributes=y(),Ct.insert=m().bind(null,"head"),Ct.domAPI=E(),Ct.insertStyleElement=C();var ia=n()(At.Ay,Ct);const zr=At.Ay&&At.Ay.locals?At.Ay.locals:void 0,wr=({type:o="spot",size:l,color:u,shadowColor:c,style:v,className:h,...b})=>(0,r.jsx)("span",{className:`${t[`huxy-${o}`]}${h?` ${h}`:""}`,style:{"--size":l??`${S(6,30)}px`,"--color":u??R(),"--shadowColor":c??R(),...v},...b});var $t=x(816),Pt={};Pt.styleTagTransform=P(),Pt.setAttributes=y(),Pt.insert=m().bind(null,"head"),Pt.domAPI=E(),Pt.insertStyleElement=C();var _a=n()($t.A,Pt);const da=$t.A&&$t.A.locals?$t.A.locals:void 0,Kr=({width:o,border:l,black:u,white:c,style:v,className:h,...b})=>(0,r.jsx)("div",{className:`${$t.f} ${h}`,style:{"--width":o,"--border":l,"--black":u,"--white":c,...v},...b});var Xt=x(875),Dt={};Dt.styleTagTransform=P(),Dt.setAttributes=y(),Dt.insert=m().bind(null,"head"),Dt.domAPI=E(),Dt.insertStyleElement=C();var ca=n()(Xt.A,Dt);const pa=Xt.A&&Xt.A.locals?Xt.A.locals:void 0,$r=({width:o="200px",height:l="180px",space:u="12%",bgColor:c,style:v,className:h,...b})=>(0,r.jsx)("div",{className:`${Xt.V}${h?` ${h}`:""}`,style:{"--width":o,"--height":l,"--space":u,"--bgColor":c,...v},...b});var Vt=x(333),Mt={};Mt.styleTagTransform=P(),Mt.setAttributes=y(),Mt.insert=m().bind(null,"head"),Mt.domAPI=E(),Mt.insertStyleElement=C();var va=n()(Vt.A,Mt);const ha=Vt.A&&Vt.A.locals?Vt.A.locals:void 0,qt=()=>Math.random()-.5,Xr=()=>~~(qt()*S(5,10)*10),Yr=()=>~~(qt()*S(2,8)*10),kr=()=>(1-qt())*S(1.1,1.4,!1),Fr=o=>o?.length?Qt(o):R(),Nr=({list:o=[],colors:l=[],width:u,padding:c,bgColor:v,style:h,...b})=>(0,r.jsx)("div",{className:"huxy-text-3d",style:{"--width":u,"--padding":c,"--bgColor":v,...h},...b,children:(0,r.jsx)("div",{className:"text-3d-container",children:o.map((g,D)=>{const O=g.time??S(6,24,!1).toFixed(2),L=g.delay??-S(0,O,!1).toFixed(2);return(0,r.jsx)("div",{className:"text-3d-item",style:{"--time":`${O}s`,"--center":g.center??`${Xr()}%`,"--rotate":g.rotate??`${Yr()}deg`,"--size":g.size??kr(),"--color":g.color??Fr(l),"--delay":`${L}s`},children:(0,r.jsx)("div",{className:"text-3d-item-card",children:(0,r.jsx)("span",{className:"link animate-text",children:g.label})})},g.label)})})});var Ot=x(588),Tt={};Tt.styleTagTransform=P(),Tt.setAttributes=y(),Tt.insert=m().bind(null,"head"),Tt.domAPI=E(),Tt.insertStyleElement=C();var xa=n()(Ot.Ay,Tt);const fa=Ot.Ay&&Ot.Ay.locals?Ot.Ay.locals:void 0,Hr=({time:o="3s",style:l,className:u,children:c,...v})=>(0,r.jsx)("div",{className:`${Ot.eq}${u?` ${u}`:""}`,style:{"--time":o,...l},...v,children:(0,r.jsx)("div",{className:Ot.Rz,children:c})});var Yt=x(722),Rt={};Rt.styleTagTransform=P(),Rt.setAttributes=y(),Rt.insert=m().bind(null,"head"),Rt.domAPI=E(),Rt.insertStyleElement=C();var ga=n()(Yt.A,Rt);const Ea=Yt.A&&Yt.A.locals?Yt.A.locals:void 0,Jr=({backColor:o="rgba(0, 0, 0, 0.3)",frontColor:l="rgba(255, 255, 255, 1)",time:u="4s",style:c,className:v,children:h,...b})=>(0,r.jsx)("div",{className:`${Yt.e}${v?` ${v}`:""}`,style:{"--backColor":o,"--frontColor":l,"--time":u,...c},...b,"data-text":h,children:h});var kt=x(547),St={};St.styleTagTransform=P(),St.setAttributes=y(),St.insert=m().bind(null,"head"),St.domAPI=E(),St.insertStyleElement=C();var Aa=n()(kt.A,St);const Ca=kt.A&&kt.A.locals?kt.A.locals:void 0,Gr=({startColor:o,endColor:l,style:u,className:c,children:v,...h})=>(0,r.jsx)("div",{className:`${kt.v}${c?` ${c}`:""}`,style:{"--startColor":o??R(),"--endColor":l??R(),...u},...h,children:v});var Ft=x(175),jt={};jt.styleTagTransform=P(),jt.setAttributes=y(),jt.insert=m().bind(null,"head"),jt.domAPI=E(),jt.insertStyleElement=C();var Da=n()(Ft.A,jt);const Ma=Ft.A&&Ft.A.locals?Ft.A.locals:void 0,Zr=({score:o=0,backColor:l="rgba(0, 0, 0, 0.3)",frontColor:u="var(--yellow2)",style:c,className:v,children:h,backend:b,...g})=>(0,r.jsx)("div",{className:`${Ft.J}${v?` ${v}`:""}`,style:{"--backColor":l,"--frontColor":u,"--score":`${o}`.includes("%")?o:`${o*100}%`,...c},...g,"data-text":h,children:b??h})})();var qr=A.sC,te=A.S9,re=A.ji,ee=A.Zp,oe=A.jl,ae=A.mc,se=A.ax,ie=A.e8,ne=A.xh,_e=A.Lv,de=A.C7,le=A.De,ce=A.yz,pe=A.ve,ue=A.B8,ve=A.Rh,he=A.aZ,me=A.VJ,xe=A.ke,fe=A.LI,be=A.Jn,ge=A.vj,Ee=A.P1,ye=A.XI,Ae=A.cp,Ce=A.xw,Pe=A.U$,De=A.E8,Me=A.dF,Oe=A.gX,Te=A.nQ,Re=A.Ub,Se=A.wH;export{qr as AnimateBorder,te as Barchart,re as BgBox,ee as Card,oe as Circle,ae as Container,se as CornerBorder,ie as Css3dModel,ne as Dashboard,_e as Fliper,de as HalfBorder,le as IconAnimate,ce as IconCarousel,pe as Light,ue as List,ve as Loading,he as Location,me as Piechart,xe as Progress,fe as RateScore,be as Ring,ge as Search,Ee as Spot,ye as Table,Ae as Taiji,Ce as Text3d,Pe as TextFilter,De as TextLoading,Me as TextMasked,Oe as Time,Te as TitleBorder,Re as TitleHeader,Se as Wave};
