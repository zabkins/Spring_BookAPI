const apihost = "http://localhost:8080/books";
let booksDiv = document.getElementById("booksDiv");
let listBooksButton = document.getElementById("listBooks");
let contentHeader = document.getElementById("contentHeader");

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
    fetch(apihost+resource,{
        method: "DELETE"
    }).then(function (resp){
        if(!resp.ok){
            alert("Something went wrong")
        }
        return resp.json();
    })
}

function apiUpdateBook(book){
    fetch(apihost,{
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({id: book.id, isbn: book.isbn, title: book.title, author: book.author, publisher: book.publisher, type: book.type}),
        method: 'PUT'
    }).then(function (resp){
        if(!resp.ok){
            alert("Something went wrong! Book not added");
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
        bookDiv.parentElement.removeChild(bookDiv);
    })

    //
    editA.addEventListener("click",function (event){
        event.preventDefault();
        contentHeader.innerText = "Edit book:";
        booksDiv.innerHTML = ""
        booksDiv.appendChild(renderEditForm(book));
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

function renderEditForm(book){
    //Edit form
    let editForm = document.createElement("form");

    //isbnDIV
    let isbnDiv = document.createElement("div");
    isbnDiv.className = "form-group";
    let isbnLabel = document.createElement("label");
    isbnLabel.setAttribute("for","isbn");
    let isbnInput = document.createElement("input");
    isbnInput.type = "text";
    isbnInput.id = "isbn";
    isbnInput.className = "form-control";
    isbnInput.value = book.isbn;
    isbnInput.name = "isbn";
    isbnDiv.appendChild(isbnLabel);
    isbnDiv.appendChild(isbnInput);
    //
    //titleDIV
    let titleDiv = document.createElement("div");
    isbnDiv.className = "form-group";
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for","title");
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.className = "form-control";
    titleInput.value = book.title;
    titleInput.name = "title";
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);
    //
    //Author Div
    let authorDiv = document.createElement("div");
    authorDiv.className = "form-group";
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for","author");
    let authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "author";
    authorInput.className = "form-control";
    authorInput.value = book.author;
    authorInput.name = "author";
    authorDiv.appendChild(authorLabel);
    authorDiv.appendChild(authorInput);
    //
    //Publisher Div
    let publisherDiv = document.createElement("div");
    publisherDiv.className = "form-group";
    let publisherLabel = document.createElement("label");
    publisherLabel.setAttribute("for","publisher");
    let publisherInput = document.createElement("input");
    publisherInput.type = "text";
    publisherInput.id = "publisher";
    publisherInput.className = "form-control";
    publisherInput.value = book.publisher;
    publisherInput.name = "publisher";
    publisherDiv.appendChild(publisherLabel);
    publisherDiv.appendChild(publisherInput);
    //
    //TypeDIV
    let typeDiv = document.createElement("div");
    typeDiv.className = "form-group";
    let typeLabel = document.createElement("label");
    typeLabel.setAttribute("for","type");
    let typeInput = document.createElement("input");
    typeInput.type = "text";
    typeInput.id = "type";
    typeInput.className = "form-control";
    typeInput.value = book.type;
    typeInput.name = "type";
    typeDiv.appendChild(typeLabel);
    typeDiv.appendChild(typeInput);
    //
    //Hidden ID DIV
    let idDiv = document.createElement("div");
    // idDiv.className = "hidden";
    idDiv.style.display = "none";
    let idLabel = document.createElement("label");
    idLabel.setAttribute("for","id");
    let idInput = document.createElement("input");
    idInput.type = "number";
    idInput.id = "id";
    idInput.className = "form-control";
    idInput.value = book.id;
    idInput.name = "id";
    idDiv.appendChild(idLabel);
    idDiv.appendChild(idInput);
    //
    //Submit button
    let buttonDiv = document.createElement("div");
    let button = document.createElement("button");
    button.type = "submit";
    button.className = "btn btn-primary";
    button.innerText = "Save and update";
    buttonDiv.appendChild(button);
    //

    editForm.appendChild(isbnDiv);
    editForm.appendChild(titleDiv);
    editForm.appendChild(authorDiv);
    editForm.appendChild(publisherDiv);
    editForm.appendChild(typeDiv);
    editForm.appendChild(idDiv);
    editForm.appendChild(buttonDiv);

    editForm.addEventListener("submit",function (event){
        event.preventDefault();
        book.isbn = editForm.isbn.value;
        book.title = editForm.title.value;
        book.author = editForm.author.value;
        book.publisher = editForm.publisher.value;
        book.type = editForm.type.value;
        apiUpdateBook(book);
        window.location.href = 'http://localhost:8080/home';
    })

    return editForm;
}


//NOT USED BECAUSE I DONT KNOW HOW TO DELETE WHOLE BOOK DIV FROM inside of this function :)
// function createEditShowDelete(book){
//     let mainDiv = document.createElement("div");
//     mainDiv.className = "row no-gutters";
//
//     let deleteDiv = document.createElement("div");
//     deleteDiv.className = "col px-1 text-primary";
//     let deleteA = document.createElement("a");
//     deleteA.href = `http://localhost:8080/books/${book.id}`
//     deleteA.id = "deleteA";
//     deleteA.innerText = "Delete book";
//     deleteDiv.appendChild(deleteA);
//
//     let editDiv = document.createElement("div");
//     editDiv.className = "col px-1 text-primary";
//     let editA = document.createElement("a");
//     editA.href = `http://localhost:8080/books/${book.id}`
//     editA.id = "editA";
//     editA.innerText = "Edit book";
//     editDiv.appendChild(editA);
//
//     let showDiv = document.createElement("div");
//     showDiv.className = "col px-1 text-primary";
//     let showA = document.createElement("a");
//     showA.href = `http://localhost:8080/books/${book.id}`
//     showA.id = "showA";
//     showA.innerText = "Show book";
//     showDiv.appendChild(showA);
//
//     mainDiv.appendChild(deleteDiv);
//     mainDiv.appendChild(editDiv);
//     mainDiv.appendChild(showDiv);
//
//     deleteA.addEventListener("click",function (event){
//         event.preventDefault();
//         //apiDeleteBook
//         apiDeleteBook(book.id)
//             .then(function (response){
//             })
//             .catch(function (error){
//                 console.warn(error);
//             })
//     })
//     editA.addEventListener("click",function (event){
//         event.preventDefault();
//         console.log("noted click")
//
//         //apiEditBook
//     })
//     showA.addEventListener("click",function (event){
//         event.preventDefault();
//         console.log("noted click")
//         //apiShowBook
//     })
// }
//NOT USED BECAUSE I DONT KNOW HOW TO DELETE WHOLE BOOK DIV FROM inside of this function :)


function listBooks(){
    contentHeader.innerText = "All Books:";
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
