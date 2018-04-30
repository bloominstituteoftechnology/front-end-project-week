import React, { Component } from 'react';
import './ListNotes.css';
import { Link } from 'react-router-dom';

class ListNotes extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

 render() {
    return (
      <div className="mainDiv">
        <h6 className="notesListHeader">Your Notes:</h6>
        <div className="notesGrid">
          {this.state.notes.map(note => {
            return (
              <div className="noteThumbnail" key={note.id}>
                <Link
                  to={{
                    pathname: `/notes/${note.id}}`,
                    state: { currentNote: note }
                  }}
                >
                  <div>
                    <div className="noteTitle">{note.title}</div>
                    <hr />
                    <div className="noteContent">{note.text}</div>
                  </div>
               </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListNotes;