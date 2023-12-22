export default class Element {
    #element = undefined;

    constructor(element) {
        this.#element = element;
    }

    get getElement() {
        return this.#element;
    }

    set setElement(value) {
        this.#element = value;
    } 
    
    static hideElement(element) {
        element.classList.add('hide');
    }
    
    static showElement(element) {
        element.classList.remove('hide');
    }

    static setRedBorder(element) {
        element.classList.add('red-border');
    }

    static removeRedBorder(element) {
        element.classList.remove('red-border');
    }
}