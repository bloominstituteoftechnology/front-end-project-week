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
  Form
 
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
      .post("https://notes-back-end.herokuapp.com/notes", note)
      .then(response => {
    //     this.props.toggle()
    // this.props.updateGet()
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
        
        <Form onSubmit={this.addNote} className="form-styles">
        <InputGroup >
       
          <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
          <Input
           onChange={this.handleInputChange}
           placeholder="title..."
           value={this.state.title}
           onSubmit={this.addNote}
           name="title"
          />
        </InputGroup>
      
        <InputGroup size="sm">
          <InputGroupAddon addonType="prepend">Text</InputGroupAddon>
          <Input 
           className="textarea-styles"
           type="textarea" 
           onChange={this.handleInputChange}
           placeholder="Text..."
           onSubmit={this.addNote}
           value={this.state.textbody}
           name="textbody"/>
        </InputGroup>
        <Row className="modalBtn-styles">
          <Col xs="auto">
        <Button color="success" className="noteBtn-style" onClick={this.addNote} type="submit">Add Note</Button>
            </Col>
          <Col xs="auto">
        <Button color="danger" className="noteBtn-style cancelBtn-styles" onClick={this.props.toggle} >Cancel</Button>
        </Col>
        
        </Row>
</Form>
      </React.Fragment>
    );
  }
}

export default NoteForm;
