import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './noteForm.css'

function NoteForm(props){
    function handleSubmit(event) {
        event.preventDefault();

        if(props.isEditing) {
            props.handleEditNote();
        } else {
            props.handleAddNewNote(event);
        }
        
    }

    return (
        <Fragment> 
                
            <form className='formView'>
            <h2 className='topTitle'>{props.isEditing ? 'Edit Note:' : 'Create New Note:'}</h2>
                <div>
                    
                    <input
                        className='title'
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