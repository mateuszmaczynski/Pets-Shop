import React from 'react';
import './Navbar.scss';

const Navbar = ({children}) => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        {children}
      </ul>
    </nav>
  )
};

export const NavbarItem = ({href='#', icon, text}) => {
  return (
    <li className='side-nav__item side-nav__item--active'>
      <a href={href} className='side-nav__link'>
        {icon && <img src={icon} className="side-nav__icon" alt={icon} />}
        <span>{text}</span>
      </a>
    </li>
  )
};


export default Navbar;