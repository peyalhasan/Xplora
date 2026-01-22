import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import AuthProvider from '../Provider/AuthProvider.jsx'
import PlaceProvider from '../Provider/PlaceProvider.jsx'
import SubscriptionProvider from '../Provider/SubscriptionProvider.jsx'
import ScrollToTop from './components/common/ScroolTop.jsx'


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
        <ScrollToTop />
        <AuthProvider>
          <PlaceProvider>
            <SubscriptionProvider>
              <App />
            </SubscriptionProvider>
          </PlaceProvider>
        </AuthProvider>
      </Router>
      <ToastContainer position='top-right' authClose={2000} />
    </QueryClientProvider>
  </StrictMode>,
)
