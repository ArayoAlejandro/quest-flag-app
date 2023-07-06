import './App.css'
import { Header } from './components/Header'
import { useGameState } from './hooks/useGameState'
import { ScoreProvider } from './context/Score'

import { FlagsQuestProvider } from './context/FlagsQuest'

function App (): JSX.Element {
  const { actualPage } = useGameState()

  return (
    <FlagsQuestProvider>
      <ScoreProvider >
        <>
          <Header />
          <main>
            {actualPage}
          </main>
        </>
      </ScoreProvider >
    </FlagsQuestProvider>
  )
}

export default App
