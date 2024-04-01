import React,{useState} from 'react';
import logo from './images/logo.png';
import profile from './images/profile.png';

import { Link,NavLink } from 'react-router-dom'

import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
      <nav>
        <div className='logo'>
          <div className='logoimg'>
          <img src={logo} alt="EcoRide Logo" />
          </div>
          <Link to="/" className='title'>
            EcoRide
          </Link>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/booking">Booking</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/rating">Rating</NavLink>
            </li>
            <div className='profile'> 
              <img src={profile} alt="profile" />
            </div>
        </ul>
      </nav>
  );
};

