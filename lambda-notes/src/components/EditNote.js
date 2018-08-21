import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      textBody: ""
    };
  }

  componentWillMount() {
    this.getNote();
  }

  getNote() {
    let noteId = this.props.match.params.id;

    axios
      .get(`http://localhost:3300/${noteId}`)
      .then(response => {
        this.setState({
          title: this.state.title,
          textBody: this.state.textBody
        });
        this.setState(response.data);
      })
      .catch(err => console.log(err));
  }

  handleUpdate = () => {
    const URL = "http://localhost:3000/";
    let noteId = this.props.match.params.id;
    axios
      .put(`http://localhost:3300/${noteId}`, {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(response => (window.location.href = URL))
      .catch(error => console.log(error));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Edit Note</h1>
        <form onSubmit={this.handleUpdate}>
          <label htmlFor="title">
            <h3>Title</h3>
            <input
              onChange={this.handleInputChange}
              id="title"
              type="text"
              name="title"
              value={this.state.title}
            />
          </label>
          <label htmlFor="textBody">
            <h3>Text</h3>
            <textarea
              onChange={this.handleInputChange}
              id="textBody"
              rows="20"
              cols="100"
              name="textBody"
              value={this.state.textBody}
            />
          </label>
          <button>SAVE</button>
        </form>
      </div>
    );
  }
}

export default EditNote;
