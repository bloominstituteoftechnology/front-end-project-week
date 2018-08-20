import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "ADD",
      title: "",
      body: ""
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      const filtNote = this.props.notes.filter(e => {
        if (e.id === Number(this.props.match.params.id)) {
          return e;
        }
      });
      if (filtNote[0]) {
        this.setState({
          title: filtNote[0].title,
          body: filtNote[0].body,
          mode: "EDIT"
        });
      }
    }
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      if (this.props.match.params.id) {
        const filtNote = this.props.notes.filter(e => {
          if (e.id === Number(this.props.match.params.id)) {
            return e;
          }
        });
        if (filtNote[0]) {
          this.setState({
            title: filtNote[0].title,
            body: filtNote[0].body,
            mode: "EDIT"
          });
        }
      }
    }
  }
  render() {
    return (
      <div className="notesViewContainer">
        <div className="viewTitle">
          {this.state.mode === "ADD" ? "Create New" : "Edit"} Note:
        </div>
        <form
          className="formLayout"
          id="createNoteForm"
          onSubmit={this.props.addNote}
        >
          <input
            type="text"
            className="notesubmit"
            placeholder={
              this.state.mode === "ADD" ? "Note Title" : ''
            }
            name='title'
            value={this.state.title}
            onChange={this.handleInputChange}

          />
          <textarea
            className="notesubmit"
            form="createNoteForm"
            name='body'
            placeholder={
              this.state.mode === "ADD" ? "Note Content" :''
            }
            value={this.state.body}

            onChange={this.handleInputChange}

          ></textarea>
          <button className="sidebarButton">
            {this.state.mode === "ADD" ? "Save" : "Update"}
          </button>
        </form>
      </div>
    );
  }
}

CreateNote.propTypes = {};

export default CreateNote;
