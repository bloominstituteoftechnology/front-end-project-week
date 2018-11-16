import React from 'react';

function NoteForm (props) {
    return (
        <div>
            <form onSubmit={props.addNewNote}>
                <input
                    onChange={props.changeHandler}
                    placeholder="title"
                    value={props.note.title}
                    name="title"
                />
                <input
                    onChange={props.changeHandler}
                    placeholder="textBody"
                    value={props.note.textBody}
                    name="textBody"
                />
                <input
                    onChange={props.changeHandler}
                    placeholder="tags"
                    value={props.note.tags}
                    name="tags"
                />
                <button type="submit">Add New Note</button>
            </form>
        </div>
    )
}

export default NoteForm;