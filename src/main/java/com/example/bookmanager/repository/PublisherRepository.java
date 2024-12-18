package com.example.bookmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookmanager.model.Publisher;

@Repository
public interface PublisherRepository extends JpaRepository<Publisher, Long> {
    // Spring Data JPA gives us: findAll(), findById(), save(), etc.
    // We can add custom methods if needed, for example:
    // List<Publisher> findByNameContainingIgnoreCase(String namePart);
}
