import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Note from './Note';
import SideBar from './side-bar';

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
            <div className = "main-container">
              <SideBar />
              <div className = "create-note-form view-notes">
                <h3 className = "your-notes">Your Notes:</h3>
                {notes.map((note, i) => <Link to ={`/${note.title.split(' ').join('')}`} key = {i}><Note key = {i} index = {i} title ={note.title} content = {note.textBody} click = {this.props.click}/></Link> )}

              </div>
            </div>
        )
        
    }
}

export default ViewAllNotes