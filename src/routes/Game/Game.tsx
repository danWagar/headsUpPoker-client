import React, { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './Game.css';

const Game: React.FC = () => {
  const [dealer, setDealer] = useState<string>('player1');

  const moveDealerButton = (event: MouseEvent<HTMLDivElement>): void => {
    if (dealer === 'player1') setDealer('player2');
    else setDealer('player1');
  };

  return (
    <section className="Game">
      <div className="Game__table_container">
        <div className="Game__table"></div>
        <div className="Game__table_inlay">
          <div>
            <h2>Heads Up</h2>
            <span>Tournaments</span>
          </div>
        </div>
        <div
          className={cx({ Game__dealer_button: true, move: dealer === 'player2' })}
          onClick={moveDealerButton}
        ></div>
      </div>
      <button>
        <Link to="/dashboard">Forfeit Game</Link>
      </button>
    </section>
  );
};

export default Game;
