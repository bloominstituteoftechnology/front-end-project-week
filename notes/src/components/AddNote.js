import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';


class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    }
  }

  handleChange= (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({title: "", content: ""});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl type="text" placeholder="Note Title"
                       name="title" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <FormControl componentClass="textarea" placeholder="Note Content"
                       name="content" onChange={this.handleChange} />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    )
  }
}

export default AddNote;