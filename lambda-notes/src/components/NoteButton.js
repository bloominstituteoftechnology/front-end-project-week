import React from 'react';
import { Link } from 'react-router-dom';

const NoteButton = (props) => {
    return (
        props.link ? (
            <button 
                className={`btn ${props.color}`}>
                <Link to={props.link} className="link-btn">{props.value}</Link>
            </button>
        ) : (
            <button className={`btn ${props.color}`}>{props.value}</button>
        )
    )
}
 
export default NoteButton;