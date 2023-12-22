import Card from "./Card.js";
import Validator from "./validator.js";
import IdHandler from "./idHandler.js";
import List from "./List.js";
import Lists from "./lists.js";
import APIController from "./API.js";
import Initializer from "./initializer.js";
import LocalStorageController from "./LocalStorageController.js";
import Clock from "./Clock.js";
import Element from "./Element.js";
import Modal from "./modal.js";


const root = document.querySelector('.body');
const idHandler = new IdHandler();
const lists = new Lists();
const modal = new Modal();
startTime();
const apiController = new APIController();

if (localStorage.length === 0) {
    await apiController.getData();
    const initializer = new Initializer(idHandler, lists, apiController);
    initializer.initializeLists(apiController.getTodos(), apiController.getAuthors());
    LocalStorageController.saveToLocalStorage(lists.getCollection);
} else {
    await apiController.getDataAuthors();
    LocalStorageController.getFromLocalStorage(lists, idHandler);
}






root.addEventListener('click', (event) => {
    let element = event.target;
    console.log(element);
    if (element.classList.contains('add-card-button')) {
        while (!element.classList.contains('field__list-add')) element = element.parentNode;
        Card.showAddingCard(root, element.parentNode, element);
        apiController.setAuthors(root.querySelector('.select-for-card'));
    } else if (Validator.checkNeedOfRemoving(element)) {
        Card.removeShowingCard(root);
    }
    if (element.classList.contains('field__list-cards__card__add')) {
        let element = event.target.parentNode;
        let title = element.querySelector('.title-for-card');
        let description = element.querySelector('.description-for-card');
        let author = element.querySelector('.select-for-card');
        if (Validator.checkAddingCard(title, description)) {
            const listObject = element.parentNode.querySelector('.field__list-cards');
            const listId = element.parentNode.getAttribute('id').substr(5);
            const card = new Card(idHandler.idCards, parseInt(listId), title.value, description.value, author.options[author.selectedIndex].text, new Date());
            card.showCard(listObject);
            const list = lists.getList(parseInt(listId));
            list.addCardToList(card.elementData);
            LocalStorageController.saveToLocalStorage(lists.getCollection);
        }
    }
    if(element.classList.contains('field__list-nav__control')) {
        const list = element.parentNode.parentNode;
        const listId = list.getAttribute('id').substr(5);
        const listEntity = lists.getList(parseInt(listId));
        modal.showListModal(listEntity.name, listEntity.id);
    }
    if(element.classList.contains('field__list-cards-card-control')) {
        const card = element.parentNode;
        const cardId = card.getAttribute('id').substr(5);
        const listId = card.parentNode.parentNode.getAttribute('id').substr(5);
        console.log(listId);
        const cardEntity = lists.getList(parseInt(listId)).getCard(parseInt(cardId)).entity;
        modal.showCardModal(cardEntity.title, cardEntity.description, cardEntity.id, cardEntity);
        apiController.setAuthors(document.querySelector('.modal-input.select'));
    }
    if(element.classList.contains('submit-card')) {
        const { entity, id, newTitle, newDescription, newAuthor } = modal.getCardInfo();
        const list = lists.getList(entity.listId);
        const card = list.getCard(id).entity;
        card.updateInfo(newTitle, newDescription, newAuthor);
        list.addCardToList(card.elementData);
        // entity.updateInfo(newTitle, newDescription, newAuthor);
        lists.printCollection();
        LocalStorageController.saveToLocalStorage(lists.getCollection);
        modal.closeModal();
    }
    if(element.classList.contains('delete-card')) {
        const { entity } = modal.getCardInfo();
        const list = lists.getList(entity.listId);
        list.removeFromTheList(entity.id);
        LocalStorageController.saveToLocalStorage(lists.getCollection);
        modal.closeModal();

    }
    if(element.classList.contains('modal-header-button')) {
        modal.closeModal();
    }
    if(element.classList.contains('delete-all-cards')) {
        const listEntity = lists.getList(parseInt(modal.id));
        console.log(listEntity);
        listEntity.removeAllCardsFromTheList();
        LocalStorageController.saveToLocalStorage(lists.getCollection);
        modal.closeModal();
    }
    if(element.classList.contains('delete-list')) {
        const listEntity = lists.getList(parseInt(modal.id));
        console.log(listEntity);
        listEntity.removeAllCardsFromTheList();
        listEntity.removeList();
        lists.popList(listEntity.id);
        LocalStorageController.removeItemFromLocalStrorage(listEntity.id);
        modal.closeModal();
    }


});



root.addEventListener("mousedown", (event) => {
    let element = event.target;
    if (element.classList.contains('card')) {
        while (!element.classList.contains('field__list-cards__card')) {
            element = element.parentNode;
        }
        const listOfElements = element.parentNode;
        const listsOfElements = document.querySelectorAll('.field__list');
        const listIdToRemove = listOfElements.parentNode.getAttribute('id').substr(5);
        const cardId = parseInt(element.getAttribute('id').substr(5));
        element.classList.add('card_move');
        document.body.append(element);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            element.style.left = pageX - element.offsetWidth / 2 + 'px';
            element.style.top = pageY - element.offsetHeight / 2 + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        element.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            const addingList = Array.from(listsOfElements).find((el) => {
                let coords = el.getBoundingClientRect();
                let coordsElement = element.getBoundingClientRect();
                if (coords.left <= coordsElement.x && coords.right >= coordsElement.x) {
                    return true;
                }
                return false;
            });
            element.classList.remove('card_move');
            element.onmouseup = null;
            if (addingList) {
                const addingListId = addingList.getAttribute('id').substr(5);
                const addingListObject = lists.getList(parseInt(addingListId));
                const removeListObject = lists.getList(parseInt(listIdToRemove));
                addingListObject.addCardToList(removeListObject.getCard(cardId));
                removeListObject.removeFromTheList(cardId);
                addingList.querySelector('.field__list-cards').append(element);
                LocalStorageController.saveToLocalStorage(lists.getCollection);
            } else {
                listOfElements.append(element);
            }
        };

        element.ondragstart = function () {
            return false;
        };
    }
});

root.addEventListener('input', (event) => {
    const element = event.target;
    if(element.classList.contains('field__list-nav__title')) {
        if(element.value.trim().length === "") {
            alert('You need to add title');
            Element.setRedBorder(element);
        } else {
            Element.removeRedBorder(element);
            const newTitle = element.value.trim();
            const listId = element.parentNode.parentNode.getAttribute('id').substr(5);
            const list = lists.getList(parseInt(listId));
            list.setName = newTitle;
            lists.pushList(list.getListInfo());
            LocalStorageController.saveToLocalStorage(lists.getCollection);
        }
    }
})


function startTime() {
    const checkTime = (i) => {
        return i < 10 ? i = '0' + i : i;
    }
    let now = new Date();
    let hours = now.getHours();
    let min = checkTime(now.getMinutes());
    let seconds = checkTime(now.getSeconds());
    document.getElementById('header__clocks__content').textContent = hours + ':' + min + ':' + seconds;  
    setTimeout(startTime, 1000);
}