import React, { Component } from 'react';
import './notes.css';

import Note from './note.js';
import './notes.css';

class Notes extends Component {
    render() {
	return (
            <div className="myNotes">
              <h1>Your Notes:</h1>
              <section className="notesSection">
		{this.props.notes.map(note => {
		    return (
			<Note
			  title={note.title}
			  id={note.id}
			  text={note.text}
			  />
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
