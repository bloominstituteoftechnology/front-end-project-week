import React, { Component } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import './create-note.css'

class CreateNote extends Component {
  state = {
    title: '',
    text: '',
    tags: [],
    showTag: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({ title: '', text: '' });
    this.props.history.push('/');
  };

  handleReveal = event => {
    event.preventDefault();
    this.setState({ showTag: !this.state.showTag });
  };

  render() {
    return (
      <div className="add-note-bg">
        <h4 className="note-title">Create New Note:</h4>
        <FormGroup>
          <Input
            className="title-text"
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Input
            className="title-text"
            type="textarea"
            name="text"
            placeholder="Note Content"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </FormGroup>
        <div className="addnote-button">
          <Button className="save-button" onClick={this.handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default CreateNote;
