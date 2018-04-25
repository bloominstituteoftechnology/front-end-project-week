import React, { Component } from 'react';
import './NotesList.css';
import { notes } from './notes.js';

export default class NotesList extends Component {
    constructor() {
        super();
        this.state={
          notes: []
        };
    }
    
      componentDidMount() {
       this.setState({ notes: notes });
      }

    render() {
    return (
            <div className="container"><h3 className="headerNotes">Your Notes:</h3>
                <div className="allNotes">
                    {this.state.notes.map(notes => 
                        <div className="noteCard" key={notes.id} >
                            <div className="noteName">{notes.note_name}</div>
                            <div className="divide"></div>
                            <div className="noteContent">{notes.note_content}</div>
                        </div>)}
                </div>
            </div>);
    }
}

