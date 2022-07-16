import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._figcaption = this._popupElement.querySelector('.popup__figcaption');
    this._image = this._popupElement.querySelector('.popup__image');
  }

  open(data) {
    super.open();
    this._image.src = data.link;
    this._image.alt = data.name;
    this._figcaption.textContent = data.name;
  }
}

export default PopupWithImage;