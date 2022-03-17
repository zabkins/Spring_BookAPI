package pl.coderslab.webmvc.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.coderslab.webmvc.model.Book;
import pl.coderslab.webmvc.service.BookService;

import java.util.List;

//I know it's not build the way it should be but it's just for testing purposes - this controller makes BookController practically useless ...

@Controller
@RequestMapping("/home")
public class AdminController {
    private BookService bookService;

    public AdminController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("")
    public String home(Model model){
        List<Book> books = bookService.getBooks();
        model.addAttribute("books",books);
        return "/home";
    }

    @GetMapping("/add")
    public String add(){
        return "/addBook";
    }
}
