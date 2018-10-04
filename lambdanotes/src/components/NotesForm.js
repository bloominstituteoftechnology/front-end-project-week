import React from 'react';
import { Fragment } from 'react';
// import axios from 'axios';

function NotesForm(props) {

        return (
            <Fragment>
                <h3>{props.updatingNote ? "Updating Notes?" : "Making A New Note?"}</h3>
                <h1> Notes</h1>
                <form>
                    <div className="noteTitleInputBox">
                        <input
                            type="text"
                            value={props.title}
                            placeholder="enter title here..."
                            name="title"
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="noteTextInputBox">
                        <input
                            type="text"
                            value={props.textBody}
                            placeholder="enter note here..."
                            name="textBody"
                            onChange={props.handleChange}
                        />
                    </div>
                    <button className="sumbitNoteButt" onClick={props.handleAddNewNote}>Make New Entry</button>
                </form>
            </Fragment>
        );
    }

export default NotesForm;

