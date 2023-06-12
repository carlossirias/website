ScrollReveal().reveal('.image__about__me');

const secretsSections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar', entry.isIntersecting)
    })
})

secretsSections.forEach((secciones)=>observer.observe(secciones))