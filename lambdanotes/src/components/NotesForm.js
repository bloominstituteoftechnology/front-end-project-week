import React from 'react';
import { Fragment } from 'react';

function NotesForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        if(props.updatingNote) {
            props.handleUpdateNotes(props.note.id);
        } else {
            props.handleAddNewNote();
        }
    }
    return (
        <Fragment>
            <h3>{props.updatingNote ? "Updating Notes?" : "Making A New Note?"}</h3>
            <form>
                <div className="noteTitleInputBox">
                    <input
                        type="text"
                        value={props.note.title}
                        placeholder="enter title here..."
                        name="title"
                        onChange={props.handleChange}
                    />
                </div>
                <div className="noteTextInputBox">
                    <input
                        type="text"
                        value={props.note.textBody}
                        placeholder="enter note here..."
                        name="textBody"
                        onChange={props.handleChange}
                    />
                </div>
                <button className="sumbitNoteButt" onClick={handleSubmit}>Make Entry</button>
            </form>
        </Fragment>
    );
}
export default NotesForm;