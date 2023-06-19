import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store/index.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./config/i18next.config"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-iaerqb27ws2nj4yh.us.auth0.com"
      clientId="5rlO1ztuBafmy9Cyin62epnn4cHjl6pi"
      redirectUri= "https://herssen.netlify.app/marketplace"
    >
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
