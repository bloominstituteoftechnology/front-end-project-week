import React from 'react';

const NewNote = props => {
    return (
        <div className='create-view'>
            <div className='notes-sidebar'>
                <h1 className='title'>Lambda Notes</h1>
                <button>View Your Notes</button>
                <button>+ Create New Note</button>
            </div>
            <div>
                <h4 className='notes-title'>Create New Note</h4>
                <input className='note-title-input' placeholder='Note Title'></input>
                <input className='note-content-input' placeholder='Note Content'></input>
                <button>Save</button>
            </div>
        </div>
    )
}
export default NewNote;