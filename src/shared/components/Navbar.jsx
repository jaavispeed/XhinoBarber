import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import barberlogo from "../../assets/barberlogo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <div className="navbar-collapse d-flex justify-content-between w-100">

          <Link className="navbar-brand mx-auto" to="/">
          <img 
            src={barberlogo} 
            alt="XhinoBarber" 
            className="navbar-brand-img"  // Agregar clase para estilizar
          />
            XhinoBarber
          </Link>

          <div className="navbar-nav">
            <NavLink className="nav-item nav-link text-white" to="">
              Disponibilidad
            </NavLink>

            <NavLink className="nav-item nav-link text-white" to="">
              Agendar
            </NavLink>
          </div>
        </div>
        
      </div>
    </nav>
  );
};
