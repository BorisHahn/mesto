import '../css/index.css';
import Section from './Section.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './card-data.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const profilePopup = document.querySelector('.popup_profile');
const nameInput = profilePopup.querySelector('.popup__name-input');
const jobInput = profilePopup.querySelector('.popup__job-input');
const cardPopup = document.querySelector('.popup_card');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonOpenCardPopup = document.querySelector('.profile__add-button');

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

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

const popupProfile = new PopupWithForm('.popup_profile', editProfileInfo);
popupProfile.setEventListeners();

const popupCard = new PopupWithForm('.popup_card', addNewCard);
popupCard.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description'
});

const createCards = new Section({
  items: initialCards,
  renderer: renderCard
}, '.cards');
createCards.rendererCards();

// //функция создания прототипа карточки
function renderCard(item) {
  const card = new Card(item, "#card", () => popupWithImage.open(item));
  const cardElement = card.generateCard();
  return cardElement;
}

//функция открытия и добавления текстовых значений в попап редактирования данных профиля
function openPropfilePopup() {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.description;
  popupProfile.open();
}

//функция по изменению текстовых данных профиля 
function editProfileInfo(result) {
  userInfo.setUserInfo(result);
  popupProfile.close();
}

//функция добавления новой карточки
function addNewCard(result) {
  createCards.addItem(result);
  popupCard.close();
}

//событие кнопки "редактировать" 
buttonEdit.addEventListener('click', () => {
  openPropfilePopup();
  profileValidator.resetValidation();
});

//событие кнопки "добавить карточку"
buttonOpenCardPopup.addEventListener('click', () => {
  popupCard.open();
  cardValidator.resetValidation();
});
