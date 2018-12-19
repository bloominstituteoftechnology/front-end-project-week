import React, { Component } from 'react';
import axios from 'axios';
import Notes from "./Notes"
import { Link } from 'react-router-dom';
import "./Notes.css";

class NoteContainer extends Component {
  componentDidMount() {
    axios.get(`http://localhost:8000/api/notes`)
      .then(res => {
        const axiosNotes = res.data.Message;
        this.setState( {notes: axiosNotes} );
      })
  }
  render(){
    return(
      <main>
        <h2>
          Your Notes:
        </h2>
        <div className="notes-container">
          {this.props.notes.map((note,index) => {
            return(
              <Link to={`/notes/${index}`} style={{ textDecoration: 'none' }} key={index}>
                <Notes key={note.id} title={note.title} content={note.content}/>
              </Link>
            )
          })}
        </div>
      </main>
    )
  }
}

export default NoteContainer;
