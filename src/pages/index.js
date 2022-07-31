import './index.css';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirm from '../components/PopupConfirm.js';
import UserInfo from '../components/UserInfo.js';
import api from '../components/Api.js';

const profilePopup = document.querySelector('.popup_profile');
const editUserInfoButton = profilePopup.querySelector('.popup_submit');
const nameInput = profilePopup.querySelector('.popup__name-input');
const jobInput = profilePopup.querySelector('.popup__job-input');
const cardPopup = document.querySelector('.popup_card');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonOpenCardPopup = document.querySelector('.profile__add-button');
const updateAvatarPopup = document.querySelector('.popup_update-avatar');
const profileEditIcon = document.querySelector('.profile__update-avatar');

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

const updateAvatarValidator = new FormValidator(classObj, updateAvatarPopup);
updateAvatarValidator.enableValidation();

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

const popupProfile = new PopupWithForm('.popup_profile', editProfileInfo);
popupProfile.setEventListeners();

const popupCard = new PopupWithForm('.popup_card', addNewCard);
popupCard.setEventListeners();

const popupConfirm = new PopupConfirm('.popup_confirm');

const updateAvatar = new PopupWithForm('.popup_update-avatar', setNewAvatar);
updateAvatar.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description',
  profileAvatar: '.profile__avatar',
});

const createCards = new Section({
  items: [],
  renderer: renderCard
}, '.cards');

api.getUserData()
  .then((result) => {
    userInfo.setUserInfo({name: result.name, description: result.about, profileId: result._id, profileAvatar: result.avatar});
    api.getCards()
      .then((studentsCards) => {
        studentsCards.reverse().forEach((elem) => {
          createCards.addItem(elem);
        })
      })
      .catch((err) => {
        console.error(err); 
      });
  })
  .catch((err) => {
    console.error(err);
  });


// //функция создания прототипа карточки
function renderCard(item) {
  const card = new Card(item, {
    cardSelector: "#card",
    handleCardClick: () => popupWithImage.open(item),
    popupConfirm: popupConfirm, 
    profileId: userInfo.getUserInfo().profileId,
    deleteCard: (id) => api.deleteCard(id),
    likeCard: (id) => api.likeCard(id),
    dislikeCard: (id) => api.dislikeCard(id),
  });
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
  popupProfile.setLoadingState(true);
  api.setUserData({name: result.name, about: result.description})
    .then(() => {
      userInfo.setUserInfo(result);
      popupProfile.close();
    })
    .catch((err) => {
      console.error(err); 
    })
    .finally(() => popupProfile.setLoadingState(false));
}

//функция добавления новой карточки
function addNewCard(result) {
  api.addNewCard(result)
  .then((data) => {
    createCards.addItem(data);
    popupCard.close();
  })
  .catch((err) => {
    console.error(err); 
  });
}
//функция обновления аватара
function setNewAvatar(data) {
  updateAvatar.setLoadingState(true);
  api.setNewAvatar({avatar: data.avatar})
    .then((res) => {
      userInfo.setUserInfo({name: res.name, description: res.about, profileId: res._id, profileAvatar: res.avatar});
      updateAvatar.close();
    })
    .catch((err) => {
      console.error(err); 
    })
    .finally(() => updateAvatar.setLoadingState(false));
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

profileEditIcon.addEventListener('click', () => {
  updateAvatar.open();
  updateAvatarValidator.resetValidation();
});

