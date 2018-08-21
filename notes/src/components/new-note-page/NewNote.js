import React from 'react';
import { Link } from 'react-router-dom';


export default function NewNote(props) {
  return (
      <div>
        <form onSubmit={(event) => {event.preventDefault(); props.addNote(props); props.history.push('/')}}>
          <input name='newTitle' type='text' value={props.title} placeholder='new note title...' onChange={props.change} /><br/>
          <input name='newNote' type='text' value={props.note} placeholder='new note text...' onChange={props.change} /><br/>
          <button type='submit'>Submit Note</button>
        </form>
      </div>
  )
}
