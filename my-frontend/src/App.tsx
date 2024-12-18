// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import PublishersPage from './pages/PublishersPage';
import AddPublisherPage from './pages/AddPublisherPage';
import EditPublisherPage from './pages/EditPublisherPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/books">Books</Link>{" | "}
        <Link to="/publishers">Publishers</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/add" element={<AddBookPage />} />
        <Route path="/books/edit/:id" element={<EditBookPage />} />
        <Route path="/publishers" element={<PublishersPage />} />
        <Route path="/publishers/add" element={<AddPublisherPage />} />
        <Route path="/publishers/edit/:id" element={<EditPublisherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
