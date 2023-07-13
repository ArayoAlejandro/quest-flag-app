import { GAME_STATES } from '../../context/GameState'
import { useGameState } from '../../hooks/useGameState'

export const PlayPage = (): JSX.Element => {
  const { changeStateGame } = useGameState()
  return (
    <>
      <button onClick={() => { changeStateGame(GAME_STATES.GAME_SELECT_REGION) }}>
        Play
      </button>
      <button onClick={() => { changeStateGame(GAME_STATES.GAME_SCORE) }}>
        ScoreBoard
      </button>
    </>
  )
}
