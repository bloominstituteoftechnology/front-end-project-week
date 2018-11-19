import React, { Component } from 'react';

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ title: '', textBody: '' });
    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create New Note:</h2>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Note Title"
          onChange={this.handleChange}
          required
        />
        <textarea
          name="textBody"
          value={this.state.textBody}
          placeholder="Note Content"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}
