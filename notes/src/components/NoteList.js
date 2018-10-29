import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import Note from './Note';

class NoteList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return (
            this.props.fetching ? 
            <div className='loading'>Loading Notes</div> :
            <div className="note-list">
                <h2>Your Notes:</h2>
                <div className='notes-container'>
                    {this.props.notes.map(note => <Note key={note.id} note={note}/>)} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        fetching: state.fetching
    };
};

export default connect(mapStateToProps, { fetchNotes })(NoteList);