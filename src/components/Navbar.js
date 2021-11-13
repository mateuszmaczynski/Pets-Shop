import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = ({children}) => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        {children}
      </ul>
    </nav>
  )
};

export const NavbarItem = ({href = '#', icon, text}) => {
  return (
    <li className='side-nav__item side-nav__item--active'>
      <Link to={href} className='side-nav__link'>
        {icon && <img src={icon} className="side-nav__icon" alt={icon}/>}
        <span className="side-nav__link-text">{text}</span>
      </Link>
    </li>
  )
};

export default Navbar;