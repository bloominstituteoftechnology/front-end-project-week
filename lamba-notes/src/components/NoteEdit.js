import React from "react";
import axios from "axios";

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      editedNote: {},
      editedTitle: "",
      editedTextBody: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(response =>
        this.setState({
          note: {
            _id: response.data._id,
            title: response.data.title,
            textBody: response.data.textBody
          }
        })
      )
      .then(console.log(this.state));
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
        <h1>EDIT</h1>

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
            // value={this.state.note.textBody}
            name="textBody"
          />
        </form>

        <button
          onClick={() => {
            this.props.editNote(this.state.note._id);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default NoteEdit;
