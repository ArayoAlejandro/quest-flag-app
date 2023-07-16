import { type FC } from 'react'
import { GAME_STATES } from '../context/GameState'
import { useChangeState } from '../hooks/useChangeState'

export const Header: FC = () => {
  const { changeGameStateReset } = useChangeState()
  return (
    <nav className='header'>
      <ul>
        <li>
          <h1><a onClick={() => { changeGameStateReset(GAME_STATES.GAME_START) }}>Flags Quiz 🚩</a></h1>
        </li>
        <li>
          <a onClick={() => { changeGameStateReset(GAME_STATES.GAME_SCORE) }}>Clasificación</a>
        </li>
      </ul>

    </nav>
  )
}
