import React, { Component } from 'react'

class Notes extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <div className="yourNotes">
        NOTES
          {this.props.notes.map(note => (
            <div className="Note">
              <h1>{note.title}</h1>
              <p>{note.textBody}</p>
            </div>
          ))}
        </div>
        );
    }
}
 

export default Notes;
