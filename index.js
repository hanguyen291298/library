const library_books = [];

function Book(ttl, aut, n_pages, content) {
    this.title = ttl;
    this.author = aut;
    this.pages = n_pages;
    this.content = content;
}

Book.prototype.Add_book = function addBookToLibrary() {
    library_books.push({ "title": this.title, "author": this.author, "pages": this.pages, "content": this.content });
}

const booksContainer = document.querySelector(".books");

const submit = document.getElementById("submit");
const bookForm = document.getElementById("form"); // Select the form element

function Submit() {
    // Check if the form is valid (all required fields are filled)
    if (form_input.checkValidity()) {
        const book_title = document.getElementById("title").value;
        const book_author = document.getElementById("author").value;
        const book_pages = document.getElementById("pages").value;
        const book_content = document.getElementById("content").value;

        const book = new Book(book_title, book_author, book_pages, book_content);
        book.Add_book();

        const child = document.createElement("div");
        child.classList.add("book");

        const name = document.createElement("h3");
        const aut = document.createElement("h3");
        const total_pages = document.createElement("h3");
        const main_content = document.createElement("h4");

        child.appendChild(name);
        child.appendChild(aut);
        child.appendChild(total_pages);
        child.appendChild(main_content);

        name.innerHTML = book.title;
        aut.innerHTML = book.author;
        total_pages.innerHTML = book.pages;
        main_content.innerHTML = book.content;

        booksContainer.appendChild(child); // Append the new book to the library container
    }
    
}

submit.addEventListener("click", Submit)
const add_form = document.getElementById("add-button");
const form_input = document.getElementById("form");
document.querySelector("#form").addEventListener("submit", (evt)=>{
    evt.preventDefault();
})


// Create an effect to open the form to enter book information

add_form.addEventListener("click", () => {
    form_input.style.display = "grid";
    form_input.style.position = "absolute";
});
