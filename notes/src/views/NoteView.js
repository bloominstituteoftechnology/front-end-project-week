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
    fetchNote
} from '../actions';

// Component
import Note from '../components/Note';

class NoteView extends Component {
    componentDidMount() {
        this.props.fetchNote(this.props.match.params.noteId)
    }

    handleDelete = () => {
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.noteId}`)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        if (!this.props.note.title) {
            return setTimeout(() => {
                return ( <h1> Loading Notes </h1>);
                }, 1000)
            }
        else if (this.props.error) {
            return (<h1> There was an error loading this note </h1>)
        } else {
            return (
                <Note note={this.props.note} handleDelete={this.handleDelete}/>
            )

        }
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNote: id => dispatch(fetchNote(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteView);