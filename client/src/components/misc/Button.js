import React from 'react';

const Button = props => {
  const { buttonClassName, buttonOnClick, buttonType, buttonContent } = props;
  return (
    <button
      className={ buttonClassName }
      onClick={ buttonOnClick }
      type={ buttonType }
    >
      { buttonContent }
    </button>
  )
}
 
export default Button;