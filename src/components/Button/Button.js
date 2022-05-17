import React from 'react';
import './Button.css';

function Button(props) {
  const {content, handlerClick} = props;

  return (
    <button
      className='btn' 
      onClick={handlerClick}
    >
      {content}
    </button>
  )
}

export default Button;