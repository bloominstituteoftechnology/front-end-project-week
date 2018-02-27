import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";
import { Link } from 'react-router-dom';

class CreateView extends Component {
  state = {
    title: "",
    text: ""
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
            <button><Link to='/'>Save</Link></button>
          </form>
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addNote(this.state);
  };
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { addNote })(CreateView);
