import React from 'react';
import NotesForm from './NotesForm';
import { NotesWrapper, MainNotesHeader, NotesCards } from '../ReusableComponents/Notes';

class CreateNotesContainer extends React.Component {
    // Displays form when creating a note
    render() {
        return (
            <NotesWrapper>

                <MainNotesHeader>Create New Note:</MainNotesHeader>
                <NotesCards>
                    <NotesForm history={this.props.history} />
                </NotesCards>

            </NotesWrapper>
        );
    }
}

export default CreateNotesContainer;