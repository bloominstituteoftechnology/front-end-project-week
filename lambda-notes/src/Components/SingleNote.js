import React from "react";
import "../CSS/singlenote.css";
import { Link } from "react-router-dom";
import axios from "axios";

class SingleNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      notePrev: {}
    };
  }

  componentDidMount() {
    this.noteView(this.props.match.params.id);
  }

  componentDidUpdate() {
    axios
      .get(`http://localhost:5000/notes/${this.props.match.params.id}`)
      .then(response => {
        if (JSON.stringify(this.state.note) !== JSON.stringify(response.data)) {
          this.setState({ note: response.data });
        }
      });
  }

  noteView = id => {
    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
        console.log(response.data);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  render() {
    return (
      <div>
        <div className={this.props.deleting ? "delete" : "hide-delete"}>
          <div className="modal">
            <p>Are you sure you want to delete this?</p>
            <div className="btns">
              <Link className="linkdel" to="/">
                <div
                  onClick={() =>
                    this.props.noteDelete(this.props.match.params.id)
                  }
                  className="deletebtn"
                >
                  Delete
                </div>
              </Link>
              <div onClick={this.props.deleteModal} className="nobtn">
                No
              </div>
            </div>
          </div>
        </div>
        <div className="edit-del">
          <Link
            className="linkedit"
            to={`/notes/${this.props.match.params.id}`}
          >
            <p onClick={() => this.props.editNote(this.props.match.params.id)}>
              edit
            </p>
          </Link>
          <p onClick={this.props.deleteModal}>delete</p>
        </div>
        <h1 className="focustitle">{this.state.note.title}</h1>
        <div className="notetxt">{this.state.note.text}</div>
      </div>
    );
  }
}

export default SingleNote;
