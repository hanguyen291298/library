const library_books = [];

function Book(ttl, aut, n_pages, content) {
    this.title = ttl;
    this.author = aut;
    this.pages = n_pages;
    this.content = content;
    
    
}
const booksContainer = document.querySelector(".books");

Book.prototype.Add_book = function addBookToLibrary() {
    library_books.push({ "title": this.title, "author": this.author, "pages": this.pages, "content": this.content });
}

Book.prototype.Remove_book = function Remove(idx){
    library_books.splice(idx, 1);
    const element_to_remove = booksContainer.querySelector(`[book-index="${idx}"]`)
    booksContainer.removeChild(element_to_remove)
}

const submit = document.getElementById("submit");

let book_title = document.getElementById("title");
let book_author = document.getElementById("author");
let book_pages = document.getElementById("pages");
let book_content = document.getElementById("content")


// Create an effect to open the form to enter book information

const add_form = document.getElementById("add-button");
const form_input = document.getElementById("form");
add_form.addEventListener("click", () => {
    form_input.style.display = "grid";
    form_input.style.position = "absolute";
});


// Create submit function to add the book's information to the library when it is submited

function Submit() {
    // Check if the form is valid (all required fields are filled)
    if (form_input.checkValidity()) {
        
        const index = library_books.length;
        const book = new Book(book_title.value, book_author.value, book_pages.value, book_content.value);
        book.Add_book();

        const child = document.createElement("div");
        child.classList.add("book");
        child.setAttribute("book-index", index)

        const name = document.createElement("h3");
        name.classList.add("title")
        const aut = document.createElement("p");
        aut.classList.add("author")
        const total_pages = document.createElement("h3");
        const main_content = document.createElement("p");
        main_content.classList.add("content")
        const remove = document.createElement("button")
        remove.textContent = "remove";
        remove.classList.add("remove")
        remove.setAttribute("book-index", index)

        

        child.appendChild(name);
        child.appendChild(aut);
        child.appendChild(total_pages);
        child.appendChild(main_content);
        child.appendChild(remove)

        name.innerHTML = `${book.title}`;
        aut.innerHTML = `- ${book.author}`;
        total_pages.innerHTML = `${book.pages} pages`;
        main_content.innerHTML = book.content;
        
        booksContainer.appendChild(child); // Append the new book to the library container

        remove.addEventListener("click", (event)=>{
            const id = event.target.getAttribute("book-index")
            
            book.Remove_book(id)
          
        })
    }    
}

// create event when the submit is clicked or enter key is pressed, the submit function will be called
submit.addEventListener("click", ()=>{
    Submit()   
})

document.addEventListener("keypress", (event=>{
    if (event.key === "Enter"){
        Submit()    
        Cancel()   
    }
}))



// Call the cancel function when it is clicked
const cancel = document.getElementById("cancel")

function Cancel(){
    form_input.reset()
    form_input.style.display = "none"
}

cancel.addEventListener("click", Cancel)
document.querySelector("#form").addEventListener("submit", (evt)=>{
    evt.preventDefault();
    form_input.reset()
    Cancel()
})

