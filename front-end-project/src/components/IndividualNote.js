import React from 'react'
import './component.css'
import { withRouter } from "react-router";


const IndividualNote = props => {
      const routeToItem = (ev, note) => {
        ev.preventDefault();
        props.getNoteId(note)
        props.history.push(`/note-list/${note._id}`)
        console.log("noteID",note._id)
    }
    return (
        <div className="indiv-note"  onClick={ev => routeToItem(ev, props.note)}>
            <h4 className="note-title">{props.note.title}</h4>
            <p className="note-body">{props.note.textBody}</p>
        </div>
    )
}

export default withRouter(IndividualNote);