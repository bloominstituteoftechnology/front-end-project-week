import React from 'react';


 const Notes = props => {
     console.log("note props check", props);
     const note = props.notesList.find(note => note.id === props.match.params.noteId);

     function clickHandler(url) {
         props.history.push(url);
     }

     console.log("props check in notes2", props);

     return (
         <div className="noteCardBox">
            <h1>{props.title}</h1>
            <p>{props.textBody}</p>
            <div className="noteNavButts">
                <button 
                    onClick = {() =>
                        clickHandler(`/notes/${parseInt(note.id, 10) - 1}`)}>Previous Note</button>
                <button
                    onClick = {() =>
                        clickHandler('/notes')}>Full Note List</button>
                <button
                    onClick = {() =>
                        clickHandler(`/notes/${parseInt(note.id, 10) + 1}`)}>Next Note</button>
            </div>
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
