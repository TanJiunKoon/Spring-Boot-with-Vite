package com.example.bookmanager.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.bookmanager.model.Book;
import com.example.bookmanager.model.Publisher;
import com.example.bookmanager.repository.BookRepository;
import com.example.bookmanager.repository.PublisherRepository;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final PublisherRepository publisherRepository;

    public BookService(BookRepository bookRepository, PublisherRepository publisherRepository) {
        this.bookRepository = bookRepository;
        this.publisherRepository = publisherRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book addBook(String title, String author, int pages, Long publisherId) {
        Publisher publisher = publisherRepository.findById(publisherId)
                .orElseThrow(() -> new RuntimeException("Publisher not found"));
        Book book = new Book(title, author, pages, publisher);
        return bookRepository.save(book);
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
    }

    public List<Book> searchBooksByAuthor(String author) {
        return bookRepository.findByAuthorIgnoreCase(author);
    }

    public List<Book> searchBooksByTitleKeyword(String keyword) {
        return bookRepository.searchByTitleKeyword(keyword);
    }

    public List<Book> getBooksByPublisher(Long publisherId) {
        return bookRepository.findByPublisherId(publisherId);
    }

    public Page<Book> getBooksPaged(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("title").ascending());
        return bookRepository.findAll(pageRequest);
    }

    // New: Update an existing book
    public Book updateBook(Long id, String title, String author, int pages, Long publisherId) {
        Book existingBook = getBookById(id);
        if (publisherId != null) {
            Publisher publisher = publisherRepository.findById(publisherId)
                    .orElseThrow(() -> new RuntimeException("Publisher not found"));
            existingBook.setPublisher(publisher);
        }
        if (title != null) existingBook.setTitle(title);
        if (author != null) existingBook.setAuthor(author);
        if (pages > 0) existingBook.setPages(pages);
        return bookRepository.save(existingBook);
    }

    // New: Delete a book by ID
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
