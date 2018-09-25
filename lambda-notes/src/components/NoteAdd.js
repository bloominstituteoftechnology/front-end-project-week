import React from 'react';

const NoteAdd = props => {
    return(
        <form>
            <label>Title</label>
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={props.handleInput}
                value={props.newNote.title}
            />

            <label>Content</label>
            <input
                type="text"
                name="textBody"
                placeholder="Content"
                onChange={props.handleInput}
                value={props.newNote.textBody}
            />

            <button onClick={props.addNote}>Add New Note</button>
        </form>
    );
}

export default NoteAdd;