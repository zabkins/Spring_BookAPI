package pl.coderslab.webmvc.service;

import pl.coderslab.webmvc.model.Book;

import java.util.List;

public interface BookService {
    List<Book> getBooks();
    void add(Book book);
    Book get(Long id);
    void update(Book book);
    void delete(Long id);
}
