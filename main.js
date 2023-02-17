
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const productDetailIcon = document.querySelector('.product-detail-close');

const cartnav = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleNavEmail);
menuHamburger.addEventListener('click', toggleMobileMenu);
cartnav.addEventListener('click', toggleCartAside);
productDetailIcon.addEventListener('click', closeProductDetailAside);

function toggleNavEmail() {
    const isCartAsideClosed = shoppingCartContainer.classList.contains('inactive');
    //si cart abierto lo cerramos.
    if (!isCartAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartAsideClosed = shoppingCartContainer.classList.contains('inactive');
    //si cart abierto lo cerramos.
    if (!isCartAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    //llamamos a la funcion de cerrar a los fines de si tocamos el menu.
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');

}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isNavEmailClosed = navEmail.classList.contains('inactive');

    //si mobile esta abierto lo cerramos.
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');

    } if (!isNavEmailClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');

    }


    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}
/*Array productos*/
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 12000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 20000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

//Creamos una función para tomar un array, y renderizar las cards en este caso

function renderProductList(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

//invocamos la funcion con el parametro que es el array con la lista de productos.
renderProductList(productList);