import React from 'react';
import NotesForm from './NotesForm';

class CreateNotesContainer extends React.Component {
    // Displays form when creating a note
    render() {
        return (
            <div className='create-notes-container'>

                <h3 className='notes-header'>Create New Note:</h3>
                <div className='notes-cards'>
                    <NotesForm history={this.props.history} />
                </div>

            </div >
        );
    }
}

export default CreateNotesContainer;