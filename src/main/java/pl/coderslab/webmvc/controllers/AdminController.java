package pl.coderslab.webmvc.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import pl.coderslab.webmvc.entities.Book;
import pl.coderslab.webmvc.service.BookService;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/admin")
public class AdminController {
    private BookService bookService;

    public AdminController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("/books")
    public String home(Model model){
        List<Book> allBooks = bookService.getBooks();
        model.addAttribute("allBooks",allBooks);
        return "/home";
    }

    @GetMapping("/add")
    public String showAddForm(Model model){
        Book blankBook = new Book();
        model.addAttribute("book",blankBook);
        return "/book/addBook";
    }

    @PostMapping("/add")
    public String saveAddForm(@Valid Book book, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return "/book/addBook";
        }
        bookService.add(book);
        return "redirect:/admin/books";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(Model model, @PathVariable Long id){
        Book bookToEdit = bookService.get(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        model.addAttribute("bookToEdit",bookToEdit);
        return "/book/editBook";
    }

    @PostMapping("/edit")
    public String saveEditForm(@Valid Book book, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return "/book/editBook";
        }
        bookService.update(book);
        return "redirect:/admin/books";
    }

    @GetMapping("/delete/{id}")
    public String showDeleteConfirmation(Model model, @PathVariable Long id){
        Book bookToDelete = bookService.get(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        model.addAttribute("bookToDelete",bookToDelete);
        return "/book/confirmDelete";
    }

    @PostMapping("/delete/{id}")
    public String deleteBook(@PathVariable Long id){
        bookService.delete(id);
        return "redirect:/admin/books";
    }

    @GetMapping("/get/{id}")
    public String showSpecificBook(Model model, @PathVariable Long id){
        Book chosenBook = bookService.get(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        model.addAttribute("chosenBook",chosenBook);
        return "/book/show";
    }

}
