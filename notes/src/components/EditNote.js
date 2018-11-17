import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { fetchNote, updateNote } from "../actions/actions";

import "../styles/App.css";
import "../styles/CreateNote.css";
import "../styles/Sidebar.css";

class EditNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      id: null,
      edited: false
    };
  }

  componentDidMount() {
        this.props.fetchNote(this.props.match.params.id).then(() => {
            this.setState({
                title: this.props.note.title,
                textBody: this.props.note.textBody,
                id: this.props.note._id
            })
        })
    }

    inputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    editNote = event => {
        event.preventDefault();
        const { title, textBody, id } = this.state;
        let editedNote = {title, textBody, id}
        this.props.updateNote(editedNote);
        this.setState({ edited: true })
    }


  render() {
    return this.state.edited ? 
        <Redirect to="/" /> :
        (
      <div className="componentContainer">
        <h2>Edit Note:</h2>
        <form onSubmit={this.editNote} method="post">
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.inputChange}
            placeholder="Note Title"
          />
          <textarea
            cols="50"
            rows="25"
            name="textBody"
            value={this.state.textBody}
            onChange={this.inputChange}
            placeholder="Note Content"
          />

          <button type="submit" className="sidebarButton createButton">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    note: state.note
  }
}

export default connect(mapStateProps, { fetchNote, updateNote })(EditNote)
