// src/pages/AddBookPage.tsx
import { useNavigate } from 'react-router-dom';
import { addBook } from '../api/BookAPI';
import BookForm from '../components/BookForm';

function AddBookPage() {
  const navigate = useNavigate();

  function handleSubmit(bookData: any) {
    addBook(bookData).then(() => {
      navigate('/books');
    }).catch(console.error);
  }

  return (
    <div>
      <h1>Add Book</h1>
      <BookForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default AddBookPage;
