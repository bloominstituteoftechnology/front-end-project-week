import React, { Component } from "react";
import { connect } from "react-redux";

import { updateNote } from "../actions/noteActions";
import "../App.css";

class UpdateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    const { notes, match } = this.props;
    const notez = notes.find(item => `${item.id}` === match.params.id);
    console.log(notez);
    this.setState(notez);
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.updateNote(this.state);
    this.props.history.push("/NoteList");
    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <h1>Edit Note</h1>
        <input
          className="form-input"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.inputHandler}
          placeholder="New Title"
        />
        <textarea
          className="text-area"
          type="text"
          name="textBody"
          cols="80"
          rows="30"
          value={this.state.textBody}
          onChange={this.inputHandler}
          placeholder="New Content"
        />
        <div className="form-btn" color="info" onClick={this.submitHandler}>
          Update
        </div>
      </form>
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
  { updateNote }
)(UpdateNote);
