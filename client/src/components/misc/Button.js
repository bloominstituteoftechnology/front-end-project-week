import React from 'react';

const Button = props => {
  return (
    <button
      className={ props.buttonClassName }
      onClick={ props.buttonOnClick }
      type={ props.buttonType }
    >
      { props.buttonContent }
    </button>
  )
}
 
export default Button;