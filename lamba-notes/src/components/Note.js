import React from "react";
import axios from "axios";

class Note extends React.Component {
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

  render() {
    return (
      <div>
        <button onClick={this.props.deleteNote}>Delete</button>
        <h1>{this.state.note.title}</h1>
        <h3>{this.state.note.textBody}</h3>
      </div>
    );
  }
}

export default Note;
