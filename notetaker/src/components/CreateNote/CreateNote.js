import  React, { Component }  from 'react';
import { Button, Form, FormGroup, Label, Input, Formtext } from 'reactstrap';
import './CreateNote.css';

export default class extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleInput = e => {
    this.setState ({ [e.target.name]: e.target.value });
  };

  handleSubmitNote = e => {
    this.props.addNewNote(this.state);
    this.props.editNote(this.state);
  }

  

render() {
  return <div>
      <h2>Create New Note:</h2>
      <div>
        <Form>
          <FormGroup>
            <Input onChange={this.handleInput} type="title" name="title" placeholder="Note Title" />
          </FormGroup>
          <FormGroup>
            <Input onChange={this.handleInput} type="textarea" name="description" placeholder="Note Content" />
          </FormGroup>
          <Button onClick={this.handleSubmitNote}>Save</Button>
        </Form>
      </div>
    </div>;
  }

}

