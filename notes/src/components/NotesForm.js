import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function NotesForm(props) {
    // function handleSubmit(event) {
    //     event.preventDefault();

    //     if (props.isUpdating) {
    //         props.updateNote(props.note.id);
    //     } else {
    //         props.addNewNote();
    //     }
    // }

    return (
        <Fragment>
            <h1>Component Test</h1>
            {/* <h2>{props.isUpdating ? 'Edit Note' : 'Add New Note'}</h2>
            <form>
                <div className="note-form">
                    <input type="text"
                    value={props.note.title}
                    name="title"
                    placeholder="Note Title"
                    onChange={props.handleChange} />
                    <input type="text"
                    value={props.note.content}
                    name="content"
                    placeholder="Note Content"
                    onChange={props.handleChange} />
                </div>
                <button className="save-button" onClick={handleSubmit}>{props.isUpdating ? 'Update' : 'Save'}</button>
            </form> */}
        </Fragment>
    )
}

// NotesForm.propTypes = {
//     note: PropTypes.shape({
//         title: PropTypes.string,
//         content: PropTypes.string
//     }),
//     isUpdating: PropTypes.bool,
//     addNewNote: PropTypes.func,
//     handleChange: PropTypes.func,
//     updateNote: PropTypes.func
// }

export default NotesForm;