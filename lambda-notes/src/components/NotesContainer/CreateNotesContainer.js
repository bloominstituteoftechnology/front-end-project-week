import React from 'react';
import NotesForm from './NotesForm';

const CreateNotesContainer = props => {
    return (
        <div className='create-notes-container'>

            <h3 className='notes-header'>Create New Note:</h3>
            <div className='notes-cards'>
                <NotesForm history={props.history}/>
            </div>

        </div >
    );
}

export default CreateNotesContainer;