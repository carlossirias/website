
//Event listenes to hear every time the user scroll.
window.addEventListener("scroll", function(){
    //Make variables to header and the navbar, because the header will be able to be sticky and the navbar to change the color.
    var navHeader = document.querySelector("header");
    var nav = this.document.querySelector("nav");

    //To toggle classlist everytime the scrollY be greather than 0
    navHeader.classList.toggle("header__navbar__sticky", window.scrollY > 0);
    nav.classList.toggle("nav--active", this.window.scrollY > 0);
})