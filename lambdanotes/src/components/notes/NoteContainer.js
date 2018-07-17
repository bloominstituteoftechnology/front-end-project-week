import React, { Component } from 'react';
import Notes from "./Notes"

class NoteContainer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <main>
        <h2>
          Your Notes:
        </h2>
        <div className="notes-container">
          {this.props.notes.map(note => {
            return(
              <Notes key={note.id} title={note.title} body={note.body}/>
            )
          })}
        </div>
      </main>
    )
  }
}

export default NoteContainer;
