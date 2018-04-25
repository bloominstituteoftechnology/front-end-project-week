import React from 'react'
import Note from './Note'
import { Link } from "react-router-dom";
const noteList = props => {
    return (
        <div className='col-9 right__side'>
            <div className="row">
                <h4>Your Notes:</h4>
            </div>
            <div className="row">
                {props.notes.map((note) => {
                    return (
                        <div className="col-4" key={note.id}>
                            <Link to={`/notedetail/${note.id}`}>
                            <Note note={note} key={note.id} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default noteList;