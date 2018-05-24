import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addNote, editNote, removeNote } from '../actions';

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
        console.log(this.props.notes)
        console.log(this.matchedNote)
        return (
            <div className="note-view">
                <div className="button-group">
                    <Link to={`/editNote/${this.matchedNote.id}`} className="edit-button">
                        <button>Edit</button>
                    </Link>
                    <button
                        className="remove-button"
                        onClick={(event) => {
                            this.handleRemoveNote(event, this.matchedNote.id)
                        }}>Remove Note
                    </button>
                </div>
                <div>
                    <h4 className="note-title">{this.matchedNote.title}</h4>
                    <p className="note-body">{this.matchedNote.body}</p>
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