import React from 'react';
import './notes.css';
import { Link } from 'react-router-dom';
const NoteList = (props) => {
   
        return (
               <div>
                    {props.notes.map(noteObj => {
                        return (
                           <ViewNote key={noteObj.id} noteObj={noteObj} />
                        )
                    })}
                </div>
        )

    }

    const ViewNote = ({ noteObj }) => {
        const {details, note} = noteObj;
        return (
            <Link to={`/${noteObj.id}`}>
                <div className="noteBox">
                    <h1>{note}</h1>
                    <p>{details}</p>
                </div>
            </Link>
        )

    }

    


export default NoteList;