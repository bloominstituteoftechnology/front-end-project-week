import React from 'react';

//styling
import './EditCreate.css';

const EditNote = () => {
    return (
        <div className='notePage'>
            <h3>Create New Note:</h3>
            <form className='noteEntry'>
                <input type='text' placeholder='Note Title' name='noteTitle' />
                {/* <input type='text' placeholder='Note Content' name='noteContent' /> */}
                <textarea rows='25' placeholder='Note Content' name='noteContent'>

                </textarea>
                <button className='noteSave'>Save</button>
            </form>
        </div>
    );
}
 
export default EditNote;