import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
   <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
         <Link to="/vans">Vans</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
      </nav>
 </header>
  )
}

export default Navbar
