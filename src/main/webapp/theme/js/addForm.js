const apihost = "http://localhost:8080/books";

function createBook(isbn, title, author, publisher, type){
    fetch(apihost,{
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({isbn: isbn, title: title, author: author, publisher: publisher, type: type}),
        method: 'POST'
    }).then(function (resp){
        if(!resp.ok){
            alert("Something went wrong! Book not added");
        }
        return resp.json();
    })
}

document.addEventListener('DOMContentLoaded',function (){
    const addForm = document.getElementById("addForm");
    addForm.addEventListener("submit",function (event){
        event.preventDefault();
        let isbn = addForm.isbn.value;
        let title = addForm.title.value;
        let author = addForm.author.value;
        let publisher = addForm.publisher.value;
        let type = addForm.type.value;

        createBook(isbn,title,author,publisher,type);

        window.location.href = 'http://localhost:8080/home';
    });
})




