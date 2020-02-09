import React from 'react';

interface Props {}

const Header: React.FC<Props> = () => {
  const renderLogin = () => {
    return (
      <nav>
        <button>Login</button>
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
