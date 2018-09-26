import React from 'react';
import PropTypes from 'prop-types';

function NoteContainer(props) {
  if(!props.notesList || !props.notesList.length) {
    return (
      <div class = 'note-system-message'>
        <h3>No notes yet!</h3>
      </div>
    )
  }

  return (

       <div className = 'notes-list-wrapper'>
         <h3>Your Notes:</h3>
             <div className = 'all-notes'>
             {props.notesList.map(note => (
                 <div className = 'note-card' key = {note.id} onClick = {() => props.history.push(`notes/${note.id}`)}>
                     <h4>
                     {note.title}
                     </h4>
                     <p>{props.truncate(note.content)}</p>
                 </div>
             ))}
             </div>
       </div>
   )
}

NoteContainer.propTypes = {
   notesList: PropTypes.array,
   history: PropTypes.shape({
       push: PropTypes.func
   })
}
export default NoteContainer;
