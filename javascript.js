let myLibrary = [];
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

    console.log(read);

    let book = new Book(book_title, book_author, book_pages, read);
    myLibrary.push(book);

    if (read === true) {
        read = "Read";
    }

    else {
        read = "Not Read";
    }

    const div = document.createElement("div");
    div.className = "book-card";
    div.innerHTML =
    `<h2 class="book-title">${book.title}</h2>
                <p class="author">${book.author}</p>
                <p class="pages">${book.pages}</p>
                <p class="read">${read}`;
    
    books_container.appendChild(div);

    addBooks(myLibrary, books_container);

}

// on button click call addbook function
const add_book_button = document.querySelector("#submit");

add_book_button.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
})