import React from 'react';

const TextField = props => {
  const {
    variant,
    inputClassName, inputName, inputOnChange, inputPlaceholder, inputType, inputVal,
    textareaClassName, textareaContent, textareaName, textareaOnChange, textareaPlaceholder,
  } = props
  
  if (variant === 'input') {
    return (
      <input
        className={ inputClassName }
        name={ inputName }
        onChange={ inputOnChange }
        placeholder={ inputPlaceholder }
        type={ inputType }
        value={ inputVal }
      />
    )
  }

  return (
    <textarea
      className={ textareaClassName }
      name={ textareaName }
      onChange={ textareaOnChange }
      placeholder={ textareaPlaceholder }
      value={ textareaContent }
    >
    </textarea>
  )
}
 
export default TextField;