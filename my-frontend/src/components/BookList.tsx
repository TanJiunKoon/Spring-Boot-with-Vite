// src/components/BookList.tsx
import { Book } from '../types';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Box } from '@mui/material';

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
    <Box mt={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Pages</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => (
            <TableRow key={book.id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.pages}</TableCell>
              <TableCell>
                <Button size="small" onClick={() => onEdit(book.id!)}>Edit</Button>
                <Button size="small" color="error" onClick={() => onDelete(book.id!)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default BookList;
