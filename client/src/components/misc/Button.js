import React from 'react';

const Button = props => {
  return (
    <button
      className={ props.buttonClassName }
      // onClick={ () => alert() }
    >
      { props.buttonContent }
    </button>
  )
}
 
export default Button;