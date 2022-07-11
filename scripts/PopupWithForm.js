import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._popupForm = this._popupElement.querySelector('.popup__container');
  }
  _getInputValues() {
    const inputs = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    const result = {};
    inputs.forEach((inputElement) => {
      result[inputElement.name] = inputElement.value;
    });
    return result; 
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popupForm.addEventListener('submit', this._submitFunction);
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

export default PopupWithForm;