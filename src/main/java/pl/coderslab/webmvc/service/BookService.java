package pl.coderslab.webmvc.service;

import pl.coderslab.webmvc.entities.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> getBooks();
    void add(Book book);
    Optional<Book> get(Long id);
    void update(Book book);
    void delete(Long id);
}
