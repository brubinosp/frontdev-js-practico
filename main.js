const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenu = document.querySelector(".icon-menu");

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}

navEmail.addEventListener("click",toggleDesktopMenu);
iconMenu.addEventListener("click",toggleMobileMenu);


