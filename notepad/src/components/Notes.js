import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import Note from './Note';
import NewNote from './NewNote';
import { Link } from 'react-router-dom';
import {  Jumbotron, Button } from "react-bootstrap";
import NoteCard from './NoteCard';


class Notes extends Component{


componentDidMount() {
    this.props.getNotes();
}

render() {
    return (
        <div className="notes">
            <div>Your Notes</div>
               
                {this.props.notes.map(note => {
                    return <NoteCard note={note} key={note.id} />
                })}
                {this.props.pending ? <h1>LOADING</h1> : null}
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

// function NoteCard({ note }) {
//     const { title, content, notes } = note;
//     return (
//         <Link to={`/notes/${note.id}`}>

           

//                 {/* {notes.map(note => (
//                     <div key={note} className="note-star">
//                         {note}
//                     </div>
//                 ))} */}
//         </Link>
//     );
// }

export default connect(mapStateToProps, { getNotes })(Notes);
