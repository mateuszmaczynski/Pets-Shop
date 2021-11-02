import React from 'react';
import './Main.scss';

const Main = ({children}) => {
  return (
    <div className='main-container'>
      {children}
    </div>
  )
};

export default Main;