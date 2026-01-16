import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'


const quearyClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={quearyClient} >
      <Router>
        <App />
      </Router>
      <ToastContainer position='top-right' authClose={2000} />
    </QueryClientProvider>
  </StrictMode>,
)
