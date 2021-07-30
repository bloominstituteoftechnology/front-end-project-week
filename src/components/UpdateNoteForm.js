import React from 'react';
import { NavLink } from 'react-router-dom';
import './Note.css';


const UpdateNoteForm = props => {


        console.log(props.note);
        return (
    <div className = "NoteForm">
        <form onSubmit={props.updateNote(props.match.params._id)}>
          <input
            onChange={props.changeHandler}
            placeholder="title"
            value={props.note.title}
            name="title"
          />
          <input
            onChange={props.changeHandler}
            placeholder="textBody"
            value={props.note.textBody}
            name="textBody"
          />
          <input
            onChange={props.changeHandler}
            placeholder="tags"
            value={props.note.tags}
            name="tags"
          />
          <NavLink exact to = "/"><button type="submit">Submit Change Note</button></NavLink>
        </form>
    </div>
        )
    }
  

  export default UpdateNoteForm;