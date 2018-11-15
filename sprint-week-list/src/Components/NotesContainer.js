import React from 'react';

import Note from './Note';

class NotesContainer extends React.Component{
   
  
    render(){
        console.log('I am console log',this.props.notes)
        return(
            <div className = 'notes-container'>
                <h1>Your Notes: </h1>
                <div>{this.props.notes.map(note =>{
                    return(
                        <Note 
                            key = {note.id}
                            id = {note.id}
                            textBody = {note.textBody}
                            title = {note.title}/>
                    )
                })}</div>
            </div>
        )
    }
}

export default NotesContainer;