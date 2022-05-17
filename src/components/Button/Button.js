import React from 'react';
import PropTypes from 'prop-types';
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

Button.defaultProps = {
  content: 'click',
  handlerClick: () => {},
}

Button.propType = {
  content: PropTypes.string,
  handlerClick: PropTypes.func,
}

export default Button;