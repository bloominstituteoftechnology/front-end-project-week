import React from 'react';
import { connect } from 'react-redux';

import { fetchNotes, setUpdateNote, deleteNote } from '../actions';

import Note from '../components/Note';
import DeleteModal from '../components/DeleteModal';

class NoteView extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modalOpen: false };
    }
    componentDidMount() {
        if (this.props.notes.length === 0) {
            this.props.fetchNotes();
        }
    }

    handleConfirmDelete = () => {
       this.setState({
           modalOpen: !this.state.modalOpen
       })
        
    }

    handleDeleteNote = noteId => {
        this.props.deleteNote(noteId);
    }

    goToUpdateNoteForm = (event, id) => {
        event.preventDefault();
        this.props.setUpdateNote(id);
        this.props.history.push('/addNote');
    }

    render() {
        return (
            <Note
            {...this.props}
            notes={this.props.notes}
            fetchingNotes={this.props.fetchingNotes}
            handleConfirmDelete={this.handleConfirmDelete}
            goToUpdateNoteForm={this.goToUpdateNoteForm}
            />
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
});

export default connect(mapStateToProps, { fetchNotes, setUpdateNote, deleteNote })(NoteView);