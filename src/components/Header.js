import React from 'react';
import './Header.scss';
import logo from '../assets/images/Logo.png'
import searchIcon from '../assets/icons/search.svg';
import cart from '../assets/icons/cart.svg';
import bubbles from '../assets/icons/bubbles.svg';
import user from '../assets/icons/user.svg';

const Header = () => {
  return (
    <header className='header-container'>
      <img src={logo} className="logo" alt="Pets online store logo" />
      <form action='#' className='search'>
        <input type='text' className='search__input' placeholder='Search product'/>
        <button class='search__button'>
          <img src={searchIcon} className="search__icon" alt="Search icon"/>
        </button>
      </form>
      <nav className='user-nav'>
        <div class='user-nav__icon-box'>
          <img src={cart} className="user-nav__icon" alt="Search icon"/>
        </div>
        <div className='user-nav__icon-box'>
          <img src={bubbles} className="user-nav__icon" alt="Search icon"/>
        </div>
        <div className='user-nav__icon-box'>
          <img src={user} className="user-nav__icon" alt="Search icon"/>
        </div>
      </nav>
    </header>
  )
};

export default Header;