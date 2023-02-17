
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cartnav = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleNavEmail);
menuHamburger.addEventListener('click', toggleMobileMenu);
cartnav.addEventListener('click', toggleCartAside);

function toggleNavEmail() {
    const isCartAsideClosed = aside.classList.contains('inactive');
    //si cart abierto lo cerramos.
    if (!isCartAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartAsideClosed = aside.classList.contains('inactive');
    //si cart abierto lo cerramos.
    if (!isCartAsideClosed) {
        aside.classList.add('inactive');
    }
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

    aside.classList.toggle('inactive');
}