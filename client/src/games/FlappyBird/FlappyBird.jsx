import React, { useState, useEffect } from 'react';
import './FlappyBird.css';

const FlappyBird = () => {
  const [birdY, setBirdY] = useState(200);
  const [gravity, setGravity] = useState(2);
  const [obstacles, setObstacles] = useState([{ left: 400, height: 150 }]);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleJump = () => setBirdY(prev => Math.max(prev - 50, 0));

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setBirdY(prev => prev + gravity);
      setObstacles(prev => prev.map(ob => ({ ...ob, left: ob.left - 5 })));

      if (obstacles[0].left < -50) {
        setObstacles([{ left: 400, height: Math.floor(Math.random() * 200 + 100) }]);
      }

      const hit = obstacles.some(ob =>
        ob.left < 50 &&
        (birdY < ob.height || birdY > ob.height + 100)
      );

      if (hit || birdY > 400) {
        setIsGameOver(true);
        clearInterval(gameLoop);
      }
    }, 30);

    return () => clearInterval(gameLoop);
  }, [birdY, obstacles]);

  return (
    <div className="flappy-wrapper" onClick={handleJump}>
      <h2>Flappy Bird</h2>
      {isGameOver && <h3 className="game-over">Game Over!</h3>}
      <div className="flappy-game">
        <div className="bird" style={{ top: birdY }} />
        {obstacles.map((ob, i) => (
          <React.Fragment key={i}>
            <div className="obstacle top" style={{ left: ob.left, height: ob.height }} />
            <div className="obstacle bottom" style={{ left: ob.left, top: ob.height + 100 }} />
          </React.Fragment>
        ))}
      </div>
      <p>Click / Tap to jump</p>
    </div>
  );
};

export default FlappyBird;
