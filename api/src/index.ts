import express, { type Request, type Response } from 'express'
import { connectToDatabase } from './mongo'

import scoreRouter from './controllers/Score'

import cors from 'cors'

connectToDatabase()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/ping', (_req: Request, res: Response) => {
  res.json({ hola: 'hola' })
})

app.use('/api/score', scoreRouter)

app.use((_req: Request, res: Response) => {
  res.json({ error: 'error endpoint' }).status(404).end()
})

app.listen(3000, () => {
  console.log('Server is listening ')
})
