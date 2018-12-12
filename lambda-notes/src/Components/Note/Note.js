import React from "react";
import { connect } from "react-redux";

import DeleteNote from "../DeleteNote/DeleteNote";

import "./Note.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  toggleDelete = event => {
    event.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    const note = this.props.notes.find(
      note => `${note._id}` === this.props.match.params.id
    );

    if (!note) {
      return (
        <h2 className="error-message">
          Sorry, the note is currently unavailable!
        </h2>
      );
    }
    return (
      <div className="note-container">
        <div className="button-menu">
          <i className="fas fa-trash-alt" onClick={this.toggleDelete} />
          <i
            onClick={() => this.props.history.push(`/edit-note/${note._id}`)}
            className="fas fa-edit"
          />
        </div>
        <h2 className="title">{note.title}</h2>
        <p>{note.textBody}</p>
        <DeleteNote
          {...this.props}
          isVisible={this.state.isVisible}
          note={note}
          toggleDelete={this.toggleDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  null
)(Note);
