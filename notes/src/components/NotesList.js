import React from "react";
import Note from "./Note.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NotesList = props => {
    return (
        <div className="notes-list">
        <h2>Your Notes:</h2>
            {props.notes.map(note => {
                return (
                    <div key={note.id}>
                        <Link to={`/${note.id}`}>
                            <div className="note-card">
                                <h3>{note.title}</h3>
                                <p className="note-card-text">{note.body}</p>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>    
    );
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(NotesList);