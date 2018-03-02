import React from 'react';
import './notes.css';
import { Link } from 'react-router-dom';
const NoteList = (props) => {
    
        return (
               <div className="noteBox">
                    <h1> Your Notes: </h1>
                    <div className="singleNote">
                        {props.notes.map(noteObj => {
                            console.log(props.notes.indexOf(noteObj))
                           
                            return (
                            <Note key={props.notes.indexOf(noteObj)} noteObj={noteObj} id={props.notes.indexOf(noteObj)} />
                            )
                        })}
                    </div>
                </div>
        )

    }

    const Note = ({ noteObj }) => {
        const { details, note, id } = noteObj;
        return (
            <Link to={`/${noteObj.id}`}>
                <div className="listBox" id={id}>
                    <h2>{note}</h2>
                    <hr />
                    <p>{details}</p>
                </div>
            </Link>
        )


    }

    


export default NoteList;