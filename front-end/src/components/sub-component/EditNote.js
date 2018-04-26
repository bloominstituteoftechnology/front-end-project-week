import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  render() {
    console.log("EditNote:", this.props);
    return (
      <div>
        <h1>Note Editor</h1>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content"
          name="content"
          value={this.state.content}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <Link to="/">
          <button
            onClick={() => {
              this.props.mainProps.editNote({
                title: this.state.title,
                content: this.state.content
              });
              this.setState({ title: "", content: "" });
            }}
          >
            Save
          </button>
        </Link>
        {/* <input type="text" value={props.mainProps.noteArray[props.match.params.id].title} /> */}
      </div>
    );
  }
}

export default EditNote;
