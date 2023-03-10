(function(bn,B){typeof exports=="object"&&typeof module=="object"?module.exports=B(require("react")):typeof define=="function"&&define.amd?define("materials",["react"],B):typeof exports=="object"?exports.materials=B(require("react")):bn.materials=B(bn.React)})(this,function(ar){return function(){"use strict";var bn={496:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-3d-models {
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
`,""]),t.locals={},s.Z=t},190:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.g394U {
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
`,""]),t.locals={"huxy-card-fliper":"g394U",card:"zasVJ",front:"C5n3b",back:"UdsvP"},s.Z=t},271:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.huxy-icon-animate-tooltip {
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
`,""]),t.locals={},s.Z=t},498:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]),t.locals={},s.Z=t},804:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-border-animate-dash {
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
`,""]),t.locals={"huxy-border-wrap":"tF3eM","huxy-border-animate-dash":"BHIzz","huxy-border-animate-solid":"Ltln8"},s.Z=t},289:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.UJpqU {
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
`,""]),t.locals={"bg-box-dot":"UJpqU","bg-box-strip":"VXk7W","bg-box-cubestrip":"q_1dQ","bg-box-cube":"eBK09","bg-box-grid":"o9pvC","bg-box-img":"Po9ZE"},s.Z=t},548:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.YeHmo {
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
`,""]),t.locals={"corner-wrap":"YeHmo",corner:"vpTzN",half:"S3bPv","corner-tl":"WYlJx","corner-br":"SMovL"},s.Z=t},479:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.Usszw {
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
`,""]),t.locals={"corner-wrap":"Usszw","corner-half":"XcsJP"},s.Z=t},96:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.WY0lD {
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
`,""]),t.locals={"huxy-title-border-wrap":"WY0lD","huxy-title-border-top":"_ORAK","huxy-title-border-box":"Vggg7"},s.Z=t},317:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.MuUoF {
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
`,""]),t.locals={"huxy-title-header-box":"MuUoF",title:"fM2FI"},s.Z=t},303:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.huDNN {
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
`,""]),t.locals={"huxy-skeleton-barchart":"huDNN","sk-bar-item":"V5Fq4"},s.Z=t},761:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.nnDaG {
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
`,""]),t.locals={"huxy-skeleton-card":"nnDaG","sk-card-left":"iJtPz","sk-card-img":"Bya6y","sk-card-right":"c6MGh",title:"sb1hm",text:"YDDrB"},s.Z=t},129:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]),t.locals={"huxy-animate-border-circle":"Krd0d","border-circle-item":"qcJ0N"},s.Z=t},917:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.myyKG {
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
`,""]),t.locals={"skeleton-container":"myyKG",title:"AXWTP"},s.Z=t},696:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-skeleton-dashboard {
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
`,""]),t.locals={"huxy-skeleton-dashboard":"DYspm",point:"Rg6DD"},s.Z=t},263:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.YWtCI {
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
`,""]),t.locals={"huxy-skeleton-list":"YWtCI","sk-list-item":"uBGAf"},s.Z=t},955:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.IQu9g {
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
`,""]),t.locals={"huxy-skeleton-piechart":"IQu9g"},s.Z=t},709:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-progress-wave {
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
`,""]),t.locals={"huxy-progress-wave":"zFNbz"},s.Z=t},664:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-animate-border-ring {
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
`,""]),t.locals={"huxy-animate-border-ring":"WbFYr","border-ring-item":"XIIyj"},s.Z=t},177:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.suwUY {
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
`,""]),t.locals={"huxy-skeleton-table":"suwUY"},s.Z=t},202:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-loading-wave {
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
  --waveColor: rgba(0, 0, 0, 0.06);
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
`,""]),t.locals={"huxy-loading-wave":"d9M97"},s.Z=t},972:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-conic-light-animate {
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
`,""]),t.locals={conic:"_ov1n"},s.Z=t},75:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-loading-ball {
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
`,""]),t.locals={"huxy-loading-ball":"TikRE",ball:"CyLSO"},s.Z=t},871:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-location {
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
`,""]),t.locals={"huxy-location":"DdhmP"},s.Z=t},845:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-search {
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
`,""]),t.locals={"huxy-search":"r6hPc"},s.Z=t},943:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-spot {
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
`,""]),t.locals={"huxy-spot":"JsH0T","huxy-scale":"S4gb8"},s.Z=t},389:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.x6fRL {
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
`,""]),t.locals={"huxy-taiji":"x6fRL"},s.Z=t},833:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-timer {
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
`,""]),t.locals={"huxy-timer":"R1ObR"},s.Z=t},608:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`.q9v4I {
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
`,""]),t.locals={"huxy-rate-score":"q9v4I"},s.Z=t},735:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-text-3d {
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
`,""]),t.locals={},s.Z=t},814:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-text-filter {
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
`,""]),t.locals={"huxy-text-filter":"_zrvj","text-filter":"ww0tY"},s.Z=t},325:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-text-loading {
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
`,""]),t.locals={"huxy-text-loading":"ZYC7Y"},s.Z=t},82:function(r,s,n){var d=n(601),i=n.n(d),a=n(609),e=n.n(a),t=e()(i());t.push([r.id,`@keyframes huxy-text-masked {
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
`,""]),t.locals={"huxy-text-masked":"zg3Sy"},s.Z=t},609:function(r){r.exports=function(s){var n=[];return n.toString=function(){return this.map(function(i){var a="",e=typeof i[5]!="undefined";return i[4]&&(a+="@supports (".concat(i[4],") {")),i[2]&&(a+="@media ".concat(i[2]," {")),e&&(a+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),a+=s(i),e&&(a+="}"),i[2]&&(a+="}"),i[4]&&(a+="}"),a}).join("")},n.i=function(i,a,e,t,x){typeof i=="string"&&(i=[[null,i,void 0]]);var P={};if(e)for(var h=0;h<this.length;h++){var D=this[h][0];D!=null&&(P[D]=!0)}for(var g=0;g<i.length;g++){var y=[].concat(i[g]);e&&P[y[0]]||(typeof x!="undefined"&&(typeof y[5]=="undefined"||(y[1]="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {").concat(y[1],"}")),y[5]=x),a&&(y[2]&&(y[1]="@media ".concat(y[2]," {").concat(y[1],"}")),y[2]=a),t&&(y[4]?(y[1]="@supports (".concat(y[4],") {").concat(y[1],"}"),y[4]=t):y[4]="".concat(t)),n.push(y))}},n}},601:function(r){r.exports=function(s){return s[1]}},837:function(r,s,n){var d=n(899),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),e=Object.prototype.hasOwnProperty,t=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function P(h,D,g){var y,b={},j=null,E=null;g!==void 0&&(j=""+g),D.key!==void 0&&(j=""+D.key),D.ref!==void 0&&(E=D.ref);for(y in D)e.call(D,y)&&!x.hasOwnProperty(y)&&(b[y]=D[y]);if(h&&h.defaultProps)for(y in D=h.defaultProps,D)b[y]===void 0&&(b[y]=D[y]);return{$$typeof:i,type:h,key:j,ref:E,props:b,_owner:t.current}}s.Fragment=a,s.jsx=P,s.jsxs=P},322:function(r,s,n){r.exports=n(837)},62:function(r){var s=[];function n(a){for(var e=-1,t=0;t<s.length;t++)if(s[t].identifier===a){e=t;break}return e}function d(a,e){for(var t={},x=[],P=0;P<a.length;P++){var h=a[P],D=e.base?h[0]+e.base:h[0],g=t[D]||0,y="".concat(D," ").concat(g);t[D]=g+1;var b=n(y),j={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(b!==-1)s[b].references++,s[b].updater(j);else{var E=i(j,e);e.byIndex=P,s.splice(P,0,{identifier:y,updater:E,references:1})}x.push(y)}return x}function i(a,e){var t=e.domAPI(e);t.update(a);var x=function(h){if(h){if(h.css===a.css&&h.media===a.media&&h.sourceMap===a.sourceMap&&h.supports===a.supports&&h.layer===a.layer)return;t.update(a=h)}else t.remove()};return x}r.exports=function(a,e){e=e||{},a=a||[];var t=d(a,e);return function(P){P=P||[];for(var h=0;h<t.length;h++){var D=t[h],g=n(D);s[g].references--}for(var y=d(P,e),b=0;b<t.length;b++){var j=t[b],E=n(j);s[E].references===0&&(s[E].updater(),s.splice(E,1))}t=y}}},793:function(r){var s={};function n(i){if(typeof s[i]=="undefined"){var a=document.querySelector(i);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}s[i]=a}return s[i]}function d(i,a){var e=n(i);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(a)}r.exports=d},173:function(r){function s(n){var d=document.createElement("style");return n.setAttributes(d,n.attributes),n.insert(d,n.options),d}r.exports=s},892:function(r,s,n){function d(i){var a=n.nc;a&&i.setAttribute("nonce",a)}r.exports=d},36:function(r){function s(i,a,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var x=typeof e.layer!="undefined";x&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,x&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var P=e.sourceMap;P&&typeof btoa!="undefined"&&(t+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(P))))," */")),a.styleTagTransform(t,i,a.options)}function n(i){if(i.parentNode===null)return!1;i.parentNode.removeChild(i)}function d(i){var a=i.insertStyleElement(i);return{update:function(t){s(a,i,t)},remove:function(){n(a)}}}r.exports=d},464:function(r){function s(n,d){if(d.styleSheet)d.styleSheet.cssText=n;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(n))}}r.exports=s},899:function(r){r.exports=ar}},B={};function m(r){var s=B[r];if(s!==void 0)return s.exports;var n=B[r]={id:r,exports:{}};return bn[r](n,n.exports,m),n.exports}(function(){m.n=function(r){var s=r&&r.__esModule?function(){return r.default}:function(){return r};return m.d(s,{a:s}),s}})(),function(){m.d=function(r,s){for(var n in s)m.o(s,n)&&!m.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:s[n]})}}(),function(){m.o=function(r,s){return Object.prototype.hasOwnProperty.call(r,s)}}(),function(){m.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}}(),function(){m.nc=void 0}();var rr={};return function(){m.r(rr),m.d(rr,{AnimateBorder:function(){return Lr},Barchart:function(){return Wr},BgBox:function(){return jr},Card:function(){return wr},Circle:function(){return Zr},Container:function(){return Hr},CornerBorder:function(){return Ar},Css3dModel:function(){return ir},Dashboard:function(){return Ur},Fliper:function(){return yr},HalfBorder:function(){return Rr},IconAnimate:function(){return Er},IconCarousel:function(){return Or},Light:function(){return ct},List:function(){return Kr},Loading:function(){return at},Location:function(){return ot},Piechart:function(){return Yr},Progress:function(){return Nr},RateScore:function(){return Ct},Ring:function(){return Fr},Search:function(){return tt},Spot:function(){return st},Table:function(){return Gr},Taiji:function(){return dt},Text3d:function(){return mt},TextFilter:function(){return ft},TextLoading:function(){return bt},TextMasked:function(){return Et},Time:function(){return nt},TitleBorder:function(){return Ir},TitleHeader:function(){return Tr},Wave:function(){return Qr}});var r=m(322),n=o=>(o==null?void 0:o.$$typeof)&&typeof o.$$typeof=="symbol"&&o.$$typeof.description==="react.element",i=(o,l="px")=>`${o}`.replace(l,"")-0,a=m(62),e=m.n(a),t=m(36),x=m.n(t),P=m(793),h=m.n(P),D=m(892),g=m.n(D),y=m(173),b=m.n(y),j=m(464),E=m.n(j),gn=m(496),W={};W.styleTagTransform=E(),W.setAttributes=g(),W.insert=h().bind(null,"head"),W.domAPI=x(),W.insertStyleElement=b();var Pt=e()(gn.Z,W),Dt=gn.Z&&gn.Z.locals?gn.Z.locals:void 0,ir=({list:o=[],size:l="360px",cardSize:c="42px",bottom:_="60px",style:u,...p})=>{const v=360/o.length;return(0,r.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":l,"--cardSize":c,"--bottom":_,...u},...p,children:(0,r.jsx)("div",{className:"model-container",children:o.map((f,C)=>(0,r.jsx)("div",{className:"model-item",style:{"--rotateY":`${v*C}deg`},children:(0,r.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:f.label,href:f.link,target:"_blank",children:[f.icon?(0,r.jsx)("img",{src:f.icon,alt:f.label}):null,n(f.icon)?f.icon:f.icon?(0,r.jsx)("img",{src:f.icon,alt:f.label}):null]})},f.label))})})},En=m(271),w={};w.styleTagTransform=E(),w.setAttributes=g(),w.insert=h().bind(null,"head"),w.domAPI=x(),w.insertStyleElement=b();var Tt=e()(En.Z,w),At=En.Z&&En.Z.locals?En.Z.locals:void 0,Er=({objs:o=[],models:l=[],height:c="480px",style:_,className:u,...p})=>(0,r.jsxs)("div",{className:`huxy-icon-animate-container${u?` ${u}`:""}`,style:{"--height":c,..._},...p,children:[(0,r.jsx)("div",{className:"huxy-icon-animate-materiels",children:o.map(({value:v,label:f,icon:C,link:M,type:T,style:A})=>(0,r.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${v}${T?"":" obj-img"}`,tooltip:T?void 0:f,href:M,target:"_blank",style:A,children:n(C)?C:(0,r.jsx)("img",{src:C,alt:f})},f))}),(0,r.jsx)(ir,{list:l,size:`${i(c)-120}px`})]}),yn=m(190),z={};z.styleTagTransform=E(),z.setAttributes=g(),z.insert=h().bind(null,"head"),z.domAPI=x(),z.insertStyleElement=b();var St=e()(yn.Z,z),Cn=yn.Z&&yn.Z.locals?yn.Z.locals:void 0,yr=({front:o,back:l,...c})=>(0,r.jsx)("div",{className:Cn["huxy-card-fliper"],...c,children:(0,r.jsxs)("div",{className:Cn.card,children:[(0,r.jsx)("div",{className:Cn.front,children:o}),(0,r.jsx)("div",{className:Cn.back,children:l})]})}),L=m(899),Cr=(o={})=>{const l=(0,L.useRef)(0),[c,_]=(0,L.useState)(o),u=(0,L.useCallback)(p=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>_(p))},[]);return(0,L.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[c,u]},Mr=(o,l)=>{const c=(0,L.useRef)();(0,L.useEffect)(()=>{c.current=o},[o]),(0,L.useEffect)(()=>{if(l){const _=setInterval(()=>c.current(),l);return()=>clearInterval(_)}},[l])},Mn=m(498),Z={};Z.styleTagTransform=E(),Z.setAttributes=g(),Z.insert=h().bind(null,"head"),Z.domAPI=x(),Z.insertStyleElement=b();var Bt=e()(Mn.Z,Z),Wt=Mn.Z&&Mn.Z.locals?Mn.Z.locals:void 0;const Pr=(o,l=60)=>(l=1.5*l,o.map((c,_)=>{const u=Math.random();let p=1;u<.3334?p=1.2:u<.6667&&(p=.8);const v=~~(_/3),f=_%3;let C=1.5*l*v;f===1&&(C+=l/2);const M=f*l+l/6*(f+1);return c.transform={x:C,y:M,s:p},c})),Dr=(o,l=60)=>(l=2.25*l,o.map(c=>(c.transform.x-=2,c.transform.x+l<0&&(c.transform.x=~~(o.length/3)*l),c)));var Or=({width:o=60,wait:l=56,list:c=[],className:_,...u})=>{const p=(0,L.useMemo)(()=>Pr(c,o),[]),[v,f]=Cr(p),[C,M]=(0,L.useState)(l);Mr(()=>{const O=Dr(v,o);f(O)},C);const T=O=>{M(null)},A=O=>{M(l)};return(0,r.jsx)("div",{className:`huxy-icon-carousel${_?` ${_}`:""}`,...u,children:(0,r.jsx)("div",{className:"icon-container",children:v.map((O,I)=>(0,r.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${I%3===0?"lt":"lb"}`,tooltip:O.label,style:{transform:`translate(${O.transform.x}px, ${O.transform.y}px) scale(${O.transform.s})`,width:o},onMouseEnter:T,onMouseLeave:A,href:O.link,target:"_blank",children:(0,r.jsx)("img",{src:O.icon,alt:O.label})},O.label))})})},Pn=m(317),U={};U.styleTagTransform=E(),U.setAttributes=g(),U.insert=h().bind(null,"head"),U.domAPI=x(),U.insertStyleElement=b();var zt=e()(Pn.Z,U),sr=Pn.Z&&Pn.Z.locals?Pn.Z.locals:void 0,Tr=({title:o,borderColor:l,titleWidth:c,titleHeight:_,style:u,className:p,...v})=>(0,r.jsx)("div",{className:`${sr["huxy-title-header-box"]}${p?` ${p}`:""}`,style:{"--borderColor":l,"--titleWidth":c,"--titleHeight":_,...u},...v,children:(0,r.jsx)("h2",{className:sr.title,children:o})}),Dn=m(548),K={};K.styleTagTransform=E(),K.setAttributes=g(),K.insert=h().bind(null,"head"),K.domAPI=x(),K.insertStyleElement=b();var Ut=e()(Dn.Z,K),xn=Dn.Z&&Dn.Z.locals?Dn.Z.locals:void 0,Ar=({size:o="8px",borderColor:l="var(--appColor)",half1:c=!0,half2:_=!0,style:u,className:p,children:v,...f})=>(0,r.jsx)("div",{className:`${xn["corner-wrap"]}${p?` ${p}`:""}`,style:{"--cornerSize":o,"--borderColor":l,...u},...f,children:(0,r.jsxs)("div",{className:`${xn.corner}${c?` ${xn.half}`:""}`,children:[_?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:xn["corner-tl"]}),(0,r.jsx)("span",{className:xn["corner-br"]})]}):null,v]})}),On=m(479),$={};$.styleTagTransform=E(),$.setAttributes=g(),$.insert=h().bind(null,"head"),$.domAPI=x(),$.insertStyleElement=b();var $t=e()(On.Z,$),lr=On.Z&&On.Z.locals?On.Z.locals:void 0,Rr=({size:o="8px",borderColor:l="var(--appColor)",style:c,className:_,children:u,...p})=>(0,r.jsx)("div",{className:`${lr["corner-wrap"]}${_?` ${_}`:""}`,style:{"--cornerSize":o,"--borderColor":l,...c},...p,children:(0,r.jsx)("div",{className:lr["corner-half"],children:u})}),Tn=m(289),k={};k.styleTagTransform=E(),k.setAttributes=g(),k.insert=h().bind(null,"head"),k.domAPI=x(),k.insertStyleElement=b();var Yt=e()(Tn.Z,k),Sr=Tn.Z&&Tn.Z.locals?Tn.Z.locals:void 0,jr=({type:o="dot",bgColor:l,cubeColor:c,url:_,style:u,className:p,children:v,...f})=>{o=_?"img":o;const C=_?{backgroundImage:`url(${_})`}:void 0;return(0,r.jsx)("div",{className:`${Sr[`bg-box-${o}`]}${p?` ${p}`:""}`,style:{"--bgColor":l,"--cubeColor":c,...C,...u},...f,children:v})},An=m(96),Y={};Y.styleTagTransform=E(),Y.setAttributes=g(),Y.insert=h().bind(null,"head"),Y.domAPI=x(),Y.insertStyleElement=b();var Nt=e()(An.Z,Y),tr=An.Z&&An.Z.locals?An.Z.locals:void 0,Ir=({children:o,title:l,fontSize:c,borderSize:_,borderColor:u="var(--appColor)",space:p="10px",style:v,className:f,...C})=>(0,r.jsxs)("div",{className:`${tr["huxy-title-border-wrap"]}${f?` ${f}`:""}`,style:{"--borderColor":u,"--space":p,"--fontSize":c,"--borderSize":_,...v},...C,children:[(0,r.jsx)("div",{className:tr["huxy-title-border-top"],children:l}),(0,r.jsx)("div",{className:tr["huxy-title-border-box"],children:o})]}),Rn=m(804),X={};X.styleTagTransform=E(),X.setAttributes=g(),X.insert=h().bind(null,"head"),X.domAPI=x(),X.insertStyleElement=b();var Ht=e()(Rn.Z,X),dr=Rn.Z&&Rn.Z.locals?Rn.Z.locals:void 0,Lr=({type:o="solid",space:l="2px",borderColor:c="var(--appColor)",style:_,className:u,children:p,...v})=>(0,r.jsx)("div",{className:`${dr["huxy-border-wrap"]}${u?` ${u}`:""}`,style:{"--space":l,"--borderColor":c,..._},...v,children:(0,r.jsx)("div",{className:dr[`huxy-border-animate-${o==="dash"?"dash":"solid"}`],children:p})}),Br=(o="",l=0,c="0")=>{const _=o.length;return _>=l?o:`${Array(l-_+1).join(c)}${o}`},R=()=>"#"+Br((~~(Math.random()*(1<<24))).toString(16),6),S=(o=0,l=0,c=!0)=>(o<l&&(o=[l,l=o][0]),c?~~(Math.random()*(o-l+1))+l:Math.random()*(o-l)+l),er=(o=[])=>o[S(o.length-1)],Sn=m(303),N={};N.styleTagTransform=E(),N.setAttributes=g(),N.insert=h().bind(null,"head"),N.domAPI=x(),N.insertStyleElement=b();var ne=e()(Sn.Z,N),_r=Sn.Z&&Sn.Z.locals?Sn.Z.locals:void 0;const cr=o=>o!=null&&o.length?er(o):R();var Wr=({list:o=10,height:l="240px",space:c="25px",itemWidth:_="30px",colors:u=[],color:p,style:v,className:f,...C})=>(0,r.jsx)("div",{className:`${_r["huxy-skeleton-barchart"]}${f?` ${f}`:""}`,style:{"--height":l,...v},...C,children:(Array.isArray(o)?o:[...new Array(o)]).map((M,T)=>{var A,O,I;return(0,r.jsx)("div",{className:_r["sk-bar-item"],style:{"--space":c,"--itemWidth":_,"--bgColor":(O=(A=M==null?void 0:M.color)!=null?A:p)!=null?O:`linear-gradient(to top, ${cr(u)}, ${cr(u)})`,"--itemHeight":(I=M==null?void 0:M.height)!=null?I:`${S(15,100)}%`,left:`${T*(i(c)+i(_))}px`}},`huxy-skeleton-barchart-${T}`)})}),jn=m(761),F={};F.styleTagTransform=E(),F.setAttributes=g(),F.insert=h().bind(null,"head"),F.domAPI=x(),F.insertStyleElement=b();var te=e()(jn.Z,F),H=jn.Z&&jn.Z.locals?jn.Z.locals:void 0,wr=({height:o="120px",leftColor:l,rightColor:c,topWidth:_,bottomWidth:u,style:p,className:v,...f})=>(0,r.jsxs)("div",{className:`${H["huxy-skeleton-card"]}${v?` ${v}`:""}`,style:{"--height":o,"--leftColor":l!=null?l:R(),"--rightColor":c!=null?c:R(),"--topWidth":_!=null?_:`${S(30,60)}%`,"--bottomWidth":u!=null?u:`${S(55,95)}%`,...p},...f,children:[(0,r.jsx)("div",{className:H["sk-card-left"],children:(0,r.jsx)("div",{className:H["sk-card-img"]})}),(0,r.jsxs)("div",{className:H["sk-card-right"],children:[(0,r.jsx)("h4",{className:H.title}),(0,r.jsx)("p",{className:H.text})]})]}),In=m(129),J={};J.styleTagTransform=E(),J.setAttributes=g(),J.insert=h().bind(null,"head"),J.domAPI=x(),J.insertStyleElement=b();var oe=e()(In.Z,J),ur=In.Z&&In.Z.locals?In.Z.locals:void 0;const zr=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}];var Zr=({size:o="300px",space:l="8px",style:c,className:_,...u})=>{let p=i(l)*3;return(0,r.jsx)("div",{className:`${ur["huxy-animate-border-circle"]}${_?` ${_}`:""}`,style:{"--size":o,...c},...u,children:zr.map((v,f)=>(p=p+i(v.borderWidth)*2+i(l)*2,(0,r.jsx)("div",{className:ur["border-circle-item"],style:{"--itemSize":`calc(${o} - ${p}px)`,"--borderWidth":v.borderWidth,"--borderLeftColor":v.borderLeftColor,"--borderRightColor":v.borderRightColor,"--borderTopColor":v.borderTopColor,"--borderBottomColor":v.borderBottomColor,"--time":v.time,"--rotateStart":v.rotateStart,"--rotateEnd":v.rotateEnd}},`huxy-animate-border-circle-${f}`)))})},Ln=m(696),G={};G.styleTagTransform=E(),G.setAttributes=g(),G.insert=h().bind(null,"head"),G.domAPI=x(),G.insertStyleElement=b();var ie=e()(Ln.Z,G),pr=Ln.Z&&Ln.Z.locals?Ln.Z.locals:void 0,Ur=({size:o="400px",width:l="20px",space:c="20px",colors:_=[],style:u,className:p,...v})=>(0,r.jsx)("div",{className:`${pr["huxy-skeleton-dashboard"]}${p?` ${p}`:""}`,style:{"--size":o,"--width":l,"--space":c,"--color1":_[0],"--color2":_[1],"--color3":_[2],"--color4":_[3],"--color5":_[4],"--color6":_[5],"--color7":_[6],...u},...v,children:(0,r.jsx)("div",{className:pr.point})}),Bn=m(263),V={};V.styleTagTransform=E(),V.setAttributes=g(),V.insert=h().bind(null,"head"),V.domAPI=x(),V.insertStyleElement=b();var le=e()(Bn.Z,V),hr=Bn.Z&&Bn.Z.locals?Bn.Z.locals:void 0,Kr=({row:o=8,leftColor:l="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:c="rgba(0, 0, 0, 0.2)",rightWidth:_="100px",itemHeight:u="20px",space:p="20px",className:v,...f})=>(0,r.jsx)("div",{className:`${hr["huxy-skeleton-list"]}${v?` ${v}`:""}`,style:{"--rightWidth":_,"--itemHeight":u,"--space":p,"--leftColor":l,"--rightColor":c},...f,children:[...new Array(o)].map((C,M)=>(0,r.jsx)("div",{className:hr["sk-list-item"]},`huxy-skeleton-list-${M}`))}),$r=(o,l=100)=>{const c=[];return[...new Array(o)].map((_,u)=>{u===o-1?c[u]=l:(c[u]=S(1,l-1),l-=c[u])}),c},Wn=m(955),Q={};Q.styleTagTransform=E(),Q.setAttributes=g(),Q.insert=h().bind(null,"head"),Q.domAPI=x(),Q.insertStyleElement=b();var ce=e()(Wn.Z,Q),kr=Wn.Z&&Wn.Z.locals?Wn.Z.locals:void 0;const wn=o=>o!=null&&o.length?er(o):R(),q=$r(4);var Yr=({height:o,colors:l=[],style:c,className:_,...u})=>(0,r.jsx)("div",{className:`${kr["huxy-skeleton-piechart"]}${_?` ${_}`:""}`,style:{"--height":o,"--color1":wn(l),"--color2":wn(l),"--color3":wn(l),"--color4":wn(l),"--percent1":`${q[0]}%`,"--percent2":`${q[0]+q[1]}%`,"--percent3":`${q[0]+q[1]+q[2]}%`,"--percent4":"100%",...c},...u}),zn=m(709),nn={};nn.styleTagTransform=E(),nn.setAttributes=g(),nn.insert=h().bind(null,"head"),nn.domAPI=x(),nn.insertStyleElement=b();var pe=e()(zn.Z,nn),Xr=zn.Z&&zn.Z.locals?zn.Z.locals:void 0,Nr=({percent:o,height:l="20px",bgColor:c="rgba(0, 0, 0, 0.15)",progressColor:_,borderRadius:u="4px",waveColor:p="rgba(255, 255, 255, 0.2)",waveTime:v="3s",style:f,className:C,...M})=>(0,r.jsx)("div",{className:`${Xr["huxy-progress-wave"]}${C?` ${C}`:""}`,style:{"--percent":o!=null?o:S(33,99),"--height":l,"--bgColor":c,"--progressColor":_!=null?_:R(),"--borderRadius":u,"--waveColor":p,"--waveTime":v,...f},...M}),Zn=m(664),rn={};rn.styleTagTransform=E(),rn.setAttributes=g(),rn.insert=h().bind(null,"head"),rn.domAPI=x(),rn.insertStyleElement=b();var ve=e()(Zn.Z,rn),vr=Zn.Z&&Zn.Z.locals?Zn.Z.locals:void 0,Fr=({list:o=60,size:l="300px",itemWidth:c="30px",itemHeight:_="4px",bgColor:u="rgba(255, 255, 255 , 0.9)",shadowColor:p="rgba(255, 255, 255 , 0.6)",color:v,style:f,className:C,...M})=>(o=Array.isArray(o)?o:[...new Array(o)],(0,r.jsx)("div",{className:`${vr["huxy-animate-border-ring"]}${C?` ${C}`:""}`,style:{"--size":l,"--itemWidth":c,"--itemHeight":_,"--bgColor":u,"--shadowColor":p,...f},...M,children:o.map((T,A)=>{var O,I;return(0,r.jsx)("div",{className:vr["border-ring-item"],style:{"--color":(I=(O=T==null?void 0:T.color)!=null?O:v)!=null?I:R(),transform:`rotate(${360/o.length*A}deg)`}},`huxy-animate-border-ring-${A}`)})})),Un=m(917),tn={};tn.styleTagTransform=E(),tn.setAttributes=g(),tn.insert=h().bind(null,"head"),tn.domAPI=x(),tn.insertStyleElement=b();var fe=e()(Un.Z,tn),mr=Un.Z&&Un.Z.locals?Un.Z.locals:void 0,Hr=({children:o,hasTitle:l,titleBgColor:c,style:_,className:u,...p})=>(0,r.jsx)("div",{className:`${mr["skeleton-container"]}${l?` ${mr.title}`:""}${u?` ${u}`:""}`,style:{"--titleBgColor":c!=null?c:R(),..._},...p,children:o}),Kn=m(177),en={};en.styleTagTransform=E(),en.setAttributes=g(),en.insert=h().bind(null,"head"),en.domAPI=x(),en.insertStyleElement=b();var be=e()(Kn.Z,en),Jr=Kn.Z&&Kn.Z.locals?Kn.Z.locals:void 0,Gr=({row:o=6,col:l=8,...c})=>(0,r.jsx)("div",{className:Jr["huxy-skeleton-table"],...c,children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:[...new Array(l)].map((_,u)=>(0,r.jsx)("th",{children:(0,r.jsx)("span",{})},`skeleton-table-th-${u}`))})}),(0,r.jsx)("tbody",{children:[...new Array(o)].map((_,u)=>(0,r.jsx)("tr",{children:[...new Array(l)].map((p,v)=>(0,r.jsx)("td",{children:(0,r.jsx)("span",{})},`skeleton-table-tr-${u}-${v}`))},`tr-${u}`))})]})}),$n=m(202),on={};on.styleTagTransform=E(),on.setAttributes=g(),on.insert=h().bind(null,"head"),on.domAPI=x(),on.insertStyleElement=b();var Ee=e()($n.Z,on),Vr=$n.Z&&$n.Z.locals?$n.Z.locals:void 0,Qr=({color:o="rgba(0, 0, 0, 0.06)",delay:l="2s",style:c,className:_,children:u,...p})=>(0,r.jsx)("div",{className:`${Vr["huxy-loading-wave"]}${_?` ${_}`:""}`,style:{"--waveColor":o,"--waveTime":l,...c},...p,children:u}),kn=m(833),an={};an.styleTagTransform=E(),an.setAttributes=g(),an.insert=h().bind(null,"head"),an.domAPI=x(),an.insertStyleElement=b();var Ce=e()(kn.Z,an),qr=kn.Z&&kn.Z.locals?kn.Z.locals:void 0,nt=o=>(0,r.jsx)("span",{className:qr["huxy-timer"],...o}),Yn=m(845),sn={};sn.styleTagTransform=E(),sn.setAttributes=g(),sn.insert=h().bind(null,"head"),sn.domAPI=x(),sn.insertStyleElement=b();var Pe=e()(Yn.Z,sn),rt=Yn.Z&&Yn.Z.locals?Yn.Z.locals:void 0,tt=o=>(0,r.jsx)("span",{className:rt["huxy-search"],...o}),Xn=m(871),ln={};ln.styleTagTransform=E(),ln.setAttributes=g(),ln.insert=h().bind(null,"head"),ln.domAPI=x(),ln.insertStyleElement=b();var Oe=e()(Xn.Z,ln),et=Xn.Z&&Xn.Z.locals?Xn.Z.locals:void 0,ot=o=>(0,r.jsx)("span",{className:et["huxy-location"],...o}),Nn=m(75),dn={};dn.styleTagTransform=E(),dn.setAttributes=g(),dn.insert=h().bind(null,"head"),dn.domAPI=x(),dn.insertStyleElement=b();var Ae=e()(Nn.Z,dn),fr=Nn.Z&&Nn.Z.locals?Nn.Z.locals:void 0,at=({list:o=7,size:l="40px",shadowSize:c="50px",time:_="1.6s",style:u,className:p,...v})=>(_=i(_,"s"),(0,r.jsx)("div",{className:`${fr["huxy-loading-ball"]}${p?` ${p}`:""}`,style:{"--size":l,"--shadowSize":c,"--time":`${_}s`,...u},...v,children:(Array.isArray(o)?o:[...new Array(o)]).map((f,C)=>{var M,T,A;return(0,r.jsx)("div",{className:fr.ball,style:{"--delay":(T=f==null?void 0:f.delay)!=null?T:`${_/(((M=o==null?void 0:o.length)!=null?M:o)+1)*(C+1)-_}s`,"--bgColor":(A=f==null?void 0:f.color)!=null?A:R()}},`huxy-loading-ball-${C}`)})})),Fn=m(943),_n={};_n.styleTagTransform=E(),_n.setAttributes=g(),_n.insert=h().bind(null,"head"),_n.domAPI=x(),_n.insertStyleElement=b();var Se=e()(Fn.Z,_n),it=Fn.Z&&Fn.Z.locals?Fn.Z.locals:void 0,st=({type:o="spot",size:l,color:c,shadowColor:_,style:u,className:p,...v})=>(0,r.jsx)("span",{className:`${it[`huxy-${o}`]}${p?` ${p}`:""}`,style:{"--size":l!=null?l:`${S(6,30)}px`,"--color":c!=null?c:R(),"--shadowColor":_!=null?_:R(),...u},...v}),Hn=m(389),cn={};cn.styleTagTransform=E(),cn.setAttributes=g(),cn.insert=h().bind(null,"head"),cn.domAPI=x(),cn.insertStyleElement=b();var Ie=e()(Hn.Z,cn),lt=Hn.Z&&Hn.Z.locals?Hn.Z.locals:void 0,dt=({width:o,border:l,black:c,white:_,style:u,className:p,...v})=>(0,r.jsx)("div",{className:`${lt["huxy-taiji"]} ${p}`,style:{"--width":o,"--border":l,"--black":c,"--white":_,...u},...v}),Jn=m(972),un={};un.styleTagTransform=E(),un.setAttributes=g(),un.insert=h().bind(null,"head"),un.domAPI=x(),un.insertStyleElement=b();var Be=e()(Jn.Z,un),_t=Jn.Z&&Jn.Z.locals?Jn.Z.locals:void 0,ct=({width:o="200px",height:l="180px",space:c="12%",bgColor:_,style:u,className:p,...v})=>(0,r.jsx)("div",{className:`${_t.conic}${p?` ${p}`:""}`,style:{"--width":o,"--height":l,"--space":c,"--bgColor":_,...u},...v}),Gn=m(735),pn={};pn.styleTagTransform=E(),pn.setAttributes=g(),pn.insert=h().bind(null,"head"),pn.domAPI=x(),pn.insertStyleElement=b();var we=e()(Gn.Z,pn),ze=Gn.Z&&Gn.Z.locals?Gn.Z.locals:void 0;const or=()=>Math.random()-.5,ut=()=>~~(or()*S(5,10)*10),pt=()=>~~(or()*S(2,8)*10),ht=()=>(1-or())*S(1.1,1.4,!1),vt=o=>o!=null&&o.length?er(o):R();var mt=({list:o=[],colors:l=[],width:c,padding:_,bgColor:u,style:p,...v})=>(0,r.jsx)("div",{className:"huxy-text-3d",style:{"--width":c,"--padding":_,"--bgColor":u,...p},...v,children:(0,r.jsx)("div",{className:"text-3d-container",children:o.map((f,C)=>{var M,T,A,O,I,br;const gr=(M=f.time)!=null?M:S(6,24,!1).toFixed(2),Mt=(T=f.delay)!=null?T:-S(0,gr,!1).toFixed(2);return(0,r.jsx)("div",{className:"text-3d-item",style:{"--time":`${gr}s`,"--center":(A=f.center)!=null?A:`${ut()}%`,"--rotate":(O=f.rotate)!=null?O:`${pt()}deg`,"--size":(I=f.size)!=null?I:ht(),"--color":(br=f.color)!=null?br:vt(l),"--delay":`${Mt}s`},children:(0,r.jsx)("div",{className:"text-3d-item-card",children:(0,r.jsx)("span",{className:"link animate-text",children:f.label})})},f.label)})})}),Vn=m(814),hn={};hn.styleTagTransform=E(),hn.setAttributes=g(),hn.insert=h().bind(null,"head"),hn.domAPI=x(),hn.insertStyleElement=b();var Ue=e()(Vn.Z,hn),xr=Vn.Z&&Vn.Z.locals?Vn.Z.locals:void 0,ft=({time:o="3s",style:l,className:c,children:_,...u})=>(0,r.jsx)("div",{className:`${xr["huxy-text-filter"]}${c?` ${c}`:""}`,style:{"--time":o,...l},...u,children:(0,r.jsx)("div",{className:xr["text-filter"],children:_})}),Qn=m(325),vn={};vn.styleTagTransform=E(),vn.setAttributes=g(),vn.insert=h().bind(null,"head"),vn.domAPI=x(),vn.insertStyleElement=b();var $e=e()(Qn.Z,vn),xt=Qn.Z&&Qn.Z.locals?Qn.Z.locals:void 0,bt=({backColor:o="rgba(0, 0, 0, 0.3)",frontColor:l="rgba(255, 255, 255, 1)",time:c="4s",style:_,className:u,children:p,...v})=>(0,r.jsx)("div",{className:`${xt["huxy-text-loading"]}${u?` ${u}`:""}`,style:{"--backColor":o,"--frontColor":l,"--time":c,..._},...v,"data-text":p,children:p}),qn=m(82),mn={};mn.styleTagTransform=E(),mn.setAttributes=g(),mn.insert=h().bind(null,"head"),mn.domAPI=x(),mn.insertStyleElement=b();var Ye=e()(qn.Z,mn),gt=qn.Z&&qn.Z.locals?qn.Z.locals:void 0,Et=({startColor:o,endColor:l,style:c,className:_,children:u,...p})=>(0,r.jsx)("div",{className:`${gt["huxy-text-masked"]}${_?` ${_}`:""}`,style:{"--startColor":o!=null?o:R(),"--endColor":l!=null?l:R(),...c},...p,children:u}),nr=m(608),fn={};fn.styleTagTransform=E(),fn.setAttributes=g(),fn.insert=h().bind(null,"head"),fn.domAPI=x(),fn.insertStyleElement=b();var Ne=e()(nr.Z,fn),yt=nr.Z&&nr.Z.locals?nr.Z.locals:void 0,Ct=({score:o=0,backColor:l="rgba(0, 0, 0, 0.3)",frontColor:c="var(--yellow2)",style:_,className:u,children:p,backend:v,...f})=>(0,r.jsx)("div",{className:`${yt["huxy-rate-score"]}${u?` ${u}`:""}`,style:{"--backColor":l,"--frontColor":c,"--score":`${o}`.includes("%")?o:`${o*100}%`,..._},...f,"data-text":p,children:v!=null?v:p})}(),rr}()});
