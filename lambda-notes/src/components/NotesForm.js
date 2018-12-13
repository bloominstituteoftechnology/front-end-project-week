import React from 'react';

const NotesForm = (props) => {
    const createNote = event => {
        event.preventDefault();
        props.addNote();
        props.history.push('/');
    }
    return(
        <form>
        <h3>Create New Note</h3>
            <input 
                type="text"
                name="title"
                value={props.title}
                onChange={props.changeHandler}
                placeholder="Title"
            />

            <textarea
                cols="30"
                rows="10"
                name="textBody"
                value={props.textBody}
                onChange={props.changeHandler}
                placeholder="Content"
            />

            <button onClick={createNote}>Save</button>
        </form>
    );
}
export default NotesForm;