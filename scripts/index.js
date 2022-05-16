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

function createCardsItem(name, link) {
  return cards.innerHTML += `
    <li class="cards-item">
      <img class="cards-item__image" src=${link} alt="${name}">
      <h2 class="cards-item__title">${name}</h2>
      <button class="cards-item__like" type="button" aria-label="Лайк"></button>
      <button class="cards-item__delete" type="button" aria-label="Удалить"></button>
    </li>
  `;
}
initialCards.forEach(item => {
  createCardsItem(item.name, item.link);
});

function formSubmitHandler(e) {
  e.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  hidePopup(popup);
}

function addFormSubmitHandler(e) {
  e.preventDefault(); 
  addCardsItem(nameInputAdd.value, linkInput.value);
  cards.innerHTML = "";
  initialCards.forEach(item => {
    createCardsItem(item.name, item.link);
  });
  hidePopup(popupAdd);
  deleteCardsItem();
  activeLikes();
  nameInputAdd.value = "";
  linkInput.value = "";
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

activeLikes ();

function addCardsItem(inputName, inputLink) {
  initialCards.unshift({
    name: inputName,
    link: inputLink
  });
}

function deleteCardsItem() {
  cards.querySelectorAll('.cards-item__delete').forEach(item => {
    item.addEventListener('click', (e) => {
    const target = e.target;
    target.parentNode.remove();
    });
  });
}

deleteCardsItem();

function showPopup(elem) {
  if (elem.classList.contains('appear')) {
    elem.classList.remove('appear');
    elem.classList.add('fade');
  }
  else {
    elem.classList.add('fade');
  }
}

function hidePopup(elem) {
  elem.classList.remove('fade');
  elem.classList.add('appear');
  elem.style.display = 'none';
}

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('popup_opened');
  hidePopup(popup);
});

closeButtonAdd.addEventListener('click', (e) => {
  e.preventDefault();
  popupAdd.classList.remove('popup-add_opened');
  hidePopup(popupAdd);
});

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  popupAdd.classList.add('popup-add_opened');
  showPopup(popupAdd);
  popupAdd.style.display = 'flex';
});

editButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('popup_opened');
  showPopup(popup);
  popup.style.display = 'flex';
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

popupForm.addEventListener('submit', formSubmitHandler);
popupFormAdd.addEventListener('submit', addFormSubmitHandler);
  