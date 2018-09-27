import React from 'react';

import Sidebar from './Sidebar';

import './NoteForms.css';

const NoteAdd = props => {
    return (
        <div className="page-container">
            <Sidebar />
            <div className="section-container">
                <h1>Create New Note:</h1>
                <form className="form">
                    <input
                        className="title"
                        type="text"
                        name="title"
                        placeholder="Note Title"
                        onChange={props.handleInput}
                        value={props.newNote.title}
                    />

                    <textarea
                        className="textBody"
                        rows="25"
                        type="text"
                        name="textBody"
                        placeholder="Note Content"
                        onChange={props.handleInput}
                        value={props.newNote.textBody}
                    />
                    <button onClick={props.addNote}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default NoteAdd;