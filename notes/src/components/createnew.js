import React, { Component } from "react";
import {Link} from 'react-router-dom';

class CreateNew extends Component {

  render() {
    return (
        
      <form onSubmit={this.props.newNote}>
        {console.log(this.props)}
        <input
          onChange={this.props.handleInputChange}
          placeholder="title"
          value={this.props.title}
          name="title"
        />
        <input
          onChange={this.props.handleInputChange}
          placeholder="tags"
          value={this.props.tags}
          name="tags"
        />
        <input
          onChange={this.props.handleInputChange}
          placeholder="body"
          value={this.props.textBody}
          name="textBody"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default CreateNew;
