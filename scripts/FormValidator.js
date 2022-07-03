class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); 
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }
  
// Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  // Функция, которая проверяет валидность поля
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput() {
    // проходим по этому массиву методом some
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 

  _activateButton() {
    if (this._buttonElement == null) 
      return;
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  };

  _deactivateButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._deactivateButton(this._buttonElement);
    } else {
      this._activateButton(this._buttonElement);
    }
  };

  //Пусть слушатель событий добавится всем полям ввода внутри формы.
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  resetValidation() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);  
    });
    this._deactivateButton(buttonElement);
  }

  enableValidation() {
    this._setEventListeners(this._formElement);
  }; 
}

export default FormValidator;
