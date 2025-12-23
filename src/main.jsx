import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Showfile from './component/Showfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot(document.getElementById('gta')).render(
//   <StrictMode>
//     <Showfile/>
//   </StrictMode>,
// )