const root = document.querySelector('.root');
const imageESC = document.querySelector('.popup__content-image');
const nameUser = document.querySelector('.user-info__name')
const jobUser = document.querySelector('.user-info__job')
const placeList = document.querySelector('.places-list');
const popupAddPicture = document.querySelector('#popup_add_picture');
const popupUser = document.querySelector('#popup_user');
const popupZoom = document.querySelector('#popup-image');
const formPicture = popupAddPicture.querySelector('.popup__form');
const formName = popupUser.querySelector('.popup__form');
const buttonUser = document.querySelector('.user-info__button_edit');
const buttonOpenPicture = document.querySelector('.user-info__button');
const buttonCloseName = popupUser.querySelector('.popup__close');
const buttonClosePicture = popupAddPicture.querySelector(".popup__close");
const popupCloseZoom = popupZoom.querySelector(".popup__close");

const openZoom = new PopupZoom(placeList, popupCloseZoom, popupZoom, document);

const createCard = (...arg) => new Card(...arg, openZoom);

const cardList = new CardList(placeList, initialCards, createCard);
cardList.render();

const popupUserClass = new Popup(buttonUser, buttonCloseName, popupUser, root);
popupUserClass.setEventListeners();

const user = new UserInfo(nameUser, jobUser, formName, popupUserClass)
user.setEventListeners();

const newCard = new CardPopup(buttonOpenPicture, buttonClosePicture, popupAddPicture, root, formPicture, cardList, createCard)
newCard.setEventListeners();

openZoom.setEventListeners();

const validator = new FormValidator(formName, errorMessages, popupUserClass);
validator.setEventListeners();

/*
 Что понравилось:
 - Код структурирован
 - Используются все классы
 Можно лучше:
 - Разобраться с правильным наследованием классов
*/
