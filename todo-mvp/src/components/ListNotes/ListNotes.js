import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./ListNotes.css";

class ListNotes extends Component {
  render(props) {
    return (
        <div className="ListNotes">
         <h3 className="list_h3">Your Notes:</h3>
          <div className="notes">
          {this.props.notes.map(note => (
            <div className="card-body" key={note.id}>
              <h4 className="card-title">
                <Link className="card-link" to={`/view/${note.id}`}>
                  {note.id} - {note.title}
                </Link>
              </h4>
                <span className="card-text">{note.content}</span>
              </div>
          ))}
          </div>
        </div>
    );
  }
}

export default ListNotes;
