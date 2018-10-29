import React, { Component } from 'react';

export default class EditNote extends Component {
  state = {
    note: null,
    title: '',
    textBody: '',
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchNote(id);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.props.note.title}
          />
          <textarea
            name="textBody"
            onChange={this.handleChange}
            value={this.props.note.textBody}
          />
          <button onClick={this.saveNote}>Save</button>
        </form>
      </div>
    );
  }
}
