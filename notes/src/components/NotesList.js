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

// function NoteLink({ note }) {
//     return (
//         <Link to={`/notes/${note._id}`}>
//         </Link>
//     )
// }

// const mapStateToProps = state => {
//     const { notesReducer } = state;
//     return {
//         notes: state.notes,
//         getNotes: notesReducer.getNotes,
//     };
// }

// export default connect(
//     mapStateToProps,
//     {}
// );

export default NotesList;