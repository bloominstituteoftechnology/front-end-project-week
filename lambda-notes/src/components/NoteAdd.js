import React from 'react';
import { withRouter } from 'react-router';

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
                        className="content"
                        rows="25"
                        type="text"
                        name="content"
                        placeholder="Note Content"
                        onChange={props.handleInput}
                        value={props.newNote.content}
                    />
                    <button onClick={props.addNote}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default withRouter(NoteAdd);