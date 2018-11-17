import React, {Component} from 'react'
import { NotesContext } from '../contexts/NotesProvider';

import Note from './Note'


class ViewNotes extends Component{



    render(){
        return (
        //Consume the state
        <div className="notesContainer">
        <h3 className="viewHeader">Your Notes: </h3>
        <NotesContext.Consumer>
            {data =>{
                const noteData = data.state.notes;
                const notes = noteData.map(note =>{
                    return <Note key={note._id} note={note} />
                })

                return (
                    notes
                 
                )
            }}
        </NotesContext.Consumer>
        </div>
        )
    }
}

export default ViewNotes;
