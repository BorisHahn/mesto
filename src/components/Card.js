
class Card {
  constructor(data, options) {
    this._name = data.name;
    this._link = data.link;
    this._likesCounter = data.likes.length;
    this._likesCard = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._cardSelector = options.cardSelector;
    this._handleCardClick = options.handleCardClick;
    this._profileId = options.profileId;
    this._popupConfirm = options.popupConfirm;
    this._apiDeleteCallback = options.deleteCard;
    this._apiLikeCard = options.likeCard;
    this._apiDislikeCard = options.dislikeCard;
  }

  _getTemplate() {
    const cardTemplate = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__like');
    this._deleteButton = this._element.querySelector('.card__delete');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeCounter.textContent = this._likesCounter
    this._element.querySelector('.card__title').textContent = this._name;
    if (this._ownerId != this._profileId) {
      this._deleteButton.classList.add('card__delete_hide');
    } else {
      this._deleteButton.classList.remove('card__delete_hide');
    }
    this._updateLikeButton();
    return this._element;
  }
  
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('card__like_active')) {
        this._apiDislikeCard(this._cardId)
          .then((result) => {
            this._diactiveLikes(result);
          })
          .catch((err) => {
            console.error(err); 
          });
      } else {
        this._apiLikeCard(this._cardId)
          .then((result) => {
            this._activeLikes(result);
          })
          .catch((err) => {
            console.error(err); 
          });
      }
    });
    this._deleteButton.addEventListener('click', () => {
      this._popupConfirm.open();
      this._popupConfirm.setEventListeners(() => {
        this._apiDeleteCallback(this._cardId)
          .then(() => {
            this._deleteCard();
            this._popupConfirm.close();
          })
          .catch((err) => {
            console.error(err); 
          });
      });
    });
    this._cardImage.addEventListener('click', () => this._handleCardClick());
  }

  _activeLikes(data) {
    if (this._hasLiked(data.likes)) {
      this._likeButton.classList.add('card__like_active');
      this._likeCounter.textContent = ++this._likesCounter;
    } 
  }

  _diactiveLikes(data) {
    if (!this._hasLiked(data.likes)) {
      this._likeButton.classList.remove('card__like_active');
      this._likeCounter.textContent = --this._likesCounter;
    } 
  }

  _deleteCard() {
    this._element.remove()
    this._element = null;
  }

  _openImgPopup() {
    openImageFullscreen(this._name, this._link);
  }

  _updateLikeButton() {
      if (this._hasLiked(this._likesCard)) {
        this._likeButton.classList.add('card__like_active');
      }
      else {
        this._likeButton.classList.remove('card__like_active');
      }
  }

  _hasLiked(likes) {
    return likes.some((item) => item._id == this._profileId);
  }
}

export default Card;
