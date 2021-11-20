import React from 'react';
import './Message.scss';
import PropTypes from 'prop-types';

const Message = ({children, info, success}) => {
  return (
    <div className={`message message-${success ? 'success' : info ? 'info' : 'error'}`}>
      {children}
    </div>
  )
};

Message.propTypes = {
  children: PropTypes.element.isRequired,
  info: PropTypes.bool,
  success: PropTypes.bool
}

export default Message;
