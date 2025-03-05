import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {HomeApp} from './HomeApp'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeApp /> 
    </BrowserRouter>
  </React.StrictMode>,
);
