import React from "react";
import { Redirect } from "react-router-dom";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      addedNote: false
    };
  }

  addNote = event => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    console.log("newNote", newNote);
    this.props.addNote(newNote);

    this.setState({
      title: "",
      textBody: ""
    });
    this.setState({
      addedNote: true
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.addedNote === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h2 className="header">CREATE A NOTE:</h2>
        <form className="form" onSubmit={this.addNote}>
          <input
            onChange={this.handleInputChange}
            name="title"
            placeholder="Note Title"
            className="input1"
            value={this.state.title}
            required
          />
          <input
            onChange={this.handleInputChange}
            name="textBody"
            placeholder="Note Content"
            className="input2"
            value={this.state.textBody}
            required
          />
          <button className="submit" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
