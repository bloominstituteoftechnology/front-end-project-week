import React from 'react';
import { Route, Link } from 'react-router-dom';
 import NotesInfo from './NotesInfo';
 import { Fragment } from 'react';

 function Notes(props) {
     console.log("note props check", props);
     const note = props.notesList.find(
         note => note.id === parseInt(props.match.params.noteId, 10)
     );

     function handleDelete() {
         props.handleDeleteNotes(note.id);
         props.history.push('/notes');
     }

     return (
         <Fragment>
             <div className="noteBoxs">
                {/* <h1>{note.title}</h1>
                <p>{note.textBody}</p> */}
                <nav>
                    <Link to={`/notes/${note.id}/info`}>Notes Rarw!</Link>
                </nav>
                <Route 
                    path="/notes/:noteId/info"
                    render={props => <NotesInfo {...props} note={note} />}
                />
             </div>
             <button
                className="upDateButt"
                onClick={event => {
                    event.preventDefault();
                    props.updateNoteForm(event, note.id)
                }}>Updating Me?</button>
            <button className="deleteButt" onClick={handleDelete}>Deleting Me!</button>
         </Fragment>
     );
 }
 export default Notes;