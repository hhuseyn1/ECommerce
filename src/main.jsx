import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CookieProvider } from './contexts/CookieContext.jsx';
import { BrowserRouter } from "react-router-dom";
import { ContextWrapper } from './contexts/ContextWrapper.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CookieProvider>
      <BrowserRouter>
        <ContextWrapper>
          <App/>
        </ContextWrapper>
      </BrowserRouter>
    </CookieProvider>
  </React.StrictMode>,
)
