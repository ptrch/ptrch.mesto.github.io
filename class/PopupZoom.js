class PopupZoom {
    constructor(open, close, namePopup, container) {
        this.open = open;
        this.close = close;
        this.namePopup = namePopup;
        this.container = container;

    }
    
    popupOpen() {
        this.namePopup.classList.add("popup_is-opened");

    }
    popupClose() {
        this.namePopup.classList.remove("popup_is-opened");
    }
    zoomImage(event) {
        const imageSrc = this.namePopup.querySelector('.popup__image');
        let backgrImg = event.target.style.backgroundImage;
        backgrImg = backgrImg.slice(5, backgrImg.length - 2);
        imageSrc.src = backgrImg;
        this.popupOpen();
    }

    setEventListeners() {
        this.close.addEventListener('click', () => {
            this.popupClose();
        });

        this.container.addEventListener('keydown', (evt) => {
            if (evt.keyCode == '27' &&  this.namePopup.closest(".popup_is-opened")) {
                this.popupClose();
            }
        });

    }


}
