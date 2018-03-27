import React, { Component } from "react";
import { Link } from 'react-router-dom';


class NewNote extends Component {
  state = {
    title: '',
    body: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = _ => {
    const { title, body } = this.state;
    this.props.createNewNote({ title, body });
    this.setState({ title: '', body: '', });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className="Each">
        <h2 className="Each__Title">Create New Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={title}
            name="title" placeholder="Note Title"
            onChange={this.handleInput}
            className="Each__Input-Title"
            required
          />
          <br />
          <textarea
            className="Each__Input-Body"
            value={body}
            name="body"
            type="text"
            placeholder="Note Content"
            onChange={this.handleInput}
            required
          />
          <br />
          <Link to={"/"}><button onClick={() => this.handleSubmit()} type="submit">Save</button></Link>
        </form>
      </div>
    );
  };
}

export default NewNote;
