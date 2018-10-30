import React from 'react';

const EditNote = props => {
    if (props.notes.length) {
        let note = props.notes.find(
          note => `${note._id}` === props.match.params.id
        );
    const editTheNote = event => {
        event.preventDefault();
        props.editedNote(note._id);
        props.history.push(`/note/${note._id}`);
    }
    return (
        <div>
            <h2>Edit Note: </h2>
            <form onSubmit={editTheNote}>
                <input 
                    type="text"
                    name="udpatedTitle"
                    placeholder="Note Title"
                    onChange={props.handleInput}
                    value={props.udpatedTitle}
                />
                <textarea 
                    type="text"
                    name="updatedText"
                    placeholder="Note Content"
                    onChange={props.handleInput}
                    value={props.updatedText}
                />
                <button type="submit">
                    Update
                </button>
            </form>
        </div>
    );
    }
}

export default EditNote;