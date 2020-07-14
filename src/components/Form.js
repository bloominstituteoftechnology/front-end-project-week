import React, { useState } from 'react';
import './Form.css';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
}

export const Form = (props) => {
  const { 
    onSubmit, 
    action, 
    history, 
    note,
    formTitle 
  } = props
  let title, content
  if (note === undefined) {
    title = useInputValue('');
    content = useInputValue('')
  } else {
    title = useInputValue(note.title !== undefined ? note.title : '');
    content = useInputValue(note.content !== undefined ? note.content : '')
  }

  return (
    <div className="note-form">
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit({
          title: title.value,
          content: content.value
        })
        history.push('/')
      }}>
        <h2>{formTitle}</h2>
        <input {...title} className="title"/>
        <input {...content} className="content"/>
        <button type="submit">{action}</button>
      </form>
    </div>
  )
}