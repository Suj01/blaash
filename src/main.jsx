import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import ContextProvider from './context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ContextProvider>
  </StrictMode>,
)
