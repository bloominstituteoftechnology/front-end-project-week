import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DeleteNote from "../DeleteNote/DeleteNote";
import "../NoteView/NoteView.css";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    };
  }

  matchedNote = this.props.notes.filter(note => {
    return note._id === this.props.match.params.id;
  })[0];

  componentDidMount() {
    this.setState({ note: this.matchedNote });
  }

  render() {
    return (
      <div className="noteView-Container">
        <div className="noteView-Header">
          <h4>{this.state.note.title}</h4>
          <div>
            <Link
              to={`/edit/${this.props.match.params.id}`}
              className="links"
              style={{ color: "black" }}
            >
              edit
            </Link>
            <DeleteNote
              className="links"
              toDelete={this.state.note._id}
              history={this.props.history}
            />
          </div>
        </div>
        <div className="noteView-Content">
          <p>{this.state.note.content}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  };
};

export default connect(
  mapStateToProps,
  {}
)(NoteView);
