import React, { useState, useEffect } from 'react';
import './Game2048.css';

const SIZE = 4;

const Game2048 = () => {
  const [board, setBoard] = useState(generateBoard());

  useEffect(() => {
    const handleKey = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const newBoard = moveBoard(board, e.key);
        if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
          setBoard(addNewTile(newBoard));
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [board]);

  return (
    <div className="game2048-wrapper">
      <h2>2048</h2>
      <div className="board2048">
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div key={`${i}-${j}`} className={`cell2048 value-${cell}`}>
              {cell !== 0 ? cell : ''}
            </div>
          ))
        )}
      </div>
      <p>Use arrow keys to play</p>
    </div>
  );
};

function generateBoard() {
  const board = Array(SIZE).fill().map(() => Array(SIZE).fill(0));
  return addNewTile(addNewTile(board));
}

function addNewTile(board) {
  const empty = [];
  board.forEach((row, i) => row.forEach((cell, j) => {
    if (cell === 0) empty.push([i, j]);
  }));
  if (empty.length === 0) return board;
  const [i, j] = empty[Math.floor(Math.random() * empty.length)];
  board[i][j] = Math.random() < 0.9 ? 2 : 4;
  return [...board.map(r => [...r])];
}

function moveBoard(board, dir) {
  const clone = board.map(r => [...r]);
  for (let i = 0; i < SIZE; i++) {
    let row = clone[i];
    if (dir === 'ArrowRight' || dir === 'ArrowLeft') {
      row = dir === 'ArrowLeft' ? row : row.reverse();
      const filtered = row.filter(n => n);
      for (let j = 0; j < filtered.length - 1; j++) {
        if (filtered[j] === filtered[j + 1]) {
          filtered[j] *= 2;
          filtered[j + 1] = 0;
        }
      }
      const newRow = filtered.filter(n => n);
      while (newRow.length < SIZE) newRow.push(0);
      clone[i] = dir === 'ArrowLeft' ? newRow : newRow.reverse();
    }
  }

  if (dir === 'ArrowUp' || dir === 'ArrowDown') {
    for (let j = 0; j < SIZE; j++) {
      let col = [];
      for (let i = 0; i < SIZE; i++) col.push(clone[i][j]);
      col = dir === 'ArrowUp' ? col : col.reverse();
      const filtered = col.filter(n => n);
      for (let i = 0; i < filtered.length - 1; i++) {
        if (filtered[i] === filtered[i + 1]) {
          filtered[i] *= 2;
          filtered[i + 1] = 0;
        }
      }
      const newCol = filtered.filter(n => n);
      while (newCol.length < SIZE) newCol.push(0);
      for (let i = 0; i < SIZE; i++) clone[i][j] = dir === 'ArrowUp' ? newCol[i] : newCol.reverse()[i];
    }
  }

  return clone;
}

export default Game2048;
