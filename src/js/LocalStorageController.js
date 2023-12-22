import List from "./List.js";
import Card from "./Card.js";

export default class LocalStorageController {
    static saveToLocalStorage(lists) {
        lists.forEach((value, key, map) => {
            const { id, name, cards} = value;
            const array = Array.from(cards.values());
            localStorage.setItem(key, JSON.stringify({id:id, name: name, cards: array }));    
        });
    }

    static removeItemFromLocalStrorage(id) {
        localStorage.removeItem(id);
    }

    static getFromLocalStorage(lists, idHandler) {
        if(localStorage.length !== 0) {
            let localStorageData = [];
            for(let key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) {
                  continue; 
                }
                localStorageData.push(JSON.parse(localStorage.getItem(key)));
            }
            localStorageData.reverse();
            localStorageData.forEach(element => {
                const { id, name, cards } = element;
                const list = new List(name, idHandler.idLists);
                list.addList();
                lists.pushList(list.getListInfo());
                const listsField = list.element;
                const listOfCards = listsField.querySelector('.field__list-cards');
    
                cards.forEach(element => {
                    const { title, description, author, time } = element;
                    const card = new Card(idHandler.idCards, list.id, title, description, author, time);
                    card.showCard(listOfCards);
                    list.addCardToList(card.elementData);
                });
            });
        }
       
    }
}