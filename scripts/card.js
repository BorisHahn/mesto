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
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    const cardTemplate = document
    .querySelector('#card')
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
    this._element.querySelector('.card__like').addEventListener('click', () => {this._activeLikes()});
    this._element.querySelector('.card__delete').addEventListener('click', () => {this._deleteCard()});
    this._element.querySelector('.card__image').addEventListener('click', () => openImageFullscreen(this._name, this._link));
  }

  _activeLikes(event) {
    event.target.classList.toggle('card__like_active');
  }

  _deleteCard(event) {
    event.target.closest(".card").remove();
  }

  _openImageFullscreen() {
    imageView.src = this._link;
    imageView.alt = this._name;
    figcaption.textContent = this._name;
    openPopup(imagePopup);
  }
}

export {initialCards, Card};