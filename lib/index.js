import*as gr from"react";var Er={496:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-3d-models {
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
`,""]),r.locals={};const i=r},190:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.g394U {
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
`,""]),r.locals={"huxy-card-fliper":"g394U",card:"zasVJ",front:"C5n3b",back:"UdsvP"};const i=r},271:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.huxy-icon-animate-tooltip {
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
`,""]),r.locals={};const i=r},498:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]),r.locals={};const i=r},804:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-border-animate-dash {
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
`,""]),r.locals={"huxy-border-wrap":"tF3eM","huxy-border-animate-dash":"BHIzz","huxy-border-animate-solid":"Ltln8"};const i=r},289:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.UJpqU {
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
`,""]),r.locals={"bg-box-dot":"UJpqU","bg-box-strip":"VXk7W","bg-box-cubestrip":"q_1dQ","bg-box-cube":"eBK09","bg-box-grid":"o9pvC","bg-box-img":"Po9ZE"};const i=r},548:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.YeHmo {
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
`,""]),r.locals={"corner-wrap":"YeHmo",corner:"vpTzN",half:"S3bPv","corner-tl":"WYlJx","corner-br":"SMovL"};const i=r},479:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.Usszw {
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
`,""]),r.locals={"corner-wrap":"Usszw","corner-half":"XcsJP"};const i=r},96:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.WY0lD {
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
`,""]),r.locals={"huxy-title-border-wrap":"WY0lD","huxy-title-border-top":"_ORAK","huxy-title-border-box":"Vggg7"};const i=r},317:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.MuUoF {
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
`,""]),r.locals={"huxy-title-header-box":"MuUoF",title:"fM2FI"};const i=r},303:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.huDNN {
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
`,""]),r.locals={"huxy-skeleton-barchart":"huDNN","sk-bar-item":"V5Fq4"};const i=r},761:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.nnDaG {
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
`,""]),r.locals={"huxy-skeleton-card":"nnDaG","sk-card-left":"iJtPz","sk-card-img":"Bya6y","sk-card-right":"c6MGh",title:"sb1hm",text:"YDDrB"};const i=r},129:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]),r.locals={"huxy-animate-border-circle":"Krd0d","border-circle-item":"qcJ0N"};const i=r},917:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.myyKG {
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
`,""]),r.locals={"skeleton-container":"myyKG",title:"AXWTP"};const i=r},696:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-skeleton-dashboard {
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
`,""]),r.locals={"huxy-skeleton-dashboard":"DYspm",point:"Rg6DD"};const i=r},263:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.YWtCI {
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
`,""]),r.locals={"huxy-skeleton-list":"YWtCI","sk-list-item":"uBGAf"};const i=r},955:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.IQu9g {
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
`,""]),r.locals={"huxy-skeleton-piechart":"IQu9g"};const i=r},709:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-progress-wave {
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
`,""]),r.locals={"huxy-progress-wave":"zFNbz"};const i=r},664:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-animate-border-ring {
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
`,""]),r.locals={"huxy-animate-border-ring":"WbFYr","border-ring-item":"XIIyj"};const i=r},177:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.suwUY {
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
`,""]),r.locals={"huxy-skeleton-table":"suwUY"};const i=r},202:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-loading-wave {
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
`,""]),r.locals={"huxy-loading-wave":"d9M97"};const i=r},972:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-conic-light-animate {
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
`,""]),r.locals={conic:"_ov1n"};const i=r},75:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-loading-ball {
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
`,""]),r.locals={"huxy-loading-ball":"TikRE",ball:"CyLSO"};const i=r},871:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-location {
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
`,""]),r.locals={"huxy-location":"DdhmP"};const i=r},845:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-search {
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
`,""]),r.locals={"huxy-search":"r6hPc"};const i=r},943:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-spot {
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
`,""]),r.locals={"huxy-spot":"JsH0T","huxy-scale":"S4gb8"};const i=r},389:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.x6fRL {
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
`,""]),r.locals={"huxy-taiji":"x6fRL"};const i=r},833:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-timer {
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
`,""]),r.locals={"huxy-timer":"R1ObR"};const i=r},608:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`.q9v4I {
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
`,""]),r.locals={"huxy-rate-score":"q9v4I"};const i=r},735:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-text-3d {
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
`,""]),r.locals={};const i=r},814:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-text-filter {
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
`,""]),r.locals={"huxy-text-filter":"_zrvj","text-filter":"ww0tY"};const i=r},325:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-text-loading {
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
`,""]),r.locals={"huxy-text-loading":"ZYC7Y"};const i=r},82:(t,l,n)=>{n.d(l,{Z:()=>i});var _=n(601),a=n.n(_),s=n(609),e=n.n(s),r=e()(a());r.push([t.id,`@keyframes huxy-text-masked {
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
`,""]),r.locals={"huxy-text-masked":"zg3Sy"};const i=r},609:t=>{t.exports=function(l){var n=[];return n.toString=function(){return this.map(function(a){var s="",e=typeof a[5]<"u";return a[4]&&(s+="@supports (".concat(a[4],") {")),a[2]&&(s+="@media ".concat(a[2]," {")),e&&(s+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),s+=l(a),e&&(s+="}"),a[2]&&(s+="}"),a[4]&&(s+="}"),s}).join("")},n.i=function(a,s,e,r,i){typeof a=="string"&&(a=[[null,a,void 0]]);var M={};if(e)for(var m=0;m<this.length;m++){var D=this[m][0];D!=null&&(M[D]=!0)}for(var g=0;g<a.length;g++){var y=[].concat(a[g]);e&&M[y[0]]||(typeof i<"u"&&(typeof y[5]>"u"||(y[1]="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {").concat(y[1],"}")),y[5]=i),s&&(y[2]&&(y[1]="@media ".concat(y[2]," {").concat(y[1],"}")),y[2]=s),r&&(y[4]?(y[1]="@supports (".concat(y[4],") {").concat(y[1],"}"),y[4]=r):y[4]="".concat(r)),n.push(y))}},n}},601:t=>{t.exports=function(l){return l[1]}},837:(t,l,n)=>{var _=n(810),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),e=Object.prototype.hasOwnProperty,r=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function M(m,D,g){var y,f={},B=null,E=null;g!==void 0&&(B=""+g),D.key!==void 0&&(B=""+D.key),D.ref!==void 0&&(E=D.ref);for(y in D)e.call(D,y)&&!i.hasOwnProperty(y)&&(f[y]=D[y]);if(m&&m.defaultProps)for(y in D=m.defaultProps,D)f[y]===void 0&&(f[y]=D[y]);return{$$typeof:a,type:m,key:B,ref:E,props:f,_owner:r.current}}l.Fragment=s,l.jsx=M,l.jsxs=M},322:(t,l,n)=>{t.exports=n(837)},62:t=>{var l=[];function n(s){for(var e=-1,r=0;r<l.length;r++)if(l[r].identifier===s){e=r;break}return e}function _(s,e){for(var r={},i=[],M=0;M<s.length;M++){var m=s[M],D=e.base?m[0]+e.base:m[0],g=r[D]||0,y="".concat(D," ").concat(g);r[D]=g+1;var f=n(y),B={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(f!==-1)l[f].references++,l[f].updater(B);else{var E=a(B,e);e.byIndex=M,l.splice(M,0,{identifier:y,updater:E,references:1})}i.push(y)}return i}function a(s,e){var r=e.domAPI(e);r.update(s);var i=function(m){if(m){if(m.css===s.css&&m.media===s.media&&m.sourceMap===s.sourceMap&&m.supports===s.supports&&m.layer===s.layer)return;r.update(s=m)}else r.remove()};return i}t.exports=function(s,e){e=e||{},s=s||[];var r=_(s,e);return function(M){M=M||[];for(var m=0;m<r.length;m++){var D=r[m],g=n(D);l[g].references--}for(var y=_(M,e),f=0;f<r.length;f++){var B=r[f],E=n(B);l[E].references===0&&(l[E].updater(),l.splice(E,1))}r=y}}},793:t=>{var l={};function n(a){if(typeof l[a]>"u"){var s=document.querySelector(a);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}l[a]=s}return l[a]}function _(a,s){var e=n(a);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(s)}t.exports=_},173:t=>{function l(n){var _=document.createElement("style");return n.setAttributes(_,n.attributes),n.insert(_,n.options),_}t.exports=l},892:(t,l,n)=>{function _(a){var s=n.nc;s&&a.setAttribute("nonce",s)}t.exports=_},36:t=>{function l(a,s,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=typeof e.layer<"u";i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var M=e.sourceMap;M&&typeof btoa<"u"&&(r+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(M))))," */")),s.styleTagTransform(r,a,s.options)}function n(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)}function _(a){if(typeof document>"u")return{update:function(){},remove:function(){}};var s=a.insertStyleElement(a);return{update:function(r){l(s,a,r)},remove:function(){n(s)}}}t.exports=_},464:t=>{function l(n,_){if(_.styleSheet)_.styleSheet.cssText=n;else{for(;_.firstChild;)_.removeChild(_.firstChild);_.appendChild(document.createTextNode(n))}}t.exports=l},810:t=>{var l=_=>{var a={};return x.d(a,_),a},n=_=>()=>_;t.exports=gr}},mt={};function x(t){var l=mt[t];if(l!==void 0)return l.exports;var n=mt[t]={id:t,exports:{}};return Er[t](n,n.exports,x),n.exports}x.n=t=>{var l=t&&t.__esModule?()=>t.default:()=>t;return x.d(l,{a:l}),l},x.d=(t,l)=>{for(var n in l)x.o(l,n)&&!x.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},x.o=(t,l)=>Object.prototype.hasOwnProperty.call(t,l),x.nc=void 0;var C={};(()=>{x.d(C,{$V:()=>At,Bp:()=>St,Ak:()=>Ot,Zb:()=>Bt,Cd:()=>jt,W2:()=>kt,M9:()=>Pt,V5:()=>rt,A:()=>Wt,QN:()=>xt,aI:()=>Mt,sA:()=>vt,TK:()=>yt,_k:()=>sr,aV:()=>It,gb:()=>nr,Ye:()=>qt,df:()=>zt,Ex:()=>Zt,gd:()=>br,FM:()=>$t,ol:()=>Vt,z6:()=>rr,iA:()=>Yt,P8:()=>or,Qp:()=>cr,QV:()=>pr,R8:()=>hr,By:()=>vr,qp:()=>Jt,ql:()=>Tt,iL:()=>Ct,iC:()=>Nt});var t=x(322);const n=o=>o?.$$typeof&&typeof o.$$typeof=="symbol"&&o.$$typeof.description==="react.element",a=(o,d="px")=>`${o}`.replace(d,"")-0;var s=x(62),e=x.n(s),r=x(36),i=x.n(r),M=x(793),m=x.n(M),D=x(892),g=x.n(D),y=x(173),f=x.n(y),B=x(464),E=x.n(B),bn=x(496),j={};j.styleTagTransform=E(),j.setAttributes=g(),j.insert=m().bind(null,"head"),j.domAPI=i(),j.insertStyleElement=f();var te=e()(bn.Z,j);const re=bn.Z&&bn.Z.locals?bn.Z.locals:void 0,rt=({list:o=[],size:d="360px",cardSize:p="42px",bottom:c="60px",style:u,...h})=>{const v=360/o.length;return(0,t.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":d,"--cardSize":p,"--bottom":c,...u},...h,children:(0,t.jsx)("div",{className:"model-container",children:o.map((b,P)=>(0,t.jsx)("div",{className:"model-item",style:{"--rotateY":`${v*P}deg`},children:(0,t.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:b.label,href:b.link,target:"_blank",children:[b.icon?(0,t.jsx)("img",{src:b.icon,alt:b.label}):null,n(b.icon)?b.icon:b.icon?(0,t.jsx)("img",{src:b.icon,alt:b.label}):null]})},b.label))})})};var fn=x(271),W={};W.styleTagTransform=E(),W.setAttributes=g(),W.insert=m().bind(null,"head"),W.domAPI=i(),W.insertStyleElement=f();var oe=e()(fn.Z,W);const ae=fn.Z&&fn.Z.locals?fn.Z.locals:void 0,vt=({objs:o=[],models:d=[],height:p="480px",style:c,className:u,...h})=>(0,t.jsxs)("div",{className:`huxy-icon-animate-container${u?` ${u}`:""}`,style:{"--height":p,...c},...h,children:[(0,t.jsx)("div",{className:"huxy-icon-animate-materiels",children:o.map(({value:v,label:b,icon:P,link:O,type:S,style:vn})=>(0,t.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${v}${S?"":" obj-img"}`,tooltip:S?void 0:b,href:O,target:"_blank",style:vn,children:n(P)?P:(0,t.jsx)("img",{src:P,alt:b})},b))}),(0,t.jsx)(rt,{list:d,size:`${a(p)-120}px`})]});var gn=x(190),I={};I.styleTagTransform=E(),I.setAttributes=g(),I.insert=m().bind(null,"head"),I.domAPI=i(),I.insertStyleElement=f();var ie=e()(gn.Z,I);const En=gn.Z&&gn.Z.locals?gn.Z.locals:void 0,xt=({front:o,back:d,...p})=>(0,t.jsx)("div",{className:En["huxy-card-fliper"],...p,children:(0,t.jsxs)("div",{className:En.card,children:[(0,t.jsx)("div",{className:En.front,children:o}),(0,t.jsx)("div",{className:En.back,children:d})]})});var L=x(810);const bt=(o={})=>{const d=(0,L.useRef)(0),[p,c]=(0,L.useState)(o),u=(0,L.useCallback)(h=>{cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>c(h))},[]);return(0,L.useEffect)(()=>()=>cancelAnimationFrame(d.current),[]),[p,u]},ft=(o,d)=>{const p=(0,L.useRef)();(0,L.useEffect)(()=>{p.current=o},[o]),(0,L.useEffect)(()=>{if(d){const c=setInterval(()=>p.current(),d);return()=>clearInterval(c)}},[d])};var yn=x(498),U={};U.styleTagTransform=E(),U.setAttributes=g(),U.insert=m().bind(null,"head"),U.domAPI=i(),U.insertStyleElement=f();var ce=e()(yn.Z,U);const pe=yn.Z&&yn.Z.locals?yn.Z.locals:void 0,gt=(o,d=60)=>(d=1.5*d,o.map((p,c)=>{const u=Math.random();let h=1;u<.3334?h=1.2:u<.6667&&(h=.8);const v=~~(c/3),b=c%3;let P=1.5*d*v;b===1&&(P+=d/2);const O=b*d+d/6*(b+1);return p.transform={x:P,y:O,s:h},p})),Et=(o,d=60)=>(d=2.25*d,o.map(p=>(p.transform.x-=2,p.transform.x+d<0&&(p.transform.x=~~(o.length/3)*d),p))),yt=({width:o=60,wait:d=56,list:p=[],className:c,...u})=>{const h=(0,L.useMemo)(()=>gt(p,o),[]),[v,b]=bt(h),[P,O]=(0,L.useState)(d);ft(()=>{const R=Et(v,o);b(R)},P);const S=R=>{O(null)},vn=R=>{O(d)};return(0,t.jsx)("div",{className:`huxy-icon-carousel${c?` ${c}`:""}`,...u,children:(0,t.jsx)("div",{className:"icon-container",children:v.map((R,fr)=>(0,t.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${fr%3===0?"lt":"lb"}`,tooltip:R.label,style:{transform:`translate(${R.transform.x}px, ${R.transform.y}px) scale(${R.transform.s})`,width:o},onMouseEnter:S,onMouseLeave:vn,href:R.link,target:"_blank",children:(0,t.jsx)("img",{src:R.icon,alt:R.label})},R.label))})})};var Cn=x(317),w={};w.styleTagTransform=E(),w.setAttributes=g(),w.insert=m().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=f();var he=e()(Cn.Z,w);const et=Cn.Z&&Cn.Z.locals?Cn.Z.locals:void 0,Ct=({title:o,borderColor:d,titleWidth:p,titleHeight:c,style:u,className:h,...v})=>(0,t.jsx)("div",{className:`${et["huxy-title-header-box"]}${h?` ${h}`:""}`,style:{"--borderColor":d,"--titleWidth":p,"--titleHeight":c,...u},...v,children:(0,t.jsx)("h2",{className:et.title,children:o})});var Pn=x(548),z={};z.styleTagTransform=E(),z.setAttributes=g(),z.insert=m().bind(null,"head"),z.domAPI=i(),z.insertStyleElement=f();var ve=e()(Pn.Z,z);const xn=Pn.Z&&Pn.Z.locals?Pn.Z.locals:void 0,Pt=({size:o="8px",borderColor:d="var(--appColor)",half1:p=!0,half2:c=!0,style:u,className:h,children:v,...b})=>(0,t.jsx)("div",{className:`${xn["corner-wrap"]}${h?` ${h}`:""}`,style:{"--cornerSize":o,"--borderColor":d,...u},...b,children:(0,t.jsxs)("div",{className:`${xn.corner}${p?` ${xn.half}`:""}`,children:[c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:xn["corner-tl"]}),(0,t.jsx)("span",{className:xn["corner-br"]})]}):null,v]})});var Mn=x(479),K={};K.styleTagTransform=E(),K.setAttributes=g(),K.insert=m().bind(null,"head"),K.domAPI=i(),K.insertStyleElement=f();var be=e()(Mn.Z,K);const ot=Mn.Z&&Mn.Z.locals?Mn.Z.locals:void 0,Mt=({size:o="8px",borderColor:d="var(--appColor)",style:p,className:c,children:u,...h})=>(0,t.jsx)("div",{className:`${ot["corner-wrap"]}${c?` ${c}`:""}`,style:{"--cornerSize":o,"--borderColor":d,...p},...h,children:(0,t.jsx)("div",{className:ot["corner-half"],children:u})});var Dn=x(289),Z={};Z.styleTagTransform=E(),Z.setAttributes=g(),Z.insert=m().bind(null,"head"),Z.domAPI=i(),Z.insertStyleElement=f();var ge=e()(Dn.Z,Z);const Dt=Dn.Z&&Dn.Z.locals?Dn.Z.locals:void 0,Ot=({type:o="dot",bgColor:d,cubeColor:p,url:c,style:u,className:h,children:v,...b})=>{o=c?"img":o;const P=c?{backgroundImage:`url(${c})`}:void 0;return(0,t.jsx)("div",{className:`${Dt[`bg-box-${o}`]}${h?` ${h}`:""}`,style:{"--bgColor":d,"--cubeColor":p,...P,...u},...b,children:v})};var On=x(96),$={};$.styleTagTransform=E(),$.setAttributes=g(),$.insert=m().bind(null,"head"),$.domAPI=i(),$.insertStyleElement=f();var ye=e()(On.Z,$);const qn=On.Z&&On.Z.locals?On.Z.locals:void 0,Tt=({children:o,title:d,fontSize:p,borderSize:c,borderColor:u="var(--appColor)",space:h="10px",style:v,className:b,...P})=>(0,t.jsxs)("div",{className:`${qn["huxy-title-border-wrap"]}${b?` ${b}`:""}`,style:{"--borderColor":u,"--space":h,"--fontSize":p,"--borderSize":c,...v},...P,children:[(0,t.jsx)("div",{className:qn["huxy-title-border-top"],children:d}),(0,t.jsx)("div",{className:qn["huxy-title-border-box"],children:o})]});var Tn=x(804),k={};k.styleTagTransform=E(),k.setAttributes=g(),k.insert=m().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=f();var Pe=e()(Tn.Z,k);const at=Tn.Z&&Tn.Z.locals?Tn.Z.locals:void 0,At=({type:o="solid",space:d="2px",borderColor:p="var(--appColor)",style:c,className:u,children:h,...v})=>(0,t.jsx)("div",{className:`${at["huxy-border-wrap"]}${u?` ${u}`:""}`,style:{"--space":d,"--borderColor":p,...c},...v,children:(0,t.jsx)("div",{className:at[`huxy-border-animate-${o==="dash"?"dash":"solid"}`],children:h})}),Rt=(o="",d=0,p="0")=>{const c=o.length;return c>=d?o:`${Array(d-c+1).join(p)}${o}`},T=()=>"#"+Rt((~~(Math.random()*(1<<24))).toString(16),6),A=(o=0,d=0,p=!0)=>(o<d&&(o=[d,d=o][0]),p?~~(Math.random()*(o-d+1))+d:Math.random()*(o-d)+d),nt=(o=[])=>o[A(o.length-1)];var An=x(303),X={};X.styleTagTransform=E(),X.setAttributes=g(),X.insert=m().bind(null,"head"),X.domAPI=i(),X.insertStyleElement=f();var Re=e()(An.Z,X);const st=An.Z&&An.Z.locals?An.Z.locals:void 0,it=o=>o?.length?nt(o):T(),St=({list:o=10,height:d="240px",space:p="25px",itemWidth:c="30px",colors:u=[],color:h,style:v,className:b,...P})=>(0,t.jsx)("div",{className:`${st["huxy-skeleton-barchart"]}${b?` ${b}`:""}`,style:{"--height":d,...v},...P,children:(Array.isArray(o)?o:[...new Array(o)]).map((O,S)=>(0,t.jsx)("div",{className:st["sk-bar-item"],style:{"--space":p,"--itemWidth":c,"--bgColor":O?.color??h??`linear-gradient(to top, ${it(u)}, ${it(u)})`,"--itemHeight":O?.height??`${A(15,100)}%`,left:`${S*(a(p)+a(c))}px`}},`huxy-skeleton-barchart-${S}`))});var Rn=x(761),Y={};Y.styleTagTransform=E(),Y.setAttributes=g(),Y.insert=m().bind(null,"head"),Y.domAPI=i(),Y.insertStyleElement=f();var Be=e()(Rn.Z,Y);const F=Rn.Z&&Rn.Z.locals?Rn.Z.locals:void 0,Bt=({height:o="120px",leftColor:d,rightColor:p,topWidth:c,bottomWidth:u,style:h,className:v,...b})=>(0,t.jsxs)("div",{className:`${F["huxy-skeleton-card"]}${v?` ${v}`:""}`,style:{"--height":o,"--leftColor":d??T(),"--rightColor":p??T(),"--topWidth":c??`${A(30,60)}%`,"--bottomWidth":u??`${A(55,95)}%`,...h},...b,children:[(0,t.jsx)("div",{className:F["sk-card-left"],children:(0,t.jsx)("div",{className:F["sk-card-img"]})}),(0,t.jsxs)("div",{className:F["sk-card-right"],children:[(0,t.jsx)("h4",{className:F.title}),(0,t.jsx)("p",{className:F.text})]})]});var Sn=x(129),N={};N.styleTagTransform=E(),N.setAttributes=g(),N.insert=m().bind(null,"head"),N.domAPI=i(),N.insertStyleElement=f();var je=e()(Sn.Z,N);const lt=Sn.Z&&Sn.Z.locals?Sn.Z.locals:void 0,Lt=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],jt=({size:o="300px",space:d="8px",style:p,className:c,...u})=>{let h=a(d)*3;return(0,t.jsx)("div",{className:`${lt["huxy-animate-border-circle"]}${c?` ${c}`:""}`,style:{"--size":o,...p},...u,children:Lt.map((v,b)=>(h=h+a(v.borderWidth)*2+a(d)*2,(0,t.jsx)("div",{className:lt["border-circle-item"],style:{"--itemSize":`calc(${o} - ${h}px)`,"--borderWidth":v.borderWidth,"--borderLeftColor":v.borderLeftColor,"--borderRightColor":v.borderRightColor,"--borderTopColor":v.borderTopColor,"--borderBottomColor":v.borderBottomColor,"--time":v.time,"--rotateStart":v.rotateStart,"--rotateEnd":v.rotateEnd}},`huxy-animate-border-circle-${b}`)))})};var Bn=x(696),H={};H.styleTagTransform=E(),H.setAttributes=g(),H.insert=m().bind(null,"head"),H.domAPI=i(),H.insertStyleElement=f();var Ie=e()(Bn.Z,H);const dt=Bn.Z&&Bn.Z.locals?Bn.Z.locals:void 0,Wt=({size:o="400px",width:d="20px",space:p="20px",colors:c=[],style:u,className:h,...v})=>(0,t.jsx)("div",{className:`${dt["huxy-skeleton-dashboard"]}${h?` ${h}`:""}`,style:{"--size":o,"--width":d,"--space":p,"--color1":c[0],"--color2":c[1],"--color3":c[2],"--color4":c[3],"--color5":c[4],"--color6":c[5],"--color7":c[6],...u},...v,children:(0,t.jsx)("div",{className:dt.point})});var Ln=x(263),J={};J.styleTagTransform=E(),J.setAttributes=g(),J.insert=m().bind(null,"head"),J.domAPI=i(),J.insertStyleElement=f();var we=e()(Ln.Z,J);const _t=Ln.Z&&Ln.Z.locals?Ln.Z.locals:void 0,It=({row:o=8,leftColor:d="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:p="rgba(0, 0, 0, 0.2)",rightWidth:c="100px",itemHeight:u="20px",space:h="20px",className:v,...b})=>(0,t.jsx)("div",{className:`${_t["huxy-skeleton-list"]}${v?` ${v}`:""}`,style:{"--rightWidth":c,"--itemHeight":u,"--space":h,"--leftColor":d,"--rightColor":p},...b,children:[...new Array(o)].map((P,O)=>(0,t.jsx)("div",{className:_t["sk-list-item"]},`huxy-skeleton-list-${O}`))}),Ut=(o,d=100)=>{const p=[];return[...new Array(o)].map((c,u)=>{u===o-1?p[u]=d:(p[u]=A(1,d-1),d-=p[u])}),p};var jn=x(955),G={};G.styleTagTransform=E(),G.setAttributes=g(),G.insert=m().bind(null,"head"),G.domAPI=i(),G.insertStyleElement=f();var Ze=e()(jn.Z,G);const wt=jn.Z&&jn.Z.locals?jn.Z.locals:void 0,Wn=o=>o?.length?nt(o):T(),V=Ut(4),zt=({height:o,colors:d=[],style:p,className:c,...u})=>(0,t.jsx)("div",{className:`${wt["huxy-skeleton-piechart"]}${c?` ${c}`:""}`,style:{"--height":o,"--color1":Wn(d),"--color2":Wn(d),"--color3":Wn(d),"--color4":Wn(d),"--percent1":`${V[0]}%`,"--percent2":`${V[0]+V[1]}%`,"--percent3":`${V[0]+V[1]+V[2]}%`,"--percent4":"100%",...p},...u});var In=x(709),Q={};Q.styleTagTransform=E(),Q.setAttributes=g(),Q.insert=m().bind(null,"head"),Q.domAPI=i(),Q.insertStyleElement=f();var ke=e()(In.Z,Q);const Kt=In.Z&&In.Z.locals?In.Z.locals:void 0,Zt=({percent:o,height:d="20px",bgColor:p="rgba(0, 0, 0, 0.15)",progressColor:c,borderRadius:u="4px",waveColor:h="rgba(255, 255, 255, 0.2)",waveTime:v="3s",style:b,className:P,...O})=>(0,t.jsx)("div",{className:`${Kt["huxy-progress-wave"]}${P?` ${P}`:""}`,style:{"--percent":o??A(33,99),"--height":d,"--bgColor":p,"--progressColor":c??T(),"--borderRadius":u,"--waveColor":h,"--waveTime":v,...b},...O});var Un=x(664),q={};q.styleTagTransform=E(),q.setAttributes=g(),q.insert=m().bind(null,"head"),q.domAPI=i(),q.insertStyleElement=f();var Ye=e()(Un.Z,q);const ct=Un.Z&&Un.Z.locals?Un.Z.locals:void 0,$t=({list:o=60,size:d="300px",itemWidth:p="30px",itemHeight:c="4px",bgColor:u="rgba(255, 255, 255 , 0.9)",shadowColor:h="rgba(255, 255, 255 , 0.6)",color:v,style:b,className:P,...O})=>(o=Array.isArray(o)?o:[...new Array(o)],(0,t.jsx)("div",{className:`${ct["huxy-animate-border-ring"]}${P?` ${P}`:""}`,style:{"--size":d,"--itemWidth":p,"--itemHeight":c,"--bgColor":u,"--shadowColor":h,...b},...O,children:o.map((S,vn)=>(0,t.jsx)("div",{className:ct["border-ring-item"],style:{"--color":S?.color??v??T(),transform:`rotate(${360/o.length*vn}deg)`}},`huxy-animate-border-ring-${vn}`))}));var wn=x(917),nn={};nn.styleTagTransform=E(),nn.setAttributes=g(),nn.insert=m().bind(null,"head"),nn.domAPI=i(),nn.insertStyleElement=f();var Ne=e()(wn.Z,nn);const pt=wn.Z&&wn.Z.locals?wn.Z.locals:void 0,kt=({children:o,hasTitle:d,titleBgColor:p,style:c,className:u,...h})=>(0,t.jsx)("div",{className:`${pt["skeleton-container"]}${d?` ${pt.title}`:""}${u?` ${u}`:""}`,style:{"--titleBgColor":p??T(),...c},...h,children:o});var zn=x(177),tn={};tn.styleTagTransform=E(),tn.setAttributes=g(),tn.insert=m().bind(null,"head"),tn.domAPI=i(),tn.insertStyleElement=f();var Je=e()(zn.Z,tn);const Xt=zn.Z&&zn.Z.locals?zn.Z.locals:void 0,Yt=({row:o=6,col:d=8,...p})=>(0,t.jsx)("div",{className:Xt["huxy-skeleton-table"],...p,children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:[...new Array(d)].map((c,u)=>(0,t.jsx)("th",{children:(0,t.jsx)("span",{})},`skeleton-table-th-${u}`))})}),(0,t.jsx)("tbody",{children:[...new Array(o)].map((c,u)=>(0,t.jsx)("tr",{children:[...new Array(d)].map((h,v)=>(0,t.jsx)("td",{children:(0,t.jsx)("span",{})},`skeleton-table-tr-${u}-${v}`))},`tr-${u}`))})]})});var Kn=x(202),rn={};rn.styleTagTransform=E(),rn.setAttributes=g(),rn.insert=m().bind(null,"head"),rn.domAPI=i(),rn.insertStyleElement=f();var Ve=e()(Kn.Z,rn);const Ft=Kn.Z&&Kn.Z.locals?Kn.Z.locals:void 0,Nt=({color:o="rgba(255, 255, 255, 0.1)",delay:d="2s",style:p,className:c,children:u,...h})=>(0,t.jsx)("div",{className:`${Ft["huxy-loading-wave"]}${c?` ${c}`:""}`,style:{"--waveColor":o,"--waveTime":d,...p},...h,children:u});var Zn=x(833),en={};en.styleTagTransform=E(),en.setAttributes=g(),en.insert=m().bind(null,"head"),en.domAPI=i(),en.insertStyleElement=f();var qe=e()(Zn.Z,en);const Ht=Zn.Z&&Zn.Z.locals?Zn.Z.locals:void 0,Jt=o=>(0,t.jsx)("span",{className:Ht["huxy-timer"],...o});var $n=x(845),on={};on.styleTagTransform=E(),on.setAttributes=g(),on.insert=m().bind(null,"head"),on.domAPI=i(),on.insertStyleElement=f();var to=e()($n.Z,on);const Gt=$n.Z&&$n.Z.locals?$n.Z.locals:void 0,Vt=o=>(0,t.jsx)("span",{className:Gt["huxy-search"],...o});var kn=x(871),an={};an.styleTagTransform=E(),an.setAttributes=g(),an.insert=m().bind(null,"head"),an.domAPI=i(),an.insertStyleElement=f();var eo=e()(kn.Z,an);const Qt=kn.Z&&kn.Z.locals?kn.Z.locals:void 0,qt=o=>(0,t.jsx)("span",{className:Qt["huxy-location"],...o});var Xn=x(75),sn={};sn.styleTagTransform=E(),sn.setAttributes=g(),sn.insert=m().bind(null,"head"),sn.domAPI=i(),sn.insertStyleElement=f();var ao=e()(Xn.Z,sn);const ut=Xn.Z&&Xn.Z.locals?Xn.Z.locals:void 0,nr=({list:o=7,size:d="40px",shadowSize:p="50px",time:c="1.6s",style:u,className:h,...v})=>(c=a(c,"s"),(0,t.jsx)("div",{className:`${ut["huxy-loading-ball"]}${h?` ${h}`:""}`,style:{"--size":d,"--shadowSize":p,"--time":`${c}s`,...u},...v,children:(Array.isArray(o)?o:[...new Array(o)]).map((b,P)=>(0,t.jsx)("div",{className:ut.ball,style:{"--delay":b?.delay??`${c/((o?.length??o)+1)*(P+1)-c}s`,"--bgColor":b?.color??T()}},`huxy-loading-ball-${P}`))}));var Yn=x(943),ln={};ln.styleTagTransform=E(),ln.setAttributes=g(),ln.insert=m().bind(null,"head"),ln.domAPI=i(),ln.insertStyleElement=f();var io=e()(Yn.Z,ln);const tr=Yn.Z&&Yn.Z.locals?Yn.Z.locals:void 0,rr=({type:o="spot",size:d,color:p,shadowColor:c,style:u,className:h,...v})=>(0,t.jsx)("span",{className:`${tr[`huxy-${o}`]}${h?` ${h}`:""}`,style:{"--size":d??`${A(6,30)}px`,"--color":p??T(),"--shadowColor":c??T(),...u},...v});var Fn=x(389),dn={};dn.styleTagTransform=E(),dn.setAttributes=g(),dn.insert=m().bind(null,"head"),dn.domAPI=i(),dn.insertStyleElement=f();var _o=e()(Fn.Z,dn);const er=Fn.Z&&Fn.Z.locals?Fn.Z.locals:void 0,or=({width:o,border:d,black:p,white:c,style:u,className:h,...v})=>(0,t.jsx)("div",{className:`${er["huxy-taiji"]} ${h}`,style:{"--width":o,"--border":d,"--black":p,"--white":c,...u},...v});var Nn=x(972),_n={};_n.styleTagTransform=E(),_n.setAttributes=g(),_n.insert=m().bind(null,"head"),_n.domAPI=i(),_n.insertStyleElement=f();var po=e()(Nn.Z,_n);const ar=Nn.Z&&Nn.Z.locals?Nn.Z.locals:void 0,sr=({width:o="200px",height:d="180px",space:p="12%",bgColor:c,style:u,className:h,...v})=>(0,t.jsx)("div",{className:`${ar.conic}${h?` ${h}`:""}`,style:{"--width":o,"--height":d,"--space":p,"--bgColor":c,...u},...v});var Hn=x(735),cn={};cn.styleTagTransform=E(),cn.setAttributes=g(),cn.insert=m().bind(null,"head"),cn.domAPI=i(),cn.insertStyleElement=f();var ho=e()(Hn.Z,cn);const mo=Hn.Z&&Hn.Z.locals?Hn.Z.locals:void 0,tt=()=>Math.random()-.5,ir=()=>~~(tt()*A(5,10)*10),lr=()=>~~(tt()*A(2,8)*10),dr=()=>(1-tt())*A(1.1,1.4,!1),_r=o=>o?.length?nt(o):T(),cr=({list:o=[],colors:d=[],width:p,padding:c,bgColor:u,style:h,...v})=>(0,t.jsx)("div",{className:"huxy-text-3d",style:{"--width":p,"--padding":c,"--bgColor":u,...h},...v,children:(0,t.jsx)("div",{className:"text-3d-container",children:o.map((b,P)=>{const O=b.time??A(6,24,!1).toFixed(2),S=b.delay??-A(0,O,!1).toFixed(2);return(0,t.jsx)("div",{className:"text-3d-item",style:{"--time":`${O}s`,"--center":b.center??`${ir()}%`,"--rotate":b.rotate??`${lr()}deg`,"--size":b.size??dr(),"--color":b.color??_r(d),"--delay":`${S}s`},children:(0,t.jsx)("div",{className:"text-3d-item-card",children:(0,t.jsx)("span",{className:"link animate-text",children:b.label})})},b.label)})})});var Jn=x(814),pn={};pn.styleTagTransform=E(),pn.setAttributes=g(),pn.insert=m().bind(null,"head"),pn.domAPI=i(),pn.insertStyleElement=f();var xo=e()(Jn.Z,pn);const ht=Jn.Z&&Jn.Z.locals?Jn.Z.locals:void 0,pr=({time:o="3s",style:d,className:p,children:c,...u})=>(0,t.jsx)("div",{className:`${ht["huxy-text-filter"]}${p?` ${p}`:""}`,style:{"--time":o,...d},...u,children:(0,t.jsx)("div",{className:ht["text-filter"],children:c})});var Gn=x(325),un={};un.styleTagTransform=E(),un.setAttributes=g(),un.insert=m().bind(null,"head"),un.domAPI=i(),un.insertStyleElement=f();var fo=e()(Gn.Z,un);const ur=Gn.Z&&Gn.Z.locals?Gn.Z.locals:void 0,hr=({backColor:o="rgba(0, 0, 0, 0.3)",frontColor:d="rgba(255, 255, 255, 1)",time:p="4s",style:c,className:u,children:h,...v})=>(0,t.jsx)("div",{className:`${ur["huxy-text-loading"]}${u?` ${u}`:""}`,style:{"--backColor":o,"--frontColor":d,"--time":p,...c},...v,"data-text":h,children:h});var Vn=x(82),hn={};hn.styleTagTransform=E(),hn.setAttributes=g(),hn.insert=m().bind(null,"head"),hn.domAPI=i(),hn.insertStyleElement=f();var Eo=e()(Vn.Z,hn);const mr=Vn.Z&&Vn.Z.locals?Vn.Z.locals:void 0,vr=({startColor:o,endColor:d,style:p,className:c,children:u,...h})=>(0,t.jsx)("div",{className:`${mr["huxy-text-masked"]}${c?` ${c}`:""}`,style:{"--startColor":o??T(),"--endColor":d??T(),...p},...h,children:u});var Qn=x(608),mn={};mn.styleTagTransform=E(),mn.setAttributes=g(),mn.insert=m().bind(null,"head"),mn.domAPI=i(),mn.insertStyleElement=f();var Co=e()(Qn.Z,mn);const xr=Qn.Z&&Qn.Z.locals?Qn.Z.locals:void 0,br=({score:o=0,backColor:d="rgba(0, 0, 0, 0.3)",frontColor:p="var(--yellow2)",style:c,className:u,children:h,backend:v,...b})=>(0,t.jsx)("div",{className:`${xr["huxy-rate-score"]}${u?` ${u}`:""}`,style:{"--backColor":d,"--frontColor":p,"--score":`${o}`.includes("%")?o:`${o*100}%`,...c},...b,"data-text":h,children:v??h})})();var yr=C.$V,Cr=C.Bp,Pr=C.Ak,Mr=C.Zb,Dr=C.Cd,Or=C.W2,Tr=C.M9,Ar=C.V5,Rr=C.A,Sr=C.QN,Br=C.aI,Lr=C.sA,jr=C.TK,Wr=C._k,Ir=C.aV,Ur=C.gb,wr=C.Ye,zr=C.df,Kr=C.Ex,Zr=C.gd,$r=C.FM,kr=C.ol,Xr=C.z6,Yr=C.iA,Fr=C.P8,Nr=C.Qp,Hr=C.QV,Jr=C.R8,Gr=C.By,Vr=C.qp,Qr=C.ql,qr=C.iL,ne=C.iC;export{yr as AnimateBorder,Cr as Barchart,Pr as BgBox,Mr as Card,Dr as Circle,Or as Container,Tr as CornerBorder,Ar as Css3dModel,Rr as Dashboard,Sr as Fliper,Br as HalfBorder,Lr as IconAnimate,jr as IconCarousel,Wr as Light,Ir as List,Ur as Loading,wr as Location,zr as Piechart,Kr as Progress,Zr as RateScore,$r as Ring,kr as Search,Xr as Spot,Yr as Table,Fr as Taiji,Nr as Text3d,Hr as TextFilter,Jr as TextLoading,Gr as TextMasked,Vr as Time,Qr as TitleBorder,qr as TitleHeader,ne as Wave};
