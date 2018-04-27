import React from 'react';
import './styles.css';
import Note from './NoteCard';
import { Link } from 'react-router-dom';

export const NoteList = props => {
    return (
        <div className="col-10">
            <div className="row col-3">
                <h4>Your Notes:</h4>
                <div className="right">
                    {props.Notes.map(note => {
                        return (
                            <div className="col-4" key={note.id}>
                                <Link to={`/viewnote/${note.id}`}>
                                    <Note key={note.id} title={note.title} body={note.body} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
