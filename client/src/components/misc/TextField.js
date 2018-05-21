import React from 'react';

const TextField = props => {
  if (props.variant === 'input') {
    return (
      <input
        name={ props.inputName }
        type={ props.inputType }
        value={ props.inputVal }
        onChange={ props.inputOnChange }
      />
    )
  }

  return (
    <textarea
      name={ props.textareaName }
      onChange={ props.textareaOnChange }
      value={ props.textareaContent }
    >
    </textarea>
  )
}
 
export default TextField;