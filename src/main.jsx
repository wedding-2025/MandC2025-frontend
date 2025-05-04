import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { UIProvider } from './context/UIContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <UIProvider>
        <App />
      </UIProvider>
    </HelmetProvider>
  </StrictMode>,
)