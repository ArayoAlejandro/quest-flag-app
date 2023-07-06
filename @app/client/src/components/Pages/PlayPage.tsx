import { GAME_STATES } from '../../context/GameState'
import { useGameState } from '../../hooks/useGameState'

export const PlayPage = (): JSX.Element => {
  const { setStateGame } = useGameState()
  return (
    <button onClick={() => { setStateGame(GAME_STATES.GAME_SELECT_REGION) }}>
        Play
    </button>

  )
}
