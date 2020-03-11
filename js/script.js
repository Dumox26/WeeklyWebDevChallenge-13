class Ui {
  constructor() {
    this.eventlisteners();
    this.matchMedia();
  }

  handleHmbClick = (e) => {
    document.querySelector('#nav-btn').classList.toggle('hmb-btn--active')
    this.menuEvent();
  }

  menuEvent = () => {
    document.querySelector('#header-menu').classList.toggle('header__list--active');
    document.querySelector('#header-cnt').classList.toggle('header__nav-cnt--menu-active');
  }


  eventlisteners = () => {
    document.querySelector('#nav-btn').addEventListener('click', (event) => {
      this.handleHmbClick(event);
    }, false);
  }

  matchMedia = () => {
    const media = window.matchMedia('(min-width: 1000px)');
    const headerMenu = document.querySelector('#header-menu');
    media.addEventListener('change', (event) => {
      if (event.matches) {
        headerMenu.classList.toggle('header__list--desktop');
      } else {
        // headerMenu.classList.toggle('header__list--desktop');
      }
    });
  }
}

const ui = new Ui();