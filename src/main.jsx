import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import HowNotToFetchApi from './HowNotToFetchApi.jsx'
import HowToFetchApi from './HowToFetchApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HowNotToFetchApi /> */}
    <HowToFetchApi />
  </StrictMode>,
)
