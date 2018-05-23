import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

class NoteList extends Component {
    state = {
        notes: []
    }

    render() {
        console.log(this.props.notes)
        return (
            <div className="notelist">
                <h1>Your Notes:</h1>
                {this.props.notes.map(note => {
                    return (
                    <div key={note.id} className="note">
                        <h4>{note.title}</h4>
                        <p>{note.body}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { addNote })(NoteList);