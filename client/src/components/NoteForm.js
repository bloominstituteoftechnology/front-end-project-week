import React, { Component } from "react";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  addNoteHandler = e => {
    e.preventDefault();
    if (this.state.title.length < 1 || this.state.textBody.length < 1) {
      alert("Field cannot be empty!");
    } else {
      this.props.addNote({
        title: this.state.title,
        textBody: this.state.textBody
      });
      this.setState({
        title: "",
        textBody: ""
      });
    }
    this.props.history.push("/");
    window.scrollTo(0, 0);
  };

  //Change handler for form input
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="NoteForm">
        <div className="add-header">
          {" "}
          <h1>Create New Note</h1>
        </div>
        <form onSubmit={this.addNoteHandler}>
          <div>
            <input
              onChange={this.handleInputChange}
              placeholder="Note Title"
              value={this.state.title}
              name="title"
            />
          </div>
          <div>
            <textarea
              onChange={this.handleInputChange}
              placeholder="Note Content"
              value={this.state.textBody}
              name="textBody"
            />
          </div>

          <div>
            <button className="form-submit" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteForm;
