
import { useGameState } from '../../hooks/useGameState'

export const GamePage = (): JSX.Element => {
  const { actualPage } = useGameState()

  return actualPage
}
