import React from 'react';
import './Main.scss';
import PropTypes from 'prop-types';

const Main = ({children}) => {
  return (
    <div className='main-container'>
      {localStorage.getItem('walletId') && (
        <div className='wallet-box text-small'>
          You are logged with wallet: {localStorage.getItem('walletId')}
        </div>
      )}
      {children}
    </div>
  )
};

Main.propTypes = {
  children: PropTypes.element.isRequired
}

export default Main;