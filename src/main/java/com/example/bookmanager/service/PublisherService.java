package com.example.bookmanager.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.bookmanager.model.Publisher;
import com.example.bookmanager.repository.PublisherRepository;

@Service
public class PublisherService {

    private final PublisherRepository publisherRepository;

    public PublisherService(PublisherRepository publisherRepository){
        this.publisherRepository = publisherRepository;
    }

    public List<Publisher> getAllPublishers() {
        return publisherRepository.findAll();
    }

    public Publisher addPublisher(String name, String location) {
        Publisher publisher = new Publisher(name, location);
        return publisherRepository.save(publisher);
    }

    public Publisher getPublisherById(Long id) {
        return publisherRepository.findById(id).orElseThrow(() -> new RuntimeException("Publisher not found"));
    }

    // New: Update an existing publisher
    public Publisher updatePublisher(Long id, String name, String location) {
        Publisher existingPublisher = getPublisherById(id);
        if (name != null) existingPublisher.setName(name);
        if (location != null) existingPublisher.setLocation(location);
        return publisherRepository.save(existingPublisher);
    }

    // New: Delete a publisher by ID
    public void deletePublisher(Long id) {
        publisherRepository.deleteById(id);
    }
}
