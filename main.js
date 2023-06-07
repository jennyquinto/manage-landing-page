const bodyContent = document.querySelector('body');
const mainContent = document.querySelector('main');
const menuButtton = document.querySelector('.mobile-nav-toggle');
const menuList = document.querySelector('.primary-navigation');

menuButtton.addEventListener('click', () => {
    menuList.hasAttribute('data-visible')
    ? menuList.setAttribute('aria-expanded', false)
    : menuList.setAttribute('aria-expanded', true)
    menuList.toggleAttribute('data-visible');
    mainContent.toggleAttribute('data-overlay');
    bodyContent.toggleAttribute('data-overlay');
});