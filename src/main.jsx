import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { Instant } from './view/Instant.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Instant />
  </StrictMode>,
)
