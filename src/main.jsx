import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GameSettingsProvider } from './contexts/GameSettingsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameSettingsProvider>
      <App />
    </GameSettingsProvider>
  </StrictMode>
)