import { Link } from 'react-router-dom'
import { gamesData } from '../data/gamesData'

export default function GameList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎯 Pick a Game!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gamesData.map((game) => (
          <Link to={`/games/${game.id}`} key={game.id} className="bg-white rounded-xl shadow-md hover:scale-105 transition transform p-4">
            <img src={game.image} alt={game.name} className="rounded-md h-40 w-full object-cover mb-2" />
            <h2 className="text-xl font-semibold">{game.name}</h2>
            <p className="text-sm text-gray-600">{game.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
