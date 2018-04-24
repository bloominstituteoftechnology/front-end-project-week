import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewNote extends Component {
  state = {
    notes: "",
    index: ""
  };

  render() {
    return (
      <React.Fragment>
        <div className="editDelete">
          <Link to="/EditNote" className="link">
            {" "}
            Edit{" "}
          </Link>
          <Link to="/NotesList">
            <button onClick={this.handleDelete} className="link">
              {" "}
              Delete{" "}
            </button>{" "}
          </Link>
        </div>
        {this.state.index ? (
          <div className="add-note">
            <h3> {this.state.notes[this.state.index].title} </h3>
            <p> {this.state.notes[this.state.index].text} </p>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }

  componentDidMount() {
    const newNotes = this.props.notes;
    const newIndex = this.props.match.params.id;
    this.setState({
      notes: newNotes,
      index: newIndex
    });
  }
}

export default ViewNote;
