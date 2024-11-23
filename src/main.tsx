import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DotDagerPortfolio from './components/dot-dager-portfolio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DotDagerPortfolio />
  </StrictMode>,
)
