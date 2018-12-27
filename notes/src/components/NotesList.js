import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './NotesList.css'


class NotesList extends Component {


render() {
    return(
        <div className = "notes-list-container">
        {this.props.notes.map(note => {
            console.log(this.state);
            console.log(this.props.notes);
            return(
                <div key = {note.id} className = "note-container">
                <div className = "note">
                <div className="title-expand"> 
                <h1>{note.name}</h1>
             
                <Link to={`/note/${note.id}`}
                key = {note.id}>
                <button className = "expand-note">Expand</button>
                </Link>
                </div>
                <p>{note.content}</p>

                </div>
                </div>
            )
        })}
        </div>
    )
}

}

export default NotesList;