import React, { Component } from "react";
import NoteCard from "./NoteCard.js";
import { Link } from "react-router-dom";
import '../App.css';

const NoteList = props => {



    return (
        <div className="notelist-container">
	        <div className="notelist-title">

	        <h4>Lambda Notes:</h4>
	        </div>
        <div className="notes-notelist">
            {props.notes.map(note => {
                return (

                    <Link to={`/Note/${note.id}`} key={note.id}>
                    		<NoteCard classNote="notecard" note={note} />
                    </Link>
                );
            })}
            </div>
        </div>
    );

}

export default NoteList;
