// *** === Imports === *** //
// React
import React, {
    Component
} from 'react';

// Redux
import {
    connect
} from 'react-redux';

// Axios
import axios from 'axios';

// Action Creators
import {
    createNote,
    updateNote
} from '../actions';

// Component
import NoteForm from '../components/NoteForm';


// *** === Class Component === *** //
class NoteFormView extends Component {

    // ** == Action Handlers == **
    handleCreate = newNote => {
        this.props.createNote();

        axios
            .post('https://fe-notes.herokuapp.com/note/create', newNote)
            .then(data => {
                this.props.history.push(`/note/${data.data.success}`);
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleUpdate = note => {
        this.props.updateNote();

        axios
            .put(
                `https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.noteId}`,
                note
            )
            .then(data => {
                this.props.history.push(`/note/${data.data._id}`);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // ** == Render to DOM == **
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
        );
    }
}


// *** === Map to Props=== *** //
const mapStateToProps = state => {
    return {
        ...state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNote: newNote => dispatch(createNote(newNote)),
        updateNote: () => dispatch(updateNote())
    };
};


// *** === Connect & Export === *** //
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteFormView);