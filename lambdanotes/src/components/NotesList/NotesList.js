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
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(res => 
        this.setState({
          notes: res.data
        })
      )
  }

  render() {
    return (
      <div>
        {this.state.notes.map(note =>
          <div className="notesList-container w-25 float-left mr-3">
          <Link to={`/note/${note._id}`} params={{ id: note._id }}>
            <div className="card border-secondary mb-3 note" key={note._id}>
              <div className="card-body ">
                <h5 className="card-title">{note.title}</h5>
                <hr />
                <p className="card-text secondary">{note.textBody}</p>
              </div>
            </div>
          </Link>
          </div>
        )}
      </div>
    )
  }
}
