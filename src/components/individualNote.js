import React, { Component } from "react";
import axios from "axios";

class IndividualNote extends Component {
  state = {
    title: "",
    textBody: ""
  };

  componentDidMount() {
    const noteID = this.props.match.params.id;
    this.getNote(noteID);
  }

  getNote = noteID => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
      .then(response => {
        this.setState(
          {
            title: response.data.title,
            textBody: response.data.textBody
          })
          ;
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("The note is: " + noteID);
  };

  delete = noteID => {
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${noteID}`)
      .then(response => {
        console.log(response);
        this.setState(
          {
            title: response.data.title,
            textBody: response.data.textBody
          },
          () => this.props.history.push("/")
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <button>edit</button>
        <button onClick={this.delete}>delete</button>
        <h1>{this.state.title}</h1>
        <h2>{this.state.textBody}</h2>
      </div>
    );
  }
}

export default IndividualNote;
