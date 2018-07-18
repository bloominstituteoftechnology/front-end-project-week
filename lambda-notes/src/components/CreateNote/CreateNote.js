import React from 'react';
import './index.css'

const CreateNote = () => {
    return (
        <div className='createNote-container'>
            <div className='note-Header'><h3>Create Note:</h3></div>
            <div className='form-container'>
                <input type="text" name="tittle" placeholder='Note Tittle'/>
                <textarea name="textBody"  cols="30" rows="30" placeholder='Note Body'></textarea>
                <div className="submit">Submit</div>
            </div>
        </div>
    );
};

export default CreateNote;