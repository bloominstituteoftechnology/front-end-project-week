import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editNote } from '../actions';

class EditNote extends Component {
    state = {
        notes: []
    }

    matchedNote = this.props.notes.filter(note => {
        return note.id == this.props.match.params.id
    })[0];

    render() {
        return (
            <div>
                {/* <h4>{this.matchedNote.title}</h4>
                <p>{this.matchedNote.body}</p> */}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { editNote })(EditNote);