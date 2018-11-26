import React from 'react';
import axios from 'axios';
import Note from './Note';
import './NotesContainer.css';

 class NoteList extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
             error: null,
            notes: []
        }
    }
     componentDidMount() {
        console.log('NoteList: componentDidMount()');
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then( response => {
                this.setState({error: null, notes: response.data});
            })
            .catch( err => {
                this.setState({...this.state, error: "Unable to retrieve notes from server"});
            })
    }
     render() {
        console.log('NoteList: render()');
         return (
             <div>
                 <h1>Your Notes:</h1>
            <div className="note-list">                
                { this.state.notes.map(note => <Note note={note} key={note._id}/> ) }
                 </div>
                 </div>
        )
    }
}

export default NoteList;