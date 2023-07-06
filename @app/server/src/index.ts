import express, { type Request, type Response } from 'express'

const app = express()

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel now with husky')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(() => {
  console.log('Server is listening ')
})
