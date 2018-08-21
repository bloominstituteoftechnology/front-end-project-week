import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from "axios";

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:8000/api/notes/`)
      .then(res => {
        //console.log(res.data)
        this.setState({
          notes: res.data.notes
        })
      })
  }

  render() {
    return (
      <div className="noteList-container">
        <h3 className="header noteList-header">Your Notes:</h3>
        {this.state.notes.map(note =>
          <div className="float-left mr-3 notes" key={note.id}>
          <Link to={`/note/${note.id}`} style={{ textDecoration: 'none' }}>
            <div className="card border-secondary mb-3 note"> 
              <div className="card-body ">
                <h5 className="card-title py-0">{note.title}</h5>
                <hr className="line" />
                <p className="card-text secondary">{note.message}</p>
              </div>
            </div>
          </Link>
          </div>
        )}
      </div>
    )
  }
}
