import React, { Component } from 'react';
// import './App.css';
import { Form, FormGroup, Label, Input, FormText, Container, Button } from 'reactstrap';
import SideBar from './SideBar';

class CreateNote extends Component {
  constructor (props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent: ''
  }
}

  render() {

    return  (
        <div>
            <SideBar />
            <Form>
            <FormGroup>
                <Label for="note-title">Edit Note:</Label>
                <Input type="text" name="note-title" id="note-title" placeholder="Note Title" value={this.state.noteTitle} />
            </FormGroup>

            
            <FormGroup>
                <Input type="textarea" name="note-content" id="note-content" placeholder="Note Content" value={this.state.noteContent}/>
            </FormGroup>
            
            <Button>Update</Button>
            </Form>
        </div>
      );
  }
}

export default CreateNote;
