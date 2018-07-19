import React from 'react';
import NotesCard from './NotesCard';
import { NotesWrapper, NotesCards, SearchForm, MainNotesHeader, MainNotesHeaderContainer } from '../ReusableComponents/Notes';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import NotesTrash from './NotesTrash';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    moveCard = (dragIndex, hoverIndex) => {
        const dragCard = this.props.notes[dragIndex]
        this.props.setNotes(dragIndex, hoverIndex, dragCard);
    }

    deleteCard = id => {
        this.props.deleteNote(id);
    }

    // Maps over all notes and passes them down to the NotesCard component
    render() {
        let notes = this.props.notes;
        let search = this.state.searchString.toString().trim().toLowerCase().replace(/\\/g, "\\\\").replace(/[°*"§%()[\]{}=\\?´`'#<>|,;.:+_-]+/g, '');

        if (search.length > 0) {
            notes = notes.filter(note => note.title.toLowerCase().match(search)
                || note.textBody.toLowerCase().match(search)
                || note.tags.filter(tag => tag.toLowerCase().match(search)).length > 0);
        }

        return (
            <NotesWrapper>

                <MainNotesHeaderContainer>

                    <MainNotesHeader main>Your Notes:</MainNotesHeader>
                    <SearchForm onSubmit={event => event.preventDefault()}>
                        <input onChange={this.handleInput} value={this.state.searchString} name='searchString' type='text' placeholder='Search...' />
                    </SearchForm>
                    <NotesTrash deleteCard={this.deleteCard} />

                </MainNotesHeaderContainer>

                <NotesCards>
                    {notes.map((note, i) => <NotesCard key={note._id} note={note} index={i} moveCard={this.moveCard} />)}
                </NotesCards>

            </NotesWrapper>
        );
    }

}

export default DragDropContext(HTML5Backend)(NotesContainer);