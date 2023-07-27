import { type FC } from 'react'
import { GAME_STATES } from '../context/GameState'
import { useChangeState } from '../hooks/useChangeState'
import { motion } from 'framer-motion'

export const Header: FC = () => {
  const { changeGameStateReset } = useChangeState()

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

  return (
    <nav className='header'>
      <ul className='header__list'>
        <li className='header__item'>
          <motion.h1 whileHover='hover' whileTap='rest' >
            <a onClick={() => { changeGameStateReset(GAME_STATES.GAME_START) }}>Flags Quiz
              <motion.span variants={variants} className='header__logo__emote'>🚩</motion.span>
            </a>
          </motion.h1>
        </li>
        <li className='header__item'>
          <a onClick={() => { changeGameStateReset(GAME_STATES.GAME_SCORE) }}>Clasificación</a>
        </li>
      </ul>

    </nav>
  )
}
