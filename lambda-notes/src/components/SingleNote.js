import React, { Component } from "react";
import axios from "axios";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      deleteMenuToggle: false
    };
  }

  componentDidMount() {
    const id = localStorage.getItem("noteID");
    console.log(id);
    axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`).then(res =>
      this.setState({
        note: res.data
      })
    );
  }

  handleDeleteNote = () => {
    axios
      .delete(
        `https://fe-notes.herokuapp.com/note/delete/${localStorage.getItem(
          "noteID"
        )}`
      )
      .then(this.props.handleDeleteNote, this.props.history.push("/"));
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="delete-modal"
          style={
            this.state.deleteMenuToggle
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <div className="delete-modal-wrapper">
            <div>
              <h5>Are you sure you want to delete this?</h5>
            </div>
            <div>
              <button onClick={this.handleDeleteNote}>Delete</button>
              <button
                onClick={() => this.setState({ deleteMenuToggle: false })}
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div className="edit-and-delete">
          <span>Edit</span>
          <span
            onClick={() =>
              this.setState({ deleteMenuToggle: !this.state.deleteMenuToggle })
            }
          >
            Delete
          </span>
        </div>
        <div className="single-note">
          <h1>{this.state.note.title}</h1>
          <p>{this.state.note.textBody}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleNote;
