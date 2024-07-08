let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ri-close-large-fill');
    navbar.classList.toggle('active');
}
  //<-----------------------------------scroll section active link----------------->
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                   links.classList.remove('active');
                   document.querySelector('header nav a[href* = ' + id + ']').classList.add('active');
            });
        };
    });
};
// ------------------------------------sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrolly > 100);

//------------------------------------------------remove toggle icon and navbar
menuIcon.classList.remove('ri-close-large-fill');
navbar.classList.remove('active');
//-----------------------scroll reveil------------------

ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay:200,
 });

 ScrollReveal().reveal('.home-text, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .portfolio-box , .contacts ', { origin: 'bottom' });
 ScrollReveal().reveal('.home social, .about-img , .bars', { origin: 'left' });
 ScrollReveal().reveal('.about-text ,.bars2', { origin: 'right' });

 //--------------------------typed js

 