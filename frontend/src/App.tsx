import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { ScoreProvider } from './context/Score'
import { FlagsQuestProvider } from './context/FlagsQuest'

import { useGameState } from './hooks/useGameState'

function App (): JSX.Element {
  const { actualPage } = useGameState()

  return (
    <FlagsQuestProvider>
      <ScoreProvider>
        <div className='wrapper__main'>
          <div>
            <Header />
            <main>
              {actualPage}
            </main>
          </div>
          <Footer />
        </div>
      </ScoreProvider>
    </FlagsQuestProvider>
  )
}

export default App
