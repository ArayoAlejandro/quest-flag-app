import { useEffect } from 'react'
import { useFlags } from '../../hooks/useFlags'
import { useScore } from '../../hooks/useScore'
import { useFormScore } from '../../hooks/useFormScore'
import { Link } from 'react-router-dom'
import { useGameState } from '../../hooks/useGameState'
import { GAME_STATES } from '../../context/GameState'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export const EndPage = (): JSX.Element => {
  const { submitForm, score } = useFormScore()
  const { answers } = useFlags()
  const { deactivateScore } = useScore()
  const { changeStateGame } = useGameState()

  useEffect(() => {
    deactivateScore()
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })

    return () => { changeStateGame(GAME_STATES.GAME_DEFAULT) }
  }, [])

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
        <motion.span className='game__end__score'
          initial={{}}
        >
          {`Score ${score}`}
        </motion.span>
        <form className='game__end__form' onSubmit={submitForm}>
          <input className='game__end__form__input' type="text" name="name" placeholder='Nombre' required />
          <button className='game__end__form__button'>Enviar</button>
        </form>
        <div className='game__end__link'>
          <Link to="/scoreboard" className='game__end__link__button'>Puntuación mundial</Link>
          <Link to="/" className='game__end__link__button'>Volver a jugar</Link>
        </div>
      </div>
    </section>
  )
}
