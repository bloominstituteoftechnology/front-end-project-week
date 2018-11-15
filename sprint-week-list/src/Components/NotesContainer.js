import React from 'react';

import Note from './Note';

class NotesContainer extends React.Component{
   
  
    render(){
        console.log(this.props.notes)
        return(
            <div className = 'notes-container'>
                <h1>Your Notes: </h1>
                <div>{this.props.notes.map(note =>{
                    return(
                        <Note note = {note}/>
                    )
                })}</div>
            </div>
        )
    }
}

export default NotesContainer;