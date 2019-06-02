import React from 'react';
import PropTypes from 'prop-types';

const Button_ = ({ text, action }) => {
  // const {text} = props;
  return (
    <div className="text-center custom-button" onClick={action && action}>
      {text}
    </div>
  );
};

Button_.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button_;
