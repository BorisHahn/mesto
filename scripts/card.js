import openImageFullscreen from './index.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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
    this._setEventListeners();
    const cardImage = this._element.querySelector('.card__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', (event) => {this._activeLikes(event)});
    this._element.querySelector('.card__delete').addEventListener('click', () => {this._deleteCard()});
    this._element.querySelector('.card__image').addEventListener('click', () => {this._openImgPopup()});
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
