import { type FormEvent, useEffect } from 'react'
import { GAME_STATES } from '../../context/GameState'
import { useFlags } from '../../hooks/useFlags'
import { useGameState } from '../../hooks/useGameState'
import { useScore } from '../../hooks/useScore'
import { type Score } from '../../types/ScoreType'

export const EndPage = (): JSX.Element => {
  const { answers, resetAnswers } = useFlags()
  const { setStateGame } = useGameState()
  const { setActiveScore, score } = useScore()

  useEffect(() => {
    setActiveScore(false)
  }, [])

  const handleClick = (gameState: string): void => {
    resetAnswers()
    setStateGame(gameState)
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    const dataForm = new FormData(e.target as HTMLFormElement)

    const nameInput = dataForm.get('name')
    if (nameInput === null) return
    const scoreData: Score = {
      name: nameInput.toString(),
      score

    }

    fetch('http://localhost:3000/api/score', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(scoreData)
    })
      .then(() => {
        setStateGame(GAME_STATES.GAME_SCORE)
      })
  }

  return (
    <>
      <h2>GAME END</h2>
      <span>{`Score ${score}`}</span>
      <ul>
        {
          answers.map((answerResult, key) =>
            <li key={key}>
              {answerResult.questIndex}
              {answerResult.answer}
              {answerResult.isCorrectAnswer ? '😁' : '😡'}
            </li>)
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Nombre' required />
        <button>Enviar</button>
      </form>
      <button onClick={() => { handleClick(GAME_STATES.GAME_SCORE) }}>Puntuacion mundial</button>
      <button onClick={() => { handleClick(GAME_STATES.GAME_START) }}>Volver a jugar</button>
    </>
  )
}
