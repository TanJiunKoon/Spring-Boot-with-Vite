// src/api/BookAPI.ts
import { Book } from '../types';

const BASE_URL = 'http://localhost:8080';

export async function getBooks(): Promise<Book[]> {
  const res = await fetch(`${BASE_URL}/books`);
  if (!res.ok) throw new Error('Failed to fetch books');
  return res.json();
}

export async function addBook(book: Omit<Book, 'id'>): Promise<Book> {
  const params = new URLSearchParams();
  params.append('title', book.title);
  params.append('author', book.author);
  params.append('pages', book.pages.toString());
  params.append('publisherId', book.publisherId!.toString());

  const res = await fetch(`${BASE_URL}/books?${params.toString()}`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error('Failed to add book');
  return res.json();
}

export async function getBook(id: number): Promise<Book> {
  const res = await fetch(`${BASE_URL}/books/${id}`);
  if (!res.ok) throw new Error('Failed to fetch book');
  return res.json();
}

export async function updateBook(id: number, book: Partial<Book>): Promise<Book> {
  const params = new URLSearchParams();
  if (book.title) params.append('title', book.title);
  if (book.author) params.append('author', book.author);
  if (book.pages) params.append('pages', book.pages.toString());
  if (book.publisherId) params.append('publisherId', book.publisherId.toString());

  const res = await fetch(`${BASE_URL}/books/${id}?${params.toString()}`, {
    method: 'PUT'
  });
  if (!res.ok) throw new Error('Failed to update book');
  return res.json();
}

export async function deleteBook(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/books/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete book');
}
