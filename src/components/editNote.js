import React, { Component } from "react";
import axios from "axios";

class EditNote extends Component {
  state = {
    title: "",
    textBody: "",
    id: ""
  };

  componentDidMount() {
    const noteID = this.props.match.params.id;
    this.getNote(noteID);
  }

  getNote = (noteID) => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
      .then(response => {
        this.setState({
          title: response.data.title,
          textBody: response.data.textBody,
          id: response.data._id
        });
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateNote = () => {
    const updatedNote = {
      title: this.state.title,
      textBody: this.state.textBody,
      _id: this.state.id
    };
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${this.state.id}`, updatedNote)
      .then(response => {
        console.log(response.data, updatedNote);
      })
      .catch(err => {
        console.log(err);
      });
      this.props.history.push("/")
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log('title is now: ' + this.state.title);
    console.log('TextBody is now: ' + this.state.textBody);
  };

  render() {
    return (
      <div>
        <h1>Edit Note:</h1>
        <input type="text" placeholder={this.state.title} onChange={this.handleInput} name='title'/>
        <input type="text" placeholder={this.state.textBody} onChange={this.handleInput} name='textBody'/>

        <button onClick={this.updateNote}>update</button>
      </div>
    );
  }
}

export default EditNote;
