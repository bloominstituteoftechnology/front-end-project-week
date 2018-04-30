import React, { Component } from 'react';

class EditNote extends Component {
  state = {
    id: +this.props.match.params.id,
    title: this.props.match.params.title,
    body: this.props.match.params.body,
  };
  getNoteIndex = () => {
    for (let i = 0; i < this.props.notes.length; i++) {
      if (+this.props.match.params.id === this.props.notes[i].id) {
        return i;
      }
    }
  };
  noteSubmitHandler = event => {
    event.preventDefault();
    this.setState({ title: this.state.title, body: this.state.body });
    this.props.notes.splice(this.getNoteIndex(), 1, this.state);
    this.props.history.push('/');
  };
  noteChangeHandler = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="new-note-container">
        <h2 className="note-list-title">Edit Note:</h2>
        <form
          onSubmit={this.noteChangeHandler}
          className="new-note-title-input"
          name="id"
        >
          <input
            className="title-input"
            placeholder={this.props.notes[this.getNoteIndex()].title}
            name="title"
            value={this.state.title}
            onChange={this.noteChangeHandler}
          />
          <br />
          <input className="new-note__content-input">
            <br />
            <textarea
              className="content-input"
              placeholder={this.props.notes[this.getNoteIndex()].body}
              name="body"
              value={this.state.body}
              onChange={this.noteChangeHandler}
            />
          </input>
          <div className="save-btn-container">
            <button className="save-btn" onClick={this.noteSubmitHandler}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditNote;
