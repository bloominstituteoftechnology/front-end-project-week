import React from 'react'
import './index.css'

const EditNote = () => {
    return (
        <div className='editNote-container'>
        <div className='note-Header'><h3>Edit Note:</h3></div>
        <div className='form-container'>
            <input type="text" name="tittle" placeholder='Note Tittle'/>
            <textarea name="textBody"  cols="30" rows="30" placeholder='Note Body'></textarea>
            <div className="submit">Update</div>
        </div>
    </div>
    );
};

export default EditNote;