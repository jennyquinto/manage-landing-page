const bodyContent = document.querySelector('body');
const mainContent = document.querySelector('main');
const menuButtton = document.querySelector('.mobile-nav-toggle');
const menuList = document.querySelector('.primary-navigation');

menuButtton.addEventListener('click', () => {
    menuList.hasAttribute('data-visible')
    ? menuList.setAttribute('aria-expanded', false)
    : menuList.setAttribute('aria-expanded', true)
    menuList.toggleAttribute('data-visible')
    mainContent.toggleAttribute('data-overlay')
    bodyContent.toggleAttribute('data-overlay');
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  slidesToShow: 1,
  arrows: true, // arrows enabled 767px and down
  dots: true,
  responsive: {
    768: {
      slidesToShow: 2,
      arrows: true
    },
    960: {
      disable: false, // slider disabled 960px to 1279px
      slidesToShow: 3,
      arrows: true
    },
    1280: {
      disable: false,
      slidesToShow: 3,
      dots: true // dots enabled 1280px and up
    }
  }
});