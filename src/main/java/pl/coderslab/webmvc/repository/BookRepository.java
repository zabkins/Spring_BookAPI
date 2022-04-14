package pl.coderslab.webmvc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.coderslab.webmvc.entities.Book;

public interface BookRepository extends JpaRepository<Book, Long> {



}
