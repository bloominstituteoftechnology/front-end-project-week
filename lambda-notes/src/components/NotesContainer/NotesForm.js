import React from 'react';

class NotesForm extends React.Component {
    render() {
        return (
            <form className='notes-form'>
                <input className='note-title-field' type='text' placeholder='Note Title' />
                <input className='note-content-field' type='text' placeholder='Note Content' />
                <button className='main-buttons'>Save</button>
            </form>
        );
    }
}

export default NotesForm;