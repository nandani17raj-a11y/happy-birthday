const target=new Date('2026-08-21T00:00:00');
setInterval(()=>{let d=target-new Date();if(d<0)return;
let days=Math.floor(d/86400000),h=Math.floor(d%86400000/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);
document.getElementById('count').innerHTML=`❤️ Countdown to our meeting:<br>${days}d ${h}h ${m}m ${s}s`;},1000);
const g=document.getElementById('gallery');
for(let i=1;i<=90;i++){let img=document.createElement('img');img.src=`photos/${i}.jpg`;img.onerror=()=>img.remove();g.appendChild(img);}
