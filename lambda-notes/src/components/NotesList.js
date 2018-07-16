import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import '../styles/NotesList.css';

class NotesList extends Component {
    render() {
        return (
            <div className='notes-container'>
                <h1>Your Notes:</h1>
                {this.props.notes.map(note => {
                    return <Note key={note.id} title={note.title} body={note.textBody} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps)(NotesList);