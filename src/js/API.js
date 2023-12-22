export default class APIController {

    async getData() {
        try {
            this.todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());
            this.users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
        } catch (error) {
            console.log(error);
        }

    }

    async getDataAuthors() {
        try {
            this.users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
        } catch (error) {
            console.log(error);
        }
        
    }


    getRandomList(maxId) {
        return this.getRandomIntInclusive(1, maxId);
    }

    getRandomAuthor() {
        const authorId = this.getRandomIntInclusive(0, Array.from(this.users).length - 1);
        const author = Array.from(this.users).at(authorId);
        const { name } = author;
        return name;
    }

    getAuthors() {
        return Array.from(this.users);
    }

    setAuthors(select) {
        Array.from(this.users).forEach((value, index) => {
            const option = document.createElement('option');
            option.value = index.toString();
            const { name } = value;
            option.text = name;
            select.add(option, select.options[index]);
        })
    }

    getTodos(authors) {
        return Array.from(this.todos);
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}