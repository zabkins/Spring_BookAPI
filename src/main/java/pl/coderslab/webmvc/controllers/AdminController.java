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

}
