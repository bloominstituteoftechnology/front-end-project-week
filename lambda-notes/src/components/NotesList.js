import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNote } from '../actions';
import Note from './Note';
import '../styles/NotesList.css';

const URL = 'https://killer-notes.herokuapp.com/note/get/';

class NotesList extends Component {
    render() {
        return (
            <div className='notes-container'>
               {this.props.fetchingNotes ? (
                   <h1>... fetching notes ...</h1>
               ) : (
                <React.Fragment>
                    <h1>Your Notes:</h1>
                    {this.props.notes.map(note => {
                        return (
                            <Link to={'/note/' + note._id} onClick={() => this.props.fetchNote(URL, note._id)} key={note._id} >
                                <Note title={note.title} body={note.textBody} />
                            </Link>
                        )
                    })}
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
    }
}

export default connect(mapStateToProps, { fetchNote })(NotesList);