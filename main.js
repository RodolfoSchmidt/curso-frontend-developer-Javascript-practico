
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleNavEmail);
function toggleNavEmail() {
    desktopMenu.classList.toggle('inactive');
}