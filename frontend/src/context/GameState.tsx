import { createContext, useState } from 'react'
import { PlayPage } from '../components/Pages/PlayPage'
import { RegionPage } from '../components/Pages/RegionPage'
import { GamePage } from '../components/Pages/GamePage'
import { EndPage } from '../components/Pages/EndPage'
import { ScorePage } from '../components/Pages/ScorePage'

export const GAME_STATES = {
  GAME_START: 'GAME_START',
  GAME_SELECT_REGION: 'GAME_SELECT_REGION',
  GAME_CURRENT: 'GAME_CURRENT',
  GAME_SCORE: 'GAME_SCORE',
  GAME_FINISH: 'GAME_FINISH'
}

const GAME_PAGE: Record<string, JSX.Element> = {
  GAME_START: <PlayPage />,
  GAME_SELECT_REGION: <RegionPage />,
  GAME_CURRENT: <GamePage />,
  GAME_SCORE: <ScorePage />,
  GAME_FINISH: <EndPage />
}

export interface GameState {
  actualPage: JSX.Element
  changeStateGame: (gameState: typeof GAME_STATES[keyof typeof GAME_STATES]) => void
  resetGame: () => void
}

export const GameStateContext = createContext<GameState | null>(null)

export const GameStateProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [stateGame, setStateGame] = useState(GAME_STATES.GAME_START)
  const actualPage = GAME_PAGE[stateGame]

  const resetGame = () => {
    setStateGame(GAME_STATES.GAME_START)
  }

  const changeStateGame = (gameState: typeof GAME_STATES[keyof typeof GAME_STATES]) => {
    setStateGame(gameState)
  }

  return (
    <GameStateContext.Provider value={{ changeStateGame, actualPage, resetGame }}>
      {children}
    </GameStateContext.Provider>
  )
}
