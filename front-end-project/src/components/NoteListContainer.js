import React from "react";
import './component.css'
import IndividualNote from './IndividualNote'

class NoteListContainer extends React.Component {
    constructor(props){
        super(props)
    
    }

    render()
    {
        return (
            <div className="note-container">
                <h1>Your Notes:</h1>
                <button className="sort-btn" onClick={this.props.sortAtoZ}>Sort: A-Z</button>
                <div className="note-wrapper">
                  {this.props.notes.map((note, i) => {
                      return <IndividualNote key={note._id} moveCard={this.props.moveCard} index={i} note={note} id={note._id} getNoteId={this.props.getNoteId} />
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