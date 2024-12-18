// src/components/PublisherList.tsx
import { Publisher } from '../types';
import { Card, CardContent, CardActions, Button, Typography, Stack } from '@mui/material';

interface PublisherListProps {
  publishers: Publisher[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function PublisherList({ publishers, onEdit, onDelete }: PublisherListProps) {
  if (publishers.length === 0) {
    return <Typography>No publishers found.</Typography>;
  }

  return (
    <Stack spacing={2}>
      {publishers.map(pub => (
        <Card key={pub.id} variant="outlined">
          <CardContent>
            <Typography variant="h6">{pub.name}</Typography>
            <Typography variant="body2">{pub.location}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onEdit(pub.id!)}>Edit</Button>
            <Button size="small" color="error" onClick={() => onDelete(pub.id!)}>Delete</Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
}

export default PublisherList;
