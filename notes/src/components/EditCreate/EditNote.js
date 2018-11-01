import React from 'react';

//styling
import './EditCreate.css';

const EditNote = props => {
    return (
        <div className='notePage'>
            <h3>{props.editNote ? 'Edit Note:' : 'Create New Note:'}</h3>
            <form className='noteEntry'>
                <input
                    type='text'
                    placeholder='Note Title'
                    name='noteTitle'
                    value={props.editNote ? props.note.title : ''}
                />
                <textarea
                    rows='25'
                    placeholder='Note Content'
                    name='noteContent'
                    value={props.editNote ? props.note.textBody : ''}
                >

                </textarea>
                <button className='noteSave'>{props.editNote ? 'Update' : 'Save'}</button>
            </form>
        </div>
    );
}
 
export default EditNote;