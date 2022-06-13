const popup = document.querySelector('.popup');
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
const profilePopup = document.querySelector('.popup_profile');
const nameInput = profilePopup.querySelector('.popup__name-input');
const jobInput = profilePopup.querySelector('.popup__job-input');
const popupProfileForm = profilePopup.querySelector('.popup__container');
const buttonCloseProfilePopup = profilePopup.querySelector('.popup__close');
const cardPopup = document.querySelector('.popup_card');
const nameCardInput = cardPopup.querySelector('.popup__name-input');
const linkCardInput = cardPopup.querySelector('.popup__job-input');
const buttonCloseСardPopup = cardPopup.querySelector('.popup__close');
const popupAddCardForm = cardPopup.querySelector('.popup__container');
const imagePopup = document.querySelector('.popup_image');
const imageView = imagePopup.querySelector('.popup__image');
const figcaption = imagePopup.querySelector('.popup__figcaption');
const buttonCloseImageView = imagePopup.querySelector('.popup__close');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonOpenCardPopup = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const classObj = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};


const initialCards = [
  {
    name: 'БМВ R9T',
    link: './imges/fabio-spinelli-cPpmFa1OiGU-unsplash.jpg'
  },
  {
    name: 'Реймс',
    link: './imges/petr-stradal-VwgQxs1-xLM-unsplash.jpg'
  },
  {
    name: 'Ямаха R6',
    link: './imges/max-itin-xlhl7rI2M4I-unsplash.jpg'
  },
  {
    name: 'Фареры',
    link: './imges/waterfalls.jpg'
  },
  {
    name: 'Юта, США',
    link: './imges/utah.jpg'
  },
  {
    name: 'Лофотены',
    link: './imges/lofoten.jpg'
  }
];

//функция создания карточки и навешивание event для лайка, удаления и открытия картинки
function createCard(name, link) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const image = card.querySelector('.card__image');
  image.src = link;
  image.alt = name;
  image.addEventListener('click', () => openImageFullscreen(name, link));
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__like').addEventListener('click', activeLikes);
  card.querySelector('.card__delete').addEventListener('click', deleteCard);
  return card;
}

//функция добавления карточки в разметку
function renderCard(name, link) {
  const result = createCard(name, link);
  cardsContainer.prepend(result);
}

//применяем функцию создания карточки для каждого элемента массива
function createCards(array) {
  array.forEach(item => {
    renderCard(item.name, item.link);
  });
}

createCards(initialCards);

//универсальная функция закрытия любого попапа
function closePopup(el) {
  el.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapeListener);
  document.removeEventListener('click', closePopupByClickOutside);
  const inputList = Array.from(el.querySelectorAll(classObj.inputSelector));
  inputList.forEach((inputEl) => {
  hideInputError(el, inputEl, classObj);
  });
} 

//событие кнопки "закрыть" в попапе добавления новой карточки
buttonCloseСardPopup.addEventListener('click', (e) => {
  e.preventDefault();
  closePopup(cardPopup);
  popupAddCardForm.reset();
});

//событие кнопки "закрыть" в попапе просмотра изображения
buttonCloseImageView.addEventListener('click', (e) => {
  e.preventDefault();
  closePopup(imagePopup);
});

//событие кнопки "закрыть" в попапе редактирования данных профиля
buttonCloseProfilePopup.addEventListener('click', (e) => {
  e.preventDefault();
  closePopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//функция открытия и добавления текстовых значений в попап редактирования данных профиля
function openPropfilePopup() { 
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopup);
}

//универсальная функция открытия любого попапа
function openPopup(el) {
  el.classList.add('popup_opened');
  document.addEventListener('keydown', escapeListener);
  document.addEventListener('click', closePopupByClickOutside);
  diactivateButton(popup.querySelector('.popup__submit'), classObj);
} 

//событие кнопки "редактировать" 
buttonEdit.addEventListener('click', (e) => {
  openPropfilePopup();
});

//событие кнопки "добавить карточку" 
buttonOpenCardPopup.addEventListener('click', (e) => {
  openPopup(cardPopup);
});

//функция по изменению текстовых данных профиля 
function editProfileInfo(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

//событие для кнопки отправки формы попапа для редактирования данных профиля 
popupProfileForm.addEventListener('submit', editProfileInfo);

//функция добавления новой карточки
function addNewCard(e) {
  e.preventDefault(); 
  renderCard(nameCardInput.value, linkCardInput.value);
  popupAddCardForm.reset();
  closePopup(cardPopup);
}

//событие для кнопки отправки формы попапа для добавления новой карточки
popupAddCardForm.addEventListener('submit', addNewCard);

//функция активации лайков
function activeLikes(event) {
  event.target.classList.toggle('card__like_active');
}

//функция удаления карточки
function deleteCard(event) {
  event.target.closest(".card").remove();
}

//функция открытия увеличенного изображения
function openImageFullscreen(name, link) {
  imageView.src = link;
  imageView.alt = name;
  figcaption.textContent = name;
  openPopup(imagePopup);
}

//функция закрытия любого попапа кликом по оверлею
function closePopupByClickOutside(e) {
  if (e.target.classList.contains('popup')) {
    closePopup(e.target);
    if (typeof e.target.firstElementChild.reset === 'function') 
      e.target.firstElementChild.reset();
  }
}


//функция закрытия любого попапа нажатием ESC
function closePopupByEsc() {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
  if (typeof openedPopup.firstElementChild.reset === 'function') 
    openedPopup.firstElementChild.reset();
}
  
function escapeListener(e) {
  if (e.key === 'Escape') {
    closePopupByEsc();
  }
}
