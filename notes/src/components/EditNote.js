import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { fetchNote, updateNote, fetchNotes } from "../actions/actions";

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
      edited: false,
      tags: []
    };
  }

  componentDidMount() {
        this.props.fetchNotes()
        this.props.fetchNote(this.props.match.params.id).then(() => {
            this.setState({
                title: this.props.note.title,
                textBody: this.props.note.textBody,
                id: this.props.note._id,
                tags: this.props.tags.filter(tag => tag.id === this.props.note._id)
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
        // let oldTags = this.props.tags.filter(tag => tag !== this.props.note._id);
        let editedNote = {title, textBody, id}
        this.props.updateNote(editedNote)
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

        <div className="tagInput">
          <div className="inputBox">
            <input
              type="text"
              name="tag"
              value={this.state.tags}
              onChange={this.inputChange}
              placeholder="Note Tag"
            />
            <button
              className="sidebarButton createButton"
              onClick={this.newTagHandler}
            >
              Add New Tag
            </button>
          </div>
        </div>
        <div>
          <h3>Tags:</h3>
          {this.state.tags.map(tag => (
            <span key={tag.date}>{`#${tag.tagText},`}</span>
          ))}
        </div>
      </div>
    //   </div>
    );
  }
}

const mapStateProps = state => {
  return {
    note: state.note,
    tags: state.tags
  }
}

export default connect(mapStateProps, { fetchNote, updateNote, fetchNotes })(EditNote)
