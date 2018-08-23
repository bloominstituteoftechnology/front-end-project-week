import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      notes: []
    };
  }
  idHolder = () => {
    let meow = window.location.href;
    meow = meow.split("/");
    meow = meow[meow.length - 1];
    let id = meow;
    return id;
  };
  componentDidMount() {
    this.fetchNote(this.idHolder());
  }

  fetchNote = id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  SaveDeletion = id => {
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then()
      .catch(error => {
        console.error(error);
      });
  };

  deleteNote = () => {
    this.SaveDeletion(this.idHolder());
    return alert("Note has been Deleted");
  };

  render() {
    return (
      <div className="View__note">
        <div className="View__note-links">
          <Link to={"./edit/" + this.idHolder()}>
            <button className="App__Top-buttons"> edit </button>
          </Link>
          <Link to="/viewnotes">
            <button className="App__Top-buttons" onClick={this.deleteNote}>
              {" "}
              delete{" "}
            </button>
          </Link>
        </div>
        <div>
          <h1>View Note:</h1>
          <h1>{this.state.note.title} </h1>
          <p>{this.state.note.textBody}</p>
        </div>
        <div>
          <span className="tags"> {this.state.note.tags} </span>
        </div>
      </div> // container div end
    );
  }
}

export default ViewNote;
