const classObj = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

// Функция, которая добавляет класс с ошибкой
  const showInputError = (formElement, inputElement, errorMessage, classObj) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // добавляем класс со стилями для не валидного инпута
    inputElement.classList.add(classObj.inputErrorClass);
    // Текст сообщения об ошибке
    errorElement.textContent = errorMessage;
    // Показываем сообщение об ошибке
    errorElement.classList.add(classObj.errorClass);
  };
  
// Функция, которая удаляет класс с ошибкой
  const hideInputError = (formElement, inputElement, classObj) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // удаляем класс со стилями для не валидного инпута
    inputElement.classList.remove(classObj.inputErrorClass);
    // Убираем сообщение об ошибке
    errorElement.classList.remove(classObj.errorClass);
    // Очистим ошибку
    errorElement.textContent = '';
  };
  
// Функция, которая проверяет валидность поля
  const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement, inputElement, inputElement.validationMessage, classObj);
    } else {
      // Если проходит, скроем
      hideInputError(formElement, inputElement, classObj);
    }
  };

  const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
  
      return !inputElement.validity.valid;
    })
  }; 

  const activateButton = (buttonElement, classObj) => {
    if (buttonElement == null) 
      return;
    buttonElement.classList.remove(classObj.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
    };
  
  const diactivateButton = (buttonElement, classObj) => {
    buttonElement.classList.add(classObj.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  };

  const toggleButtonState = (inputList, buttonElement, classObj) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      diactivateButton(buttonElement, classObj);
    } else {
      // иначе сделай кнопку активной
      activateButton(buttonElement, classObj);
    }
  }; 

//Пусть слушатель событий добавится всем полям ввода внутри формы.
const setEventListeners = (formElement, classObj) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(classObj.inputSelector));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(classObj.submitButtonSelector);
    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    toggleButtonState(inputList, buttonElement, classObj);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement)
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        toggleButtonState(inputList, buttonElement, classObj);
      });
    });
  }; 

const enableValidation = (classObj) => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(classObj.formSelector));
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
        // Для каждой формы вызовем функцию setEventListeners,
        // передав ей элемент формы
        setEventListeners(formElement, classObj);
    });

};

// Вызовем функцию
enableValidation(classObj); 


export {classObj, enableValidation};