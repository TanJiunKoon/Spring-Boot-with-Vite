// src/pages/EditPublisherPage.tsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPublisher, updatePublisher } from '../api/PublisherAPI';
import { Publisher } from '../types';
import PublisherForm from '../components/PublisherForm';

function EditPublisherPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [publisher, setPublisher] = useState<Publisher | null>(null);

  useEffect(() => {
    if (id) {
      getPublisher(Number(id)).then(setPublisher).catch(console.error);
    }
  }, [id]);

  function handleSubmit(updateData: any) {
    if (id) {
      updatePublisher(Number(id), updateData).then(() => navigate('/publishers')).catch(console.error);
    }
  }

  if (!publisher) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Publisher</h1>
      <PublisherForm initialValue={publisher} onSubmit={handleSubmit}/>
    </div>
  );
}

export default EditPublisherPage;
