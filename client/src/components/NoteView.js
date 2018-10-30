import React, { Component } from "react";
import axios from "axios";

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
          <h1>{this.state.title}</h1>
          <p>{this.state.textBody}</p>
        </div>
      );
    }
  }
}
export default NoteView;
