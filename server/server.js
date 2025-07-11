// server/server.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to GameNest API 🎮')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`)
})
