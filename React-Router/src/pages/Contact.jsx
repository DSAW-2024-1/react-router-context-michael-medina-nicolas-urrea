import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const Contact = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/overview">
          <button>Overview</button>
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Contact;
