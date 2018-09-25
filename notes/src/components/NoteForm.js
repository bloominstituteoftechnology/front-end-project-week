import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

function NoteForm(props) {
    function handleSubmit(event) {
        event.preventDefault();

        if (props.isUpdating) {
            props.handleUpdateNote();
        } else {
            props.handleAddNewNote(event);
        }
    }

    return (
        <Fragment>
            <h2>{props.isUpdating ? 'Edit Note:' : 'Create New Note:'}</h2>
            <form>
                <input
                    type="text"
                    value={props.note.title}
                    name="title"
                    placeholder="Note Title"
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    value={props.note.textBody}
                    name="textBody"
                    placeholder="Note Content"
                    onChange={props.handleChange}
                />
                <button className="button" onClick={handleSubmit}>Submit</button>
            </form>
        </Fragment>
    )
}

NoteForm.propTypes = {
    note: PropTypes.shape({
        title: PropTypes.string,
        textBody: PropTypes.string,

    })
}

export default NoteForm;