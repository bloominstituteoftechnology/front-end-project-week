import React, { Component } from "react";

class EditNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      text: this.props.note.text
    };
  }

  handleTextInput = e => {
    this.setState({ [e.target.title]: e.target.value });
  };

  render() {
    return (
      <div className="right-div">
        <div className="create-full-div">
          <h3 className="notes-h3">Edit Note:</h3>
          <form className="create-form">
            <input
              className="title-box"
              placeholder="Note Title"
              title="title"
              value={this.state.title}
              onChange={this.handleTextInput}
            />
            <textarea
              rows="8"
              cols="80"
              className="text-box"
              placeholder="Note Content"
              title="text"
              value={this.state.text}
              onChange={this.handleTextInput}
            />
            <div
              className="save-button button"
              onClick={() =>
                this.props.editNote(
                  this.state.title,
                  this.state.text,
                  this.props.note.id
                )
              }
            >
              SAVE
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditNote;
