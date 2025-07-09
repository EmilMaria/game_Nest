import React, { useEffect, useState } from 'react';
import './DinoRunner.css';

const DinoRunner = () => {
  const [jump, setJump] = useState(false);
  const [obstacleLeft, setObstacleLeft] = useState(500);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setObstacleLeft(l => {
        if (l <= 0) {
          setScore(s => s + 1);
          return 500;
        }
        return l - 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (obstacleLeft < 60 && obstacleLeft > 0 && !jump) {
      setGameOver(true);
    }
  }, [obstacleLeft, jump]);

  const handleJump = () => {
    if (!jump) {
      setJump(true);
      setTimeout(() => setJump(false), 500);
    }
  };

  return (
    <div className="dino-wrapper" onClick={handleJump}>
      <h2>Dino Jump</h2>
      <div className="game-box">
        <div className={`dino ${jump ? 'jump' : ''}`}></div>
        <div className="obstacle" style={{ left: obstacleLeft }}></div>
      </div>
      <p>Score: {score}</p>
      {gameOver && <h3>Game Over</h3>}
      <p>Click / Tap to jump</p>
    </div>
  );
};

export default DinoRunner;
