import React from 'react';
import {Link} from 'react-router-dom'; 

import NoteCard from './NoteCard';
import './notes.css';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1,
            notesPerPage: 10,
        }
    }
    render() {
        let pageNotes = [];
        if (this.props.notes.length > this.state.notesPerPage) {
                for(let i = (this.state.pageNumber-1) * 10; i < this.state.notesPerPage; i++) {
                    pageNotes.push(this.props.notes[i]);
                }
        } 
        return (
            <>
            <h2>Your Notes:</h2>
            <label>Search: </label>
            <input className='search-bar' name='search' type='text'></input>
            <div className='note-list'>
                {pageNotes.map(note => {                 
                    return (
                        <Link to={`/note/${note.id}`} className='card-link' key={note.id + note.title}> 
                            <NoteCard key={note.id} note={note} />
                        </Link>
                    )
                })}
            </div>
            {this.props.notes.length > this.state.notesPerPage ? <><button>&larr;</button> <button>&rarr;</button></> : <></> }
            </>
        )
    }
}

export default NoteList;