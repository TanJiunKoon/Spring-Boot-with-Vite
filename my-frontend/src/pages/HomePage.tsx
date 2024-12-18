// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Book & Publisher Management</h1>
      <p><Link to="/books">Manage Books</Link></p>
      <p><Link to="/publishers">Manage Publishers</Link></p>
    </div>
  );
}

export default HomePage;
