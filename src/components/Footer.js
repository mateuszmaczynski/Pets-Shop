import React from 'react';
import './Footer.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer-container'>
      © Copyright {year}. All rights reserved
    </footer>
  )
};

export default Footer;