// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import PublishersPage from './pages/PublishersPage';
import AddPublisherPage from './pages/AddPublisherPage';
import EditPublisherPage from './pages/EditPublisherPage';

import { AppBar, Toolbar, Button, Container } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/books">Books</Button>
          <Button color="inherit" component={Link} to="/publishers">Publishers</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/add" element={<AddBookPage />} />
          <Route path="/books/edit/:id" element={<EditBookPage />} />
          <Route path="/publishers" element={<PublishersPage />} />
          <Route path="/publishers/add" element={<AddPublisherPage />} />
          <Route path="/publishers/edit/:id" element={<EditPublisherPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
