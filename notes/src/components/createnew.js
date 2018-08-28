import React, { Component } from "react";

class CreateNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      title: "",
      textBody: ""
    };
  }

  newNote = e => {
    e.preventDefault();
    const tags = this.state.tags;
    const title = this.state.title;
    const textBody = this.state.textBody;
    this.props.noteList.push({tags: [tags], title: title, textBody: textBody})
    this.setState({
            tags: [],
            title: "",
            textBody: ""
    })
  };


  render() {
    return (
        
      <form onSubmit={this.newNote}>
        {console.log(this.props)}
        <input
          onChange={this.props.handleInputChange}
          placeholder="title"
          value={this.state.title}
          name="title"
        />
        <input
          onChange={this.props.handleInputChange}
          placeholder="tags"
          value={this.state.tags}
          name="tags"
        />
        <input
          onChange={this.props.handleInputChange}
          placeholder="body"
          value={this.state.textBody}
          name="textBody"
        />
        <button onClick={this.newNote}>Submit</button>
      </form>
    );
  }
}

export default CreateNew;
