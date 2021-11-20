import React from 'react';
import './Main.scss';
import PropTypes from 'prop-types';

const Main = ({children}) => {
  return (
    <div className='main-container'>
      {children}
    </div>
  )
};

Main.propTypes = {
  children: PropTypes.element.isRequired
}

export default Main;