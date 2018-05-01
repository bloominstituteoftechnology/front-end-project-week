import React from 'react';
import './NotesDisplay.css';

import { Link } from 'react-router-dom';

export const NotesDisplay = (props) => {
    return (
        <div className="Note">
            <div className= 'Note-feature'> 
                <h1> Lambda Notes </h1>
                <button className ='Note-buttons'>
                    <Link to= '/'> View Your Notes </Link>
                </button>
                <button className ='Note-buttons'>
                    <Link to= '/newNote'> +Create New Note </Link>
                </button>
            </div>
            <div className='Note-content'>
                <h1> Your Notes: </h1> 
                <div className= 'Note-notesDisplay'>
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                    {props.note.map(note => {
                        return [<div className = 'Note-notes'> 
                        <Link to = '/noteView' >
                        <h3>Note Title</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                        })}
                </div>
            </div>
        </div>
    );
}


