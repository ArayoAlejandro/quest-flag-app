import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'

function App (): JSX.Element {
  return (
    <div className='wrapper__main'>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>

  )
}

export default App
