import React, {Component} from 'react'
import { NotesContext } from '../contexts/NotesProvider';

import NoteCard from './NoteCard'


class ViewNotes extends Component{


    render(){
        return (
        //Consume the state
        <div className="notesContainer">
        <h3 className="viewHeader">Your Notes: </h3>
        <NotesContext.Consumer>
            {data =>{
                if(data.state.loading){ return <h1>Loading...</h1>}
                if(data.state.error){ return <h1>Unable to load notes...</h1>}
                const noteData = data.state.notes;
                const notes = noteData.map(note =>{
                    return <NoteCard key={note.id} note={note} />
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
