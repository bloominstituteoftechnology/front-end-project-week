import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeNote, editNote } from '../actions';

class EditNote extends Component {
    state = {
        notes: []
    }

    handleRemoveNote = (event, index) => {
        event.preventDefault();
        this.props.removeNote(index)
    };

    render() {
        return (
            <Link to={`/note/${this.props.notes.id}`}>
                <div>
                    <h4>{this.props.notes.title}</h4>
                    <p>{this.props.notes.body}</p>
                </div>
                <button>Edit</button>
                <button
                    value={this.props.notes.index} onClick={(event) => {
                        this.handleRemoveNote(event, this.props.notes.index)
                    }}>Remove Note
                </button>
            </Link>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { editNote, removeNote })(EditNote);