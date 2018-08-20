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
        return (
            <div className = "create-note-form view-notes">
              <h3 className = "your-notes">Your Notes:</h3>
              {notes.map((note, i) => <Note key = {i} index = {i} title ={note.title} content = {note.content} click = {this.props.click}/> )}

            </div>
        )
        
    }
}

export default ViewAllNotes