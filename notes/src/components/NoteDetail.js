import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class NoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(err => console.log(err.response));
  }

  handleDelete = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response);
        this.props.fetchNotes();
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className="note-detail">
        {/* <h3 className="note-tags">{this.state.note.tags}</h3> */}
        <div className="header-container">
          <h3 className="note-title">{this.state.note.title}</h3>
          <NavLink
            to="/"
            activeClassName="activeDelete"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button onClick={this.handleDelete(this.state.note._id)}>
              delete
            </button>
          </NavLink>
        </div>
        <p className="note-body">{this.state.note.textBody}</p>
      </div>
    );
  }
}

export default NoteDetail;