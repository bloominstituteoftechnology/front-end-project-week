import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Delete from '../Delete/Delete';
import './Notes.css';

export const Notes = props => {
    return(
        <div className="Note">
            <div className='Note-feature'> 
                <h1> Lambda Notes </h1>
                <button className ='Note-buttons'>
                    <Link to= '/'> View Your Notes </Link>
                </button>
                <button className ='Note-buttons'>
                    <Link to= '/newNote'> +Create New Note </Link>
                </button>
            </div>
            <div className='Note-holder'>
                <div className='Note-links'>
                    <Link to= '/edit'> edit </Link>
                    <Delete />
                </div>
                <div className='Note-body'>
                    <h1> Note Name </h1>
                    <div className='Note-text'>
                        {props.note.map(note => {
                            return [<p> {note} </p>]
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notes;