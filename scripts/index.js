const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__container');
const nameInput = popupForm.querySelector('.popup__name-input');
const jobInput = popupForm.querySelector('.popup__job-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const editButton = document.querySelector('.profile__edit-button');

function formSubmitHandler(e) {
  e.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  hidePopup();
}

function hidePopup() {
  popup.classList.remove('popup_opened');
  popup.style.display = 'none';
}

function activeLikes() {
  document.querySelectorAll('.cards-item__like').forEach(item => {
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

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  hidePopup();
});

editButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('popup_opened');
  popup.style.display = 'flex';
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

popupForm.addEventListener('submit', formSubmitHandler);
