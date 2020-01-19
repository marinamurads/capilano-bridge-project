const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector(".nav-links");
const linkOne = document.querySelector(".link-1");
const linkTwo = document.querySelector(".link-2");
const linkThree = document.querySelector(".link-3");

[hamburger, linkOne, linkTwo, linkThree].map(element => element.addEventListener("click", () => {
    navLinks.classList.toggle("open");
}));
