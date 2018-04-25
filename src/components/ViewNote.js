import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewNote extends Component {
  state = { notes: "", index: "" };
  render() {
    return (
      <React.Fragment>
        <div className="editDelete">
          <Link to="/EditNote" className="link">
            Edit
          </Link>
        </div>
        <div className="add-note">
          <h3> {this.state.notes.title} </h3>
          <p> {this.state.notes.text} </p>
        </div>
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
