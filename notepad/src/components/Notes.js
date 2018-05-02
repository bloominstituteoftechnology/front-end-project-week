import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import Note from './Note';
import NewNote from './NewNote';

class Notes extends Component{


componentDidMount() {
    this.props.getNotes();
}

render() {
    return (
        <div className="NotesList">
            <div>
                <h3>Lambda Notes</h3>
            </div>
            <div>Your Notes</div>
            <NewNote />
            <div>
                {this.props.notes.map(note => {
                    return <Note note={note} key={note.id} />
                })}
                {this.props.pending ? <h1>LOADING</h1> : null}
            </div>
        </div>
    ); 
}
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        pending: state.fetchingNotes,

    }
}

export default connect(mapStateToProps, { getNotes })(Notes);
