import React from 'react';
import './Button.css';

const Button = (props) => { 
  return (
    <div>
      <button type="button" className="btn btn-info px-5">{props.content}</button>
    </div>
  );
}


export default Button;
