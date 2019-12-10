import React, {Component} from 'react'
import '../App.css'

const Note = (props) => {
    return (
        <div className='noteStyleC'>
        <div className='noteStyle'>
            <h6>{props.title}</h6>
            <div className='line'></div>
            <p className='textList'>{props.textBody}</p>
        </div>
        </div>
    )
}

export default Note;