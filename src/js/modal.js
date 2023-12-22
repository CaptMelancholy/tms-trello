import Element from "./Element.js";
export default class Modal {

    constructor() {
        this.flagList = false;
        this.flagCard = false;
        this.body = document.querySelector('.body');
        this.overlay = document.querySelector('.overlay');
    }

    showCardModal(title, description, id, entity) {
        this.id = id;
        if (this.flagList || this.flagCard)
            return;
        this.flagCard = true;
        this.entity = entity;
        const cardModal = 
        `<section class="modal">
            <div class="modal-header">
                <h3 class="modal-header-title">CARD: ${title}</h3>
                <button class="modal-header-button">⨉</button>
            </div>
            <div class="modal-container">
                <input type="text" class="modal-input title" value="${title}" />
                <input type="text" class="modal-input description" value="${description}" />
                <select class="modal-input select">
                </select>
                <button class="modal-submit submit-card">SUBMIT</button>
                <button class="modal-submit delete-card">DELETE</button>
            </div>
        </section>`;
        this.body.insertAdjacentHTML('afterbegin', cardModal);
        Element.showElement(this.overlay);
    }

    closeModal() {
        if(this.flagList) this.flagList = false;
        if(this.flagCard) this.flagCard = false;
        document.querySelector('.modal').remove();
        Element.hideElement(this.overlay);
    }

    getCardInfo() {
        const modal = document.querySelector('.modal');
        if(this.flagCard) {
            const entity = this.entity;
            const id = this.id;
            const newTitle = modal.querySelector('.modal-input.title').value.trim().toUpperCase();
            const newDescription = modal.querySelector('.modal-input.description').value.trim();
            const author = modal.querySelector('.modal-input.select');
            const newAuthor = author.options[author.selectedIndex].text;
            return { entity, id, newTitle, newDescription, newAuthor };
        } else if(this.flagList) {
            return this.id;
        }
    }

    showListModal(title, id) {
        if (this.flagList || this.flagCard)
            return;
        this.flagList = false;
        this.id = id;
        const cardList = 
        `<section class="modal">
            <div class="modal-header">
                <h3 class="modal-header-title">LIST: ${title}</h3>
                <button class="modal-header-button">⨉</button>
            </div>
            <div class="modal-container">
                <button class="modal-submit delete-list">DELETE</button>
                <button class="modal-submit delete-all-cards">DELETE ALL CARDS</button>
            </div>
        </section>`;
        this.body.insertAdjacentHTML('afterbegin', cardList);
        Element.showElement(this.overlay);
    }

    closeListModal() {
        document.querySelector('.modal').remove();
        Element.hideElement(this.overlay);
    }

}