import React from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class FullNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      deleted: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getNote(id);
  }

  getNote = id => {
    axios
      .get(`https://davids-notes.herokuapp.com/notes/get/${id}`)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteNote = id => {
    axios
      .delete(
        `https://davids-notes.herokuapp.com/notes/${id}`,
        this.state.notes
      )
      .then(response => {
        this.setState({ deleted: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteModal = () => {
    let x = document.querySelector(".modal");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  render() {
    if (this.state.deleted === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {this.state.notes.map(note => (
          <div>
            <h2 className="header">{note.title}</h2>
            <div className="note-paragraph">
              <p>{note.message}</p>
            </div>
            <Link className="e-d" to={`/edit/${note.id}`}>
              edit
            </Link>
            <span className="d-e" onClick={this.deleteModal}>
              delete
            </span>
          </div>
        ))}
        <div className="modal">
          <div className="modal-box">
            <p className="delete-text">Are you sure you want to delete this?</p>
            <div className="modal-button-wrapper">
              {this.state.notes.map(note => (
                <button
                  className="modal-btn-delete"
                  onClick={() => this.deleteNote(note.id)}
                >
                  Delete
                </button>
              ))}
              <button className="modal-btn-cancel" onClick={this.deleteModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullNote;
