import*as Dt from"react";var tr={673:(r,e,t)=>{t.d(e,{A:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-3d-models {
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
`,""]);const _=o},92:(r,e,t)=>{t.d(e,{Ay:()=>E,Nr:()=>d,Wm:()=>c,aX:()=>y,fj:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.g394U {
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
`,""]);var _="g394U",d="zasVJ",c="C5n3b",y="UdsvP";const E=o},316:(r,e,t)=>{t.d(e,{A:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.huxy-icon-animate-tooltip {
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
`,""]);const _=o},183:(r,e,t)=>{t.d(e,{A:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]);const _=o},871:(r,e,t)=>{t.d(e,{Ay:()=>y,DV:()=>_,Rn:()=>d,c6:()=>c});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-border-animate-dash {
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
  background-size: 8px 2px,
      8px 2px,
      2px 8px,
      2px 8px;
  background-position: 0 0,
      0 100%,
      0 0,
      100% 0;
}
.BHIzz {
  animation: huxy-border-animate-dash 0.5s infinite linear;
}
.Ltln8 {
  position: relative;
  height: 100%;
}
.Ltln8::before, .Ltln8::after {
  content: '';
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
`,""]);var _="tF3eM",d="BHIzz",c="Ltln8";const y=o},302:(r,e,t)=>{t.d(e,{Ay:()=>P,Oe:()=>u,W6:()=>_,a6:()=>y,jX:()=>E,sI:()=>c,tY:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.UJpqU {
  --bgColor: var(--appBgColor);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  background-image: linear-gradient(var(--bgColor) 14px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);
  background-size: 15px 15px,
      15px 15px;
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
  background-size: 75px 75px,
      75px 75px,
      15px 15px,
      15px 15px;
}
.eBK09 {
  --bgColor: rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0), linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0);
  background-position: 0 0,
      15px 15px;
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
`,""]);var _="UJpqU",d="VXk7W",c="q_1dQ",y="eBK09",E="o9pvC",u="Po9ZE";const P=o},737:(r,e,t)=>{t.d(e,{Ay:()=>u,HA:()=>y,JJ:()=>E,Lm:()=>_,MX:()=>c,WO:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.YeHmo {
  --borderColor: var(--appColor);
  --borderRadius: 2px;
}
.vpTzN {
  position: relative;
  border: 2px solid transparent;
}
.S3bPv:before, .S3bPv:after {
  content: '';
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
`,""]);var _="YeHmo",d="vpTzN",c="S3bPv",y="WYlJx",E="SMovL";const u=o},885:(r,e,t)=>{t.d(e,{Ay:()=>c,Lm:()=>_,OP:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.Usszw {
  --borderColor: var(--appColor);
  --borderRadius: 2px;
}
.XcsJP {
  position: relative;
  border: 2px solid transparent;
}
.XcsJP:before, .XcsJP:after {
  content: '';
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
`,""]);var _="Usszw",d="XcsJP";const c=o},230:(r,e,t)=>{t.d(e,{Ay:()=>y,Qo:()=>_,d0:()=>d,fc:()=>c});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.WY0lD {
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
  content: '';
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
`,""]);var _="WY0lD",d="_ORAK",c="Vggg7";const y=o},529:(r,e,t)=>{t.d(e,{Ay:()=>c,DD:()=>d,s5:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.MuUoF {
  --titleWidth: 280px;
  --titleHeight: 80px;
  --borderColor: rgba(0, 180, 220);
  height: var(--titleHeight);
  position: relative;
  z-index: 1;
}
.MuUoF:before {
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
  content: '';
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
`,""]);var _="MuUoF",d="fM2FI";const c=o},761:(r,e,t)=>{t.d(e,{Ay:()=>c,fV:()=>_,nb:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.huDNN {
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
`,""]);var _="huDNN",d="V5Fq4";const c=o},960:(r,e,t)=>{t.d(e,{Ay:()=>P,DD:()=>E,Qq:()=>u,gY:()=>d,qF:()=>c,y8:()=>_,zS:()=>y});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.nnDaG {
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
`,""]);var _="nnDaG",d="iJtPz",c="Bya6y",y="c6MGh",E="sb1hm",u="YDDrB";const P=o},202:(r,e,t)=>{t.d(e,{Ay:()=>c,T8:()=>_,c6:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]);var _="Krd0d",d="qcJ0N";const c=o},261:(r,e,t)=>{t.d(e,{Ay:()=>c,DD:()=>d,ao:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.myyKG {
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
  content: '';
  position: absolute;
  top: 15px;
  left: 20px;
  width: var(--width);
  height: var(--height);
  border-radius: 2px;
  background: var(--titleBgColor);
}
`,""]);var _="myyKG",d="AXWTP";const c=o},434:(r,e,t)=>{t.d(e,{Ay:()=>c,OH:()=>_,zx:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-skeleton-dashboard {
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
.DYspm::after {
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
  content: '';
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
`,""]);var _="DYspm",d="Rg6DD";const c=o},78:(r,e,t)=>{t.d(e,{Ay:()=>c,MY:()=>_,cw:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.YWtCI {
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
  content: '';
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
`,""]);var _="YWtCI",d="uBGAf";const c=o},736:(r,e,t)=>{t.d(e,{A:()=>d,q:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.IQu9g {
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
`,""]);var _="IQu9g";const d=o},985:(r,e,t)=>{t.d(e,{A:()=>d,f:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-progress-wave {
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
  line-height: var(--height);
  background: var(--bgColor);
  overflow: hidden;
  color: #fff;
}
.zFNbz::before, .zFNbz::after {
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
.zFNbz::before {
  counter-reset: percent var(--percent);
  content: counter(percent) '%';
  text-align: right;
  font-size: 12px;
  font-weight: 400;
}
.zFNbz::after {
  background: var(--waveColor);
  opacity: 0;
}
.zFNbz::after {
  animation: huxy-progress-wave var(--waveTime) ease-out infinite;
}
`,""]);var _="zFNbz";const d=o},804:(r,e,t)=>{t.d(e,{Ay:()=>c,HZ:()=>_,YZ:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-animate-border-ring {
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
`,""]);var _="WbFYr",d="XIIyj";const c=o},826:(r,e,t)=>{t.d(e,{A:()=>d,K:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.suwUY {
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
`,""]);var _="suwUY";const d=o},763:(r,e,t)=>{t.d(e,{A:()=>d,h:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-loading-wave {
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
}
.d9M97::after {
  animation: huxy-loading-wave var(--waveTime) ease-out infinite;
}
`,""]);var _="d9M97";const d=o},875:(r,e,t)=>{t.d(e,{A:()=>d,V:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-conic-light-animate {
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
  content: '';
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
  content: '';
  position: absolute;
  left: var(--space);
  bottom: 0;
  width: var(--bottomWidth);
  height: var(--height);
  background: var(--bottomColor);
  border-radius: 50%;
}
`,""]);var _="_ov1n";const d=o},715:(r,e,t)=>{t.d(e,{Ay:()=>c,Y2:()=>_,iU:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-loading-ball {
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
`,""]);var _="TikRE",d="CyLSO";const c=o},358:(r,e,t)=>{t.d(e,{A:()=>d,l:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-location {
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
  content: '';
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
`,""]);var _="DdhmP";const d=o},981:(r,e,t)=>{t.d(e,{A:()=>d,S:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-search {
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
  content: 'me';
  font-size: 12px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.r6hPc:after {
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
`,""]);var _="r6hPc";const d=o},925:(r,e,t)=>{t.d(e,{Ay:()=>c,KC:()=>_,mj:()=>d});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-spot {
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
  content: '';
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
`,""]);var _="JsH0T",d="S4gb8";const c=o},816:(r,e,t)=>{t.d(e,{A:()=>d,f:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.x6fRL {
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
  content: '';
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
`,""]);var _="x6fRL";const d=o},888:(r,e,t)=>{t.d(e,{A:()=>d,p:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-timer {
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
  content: '';
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
`,""]);var _="R1ObR";const d=o},175:(r,e,t)=>{t.d(e,{A:()=>d,J:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`.q9v4I {
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
`,""]);var _="q9v4I";const d=o},333:(r,e,t)=>{t.d(e,{A:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-text-3d {
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
`,""]);const _=o},588:(r,e,t)=>{t.d(e,{Ay:()=>c,Rz:()=>d,eq:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-text-filter {
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
`,""]);var _="_zrvj",d="ww0tY";const c=o},722:(r,e,t)=>{t.d(e,{A:()=>d,e:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-text-loading {
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
`,""]);var _="ZYC7Y";const d=o},547:(r,e,t)=>{t.d(e,{A:()=>d,v:()=>_});var i=t(758),a=t.n(i),s=t(935),n=t.n(s),o=n()(a());o.push([r.id,`@keyframes huxy-text-masked {
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
`,""]);var _="zg3Sy";const d=o},935:r=>{r.exports=function(e){var t=[];return t.toString=function(){return this.map(function(a){var s="",n=typeof a[5]<"u";return a[4]&&(s+="@supports (".concat(a[4],") {")),a[2]&&(s+="@media ".concat(a[2]," {")),n&&(s+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),s+=e(a),n&&(s+="}"),a[2]&&(s+="}"),a[4]&&(s+="}"),s}).join("")},t.i=function(a,s,n,o,_){typeof a=="string"&&(a=[[null,a,void 0]]);var d={};if(n)for(var c=0;c<this.length;c++){var y=this[c][0];y!=null&&(d[y]=!0)}for(var E=0;E<a.length;E++){var u=[].concat(a[E]);n&&d[u[0]]||(typeof _<"u"&&(typeof u[5]>"u"||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=_),s&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=s),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},758:r=>{r.exports=function(e){return e[1]}},197:(r,e)=>{var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(s,n,o){var _=null;if(o!==void 0&&(_=""+o),n.key!==void 0&&(_=""+n.key),"key"in n){o={};for(var d in n)d!=="key"&&(o[d]=n[d])}else o=n;return n=o.ref,{$$typeof:t,type:s,key:_,ref:n!==void 0?n:null,props:o}}e.Fragment=i,e.jsx=a,e.jsxs=a},85:(r,e,t)=>{r.exports=t(197)},591:r=>{var e=[];function t(s){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===s){n=o;break}return n}function i(s,n){for(var o={},_=[],d=0;d<s.length;d++){var c=s[d],y=n.base?c[0]+n.base:c[0],E=o[y]||0,u="".concat(y," ").concat(E);o[y]=E+1;var P=t(u),wt={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(P!==-1)e[P].references++,e[P].updater(wt);else{var Pt=a(wt,n);n.byIndex=d,e.splice(d,0,{identifier:u,updater:Pt,references:1})}_.push(u)}return _}function a(s,n){var o=n.domAPI(n);o.update(s);var _=function(c){if(c){if(c.css===s.css&&c.media===s.media&&c.sourceMap===s.sourceMap&&c.supports===s.supports&&c.layer===s.layer)return;o.update(s=c)}else o.remove()};return _}r.exports=function(s,n){n=n||{},s=s||[];var o=i(s,n);return function(d){d=d||[];for(var c=0;c<o.length;c++){var y=o[c],E=t(y);e[E].references--}for(var u=i(d,n),P=0;P<o.length;P++){var wt=o[P],Pt=t(wt);e[Pt].references===0&&(e[Pt].updater(),e.splice(Pt,1))}o=u}}},128:r=>{var e={};function t(a){if(typeof e[a]>"u"){var s=document.querySelector(a);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}e[a]=s}return e[a]}function i(a,s){var n=t(a);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(s)}r.exports=i},51:r=>{function e(t){var i=document.createElement("style");return t.setAttributes(i,t.attributes),t.insert(i,t.options),i}r.exports=e},855:(r,e,t)=>{function i(a){var s=t.nc;s&&a.setAttribute("nonce",s)}r.exports=i},740:r=>{function e(a,s,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var _=typeof n.layer<"u";_&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,_&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var d=n.sourceMap;d&&typeof btoa<"u"&&(o+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),s.styleTagTransform(o,a,s.options)}function t(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)}function i(a){if(typeof document>"u")return{update:function(){},remove:function(){}};var s=a.insertStyleElement(a);return{update:function(o){e(s,a,o)},remove:function(){t(s)}}}r.exports=i},656:r=>{function e(t,i){if(i.styleSheet)i.styleSheet.cssText=t;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(t))}}r.exports=e}},Zt={};function p(r){var e=Zt[r];if(e!==void 0)return e.exports;var t=Zt[r]={id:r,exports:{}};return tr[r](t,t.exports,p),t.exports}p.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return p.d(e,{a:e}),e},p.d=(r,e)=>{for(var t in e)p.o(e,t)&&!p.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},p.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),p.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},p.nc=void 0;var v={};p.d(v,{sC:()=>zr,S9:()=>Fr,ji:()=>Lr,Zp:()=>Hr,jl:()=>Zr,mc:()=>le,ax:()=>Or,e8:()=>Qt,xh:()=>Qr,Lv:()=>ur,C7:()=>Rr,De:()=>cr,yz:()=>Cr,ve:()=>Te,B8:()=>te,Rh:()=>ye,aZ:()=>ge,VJ:()=>ae,ke:()=>ie,LI:()=>Ye,Jn:()=>_e,vj:()=>fe,P1:()=>Pe,XI:()=>pe,cp:()=>Me,xw:()=>We,U$:()=>Ue,E8:()=>we,dF:()=>$e,gX:()=>me,nQ:()=>Wr,Ub:()=>Dr,wH:()=>ve});var Ft={};p.r(Ft),p.d(Ft,{"bg-box-cube":()=>D.a6,"bg-box-cubestrip":()=>D.sI,"bg-box-dot":()=>D.W6,"bg-box-grid":()=>D.jX,"bg-box-img":()=>D.Oe,"bg-box-strip":()=>D.tY,default:()=>Sr});var Nt={};p.r(Nt),p.d(Nt,{default:()=>Ir,"huxy-border-animate-dash":()=>S.Rn,"huxy-border-animate-solid":()=>S.c6,"huxy-border-wrap":()=>S.DV});var Ht={};p.r(Ht),p.d(Ht,{default:()=>Ae,"huxy-scale":()=>ht.mj,"huxy-spot":()=>ht.KC});var l=p(85);const rr=r=>r?.$$typeof&&typeof r.$$typeof=="symbol"&&r.$$typeof.description?.indexOf("react.")===0,Vt=rr,er=(r,e="px")=>`${r}`.replace(e,"")-0,j=er;var or=p(591),h=p.n(or),ar=p(740),m=p.n(ar),sr=p(128),x=p.n(sr),ir=p(855),f=p.n(ir),nr=p(51),b=p.n(nr),_r=p(656),g=p.n(_r),Kt=p(673),B={};B.styleTagTransform=g(),B.setAttributes=f(),B.insert=x().bind(null,"head"),B.domAPI=m(),B.insertStyleElement=b();var Co=h()(Kt.A,B);const Po=Kt.A&&Kt.A.locals?Kt.A.locals:void 0,dr=({list:r=[],size:e="360px",cardSize:t="42px",bottom:i="60px",style:a,...s})=>{const n=360/r.length;return(0,l.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":e,"--cardSize":t,"--bottom":i,...a},...s,children:(0,l.jsx)("div",{className:"model-container",children:r.map((o,_)=>(0,l.jsx)("div",{className:"model-item",style:{"--rotateY":`${n*_}deg`},children:(0,l.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:o.label,href:o.link,target:"_blank",children:[o.icon?(0,l.jsx)("img",{src:o.icon,alt:o.label}):null,Vt(o.icon)?o.icon:o.icon?(0,l.jsx)("img",{src:o.icon,alt:o.label}):null]})},o.label))})})},Qt=dr;var $t=p(316),W={};W.styleTagTransform=g(),W.setAttributes=f(),W.insert=x().bind(null,"head"),W.domAPI=m(),W.insertStyleElement=b();var Do=h()($t.A,W);const Mo=$t.A&&$t.A.locals?$t.A.locals:void 0,lr=({objs:r=[],models:e=[],height:t="480px",style:i,className:a,...s})=>(0,l.jsxs)("div",{className:`huxy-icon-animate-container${a?` ${a}`:""}`,style:{"--height":t,...i},...s,children:[(0,l.jsx)("div",{className:"huxy-icon-animate-materiels",children:r.map(({value:n,label:o,icon:_,link:d,type:c,style:y})=>(0,l.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${n}${c?"":" obj-img"}`,tooltip:c?void 0:o,href:d,target:"_blank",style:y,children:Vt(_)?_:(0,l.jsx)("img",{src:_,alt:o})},o))}),(0,l.jsx)(Qt,{list:e,size:`${j(t)-120}px`})]}),cr=lr;var R=p(92),I={};I.styleTagTransform=g(),I.setAttributes=f(),I.insert=x().bind(null,"head"),I.domAPI=m(),I.insertStyleElement=b();var Oo=h()(R.Ay,I);const To=R.Ay&&R.Ay.locals?R.Ay.locals:void 0,pr=({front:r,back:e,...t})=>(0,l.jsx)("div",{className:R.fj,...t,children:(0,l.jsxs)("div",{className:R.Nr,children:[(0,l.jsx)("div",{className:R.Wm,children:r}),(0,l.jsx)("div",{className:R.aX,children:e})]})}),ur=pr;var vr=r=>{var e={};return p.d(e,r),e},Ro=r=>()=>r;const O=vr({useCallback:()=>Dt.useCallback,useEffect:()=>Dt.useEffect,useMemo:()=>Dt.useMemo,useRef:()=>Dt.useRef,useState:()=>Dt.useState}),hr=(r=null)=>{const e=(0,O.useRef)(r);return()=>e},mr=hr,xr=(r={})=>{const e=mr(0)(),[t,i]=(0,O.useState)(r),a=(0,O.useCallback)(s=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>i(s))},[]);return(0,O.useEffect)(()=>()=>cancelAnimationFrame(e.current),[]),[t,a]},fr=xr,br=(r,e)=>{const t=(0,O.useRef)();(0,O.useEffect)(()=>{t.current=r},[r]),(0,O.useEffect)(()=>{if(e){const i=setInterval(()=>t.current(),e);return()=>clearInterval(i)}},[e])},gr=br;var Xt=p(183),U={};U.styleTagTransform=g(),U.setAttributes=f(),U.insert=x().bind(null,"head"),U.domAPI=m(),U.insertStyleElement=b();var So=h()(Xt.A,U);const jo=Xt.A&&Xt.A.locals?Xt.A.locals:void 0,Er=(r,e=60)=>(e=1.5*e,r.map((t,i)=>{const a=Math.random();let s=1;a<.3334?s=1.2:a<.6667&&(s=.8);const n=~~(i/3),o=i%3;let _=1.5*e*n;o===1&&(_+=e/2);const d=o*e+e/6*(o+1);return t.transform={x:_,y:d,s},t})),yr=(r,e=60)=>(e=2.25*e,r.map(t=>(t.transform.x-=2,t.transform.x+e<0&&(t.transform.x=~~(r.length/3)*e),t))),Ar=({width:r=60,wait:e=56,list:t=[],className:i,...a})=>{const s=(0,O.useMemo)(()=>Er(t,r),[]),[n,o]=fr(s),[_,d]=(0,O.useState)(e);gr(()=>{const E=yr(n,r);o(E)},_);const c=E=>{d(null)},y=E=>{d(e)};return(0,l.jsx)("div",{className:`huxy-icon-carousel${i?` ${i}`:""}`,...a,children:(0,l.jsx)("div",{className:"icon-container",children:n.map((E,u)=>(0,l.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${u%3===0?"lt":"lb"}`,tooltip:E.label,style:{transform:`translate(${E.transform.x}px, ${E.transform.y}px) scale(${E.transform.s})`,width:r},onMouseEnter:c,onMouseLeave:y,href:E.link,target:"_blank",children:(0,l.jsx)("img",{src:E.icon,alt:E.label})},E.label))})})},Cr=Ar;var z=p(529),w={};w.styleTagTransform=g(),w.setAttributes=f(),w.insert=x().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=b();var Lo=h()(z.Ay,w);const Bo=z.Ay&&z.Ay.locals?z.Ay.locals:void 0,Pr=({title:r,borderColor:e,titleWidth:t,titleHeight:i,style:a,className:s,...n})=>(0,l.jsx)("div",{className:`${z.s5}${s?` ${s}`:""}`,style:{"--borderColor":e,"--titleWidth":t,"--titleHeight":i,...a},...n,children:(0,l.jsx)("h2",{className:z.DD,children:r})}),Dr=Pr;var T=p(737),K={};K.styleTagTransform=g(),K.setAttributes=f(),K.insert=x().bind(null,"head"),K.domAPI=m(),K.insertStyleElement=b();var Wo=h()(T.Ay,K);const Io=T.Ay&&T.Ay.locals?T.Ay.locals:void 0,Mr=({size:r="8px",borderColor:e="var(--appColor)",half1:t=!0,half2:i=!0,style:a,className:s,children:n,...o})=>(0,l.jsx)("div",{className:`${T.Lm}${s?` ${s}`:""}`,style:{"--cornerSize":r,"--borderColor":e,...a},...o,children:(0,l.jsxs)("div",{className:`${T.WO}${t?` ${T.MX}`:""}`,children:[i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:T.HA}),(0,l.jsx)("span",{className:T.JJ})]}):null,n]})}),Or=Mr;var $=p(885),X={};X.styleTagTransform=g(),X.setAttributes=f(),X.insert=x().bind(null,"head"),X.domAPI=m(),X.insertStyleElement=b();var Uo=h()($.Ay,X);const zo=$.Ay&&$.Ay.locals?$.Ay.locals:void 0,Tr=({size:r="8px",borderColor:e="var(--appColor)",style:t,className:i,children:a,...s})=>(0,l.jsx)("div",{className:`${$.Lm}${i?` ${i}`:""}`,style:{"--cornerSize":r,"--borderColor":e,...t},...s,children:(0,l.jsx)("div",{className:$.OP,children:a})}),Rr=Tr;var D=p(302),Y={};Y.styleTagTransform=g(),Y.setAttributes=f(),Y.insert=x().bind(null,"head"),Y.domAPI=m(),Y.insertStyleElement=b();var wo=h()(D.Ay,Y);const Sr=D.Ay&&D.Ay.locals?D.Ay.locals:void 0,jr=({type:r="dot",bgColor:e,cubeColor:t,url:i,style:a,className:s,children:n,...o})=>{r=i?"img":r;const _=i?{backgroundImage:`url(${i})`}:void 0;return(0,l.jsx)("div",{className:`${Ft[`bg-box-${r}`]}${s?` ${s}`:""}`,style:{"--bgColor":e,"--cubeColor":t,..._,...a},...o,children:n})},Lr=jr;var L=p(230),k={};k.styleTagTransform=g(),k.setAttributes=f(),k.insert=x().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=b();var Ko=h()(L.Ay,k);const $o=L.Ay&&L.Ay.locals?L.Ay.locals:void 0,Br=({children:r,title:e,fontSize:t,borderSize:i,borderColor:a="var(--appColor)",space:s="10px",style:n,className:o,..._})=>(0,l.jsxs)("div",{className:`${L.Qo}${o?` ${o}`:""}`,style:{"--borderColor":a,"--space":s,"--fontSize":t,"--borderSize":i,...n},..._,children:[(0,l.jsx)("div",{className:L.d0,children:e}),(0,l.jsx)("div",{className:L.fc,children:r})]}),Wr=Br;var S=p(871),F={};F.styleTagTransform=g(),F.setAttributes=f(),F.insert=x().bind(null,"head"),F.domAPI=m(),F.insertStyleElement=b();var Xo=h()(S.Ay,F);const Ir=S.Ay&&S.Ay.locals?S.Ay.locals:void 0,Ur=({type:r="solid",space:e="2px",borderColor:t="var(--appColor)",style:i,className:a,children:s,...n})=>(0,l.jsx)("div",{className:`${S.DV}${a?` ${a}`:""}`,style:{"--space":e,"--borderColor":t,...i},...n,children:(0,l.jsx)("div",{className:Nt[`huxy-border-animate-${r==="dash"?"dash":"solid"}`],children:s})}),zr=Ur,wr=(r="",e=2,t="0")=>{const i=r.length;return i>=e?r:`${Array(e-i+1).join(t)}${r}`},Kr=wr,$r=()=>"#"+Kr((~~(Math.random()*(1<<24))).toString(16),6),A=$r,Xr=(r=0,e=0,t=!0)=>(r<e&&(r=[e,e=r][0]),t?~~(Math.random()*(r-e+1))+e:Math.random()*(r-e)+e),C=Xr,Yr=(r=[])=>r[C(r.length-1)],Jt=Yr;var N=p(761),H={};H.styleTagTransform=g(),H.setAttributes=f(),H.insert=x().bind(null,"head"),H.domAPI=m(),H.insertStyleElement=b();var Yo=h()(N.Ay,H);const ko=N.Ay&&N.Ay.locals?N.Ay.locals:void 0,qt=r=>r?.length?Jt(r):A(),kr=({list:r=10,height:e="240px",space:t="25px",itemWidth:i="30px",colors:a=[],color:s,style:n,className:o,..._})=>(0,l.jsx)("div",{className:`${N.fV}${o?` ${o}`:""}`,style:{"--height":e,...n},..._,children:(Array.isArray(r)?r:[...new Array(r)]).map((d,c)=>(0,l.jsx)("div",{className:N.nb,style:{"--space":t,"--itemWidth":i,"--bgColor":d?.color??s??`linear-gradient(to top, ${qt(a)}, ${qt(a)})`,"--itemHeight":d?.height??`${C(15,100)}%`,left:`${c*(j(t)+j(i))}px`}},`huxy-skeleton-barchart-${c}`))}),Fr=kr;var M=p(960),J={};J.styleTagTransform=g(),J.setAttributes=f(),J.insert=x().bind(null,"head"),J.domAPI=m(),J.insertStyleElement=b();var Fo=h()(M.Ay,J);const No=M.Ay&&M.Ay.locals?M.Ay.locals:void 0,Nr=({height:r="120px",leftColor:e,rightColor:t,topWidth:i,bottomWidth:a,style:s,className:n,...o})=>(0,l.jsxs)("div",{className:`${M.y8}${n?` ${n}`:""}`,style:{"--height":r,"--leftColor":e??A(),"--rightColor":t??A(),"--topWidth":i??`${C(30,60)}%`,"--bottomWidth":a??`${C(55,95)}%`,...s},...o,children:[(0,l.jsx)("div",{className:M.gY,children:(0,l.jsx)("div",{className:M.qF})}),(0,l.jsxs)("div",{className:M.zS,children:[(0,l.jsx)("h4",{className:M.DD}),(0,l.jsx)("p",{className:M.Qq})]})]}),Hr=Nr;var G=p(202),Z={};Z.styleTagTransform=g(),Z.setAttributes=f(),Z.insert=x().bind(null,"head"),Z.domAPI=m(),Z.insertStyleElement=b();var Ho=h()(G.Ay,Z);const Jo=G.Ay&&G.Ay.locals?G.Ay.locals:void 0,Jr=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],Gr=({size:r="300px",space:e="8px",style:t,className:i,...a})=>{const s=j(e)*3;return(0,l.jsx)("div",{className:`${G.T8}${i?` ${i}`:""}`,style:{"--size":r,...t},...a,children:Jr.map((n,o)=>{const _=s+j(n.borderWidth)*2+j(e)*2;return(0,l.jsx)("div",{className:G.c6,style:{"--itemSize":`calc(${r} - ${_}px)`,"--borderWidth":n.borderWidth,"--borderLeftColor":n.borderLeftColor,"--borderRightColor":n.borderRightColor,"--borderTopColor":n.borderTopColor,"--borderBottomColor":n.borderBottomColor,"--time":n.time,"--rotateStart":n.rotateStart,"--rotateEnd":n.rotateEnd}},`huxy-animate-border-circle-${o}`)})})},Zr=Gr;var V=p(434),Q={};Q.styleTagTransform=g(),Q.setAttributes=f(),Q.insert=x().bind(null,"head"),Q.domAPI=m(),Q.insertStyleElement=b();var Go=h()(V.Ay,Q);const Zo=V.Ay&&V.Ay.locals?V.Ay.locals:void 0,Vr=({size:r="400px",width:e="20px",space:t="20px",colors:i=[],style:a,className:s,...n})=>(0,l.jsx)("div",{className:`${V.OH}${s?` ${s}`:""}`,style:{"--size":r,"--width":e,"--space":t,"--color1":i[0],"--color2":i[1],"--color3":i[2],"--color4":i[3],"--color5":i[4],"--color6":i[5],"--color7":i[6],...a},...n,children:(0,l.jsx)("div",{className:V.zx})}),Qr=Vr;var q=p(78),tt={};tt.styleTagTransform=g(),tt.setAttributes=f(),tt.insert=x().bind(null,"head"),tt.domAPI=m(),tt.insertStyleElement=b();var Vo=h()(q.Ay,tt);const Qo=q.Ay&&q.Ay.locals?q.Ay.locals:void 0,qr=({row:r=8,leftColor:e="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:t="rgba(0, 0, 0, 0.2)",rightWidth:i="100px",itemHeight:a="20px",space:s="20px",className:n,...o})=>(0,l.jsx)("div",{className:`${q.MY}${n?` ${n}`:""}`,style:{"--rightWidth":i,"--itemHeight":a,"--space":s,"--leftColor":e,"--rightColor":t},...o,children:[...new Array(r)].map((_,d)=>(0,l.jsx)("div",{className:q.cw},`huxy-skeleton-list-${d}`))}),te=qr,re=(r,e=100)=>{const t=[];return[...new Array(r)].map((i,a)=>{a===r-1?t[a]=e:(t[a]=C(1,e-1),e-=t[a])}),t},ee=re;var Mt=p(736),rt={};rt.styleTagTransform=g(),rt.setAttributes=f(),rt.insert=x().bind(null,"head"),rt.domAPI=m(),rt.insertStyleElement=b();var qo=h()(Mt.A,rt);const ta=Mt.A&&Mt.A.locals?Mt.A.locals:void 0,Yt=r=>r?.length?Jt(r):A(),et=ee(4),oe=({height:r,colors:e=[],style:t,className:i,...a})=>(0,l.jsx)("div",{className:`${Mt.q}${i?` ${i}`:""}`,style:{"--height":r,"--color1":Yt(e),"--color2":Yt(e),"--color3":Yt(e),"--color4":Yt(e),"--percent1":`${et[0]}%`,"--percent2":`${et[0]+et[1]}%`,"--percent3":`${et[0]+et[1]+et[2]}%`,"--percent4":"100%",...t},...a}),ae=oe;var Ot=p(985),ot={};ot.styleTagTransform=g(),ot.setAttributes=f(),ot.insert=x().bind(null,"head"),ot.domAPI=m(),ot.insertStyleElement=b();var ra=h()(Ot.A,ot);const ea=Ot.A&&Ot.A.locals?Ot.A.locals:void 0,se=({percent:r,height:e="20px",bgColor:t="rgba(0, 0, 0, 0.15)",progressColor:i,borderRadius:a="4px",waveColor:s="rgba(255, 255, 255, 0.2)",waveTime:n="3s",style:o,className:_,...d})=>(0,l.jsx)("div",{className:`${Ot.f}${_?` ${_}`:""}`,style:{"--percent":r??C(33,99),"--height":e,"--bgColor":t,"--progressColor":i??A(),"--borderRadius":a,"--waveColor":s,"--waveTime":n,...o},...d}),ie=se;var at=p(804),st={};st.styleTagTransform=g(),st.setAttributes=f(),st.insert=x().bind(null,"head"),st.domAPI=m(),st.insertStyleElement=b();var oa=h()(at.Ay,st);const aa=at.Ay&&at.Ay.locals?at.Ay.locals:void 0,ne=({list:r=60,size:e="300px",itemWidth:t="30px",itemHeight:i="4px",bgColor:a="rgba(255, 255, 255 , 0.9)",shadowColor:s="rgba(255, 255, 255 , 0.6)",color:n,style:o,className:_,...d})=>(r=Array.isArray(r)?r:[...new Array(r)],(0,l.jsx)("div",{className:`${at.HZ}${_?` ${_}`:""}`,style:{"--size":e,"--itemWidth":t,"--itemHeight":i,"--bgColor":a,"--shadowColor":s,...o},...d,children:r.map((c,y)=>(0,l.jsx)("div",{className:at.YZ,style:{"--color":c?.color??n??A(),transform:`rotate(${360/r.length*y}deg)`}},`huxy-animate-border-ring-${y}`))})),_e=ne;var it=p(261),nt={};nt.styleTagTransform=g(),nt.setAttributes=f(),nt.insert=x().bind(null,"head"),nt.domAPI=m(),nt.insertStyleElement=b();var sa=h()(it.Ay,nt);const ia=it.Ay&&it.Ay.locals?it.Ay.locals:void 0,de=({children:r,hasTitle:e,titleBgColor:t,style:i,className:a,...s})=>(0,l.jsx)("div",{className:`${it.ao}${e?` ${it.DD}`:""}${a?` ${a}`:""}`,style:{"--titleBgColor":t??A(),...i},...s,children:r}),le=de;var Tt=p(826),_t={};_t.styleTagTransform=g(),_t.setAttributes=f(),_t.insert=x().bind(null,"head"),_t.domAPI=m(),_t.insertStyleElement=b();var na=h()(Tt.A,_t);const _a=Tt.A&&Tt.A.locals?Tt.A.locals:void 0,ce=({row:r=6,col:e=8,...t})=>(0,l.jsx)("div",{className:Tt.K,...t,children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:[...new Array(e)].map((i,a)=>(0,l.jsx)("th",{children:(0,l.jsx)("span",{})},`skeleton-table-th-${a}`))})}),(0,l.jsx)("tbody",{children:[...new Array(r)].map((i,a)=>(0,l.jsx)("tr",{children:[...new Array(e)].map((s,n)=>(0,l.jsx)("td",{children:(0,l.jsx)("span",{})},`skeleton-table-tr-${a}-${n}`))},`tr-${a}`))})]})}),pe=ce;var Rt=p(763),dt={};dt.styleTagTransform=g(),dt.setAttributes=f(),dt.insert=x().bind(null,"head"),dt.domAPI=m(),dt.insertStyleElement=b();var da=h()(Rt.A,dt);const la=Rt.A&&Rt.A.locals?Rt.A.locals:void 0,ue=({color:r="rgba(255, 255, 255, 0.1)",delay:e="2s",style:t,className:i,children:a,...s})=>(0,l.jsx)("div",{className:`${Rt.h}${i?` ${i}`:""}`,style:{"--waveColor":r,"--waveTime":e,...t},...s,children:a}),ve=ue;var St=p(888),lt={};lt.styleTagTransform=g(),lt.setAttributes=f(),lt.insert=x().bind(null,"head"),lt.domAPI=m(),lt.insertStyleElement=b();var ca=h()(St.A,lt);const pa=St.A&&St.A.locals?St.A.locals:void 0,he=r=>(0,l.jsx)("span",{className:St.p,...r}),me=he;var jt=p(981),ct={};ct.styleTagTransform=g(),ct.setAttributes=f(),ct.insert=x().bind(null,"head"),ct.domAPI=m(),ct.insertStyleElement=b();var ua=h()(jt.A,ct);const va=jt.A&&jt.A.locals?jt.A.locals:void 0,xe=r=>(0,l.jsx)("span",{className:jt.S,...r}),fe=xe;var Lt=p(358),pt={};pt.styleTagTransform=g(),pt.setAttributes=f(),pt.insert=x().bind(null,"head"),pt.domAPI=m(),pt.insertStyleElement=b();var ha=h()(Lt.A,pt);const ma=Lt.A&&Lt.A.locals?Lt.A.locals:void 0,be=r=>(0,l.jsx)("span",{className:Lt.l,...r}),ge=be;var ut=p(715),vt={};vt.styleTagTransform=g(),vt.setAttributes=f(),vt.insert=x().bind(null,"head"),vt.domAPI=m(),vt.insertStyleElement=b();var xa=h()(ut.Ay,vt);const fa=ut.Ay&&ut.Ay.locals?ut.Ay.locals:void 0,Ee=({list:r=7,size:e="40px",shadowSize:t="50px",time:i="1.6s",style:a,className:s,...n})=>(i=j(i,"s"),(0,l.jsx)("div",{className:`${ut.Y2}${s?` ${s}`:""}`,style:{"--size":e,"--shadowSize":t,"--time":`${i}s`,...a},...n,children:(Array.isArray(r)?r:[...new Array(r)]).map((o,_)=>(0,l.jsx)("div",{className:ut.iU,style:{"--delay":o?.delay??`${i/((r?.length??r)+1)*(_+1)-i}s`,"--bgColor":o?.color??A()}},`huxy-loading-ball-${_}`))})),ye=Ee;var ht=p(925),mt={};mt.styleTagTransform=g(),mt.setAttributes=f(),mt.insert=x().bind(null,"head"),mt.domAPI=m(),mt.insertStyleElement=b();var ba=h()(ht.Ay,mt);const Ae=ht.Ay&&ht.Ay.locals?ht.Ay.locals:void 0,Ce=({type:r="spot",size:e,color:t,shadowColor:i,style:a,className:s,...n})=>(0,l.jsx)("span",{className:`${Ht[`huxy-${r}`]}${s?` ${s}`:""}`,style:{"--size":e??`${C(6,30)}px`,"--color":t??A(),"--shadowColor":i??A(),...a},...n}),Pe=Ce;var Bt=p(816),xt={};xt.styleTagTransform=g(),xt.setAttributes=f(),xt.insert=x().bind(null,"head"),xt.domAPI=m(),xt.insertStyleElement=b();var ga=h()(Bt.A,xt);const Ea=Bt.A&&Bt.A.locals?Bt.A.locals:void 0,De=({width:r,border:e,black:t,white:i,style:a,className:s,...n})=>(0,l.jsx)("div",{className:`${Bt.f} ${s}`,style:{"--width":r,"--border":e,"--black":t,"--white":i,...a},...n}),Me=De;var Wt=p(875),ft={};ft.styleTagTransform=g(),ft.setAttributes=f(),ft.insert=x().bind(null,"head"),ft.domAPI=m(),ft.insertStyleElement=b();var ya=h()(Wt.A,ft);const Aa=Wt.A&&Wt.A.locals?Wt.A.locals:void 0,Oe=({width:r="200px",height:e="180px",space:t="12%",bgColor:i,style:a,className:s,...n})=>(0,l.jsx)("div",{className:`${Wt.V}${s?` ${s}`:""}`,style:{"--width":r,"--height":e,"--space":t,"--bgColor":i,...a},...n}),Te=Oe;var kt=p(333),bt={};bt.styleTagTransform=g(),bt.setAttributes=f(),bt.insert=x().bind(null,"head"),bt.domAPI=m(),bt.insertStyleElement=b();var Ca=h()(kt.A,bt);const Pa=kt.A&&kt.A.locals?kt.A.locals:void 0,Gt=()=>Math.random()-.5,Re=()=>~~(Gt()*C(5,10)*10),Se=()=>~~(Gt()*C(2,8)*10),je=()=>(1-Gt())*C(1.1,1.4,!1),Le=r=>r?.length?Jt(r):A(),Be=({list:r=[],colors:e=[],width:t,padding:i,bgColor:a,style:s,...n})=>(0,l.jsx)("div",{className:"huxy-text-3d",style:{"--width":t,"--padding":i,"--bgColor":a,...s},...n,children:(0,l.jsx)("div",{className:"text-3d-container",children:r.map((o,_)=>{const d=o.time??C(6,24,!1).toFixed(2),c=o.delay??-C(0,d,!1).toFixed(2);return(0,l.jsx)("div",{className:"text-3d-item",style:{"--time":`${d}s`,"--center":o.center??`${Re()}%`,"--rotate":o.rotate??`${Se()}deg`,"--size":o.size??je(),"--color":o.color??Le(e),"--delay":`${c}s`},children:(0,l.jsx)("div",{className:"text-3d-item-card",children:(0,l.jsx)("span",{className:"link animate-text",children:o.label})})},o.label)})})}),We=Be;var gt=p(588),Et={};Et.styleTagTransform=g(),Et.setAttributes=f(),Et.insert=x().bind(null,"head"),Et.domAPI=m(),Et.insertStyleElement=b();var Da=h()(gt.Ay,Et);const Ma=gt.Ay&&gt.Ay.locals?gt.Ay.locals:void 0,Ie=({time:r="3s",style:e,className:t,children:i,...a})=>(0,l.jsx)("div",{className:`${gt.eq}${t?` ${t}`:""}`,style:{"--time":r,...e},...a,children:(0,l.jsx)("div",{className:gt.Rz,children:i})}),Ue=Ie;var It=p(722),yt={};yt.styleTagTransform=g(),yt.setAttributes=f(),yt.insert=x().bind(null,"head"),yt.domAPI=m(),yt.insertStyleElement=b();var Oa=h()(It.A,yt);const Ta=It.A&&It.A.locals?It.A.locals:void 0,ze=({backColor:r="rgba(0, 0, 0, 0.3)",frontColor:e="rgba(255, 255, 255, 1)",time:t="4s",style:i,className:a,children:s,...n})=>(0,l.jsx)("div",{className:`${It.e}${a?` ${a}`:""}`,style:{"--backColor":r,"--frontColor":e,"--time":t,...i},...n,"data-text":s,children:s}),we=ze;var Ut=p(547),At={};At.styleTagTransform=g(),At.setAttributes=f(),At.insert=x().bind(null,"head"),At.domAPI=m(),At.insertStyleElement=b();var Ra=h()(Ut.A,At);const Sa=Ut.A&&Ut.A.locals?Ut.A.locals:void 0,Ke=({startColor:r,endColor:e,style:t,className:i,children:a,...s})=>(0,l.jsx)("div",{className:`${Ut.v}${i?` ${i}`:""}`,style:{"--startColor":r??A(),"--endColor":e??A(),...t},...s,children:a}),$e=Ke;var zt=p(175),Ct={};Ct.styleTagTransform=g(),Ct.setAttributes=f(),Ct.insert=x().bind(null,"head"),Ct.domAPI=m(),Ct.insertStyleElement=b();var ja=h()(zt.A,Ct);const La=zt.A&&zt.A.locals?zt.A.locals:void 0,Xe=({score:r=0,backColor:e="rgba(0, 0, 0, 0.3)",frontColor:t="var(--yellow2)",style:i,className:a,children:s,backend:n,...o})=>(0,l.jsx)("div",{className:`${zt.J}${a?` ${a}`:""}`,style:{"--backColor":e,"--frontColor":t,"--score":`${r}`.includes("%")?r:`${r*100}%`,...i},...o,"data-text":s,children:n??s}),Ye=Xe;var ke=v.sC,Fe=v.S9,Ne=v.ji,He=v.Zp,Je=v.jl,Ge=v.mc,Ze=v.ax,Ve=v.e8,Qe=v.xh,qe=v.Lv,to=v.C7,ro=v.De,eo=v.yz,oo=v.ve,ao=v.B8,so=v.Rh,io=v.aZ,no=v.VJ,_o=v.ke,lo=v.LI,co=v.Jn,po=v.vj,uo=v.P1,vo=v.XI,ho=v.cp,mo=v.xw,xo=v.U$,fo=v.E8,bo=v.dF,go=v.gX,Eo=v.nQ,yo=v.Ub,Ao=v.wH;export{ke as AnimateBorder,Fe as Barchart,Ne as BgBox,He as Card,Je as Circle,Ge as Container,Ze as CornerBorder,Ve as Css3dModel,Qe as Dashboard,qe as Fliper,to as HalfBorder,ro as IconAnimate,eo as IconCarousel,oo as Light,ao as List,so as Loading,io as Location,no as Piechart,_o as Progress,lo as RateScore,co as Ring,po as Search,uo as Spot,vo as Table,ho as Taiji,mo as Text3d,xo as TextFilter,fo as TextLoading,bo as TextMasked,go as Time,Eo as TitleBorder,yo as TitleHeader,Ao as Wave};
