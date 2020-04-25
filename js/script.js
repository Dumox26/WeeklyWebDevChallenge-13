class Ui {
  constructor() {
    this.eventlisteners();
    this.matchMedia();
  }

  handleHmbClick = (e) => {
    document.querySelector('#nav-btn').classList.toggle('hmb-btn--active')
    this.menuSlideIn();
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

  eventlisteners = () => {
    document.querySelector('#nav-btn').addEventListener('click', (event) => {
      this.handleHmbClick(event);
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