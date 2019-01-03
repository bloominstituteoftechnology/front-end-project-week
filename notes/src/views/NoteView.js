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
    fetchNote,
    deleteNote
} from '../actions';

// Component
import Note from '../components/Note';


// *** === Class Component === *** //
class NoteView extends Component {
    // ** == cDM == **
    componentDidMount() {
        this.props.fetchNote(this.props.match.params.noteId);
    }

    // ** == Action Handler == **
    handleDelete = () => {
        this.props.deletingNote();
        
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.noteId}`)
            .then(() => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    // ** == Render to DOM == **
    render() {
        if (!this.props.note.title) {
            return setTimeout(() => {
                return (
                    <h1> Loading Notes </h1>
                );
            }, 1000)
        } else if (this.props.error) {
            return (
                <h1> There was an error loading this note </h1>
            );
        } else {
            return (
                <Note note={this.props.note} handleDelete={this.handleDelete} />
            );
        }
    }
}


// *** === Map to Props=== *** //
const mapStateToProps = state => {
    return {
        ...state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNote: id => dispatch(fetchNote(id)),
        deleteNote: () => dispatch(deleteNote())
    }
}


// *** === Connect & Export === *** //
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteView);