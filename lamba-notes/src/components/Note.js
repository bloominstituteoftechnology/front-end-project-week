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
      <div className="singleNote">
        <Link
          to={`/note/${note._id}/edit`}
          onClick={() => props.editNote(note.title, note.textBody)}
        >
          edit
        </Link>{" "}
        <span onClick={props.deleteToggleOn}>delete</span>
        {/* <button
          onClick={event => {
            this.props.deleteNote(this.state.note._id);
            console.log(this.state.note);
          }}
        >
          Delete
        </button> */}
        {/* <button
          onClick={() => {
            this.props.editNote(this.state.note._id);
          }}
        >
          Edit
        </button> */}
        <h1>{this.state.note.title}</h1>
        <p>{this.state.note.textBody}</p>
      </div>
    );
  }
}

export default Note;
