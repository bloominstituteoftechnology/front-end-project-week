import React from 'react';

class NotesForm extends React.Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Note Title' />
                <input type='text' placeholder='Note Content' />
            </form>
        );
    }
}

export default NotesForm;