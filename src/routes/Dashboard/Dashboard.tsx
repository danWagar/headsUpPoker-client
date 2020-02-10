import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <section className="Dashboard">
      <header>
        <h2>Welcome to your dashboard</h2>
      </header>
      <section>
        <button>
          <Link to="/game/1">Start new game</Link>
        </button>
      </section>
    </section>
  );
};

export default Dashboard;
