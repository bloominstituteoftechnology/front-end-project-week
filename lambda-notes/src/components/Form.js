import React, { useState } from 'react';
import './Form.css';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
}

export const Form = ({ onSubmit, action }) => {
  const title = useInputValue("");
  const body = useInputValue("")

  return (
    <div className="note-form">
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit()
      }}>
        <input {...title} />
        <input {...body} />
        <button type="submit">{action}</button>
      </form>
    </div>
  )
}