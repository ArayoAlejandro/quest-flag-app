import express, { type Request, type Response } from 'express'
import { connectToDatabase } from './mongo'
import { Score } from './models/Score'
import cors from 'cors'
connectToDatabase()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/ping', (_req: Request, res: Response) => {
  res.send('Pong')
})

app.get('/api/score', async (_req: Request, res: Response) => {
  await Score.find()
    .then(score => res.json(score))
    .catch(error => { console.error(error) })
})

app.post('/api/score', async (req: Request, res: Response) => {
  const score = req.body

  const newScore = new Score({
    name: score.name,
    score: score.score
  })

  await newScore
    .save()
    .then(saveScore => res.json(saveScore))
    .catch(error => { console.error(error) })
})

app.use((_req, res) => {
  res.status(404).end()
})

app.listen(3000, () => {
  console.log('Server is listening ')
})
