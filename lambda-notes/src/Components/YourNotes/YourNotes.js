import React, {Component} from 'react';
import './YourNotes.css';
import Note from '../Note/Note';

class YourNotes extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        fetch('http://localhost:9000/api/notes')
        .then(response => response.json())
        .then(data => this.setState(
            {
                notes: data
            }
        ))
        .catch(err => console.log(err))
    }


    render() {
        const noteslist = this.state.notes.map(
            note => <Note key={note.id} title={note.title} content={note.content} id={note.id} />
        )
        return(
            <div className='notes'>
               <p className='your-notes-title'>Your Notes:</p>
               <div className='noteslist'>
                    {noteslist} 
               </div>
            </div>
        );
    }
}

export default YourNotes;