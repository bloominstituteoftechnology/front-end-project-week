import React, { useState } from 'react';



const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
}


export const Form = ({onSubmit}) => {
  const text = useInputValue("");
  
  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit()
    }}>
      <input {...text}/>
    </form>
  )
}