import React, { useState } from 'react';
import './RockPaperScissors.css';

const options = ['rock', 'paper', 'scissors'];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const play = (choice) => {
    const compChoice = options[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) setResult('It\'s a tie!');
    else if (
      (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'paper' && compChoice === 'rock') ||
      (choice === 'scissors' && compChoice === 'paper')
    ) setResult('You Win!');
    else setResult('You Lose!');
  };

  return (
    <div className="rps-wrapper">
      <h2>Rock Paper Scissors</h2>
      <div className="buttons">
        {options.map(opt => (
          <button key={opt} onClick={() => play(opt)}>{opt}</button>
        ))}
      </div>
      {userChoice && (
        <div className="result">
          <p>You: {userChoice}</p>
          <p>Computer: {computerChoice}</p>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
