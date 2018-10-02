import React from 'react';
//  import NotesInfo from './NotesInfo';

 const Notes = props => {
     console.log("note props check", props);
     const note = note.find( event => event.id === props.match.params.id);

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