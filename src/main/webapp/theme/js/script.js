const apihost = "http://localhost:8080/books";
let booksDiv = document.getElementById("booksDiv");
let listBooksButton = document.getElementById("listBooks");

function apiListBooks(){
    return fetch(apihost,{
        method : 'GET'
    }).then(function (resp){
        if(!resp.ok){
            alert("Something went wrong")
        }
        return resp.json();
    })
}

function apiDeleteBook(id){
    let resource = `/${id}`;
    return fetch(apihost+resource,{
        method: "DELETE"
    }).then(function (resp){
        if(!resp.ok){
            alert("Something went wrong")
        }
        return resp.json();
    })
}

function renderBook(book){
    booksDiv.appendChild(createBookDiv(book));
}

function createInfoDiv(){
    let infoDiv = document.createElement("div");
    infoDiv.className = "container-fluid";

    let containerDiv = document.createElement("div");
    containerDiv.className = "row no-gutters";
    containerDiv.style.width = "100%";

    //ID DIV
    let idDiv = document.createElement("div");
    idDiv.className = "col-1 px-3";
    idDiv.innerText = "ID";

    //ISBN DIV
    let isbnDiv = document.createElement("div");
    isbnDiv.className = "col-2 px-3";
    isbnDiv.innerText = "ISBN";

    //TITLE DIV
    let titleDiv = document.createElement("div");
    titleDiv.className = "col-2 px-3";
    titleDiv.innerText = "Title";

    //AUTHOR DIV
    let authorDiv = document.createElement("div");
    authorDiv.className = "col-2 px-3";
    authorDiv.innerText = "Author";

    //PUBLISHER DIV
    let publisherDiv = document.createElement("div");
    publisherDiv.className = "col-1 px-3";
    publisherDiv.innerText = "Publisher";

    //TYPE DIV
    let typeDiv = document.createElement("div");
    typeDiv.className = "col-2 px-3";
    typeDiv.innerText = "Type";

    //DIVIDER
    let divider = document.createElement("hr")
    divider.className = "sidebar-divider my-3"

    containerDiv.appendChild(idDiv);
    containerDiv.appendChild(isbnDiv);
    containerDiv.appendChild(titleDiv);
    containerDiv.appendChild(authorDiv);
    containerDiv.appendChild(publisherDiv);
    containerDiv.appendChild(typeDiv);

    infoDiv.appendChild(containerDiv);
    infoDiv.appendChild(divider);

    return infoDiv;
}

