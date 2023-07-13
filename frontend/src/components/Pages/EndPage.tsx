import { useEffect } from 'react'
import { GAME_STATES } from '../../context/GameState'
import { useFlags } from '../../hooks/useFlags'
import { useGameState } from '../../hooks/useGameState'
import { useScore } from '../../hooks/useScore'
import { useFormScore } from '../../hooks/useFormScore'

export const EndPage = (): JSX.Element => {
  const { submitForm, score } = useFormScore()
  const { answers, resetAnswers } = useFlags()
  const { changeStateGame } = useGameState()
  const { deactivateScore } = useScore()

  useEffect(() => {
    deactivateScore()
  }, [])

  const handleClick = (gameState: string): void => {
    resetAnswers()
    changeStateGame(gameState)
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
            </li>
          )
        }
      </ul>
      <form onSubmit={submitForm}>
        <input type="text" name="name" placeholder='Nombre' required />
        <button>Enviar</button>
      </form>

      <button onClick={() => { handleClick(GAME_STATES.GAME_SCORE) }}>Puntuacion mundial</button>
      <button onClick={() => { handleClick(GAME_STATES.GAME_START) }}>Volver a jugar</button>
    </>
  )
}
