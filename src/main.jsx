import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CustomEmailProvider } from './context/emailContext.jsx'

createRoot(document.getElementById('root')).render(
  <CustomEmailProvider>
    <App />
  </CustomEmailProvider>,
)
