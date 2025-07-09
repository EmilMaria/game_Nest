import React, { useState, useEffect, useRef } from 'react';
import './Snake.css';

const Snake = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [dir, setDir] = useState([0, -1]);
  const [gameOver, setGameOver] = useState(false);

  const boardSize = 20;
  const intervalRef = useRef(null);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = [...newSnake[0]];
    head[0] += dir[0];
    head[1] += dir[1];

    // Check collision
    if (
      head[0] < 0 || head[1] < 0 ||
      head[0] >= boardSize || head[1] >= boardSize ||
      newSnake.some(([x, y]) => x === head[0] && y === head[1])
    ) {
      setGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }

    newSnake.unshift(head);
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood([
        Math.floor(Math.random() * boardSize),
        Math.floor(Math.random() * boardSize),
      ]);
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const handleKey = (e) => {
    switch (e.key) {
      case 'ArrowUp': setDir([0, -1]); break;
      case 'ArrowDown': setDir([0, 1]); break;
      case 'ArrowLeft': setDir([-1, 0]); break;
      case 'ArrowRight': setDir([1, 0]); break;
      default: break;
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(moveSnake, 200);
    document.addEventListener('keydown', handleKey);
    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener('keydown', handleKey);
    };
  });

  return (
    <div className="snake-wrapper">
      <h2>Snake Game</h2>
      {gameOver && <h3 className="game-over">Game Over!</h3>}
      <div className="snake-board">
        {[...Array(boardSize)].map((_, y) =>
          [...Array(boardSize)].map((_, x) => {
            const isSnake = snake.some(([sx, sy]) => sx === x && sy === y);
            const isFood = food[0] === x && food[1] === y;
            return (
              <div
                key={`${x}-${y}`}
                className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Snake;
