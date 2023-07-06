import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { GameStateProvider } from './context/GameState.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <GameStateProvider>
        <App />
    </GameStateProvider>
)
