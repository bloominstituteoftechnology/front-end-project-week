import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/listnotes.css';




export default class ListNotes extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: this.props.notes,
    }
  }

  render() {
    return (
      <div className="container">
          <div className="listtop" >
        <h3>Your Notes:</h3>

        <div className="all-notes">
          {this.state.notes.map(note => {
            return (
              <Link className="note-link" key={note.id} to={`/listnotes/${note.id}`}>
                <div className="note-preview">
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                </div>
              </Link>
            )
          })}
          </div>
        </div>
      </div>
    );
  }
}
