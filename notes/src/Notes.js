import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './Notes.css';


class Notes extends Component {
    render() {
        return (
            
            <div className="YourNotes" >
            {this.props.blah}
            {this.props.notes.map((note) => {
                return (
                    <div>{note.title}</div>
                )
            })}
            </div>
        )
    }

}

export default Notes;