import React from 'react';

export const NewNote = (props) => {
  return (
      <div>
        <form onSubmit={props.addNote}>
          <input name='newTitle' type='text' value={props.title} placeholder='new note title...' onChange={props.change} /><br/>
          <input name='newNote' type='text' value={props.note} placeholder='new note text...' onChange={props.change} /><br/>
          <button type='submit'>Submit Note</button>
        </form>
      </div>
  )
}
