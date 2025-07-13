import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreProviders from './Context/StoreProviders.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StoreProviders>
    <>
    <App />
    <Toaster/>
    </>
  </StoreProviders>,
)
