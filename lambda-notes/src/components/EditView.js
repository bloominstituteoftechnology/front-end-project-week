import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../actions";
import { Redirect } from "react-router-dom";

class EditView extends Component {
  state = {
    title: this.props.notes[this.props.id].title,
    text: this.props.notes[this.props.id].text,
    id: Number(this.props.id),
    fireRedirect: false
  };

  render() {
    return (
      <div className="EditView">
        <div className="header" />
        <h2>Edit Note:</h2>
        <div className="NewNote">
          <form onSubmit={this.handleSubmit}>
            <input
              autoFocus="true"
              type="text"
              name="title"
              placeholder="Note Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <textarea
              name="text"
              placeholder="Note Content"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button>Update</button>
          </form>
          {this.state.fireRedirect && <Redirect to="/" />}
          {}
        </div>
      </div>
    );
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editNote(this.state);
    this.setState({ fireRedirect: true });
    console.log('fireRedirect in Edit is', this.state.fireRedirect);
  };
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { editNote })(EditView);
