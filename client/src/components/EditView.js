import React, { Component } from "react";

import axios from "axios";

class EditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      textBody: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updatedNote = e => {
    e.preventDefault();
    const updatedNote = {
      id: this.props.match.params.id,
      title: this.state.title,
      textBody: this.state.textBody
    };

    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${updatedNote.id}`)
      .then(res => {
        this.setState({ notes: res.data, updatedNote });
        this.props.fetchNotes();
      })
      .catch(err => {
        console.log("update error", err);
      });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="edit-form">
        <h1>Edit Note:</h1>
        <form>
          <input
            name="title"
            placeholder={this.state.title}
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            name="textBody"
            placeholder={this.state.textBody}
            value={this.state.textBody}
            onChange={this.handleChange}
          />
          <button onClick={this.updateNote}>Update</button>
        </form>
      </div>
    );
  }
}

export default EditView;

// import React from "react";
// const EditView = () => {
//   return <div>Edit hhh</div>;
// };

// export default EditView;
