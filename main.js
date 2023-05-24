const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".icon-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconShoppingCar = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#product-detail");
const btnCloseProductDetail = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive")
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive")
}

function toggleshoppingCartAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
  const isProductDetailOpen = !productDetailContainer.classList.contains("inactive");

  if (isMobileMenuOpen) {
    mobileMenu.classList.add("inactive");
  }

  if (isDesktopMenuOpen) {
    desktopMenu.classList.add("inactive");
  }

  if(isProductDetailOpen) {
    productDetailContainer.classList.add("inactive")
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  productDetailContainer.classList.remove("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
}

navEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
iconShoppingCar.addEventListener("click", toggleshoppingCartAside);
btnCloseProductDetail.addEventListener("click", () => {
  productDetailContainer.classList.add("inactive");
})

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
    productImg.addEventListener("click", openProductDetailAside);
  
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