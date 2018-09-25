import React, { Component } from "react";
import Sidebar from "../Sidebar/sidebar";
import { addNote } from "../../actions";
import { connect } from "react-redux";
import "./newnoteform.css";
import { Link } from "react-router-dom";

class NewNoteForm extends Component {
  state = {
    id: -1,
    title: "",
    textBody: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addHandler = () => {
    const { title, textBody } = this.state;
    this.props.addNote({ title, textBody });
    this.setState({ title: "", textBody: "" });
  };

  render() {
    return (
      <div className="create-page-container">
        <Sidebar />
        <div className="section-container">
          <h1 className="notes-title create"> Create New Note: </h1>
          <form className="create-form">
            <textarea
              placeholder="Title"
              onChange={this.handleInputChange}
              className="title-input"
              value={this.state.title}
              name="title"
            />
            <textarea
              placeholder="Type your note here.."
              onChange={this.handleInputChange}
              className="content-input"
              value={this.state.textBody}
              name="textBody"
            />
            <Link to="/">
              <button
                className="create-button"
                type="button"
                onClick={() => this.addHandler()}
              >
                {" "}
                Save{" "}
              </button>
            </Link>
          </form>
        </div>
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
  { addNote }
)(NewNoteForm);
