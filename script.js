document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.getElementById('mainNav');
 const top=document.querySelector('.back-to-top');
 const links=[...document.querySelectorAll('.nav-link')];
 const sections=[...document.querySelectorAll('section[id]')];
 const onScroll=()=>{
   nav.classList.toggle('scrolled',window.scrollY>30);
   top.classList.toggle('show',window.scrollY>500);
   let current='home';
   sections.forEach(s=>{if(window.scrollY>=s.offsetTop-150) current=s.id;});
   links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+current));
 };
 window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
 document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>{const c=document.querySelector('.navbar-collapse'); if(c?.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(c).hide();}));
 const form=document.getElementById('contactForm');
 if(form) form.addEventListener('submit',async e=>{e.preventDefault();const btn=form.querySelector('button');const old=btn.innerHTML;btn.disabled=true;btn.innerHTML='Sending... <i class="bi bi-arrow-repeat"></i>';try{const r=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(r.ok){alert('Thank you! Your message has been sent successfully.');form.reset();}else alert('Something went wrong. Please try again.');}catch{alert('Something went wrong. Please try again.');}finally{btn.disabled=false;btn.innerHTML=old;}});
});
