package pl.coderslab.webmvc.service;

import org.springframework.stereotype.Component;
import pl.coderslab.webmvc.model.Book;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class MockBookService implements BookService{
    private List<Book> books;
    private static Long nextID = 4L;

    public MockBookService() {
        this.books = new ArrayList<>();
        books.add(new Book(1L, "9788324631766", "Thiniking	in	Java", "Bruce	Eckel", "Helion", "programming"));
        books.add(new Book(2L, "9788324627738", "Rusz	glowa	Java.", "Sierra	Kathy,	Bates	Bert", "Helion",
                "programming"));
        books.add(new Book(3L, "9780130819338", "Java	2.	Podstawy", "Cay	Horstmann,	Gary	Cornell", "Helion",
                "programming"));
    }

    @Override
    public List<Book> getBooks() {
        return books;
    }

    @Override
    public void add(Book book) {
        book.setId(nextID);
        this.books.add(book);
        nextID++;
    }

    @Override
    public Optional<Book> get(Long id) {
        Optional<Book> foundBook = books.stream()
                .filter(b -> b.getId().longValue() == id.longValue())
                .findFirst();
        return foundBook;
    }

    @Override
    public void update(Book book) {

    }

    @Override
    public void delete(Long id) {
        books.removeIf(b -> b.getId().longValue() == id.longValue());
    }
}
