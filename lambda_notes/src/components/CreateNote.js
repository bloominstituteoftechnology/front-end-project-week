import React from 'react';
import './Components.css';

const CreateNote = props => {
    const createNewNote = event => {
        event.preventDefault();
        props.submit();
        props.history.push("/");
        //window.location.reload();
    }
    return (
        <div>
            <h2 className="form-heading">Create New Note: </h2>
            <form onSubmit={createNewNote} className="form">
                <input 
                    type="text"
                    name="title"
                    placeholder="Note Title"
                    onChange={props.handleInput}
                    value={props.title}
                />
                <textarea 
                    type="text"
                    name="content"
                    cols="35"
                    rows="15"
                    placeholder="Note Content"
                    onChange={props.handleInput}
                    value={props.content}
                />
                <button type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}

export default CreateNote;