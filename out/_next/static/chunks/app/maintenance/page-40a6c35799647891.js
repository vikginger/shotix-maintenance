(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[494],{1469:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return a}});let o=n(8229),i=n(8883),r=n(3063),l=o._(n(1193));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=r.Image},9423:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(5155),i=n(9780),r=n(1469),l=n.n(r);function a(){let e=(0,i.ed)(),t=async()=>{null==e||e.close()};return(0,o.jsxs)("div",{className:"relative h-dvh bg-fill-menu flex items-center justify-center p-5 ",children:[(0,o.jsx)(l(),{fill:!0,src:"/images/plug-bg.webp",alt:"camera",className:"absolute z-1 top-0 left-0 right-0 bottom-0 object-cover object-top"}),(0,o.jsxs)("div",{className:"relative z-10 flex flex-col items-center justify-center text-center mt-[-50px]",children:[(0,o.jsx)(l(),{width:110,height:129,src:"/images/plug-icon.webp",alt:"camera",className:"mb-8"}),(0,o.jsx)("div",{className:"text-2xl font-bold mb-5 text-label-white",children:"Прокачиваем магию!"}),(0,o.jsxs)("div",{className:"whitespace-pre-line text-sm text-label-gray font-medium mb-9",children:["Мы обновляем систему, чтобы сделать твой опыт ещё круче.","\n\n","Скоро вернёмся!"]}),(0,o.jsx)("button",{className:"w-full bg-fill-button rounded-xl py-5",onClick:t,children:(0,o.jsx)("div",{className:"text-label-black font-extrabold text-base",children:"Вернуться в Бота"})})]})]})}},9780:(e,t,n)=>{"use strict";n.d(t,{L6:()=>l,ed:()=>r});var o=n(2115),i=(0,o.createContext)({});function r(){return(0,o.useContext)(i).app}function l(e){var t=e.children,n=(0,o.useState)(!1),r=n[0],l=n[1],s=(0,o.useState)([]),c=s[0],u=s[1],f=(0,o.useState)([]),d=f[0],h=f[1],m=(0,o.useState)([]),b=m[0],g=m[1];return(0,o.useEffect)(function(){var e,t;if(r){var n=null==(e=window)||null==(t=e.Telegram)?void 0:t.WebApp;if(n){if(c.forEach(function(e){n.BackButton.offClick(e)}),d.forEach(function(e){e.onClick&&n.MainButton.offClick(e.onClick)}),c.length>0?(n.BackButton.onClick(c[0]),n.BackButton.isVisible||n.BackButton.show()):n.BackButton.hide(),d.length>0){var o,i=d[0],l=n.MainButton;i.onClick&&l.onClick(i.onClick),n.MainButton.setText(i.text||"CONTINUE"),l.isActive&&i.disable?l.disable():l.isActive||i.disable||l.enable(),!l.isProgressVisible&&i.progress?l.showProgress(!1):l.isProgressVisible&&!i.progress&&l.hideProgress(),l.setParams({text_color:i.textColor||n.themeParams.button_text_color,color:i.color||n.themeParams.button_color,has_shine_effect:null!=(o=i.hasShineEffect)&&o}),l.isVisible||l.show()}else n.MainButton.hide();if(b.length>0){var a,s=b[0],u=n.SecondaryButton;s.onClick&&u.onClick(s.onClick),u.setText(s.text||"CONTINUE"),u.isActive&&s.disable?u.disable():u.isActive||s.disable||u.enable(),!u.isProgressVisible&&s.progress?u.showProgress(!1):u.isProgressVisible&&!s.progress&&u.hideProgress(),u.setParams({text_color:s.textColor||n.themeParams.button_color,color:s.color||n.themeParams.bottom_bar_bg_color,position:s.position||"left",has_shine_effect:null!=(a=s.hasShineEffect)&&a}),u.isVisible||u.show()}else n.SecondaryButton.hide();return function(){0==c.length&&null!=n&&n.BackButton.isVisible&&(null==n||n.BackButton.hide()),c.forEach(function(e){n.BackButton.offClick(e)}),0==d.length&&null!=n&&n.MainButton.isVisible&&(null==n||n.MainButton.hide()),d.forEach(function(e){e.onClick&&n.MainButton.offClick(e.onClick)}),0==b.length&&null!=n&&n.SecondaryButton.isVisible&&(null==n||n.SecondaryButton.hide()),b.forEach(function(e){e.onClick&&n.SecondaryButton.offClick(e.onClick)})}}}},[r,c,d,b]),o.createElement(a,{onLoad:function(){l(!0)}},o.createElement(i.Provider,{value:{get app(){var p,v;if("undefined"!=typeof window)return null==(p=window)||null==(v=p.Telegram)?void 0:v.WebApp},isReady:r,addBackButtonListener:function(e){u(function(t){return[e].concat(t)})},removeBackButtonListener:function(e){u(function(t){var n=t.indexOf(e);return t.filter(function(e,t){return t!==n})})},addMainButton:function(e){h(function(t){return[e].concat(t)})},removeMainButton:function(e){h(function(t){var n=t.indexOf(e);return t.filter(function(e,t){return t!==n})})},addSecondaryMainButton:function(e){g(function(t){return[e].concat(t)})},removeSecondaryMainButton:function(e){g(function(t){var n=t.indexOf(e);return t.filter(function(e,t){return t!==n})})}}},t))}function a(e){var t=e.children,n=e.onLoad;return(0,o.useEffect)(function(){var e=document.createElement("script");return e.src="https://telegram.org/js/telegram-web-app.js",e.onload=n,document.head.appendChild(e),function(){document.head.removeChild(e)}},[]),t}},9846:(e,t,n)=>{Promise.resolve().then(n.bind(n,9423))}},e=>{var t=t=>e(e.s=t);e.O(0,[63,441,684,358],()=>t(9846)),_N_E=e.O()}]);