class Ui {
  constructor() {
    this.eventlisteners();
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
    const headerMenu = document.querySelector('#header-menu');
    headerMenu.classList.toggle('header__navigation--active');

    const topMenulinks = document.querySelectorAll('.header__item');
    this.menuLinksAnimation(topMenulinks);
  }

  footerMenuSlideIn = () => {
    const footerMenu = document.querySelector('#footer-nav-list');
    footerMenu.classList.toggle('footer__list--active');

    const botttomMenuLinks = document.querySelectorAll('.footer__list-item');
    this.menuLinksAnimation(botttomMenuLinks);
  }

  menuLinksAnimation = (links) => {
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `linksFadeAnimation 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });
  }

  eventlisteners = () => {
    document.querySelector('#nav-btn').addEventListener('click', (event) => {
      this.handleTopHmbClick(event);
    }, false);

    document.querySelector('#footer-btn').addEventListener('click', (event) => {
      this.handleBotttomHmbClick(event);
    }, false);
  }
}

const ui = new Ui();