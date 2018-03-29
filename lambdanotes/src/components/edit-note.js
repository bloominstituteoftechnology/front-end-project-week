import React, { Component } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import './edit-note.css'

class EditOldNote extends Component {
  state = {
    title: this.props.location.state.default.title,
    text: this.props.location.state.default.text,
    tags: [],
    showTag: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.edit(this.state, this.props.match.params.id);
    this.setState({ title: '', text: '' });
    this.props.history.push('/');
  };

  handleReveal = event => {
    event.preventDefault();
    this.setState({ showTag: !this.state.showTag });
  };

  render() {
    return (
      <div className="edit-note">
        <h4 className="note-title">Edit Note:</h4>
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
            className="content-text"
            type="textarea"
            name="text"
            placeholder="Note Content"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </FormGroup>
        <div className="edit-add-note">
          <Button className="save-button" onClick={this.handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default EditOldNote;
