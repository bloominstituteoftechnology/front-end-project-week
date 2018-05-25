import React from 'react';
import './lambdabutton.css'


//Very simple button component.
const LambdaButton = (props) => {
  return (
    <div onClick={props.myFunc} className={`lambda-button lambda-button-${props.color}`} >{props.text}</div>
  );
}


export default LambdaButton;
