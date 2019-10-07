(this.webpackJsonptowers=this.webpackJsonptowers||[]).push([[0],{105:function(e,n,t){e.exports=t(258)},258:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(95),c=t.n(i),a=t(17),u=t(101),l=t(11),s=t(102),f=t(9),d=t(6),b=t(7);function p(){var e=Object(d.a)(["\n  height: 21px;\n  border: 1px solid black;\n  width: ","px;\n  background-color: ",";\n  z-index: 2;\n  opacity: ",";\n"]);return p=function(){return e},e}var v=b.a.div(p(),(function(e){return e.diskWidth}),(function(e){return e.diskColor}),(function(e){return e.isDragging?0:1}));function O(e){var n=e.id,t=e.color,r=e.width,i=e.onMove,c=e.canDrag,u=e.towerId,s=Object(a.c)({item:{id:n,type:"disk"},end:function(e,n){var t=n.getDropResult();e&&t&&i({diskId:e.id,toTower:t.id,fromTower:u})},collect:function(e){return{isDragging:e.isDragging()}},canDrag:function(){return c}}),f=Object(l.a)(s,2),d=f[0].isDragging,b=f[1];return o.a.createElement(v,{ref:b,diskColor:t,diskWidth:r,isDragging:d})}t(117);function g(){var e=Object(d.a)(["\n  display: flex;\n  margin: 15px 0;\n\n  "," {\n    margin-right: 25px;\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n  position: relative;\n  height: 204px;\n"]);return h=function(){return e},e}function j(){var e=Object(d.a)(["\n  display: block;\n  width: 200px;\n  height: 4px;\n  background-color: black;\n"]);return j=function(){return e},e}function m(){var e=Object(d.a)(["\n  display: block;\n  width: 4px;\n  height: 200px;\n  background-color: black;\n  position: absolute;\n"]);return m=function(){return e},e}var w=b.a.div(m()),y=b.a.div(j()),k=b.a.div(h()),E=b.a.div(g(),k);function D(e){e.children;var n=e.id,t=e.disks,r=void 0===t?[]:t,i=e.onMoveDisk,c=Object(a.d)({accept:"disk",drop:function(){return{id:n}},canDrop:function(e){return!(r.length>0)||r[0].id>e.id},collect:function(e){return{isOver:e.isOver()}}}),u=Object(l.a)(c,2),s=u[0],f=(s.canDrop,s.isOver,u[1]);return o.a.createElement(k,{ref:f},o.a.createElement(w,null),r.map((function(e,t){return o.a.createElement(O,{key:e.id,color:e.color,width:e.width,id:e.id,onMove:i,canDrag:0===t,towerId:n})})),o.a.createElement(y,null))}var x=t(100),T=t.n(x);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var P={width:50,color:M()},I=20;function M(){var e=function(){return Math.ceil(255*Math.random())};return T()({r:e(),g:e(),b:e()}).toString()}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return Array.from({length:e}).reduce((function(e,n,t){return t>0?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,Object(f.a)({},t+1,{width:e[t].width+I,color:M()})):e}),{1:P})}var R=0,A=1,_=2;function B(e){var n=[],t=[e[R].slice(0),e[A].slice(0),e[_].slice(0)];function r(e,r){var o=t[e].shift();t[r].unshift(o),n.push({fromTower:e,toTower:r,diskId:o.id})}return function e(n,t,o){if(n>1){var i=function(e,n){var t=[e,n];return[R,A,_].filter((function(e){return!t.includes(e)}))[0]}(t,o);return e(n-1,t,i),r(t,o),void e(n-1,i,o)}r(t,o)}(t[R].length,R,_),n}function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(){var e=Object(d.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  > &{Tower} {\n    margin-right: 15px\n  }\n\n  > p {\n    font-weight: bold;\n    margin: 10px 0;\n\n    > span {\n      font-weight: normal\n    }\n  }\n"]);return J=function(){return e},e}function L(){var e=Object(d.a)(["\n  display: flex;\n  margin: 5px;\n\n  > button:not(:last-child) {\n    margin-right: 10px;\n  }\n"]);return L=function(){return e},e}function U(){var e=Object(d.a)(["\n  margin-left: 15px;\n"]);return U=function(){return e},e}var V=b.a.select(U()),z=b.a.div(L()),N=b.a.div(J()),Y=3,$={disks:[],towers:[[],[],[]],userMoves:0};function q(e,n){return Array.from({length:e},(function(e,t){return W({id:t},n[t+1])}))}function F(e,n){return e.map((function(e,t){var r=void 0!==n.rest;return n[t]?n[t](e):r?n.rest(e):[]}))}function G(e,n){var t;switch(n.type){case"BUILD_DISKS_STATE":return W({},$,{disks:n.payload,towers:F(e.towers,Object(f.a)({},R,(function(){return n.payload})))});case"MOVE_DISK":var r=n.payload,o=r.diskId,i=r.fromTower,c=r.toTower,a=e.towers[i].find((function(e){return e.id===o}));return W({},e,{userMoves:e.userMoves+1,towers:F(e.towers,(t={},Object(f.a)(t,i,(function(e){return e.filter((function(e){return e.id!==o}))})),Object(f.a)(t,c,(function(e){return[a].concat(Object(s.a)(e))})),Object(f.a)(t,"rest",(function(e){return e})),t))});case"RESTART":return W({},$,{disks:e.disks,towers:F(e.towers,Object(f.a)({},R,(function(){return e.disks})))});default:return e}}var H=[3,4,5,6,7,8];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(a.b,{backend:u.a},o.a.createElement((function(){var e=Object(r.useState)(Y),n=Object(l.a)(e,2),t=n[0],i=n[1],c=Object(r.useReducer)(G,$),a=Object(l.a)(c,2),u=a[0],s=a[1],f=Object(r.useMemo)((function(){return C(t)}),[t]),d=Object(r.useCallback)((function(e){var n=e.diskId,t=e.fromTower,r=e.toTower;s({type:"MOVE_DISK",payload:{fromTower:t,toTower:r,diskId:n}})}),[]),b=Object(r.useCallback)((function(){s({type:"RESTART"})}),[]),p=function(e,n){var t=Object(r.useState)([]),o=Object(l.a)(t,2),i=o[0],c=o[1],a=Object(r.useState)(!0),u=Object(l.a)(a,2),s=u[0],f=u[1],d=Object(r.useRef)(),b=Object(r.useRef)(0),p=Object(r.useCallback)((function(){d.current&&(clearInterval(d.current),d.current=void 0)}),[]),v=Object(r.useCallback)((function(){f(!0),p()}),[p]),O=Object(r.useCallback)((function(){f(!1),d.current=setInterval((function(){if(b.current<i.length)return n(i[b.current]),void(b.current+=1);p()}),1e3)}),[p,n,i]);return Object(r.useEffect)((function(){i.length>0&&O()}),[O,i.length]),{isPause:s,pause:v,play:O,solve:function(){var n=B(e);c(n)}}}(u.towers,d).solve;return Object(r.useEffect)((function(){s({type:"BUILD_DISKS_STATE",payload:q(t,f)})}),[t,f]),o.a.createElement(N,null,o.a.createElement(E,null,Array.from({length:3},(function(e,n){return o.a.createElement(D,{key:n,id:n,disks:u.towers[n],onMoveDisk:d})}))),o.a.createElement("p",null,"Your numbers of move: ",o.a.createElement("span",null,u.userMoves)),o.a.createElement("p",null,"Number of disks",o.a.createElement(V,{onChange:function(e){i(e.target.value)},value:t},H.map((function(e){return o.a.createElement("option",{value:e,key:e},e)})))),o.a.createElement(z,null,o.a.createElement("button",{onClick:p},"solve it!"),o.a.createElement("button",{onClick:b},"restart")))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[105,1,2]]]);
//# sourceMappingURL=main.cc4d58a5.chunk.js.map