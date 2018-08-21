import React from 'react';

export const EditNote = (props) => {
  return (
    <div>
      <form onSubmit={(event) => {props.editComplete(props.id); event.preventDefault(); props.history.push('/')}} >
        <input onChange={props.change} name='newTitle' type='text' value={props.title} placeholder={props.title} />
        <input onChange={props.change} name='newNote' type='text' value={props.note} placeholder={props.note} />
        <button type='submit'>Submit Changes</button>
      </form>
    </div>
  )
}
