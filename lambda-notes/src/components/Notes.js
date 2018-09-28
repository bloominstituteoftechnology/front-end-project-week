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
                <Link to={`/${note._id}`}>   
                <div className ="link">        
                <Note 
                noteTitle ={note.title}
                noteBody={note.textBody} 
                key = {note._id}
                note={note}
                />
                </div>
                </Link>
                )
            })}
        </div>
    )
    }
}



export default Notes;