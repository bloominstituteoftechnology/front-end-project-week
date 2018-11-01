import React, { Component } from 'react';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom';
import '../../App.css';

class All extends Component {
    render() {
        return (
            <div className = 'noteslist'>
                <h1> Your Notes: </h1>
                <div className = 'cardList'>
                {this.props.notes.slice(0).reverse().map(note => {
                    return (
                        <Link to={`/note/${note._id}`} key={note._id}>
                            <NoteCard
                                title = {note.title}
                                textBody = {note.textBody}
                                notes = {note}
                                key = {note._id}
                                />
                         </Link>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default All;