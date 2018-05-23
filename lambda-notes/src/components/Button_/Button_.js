import React from 'react';

const Button_ = ({text, ...rest}) => {
  // const {text} = props;
  return (
    <div className="text-center custom-button" >
      {text}
    </div>
  );
};

export default Button_;