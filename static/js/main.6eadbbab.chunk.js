(this.webpackJsonpjackson=this.webpackJsonpjackson||[]).push([[0],[,,,function(e,n,t){e.exports=t(10)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i,o=t(0),r=t.n(o),v=t(2),a=t.n(v),s=(t(8),t(9),{x:0,y:0}),u={x:0,y:0,vx:0,vy:0},y={x:window.innerWidth/2,y:window.innerHeight/2,vx:0,vy:0},x=!1,f=0,c=function(e){s.x=e.offsetX,s.y=e.offsetY},d=function(e){x=!0,y.x=s.x=e.offsetX,y.y=s.y=e.offsetY,y.vx=y.vy=0},l=function(e){x=!1};requestAnimationFrame((function e(n){f>0&&(!function(e){var n=-3*(y.y-s.y),t=-3*(y.x-s.x),i=(n-8*y.vy)/20,o=(t-8*y.vx)/20;u.x=y.x,u.y=y.y,u.vx=y.vx,u.vy=y.vy,y.vy+=i*e,y.vx+=o*e,y.y+=y.vy*e,y.x+=y.vx*e}((n-f)/32),function(){if(i&&x){var e=Math.sqrt(y.vx*y.vx+y.vy*y.vy);i.lineWidth=Math.max(3,(60-e)/4),i.beginPath(),i.moveTo(u.x,u.y),i.bezierCurveTo(u.x+.4*u.vx,u.y+.4*u.vy,y.x-.4*y.vx,y.y-.4*y.vy,y.x,y.y),i.stroke()}}());f=n,requestAnimationFrame(e)}));var h=function(){var e=r.a.useRef(null);return r.a.useEffect((function(){var n=e.current;n&&(n.addEventListener("mousemove",c,!1),n.addEventListener("mousedown",d,!1),n.addEventListener("mouseup",l,!1),(i=n.getContext("2d")).lineCap="round",i&&(i.save(),i.fillStyle="#333",i.fillRect(0,0,window.innerWidth,window.innerHeight),i.restore()),i.strokeStyle="red",i.lineWidth=1,i.fillStyle="green")}),[e]),r.a.createElement("canvas",{ref:e,width:window.innerWidth,height:window.innerHeight})},m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};a.a.render(r.a.createElement(m,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.6eadbbab.chunk.js.map