package com.example.bookmanager.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookmanager.model.Book;
import com.example.bookmanager.service.BookService;

@RestController
@RequestMapping("/books")
// @CrossOrigin(origins = "*") // for development, allow all. In production, restrict to known domain.
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping
    public Book addBook(@RequestParam String title,
                        @RequestParam String author,
                        @RequestParam int pages,
                        @RequestParam Long publisherId) {
        return bookService.addBook(title, author, pages, publisherId);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @GetMapping("/author")
    public List<Book> searchByAuthor(@RequestParam String author) {
        return bookService.searchBooksByAuthor(author);
    }

    @GetMapping("/search")
    public List<Book> searchByTitleKeyword(@RequestParam String keyword) {
        return bookService.searchBooksByTitleKeyword(keyword);
    }

    @GetMapping("/publisher/{publisherId}")
    public List<Book> getBooksByPublisher(@PathVariable Long publisherId) {
        return bookService.getBooksByPublisher(publisherId);
    }

    @GetMapping("/paged")
    public Page<Book> getBooksPaged(@RequestParam int page, @RequestParam int size) {
        return bookService.getBooksPaged(page, size);
    }

    // New: Update an existing book
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id,
                           @RequestParam(required = false) String title,
                           @RequestParam(required = false) String author,
                           @RequestParam(required = false, defaultValue = "0") int pages,
                           @RequestParam(required = false) Long publisherId) {
        return bookService.updateBook(id, title, author, pages, publisherId);
    }

    // New: Delete a book by ID
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }
}
