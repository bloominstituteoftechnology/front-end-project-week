import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: this.props.secondProps.mainProps.noteArray[
        this.props.secondProps.match.params.id
      ],
      title: this.props.secondProps.mainProps.noteArray[
        this.props.secondProps.match.params.id
      ].title,
      content: this.props.secondProps.mainProps.noteArray[
        this.props.secondProps.match.params.id
      ].content
    };
  }

  render() {
    // console.log("EditNote:", this.props.secondProps.mainProps);
    return (
      <div className="Note_Editor">
        <h1>Note Editor</h1>
        <div className="EditNoteContainer">
          <div className="EditInputTitle">
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          </div>
          <div className="EditInputContent">
            <textarea
              className="form-control"
              type="text"
              placeholder="Write your note here!"
              name="content"
              rows="10"
              value={this.state.content}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          </div>
          <div className="EditSaveButton">
            <Link to="/">
              <button
                onClick={() => {
                  this.props.secondProps.mainProps.editNote(
                    {
                      title: this.state.title,
                      content: this.state.content
                    },
                    this.props.secondProps.match.params.id
                  );
                  this.setState({ title: "", content: "" });
                }}
              >
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EditNote;
