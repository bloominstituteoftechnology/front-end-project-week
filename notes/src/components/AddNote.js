import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { addNote } from '../actions';
import { connect } from 'react-redux';

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
    this.props.history.push("/view");
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl type="text" placeholder="Note Title"
                       name="title" onChange={this.handleChange}
                       value={this.state.title} />
        </FormGroup>
        <FormGroup>
          <FormControl componentClass="textarea" placeholder="Note Content"
                       name="content" onChange={this.handleChange}
                       value={this.state.content} />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    )
  }
}

export default withRouter(connect(null, { addNote })(AddNote));