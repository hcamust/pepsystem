import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThankYou } from './ThankYou.tsx'
import './index.css'

const isThankYouPage = window.location.pathname.replace(/\/+$/, '') === '/gracias'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isThankYouPage ? <ThankYou /> : <App />}
  </StrictMode>,
)
