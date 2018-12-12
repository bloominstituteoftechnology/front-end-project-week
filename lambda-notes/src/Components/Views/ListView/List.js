import React from 'react'
import Note from './Note'
import './List.css'

const List = props => {
    return (
        <div className="list-container">
            <h2 className="your-notes">Your Notes:</h2>
            <div className="outer-note-container">
                {props.notes.map(note => (
                    <Note 
                        key={note.id} 
                        note={note}
                        className="note-card"
                    />
                ))}
            </div>
        </div>
    )
}

export default List