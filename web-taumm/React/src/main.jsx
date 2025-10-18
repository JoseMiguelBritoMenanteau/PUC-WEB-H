import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Share } from './context/Context.jsx'


import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Share>
      <App />
    </Share>
  </StrictMode>,
)
