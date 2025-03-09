import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {HomeApp} from './HomeApp'
import {BrowserRouter} from 'react-router-dom'
import { Formulario } from './components/Formulario'
import { TarjetaPrecio } from './components/TarjetaPrecio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <div id="home">
        <HomeApp />
      </div>
      <div className="separator"></div>
      <div id="formulario">
        <Formulario />
      </div>
      <div className="separator"></div>
      <div id="precios">
        <TarjetaPrecio />
      </div>
      
    </BrowserRouter>
  </React.StrictMode>,
);
