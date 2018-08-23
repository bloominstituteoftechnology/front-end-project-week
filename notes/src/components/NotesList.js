import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class NotesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
    }


componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
        this.setState({notes: response.data})
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
                <div className = "note-container">
                <div className = "note">
                <Link to={`/notes/${note._id}`}
                key = {note._id}>
                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
                </Link>
                </div>
                </div>
            )
        })}
        </div>
    )
}
}

export default NotesList;