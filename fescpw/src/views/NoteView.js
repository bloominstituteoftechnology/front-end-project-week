import React, { Component } from 'react'
import { connect } from 'react-redux';

import { notesFetch, notesSetEdit, notesRemove } from '../redux/actions';

import Note from '../components/Note';
import NotesMenuView from './NotesMenuView';
import NotesModalView from './NotesModalView';

class NoteView extends Component {
    componentDidMount() {
        if (this.props.notes_array.length === 0) {
            this.props.notesFetch();
        }
    }

    handleDeleteNote = noteID => {
        this.props.notesRemove(noteID);
    }

    redirectForm = (event, id) => {
        event.preventDefault();
        this.props.notesSetEdit(id);
        this.props.history.push("/notes-form")
    }
  render() {
    return (
        <div>
            <NotesMenuView />
            <Note {...this.props} 
                // hdldltnt={this.hdldltnt}
                redirectForm={this.redirectForm}
                notes_fetching={this.props.notes_fetching}
                notes_fetched={this.props.notes_fetched}
                notes_array={this.props.notes_array}
                note={this.props.note}
            />
            <NotesModalView {...this.props}
                handleDeleteNote={this.handleDeleteNote}
                notes_fetching={this.props.notes_fetching}
                notes_fetched={this.props.notes_fetched}
                notes_array={this.props.notes_array}
                note={this.props.note}
            />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    notes_fetching: state.notesReducer.notes_fetching,
    notes_fetched: state.notesReducer.notes_fetched,
    notes_array: state.notesReducer.notes_array,
    note: state.notesReducer.note
})

export default connect(mapStateToProps, { notesFetch, notesSetEdit, notesRemove })(NoteView);