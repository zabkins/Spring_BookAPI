package pl.coderslab.webmvc.controllers;

import org.springframework.web.bind.annotation.*;
import pl.coderslab.webmvc.model.Book;
import pl.coderslab.webmvc.service.BookService;

import java.util.List;


@RestController
@RequestMapping("/books")
public class BookController {
    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("")
    public List<Book> getBooks(){
        return bookService.getBooks();
    }

    @PostMapping("")
    public void addBook(@RequestBody Book book){
        bookService.add(book);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id){
        return bookService.get(id); //.. tu bedzie Optional i po get(id).orElseThrow i blad ;
    }

    @PutMapping("")
    public void update(@RequestBody Book book){
        bookService.update(book);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        bookService.delete(id);
    }

}
