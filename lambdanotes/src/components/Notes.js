import React from 'react';
//  import NotesInfo from './NotesInfo';
import { Link } from 'react-router-dom';

  const Notes = props => {

     return (
         <div className="noteCardBox">
            <Link to="/notes/:noteId">{props.title}</Link>
            <p>{props.textBody}</p>
            <button onClick={props.deleteEvent}>Delete Note?</button>
         </div>
     );
 }
 export default Notes;

//  const note = props.notesList.find(
//          note => note.id === parseInt(props.match.params.noteId, 10)
//      );

//      function handleDelete() {
//          props.handleDeleteNotes(note.id);
//          props.history.push('/notes');
//      }

//  {/* <div className="noteNavButts">
//                 <button 
//                     onClick = {() =>
//                         clickHandler(`/notes/${parseInt(note.id, 10) - 1}`)}>Previous Note</button>
//                 <button
//                     onClick = {() =>
//                         clickHandler('/notes')}>Full Note List</button>
//                 <button
//                     onClick = {() =>
//                         clickHandler(`/notes/${parseInt(note.id, 10) + 1}`)}>Next Note</button>
//             </div> */}
