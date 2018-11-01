import React from "react";

const EditForm = props => {
    const note = props.notes.find(note => props.match.params.id === `${note._id}`);
    const editNotes = event => {
        event.preventDefault();
        props.editNote(note._id);
        props.history.push(`/note/${note._id}`);
    };
    return (
        <form className="form">
            <h2>Edit Note:</h2>
            <input
                type="text"
                name="newTitle"
                placeholder="Title"
                onChange={props.changeHandler}
                value={props.newTitle}
            /> 
            <textarea
                name="newTextBody"
                id=""
                cols="30"
                rows="10"
                placeholder="Note Content"
                onChange={props.changeHandler}
                value={props.newTextBody}
            />
            <button onClick={editNotes}>Update</button>
        </form>
    );
}

export default EditForm;