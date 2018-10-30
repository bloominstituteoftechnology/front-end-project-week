import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../actions";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { title, textBody, _id } = props.note;
    this.state = {
      title,
      textBody,
      _id
    };
  }
  componentDidMount() {
    const { title, textBody, _id } = this.props.note;
    this.setState({ title, textBody, _id });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.editNote({ ...this.state });
    this.props.history.push(`/${this.props.note._id}`);
  };

  render() {
    if (this.props.note) {
      return (
        <div className="create-view">
          <h2 className="create-note-header">Edit Note:</h2>
          <form onSubmit={this.onSubmit} className="create-form">
            <input
              name="title"
              value={this.state.title}
              className="title-input"
              onChange={this.onChange}
            />
            <textarea
              name="textBody"
              value={this.state.textBody}
              onChange={this.onChange}
              className="content-input"
            />
            <button type="submit" className="save-button">
              Update
            </button>
          </form>
        </div>
      );
    } else {
      return <h4>BAHHHHHH</h4>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    note: state.note.find(note => note._id === id)
  };
};

export default connect(
  mapStateToProps,
  { editNote }
)(NoteForm);
