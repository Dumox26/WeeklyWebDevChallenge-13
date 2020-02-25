class Ui {
  constructor() {
    this.eventlisteners();
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
      console.log(event);
      this.handleHmbClick(event);
    }, false);
  }
}

const ui = new Ui();