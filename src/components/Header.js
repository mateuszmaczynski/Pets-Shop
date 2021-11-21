import React from 'react';
import './Header.scss';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../assets/images/Logo.svg'
import cart from '../assets/icons/cart.svg';
import bubbles from '../assets/icons/bubbles.svg';
import user from '../assets/icons/user.svg';
import {SearchBox} from './index';

const Header = () => {
  const cartData = useSelector((state) => state.cart);
  const {cartItems} = cartData;

  return (
    <header className='header-container'>
      <Link to='/'>
        <img src={logo} className='logo' alt='Pets online store logo'/>
      </Link>
      <SearchBox/>
      <nav className='user-nav'>
        <div className='user-nav__box'>
          <Link to='/cart'>
            <img src={cart} className='user-nav__icon' alt='Search icon'/>
            {cartItems.length > 0 && (
              <span className='badge'>{cartItems.length}</span>
            )}
          </Link>
        </div>
        <div className='user-nav__box'>
          <img src={bubbles} className='user-nav__icon' alt='Search icon'/>
        </div>
        <div className='user-nav__box'>
          <img src={user} className='user-nav__icon' alt='Search icon'/>
        </div>
      </nav>
    </header>
  )
};

export default Header;