function createBookDiv(book){
    let bookDiv = document.createElement("div");
    bookDiv.className = "container-fluid";

    let containerDiv = document.createElement("div");
    containerDiv.className = "row no-gutters";
    containerDiv.style.width = "100%";

    //ID DIV
    let idDiv = document.createElement("div");
    idDiv.className = "col-1 px-3";
    idDiv.innerText = book.id;

    //ISBN DIV
    let isbnDiv = document.createElement("div");
    isbnDiv.className = "col-2 px-3";
    isbnDiv.innerText = book.isbn;

    //TITLE DIV
    let titleDiv = document.createElement("div");
    titleDiv.className = "col-2 px-3";
    titleDiv.innerText = book.title;

    //AUTHOR DIV
    let authorDiv = document.createElement("div");
    authorDiv.className = "col-2 px-3";
    authorDiv.innerText = book.author;

    //PUBLISHER DIV
    let publisherDiv = document.createElement("div");
    publisherDiv.className = "col-1 px-3";
    publisherDiv.innerText = book.publisher;

    //TYPE DIV
    let typeDiv = document.createElement("div");
    typeDiv.className = "col-2 px-3";
    typeDiv.innerText = book.type;
    //
    //
    containerDiv.appendChild(idDiv);
    containerDiv.appendChild(isbnDiv);
    containerDiv.appendChild(titleDiv);
    containerDiv.appendChild(authorDiv);
    containerDiv.appendChild(publisherDiv);
    containerDiv.appendChild(typeDiv);
    //
    //
    // EDIT, SHOW, DELETE BUTTONS
    // let editShowDeleteDiv = document.createElement("div"); - NOT USED - EXPLAINED BELOW

    //DELETE DIV
    let deleteDiv = document.createElement("div");
    deleteDiv.className = "col px-1 text-primary";
    let deleteA = document.createElement("a");
    deleteA.href = ""
    deleteA.id = "deleteA";
    deleteA.innerText = "Delete";
    deleteDiv.appendChild(deleteA);

    //EDIT DIV
    let editDiv = document.createElement("div");
    editDiv.className = "col px-1 text-primary";
    let editA = document.createElement("a");
    editA.href = ""
    editA.id = "editA";
    editA.innerText = "Edit";
    editDiv.appendChild(editA);

    //SHOW DIV
    let showDiv = document.createElement("div");
    showDiv.className = "col px-1 text-primary";
    let showA = document.createElement("a");
    showA.href = ""
    showA.id = "showA";
    showA.innerText = "Details";
    showDiv.appendChild(showA);

    //WHOLE BOOK ROW DIVIDER
    let divider = document.createElement("hr")
    divider.className = "sidebar-divider my-3"

    //
    //

    // <a></a> event listeners
    deleteA.addEventListener("click",function (event){
        event.preventDefault();
        //apiDeleteBook
        apiDeleteBook(book.id)
            .then(function (response){
            })
            .catch(function (error){
                console.warn(error);
            })
        bookDiv.parentElement.removeChild(bookDiv);
    })

    //
    editA.addEventListener("click",function (event){
        event.preventDefault();
        console.log("noted click")
        //apiEditBook
    })

    //
    showA.addEventListener("click",function (event){
        event.preventDefault();
        console.log("noted click")
        //apiShowBook
    })

    //
    //
    // containerDiv.appendChild(createEditShowDelete(book)); -NOT USED - explained in createEditShowDelete
    // containerDiv.appendChild(editShowDeleteDiv);

    containerDiv.appendChild(deleteDiv);
    containerDiv.appendChild(editDiv);
    containerDiv.appendChild(showDiv);
    bookDiv.appendChild(containerDiv);
    bookDiv.appendChild(divider);
    return bookDiv;
}


//NOT USED BECAUSE I DONT KNOW HOW TO DELETE WHOLE BOOK DIV FROM inside of this function :)
function createEditShowDelete(book){
    let mainDiv = document.createElement("div");
    mainDiv.className = "row no-gutters";

    let deleteDiv = document.createElement("div");
    deleteDiv.className = "col px-1 text-primary";
    let deleteA = document.createElement("a");
    deleteA.href = `http://localhost:8080/books/${book.id}`
    deleteA.id = "deleteA";
    deleteA.innerText = "Delete book";
    deleteDiv.appendChild(deleteA);

    let editDiv = document.createElement("div");
    editDiv.className = "col px-1 text-primary";
    let editA = document.createElement("a");
    editA.href = `http://localhost:8080/books/${book.id}`
    editA.id = "editA";
    editA.innerText = "Edit book";
    editDiv.appendChild(editA);

    let showDiv = document.createElement("div");
    showDiv.className = "col px-1 text-primary";
    let showA = document.createElement("a");
    showA.href = `http://localhost:8080/books/${book.id}`
    showA.id = "showA";
    showA.innerText = "Show book";
    showDiv.appendChild(showA);

    mainDiv.appendChild(deleteDiv);
    mainDiv.appendChild(editDiv);
    mainDiv.appendChild(showDiv);

    deleteA.addEventListener("click",function (event){
        event.preventDefault();
        //apiDeleteBook
        apiDeleteBook(book.id)
            .then(function (response){
            })
            .catch(function (error){
                console.warn(error);
            })
    })
    editA.addEventListener("click",function (event){
        event.preventDefault();
        console.log("noted click")

        //apiEditBook
    })
    showA.addEventListener("click",function (event){
        event.preventDefault();
        console.log("noted click")
        //apiShowBook
    })
}
//NOT USED BECAUSE I DONT KNOW HOW TO DELETE WHOLE BOOK DIV FROM inside of this function :)


function listBooks(){
    booksDiv.innerHTML = "";
    booksDiv.appendChild(createInfoDiv());
    apiListBooks()
        .then(function (response){
            const books = Array.from(response);
            books.forEach(function (book){
                renderBook(book);
            });
        })
        .catch(function (error){
            console.warn(error);
        });
}

document.addEventListener('DOMContentLoaded',function (){
    listBooks();
    listBooksButton.addEventListener("click",function (event){
        event.preventDefault();
        listBooks();
    })

})
