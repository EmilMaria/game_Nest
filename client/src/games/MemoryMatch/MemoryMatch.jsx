import { useEffect, useState } from 'react'
import './MemoryMatch.css'

const cardsArray = [
  { id: 1, emoji: '🐶' },
  { id: 2, emoji: '🐱' },
  { id: 3, emoji: '🐻' },
  { id: 4, emoji: '🦁' },
  { id: 5, emoji: '🐸' },
  { id: 6, emoji: '🐵' },
]

function shuffleCards() {
  const doubled = [...cardsArray, ...cardsArray]
  return doubled
    .map((card) => ({ ...card, uuid: Math.random() }))
    .sort(() => Math.random() - 0.5)
}

export default function MemoryMatch() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])

  useEffect(() => {
    setCards(shuffleCards())
  }, [])

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped
      if (first.emoji === second.emoji) {
        setMatched([...matched, first.id])
      }
      setTimeout(() => setFlipped([]), 1000)
    }
  }, [flipped])

  const handleClick = (card, index) => {
    const alreadyFlipped = flipped.find((c) => c.uuid === card.uuid)
    if (
      flipped.length === 2 ||
      alreadyFlipped ||
      matched.includes(card.id)
    )
      return

    setFlipped([...flipped, { ...card, index }])
  }

  const isFlipped = (card) =>
    flipped.find((c) => c.uuid === card.uuid) || matched.includes(card.id)

  return (
    <div className="memory-container">
      <div className="memory-grid">
        {cards.map((card, idx) => (
          <div
            key={card.uuid}
            className={`memory-card ${isFlipped(card) ? 'flipped' : ''}`}
            onClick={() => handleClick(card, idx)}
          >
            <div className="front">❓</div>
            <div className="back">{card.emoji}</div>
          </div>
        ))}
      </div>
      {matched.length === cardsArray.length && (
        <div className="memory-win">🎉 You matched them all!</div>
      )}
    </div>
  )
}
