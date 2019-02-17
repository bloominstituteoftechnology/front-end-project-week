import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./note.css";
import URL from "../../utils/URL";

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {}
    };
  }
  componentDidMount() {
    axios
      .get(`${URL}api/notes/${this.props.match.params.id}`)
      .then(res => this.setState({ note: res.data }));
  }

  delete = () => {
    const id = this.state.note.id;
    return this.props.delete(id);
  };

  render() {
    return (
      <article className="note-container" name={this.state.note.id}>
        <span className="edit-delete">
          <Link to={`/notes/${this.state.note.id}/edit`}>Edit</Link>
          <p onClick={this.delete}>Delete</p>
        </span>
        <header>
          {!Object.keys(this.state.note).length ? (
            <h2 className="loading">Loading Note...</h2>
          ) : (
            this.state.note.title
          )}
        </header>
        <hr className="hr" />
        <p>{this.state.note.textBody}</p>
      </article>
    );
  }
}
export default Note;
