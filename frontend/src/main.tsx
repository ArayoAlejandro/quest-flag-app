import ReactDOM from 'react-dom/client'
import { GameStateProvider } from './context/GameState'
import App from './App'
import { PlayPage } from './components/Pages/PlayPage'
import { ScorePage } from './components/Pages/ScorePage'
import { createBrowserRouter, RouterProvider, BrowserRouter, Outlet } from 'react-router-dom'
import { GamePage } from './components/Pages/GamePage'
import { RegionPage } from './components/Pages/RegionPage'
import { HowPlay } from './components/Pages/HowPlay'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PlayPage />
      },
      {
        path: '/scoreboard',
        element: <ScorePage />
      },
      {
        path: '/game',
        element: <GamePage />
      },
      {
        path: '/regions',
        element: <RegionPage />
      },
      {
        path: '/how-to-play',
        element: <HowPlay />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <GameStateProvider>
        <RouterProvider router={router} />
    </GameStateProvider>
)
