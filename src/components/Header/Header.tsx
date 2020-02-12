import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import { AuthContext } from '../../context/AuthContext';
import './Header.css';

interface Props {}

const Header: React.FC<Props> = () => {
  const { hasToken, setHasToken } = useContext(AuthContext);

  const handleLogout = () => {
    console.log('handling logout');
    TokenService.clearAuthToken();
    setHasToken(TokenService.hasAuthToken());
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
    <header className="Header">
      <h1>Heads Up Poker Tournaments</h1>
      {hasToken ? renderLogout() : renderLogin()}
    </header>
  );
};

export default Header;
