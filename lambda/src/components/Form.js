import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

//importing Form CSS
import './Form.css';

//Class Component that will render NoteForm and its props
class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "random text",
      note: "ASJIFKHOKF",
      title: "JFLKHAFNJSKF"
    };
  }

  //method will handle the UI
  onChange(event){
    this.setState({note: event.target.value}, {title: event.target.value})
  }
  //methods that handles the change
  handleChange(event){
    console.log('handle change')
  }
  //fires when the submit button is hit
  handleClick (event) {
    console.log('STATE', this.state)
    event.preventDefault()
    this.setState({note: "", title: ""});
    console.log('AFTER', this.state)    
    this.handleChange();
  }


  render() {
    return (
      <Container className="container">
      <Form>
        <FormGroup>
          <Label>Create Note:</Label>
          <Input 
            state={this.state}
            type="text" 
            name="text" 
            placeholder="Note Title" 
            value={this.state.title}/>
        </FormGroup>
          <Input 
            state={this.state}
            type="textarea" 
            name="text"  
            placeholder="Note Content" 
            value={this.state.note}
            onChange={this.handleChange.bind(this)} />
          <Link to="/"> <Button onClick={this.handleClick.bind(this)} color="info">Save</Button></Link>
      </Form>
      </Container>
    );
  }
}

export default NoteForm;