import Element from "./Element.js";

export default class Validator {

    static checkNeedOfRemoving(element) {
        if(element.classList.contains('field__list-cards__card__add') || element.classList.contains('field__list-cards__adding-card') || element.classList.contains('title-for-card') || element.classList.contains('description-for-card') || element.classList.contains('select-for-card') || element.parentNode.classList.contains('select-for-card')) {
            return false;
        }
        return true;
    }

    static checkAddingCard(title, description) {
        if(title.value === "" || description.value === "") {
            title.value === "" ? Element.setRedBorder(title) : Element.removeRedBorder(title);
            description.value === "" ? Element.setRedBorder(description) : Element.removeRedBorder(description);
            return false;
        }
        return true;
    }
}