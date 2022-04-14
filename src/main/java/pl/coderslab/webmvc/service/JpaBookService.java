package pl.coderslab.webmvc.service;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import pl.coderslab.webmvc.entities.Book;
import pl.coderslab.webmvc.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
@Primary
public class JpaBookService implements BookService{

    private final BookRepository bookRepository;

    public JpaBookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @Override
    public void add(Book book) {
        bookRepository.save(book);
    }

    @Override
    public Optional<Book> get(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public void update(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void delete(Long id) {
        bookRepository.deleteById(id);
    }
}
