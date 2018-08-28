import React from 'react';

const EditView = (props) => {
    return(
        <div className='edit-view'>
            <h3>Edit Note</h3>
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
                Update
            </button>
        </div>
    );
}

export default EditView;
