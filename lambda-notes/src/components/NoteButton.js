import React from 'react';
import { Link } from 'react-router-dom';

const NoteButton = (props) => {
    return (
        props.link ? (
            <Link to={props.link}>
                <button 
                    className={`btn ${props.color}`}>{props.value}
                </button>
            </Link>
        ) : (
            <button className={`btn ${props.color}`}>{props.value}</button>
        )
    )
}
 
export default NoteButton;