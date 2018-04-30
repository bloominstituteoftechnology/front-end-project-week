import React, { Component } from "react";
import { editNote } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class EditNotes extends Component {
  state = {
    note: {
      title: "",
      text: "",
      id: ""
    },
    redirect: false
  };

  componentDidMount() {
    const item = this.props.notes.filter(
      item => Number(item.id) === Number(this.props.match.params.id)
    )[0];
    console.log(this.state.note);
    this.setState({
      note: {
        title: "",
        text: "",
        id: 0
      }
    });
  }

  updateNote = event => {
    event.preventDefault();
    console.log(this.state.note);
    this.props.editNote(this.state.note);
    this.setState({ redirect: true });
  };

  handleTitleChange = event => {
    const id = this.state.note.id;
    const text = this.state.note.text;
    this.setState({ note: { title: event.target.value, text, id } });
  };

  handleTextChange = event => {
    const id = this.state.note.id;
    const title = this.state.note.title;
    this.setState({ note: { text: event.target.value, title, id } });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <div className="editNotes">
        <h4 className="title">Edit Note:</h4>
        <form onSubmit={this.updateNote}>
          <input
            className="newTitle"
            type="text"
            name="title"
            placeholder="New Title"
            value={this.state.note.title}
            onChange={this.handleTitleChange}
          />
          <input
            className="newContent"
            type="text"
            name="text"
            placeholder="New Content"
            value={this.state.note.text}
            onChange={this.handleTextChange}
          />
          <button className="save" type="submit">
            Update
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { editNote })(EditNotes);
