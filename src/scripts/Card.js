
class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', (event) => this._activeLikes(event));
    this._deleteButton.addEventListener('click', () => this._deleteCard());
    this._cardImage.addEventListener('click', () => this._handleCardClick());
  }

  _activeLikes(event) {
    event.target.classList.toggle('card__like_active');
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
