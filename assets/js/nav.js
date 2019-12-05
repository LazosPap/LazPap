const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    document.body.classList.toggle("no-scroll");
    
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })   
});

navLinks.addEventListener('click', () => {

    if(document.body.classList.toggle("no-scroll") ==true) {
        document.body.classList.toggle("no-scroll");
    } else {
        document.body.classList.toggle("scroll") == false;
    }
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    }) 
});