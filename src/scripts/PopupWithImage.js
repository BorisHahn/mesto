import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._figcaption = this._popupElement.querySelector('.popup__figcaption');
  }

  open(data) {
    super.open();
    this._popupElement.src = data.link;
    this._popupElement.alt = data.name;
    this._figcaption.textContent = data.name;
  }
}

export default PopupWithImage;