import React, {Component} from 'react'
import { NotesContext } from '../contexts/NotesProvider';


class ViewNotes extends Component{



    render(){
        return (
        //Consume the state
        <NotesContext.Consumer>
            {data =>{
                const noteData = data.state.notes;
                const notes = noteData.map(note =>{
                    return (
                        <div>
                            <h1>{note.title}</h1>
                            <hr/>
                            <p>{note.textBody}</p>
                        </div>
                        )
                })
                return (
                    notes
                 
                )
            }}
        </NotesContext.Consumer>
        )
    }
}

export default ViewNotes;
