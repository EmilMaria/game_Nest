import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <h1 className="text-2xl font-bold">GameNest</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/about">About</Link>

      </div>
    </nav>
  )
}
