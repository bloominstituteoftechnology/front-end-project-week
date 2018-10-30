import React, { Component } from "react";
import axios from "axios";

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params._id}`
      )
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  buttonClickHandler = e => {
    e.preventDefault();
    console.log("click");
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          this.props.match.params._id
        }`,
        {
          textBody: "edited"
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.buttonClickHandler}>Edit</button>
          <button>Delete</button>
        </div>
        <h1>{this.state.notes.title}</h1>
        <p>{this.state.notes.textBody}</p>
      </div>
    );
  }
}

export default NoteDetails;
