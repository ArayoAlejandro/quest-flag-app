import { type FormEvent } from 'react'
import { useFlags } from './useFlags'
import { useGameState } from './useGameState'
import { useScore } from './useScore'
import { type Score } from '../types/ScoreType'
import { postScores } from '../services/score'
import { GAME_STATES } from '../context/GameState'

export const useFormScore = () => {
  const { resetAnswers, regionGame } = useFlags()
  const { changeStateGame } = useGameState()
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
        changeStateGame(GAME_STATES.GAME_SCORE)
      })
      .catch(e => { console.log(e) })
  }
  return { submitForm, score }
}
