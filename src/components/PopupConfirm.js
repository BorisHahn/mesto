import Popup from "./Popup.js";

class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popupElement.querySelector('.popup__submit_confirm');
  }

  setEventListeners(onSubmit) {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof onSubmit == 'function') {
        onSubmit();
      }
    });
  }
}

export default PopupConfirm;