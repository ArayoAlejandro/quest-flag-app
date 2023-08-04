import { useState, type FC, useEffect } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Modal } from './Modal'
import { useGameState } from '../hooks/useGameState'
import { GAME_STATES } from '../context/GameState'
import { useScore } from '../hooks/useScore'

export const Header: FC = () => {
  const { stateGame, changeStateGame } = useGameState()
  const { deactivateScore, activateScore } = useScore()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen
      ? deactivateScore()
      : activateScore()
  }, [isOpen])

  const variants = {
    hover: {
      rotateZ: [0, 30, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity
      }
    },
    rest: {
      rotateZ: [0, -360],
      y: [0, -50, 0],
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    }
  }

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (stateGame === GAME_STATES.GAME_CURRENT) {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  return (
    <>
      <nav className='header'>
        <ul className='header__list'>
          <li className='header__item'>
            <motion.h1 whileHover='hover' whileTap='rest' >
              <Link to="/" onClick={handleClick}>Flags Quiz
                <motion.span variants={variants} className='header__logo__emote'>🚩</motion.span>
              </Link>
            </motion.h1>
          </li>
        </ul>
      </nav>
      {
        isOpen &&
        <Modal setIsOpen={setIsOpen}>
          <>
            <h2>Estas jugando ahora mismo <span>❗❗</span></h2>
            <p>Deseas abandonar esta partida, no podrás recuperar tu puntuación.</p>
            <div className='modal__game__exit__button'>
              <Link to="/" className='modal__game__exit__button__abort' onClick={() => { changeStateGame(GAME_STATES.GAME_DEFAULT) }}>Abandonar</Link>
              <button className='modal__game__exit__button__cancel'>Cancelar</button>
            </div>
          </>
        </Modal>
      }
    </>
  )
}
