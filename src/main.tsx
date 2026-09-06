import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThankYou } from './ThankYou.tsx'
import { Checkout } from './Checkout.tsx'
import './index.css'

const path = window.location.pathname.replace(/\/+$/, '')

function Root() {
  if (path === '/gracias') return <ThankYou />
  if (path === '/checkout') return <Checkout />
  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
