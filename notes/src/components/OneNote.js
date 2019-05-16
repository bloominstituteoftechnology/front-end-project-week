import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "../css/deleteModal.css";
import '../css/oneNote.css';

class OneNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes
    };
  }
  componentDidMount = () => {
    this.fetchNote(this.props.match.params.id);
  };
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchNote(newProps.match.params.id);
    }
  }
  fetchNote = id => {
    axios
      .get(`https://fast-brushlands-0000.herokuapp.com/api/notes/${id}`)
      .then(response => {
        this.setState({ notes: response.data[0] });
        console.log(response.data);
      });
    };
  deleteSingleNote = event => {
    this.props.deleteNote(this.state.notes.id);
    event.preventDefault();
    this.props.deleteToggle();
  };

  render() {
    console.log(this.props.notes)
    return (
      <div className="activeNote">
        <div className="buttons">
        <NavLink to={`/notes/${this.state.notes.id}/edit`}>
          <button>edit</button>
        </NavLink>
        <button onClick={this.props.deleteToggle}>delete</button>
        </div>
        <div className="noteContent">
          <h3>{this.state.notes.title}</h3>
          <p>{this.state.notes.content}</p>
        </div>
        {this.props.deleted && (
          <div className="deleteModal">
            <div className="modalBox">
              <p>Are you sure you want to delete this?</p>
              <div className="modalButtons">
                <button onClick={this.deleteSingleNote}>Delete</button>
                <button onClick={this.props.deleteToggle}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default OneNote;
