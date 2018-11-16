import React, { Component } from 'react';

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      _id: null,
      title: '',
      textBody: '',
    };
  }

  componentDidMount() {
    const note = this.props.notes.find(
      note => `${note._id}` === this.props.match.params.id
    );
    this.setState(note);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      tags: this.state.tags,
      _id: this.state._id,
      title: this.state.title,
      textBody: this.state.textBody,
    });
    this.props.history.push('/');
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
        <button type="submit">Update</button>
      </form>
    );
  }
}
