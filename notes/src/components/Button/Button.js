import React from 'react';

const Button = props => {

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit();
    console.log('submit');
  };

  return (
    <button type={props.type} onClick={e => onSubmit(e)}>{props.text}</button>
  );
};

export default Button;