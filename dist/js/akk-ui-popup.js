(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Popup = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  class Popup {
    constructor(el, openers = [], options = {}) {

      if(!el || !openers) {
        return
      }

      this.el = el;
      this.openers = openers;
      this.closable = options.closable || false;
      this.init();
    }

    init() {
      this.initHTML();
      this.initEvents();
    }

    initHTML() {
      this.el.classList.add('popup');
      this.el.firstElementChild.classList.add('popup__container');

      if(this.closable) {
        let popupClose = document.createElement('a');
        popupClose.href = '#';
        popupClose.classList.add('popup__close-btn');
        this.el.firstElementChild.appendChild(popupClose);
      }

      document.body.appendChild(this.el);

      return this.el;
    }

    initEvents() {
      this.open();
      this.close();
    }

    open() {

      let that = this;

      that.openers.forEach(function(popupOpen) {
        popupOpen.addEventListener('click', function(e) {
          e.preventDefault();
          that.el.classList.add('active');
        })
      })
    }

    close() {

      let that = this;

      that.el.addEventListener('click', function(e) {

        if (!e.target.closest('.popup__container')) {
          that.el.classList.remove('active');
        }
      })

      let popupClose = that.el.querySelector('.popup__close-btn');

      if(popupClose) {
        popupClose.addEventListener('click', function(e) {
          e.preventDefault();
          that.el.classList.remove('active');
        })
      }
    }
  }

  return Popup;

}));