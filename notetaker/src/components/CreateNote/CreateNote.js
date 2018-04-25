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

//   handleSubmitNote = e => {
//     const { notes } = this.state;
//     notes.push(this.state.)
//   }

render() {
  return <div>
    <h2>Create New Note:</h2>
    <div>
      <Form>
        <FormGroup>
          <Input type ="title" name="title" placeholder="Note Title"/>
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="description" placeholder="Note Content"/>
        </FormGroup>
        <Button>Save</Button>
      </Form>
    </div>
    </div>;
  }

}

