import React, {Component} from 'react'
import '../App.css'

const Note = (props) => {
    return (
        <div className='noteStyle'>
            <h3>{props.title}</h3>
            <div className='line'></div>
            <p className='textList'>{props.textBody}</p>
        </div>
    )
}

export default Note;