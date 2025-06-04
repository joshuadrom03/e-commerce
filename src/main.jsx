import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../routes/routes'
import '../css/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
