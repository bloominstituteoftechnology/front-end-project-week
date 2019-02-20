import React from 'react';
import {Link} from 'react-router-dom'; 

import NoteCard from './NoteCard';
import './notes.css';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1,
            totalPages: 1,
            notesPerPage: 10,
        }
    }

    componentDidMount() {
        this.setState({
            totalPages: Math.ceil((this.props.notes.length-1) / 10),
        })
    }

    /* Goto the previous page of notes. */
    prevPage = () => {
        if (this.state.pageNumber === 1) {
            return 0;
        }
        else {
            this.setState({
                pageNumber: this.state.pageNumber - 1,
            })
        }
    }

    /* Goto the next page of notes. */
    nextPage = () => {
        if (this.state.pageNumber === this.state.totalPages) {
            return 0;
        }
        else {
            this.setState({
                pageNumber: this.state.pageNumber + 1,
            })
        }
    }

    render() {
        /* Pagination logic */
        let pageNotes = [];

        // This returns NaN without coercing it into a Number
        let x = Number(this.state.notesPerPage * this.state.pageNumber);
        if (x > this.props.notes.length) {
            // If we've reached the end of the notes then don't get an index out of bounds exception.
            x = this.props.notes.length;
        }
        if (this.props.notes.length > this.state.notesPerPage) {
            for(let i = (this.state.pageNumber-1) * 10; i < x;  i++) {
                pageNotes.push(this.props.notes[i]);
            }
        } 
        /* End Pagination logic */

        return (
            <>
            <h2>Your Notes: Page {this.state.pageNumber}</h2>
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
            {this.props.notes.length > this.state.notesPerPage 
                ? <><button onClick={this.prevPage}>&larr;</button> <button onClick={this.nextPage}>&rarr;</button></> 
                : <></> 
            }
            </>
        )
    }
}

export default NoteList;