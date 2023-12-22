import Element from "./Element.js";

export default class List extends Element {
    #cardsList = new Map();

    get getCardsList() {
        return this.#cardsList;
    }

    constructor(name, id) {
        super(undefined);
        this.name = name;
        this.id = id;
    }

    set setName(name) {
        this.name = name;
    }

    addCardToList(card) {
        this.#cardsList.set(card.id, card);
    }

    getCard(id) {
        return this.#cardsList.get(id);
    }

    removeFromTheList(id) {
        this.#cardsList.get(id).entity.removeCard();
        this.#cardsList.delete(id);
    }

    removeList() {
        this.element.remove();
    }

    removeAllCardsFromTheList() {
        this.#cardsList.forEach((values, keys, map) => {
            values.entity.removeCard();
            map.delete(keys);
        }) 
    }

    getListInfo() {
        return { entity: this, id: this.id, name: this.name, element: this.element, cards: this.#cardsList }
    }

    addList() {
        const root = document.querySelector('#root');
        root.insertAdjacentHTML('beforeend', `
        <div id="list_${this.id}" class="field__list">
            <div class="field__list-nav">
                <input
                type="text"
                class="field__list-nav__title"
                value="${this.name}"
                />
                <button class="field__list-nav__control">
                ***
                </button>
            </div>
            <div class="field__list-cards"></div>
            <button class="field__list-add add-card-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="add-card-button"
                >
                    <mask
                    id="mask0_4_70"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    >
                    <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_4_70)">
                    <path
                        d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z"
                        fill="#49454E"
                    />
                    </g>
                </svg>
                <p class="field__add-button__button-title add-card-button">Add a card</p>
                </button>
        </div>
        `);
        this.element = root.querySelector("#list_" + this.id);
    }


}