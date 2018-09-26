import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';
import { connect } from 'react-redux';

class NotesList extends Component {
        
    render() {
        return (
            <div className='notes-list'>
                <h1>
                    My Notes:
                </h1>
                {this.props.notes.map(note => (
                    <Note key={note._id} note={note} />
                ))}
            </div>
        );
    }
}

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