import React, { Component } from "react";

class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: ""
    };
  }

  handleTextInput = e => {
    this.setState({ [e.target.title]: e.target.value });
  };

  render() {
    return (
      <div className="right-div">
        <div className="create-full-div">
          <h3 className="notes-h3">Create New Note:</h3>
          <form className="create-form">
            <input
              className="title-box"
              placeholder="Note Title"
              title="title"
              onChange={this.handleTextInput}
            />
            <textarea
              rows="8"
              cols="80"
              className="text-box"
              placeholder="Note Content"
              title="text"
              onChange={this.handleTextInput}
            />
            <div
              className="save-button button"
              onClick={() =>
                this.props.addNote(this.state.title, this.state.text)
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

export default CreateNote;
