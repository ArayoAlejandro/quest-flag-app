import { useContext } from 'react'
import { type GameState, GameStateContext } from '../context/GameState'

export const useGameState = (): GameState => {
  const context = useContext(GameStateContext)

  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider')
  }

  return context
}
