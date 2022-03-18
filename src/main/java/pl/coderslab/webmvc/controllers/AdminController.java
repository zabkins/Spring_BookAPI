package pl.coderslab.webmvc.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.coderslab.webmvc.service.BookService;

@Controller
@RequestMapping("/home")
public class AdminController {
    private BookService bookService;

    public AdminController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("")
    public String home(){
        return "/home";
    }

    @RequestMapping("/add")
    public String add(){
        return "/addBook";
    }

    //EDIT() - two possibilites :
    // 1- use only js. create dynamic site with form based on data downloaded for book.id - i think it would be a better solution
    // 2- use jsp view for form - add book object as attribute in order to fill existing data
}
