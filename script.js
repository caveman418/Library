const addBookButton = document.querySelector('.add-book');
const confirmNewBook = document.querySelector('.submit');
const exitNewBook = document.querySelector('.exit');

let myLibrary = [{title: 'The Hunger Games', author: 'Suzanna Collins', pages: 374, status: 'Not Read'},{title: 'Catching Fire', author: 'Suzanna Collins', pages: 391, status: 'Not Read'}];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    info() { //outdated, when project is revisited this will have a use
        let haveRead = (this.status) ? 'already finished':'not read yet';
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + haveRead;
    }
}

addBookButton.addEventListener('mousedown', () => openForm());

exitNewBook.addEventListener('mousedown', () => closeForm());

confirmNewBook.addEventListener('mousedown', () => {
	addBookToLibrary();
	createTable(myLibrary);
	closeForm();
});

function addBookToLibrary() {
	const titleInput = document.getElementById('title');
	const authorInput = document.getElementById('author');
	const pagesInput = document.getElementById('pages');
	
	const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, 'Not Read');
	
	titleInput.value = ''; //reset the inputs for when the form gets opened again
	authorInput.value = '';
	pagesInput.value = '';
	
	myLibrary.push(newBook);
}

function createTable(myLibrary) {
	const tbody = document.querySelector('tbody');
	
	tbody.textContent = ''; //clear table before reinitializing
	
	const buttonArray = ['status','delete'];
	
	myLibrary.forEach((obj,i) => {
		const tr = document.createElement('tr');
		
        for (let key in obj) {
            const td = document.createElement('td');
            td.textContent = `${obj[key]}`;
            tr.appendChild(td);
        }
		
		for (let btn of buttonArray) {
			const td = document.createElement('td');
			const button = document.createElement('button');
			button.setAttribute('type','button');
			button.setAttribute('class',`small ${btn}`);
			button.id = `${btn}-book-${i+1}`; //not used, but will be re-evaluated when the project is revisited
			if (btn==='status') {
				button.textContent = 'MARK READ';
				button.addEventListener('click',() => {
					button.classList.toggle('complete');
					button.textContent = (button.classList.contains('complete')) ? 'MARK UNREAD':'MARK READ';
					button.parentElement.previousSibling.textContent = (button.classList.contains('complete')) ? 'Read':'Unread'; //changes status column for the current row
				});
			} else {
				button.textContent = 'DELETE';
				button.addEventListener('click',() => {
					button.parentElement.parentElement.textContent = ''; //the button's parent element is the <td> it's in, then that parent is the <tr> so that's getting wiped
				});
			}
			td.appendChild(button);
			tr.appendChild(td);
		}

		tbody.appendChild(tr);
	});
}

function openForm() {
	document.querySelector('.form-popup').style.display = 'block';
}

function closeForm() {
	document.querySelector('.form-popup').style.display = 'none';
}

createTable(myLibrary); //run function once to display default books when page is loaded