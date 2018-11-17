import React, {Component} from 'react'
import '../App.css'

const Note = (props) => {
    return (
        <div className='noteStyle' onClick={props.selectedHandler(props.ID)}>
            <h3>{props.title}</h3>
            <div className='line'></div>
            <p>{props.textBody}</p>

        </div>
    )
}

export default Note;