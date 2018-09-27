import React from 'react';

import Sidebar from './Sidebar';

const NoteAdd = props => {
    return (
        <div>
            <Sidebar />
            <h1>Create New Note:</h1>
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Note Title"
                    onChange={props.handleInput}
                    value={props.newNote.title}
                />

                <input
                    type="text"
                    name="textBody"
                    placeholder="Note Content"
                    onChange={props.handleInput}
                    value={props.newNote.textBody}
                />
                <button onClick={props.addNote}>Submit</button>
            </form>
        </div>
    );
}

export default NoteAdd;