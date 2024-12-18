// src/components/PublisherForm.tsx
import { useState } from 'react';
import { Publisher } from '../types';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

interface PublisherFormProps {
  initialValue?: Publisher;
  onSubmit: (publisher: Omit<Publisher, 'id'>) => void;
}

function PublisherForm({ initialValue, onSubmit }: PublisherFormProps) {
  const [name, setName] = useState(initialValue?.name || '');
  const [location, setLocation] = useState(initialValue?.location || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, location });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <Typography variant="h5" mb={2}>{initialValue ? "Edit Publisher" : "Add Publisher"}</Typography>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </Stack>
    </Box>
  );
}

export default PublisherForm;
