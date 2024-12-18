// src/components/PublisherList.tsx
import { Publisher } from '../types';

interface PublisherListProps {
  publishers: Publisher[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function PublisherList({ publishers, onEdit, onDelete }: PublisherListProps) {
  return (
    <div>
      <h2>Publishers</h2>
      {publishers.length === 0 ? <p>No publishers found.</p> : (
        <ul>
          {publishers.map(pub => (
            <li key={pub.id}>
              {pub.name} - {pub.location}
              <button onClick={() => onEdit(pub.id!)}>Edit</button>
              <button onClick={() => onDelete(pub.id!)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PublisherList;
