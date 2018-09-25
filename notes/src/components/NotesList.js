import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './NotesList.css'


class NotesList extends Component {

        state = {
            notes: []
        }

    componentDidMount() {
        axios
        .get('http://localhost:9000/api/notes')
        .then(response => {
            this.setState({notes: response.data})
            console.log('response in noteslist',response);
        })
        .catch(err => {
            console.log(err)
        })
    }

render() {
    return(
        <div className = "notes-list-container">
        {this.state.notes.map(note => {
            console.log(this.state);
            console.log(this.state.notes);
            console.log(this.state.note);
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