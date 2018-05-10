import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './Notes.css';


class Notes extends Component {
    render() {
        return (
            <div className="YourNotes" >
                {this.props.notes.map((note) => {
                    return (
                        <div>
                            <div>Your Notes</div>
                            <div>{note.title}</div>
                            <div>{note.body}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    expandNote = () => {
        // I want to make this method expand the note to fill the notescreen 
        // when the user clicks on that note
        // but how in the hell do I do that?
        // this stuff is hard...
    }
}

export default Notes;