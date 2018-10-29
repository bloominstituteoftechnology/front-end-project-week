import React from 'react'
import Note from './Note'
import './List.css'

const List = props => {
    return (
        <div>
            LIST PAGE
            <h2>Your Notes:</h2>
            <div className="container">
                {props.notes.map(note => <Note key={note._id} note={note}/>)}
            </div>
        </div>
    )
}

export default List