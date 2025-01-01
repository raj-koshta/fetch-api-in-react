import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HowNotToFetchApi from './HowNotToFetchApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HowNotToFetchApi />
  </StrictMode>,
)
