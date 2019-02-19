import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

import axios from 'axios'
class NotesList extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let sortedNotes = this.props.notes.sort( (x,y) => {
            let XTITLE = x.title.toLowerCase();
            let YTITLE = y.title.toLowerCase();
            if (XTITLE<YTITLE) {return -1;}
            if (XTITLE>YTITLE) {return 1;}
            else {return 0;}


        })
        return (
            <div className='notesContainer'>
            <h2> Your Notes: </h2>
            <div className='gridList'>
            {sortedNotes.map( jot => <Link key={`link-${jot.id}`} to={`/note/${jot.id}`}><Note title={jot.title} key={jot._id} textBody={jot.textBody} jot={jot} /></Link>)}
            </div>
            </div>
        )
    }
}

export default NotesList