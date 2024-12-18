// src/components/PublisherForm.tsx
import { useState } from 'react';
import { Publisher } from '../types';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:
          <input value={name} onChange={e => setName(e.target.value)} required/>
        </label>
      </div>
      <div>
        <label>Location:
          <input value={location} onChange={e => setLocation(e.target.value)} required/>
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default PublisherForm;
