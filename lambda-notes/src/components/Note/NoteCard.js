import React from 'react'; 
import './Note.css'

const NoteCard = (props) => {
    const {title, text} = props.note; 
    return (
        <div className="notecardcontainer"> 
            <h4>{title}</h4> 
            <p>{text}</p> 
        </div> 
    )
}

export default NoteCard; 