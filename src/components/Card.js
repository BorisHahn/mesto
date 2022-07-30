
class Card {
  constructor(data, options) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._cardSelector = options.cardSelector;
    this._handleCardClick = options.handleCardClick;
    this._profileId = options.profileId;
    this._popupConfirm = options.popupConfirm;
    this._apiDeleteCallback = options.deleteCard;
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
    this._likeCounter.textContent = this._likes;
    this._element.querySelector('.card__title').textContent = this._name;
    if (this._ownerId != this._profileId) {
      this._deleteButton.classList.add('card__delete_hide');
    } else {
      this._deleteButton.classList.remove('card__delete_hide');
    }
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', (event) => this._activeLikes(event));
    this._deleteButton.addEventListener('click', (e) => {
      this._popupConfirm.open();
      this._popupConfirm.setEventListeners(() => {
        this._apiDeleteCallback(this._cardId).then(() => {
          this._deleteCard();
          this._popupConfirm.close();
        })
      });
    });
    this._cardImage.addEventListener('click', () => this._handleCardClick());
  }

  _activeLikes() {
    this._likeButton.classList.toggle('card__like_active');

  }

  _deleteCard() {
    this._element.remove()
    this._element = null;
  }

  _openImgPopup() {
    openImageFullscreen(this._name, this._link);
  }
  
}

export default Card;
