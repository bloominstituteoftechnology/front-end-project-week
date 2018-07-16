import React from 'react';

class NotesForm extends React.Component {
    render() {
        return (
            <form className='notes-form'>
                <input className='note-title-field' type='text' placeholder='Note Title' />
                <textarea className='note-content-field' type='text' name='Text1' placeholder='Note Content' />

                <button onClick={() => this.props.history.push('/')} className='main-buttons'>Save</button>
            </form>
        );
    }
}

export default NotesForm;