import React, { useState, useEffect } from 'react';
import './ColorGuess.css';

const getRandomColor = () => {
  const r = () => Math.floor(Math.random() * 256);
  return `rgb(${r()}, ${r()}, ${r()})`;
};

const ColorGuess = () => {
  const [colors, setColors] = useState([]);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const newColors = Array(3).fill().map(getRandomColor);
    setColors(newColors);
    setAnswer(newColors[Math.floor(Math.random() * newColors.length)]);
    setMessage('');
  }, []);

  const handleGuess = (color) => {
    setMessage(color === answer ? 'Correct!' : 'Try Again!');
  };

  return (
    <div className="color-wrapper">
      <h2>Guess the Color: {answer}</h2>
      <div className="color-grid">
        {colors.map((c, i) => (
          <div key={i} style={{ background: c }} className="color-box" onClick={() => handleGuess(c)} />
        ))}
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ColorGuess;
