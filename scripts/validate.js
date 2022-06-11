// Функция, которая добавляет класс с ошибкой
  const showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // добавляем класс со стилями для не валидного инпута
    inputElement.classList.add('popup__input_type_error');
    // Текст сообщения об ошибке
    errorElement.textContent = errorMessage;
    // Показываем сообщение об ошибке
    errorElement.classList.add('popup__input-error_active');
  };
  
// Функция, которая удаляет класс с ошибкой
  const hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // удаляем класс со стилями для не валидного инпута
    inputElement.classList.remove('popup__input_type_error');
    // Убираем сообщение об ошибке
    errorElement.classList.remove('popup__input-error_active');
    // Очистим ошибку
    errorElement.textContent = '';
  };
  
// Функция, которая проверяет валидность поля
  const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      hideInputError(formElement, inputElement);
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
  
  const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add('popup__submit_inactive');
      buttonElement.setAttribute('disabled', true);
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove('popup__submit_inactive');
      buttonElement.removeAttribute('disabled', true);
    }
  }; 

  
//Пусть слушатель событий добавится всем полям ввода внутри формы.
const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector('.popup__submit');
    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    toggleButtonState(inputList, buttonElement);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement)
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        // toggleButtonState(inputList, buttonElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 

const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.popup__container'));
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
    });
        // Для каждой формы вызовем функцию setEventListeners,
        // передав ей элемент формы
        setEventListeners(formElement);
    });

};

// Вызовем функцию
enableValidation(); 