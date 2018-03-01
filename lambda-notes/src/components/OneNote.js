import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSelected, deleteNote } from "../actions";
import { Link, Redirect } from "react-router-dom";

class OneNote extends Component {
  state = {
    showModal: false,
    fireRedirect: false
  };

  // deletes the correct prop, but renders the entire function before placing the <Redirect>
  handleDelete = event => {
    event.preventDefault();
    this.props.deleteNote(this.props.notes[this.props.id].id);
    this.setState({ fireRedirect: true });
    console.log("fireRedirect in Delete is", this.state.fireRedirect);
  };

  render() {
    return (
      <div className="OneNote">
        <div className="header">
          <Link to={`/edit/${this.props.id}`}>edit</Link>
          <a href="" onClick={this.handleClickOnToggleDeleteModal}>
            delete
          </a>
        </div>
        {console.log(
          "right before error, fireRedirect is",
          this.state.fireRedirect
        )}
        {this.state.fireRedirect && <Redirect to="/" />}
        <h2>
          {!this.state.fireRedirect
            ? this.props.notes[this.props.id].title
            : null}
        </h2>
        <p>
          {!this.state.fireRedirect
            ? this.props.notes[this.props.id].text
            : null}
        </p>
        {this.state.showModal && (
          <div>
            <div className="deleteModal">
              <p>Are you sure you want to delete this?</p>
              <div className="buttons">
                <button className="deleteButton" onClick={this.handleDelete}>
                  Delete
                </button>
                <button
                  className="noButton"
                  onClick={this.handleClickOnToggleDeleteModal}
                >
                  No
                </button>
              </div>
            </div>
            <div className="background" onClick={this.handleClickOnToggleDeleteModal}/>
          </div>
        )}
      </div>
    );
  }

  componentWillMount = () => {
    this.props.updateSelected(this.props.notes[this.props.id].id);
  };

  handleClickOnToggleDeleteModal = e => {
    e.preventDefault();
    this.setState({ showModal: !this.state.showModal });
  };
}

const mapPropToStates = state => {
  return {
    notes: state
  };
};

export default connect(mapPropToStates, { updateSelected, deleteNote })(
  OneNote
);

// state.filter(note => {
//   console.log('this.props is', this.props);
//   if (note.id === this.props.id) return note;
// })
