class Ui {
  constructor() {
    this.eventlisteners();
  }

  handleTopHmbClick = (e) => {
    const topNavBtn = document.querySelector('#nav-btn');
    topNavBtn.classList.toggle('hmb-btn--active');
    this.setAriaExpand(topNavBtn);

    this.menuSlideIn();
  }

  handleBotttomHmbClick = (e) => {
    const botNavBtn = document.querySelector('#footer-btn');
    botNavBtn.classList.toggle('hmb-btn--active');
    this.setAriaExpand(botNavBtn);

    this.footerMenuSlideIn();
  }

  menuSlideIn = () => {
    const headerMenu = document.querySelector('#header-menu');
    headerMenu.classList.toggle('header__navigation--active');
    this.setAriaExpand(headerMenu);

    const topMenulinks = document.querySelectorAll('.header__item');
    this.menuLinksAnimation(topMenulinks);
  }

  footerMenuSlideIn = () => {
    const footerMenu = document.querySelector('#footer-nav-list');
    footerMenu.classList.toggle('footer__list--active');
    this.setAriaExpand(footerMenu);

    const botttomMenuLinks = document.querySelectorAll('.footer__list-item');
    this.menuLinksAnimation(botttomMenuLinks);
  }

  setAriaExpand = (elem) => {
    if (elem.getAttribute('aria-expanded') === 'false') {
      elem.setAttribute('aria-expanded', 'true');
    } else {
      elem.setAttribute('aria-expanded', 'false');
    }
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