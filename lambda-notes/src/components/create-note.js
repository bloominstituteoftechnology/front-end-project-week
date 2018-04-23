import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { saveNote } from '../REDUX/actions';
import { connect } from 'react-redux';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleSaveNote = () => {
    return;
    // const newNote = { title: this.state.title, content: this.state.content };
    // this.props.saveNote(newNote);
    // this.setState({ title: "", content: "" });
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
          <button className="Button col-3" onClick={() => this.handleSaveNote()}>Save</button>
        </Link>
      </div>
    )
  }
}

export default connect(null, { saveNote })(NewNote);