import { type FormEvent } from 'react'
import { useFlags } from './useFlags'
import { useScore } from './useScore'
import { type Score } from '../types/ScoreType'
import { postScores } from '../services/score'
import { useNavigate } from 'react-router-dom'

export const useFormScore = () => {
  const { resetAnswers, regionGame } = useFlags()
  const navigate = useNavigate()
  const { score } = useScore()

  const submitForm = (e: FormEvent): void => {
    resetAnswers()
    e.preventDefault()
    const dataForm = new FormData(e.target as HTMLFormElement)

    const nameInput = dataForm.get('name')
    if (nameInput === null) return
    const scoreData: Score = {
      name: nameInput.toString(),
      score
    }

    postScores({ scoreData, urlApiScore: regionGame })
      .then(() => {
        navigate('/scoreboard')
      })
      .catch(e => { console.log(e) })
  }
  return { submitForm, score }
}
