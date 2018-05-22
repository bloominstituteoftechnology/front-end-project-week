import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        console.log(this.props.notes)
        return (
            <div>
                <div>
                    <h4>{this.props.notes[0].title}</h4>
                    <p>{this.props.notes[0].body}</p>
                </div>
                <button>Edit</button>
                <button
                    value={this.props.notes.index} onClick={(event) => {
                        this.handleRemoveNote(event, this.props.notes.index)
                    }}>Remove Note
                </button>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { editNote, removeNote })(EditNote);