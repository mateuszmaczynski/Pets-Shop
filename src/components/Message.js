import React from 'react';
import './Message.scss';

const Message = ({children, info, success}) => {
  return (
    <div className={`message message-${success ? 'success' : info ? 'info' : 'error'}`}>
      {children}
    </div>
  )
};

export default Message;
