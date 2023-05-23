const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".icon-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconShoppingCar = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

function toggleDesktopMenu() {
  const isProductDetailOpen = !productDetail.classList.contains("inactive");

  if (isProductDetailOpen) {
    productDetail.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function toggleProductDetail() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");

  if (isMobileMenuOpen) {
    mobileMenu.classList.add("inactive");
  }

  if (isDesktopMenuOpen) {
    desktopMenu.classList.add("inactive");
  }

  productDetail.classList.toggle("inactive");
}

navEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
iconShoppingCar.addEventListener("click", toggleProductDetail);
