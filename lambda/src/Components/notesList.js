import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Components';

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

class NotesList extends Component {
    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    return <Note note={note} />;
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps)(NotesList);



