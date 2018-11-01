import React from "react";
import { Link } from "react-router-dom";

const NotePage = props => {
    if(props.notes.length){
        let note = props.notes.find(note => `${note._id}` === props.match.params.id);

        const deleteNotes = event => {
            event.preventDefault();
            props.deleteNote(note._id);
            props.history.push("/");
        };
        return (
            <div className="note-page">
                {props.delete && (
                    <div className="delete-modal"> 
                        <p>Are you sure you want to delete this?</p>
                        <div className="note-page-buttons">
                            <button className="delete-btn" onClick={deleteNotes}>Delete</button>
                            <button className="no-btn" onClick={props.deleteToggleOff}>No</button>
                        </div>
                    </div>
                )}
                <div className="note-page-buttons">
                    <Link to={`/note/${note._id}/edit`} onClick={() => props.editNote(note.title, note.textBody)}>edit</Link>{" "}
                    <span onClick={props.deleteToggleOn}>delete</span>
                </div>
                <h2>{note.title}</h2>
                <p>{note.textBody}</p>
            </div>
        );
    }else{
        return <p>Loading...</p>
    }
    
};

export default NotePage;
