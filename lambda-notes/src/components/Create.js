import React from 'react';

const Create = props => {
    return (
        <div>
            <h3>Create New Note:</h3>
            <form>
                <input placeholder="Note Title" onChange={props.handleTaskChange} value={props.title} name="title"/>
                <br></br>
                <input placeholder="Note Content" onChange={props.handleTaskChange} value={props.content} name="content"/>
                <br></br>
                <br></br>
                <button onClick={props.handleAddNoteSubmit}>Save</button>
            </form>
        </div>
    );
}

export default Create;