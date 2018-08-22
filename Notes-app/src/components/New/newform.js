import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SideBar } from "../Sidebar/sidebar";
import { addNote } from "../../actions";
import "./newform.css";

class NewForm extends Component {
  state = {
    id: -1,
    title: "",
    textBody: ""
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddNote = () => {
    const { title, textBody } = this.state;
    this.props.addNote({ title, textBody });
    this.setState({ title: "", textBody: "" });
  };
  render() {
    return (
      <div className="card-container">
        <SideBar />
        <section className="card">
          <h1 className="new-title">Create New Note:</h1>
          <form className="new-form">
            <input
              className="new-input"
              onChange={this.handleInputChange}
              placeholder="Title"
              value={this.state.title}
              name="title"
            />
            <input
              className="body-text"
              onChange={this.handleInputChange}
              placeholder="Type your note here..."
              value={this.state.textBody}
              name="textBody"
            />
            <Link to="/">
              <button
                className="new-butt"
                type="button"
                onClick={() => this.handleAddNote()}
              >
                Save
              </button>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { notes: state.notes };
};

export default connect(
  mapStateToProps,
  { addNote }
)(NewForm);
