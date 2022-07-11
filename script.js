class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        let haveRead = (this.read) ? 'already finished':'not read yet';
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + haveRead;
    }
}

const hungerGames = new Book('The Hunger Games', 'Suzanna Collins', 374, true);

console.log(hungerGames);
console.log(hungerGames.info());