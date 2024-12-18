// src/pages/PublishersPage.tsx
import { useEffect, useState } from 'react';
import { Publisher } from '../types';
import { getPublishers, deletePublisher } from '../api/PublisherAPI';
import { Link, useNavigate } from 'react-router-dom';
import PublisherList from '../components/PublisherList';

function PublishersPage() {
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPublishers();
  }, []);

  function loadPublishers() {
    getPublishers().then(setPublishers).catch(console.error);
  }

  function handleDelete(id: number) {
    deletePublisher(id).then(loadPublishers).catch(console.error);
  }

  function handleEdit(id: number) {
    navigate(`/publishers/edit/${id}`);
  }

  return (
    <div>
      <h1>Publishers</h1>
      <Link to="/publishers/add">Add Publisher</Link>
      <PublisherList publishers={publishers} onEdit={handleEdit} onDelete={handleDelete}/>
    </div>
  );
}

export default PublishersPage;
