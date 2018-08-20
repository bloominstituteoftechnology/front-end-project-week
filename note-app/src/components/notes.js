import React, {Component} from 'react'
import Note from './Note';

class ViewAllNotes extends Component {
    constructor (props){
        super(props)
        this.state = {

        }
    }
    
    render() {
        const notes = this.props.notes; 
        console.log(notes)
        return (
            <div className = "create-note-form">
              <h3>Your Notes:</h3>
              {notes.map((note, i) => <Note key = {i} title ={note.title} content = {note.content}/>  )}

            </div>
        )
        
    }
}

export default ViewAllNotes