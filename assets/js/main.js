const header=document.querySelector('.site-header');
if(header)window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
if(menu&&nav)menu.addEventListener('click',()=>nav.classList.toggle('open'));
const slides=[...document.querySelectorAll('.fighter-slide')];
if(slides.length){let current=0,timer;const show=i=>{current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current))};const restart=()=>{clearInterval(timer);timer=setInterval(()=>show(current+1),2000)};document.querySelector('.next')?.addEventListener('click',()=>{show(current+1);restart()});document.querySelector('.prev')?.addEventListener('click',()=>{show(current-1);restart()});show(0);restart()}


// Head coach photo lightbox
(function(){
  const trigger=document.querySelector('.coach-photo-trigger');
  const modal=document.getElementById('coachPhotoModal');
  const close=modal && modal.querySelector('.image-modal-close');
  if(!trigger || !modal || !close) return;
  const open=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';};
  const hide=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';};
  trigger.addEventListener('click',open);
  close.addEventListener('click',hide);
  modal.addEventListener('click',e=>{if(e.target===modal) hide();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && modal.classList.contains('open')) hide();});
})();
