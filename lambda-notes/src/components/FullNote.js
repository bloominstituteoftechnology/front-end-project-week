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
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  getNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
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
        `https://fe-notes.herokuapp.com/note/delete/${id}`,
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
        <h2 className="header">{this.state.notes.title}</h2>
        <p className="note-paragraph">{this.state.notes.textBody}</p>
        <button onClick={this.deleteModal}>X</button>
        <Link to={`/edit/${this.state.notes._id}`}>edit</Link>
        <div className="modal">
          <button onClick={() => this.deleteNote(this.state.notes._id)}>
            delete
          </button>
          <button onClick={this.deleteModal}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default FullNote;
