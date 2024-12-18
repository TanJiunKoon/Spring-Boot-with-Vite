// src/components/BookForm.tsx
import { useState, useEffect } from 'react';
import { Book, Publisher } from '../types';
import { getPublishers } from '../api/PublisherAPI';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: 
          <input value={title} onChange={e => setTitle(e.target.value)} required/>
        </label>
      </div>
      <div>
        <label>Author: 
          <input value={author} onChange={e => setAuthor(e.target.value)} required/>
        </label>
      </div>
      <div>
        <label>Pages: 
          <input type="number" value={pages} onChange={e => setPages(Number(e.target.value))} required/>
        </label>
      </div>
      <div>
        <label>Publisher: 
          <select value={publisherId} onChange={e => setPublisherId(Number(e.target.value))} required>
            <option value="">Select a publisher</option>
            {publishers.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default BookForm;
