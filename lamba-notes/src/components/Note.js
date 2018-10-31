import React from "react";
import Axios from "axios";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    Axios.get(
      `http://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
    )
      .then(response => this.setState({ note: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h5>Edit Delete</h5>
        <h1>{this.state.note.title}</h1>
        <h3>{this.state.note.textBody}</h3>
      </div>
    );
  }
}

export default Note;
