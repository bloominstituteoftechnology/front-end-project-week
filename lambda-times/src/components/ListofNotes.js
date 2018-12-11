import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';


export default class ListOfNotes extends React.Component {

    singleNote = id => {
        console.log('hi')
        id = this.state.match.params.id;
        console.log(id)
        this.props.fetchNote(id);
      }



    render() {
        return (
            <div className="notes-container">
            {this.props.state.notes.map(note => (
                <NoteDetails 
                    note={note}
                    key={note._id} />
            ))}
            </div>
        )
    }
}

function NoteDetails({ note }) {
    const { title, _id, textBody, tags } = note;
    return (
        <Link to={`/note/${_id}`} className="note-card">
            <NoteCard
                title={title}
                textBody={textBody}
                tags={tags} 
                onClick={() => this.props.singleNote()}
                />
        </Link>
    )
}