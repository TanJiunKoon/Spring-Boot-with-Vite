// src/pages/BooksPage.tsx
import { useEffect, useState } from 'react';
import { Book } from '../types';
import { getBooks, deleteBook } from '../api/BookAPI';
import { Link, useNavigate } from 'react-router-dom';
import BookList from '../components/BookList';

function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    getBooks().then(setBooks).catch(console.error);
  }

  function handleDelete(id: number) {
    deleteBook(id).then(loadBooks).catch(console.error);
  }

  function handleEdit(id: number) {
    navigate(`/books/edit/${id}`);
  }

  return (
    <div>
      <h1>Books</h1>
      <Link to="/books/add">Add Book</Link>
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete}/>
    </div>
  );
}

export default BooksPage;
