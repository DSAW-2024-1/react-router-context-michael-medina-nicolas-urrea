import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const Overview = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Overview</h1>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Overview;
