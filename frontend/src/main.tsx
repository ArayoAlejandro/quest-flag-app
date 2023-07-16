import ReactDOM from 'react-dom/client'
import { GameStateProvider } from './context/GameState'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <GameStateProvider>
        <App/>
    </GameStateProvider>
)
