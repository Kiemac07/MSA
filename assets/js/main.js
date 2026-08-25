const header=document.querySelector('.site-header');
if(header)window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
if(menu&&nav)menu.addEventListener('click',()=>nav.classList.toggle('open'));
const slides=[...document.querySelectorAll('.fighter-slide')];
if(slides.length){let current=0,timer;const show=i=>{current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current))};const restart=()=>{clearInterval(timer);timer=setInterval(()=>show(current+1),3000)};document.querySelector('.next')?.addEventListener('click',()=>{show(current+1);restart()});document.querySelector('.prev')?.addEventListener('click',()=>{show(current-1);restart()});show(0);restart()}
