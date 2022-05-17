const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup-add');
const closeButton = popup.querySelector('.popup__close');
const closeButtonAdd = popupAdd.querySelector('.popup-add__close');
const popupForm = document.querySelector('.popup__container');
const popupFormAdd = document.querySelector('.popup-add__container');
const nameInput = popupForm.querySelector('.popup__name-input');
const nameInputAdd = popupFormAdd.querySelector('.popup-add__name-input');
const jobInput = popupForm.querySelector('.popup__job-input');
const linkInput = popupFormAdd.querySelector('.popup-add__link-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const cards = document.querySelector('.cards');
const cardsItem = cards.querySelectorAll('.cards-item');
let initialCards = [
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
    name: 'Эльбрус',
    link: './imges/elbrus.png'
  },
  {
    name: 'Карачаевск',
    link: './imges/dombay.png'
  },
  {
    name: 'Грозный',
    link: './imges/karachaevsk.png'
  }
];

function createCard(name, link, i) {
  return cards.innerHTML += `
    <li class="cards-item">
      <img class="cards-item__image" src=${link} alt="${name}">
      <h2 class="cards-item__title">${name}</h2>
      <button class="cards-item__like" type="button" aria-label="Лайк"></button>
      <button class="cards-item__delete" type="button" aria-label="Удалить" item-num="${i}"></button>
    </li>
  `;
}

function createCards() {
  cards.innerHTML = "";
  initialCards.forEach((item, i) => {
    createCard(item.name, item.link, i);
  });
  initDeleteEvents();
  activeLikes();
}

createCards();

function formSubmitHandler(e) {
  e.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

function addFormSubmitHandler(e) {
  e.preventDefault(); 
  addCardsItem(nameInputAdd.value, linkInput.value);
  createCards();
  nameInputAdd.value = "";
  linkInput.value = "";
  popupAdd.classList.remove('popup_opened');
}

function addCardsItem(inputName, inputLink) {
  initialCards.unshift({
    name: inputName,
    link: inputLink
  });
}

function activeLikes() {
  cards.querySelectorAll('.cards-item__like').forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.style.backgroundImage = 'url("./imges/like.svg")';
      }
      else {
        item.classList.add('active');
        item.style.backgroundImage = 'url("./imges/likeActive.svg")';
      }
    });
  });
}

function initDeleteEvents() {
  cards.querySelectorAll('.cards-item__delete').forEach(item => {
    item.addEventListener('click', () => {
    const num = parseInt(item.getAttribute('item-num'));
    initialCards.splice(num, 1);
    createCards();
    });
  });
}

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('popup_opened');
});

closeButtonAdd.addEventListener('click', (e) => {
  e.preventDefault();
  popupAdd.classList.remove('popup-add_opened');
});

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  popupAdd.classList.add('popup-add_opened');
});

editButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

popupForm.addEventListener('submit', formSubmitHandler);
popupFormAdd.addEventListener('submit', addFormSubmitHandler);
  