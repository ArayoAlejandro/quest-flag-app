import { type GAME_STATES } from '../context/GameState'
import { Region } from '../services/score'
import { useFlags } from './useFlags'
import { useGameState } from './useGameState'

export const useChangeState = () => {
  const { setRegionGame } = useFlags()
  const { changeStateGame } = useGameState()

  const changeGameStateReset = (gameState: typeof GAME_STATES[keyof typeof GAME_STATES]) => {
    setRegionGame(Region.all)
    changeStateGame(gameState)
  }

  return { changeGameStateReset }
}
