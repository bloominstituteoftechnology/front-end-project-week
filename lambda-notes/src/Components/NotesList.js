import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import axios from 'axios'
class NotesList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='notesContainer'>
            <h2> Your Notes: </h2>
            <div className='notesList'>
            {this.props.notes.map( jot => <Note title={jot.title} selectedHandler={this.props.selectedHandler} ID={jot._id} key={jot._id} textBody={jot.textBody} jot={jot} />)}
            </div>
            </div>
        )
    }
}

export default NotesList