import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './noteForm.css'

function NoteForm(props){
    function handleSubmit(event) {
        event.preventDefault();

        if(PropTypes.isEditing) {
            props.handleEditNote();
        } else {
            props.handleAddNewNote(event);
        }
        
    }

    return (
        <Fragment>
                {/* <h2>{props.isEditing ? 'Edit Note' : 'Create New Notes'}</h2> */}
            <form className='formView'>
                <div>
                    {/* <h3>Create New Notes:</h3> */}
                    <h2>{props.isEditing ? 'Edit Note:' : 'Create New Notes:'}</h2>
                    <input
                        type='text'
                        value={props.note.title}
                        name='title'
                        placeholder='Note Title'
                        onChange={props.handleChange}
                    />
                </div>

                <div >
                    <input
                        className='textBody'
                        type='text'
                        value={props.note.textBody}
                        name='textBody'
                        placeholder='Note Content'
                        onChange={props.handleChange}
                    />
                </div>
                    
                <div className='saveButton' onClick={handleSubmit}>Save</div>
                
            </form>
        </Fragment>
    )
}

NoteForm.PropTypes = {
    note: PropTypes.shape({
        title:PropTypes.string,
        textBody:PropTypes.string,
    }),
    isEditing: PropTypes.bool,
    handleAddNewNote:PropTypes.func,
    handleChange:PropTypes.func,
    handleEditNote: PropTypes.func,
}

export default NoteForm;