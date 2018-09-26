import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
      // tags: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = event => {
    event.preventDefault();
    // let tagArray = [];
    // if (Array.isArray(this.state.tags)){
    //     tagArray = this.state.tags;
    // } else {
    //     tagArray = this.state.tags.split(' ').join('').split(',')
    // }
    let newNote = {
      title: this.state.title,
      content: this.state.content
      // tags: tagArray
    };
    this.props.addNote(newNote, this.props.history);
    this.setState({
      title: '',
      content: ''
      // tags: ''
    });
  };

  render() {
    return (
      <div className="form-container">
        <h3>Create New Note:</h3>
        <Form onSubmit={this.addNote} className="note-form">
          <FormGroup>
            <Input
              type="text"
              placeholder="Note Title"
              name="title"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              placeholder="Note Content"
              name="content"
              id="content"
              onChange={this.handleChange}
              value={this.state.content}
              required
            />
          </FormGroup>
          {/* <FormGroup>
                        <Input type="text" placeholder="Note Tags" name="tags" id="tags" onChange={this.handleChange} value={this.state.tags} required></Input>
                    </FormGroup> */}
          <Button className="teal-button">Add</Button>
        </Form>
      </div>
    );
  }
}

export default NoteForm;
