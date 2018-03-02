import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteNote } from "../actions";
import DeleteModal from "./deleteModal";

class SingleNote extends Component {
  state = {
    title: "",
    text: "",
    id: "",
    deleting: false,
  };

  render() {
    console.log("props", this.props);
    const id = this.props.match.params.id - 1;
    return (
      <div>
        <h3 className="heading">{this.props.notes[id].title}</h3>
        <p className="notetext">{this.props.notes[id].text}</p>
        <div>edit</div>
        <NavLink
          to={`/delete/${id}`}
          render={
            this.state.deleting ? (
              <DeleteModal
                deleteNote={this.deleteNote}
                cancelDelete={this.cancelDelete}
              />
            ) : null
          }
        >
          delete
        </NavLink>
      </div>
    );
  }

  deleteNote = () => {
    deleteNote(this.props.notes[this.props.match.params.id]);
    this.props.history.push("/");
    this.setState({ deleting: false });
  };

  cancelDelete = () => {
    this.props.history.push("/");
    this.setState({ deleting: false });
  };
}

const mapStateToProps = state => {
  return {
    current: state.current,
    notes: state.notes,
    deleting: state.deleting,
  };
};
export default connect(mapStateToProps)(SingleNote);
