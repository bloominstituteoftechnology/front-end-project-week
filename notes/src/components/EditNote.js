import React, { Component } from 'react';

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      textBody: '',
    };
  }

  componentDidMount() {
    const note = this.props.notes.find(
      note => `${note.id}` === this.props.match.params.id
    );
    this.setState(note);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.title === '' ||
      this.props.match.params.id !== prevProps.match.params.id
    ) {
      const note = this.props.notes.find(
        note => `${note.id}` === this.props.match.params.id
      );
      this.setState(note);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      {
        title: this.state.title,
        textBody: this.state.textBody,
      },
      this.state.id
    );
    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Edit Note:</h2>
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
        <button type="submit">Update</button>
      </form>
    );
  }
}
