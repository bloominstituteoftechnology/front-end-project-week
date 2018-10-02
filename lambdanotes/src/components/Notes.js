import React from 'react';
//  import NotesInfo from './NotesInfo';

 const Notes = props => {
     console.log("note props check", props);
     return (
         <div className="noteCardBox">
            <h1>{props.title}</h1>
            <p>{props.textBody}</p>
         </div>
     );
 }
 export default Notes;

//  const note = props.notesList.find(
//     note => note.id === parseInt(props.match.params.noteId, 10)
// );

// function handleDelete() {
//     props.handleDeleteNotes(note.id);
//     props.history.push('/notes');
// }
