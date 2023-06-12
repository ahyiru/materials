import*as fe from"react";var ge={496:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-3d-models {
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
`,""]),e.locals={};const n=e},190:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.g394U {
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
`,""]),e.locals={"huxy-card-fliper":"g394U",card:"zasVJ",front:"C5n3b",back:"UdsvP"};const n=e},271:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.huxy-icon-animate-tooltip {
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
`,""]),e.locals={};const n=e},498:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]),e.locals={};const n=e},804:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-border-animate-dash {
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
`,""]),e.locals={"huxy-border-wrap":"tF3eM","huxy-border-animate-dash":"BHIzz","huxy-border-animate-solid":"Ltln8"};const n=e},289:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.UJpqU {
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
`,""]),e.locals={"bg-box-dot":"UJpqU","bg-box-strip":"VXk7W","bg-box-cubestrip":"q_1dQ","bg-box-cube":"eBK09","bg-box-grid":"o9pvC","bg-box-img":"Po9ZE"};const n=e},548:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.YeHmo {
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
`,""]),e.locals={"corner-wrap":"YeHmo",corner:"vpTzN",half:"S3bPv","corner-tl":"WYlJx","corner-br":"SMovL"};const n=e},479:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.Usszw {
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
`,""]),e.locals={"corner-wrap":"Usszw","corner-half":"XcsJP"};const n=e},96:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.WY0lD {
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
`,""]),e.locals={"huxy-title-border-wrap":"WY0lD","huxy-title-border-top":"_ORAK","huxy-title-border-box":"Vggg7"};const n=e},317:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.MuUoF {
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
`,""]),e.locals={"huxy-title-header-box":"MuUoF",title:"fM2FI"};const n=e},303:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.huDNN {
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
`,""]),e.locals={"huxy-skeleton-barchart":"huDNN","sk-bar-item":"V5Fq4"};const n=e},761:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.nnDaG {
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
`,""]),e.locals={"huxy-skeleton-card":"nnDaG","sk-card-left":"iJtPz","sk-card-img":"Bya6y","sk-card-right":"c6MGh",title:"sb1hm",text:"YDDrB"};const n=e},129:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]),e.locals={"huxy-animate-border-circle":"Krd0d","border-circle-item":"qcJ0N"};const n=e},917:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.myyKG {
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
`,""]),e.locals={"skeleton-container":"myyKG",title:"AXWTP"};const n=e},696:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-skeleton-dashboard {
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
`,""]),e.locals={"huxy-skeleton-dashboard":"DYspm",point:"Rg6DD"};const n=e},263:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.YWtCI {
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
`,""]),e.locals={"huxy-skeleton-list":"YWtCI","sk-list-item":"uBGAf"};const n=e},955:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.IQu9g {
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
`,""]),e.locals={"huxy-skeleton-piechart":"IQu9g"};const n=e},709:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-progress-wave {
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
`,""]),e.locals={"huxy-progress-wave":"zFNbz"};const n=e},664:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-animate-border-ring {
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
`,""]),e.locals={"huxy-animate-border-ring":"WbFYr","border-ring-item":"XIIyj"};const n=e},177:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.suwUY {
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
`,""]),e.locals={"huxy-skeleton-table":"suwUY"};const n=e},202:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-loading-wave {
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
`,""]),e.locals={"huxy-loading-wave":"d9M97"};const n=e},972:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-conic-light-animate {
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
`,""]),e.locals={conic:"_ov1n"};const n=e},75:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-loading-ball {
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
`,""]),e.locals={"huxy-loading-ball":"TikRE",ball:"CyLSO"};const n=e},871:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-location {
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
`,""]),e.locals={"huxy-location":"DdhmP"};const n=e},845:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-search {
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
`,""]),e.locals={"huxy-search":"r6hPc"};const n=e},943:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-spot {
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
`,""]),e.locals={"huxy-spot":"JsH0T","huxy-scale":"S4gb8"};const n=e},389:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.x6fRL {
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
`,""]),e.locals={"huxy-taiji":"x6fRL"};const n=e},833:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-timer {
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
`,""]),e.locals={"huxy-timer":"R1ObR"};const n=e},608:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`.q9v4I {
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
`,""]),e.locals={"huxy-rate-score":"q9v4I"};const n=e},735:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-text-3d {
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
`,""]),e.locals={};const n=e},814:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-text-filter {
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
`,""]),e.locals={"huxy-text-filter":"_zrvj","text-filter":"ww0tY"};const n=e},325:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-text-loading {
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
`,""]),e.locals={"huxy-text-loading":"ZYC7Y"};const n=e},82:(r,l,t)=>{t.d(l,{Z:()=>n});var _=t(601),s=t.n(_),i=t(609),o=t.n(i),e=o()(s());e.push([r.id,`@keyframes huxy-text-masked {
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
`,""]),e.locals={"huxy-text-masked":"zg3Sy"};const n=e},609:r=>{r.exports=function(l){var t=[];return t.toString=function(){return this.map(function(s){var i="",o=typeof s[5]<"u";return s[4]&&(i+="@supports (".concat(s[4],") {")),s[2]&&(i+="@media ".concat(s[2]," {")),o&&(i+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),i+=l(s),o&&(i+="}"),s[2]&&(i+="}"),s[4]&&(i+="}"),i}).join("")},t.i=function(s,i,o,e,n){typeof s=="string"&&(s=[[null,s,void 0]]);var M={};if(o)for(var m=0;m<this.length;m++){var D=this[m][0];D!=null&&(M[D]=!0)}for(var g=0;g<s.length;g++){var y=[].concat(s[g]);o&&M[y[0]]||(typeof n<"u"&&(typeof y[5]>"u"||(y[1]="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {").concat(y[1],"}")),y[5]=n),i&&(y[2]&&(y[1]="@media ".concat(y[2]," {").concat(y[1],"}")),y[2]=i),e&&(y[4]?(y[1]="@supports (".concat(y[4],") {").concat(y[1],"}"),y[4]=e):y[4]="".concat(e)),t.push(y))}},t}},601:r=>{r.exports=function(l){return l[1]}},837:(r,l,t)=>{var _=t(810),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,e=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function M(m,D,g){var y,f={},B=null,E=null;g!==void 0&&(B=""+g),D.key!==void 0&&(B=""+D.key),D.ref!==void 0&&(E=D.ref);for(y in D)o.call(D,y)&&!n.hasOwnProperty(y)&&(f[y]=D[y]);if(m&&m.defaultProps)for(y in D=m.defaultProps,D)f[y]===void 0&&(f[y]=D[y]);return{$$typeof:s,type:m,key:B,ref:E,props:f,_owner:e.current}}l.Fragment=i,l.jsx=M,l.jsxs=M},322:(r,l,t)=>{r.exports=t(837)},62:r=>{var l=[];function t(i){for(var o=-1,e=0;e<l.length;e++)if(l[e].identifier===i){o=e;break}return o}function _(i,o){for(var e={},n=[],M=0;M<i.length;M++){var m=i[M],D=o.base?m[0]+o.base:m[0],g=e[D]||0,y="".concat(D," ").concat(g);e[D]=g+1;var f=t(y),B={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(f!==-1)l[f].references++,l[f].updater(B);else{var E=s(B,o);o.byIndex=M,l.splice(M,0,{identifier:y,updater:E,references:1})}n.push(y)}return n}function s(i,o){var e=o.domAPI(o);e.update(i);var n=function(m){if(m){if(m.css===i.css&&m.media===i.media&&m.sourceMap===i.sourceMap&&m.supports===i.supports&&m.layer===i.layer)return;e.update(i=m)}else e.remove()};return n}r.exports=function(i,o){o=o||{},i=i||[];var e=_(i,o);return function(M){M=M||[];for(var m=0;m<e.length;m++){var D=e[m],g=t(D);l[g].references--}for(var y=_(M,o),f=0;f<e.length;f++){var B=e[f],E=t(B);l[E].references===0&&(l[E].updater(),l.splice(E,1))}e=y}}},793:r=>{var l={};function t(s){if(typeof l[s]>"u"){var i=document.querySelector(s);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch{i=null}l[s]=i}return l[s]}function _(s,i){var o=t(s);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}r.exports=_},173:r=>{function l(t){var _=document.createElement("style");return t.setAttributes(_,t.attributes),t.insert(_,t.options),_}r.exports=l},892:(r,l,t)=>{function _(s){var i=t.nc;i&&s.setAttribute("nonce",i)}r.exports=_},36:r=>{function l(s,i,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var n=typeof o.layer<"u";n&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,n&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var M=o.sourceMap;M&&typeof btoa<"u"&&(e+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(M))))," */")),i.styleTagTransform(e,s,i.options)}function t(s){if(s.parentNode===null)return!1;s.parentNode.removeChild(s)}function _(s){if(typeof document>"u")return{update:function(){},remove:function(){}};var i=s.insertStyleElement(s);return{update:function(e){l(i,s,e)},remove:function(){t(i)}}}r.exports=_},464:r=>{function l(t,_){if(_.styleSheet)_.styleSheet.cssText=t;else{for(;_.firstChild;)_.removeChild(_.firstChild);_.appendChild(document.createTextNode(t))}}r.exports=l},810:r=>{var l=_=>{var s={};return x.d(s,_),s},t=_=>()=>_;r.exports=fe}},hr={};function x(r){var l=hr[r];if(l!==void 0)return l.exports;var t=hr[r]={id:r,exports:{}};return ge[r](t,t.exports,x),t.exports}x.n=r=>{var l=r&&r.__esModule?()=>r.default:()=>r;return x.d(l,{a:l}),l},x.d=(r,l)=>{for(var t in l)x.o(l,t)&&!x.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:l[t]})},x.o=(r,l)=>Object.prototype.hasOwnProperty.call(r,l),x.nc=void 0;var C={};(()=>{x.d(C,{$V:()=>Tr,Bp:()=>Rr,Ak:()=>Dr,Zb:()=>Sr,Cd:()=>Lr,W2:()=>$r,M9:()=>Cr,V5:()=>rr,A:()=>jr,QN:()=>vr,aI:()=>Pr,sA:()=>mr,TK:()=>Er,_k:()=>se,aV:()=>Wr,gb:()=>qr,Ye:()=>Qr,df:()=>wr,Ex:()=>Kr,gd:()=>xe,FM:()=>Zr,ol:()=>Gr,z6:()=>re,iA:()=>Xr,P8:()=>oe,Qp:()=>_e,QV:()=>ce,R8:()=>ue,By:()=>me,qp:()=>Hr,ql:()=>Or,iL:()=>yr,iC:()=>Fr});var r=x(322);const t=a=>a?.$$typeof&&typeof a.$$typeof=="symbol"&&a.$$typeof.description==="react.element",s=(a,d="px")=>`${a}`.replace(d,"")-0;var i=x(62),o=x.n(i),e=x(36),n=x.n(e),M=x(793),m=x.n(M),D=x(892),g=x.n(D),y=x(173),f=x.n(y),B=x(464),E=x.n(B),xt=x(496),j={};j.styleTagTransform=E(),j.setAttributes=g(),j.insert=m().bind(null,"head"),j.domAPI=n(),j.insertStyleElement=f();var to=o()(xt.Z,j);const ro=xt.Z&&xt.Z.locals?xt.Z.locals:void 0,rr=({list:a=[],size:d="360px",cardSize:p="42px",bottom:c="60px",style:u,...h})=>{const v=360/a.length;return(0,r.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":d,"--cardSize":p,"--bottom":c,...u},...h,children:(0,r.jsx)("div",{className:"model-container",children:a.map((b,P)=>(0,r.jsx)("div",{className:"model-item",style:{"--rotateY":`${v*P}deg`},children:(0,r.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:b.label,href:b.link,target:"_blank",children:[b.icon?(0,r.jsx)("img",{src:b.icon,alt:b.label}):null,t(b.icon)?b.icon:b.icon?(0,r.jsx)("img",{src:b.icon,alt:b.label}):null]})},b.label))})})};var bt=x(271),W={};W.styleTagTransform=E(),W.setAttributes=g(),W.insert=m().bind(null,"head"),W.domAPI=n(),W.insertStyleElement=f();var oo=o()(bt.Z,W);const ao=bt.Z&&bt.Z.locals?bt.Z.locals:void 0,mr=({objs:a=[],models:d=[],height:p="480px",style:c,className:u,...h})=>(0,r.jsxs)("div",{className:`huxy-icon-animate-container${u?` ${u}`:""}`,style:{"--height":p,...c},...h,children:[(0,r.jsx)("div",{className:"huxy-icon-animate-materiels",children:a.map(({value:v,label:b,icon:P,link:O,type:S,style:mt})=>(0,r.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${v}${S?"":" obj-img"}`,tooltip:S?void 0:b,href:O,target:"_blank",style:mt,children:t(P)?P:(0,r.jsx)("img",{src:P,alt:b})},b))}),(0,r.jsx)(rr,{list:d,size:`${s(p)-120}px`})]});var ft=x(190),I={};I.styleTagTransform=E(),I.setAttributes=g(),I.insert=m().bind(null,"head"),I.domAPI=n(),I.insertStyleElement=f();var io=o()(ft.Z,I);const gt=ft.Z&&ft.Z.locals?ft.Z.locals:void 0,vr=({front:a,back:d,...p})=>(0,r.jsx)("div",{className:gt["huxy-card-fliper"],...p,children:(0,r.jsxs)("div",{className:gt.card,children:[(0,r.jsx)("div",{className:gt.front,children:a}),(0,r.jsx)("div",{className:gt.back,children:d})]})});var L=x(810);const xr=(a={})=>{const d=(0,L.useRef)(0),[p,c]=(0,L.useState)(a),u=(0,L.useCallback)(h=>{cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>c(h))},[]);return(0,L.useEffect)(()=>()=>cancelAnimationFrame(d.current),[]),[p,u]},br=(a,d)=>{const p=(0,L.useRef)();(0,L.useEffect)(()=>{p.current=a},[a]),(0,L.useEffect)(()=>{if(d){const c=setInterval(()=>p.current(),d);return()=>clearInterval(c)}},[d])};var Et=x(498),U={};U.styleTagTransform=E(),U.setAttributes=g(),U.insert=m().bind(null,"head"),U.domAPI=n(),U.insertStyleElement=f();var co=o()(Et.Z,U);const po=Et.Z&&Et.Z.locals?Et.Z.locals:void 0,fr=(a,d=60)=>(d=1.5*d,a.map((p,c)=>{const u=Math.random();let h=1;u<.3334?h=1.2:u<.6667&&(h=.8);const v=~~(c/3),b=c%3;let P=1.5*d*v;b===1&&(P+=d/2);const O=b*d+d/6*(b+1);return p.transform={x:P,y:O,s:h},p})),gr=(a,d=60)=>(d=2.25*d,a.map(p=>(p.transform.x-=2,p.transform.x+d<0&&(p.transform.x=~~(a.length/3)*d),p))),Er=({width:a=60,wait:d=56,list:p=[],className:c,...u})=>{const h=(0,L.useMemo)(()=>fr(p,a),[]),[v,b]=xr(h),[P,O]=(0,L.useState)(d);br(()=>{const R=gr(v,a);b(R)},P);const S=R=>{O(null)},mt=R=>{O(d)};return(0,r.jsx)("div",{className:`huxy-icon-carousel${c?` ${c}`:""}`,...u,children:(0,r.jsx)("div",{className:"icon-container",children:v.map((R,be)=>(0,r.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${be%3===0?"lt":"lb"}`,tooltip:R.label,style:{transform:`translate(${R.transform.x}px, ${R.transform.y}px) scale(${R.transform.s})`,width:a},onMouseEnter:S,onMouseLeave:mt,href:R.link,target:"_blank",children:(0,r.jsx)("img",{src:R.icon,alt:R.label})},R.label))})})};var yt=x(317),w={};w.styleTagTransform=E(),w.setAttributes=g(),w.insert=m().bind(null,"head"),w.domAPI=n(),w.insertStyleElement=f();var ho=o()(yt.Z,w);const er=yt.Z&&yt.Z.locals?yt.Z.locals:void 0,yr=({title:a,borderColor:d,titleWidth:p,titleHeight:c,style:u,className:h,...v})=>(0,r.jsx)("div",{className:`${er["huxy-title-header-box"]}${h?` ${h}`:""}`,style:{"--borderColor":d,"--titleWidth":p,"--titleHeight":c,...u},...v,children:(0,r.jsx)("h2",{className:er.title,children:a})});var Ct=x(548),z={};z.styleTagTransform=E(),z.setAttributes=g(),z.insert=m().bind(null,"head"),z.domAPI=n(),z.insertStyleElement=f();var vo=o()(Ct.Z,z);const vt=Ct.Z&&Ct.Z.locals?Ct.Z.locals:void 0,Cr=({size:a="8px",borderColor:d="var(--appColor)",half1:p=!0,half2:c=!0,style:u,className:h,children:v,...b})=>(0,r.jsx)("div",{className:`${vt["corner-wrap"]}${h?` ${h}`:""}`,style:{"--cornerSize":a,"--borderColor":d,...u},...b,children:(0,r.jsxs)("div",{className:`${vt.corner}${p?` ${vt.half}`:""}`,children:[c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:vt["corner-tl"]}),(0,r.jsx)("span",{className:vt["corner-br"]})]}):null,v]})});var Pt=x(479),K={};K.styleTagTransform=E(),K.setAttributes=g(),K.insert=m().bind(null,"head"),K.domAPI=n(),K.insertStyleElement=f();var bo=o()(Pt.Z,K);const or=Pt.Z&&Pt.Z.locals?Pt.Z.locals:void 0,Pr=({size:a="8px",borderColor:d="var(--appColor)",style:p,className:c,children:u,...h})=>(0,r.jsx)("div",{className:`${or["corner-wrap"]}${c?` ${c}`:""}`,style:{"--cornerSize":a,"--borderColor":d,...p},...h,children:(0,r.jsx)("div",{className:or["corner-half"],children:u})});var Mt=x(289),Z={};Z.styleTagTransform=E(),Z.setAttributes=g(),Z.insert=m().bind(null,"head"),Z.domAPI=n(),Z.insertStyleElement=f();var go=o()(Mt.Z,Z);const Mr=Mt.Z&&Mt.Z.locals?Mt.Z.locals:void 0,Dr=({type:a="dot",bgColor:d,cubeColor:p,url:c,style:u,className:h,children:v,...b})=>{a=c?"img":a;const P=c?{backgroundImage:`url(${c})`}:void 0;return(0,r.jsx)("div",{className:`${Mr[`bg-box-${a}`]}${h?` ${h}`:""}`,style:{"--bgColor":d,"--cubeColor":p,...P,...u},...b,children:v})};var Dt=x(96),$={};$.styleTagTransform=E(),$.setAttributes=g(),$.insert=m().bind(null,"head"),$.domAPI=n(),$.insertStyleElement=f();var yo=o()(Dt.Z,$);const Qt=Dt.Z&&Dt.Z.locals?Dt.Z.locals:void 0,Or=({children:a,title:d,fontSize:p,borderSize:c,borderColor:u="var(--appColor)",space:h="10px",style:v,className:b,...P})=>(0,r.jsxs)("div",{className:`${Qt["huxy-title-border-wrap"]}${b?` ${b}`:""}`,style:{"--borderColor":u,"--space":h,"--fontSize":p,"--borderSize":c,...v},...P,children:[(0,r.jsx)("div",{className:Qt["huxy-title-border-top"],children:d}),(0,r.jsx)("div",{className:Qt["huxy-title-border-box"],children:a})]});var Ot=x(804),k={};k.styleTagTransform=E(),k.setAttributes=g(),k.insert=m().bind(null,"head"),k.domAPI=n(),k.insertStyleElement=f();var Po=o()(Ot.Z,k);const ar=Ot.Z&&Ot.Z.locals?Ot.Z.locals:void 0,Tr=({type:a="solid",space:d="2px",borderColor:p="var(--appColor)",style:c,className:u,children:h,...v})=>(0,r.jsx)("div",{className:`${ar["huxy-border-wrap"]}${u?` ${u}`:""}`,style:{"--space":d,"--borderColor":p,...c},...v,children:(0,r.jsx)("div",{className:ar[`huxy-border-animate-${a==="dash"?"dash":"solid"}`],children:h})}),Ar=(a="",d=0,p="0")=>{const c=a.length;return c>=d?a:`${Array(d-c+1).join(p)}${a}`},T=()=>"#"+Ar((~~(Math.random()*(1<<24))).toString(16),6),A=(a=0,d=0,p=!0)=>(a<d&&(a=[d,d=a][0]),p?~~(Math.random()*(a-d+1))+d:Math.random()*(a-d)+d),qt=(a=[])=>a[A(a.length-1)];var Tt=x(303),X={};X.styleTagTransform=E(),X.setAttributes=g(),X.insert=m().bind(null,"head"),X.domAPI=n(),X.insertStyleElement=f();var Ro=o()(Tt.Z,X);const sr=Tt.Z&&Tt.Z.locals?Tt.Z.locals:void 0,ir=a=>a?.length?qt(a):T(),Rr=({list:a=10,height:d="240px",space:p="25px",itemWidth:c="30px",colors:u=[],color:h,style:v,className:b,...P})=>(0,r.jsx)("div",{className:`${sr["huxy-skeleton-barchart"]}${b?` ${b}`:""}`,style:{"--height":d,...v},...P,children:(Array.isArray(a)?a:[...new Array(a)]).map((O,S)=>(0,r.jsx)("div",{className:sr["sk-bar-item"],style:{"--space":p,"--itemWidth":c,"--bgColor":O?.color??h??`linear-gradient(to top, ${ir(u)}, ${ir(u)})`,"--itemHeight":O?.height??`${A(15,100)}%`,left:`${S*(s(p)+s(c))}px`}},`huxy-skeleton-barchart-${S}`))});var At=x(761),Y={};Y.styleTagTransform=E(),Y.setAttributes=g(),Y.insert=m().bind(null,"head"),Y.domAPI=n(),Y.insertStyleElement=f();var Bo=o()(At.Z,Y);const F=At.Z&&At.Z.locals?At.Z.locals:void 0,Sr=({height:a="120px",leftColor:d,rightColor:p,topWidth:c,bottomWidth:u,style:h,className:v,...b})=>(0,r.jsxs)("div",{className:`${F["huxy-skeleton-card"]}${v?` ${v}`:""}`,style:{"--height":a,"--leftColor":d??T(),"--rightColor":p??T(),"--topWidth":c??`${A(30,60)}%`,"--bottomWidth":u??`${A(55,95)}%`,...h},...b,children:[(0,r.jsx)("div",{className:F["sk-card-left"],children:(0,r.jsx)("div",{className:F["sk-card-img"]})}),(0,r.jsxs)("div",{className:F["sk-card-right"],children:[(0,r.jsx)("h4",{className:F.title}),(0,r.jsx)("p",{className:F.text})]})]});var Rt=x(129),N={};N.styleTagTransform=E(),N.setAttributes=g(),N.insert=m().bind(null,"head"),N.domAPI=n(),N.insertStyleElement=f();var jo=o()(Rt.Z,N);const nr=Rt.Z&&Rt.Z.locals?Rt.Z.locals:void 0,Br=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],Lr=({size:a="300px",space:d="8px",style:p,className:c,...u})=>{let h=s(d)*3;return(0,r.jsx)("div",{className:`${nr["huxy-animate-border-circle"]}${c?` ${c}`:""}`,style:{"--size":a,...p},...u,children:Br.map((v,b)=>(h=h+s(v.borderWidth)*2+s(d)*2,(0,r.jsx)("div",{className:nr["border-circle-item"],style:{"--itemSize":`calc(${a} - ${h}px)`,"--borderWidth":v.borderWidth,"--borderLeftColor":v.borderLeftColor,"--borderRightColor":v.borderRightColor,"--borderTopColor":v.borderTopColor,"--borderBottomColor":v.borderBottomColor,"--time":v.time,"--rotateStart":v.rotateStart,"--rotateEnd":v.rotateEnd}},`huxy-animate-border-circle-${b}`)))})};var St=x(696),H={};H.styleTagTransform=E(),H.setAttributes=g(),H.insert=m().bind(null,"head"),H.domAPI=n(),H.insertStyleElement=f();var Io=o()(St.Z,H);const lr=St.Z&&St.Z.locals?St.Z.locals:void 0,jr=({size:a="400px",width:d="20px",space:p="20px",colors:c=[],style:u,className:h,...v})=>(0,r.jsx)("div",{className:`${lr["huxy-skeleton-dashboard"]}${h?` ${h}`:""}`,style:{"--size":a,"--width":d,"--space":p,"--color1":c[0],"--color2":c[1],"--color3":c[2],"--color4":c[3],"--color5":c[4],"--color6":c[5],"--color7":c[6],...u},...v,children:(0,r.jsx)("div",{className:lr.point})});var Bt=x(263),J={};J.styleTagTransform=E(),J.setAttributes=g(),J.insert=m().bind(null,"head"),J.domAPI=n(),J.insertStyleElement=f();var wo=o()(Bt.Z,J);const dr=Bt.Z&&Bt.Z.locals?Bt.Z.locals:void 0,Wr=({row:a=8,leftColor:d="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:p="rgba(0, 0, 0, 0.2)",rightWidth:c="100px",itemHeight:u="20px",space:h="20px",className:v,...b})=>(0,r.jsx)("div",{className:`${dr["huxy-skeleton-list"]}${v?` ${v}`:""}`,style:{"--rightWidth":c,"--itemHeight":u,"--space":h,"--leftColor":d,"--rightColor":p},...b,children:[...new Array(a)].map((P,O)=>(0,r.jsx)("div",{className:dr["sk-list-item"]},`huxy-skeleton-list-${O}`))}),Ir=(a,d=100)=>{const p=[];return[...new Array(a)].map((c,u)=>{u===a-1?p[u]=d:(p[u]=A(1,d-1),d-=p[u])}),p};var Lt=x(955),G={};G.styleTagTransform=E(),G.setAttributes=g(),G.insert=m().bind(null,"head"),G.domAPI=n(),G.insertStyleElement=f();var Zo=o()(Lt.Z,G);const Ur=Lt.Z&&Lt.Z.locals?Lt.Z.locals:void 0,jt=a=>a?.length?qt(a):T(),V=Ir(4),wr=({height:a,colors:d=[],style:p,className:c,...u})=>(0,r.jsx)("div",{className:`${Ur["huxy-skeleton-piechart"]}${c?` ${c}`:""}`,style:{"--height":a,"--color1":jt(d),"--color2":jt(d),"--color3":jt(d),"--color4":jt(d),"--percent1":`${V[0]}%`,"--percent2":`${V[0]+V[1]}%`,"--percent3":`${V[0]+V[1]+V[2]}%`,"--percent4":"100%",...p},...u});var Wt=x(709),Q={};Q.styleTagTransform=E(),Q.setAttributes=g(),Q.insert=m().bind(null,"head"),Q.domAPI=n(),Q.insertStyleElement=f();var ko=o()(Wt.Z,Q);const zr=Wt.Z&&Wt.Z.locals?Wt.Z.locals:void 0,Kr=({percent:a,height:d="20px",bgColor:p="rgba(0, 0, 0, 0.15)",progressColor:c,borderRadius:u="4px",waveColor:h="rgba(255, 255, 255, 0.2)",waveTime:v="3s",style:b,className:P,...O})=>(0,r.jsx)("div",{className:`${zr["huxy-progress-wave"]}${P?` ${P}`:""}`,style:{"--percent":a??A(33,99),"--height":d,"--bgColor":p,"--progressColor":c??T(),"--borderRadius":u,"--waveColor":h,"--waveTime":v,...b},...O});var It=x(664),q={};q.styleTagTransform=E(),q.setAttributes=g(),q.insert=m().bind(null,"head"),q.domAPI=n(),q.insertStyleElement=f();var Yo=o()(It.Z,q);const _r=It.Z&&It.Z.locals?It.Z.locals:void 0,Zr=({list:a=60,size:d="300px",itemWidth:p="30px",itemHeight:c="4px",bgColor:u="rgba(255, 255, 255 , 0.9)",shadowColor:h="rgba(255, 255, 255 , 0.6)",color:v,style:b,className:P,...O})=>(a=Array.isArray(a)?a:[...new Array(a)],(0,r.jsx)("div",{className:`${_r["huxy-animate-border-ring"]}${P?` ${P}`:""}`,style:{"--size":d,"--itemWidth":p,"--itemHeight":c,"--bgColor":u,"--shadowColor":h,...b},...O,children:a.map((S,mt)=>(0,r.jsx)("div",{className:_r["border-ring-item"],style:{"--color":S?.color??v??T(),transform:`rotate(${360/a.length*mt}deg)`}},`huxy-animate-border-ring-${mt}`))}));var Ut=x(917),tt={};tt.styleTagTransform=E(),tt.setAttributes=g(),tt.insert=m().bind(null,"head"),tt.domAPI=n(),tt.insertStyleElement=f();var No=o()(Ut.Z,tt);const cr=Ut.Z&&Ut.Z.locals?Ut.Z.locals:void 0,$r=({children:a,hasTitle:d,titleBgColor:p,style:c,className:u,...h})=>(0,r.jsx)("div",{className:`${cr["skeleton-container"]}${d?` ${cr.title}`:""}${u?` ${u}`:""}`,style:{"--titleBgColor":p??T(),...c},...h,children:a});var wt=x(177),rt={};rt.styleTagTransform=E(),rt.setAttributes=g(),rt.insert=m().bind(null,"head"),rt.domAPI=n(),rt.insertStyleElement=f();var Jo=o()(wt.Z,rt);const kr=wt.Z&&wt.Z.locals?wt.Z.locals:void 0,Xr=({row:a=6,col:d=8,...p})=>(0,r.jsx)("div",{className:kr["huxy-skeleton-table"],...p,children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:[...new Array(d)].map((c,u)=>(0,r.jsx)("th",{children:(0,r.jsx)("span",{})},`skeleton-table-th-${u}`))})}),(0,r.jsx)("tbody",{children:[...new Array(a)].map((c,u)=>(0,r.jsx)("tr",{children:[...new Array(d)].map((h,v)=>(0,r.jsx)("td",{children:(0,r.jsx)("span",{})},`skeleton-table-tr-${u}-${v}`))},`tr-${u}`))})]})});var zt=x(202),et={};et.styleTagTransform=E(),et.setAttributes=g(),et.insert=m().bind(null,"head"),et.domAPI=n(),et.insertStyleElement=f();var Vo=o()(zt.Z,et);const Yr=zt.Z&&zt.Z.locals?zt.Z.locals:void 0,Fr=({color:a="rgba(255, 255, 255, 0.1)",delay:d="2s",style:p,className:c,children:u,...h})=>(0,r.jsx)("div",{className:`${Yr["huxy-loading-wave"]}${c?` ${c}`:""}`,style:{"--waveColor":a,"--waveTime":d,...p},...h,children:u});var Kt=x(833),ot={};ot.styleTagTransform=E(),ot.setAttributes=g(),ot.insert=m().bind(null,"head"),ot.domAPI=n(),ot.insertStyleElement=f();var qo=o()(Kt.Z,ot);const Nr=Kt.Z&&Kt.Z.locals?Kt.Z.locals:void 0,Hr=a=>(0,r.jsx)("span",{className:Nr["huxy-timer"],...a});var Zt=x(845),at={};at.styleTagTransform=E(),at.setAttributes=g(),at.insert=m().bind(null,"head"),at.domAPI=n(),at.insertStyleElement=f();var ra=o()(Zt.Z,at);const Jr=Zt.Z&&Zt.Z.locals?Zt.Z.locals:void 0,Gr=a=>(0,r.jsx)("span",{className:Jr["huxy-search"],...a});var $t=x(871),st={};st.styleTagTransform=E(),st.setAttributes=g(),st.insert=m().bind(null,"head"),st.domAPI=n(),st.insertStyleElement=f();var oa=o()($t.Z,st);const Vr=$t.Z&&$t.Z.locals?$t.Z.locals:void 0,Qr=a=>(0,r.jsx)("span",{className:Vr["huxy-location"],...a});var kt=x(75),it={};it.styleTagTransform=E(),it.setAttributes=g(),it.insert=m().bind(null,"head"),it.domAPI=n(),it.insertStyleElement=f();var sa=o()(kt.Z,it);const pr=kt.Z&&kt.Z.locals?kt.Z.locals:void 0,qr=({list:a=7,size:d="40px",shadowSize:p="50px",time:c="1.6s",style:u,className:h,...v})=>(c=s(c,"s"),(0,r.jsx)("div",{className:`${pr["huxy-loading-ball"]}${h?` ${h}`:""}`,style:{"--size":d,"--shadowSize":p,"--time":`${c}s`,...u},...v,children:(Array.isArray(a)?a:[...new Array(a)]).map((b,P)=>(0,r.jsx)("div",{className:pr.ball,style:{"--delay":b?.delay??`${c/((a?.length??a)+1)*(P+1)-c}s`,"--bgColor":b?.color??T()}},`huxy-loading-ball-${P}`))}));var Xt=x(943),nt={};nt.styleTagTransform=E(),nt.setAttributes=g(),nt.insert=m().bind(null,"head"),nt.domAPI=n(),nt.insertStyleElement=f();var na=o()(Xt.Z,nt);const te=Xt.Z&&Xt.Z.locals?Xt.Z.locals:void 0,re=({type:a="spot",size:d,color:p,shadowColor:c,style:u,className:h,...v})=>(0,r.jsx)("span",{className:`${te[`huxy-${a}`]}${h?` ${h}`:""}`,style:{"--size":d??`${A(6,30)}px`,"--color":p??T(),"--shadowColor":c??T(),...u},...v});var Yt=x(389),lt={};lt.styleTagTransform=E(),lt.setAttributes=g(),lt.insert=m().bind(null,"head"),lt.domAPI=n(),lt.insertStyleElement=f();var da=o()(Yt.Z,lt);const ee=Yt.Z&&Yt.Z.locals?Yt.Z.locals:void 0,oe=({width:a,border:d,black:p,white:c,style:u,className:h,...v})=>(0,r.jsx)("div",{className:`${ee["huxy-taiji"]} ${h}`,style:{"--width":a,"--border":d,"--black":p,"--white":c,...u},...v});var Ft=x(972),dt={};dt.styleTagTransform=E(),dt.setAttributes=g(),dt.insert=m().bind(null,"head"),dt.domAPI=n(),dt.insertStyleElement=f();var ca=o()(Ft.Z,dt);const ae=Ft.Z&&Ft.Z.locals?Ft.Z.locals:void 0,se=({width:a="200px",height:d="180px",space:p="12%",bgColor:c,style:u,className:h,...v})=>(0,r.jsx)("div",{className:`${ae.conic}${h?` ${h}`:""}`,style:{"--width":a,"--height":d,"--space":p,"--bgColor":c,...u},...v});var Nt=x(735),_t={};_t.styleTagTransform=E(),_t.setAttributes=g(),_t.insert=m().bind(null,"head"),_t.domAPI=n(),_t.insertStyleElement=f();var ua=o()(Nt.Z,_t);const ha=Nt.Z&&Nt.Z.locals?Nt.Z.locals:void 0,tr=()=>Math.random()-.5,ie=()=>~~(tr()*A(5,10)*10),ne=()=>~~(tr()*A(2,8)*10),le=()=>(1-tr())*A(1.1,1.4,!1),de=a=>a?.length?qt(a):T(),_e=({list:a=[],colors:d=[],width:p,padding:c,bgColor:u,style:h,...v})=>(0,r.jsx)("div",{className:"huxy-text-3d",style:{"--width":p,"--padding":c,"--bgColor":u,...h},...v,children:(0,r.jsx)("div",{className:"text-3d-container",children:a.map((b,P)=>{const O=b.time??A(6,24,!1).toFixed(2),S=b.delay??-A(0,O,!1).toFixed(2);return(0,r.jsx)("div",{className:"text-3d-item",style:{"--time":`${O}s`,"--center":b.center??`${ie()}%`,"--rotate":b.rotate??`${ne()}deg`,"--size":b.size??le(),"--color":b.color??de(d),"--delay":`${S}s`},children:(0,r.jsx)("div",{className:"text-3d-item-card",children:(0,r.jsx)("span",{className:"link animate-text",children:b.label})})},b.label)})})});var Ht=x(814),ct={};ct.styleTagTransform=E(),ct.setAttributes=g(),ct.insert=m().bind(null,"head"),ct.domAPI=n(),ct.insertStyleElement=f();var va=o()(Ht.Z,ct);const ur=Ht.Z&&Ht.Z.locals?Ht.Z.locals:void 0,ce=({time:a="3s",style:d,className:p,children:c,...u})=>(0,r.jsx)("div",{className:`${ur["huxy-text-filter"]}${p?` ${p}`:""}`,style:{"--time":a,...d},...u,children:(0,r.jsx)("div",{className:ur["text-filter"],children:c})});var Jt=x(325),pt={};pt.styleTagTransform=E(),pt.setAttributes=g(),pt.insert=m().bind(null,"head"),pt.domAPI=n(),pt.insertStyleElement=f();var ba=o()(Jt.Z,pt);const pe=Jt.Z&&Jt.Z.locals?Jt.Z.locals:void 0,ue=({backColor:a="rgba(0, 0, 0, 0.3)",frontColor:d="rgba(255, 255, 255, 1)",time:p="4s",style:c,className:u,children:h,...v})=>(0,r.jsx)("div",{className:`${pe["huxy-text-loading"]}${u?` ${u}`:""}`,style:{"--backColor":a,"--frontColor":d,"--time":p,...c},...v,"data-text":h,children:h});var Gt=x(82),ut={};ut.styleTagTransform=E(),ut.setAttributes=g(),ut.insert=m().bind(null,"head"),ut.domAPI=n(),ut.insertStyleElement=f();var ga=o()(Gt.Z,ut);const he=Gt.Z&&Gt.Z.locals?Gt.Z.locals:void 0,me=({startColor:a,endColor:d,style:p,className:c,children:u,...h})=>(0,r.jsx)("div",{className:`${he["huxy-text-masked"]}${c?` ${c}`:""}`,style:{"--startColor":a??T(),"--endColor":d??T(),...p},...h,children:u});var Vt=x(608),ht={};ht.styleTagTransform=E(),ht.setAttributes=g(),ht.insert=m().bind(null,"head"),ht.domAPI=n(),ht.insertStyleElement=f();var ya=o()(Vt.Z,ht);const ve=Vt.Z&&Vt.Z.locals?Vt.Z.locals:void 0,xe=({score:a=0,backColor:d="rgba(0, 0, 0, 0.3)",frontColor:p="var(--yellow2)",style:c,className:u,children:h,backend:v,...b})=>(0,r.jsx)("div",{className:`${ve["huxy-rate-score"]}${u?` ${u}`:""}`,style:{"--backColor":d,"--frontColor":p,"--score":`${a}`.includes("%")?a:`${a*100}%`,...c},...b,"data-text":h,children:v??h})})();var Ee=C.$V,ye=C.Bp,Ce=C.Ak,Pe=C.Zb,Me=C.Cd,De=C.W2,Oe=C.M9,Te=C.V5,Ae=C.A,Re=C.QN,Se=C.aI,Be=C.sA,Le=C.TK,je=C._k,We=C.aV,Ie=C.gb,Ue=C.Ye,we=C.df,ze=C.Ex,Ke=C.gd,Ze=C.FM,$e=C.ol,ke=C.z6,Xe=C.iA,Ye=C.P8,Fe=C.Qp,Ne=C.QV,He=C.R8,Je=C.By,Ge=C.qp,Ve=C.ql,Qe=C.iL,qe=C.iC;export{Ee as AnimateBorder,ye as Barchart,Ce as BgBox,Pe as Card,Me as Circle,De as Container,Oe as CornerBorder,Te as Css3dModel,Ae as Dashboard,Re as Fliper,Se as HalfBorder,Be as IconAnimate,Le as IconCarousel,je as Light,We as List,Ie as Loading,Ue as Location,we as Piechart,ze as Progress,Ke as RateScore,Ze as Ring,$e as Search,ke as Spot,Xe as Table,Ye as Taiji,Fe as Text3d,Ne as TextFilter,He as TextLoading,Je as TextMasked,Ge as Time,Ve as TitleBorder,Qe as TitleHeader,qe as Wave};
