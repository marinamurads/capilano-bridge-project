const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".links");

[hamburger, links].map(element => element.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.classList.toggle("open");
}));
