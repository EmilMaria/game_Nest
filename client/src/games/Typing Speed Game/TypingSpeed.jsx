import React, { useState, useEffect } from 'react';
import './TypingSpeed.css';

const words = ['javascript', 'react', 'coding', 'frontend', 'developer', 'keyboard'];

const TypingSpeed = () => {
  const [word, setWord] = useState('');
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started && time > 0) {
      const timer = setInterval(() => setTime(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [started, time]);

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const handleInput = (e) => {
    const val = e.target.value;
    setInput(val);
    if (val === word) {
      setScore(s => s + 1);
      setWord(words[Math.floor(Math.random() * words.length)]);
      setInput('');
    }
  };

  const startGame = () => {
    setScore(0);
    setTime(30);
    setStarted(true);
    setInput('');
    setWord(words[Math.floor(Math.random() * words.length)]);
  };

  return (
    <div className="typing-wrapper">
      <h2>Typing Speed Test</h2>
      <p>Time Left: {time}s</p>
      <p className="word">{word}</p>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        disabled={!started || time === 0}
      />
      <button onClick={startGame}>Start</button>
      <p>Score: {score}</p>
    </div>
  );
};

export default TypingSpeed;
