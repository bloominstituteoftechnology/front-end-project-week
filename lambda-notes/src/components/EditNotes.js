import React, { Component } from "react";
import { editNote } from "../actions";
import { connect } from "react-redux";

class EditNotes extends Component {
  state = {
    id: 0,
    name: "",
    text: ""
  };

  componentDidMount() {
    this.setState({ id: parseInt(this.props.match.params.id, 10) });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="editNotes">
        <h4 className="title">Edit Note:</h4>
        <form>
          <input
            className="newTitle"
            type="text"
            name="name"
            placeholder="New Title"
            onChange={this.handleChange}
          />
          <input
            className="newContent"
            type="text"
            name="text"
            placeholder="New Content"
            onChange={this.handleChange}
          />
          <button
            className="save"
            onClick={() => this.props.editNote(this.state)}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { editNote })(EditNotes);
