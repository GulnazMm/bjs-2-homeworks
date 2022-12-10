class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        console.log(this.state * 1.5);
    }

    set state(number) {
        if (number < 0) {
            this.state = 0;
        }
        if (number > 100) {
            this.state = 100;
        } else this.state = number;
    }
    get state() {
        return this.state;
    }

}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author, type) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author, type) {
        super(name, releaseDate, pagesCount, author, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author, type) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "detective";
    }

}


class Library {
    constructor(name) {
        this.name = "name";
        this.books = [];
    }
    addBook(book) {
        if (this.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let searchBook = 0;
        if (this.books.find(element => element.type === value)) {
            searchBook = element;
        } return null;
    }
    giveBookByName(bookName) {
        let result;
        if (this.books.findIndex((book) => book.bookName === bookName)); {
            result = bookName
        } return null;
        this.books.splace(result);
    }
}

