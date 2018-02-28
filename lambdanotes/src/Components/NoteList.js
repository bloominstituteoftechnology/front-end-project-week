import React from 'react';
import './notes.css';
import { Link } from 'react-router-dom';
const NoteList = (props) => {
   
        return (
               <div>
                    {props.notes.map(noteObj => {
                        return (
                           <Note key={props.notes.indexOf(noteObj)} noteObj={noteObj} id={props.notes.indexOf(noteObj)} />
                        )
                    })}
                </div>
        )

    }

    const Note = ({ noteObj }) => {
        const { details, note, id } = noteObj;
        console.log(noteObj);
        return (
            <Link to={`/${noteObj.id}`}>
                <div className="noteBox" id={id}>
                    <h1>{note}</h1>
                    <p>{details}</p>
                </div>
            </Link>
        )

    }

    


export default NoteList;