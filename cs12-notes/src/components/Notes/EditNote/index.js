import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      title: [],
      textBody: []
    };
  }
  idHolder = () => {
    let meow = window.location.href;
    meow = meow.split("/");
    let id = meow[meow.length - 1];
    return id;
  };
  componentDidMount() {
    this.fetchNote(this.idHolder());
  }

  fetchNote = id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({
          title: response.data.title,
          textBody: response.data.textBody
        }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleAddNote = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateGo = id => {
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(response => {
        this.setState(() => ({
          title: response.data.title,
          textBody: response.data.textbody
        }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleUpdateNote = () => {
    this.updateGo(this.idHolder());
    Location.reload;
  };

  render() {
    return (
      <div className="View__note">
        <div>
          <h1>Edit Note:</h1>
          <input
            type="text"
            className="Create__note-title"
            name="title"
            value={this.state.title}
            onChange={this.handleAddNote}
          />
          <br /> <br />
          <textarea
            type="text"
            className="Create__note-body"
            name="textBody"
            value={this.state.textBody}
            onChange={this.handleAddNote}
          />
          <Link to={"/viewnotes"}>
            <button
              className="Create__note-button"
              onClick={this.handleUpdateNote}
            >
              Update
            </button>
          </Link>
        </div>
      </div> // container div end
    );
  }
}

export default EditNote;
