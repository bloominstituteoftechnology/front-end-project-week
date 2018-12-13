import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class ExpandedNote extends React.Component {
  constructor() {
    super();
    this.state = {
      deleteClass: "deleteWindow",
      noteClass: "expandedNote"
    };
  }

  deleteNote = (ev, id) => {
    this.setState({
      deleteClass: "deleteWindow",
      noteClass: "expandedNote"
    });
    this.props.deleteNote(ev, id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="mainSection">
        <div className="expandedNoteContainer">
          <div className={this.state.noteClass}>
            <div className="buttonsContainer">
              <div className="buttons">
                <button>
                  <Link exact to={`${this.props.selected}/edit`}>
                    edit
                  </Link>
                </button>
                <button
                  onClick={() => {
                    this.setState({
                      deleteClass: "visibleDelete",
                      noteClass: "expandedNote deleteOpen"
                    });
                  }}
                >
                  delete
                </button>
              </div>
            </div>
            <h2>{this.props.note.title}</h2>
            <p>{this.props.note.description}</p>
          </div>
          <div className="deleteContainer">
            <div className={this.state.deleteClass}>
              <p>Are you sure you want to delete this?</p>
              <button onClick={ev => this.deleteNote(ev, this.props.note.id)}>
                Delete
              </button>
              <button
                onClick={() => {
                  this.setState({
                    deleteClass: "deleteWindow",
                    noteClass: "expandedNote"
                  });
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpandedNote;