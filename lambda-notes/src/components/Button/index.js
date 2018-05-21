// React
import React from 'react';
// CSS
import './Button.css';

const Button = (props) => {

  return (
    <button>{props.children}</button>
  );
}

export default Button;