// src/components/BookList.tsx
import { Book } from '../types';

interface BookListProps {
  books: Book[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function BookList({ books, onEdit, onDelete }: BookListProps) {
  return (
    <div>
      <h2>Books</h2>
      {books.length === 0 ? <p>No books found.</p> : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} ({book.pages} pages)
              <button onClick={() => onEdit(book.id!)}>Edit</button>
              <button onClick={() => onDelete(book.id!)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
