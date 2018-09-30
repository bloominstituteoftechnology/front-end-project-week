import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NotesList extends Component {
        
    render() {
        return (
            <div className='notes-container'>
                <h1>
                    My Notes:
                </h1>
                <div className='notes-list'>
                    {this.props.notes.map(note => (
                        <Link to={`/notes/${note._id}`}>
                            <Note key={note._id} note={note} />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

// export default NotesList;

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
}

export default connect(
    mapStateToProps,
)(NotesList);

