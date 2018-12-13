import React from "react";
import { Link } from "react-router-dom";
// import marked from 'marked';
const NotePage = props => {
    if(props.notes.length){
        let note = props.notes.find(note => `${note.id}` === props.match.params.id);

        const deleteNotes = event => {
            event.preventDefault();
            props.deleteNote(note.id);
            props.history.push("/");
        };
        return (
            <div className="note-page">
                {props.delete && (
                <div className="modal-overlay">
                    <div className="delete-modal"> 
                        <p>Are you sure you want to delete this?</p>
                        <div className="note-modal-buttons">
                            <button className="delete-btn" onClick={deleteNotes}>Delete</button>
                            <button className="no-btn" onClick={props.deleteToggleOff}>No</button>
                        </div>
                    </div>    
                </div>
                )}
                <div className="note-page-buttons">
                    <Link to={`/note/${note.id}/edit`} onClick={() => props.editNoteContent(note.title, note.textBody)}>edit</Link>{" "}
                    <span onClick={props.deleteToggleOn}>delete</span>
                </div>
                <h2 className="note-title">{note.title}</h2>
                <div className="note-body">{note.textBody}</div>
            </div>
        );
    }else{
        return <p>Loading...</p>
    }
    
};

export default NotePage;
