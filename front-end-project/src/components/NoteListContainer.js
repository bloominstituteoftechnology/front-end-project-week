import React from "react";
import './component.css'
import IndividualNote from './IndividualNote'

class NoteListContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            notes: [this.props.notes]
        }
    }
    // const routeToItem = (ev, note) => {
    //     ev.preventDefault();
    //     props.getNoteId(note)
    //     props.history.push(`/note-list/${note._id}`)
    //     console.log("noteID",note._id)
    // }
    render()
    {
        return (
            <div className="note-container">
                <h1>Your Notes:</h1>
                <div className="note-wrapper">
                  {this.props.notes.map(note => {
                      return <IndividualNote key={note._id} note={note} getNoteId={this.props.getNoteId} />
                  })}
                </div>
            </div>
        )
    }
    
}

export default NoteListContainer;

// {/* <div key={note._id} onClick={ev => routeToItem(ev, note)} className="list-contain">
//                     <h4 className="note-title">{note.title}</h4>
//                     <p className="note-body">{note.textBody}</p>
//                 </div> */}