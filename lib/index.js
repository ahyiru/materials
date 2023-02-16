(function(xn,I){typeof exports=="object"&&typeof module=="object"?module.exports=I(require("react")):typeof define=="function"&&define.amd?define("materials",["react"],I):typeof exports=="object"?exports.materials=I(require("react")):xn.materials=I(xn.React)})(this,function(ae){return function(){"use strict";var xn={615:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-3d-models {
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
`,""]),r.locals={},s.Z=r},729:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.g394U {
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
`,""]),r.locals={"huxy-card-fliper":"g394U",card:"zasVJ",front:"C5n3b",back:"UdsvP"},s.Z=r},501:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.huxy-icon-animate-tooltip {
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
`,""]),r.locals={},s.Z=r},17:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]),r.locals={},s.Z=r},925:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-border-animate-dash {
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
`,""]),r.locals={"huxy-border-wrap":"tF3eM","huxy-border-animate-dash":"BHIzz","huxy-border-animate-solid":"Ltln8"},s.Z=r},579:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.UJpqU {
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
`,""]),r.locals={"bg-box-dot":"UJpqU","bg-box-strip":"VXk7W","bg-box-cubestrip":"q_1dQ","bg-box-cube":"eBK09","bg-box-grid":"o9pvC","bg-box-img":"Po9ZE"},s.Z=r},40:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.YeHmo {
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
`,""]),r.locals={"corner-wrap":"YeHmo",corner:"vpTzN",half:"S3bPv","corner-tl":"WYlJx","corner-br":"SMovL"},s.Z=r},538:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.Usszw {
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
`,""]),r.locals={"corner-wrap":"Usszw","corner-half":"XcsJP"},s.Z=r},914:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.WY0lD {
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
`,""]),r.locals={"huxy-title-border-wrap":"WY0lD","huxy-title-border-top":"_ORAK","huxy-title-border-box":"Vggg7"},s.Z=r},511:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.MuUoF {
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
`,""]),r.locals={"huxy-title-header-box":"MuUoF",title:"fM2FI"},s.Z=r},771:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.huDNN {
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
`,""]),r.locals={"huxy-skeleton-barchart":"huDNN","sk-bar-item":"V5Fq4"},s.Z=r},709:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.nnDaG {
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
`,""]),r.locals={"huxy-skeleton-card":"nnDaG","sk-card-left":"iJtPz","sk-card-img":"Bya6y","sk-card-right":"c6MGh",title:"sb1hm",text:"YDDrB"},s.Z=r},9:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]),r.locals={"huxy-animate-border-circle":"Krd0d","border-circle-item":"qcJ0N"},s.Z=r},988:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.myyKG {
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
`,""]),r.locals={"skeleton-container":"myyKG",title:"AXWTP"},s.Z=r},681:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-skeleton-dashboard {
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
`,""]),r.locals={"huxy-skeleton-dashboard":"DYspm",point:"Rg6DD"},s.Z=r},41:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.YWtCI {
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
`,""]),r.locals={"huxy-skeleton-list":"YWtCI","sk-list-item":"uBGAf"},s.Z=r},180:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.IQu9g {
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
`,""]),r.locals={"huxy-skeleton-piechart":"IQu9g"},s.Z=r},752:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-progress-wave {
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
`,""]),r.locals={"huxy-progress-wave":"zFNbz"},s.Z=r},243:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-animate-border-ring {
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
`,""]),r.locals={"huxy-animate-border-ring":"WbFYr","border-ring-item":"XIIyj"},s.Z=r},77:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.suwUY {
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
`,""]),r.locals={"huxy-skeleton-table":"suwUY"},s.Z=r},832:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-loading-wave {
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
`,""]),r.locals={"huxy-loading-wave":"d9M97"},s.Z=r},784:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-conic-light-animate {
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
`,""]),r.locals={conic:"_ov1n"},s.Z=r},44:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-loading-ball {
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
`,""]),r.locals={"huxy-loading-ball":"TikRE",ball:"CyLSO"},s.Z=r},875:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-location {
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
`,""]),r.locals={"huxy-location":"DdhmP"},s.Z=r},950:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-search {
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
`,""]),r.locals={"huxy-search":"r6hPc"},s.Z=r},658:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-spot {
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
`,""]),r.locals={"huxy-spot":"JsH0T","huxy-scale":"S4gb8"},s.Z=r},206:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.x6fRL {
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
`,""]),r.locals={"huxy-taiji":"x6fRL"},s.Z=r},289:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-timer {
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
`,""]),r.locals={"huxy-timer":"R1ObR"},s.Z=r},783:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`.q9v4I {
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
`,""]),r.locals={"huxy-rate-score":"q9v4I"},s.Z=r},859:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-text-3d {
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
`,""]),r.locals={},s.Z=r},589:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-text-filter {
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
`,""]),r.locals={"huxy-text-filter":"_zrvj","text-filter":"ww0tY"},s.Z=r},850:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-text-loading {
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
`,""]),r.locals={"huxy-text-loading":"ZYC7Y"},s.Z=r},814:function(e,s,n){var l=n(703),_=n.n(l),a=n(414),o=n.n(a),r=o()(_());r.push([e.id,`@keyframes huxy-text-masked {
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
`,""]),r.locals={"huxy-text-masked":"zg3Sy"},s.Z=r},414:function(e){e.exports=function(s){var n=[];return n.toString=function(){return this.map(function(_){var a="",o=typeof _[5]!="undefined";return _[4]&&(a+="@supports (".concat(_[4],") {")),_[2]&&(a+="@media ".concat(_[2]," {")),o&&(a+="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {")),a+=s(_),o&&(a+="}"),_[2]&&(a+="}"),_[4]&&(a+="}"),a}).join("")},n.i=function(_,a,o,r,f){typeof _=="string"&&(_=[[null,_,void 0]]);var P={};if(o)for(var m=0;m<this.length;m++){var D=this[m][0];D!=null&&(P[D]=!0)}for(var g=0;g<_.length;g++){var y=[].concat(_[g]);o&&P[y[0]]||(typeof f!="undefined"&&(typeof y[5]=="undefined"||(y[1]="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {").concat(y[1],"}")),y[5]=f),a&&(y[2]&&(y[1]="@media ".concat(y[2]," {").concat(y[1],"}")),y[2]=a),r&&(y[4]?(y[1]="@supports (".concat(y[4],") {").concat(y[1],"}"),y[4]=r):y[4]="".concat(r)),n.push(y))}},n}},703:function(e){e.exports=function(s){return s[1]}},53:function(e,s,n){var l=n(899),_=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function P(m,D,g){var y,x={},S=null,E=null;g!==void 0&&(S=""+g),D.key!==void 0&&(S=""+D.key),D.ref!==void 0&&(E=D.ref);for(y in D)o.call(D,y)&&!f.hasOwnProperty(y)&&(x[y]=D[y]);if(m&&m.defaultProps)for(y in D=m.defaultProps,D)x[y]===void 0&&(x[y]=D[y]);return{$$typeof:_,type:m,key:S,ref:E,props:x,_owner:r.current}}s.Fragment=a,s.jsx=P,s.jsxs=P},458:function(e,s,n){e.exports=n(53)},748:function(e){var s=[];function n(a){for(var o=-1,r=0;r<s.length;r++)if(s[r].identifier===a){o=r;break}return o}function l(a,o){for(var r={},f=[],P=0;P<a.length;P++){var m=a[P],D=o.base?m[0]+o.base:m[0],g=r[D]||0,y="".concat(D," ").concat(g);r[D]=g+1;var x=n(y),S={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(x!==-1)s[x].references++,s[x].updater(S);else{var E=_(S,o);o.byIndex=P,s.splice(P,0,{identifier:y,updater:E,references:1})}f.push(y)}return f}function _(a,o){var r=o.domAPI(o);r.update(a);var f=function(m){if(m){if(m.css===a.css&&m.media===a.media&&m.sourceMap===a.sourceMap&&m.supports===a.supports&&m.layer===a.layer)return;r.update(a=m)}else r.remove()};return f}e.exports=function(a,o){o=o||{},a=a||[];var r=l(a,o);return function(P){P=P||[];for(var m=0;m<r.length;m++){var D=r[m],g=n(D);s[g].references--}for(var y=l(P,o),x=0;x<r.length;x++){var S=r[x],E=n(S);s[E].references===0&&(s[E].updater(),s.splice(E,1))}r=y}}},736:function(e){var s={};function n(_){if(typeof s[_]=="undefined"){var a=document.querySelector(_);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(o){a=null}s[_]=a}return s[_]}function l(_,a){var o=n(_);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}e.exports=l},706:function(e){function s(n){var l=document.createElement("style");return n.setAttributes(l,n.attributes),n.insert(l,n.options),l}e.exports=s},567:function(e,s,n){function l(_){var a=n.nc;a&&_.setAttribute("nonce",a)}e.exports=l},306:function(e){function s(_,a,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var f=typeof o.layer!="undefined";f&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,f&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var P=o.sourceMap;P&&typeof btoa!="undefined"&&(r+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(P))))," */")),a.styleTagTransform(r,_,a.options)}function n(_){if(_.parentNode===null)return!1;_.parentNode.removeChild(_)}function l(_){var a=_.insertStyleElement(_);return{update:function(r){s(a,_,r)},remove:function(){n(a)}}}e.exports=l},62:function(e){function s(n,l){if(l.styleSheet)l.styleSheet.cssText=n;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(n))}}e.exports=s},899:function(e){e.exports=ae}},I={};function v(e){var s=I[e];if(s!==void 0)return s.exports;var n=I[e]={id:e,exports:{}};return xn[e](n,n.exports,v),n.exports}(function(){v.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return v.d(s,{a:s}),s}})(),function(){v.d=function(e,s){for(var n in s)v.o(s,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}}(),function(){v.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){v.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){v.nc=void 0}();var ee={};return function(){v.r(ee),v.d(ee,{AnimateBorder:function(){return ke},Barchart:function(){return Le},BgBox:function(){return Se},Card:function(){return Be},Circle:function(){return ze},Container:function(){return He},CornerBorder:function(){return Te},Css3dModel:function(){return _e},Dashboard:function(){return Ze},Fliper:function(){return ye},HalfBorder:function(){return Ae},IconAnimate:function(){return Ee},IconCarousel:function(){return Oe},Light:function(){return cr},List:function(){return Ue},Loading:function(){return ar},Location:function(){return tr},Piechart:function(){return Ye},Progress:function(){return Ne},RateScore:function(){return Cr},Ring:function(){return Fe},Search:function(){return rr},Spot:function(){return sr},Table:function(){return Ge},Taiji:function(){return lr},Text3d:function(){return vr},TextFilter:function(){return br},TextLoading:function(){return xr},TextMasked:function(){return Er},Time:function(){return nr},TitleBorder:function(){return je},TitleHeader:function(){return we},Wave:function(){return Qe}});var e=v(458),n=t=>(t==null?void 0:t.$$typeof)&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",_=(t,i="px")=>`${t}`.replace(i,"")-0,a=v(748),o=v.n(a),r=v(306),f=v.n(r),P=v(736),m=v.n(P),D=v(567),g=v.n(D),y=v(706),x=v.n(y),S=v(62),E=v.n(S),gn=v(615),L={};L.styleTagTransform=E(),L.setAttributes=g(),L.insert=m().bind(null,"head"),L.domAPI=f(),L.insertStyleElement=x();var Pr=o()(gn.Z,L),Dr=gn.Z&&gn.Z.locals?gn.Z.locals:void 0,_e=({list:t=[],size:i="360px",cardSize:c="42px",bottom:d="60px",style:p,...u})=>{const h=360/t.length;return(0,e.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":i,"--cardSize":c,"--bottom":d,...p},...u,children:(0,e.jsx)("div",{className:"model-container",children:t.map((b,C)=>(0,e.jsx)("div",{className:"model-item",style:{"--rotateY":`${h*C}deg`},children:(0,e.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:b.label,href:b.link,target:"_blank",children:[b.icon?(0,e.jsx)("img",{src:b.icon,alt:b.label}):null,n(b.icon)?b.icon:b.icon?(0,e.jsx)("img",{src:b.icon,alt:b.label}):null]})},b.label))})})},En=v(501),B={};B.styleTagTransform=E(),B.setAttributes=g(),B.insert=m().bind(null,"head"),B.domAPI=f(),B.insertStyleElement=x();var wr=o()(En.Z,B),Tr=En.Z&&En.Z.locals?En.Z.locals:void 0,Ee=({objs:t=[],models:i=[],height:c="480px",style:d,className:p,...u})=>(0,e.jsxs)("div",{className:`huxy-icon-animate-container${p?` ${p}`:""}`,style:{"--height":c,...d},...u,children:[(0,e.jsx)("div",{className:"huxy-icon-animate-materiels",children:t.map(({value:h,label:b,icon:C,link:M,type:w,style:T})=>(0,e.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${h}${w?"":" obj-img"}`,tooltip:w?void 0:b,href:M,target:"_blank",style:T,children:n(C)?C:(0,e.jsx)("img",{src:C,alt:b})},b))}),(0,e.jsx)(_e,{list:i,size:`${_(c)-120}px`})]}),yn=v(729),W={};W.styleTagTransform=E(),W.setAttributes=g(),W.insert=m().bind(null,"head"),W.domAPI=f(),W.insertStyleElement=x();var Rr=o()(yn.Z,W),Cn=yn.Z&&yn.Z.locals?yn.Z.locals:void 0,ye=({front:t,back:i,...c})=>(0,e.jsx)("div",{className:Cn["huxy-card-fliper"],...c,children:(0,e.jsxs)("div",{className:Cn.card,children:[(0,e.jsx)("div",{className:Cn.front,children:t}),(0,e.jsx)("div",{className:Cn.back,children:i})]})}),k=v(899),Ce=(t={})=>{const i=(0,k.useRef)(0),[c,d]=(0,k.useState)(t),p=(0,k.useCallback)(u=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>d(u))},[]);return(0,k.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[c,p]},Me=(t,i)=>{const c=(0,k.useRef)();(0,k.useEffect)(()=>{c.current=t},[t]),(0,k.useEffect)(()=>{if(i){const d=setInterval(()=>c.current(),i);return()=>clearInterval(d)}},[i])},Mn=v(17),z={};z.styleTagTransform=E(),z.setAttributes=g(),z.insert=m().bind(null,"head"),z.domAPI=f(),z.insertStyleElement=x();var Ir=o()(Mn.Z,z),Lr=Mn.Z&&Mn.Z.locals?Mn.Z.locals:void 0;const Pe=(t,i=60)=>(i=1.5*i,t.map((c,d)=>{const p=Math.random();let u=1;p<.3334?u=1.2:p<.6667&&(u=.8);const h=~~(d/3),b=d%3;let C=1.5*i*h;b===1&&(C+=i/2);const M=b*i+i/6*(b+1);return c.transform={x:C,y:M,s:u},c})),De=(t,i=60)=>(i=2.25*i,t.map(c=>(c.transform.x-=2,c.transform.x+i<0&&(c.transform.x=~~(t.length/3)*i),c)));var Oe=({width:t=60,wait:i=56,list:c=[],className:d,...p})=>{const u=(0,k.useMemo)(()=>Pe(c,t),[]),[h,b]=Ce(u),[C,M]=(0,k.useState)(i);Me(()=>{const O=De(h,t);b(O)},C);const w=O=>{M(null)},T=O=>{M(i)};return(0,e.jsx)("div",{className:`huxy-icon-carousel${d?` ${d}`:""}`,...p,children:(0,e.jsx)("div",{className:"icon-container",children:h.map((O,j)=>(0,e.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${j%3===0?"lt":"lb"}`,tooltip:O.label,style:{transform:`translate(${O.transform.x}px, ${O.transform.y}px) scale(${O.transform.s})`,width:t},onMouseEnter:w,onMouseLeave:T,href:O.link,target:"_blank",children:(0,e.jsx)("img",{src:O.icon,alt:O.label})},O.label))})})},Pn=v(511),Z={};Z.styleTagTransform=E(),Z.setAttributes=g(),Z.insert=m().bind(null,"head"),Z.domAPI=f(),Z.insertStyleElement=x();var Wr=o()(Pn.Z,Z),se=Pn.Z&&Pn.Z.locals?Pn.Z.locals:void 0,we=({title:t,borderColor:i,titleWidth:c,titleHeight:d,style:p,className:u,...h})=>(0,e.jsx)("div",{className:`${se["huxy-title-header-box"]}${u?` ${u}`:""}`,style:{"--borderColor":i,"--titleWidth":c,"--titleHeight":d,...p},...h,children:(0,e.jsx)("h2",{className:se.title,children:t})}),Dn=v(40),U={};U.styleTagTransform=E(),U.setAttributes=g(),U.insert=m().bind(null,"head"),U.domAPI=f(),U.insertStyleElement=x();var Zr=o()(Dn.Z,U),fn=Dn.Z&&Dn.Z.locals?Dn.Z.locals:void 0,Te=({size:t="8px",borderColor:i="var(--appColor)",half1:c=!0,half2:d=!0,style:p,className:u,children:h,...b})=>(0,e.jsx)("div",{className:`${fn["corner-wrap"]}${u?` ${u}`:""}`,style:{"--cornerSize":t,"--borderColor":i,...p},...b,children:(0,e.jsxs)("div",{className:`${fn.corner}${c?` ${fn.half}`:""}`,children:[d?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:fn["corner-tl"]}),(0,e.jsx)("span",{className:fn["corner-br"]})]}):null,h]})}),On=v(538),K={};K.styleTagTransform=E(),K.setAttributes=g(),K.insert=m().bind(null,"head"),K.domAPI=f(),K.insertStyleElement=x();var Kr=o()(On.Z,K),ie=On.Z&&On.Z.locals?On.Z.locals:void 0,Ae=({size:t="8px",borderColor:i="var(--appColor)",style:c,className:d,children:p,...u})=>(0,e.jsx)("div",{className:`${ie["corner-wrap"]}${d?` ${d}`:""}`,style:{"--cornerSize":t,"--borderColor":i,...c},...u,children:(0,e.jsx)("div",{className:ie["corner-half"],children:p})}),wn=v(579),$={};$.styleTagTransform=E(),$.setAttributes=g(),$.insert=m().bind(null,"head"),$.domAPI=f(),$.insertStyleElement=x();var Yr=o()(wn.Z,$),Re=wn.Z&&wn.Z.locals?wn.Z.locals:void 0,Se=({type:t="dot",bgColor:i,cubeColor:c,url:d,style:p,className:u,children:h,...b})=>{t=d?"img":t;const C=d?{backgroundImage:`url(${d})`}:void 0;return(0,e.jsx)("div",{className:`${Re[`bg-box-${t}`]}${u?` ${u}`:""}`,style:{"--bgColor":i,"--cubeColor":c,...C,...p},...b,children:h})},Tn=v(914),Y={};Y.styleTagTransform=E(),Y.setAttributes=g(),Y.insert=m().bind(null,"head"),Y.domAPI=f(),Y.insertStyleElement=x();var Nr=o()(Tn.Z,Y),re=Tn.Z&&Tn.Z.locals?Tn.Z.locals:void 0,je=({children:t,title:i,fontSize:c,borderSize:d,borderColor:p="var(--appColor)",space:u="10px",style:h,className:b,...C})=>(0,e.jsxs)("div",{className:`${re["huxy-title-border-wrap"]}${b?` ${b}`:""}`,style:{"--borderColor":p,"--space":u,"--fontSize":c,"--borderSize":d,...h},...C,children:[(0,e.jsx)("div",{className:re["huxy-title-border-top"],children:i}),(0,e.jsx)("div",{className:re["huxy-title-border-box"],children:t})]}),An=v(925),X={};X.styleTagTransform=E(),X.setAttributes=g(),X.insert=m().bind(null,"head"),X.domAPI=f(),X.insertStyleElement=x();var Hr=o()(An.Z,X),le=An.Z&&An.Z.locals?An.Z.locals:void 0,ke=({type:t="solid",space:i="2px",borderColor:c="var(--appColor)",style:d,className:p,children:u,...h})=>(0,e.jsx)("div",{className:`${le["huxy-border-wrap"]}${p?` ${p}`:""}`,style:{"--space":i,"--borderColor":c,...d},...h,children:(0,e.jsx)("div",{className:le[`huxy-border-animate-${t==="dash"?"dash":"solid"}`],children:u})}),Ie=(t="",i=0,c="0")=>{const d=t.length;return d>=i?t:`${Array(i-d+1).join(c)}${t}`},A=()=>"#"+Ie((~~(Math.random()*(1<<24))).toString(16),6),R=(t=0,i=0,c=!0)=>(t<i&&(t=[i,i=t][0]),c?~~(Math.random()*(t-i+1))+i:Math.random()*(t-i)+i),oe=(t=[])=>t[R(t.length-1)],Rn=v(771),N={};N.styleTagTransform=E(),N.setAttributes=g(),N.insert=m().bind(null,"head"),N.domAPI=f(),N.insertStyleElement=x();var no=o()(Rn.Z,N),de=Rn.Z&&Rn.Z.locals?Rn.Z.locals:void 0;const ce=t=>t!=null&&t.length?oe(t):A();var Le=({list:t=10,height:i="240px",space:c="25px",itemWidth:d="30px",colors:p=[],color:u,style:h,className:b,...C})=>(0,e.jsx)("div",{className:`${de["huxy-skeleton-barchart"]}${b?` ${b}`:""}`,style:{"--height":i,...h},...C,children:(Array.isArray(t)?t:[...new Array(t)]).map((M,w)=>{var T,O,j;return(0,e.jsx)("div",{className:de["sk-bar-item"],style:{"--space":c,"--itemWidth":d,"--bgColor":(O=(T=M==null?void 0:M.color)!=null?T:u)!=null?O:`linear-gradient(to top, ${ce(p)}, ${ce(p)})`,"--itemHeight":(j=M==null?void 0:M.height)!=null?j:`${R(15,100)}%`,left:`${w*(_(c)+_(d))}px`}},`huxy-skeleton-barchart-${w}`)})}),Sn=v(709),F={};F.styleTagTransform=E(),F.setAttributes=g(),F.insert=m().bind(null,"head"),F.domAPI=f(),F.insertStyleElement=x();var ro=o()(Sn.Z,F),H=Sn.Z&&Sn.Z.locals?Sn.Z.locals:void 0,Be=({height:t="120px",leftColor:i,rightColor:c,topWidth:d,bottomWidth:p,style:u,className:h,...b})=>(0,e.jsxs)("div",{className:`${H["huxy-skeleton-card"]}${h?` ${h}`:""}`,style:{"--height":t,"--leftColor":i!=null?i:A(),"--rightColor":c!=null?c:A(),"--topWidth":d!=null?d:`${R(30,60)}%`,"--bottomWidth":p!=null?p:`${R(55,95)}%`,...u},...b,children:[(0,e.jsx)("div",{className:H["sk-card-left"],children:(0,e.jsx)("div",{className:H["sk-card-img"]})}),(0,e.jsxs)("div",{className:H["sk-card-right"],children:[(0,e.jsx)("h4",{className:H.title}),(0,e.jsx)("p",{className:H.text})]})]}),jn=v(9),J={};J.styleTagTransform=E(),J.setAttributes=g(),J.insert=m().bind(null,"head"),J.domAPI=f(),J.insertStyleElement=x();var to=o()(jn.Z,J),pe=jn.Z&&jn.Z.locals?jn.Z.locals:void 0;const We=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}];var ze=({size:t="300px",space:i="8px",style:c,className:d,...p})=>{let u=_(i)*3;return(0,e.jsx)("div",{className:`${pe["huxy-animate-border-circle"]}${d?` ${d}`:""}`,style:{"--size":t,...c},...p,children:We.map((h,b)=>(u=u+_(h.borderWidth)*2+_(i)*2,(0,e.jsx)("div",{className:pe["border-circle-item"],style:{"--itemSize":`calc(${t} - ${u}px)`,"--borderWidth":h.borderWidth,"--borderLeftColor":h.borderLeftColor,"--borderRightColor":h.borderRightColor,"--borderTopColor":h.borderTopColor,"--borderBottomColor":h.borderBottomColor,"--time":h.time,"--rotateStart":h.rotateStart,"--rotateEnd":h.rotateEnd}},`huxy-animate-border-circle-${b}`)))})},kn=v(681),G={};G.styleTagTransform=E(),G.setAttributes=g(),G.insert=m().bind(null,"head"),G.domAPI=f(),G.insertStyleElement=x();var _o=o()(kn.Z,G),ue=kn.Z&&kn.Z.locals?kn.Z.locals:void 0,Ze=({size:t="400px",width:i="20px",space:c="20px",colors:d=[],style:p,className:u,...h})=>(0,e.jsx)("div",{className:`${ue["huxy-skeleton-dashboard"]}${u?` ${u}`:""}`,style:{"--size":t,"--width":i,"--space":c,"--color1":d[0],"--color2":d[1],"--color3":d[2],"--color4":d[3],"--color5":d[4],"--color6":d[5],"--color7":d[6],...p},...h,children:(0,e.jsx)("div",{className:ue.point})}),In=v(41),V={};V.styleTagTransform=E(),V.setAttributes=g(),V.insert=m().bind(null,"head"),V.domAPI=f(),V.insertStyleElement=x();var io=o()(In.Z,V),me=In.Z&&In.Z.locals?In.Z.locals:void 0,Ue=({row:t=8,leftColor:i="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:c="rgba(0, 0, 0, 0.2)",rightWidth:d="100px",itemHeight:p="20px",space:u="20px",className:h,...b})=>(0,e.jsx)("div",{className:`${me["huxy-skeleton-list"]}${h?` ${h}`:""}`,style:{"--rightWidth":d,"--itemHeight":p,"--space":u,"--leftColor":i,"--rightColor":c},...b,children:[...new Array(t)].map((C,M)=>(0,e.jsx)("div",{className:me["sk-list-item"]},`huxy-skeleton-list-${M}`))}),Ke=(t,i=100)=>{const c=[];return[...new Array(t)].map((d,p)=>{p===t-1?c[p]=i:(c[p]=R(1,i-1),i-=c[p])}),c},Ln=v(180),Q={};Q.styleTagTransform=E(),Q.setAttributes=g(),Q.insert=m().bind(null,"head"),Q.domAPI=f(),Q.insertStyleElement=x();var po=o()(Ln.Z,Q),$e=Ln.Z&&Ln.Z.locals?Ln.Z.locals:void 0;const Bn=t=>t!=null&&t.length?oe(t):A(),q=Ke(4);var Ye=({height:t,colors:i=[],style:c,className:d,...p})=>(0,e.jsx)("div",{className:`${$e["huxy-skeleton-piechart"]}${d?` ${d}`:""}`,style:{"--height":t,"--color1":Bn(i),"--color2":Bn(i),"--color3":Bn(i),"--color4":Bn(i),"--percent1":`${q[0]}%`,"--percent2":`${q[0]+q[1]}%`,"--percent3":`${q[0]+q[1]+q[2]}%`,"--percent4":"100%",...c},...p}),Wn=v(752),nn={};nn.styleTagTransform=E(),nn.setAttributes=g(),nn.insert=m().bind(null,"head"),nn.domAPI=f(),nn.insertStyleElement=x();var mo=o()(Wn.Z,nn),Xe=Wn.Z&&Wn.Z.locals?Wn.Z.locals:void 0,Ne=({percent:t,height:i="20px",bgColor:c="rgba(0, 0, 0, 0.15)",progressColor:d,borderRadius:p="4px",waveColor:u="rgba(255, 255, 255, 0.2)",waveTime:h="3s",style:b,className:C,...M})=>(0,e.jsx)("div",{className:`${Xe["huxy-progress-wave"]}${C?` ${C}`:""}`,style:{"--percent":t!=null?t:R(33,99),"--height":i,"--bgColor":c,"--progressColor":d!=null?d:A(),"--borderRadius":p,"--waveColor":u,"--waveTime":h,...b},...M}),zn=v(243),en={};en.styleTagTransform=E(),en.setAttributes=g(),en.insert=m().bind(null,"head"),en.domAPI=f(),en.insertStyleElement=x();var vo=o()(zn.Z,en),he=zn.Z&&zn.Z.locals?zn.Z.locals:void 0,Fe=({list:t=60,size:i="300px",itemWidth:c="30px",itemHeight:d="4px",bgColor:p="rgba(255, 255, 255 , 0.9)",shadowColor:u="rgba(255, 255, 255 , 0.6)",color:h,style:b,className:C,...M})=>(t=Array.isArray(t)?t:[...new Array(t)],(0,e.jsx)("div",{className:`${he["huxy-animate-border-ring"]}${C?` ${C}`:""}`,style:{"--size":i,"--itemWidth":c,"--itemHeight":d,"--bgColor":p,"--shadowColor":u,...b},...M,children:t.map((w,T)=>{var O,j;return(0,e.jsx)("div",{className:he["border-ring-item"],style:{"--color":(j=(O=w==null?void 0:w.color)!=null?O:h)!=null?j:A(),transform:`rotate(${360/t.length*T}deg)`}},`huxy-animate-border-ring-${T}`)})})),Zn=v(988),rn={};rn.styleTagTransform=E(),rn.setAttributes=g(),rn.insert=m().bind(null,"head"),rn.domAPI=f(),rn.insertStyleElement=x();var fo=o()(Zn.Z,rn),ve=Zn.Z&&Zn.Z.locals?Zn.Z.locals:void 0,He=({children:t,hasTitle:i,titleBgColor:c,style:d,className:p,...u})=>(0,e.jsx)("div",{className:`${ve["skeleton-container"]}${i?` ${ve.title}`:""}${p?` ${p}`:""}`,style:{"--titleBgColor":c!=null?c:A(),...d},...u,children:t}),Un=v(77),on={};on.styleTagTransform=E(),on.setAttributes=g(),on.insert=m().bind(null,"head"),on.domAPI=f(),on.insertStyleElement=x();var go=o()(Un.Z,on),Je=Un.Z&&Un.Z.locals?Un.Z.locals:void 0,Ge=({row:t=6,col:i=8,...c})=>(0,e.jsx)("div",{className:Je["huxy-skeleton-table"],...c,children:(0,e.jsxs)("table",{children:[(0,e.jsx)("thead",{children:(0,e.jsx)("tr",{children:[...new Array(i)].map((d,p)=>(0,e.jsx)("th",{children:(0,e.jsx)("span",{})},`skeleton-table-th-${p}`))})}),(0,e.jsx)("tbody",{children:[...new Array(t)].map((d,p)=>(0,e.jsx)("tr",{children:[...new Array(i)].map((u,h)=>(0,e.jsx)("td",{children:(0,e.jsx)("span",{})},`skeleton-table-tr-${p}-${h}`))},`tr-${p}`))})]})}),Kn=v(832),tn={};tn.styleTagTransform=E(),tn.setAttributes=g(),tn.insert=m().bind(null,"head"),tn.domAPI=f(),tn.insertStyleElement=x();var yo=o()(Kn.Z,tn),Ve=Kn.Z&&Kn.Z.locals?Kn.Z.locals:void 0,Qe=({color:t="rgba(0, 0, 0, 0.06)",delay:i="2s",style:c,className:d,children:p,...u})=>(0,e.jsx)("div",{className:`${Ve["huxy-loading-wave"]}${d?` ${d}`:""}`,style:{"--waveColor":t,"--waveTime":i,...c},...u,children:p}),$n=v(289),an={};an.styleTagTransform=E(),an.setAttributes=g(),an.insert=m().bind(null,"head"),an.domAPI=f(),an.insertStyleElement=x();var Mo=o()($n.Z,an),qe=$n.Z&&$n.Z.locals?$n.Z.locals:void 0,nr=t=>(0,e.jsx)("span",{className:qe["huxy-timer"],...t}),Yn=v(950),_n={};_n.styleTagTransform=E(),_n.setAttributes=g(),_n.insert=m().bind(null,"head"),_n.domAPI=f(),_n.insertStyleElement=x();var Do=o()(Yn.Z,_n),er=Yn.Z&&Yn.Z.locals?Yn.Z.locals:void 0,rr=t=>(0,e.jsx)("span",{className:er["huxy-search"],...t}),Xn=v(875),sn={};sn.styleTagTransform=E(),sn.setAttributes=g(),sn.insert=m().bind(null,"head"),sn.domAPI=f(),sn.insertStyleElement=x();var wo=o()(Xn.Z,sn),or=Xn.Z&&Xn.Z.locals?Xn.Z.locals:void 0,tr=t=>(0,e.jsx)("span",{className:or["huxy-location"],...t}),Nn=v(44),ln={};ln.styleTagTransform=E(),ln.setAttributes=g(),ln.insert=m().bind(null,"head"),ln.domAPI=f(),ln.insertStyleElement=x();var Ao=o()(Nn.Z,ln),be=Nn.Z&&Nn.Z.locals?Nn.Z.locals:void 0,ar=({list:t=7,size:i="40px",shadowSize:c="50px",time:d="1.6s",style:p,className:u,...h})=>(d=_(d,"s"),(0,e.jsx)("div",{className:`${be["huxy-loading-ball"]}${u?` ${u}`:""}`,style:{"--size":i,"--shadowSize":c,"--time":`${d}s`,...p},...h,children:(Array.isArray(t)?t:[...new Array(t)]).map((b,C)=>{var M,w,T;return(0,e.jsx)("div",{className:be.ball,style:{"--delay":(w=b==null?void 0:b.delay)!=null?w:`${d/(((M=t==null?void 0:t.length)!=null?M:t)+1)*(C+1)-d}s`,"--bgColor":(T=b==null?void 0:b.color)!=null?T:A()}},`huxy-loading-ball-${C}`)})})),Fn=v(658),dn={};dn.styleTagTransform=E(),dn.setAttributes=g(),dn.insert=m().bind(null,"head"),dn.domAPI=f(),dn.insertStyleElement=x();var So=o()(Fn.Z,dn),_r=Fn.Z&&Fn.Z.locals?Fn.Z.locals:void 0,sr=({type:t="spot",size:i,color:c,shadowColor:d,style:p,className:u,...h})=>(0,e.jsx)("span",{className:`${_r[`huxy-${t}`]}${u?` ${u}`:""}`,style:{"--size":i!=null?i:`${R(6,30)}px`,"--color":c!=null?c:A(),"--shadowColor":d!=null?d:A(),...p},...h}),Hn=v(206),cn={};cn.styleTagTransform=E(),cn.setAttributes=g(),cn.insert=m().bind(null,"head"),cn.domAPI=f(),cn.insertStyleElement=x();var ko=o()(Hn.Z,cn),ir=Hn.Z&&Hn.Z.locals?Hn.Z.locals:void 0,lr=({width:t,border:i,black:c,white:d,style:p,className:u,...h})=>(0,e.jsx)("div",{className:`${ir["huxy-taiji"]} ${u}`,style:{"--width":t,"--border":i,"--black":c,"--white":d,...p},...h}),Jn=v(784),pn={};pn.styleTagTransform=E(),pn.setAttributes=g(),pn.insert=m().bind(null,"head"),pn.domAPI=f(),pn.insertStyleElement=x();var Lo=o()(Jn.Z,pn),dr=Jn.Z&&Jn.Z.locals?Jn.Z.locals:void 0,cr=({width:t="200px",height:i="180px",space:c="12%",bgColor:d,style:p,className:u,...h})=>(0,e.jsx)("div",{className:`${dr.conic}${u?` ${u}`:""}`,style:{"--width":t,"--height":i,"--space":c,"--bgColor":d,...p},...h}),Gn=v(859),un={};un.styleTagTransform=E(),un.setAttributes=g(),un.insert=m().bind(null,"head"),un.domAPI=f(),un.insertStyleElement=x();var Wo=o()(Gn.Z,un),zo=Gn.Z&&Gn.Z.locals?Gn.Z.locals:void 0;const te=()=>Math.random()-.5,pr=()=>~~(te()*R(5,10)*10),ur=()=>~~(te()*R(2,8)*10),mr=()=>(1-te())*R(1.1,1.4,!1),hr=t=>t!=null&&t.length?oe(t):A();var vr=({list:t=[],colors:i=[],width:c,padding:d,bgColor:p,style:u,...h})=>(0,e.jsx)("div",{className:"huxy-text-3d",style:{"--width":c,"--padding":d,"--bgColor":p,...u},...h,children:(0,e.jsx)("div",{className:"text-3d-container",children:t.map((b,C)=>{var M,w,T,O,j,xe;const ge=(M=b.time)!=null?M:R(6,24,!1).toFixed(2),Mr=(w=b.delay)!=null?w:-R(0,ge,!1).toFixed(2);return(0,e.jsx)("div",{className:"text-3d-item",style:{"--time":`${ge}s`,"--center":(T=b.center)!=null?T:`${pr()}%`,"--rotate":(O=b.rotate)!=null?O:`${ur()}deg`,"--size":(j=b.size)!=null?j:mr(),"--color":(xe=b.color)!=null?xe:hr(i),"--delay":`${Mr}s`},children:(0,e.jsx)("div",{className:"text-3d-item-card",children:(0,e.jsx)("span",{className:"link animate-text",children:b.label})})},b.label)})})}),Vn=v(589),mn={};mn.styleTagTransform=E(),mn.setAttributes=g(),mn.insert=m().bind(null,"head"),mn.domAPI=f(),mn.insertStyleElement=x();var Uo=o()(Vn.Z,mn),fe=Vn.Z&&Vn.Z.locals?Vn.Z.locals:void 0,br=({time:t="3s",style:i,className:c,children:d,...p})=>(0,e.jsx)("div",{className:`${fe["huxy-text-filter"]}${c?` ${c}`:""}`,style:{"--time":t,...i},...p,children:(0,e.jsx)("div",{className:fe["text-filter"],children:d})}),Qn=v(850),hn={};hn.styleTagTransform=E(),hn.setAttributes=g(),hn.insert=m().bind(null,"head"),hn.domAPI=f(),hn.insertStyleElement=x();var $o=o()(Qn.Z,hn),fr=Qn.Z&&Qn.Z.locals?Qn.Z.locals:void 0,xr=({backColor:t="rgba(0, 0, 0, 0.3)",frontColor:i="rgba(255, 255, 255, 1)",time:c="4s",style:d,className:p,children:u,...h})=>(0,e.jsx)("div",{className:`${fr["huxy-text-loading"]}${p?` ${p}`:""}`,style:{"--backColor":t,"--frontColor":i,"--time":c,...d},...h,"data-text":u,children:u}),qn=v(814),vn={};vn.styleTagTransform=E(),vn.setAttributes=g(),vn.insert=m().bind(null,"head"),vn.domAPI=f(),vn.insertStyleElement=x();var Xo=o()(qn.Z,vn),gr=qn.Z&&qn.Z.locals?qn.Z.locals:void 0,Er=({startColor:t,endColor:i,style:c,className:d,children:p,...u})=>(0,e.jsx)("div",{className:`${gr["huxy-text-masked"]}${d?` ${d}`:""}`,style:{"--startColor":t!=null?t:A(),"--endColor":i!=null?i:A(),...c},...u,children:p}),ne=v(783),bn={};bn.styleTagTransform=E(),bn.setAttributes=g(),bn.insert=m().bind(null,"head"),bn.domAPI=f(),bn.insertStyleElement=x();var Fo=o()(ne.Z,bn),yr=ne.Z&&ne.Z.locals?ne.Z.locals:void 0,Cr=({score:t=0,backColor:i="rgba(0, 0, 0, 0.3)",frontColor:c="var(--yellow2)",style:d,className:p,children:u,backend:h,...b})=>(0,e.jsx)("div",{className:`${yr["huxy-rate-score"]}${p?` ${p}`:""}`,style:{"--backColor":i,"--frontColor":c,"--score":`${t}`.includes("%")?t:`${t*100}%`,...d},...b,"data-text":u,children:h!=null?h:u})}(),ee}()});
