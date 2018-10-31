import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NotesList extends Component {
        
    notes = this.props.notes;
    render() {
        return (
            <div className='notes-container'>
                <h1>
                    My Notes:
                </h1>
                <div className='notes-list'>
                    {Object.keys(this.props.notes).map(key => (
                        <Link to={`/notes/${key}`}>
                            <Note key={key} note={this.props.notes[key]} />
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

