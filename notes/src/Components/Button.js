import React from 'react';

export default props => {
  return(
    <button 
      className="button"
      onClick={() => props.clickButton ? props.clickButton() : null}
    >
      {props.text}
    </button>
  );
}

