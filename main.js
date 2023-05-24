const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".icon-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconShoppingCar = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

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

// Lista de productos: Creando un componente HTML reutilizable
const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "TV",
  price: 4500,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Celular",
  price: 1500,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Headphones",
  price: 90,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Radio",
  price: 59,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "PS5",
  price: 3400,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(object) {
  for (const product of object) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
  
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
  
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    const productInfoFig = document.createElement("figure");
  
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFig.appendChild(productImgCart); //permite solo un nodo
    productInfoDiv.append(productPrice, productName); // permite varios nodos o texto
    productInfo.append(productInfoDiv, productInfoFig);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
  }  
}

renderProducts(productList);