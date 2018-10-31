import React from 'react';
import './Components.css';

const EditNote = props => {
    if (props.notes.length) {
        let note = props.notes.find(
          note => `${note._id}` === props.match.params.id
        );
        const editTheNote = event => {
          event.preventDefault();
          props.editedNote(note._id);
          props.history.push(`/note/${note._id}`);
        };
        return (
          <form className="form" onSubmit={editTheNote}>
            <h2 className="form-heading">Edit Note:</h2>
            <input
              type="text"
              name="updatedTitle"
              placeholder="Note Title"
              onChange={props.handleInput}
              value={props.updatedTitle}
            />
            <textarea
              name="updatedText"
              id=""
              cols="35"
              rows="15"
              placeholder="Note Content"
              onChange={props.handleInput}
              value={props.updatedText}
            />
            <button type="submit">Update</button>
          </form>
        );
    } else {
        return <h3>Loading Edited Note...</h3>
    }
}

export default EditNote;