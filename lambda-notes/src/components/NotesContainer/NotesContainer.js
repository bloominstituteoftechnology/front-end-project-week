import React from 'react';
import NotesCard from './NotesCard';
import { NotesWrapper, NotesCards, SearchForm, MainNotesHeader, MainNotesHeaderContainer } from '../ReusableComponents/Notes';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import NotesTrash from './NotesTrash';
import ModalContainer from '../ModalContainer/ModalContainer';
import RequireAuth from '../Authenticate/RequireAuth';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            id: '',
            modal: false,
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    moveCard = (dragIndex, hoverIndex) => {
        const dragCard = this.props.notes[dragIndex];

        const note1 = this.props.notes[dragIndex];
        const note2 = this.props.notes[hoverIndex];

        this.props.setNotes(dragIndex, hoverIndex, dragCard);

        let noteId1 = note1.sort_id;
        let noteId2 = note2.sort_id;

        note1.sort_id = noteId2;
        note2.sort_id = noteId1;

        this.props.editNote(note1);
        this.props.editNote(note2);
    }

    deleteNote = () => {
        this.props.deleteNote(this.state.id);
        this.toggleModal();
    }

    getId = id => {
        this.setState({ id });
    }

    toggleModal = () => {
        // Toggles modal state 
        this.setState({ modal: !this.state.modal });
    }

    // Maps over all notes and passes them down to the NotesCard component
    render() {
        let notes = this.props.notes;
        let search = this.state.searchString;

        console.log(notes);

        if (search.length > 0) {
            notes = notes.filter(note => note.title.toLowerCase().match(search)
                || note.content.toLowerCase().match(search)
                || note.tags.filter(tag => tag.toLowerCase().match(search)).length > 0);
        }

        return (
            <NotesWrapper>

                <MainNotesHeaderContainer>

                    <ModalContainer modal={this.state.modal} deleteNote={this.deleteNote} toggleModal={this.toggleModal} />

                    <MainNotesHeader main>Your Notes:</MainNotesHeader>
                    <SearchForm onSubmit={event => event.preventDefault()}>
                        <input onChange={this.handleInput} value={this.state.searchString} name='searchString' type='text' placeholder='Search...' />
                    </SearchForm>
                    <NotesTrash toggleModal={this.toggleModal} getId={this.getId} />

                </MainNotesHeaderContainer>

                <NotesCards>
                    {notes.map((note, i) => <NotesCard key={note.id} note={note} index={i} moveCard={this.moveCard} />)}
                </NotesCards>

            </NotesWrapper>
        );
    }

}

export default RequireAuth(DragDropContext(HTML5Backend)(NotesContainer));