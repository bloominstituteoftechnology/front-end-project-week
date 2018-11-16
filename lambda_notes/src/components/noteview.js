import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      toList: false
    };

    // this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  handleDelete = e => {
    e.preventDefault();
    this.setState({ toList: true });
    this.props.deleteNote(this.props.match.params.id);
  };

  render() {
    // console.log(this.props.notes);
    console.log(this.props.match.params.id);

    return (
      <div className="pageWrapper">
        <div className="actionButtons">
          <NavLink to={`/edit/${this.props.match.params.id}`}>edit</NavLink>
        </div>
        {this.props.notes.map(note => {
          if (this.props.match.params.id === note._id) {
            console.log(note.title);
            return (
              <div key={note._id}>
                <p className="viewNoteTitle">{note.title}</p>
                <p className="viewNoteBody">{note.textBody}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default NoteView;
