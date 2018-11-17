import React from 'react'; 
import './NoteView.css'
import { Link } from 'react-router-dom'

export const NoteView = (props) => {
  
  if (props.notes.length) {
    let note = props.notes.find(
      note => `${note._id}` === props.match.params.id
    );

      return(
        <div>
          <div className='noteView-menu'>
            <h6>
              <Link to={`/Edit/${props.match.params.id}`}>edit </Link>
            </h6>
            <h6>delete</h6> 
          </div> 
          <h3>{note.title}</h3> 
          <div className="note-textBody"> 
            <h5>{note.textBody}</h5> 
          </div> 
        </div>  
    )
  }
}