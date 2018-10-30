import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";
import "../styles/NewNotePage.css";

class NewNotePage extends Component {
  state = {
    title: "",
    textBody: ""
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();

    this.props.addNote({
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <div className="NewNotePage">
        {this.props.addingNote ? (
          <h4 className="adding-message">Adding note...</h4>
        ) : !this.props.error ? (
          <form className="new-note-form" onSubmit={this.submitHandler}>
            <h2>Create New Note:</h2>
            <input
              className="title-input"
              name="title"
              type="text"
              placeholder="Note Title"
              value={this.state.title}
              onChange={this.changeHandler}
              required
            />
            <input
              className="content-input"
              name="textBody"
              type="text"
              placeholder="Note Content"
              value={this.state.textBody}
              onChange={this.changeHandler}
              required
            />
            <input type="submit" value="Save" />
          </form>
        ) : (
          <h4 className="error-message">{this.props.error}</h4>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingNote: state.notesReducer.addingNote,
  error: state.notesReducer.error
});

export default connect(
  mapStateToProps,
  { addNote }
)(NewNotePage);
