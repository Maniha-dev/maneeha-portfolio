import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { assets, siteInfo } from './assets/assets.js'

document.title = siteInfo.documentTitle
document.querySelector('meta[name="description"]')?.setAttribute('content', siteInfo.metaDescription)

const faviconLink = document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/svg+xml'
faviconLink.href = assets.favicon
document.head.append(faviconLink)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
