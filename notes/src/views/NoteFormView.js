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
    createNote
} from '../actions';

// Component
import NoteForm from '../components/NoteForm';

class NoteFormView extends Component {
    handleCreate = newNote => {
        this.props.createNote();

        axios
            .post('https://fe-notes.herokuapp.com/note/create', newNote)
            .then(data => {
                this.props.history.push(`/note/${data.data.success}`)
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleUpdate = note => {
        // this.props.updateNote();
        console.log(this.props.match.params.noteId)
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.noteId}`, note)
            .then(data => {
                this.props.history.push(`/note/${data.data._id}`)
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
                update={this.props.update}
                handleUpdate={this.handleUpdate}
                note={this.props.note}
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