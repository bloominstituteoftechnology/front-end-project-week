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

  componentDidMount() {}

  componentWillUnmount() {
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  getNote = id => {
    axios
      .get(`http://localhost:9000/notes/${id}`)
      .then(response => {
        // console.log(response);
        this.setState(() => ({ notes: response.data }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteNote = id => {
    axios
      .delete(`http://localhost:9000/notes/${id}`, this.state.notes)
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
        <h2 className="header">{this.state.notes.title}</h2>
        <div className="note-paragraph">
          <p>{this.state.notes.message}</p>
        </div>
        <Link className="e-d" to={`/edit/${this.state.notes._id}`}>
          edit
        </Link>
        <span className="d-e" onClick={this.deleteModal}>
          delete
        </span>
        <div className="modal">
          <div className="modal-box">
            <p className="delete-text">Are you sure you want to delete this?</p>
            <div className="modal-button-wrapper">
              <button
                className="modal-btn-delete"
                onClick={() => this.deleteNote(this.state.notes.id)}
              >
                Delete
              </button>
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
