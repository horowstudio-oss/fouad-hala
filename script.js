const C=window.WEDDING;
const fill=(sel,val)=>document.querySelectorAll(sel).forEach(e=>e.textContent=val||"");
fill('[data-groom]',C.groom);fill('[data-bride]',C.bride);fill('[data-arabic-groom]',C.arabicGroom);fill('[data-arabic-bride]',C.arabicBride);fill('[data-opening]',C.openingLine);fill('[data-invitation]',C.invitationLine);fill('[data-closing]',C.closingLine);fill('[data-date-label]',C.dateLabel);fill('[data-time]',C.time);fill('[data-venue]',C.venue);fill('[data-city]',C.city);
const audio=document.getElementById('music'), sound=document.getElementById('sound');audio.src=C.music;let started=false;
async function play(){try{await audio.play();started=true;sound.classList.remove('muted')}catch(e){sound.classList.add('muted')}}
sound.addEventListener('click',()=>{if(audio.paused)play();else{audio.pause();sound.classList.add('muted')}});sound.classList.add('muted');
window.addEventListener('pointerdown',()=>{if(!started)play()},{once:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.18});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const petals=document.querySelector('.petals');for(let i=0;i<18;i++){const p=document.createElement('i');p.className='petal';p.style.left=Math.random()*100+'%';p.style.animationDuration=(7+Math.random()*8)+'s';p.style.animationDelay=(-Math.random()*12)+'s';p.style.setProperty('--drift',(Math.random()*180-90)+'px');p.style.opacity=.25+Math.random()*.5;petals.appendChild(p)}
function tick(){const target=new Date(C.date+'T20:00:00'),d=Math.max(0,target-new Date()),s=Math.floor(d/1000);fill('[data-days]',String(Math.floor(s/86400)).padStart(2,'0'));fill('[data-hours]',String(Math.floor(s%86400/3600)).padStart(2,'0'));fill('[data-minutes]',String(Math.floor(s%3600/60)).padStart(2,'0'));fill('[data-seconds]',String(s%60).padStart(2,'0'))}tick();setInterval(tick,1000);
