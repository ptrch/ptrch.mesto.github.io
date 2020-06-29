class Card {
    constructor(name, link, popup) {
        this.name = name;
        this.link = link;
        this.popup = popup;
        // this.cardElem = null;
    }
    create() {
        const placeCard = document.createElement('div');
        const image = document.createElement('div');
        const deleteButton = document.createElement('button');
        const description = document.createElement('div');
        const cardName = document.createElement('h3');
        const likeButton = document.createElement('button');

        placeCard.classList.add('place-card');
        image.classList.add('place-card__image');
        deleteButton.classList.add('place-card__delete-icon');
        description.classList.add('place-card__description');
        cardName.classList.add('place-card__name');
        likeButton.classList.add('place-card__like-icon');

        placeCard.appendChild(image);
        placeCard.appendChild(description);
        image.appendChild(deleteButton);
        description.appendChild(cardName);
        description.appendChild(likeButton);
        this.cardElem = placeCard;
        cardName.textContent = this.name;
        image.style.backgroundImage = `url(${this.link})`;
        this.buttonLike = likeButton;
        this.buttonDelete = deleteButton;
        this.image = image;
        this.setEventListeners();

        return placeCard;
    }


    like() {
        this.buttonLike.classList.toggle('place-card__like-icon_liked');
    }


    deleteCard() {
        this.cardElem.remove();
    }

    setEventListeners() {
        this.buttonLike.addEventListener('click', () => this.like());
        this.buttonDelete.addEventListener('click', () => this.deleteCard());
        this.image.addEventListener('click', (event) => {
            if (event.target.classList.contains('place-card__image')) {
            this.popup.zoomImage(event);
            }
        });
        
        
    }
}

