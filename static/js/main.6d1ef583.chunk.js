(this.webpackJsonpjackson=this.webpackJsonpjackson||[]).push([[0],[,,,function(e,n,t){e.exports=t(10)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i,r=t(0),a=t.n(r),o=t(2),v=t.n(o),f=(t(8),t(9),{x:0,y:0}),d={x:0,y:0,vx:0,vy:0},s={x:window.innerWidth/2,y:window.innerHeight/2,vx:0,vy:0},y=!1,u=0,x=0,c=0,l=function(){i&&(i.save(),i.fillStyle="#333",i.fillRect(0,0,window.innerWidth,window.innerHeight),i.restore())},h=function(e){f.x=e.offsetX,f.y=e.offsetY},m=function(e){y=!0,d.x=s.x=f.x=e.offsetX,d.y=s.y=f.y=e.offsetY,d.vx=d.vy=s.vx=s.vy=0},w=function(e){y=!1,u=c};requestAnimationFrame((function e(n){(c=n,x>0)&&(!function(e){var n=-3*(s.y-f.y),t=-3*(s.x-f.x),i=(n-8*s.vy)/20,r=(t-8*s.vx)/20;d.x=s.x,d.y=s.y,d.vx=s.vx,d.vy=s.vy,s.vy+=i*e,s.vx+=r*e,s.y+=s.vy*e,s.x+=s.vx*e}((n-x)/32),function(){if(i)if(y){var e=Math.sqrt(s.vx*s.vx+s.vy*s.vy);i.lineWidth=Math.max(3,(60-e)/4),i.beginPath(),i.moveTo(d.x,d.y),i.bezierCurveTo(d.x+.4*d.vx,d.y+.4*d.vy,s.x-.4*s.vx,s.y-.4*s.vy,s.x,s.y),i.stroke()}else{if(Math.random()>(c-u)/100){var n=2*i.lineWidth;i.beginPath();for(var t=0;t<10;t+=1)i.arc(s.x+Math.random()*n-n/2,s.y+Math.random()*n-n/2,Math.random()*i.lineWidth/4,0,2*Math.PI,!1);i.fill()}}}());x=n,requestAnimationFrame(e)}));var p=function(){var e=a.a.useRef(null);return a.a.useEffect((function(){var n=e.current;n&&(n.addEventListener("mousemove",h,!1),n.addEventListener("mousedown",m,!1),n.addEventListener("mouseup",w,!1),n.addEventListener("dblclick",l,!1),(i=n.getContext("2d")).lineCap="round",l(),i.strokeStyle="#f00",i.lineWidth=1,i.fillStyle="#f22")}),[e]),a.a.createElement("canvas",{ref:e,width:window.innerWidth,height:window.innerHeight})},E=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))};v.a.render(a.a.createElement(E,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.6d1ef583.chunk.js.map