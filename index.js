const library_books = [];
const submit = document.getElementById("add")

function Book(element) {
    // the constructor...
    let child = document.createElement("div")
    child.classList.add("book")
    let title = document.createElement("h3")
    let author= document.createElement("h3")
    let pages = document.createElement("h3")
    let content = document.createElement("p")
    

    title.innerHTML = element.title;
    author.innerHTML = element.author;
    pages.innerHTML = element.pages;
    content.innerHTML = element.content;    
    child.appendChild(title);
    child.appendChild(author);
    child.appendChild(pages);
    child.appendChild(content);
    
    return child

    
  }


const books = document.querySelector(".books")

submit.addEventListener("click", (event)=>{
  books.innerHTML = "";
  addBookToLibrary()
  event.preventDefault()
  library_books.forEach((element)=>{
    books.appendChild(Book(element))
  })
  form_input.style.display = "none";
})


function addBookToLibrary() {
    // do stuff here   
    let title = document.querySelector("#title")
    let author = document.querySelector("#author")
    let pages = document.querySelector("#pages")
    let content = document.querySelector("#content")
    library_books.push({"title": title.value, "author": author.value, "pages": pages.value, "content": content.value}) 
    title.value = ""  ;
    author.value = "";
    console.log(library_books)
}




// create effection to the add book button 
// it should open up the form to enter the information

const add_form = document.getElementById("add-button");
const form_input = document.getElementById("form")

add_form.addEventListener("click", ()=>{
  form_input.style.display = "grid";
  form_input.style.position = "absolute"
})