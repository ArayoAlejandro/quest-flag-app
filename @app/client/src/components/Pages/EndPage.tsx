import { useEffect } from 'react'
import { GAME_STATES } from '../../context/GameState'
import { useFlags } from '../../hooks/useFlags'
import { useGameState } from '../../hooks/useGameState'
import { useScore } from '../../hooks/useScore'

export const EndPage = (): JSX.Element => {
  const { answers, resetAnswers } = useFlags()
  const { setStateGame } = useGameState()
  const { setActiveScore, score } = useScore()

  useEffect(() => {
    setActiveScore(false)
  }, [])

  const handleClick = (): void => {
    resetAnswers()
    setStateGame(GAME_STATES.GAME_START)
  }

  return (
    <>
      <h1>GAME END</h1>
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
      <form>
        <input type="text" placeholder='Nombre'/>
        <button>Enviar</button>
      </form>

      <button onClick={handleClick}>Volver a jugar</button>
    </>
  )
}
