import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../actions';
import Note from './Note';
import Search from './Search';
import '../styles/NotesList.css';

const URL = 'https://killer-notes.herokuapp.com/note/get/';

class NotesList extends Component {
    componentDidMount() {
        this.props.fetchNotes(URL);
      }

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
                        <Search />
                        <div className='notes-container'>
                            {this.props.searchedNotes.length > 0 ? (
                                <React.Fragment>
                                    {this.props.searchedNotes.map(note => {
                                        return (
                                            <Link className="note-link" to={'/note/' + note._id} key={note._id} >
                                                <Note title={note.title} body={note.textBody} tags={note.tags} />
                                            </Link>
                                        )
                                    })}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {this.props.notes.map(note => {
                                        return (
                                            <Link className="note-link" to={'/note/' + note._id} key={note._id} >
                                                <Note title={note.title} body={note.textBody} tags={note.tags} />
                                            </Link>
                                        )
                                    })}
                                </React.Fragment>
                            )}
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
        fetchingNotes: state.fetchingNotes,
        notes: state.notes,
        searchedNotes: state.searchedNotes,
        error: state.error,
    }
}

export default connect(mapStateToProps, { fetchNotes })(NotesList);