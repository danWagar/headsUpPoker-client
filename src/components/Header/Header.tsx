import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

interface Props {}

const Header: React.FC<Props> = () => {
  const hasToken = () => {
    if (TokenService.getAuthToken()) return true;
    return false;
  };

  const [loggedIn, setLoggedIn] = useState<boolean>(hasToken());

  const handleLogout = () => {
    console.log('handling logout');
    TokenService.clearAuthToken();
    setLoggedIn(false);
  };

  const renderLogin = () => {
    return (
      <nav>
        <button onClick={() => console.log('login button clicked')}>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>
      </nav>
    );
  };

  const renderLogout = () => {
    return (
      <nav>
        <button>
          <Link to="/dashboard">Home</Link>
        </button>
        <button onClick={() => handleLogout()}>
          <Link to="/">Logout</Link>
        </button>
      </nav>
    );
  };

  return (
    <header>
      <h1>Heads Up Poker Tournaments</h1>
      {loggedIn ? renderLogout() : renderLogin()}
    </header>
  );
};

export default Header;
