import React, {
    Component
} from 'react';

// Redux Imports
import {
    connect
} from 'react-redux';

import axios from 'axios';

// Action Creators
import {
    createNote,
    fetchNote
} from '../actions';

// Component
import NoteForm from '../components/NoteForm';

class NoteFormView extends Component {
    handleCreate = newNote => {
        this.props.createNote();

        axios
            .post('https://fe-notes.herokuapp.com/note/create', newNote)
            .then(data => {
                this.props.history.push('/note/' + data.data.success)
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <NoteForm
                createNote={this.props.createNote}
                handleCreate={this.handleCreate}
                noteId={this.props.noteId}
                history={this.props.history}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        createNote: newNote => dispatch(createNote(newNote))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteFormView);