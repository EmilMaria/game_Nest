// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GameList from './pages/GameList'
import GamePage from './pages/GamePage'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/:gameId" element={<GamePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
       <Footer />
    </Router>
  )
}
