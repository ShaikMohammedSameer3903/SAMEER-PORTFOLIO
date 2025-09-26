(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}})();var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function be(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var me={exports:{}};(function(g,b){(function(c,i){g.exports=i()})(ge,function(){return function(c){function i(a){if(t[a])return t[a].exports;var s=t[a]={exports:{},id:a,loaded:!1};return c[a].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}var t={};return i.m=c,i.c=t,i.p="dist/",i(0)}([function(c,i,t){function a(r){return r&&r.__esModule?r:{default:r}}var s=Object.assign||function(r){for(var S=1;S<arguments.length;S++){var P=arguments[S];for(var F in P)Object.prototype.hasOwnProperty.call(P,F)&&(r[F]=P[F])}return r},h=t(1),k=(a(h),t(6)),o=a(k),p=t(7),l=a(p),f=t(8),d=a(f),v=t(9),E=a(v),M=t(10),$=a(M),K=t(11),U=a(K),G=t(14),J=a(G),L=[],Q=!1,y={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(Q=!0),Q)return L=(0,U.default)(L,y),(0,$.default)(L,y.once),L},D=function(){L=(0,J.default)(),A()},n=function(){L.forEach(function(r,S){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&E.default.mobile()||r==="phone"&&E.default.phone()||r==="tablet"&&E.default.tablet()||typeof r=="function"&&r()===!0},u=function(r){y=s(y,r),L=(0,J.default)();var S=document.all&&!window.atob;return e(y.disable)||S?n():(y.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),y.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",y.easing),document.querySelector("body").setAttribute("data-aos-duration",y.duration),document.querySelector("body").setAttribute("data-aos-delay",y.delay),y.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):y.startEvent==="load"?window.addEventListener(y.startEvent,function(){A(!0)}):document.addEventListener(y.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,l.default)(A,y.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(A,y.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,$.default)(L,y.once)},y.throttleDelay)),y.disableMutationObserver||d.default.ready("[data-aos]",D),L)};c.exports={init:u,refresh:A,refreshHard:D}},function(c,i){},,,,,function(c,i){(function(t){function a(e,u,r){function S(m){var z=T,R=N;return T=N=void 0,I=m,j=e.apply(R,z)}function P(m){return I=m,x=setTimeout(Y,u),H?S(m):j}function F(m){var z=m-O,R=m-I,se=u-z;return q?D(se,B-R):se}function W(m){var z=m-O,R=m-I;return O===void 0||z>=u||z<0||q&&R>=B}function Y(){var m=n();return W(m)?X(m):void(x=setTimeout(Y,F(m)))}function X(m){return x=void 0,w&&T?S(m):(T=N=void 0,j)}function te(){x!==void 0&&clearTimeout(x),I=0,T=O=N=x=void 0}function V(){return x===void 0?j:X(n())}function C(){var m=n(),z=W(m);if(T=arguments,N=this,O=m,z){if(x===void 0)return P(O);if(q)return x=setTimeout(Y,u),S(O)}return x===void 0&&(x=setTimeout(Y,u)),j}var T,N,B,j,x,O,I=0,H=!1,q=!1,w=!0;if(typeof e!="function")throw new TypeError(f);return u=p(u)||0,h(r)&&(H=!!r.leading,q="maxWait"in r,B=q?A(p(r.maxWait)||0,u):B,w="trailing"in r?!!r.trailing:w),C.cancel=te,C.flush=V,C}function s(e,u,r){var S=!0,P=!0;if(typeof e!="function")throw new TypeError(f);return h(r)&&(S="leading"in r?!!r.leading:S,P="trailing"in r?!!r.trailing:P),a(e,u,{leading:S,maxWait:u,trailing:P})}function h(e){var u=typeof e>"u"?"undefined":l(e);return!!e&&(u=="object"||u=="function")}function k(e){return!!e&&(typeof e>"u"?"undefined":l(e))=="object"}function o(e){return(typeof e>"u"?"undefined":l(e))=="symbol"||k(e)&&y.call(e)==v}function p(e){if(typeof e=="number")return e;if(o(e))return d;if(h(e)){var u=typeof e.valueOf=="function"?e.valueOf():e;e=h(u)?u+"":u}if(typeof e!="string")return e===0?e:+e;e=e.replace(E,"");var r=$.test(e);return r||K.test(e)?U(e.slice(2),r?2:8):M.test(e)?d:+e}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",d=NaN,v="[object Symbol]",E=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,K=/^0o[0-7]+$/i,U=parseInt,G=(typeof t>"u"?"undefined":l(t))=="object"&&t&&t.Object===Object&&t,J=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,L=G||J||Function("return this")(),Q=Object.prototype,y=Q.toString,A=Math.max,D=Math.min,n=function(){return L.Date.now()};c.exports=s}).call(i,function(){return this}())},function(c,i){(function(t){function a(n,e,u){function r(w){var m=C,z=T;return C=T=void 0,O=w,B=n.apply(z,m)}function S(w){return O=w,j=setTimeout(W,e),I?r(w):B}function P(w){var m=w-x,z=w-O,R=e-m;return H?A(R,N-z):R}function F(w){var m=w-x,z=w-O;return x===void 0||m>=e||m<0||H&&z>=N}function W(){var w=D();return F(w)?Y(w):void(j=setTimeout(W,P(w)))}function Y(w){return j=void 0,q&&C?r(w):(C=T=void 0,B)}function X(){j!==void 0&&clearTimeout(j),O=0,C=x=T=j=void 0}function te(){return j===void 0?B:Y(D())}function V(){var w=D(),m=F(w);if(C=arguments,T=this,x=w,m){if(j===void 0)return S(x);if(H)return j=setTimeout(W,e),r(x)}return j===void 0&&(j=setTimeout(W,e)),B}var C,T,N,B,j,x,O=0,I=!1,H=!1,q=!0;if(typeof n!="function")throw new TypeError(l);return e=o(e)||0,s(u)&&(I=!!u.leading,H="maxWait"in u,N=H?y(o(u.maxWait)||0,e):N,q="trailing"in u?!!u.trailing:q),V.cancel=X,V.flush=te,V}function s(n){var e=typeof n>"u"?"undefined":p(n);return!!n&&(e=="object"||e=="function")}function h(n){return!!n&&(typeof n>"u"?"undefined":p(n))=="object"}function k(n){return(typeof n>"u"?"undefined":p(n))=="symbol"||h(n)&&Q.call(n)==d}function o(n){if(typeof n=="number")return n;if(k(n))return f;if(s(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=s(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(v,"");var u=M.test(n);return u||$.test(n)?K(n.slice(2),u?2:8):E.test(n)?f:+n}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l="Expected a function",f=NaN,d="[object Symbol]",v=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,$=/^0o[0-7]+$/i,K=parseInt,U=(typeof t>"u"?"undefined":p(t))=="object"&&t&&t.Object===Object&&t,G=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,J=U||G||Function("return this")(),L=Object.prototype,Q=L.toString,y=Math.max,A=Math.min,D=function(){return J.Date.now()};c.exports=a}).call(i,function(){return this}())},function(c,i){function t(p){var l=void 0,f=void 0;for(l=0;l<p.length;l+=1)if(f=p[l],f.dataset&&f.dataset.aos||f.children&&t(f.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!a()}function h(p,l){var f=window.document,d=a(),v=new d(k);o=l,v.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function k(p){p&&p.forEach(function(l){var f=Array.prototype.slice.call(l.addedNodes),d=Array.prototype.slice.call(l.removedNodes),v=f.concat(d);if(t(v))return o()})}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){};i.default={isSupported:s,ready:h}},function(c,i){function t(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function f(d,v){for(var E=0;E<v.length;E++){var M=v[E];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(d,M.key,M)}}return function(d,v,E){return v&&f(d.prototype,v),E&&f(d,E),d}}(),h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,k=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function f(){t(this,f)}return s(f,[{key:"phone",value:function(){var d=a();return!(!h.test(d)&&!k.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=a();return!(!o.test(d)&&!p.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();i.default=new l},function(c,i){Object.defineProperty(i,"__esModule",{value:!0});var t=function(s,h,k){var o=s.node.getAttribute("data-aos-once");h>s.position?s.node.classList.add("aos-animate"):typeof o<"u"&&(o==="false"||!k&&o!=="true")&&s.node.classList.remove("aos-animate")},a=function(s,h){var k=window.pageYOffset,o=window.innerHeight;s.forEach(function(p,l){t(p,o+k,h)})};i.default=a},function(c,i,t){function a(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(i,"__esModule",{value:!0});var s=t(12),h=a(s),k=function(o,p){return o.forEach(function(l,f){l.node.classList.add("aos-init"),l.position=(0,h.default)(l.node,p.offset)}),o};i.default=k},function(c,i,t){function a(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(i,"__esModule",{value:!0});var s=t(13),h=a(s),k=function(o,p){var l=0,f=0,d=window.innerHeight,v={offset:o.getAttribute("data-aos-offset"),anchor:o.getAttribute("data-aos-anchor"),anchorPlacement:o.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(f=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(o=document.querySelectorAll(v.anchor)[0]),l=(0,h.default)(o).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":l+=o.offsetHeight/2;break;case"bottom-bottom":l+=o.offsetHeight;break;case"top-center":l+=d/2;break;case"bottom-center":l+=d/2+o.offsetHeight;break;case"center-center":l+=d/2+o.offsetHeight/2;break;case"top-top":l+=d;break;case"bottom-top":l+=o.offsetHeight+d;break;case"center-top":l+=o.offsetHeight/2+d}return v.anchorPlacement||v.offset||isNaN(p)||(f=p),l+f};i.default=k},function(c,i){Object.defineProperty(i,"__esModule",{value:!0});var t=function(a){for(var s=0,h=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)s+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),h+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:h,left:s}};i.default=t},function(c,i){Object.defineProperty(i,"__esModule",{value:!0});var t=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(s){return{node:s}})};i.default=t}])})})(me);var ve=me.exports;const he=be(ve),ye=`<style>
  :root {
    --primary-color: #2ecc71;
    --secondary-color: #3498db;
    --accent-color: #f1c40f;
    --dark-color: #0f1a26;
    --light-color: #ecf0f1;
    --glass-bg: rgba(255, 255, 255, 0.12);
    --glass-border: rgba(255, 255, 255, 0.25);
    --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  body { background: radial-gradient(circle at top left, rgba(46, 204, 113, 0.1), rgba(52, 152, 219, 0.05)), linear-gradient(135deg, var(--dark-color) 0%, #1a2a3a 100%); font-family: 'Poppins', sans-serif; color: var(--light-color); overflow-x: hidden; scroll-behavior: smooth; padding-top: 80px; line-height: 1.6; }
  a { text-decoration: none !important; }
  .navbar { background: rgba(15, 26, 38, 0.95); backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0,0,0,.3); padding: 1rem 2rem; transition: var(--transition); }
  .navbar.scrolled { padding: .7rem 2rem; }
  .navbar-brand { font-size: 2rem; font-weight: 800; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: 1px; }
  .nav-hover { color: var(--light-color); font-weight: 600; padding: .7rem 1.5rem; position: relative; transition: var(--transition); font-size: 1.1rem; }
  .nav-hover::after { content:''; position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:0; height:3px; background:var(--accent-color); transition:var(--transition); }
  .nav-hover:hover::after,.nav-hover.active::after{ width:70%; }
  .nav-hover:hover{ color:var(--accent-color); }
  .hero-section { min-height: calc(100vh - 80px); display:flex; align-items:center; position:relative; overflow:hidden; padding:2rem 0; }
  #particles-js { position:absolute; top:0; left:0; width:100%; height:100%; z-index:-1; }
  .hero-content { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:2rem; }
  .hero-text{ flex:1; padding-right:3rem; }
  .hero-text h1{ font-size:4.5rem; font-weight:800; background:linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip:text; background-clip:text; color:transparent; text-transform:uppercase; letter-spacing:2px; margin-bottom:1rem; }
  .hero-text p{ font-size:1.6rem; color:rgba(236,240,241,.9); margin:1.5rem 0; font-weight:500; }
  .hero-text #dynamic-text{ font-size:2.2rem; font-weight:700; color:var(--accent-color); min-height:70px; display:inline-block; margin-bottom:2rem; }
  .profile-img{ width:320px; height:320px; border-radius:50%; border:8px solid var(--primary-color); box-shadow:0 15px 40px rgba(0,0,0,.4); transition:var(--transition); object-fit:cover; }
  .profile-img:hover{ transform:scale(1.05) rotate(2deg); box-shadow:0 20px 50px rgba(0,0,0,.5); }
  .social-icon{ color:var(--light-color); font-size:2.2rem; margin:0 1.5rem; transition:var(--transition); }
  .social-icon:hover{ color:var(--secondary-color); transform:scale(1.2) translateY(-5px); }
  .modern-btn{ background:linear-gradient(45deg, var(--primary-color), var(--secondary-color)); border:none; padding:.8rem 2.2rem; border-radius:30px; color:#fff; font-weight:600; transition:var(--transition); box-shadow:0 8px 20px rgba(0,0,0,.3); font-size:1.1rem; }
  .modern-btn:hover{ transform:translateY(-6px) scale(1.05); box-shadow:0 12px 30px rgba(0,0,0,.4); }
  .modern-btn-outline{ background:transparent; border:2px solid var(--accent-color); color:var(--accent-color); }
  .modern-btn-outline:hover{ background:var(--accent-color); color:var(--dark-color); }
  section{ padding:7rem 0; scroll-margin-top:80px; }
  .section-title{ font-size:3rem; font-weight:800; margin-bottom:3.5rem; text-align:center; background:linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip:text; background-clip:text; color:transparent; text-transform:uppercase; letter-spacing:1.5px; }
  .section-title::after{ content:''; width:80px; height:5px; background:var(--accent-color); display:block; margin:.7rem auto; border-radius:2px; }
  .glass-card{ background:var(--glass-bg); backdrop-filter:blur(15px); border:1px solid var(--glass-border); border-radius:20px; padding:2rem; box-shadow:0 10px 30px rgba(0,0,0,.3), 0 0 15px rgba(46,204,113,.1); transition:var(--transition); text-align:left; }
  .glass-card:hover{ transform:translateY(-12px); box-shadow:0 15px 40px rgba(0,0,0,.4), 0 0 20px rgba(46,204,113,.2); }
  .skill-badge{ background:linear-gradient(45deg, var(--primary-color), var(--secondary-color)); padding:.7rem 1.3rem; border-radius:25px; margin:.6rem; font-weight:600; transition:var(--transition); cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,.2); }
  .skill-badge:hover{ transform:scale(1.12); box-shadow:0 6px 18px rgba(0,0,0,.3); }
  .skill-badge.highlighted{ background:var(--accent-color); color:var(--dark-color); }
  .tech-container{ display:flex; flex-wrap:wrap; gap:.7rem; margin-top:.7rem; }
  .tech-badge{ background:rgba(255,255,255,.18); padding:.4rem 1rem; border-radius:18px; font-size:1rem; font-weight:500; transition:var(--transition); cursor:pointer; box-shadow:0 3px 10px rgba(0,0,0,.15); }
  .tech-badge:hover{ background:var(--accent-color); color:var(--dark-color); transform:scale(1.12); box-shadow:0 5px 15px rgba(241,196,15,.3); }
  .tech-badge.highlighted{ background:var(--accent-color); color:var(--dark-color); }
  .project-card h5{ font-size:1.4rem; font-weight:700; margin-bottom:.7rem; color:var(--light-color); }
  .project-card p{ font-size:1rem; color:rgba(236,240,241,.8); margin-bottom:.7rem; line-height:1.5; }
  .project-card .view-code-btn{ background:linear-gradient(45deg, var(--accent-color), #f39c12); color:var(--dark-color); padding:.5rem 1.2rem; border-radius:22px; font-size:1rem; font-weight:600; display:inline-flex; align-items:center; gap:.4rem; transition:var(--transition); box-shadow:0 6px 18px rgba(241,196,15,.4); }
  .project-card .view-code-btn:hover{ transform:translateY(-4px) scale(1.05); box-shadow:0 10px 25px rgba(241,196,15,.5); }
  .contact-item{ transition:var(--transition); border-radius:15px; padding:1.2rem; margin-bottom:1.2rem; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15); }
  .contact-item:hover{ transform:translateX(12px); background:rgba(255,255,255,.12); border-color:var(--primary-color); }
  .form-control{ background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15); color:var(--light-color); transition:var(--transition); border-radius:10px; padding:.8rem; }
  .form-control:focus{ background:rgba(255,255,255,.12); border-color:var(--primary-color); box-shadow:0 0 15px rgba(46,204,113,.4); color:var(--light-color); }
  .form-control::placeholder{ color:rgba(236,240,241,.6); }
  footer{ background:rgba(15,26,38,.95); backdrop-filter:blur(10px); padding:4rem 0; border-top:1px solid var(--glass-border); }
  .footer-link{ color:var(--light-color); transition:var(--transition); display:block; padding:.6rem 0; font-weight:500; }
  .footer-link:hover{ color:var(--accent-color); transform:translateX(8px); }
  a:focus, button:focus, .social-icon:focus, .modern-btn:focus{ outline:2px solid var(--accent-color); outline-offset:2px; }
  @media (max-width: 992px){ .hero-text h1{ font-size:3.5rem;} .hero-text #dynamic-text{ font-size:1.8rem;} .profile-img{ width:280px; height:280px;} .hero-content{ flex-direction:column; text-align:center;} .hero-text{ padding-right:0; margin-bottom:2.5rem;} section{ padding:5rem 0;} .project-card .tech-container{ justify-content:center; } }
  @media (max-width: 768px){ .navbar{ padding:1rem;} .hero-section{ padding:3rem 1rem;} .hero-text h1{ font-size:2.8rem;} .hero-text p, .hero-text #dynamic-text{ font-size:1.3rem;} .profile-img{ width:220px; height:220px;} .modern-btn, .modern-btn-outline{ width:100%; margin-bottom:1.2rem;} .project-card h5{ font-size:1.2rem;} .project-card p{ font-size:.95rem;} }
  @media (max-width: 576px){ .hero-text h1{ font-size:2.2rem;} .hero-text p, .hero-text #dynamic-text{ font-size:1.1rem;} .profile-img{ width:180px; height:180px;} .project-card .tech-container{ flex-direction:column; align-items:center; gap:.4rem;} .section-title{ font-size:2.5rem;} }
  ::-webkit-scrollbar{ width:12px; }
  ::-webkit-scrollbar-track{ background:var(--dark-color); border-radius:6px; }
  ::-webkit-scrollbar-thumb{ background:linear-gradient(var(--primary-color), var(--secondary-color)); border-radius:6px; border:2px solid var(--dark-color); }
</style>

<!-- Navbar -->
<nav id="mainNavbar" class="navbar navbar-expand-lg fixed-top" role="navigation">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img loading="lazy" src="/image/sameer.jpg" alt="Logo" width="45" class="me-3 rounded-circle">Shaik Mohammed Sameer
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link nav-hover" href="#home"><i class="fas fa-home me-2"></i> Home</a></li>
        <li class="nav-item"><a class="nav-link nav-hover" href="#skills"><i class="fas fa-code me-2"></i> Skills</a></li>
        <li class="nav-item"><a class="nav-link nav-hover" href="#education"><i class="fas fa-graduation-cap me-2"></i> Education</a></li>
        <li class="nav-item"><a class="nav-link nav-hover" href="#projects"><i class="fas fa-project-diagram me-2"></i> Projects</a></li>
        <li class="nav-item"><a class="nav-link nav-hover" href="#achievement"><i class="fas fa-trophy me-2"></i> Achievements</a></li>
        <li class="nav-item"><a class="nav-link nav-hover" href="#contact"><i class="fas fa-paper-plane me-2"></i> Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section id="home" class="hero-section" role="main">
  <div id="particles-js"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-text" data-aos="fade-up">
        <h1>Shaik Mohammed Sameer</h1>
        <p>B.Tech CSE | KL University</p>
        <h3 id="dynamic-text"></h3>
        <div class="d-flex gap-4 my-4" data-aos="fade-up" data-aos-delay="200">
          <a href="https://linkedin.com/in/shaik-mohammed-sameer-6802bb2a0/" target="_blank" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/ShaikMohammedSameer3903" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
        <div class="d-flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="400">
          <a href="#contact" class="modern-btn"><i class="fas fa-paper-plane me-2"></i>Contact Me</a>
          <a href="#projects" class="modern-btn modern-btn-outline"><i class="fas fa-code me-2"></i>View Projects</a>
          <a href="/assets/resumea.pdf" class="modern-btn" download><i class="fas fa-file-download me-2"></i>Download Resume</a>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="200">
        <img loading="lazy" src="/image/sameer.jpg" alt="Profile" class="profile-img">
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section id="skills">
  <div class="container">
    <h2 class="section-title" data-aos="fade-up">Technical Skills</h2>
    <div class="row g-4">
      <div class="col-md-4" data-aos="zoom-in">
        <div class="glass-card">
          <h4 class="text-center mb-4" style="color: var(--light-color); font-weight: 700;">Programming Languages</h4>
          <div class="d-flex flex-wrap justify-content-center">
            <span class="skill-badge" data-skill="C"><i class="fab fa-cuttlefish"></i> C</span>
            <span class="skill-badge" data-skill="Java"><i class="fab fa-java"></i> Java</span>
          </div>
        </div>
      </div>
      <div class="col-md-4" data-aos="zoom-in" data-aos-delay="100">
        <div class="glass-card">
          <h4 class="text-center mb-4" style="color: var(--light-color); font-weight: 700;">Web Development</h4>
          <div class="d-flex flex-wrap justify-content-center">
            <span class="skill-badge" data-skill="React.js"><i class="fab fa-react"></i> React.js</span>
            <span class="skill-badge" data-skill="Node.js"><i class="fab fa-node-js"></i> Node.js</span>
            <span class="skill-badge" data-skill="Spring Boot"><i class="fas fa-server"></i> Spring Boot</span>
            <span class="skill-badge" data-skill="HTML"><i class="fab fa-html5"></i> HTML</span>
            <span class="skill-badge" data-skill="CSS"><i class="fab fa-css3-alt"></i> CSS</span>
          </div>
        </div>
      </div>
      <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
        <div class="glass-card">
          <h4 class="text-center mb-4" style="color: var(--light-color); font-weight: 700;">Others</h4>
          <div class="d-flex flex-wrap justify-content-center">
            <span class="skill-badge" data-skill="SQL"><i class="fas fa-database"></i> SQL</span>
            <span class="skill-badge" data-skill="MySQL"><i class="fas fa-database"></i> MySQL</span>
            <span class="skill-badge" data-skill="Firebase"><i class="fas fa-database"></i> Firebase</span>
            <span class="skill-badge" data-skill="Linux"><i class="fab fa-linux"></i> Linux</span>
            <span class="skill-badge" data-skill="Power BI"><i class="fas fa-chart-bar"></i> Power BI</span>
            <span class="skill-badge" data-skill="LaTeX"><i class="fas fa-file-alt"></i> LaTeX</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Education Section -->
<section id="education">
  <div class="container">
    <h2 class="section-title" data-aos="fade-up">Education</h2>
    <div class="row justify-content-center g-4">
      <div class="col-md-6" data-aos="zoom-in">
        <div class="glass-card">
          <div class="d-flex align-items-center">
            <img loading="lazy" src="/image/klu.jpg" alt="KL University" width="90" class="rounded-circle me-4">
            <div>
              <h4 style="font-weight: 700;">KL University, Vijayawada</h4>
              <p>B.Tech in Computer Science and Engineering</p>
              <p>August 2023 - Present | CGPA: 9.16/10</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div class="glass-card">
          <div class="d-flex align-items-center">
            <img loading="lazy" src="/image/srichaitanya.jpeg" alt="Sri Chaitanya" width="90" class="rounded-circle me-4">
            <div>
              <h4 style="font-weight: 700;">Sri Chaitanya College</h4>
              <p>Intermediate, MPC</p>
              <p>June 2021 - May 2023 | 84%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects">
  <div class="container">
    <h2 class="section-title" data-aos="fade-up">Projects</h2>
    <div class="row g-4">
      <div class="col-md-4" data-aos="zoom-in">
        <div class="glass-card project-card">
          <img loading="lazy" src="/image/farmer-platform.jpg" alt="Farmer-Friendly Platform" class="img-fluid rounded-top mb-3">
          <h5>Farmer-Friendly Platform</h5>
          <p>A web platform for direct agricultural sales with real-time features.</p>
          <p><strong>Tech:</strong></p>
          <div class="tech-container">
            <span class="tech-badge" data-skill="React.js">React.js</span>
            <span class="tech-badge" data-skill="Spring Boot">Spring Boot</span>
            <span class="tech-badge" data-skill="MySQL">MySQL</span>
          </div>
          <a href="https://github.com/ShaikMohammedSameer3903/farm-web" target="_blank" class="view-code-btn mt-3"><i class="fab fa-github"></i> View Code</a>
        </div>
      </div>

      <!-- BiteFlow Project Card -->
      <div class="col-md-4" data-aos="zoom-in" data-aos-delay="100">
        <div class="glass-card project-card">
          <img loading="lazy" src="/image/biteflow.jpg" alt="BiteFlow Food Delivery" class="img-fluid rounded-top mb-3">
          <h5>BiteFlow - Food Delivery Platform</h5>
          <p>End-to-end food delivery platform with menu, cart, checkout, and admin features.</p>
          <p><strong>Tech:</strong></p>
          <div class="tech-container">
            <span class="tech-badge">React</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">Express</span>
            <span class="tech-badge">MongoDB</span>
            <span class="tech-badge">Tailwind</span>
          </div>
          <div class="d-flex gap-2 mt-3">
            <a href="https://github.com/ShaikMohammedSameer3903/BiteFlow-A-Food-Delivery-Platform" target="_blank" class="view-code-btn"><i class="fab fa-github"></i> GitHub</a>
            <a href="#" target="_blank" class="view-code-btn" id="biteflow-demo-link"><i class="fas fa-external-link-alt"></i> Live</a>
          </div>
        </div>
      </div>

      <!-- Shopping Website Project Card -->
      <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
        <div class="glass-card project-card">
          <img loading="lazy" src="/image/shopping.jpg" alt="Shopping Website" class="img-fluid rounded-top mb-3">
          <h5>Shopping Website</h5>
          <p>E-commerce site featuring product listings, cart, and checkout flow.</p>
          <p><strong>Tech:</strong></p>
          <div class="tech-container">
            <span class="tech-badge">React</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">Express</span>
            <span class="tech-badge">MongoDB</span>
          </div>
          <div class="d-flex gap-2 mt-3">
            <a href="https://github.com/ShaikMohammedSameer3903" target="_blank" class="view-code-btn"><i class="fab fa-github"></i> GitHub</a>
            <a href="#" target="_blank" class="view-code-btn" id="shopping-demo-link"><i class="fas fa-external-link-alt"></i> Live</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Achievements Section -->
<section id="achievement">
  <div class="container">
    <h2 class="section-title" data-aos="fade-up">Achievements & Certifications</h2>
    <div class="row g-4">
      <div class="col-md-4" data-aos="zoom-in">
        <div class="glass-card p-3">
          <h5 style="font-weight: 700;">Salesforce AI Associate</h5>
          <p>Completed in October 2024</p>
          <span class="badge bg-primary rounded-pill">Certificate</span>
        </div>
      </div>
      <div class="col-md-4" data-aos="zoom-in" data-aos-delay="100">
        <div class="glass-card p-3">
          <h5 style="font-weight: 700;">Cambridge English Exam</h5>
          <p>Conducted by Cambridge</p>
          <span class="badge bg-primary rounded-pill">Certificate</span>
        </div>
      </div>
      <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
        <div class="glass-card p-3">
          <h5 style="font-weight: 700;">130+ Day Coding Streak</h5>
          <p>Consistent problem-solving practice on CodeChef</p>
          <a href="https://www.codechef.com/users/kl2000030621" target="_blank" class="badge bg-success rounded-pill"><i class="fab fa-codepen me-1"></i> View Profile</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact">
  <div class="container">
    <h2 class="section-title" data-aos="fade-up">Get In Touch</h2>
    <div class="row g-4">
      <div class="col-lg-4" data-aos="fade-up">
        <div class="glass-card p-4 h-100">
          <h4 style="background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700;" class="mb-4">Contact Info</h4>
          <div class="contact-item">
            <div class="d-flex align-items-center">
              <i class="fas fa-envelope me-3 fa-lg" style="color: var(--primary-color);"></i>
              <a href="mailto:shaiksameer3909sam@gmail.com" style="color: var(--light-color);">shaiksameer3909sam@gmail.com</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="d-flex align-items-center">
              <i class="fas fa-phone me-3 fa-lg" style="color: var(--primary-color);"></i>
              <a href="tel:+919030259526" style="color: var(--light-color);">+91 9030259526</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="d-flex align-items-center">
              <i class="fas fa-map-marker-alt me-3 fa-lg" style="color: var(--primary-color);"></i>
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
        <div class="glass-card p-4 h-100">
          <h4 style="background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700;" class="mb-4">Send Me a Message</h4>
          <form id="contactForm" action="" method="POST" novalidate>
            <div class="row g-3">
              <div class="col-md-6">
                <input type="text" name="name" class="form-control" placeholder="Your Name" required>
              </div>
              <div class="col-md-6">
                <input type="email" name="email" class="form-control" placeholder="Your Email" required>
              </div>
              <div class="col-12">
                <input type="text" name="subject" class="form-control" placeholder="Subject">
              </div>
              <div class="col-12">
                <textarea name="message" class="form-control" rows="6" placeholder="Your Message" required></textarea>
              </div>
              <div class="visually-hidden" aria-hidden="true">
                <label for="website">Website</label>
                <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
              </div>
              <div class="col-12">
                <button type="submit" class="modern-btn">
                  <i class="fas fa-paper-plane me-2"></i>Send Message
                </button>
              </div>
            </div>
          </form>
          <div id="formStatus" class="mt-3 text-center"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="container py-5">
    <div class="row g-4">
      <div class="col-lg-4" data-aos="fade-up">
        <h4 style="background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700;" class="mb-4">About Me</h4>
        <p>I am Shaik Mohammed Sameer, a B.Tech CSE student at KL University, skilled in web development and programming. I enjoy building scalable solutions using modern technologies like React.js, Spring Boot, and Firebase. I possess strong logical and analytical skills, with experience leading a team of 3 in the Farmer-Friendly Platform project, demonstrating teamwork and communication.</p>
        <h5 style="color: var(--light-color); font-weight: 600; margin-top: 1.5rem;">Languages</h5>
        <p>Urdu (Mother Tongue), Telugu (Native), English (Fluent), Hindi (Fluent)</p>
      </div>
      <div class="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <h5 style="background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700;" class="mb-4">Quick Links</h5>
        <a href="#home" class="footer-link">Home</a>
        <a href="#skills" class="footer-link">Skills</a>
        <a href="#education" class="footer-link">Education</a>
        <a href="#projects" class="footer-link">Projects</a>
      </div>
      <div class="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <h5 style="background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700;" class="mb-4">More Links</h5>
        <a href="#achievement" class="footer-link">Achievements</a>
        <a href="#contact" class="footer-link">Contact</a>
      </div>
      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
        <h5 style="background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700;" class="mb-4">Connect with Me</h5>
        <div class="d-flex gap-4 mt-4 justify-content-center">
          <a href="https://linkedin.com/in/shaik-mohammed-sameer-6802bb2a0/" target="_blank" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/ShaikMohammedSameer3903" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <p class="text-center mt-4" style="font-size: 0.9rem;">© 2025 Shaik Mohammed Sameer | All Rights Reserved</p>
  </div>
</footer>
`;document.getElementById("app").innerHTML=ye;he.init({duration:1e3,once:!1,easing:"ease-in-out"});const ie=document.createElement("script");ie.src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";ie.onload=()=>{window.particlesJS&&window.particlesJS("particles-js",{particles:{number:{value:window.innerWidth<768?40:80,density:{enable:!0,value_area:800}},color:{value:["#2ecc71","#3498db","#f1c40f"]},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#2ecc71",opacity:.2,width:1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0})};document.head.appendChild(ie);const le=["Web Developer","Java Programmer","Spring Boot Enthusiast","React Developer"];let ne=0,Z=0,ee=!1;const we=()=>document.getElementById("dynamic-text");function ae(){const g=we();if(!g)return;const b=le[ne];if(ee){if(g.textContent=b.substring(0,Z--),Z<0){ee=!1,ne=(ne+1)%le.length,setTimeout(ae,600);return}}else if(g.textContent=b.substring(0,Z++),Z>b.length){ee=!0,setTimeout(ae,2e3);return}setTimeout(ae,ee?50:120)}setTimeout(ae,1200);const ce=document.getElementById("mainNavbar");window.addEventListener("scroll",()=>{ce&&ce.classList.toggle("scrolled",window.scrollY>50)});const ke=document.querySelectorAll(".nav-link"),oe=document.getElementById("navbarNav");ke.forEach(g=>{g.addEventListener("click",b=>{b.preventDefault();const c=document.querySelector(g.getAttribute("href"));c&&window.scrollTo({top:c.offsetTop-70,behavior:"smooth"}),oe&&oe.classList.contains("show")&&window.bootstrap&&window.bootstrap.Collapse.getOrCreateInstance(oe).hide()})});const xe=document.querySelectorAll("section"),je=document.querySelectorAll(".nav-hover");window.addEventListener("scroll",()=>{let g="";xe.forEach(b=>{const c=b.offsetTop;window.pageYOffset>=c-100&&(g=b.getAttribute("id"))}),je.forEach(b=>{b.classList.remove("active"),b.getAttribute("href")===`#${g}`&&b.classList.add("active")})});const Se=document.querySelectorAll(".skill-badge"),de=document.querySelectorAll(".tech-badge");Se.forEach(g=>{g.addEventListener("mouseover",()=>{const b=g.getAttribute("data-skill");g.classList.add("highlighted"),de.forEach(c=>{c.getAttribute("data-skill")===b&&c.classList.add("highlighted")})}),g.addEventListener("mouseout",()=>{const b=g.getAttribute("data-skill");g.classList.remove("highlighted"),de.forEach(c=>{c.getAttribute("data-skill")===b&&c.classList.remove("highlighted")})})});const fe=document.getElementById("biteflow-demo-link"),ue=document.getElementById("shopping-demo-link");fe&&(fe.style.display="none");ue&&(ue.style.display="none");const _=document.getElementById("contactForm"),pe=document.getElementById("formStatus"),re="".replace(/\/$/,"");_&&(_.action=`${re}/api/contact`,_.addEventListener("submit",async g=>{g.preventDefault();const b=_.querySelector("button");b.disabled=!0,b.innerHTML='<i class="fas fa-spinner fa-spin me-2"></i>Sending...';try{const c=_.elements.name.value.trim(),i=_.elements.email.value.trim(),t=_.elements.subject.value.trim(),a=_.elements.message.value.trim(),s=_.elements.website?_.elements.website.value:"";if(!re)throw new Error("API base URL is not configured.");if(!c||!i||!a)throw new Error("Please fill in name, email, and message.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i))throw new Error("Please enter a valid email address.");const k=await fetch(`${re}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:i,subject:t,message:a,website:s})}),o=await k.json().catch(()=>({}));if(k.ok&&o.ok!==!1)pe.innerHTML='<div class="alert alert-success">Message sent successfully!</div>',_.reset();else{const p=o&&o.error?o.error:"Failed to send message";throw new Error(p)}}catch(c){pe.innerHTML='<div class="alert alert-danger">Error: '+c.message+"</div>"}finally{b.disabled=!1,b.innerHTML='<i class="fas fa-paper-plane me-2"></i>Send Message'}}));
