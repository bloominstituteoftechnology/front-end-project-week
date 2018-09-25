import React, { Component } from 'react';

import Note from './note.js';

class Notes extends Component {
    render() {
	return (
            <div>
              <h1>Your Notes:</h1>
              <section>
		{this.props.notes.map(note => {
		    return (
			<Note
			  title={note.title}
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
