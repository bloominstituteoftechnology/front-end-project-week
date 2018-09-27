import React from 'react';
import {Link} from 'react-router-dom';
import Note from './Note';
import './Notes.css';

class Notes extends React.Component {
    constructor(props){
        super()
    }


    render(){
    return(
        <div className="all-notes">
            <h2>Your Notes:</h2>
            {this.props.notes.map(note => {
                return(
                <div className ="link">    
                <Link to={`/${note._id}`}>    
                <Note 
                noteTitle ={note.title}
                noteBody={note.textBody}
                id = {note._id} 
                key = {note._id}
                />
                </Link>
                </div>
                )
            })}
        </div>
    )
    }
}



export default Notes;