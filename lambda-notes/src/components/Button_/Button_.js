import React from "react";

const Button_ = ({ text, action, ...rest }) => {
  // const {text} = props;
  return (
    <div className="text-center custom-button" onClick={ action ? action : null }>
      {text}
    </div>
  );
};

export default Button_;
