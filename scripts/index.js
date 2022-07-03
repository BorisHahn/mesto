import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './card-data.js';

const popup = document.querySelector('.popup');
const cardsContainer = document.querySelector('.cards');
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

const profileValidator = new FormValidator(classObj, profilePopup);
profileValidator.enableValidation();

const cardValidator = new FormValidator(classObj, cardPopup);
cardValidator.enableValidation();

//функция добавления карточки в разметку
function renderCard(item) {
  const card = new Card(item, "#card");
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
}

//применяем функцию создания карточки для каждого элемента массива
function createCards(array) {
  array.forEach(item => {
    renderCard(item);
  });
}

createCards(initialCards);

//универсальная функция закрытия любого попапа
function closePopup(el) {
  el.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapeListener);
  document.removeEventListener('click', closePopupByClickOutside);
} 

//событие кнопки "закрыть" в попапе добавления новой карточки
buttonCloseСardPopup.addEventListener('click', (e) => {
  closePopup(cardPopup);
});

//событие кнопки "закрыть" в попапе просмотра изображения
buttonCloseImageView.addEventListener('click', (e) => {
  closePopup(imagePopup);
});

//событие кнопки "закрыть" в попапе редактирования данных профиля
buttonCloseProfilePopup.addEventListener('click', (e) => {
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
} 

//событие кнопки "редактировать" 
buttonEdit.addEventListener('click', (e) => {
  openPropfilePopup();
  profileValidator.resetValidation();
});

//событие кнопки "добавить карточку"
buttonOpenCardPopup.addEventListener('click', (e) => {
  openPopup(cardPopup);
  popupAddCardForm.reset();
  cardValidator.resetValidation();
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
  const data = {link: linkCardInput.value, name: nameCardInput.value}
  renderCard(data);
  popupAddCardForm.reset();
  closePopup(cardPopup);
}

//событие для кнопки отправки формы попапа для добавления новой карточки
popupAddCardForm.addEventListener('submit', addNewCard);

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
  }
}

//функция закрытия любого попапа нажатием ESC
function closePopupByEsc() {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
}
  
function escapeListener(e) {
  if (e.key === 'Escape') {
    closePopupByEsc();
  }
}

export default openImageFullscreen;