import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

import axios from 'axios'
class NotesList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='notesContainer'>
            <h2> Your Notes: </h2>
            <div className='gridList'>
            {this.props.notes.map( jot => <Link to={`/note/${jot._id}`}><Note title={jot.title} key={jot._id} textBody={jot.textBody} jot={jot} /></Link>)}
            </div>
            </div>
        )
    }
}

export default NotesList