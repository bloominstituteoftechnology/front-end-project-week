import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";
import { Redirect } from "react-router-dom";

class CreateView extends Component {
  state = {
    title: "",
    text: "",
    fireRedirect: false
  };

  render() {
    return (
      <div className="CreateView">
        <div className="header" />
        <h2>Create New View:</h2>
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
              rows="30"
              cols="85"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button>Save</button>
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
    this.props.addNote(this.state);
    this.setState({ title: "", text: "", fireRedirect: true });
    console.log('fireRedirect in Create is', this.state.fireRedirect);
  };
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { addNote })(CreateView);
