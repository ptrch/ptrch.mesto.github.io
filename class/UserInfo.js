class UserInfo {
    constructor(nameUser, jobUser, form, popup) {
        this.nameUser = nameUser;
        this.jobUser = jobUser;
        this.form = form;
        this.popup = popup;
       

    }
    setUserInfo = (nameUser, jobUser) => {
        this.form.elements.name.value = nameUser.textContent;
        this.form.elements.about.value = jobUser.textContent;
    }

    updateUserInfo = (event) => {
        this.nameUser.textContent = this.form.elements.name.value;
        this.jobUser.textContent = this.form.elements.about.value;
        // запрет на перезагрузку окна
        event.preventDefault();

    }

    
    setEventListeners() {
        this.popup.openButton.addEventListener('click', () => {
            this.setUserInfo(this.nameUser, this.jobUser);
        });


        this.form.addEventListener('submit', (event) => {
            this.updateUserInfo(event);
           
            
        });

        
    }
}
