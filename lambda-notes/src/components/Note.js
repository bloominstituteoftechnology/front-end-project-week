import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addNote, editNote, removeNote } from '../actions';

const routeView = 'Note View'

class Note extends Component {
    state = {
        notes: []
    }

    matchedNote = this.props.notes.filter(note => {
        return note.id == this.props.match.params.id
    })[0];

    handleRemoveNote = (event, id) => {
        event.preventDefault();
        this.props.removeNote(id)
        this.props.history.push('/');
    };

    render() {
        console.log(this.props.match)
        console.log(this.matchedNote)
        return (
            <div>
                <button>Edit</button>
                <button
                    value={this.matchedNote} onClick={(event) => {
                        this.handleRemoveNote(event, this.matchedNote)
                    }}>Remove Note
                </button>
                <div>
                    <h4>{this.matchedNote.title}</h4>
                    <p>{this.matchedNote.body}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { addNote, editNote, removeNote })(Note);