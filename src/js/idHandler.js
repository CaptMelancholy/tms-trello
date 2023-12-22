export default class IdHandler {
    #idLists = 0;
    #idCards = 0;

    constructor() {
        
    }

    get idLists() {
        this.#idLists++;
        return this.#idLists;
    }

    get idCards() {
        this.#idCards++;
        return this.#idCards;
    }

    get currentMaximumIdList() {
        return this.#idLists;
    }

}