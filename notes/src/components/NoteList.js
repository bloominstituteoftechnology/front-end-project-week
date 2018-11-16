import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from './Note';
import NoteListStyle from '../Styles/NoteList';
import { getNotes } from '../actions';

class NoteList extends Component {
    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <NoteListStyle>
                { this.props.loading ? <h1>Loading</h1> : null }
                { this.props.error !== '' ? <h1>{this.props.error}</h1> : null }
                {this.props.notes.map(note => (
                    <Note key={note._id} title={note.title} body={note.textBody} id={note._id} />
                ))}
            </NoteListStyle>     
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    error: state.error,
    loading: state.loading
});

export default connect(mapStateToProps, { getNotes })(NoteList);