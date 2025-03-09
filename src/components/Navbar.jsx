import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css";
import barberlogo from "../assets/barberlogo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <div className="navbar-collapse d-flex justify-content-between w-100">

          <Link className="navbar-brand mx-auto" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
          <img 
            src={barberlogo} 
            alt="XhinoBarber" 
            className="navbar-brand-img"
          />
            XhinoBarber
          </Link>
        </div>
      </div>
    </nav>
  );
};