import { Router, type Request, type Response } from 'express'
import { ScoreAll, ScoreEurope, ScoreAfrica, ScoreOceania, ScoreAmerica, ScoreAsia } from '../models/Score'

const router = Router()
router.get('/all', async (_req: Request, res: Response) => {
  await ScoreAll.find()
    .then(score => res.json(score))
    .catch(error => { console.error(error) })
})

router.post('/all', async (req: Request, res: Response) => {
  const score = req.body

  const newScore = new ScoreAll({
    name: score.name,
    score: score.score
  })

  await newScore
    .save()
    .then(saveScore => res.json(saveScore))
    .catch(error => { console.error(error) })
})

router.get('/europe', async (_req: Request, res: Response) => {
  await ScoreEurope.find()
    .then(score => res.json(score))
    .catch(error => { console.error(error) })
})

router.post('/europe', async (req: Request, res: Response) => {
  const score = req.body

  const newScore = new ScoreEurope({
    name: score.name,
    score: score.score
  })

  await newScore
    .save()
    .then(saveScore => res.json(saveScore))
    .catch(error => { console.error(error) })
})

router.get('/africa', async (_req: Request, res: Response) => {
  await ScoreAfrica.find()
    .then(score => res.json(score))
    .catch(error => { console.error(error) })
})

router.post('/africa', async (req: Request, res: Response) => {
  const score = req.body

  const newScore = new ScoreAfrica({
    name: score.name,
    score: score.score
  })

  await newScore
    .save()
    .then(saveScore => res.json(saveScore))
    .catch(error => { console.error(error) })
})

router.get('/oceania', async (_req: Request, res: Response) => {
  await ScoreOceania.find()
    .then(score => res.json(score))
    .catch(error => { console.error(error) })
})

router.post('/oceania', async (req: Request, res: Response) => {
  const score = req.body

  const newScore = new ScoreOceania({
    name: score.name,
    score: score.score
  })

  await newScore
    .save()
    .then(saveScore => res.json(saveScore))
    .catch(error => { console.error(error) })
})

router.get('/america', async (_req: Request, res: Response) => {
  await ScoreAmerica.find()
    .then(score => res.json(score))
    .catch(error => { console.error(error) })
})

router.post('/america', async (req: Request, res: Response) => {
  const score = req.body

  const newScore = new ScoreAmerica({
    name: score.name,
    score: score.score
  })

  await newScore
    .save()
    .then(saveScore => res.json(saveScore))
    .catch(error => { console.error(error) })
})

router.get('/asia', async (_req: Request, res: Response) => {
  await ScoreAsia.find()
    .then(score => res.json(score))
    .catch(error => { console.error(error) })
})

router.post('/asia', async (req: Request, res: Response) => {
  const score = req.body

  const newScore = new ScoreAsia({
    name: score.name,
    score: score.score
  })

  await newScore
    .save()
    .then(saveScore => res.json(saveScore))
    .catch(error => { console.error(error) })
})
export default router
