import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cv from './pages/cv/Cv.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cv />
  </StrictMode>,
)
