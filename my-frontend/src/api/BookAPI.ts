// src/api/BookAPI.ts
import axios from 'axios';
import { Book } from '../types';

const BASE_URL = 'http://localhost:8080';

export async function getBooks(): Promise<Book[]> {
  const res = await axios.get(`${BASE_URL}/books`);
  return res.data;
}

export async function addBook(book: Omit<Book, 'id'>): Promise<Book> {
  const params = new URLSearchParams();
  params.append('title', book.title);
  params.append('author', book.author);
  params.append('pages', book.pages.toString());
  params.append('publisherId', book.publisherId!.toString());

  const res = await axios.post(`${BASE_URL}/books?${params.toString()}`);
  return res.data;
}

export async function getBook(id: number): Promise<Book> {
  const res = await axios.get(`${BASE_URL}/books/${id}`);
  return res.data;
}

export async function updateBook(id: number, book: Partial<Book>): Promise<Book> {
  const params = new URLSearchParams();
  if (book.title) params.append('title', book.title);
  if (book.author) params.append('author', book.author);
  if (book.pages) params.append('pages', book.pages.toString());
  if (book.publisherId) params.append('publisherId', book.publisherId.toString());

  const res = await axios.put(`${BASE_URL}/books/${id}?${params.toString()}`);
  return res.data;
}

export async function deleteBook(id: number): Promise<void> {
  await axios.delete(`${BASE_URL}/books/${id}`);
}
