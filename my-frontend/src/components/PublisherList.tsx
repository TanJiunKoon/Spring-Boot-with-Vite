// src/components/PublisherList.tsx
import { Publisher } from '../types';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Box } from '@mui/material';

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
    <Box mt={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Publisher Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {publishers.map(pub => (
            <TableRow key={pub.id}>
              <TableCell>{pub.name}</TableCell>
              <TableCell>{pub.location}</TableCell>
              <TableCell>
                <Button size="small" onClick={() => onEdit(pub.id!)}>Edit</Button>
                <Button size="small" color="error" onClick={() => onDelete(pub.id!)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default PublisherList;
