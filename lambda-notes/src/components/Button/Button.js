import React from 'react';
import Aside from '../Aside/Aside';

const Button = (props) => { 
  return (
    <div>
      <button type="button" className="btn btn-info">{props.content}</button>
    </div>
  );
}


export default Button;
