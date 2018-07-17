import React, { Component } from "react";
import NoteCard from "./NoteCard.js";
import { Link } from "react-router-dom";

const NoteList = props => {
    return (
        <div>
	        <div>
	        <h1>Your Notes:</h1>
	        </div>
        <div>
            {props.notes.map(note => {
                return (

                    <Link to={`/NoteCard/${note.id}`} key={note.id}>
                    		<NoteCard note={note} />
                    </Link>
                );
            })}
            </div>
        </div>
    );
}

export default NoteList;
