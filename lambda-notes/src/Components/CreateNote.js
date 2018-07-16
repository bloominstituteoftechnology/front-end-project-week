import React from 'react';

const CreateNote = () => {
    return (
        <form className='create-note'>
            <h1>Create New Note:</h1>
            <input placeholder='Note Title...' />
            <textarea placeholder='Note content...' />
            <div className='custom-button'>Save</div>
        </form>
    );
}
 
export default CreateNote;