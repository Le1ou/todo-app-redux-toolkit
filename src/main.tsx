import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import App from './components/app'
import store from "./store"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
