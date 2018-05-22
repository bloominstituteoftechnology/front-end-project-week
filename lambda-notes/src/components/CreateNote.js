import React, { Component } from 'react';
// import './App.css';
import { Form, FormGroup, Label, Input, FormText, Container, Button } from 'reactstrap';
import SideBar from './SideBar';

class CreateNote extends Component {
  constructor (props) {
    super(props);
    this.state = {
      noteID: new Date(),
      noteTitle: '',
      noteText: ''
  }
}

handleNoteInput = e => {
    this.setState({[e.target.name]: e.target.value});
};

handleSaveNoteButton = () => {
    const newNote = this.state;
    this.props.notes.push(newNote);
    this.setState({
        noteID: new Date(),
        noteTitle: '',
        noteText: ''
    });
}


  render() {

    return  (
        <div>
            <SideBar />
            <Form>
            <FormGroup>
                <Label for="note-title">Create New Note:</Label>
                <Input onChange={this.handleNoteInput} type="text" name="noteTitle" id={this.state.noteID} placeholder="Note Title" value={this.state.noteTitle} />
            </FormGroup>

            
            <FormGroup>
                <Input onChange={this.handleNoteInput} type="textarea" name="noteText" id={this.state.noteID} placeholder="Note Text" value={this.state.noteText}/>
            </FormGroup>
            
            <Button onClick={this.handleSaveNoteButton} >Save</Button>
            </Form>
        </div>
      );
  }
}

export default CreateNote;
