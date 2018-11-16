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
            <div className='notesList'>
            <h2> Your Notes </h2>
            {this.props.notes.map( jot => <Note title={jot.title} key={jot._id} textBody={jot.textBody} jot={jot} />)}
            Yep it works
            </div>
        )
    }
}

export default NotesList