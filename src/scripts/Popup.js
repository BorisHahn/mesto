class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(popupSelector);
    this._buttonCloseElement = this._popupElement.querySelector('.popup__close');
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    this._setEventListeners();
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') 
      this.close();
  }

  _handleClickOverlay(event) {
    if (event.target.classList.contains('popup'))
      this.close();
  }

  _setEventListeners() {
    this._buttonCloseElement.addEventListener('click', () => this.close());
    document.addEventListener('keydown', (event) => this._handleEscClose(event));
    document.addEventListener('click', (event) => this._handleClickOverlay(event));
  }
}

export default Popup;