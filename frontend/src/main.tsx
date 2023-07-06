import ReactDOM from 'react-dom/client'
import './index.css'
import { GameStateProvider } from './context/GameState'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <GameStateProvider>
        <App/>
    </GameStateProvider>
)
