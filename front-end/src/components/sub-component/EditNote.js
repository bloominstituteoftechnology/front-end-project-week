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
      <div>
        <h1>Note Editor</h1>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <Link to="/note/:id">
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
    );
  }
}

export default EditNote;
