export default class Lists {
    #collectionOfLists = new Map();

    pushList(list) {
        this.#collectionOfLists.set(list.id, list);
    }

    popList(id) {
        this.#collectionOfLists.delete(id);
    }

    getList(id) {
        return this.#collectionOfLists.get(id).entity;
    }

    get getCollection() {
        return this.#collectionOfLists;
    }

    printCollection() {
        console.log(this.#collectionOfLists);
    }
}