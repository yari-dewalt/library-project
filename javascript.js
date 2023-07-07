let myLibrary = [];
let bookCount = 0;
const books_container = document.querySelector(".books-container");

function Book(title, author, pages, read) {
    this.title = title; // string
    this.author = author; // string
    this.pages = pages; // int
    this.read = read; // bool
}

function addBookToLibrary() {
    let book_title = document.querySelector("#book-title").value;
    let book_author = document.querySelector("#book-author").value;
    let book_pages = document.querySelector("#book-pages").value;
    let read = document.querySelector("#read").checked;

    let book = new Book(book_title, book_author, book_pages, read);
    myLibrary.push(book);

    bookCount++;

    if (read === true) {
        read = "Read";
    }

    else {
        read = "Not Read";
    }

    const div = document.createElement("div");
    div.className = "book-card";
    div.id = `book-${bookCount}`;
    div.innerHTML =
    `<h2 class="book-title">${book.title}</h2>
    <p class="author">${book.author}</p>
    <p class="pages">${book.pages}</p>
    <p class="read">${read}</p>
    <button class="remove" id="${bookCount}">Remove</button>`;
    
    books_container.appendChild(div);

    let remove_buttons = document.querySelectorAll(".remove");

    remove_buttons.forEach(button => {
        button.addEventListener("click", () => {         
            currentBook = button.parentElement;
            books_container.removeChild(currentBook);
        })
    })
}

const submit_button = document.querySelector("#submit");

submit_button.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
})