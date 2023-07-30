import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { ScoreProvider } from './context/Score'
import { FlagsQuestProvider } from './context/FlagsQuest'

import { Outlet } from 'react-router-dom'

function App (): JSX.Element {
  return (
    <FlagsQuestProvider>
      <ScoreProvider>
          <div className='wrapper__main'>
            <div>
              <Header />
              <main>
                <Outlet/>
              </main>
            </div>
            <Footer />
          </div>
      </ScoreProvider>
    </FlagsQuestProvider>
  )
}

export default App
