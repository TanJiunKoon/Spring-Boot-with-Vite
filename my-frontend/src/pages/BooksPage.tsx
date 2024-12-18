// src/pages/BooksPage.tsx
import { useEffect, useState } from 'react';
import { Book } from '../types';
import { getBooks, deleteBook } from '../api/BookAPI';
import { Link, useNavigate } from 'react-router-dom';
import BookList from '../components/BookList';
import { Box, Button, Typography, Stack } from '@mui/material';

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
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Books</Typography>
        <Button variant="contained" component={Link} to="/books/add">Add Book</Button>
      </Stack>
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </Box>
  );
}

export default BooksPage;
