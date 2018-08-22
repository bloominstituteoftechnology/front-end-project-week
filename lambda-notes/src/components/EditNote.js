import React from 'react';

const EditNote = props => {
    return (
        <div className="input-page">
            <form onSubmit={(e) => {e.preventDefault(); props.editNote(props.match.params.id)}}>
            <h3>Edit Note:</h3>
            <input className="title" onChange={props.handleChange} type="text" name="title" value={props.title} placeholder="Note Title" />
            <textarea className="content" onChange={props.handleChange} type="text" name="content" value={props.content} placeholder="Note Content" />
            <button className="save-button" onClick={(e) => {e.preventDefault(); props.editNote(props.match.params.id)}}>Save</button>
            </form>
        </div>
        );
    }


export default EditNote;