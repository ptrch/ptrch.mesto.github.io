class CardPopup extends Popup {
    constructor(openButton, closeButton, namePopup, container, form, cardList, createCard) {

        super(openButton, closeButton, namePopup, container);
        this.form = form;
        this.cardList = cardList;
        this.createCard = createCard;

    }
    addNewCard(event) {
        const name = this.form.elements.name;
        const link = this.form.elements.link;
        this.cardList.addCard(this.createCard(name.value, link.value).create());
        event.preventDefault();
    }
    setEventListeners() {
        this.form.addEventListener('input', () => {
            if (this.form.elements.name.value.length === 0 || this.form.elements.link.value.length === 0) {
                this.form.elements.button.setAttribute('disabled', true);
                this.form.elements.button.classList.remove('popup__button_enabled');
            } else {
                this.form.elements.button.removeAttribute('disabled');
                this.form.elements.button.classList.add('popup__button_enabled');
            }
        });
        this.form.addEventListener('submit', (event) => {
            this.addNewCard(event);
            this.popupClose();

        });
        this.openButton.addEventListener('click', () => {
            this.form.elements.button.setAttribute('disabled', true);
            this.form.elements.button.classList.remove('popup__button_enabled');
        });
        this.openButton.addEventListener('click', () => {
            this.popupOpen();
        });
        this.closeButton.addEventListener('click', () => {
            this.popupClose();

        });
        /*
         Можно лучше:
         - Логику открытия и закрытия попапа CardPopup должен наследовать из Popup.
         Прочитать про super https://webdevblog.ru/chto-takoe-super-v-javascript/
        */
        this.container.addEventListener('keydown', (evt) => {
            if (evt.keyCode == '27' && this.namePopup.closest(".popup_is-opened")) {
            /*
             Можно лучше:
             - использовать === вместо == для избежания проблем с типами
            */
                this.popupClose();
            }
        });
    }
}

