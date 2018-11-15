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
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Note Title"
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
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
