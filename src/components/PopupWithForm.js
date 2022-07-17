import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._popupForm = this._popupElement.querySelector('.popup__container');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
  }
  _getInputValues() {
    const result = {};
    this._inputList.forEach((inputElement) => {
      result[inputElement.name] = inputElement.value;
    });
    return result; 
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitFunction(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

export default PopupWithForm;