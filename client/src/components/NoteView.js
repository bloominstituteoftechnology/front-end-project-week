import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import EditView from "./EditView";
import { Link } from "react-router-dom";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isLoaded: false,
      title: "",
      textBody: "",
      error: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetch(id);
  }

  fetch = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log("noteview", response);
        this.setState(() => ({
          title: response.data.title,
          textBody: response.data.textBody,
          isLoaded: true
        }));
      })
      .catch(error => {
        console.dir(error);
      });
  };

  //   componentWillReceiveProps(newProps) {
  //     if (this.props.match.params.id !== newProps.match.params.id) {
  //       this.fetch(newProps.match.params.id);
  //     }
  //   }

  render() {
    if (!this.state.isLoaded) {
      if (this.state.error) {
        return (
          <div className="error">
            <h1>404</h1>
          </div>
        );
      }
      return (
        <div className="loading-screen">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="note-view">
          <div className="note-header">
            <div className="note-buttons">
              <Link to="/edit">
                <button className="edit-button">edit</button>
              </Link>
              <button className="delete-button">delete</button>
            </div>
            <div className="note-title">{this.state.title}</div>
          </div>
          <div className="note-body">
            <p>{this.state.textBody}</p>
          </div>
        </div>
      );
    }
  }
}
export default NoteView;
