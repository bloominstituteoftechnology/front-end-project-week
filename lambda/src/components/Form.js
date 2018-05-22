import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

//importing Form CSS
import './Form.css';

class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      note: ""
    };
  }

  onChange(event){
    this.setState({note: event.target.value}, {title: event.target.value})
  }

  handleChange(event){
    this.setState({note: event.target.value}, {title: event.target.value})
  }


  render() {
    return (
      <Container className="container">
      <Form>
        <FormGroup>
          <Label>Create Note:</Label>
          <Input 
            type="text" 
            name="title" 
            placeholder="Note Title" 
            value={this.state.title}/>
        </FormGroup>
          <Input 
            type="textarea" 
            name="note"  
            placeholder="Note Content" 
            value={this.state.note}
            onChange={this.handleChange} />
          <Link to="/"> <Button onSubmit={this.onChange} color="info">Save</Button></Link>
      </Form>
      </Container>
    );
  }
}

export default NoteForm;