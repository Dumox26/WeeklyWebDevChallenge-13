class Ui {
  constructor() {
    this.eventlisteners();
    this.matchMedia();
  }

  handleTopHmbClick = (e) => {
    document.querySelector('#nav-btn').classList.toggle('hmb-btn--active');
    this.menuSlideIn();
  }

  handleBotttomHmbClick = (e) => {
    document.querySelector('#footer-btn').classList.toggle('hmb-btn--active');
    this.footerMenuSlideIn();
  }

  menuSlideIn = () => {
    document.querySelector('#header-menu').classList.toggle('header__navigation--active');
    const menuLinks = document.querySelectorAll('.header__item');

    menuLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `linksFadeAnimation 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });
  }

  footerMenuSlideIn = () => {
    document.querySelector('#footer-nav-list').classList.toggle('footer__list--active');
  }

  eventlisteners = () => {
    document.querySelector('#nav-btn').addEventListener('click', (event) => {
      this.handleTopHmbClick(event);
    }, false);

    document.querySelector('#footer-btn').addEventListener('click', (event) => {
      this.handleBotttomHmbClick(event);
    }, false);
  }

  matchMedia = () => {
    const media = window.matchMedia('(min-width: 1000px)');
    const headerText = document.querySelector('#header-text');
    const headerNav = document.querySelector('#header-menu');

    media.addEventListener('change', (event) => {
      if (event.matches) {
        headerText.classList.remove('header__welcome-txt--menu-active');
        headerNav.classList.remove('header__navigation--active');
      }
    });
  }
}

const ui = new Ui();