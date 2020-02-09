import React from 'react';

export default function Header() {
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
}
