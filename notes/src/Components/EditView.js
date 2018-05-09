import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class AddFriend extends Component {
 
state = {
    title: "",
    content: "",

};

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error("error", error);
      });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/notes", this.state)
      .then(response => console.log(response))
      .then(() => (window.location.href = "/"))
      .catch(error => console.log(error));
  };

  render() {
    return <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="title"placeholder="Title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div>
            <textarea name="content" placeholder="Content" onChange={this.handleChange} value={this.state.content} />
          </div>
          <Link to="/">
            <button type="submit">Update</button>
          </Link>
          </form>
         </div>;
  }
}
