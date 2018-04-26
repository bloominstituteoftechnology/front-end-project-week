import React, { Component } from 'react';
import './NotesList.css';
import { notes } from './notes.js';
import { Link } from 'react-router-dom';

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
                    <Link to={`/notes/${notes.id}`} key={notes.id} className="links" > 
                        <div className="noteCard" >
                            <div className="noteName">{notes.note_name}</div>
                            <div className="divide"></div>
                            <div className="noteContent">{notes.note_content}</div>
                        </div>
                    </Link>)}
                </div>
            </div>);
    }
}

