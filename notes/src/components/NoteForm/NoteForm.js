import React from 'react';
import PropTypes from 'prop-types';

function NoteForm(props){
    function handleSubmit(event) {
        event.preventDefault();

        if(PropTypes.isUpdating) {
            props.handleUpdateNote();
        } else {
            props.handleAddNewNote(event);
        }
    }

    return (
        <form>
            <div>
                <input
                type='text'
                value={props.note.title}
                name='name'
                onChange={props.handleChange}
                />
            </div>

                 <div>
                <input
                type='text'
                value={props.note.textBody}
                name='name'
                onChange={props.handleChange}
                />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default NoteForm;