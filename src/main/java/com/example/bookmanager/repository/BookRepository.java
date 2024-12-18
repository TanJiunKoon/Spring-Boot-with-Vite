package com.example.bookmanager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.bookmanager.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

    // Derived query by method name:
    // Finds all books by a particular author
    List<Book> findByAuthorIgnoreCase(String author);

    // Using JPQL (Java Persistence Query Language)
    // Example: find all books whose title contains a keyword, sorted by title
    @Query("SELECT b FROM Book b WHERE LOWER(b.title) LIKE LOWER(CONCAT('%', :keyword, '%')) ORDER BY b.title ASC")
    List<Book> searchByTitleKeyword(@Param("keyword") String keyword);

    // Find books by publisher ID
    List<Book> findByPublisherId(Long publisherId);
}
