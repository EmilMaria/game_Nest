import { useParams } from 'react-router-dom'
import { gamesData } from '../data/gamesData'

// ✅ Import all 10 game components


import TicTacToe from '../games/TicTacToe/TicTacToe'
import MemoryMatch from '../games/MemoryMatch/MemoryMatch'
import Snake from '../games/Snake/Snake'
import RockPaperScissors from '../games/Rock Paper Scissors/RockPaperScissors'
import DinoRunner from '../games/Dino Runner Game/DinoRunner'
import FlappyBird from '../games/FlappyBird/FlappyBird'
import Game2048 from '../games/Game2048/Game2048'
import TypingSpeed from '../games/Typing Speed Game/TypingSpeed'
import QuizGame from '../games/Quiz Game/QuizGame'
import ColorGuess from '../games/Color Guess Game/ColorGuess'

export default function GamePage() {
  const { gameId } = useParams()
  const game = gamesData.find(g => g.id === gameId)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">{game?.name}</h1>

      {/* ✅ Render the matching game component */}
      {gameId === 'tictactoe' && <TicTacToe />}
      {gameId === 'memory' && <MemoryMatch />}
      {gameId === 'snake' && <Snake />}
      {gameId === 'rockpaperscissors' && <RockPaperScissors />}
      {gameId === 'dino' && <DinoRunner />}
      {gameId === 'flappy' && <FlappyBird />}
      {gameId === '2048' && <Game2048 />}
      {gameId === 'typing' && <TypingSpeed />}
      {gameId === 'quiz' && <QuizGame />}
      {gameId === 'color' && <ColorGuess />}
      
      {!game && (
        <p className="text-center text-red-500 mt-6">Game not found 😢</p>
      )}
    </div>
  )
}

