(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(50)},37:function(e,a,t){},44:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(20),r=t.n(o),i=(t(37),t(1)),m=t(16),u=t.n(m),c=t(14),s=t(7),d=t(15),p=t(17),C=t(8),E=t.n(C),b=t(9),v=t.n(b),f=t(10),h=t.n(f),g=t(29),k=t.n(g),w=t(11),N=t.n(w),j=(t(44),{name:"",email:"",id:"",position:"vocal"});function y(){var e=l.a.useState(j),a=Object(p.a)(e,2),t=a[0],n=a[1],o=l.a.useCallback(function(e){n(Object(d.a)({},t,{name:e.currentTarget.value}))},[t]),r=l.a.useCallback(function(e){n(Object(d.a)({},t,{email:e.currentTarget.value}))},[t]),m=l.a.useCallback(function(e){n(Object(d.a)({},t,{id:e.currentTarget.value}))},[t]),s=l.a.useCallback(function(e){n(Object(d.a)({},t,{position:e.currentTarget.value}))},[t]),g=t.name,y=t.email,O=t.id,A=t.position,q=l.a.useState(!1),D=Object(p.a)(q,2),P=D[0],W=D[1],T=l.a.useState(window.innerWidth<480?"AW":"AinosWorship"),I=Object(p.a)(T,2),x=I[0],B=I[1];l.a.useEffect(function(){var e=window.addEventListener("resize",function(e){B(window.innerWidth<480?"AW":"AinosWorship")});return function(){window.removeEventListener("resize",e)}},[]);var G=l.a.useRef(null);l.a.useEffect(function(){null!=G.current&&(""===g||""===y||""===O?G.current.buttons[1].setAttribute("disabled",!0):G.current.buttons[1].removeAttribute("disabled"))},[y,O,g,A]);var R=l.a.useCallback(function(e){W(!1)},[]),S=l.a.useCallback(function(){n(j),W(!0)},[]);return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"header"},l.a.createElement(i.Grid,null,l.a.createElement(i.Row,null,l.a.createElement("div",{className:"team-name title"},x),l.a.createElement(i.Cell,{desktopColumns:2,phoneColumns:0,tabletColumns:0}),l.a.createElement(i.Cell,{className:"menu",desktopColumns:8,phoneColumns:12,tabletColumns:8},l.a.createElement(c.b,{to:"/"},l.a.createElement(k.a,{icon:"home"}))),l.a.createElement(i.Cell,{desktopColumns:2,phoneColumns:0,tabletColumns:0})))),l.a.createElement(i.Grid,null,l.a.createElement(i.Row,null,l.a.createElement(i.Cell,{desktopColumns:2,phoneColumns:4,tabletColumns:0}),l.a.createElement(i.Cell,{desktopColumns:8,phoneColumns:4,tabletColumns:8},l.a.createElement("img",{src:"images/joinus_edited.png",className:"joinus-image",alt:""})),l.a.createElement(i.Cell,{desktopColumns:2,phoneColumns:4,tabletColumns:0}))),l.a.createElement("div",{className:"joinus-button"},l.a.createElement(u.a,{onClick:S},"Click to Apply")),l.a.createElement(i.Grid,{className:"intro-body"},l.a.createElement(i.Row,null,l.a.createElement(i.Cell,{desktopColumns:2,phoneColumns:4,tabletColumns:0}),l.a.createElement(i.Cell,{desktopColumns:8,phoneColumns:4,tabletColumns:8},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement(i.Cell,{desktopColumns:2,phoneColumns:4,tabletColumns:0}))),l.a.createElement(N.a,{className:"joinus-dialog",onClose:R,open:P,ref:G},l.a.createElement(w.DialogTitle,null,"Ainos Praise Sign-up"),l.a.createElement(w.DialogContent,null,l.a.createElement(E.a,{className:"form"},l.a.createElement(C.CardPrimaryContent,{className:"form-title"}),l.a.createElement(C.CardPrimaryContent,{className:"form-input"},l.a.createElement(v.a,{label:"Name"},l.a.createElement(b.Input,{value:g,required:!0,onChange:o}))),l.a.createElement(C.CardPrimaryContent,{className:"form-input"},l.a.createElement(v.a,{label:"E-mail"},l.a.createElement(b.Input,{value:y,required:!0,onChange:r}))),l.a.createElement(C.CardPrimaryContent,{className:"form-input"},l.a.createElement(v.a,{label:"KakaoTalk ID"},l.a.createElement(b.Input,{value:O,required:!0,onChange:m}))),l.a.createElement(C.CardPrimaryContent,{className:"form-input"},l.a.createElement(h.a,{label:"Position",required:!0,value:A,onChange:s},l.a.createElement(f.Option,{value:"vocal"},"Vocal"),l.a.createElement(f.Option,{value:"drum"},"Drum"),l.a.createElement(f.Option,{value:"bass"},"Bass"),l.a.createElement(f.Option,{value:"guitar"},"Guitar"),l.a.createElement(f.Option,{value:"keys"},"Keys"))))),l.a.createElement(w.DialogFooter,null,l.a.createElement(w.DialogButton,{action:"cancel"},"Cancel"),l.a.createElement(w.DialogButton,{action:"submit",disabled:!0,isDefault:!0},"Submit"))))}t(49);var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"video-container"},l.a.createElement("video",{loop:!0,autoPlay:!0,muted:!0,playsInline:!0},l.a.createElement("source",{src:"/video/jus.mp4",type:"video/mp4"}))),l.a.createElement("div",{className:"content"},l.a.createElement(i.Grid,null,l.a.createElement(i.Row,null,l.a.createElement(i.Cell,{desktopColumns:4,phoneColumns:4,tabletColumns:2}),l.a.createElement(i.Cell,{desktopColumns:4,phoneColumns:4,tabletColumns:4},l.a.createElement("h1",{className:"team-name"},"Ainos"),l.a.createElement("h1",{className:"team-name"},"Praise"),l.a.createElement(c.b,{to:"/joinus"},l.a.createElement(u.a,{outlined:!0},"Join Our Team"))),l.a.createElement(i.Cell,{desktopColumns:4,phoneColumns:4,tabletColumns:2})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(function(){return l.a.createElement(c.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:O}),l.a.createElement(s.a,{path:"/joinus",component:y}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.16099b03.chunk.js.map