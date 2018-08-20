import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Note from './Note';

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
                        <Note id={note._id} title={note.title} content={note.textBody} tags={note.tags} /> 
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Notes;