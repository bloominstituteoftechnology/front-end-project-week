import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Note from './Note';
import '../styles/NotesList.css';

class NotesList extends Component {
    render() {
        return (
            <div className='notes-list-container'>
            {/* displays loading text while waiting for response from server */}
               {this.props.fetchingNotes ? (
                   <h1>... fetching notes ...</h1>
               ) : (
                    <React.Fragment>
                    {/* displays error if server returns error */}
                    {this.props.error ? (
                        <h1>{this.props.error}</h1>
                    ) : (
                    <React.Fragment>
                        {/* if no server error, iterates over notes array and returns each note in a Link that routes to view the selected note */}
                        <h1>Your Notes:</h1>
                        <div className='notes-container'>
                        {this.props.notes.map(note => {
                        return (
                            <Link className="note-link" to={'/note/' + note._id} key={note._id} >
                                <Note title={note.title} body={note.textBody} tags={note.tags} />
                            </Link>
                        )
                    })}
                    </div>
                    </React.Fragment>
                    )}
                </React.Fragment>
               )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        fetchingNotes: state.fetchingNotes,
        error: state.error,
    }
}

export default connect(mapStateToProps)(NotesList);