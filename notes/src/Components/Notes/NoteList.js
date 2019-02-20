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
        let pageNotes = [];
        let x = Number(this.state.notesPerPage * this.state.pageNumber);
        if (x > this.props.notes.length) {
            x = this.props.notes.length;
        }
        if (this.props.notes.length > this.state.notesPerPage) {
            for(let i = (this.state.pageNumber-1) * 10; i < x;  i++) {
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
            {this.props.notes.length > this.state.notesPerPage 
                ? <><button onClick={this.prevPage}>&larr;</button> <button onClick={this.nextPage}>&rarr;</button></> 
                : <></> 
            }
            </>
        )
    }
}

export default NoteList;