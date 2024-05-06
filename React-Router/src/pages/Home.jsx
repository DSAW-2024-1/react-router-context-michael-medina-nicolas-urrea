import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const Home = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/overview">
          <button>Overview</button>
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
