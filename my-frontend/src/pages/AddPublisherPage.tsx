// src/pages/AddPublisherPage.tsx
import { useNavigate } from 'react-router-dom';
import { addPublisher } from '../api/PublisherAPI';
import PublisherForm from '../components/PublisherForm';

function AddPublisherPage() {
  const navigate = useNavigate();

  function handleSubmit(publisherData: any) {
    addPublisher(publisherData).then(() => navigate('/publishers')).catch(console.error);
  }

  return (
    <div>
      <h1>Add Publisher</h1>
      <PublisherForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default AddPublisherPage;
