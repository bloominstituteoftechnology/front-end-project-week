import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';

class NotesList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.notes.map(note => {
                    return <Note key={note.id} title={note.title} body={note.textBody} />
                })}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps)(NotesList);