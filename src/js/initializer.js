import IdHandler from "./idHandler.js";
import Lists from "./lists.js";
import List from "./List.js";
import APIController from "./API.js";
import Card from "./Card.js";

export default class Initializer {
    constructor(handler, lists, apiController) {
        this.handler = handler;
        this.lists = lists;
        this.apiController = apiController;
        const defaultList1 = new List("TO-DO", this.handler.idLists);
        const defaultList2 = new List("IN PROGRESS", this.handler.idLists);
        const defaultList3 = new List("COMPLITED", this.handler.idLists);
        defaultList1.addList();
        defaultList2.addList();
        defaultList3.addList();
        this.lists.pushList(defaultList1.getListInfo());
        this.lists.pushList(defaultList2.getListInfo());
        this.lists.pushList(defaultList3.getListInfo());
    }

    initializeLists(todos) {
        if(localStorage.length === 0) {
            todos.forEach(element => {
                const { title } = element;
                const listId = this.apiController.getRandomList(this.handler.currentMaximumIdList);
                const card = new Card(this.handler.idCards, listId, title, title, this.apiController.getRandomAuthor(), new Date());
                
                const randomList = document.querySelector('#list_' + listId);
                const randomListField = randomList.querySelector('.field__list-cards');
                card.showCard(randomListField);
                const list = this.lists.getList(listId);
                list.addCardToList(card.elementData);
            });
        }
    }
}