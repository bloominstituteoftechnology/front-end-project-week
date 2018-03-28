import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./ListNotes.css";

class ListNotes extends Component {
  render(props) {
    return (
        <div className="ListNotes">
          {this.props.notes.map(note => (
            <div className="card-body" key={note.id}>
              <div className="card-title">
                <Link className = "card-link" to={`/view/${note.id}`}>
                  {note.id} - {note.title}
                </Link>
              </div>
                <div className="card-text">{note.content}</div>
              </div>
          ))}
        </div>
    );
  }
}

export default ListNotes;
