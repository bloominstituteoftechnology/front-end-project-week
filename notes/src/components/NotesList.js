import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './NotesList.css'

const dummyData = [
    {
        id: 1,
        tags: [],
        title: 'Note Title',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
    {
        id: 2,
        tags: [],
        title: 'Note Title',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
    {
        id: 3,
        tags: [],
        title: 'Note Title',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
    {
        id: 4,
        tags: [],
        title: 'Note Title',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
  ]

class NotesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: this.props.notes
        }
    }


// componentDidMount() {
//     axios.get('https://killer-notes.herokuapp.com/note/get/all')
//     .then(response => {
//         this.setState({notes: response.data})
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

render() {
    return(
        <div className = "notes-list-container">
        {this.props.notes.map(note => {
            console.log(this.state);
            console.log(this.state.notes);
            console.log(this.state.note);
            return(
                <div key = {note.id} className = "note-container">
                <div className = "note">
                <div className="title-expand"> 
                <h1>{note.title}</h1>
             
                <Link to={`/note/${note.id}`}
                key = {note.id}>
                <button className = "expand-note">Expand</button>
                </Link>
                </div>
                <p>{note.textBody}</p>

                </div>
                </div>
            )
        })}
        </div>
    )
}
}

export default NotesList;