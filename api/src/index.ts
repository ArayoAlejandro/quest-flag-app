import express, { type Request, type Response } from 'express'

const app = express()

app.get('/api/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(3000, () => {
  console.log('Server is listening ')
})
