import React from 'react';

const CreateNewView = (props) => {
    return(
        <div className='create-new-view'>
            <h3>Create New Note</h3>
            <input 
                type="text"
                placeholder='Note Title'
            />
            <textarea 
                placeholder='Note Content' 
                cols="70" 
                rows="30"
            ></textarea>
            <button 
                className='button-style'
            >
                Save
            </button>
        </div>
    );
}

export default CreateNewView;
