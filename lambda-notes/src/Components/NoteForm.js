import React, { Component } from "react";
import {
  Collapse,
  Button,
  FormGroup,
  Input,
  Col,
  Row,
  InputGroup,
  InputGroupAddon,
 
} from "reactstrap";
import axios from "axios";
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textbody: ""
    };
  }

  addNote = event => {

    console.log('i ran', )
    const note = {};
    if (this.state.title !== "") {
      note.title = this.state.title;
    }
    if (this.state.textbody !== "") {
      note.textbody = this.state.textbody;
    }
    axios
      .post("http://localhost:5000/notes", note)
      .then(response => {
    this.props.updateGet()
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      title: "",
      textbody: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <InputGroup onSubmit={this.addNote}>
          <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
          <Input
           onChange={this.handleInputChange}
           placeholder="title..."
           value={this.state.title}
           name="title"
          />
        </InputGroup>
      
        <InputGroup size="sm">
          <InputGroupAddon addonType="prepend">Text</InputGroupAddon>
          <Input  className="textarea-styles" type="textarea" 
           onChange={this.handleInputChange}
           placeholder="Text..."
           value={this.state.textbody}
           name="textbody"/>
        </InputGroup>
        <Button color="success" className="friendBtn-style" onClick={this.addNote} type="submit">Add Friend</Button>

      </React.Fragment>
    );
  }
}

export default NoteForm;
