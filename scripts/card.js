import {openImageFullscreen} from './index.js';

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
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', (event) => {this._activeLikes(event)});
    this._element.querySelector('.card__delete').addEventListener('click', (event) => {this._deleteCard(event)});
    this._element.querySelector('.card__image').addEventListener('click', () => {this._openImgPopup()});
  }

  _activeLikes(event) {
    event.target.classList.toggle('card__like_active');
  }

  _deleteCard(event) {
    event.target.closest(".card").remove();
  }

  _openImgPopup() {
    openImageFullscreen(this._name, this._link);
  }
  
}

export {initialCards, Card};