
window.addEventListener("scroll", function(){
    var navHeader = document.querySelector("header");
    var nav = this.document.querySelector("nav");

    navHeader.classList.toggle("header__navbar__sticky", window.scrollY > 0);
    nav.classList.toggle("nav--active", this.window.scrollY > 0);
})