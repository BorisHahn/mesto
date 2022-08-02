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
const nameInput = profilePopup.querySelector('.popup__name-input');
const jobInput = profilePopup.querySelector('.popup__job-input');
const cardPopup = document.querySelector('.popup_card');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonOpenCardPopup = document.querySelector('.profile__add-button');
const avatarPopup = document.querySelector('.popup_update-avatar');
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

const avatarValidator = new FormValidator(classObj, avatarPopup);
avatarValidator.enableValidation();

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

const popupProfile = new PopupWithForm('.popup_profile', editProfileInfo);
popupProfile.setEventListeners();

const popupCard = new PopupWithForm('.popup_card', addNewCard);
popupCard.setEventListeners();

const popupConfirm = new PopupConfirm('.popup_confirm');
popupConfirm.setEventListeners();

const popupAvatar = new PopupWithForm('.popup_update-avatar', setNewAvatar);
popupAvatar.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description',
  profileAvatar: '.profile__avatar',
});

const createCards = new Section({
  renderer: renderCard
}, '.cards');

Promise.all([                 
  api.getUserData(), 
  api.getCards() 
]) 
.then(([result, studentsCards])=>{
  userInfo.setUserInfo({name: result.name, description: result.about, profileId: result._id, profileAvatar: result.avatar});
  createCards.rendererCards(studentsCards.reverse());
})
.catch((err)=>{              
  console.log(err);
})

// //функция создания прототипа карточки
function renderCard(item) {
  const card = new Card(item, {
    cardSelector: "#card",
    handleCardClick: () => popupWithImage.open(item),
    handleDeleteClick: () => openPopupConfirm(item._id, card),
    profileId: userInfo.getUserInfo().profileId,
    handleDislikeCard: () => dislikeCard(item._id, card),
    handleLikeCard: () => likeCard(item._id, card)
  });
  const cardElement = card.generateCard();
  return cardElement;
}

//функция открытия попапа подтверждения удаления карточки
function openPopupConfirm(id, card) {
  popupConfirm.open();
      popupConfirm.setSubmitCallback(() => {
        api.deleteCard(id)
          .then(() => {
            card.deleteCard();
            popupConfirm.close();
          })
          .catch((err) => {
            console.error(err); 
          });
      });
}

function dislikeCard(id, card) {
  api.dislikeCard(id)
    .then((result) => {
      card.deactiveLikes(result);
    })
    .catch((err) => {
      console.error(err); 
    });
}

function likeCard(id, card) {
  api.likeCard(id)
    .then((result) => {
      card.activeLikes(result);
    })
    .catch((err) => {
      console.error(err); 
    });
}

//функция открытия и добавления текстовых значений в попап редактирования данных профиля
function openPropfilePopup() {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.description;
  popupProfile.open();
}

//функция по изменению текстовых данных профиля 
function editProfileInfo(data) {
  popupProfile.setLoadingState(true);
  api.setUserData({name: data.name, about: data.description})
    .then((result) => {
      userInfo.setUserInfo({name: result.name, description: result.about, profileId: result._id, profileAvatar: result.avatar});
      popupProfile.close();
    })
    .catch((err) => {
      console.error(err); 
    })
    .finally(() => popupProfile.setLoadingState(false));
}

//функция добавления новой карточки
function addNewCard(result) {
  popupCard.setLoadingState(true);
  api.addNewCard(result)
  .then((data) => {
    createCards.addItem(data);
    popupCard.close();
  })
  .catch((err) => {
    console.error(err); 
  })
  .finally(() => popupCard.setLoadingState(false));
}
//функция обновления аватара
function setNewAvatar(data) {
  popupAvatar.setLoadingState(true);
  api.setNewAvatar({avatar: data.avatar})
    .then((res) => {
      userInfo.setUserInfo({name: res.name, description: res.about, profileId: res._id, profileAvatar: res.avatar});
      popupAvatar.close();
    })
    .catch((err) => {
      console.error(err); 
    })
    .finally(() => popupAvatar.setLoadingState(false));
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
  popupAvatar.open();
  avatarValidator.resetValidation();
});

