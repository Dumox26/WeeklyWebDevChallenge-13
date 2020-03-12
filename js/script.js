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
    document.querySelector('#header-menu').classList.toggle('header__navigation--active');
    document.querySelector('#header-text').classList.toggle('header__welcome-txt--menu-active');
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