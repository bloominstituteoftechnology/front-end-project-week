import React from 'react';

const NoteAdd = props => {
    return (
        <div>
            <h1>Add New Note</h1>
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
                <button onClick={props.addNote}>Submit</button>
            </form>
        </div>
    );
}

export default NoteAdd;