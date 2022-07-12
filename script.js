let myLibrary = [{title: 'The Hunger Games', author: 'Suzanna Collins', pages: 374, status: true},{title: 'Catching Fire', author: 'Suzanna Collins', pages: 391, status: false}];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    info() {
        let haveRead = (this.status) ? 'already finished':'not read yet';
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + haveRead;
    }
}

function addBookToLibrary() {

}

function createTable(myLibrary) {
    for (let i=0; i<Object.keys(myLibrary).length; i++) {
        const tr = document.createElement('tr');
        for (let key in myLibrary) {
            
        }
    }
}