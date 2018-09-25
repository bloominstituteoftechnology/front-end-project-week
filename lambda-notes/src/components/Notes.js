import React, { Component } from 'react';
import Note from './Note.js';
import { Link } from 'react-router-dom';

class Notes extends Component {

    componentDidMount = () => {
        this.props.fetchNotes();
    }

    render() {
        if (this.props.fetchingNotes){
            return (<div></div>)
        }
        return (
            <div>
                {this.props.notes.map(note => {
                    return (
                        <div className="note" key={note._id}>
                            <Link to={`/notes/${note._id}`}>
                                <Note title={note.title} content={note.textBody} />
                            </Link>
                        </div>
                    )
                })}
                <Link to="/notes/add">Add</Link>
            </div>
        )
    }
}

export default Notes;