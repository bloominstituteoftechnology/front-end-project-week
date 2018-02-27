import React from 'react';
import { Link } from 'react-router-dom';

export default class CreateNote extends React.Component {
  state = {
    title: '',
    body: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = _ => {
    const { title, body } = this.state;
    this.props.createNote({ title, body });
    this.setState({ title: '', body: '', });
  };

  render() {
    return (
      <div>
        <h2>Create New Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            name="title"
            type="text"
            placeholder="Note Title"
            onChange={this.handleInputChange}
            required
          />
          <input
            value={this.state.body}
            name="body"
            type="text"
            placeholder="Note Content"
            onChange={this.handleInputChange}
            required
          />
          <Link to={"/"} onClick={() => this.handleSubmit()} type="submit">Save</Link>
        </form>
      </div>
    );
  };
}
