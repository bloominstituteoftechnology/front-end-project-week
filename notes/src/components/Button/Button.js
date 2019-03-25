import React from 'react';

const Button = props => {

  const onButtonClick = e => {
    e.preventDefault();
    props.onButtonClick();
    console.log('button click');
  };

  return (
    <button className={props.buttonStyle === 'delete' ? 'is-delete' : null }type={props.type} onClick={e => onButtonClick(e)}>{props.text}</button>
  );
};

export default Button;