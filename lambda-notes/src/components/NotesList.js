import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Note from './Note';
import '../styles/NotesList.css';

const URL = 'https://killer-notes.herokuapp.com/note/';

class NotesList extends Component {
    render() {
        return (
            <div className='notes-container'>
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
                        {this.props.notes.map(note => {
                        return (
                            <Link to={'/note/' + note._id} key={note._id} >
                                <Note title={note.title} body={note.textBody} />
                            </Link>
                        )
                    })}
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