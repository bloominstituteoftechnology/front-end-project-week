import React from "react";
import axios from "axios";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
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
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.addNote}>
          <h2 className="create">CREATE A NOTE:</h2>
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
          <button type="submit">Save Note</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
