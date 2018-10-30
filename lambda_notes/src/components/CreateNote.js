import React from 'react';

const CreateNote = props => {
    const createNewNote = event => {
        event.preventDefault();
        props.submit();
        props.history.push("/");
    }
    return (
        <div>
            <h2>Create New Note: </h2>
            <form onSubmit={createNewNote}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Note Title"
                    onChange={props.handleInput}
                    value={props.title}
                />
                <textarea 
                    type="text"
                    name="textBody"
                    placeholder="Note Content"
                    onChange={props.handleInput}
                    value={props.textBody}
                />
                <button type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}

export default CreateNote;