import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from '../src2/App2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)

createRoot(document.getElementById('root2')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)