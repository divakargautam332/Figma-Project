import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lfooter from './components/lfooter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Lfooter/>
  </StrictMode>,
)
