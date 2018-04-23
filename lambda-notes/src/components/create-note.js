import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
;
export default class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  render() {
    return (
      <div className="PrimaryContainer__newNote">
        <h1 className="PrimaryContainer__header">Create New Note:</h1>
        <Input 
          type="text"
          className="col-7"
          name="title"
          placeholder="Note Title"
          value={this.state.title}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <br/>
        <Input 
          type="textarea"
          name="content"
          placeholder="Note Content"
          value={this.state.content}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <br/>
        <Link to="/">
          <button className="Button col-3">Save</button>
        </Link>
      </div>
    )
  }
}