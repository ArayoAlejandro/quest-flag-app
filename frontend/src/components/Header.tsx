import { type FC } from 'react'
import { useGameState } from '../hooks/useGameState'
import { GAME_STATES } from '../context/GameState'

export const Header: FC = () => {
  const { changeStateGame } = useGameState()
  return (
    <nav className='header'>
      <ul>
        <li>
          <h1><a onClick={() => { changeStateGame(GAME_STATES.GAME_START) }}>Flags Quiz 🚩</a></h1>
        </li>
        <li>
          <a onClick={() => { changeStateGame(GAME_STATES.GAME_SCORE) }}>Clasificación</a>
        </li>
      </ul>

    </nav>
  )
}
