import React from "react";
import axios from "axios";

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
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
        <h1>EDIT</h1>

        <form>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.note.title}
            name="title"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.note.textBody}
            name="textBody"
          />
        </form>

        <button
          onClick={event => {
            this.props.editNote(event, this.state.note._id);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default NoteEdit;
