// src/components/BookForm.tsx
import { useState, useEffect } from 'react';
import { Book, Publisher } from '../types';
import { getPublishers } from '../api/PublisherAPI';
import { Box, TextField, Button, MenuItem, Typography, Stack } from '@mui/material';

interface BookFormProps {
  initialValue?: Book;
  onSubmit: (book: Omit<Book, 'id'>) => void;
}

function BookForm({ initialValue, onSubmit }: BookFormProps) {
  const [title, setTitle] = useState(initialValue?.title || '');
  const [author, setAuthor] = useState(initialValue?.author || '');
  const [pages, setPages] = useState(initialValue?.pages || 0);
  const [publisherId, setPublisherId] = useState<number | undefined>(initialValue?.publisherId);

  const [publishers, setPublishers] = useState<Publisher[]>([]);

  useEffect(() => {
    getPublishers().then(setPublishers).catch(console.error);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!publisherId) {
      alert('Please select a publisher');
      return;
    }
    onSubmit({ title, author, pages, publisherId });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <Typography variant="h5" mb={2}>{initialValue ? "Edit Book" : "Add Book"}</Typography>
      <Stack spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Pages"
          type="number"
          value={pages}
          onChange={e => setPages(Number(e.target.value))}
          required
          fullWidth
        />
        <TextField
          select
          label="Publisher"
          value={publisherId ?? ''}
          onChange={e => setPublisherId(Number(e.target.value))}
          required
          fullWidth
        >
          <MenuItem value="">Select a publisher</MenuItem>
          {publishers.map(p => (
            <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>
          ))}
      </TextField>
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </Stack>
    </Box>
  );
}

export default BookForm;
