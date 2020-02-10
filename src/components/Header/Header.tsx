import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Header: React.FC<Props> = () => {
  const renderLogin = () => {
    return (
      <nav>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>Register</button>
      </nav>
    );
  };

  return (
    <header>
      <h1>Heads Up Poker Tournaments</h1>
      {renderLogin()}
    </header>
  );
};

export default Header;
