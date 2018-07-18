import React from 'react';
import NotesCard from './NotesCard';
import { NotesWrapper, NotesCards, SearchForm, MainNotesHeader } from '../ReusableComponents/Notes';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import update from 'immutability-helper';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            notes: this.props.notes
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    moveCard = (dragIndex, hoverIndex) => {
        const { notes } = this.state
        const dragCard = notes[dragIndex]

        this.setState(
            update(this.state, {
                notes: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            }),
        )
    }

    // Maps over all notes and passes them down to the NotesCard component
    render() {
        let notes = this.state.notes;
        let search = this.state.searchString.trim().toLowerCase().replace(/\\/g, "\\\\");

        if (search.length > 0) {
            notes = notes.filter(note => note.title.toLowerCase().match(search)
                || note.textBody.toLowerCase().match(search)
                || note.tags.filter(tag => tag.toLowerCase().match(search)).length > 0);
        }

        return (
            <NotesWrapper>

                <SearchForm>
                    <input onChange={this.handleInput} value={this.state.searchString} name='searchString' type='text' placeholder='Search' />
                </SearchForm>

                <MainNotesHeader main>Your Notes:</MainNotesHeader>

                <NotesCards>
                    {notes.map((note, i) => <NotesCard key={note._id} note={note} index={i} moveCard={this.moveCard} />)}
                </NotesCards>

            </NotesWrapper>
        );
    }

}

export default DragDropContext(HTML5Backend)(NotesContainer);