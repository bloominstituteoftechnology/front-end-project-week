import React from "react";
import axios from "axios";

class NoteForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      textBody: ""
    };
  }

  addNote = event => {
    event.preventDefault();

    axios
      .post("https://fe-notes.herokuapp.com/note/create", {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    this.props.history.push("/");

    this.setState({
      title: "",
      textBody: ""
    });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="NoteSubmit">
        <form onSubmit={this.addNote} className="noteForm">
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
            className="noteForm__input"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
            className="noteForm__input--big"
          />
          <button type="submit" className="btn">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
