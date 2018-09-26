import React, { Component } from 'react';
import './notes.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Note from './note.js';
import Expand from './expand.js';
import './notes.css';

class Notes extends Component {
    render() {
	return (
            <div className="myNotes">
              <h1>Your Notes:</h1>
              <section className="notesSection">
		{this.props.notes.map(note => {
		    // console.log(note);
		    return (
			<Link key={note.id} to={{pathname:`/notes/${note.id}`, state:{note}}} >
			<Note
			  key={note.id}
			  title={note.title}
			  id={note.id}
			  text={note.text}
			  />
			</Link>
		    );
		})}
              </section>
	    </div>
	);
    }
}

Note.defaultProps = {
    notes: []
};

export default Notes;
