const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__container");
const navLinks = document.querySelectorAll(".nav__link");
const main = document.querySelector(".clicked");

hamburger.addEventListener("click", handleNavMenuClicked);

navLinks.forEach((link) => {
    link.addEventListener("click", function() {
        hamburger.classList.remove("is-active");
        navMenu.classList.remove("active");
        main.textContent = link.textContent;
        navLinks.forEach((linked) => {
            linked.classList.remove("show");
        });
    });
});

function handleNavMenuClicked() {
    this.classList.toggle("is-active");
    navMenu.classList.toggle("active");

    navLinks.forEach((link) => {
        if (!link.classList.contains("show")) {
            link.classList.add("show");
        } else {
            link.classList.remove("show");
        }
    });
}