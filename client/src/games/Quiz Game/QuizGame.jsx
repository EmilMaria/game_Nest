import React, { useState } from 'react';
import './QuizGame.css';

const questions = [
  { q: 'What is the capital of France?', a: 'Paris' },
  { q: 'What is 2 + 2?', a: '4' },
  { q: 'What color is the sky?', a: 'Blue' },
];

const QuizGame = () => {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (input.toLowerCase() === questions[index].a.toLowerCase()) {
      setScore(s => s + 1);
    }
    setInput('');
    if (index < questions.length - 1) {
      setIndex(i => i + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-wrapper">
      <h2>Quiz Game</h2>
      {showResult ? (
        <h3>Your Score: {score} / {questions.length}</h3>
      ) : (
        <>
          <p>{questions[index].q}</p>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button onClick={handleAnswer}>Submit</button>
        </>
      )}
    </div>
  );
};

export default QuizGame;
