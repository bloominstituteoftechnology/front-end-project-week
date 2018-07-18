import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: props.notes
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id: Number(id), notes: this.props.notes });
  }

  filterNotes = note => {
    if (note.id === this.state.id) {
      return (
        <div key={note.id}>
          <div className="edit-delete-div">
            <Link className="edit-button-link" to={`/edit/${note.id}`}>
              <p className="edit-button"> edit</p>
            </Link>
            <p onClick={this.props.toggleDeleting} className="delete-button">
              delete
            </p>
          </div>
          <p className='single-note-title'>{note.title}</p>
          <p className='single-note-content'>{note.content}</p>
        </div>
      );
    }
  };

  render() {
    return <div className="note-div">{this.props.notes.map(this.filterNotes)}</div>;
  }
}

export default Note;
