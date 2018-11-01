import React from "react";
import axios from "axios";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      updatedNote: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(response => this.setState({ note: response.data }))
      .catch(error => console.log(error));
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <button
          onClick={event => {
            this.props.deleteNote(this.state.note._id);
            console.log(this.state.note);
          }}
        >
          Delete
        </button>

        <button
          onClick={event => {
            this.props.editNote(event, this.state.note._id);
          }}
        >
          Edit
        </button>

        <h1>{this.state.note.title}</h1>
        <p>{this.state.note.textBody}</p>

        {/* <h1>EDIT</h1>

        <form onSubmit={this.editNote}>
          <input
            onChange={this.handleInputChange}
            placeholder="Title"
            // value={this.state.note.title}
            name="title"
          />
          <input
            type="text"
            placeholder="text"
            onChange={this.handleInputChange}
            value={this.state.note.textBody}
            name="textBody"
          />
        </form>

        <button
          onClick={() => {
            this.props.editNote(this.state.note._id);
          }}
        >
          Submit
        </button> */}
      </div>
    );
  }
}

export default Note;
