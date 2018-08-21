import React from 'react';

const EditNote = props => {
    return (
        <div className="new-note">
            <form onSubmit={() => {props.editNote(props.match.params.id)}}>
            <h3>Edit Note:</h3>
            <input className="title" onChange={props.handleChange} type="text" name="title" value={props.title} placeholder="Note Title" />
            <textarea className="content" onChange={props.handleChange} type="text" name="content" value={props.content} placeholder="Note Content" />
            <div className="save-button" onClick={() => {props.editNote(props.match.params.id)}}>Save</div>
            </form>
        </div>
        );
    }


export default EditNote;