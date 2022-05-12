let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__container');
let nameInput = popupForm.querySelector('.popup__container__nameInput');
let jobInput = popupForm.querySelector('.popup__container__jobInput');
let profileName = document.querySelector('.profile__info-title__name');
let profileJob = document.querySelector('.profile__info_description');
let editButton = document.querySelector('.profile__info-title__editButton');

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
  document.querySelectorAll('.elements-item__like').forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        item.style.backgroundImage = "url('./imges/like.svg')";
      }
      else {
        item.classList.add("active");
        item.style.backgroundImage = "url('./imges/likeActive.svg')";
      }
    });
  });
}

activeLikes ();
