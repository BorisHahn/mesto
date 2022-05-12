let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__container');
let nameInput = popupForm.querySelector('.popup__container__nameInput');
let jobInput = popupForm.querySelector('.popup__container__jobInput');
let profileName = document.querySelector('.profile__info_name');
let profileJob = document.querySelector('.profile__info_description');
let closeButton = popup.querySelector('.popup__close');
//при нажатии на иконку закрытия - скрываю попап
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.remove('popup_opened');
      popup.style.display = 'none';
    })
let editButton = document.querySelector('.profile__info_editButton');
//  при нажатии на иконку редактирования открываю попап и получаю значения в инпуты
    editButton.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('popup_opened');
        popup.style.display = 'flex';
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
      }
    )

//функция редактирования данных на главной странице при нажатии на кнопку "Сохранить"
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
    popup.style.display = 'none';
}
    popupForm.addEventListener('submit', formSubmitHandler);


//Активация лайков по клику
function activeLikes () {
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
    })
  })
}
activeLikes ();