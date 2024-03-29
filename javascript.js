let myLibrary = [];
let bookCount = 0;
const books_container = document.querySelector(".books-container");

function Book(title, author, pages, read) {
    this.title = title; // string
    this.author = author; // string
    this.pages = pages; // int
    this.read = read; // bool
}

document.querySelector(".form-container").style.display = "none";
document.getElementById("book-form").style.display = "none";
document.querySelector(".overlay").style.display = "none";

const add_book = document.querySelector("#add-book");
add_book.addEventListener("click", () => {
    openForm();
})

function openForm() {
    document.querySelector(".form-container").style.display = "flex";
    document.querySelector(".form-container").style.position = "fixed";
    document.getElementById("book-form").style.display = "flex";
    document.querySelector(".overlay").style.display = "block";

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".form-container") && event.target !== add_book) {
            closeForm();
        }
    })
}

function closeForm() {
    document.querySelector(".form-container").style.display = "none";
    document.getElementById("book-form").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
    document.getElementById("book-form").reset();
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
    <p class="pages">${book.pages} pages</p>
    <button class="read">${read}</button>
    <button class="remove">Remove</button>`;
    
    books_container.appendChild(div);

    const read_buttons = document.querySelectorAll(".read");

    read_buttons.forEach(button => {
        if (button.textContent === "Not Read") {
            button.classList.remove("read");
            button.classList.add("not-read");
        }
        button.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            if (button.textContent === "Read") {
                button.textContent = "Not Read";
                button.classList.remove("read");
                button.classList.add("not-read");
            }

            else if (button.textContent === "Not Read") {
                button.textContent = "Read";
                button.classList.remove("not-read");
                button.classList.add("read");
            }
            console.log(button.className);
        })
    })

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
    if (checkValid() === true) {
        addBookToLibrary();
        closeForm();
    }
})

function checkValid() {
    let valid = false;
    let inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        switch (input.type) {
            case "text":
                if (input.value === "") {
                    valid = false;
                }

                else {
                    valid = true;
                }

            case "number":
                if (input.value <= 0) {
                    valid = false;
                }

                else {
                    valid = true;
                }
            
            case "checkbox":
                if (valid) {
                    valid = true;
                }
            }
    })

    return valid;
}