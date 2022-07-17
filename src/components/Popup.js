class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(popupSelector);
    this._buttonCloseElement = this._popupElement.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') 
      this.close();
  }

  _handleClickOverlay(event) {
    if (event.target.classList.contains('popup'))
      this.close();
  }

  setEventListeners() {
    this._buttonCloseElement.addEventListener('click', () => this.close());
    this._popupElement.addEventListener('click', (event) => this._handleClickOverlay(event));
  }
}

export default Popup;