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
    <section className='game__end'>
      <table className='game__end__table'>
        <tr className='game__end__row'>
          <th>Pregunta</th>
          <th>Bandera</th>
          <th>Respuesta</th>
          <th>Correcto</th>
        </tr>
        {
          answers.map((answerResult, key) =>
            <tr className='game__end__row game__end__item' key={key}>
              <td>
                <span className='game__end__item__question'>{answerResult.questIndex + 1}.</span>
              </td>
              <td>
                <img className="game__end__item__image" src={answerResult.flag.flags.svg} alt="" />
                <p className="game__end__item__flagname">{answerResult.flag.translations.spa.common}</p>
              </td>
              <td>
                <p className={`game__end__item__answer ${answerResult.isCorrectAnswer ? 'game__end__item__answer-correct' : 'game__end__item__answer-incorrect'} `} >{answerResult.answer}</p>
              </td>
              <td>
                {answerResult.isCorrectAnswer ? '✅' : '❌'}
              </td>
            </tr>
          )
        }
      </table>
      <div className='game__end__footer'>
        <span className='game__end__score'>{`Score ${score}`}</span>
        <form className='game__end__form' onSubmit={submitForm}>
          <input className='game__end__form__input' type="text" name="name" placeholder='Nombre' required />
          <button className='game__end__form__button'>Enviar</button>
        </form>
        <div className='game__end__link'>
          <button className='game__end__link__button' onClick={() => { handleClick(GAME_STATES.GAME_SCORE) }}>Puntuacion mundial</button>
          <button className='game__end__link__button' onClick={() => { handleClick(GAME_STATES.GAME_START) }}>Volver a jugar</button>
        </div>
      </div>
    </section>
  )
}
