// src/pages/EditBookPage.tsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBook, updateBook } from '../api/BookAPI';
import { Book } from '../types';
import BookForm from '../components/BookForm';

function EditBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) {
      getBook(Number(id)).then(setBook).catch(console.error);
    }
  }, [id]);

  function handleSubmit(updateData: any) {
    if (id) {
      updateBook(Number(id), updateData).then(() => {
        navigate('/books');
      }).catch(console.error);
    }
  }

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Book</h1>
      <BookForm initialValue={book} onSubmit={handleSubmit}/>
    </div>
  );
}

export default EditBookPage;
