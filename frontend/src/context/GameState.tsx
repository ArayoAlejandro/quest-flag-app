import { createContext, useState } from 'react'

import { EndPage } from '../components/Pages/EndPage'
import { GameCurrentPage } from '../components/Pages/GameCurrentPage'
import { LoadingPage } from '../components/Pages/LoadingPage'

export const GAME_STATES = {
  GAME_DEFAULT: 'GAME_DEFAULT',
  GAME_CURRENT: 'GAME_CURRENT',
  GAME_FINISH: 'GAME_FINISH'
}

const GAME_PAGE: Record<string, JSX.Element> = {
  GAME_DEFAULT: <LoadingPage/>,
  GAME_CURRENT: <GameCurrentPage />,
  GAME_FINISH: <EndPage />
}

export interface GameState {
  stateGame: typeof GAME_STATES[keyof typeof GAME_STATES]
  actualPage: JSX.Element
  changeStateGame: (gameState: typeof GAME_STATES[keyof typeof GAME_STATES]) => void

}

export const GameStateContext = createContext<GameState | null>(null)

export const GameStateProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [stateGame, setStateGame] = useState(GAME_STATES.GAME_DEFAULT)
  const actualPage = GAME_PAGE[stateGame]

  const changeStateGame = (gameState: typeof GAME_STATES[keyof typeof GAME_STATES]) => {
    setStateGame(gameState)
  }

  return (
    <GameStateContext.Provider value={
      {
        stateGame,
        changeStateGame,
        actualPage
      }
      }>
      {children}
    </GameStateContext.Provider>
  )
}
