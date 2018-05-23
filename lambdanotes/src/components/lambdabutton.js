import React from 'react';
import './lambdabutton.css'

const LambdaButton = (props) => {
  switch (props.color) {
    case "green":
      return (
        <div onClick={props.myFunc} className="lambda-button lambda-button-green" >{props.text}</div>
      );
    case "red":
      return (
        <div onClick={props.myFunc} className="lambda-button lambda-button-red" >{props.text}</div>
      );
    default:
      return (
        <div>Oh no!  Something is wrong with this button.</div>
      );
  }
}


export default LambdaButton;
