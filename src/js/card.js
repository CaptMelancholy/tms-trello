import Element from "./Element.js";
export default class Card extends Element {


  constructor(id, listId, title, description, author, time) {
    super(undefined);
    this.id = id;
    this.listId = listId;
    this.title = title;
    this.description = description;
    this.author = author;
    if (typeof time === "string") {
      this.time = time;
    } else {
      this.time = time.toLocaleString('default', { month: 'long' }) + ', ' + this.checkTime(time.getDate()) + ' ' + this.checkTime(time.getHours()) + ':' + this.checkTime(time.getMinutes()) + ':' + this.checkTime(time.getSeconds());
    }
  }

  removeCard() {
      this.element.remove();
  }

  checkTime = (i) => {
    return i < 10 ? i = '0' + i : i;
  }
  get elementData() {
    return { entity: this, id: this.id, title: this.title, description: this.description, author: this.author, time: this.time, element: this.element }
  }

  updateInfo(title, description, author) {
    this.element.querySelector('.field__list-cards__card-info-title').textContent = title;
    this.element.querySelector('.field__list-cards__card-info-description').textContent = description;
    this.element.querySelector('.field__list-cards__card-footer-user').textContent = author;
    this.title = title;
    this.description = description;
    this.author = author;
  }

  showCard(list) {
    list.insertAdjacentHTML('beforeend', `
                <div id="card_${this.id}" class="field__list-cards__card card">
                  <div class="field__list-cards__card-identificators">
                  </div>
                  <button class="field__list-cards-card-control">
                    ***
                  </button>
                  <div class="field__list-cards__card-info card">
                    <p class="field__list-cards__card-info-title card">
                      ${this.title}
                    </p>
                    <p class="field__list-cards__card-info-description card">
                      ${this.description}
                    </p>
                  </div>
                  <div class="field__list-cards__card-footer card">
                    <p class="field__list-cards__card-footer-user card">
                      ${this.author}
                    </p>
                    <p class="field__list-cards__card-footer-time card">
                      ${this.time}
                    </p>
                  </div>
                </div>
        `);
    this.element = list.querySelector('#card_' + this.id);
    Card.removeShowingCard(document.querySelector('.body'));
  }
  static showAddingCard(root, element, button) {
    this.removeShowingCard(root);
    const addingCard =
      `<div class="field__list-cards__adding-card">
            <input type="text" placeholder="Title for this card" class="title-for-card"/>
            <input type="text" placeholder="Description for this card" class="description-for-card" />
            <select class="select-for-card"></select>
            <button class="field__list-cards__card__add">
                Add Card
            </button>
        </div>`

    element.insertAdjacentHTML('beforeend', addingCard);
    Element.hideElement(button);
  }
  static removeShowingCard(root) {
    const addingCards = root.querySelectorAll('.field__list-cards__adding-card');
    const addButtons = root.querySelectorAll('.field__list-add');
    Array.from(addingCards).forEach((element) => element.remove());
    Array.from(addButtons).forEach((element) => Element.showElement(element));
  }
}