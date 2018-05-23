import React from 'react';

const TextField = props => {
  if (props.variant === 'input') {
    return (
      <input
        className={ props.inputClassName }
        name={ props.inputName }
        onChange={ props.inputOnChange }
        placeholder={ props.inputPlaceholder }
        type={ props.inputType }
        value={ props.inputVal }
      />
    )
  }

  return (
    <textarea
      className={ props.textareaClassName }
      name={ props.textareaName }
      onChange={ props.textareaOnChange }
      placeholder={ props.textareaPlaceholder }
      value={ props.textareaContent }
    >
    </textarea>
  )
}
 
export default TextField;