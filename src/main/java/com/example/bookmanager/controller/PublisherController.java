package com.example.bookmanager.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookmanager.model.Publisher;
import com.example.bookmanager.service.PublisherService;

@RestController
@RequestMapping("/publishers")
public class PublisherController {

    private final PublisherService publisherService;

    public PublisherController(PublisherService publisherService){
        this.publisherService = publisherService;
    }

    @GetMapping
    public List<Publisher> getAllPublishers() {
        return publisherService.getAllPublishers();
    }

    @PostMapping
    public Publisher addPublisher(@RequestParam String name, @RequestParam String location) {
        return publisherService.addPublisher(name, location);
    }

    @GetMapping("/{id}")
    public Publisher getPublisher(@PathVariable Long id) {
        return publisherService.getPublisherById(id);
    }

    // New: Update an existing publisher
    @PutMapping("/{id}")
    public Publisher updatePublisher(@PathVariable Long id,
                                     @RequestParam(required = false) String name,
                                     @RequestParam(required = false) String location) {
        return publisherService.updatePublisher(id, name, location);
    }

    // New: Delete a publisher by ID
    @DeleteMapping("/{id}")
    public void deletePublisher(@PathVariable Long id) {
        publisherService.deletePublisher(id);
    }
}
