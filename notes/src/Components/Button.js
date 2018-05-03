import React from 'react';

export default props => {
  return(
    <button 
      className="button"
      style={props.styles ? props.styles : null}
      onClick={() => props.clickButton ? props.clickButton() : null}>
      {props.text}
    </button>
  );
}

