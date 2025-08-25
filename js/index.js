// set year
document.getElementById('year').textContent = new Date().getFullYear();

// optional: smooth scroll for nav links in older browsers
document.querySelectorAll('a.nav-link, a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id && id.startsWith('#') && document.querySelector(id)){
        e.preventDefault();
        const y = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - 72; // navbar offset
        window.scrollTo({top:y, behavior:'smooth'});
        if(window.innerWidth < 992){
        const nav = document.getElementById('nav');
        if(nav && nav.classList.contains('show')) new bootstrap.Collapse(nav).hide();
        }
    }
    });
});
