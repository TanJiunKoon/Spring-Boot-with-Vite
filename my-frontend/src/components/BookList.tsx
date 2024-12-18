// src/components/BookList.tsx
import { Book } from '../types';
import { Card, CardContent, CardActions, Button, Typography, Stack } from '@mui/material';

interface BookListProps {
  books: Book[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function BookList({ books, onEdit, onDelete }: BookListProps) {
  if (books.length === 0) {
    return <Typography>No books found.</Typography>;
  }

  return (
    <Stack spacing={2}>
      {books.map(book => (
        <Card key={book.id} variant="outlined">
          <CardContent>
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="subtitle1">by {book.author}</Typography>
            <Typography variant="body2">{book.pages} pages</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onEdit(book.id!)}>Edit</Button>
            <Button size="small" color="error" onClick={() => onDelete(book.id!)}>Delete</Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
}

export default BookList;
